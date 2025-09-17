var TimeCalibration = (function() {
    'use strict';
    
    var timeOffset = 0;
    var isCalibrated = false;
    var timeUpdateInterval = null;
    
    function updateTimeDisplay() {
        var now = new Date();
        if (typeof ui !== 'undefined' && ui.currentTime) {
            ui.currentTime.setText(formatTime(now));
        }
        
        if (isCalibrated && typeof ui !== 'undefined' && ui.calibratedTime) {
            var calibrated = new Date(now.getTime() + timeOffset);
            ui.calibratedTime.setText(formatTime(calibrated));
        }
    }

    function formatTime(date) {
        return date.getFullYear() + "-" + 
               String(date.getMonth() + 1).padStart(2, '0') + "-" + 
               String(date.getDate()).padStart(2, '0') + " " + 
               String(date.getHours()).padStart(2, '0') + ":" + 
               String(date.getMinutes()).padStart(2, '0') + ":" + 
               String(date.getSeconds()).padStart(2, '0');
    }

    function startTimeUpdate() {
        if (!timeUpdateInterval) {
            updateTimeDisplay();
            timeUpdateInterval = setInterval(updateTimeDisplay, 1000);
        }
    }

    function stopTimeUpdate() {
        if (timeUpdateInterval) {
            clearInterval(timeUpdateInterval);
            timeUpdateInterval = null;
        }
    }
    
    function setupTimeButtons() {
        if (typeof ui === 'undefined') return;
        
        ui.btnTaobao.click(function() {
            if (ui.calibrationStatus) {
                ui.calibrationStatus.setText("正在获取淘宝时间...");
            }
            
            threads.start(function() {
                var apis = [
                    {
                        url: "http://api.m.taobao.com/rest/api3.do?api=mtop.common.getTimestamp",
                        parser: function(data) {
                            if (data && data.data && data.data.t) {
                                return parseInt(data.data.t);
                            }
                            return null;
                        }
                    },
                    {
                        url: "https://h5api.m.taobao.com/h5/mtop.common.gettimestamp/1.0/",
                        parser: function(data) {
                            if (data && data.data && data.data.t) {
                                return parseInt(data.data.t);
                            }
                            return null;
                        }
                    },
                    {
                        url: "http://quan.suning.com/getSysTime.do",
                        parser: function(data) {
                            if (data && data.sysTime2) {
                                return parseInt(data.sysTime2);
                            }
                            return null;
                        }
                    }
                ];
                
                function tryApi(index) {
                    if (index >= apis.length) {
                        ui.run(function() {
                            if (ui.calibrationStatus) {
                                ui.calibrationStatus.setText("所有淘宝时间API都失败了");
                            }
                            toast("淘宝时间校准失败");
                        });
                        return;
                    }
                    
                    try {
                        var api = apis[index];
                        var res = http.get(api.url, {
                            headers: {
                                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
                            }
                        });
                        
                        if (res.statusCode == 200) {
                            var data = res.body.json();
                            var serverTime = api.parser(data);
                            
                            if (serverTime) {
                                var localTime = Date.now();
                                timeOffset = serverTime - localTime;
                                isCalibrated = true;
                                
                                ui.run(function() {
                                    if (ui.calibrationStatus) {
                                        ui.calibrationStatus.setText("淘宝时间校准成功！");
                                    }
                                    if (ui.timeDiff) {
                                        ui.timeDiff.setText("时间差: " + timeOffset + " 毫秒");
                                    }
                                    if (ui.calibrationMessage && typeof CONFIG !== 'undefined') {
                                        ui.calibrationMessage.setText(CONFIG.TIME_TEXT.TAOBAO_MESSAGE);
                                    }
                                    toast("淘宝时间校准成功");
                                });
                                return;
                            }
                        }
                        
                        tryApi(index + 1);
                        
                    } catch (e) {
                        tryApi(index + 1);
                    }
                }
                
                tryApi(0);
            });
        });

        ui.btnBeijing.click(function() {
            if (ui.calibrationStatus) {
                ui.calibrationStatus.setText("正在获取北京时间...");
            }
            
            threads.start(function() {
                var apis = [
                    {
                        url: "https://f.m.suning.com/api/ct.do",
                        parser: function(data) {
                            if (data && data.currentTime) {
                                return parseInt(data.currentTime);
                            }
                            return null;
                        }
                    },
                    {
                        url: "http://quan.suning.com/getSysTime.do",
                        parser: function(data) {
                            if (data && data.sysTime2) {
                                return parseInt(data.sysTime2);
                            }
                            return null;
                        }
                    },
                    {
                        url: "http://capi.douyucdn.cn/api/v1/gettime",
                        parser: function(data) {
                            if (data && data.data) {
                                return parseInt(data.data) * 1000;
                            }
                            return null;
                        }
                    }
                ];
                
                function tryApi(index) {
                    if (index >= apis.length) {
                        ui.run(function() {
                            if (ui.calibrationStatus) {
                                ui.calibrationStatus.setText("所有北京时间API都失败了");
                            }
                            toast("北京时间校准失败");
                        });
                        return;
                    }
                    
                    try {
                        var api = apis[index];
                        var res = http.get(api.url, {
                            headers: {
                                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
                                'Accept': 'application/json, text/plain, */*'
                            },
                            timeout: 8000
                        });
                        
                        if (res.statusCode == 200) {
                            var data;
                            try {
                                data = res.body.json();
                            } catch (e) {
                                data = res.body.string();
                            }
                            
                            var serverTime = api.parser(data);
                            
                            if (serverTime && serverTime > 0) {
                                var localTime = Date.now();
                                timeOffset = serverTime - localTime;
                                isCalibrated = true;
                                
                                ui.run(function() {
                                    if (ui.calibrationStatus) {
                                        ui.calibrationStatus.setText("北京时间校准成功！");
                                    }
                                    if (ui.timeDiff) {
                                        ui.timeDiff.setText("时间差: " + timeOffset + " 毫秒");
                                    }
                                    if (ui.calibrationMessage && typeof CONFIG !== 'undefined') {
                                        ui.calibrationMessage.setText(CONFIG.TIME_TEXT.BEIJING_MESSAGE);
                                    }
                                    toast("北京时间校准成功");
                                });
                                return;
                            }
                        }
                        
                        tryApi(index + 1);
                        
                    } catch (e) {
                        tryApi(index + 1);
                    }
                }
                
                tryApi(0);
            });
        });

        ui.btnTencent.click(function() {
            if (ui.calibrationStatus) {
                ui.calibrationStatus.setText("正在获取腾讯时间...");
            }
            
            threads.start(function() {
                var apis = [
                    {
                        name: "腾讯云时间",
                        url: "https://api.tencentcloud.com/timestamp",
                        parser: function(data) {
                            if (data && data.timestamp) {
                                return parseInt(data.timestamp) * 1000;
                            }
                            if (typeof data === 'string' && !isNaN(data)) {
                                var timestamp = parseInt(data);
                                return timestamp.toString().length <= 10 ? timestamp * 1000 : timestamp;
                            }
                            if (typeof data === 'number') {
                                return data.toString().length <= 10 ? data * 1000 : data;
                            }
                            return null;
                        }
                    },
                    {
                        name: "苏宁时间",
                        url: "https://f.m.suning.com/api/ct.do",
                        parser: function(data) {
                            if (data && data.currentTime) {
                                return parseInt(data.currentTime);
                            }
                            return null;
                        }
                    },
                    {
                        name: "京东时间",
                        url: "https://a.jd.com//ajax/queryServerData.html",
                        parser: function(data) {
                            if (data && data.serverTime) {
                                return parseInt(data.serverTime);
                            }
                            return null;
                        }
                    },
                    {
                        name: "斗鱼时间",
                        url: "http://capi.douyucdn.cn/api/v1/gettime",
                        parser: function(data) {
                            if (data && data.data) {
                                return parseInt(data.data) * 1000;
                            }
                            return null;
                        }
                    }
                ];
                
                function tryApi(index) {
                    if (index >= apis.length) {
                        ui.run(function() {
                            if (ui.calibrationStatus) {
                                ui.calibrationStatus.setText("所有腾讯时间API都失败了");
                            }
                            toast("腾讯时间校准失败");
                        });
                        return;
                    }
                    
                    try {
                        var api = apis[index];
                        var res = http.get(api.url, {
                            headers: {
                                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
                                'Accept': 'application/json, text/plain, */*'
                            },
                            timeout: 8000
                        });
                        
                        if (res.statusCode == 200) {
                            var data;
                            try {
                                data = res.body.json();
                            } catch (e) {
                                var textData = res.body.string().trim();
                                if (!isNaN(textData) && textData.length >= 10) {
                                    data = textData;
                                } else {
                                    data = null;
                                }
                            }
                            
                            var serverTime = api.parser(data);
                            
                            if (serverTime && serverTime > 0) {
                                var localTime = Date.now();
                                timeOffset = serverTime - localTime;
                                isCalibrated = true;
                                
                                ui.run(function() {
                                    if (ui.calibrationStatus) {
                                        ui.calibrationStatus.setText("腾讯时间校准成功！");
                                    }
                                    if (ui.timeDiff) {
                                        ui.timeDiff.setText("时间差: " + timeOffset + " 毫秒");
                                    }
                                    if (ui.calibrationMessage && typeof CONFIG !== 'undefined') {
                                        ui.calibrationMessage.setText(CONFIG.TIME_TEXT.TENCENT_MESSAGE);
                                    }
                                    toast("腾讯时间校准成功");
                                });
                                return;
                            }
                        }
                        
                        tryApi(index + 1);
                        
                    } catch (e) {
                        tryApi(index + 1);
                    }
                }
                
                tryApi(0);
            });
        });

        ui.btnSaveCalibration.click(function() {
            if (!isCalibrated) {
                toast("请先进行时间校准");
                return;
            }
            
            var storage = storages.create("timeCalibration");
            storage.put("offset", timeOffset);
            storage.put("timestamp", Date.now());
            storage.put("calibrated", true);
            
            if (ui.calibrationStatus) {
                ui.calibrationStatus.setText("校准结果已保存");
            }
            toast("时间校准已保存");
        });

        ui.btnResetCalibration.click(function() {
            timeOffset = 0;
            isCalibrated = false;
            
            var storage = storages.create("timeCalibration");
            storage.clear();
            
            if (ui.calibrationStatus) {
                ui.calibrationStatus.setText("校准已重置");
            }
            if (ui.timeDiff) {
                ui.timeDiff.setText("时间差: 0 毫秒");
            }
            if (ui.calibratedTime) {
                ui.calibratedTime.setText("未校准");
            }
            if (ui.calibrationMessage) {
                ui.calibrationMessage.setText("选择校准方式开始");
            }
            
            toast("校准已重置");
        });

        ui.btnTestCalibration.click(function() {
            if (!isCalibrated) {
                toast("请先进行时间校准");
                return;
            }
            
            var now = new Date();
            var calibrated = new Date(now.getTime() + timeOffset);
            
            dialogs.alert("时间校准测试", 
                "系统时间: " + formatTime(now) + "\n" +
                "校准时间: " + formatTime(calibrated) + "\n" +
                "时间差: " + timeOffset + " 毫秒");
        });
    }

    function loadSavedCalibration() {
        var storage = storages.create("timeCalibration");
        var savedOffset = storage.get("offset", 0);
        var savedCalibrated = storage.get("calibrated", false);
        
        if (savedCalibrated && savedOffset != 0) {
            timeOffset = savedOffset;
            isCalibrated = true;
            
            if (typeof ui !== 'undefined') {
                if (ui.calibrationStatus) {
                    ui.calibrationStatus.setText("已加载之前的校准数据");
                }
                if (ui.timeDiff) {
                    ui.timeDiff.setText("时间差: " + timeOffset + " 毫秒");
                }
                if (ui.calibrationMessage) {
                    ui.calibrationMessage.setText("已加载校准数据");
                }
            }
            toast("已加载之前的校准数据");
        }
    }
    
    
    return {
        updateTimeDisplay: updateTimeDisplay,
        formatTime: formatTime,
        startTimeUpdate: startTimeUpdate,
        stopTimeUpdate: stopTimeUpdate,
        setupTimeButtons: setupTimeButtons,
        loadSavedCalibration: loadSavedCalibration,
        getTimeOffset: function() { return timeOffset; },
        isCalibrated: function() { return isCalibrated; }
    };
})();


if (typeof module !== 'undefined' && module.exports) {
    module.exports = TimeCalibration;
}
