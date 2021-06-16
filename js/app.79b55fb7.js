(function(e){function t(t){for(var a,i,A=t[0],s=t[1],l=t[2],d=0,p=[];d<A.length;d++)i=A[d],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&p.push(r[i][0]),r[i]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);c&&c(t);while(p.length)p.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,A=1;A<n.length;A++){var s=n[A];0!==r[s]&&(a=!1)}a&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var a={},r={app:0},o=[];function i(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=a,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var A=window["webpackJsonp"]=window["webpackJsonp"]||[],s=A.push.bind(A);A.push=t,A=A.slice();for(var l=0;l<A.length;l++)t(A[l]);var c=s;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"49f8":function(e,t,n){var a={"./ak.json":"70b0","./en.json":"edd4","./fr.json":"f693"};function r(e){var t=o(e);return n(t)}function o(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=o,e.exports=r,r.id="49f8"},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("img",{attrs:{alt:"Crowdin In-Context",src:n("d8e9")}}),a("HelloWorld"),a("locale-switcher")],1)},o=[],i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"content"},[n("h1",[e._v(e._s(e.$t("welcomeMessage")))]),n("p",[e._v(" "+e._s(e.$t("description.part1"))+" ")]),n("p",[e._v(" "+e._s(e.$t("description.part2"))+" ")]),n("p",[e._v(" "+e._s(e.$t("description.part3"))+" ")]),n("h3",[e._v(e._s(e.$t("headings.technicalOverview")))]),n("p",[e._v(" "+e._s(e.$t("description.part4"))+" ")]),n("h3",[e._v(e._s(e.$t("headings.integration")))]),n("p",[e._v(" "+e._s(e.$t("description.part5"))+" ")]),n("ul",[n("li",[e._v(e._s(e.$t("integration.way1")))]),n("li",[e._v(e._s(e.$t("integration.way2")))])]),n("h3",[e._v(e._s(e.$t("essentialLinks")))]),n("ul",[n("li",[n("a",{attrs:{href:"https://support.crowdin.com/in-context-localization/",target:"_blank",rel:"noopener"}},[e._v(e._s(e.$t("documentation")))])]),n("li",[n("a",{attrs:{href:"https://demo.crowdin.com/",target:"_blank",rel:"noopener"}},[e._v(e._s(e.$t("crowdinDemo")))])])])])},A=[],s={name:"HelloWorld"},l=s,c=(n("7010"),n("2877")),d=Object(c["a"])(l,i,A,!1,null,"14315119",null),p=d.exports,w=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"locale-switcher"},[n("select",{directives:[{name:"model",rawName:"v-model",value:e.$i18n.locale,expression:"$i18n.locale"}],on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.$i18n,"locale",t.target.multiple?n:n[0])}}},[n("option",{attrs:{value:"en"}},[e._v("English")]),n("option",{attrs:{value:"fr"}},[e._v("French")]),n("option",{attrs:{value:"ak"}},[e._v("In-Context")])])])},u=[],h={},g=Object(c["a"])(h,w,u,!1,null,null,null),f=g.exports,v={name:"App",components:{LocaleSwitcher:f,HelloWorld:p}},m=v,b=(n("034f"),Object(c["a"])(m,r,o,!1,null,null,null)),C=b.exports,y=(n("159b"),n("d3b7"),n("ddb0"),n("ac1f"),n("466d"),n("a925"));function x(){var e=n("49f8"),t={};return e.keys().forEach((function(n){var a=n.match(/([A-Za-z0-9-_]+)\./i);if(a&&a.length>1){var r=a[1];t[r]=e(n)}})),t}a["a"].use(y["a"]);var I=new y["a"]({locale:"en",fallbackLocale:"en",messages:x()});a["a"].config.productionTip=!1,new a["a"]({i18n:I,render:function(e){return e(C)}}).$mount("#app")},7010:function(e,t,n){"use strict";n("edce")},"70b0":function(e){e.exports=JSON.parse('{"welcomeMessage":"crwdns1869702:0crwdne1869702:0","description":{"part1":"crwdns1869704:0crwdne1869704:0","part2":"crwdns1869706:0crwdne1869706:0","part3":"crwdns1869708:0crwdne1869708:0","part4":"crwdns1869710:0crwdne1869710:0","part5":"crwdns1869712:0crwdne1869712:0"},"headings":{"technicalOverview":"crwdns1869714:0crwdne1869714:0","integration":"crwdns1869716:0crwdne1869716:0"},"integration":{"way1":"crwdns1869718:0crwdne1869718:0","way2":"crwdns1869720:0crwdne1869720:0"},"documentation":"crwdns1869722:0crwdne1869722:0","crowdinDemo":"crwdns1869724:0crwdne1869724:0","essentialLinks":"crwdns1869726:0crwdne1869726:0"}')},"85ec":function(e,t,n){},d8e9:function(e,t){e.exports="data:image/png;base64,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"},edce:function(e,t,n){},edd4:function(e){e.exports=JSON.parse('{"welcomeMessage":"Welcome to Crowdin In-Context example","description":{"part1":"Crowdin In-Context tool allows to translate texts directly within the actual web application. In such a way, the best translation quality is maintained.","part2":"In-Context localization is tied up with the actual project created in Crowdin, under which translatable files are stored.","part3":"This tool makes all the texts in the web app editable. Moreover, the translation process is real-time visible. Even the dynamic part of the application and strings that contain placeholders can be translated this way.","part4":"Crowdin In-Context works with the help of one line Javascript snippet and the pseudo-language package. It creates the pseudo-language package based on the localization files uploaded to your project, which later will be integrated to your application as an extra-localization language.","part5":"There are two common approaches to integrate Crowdin In-Context with your application:"},"headings":{"technicalOverview":"Technical Overview","integration":"Integration"},"integration":{"way1":"Staging or translation environment","way2":"Production environment"},"documentation":"Knowledge base","crowdinDemo":"Crowdin demo","essentialLinks":"Essential Links"}')},f693:function(e){e.exports=JSON.parse('{"welcomeMessage":"Welcome to Crowdin In-Context example","description":{"part1":"Crowdin In-Context tool allows to translate texts directly within the actual web application. In such a way, the best translation quality is maintained.","part2":"In-Context localization is tied up with the actual project created in Crowdin, under which translatable files are stored.","part3":"This tool makes all the texts in the web app editable. Moreover, the translation process is real-time visible. Even the dynamic part of the application and strings that contain placeholders can be translated this way.","part4":"Crowdin In-Context works with the help of one line Javascript snippet and the pseudo-language package. It creates the pseudo-language package based on the localization files uploaded to your project, which later will be integrated to your application as an extra-localization language.","part5":"There are two common approaches to integrate Crowdin In-Context with your application:"},"headings":{"technicalOverview":"Technical Overview","integration":"Integration"},"integration":{"way1":"Staging or translation environment","way2":"Production environment"},"documentation":"Knowledge base","crowdinDemo":"Crowdin demo","essentialLinks":"Essential Links"}')}});
//# sourceMappingURL=app.79b55fb7.js.map