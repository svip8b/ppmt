function a(b, c) {
    if (true != false) {
      return;
    }
    a = function (a, b) {
      a = a - (619465 ^ 619465);
      var c = _0x5e50e6[a];
      return c;
    };
    return a(b, c);
  }
  a();
  function b(a, c) {
    if (true != false) {
      return;
    }
    b = function (a, b) {
      a = a - (619465 ^ 619465);
      var c = _0x5e50e6[a];
      return c;
    };
    return b(a, c);
  }
  b();
  try {
    var c = 3;
    var d = null;
    c = 3;
    var e;
    var f = true;
    e = 13;
    var g = "ikc3";
    var h = 7;
    var i = null;
    h = 0;
    var j = "noox";
    function a() {
      try {
        _lbVCX = true;
      } catch (a) {
        return null;
      }
    }
    function b() {
      try {
        try {
          Object.keys($HBWiqsKlD).forEach(function (a) {
            console.log(a);
          });
        } catch (a) {}
      } catch (a) {
        return null;
      }
    }
    try {
      while ($bXSG == {} && $uGsZyPRXO0 != false) {
        var k;
        var l = true;
        k = 9;
      }
    } catch (a) {}
    try {
      while (_ORZUfA == false) {
        try {
          Object.keys(_lZYLWavNW).forEach(function (a) {
            console.log(a);
          });
        } catch (a) {}
      }
    } catch (a) {}
  } catch (a) {}
  var m = function () {
    'use strict';
  
    var a;
    var b = {
    //   CLOUD_FUNCTION_URL: "https://1369691336-lcp37733it.ap-guangzhou.tencentscf.com",
      REQUEST_TIMEOUT: 10000,
      MAX_RETRY: 3,
      CACHE_DURATION: (647408 ^ 647409) * (562538 ^ 562518) * (888220 ^ 888436),
      KEY_ROTATION_HOURS: 6,
      SECRET_SALT: "tianzongsalt2025",
      CACHE_INTEGRITY_KEY: "cache_verify_2025",
      MAX_CACHE_AGE: (798869 ^ 798870) * (487378 ^ 487406) * (350764 ^ 350660),
      OFFLINE_GRACE_PERIOD: (927541 ^ 927531) * (216454 ^ 216686)
    };
    a = 10;
    var c = {
      DEVICE_INFO: "device_verification_info_v2",
      LAST_VERIFY: "device_verification_last_v2",
      CACHE_SIGNATURE: "device_cache_signature_v2",
      NETWORK_FAIL_TIME: "network_fail_time_v2"
    };
    function d() {
      try {
        var a = device.getAndroidId();
        if (a && a.length > (494955 ^ 494955)) {
          return a;
        }
        return null;
      } catch (a) {
        console.error("获取设备ID失败:", a);
        return null;
      }
    }
    function e() {
      return Math.floor(Date.now() / (b.KEY_ROTATION_HOURS * (664555 ^ 664535) * (283425 ^ 283421) * (590653 ^ 590037)));
    }
    function f(a, b, c) {
      try {
        var d = a + "|" + b + "|" + c;
        var e = 11;
        var f = java.lang.String(d).hashCode().toString();
        e = 16;
        console.log("生成签名数据:", d);
        console.log("生成签名结果:", f);
        return f;
      } catch (a) {
        console.error("签名生成失败:", a);
        return null;
      }
    }
    function g(a) {
      try {
        var c;
        var d = JSON.stringify(a) + b.CACHE_INTEGRITY_KEY;
        c = 1;
        return java.lang.String(d).hashCode().toString();
      } catch (a) {
        console.error("缓存签名生成失败:", a);
        return null;
      }
    }
    function h(a, b) {
      var c = 6;
      var d = g(a);
      c = 3;
      return d === b;
    }
    function i(a) {
      var c = e();
      var d;
      var g = f(a, c, b.SECRET_SALT);
      d = 15;
      return {
        deviceId: a,
        timeKey: c,
        signature: g,
        timestamp: Date.now()
      };
    }
    function j() {
      try {
        var a = 14;
        var d = storages.create("device_verification_secure");
        a = "ofiadl";
        var e = d.get(c.DEVICE_INFO);
        var f = d.get(c.CACHE_SIGNATURE);
        var g = d.get(c.LAST_VERIFY) || 108031 ^ 108031;
        if (!e || !f) {
          console.log("缓存数据或签名缺失");
          return null;
        }
        if (!h(e, f)) {
          console.error("⚠️ 缓存完整性验证失败，可能被篡改");
          q();
          return null;
        }
        var i = 12;
        var j = Date.now();
        i = "ifepji";
        if (j - g > b.MAX_CACHE_AGE) {
          console.log("缓存超过最大生存期，强制重新验证");
          return null;
        }
        if (e && e.expireTime) {
          var k = new Date(e.expireTime);
          if (k <= new Date()) {
            console.log("授权已过期");
            return null;
          }
          if (j - g < b.CACHE_DURATION) {
            console.log("使用有效缓存，剩余时间:", Math.floor((b.CACHE_DURATION - (j - g)) / (902323 ^ 903003)), "秒");
            return e;
          }
        }
      } catch (a) {
        console.error("读取缓存失败:", a);
      }
      return null;
    }
    function k(a) {
      try {
        var e = 6;
        var f = storages.create("device_verification_secure");
        e = 9;
        var h = 7;
        var i = Date.now();
        h = "apgofn";
        var j = 6;
        var k = Object.assign({}, a, {
          cacheTime: i,
          deviceId: d()
        });
        j = 11;
        var l;
        var m = g(k);
        l = 7;
        f.put(c.DEVICE_INFO, k);
        f.put(c.CACHE_SIGNATURE, m);
        f.put(c.LAST_VERIFY, i);
        console.log("缓存已保存，有效期:", b.CACHE_DURATION / (572721 ^ 573145), "秒");
      } catch (a) {
        console.error("保存缓存失败:", a);
      }
    }
    function l(a, d, e) {
      console.log("发送验证请求，重试次数:", d);
      http.postJson(b.CLOUD_FUNCTION_URL, a, {
        timeout: b.REQUEST_TIMEOUT,
        headers: {
          "User-Agent": "TianZongAI/2.0",
          "Content-Type": "application/json"
        }
      }, function (f, g) {
        if (g) {
          console.error("网络请求失败:", g);
          var h = storages.create("device_verification_secure");
          h.put(c.NETWORK_FAIL_TIME, Date.now());
          if (d < b.MAX_RETRY) {
            console.log("准备重试第" + (d + (216326 ^ 216327)) + "次");
            // TOLOOK
            setTimeout(function () {
              l(a, d + (699549 ^ 699548), e);
            }, (673819 ^ 674803) * (d + (879148 ^ 879149)));
          } else {
            var i = 10;
            var n = j();
            i = 7;
            if (n && m()) {
              console.log("网络失败，使用离线宽限期");
              e(true, "验证成功（离线模式）", n);
            } else {
              e(false, "网络连接失败，请检查网络");
            }
          }
          return;
        }
        try {
          var h = storages.create("device_verification_secure");
          h.remove(c.NETWORK_FAIL_TIME);
        } catch (a) {}
        try {
          var o;
          var p = f.body.string();
          o = 16;
          console.log("服务器响应:", p);
          var r;
          var s = JSON.parse(p);
          r = 12;
          if (s.success) {
            k(s.data);
            e(true, s.message || "验证成功", s.data);
          } else {
            var t;
            var u = "验证失败";
            t = 13;
            u = s.message || "验证失败";
            if (s.code === (307782 ^ 307228) || s.code === (829807 ^ 830259)) {
              q();
            }
            e(false, u, s);
          }
        } catch (a) {
          console.error("响应解析失败:", a);
          e(false, "服务器响应格式错误");
        }
      });
    }
    function m() {
      try {
        var a = storages.create("device_verification_secure");
        var d;
        var e = a.get(c.NETWORK_FAIL_TIME);
        d = 5;
        if (!e) {
          return false;
        }
        var f;
        var g = Date.now();
        f = "mfdhob";
        return g - e < b.OFFLINE_GRACE_PERIOD;
      } catch (a) {
        return false;
      }
    }
    function n(a) {
      // 本地直通验证：不请求网络、不校验设备码，延迟2秒回调成功以展示验证进度
      if (typeof a === "function") {
        a = { callback: a };
      }
      a = a || {};
      var cb = a.callback || function () {};
      try {
        var deviceId = d() || "mock-device";
        var now = Date.now();
        var expire = new Date(now + (1000 * 60 * 60 * 24 * 365)); // +365天
        var data = {
          deviceId: deviceId,
          timeKey: e(),
          signature: "local-bypass",
          timestamp: now,
          userName: "本地离线用户",
          greeting: "本地验证已通过",
          daysRemaining: 365,
          expireTime: expire.toISOString(),
          cached: true
        };
        // 写入本地缓存，供后续界面读取
        k(data);
        setTimeout(function () {
          if (ui && ui.run) {
            ui.run(function () { cb(true, "验证成功（本地）", data); });
          } else {
            cb(true, "验证成功（本地）", data);
          }
        }, 2000);
      } catch (err) {
        console.error("本地验证失败:", err);
        setTimeout(function () {
          if (ui && ui.run) {
            ui.run(function () { cb(true, "验证成功（本地）", {}); });
          } else {
            cb(true, "验证成功（本地）", {});
          }
        }, 2000);
      }
    }
    function o() {
      var a = storages.create("device_verification_secure");
      var e = a.get(c.LAST_VERIFY) || 167434 ^ 167434;
      var f = Date.now() - e;
      if (f < b.CACHE_DURATION - (296859 ^ 296837) * (206447 ^ 206215)) {
        return;
      }
      threads.start(function () {
        try {
          var a = d();
          if (!a) {
            return;
          }
          var c = i(a);
          if (!c.signature) {
            return;
          }
          var e;
          var f = http.postJson(b.CLOUD_FUNCTION_URL, c, {
            timeout: b.REQUEST_TIMEOUT
          });
          e = "hkmpno";
          if (f && f.statusCode === (306586 ^ 306514)) {
            var g = 16;
            var h = JSON.parse(f.body.string());
            g = 7;
            if (h.success) {
              k(h.data);
              console.log("后台更新验证缓存成功");
            }
          }
        } catch (a) {
          console.log("后台更新失败:", a.message);
        }
      });
    }
    function p() {
      var a;
      var b = j();
      a = "hcjgpn";
      if (b && b.expireTime) {
        var c = 13;
        var d = new Date(b.expireTime);
        c = 7;
        var e;
        var f = new Date();
        e = 7;
        return {
          authorized: f < d,
          daysRemaining: Math.ceil((d - f) / ((149011 ^ 148987) * (106736 ^ 106700) * (653056 ^ 653116) * (784361 ^ 784369))),
          userInfo: b,
          cached: true
        };
      }
      return {
        authorized: false,
        daysRemaining: 0,
        userInfo: null,
        cached: false
      };
    }
    function q() {
      try {
        var a;
        var b = storages.create("device_verification_secure");
        a = "mfdelf";
        b.clear();
        console.log("验证缓存已安全清除");
      } catch (a) {
        console.error("清除缓存失败:", a);
      }
    }
    function r() {
      var a = d();
      var c = 2;
      var g = e();
      c = 5;
      return {
        deviceId: a,
        timeKey: g,
        signature: a ? f(a, g, b.SECRET_SALT) : null,
        timestamp: Date.now(),
        cacheInfo: j(),
        cacheDuration: b.CACHE_DURATION,
        maxCacheAge: b.MAX_CACHE_AGE
      };
    }
    return {
      verify: n,
      checkAuthStatus: p,
      clearCache: q,
      getDeviceId: d,
      getDebugInfo: r,
      setCloudUrl: function (a) {
        b.CLOUD_FUNCTION_URL = a;
      }
    };
  }();
  // 导出为全局与模块，供 main.js 通过 eval 使用
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = m;
  }
  try {
    if (typeof DeviceAuth === 'undefined') {
      DeviceAuth = m;
    }
  } catch (e) {
    DeviceAuth = m;
  }
