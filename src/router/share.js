! function (e, i, n, t, r) {
  "function" == typeof define && define.amd ? define(function () {
    return e.share = t(i, n), e.share
  }) : "object" == typeof exports ? module.exports = t(i, n) : i.share = t(i, n)
}(this, window, document, function (e, i, n) {
  "use strict";

  function t(e, n) {
    var t = i,
      r = t.head || t.getElementsByTagName("head")[0] || t.documentElement,
      o = t.createElement("script");
    o.onload = n, o.onerror = function () {}, o.async = !0, o.src = e[0], r.appendChild(o)
  }

  function r() {
    var e = i.getElementsByTagName("meta"),
      n = "";
    for (var t in e) "undefined" != typeof e[t].name && "description" == e[t].name.toLowerCase() && (n = e[t].content);
    return n
  }

  function o(e) {
    var n = {
      iconUrl: "",
      url: location.href,
      title: i.title || "",
      desc: r()
    };
    f = a(n, e), s()
  }

  function a(e, i) {
    "object" != typeof i && (i = {});
    for (var n in i) e.hasOwnProperty(n) && i[n] && (e[n] = i[n]);
    return e
  }

  function c() {
    return "QQ" == (v.match(/\sQQ/i) || "").toString().trim()
  }

  function d() {
    return v.indexOf("MicroMessenger") > -1 || v.indexOf("micromessenger") > -1
  }

  function s() {
    d() ? u() : c() && (e.mqq ? m() : t([h], function () {
      m()
    }))
  }

  function l() {
    "undefined" == typeof WeixinJSBridge ? i.addEventListener ? i.addEventListener("WeixinJSBridgeReady", u, !1) : i.attachEvent && (i.attachEvent("WeixinJSBridgeReady", u), i.attachEvent("onWeixinJSBridgeReady", u)) : u()
  }

  function u() {
    WeixinJSBridge.on("menu:share:appmessage", function (e) {
      WeixinJSBridge.invoke("sendAppMessage", {
        img_url: f.iconUrl,
        img_width: "120",
        img_height: "120",
        link: f.url,
        desc: f.desc,
        title: f.title
      })
    }), WeixinJSBridge.on("menu:share:timeline", function (e) {
      WeixinJSBridge.invoke("shareTimeline", {
        img_url: f.iconUrl,
        img_width: "120",
        img_height: "120",
        link: f.url,
        desc: f.desc,
        title: f.title
      })
    }), WeixinJSBridge.on("menu:share:qq", function (e) {
      WeixinJSBridge.invoke("shareQQ", {
        img_url: f.iconUrl,
        img_width: "120",
        img_height: "120",
        link: f.url,
        desc: f.desc,
        title: f.title
      })
    }), WeixinJSBridge.on("menu:share:QZone", function (e) {
      WeixinJSBridge.invoke("shareQZone", {
        img_url: f.iconUrl,
        img_width: "120",
        img_height: "120",
        link: f.url,
        desc: f.desc,
        title: f.title
      })
    }), WeixinJSBridge.on("menu:share:email", function (e) {
      WeixinJSBridge.invoke("sendEmail", {
        content: f.desc,
        title: f.title
      })
    })
  }

  function m() {
    mqq.invoke && mqq.invoke("data", "setShareInfo", {
      share_url: e.location.href,
      title: f.title,
      desc: f.desc,
      image_url: f.iconUrl
    })
  }
  var g, f, h = "//open.mobile.qq.com/sdk/qqapi.js?_bid=152",
    v = navigator && navigator.userAgent || "";
  return e.onload = function () {
    try {
      l()
    } catch (e) {
      console.log(e)
    }
  }, g = {
    shareInit: o
  }
});
