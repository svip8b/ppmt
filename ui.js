var UIModule = (function() {
    'use strict';
    
    var currentTab = 0;
    var tabs = null;
    var isTimeWidgetExpanded = false;
    var timeUpdateInterval = null;
    
    function createMainLayout() {
        ui.statusBarColor(CONFIG.COLORS.PRIMARY);

        ui.layout(
            <vertical bg={CONFIG.COLORS.BACKGROUND}>
                <frame h="56" bg={CONFIG.COLORS.PRIMARY}>
                    <horizontal gravity="center_vertical" padding="16 0">
                        <text text={CONFIG.APP.NAME} textSize="20sp" textColor="#FFFFFF" textStyle="bold"/>
                        <View layout_weight="1"/>
                        <text text={"v" + CONFIG.APP.VERSION} textSize="12sp" textColor="#FFE0B2"/>
                    </horizontal>
                </frame>
                
                <card margin="12 12 12 6" cardCornerRadius="12" cardElevation="2">
                    <horizontal id="tabLayout" bg={CONFIG.COLORS.CARD} padding="4">
                        <button id="tab1" text={CONFIG.APP.TABS[0]} 
                                w="0" layout_weight="1" h="40" 
                                bg={CONFIG.COLORS.PRIMARY} textColor="#FFFFFF"
                                margin="2" style="Widget.AppCompat.Button.Borderless"/>
                        <button id="tab2" text={CONFIG.APP.TABS[1]} 
                                w="0" layout_weight="1" h="40"
                                bg={CONFIG.COLORS.BORDER} textColor={CONFIG.COLORS.TEXT_SECONDARY}
                                margin="2" style="Widget.AppCompat.Button.Borderless"/>
                        <button id="tab3" text={CONFIG.APP.TABS[2]} 
                                w="0" layout_weight="1" h="40"
                                bg={CONFIG.COLORS.BORDER} textColor={CONFIG.COLORS.TEXT_SECONDARY}
                                margin="2" style="Widget.AppCompat.Button.Borderless"/>
                    </horizontal>
                </card>
                
                <viewpager id="viewpager" layout_weight="1">
                    
                    <frame>
                        <ScrollView>
                            <vertical padding="20">
                                <card w="*" h="auto" cardCornerRadius="12" cardElevation="4" 
                                      marginBottom="20">
                                    <vertical padding="20">
                                        <horizontal gravity="center" marginBottom="20">
                                            <img id="scriptIcon" src="@drawable/ic_play_arrow_black_48dp" 
                                                 w="32" h="32" tint={CONFIG.COLORS.PRIMARY}/>
                                            <text text="脚本控制" textSize="20sp" 
                                                  textColor={CONFIG.COLORS.TEXT_PRIMARY}
                                                  textStyle="bold" marginLeft="8"/>
                                        </horizontal>
                                        
                                        <text text="点击下方按钮启动或停止脚本" textSize="16sp" 
                                              textColor={CONFIG.COLORS.TEXT_PRIMARY}
                                              marginBottom="12" gravity="center"/>
                                        
                                        <button id="scriptControlBtn" text="启动脚本" 
                                                bg={CONFIG.COLORS.PRIMARY} textColor="#FFFFFF"
                                                w="*" h="48"
                                                style="Widget.AppCompat.Button.Borderless"/>
                                    </vertical>
                                </card>
                                
                                <card w="*" h="auto" cardCornerRadius="12" cardElevation="4" 
                                      marginBottom="20">
                                    <vertical padding="20">
                                        <horizontal gravity="center" marginBottom="20">
                                            <img src="@drawable/ic_security_black_48dp" 
                                                 w="32" h="32" tint={CONFIG.COLORS.SECONDARY}/>
                                            <text text="二级指令系统" textSize="20sp" 
                                                  textColor={CONFIG.COLORS.TEXT_PRIMARY}
                                                  textStyle="bold" marginLeft="8"/>
                                        </horizontal>
                                        
                                        <text text="激活高级功能模块" textSize="16sp" 
                                              textColor={CONFIG.COLORS.TEXT_PRIMARY}
                                              marginBottom="12" gravity="center"/>
                                        
                                        <button id="activateCommandBtn" text="激活二级指令与FB" 
                                                bg={CONFIG.COLORS.SECONDARY} textColor="#FFFFFF"
                                                w="*" h="48"
                                                style="Widget.AppCompat.Button.Borderless"/>
                                    </vertical>
                                </card>
                                
                                <card w="*" h="auto" cardCornerRadius="8" cardElevation="2">
                                    <vertical padding="16">
                                        <text text="使用说明" textSize="16sp" textColor={CONFIG.COLORS.PRIMARY} 
                                              textStyle="bold" marginBottom="8"/>
                                        <text text="• 点击启动按钮运行脚本&#10;• 运行中可点击停止按钮终止&#10;• 停止后脚本将恢复初始状态&#10;• 确保已授予必要权限" 
                                              textSize="12sp" textColor={CONFIG.COLORS.TEXT_SECONDARY}
                                              lineSpacingExtra="4dp"/>
                                    </vertical>
                                </card>
                            </vertical>
                        </ScrollView>
                    </frame>
                    
                    <frame>
                        <ScrollView>
                            <vertical padding="20">
                                <card w="*" h="auto" cardCornerRadius="12" cardElevation="4" 
                                      marginBottom="20">
                                    <vertical padding="20">
                                        <horizontal gravity="center" marginBottom="20">
                                            <img src="@drawable/ic_lock_black_48dp" 
                                                 w="32" h="32" tint={CONFIG.COLORS.SECONDARY}/>
                                            <text text="激活系统" textSize="20sp" 
                                                  textColor={CONFIG.COLORS.TEXT_PRIMARY}
                                                  textStyle="bold" marginLeft="8"/>
                                        </horizontal>
                                        
                                        <text text="请输入激活码" textSize="16sp" 
                                              textColor={CONFIG.COLORS.TEXT_PRIMARY}
                                              marginBottom="12"/>
                                        
                                        <input id="activationCode" hint="输入激活码..." 
                                               inputType="textVisiblePassword"
                                               bg="#FFF3E0" padding="12 16"
                                               textSize="14sp"/>
                                        
                                        <button id="activateBtn" text="激活" 
                                                bg={CONFIG.COLORS.SECONDARY} textColor="#FFFFFF"
                                                w="*" h="48" marginTop="16"
                                                style="Widget.AppCompat.Button.Borderless"/>
                                    </vertical>
                                </card>
                                
                                <card w="*" h="auto" cardCornerRadius="8" cardElevation="2">
                                    <vertical padding="16">
                                        <text text="桃音功能" textSize="16sp" 
                                              textColor={CONFIG.COLORS.SECONDARY}
                                              textStyle="bold" marginBottom="8"/>
                                        <text text="       • 不做解释&#10;• 自己想象&#10;• 多场景应用&#10;• 不能明说•" 
                                              textSize="12sp" textColor={CONFIG.COLORS.TEXT_SECONDARY}
                                              lineSpacingExtra="4dp"/>
                                        <text text="某些原因，暂时不开放，敬请期待..." 
                                              textSize="12sp" textColor={CONFIG.COLORS.WARNING}
                                              marginTop="8" gravity="center"/>
                                    </vertical>
                                </card>
                            </vertical>
                        </ScrollView>
                    </frame>
                    
                    <frame>
                        <ScrollView>
                            <vertical padding="12">
                                <horizontal gravity="center_vertical" margin="8 0 8 12">
                                    <img src="@drawable/ic_widgets_black_48dp" 
                                         w="24" h="24" tint={CONFIG.COLORS.ACCENT}/>
                                    <text text="小组件集合" textSize="18sp" 
                                          textColor={CONFIG.COLORS.TEXT_PRIMARY}
                                          textStyle="bold" marginLeft="8"/>
                                </horizontal>
                                
                                <card w="*" h="auto" margin="8 4" cardCornerRadius="8" cardElevation="3"
                                      id="timeCalibrationCard">
                                    <vertical>
                                        <horizontal bg={CONFIG.COLORS.ACCENT} padding="12 8">
                                            <img src="@drawable/ic_access_time_black_48dp" 
                                                 w="20" h="20" tint="#FFFFFF"/>
                                            <text text="网络时间校准" textSize="14sp" 
                                                  textColor="#FFFFFF" marginLeft="6"/>
                                            <View layout_weight="1"/>
                                            <text id="expandTimeWidget" text="展开" textSize="12sp" 
                                                  textColor="#FFFFFF" padding="4 2"/>
                                        </horizontal>
                                        
                                        <vertical id="timeCalibrationContent" visibility="gone" padding="12" bg="#FFF8F3">
                                            <horizontal marginBottom="8">
                                                <text text="系统时间: " textSize="12sp" 
                                                      textColor={CONFIG.COLORS.TEXT_PRIMARY}/>
                                                <text id="currentTime" text="--:--:--" textSize="12sp" 
                                                      textColor={CONFIG.COLORS.TEXT_SECONDARY}/>
                                            </horizontal>
                                            
                                            <horizontal marginBottom="12">
                                                <text text="校准时间: " textSize="12sp" 
                                                      textColor={CONFIG.COLORS.TEXT_PRIMARY}/>
                                                <text id="calibratedTime" text="未校准" textSize="12sp" 
                                                      textColor={CONFIG.COLORS.SUCCESS}/>
                                            </horizontal>
                                            
                                            <text text="选择校准方式" textSize="13sp" textColor={CONFIG.COLORS.PRIMARY} 
                                                  gravity="center" marginBottom="8"/>
                                            
                                            <horizontal marginBottom="8">
                                                <button id="btnTaobao" text="淘宝时间" 
                                                        bg={CONFIG.COLORS.SUCCESS} textColor="#FFFFFF"
                                                        w="0" layout_weight="1" h="36" margin="2"
                                                        textSize="11sp" style="Widget.AppCompat.Button.Borderless"/>
                                                <button id="btnBeijing" text="北京时间" 
                                                        bg={CONFIG.COLORS.PRIMARY} textColor="#FFFFFF"
                                                        w="0" layout_weight="1" h="36" margin="2"
                                                        textSize="11sp" style="Widget.AppCompat.Button.Borderless"/>
                                                <button id="btnTencent" text="腾讯时间" 
                                                        bg={CONFIG.COLORS.WARNING} textColor="#FFFFFF"
                                                        w="0" layout_weight="1" h="36" margin="2"
                                                        textSize="11sp" style="Widget.AppCompat.Button.Borderless"/>
                                            </horizontal>
                                            
                                            <horizontal marginBottom="8">
                                                <button id="btnSaveCalibration" text="保存校准" 
                                                        bg={CONFIG.COLORS.INFO} textColor="#FFFFFF"
                                                        w="0" layout_weight="1" h="36" margin="2"
                                                        textSize="11sp" style="Widget.AppCompat.Button.Borderless"/>
                                                <button id="btnResetCalibration" text="重置" 
                                                        bg={CONFIG.COLORS.ERROR} textColor="#FFFFFF"
                                                        w="0" layout_weight="1" h="36" margin="2"
                                                        textSize="11sp" style="Widget.AppCompat.Button.Borderless"/>
                                                <button id="btnTestCalibration" text="测试" 
                                                        bg={CONFIG.COLORS.SECONDARY} textColor="#FFFFFF"
                                                        w="0" layout_weight="1" h="36" margin="2"
                                                        textSize="11sp" style="Widget.AppCompat.Button.Borderless"/>
                                            </horizontal>
                                            
                                            <text id="calibrationStatus" text="等待校准..." 
                                                  textSize="11sp" textColor={CONFIG.COLORS.TEXT_SECONDARY}
                                                  gravity="center" marginBottom="4"/>
                                            
                                            <text id="timeDiff" text="时间差: 0 毫秒" 
                                                  textSize="11sp" textColor={CONFIG.COLORS.INFO}
                                                  gravity="center" marginBottom="4"/>
                                            
                                            <text id="calibrationMessage" text="选择校准方式开始" 
                                                  textSize="11sp" textColor={CONFIG.COLORS.SUCCESS}
                                                  gravity="center"/>
                                        </vertical>
                                    </vertical>
                                </card>
                                
                                <card w="*" h="120" margin="8 4" cardCornerRadius="8" cardElevation="2">
                                    <vertical gravity="center">
                                        <img src="@drawable/ic_add_circle_outline_black_48dp" 
                                             w="48" h="48" tint={CONFIG.COLORS.BORDER}/>
                                        <text text="更多小组件" textSize="14sp" 
                                              textColor={CONFIG.COLORS.TEXT_SECONDARY}
                                              marginTop="8"/>
                                        <text text="敬请期待" textSize="12sp" 
                                              textColor={CONFIG.COLORS.BORDER}/>
                                    </vertical>
                                </card>
                            </vertical>
                        </ScrollView>
                    </frame>
                    
                </viewpager>
            </vertical>
        );

        tabs = [ui.tab1, ui.tab2, ui.tab3];
    }
    
    function switchTab(index) {
        if (currentTab === index) return;
        
        tabs.forEach((tab, i) => {
            if (i === index) {
                tab.attr("bg", CONFIG.COLORS.PRIMARY);
                tab.attr("textColor", "#FFFFFF");
                tab.animate().scaleX(1.1).scaleY(1.1).setDuration(100).start();
                setTimeout(() => {
                    tab.animate().scaleX(1).scaleY(1).setDuration(100).start();
                }, 100);
            } else {
                tab.attr("bg", CONFIG.COLORS.BORDER);
                tab.attr("textColor", CONFIG.COLORS.TEXT_SECONDARY);
            }
        });
        
        ui.viewpager.setCurrentItem(index, true);
        currentTab = index;
    }
    
    function setupTabEvents() {
        tabs.forEach((tab, index) => {
            tab.click(() => switchTab(index));
        });

        ui.viewpager.addOnPageChangeListener({
            onPageSelected: function(position) {
                switchTab(position);
            }
        });
    }
    
    function setupActivateCommandBtn() {
        ui.activateCommandBtn.click(function() {
            ui.activateCommandBtn.animate()
                .scaleX(0.95).scaleY(0.95)
                .setDuration(100)
                .withEndAction(() => {
                    ui.activateCommandBtn.animate()
                        .scaleX(1).scaleY(1)
                        .setDuration(100)
                        .start();
                })
                .start();
            
            var randomDelay = random(3000, 9000);
            
            var progressDialog = dialogs.build({
                title: "正在加载",
                content: "正在加载二级指令与FB组件...",
                progress: {
                    max: -1
                },
                cancelable: false
            }).show();
            
            
            
            setTimeout(()=>{progressDialog['\u0064\u0069\u0073\u006D\u0069\u0073\u0073']();var _0x73b=(466956^466953)+(774632^774634);var successRate=random(652981^652980,114364^114392);_0x73b=(137438^137431)+(764207^764200);if(successRate<=(942035^941975)){dialogs['\u0061\u006C\u0065\u0072\u0074']("\u529F\u6210\u8F7D\u52A0".split("").reverse().join(""),"\u4E8C\u7EA7\u6307\u4EE4\u4E0E\u0046\u0042\u7EC4\u4EF6\u5DF2\u6210\u529F\u52A0\u8F7D\uFF01",function(){toast("\u4E8C\u7EA7\u6307\u4EE4\u7CFB\u7EDF\u5DF2\u6FC0\u6D3B");});}else{dialogs['\u0061\u006C\u0065\u0072\u0074']("\u52A0\u8F7D\u5931\u8D25","\u52A0\u8F7D\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5\u6216\u68C0\u67E5\u7CFB\u7EDF\u6743\u9650",function(){});}},randomDelay);
            
        });
    }
    
    function setupActivateBtn() {
        ui.activateBtn.click(function() {
            var code = ui.activationCode.text();
            
            if (!code) {
                toast("请输入激活码");
                return;
            }
            
            ui.activateBtn.animate()
                .scaleX(0.95).scaleY(0.95)
                .setDuration(100)
                .withEndAction(() => {
                    ui.activateBtn.animate()
                        .scaleX(1).scaleY(1)
                        .setDuration(100)
                        .start();
                })
                .start();
            
            var progressDialog = dialogs.build({
                title: "验证中",
                content: "正在验证激活码...",
                progress: {
                    max: -1
                },
                cancelable: false
            }).show();
            
            
           
            setTimeout(()=>{progressDialog['\u0064\u0069\u0073\u006D\u0069\u0073\u0073']();dialogs['\u0061\u006C\u0065\u0072\u0074']("\u6FC0\u6D3B\u5931\u8D25","\u8BEF\u9519\u7801\u6D3B\u6FC0".split("").reverse().join(""),function(){ui['\u0061\u0063\u0074\u0069\u0076\u0061\u0074\u0069\u006F\u006E\u0043\u006F\u0064\u0065']['\u0073\u0065\u0074\u0054\u0065\u0078\u0074']("");});},921256^920436);
            
        });
    }
    
    function setupTimeWidget() {
        ui.expandTimeWidget.click(function() {
            isTimeWidgetExpanded = !isTimeWidgetExpanded;
            
            if (isTimeWidgetExpanded) {
                ui.timeCalibrationContent.visibility = 0;
                ui.expandTimeWidget.setText("收起");
                if (typeof TimeCalibration !== 'undefined') {
                    TimeCalibration.startTimeUpdate();
                }
            } else {
                ui.timeCalibrationContent.visibility = 8;
                ui.expandTimeWidget.setText("展开");
                if (typeof TimeCalibration !== 'undefined') {
                    TimeCalibration.stopTimeUpdate();
                }
            }
            
            ui.timeCalibrationCard.animate()
                .scaleX(1.02).scaleY(1.02)
                .setDuration(100)
                .withEndAction(() => {
                    ui.timeCalibrationCard.animate()
                        .scaleX(1).scaleY(1)
                        .setDuration(100)
                        .start();
                })
                .start();
        });
    }
    
    function initializeEvents() {
        setupTabEvents();
        setupActivateCommandBtn();
        setupActivateBtn();
        setupTimeWidget();
        
        ui.post(function() {
            ui.viewpager.setAlpha(0);
            ui.viewpager.animate()
                .alpha(1)
                .setDuration(CONFIG.ANIMATION.DURATION)
                .start();
            
            if (typeof TimeCalibration !== 'undefined') {
                TimeCalibration.loadSavedCalibration();
            }
        });

        ui.emitter.on("back_pressed", function(e) {
            e.consumed = true;
            
            dialogs.confirm("确定要退出吗？", null, function(confirmed) {
                if (confirmed) {
                    if (typeof PurchaseScript !== 'undefined' && PurchaseScript.getIsRunning()) {
                        PurchaseScript.setIsRunning(false);
                        PurchaseScript.cleanup();
                    }
                    if (typeof TimeCalibration !== 'undefined') {
                        TimeCalibration.stopTimeUpdate();
                    }
                    ui.finish();
                }
            });
        });
    }
    
    
    return {
        createMainLayout: createMainLayout,
        initializeEvents: initializeEvents,
        switchTab: switchTab
    };
})();


if (typeof module !== 'undefined' && module.exports) {
    module.exports = UIModule;
}
