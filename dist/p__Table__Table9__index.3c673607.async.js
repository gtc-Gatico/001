(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[55],{"1qq1":function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return r}));var a=t("tJVT"),o=(t("OaEy"),t("2fM7")),u=t("q1tI"),c=t.n(u),i=void 0,l=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5e3,t=i,a=Date.now(),o=null;return function(){var u=arguments,c=Date.now(),i=n-(c-a);clearTimeout(o),i<=0?(e.apply(t,u),a=Date.now()):o=setTimeout((function(){e.apply(t,u),o=null}),i)}};function r(){var e=o["a"].Option,n=["Zhejiang","Jiangsu"],t={Zhejiang:["Hangzhou","Ningbo","Wenzhou"],Jiangsu:["Nanjing","Suzhou","Zhenjiang"]},i=Object(u["useState"])(t[n[0]]),r=Object(a["a"])(i,2),f=r[0],s=(r[1],Object(u["useState"])(t[n[0]][0])),g=Object(a["a"])(s,2),h=g[0],p=g[1];Object(u["useEffect"])((function(){console.log(f)}),[]);var w=function(e){console.log(e),p(t[e][0])},d=function(e){p(e)},m=l((function(e){console.log("t",e),alert(e)}));return c.a.createElement("div",null,c.a.createElement("button",{onClick:function(){return m(222)}},"\u70b9\u51fb"),"\xa0\xa0\xa0\xa0",c.a.createElement(o["a"],{defaultValue:n[0],style:{width:120},onChange:w},"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0",n.map((function(n){return c.a.createElement(e,{key:n},n)})),"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0"),"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0",c.a.createElement(o["a"],{style:{width:120},value:h,onChange:d},"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0",f.map((function(n){return c.a.createElement(e,{key:n},n)})),"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0"))}}}]);