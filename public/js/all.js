
;window.Modernizr=function(a,b,c){function D(a){j.cssText=a}function E(a,b){return D(n.join(a+";")+(b||""))}function F(a,b){return typeof a===b}function G(a,b){return!!~(""+a).indexOf(b)}function H(a,b){for(var d in a){var e=a[d];if(!G(e,"-")&&j[e]!==c)return b=="pfx"?e:!0}return!1}function I(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:F(f,"function")?f.bind(d||b):f}return!1}function J(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),e=(a+" "+p.join(d+" ")+d).split(" ");return F(b,"string")||F(b,"undefined")?H(e,b):(e=(a+" "+q.join(d+" ")+d).split(" "),I(e,b,c))}function K(){e.input=function(c){for(var d=0,e=c.length;d<e;d++)u[c[d]]=c[d]in k;return u.list&&(u.list=!!b.createElement("datalist")&&!!a.HTMLDataListElement),u}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),e.inputtypes=function(a){for(var d=0,e,f,h,i=a.length;d<i;d++)k.setAttribute("type",f=a[d]),e=k.type!=="text",e&&(k.value=l,k.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(f)&&k.style.WebkitAppearance!==c?(g.appendChild(k),h=b.defaultView,e=h.getComputedStyle&&h.getComputedStyle(k,null).WebkitAppearance!=="textfield"&&k.offsetHeight!==0,g.removeChild(k)):/^(search|tel)$/.test(f)||(/^(url|email)$/.test(f)?e=k.checkValidity&&k.checkValidity()===!1:e=k.value!=l)),t[a[d]]=!!e;return t}("search tel url email datetime date month week time datetime-local number range color".split(" "))}var d="2.8.3",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k=b.createElement("input"),l=":)",m={}.toString,n=" -webkit- -moz- -o- -ms- ".split(" "),o="Webkit Moz O ms",p=o.split(" "),q=o.toLowerCase().split(" "),r={svg:"http://www.w3.org/2000/svg"},s={},t={},u={},v=[],w=v.slice,x,y=function(a,c,d,e){var f,i,j,k,l=b.createElement("div"),m=b.body,n=m||b.createElement("body");if(parseInt(d,10))while(d--)j=b.createElement("div"),j.id=e?e[d]:h+(d+1),l.appendChild(j);return f=["&#173;",'<style id="s',h,'">',a,"</style>"].join(""),l.id=h,(m?l:n).innerHTML+=f,n.appendChild(l),m||(n.style.background="",n.style.overflow="hidden",k=g.style.overflow,g.style.overflow="hidden",g.appendChild(n)),i=c(l,a),m?l.parentNode.removeChild(l):(n.parentNode.removeChild(n),g.style.overflow=k),!!i},z=function(b){var c=a.matchMedia||a.msMatchMedia;if(c)return c(b)&&c(b).matches||!1;var d;return y("@media "+b+" { #"+h+" { position: absolute; } }",function(b){d=(a.getComputedStyle?getComputedStyle(b,null):b.currentStyle)["position"]=="absolute"}),d},A=function(){function d(d,e){e=e||b.createElement(a[d]||"div"),d="on"+d;var f=d in e;return f||(e.setAttribute||(e=b.createElement("div")),e.setAttribute&&e.removeAttribute&&(e.setAttribute(d,""),f=F(e[d],"function"),F(e[d],"undefined")||(e[d]=c),e.removeAttribute(d))),e=null,f}var a={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return d}(),B={}.hasOwnProperty,C;!F(B,"undefined")&&!F(B.call,"undefined")?C=function(a,b){return B.call(a,b)}:C=function(a,b){return b in a&&F(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=w.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(w.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(w.call(arguments)))};return e}),s.flexbox=function(){return J("flexWrap")},s.canvas=function(){var a=b.createElement("canvas");return!!a.getContext&&!!a.getContext("2d")},s.canvastext=function(){return!!e.canvas&&!!F(b.createElement("canvas").getContext("2d").fillText,"function")},s.webgl=function(){return!!a.WebGLRenderingContext},s.touch=function(){var c;return"ontouchstart"in a||a.DocumentTouch&&b instanceof DocumentTouch?c=!0:y(["@media (",n.join("touch-enabled),("),h,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(a){c=a.offsetTop===9}),c},s.geolocation=function(){return"geolocation"in navigator},s.postmessage=function(){return!!a.postMessage},s.websqldatabase=function(){return!!a.openDatabase},s.indexedDB=function(){return!!J("indexedDB",a)},s.hashchange=function(){return A("hashchange",a)&&(b.documentMode===c||b.documentMode>7)},s.history=function(){return!!a.history&&!!history.pushState},s.draganddrop=function(){var a=b.createElement("div");return"draggable"in a||"ondragstart"in a&&"ondrop"in a},s.websockets=function(){return"WebSocket"in a||"MozWebSocket"in a},s.rgba=function(){return D("background-color:rgba(150,255,150,.5)"),G(j.backgroundColor,"rgba")},s.hsla=function(){return D("background-color:hsla(120,40%,100%,.5)"),G(j.backgroundColor,"rgba")||G(j.backgroundColor,"hsla")},s.multiplebgs=function(){return D("background:url(https://),url(https://),red url(https://)"),/(url\s*\(.*?){3}/.test(j.background)},s.backgroundsize=function(){return J("backgroundSize")},s.borderimage=function(){return J("borderImage")},s.borderradius=function(){return J("borderRadius")},s.boxshadow=function(){return J("boxShadow")},s.textshadow=function(){return b.createElement("div").style.textShadow===""},s.opacity=function(){return E("opacity:.55"),/^0.55$/.test(j.opacity)},s.cssanimations=function(){return J("animationName")},s.csscolumns=function(){return J("columnCount")},s.cssgradients=function(){var a="background-image:",b="gradient(linear,left top,right bottom,from(#9f9),to(white));",c="linear-gradient(left top,#9f9, white);";return D((a+"-webkit- ".split(" ").join(b+a)+n.join(c+a)).slice(0,-a.length)),G(j.backgroundImage,"gradient")},s.cssreflections=function(){return J("boxReflect")},s.csstransforms=function(){return!!J("transform")},s.csstransforms3d=function(){var a=!!J("perspective");return a&&"webkitPerspective"in g.style&&y("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(b,c){a=b.offsetLeft===9&&b.offsetHeight===3}),a},s.csstransitions=function(){return J("transition")},s.fontface=function(){var a;return y('@font-face {font-family:"font";src:url("https://")}',function(c,d){var e=b.getElementById("smodernizr"),f=e.sheet||e.styleSheet,g=f?f.cssRules&&f.cssRules[0]?f.cssRules[0].cssText:f.cssText||"":"";a=/src/i.test(g)&&g.indexOf(d.split(" ")[0])===0}),a},s.generatedcontent=function(){var a;return y(["#",h,"{font:0/0 a}#",h,':after{content:"',l,'";visibility:hidden;font:3px/1 a}'].join(""),function(b){a=b.offsetHeight>=3}),a},s.video=function(){var a=b.createElement("video"),c=!1;try{if(c=!!a.canPlayType)c=new Boolean(c),c.ogg=a.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),c.h264=a.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),c.webm=a.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,"")}catch(d){}return c},s.audio=function(){var a=b.createElement("audio"),c=!1;try{if(c=!!a.canPlayType)c=new Boolean(c),c.ogg=a.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),c.mp3=a.canPlayType("audio/mpeg;").replace(/^no$/,""),c.wav=a.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),c.m4a=(a.canPlayType("audio/x-m4a;")||a.canPlayType("audio/aac;")).replace(/^no$/,"")}catch(d){}return c},s.localstorage=function(){try{return localStorage.setItem(h,h),localStorage.removeItem(h),!0}catch(a){return!1}},s.sessionstorage=function(){try{return sessionStorage.setItem(h,h),sessionStorage.removeItem(h),!0}catch(a){return!1}},s.webworkers=function(){return!!a.Worker},s.applicationcache=function(){return!!a.applicationCache},s.svg=function(){return!!b.createElementNS&&!!b.createElementNS(r.svg,"svg").createSVGRect},s.inlinesvg=function(){var a=b.createElement("div");return a.innerHTML="<svg/>",(a.firstChild&&a.firstChild.namespaceURI)==r.svg},s.smil=function(){return!!b.createElementNS&&/SVGAnimate/.test(m.call(b.createElementNS(r.svg,"animate")))},s.svgclippaths=function(){return!!b.createElementNS&&/SVGClipPath/.test(m.call(b.createElementNS(r.svg,"clipPath")))};for(var L in s)C(s,L)&&(x=L.toLowerCase(),e[x]=s[L](),v.push((e[x]?"":"no-")+x));return e.input||K(),e.addTest=function(a,b){if(typeof a=="object")for(var d in a)C(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof f!="undefined"&&f&&(g.className+=" "+(b?"":"no-")+a),e[a]=b}return e},D(""),i=k=null,function(a,b){function l(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function m(){var a=s.elements;return typeof a=="string"?a.split(" "):a}function n(a){var b=j[a[h]];return b||(b={},i++,a[h]=i,j[i]=b),b}function o(a,c,d){c||(c=b);if(k)return c.createElement(a);d||(d=n(c));var g;return d.cache[a]?g=d.cache[a].cloneNode():f.test(a)?g=(d.cache[a]=d.createElem(a)).cloneNode():g=d.createElem(a),g.canHaveChildren&&!e.test(a)&&!g.tagUrn?d.frag.appendChild(g):g}function p(a,c){a||(a=b);if(k)return a.createDocumentFragment();c=c||n(a);var d=c.frag.cloneNode(),e=0,f=m(),g=f.length;for(;e<g;e++)d.createElement(f[e]);return d}function q(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return s.shivMethods?o(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+m().join().replace(/[\w\-]+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(s,b.frag)}function r(a){a||(a=b);var c=n(a);return s.shivCSS&&!g&&!c.hasCSS&&(c.hasCSS=!!l(a,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),k||q(a,c),a}var c="3.7.0",d=a.html5||{},e=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,f=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,g,h="_html5shiv",i=0,j={},k;(function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",g="hidden"in a,k=a.childNodes.length==1||function(){b.createElement("a");var a=b.createDocumentFragment();return typeof a.cloneNode=="undefined"||typeof a.createDocumentFragment=="undefined"||typeof a.createElement=="undefined"}()}catch(c){g=!0,k=!0}})();var s={elements:d.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:c,shivCSS:d.shivCSS!==!1,supportsUnknownElements:k,shivMethods:d.shivMethods!==!1,type:"default",shivDocument:r,createElement:o,createDocumentFragment:p};a.html5=s,r(b)}(this,b),e._version=d,e._prefixes=n,e._domPrefixes=q,e._cssomPrefixes=p,e.mq=z,e.hasEvent=A,e.testProp=function(a){return H([a])},e.testAllProps=J,e.testStyles=y,e.prefixed=function(a,b,c){return b?J(a,b,c):J(a,"pfx")},g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+v.join(" "):""),e}(this,this.document),function(a,b,c){function d(a){return"[object Function]"==o.call(a)}function e(a){return"string"==typeof a}function f(){}function g(a){return!a||"loaded"==a||"complete"==a||"uninitialized"==a}function h(){var a=p.shift();q=1,a?a.t?m(function(){("c"==a.t?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):q=0}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){"img"!=a&&m(function(){t.removeChild(l)},50);for(var d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}}var j=j||B.errorTimeout,l=b.createElement(a),o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};1===y[c]&&(r=1,y[c]=[]),"object"==a?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),"img"!=a&&(r||2===y[c]?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i("c"==b?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),1==p.length&&h()),this}function k(){var a=B;return a.loader={load:j,i:0},a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&"[object Opera]"==o.call(a.opera),l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"script":u,w=Array.isArray||function(a){return"[object Array]"==o.call(a)},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}},A,B;B=function(a){function b(a){var a=a.split("!"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a},e,f,g;for(f=0;f<d;f++)g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));for(f=0;f<b;f++)c=x[f](c);return c}function g(a,e,f,g,h){var i=b(a),j=i.autoCallback;i.url.split(".").pop().split("?").shift(),i.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]),i.instead?i.instead(a,e,f,g,h):(y[i.url]?i.noexec=!0:y[i.url]=1,f.load(i.url,i.forceCSS||!i.forceJS&&"css"==i.url.split(".").pop().split("?").shift()?"c":c,i.noexec,i.attrs,i.timeout),(d(e)||d(j))&&f.load(function(){k(),e&&e(i.origUrl,h,g),j&&j(i.origUrl,h,g),y[i.url]=2})))}function h(a,b){function c(a,c){if(a){if(e(a))c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}),g(a,j,b,0,h);else if(Object(a)===a)for(n in m=function(){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[n])),g(a[n],j,b,n,h))}else!c&&l()}var h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f,m,n;c(h?a.yep:a.nope,!!i),i&&c(i)}var i,j,l=this.yepnope.loader;if(e(a))g(a,0,l,0);else if(w(a))for(i=0;i<a.length;i++)j=a[i],e(j)?g(j,0,l,0):w(j)?B(j):Object(j)===j&&h(j,l);else Object(a)===a&&h(a,l)},B.addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B.errorTimeout=1e4,null==b.readyState&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",A=function(){b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k=b.createElement("script"),l,o,e=e||B.errorTimeout;k.src=a;for(o in d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||(l=1,c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=function(a,c,d,e,g,i){var e=b.createElement("link"),j,c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};



!function(a){"use strict";a.matchMedia=a.matchMedia||function(a){var b,c=a.documentElement,d=c.firstElementChild||c.firstChild,e=a.createElement("body"),f=a.createElement("div");return f.id="mq-test-1",f.style.cssText="position:absolute;top:-100em",e.style.background="none",e.appendChild(f),function(a){return f.innerHTML='&shy;<style media="'+a+'"> #mq-test-1 { width: 42px; }</style>',c.insertBefore(e,d),b=42===f.offsetWidth,c.removeChild(e),{matches:b,media:a}}}(a.document)}(this),function(a){"use strict";function b(){v(!0)}var c={};a.respond=c,c.update=function(){};var d=[],e=function(){var b=!1;try{b=new a.XMLHttpRequest}catch(c){b=new a.ActiveXObject("Microsoft.XMLHTTP")}return function(){return b}}(),f=function(a,b){var c=e();c&&(c.open("GET",a,!0),c.onreadystatechange=function(){4!==c.readyState||200!==c.status&&304!==c.status||b(c.responseText)},4!==c.readyState&&c.send(null))},g=function(a){return a.replace(c.regex.minmaxwh,"").match(c.regex.other)};if(c.ajax=f,c.queue=d,c.unsupportedmq=g,c.regex={media:/@media[^\{]+\{([^\{\}]*\{[^\}\{]*\})+/gi,keyframes:/@(?:\-(?:o|moz|webkit)\-)?keyframes[^\{]+\{(?:[^\{\}]*\{[^\}\{]*\})+[^\}]*\}/gi,comments:/\/\*[^*]*\*+([^/][^*]*\*+)*\//gi,urls:/(url\()['"]?([^\/\)'"][^:\)'"]+)['"]?(\))/g,findStyles:/@media *([^\{]+)\{([\S\s]+?)$/,only:/(only\s+)?([a-zA-Z]+)\s?/,minw:/\(\s*min\-width\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/,maxw:/\(\s*max\-width\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/,minmaxwh:/\(\s*m(in|ax)\-(height|width)\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/gi,other:/\([^\)]*\)/g},c.mediaQueriesSupported=a.matchMedia&&null!==a.matchMedia("only all")&&a.matchMedia("only all").matches,!c.mediaQueriesSupported){var h,i,j,k=a.document,l=k.documentElement,m=[],n=[],o=[],p={},q=30,r=k.getElementsByTagName("head")[0]||l,s=k.getElementsByTagName("base")[0],t=r.getElementsByTagName("link"),u=function(){var a,b=k.createElement("div"),c=k.body,d=l.style.fontSize,e=c&&c.style.fontSize,f=!1;return b.style.cssText="position:absolute;font-size:1em;width:1em",c||(c=f=k.createElement("body"),c.style.background="none"),l.style.fontSize="100%",c.style.fontSize="100%",c.appendChild(b),f&&l.insertBefore(c,l.firstChild),a=b.offsetWidth,f?l.removeChild(c):c.removeChild(b),l.style.fontSize=d,e&&(c.style.fontSize=e),a=j=parseFloat(a)},v=function(b){var c="clientWidth",d=l[c],e="CSS1Compat"===k.compatMode&&d||k.body[c]||d,f={},g=t[t.length-1],p=(new Date).getTime();if(b&&h&&q>p-h)return a.clearTimeout(i),i=a.setTimeout(v,q),void 0;h=p;for(var s in m)if(m.hasOwnProperty(s)){var w=m[s],x=w.minw,y=w.maxw,z=null===x,A=null===y,B="em";x&&(x=parseFloat(x)*(x.indexOf(B)>-1?j||u():1)),y&&(y=parseFloat(y)*(y.indexOf(B)>-1?j||u():1)),w.hasquery&&(z&&A||!(z||e>=x)||!(A||y>=e))||(f[w.media]||(f[w.media]=[]),f[w.media].push(n[w.rules]))}for(var C in o)o.hasOwnProperty(C)&&o[C]&&o[C].parentNode===r&&r.removeChild(o[C]);o.length=0;for(var D in f)if(f.hasOwnProperty(D)){var E=k.createElement("style"),F=f[D].join("\n");E.type="text/css",E.media=D,r.insertBefore(E,g.nextSibling),E.styleSheet?E.styleSheet.cssText=F:E.appendChild(k.createTextNode(F)),o.push(E)}},w=function(a,b,d){var e=a.replace(c.regex.comments,"").replace(c.regex.keyframes,"").match(c.regex.media),f=e&&e.length||0;b=b.substring(0,b.lastIndexOf("/"));var h=function(a){return a.replace(c.regex.urls,"$1"+b+"$2$3")},i=!f&&d;b.length&&(b+="/"),i&&(f=1);for(var j=0;f>j;j++){var k,l,o,p;i?(k=d,n.push(h(a))):(k=e[j].match(c.regex.findStyles)&&RegExp.$1,n.push(RegExp.$2&&h(RegExp.$2))),o=k.split(","),p=o.length;for(var q=0;p>q;q++)l=o[q],g(l)||m.push({media:l.split("(")[0].match(c.regex.only)&&RegExp.$2||"all",rules:n.length-1,hasquery:l.indexOf("(")>-1,minw:l.match(c.regex.minw)&&parseFloat(RegExp.$1)+(RegExp.$2||""),maxw:l.match(c.regex.maxw)&&parseFloat(RegExp.$1)+(RegExp.$2||"")})}v()},x=function(){if(d.length){var b=d.shift();f(b.href,function(c){w(c,b.href,b.media),p[b.href]=!0,a.setTimeout(function(){x()},0)})}},y=function(){for(var b=0;b<t.length;b++){var c=t[b],e=c.href,f=c.media,g=c.rel&&"stylesheet"===c.rel.toLowerCase();e&&g&&!p[e]&&(c.styleSheet&&c.styleSheet.rawCssText?(w(c.styleSheet.rawCssText,e,f),p[e]=!0):(!/^([a-zA-Z:]*\/\/)/.test(e)&&!s||e.replace(RegExp.$1,"").split("/")[0]===a.location.host)&&("//"===e.substring(0,2)&&(e=a.location.protocol+e),d.push({href:e,media:f})))}x()};y(),c.update=y,c.getEmValue=u,a.addEventListener?a.addEventListener("resize",b,!1):a.attachEvent&&a.attachEvent("onresize",b)}}(this);

!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=a.document,e=c.slice,f=c.concat,g=c.push,h=c.indexOf,i={},j=i.toString,k=i.hasOwnProperty,l={},m="1.12.0",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return e.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:e.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a){return n.each(this,a)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(e.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},push:g,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(e=arguments[h]))for(d in e)a=g[d],c=e[d],g!==c&&(j&&c&&(n.isPlainObject(c)||(b=n.isArray(c)))?(b?(b=!1,f=a&&n.isArray(a)?a:[]):f=a&&n.isPlainObject(a)?a:{},g[d]=n.extend(j,f,c)):void 0!==c&&(g[d]=c));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray||function(a){return"array"===n.type(a)},isWindow:function(a){return null!=a&&a==a.window},isNumeric:function(a){var b=a&&a.toString();return!n.isArray(a)&&b-parseFloat(b)+1>=0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},isPlainObject:function(a){var b;if(!a||"object"!==n.type(a)||a.nodeType||n.isWindow(a))return!1;try{if(a.constructor&&!k.call(a,"constructor")&&!k.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}if(!l.ownFirst)for(b in a)return k.call(a,b);for(b in a);return void 0===b||k.call(a,b)},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?i[j.call(a)]||"object":typeof a},globalEval:function(b){b&&n.trim(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b){var c,d=0;if(s(a)){for(c=a.length;c>d;d++)if(b.call(a[d],d,a[d])===!1)break}else for(d in a)if(b.call(a[d],d,a[d])===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):g.call(c,a)),c},inArray:function(a,b,c){var d;if(b){if(h)return h.call(b,a,c);for(d=b.length,c=c?0>c?Math.max(0,d+c):c:0;d>c;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,b){var c=+b.length,d=0,e=a.length;while(c>d)a[e++]=b[d++];if(c!==c)while(void 0!==b[d])a[e++]=b[d++];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,e,g=0,h=[];if(s(a))for(d=a.length;d>g;g++)e=b(a[g],g,c),null!=e&&h.push(e);else for(g in a)e=b(a[g],g,c),null!=e&&h.push(e);return f.apply([],h)},guid:1,proxy:function(a,b){var c,d,f;return"string"==typeof b&&(f=a[b],b=a,a=f),n.isFunction(a)?(c=e.call(arguments,2),d=function(){return a.apply(b||this,c.concat(e.call(arguments)))},d.guid=a.guid=a.guid||n.guid++,d):void 0},now:function(){return+new Date},support:l}),"function"==typeof Symbol&&(n.fn[Symbol.iterator]=c[Symbol.iterator]),n.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){i["[object "+b+"]"]=b.toLowerCase()});function s(a){var b=!!a&&"length"in a&&a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ga(),z=ga(),A=ga(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+M+"))|)"+L+"*\\]",O=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+N+")*)|.*)\\)|)",P=new RegExp(L+"+","g"),Q=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),R=new RegExp("^"+L+"*,"+L+"*"),S=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),T=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),U=new RegExp(O),V=new RegExp("^"+M+"$"),W={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M+"|[*])"),ATTR:new RegExp("^"+N),PSEUDO:new RegExp("^"+O),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},X=/^(?:input|select|textarea|button)$/i,Y=/^h\d$/i,Z=/^[^{]+\{\s*\[native \w/,$=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,_=/[+~]/,aa=/'|\\/g,ba=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),ca=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},da=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(ea){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function fa(a,b,d,e){var f,h,j,k,l,o,r,s,w=b&&b.ownerDocument,x=b?b.nodeType:9;if(d=d||[],"string"!=typeof a||!a||1!==x&&9!==x&&11!==x)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==x&&(o=$.exec(a)))if(f=o[1]){if(9===x){if(!(j=b.getElementById(f)))return d;if(j.id===f)return d.push(j),d}else if(w&&(j=w.getElementById(f))&&t(b,j)&&j.id===f)return d.push(j),d}else{if(o[2])return H.apply(d,b.getElementsByTagName(a)),d;if((f=o[3])&&c.getElementsByClassName&&b.getElementsByClassName)return H.apply(d,b.getElementsByClassName(f)),d}if(c.qsa&&!A[a+" "]&&(!q||!q.test(a))){if(1!==x)w=b,s=a;else if("object"!==b.nodeName.toLowerCase()){(k=b.getAttribute("id"))?k=k.replace(aa,"\\$&"):b.setAttribute("id",k=u),r=g(a),h=r.length,l=V.test(k)?"#"+k:"[id='"+k+"']";while(h--)r[h]=l+" "+qa(r[h]);s=r.join(","),w=_.test(a)&&oa(b.parentNode)||b}if(s)try{return H.apply(d,w.querySelectorAll(s)),d}catch(y){}finally{k===u&&b.removeAttribute("id")}}}return i(a.replace(Q,"$1"),b,d,e)}function ga(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ha(a){return a[u]=!0,a}function ia(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ja(a,b){var c=a.split("|"),e=c.length;while(e--)d.attrHandle[c[e]]=b}function ka(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function la(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function na(a){return ha(function(b){return b=+b,ha(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function oa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=fa.support={},f=fa.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=fa.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload",da)),c.attributes=ia(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ia(function(a){return a.appendChild(n.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Z.test(n.getElementsByClassName),c.getById=ia(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ba,ca);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ba,ca);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return"undefined"!=typeof b.getElementsByClassName&&p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=Z.test(n.querySelectorAll))&&(ia(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ia(function(a){var b=n.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=Z.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ia(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",O)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Z.test(o.compareDocumentPosition),t=b||Z.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f)return a===n?-1:b===n?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return ka(a,b);c=a;while(c=c.parentNode)g.unshift(c);c=b;while(c=c.parentNode)h.unshift(c);while(g[d]===h[d])d++;return d?ka(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0},n):n},fa.matches=function(a,b){return fa(a,null,null,b)},fa.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(T,"='$1']"),c.matchesSelector&&p&&!A[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return fa(b,n,null,[a]).length>0},fa.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},fa.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},fa.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},fa.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=fa.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=fa.selectors={cacheLength:50,createPseudo:ha,match:W,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ba,ca),a[3]=(a[3]||a[4]||a[5]||"").replace(ba,ca),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||fa.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&fa.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return W.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&U.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ba,ca).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=fa.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(P," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){while(p){m=b;while(m=m[p])if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];break}}else if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),t===!1)while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break;return t-=e,t===d||t%d===0&&t/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||fa.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ha(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ha(function(a){var b=[],c=[],d=h(a.replace(Q,"$1"));return d[u]?ha(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ha(function(a){return function(b){return fa(a,b).length>0}}),contains:ha(function(a){return a=a.replace(ba,ca),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ha(function(a){return V.test(a||"")||fa.error("unsupported lang: "+a),a=a.replace(ba,ca).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Y.test(a.nodeName)},input:function(a){return X.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:na(function(){return[0]}),last:na(function(a,b){return[b-1]}),eq:na(function(a,b,c){return[0>c?c+b:c]}),even:na(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:na(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:na(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:na(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=la(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=ma(b);function pa(){}pa.prototype=d.filters=d.pseudos,d.setFilters=new pa,g=fa.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=R.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=S.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(Q," ")}),h=h.slice(c.length));for(g in d.filter)!(e=W[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?fa.error(a):z(a,i).slice(0)};function qa(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function ra(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j,k=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(j=b[u]||(b[u]={}),i=j[b.uniqueID]||(j[b.uniqueID]={}),(h=i[d])&&h[0]===w&&h[1]===f)return k[2]=h[2];if(i[d]=k,k[2]=a(b,c,g))return!0}}}function sa(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ta(a,b,c){for(var d=0,e=b.length;e>d;d++)fa(a,b[d],c);return c}function ua(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function va(a,b,c,d,e,f){return d&&!d[u]&&(d=va(d)),e&&!e[u]&&(e=va(e,f)),ha(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ta(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:ua(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=ua(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=ua(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function wa(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=ra(function(a){return a===b},h,!0),l=ra(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[ra(sa(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return va(i>1&&sa(m),i>1&&qa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(Q,"$1"),c,e>i&&wa(a.slice(i,e)),f>e&&wa(a=a.slice(e)),f>e&&qa(a))}m.push(c)}return sa(m)}function xa(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,o,q,r=0,s="0",t=f&&[],u=[],v=j,x=f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&&(j=g===n||g||k);s!==z&&null!=(l=x[s]);s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);while(q=a[o++])if(q(l,g||n,h)){i.push(l);break}k&&(w=y)}c&&((l=!q&&l)&&r--,f&&t.push(l))}if(r+=s,c&&s!==r){o=0;while(q=b[o++])q(t,u,g,h);if(f){if(r>0)while(s--)t[s]||u[s]||(u[s]=F.call(i));u=ua(u)}H.apply(i,u),k&&!f&&u.length>0&&r+b.length>1&&fa.uniqueSort(i)}return k&&(w=y,j=v),t};return c?ha(f):f}return h=fa.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=wa(b[c]),f[u]?d.push(f):e.push(f);f=A(a,xa(e,d)),f.selector=a}return f},i=fa.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(ba,ca),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=W.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(ba,ca),_.test(j[0].type)&&oa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&qa(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,!b||_.test(a)&&oa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ia(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ia(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ja("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ia(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ja("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ia(function(a){return null==a.getAttribute("disabled")})||ja(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),fa}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.uniqueSort=n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},v=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},w=n.expr.match.needsContext,x=/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,y=/^.[^:#\[\.,]*$/;function z(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(y.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return n.inArray(a,b)>-1!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=[],d=this,e=d.length;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;e>b;b++)if(n.contains(d[b],this))return!0}));for(b=0;e>b;b++)n.find(a,d[b],c);return c=this.pushStack(e>1?n.unique(c):c),c.selector=this.selector?this.selector+" "+a:a,c},filter:function(a){return this.pushStack(z(this,a||[],!1))},not:function(a){return this.pushStack(z(this,a||[],!0))},is:function(a){return!!z(this,"string"==typeof a&&w.test(a)?n(a):a||[],!1).length}});var A,B=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,C=n.fn.init=function(a,b,c){var e,f;if(!a)return this;if(c=c||A,"string"==typeof a){if(e="<"===a.charAt(0)&&">"===a.charAt(a.length-1)&&a.length>=3?[null,a,null]:B.exec(a),!e||!e[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(e[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:d,!0)),x.test(e[1])&&n.isPlainObject(b))for(e in b)n.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e]);return this}if(f=d.getElementById(e[2]),f&&f.parentNode){if(f.id!==e[2])return A.find(a);this.length=1,this[0]=f}return this.context=d,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?"undefined"!=typeof c.ready?c.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};C.prototype=n.fn,A=n(d);var D=/^(?:parents|prev(?:Until|All))/,E={children:!0,contents:!0,next:!0,prev:!0};n.fn.extend({has:function(a){var b,c=n(a,this),d=c.length;return this.filter(function(){for(b=0;d>b;b++)if(n.contains(this,c[b]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=w.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.uniqueSort(f):f)},index:function(a){return a?"string"==typeof a?n.inArray(this[0],n(a)):n.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.uniqueSort(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function F(a,b){do a=a[b];while(a&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return u(a,"parentNode")},parentsUntil:function(a,b,c){return u(a,"parentNode",c)},next:function(a){return F(a,"nextSibling")},prev:function(a){return F(a,"previousSibling")},nextAll:function(a){return u(a,"nextSibling")},prevAll:function(a){return u(a,"previousSibling")},nextUntil:function(a,b,c){return u(a,"nextSibling",c)},prevUntil:function(a,b,c){return u(a,"previousSibling",c)},siblings:function(a){return v((a.parentNode||{}).firstChild,a)},children:function(a){return v(a.firstChild)},contents:function(a){return n.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(E[a]||(e=n.uniqueSort(e)),D.test(a)&&(e=e.reverse())),this.pushStack(e)}});var G=/\S+/g;function H(a){var b={};return n.each(a.match(G)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?H(a):n.extend({},a);var b,c,d,e,f=[],g=[],h=-1,i=function(){for(e=a.once,d=b=!0;g.length;h=-1){c=g.shift();while(++h<f.length)f[h].apply(c[0],c[1])===!1&&a.stopOnFalse&&(h=f.length,c=!1)}a.memory||(c=!1),b=!1,e&&(f=c?[]:"")},j={add:function(){return f&&(c&&!b&&(h=f.length-1,g.push(c)),function d(b){n.each(b,function(b,c){n.isFunction(c)?a.unique&&j.has(c)||f.push(c):c&&c.length&&"string"!==n.type(c)&&d(c)})}(arguments),c&&!b&&i()),this},remove:function(){return n.each(arguments,function(a,b){var c;while((c=n.inArray(b,f,c))>-1)f.splice(c,1),h>=c&&h--}),this},has:function(a){return a?n.inArray(a,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return e=g=[],f=c="",this},disabled:function(){return!f},lock:function(){return e=!0,c||j.disable(),this},locked:function(){return!!e},fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||i()),this},fire:function(){return j.fireWith(this,arguments),this},fired:function(){return!!d}};return j},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().progress(c.notify).done(c.resolve).fail(c.reject):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=e.call(arguments),d=c.length,f=1!==d||a&&n.isFunction(a.promise)?d:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(d){b[a]=this,c[a]=arguments.length>1?e.call(arguments):d,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(d>1)for(i=new Array(d),j=new Array(d),k=new Array(d);d>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().progress(h(b,j,i)).done(h(b,k,c)).fail(g.reject):--f;return f||g.resolveWith(k,c),g.promise()}});var I;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(I.resolveWith(d,[n]),n.fn.triggerHandler&&(n(d).triggerHandler("ready"),n(d).off("ready"))))}});function J(){d.addEventListener?(d.removeEventListener("DOMContentLoaded",K),a.removeEventListener("load",K)):(d.detachEvent("onreadystatechange",K),a.detachEvent("onload",K))}function K(){(d.addEventListener||"load"===a.event.type||"complete"===d.readyState)&&(J(),n.ready())}n.ready.promise=function(b){if(!I)if(I=n.Deferred(),"complete"===d.readyState)a.setTimeout(n.ready);else if(d.addEventListener)d.addEventListener("DOMContentLoaded",K),a.addEventListener("load",K);else{d.attachEvent("onreadystatechange",K),a.attachEvent("onload",K);var c=!1;try{c=null==a.frameElement&&d.documentElement}catch(e){}c&&c.doScroll&&!function f(){if(!n.isReady){try{c.doScroll("left")}catch(b){return a.setTimeout(f,50)}J(),n.ready()}}()}return I.promise(b)},n.ready.promise();var L;for(L in n(l))break;l.ownFirst="0"===L,l.inlineBlockNeedsLayout=!1,n(function(){var a,b,c,e;c=d.getElementsByTagName("body")[0],c&&c.style&&(b=d.createElement("div"),e=d.createElement("div"),e.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(e).appendChild(b),"undefined"!=typeof b.style.zoom&&(b.style.cssText="display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",l.inlineBlockNeedsLayout=a=3===b.offsetWidth,a&&(c.style.zoom=1)),c.removeChild(e))}),function(){var a=d.createElement("div");l.deleteExpando=!0;try{delete a.test}catch(b){l.deleteExpando=!1}a=null}();var M=function(a){var b=n.noData[(a.nodeName+" ").toLowerCase()],c=+a.nodeType||1;return 1!==c&&9!==c?!1:!b||b!==!0&&a.getAttribute("classid")===b},N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){if(void 0===c&&1===a.nodeType){var d="data-"+b.replace(O,"-$1").toLowerCase();if(c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?n.parseJSON(c):c}catch(e){}n.data(a,b,c)}else c=void 0}return c}function Q(a){var b;for(b in a)if(("data"!==b||!n.isEmptyObject(a[b]))&&"toJSON"!==b)return!1;
return!0}function R(a,b,d,e){if(M(a)){var f,g,h=n.expando,i=a.nodeType,j=i?n.cache:a,k=i?a[h]:a[h]&&h;if(k&&j[k]&&(e||j[k].data)||void 0!==d||"string"!=typeof b)return k||(k=i?a[h]=c.pop()||n.guid++:h),j[k]||(j[k]=i?{}:{toJSON:n.noop}),("object"==typeof b||"function"==typeof b)&&(e?j[k]=n.extend(j[k],b):j[k].data=n.extend(j[k].data,b)),g=j[k],e||(g.data||(g.data={}),g=g.data),void 0!==d&&(g[n.camelCase(b)]=d),"string"==typeof b?(f=g[b],null==f&&(f=g[n.camelCase(b)])):f=g,f}}function S(a,b,c){if(M(a)){var d,e,f=a.nodeType,g=f?n.cache:a,h=f?a[n.expando]:n.expando;if(g[h]){if(b&&(d=c?g[h]:g[h].data)){n.isArray(b)?b=b.concat(n.map(b,n.camelCase)):b in d?b=[b]:(b=n.camelCase(b),b=b in d?[b]:b.split(" ")),e=b.length;while(e--)delete d[b[e]];if(c?!Q(d):!n.isEmptyObject(d))return}(c||(delete g[h].data,Q(g[h])))&&(f?n.cleanData([a],!0):l.deleteExpando||g!=g.window?delete g[h]:g[h]=void 0)}}}n.extend({cache:{},noData:{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(a){return a=a.nodeType?n.cache[a[n.expando]]:a[n.expando],!!a&&!Q(a)},data:function(a,b,c){return R(a,b,c)},removeData:function(a,b){return S(a,b)},_data:function(a,b,c){return R(a,b,c,!0)},_removeData:function(a,b){return S(a,b,!0)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=n.data(f),1===f.nodeType&&!n._data(f,"parsedAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),P(f,d,e[d])));n._data(f,"parsedAttrs",!0)}return e}return"object"==typeof a?this.each(function(){n.data(this,a)}):arguments.length>1?this.each(function(){n.data(this,a,b)}):f?P(f,a,n.data(f,a)):void 0},removeData:function(a){return this.each(function(){n.removeData(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=n._data(a,b),c&&(!d||n.isArray(c)?d=n._data(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return n._data(a,c)||n._data(a,c,{empty:n.Callbacks("once memory").add(function(){n._removeData(a,b+"queue"),n._removeData(a,c)})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=n._data(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}}),function(){var a;l.shrinkWrapBlocks=function(){if(null!=a)return a;a=!1;var b,c,e;return c=d.getElementsByTagName("body")[0],c&&c.style?(b=d.createElement("div"),e=d.createElement("div"),e.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(e).appendChild(b),"undefined"!=typeof b.style.zoom&&(b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",b.appendChild(d.createElement("div")).style.width="5px",a=3!==b.offsetWidth),c.removeChild(e),a):void 0}}();var T=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,U=new RegExp("^(?:([+-])=|)("+T+")([a-z%]*)$","i"),V=["Top","Right","Bottom","Left"],W=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)};function X(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return n.css(a,b,"")},i=h(),j=c&&c[3]||(n.cssNumber[b]?"":"px"),k=(n.cssNumber[b]||"px"!==j&&+i)&&U.exec(n.css(a,b));if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do f=f||".5",k/=f,n.style(a,b,k+j);while(f!==(f=h()/i)&&1!==f&&--g)}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}var Y=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)Y(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},Z=/^(?:checkbox|radio)$/i,$=/<([\w:-]+)/,_=/^$|\/(?:java|ecma)script/i,aa=/^\s+/,ba="abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";function ca(a){var b=ba.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}!function(){var a=d.createElement("div"),b=d.createDocumentFragment(),c=d.createElement("input");a.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",l.leadingWhitespace=3===a.firstChild.nodeType,l.tbody=!a.getElementsByTagName("tbody").length,l.htmlSerialize=!!a.getElementsByTagName("link").length,l.html5Clone="<:nav></:nav>"!==d.createElement("nav").cloneNode(!0).outerHTML,c.type="checkbox",c.checked=!0,b.appendChild(c),l.appendChecked=c.checked,a.innerHTML="<textarea>x</textarea>",l.noCloneChecked=!!a.cloneNode(!0).lastChild.defaultValue,b.appendChild(a),c=d.createElement("input"),c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),a.appendChild(c),l.checkClone=a.cloneNode(!0).cloneNode(!0).lastChild.checked,l.noCloneEvent=!!a.addEventListener,a[n.expando]=1,l.attributes=!a.getAttribute(n.expando)}();var da={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:l.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]};da.optgroup=da.option,da.tbody=da.tfoot=da.colgroup=da.caption=da.thead,da.th=da.td;function ea(a,b){var c,d,e=0,f="undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||"*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll(b||"*"):void 0;if(!f)for(f=[],c=a.childNodes||a;null!=(d=c[e]);e++)!b||n.nodeName(d,b)?f.push(d):n.merge(f,ea(d,b));return void 0===b||b&&n.nodeName(a,b)?n.merge([a],f):f}function fa(a,b){for(var c,d=0;null!=(c=a[d]);d++)n._data(c,"globalEval",!b||n._data(b[d],"globalEval"))}var ga=/<|&#?\w+;/,ha=/<tbody/i;function ia(a){Z.test(a.type)&&(a.defaultChecked=a.checked)}function ja(a,b,c,d,e){for(var f,g,h,i,j,k,m,o=a.length,p=ca(b),q=[],r=0;o>r;r++)if(g=a[r],g||0===g)if("object"===n.type(g))n.merge(q,g.nodeType?[g]:g);else if(ga.test(g)){i=i||p.appendChild(b.createElement("div")),j=($.exec(g)||["",""])[1].toLowerCase(),m=da[j]||da._default,i.innerHTML=m[1]+n.htmlPrefilter(g)+m[2],f=m[0];while(f--)i=i.lastChild;if(!l.leadingWhitespace&&aa.test(g)&&q.push(b.createTextNode(aa.exec(g)[0])),!l.tbody){g="table"!==j||ha.test(g)?"<table>"!==m[1]||ha.test(g)?0:i:i.firstChild,f=g&&g.childNodes.length;while(f--)n.nodeName(k=g.childNodes[f],"tbody")&&!k.childNodes.length&&g.removeChild(k)}n.merge(q,i.childNodes),i.textContent="";while(i.firstChild)i.removeChild(i.firstChild);i=p.lastChild}else q.push(b.createTextNode(g));i&&p.removeChild(i),l.appendChecked||n.grep(ea(q,"input"),ia),r=0;while(g=q[r++])if(d&&n.inArray(g,d)>-1)e&&e.push(g);else if(h=n.contains(g.ownerDocument,g),i=ea(p.appendChild(g),"script"),h&&fa(i),c){f=0;while(g=i[f++])_.test(g.type||"")&&c.push(g)}return i=null,p}!function(){var b,c,e=d.createElement("div");for(b in{submit:!0,change:!0,focusin:!0})c="on"+b,(l[b]=c in a)||(e.setAttribute(c,"t"),l[b]=e.attributes[c].expando===!1);e=null}();var ka=/^(?:input|select|textarea)$/i,la=/^key/,ma=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,na=/^(?:focusinfocus|focusoutblur)$/,oa=/^([^.]*)(?:\.(.+)|)/;function pa(){return!0}function qa(){return!1}function ra(){try{return d.activeElement}catch(a){}}function sa(a,b,c,d,e,f){var g,h;if("object"==typeof b){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b)sa(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),e===!1)e=qa;else if(!e)return a;return 1===f&&(g=e,e=function(a){return n().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=n.guid++)),a.each(function(){n.event.add(this,b,e,d,c)})}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=n._data(a);if(r){c.handler&&(i=c,c=i.handler,e=i.selector),c.guid||(c.guid=n.guid++),(g=r.events)||(g=r.events={}),(k=r.handle)||(k=r.handle=function(a){return"undefined"==typeof n||a&&n.event.triggered===a.type?void 0:n.event.dispatch.apply(k.elem,arguments)},k.elem=a),b=(b||"").match(G)||[""],h=b.length;while(h--)f=oa.exec(b[h])||[],o=q=f[1],p=(f[2]||"").split(".").sort(),o&&(j=n.event.special[o]||{},o=(e?j.delegateType:j.bindType)||o,j=n.event.special[o]||{},l=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},i),(m=g[o])||(m=g[o]=[],m.delegateCount=0,j.setup&&j.setup.call(a,d,p,k)!==!1||(a.addEventListener?a.addEventListener(o,k,!1):a.attachEvent&&a.attachEvent("on"+o,k))),j.add&&(j.add.call(a,l),l.handler.guid||(l.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,l):m.push(l),n.event.global[o]=!0);a=null}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=n.hasData(a)&&n._data(a);if(r&&(k=r.events)){b=(b||"").match(G)||[""],j=b.length;while(j--)if(h=oa.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=k[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),i=f=m.length;while(f--)g=m[f],!e&&q!==g.origType||c&&c.guid!==g.guid||h&&!h.test(g.namespace)||d&&d!==g.selector&&("**"!==d||!g.selector)||(m.splice(f,1),g.selector&&m.delegateCount--,l.remove&&l.remove.call(a,g));i&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete k[o])}else for(o in k)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(k)&&(delete r.handle,n._removeData(a,"events"))}},trigger:function(b,c,e,f){var g,h,i,j,l,m,o,p=[e||d],q=k.call(b,"type")?b.type:b,r=k.call(b,"namespace")?b.namespace.split("."):[];if(i=m=e=e||d,3!==e.nodeType&&8!==e.nodeType&&!na.test(q+n.event.triggered)&&(q.indexOf(".")>-1&&(r=q.split("."),q=r.shift(),r.sort()),h=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=f?2:3,b.namespace=r.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=e),c=null==c?[b]:n.makeArray(c,[b]),l=n.event.special[q]||{},f||!l.trigger||l.trigger.apply(e,c)!==!1)){if(!f&&!l.noBubble&&!n.isWindow(e)){for(j=l.delegateType||q,na.test(j+q)||(i=i.parentNode);i;i=i.parentNode)p.push(i),m=i;m===(e.ownerDocument||d)&&p.push(m.defaultView||m.parentWindow||a)}o=0;while((i=p[o++])&&!b.isPropagationStopped())b.type=o>1?j:l.bindType||q,g=(n._data(i,"events")||{})[b.type]&&n._data(i,"handle"),g&&g.apply(i,c),g=h&&i[h],g&&g.apply&&M(i)&&(b.result=g.apply(i,c),b.result===!1&&b.preventDefault());if(b.type=q,!f&&!b.isDefaultPrevented()&&(!l._default||l._default.apply(p.pop(),c)===!1)&&M(e)&&h&&e[q]&&!n.isWindow(e)){m=e[h],m&&(e[h]=null),n.event.triggered=q;try{e[q]()}catch(s){}n.event.triggered=void 0,m&&(e[h]=m)}return b.result}},dispatch:function(a){a=n.event.fix(a);var b,c,d,f,g,h=[],i=e.call(arguments),j=(n._data(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())(!a.rnamespace||a.rnamespace.test(g.namespace))&&(a.handleObj=g,a.data=g.data,d=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==d&&(a.result=d)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&("click"!==a.type||isNaN(a.button)||a.button<1))for(;i!=this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>-1:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},fix:function(a){if(a[n.expando])return a;var b,c,e,f=a.type,g=a,h=this.fixHooks[f];h||(this.fixHooks[f]=h=ma.test(f)?this.mouseHooks:la.test(f)?this.keyHooks:{}),e=h.props?this.props.concat(h.props):this.props,a=new n.Event(g),b=e.length;while(b--)c=e[b],a[c]=g[c];return a.target||(a.target=g.srcElement||d),3===a.target.nodeType&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,h.filter?h.filter(a,g):a},props:"altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,e,f,g=b.button,h=b.fromElement;return null==a.pageX&&null!=b.clientX&&(e=a.target.ownerDocument||d,f=e.documentElement,c=e.body,a.pageX=b.clientX+(f&&f.scrollLeft||c&&c.scrollLeft||0)-(f&&f.clientLeft||c&&c.clientLeft||0),a.pageY=b.clientY+(f&&f.scrollTop||c&&c.scrollTop||0)-(f&&f.clientTop||c&&c.clientTop||0)),!a.relatedTarget&&h&&(a.relatedTarget=h===a.target?b.toElement:h),a.which||void 0===g||(a.which=1&g?1:2&g?3:4&g?2:0),a}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==ra()&&this.focus)try{return this.focus(),!1}catch(a){}},delegateType:"focusin"},blur:{trigger:function(){return this===ra()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return n.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c){var d=n.extend(new n.Event,c,{type:a,isSimulated:!0});n.event.trigger(d,null,b),d.isDefaultPrevented()&&c.preventDefault()}},n.removeEvent=d.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)}:function(a,b,c){var d="on"+b;a.detachEvent&&("undefined"==typeof a[d]&&(a[d]=null),a.detachEvent(d,c))},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?pa:qa):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={constructor:n.Event,isDefaultPrevented:qa,isPropagationStopped:qa,isImmediatePropagationStopped:qa,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=pa,a&&(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=pa,a&&!this.isSimulated&&(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=pa,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!n.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),l.submit||(n.event.special.submit={setup:function(){return n.nodeName(this,"form")?!1:void n.event.add(this,"click._submit keypress._submit",function(a){var b=a.target,c=n.nodeName(b,"input")||n.nodeName(b,"button")?n.prop(b,"form"):void 0;c&&!n._data(c,"submit")&&(n.event.add(c,"submit._submit",function(a){a._submitBubble=!0}),n._data(c,"submit",!0))})},postDispatch:function(a){a._submitBubble&&(delete a._submitBubble,this.parentNode&&!a.isTrigger&&n.event.simulate("submit",this.parentNode,a))},teardown:function(){return n.nodeName(this,"form")?!1:void n.event.remove(this,"._submit")}}),l.change||(n.event.special.change={setup:function(){return ka.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(n.event.add(this,"propertychange._change",function(a){"checked"===a.originalEvent.propertyName&&(this._justChanged=!0)}),n.event.add(this,"click._change",function(a){this._justChanged&&!a.isTrigger&&(this._justChanged=!1),n.event.simulate("change",this,a)})),!1):void n.event.add(this,"beforeactivate._change",function(a){var b=a.target;ka.test(b.nodeName)&&!n._data(b,"change")&&(n.event.add(b,"change._change",function(a){!this.parentNode||a.isSimulated||a.isTrigger||n.event.simulate("change",this.parentNode,a)}),n._data(b,"change",!0))})},handle:function(a){var b=a.target;return this!==b||a.isSimulated||a.isTrigger||"radio"!==b.type&&"checkbox"!==b.type?a.handleObj.handler.apply(this,arguments):void 0},teardown:function(){return n.event.remove(this,"._change"),!ka.test(this.nodeName)}}),l.focusin||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a))};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=n._data(d,b);e||d.addEventListener(a,c,!0),n._data(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=n._data(d,b)-1;e?n._data(d,b,e):(d.removeEventListener(a,c,!0),n._removeData(d,b))}}}),n.fn.extend({on:function(a,b,c,d){return sa(this,a,b,c,d)},one:function(a,b,c,d){return sa(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=qa),this.each(function(){n.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}});var ta=/ jQuery\d+="(?:null|\d+)"/g,ua=new RegExp("<(?:"+ba+")[\\s/>]","i"),va=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,wa=/<script|<style|<link/i,xa=/checked\s*(?:[^=]|=\s*.checked.)/i,ya=/^true\/(.*)/,za=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,Aa=ca(d),Ba=Aa.appendChild(d.createElement("div"));function Ca(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function Da(a){return a.type=(null!==n.find.attr(a,"type"))+"/"+a.type,a}function Ea(a){var b=ya.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function Fa(a,b){if(1===b.nodeType&&n.hasData(a)){var c,d,e,f=n._data(a),g=n._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;e>d;d++)n.event.add(b,c,h[c][d])}g.data&&(g.data=n.extend({},g.data))}}function Ga(a,b){var c,d,e;if(1===b.nodeType){if(c=b.nodeName.toLowerCase(),!l.noCloneEvent&&b[n.expando]){e=n._data(b);for(d in e.events)n.removeEvent(b,d,e.handle);b.removeAttribute(n.expando)}"script"===c&&b.text!==a.text?(Da(b).text=a.text,Ea(b)):"object"===c?(b.parentNode&&(b.outerHTML=a.outerHTML),l.html5Clone&&a.innerHTML&&!n.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):"input"===c&&Z.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):"option"===c?b.defaultSelected=b.selected=a.defaultSelected:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}}function Ha(a,b,c,d){b=f.apply([],b);var e,g,h,i,j,k,m=0,o=a.length,p=o-1,q=b[0],r=n.isFunction(q);if(r||o>1&&"string"==typeof q&&!l.checkClone&&xa.test(q))return a.each(function(e){var f=a.eq(e);r&&(b[0]=q.call(this,e,f.html())),Ha(f,b,c,d)});if(o&&(k=ja(b,a[0].ownerDocument,!1,a,d),e=k.firstChild,1===k.childNodes.length&&(k=e),e||d)){for(i=n.map(ea(k,"script"),Da),h=i.length;o>m;m++)g=k,m!==p&&(g=n.clone(g,!0,!0),h&&n.merge(i,ea(g,"script"))),c.call(a[m],g,m);if(h)for(j=i[i.length-1].ownerDocument,n.map(i,Ea),m=0;h>m;m++)g=i[m],_.test(g.type||"")&&!n._data(g,"globalEval")&&n.contains(j,g)&&(g.src?n._evalUrl&&n._evalUrl(g.src):n.globalEval((g.text||g.textContent||g.innerHTML||"").replace(za,"")));k=e=null}return a}function Ia(a,b,c){for(var d,e=b?n.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||n.cleanData(ea(d)),d.parentNode&&(c&&n.contains(d.ownerDocument,d)&&fa(ea(d,"script")),d.parentNode.removeChild(d));return a}n.extend({htmlPrefilter:function(a){return a.replace(va,"<$1></$2>")},clone:function(a,b,c){var d,e,f,g,h,i=n.contains(a.ownerDocument,a);if(l.html5Clone||n.isXMLDoc(a)||!ua.test("<"+a.nodeName+">")?f=a.cloneNode(!0):(Ba.innerHTML=a.outerHTML,Ba.removeChild(f=Ba.firstChild)),!(l.noCloneEvent&&l.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(d=ea(f),h=ea(a),g=0;null!=(e=h[g]);++g)d[g]&&Ga(e,d[g]);if(b)if(c)for(h=h||ea(a),d=d||ea(f),g=0;null!=(e=h[g]);g++)Fa(e,d[g]);else Fa(a,f);return d=ea(f,"script"),d.length>0&&fa(d,!i&&ea(a,"script")),d=h=e=null,f},cleanData:function(a,b){for(var d,e,f,g,h=0,i=n.expando,j=n.cache,k=l.attributes,m=n.event.special;null!=(d=a[h]);h++)if((b||M(d))&&(f=d[i],g=f&&j[f])){if(g.events)for(e in g.events)m[e]?n.event.remove(d,e):n.removeEvent(d,e,g.handle);j[f]&&(delete j[f],k||"undefined"==typeof d.removeAttribute?d[i]=void 0:d.removeAttribute(i),c.push(f))}}}),n.fn.extend({domManip:Ha,detach:function(a){return Ia(this,a,!0)},remove:function(a){return Ia(this,a)},text:function(a){return Y(this,function(a){return void 0===a?n.text(this):this.empty().append((this[0]&&this[0].ownerDocument||d).createTextNode(a))},null,a,arguments.length)},append:function(){return Ha(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ca(this,a);b.appendChild(a)}})},prepend:function(){return Ha(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ca(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return Ha(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return Ha(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++){1===a.nodeType&&n.cleanData(ea(a,!1));while(a.firstChild)a.removeChild(a.firstChild);a.options&&n.nodeName(a,"select")&&(a.options.length=0)}return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return Y(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a)return 1===b.nodeType?b.innerHTML.replace(ta,""):void 0;if("string"==typeof a&&!wa.test(a)&&(l.htmlSerialize||!ua.test(a))&&(l.leadingWhitespace||!aa.test(a))&&!da[($.exec(a)||["",""])[1].toLowerCase()]){a=n.htmlPrefilter(a);try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(ea(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];return Ha(this,arguments,function(b){var c=this.parentNode;n.inArray(this,a)<0&&(n.cleanData(ea(this)),c&&c.replaceChild(b,this))},a)}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=0,e=[],f=n(a),h=f.length-1;h>=d;d++)c=d===h?this:this.clone(!0),n(f[d])[b](c),g.apply(e,c.get());return this.pushStack(e)}});var Ja,Ka={HTML:"block",BODY:"block"};function La(a,b){var c=n(b.createElement(a)).appendTo(b.body),d=n.css(c[0],"display");return c.detach(),d}function Ma(a){var b=d,c=Ka[a];return c||(c=La(a,b),"none"!==c&&c||(Ja=(Ja||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=(Ja[0].contentWindow||Ja[0].contentDocument).document,b.write(),b.close(),c=La(a,b),Ja.detach()),Ka[a]=c),c}var Na=/^margin/,Oa=new RegExp("^("+T+")(?!px)[a-z%]+$","i"),Pa=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e},Qa=d.documentElement;!function(){var b,c,e,f,g,h,i=d.createElement("div"),j=d.createElement("div");if(j.style){j.style.cssText="float:left;opacity:.5",l.opacity="0.5"===j.style.opacity,l.cssFloat=!!j.style.cssFloat,j.style.backgroundClip="content-box",j.cloneNode(!0).style.backgroundClip="",l.clearCloneStyle="content-box"===j.style.backgroundClip,i=d.createElement("div"),i.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",j.innerHTML="",i.appendChild(j),l.boxSizing=""===j.style.boxSizing||""===j.style.MozBoxSizing||""===j.style.WebkitBoxSizing,n.extend(l,{reliableHiddenOffsets:function(){return null==b&&k(),f},boxSizingReliable:function(){return null==b&&k(),e},pixelMarginRight:function(){return null==b&&k(),c},pixelPosition:function(){return null==b&&k(),b},reliableMarginRight:function(){return null==b&&k(),g},reliableMarginLeft:function(){return null==b&&k(),h}});function k(){var k,l,m=d.documentElement;m.appendChild(i),j.style.cssText="-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",b=e=h=!1,c=g=!0,a.getComputedStyle&&(l=a.getComputedStyle(j),b="1%"!==(l||{}).top,h="2px"===(l||{}).marginLeft,e="4px"===(l||{width:"4px"}).width,j.style.marginRight="50%",c="4px"===(l||{marginRight:"4px"}).marginRight,k=j.appendChild(d.createElement("div")),k.style.cssText=j.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",k.style.marginRight=k.style.width="0",j.style.width="1px",g=!parseFloat((a.getComputedStyle(k)||{}).marginRight),j.removeChild(k)),j.style.display="none",f=0===j.getClientRects().length,f&&(j.style.display="",j.innerHTML="<table><tr><td></td><td>t</td></tr></table>",k=j.getElementsByTagName("td"),k[0].style.cssText="margin:0;border:0;padding:0;display:none",f=0===k[0].offsetHeight,f&&(k[0].style.display="",k[1].style.display="none",f=0===k[0].offsetHeight)),m.removeChild(i)}}}();var Ra,Sa,Ta=/^(top|right|bottom|left)$/;a.getComputedStyle?(Ra=function(b){var c=b.ownerDocument.defaultView;return c.opener||(c=a),c.getComputedStyle(b)},Sa=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ra(a),g=c?c.getPropertyValue(b)||c[b]:void 0,c&&(""!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),!l.pixelMarginRight()&&Oa.test(g)&&Na.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0===g?g:g+""}):Qa.currentStyle&&(Ra=function(a){return a.currentStyle},Sa=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ra(a),g=c?c[b]:void 0,null==g&&h&&h[b]&&(g=h[b]),Oa.test(g)&&!Ta.test(b)&&(d=h.left,e=a.runtimeStyle,f=e&&e.left,f&&(e.left=a.currentStyle.left),h.left="fontSize"===b?"1em":g,g=h.pixelLeft+"px",h.left=d,f&&(e.left=f)),void 0===g?g:g+""||"auto"});function Ua(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}var Va=/alpha\([^)]*\)/i,Wa=/opacity\s*=\s*([^)]*)/i,Xa=/^(none|table(?!-c[ea]).+)/,Ya=new RegExp("^("+T+")(.*)$","i"),Za={position:"absolute",visibility:"hidden",display:"block"},$a={letterSpacing:"0",fontWeight:"400"},_a=["Webkit","O","Moz","ms"],ab=d.createElement("div").style;function bb(a){if(a in ab)return a;var b=a.charAt(0).toUpperCase()+a.slice(1),c=_a.length;while(c--)if(a=_a[c]+b,a in ab)return a}function cb(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=n._data(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&W(d)&&(f[g]=n._data(d,"olddisplay",Ma(d.nodeName)))):(e=W(d),(c&&"none"!==c||!e)&&n._data(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}function db(a,b,c){var d=Ya.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function eb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+V[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+V[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+V[f]+"Width",!0,e))):(g+=n.css(a,"padding"+V[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+V[f]+"Width",!0,e)));return g}function fb(b,c,e){var f=!0,g="width"===c?b.offsetWidth:b.offsetHeight,h=Ra(b),i=l.boxSizing&&"border-box"===n.css(b,"boxSizing",!1,h);if(d.msFullscreenElement&&a.top!==a&&b.getClientRects().length&&(g=Math.round(100*b.getBoundingClientRect()[c])),0>=g||null==g){if(g=Sa(b,c,h),(0>g||null==g)&&(g=b.style[c]),Oa.test(g))return g;f=i&&(l.boxSizingReliable()||g===b.style[c]),g=parseFloat(g)||0}return g+eb(b,c,e||(i?"border":"content"),f,h)+"px"}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Sa(a,"opacity");return""===c?"1":c}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":l.cssFloat?"cssFloat":"styleFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;if(b=n.cssProps[h]||(n.cssProps[h]=bb(h)||h),g=n.cssHooks[b]||n.cssHooks[h],void 0===c)return g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b];if(f=typeof c,"string"===f&&(e=U.exec(c))&&e[1]&&(c=X(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(n.cssNumber[h]?"":"px")),l.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),!(g&&"set"in g&&void 0===(c=g.set(a,c,d)))))try{i[b]=c}catch(j){}}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=bb(h)||h),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(f=g.get(a,!0,c)),void 0===f&&(f=Sa(a,b,d)),"normal"===f&&b in $a&&(f=$a[b]),""===c||c?(e=parseFloat(f),c===!0||isFinite(e)?e||0:f):f}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?Xa.test(n.css(a,"display"))&&0===a.offsetWidth?Pa(a,Za,function(){return fb(a,b,d)}):fb(a,b,d):void 0},set:function(a,c,d){var e=d&&Ra(a);return db(a,c,d?eb(a,b,d,l.boxSizing&&"border-box"===n.css(a,"boxSizing",!1,e),e):0)}}}),l.opacity||(n.cssHooks.opacity={get:function(a,b){return Wa.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=n.isNumeric(b)?"alpha(opacity="+100*b+")":"",f=d&&d.filter||c.filter||"";c.zoom=1,(b>=1||""===b)&&""===n.trim(f.replace(Va,""))&&c.removeAttribute&&(c.removeAttribute("filter"),""===b||d&&!d.filter)||(c.filter=Va.test(f)?f.replace(Va,e):f+" "+e)}}),n.cssHooks.marginRight=Ua(l.reliableMarginRight,function(a,b){return b?Pa(a,{display:"inline-block"},Sa,[a,"marginRight"]):void 0}),n.cssHooks.marginLeft=Ua(l.reliableMarginLeft,function(a,b){return b?(parseFloat(Sa(a,"marginLeft"))||(n.contains(a.ownerDocument,a)?a.getBoundingClientRect().left-Pa(a,{
marginLeft:0},function(){return a.getBoundingClientRect().left}):0))+"px":void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+V[d]+b]=f[d]||f[d-2]||f[0];return e}},Na.test(a)||(n.cssHooks[a+b].set=db)}),n.fn.extend({css:function(a,b){return Y(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=Ra(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return cb(this,!0)},hide:function(){return cb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){W(this)?n(this).show():n(this).hide()})}});function gb(a,b,c,d,e){return new gb.prototype.init(a,b,c,d,e)}n.Tween=gb,gb.prototype={constructor:gb,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||n.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=gb.propHooks[this.prop];return a&&a.get?a.get(this):gb.propHooks._default.get(this)},run:function(a){var b,c=gb.propHooks[this.prop];return this.options.duration?this.pos=b=n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):gb.propHooks._default.set(this),this}},gb.prototype.init.prototype=gb.prototype,gb.propHooks={_default:{get:function(a){var b;return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[n.cssProps[a.prop]]&&!n.cssHooks[a.prop]?a.elem[a.prop]=a.now:n.style(a.elem,a.prop,a.now+a.unit)}}},gb.propHooks.scrollTop=gb.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},_default:"swing"},n.fx=gb.prototype.init,n.fx.step={};var hb,ib,jb=/^(?:toggle|show|hide)$/,kb=/queueHooks$/;function lb(){return a.setTimeout(function(){hb=void 0}),hb=n.now()}function mb(a,b){var c,d={height:a},e=0;for(b=b?1:0;4>e;e+=2-b)c=V[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function nb(a,b,c){for(var d,e=(qb.tweeners[b]||[]).concat(qb.tweeners["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function ob(a,b,c){var d,e,f,g,h,i,j,k,m=this,o={},p=a.style,q=a.nodeType&&W(a),r=n._data(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,m.always(function(){m.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[p.overflow,p.overflowX,p.overflowY],j=n.css(a,"display"),k="none"===j?n._data(a,"olddisplay")||Ma(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(l.inlineBlockNeedsLayout&&"inline"!==Ma(a.nodeName)?p.zoom=1:p.display="inline-block")),c.overflow&&(p.overflow="hidden",l.shrinkWrapBlocks()||m.always(function(){p.overflow=c.overflow[0],p.overflowX=c.overflow[1],p.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],jb.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(q?"hide":"show")){if("show"!==e||!r||void 0===r[d])continue;q=!0}o[d]=r&&r[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(o))"inline"===("none"===j?Ma(a.nodeName):j)&&(p.display=j);else{r?"hidden"in r&&(q=r.hidden):r=n._data(a,"fxshow",{}),f&&(r.hidden=!q),q?n(a).show():m.done(function(){n(a).hide()}),m.done(function(){var b;n._removeData(a,"fxshow");for(b in o)n.style(a,b,o[b])});for(d in o)g=nb(q?r[d]:0,d,m),d in r||(r[d]=g.start,q&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function pb(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function qb(a,b,c){var d,e,f=0,g=qb.prefilters.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=hb||lb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{},easing:n.easing._default},c),originalProperties:b,originalOptions:c,startTime:hb||lb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;for(pb(k,j.opts.specialEasing);g>f;f++)if(d=qb.prefilters[f].call(j,a,k,j.opts))return n.isFunction(d.stop)&&(n._queueHooks(j.elem,j.opts.queue).stop=n.proxy(d.stop,d)),d;return n.map(k,nb,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(qb,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);return X(c.elem,a,U.exec(b),c),c}]},tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.match(G);for(var c,d=0,e=a.length;e>d;d++)c=a[d],qb.tweeners[c]=qb.tweeners[c]||[],qb.tweeners[c].unshift(b)},prefilters:[ob],prefilter:function(a,b){b?qb.prefilters.unshift(a):qb.prefilters.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(W).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=qb(this,n.extend({},a),f);(e||n._data(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=n._data(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&kb.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=n._data(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(mb(b,!0),a,d,e)}}),n.each({slideDown:mb("show"),slideUp:mb("hide"),slideToggle:mb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=n.timers,c=0;for(hb=n.now();c<b.length;c++)a=b[c],a()||b[c]!==a||b.splice(c--,1);b.length||n.fx.stop(),hb=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){ib||(ib=a.setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){a.clearInterval(ib),ib=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(b,c){return b=n.fx?n.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a,b=d.createElement("input"),c=d.createElement("div"),e=d.createElement("select"),f=e.appendChild(d.createElement("option"));c=d.createElement("div"),c.setAttribute("className","t"),c.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",a=c.getElementsByTagName("a")[0],b.setAttribute("type","checkbox"),c.appendChild(b),a=c.getElementsByTagName("a")[0],a.style.cssText="top:1px",l.getSetAttribute="t"!==c.className,l.style=/top/.test(a.getAttribute("style")),l.hrefNormalized="/a"===a.getAttribute("href"),l.checkOn=!!b.value,l.optSelected=f.selected,l.enctype=!!d.createElement("form").enctype,e.disabled=!0,l.optDisabled=!f.disabled,b=d.createElement("input"),b.setAttribute("value",""),l.input=""===b.getAttribute("value"),b.value="t",b.setAttribute("type","radio"),l.radioValue="t"===b.value}();var rb=/\r/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(rb,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],(c.selected||i===e)&&(l.optDisabled?!c.disabled:null===c.getAttribute("disabled"))&&(!c.parentNode.disabled||!n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)if(d=e[g],n.inArray(n.valHooks.option.get(d),f)>=0)try{d.selected=c=!0}catch(h){d.scrollHeight}else d.selected=!1;return c||(a.selectedIndex=-1),e}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>-1:void 0}},l.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var sb,tb,ub=n.expr.attrHandle,vb=/^(?:checked|selected)$/i,wb=l.getSetAttribute,xb=l.input;n.fn.extend({attr:function(a,b){return Y(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return"undefined"==typeof a.getAttribute?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),e=n.attrHooks[b]||(n.expr.match.bool.test(b)?tb:sb)),void 0!==c?null===c?void n.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=n.find.attr(a,b),null==d?void 0:d))},attrHooks:{type:{set:function(a,b){if(!l.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(G);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)?xb&&wb||!vb.test(c)?a[d]=!1:a[n.camelCase("default-"+c)]=a[d]=!1:n.attr(a,c,""),a.removeAttribute(wb?c:d)}}),tb={set:function(a,b,c){return b===!1?n.removeAttr(a,c):xb&&wb||!vb.test(c)?a.setAttribute(!wb&&n.propFix[c]||c,c):a[n.camelCase("default-"+c)]=a[c]=!0,c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=ub[b]||n.find.attr;xb&&wb||!vb.test(b)?ub[b]=function(a,b,d){var e,f;return d||(f=ub[b],ub[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,ub[b]=f),e}:ub[b]=function(a,b,c){return c?void 0:a[n.camelCase("default-"+b)]?b.toLowerCase():null}}),xb&&wb||(n.attrHooks.value={set:function(a,b,c){return n.nodeName(a,"input")?void(a.defaultValue=b):sb&&sb.set(a,b,c)}}),wb||(sb={set:function(a,b,c){var d=a.getAttributeNode(c);return d||a.setAttributeNode(d=a.ownerDocument.createAttribute(c)),d.value=b+="","value"===c||b===a.getAttribute(c)?b:void 0}},ub.id=ub.name=ub.coords=function(a,b,c){var d;return c?void 0:(d=a.getAttributeNode(b))&&""!==d.value?d.value:null},n.valHooks.button={get:function(a,b){var c=a.getAttributeNode(b);return c&&c.specified?c.value:void 0},set:sb.set},n.attrHooks.contenteditable={set:function(a,b,c){sb.set(a,""===b?!1:b,c)}},n.each(["width","height"],function(a,b){n.attrHooks[b]={set:function(a,c){return""===c?(a.setAttribute(b,"auto"),c):void 0}}})),l.style||(n.attrHooks.style={get:function(a){return a.style.cssText||void 0},set:function(a,b){return a.style.cssText=b+""}});var yb=/^(?:input|select|textarea|button|object)$/i,zb=/^(?:a|area)$/i;n.fn.extend({prop:function(a,b){return Y(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return a=n.propFix[a]||a,this.each(function(){try{this[a]=void 0,delete this[a]}catch(b){}})}}),n.extend({prop:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return 1===f&&n.isXMLDoc(a)||(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=n.find.attr(a,"tabindex");return b?parseInt(b,10):yb.test(a.nodeName)||zb.test(a.nodeName)&&a.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),l.hrefNormalized||n.each(["href","src"],function(a,b){n.propHooks[b]={get:function(a){return a.getAttribute(b,4)}}}),l.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this}),l.enctype||(n.propFix.enctype="encoding");var Ab=/[\t\r\n\f]/g;function Bb(a){return n.attr(a,"class")||""}n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,Bb(this)))});if("string"==typeof a&&a){b=a.match(G)||[];while(c=this[i++])if(e=Bb(c),d=1===c.nodeType&&(" "+e+" ").replace(Ab," ")){g=0;while(f=b[g++])d.indexOf(" "+f+" ")<0&&(d+=f+" ");h=n.trim(d),e!==h&&n.attr(c,"class",h)}}return this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,Bb(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a){b=a.match(G)||[];while(c=this[i++])if(e=Bb(c),d=1===c.nodeType&&(" "+e+" ").replace(Ab," ")){g=0;while(f=b[g++])while(d.indexOf(" "+f+" ")>-1)d=d.replace(" "+f+" "," ");h=n.trim(d),e!==h&&n.attr(c,"class",h)}}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):n.isFunction(a)?this.each(function(c){n(this).toggleClass(a.call(this,c,Bb(this),b),b)}):this.each(function(){var b,d,e,f;if("string"===c){d=0,e=n(this),f=a.match(G)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(void 0===a||"boolean"===c)&&(b=Bb(this),b&&n._data(this,"__className__",b),n.attr(this,"class",b||a===!1?"":n._data(this,"__className__")||""))})},hasClass:function(a){var b,c,d=0;b=" "+a+" ";while(c=this[d++])if(1===c.nodeType&&(" "+Bb(c)+" ").replace(Ab," ").indexOf(b)>-1)return!0;return!1}}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}});var Cb=a.location,Db=n.now(),Eb=/\?/,Fb=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;n.parseJSON=function(b){if(a.JSON&&a.JSON.parse)return a.JSON.parse(b+"");var c,d=null,e=n.trim(b+"");return e&&!n.trim(e.replace(Fb,function(a,b,e,f){return c&&b&&(d=0),0===d?a:(c=e||b,d+=!f-!e,"")}))?Function("return "+e)():n.error("Invalid JSON: "+b)},n.parseXML=function(b){var c,d;if(!b||"string"!=typeof b)return null;try{a.DOMParser?(d=new a.DOMParser,c=d.parseFromString(b,"text/xml")):(c=new a.ActiveXObject("Microsoft.XMLDOM"),c.async="false",c.loadXML(b))}catch(e){c=void 0}return c&&c.documentElement&&!c.getElementsByTagName("parsererror").length||n.error("Invalid XML: "+b),c};var Gb=/#.*$/,Hb=/([?&])_=[^&]*/,Ib=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Jb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Kb=/^(?:GET|HEAD)$/,Lb=/^\/\//,Mb=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,Nb={},Ob={},Pb="*/".concat("*"),Qb=Cb.href,Rb=Mb.exec(Qb.toLowerCase())||[];function Sb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(G)||[];if(n.isFunction(c))while(d=f[e++])"+"===d.charAt(0)?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Tb(a,b,c,d){var e={},f=a===Ob;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Ub(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(d in b)void 0!==b[d]&&((e[d]?a:c||(c={}))[d]=b[d]);return c&&n.extend(!0,a,c),a}function Vb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===e&&(e=a.mimeType||b.getResponseHeader("Content-Type"));if(e)for(g in h)if(h[g]&&h[g].test(e)){i.unshift(g);break}if(i[0]in c)f=i[0];else{for(g in c){if(!i[0]||a.converters[g+" "+i[0]]){f=g;break}d||(d=g)}f=f||d}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function Wb(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Qb,type:"GET",isLocal:Jb.test(Rb[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Pb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Ub(Ub(a,n.ajaxSettings),b):Ub(n.ajaxSettings,a)},ajaxPrefilter:Sb(Nb),ajaxTransport:Sb(Ob),ajax:function(b,c){"object"==typeof b&&(c=b,b=void 0),c=c||{};var d,e,f,g,h,i,j,k,l=n.ajaxSetup({},c),m=l.context||l,o=l.context&&(m.nodeType||m.jquery)?n(m):n.event,p=n.Deferred(),q=n.Callbacks("once memory"),r=l.statusCode||{},s={},t={},u=0,v="canceled",w={readyState:0,getResponseHeader:function(a){var b;if(2===u){if(!k){k={};while(b=Ib.exec(g))k[b[1].toLowerCase()]=b[2]}b=k[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===u?g:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return u||(a=t[c]=t[c]||a,s[a]=b),this},overrideMimeType:function(a){return u||(l.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>u)for(b in a)r[b]=[r[b],a[b]];else w.always(a[w.status]);return this},abort:function(a){var b=a||v;return j&&j.abort(b),y(0,b),this}};if(p.promise(w).complete=q.add,w.success=w.done,w.error=w.fail,l.url=((b||l.url||Qb)+"").replace(Gb,"").replace(Lb,Rb[1]+"//"),l.type=c.method||c.type||l.method||l.type,l.dataTypes=n.trim(l.dataType||"*").toLowerCase().match(G)||[""],null==l.crossDomain&&(d=Mb.exec(l.url.toLowerCase()),l.crossDomain=!(!d||d[1]===Rb[1]&&d[2]===Rb[2]&&(d[3]||("http:"===d[1]?"80":"443"))===(Rb[3]||("http:"===Rb[1]?"80":"443")))),l.data&&l.processData&&"string"!=typeof l.data&&(l.data=n.param(l.data,l.traditional)),Tb(Nb,l,c,w),2===u)return w;i=n.event&&l.global,i&&0===n.active++&&n.event.trigger("ajaxStart"),l.type=l.type.toUpperCase(),l.hasContent=!Kb.test(l.type),f=l.url,l.hasContent||(l.data&&(f=l.url+=(Eb.test(f)?"&":"?")+l.data,delete l.data),l.cache===!1&&(l.url=Hb.test(f)?f.replace(Hb,"$1_="+Db++):f+(Eb.test(f)?"&":"?")+"_="+Db++)),l.ifModified&&(n.lastModified[f]&&w.setRequestHeader("If-Modified-Since",n.lastModified[f]),n.etag[f]&&w.setRequestHeader("If-None-Match",n.etag[f])),(l.data&&l.hasContent&&l.contentType!==!1||c.contentType)&&w.setRequestHeader("Content-Type",l.contentType),w.setRequestHeader("Accept",l.dataTypes[0]&&l.accepts[l.dataTypes[0]]?l.accepts[l.dataTypes[0]]+("*"!==l.dataTypes[0]?", "+Pb+"; q=0.01":""):l.accepts["*"]);for(e in l.headers)w.setRequestHeader(e,l.headers[e]);if(l.beforeSend&&(l.beforeSend.call(m,w,l)===!1||2===u))return w.abort();v="abort";for(e in{success:1,error:1,complete:1})w[e](l[e]);if(j=Tb(Ob,l,c,w)){if(w.readyState=1,i&&o.trigger("ajaxSend",[w,l]),2===u)return w;l.async&&l.timeout>0&&(h=a.setTimeout(function(){w.abort("timeout")},l.timeout));try{u=1,j.send(s,y)}catch(x){if(!(2>u))throw x;y(-1,x)}}else y(-1,"No Transport");function y(b,c,d,e){var k,s,t,v,x,y=c;2!==u&&(u=2,h&&a.clearTimeout(h),j=void 0,g=e||"",w.readyState=b>0?4:0,k=b>=200&&300>b||304===b,d&&(v=Vb(l,w,d)),v=Wb(l,v,w,k),k?(l.ifModified&&(x=w.getResponseHeader("Last-Modified"),x&&(n.lastModified[f]=x),x=w.getResponseHeader("etag"),x&&(n.etag[f]=x)),204===b||"HEAD"===l.type?y="nocontent":304===b?y="notmodified":(y=v.state,s=v.data,t=v.error,k=!t)):(t=y,(b||!y)&&(y="error",0>b&&(b=0))),w.status=b,w.statusText=(c||y)+"",k?p.resolveWith(m,[s,y,w]):p.rejectWith(m,[w,y,t]),w.statusCode(r),r=void 0,i&&o.trigger(k?"ajaxSuccess":"ajaxError",[w,l,k?s:t]),q.fireWith(m,[w,y]),i&&(o.trigger("ajaxComplete",[w,l]),--n.active||n.event.trigger("ajaxStop")))}return w},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax(n.extend({url:a,type:b,dataType:e,data:c,success:d},n.isPlainObject(a)&&a))}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){if(n.isFunction(a))return this.each(function(b){n(this).wrapAll(a.call(this,b))});if(this[0]){var b=n(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&1===a.firstChild.nodeType)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return n.isFunction(a)?this.each(function(b){n(this).wrapInner(a.call(this,b))}):this.each(function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}});function Xb(a){return a.style&&a.style.display||n.css(a,"display")}function Yb(a){while(a&&1===a.nodeType){if("none"===Xb(a)||"hidden"===a.type)return!0;a=a.parentNode}return!1}n.expr.filters.hidden=function(a){return l.reliableHiddenOffsets()?a.offsetWidth<=0&&a.offsetHeight<=0&&!a.getClientRects().length:Yb(a)},n.expr.filters.visible=function(a){return!n.expr.filters.hidden(a)};var Zb=/%20/g,$b=/\[\]$/,_b=/\r?\n/g,ac=/^(?:submit|button|image|reset|file)$/i,bc=/^(?:input|select|textarea|keygen)/i;function cc(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||$b.test(a)?d(a,e):cc(a+"["+("object"==typeof e&&null!=e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)cc(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)cc(c,a[c],b,e);return d.join("&").replace(Zb,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&bc.test(this.nodeName)&&!ac.test(a)&&(this.checked||!Z.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(_b,"\r\n")}}):{name:b.name,value:c.replace(_b,"\r\n")}}).get()}}),n.ajaxSettings.xhr=void 0!==a.ActiveXObject?function(){return this.isLocal?hc():d.documentMode>8?gc():/^(get|post|head|put|delete|options)$/i.test(this.type)&&gc()||hc()}:gc;var dc=0,ec={},fc=n.ajaxSettings.xhr();a.attachEvent&&a.attachEvent("onunload",function(){for(var a in ec)ec[a](void 0,!0)}),l.cors=!!fc&&"withCredentials"in fc,fc=l.ajax=!!fc,fc&&n.ajaxTransport(function(b){if(!b.crossDomain||l.cors){var c;return{send:function(d,e){var f,g=b.xhr(),h=++dc;if(g.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(f in b.xhrFields)g[f]=b.xhrFields[f];b.mimeType&&g.overrideMimeType&&g.overrideMimeType(b.mimeType),b.crossDomain||d["X-Requested-With"]||(d["X-Requested-With"]="XMLHttpRequest");for(f in d)void 0!==d[f]&&g.setRequestHeader(f,d[f]+"");g.send(b.hasContent&&b.data||null),c=function(a,d){var f,i,j;if(c&&(d||4===g.readyState))if(delete ec[h],c=void 0,g.onreadystatechange=n.noop,d)4!==g.readyState&&g.abort();else{j={},f=g.status,"string"==typeof g.responseText&&(j.text=g.responseText);try{i=g.statusText}catch(k){i=""}f||!b.isLocal||b.crossDomain?1223===f&&(f=204):f=j.text?200:404}j&&e(f,i,j,g.getAllResponseHeaders())},b.async?4===g.readyState?a.setTimeout(c):g.onreadystatechange=ec[h]=c:c()},abort:function(){c&&c(void 0,!0)}}}});function gc(){try{return new a.XMLHttpRequest}catch(b){}}function hc(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}n.ajaxPrefilter(function(a){a.crossDomain&&(a.contents.script=!1)}),n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c=d.head||n("head")[0]||d.documentElement;return{send:function(e,f){b=d.createElement("script"),b.async=!0,a.scriptCharset&&(b.charset=a.scriptCharset),b.src=a.url,b.onload=b.onreadystatechange=function(a,c){(c||!b.readyState||/loaded|complete/.test(b.readyState))&&(b.onload=b.onreadystatechange=null,b.parentNode&&b.parentNode.removeChild(b),b=null,c||f(200,"success"))},c.insertBefore(b,c.firstChild)},abort:function(){b&&b.onload(void 0,!0)}}}});var ic=[],jc=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=ic.pop()||n.expando+"_"+Db++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(jc.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&jc.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(jc,"$1"+e):b.jsonp!==!1&&(b.url+=(Eb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){void 0===f?n(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,ic.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),l.createHTMLDocument=function(){if(!d.implementation.createHTMLDocument)return!1;var a=d.implementation.createHTMLDocument("");return a.body.innerHTML="<form></form><form></form>",2===a.body.childNodes.length}(),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||(l.createHTMLDocument?d.implementation.createHTMLDocument(""):d);var e=x.exec(a),f=!c&&[];return e?[b.createElement(e[1])]:(e=ja([a],b,f),f&&f.length&&n(f).remove(),n.merge([],e.childNodes))};var kc=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&kc)return kc.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>-1&&(d=n.trim(a.slice(h,a.length)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e||"GET",dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).always(c&&function(a,b){g.each(function(){c.apply(g,f||[a.responseText,b,a])})}),this},n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};function lc(a){return n.isWindow(a)?a:9===a.nodeType?a.defaultView||a.parentWindow:!1}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&n.inArray("auto",[f,i])>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,n.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d={top:0,left:0},e=this[0],f=e&&e.ownerDocument;if(f)return b=f.documentElement,n.contains(b,e)?("undefined"!=typeof e.getBoundingClientRect&&(d=e.getBoundingClientRect()),c=lc(f),{top:d.top+(c.pageYOffset||b.scrollTop)-(b.clientTop||0),left:d.left+(c.pageXOffset||b.scrollLeft)-(b.clientLeft||0)}):d},position:function(){if(this[0]){var a,b,c={top:0,left:0},d=this[0];return"fixed"===n.css(d,"position")?b=d.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(c=a.offset()),c.top+=n.css(a[0],"borderTopWidth",!0)-a.scrollTop(),c.left+=n.css(a[0],"borderLeftWidth",!0)-a.scrollLeft()),{top:b.top-c.top-n.css(d,"marginTop",!0),left:b.left-c.left-n.css(d,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent;while(a&&!n.nodeName(a,"html")&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Qa})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c=/Y/.test(b);n.fn[a]=function(d){return Y(this,function(a,d,e){var f=lc(a);return void 0===e?f?b in f?f[b]:f.document.documentElement[d]:a[d]:void(f?f.scrollTo(c?n(f).scrollLeft():e,c?e:n(f).scrollTop()):a[d]=e)},a,d,arguments.length,null)}}),n.each(["top","left"],function(a,b){
n.cssHooks[b]=Ua(l.pixelPosition,function(a,c){return c?(c=Sa(a,b),Oa.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return Y(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}}),n.fn.size=function(){return this.length},n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var mc=a.jQuery,nc=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=nc),b&&a.jQuery===n&&(a.jQuery=mc),n},b||(a.jQuery=a.$=n),n});


if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(a){"use strict";var b=a.fn.jquery.split(" ")[0].split(".");if(b[0]<2&&b[1]<9||1==b[0]&&9==b[1]&&b[2]<1||b[0]>3)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4")}(jQuery),+function(a){"use strict";function b(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return{end:b[c]};return!1}a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one("bsTransitionEnd",function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b(),a.support.transition&&(a.event.special.bsTransitionEnd={bindType:a.support.transition.end,delegateType:a.support.transition.end,handle:function(b){if(a(b.target).is(this))return b.handleObj.handler.apply(this,arguments)}})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var c=a(this),e=c.data("bs.alert");e||c.data("bs.alert",e=new d(this)),"string"==typeof b&&e[b].call(c)})}var c='[data-dismiss="alert"]',d=function(b){a(b).on("click",c,this.close)};d.VERSION="3.3.7",d.TRANSITION_DURATION=150,d.prototype.close=function(b){function c(){g.detach().trigger("closed.bs.alert").remove()}var e=a(this),f=e.attr("data-target");f||(f=e.attr("href"),f=f&&f.replace(/.*(?=#[^\s]*$)/,""));var g=a("#"===f?[]:f);b&&b.preventDefault(),g.length||(g=e.closest(".alert")),g.trigger(b=a.Event("close.bs.alert")),b.isDefaultPrevented()||(g.removeClass("in"),a.support.transition&&g.hasClass("fade")?g.one("bsTransitionEnd",c).emulateTransitionEnd(d.TRANSITION_DURATION):c())};var e=a.fn.alert;a.fn.alert=b,a.fn.alert.Constructor=d,a.fn.alert.noConflict=function(){return a.fn.alert=e,this},a(document).on("click.bs.alert.data-api",c,d.prototype.close)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.button"),f="object"==typeof b&&b;e||d.data("bs.button",e=new c(this,f)),"toggle"==b?e.toggle():b&&e.setState(b)})}var c=function(b,d){this.$element=a(b),this.options=a.extend({},c.DEFAULTS,d),this.isLoading=!1};c.VERSION="3.3.7",c.DEFAULTS={loadingText:"loading..."},c.prototype.setState=function(b){var c="disabled",d=this.$element,e=d.is("input")?"val":"html",f=d.data();b+="Text",null==f.resetText&&d.data("resetText",d[e]()),setTimeout(a.proxy(function(){d[e](null==f[b]?this.options[b]:f[b]),"loadingText"==b?(this.isLoading=!0,d.addClass(c).attr(c,c).prop(c,!0)):this.isLoading&&(this.isLoading=!1,d.removeClass(c).removeAttr(c).prop(c,!1))},this),0)},c.prototype.toggle=function(){var a=!0,b=this.$element.closest('[data-toggle="buttons"]');if(b.length){var c=this.$element.find("input");"radio"==c.prop("type")?(c.prop("checked")&&(a=!1),b.find(".active").removeClass("active"),this.$element.addClass("active")):"checkbox"==c.prop("type")&&(c.prop("checked")!==this.$element.hasClass("active")&&(a=!1),this.$element.toggleClass("active")),c.prop("checked",this.$element.hasClass("active")),a&&c.trigger("change")}else this.$element.attr("aria-pressed",!this.$element.hasClass("active")),this.$element.toggleClass("active")};var d=a.fn.button;a.fn.button=b,a.fn.button.Constructor=c,a.fn.button.noConflict=function(){return a.fn.button=d,this},a(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(c){var d=a(c.target).closest(".btn");b.call(d,"toggle"),a(c.target).is('input[type="radio"], input[type="checkbox"]')||(c.preventDefault(),d.is("input,button")?d.trigger("focus"):d.find("input:visible,button:visible").first().trigger("focus"))}).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',function(b){a(b.target).closest(".btn").toggleClass("focus",/^focus(in)?$/.test(b.type))})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.carousel"),f=a.extend({},c.DEFAULTS,d.data(),"object"==typeof b&&b),g="string"==typeof b?b:f.slide;e||d.data("bs.carousel",e=new c(this,f)),"number"==typeof b?e.to(b):g?e[g]():f.interval&&e.pause().cycle()})}var c=function(b,c){this.$element=a(b),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,this.paused=null,this.sliding=null,this.interval=null,this.$active=null,this.$items=null,this.options.keyboard&&this.$element.on("keydown.bs.carousel",a.proxy(this.keydown,this)),"hover"==this.options.pause&&!("ontouchstart"in document.documentElement)&&this.$element.on("mouseenter.bs.carousel",a.proxy(this.pause,this)).on("mouseleave.bs.carousel",a.proxy(this.cycle,this))};c.VERSION="3.3.7",c.TRANSITION_DURATION=600,c.DEFAULTS={interval:5e3,pause:"hover",wrap:!0,keyboard:!0},c.prototype.keydown=function(a){if(!/input|textarea/i.test(a.target.tagName)){switch(a.which){case 37:this.prev();break;case 39:this.next();break;default:return}a.preventDefault()}},c.prototype.cycle=function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},c.prototype.getItemIndex=function(a){return this.$items=a.parent().children(".item"),this.$items.index(a||this.$active)},c.prototype.getItemForDirection=function(a,b){var c=this.getItemIndex(b),d="prev"==a&&0===c||"next"==a&&c==this.$items.length-1;if(d&&!this.options.wrap)return b;var e="prev"==a?-1:1,f=(c+e)%this.$items.length;return this.$items.eq(f)},c.prototype.to=function(a){var b=this,c=this.getItemIndex(this.$active=this.$element.find(".item.active"));if(!(a>this.$items.length-1||a<0))return this.sliding?this.$element.one("slid.bs.carousel",function(){b.to(a)}):c==a?this.pause().cycle():this.slide(a>c?"next":"prev",this.$items.eq(a))},c.prototype.pause=function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},c.prototype.next=function(){if(!this.sliding)return this.slide("next")},c.prototype.prev=function(){if(!this.sliding)return this.slide("prev")},c.prototype.slide=function(b,d){var e=this.$element.find(".item.active"),f=d||this.getItemForDirection(b,e),g=this.interval,h="next"==b?"left":"right",i=this;if(f.hasClass("active"))return this.sliding=!1;var j=f[0],k=a.Event("slide.bs.carousel",{relatedTarget:j,direction:h});if(this.$element.trigger(k),!k.isDefaultPrevented()){if(this.sliding=!0,g&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");var l=a(this.$indicators.children()[this.getItemIndex(f)]);l&&l.addClass("active")}var m=a.Event("slid.bs.carousel",{relatedTarget:j,direction:h});return a.support.transition&&this.$element.hasClass("slide")?(f.addClass(b),f[0].offsetWidth,e.addClass(h),f.addClass(h),e.one("bsTransitionEnd",function(){f.removeClass([b,h].join(" ")).addClass("active"),e.removeClass(["active",h].join(" ")),i.sliding=!1,setTimeout(function(){i.$element.trigger(m)},0)}).emulateTransitionEnd(c.TRANSITION_DURATION)):(e.removeClass("active"),f.addClass("active"),this.sliding=!1,this.$element.trigger(m)),g&&this.cycle(),this}};var d=a.fn.carousel;a.fn.carousel=b,a.fn.carousel.Constructor=c,a.fn.carousel.noConflict=function(){return a.fn.carousel=d,this};var e=function(c){var d,e=a(this),f=a(e.attr("data-target")||(d=e.attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,""));if(f.hasClass("carousel")){var g=a.extend({},f.data(),e.data()),h=e.attr("data-slide-to");h&&(g.interval=!1),b.call(f,g),h&&f.data("bs.carousel").to(h),c.preventDefault()}};a(document).on("click.bs.carousel.data-api","[data-slide]",e).on("click.bs.carousel.data-api","[data-slide-to]",e),a(window).on("load",function(){a('[data-ride="carousel"]').each(function(){var c=a(this);b.call(c,c.data())})})}(jQuery),+function(a){"use strict";function b(b){var c,d=b.attr("data-target")||(c=b.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,"");return a(d)}function c(b){return this.each(function(){var c=a(this),e=c.data("bs.collapse"),f=a.extend({},d.DEFAULTS,c.data(),"object"==typeof b&&b);!e&&f.toggle&&/show|hide/.test(b)&&(f.toggle=!1),e||c.data("bs.collapse",e=new d(this,f)),"string"==typeof b&&e[b]()})}var d=function(b,c){this.$element=a(b),this.options=a.extend({},d.DEFAULTS,c),this.$trigger=a('[data-toggle="collapse"][href="#'+b.id+'"],[data-toggle="collapse"][data-target="#'+b.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()};d.VERSION="3.3.7",d.TRANSITION_DURATION=350,d.DEFAULTS={toggle:!0},d.prototype.dimension=function(){var a=this.$element.hasClass("width");return a?"width":"height"},d.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var b,e=this.$parent&&this.$parent.children(".panel").children(".in, .collapsing");if(!(e&&e.length&&(b=e.data("bs.collapse"),b&&b.transitioning))){var f=a.Event("show.bs.collapse");if(this.$element.trigger(f),!f.isDefaultPrevented()){e&&e.length&&(c.call(e,"hide"),b||e.data("bs.collapse",null));var g=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1;var h=function(){this.$element.removeClass("collapsing").addClass("collapse in")[g](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return h.call(this);var i=a.camelCase(["scroll",g].join("-"));this.$element.one("bsTransitionEnd",a.proxy(h,this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i])}}}},d.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var b=a.Event("hide.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1;var e=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")};return a.support.transition?void this.$element[c](0).one("bsTransitionEnd",a.proxy(e,this)).emulateTransitionEnd(d.TRANSITION_DURATION):e.call(this)}}},d.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()},d.prototype.getParent=function(){return a(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(a.proxy(function(c,d){var e=a(d);this.addAriaAndCollapsedClass(b(e),e)},this)).end()},d.prototype.addAriaAndCollapsedClass=function(a,b){var c=a.hasClass("in");a.attr("aria-expanded",c),b.toggleClass("collapsed",!c).attr("aria-expanded",c)};var e=a.fn.collapse;a.fn.collapse=c,a.fn.collapse.Constructor=d,a.fn.collapse.noConflict=function(){return a.fn.collapse=e,this},a(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(d){var e=a(this);e.attr("data-target")||d.preventDefault();var f=b(e),g=f.data("bs.collapse"),h=g?"toggle":e.data();c.call(f,h)})}(jQuery),+function(a){"use strict";function b(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#[A-Za-z]/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));var d=c&&a(c);return d&&d.length?d:b.parent()}function c(c){c&&3===c.which||(a(e).remove(),a(f).each(function(){var d=a(this),e=b(d),f={relatedTarget:this};e.hasClass("open")&&(c&&"click"==c.type&&/input|textarea/i.test(c.target.tagName)&&a.contains(e[0],c.target)||(e.trigger(c=a.Event("hide.bs.dropdown",f)),c.isDefaultPrevented()||(d.attr("aria-expanded","false"),e.removeClass("open").trigger(a.Event("hidden.bs.dropdown",f)))))}))}function d(b){return this.each(function(){var c=a(this),d=c.data("bs.dropdown");d||c.data("bs.dropdown",d=new g(this)),"string"==typeof b&&d[b].call(c)})}var e=".dropdown-backdrop",f='[data-toggle="dropdown"]',g=function(b){a(b).on("click.bs.dropdown",this.toggle)};g.VERSION="3.3.7",g.prototype.toggle=function(d){var e=a(this);if(!e.is(".disabled, :disabled")){var f=b(e),g=f.hasClass("open");if(c(),!g){"ontouchstart"in document.documentElement&&!f.closest(".navbar-nav").length&&a(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(a(this)).on("click",c);var h={relatedTarget:this};if(f.trigger(d=a.Event("show.bs.dropdown",h)),d.isDefaultPrevented())return;e.trigger("focus").attr("aria-expanded","true"),f.toggleClass("open").trigger(a.Event("shown.bs.dropdown",h))}return!1}},g.prototype.keydown=function(c){if(/(38|40|27|32)/.test(c.which)&&!/input|textarea/i.test(c.target.tagName)){var d=a(this);if(c.preventDefault(),c.stopPropagation(),!d.is(".disabled, :disabled")){var e=b(d),g=e.hasClass("open");if(!g&&27!=c.which||g&&27==c.which)return 27==c.which&&e.find(f).trigger("focus"),d.trigger("click");var h=" li:not(.disabled):visible a",i=e.find(".dropdown-menu"+h);if(i.length){var j=i.index(c.target);38==c.which&&j>0&&j--,40==c.which&&j<i.length-1&&j++,~j||(j=0),i.eq(j).trigger("focus")}}}};var h=a.fn.dropdown;a.fn.dropdown=d,a.fn.dropdown.Constructor=g,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=h,this},a(document).on("click.bs.dropdown.data-api",c).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.bs.dropdown.data-api",f,g.prototype.toggle).on("keydown.bs.dropdown.data-api",f,g.prototype.keydown).on("keydown.bs.dropdown.data-api",".dropdown-menu",g.prototype.keydown)}(jQuery),+function(a){"use strict";function b(b,d){return this.each(function(){var e=a(this),f=e.data("bs.modal"),g=a.extend({},c.DEFAULTS,e.data(),"object"==typeof b&&b);f||e.data("bs.modal",f=new c(this,g)),"string"==typeof b?f[b](d):g.show&&f.show(d)})}var c=function(b,c){this.options=c,this.$body=a(document.body),this.$element=a(b),this.$dialog=this.$element.find(".modal-dialog"),this.$backdrop=null,this.isShown=null,this.originalBodyPad=null,this.scrollbarWidth=0,this.ignoreBackdropClick=!1,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,a.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};c.VERSION="3.3.7",c.TRANSITION_DURATION=300,c.BACKDROP_TRANSITION_DURATION=150,c.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},c.prototype.toggle=function(a){return this.isShown?this.hide():this.show(a)},c.prototype.show=function(b){var d=this,e=a.Event("show.bs.modal",{relatedTarget:b});this.$element.trigger(e),this.isShown||e.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.$body.addClass("modal-open"),this.escape(),this.resize(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.$dialog.on("mousedown.dismiss.bs.modal",function(){d.$element.one("mouseup.dismiss.bs.modal",function(b){a(b.target).is(d.$element)&&(d.ignoreBackdropClick=!0)})}),this.backdrop(function(){var e=a.support.transition&&d.$element.hasClass("fade");d.$element.parent().length||d.$element.appendTo(d.$body),d.$element.show().scrollTop(0),d.adjustDialog(),e&&d.$element[0].offsetWidth,d.$element.addClass("in"),d.enforceFocus();var f=a.Event("shown.bs.modal",{relatedTarget:b});e?d.$dialog.one("bsTransitionEnd",function(){d.$element.trigger("focus").trigger(f)}).emulateTransitionEnd(c.TRANSITION_DURATION):d.$element.trigger("focus").trigger(f)}))},c.prototype.hide=function(b){b&&b.preventDefault(),b=a.Event("hide.bs.modal"),this.$element.trigger(b),this.isShown&&!b.isDefaultPrevented()&&(this.isShown=!1,this.escape(),this.resize(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),this.$dialog.off("mousedown.dismiss.bs.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",a.proxy(this.hideModal,this)).emulateTransitionEnd(c.TRANSITION_DURATION):this.hideModal())},c.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(a){document===a.target||this.$element[0]===a.target||this.$element.has(a.target).length||this.$element.trigger("focus")},this))},c.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal",a.proxy(function(a){27==a.which&&this.hide()},this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal")},c.prototype.resize=function(){this.isShown?a(window).on("resize.bs.modal",a.proxy(this.handleUpdate,this)):a(window).off("resize.bs.modal")},c.prototype.hideModal=function(){var a=this;this.$element.hide(),this.backdrop(function(){a.$body.removeClass("modal-open"),a.resetAdjustments(),a.resetScrollbar(),a.$element.trigger("hidden.bs.modal")})},c.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},c.prototype.backdrop=function(b){var d=this,e=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var f=a.support.transition&&e;if(this.$backdrop=a(document.createElement("div")).addClass("modal-backdrop "+e).appendTo(this.$body),this.$element.on("click.dismiss.bs.modal",a.proxy(function(a){return this.ignoreBackdropClick?void(this.ignoreBackdropClick=!1):void(a.target===a.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus():this.hide()))},this)),f&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!b)return;f?this.$backdrop.one("bsTransitionEnd",b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):b()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var g=function(){d.removeBackdrop(),b&&b()};a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):g()}else b&&b()},c.prototype.handleUpdate=function(){this.adjustDialog()},c.prototype.adjustDialog=function(){var a=this.$element[0].scrollHeight>document.documentElement.clientHeight;this.$element.css({paddingLeft:!this.bodyIsOverflowing&&a?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!a?this.scrollbarWidth:""})},c.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})},c.prototype.checkScrollbar=function(){var a=window.innerWidth;if(!a){var b=document.documentElement.getBoundingClientRect();a=b.right-Math.abs(b.left)}this.bodyIsOverflowing=document.body.clientWidth<a,this.scrollbarWidth=this.measureScrollbar()},c.prototype.setScrollbar=function(){var a=parseInt(this.$body.css("padding-right")||0,10);this.originalBodyPad=document.body.style.paddingRight||"",this.bodyIsOverflowing&&this.$body.css("padding-right",a+this.scrollbarWidth)},c.prototype.resetScrollbar=function(){this.$body.css("padding-right",this.originalBodyPad)},c.prototype.measureScrollbar=function(){var a=document.createElement("div");a.className="modal-scrollbar-measure",this.$body.append(a);var b=a.offsetWidth-a.clientWidth;return this.$body[0].removeChild(a),b};var d=a.fn.modal;a.fn.modal=b,a.fn.modal.Constructor=c,a.fn.modal.noConflict=function(){return a.fn.modal=d,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(c){var d=a(this),e=d.attr("href"),f=a(d.attr("data-target")||e&&e.replace(/.*(?=#[^\s]+$)/,"")),g=f.data("bs.modal")?"toggle":a.extend({remote:!/#/.test(e)&&e},f.data(),d.data());d.is("a")&&c.preventDefault(),f.one("show.bs.modal",function(a){a.isDefaultPrevented()||f.one("hidden.bs.modal",function(){d.is(":visible")&&d.trigger("focus")})}),b.call(f,g,this)})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tooltip"),f="object"==typeof b&&b;!e&&/destroy|hide/.test(b)||(e||d.data("bs.tooltip",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.type=null,this.options=null,this.enabled=null,this.timeout=null,this.hoverState=null,this.$element=null,this.inState=null,this.init("tooltip",a,b)};c.VERSION="3.3.7",c.TRANSITION_DURATION=150,c.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},c.prototype.init=function(b,c,d){if(this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d),this.$viewport=this.options.viewport&&a(a.isFunction(this.options.viewport)?this.options.viewport.call(this,this.$element):this.options.viewport.selector||this.options.viewport),this.inState={click:!1,hover:!1,focus:!1},this.$element[0]instanceof document.constructor&&!this.options.selector)throw new Error("`selector` option must be specified when initializing "+this.type+" on the window.document object!");for(var e=this.options.trigger.split(" "),f=e.length;f--;){var g=e[f];if("click"==g)this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this));else if("manual"!=g){var h="hover"==g?"mouseenter":"focusin",i="hover"==g?"mouseleave":"focusout";this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this))}}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&"number"==typeof b.delay&&(b.delay={show:b.delay,hide:b.delay}),b},c.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d)}),b},c.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),b instanceof a.Event&&(c.inState["focusin"==b.type?"focus":"hover"]=!0),c.tip().hasClass("in")||"in"==c.hoverState?void(c.hoverState="in"):(clearTimeout(c.timeout),c.hoverState="in",c.options.delay&&c.options.delay.show?void(c.timeout=setTimeout(function(){"in"==c.hoverState&&c.show()},c.options.delay.show)):c.show())},c.prototype.isInStateTrue=function(){for(var a in this.inState)if(this.inState[a])return!0;return!1},c.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);if(c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),b instanceof a.Event&&(c.inState["focusout"==b.type?"focus":"hover"]=!1),!c.isInStateTrue())return clearTimeout(c.timeout),c.hoverState="out",c.options.delay&&c.options.delay.hide?void(c.timeout=setTimeout(function(){"out"==c.hoverState&&c.hide()},c.options.delay.hide)):c.hide()},c.prototype.show=function(){var b=a.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(b);var d=a.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);if(b.isDefaultPrevented()||!d)return;var e=this,f=this.tip(),g=this.getUID(this.type);this.setContent(),f.attr("id",g),this.$element.attr("aria-describedby",g),this.options.animation&&f.addClass("fade");var h="function"==typeof this.options.placement?this.options.placement.call(this,f[0],this.$element[0]):this.options.placement,i=/\s?auto?\s?/i,j=i.test(h);j&&(h=h.replace(i,"")||"top"),f.detach().css({top:0,left:0,display:"block"}).addClass(h).data("bs."+this.type,this),this.options.container?f.appendTo(this.options.container):f.insertAfter(this.$element),this.$element.trigger("inserted.bs."+this.type);var k=this.getPosition(),l=f[0].offsetWidth,m=f[0].offsetHeight;if(j){var n=h,o=this.getPosition(this.$viewport);h="bottom"==h&&k.bottom+m>o.bottom?"top":"top"==h&&k.top-m<o.top?"bottom":"right"==h&&k.right+l>o.width?"left":"left"==h&&k.left-l<o.left?"right":h,f.removeClass(n).addClass(h)}var p=this.getCalculatedOffset(h,k,l,m);this.applyPlacement(p,h);var q=function(){var a=e.hoverState;e.$element.trigger("shown.bs."+e.type),e.hoverState=null,"out"==a&&e.leave(e)};a.support.transition&&this.$tip.hasClass("fade")?f.one("bsTransitionEnd",q).emulateTransitionEnd(c.TRANSITION_DURATION):q()}},c.prototype.applyPlacement=function(b,c){var d=this.tip(),e=d[0].offsetWidth,f=d[0].offsetHeight,g=parseInt(d.css("margin-top"),10),h=parseInt(d.css("margin-left"),10);isNaN(g)&&(g=0),isNaN(h)&&(h=0),b.top+=g,b.left+=h,a.offset.setOffset(d[0],a.extend({using:function(a){d.css({top:Math.round(a.top),left:Math.round(a.left)})}},b),0),d.addClass("in");var i=d[0].offsetWidth,j=d[0].offsetHeight;"top"==c&&j!=f&&(b.top=b.top+f-j);var k=this.getViewportAdjustedDelta(c,b,i,j);k.left?b.left+=k.left:b.top+=k.top;var l=/top|bottom/.test(c),m=l?2*k.left-e+i:2*k.top-f+j,n=l?"offsetWidth":"offsetHeight";d.offset(b),this.replaceArrow(m,d[0][n],l)},c.prototype.replaceArrow=function(a,b,c){this.arrow().css(c?"left":"top",50*(1-a/b)+"%").css(c?"top":"left","")},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},c.prototype.hide=function(b){function d(){"in"!=e.hoverState&&f.detach(),e.$element&&e.$element.removeAttr("aria-describedby").trigger("hidden.bs."+e.type),b&&b()}var e=this,f=a(this.$tip),g=a.Event("hide.bs."+this.type);if(this.$element.trigger(g),!g.isDefaultPrevented())return f.removeClass("in"),a.support.transition&&f.hasClass("fade")?f.one("bsTransitionEnd",d).emulateTransitionEnd(c.TRANSITION_DURATION):d(),this.hoverState=null,this},c.prototype.fixTitle=function(){var a=this.$element;(a.attr("title")||"string"!=typeof a.attr("data-original-title"))&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},c.prototype.hasContent=function(){return this.getTitle()},c.prototype.getPosition=function(b){b=b||this.$element;var c=b[0],d="BODY"==c.tagName,e=c.getBoundingClientRect();null==e.width&&(e=a.extend({},e,{width:e.right-e.left,height:e.bottom-e.top}));var f=window.SVGElement&&c instanceof window.SVGElement,g=d?{top:0,left:0}:f?null:b.offset(),h={scroll:d?document.documentElement.scrollTop||document.body.scrollTop:b.scrollTop()},i=d?{width:a(window).width(),height:a(window).height()}:null;return a.extend({},e,h,i,g)},c.prototype.getCalculatedOffset=function(a,b,c,d){return"bottom"==a?{top:b.top+b.height,left:b.left+b.width/2-c/2}:"top"==a?{top:b.top-d,left:b.left+b.width/2-c/2}:"left"==a?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width}},c.prototype.getViewportAdjustedDelta=function(a,b,c,d){var e={top:0,left:0};if(!this.$viewport)return e;var f=this.options.viewport&&this.options.viewport.padding||0,g=this.getPosition(this.$viewport);if(/right|left/.test(a)){var h=b.top-f-g.scroll,i=b.top+f-g.scroll+d;h<g.top?e.top=g.top-h:i>g.top+g.height&&(e.top=g.top+g.height-i)}else{var j=b.left-f,k=b.left+f+c;j<g.left?e.left=g.left-j:k>g.right&&(e.left=g.left+g.width-k)}return e},c.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||("function"==typeof c.title?c.title.call(b[0]):c.title)},c.prototype.getUID=function(a){do a+=~~(1e6*Math.random());while(document.getElementById(a));return a},c.prototype.tip=function(){if(!this.$tip&&(this.$tip=a(this.options.template),1!=this.$tip.length))throw new Error(this.type+" `template` option must consist of exactly 1 top-level element!");return this.$tip},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},c.prototype.enable=function(){this.enabled=!0},c.prototype.disable=function(){this.enabled=!1},c.prototype.toggleEnabled=function(){this.enabled=!this.enabled},c.prototype.toggle=function(b){var c=this;b&&(c=a(b.currentTarget).data("bs."+this.type),c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c))),b?(c.inState.click=!c.inState.click,c.isInStateTrue()?c.enter(c):c.leave(c)):c.tip().hasClass("in")?c.leave(c):c.enter(c)},c.prototype.destroy=function(){var a=this;clearTimeout(this.timeout),this.hide(function(){a.$element.off("."+a.type).removeData("bs."+a.type),a.$tip&&a.$tip.detach(),a.$tip=null,a.$arrow=null,a.$viewport=null,a.$element=null})};var d=a.fn.tooltip;a.fn.tooltip=b,a.fn.tooltip.Constructor=c,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=d,this}}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.popover"),f="object"==typeof b&&b;!e&&/destroy|hide/.test(b)||(e||d.data("bs.popover",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.init("popover",a,b)};if(!a.fn.tooltip)throw new Error("Popover requires tooltip.js");c.VERSION="3.3.7",c.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),c.prototype=a.extend({},a.fn.tooltip.Constructor.prototype),c.prototype.constructor=c,c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content").children().detach().end()[this.options.html?"string"==typeof c?"html":"append":"text"](c),a.removeClass("fade top bottom left right in"),a.find(".popover-title").html()||a.find(".popover-title").hide()},c.prototype.hasContent=function(){return this.getTitle()||this.getContent()},c.prototype.getContent=function(){var a=this.$element,b=this.options;return a.attr("data-content")||("function"==typeof b.content?b.content.call(a[0]):b.content)},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")};var d=a.fn.popover;a.fn.popover=b,a.fn.popover.Constructor=c,a.fn.popover.noConflict=function(){return a.fn.popover=d,this}}(jQuery),+function(a){"use strict";function b(c,d){this.$body=a(document.body),this.$scrollElement=a(a(c).is(document.body)?window:c),this.options=a.extend({},b.DEFAULTS,d),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",a.proxy(this.process,this)),this.refresh(),this.process()}function c(c){return this.each(function(){var d=a(this),e=d.data("bs.scrollspy"),f="object"==typeof c&&c;e||d.data("bs.scrollspy",e=new b(this,f)),"string"==typeof c&&e[c]()})}b.VERSION="3.3.7",b.DEFAULTS={offset:10},b.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},b.prototype.refresh=function(){var b=this,c="offset",d=0;this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight(),a.isWindow(this.$scrollElement[0])||(c="position",d=this.$scrollElement.scrollTop()),this.$body.find(this.selector).map(function(){var b=a(this),e=b.data("target")||b.attr("href"),f=/^#./.test(e)&&a(e);return f&&f.length&&f.is(":visible")&&[[f[c]().top+d,e]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){b.offsets.push(this[0]),b.targets.push(this[1])})},b.prototype.process=function(){var a,b=this.$scrollElement.scrollTop()+this.options.offset,c=this.getScrollHeight(),d=this.options.offset+c-this.$scrollElement.height(),e=this.offsets,f=this.targets,g=this.activeTarget;if(this.scrollHeight!=c&&this.refresh(),b>=d)return g!=(a=f[f.length-1])&&this.activate(a);if(g&&b<e[0])return this.activeTarget=null,this.clear();for(a=e.length;a--;)g!=f[a]&&b>=e[a]&&(void 0===e[a+1]||b<e[a+1])&&this.activate(f[a])},b.prototype.activate=function(b){
this.activeTarget=b,this.clear();var c=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',d=a(c).parents("li").addClass("active");d.parent(".dropdown-menu").length&&(d=d.closest("li.dropdown").addClass("active")),d.trigger("activate.bs.scrollspy")},b.prototype.clear=function(){a(this.selector).parentsUntil(this.options.target,".active").removeClass("active")};var d=a.fn.scrollspy;a.fn.scrollspy=c,a.fn.scrollspy.Constructor=b,a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=d,this},a(window).on("load.bs.scrollspy.data-api",function(){a('[data-spy="scroll"]').each(function(){var b=a(this);c.call(b,b.data())})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tab");e||d.data("bs.tab",e=new c(this)),"string"==typeof b&&e[b]()})}var c=function(b){this.element=a(b)};c.VERSION="3.3.7",c.TRANSITION_DURATION=150,c.prototype.show=function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.data("target");if(d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),!b.parent("li").hasClass("active")){var e=c.find(".active:last a"),f=a.Event("hide.bs.tab",{relatedTarget:b[0]}),g=a.Event("show.bs.tab",{relatedTarget:e[0]});if(e.trigger(f),b.trigger(g),!g.isDefaultPrevented()&&!f.isDefaultPrevented()){var h=a(d);this.activate(b.closest("li"),c),this.activate(h,h.parent(),function(){e.trigger({type:"hidden.bs.tab",relatedTarget:b[0]}),b.trigger({type:"shown.bs.tab",relatedTarget:e[0]})})}}},c.prototype.activate=function(b,d,e){function f(){g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),h?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu").length&&b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),e&&e()}var g=d.find("> .active"),h=e&&a.support.transition&&(g.length&&g.hasClass("fade")||!!d.find("> .fade").length);g.length&&h?g.one("bsTransitionEnd",f).emulateTransitionEnd(c.TRANSITION_DURATION):f(),g.removeClass("in")};var d=a.fn.tab;a.fn.tab=b,a.fn.tab.Constructor=c,a.fn.tab.noConflict=function(){return a.fn.tab=d,this};var e=function(c){c.preventDefault(),b.call(a(this),"show")};a(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',e).on("click.bs.tab.data-api",'[data-toggle="pill"]',e)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.affix"),f="object"==typeof b&&b;e||d.data("bs.affix",e=new c(this,f)),"string"==typeof b&&e[b]()})}var c=function(b,d){this.options=a.extend({},c.DEFAULTS,d),this.$target=a(this.options.target).on("scroll.bs.affix.data-api",a.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",a.proxy(this.checkPositionWithEventLoop,this)),this.$element=a(b),this.affixed=null,this.unpin=null,this.pinnedOffset=null,this.checkPosition()};c.VERSION="3.3.7",c.RESET="affix affix-top affix-bottom",c.DEFAULTS={offset:0,target:window},c.prototype.getState=function(a,b,c,d){var e=this.$target.scrollTop(),f=this.$element.offset(),g=this.$target.height();if(null!=c&&"top"==this.affixed)return e<c&&"top";if("bottom"==this.affixed)return null!=c?!(e+this.unpin<=f.top)&&"bottom":!(e+g<=a-d)&&"bottom";var h=null==this.affixed,i=h?e:f.top,j=h?g:b;return null!=c&&e<=c?"top":null!=d&&i+j>=a-d&&"bottom"},c.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(c.RESET).addClass("affix");var a=this.$target.scrollTop(),b=this.$element.offset();return this.pinnedOffset=b.top-a},c.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1)},c.prototype.checkPosition=function(){if(this.$element.is(":visible")){var b=this.$element.height(),d=this.options.offset,e=d.top,f=d.bottom,g=Math.max(a(document).height(),a(document.body).height());"object"!=typeof d&&(f=e=d),"function"==typeof e&&(e=d.top(this.$element)),"function"==typeof f&&(f=d.bottom(this.$element));var h=this.getState(g,b,e,f);if(this.affixed!=h){null!=this.unpin&&this.$element.css("top","");var i="affix"+(h?"-"+h:""),j=a.Event(i+".bs.affix");if(this.$element.trigger(j),j.isDefaultPrevented())return;this.affixed=h,this.unpin="bottom"==h?this.getPinnedOffset():null,this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix","affixed")+".bs.affix")}"bottom"==h&&this.$element.offset({top:g-b-f})}};var d=a.fn.affix;a.fn.affix=b,a.fn.affix.Constructor=c,a.fn.affix.noConflict=function(){return a.fn.affix=d,this},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var c=a(this),d=c.data();d.offset=d.offset||{},null!=d.offsetBottom&&(d.offset.bottom=d.offsetBottom),null!=d.offsetTop&&(d.offset.top=d.offsetTop),b.call(c,d)})})}(jQuery);

!function(a,b,c,d){function e(b,c){this.settings=null,this.options=a.extend({},e.Defaults,c),this.$element=a(b),this._handlers={},this._plugins={},this._supress={},this._current=null,this._speed=null,this._coordinates=[],this._breakpoint=null,this._width=null,this._items=[],this._clones=[],this._mergers=[],this._widths=[],this._invalidated={},this._pipe=[],this._drag={time:null,target:null,pointer:null,stage:{start:null,current:null},direction:null},this._states={current:{},tags:{initializing:["busy"],animating:["busy"],dragging:["interacting"]}},a.each(["onResize","onThrottledResize"],a.proxy(function(b,c){this._handlers[c]=a.proxy(this[c],this)},this)),a.each(e.Plugins,a.proxy(function(a,b){this._plugins[a.charAt(0).toLowerCase()+a.slice(1)]=new b(this)},this)),a.each(e.Workers,a.proxy(function(b,c){this._pipe.push({filter:c.filter,run:a.proxy(c.run,this)})},this)),this.setup(),this.initialize()}e.Defaults={items:3,loop:!1,center:!1,rewind:!1,mouseDrag:!0,touchDrag:!0,pullDrag:!0,freeDrag:!1,margin:0,stagePadding:0,merge:!1,mergeFit:!0,autoWidth:!1,startPosition:0,rtl:!1,smartSpeed:250,fluidSpeed:!1,dragEndSpeed:!1,responsive:{},responsiveRefreshRate:200,responsiveBaseElement:b,fallbackEasing:"swing",info:!1,nestedItemSelector:!1,itemElement:"div",stageElement:"div",refreshClass:"owl-refresh",loadedClass:"owl-loaded",loadingClass:"owl-loading",rtlClass:"owl-rtl",responsiveClass:"owl-responsive",dragClass:"owl-drag",itemClass:"owl-item",stageClass:"owl-stage",stageOuterClass:"owl-stage-outer",grabClass:"owl-grab"},e.Width={Default:"default",Inner:"inner",Outer:"outer"},e.Type={Event:"event",State:"state"},e.Plugins={},e.Workers=[{filter:["width","settings"],run:function(){this._width=this.$element.width()}},{filter:["width","items","settings"],run:function(a){a.current=this._items&&this._items[this.relative(this._current)]}},{filter:["items","settings"],run:function(){this.$stage.children(".cloned").remove()}},{filter:["width","items","settings"],run:function(a){var b=this.settings.margin||"",c=!this.settings.autoWidth,d=this.settings.rtl,e={width:"auto","margin-left":d?b:"","margin-right":d?"":b};!c&&this.$stage.children().css(e),a.css=e}},{filter:["width","items","settings"],run:function(a){var b=(this.width()/this.settings.items).toFixed(3)-this.settings.margin,c=null,d=this._items.length,e=!this.settings.autoWidth,f=[];for(a.items={merge:!1,width:b};d--;)c=this._mergers[d],c=this.settings.mergeFit&&Math.min(c,this.settings.items)||c,a.items.merge=c>1||a.items.merge,f[d]=e?b*c:this._items[d].width();this._widths=f}},{filter:["items","settings"],run:function(){var b=[],c=this._items,d=this.settings,e=Math.max(2*d.items,4),f=2*Math.ceil(c.length/2),g=d.loop&&c.length?d.rewind?e:Math.max(e,f):0,h="",i="";for(g/=2;g--;)b.push(this.normalize(b.length/2,!0)),h+=c[b[b.length-1]][0].outerHTML,b.push(this.normalize(c.length-1-(b.length-1)/2,!0)),i=c[b[b.length-1]][0].outerHTML+i;this._clones=b,a(h).addClass("cloned").appendTo(this.$stage),a(i).addClass("cloned").prependTo(this.$stage)}},{filter:["width","items","settings"],run:function(){for(var a=this.settings.rtl?1:-1,b=this._clones.length+this._items.length,c=-1,d=0,e=0,f=[];++c<b;)d=f[c-1]||0,e=this._widths[this.relative(c)]+this.settings.margin,f.push(d+e*a);this._coordinates=f}},{filter:["width","items","settings"],run:function(){var a=this.settings.stagePadding,b=this._coordinates,c={width:Math.ceil(Math.abs(b[b.length-1]))+2*a,"padding-left":a||"","padding-right":a||""};this.$stage.css(c)}},{filter:["width","items","settings"],run:function(a){var b=this._coordinates.length,c=!this.settings.autoWidth,d=this.$stage.children();if(c&&a.items.merge)for(;b--;)a.css.width=this._widths[this.relative(b)],d.eq(b).css(a.css);else c&&(a.css.width=a.items.width,d.css(a.css))}},{filter:["items"],run:function(){this._coordinates.length<1&&this.$stage.removeAttr("style")}},{filter:["width","items","settings"],run:function(a){a.current=a.current?this.$stage.children().index(a.current):0,a.current=Math.max(this.minimum(),Math.min(this.maximum(),a.current)),this.reset(a.current)}},{filter:["position"],run:function(){this.animate(this.coordinates(this._current))}},{filter:["width","position","items","settings"],run:function(){var a,b,c,d,e=this.settings.rtl?1:-1,f=2*this.settings.stagePadding,g=this.coordinates(this.current())+f,h=g+this.width()*e,i=[];for(c=0,d=this._coordinates.length;d>c;c++)a=this._coordinates[c-1]||0,b=Math.abs(this._coordinates[c])+f*e,(this.op(a,"<=",g)&&this.op(a,">",h)||this.op(b,"<",g)&&this.op(b,">",h))&&i.push(c);this.$stage.children(".active").removeClass("active"),this.$stage.children(":eq("+i.join("), :eq(")+")").addClass("active"),this.settings.center&&(this.$stage.children(".center").removeClass("center"),this.$stage.children().eq(this.current()).addClass("center"))}}],e.prototype.initialize=function(){if(this.enter("initializing"),this.trigger("initialize"),this.$element.toggleClass(this.settings.rtlClass,this.settings.rtl),this.settings.autoWidth&&!this.is("pre-loading")){var b,c,e;b=this.$element.find("img"),c=this.settings.nestedItemSelector?"."+this.settings.nestedItemSelector:d,e=this.$element.children(c).width(),b.length&&0>=e&&this.preloadAutoWidthImages(b)}this.$element.addClass(this.options.loadingClass),this.$stage=a("<"+this.settings.stageElement+' class="'+this.settings.stageClass+'"/>').wrap('<div class="'+this.settings.stageOuterClass+'"/>'),this.$element.append(this.$stage.parent()),this.replace(this.$element.children().not(this.$stage.parent())),this.$element.is(":visible")?this.refresh():this.invalidate("width"),this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass),this.registerEventHandlers(),this.leave("initializing"),this.trigger("initialized")},e.prototype.setup=function(){var b=this.viewport(),c=this.options.responsive,d=-1,e=null;c?(a.each(c,function(a){b>=a&&a>d&&(d=Number(a))}),e=a.extend({},this.options,c[d]),"function"==typeof e.stagePadding&&(e.stagePadding=e.stagePadding()),delete e.responsive,e.responsiveClass&&this.$element.attr("class",this.$element.attr("class").replace(new RegExp("("+this.options.responsiveClass+"-)\\S+\\s","g"),"$1"+d))):e=a.extend({},this.options),this.trigger("change",{property:{name:"settings",value:e}}),this._breakpoint=d,this.settings=e,this.invalidate("settings"),this.trigger("changed",{property:{name:"settings",value:this.settings}})},e.prototype.optionsLogic=function(){this.settings.autoWidth&&(this.settings.stagePadding=!1,this.settings.merge=!1)},e.prototype.prepare=function(b){var c=this.trigger("prepare",{content:b});return c.data||(c.data=a("<"+this.settings.itemElement+"/>").addClass(this.options.itemClass).append(b)),this.trigger("prepared",{content:c.data}),c.data},e.prototype.update=function(){for(var b=0,c=this._pipe.length,d=a.proxy(function(a){return this[a]},this._invalidated),e={};c>b;)(this._invalidated.all||a.grep(this._pipe[b].filter,d).length>0)&&this._pipe[b].run(e),b++;this._invalidated={},!this.is("valid")&&this.enter("valid")},e.prototype.width=function(a){switch(a=a||e.Width.Default){case e.Width.Inner:case e.Width.Outer:return this._width;default:return this._width-2*this.settings.stagePadding+this.settings.margin}},e.prototype.refresh=function(){this.enter("refreshing"),this.trigger("refresh"),this.setup(),this.optionsLogic(),this.$element.addClass(this.options.refreshClass),this.update(),this.$element.removeClass(this.options.refreshClass),this.leave("refreshing"),this.trigger("refreshed")},e.prototype.onThrottledResize=function(){b.clearTimeout(this.resizeTimer),this.resizeTimer=b.setTimeout(this._handlers.onResize,this.settings.responsiveRefreshRate)},e.prototype.onResize=function(){return this._items.length?this._width===this.$element.width()?!1:this.$element.is(":visible")?(this.enter("resizing"),this.trigger("resize").isDefaultPrevented()?(this.leave("resizing"),!1):(this.invalidate("width"),this.refresh(),this.leave("resizing"),void this.trigger("resized"))):!1:!1},e.prototype.registerEventHandlers=function(){a.support.transition&&this.$stage.on(a.support.transition.end+".owl.core",a.proxy(this.onTransitionEnd,this)),this.settings.responsive!==!1&&this.on(b,"resize",this._handlers.onThrottledResize),this.settings.mouseDrag&&(this.$element.addClass(this.options.dragClass),this.$stage.on("mousedown.owl.core",a.proxy(this.onDragStart,this)),this.$stage.on("dragstart.owl.core selectstart.owl.core",function(){return!1})),this.settings.touchDrag&&(this.$stage.on("touchstart.owl.core",a.proxy(this.onDragStart,this)),this.$stage.on("touchcancel.owl.core",a.proxy(this.onDragEnd,this)))},e.prototype.onDragStart=function(b){var d=null;3!==b.which&&(a.support.transform?(d=this.$stage.css("transform").replace(/.*\(|\)| /g,"").split(","),d={x:d[16===d.length?12:4],y:d[16===d.length?13:5]}):(d=this.$stage.position(),d={x:this.settings.rtl?d.left+this.$stage.width()-this.width()+this.settings.margin:d.left,y:d.top}),this.is("animating")&&(a.support.transform?this.animate(d.x):this.$stage.stop(),this.invalidate("position")),this.$element.toggleClass(this.options.grabClass,"mousedown"===b.type),this.speed(0),this._drag.time=(new Date).getTime(),this._drag.target=a(b.target),this._drag.stage.start=d,this._drag.stage.current=d,this._drag.pointer=this.pointer(b),a(c).on("mouseup.owl.core touchend.owl.core",a.proxy(this.onDragEnd,this)),a(c).one("mousemove.owl.core touchmove.owl.core",a.proxy(function(b){var d=this.difference(this._drag.pointer,this.pointer(b));a(c).on("mousemove.owl.core touchmove.owl.core",a.proxy(this.onDragMove,this)),Math.abs(d.x)<Math.abs(d.y)&&this.is("valid")||(b.preventDefault(),this.enter("dragging"),this.trigger("drag"))},this)))},e.prototype.onDragMove=function(a){var b=null,c=null,d=null,e=this.difference(this._drag.pointer,this.pointer(a)),f=this.difference(this._drag.stage.start,e);this.is("dragging")&&(a.preventDefault(),this.settings.loop?(b=this.coordinates(this.minimum()),c=this.coordinates(this.maximum()+1)-b,f.x=((f.x-b)%c+c)%c+b):(b=this.settings.rtl?this.coordinates(this.maximum()):this.coordinates(this.minimum()),c=this.settings.rtl?this.coordinates(this.minimum()):this.coordinates(this.maximum()),d=this.settings.pullDrag?-1*e.x/5:0,f.x=Math.max(Math.min(f.x,b+d),c+d)),this._drag.stage.current=f,this.animate(f.x))},e.prototype.onDragEnd=function(b){var d=this.difference(this._drag.pointer,this.pointer(b)),e=this._drag.stage.current,f=d.x>0^this.settings.rtl?"left":"right";a(c).off(".owl.core"),this.$element.removeClass(this.options.grabClass),(0!==d.x&&this.is("dragging")||!this.is("valid"))&&(this.speed(this.settings.dragEndSpeed||this.settings.smartSpeed),this.current(this.closest(e.x,0!==d.x?f:this._drag.direction)),this.invalidate("position"),this.update(),this._drag.direction=f,(Math.abs(d.x)>3||(new Date).getTime()-this._drag.time>300)&&this._drag.target.one("click.owl.core",function(){return!1})),this.is("dragging")&&(this.leave("dragging"),this.trigger("dragged"))},e.prototype.closest=function(b,c){var d=-1,e=30,f=this.width(),g=this.coordinates();return this.settings.freeDrag||a.each(g,a.proxy(function(a,h){return"left"===c&&b>h-e&&h+e>b?d=a:"right"===c&&b>h-f-e&&h-f+e>b?d=a+1:this.op(b,"<",h)&&this.op(b,">",g[a+1]||h-f)&&(d="left"===c?a+1:a),-1===d},this)),this.settings.loop||(this.op(b,">",g[this.minimum()])?d=b=this.minimum():this.op(b,"<",g[this.maximum()])&&(d=b=this.maximum())),d},e.prototype.animate=function(b){var c=this.speed()>0;this.is("animating")&&this.onTransitionEnd(),c&&(this.enter("animating"),this.trigger("translate")),a.support.transform3d&&a.support.transition?this.$stage.css({transform:"translate3d("+b+"px,0px,0px)",transition:this.speed()/1e3+"s"}):c?this.$stage.animate({left:b+"px"},this.speed(),this.settings.fallbackEasing,a.proxy(this.onTransitionEnd,this)):this.$stage.css({left:b+"px"})},e.prototype.is=function(a){return this._states.current[a]&&this._states.current[a]>0},e.prototype.current=function(a){if(a===d)return this._current;if(0===this._items.length)return d;if(a=this.normalize(a),this._current!==a){var b=this.trigger("change",{property:{name:"position",value:a}});b.data!==d&&(a=this.normalize(b.data)),this._current=a,this.invalidate("position"),this.trigger("changed",{property:{name:"position",value:this._current}})}return this._current},e.prototype.invalidate=function(b){return"string"===a.type(b)&&(this._invalidated[b]=!0,this.is("valid")&&this.leave("valid")),a.map(this._invalidated,function(a,b){return b})},e.prototype.reset=function(a){a=this.normalize(a),a!==d&&(this._speed=0,this._current=a,this.suppress(["translate","translated"]),this.animate(this.coordinates(a)),this.release(["translate","translated"]))},e.prototype.normalize=function(a,b){var c=this._items.length,e=b?0:this._clones.length;return!this.isNumeric(a)||1>c?a=d:(0>a||a>=c+e)&&(a=((a-e/2)%c+c)%c+e/2),a},e.prototype.relative=function(a){return a-=this._clones.length/2,this.normalize(a,!0)},e.prototype.maximum=function(a){var b,c,d,e=this.settings,f=this._coordinates.length;if(e.loop)f=this._clones.length/2+this._items.length-1;else if(e.autoWidth||e.merge){for(b=this._items.length,c=this._items[--b].width(),d=this.$element.width();b--&&(c+=this._items[b].width()+this.settings.margin,!(c>d)););f=b+1}else f=e.center?this._items.length-1:this._items.length-e.items;return a&&(f-=this._clones.length/2),Math.max(f,0)},e.prototype.minimum=function(a){return a?0:this._clones.length/2},e.prototype.items=function(a){return a===d?this._items.slice():(a=this.normalize(a,!0),this._items[a])},e.prototype.mergers=function(a){return a===d?this._mergers.slice():(a=this.normalize(a,!0),this._mergers[a])},e.prototype.clones=function(b){var c=this._clones.length/2,e=c+this._items.length,f=function(a){return a%2===0?e+a/2:c-(a+1)/2};return b===d?a.map(this._clones,function(a,b){return f(b)}):a.map(this._clones,function(a,c){return a===b?f(c):null})},e.prototype.speed=function(a){return a!==d&&(this._speed=a),this._speed},e.prototype.coordinates=function(b){var c,e=1,f=b-1;return b===d?a.map(this._coordinates,a.proxy(function(a,b){return this.coordinates(b)},this)):(this.settings.center?(this.settings.rtl&&(e=-1,f=b+1),c=this._coordinates[b],c+=(this.width()-c+(this._coordinates[f]||0))/2*e):c=this._coordinates[f]||0,c=Math.ceil(c))},e.prototype.duration=function(a,b,c){return 0===c?0:Math.min(Math.max(Math.abs(b-a),1),6)*Math.abs(c||this.settings.smartSpeed)},e.prototype.to=function(a,b){var c=this.current(),d=null,e=a-this.relative(c),f=(e>0)-(0>e),g=this._items.length,h=this.minimum(),i=this.maximum();this.settings.loop?(!this.settings.rewind&&Math.abs(e)>g/2&&(e+=-1*f*g),a=c+e,d=((a-h)%g+g)%g+h,d!==a&&i>=d-e&&d-e>0&&(c=d-e,a=d,this.reset(c))):this.settings.rewind?(i+=1,a=(a%i+i)%i):a=Math.max(h,Math.min(i,a)),this.speed(this.duration(c,a,b)),this.current(a),this.$element.is(":visible")&&this.update()},e.prototype.next=function(a){a=a||!1,this.to(this.relative(this.current())+1,a)},e.prototype.prev=function(a){a=a||!1,this.to(this.relative(this.current())-1,a)},e.prototype.onTransitionEnd=function(a){return a!==d&&(a.stopPropagation(),(a.target||a.srcElement||a.originalTarget)!==this.$stage.get(0))?!1:(this.leave("animating"),void this.trigger("translated"))},e.prototype.viewport=function(){var d;if(this.options.responsiveBaseElement!==b)d=a(this.options.responsiveBaseElement).width();else if(b.innerWidth)d=b.innerWidth;else{if(!c.documentElement||!c.documentElement.clientWidth)throw"Can not detect viewport width.";d=c.documentElement.clientWidth}return d},e.prototype.replace=function(b){this.$stage.empty(),this._items=[],b&&(b=b instanceof jQuery?b:a(b)),this.settings.nestedItemSelector&&(b=b.find("."+this.settings.nestedItemSelector)),b.filter(function(){return 1===this.nodeType}).each(a.proxy(function(a,b){b=this.prepare(b),this.$stage.append(b),this._items.push(b),this._mergers.push(1*b.find("[data-merge]").addBack("[data-merge]").attr("data-merge")||1)},this)),this.reset(this.isNumeric(this.settings.startPosition)?this.settings.startPosition:0),this.invalidate("items")},e.prototype.add=function(b,c){var e=this.relative(this._current);c=c===d?this._items.length:this.normalize(c,!0),b=b instanceof jQuery?b:a(b),this.trigger("add",{content:b,position:c}),b=this.prepare(b),0===this._items.length||c===this._items.length?(0===this._items.length&&this.$stage.append(b),0!==this._items.length&&this._items[c-1].after(b),this._items.push(b),this._mergers.push(1*b.find("[data-merge]").addBack("[data-merge]").attr("data-merge")||1)):(this._items[c].before(b),this._items.splice(c,0,b),this._mergers.splice(c,0,1*b.find("[data-merge]").addBack("[data-merge]").attr("data-merge")||1)),this._items[e]&&this.reset(this._items[e].index()),this.invalidate("items"),this.trigger("added",{content:b,position:c})},e.prototype.remove=function(a){a=this.normalize(a,!0),a!==d&&(this.trigger("remove",{content:this._items[a],position:a}),this._items[a].remove(),this._items.splice(a,1),this._mergers.splice(a,1),this.invalidate("items"),this.trigger("removed",{content:null,position:a}))},e.prototype.preloadAutoWidthImages=function(b){b.each(a.proxy(function(b,c){this.enter("pre-loading"),c=a(c),a(new Image).one("load",a.proxy(function(a){c.attr("src",a.target.src),c.css("opacity",1),this.leave("pre-loading"),!this.is("pre-loading")&&!this.is("initializing")&&this.refresh()},this)).attr("src",c.attr("src")||c.attr("data-src")||c.attr("data-src-retina"))},this))},e.prototype.destroy=function(){this.$element.off(".owl.core"),this.$stage.off(".owl.core"),a(c).off(".owl.core"),this.settings.responsive!==!1&&(b.clearTimeout(this.resizeTimer),this.off(b,"resize",this._handlers.onThrottledResize));for(var d in this._plugins)this._plugins[d].destroy();this.$stage.children(".cloned").remove(),this.$stage.unwrap(),this.$stage.children().contents().unwrap(),this.$stage.children().unwrap(),this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class",this.$element.attr("class").replace(new RegExp(this.options.responsiveClass+"-\\S+\\s","g"),"")).removeData("owl.carousel")},e.prototype.op=function(a,b,c){var d=this.settings.rtl;switch(b){case"<":return d?a>c:c>a;case">":return d?c>a:a>c;case">=":return d?c>=a:a>=c;case"<=":return d?a>=c:c>=a}},e.prototype.on=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,d):a.attachEvent&&a.attachEvent("on"+b,c)},e.prototype.off=function(a,b,c,d){a.removeEventListener?a.removeEventListener(b,c,d):a.detachEvent&&a.detachEvent("on"+b,c)},e.prototype.trigger=function(b,c,d,f,g){var h={item:{count:this._items.length,index:this.current()}},i=a.camelCase(a.grep(["on",b,d],function(a){return a}).join("-").toLowerCase()),j=a.Event([b,"owl",d||"carousel"].join(".").toLowerCase(),a.extend({relatedTarget:this},h,c));return this._supress[b]||(a.each(this._plugins,function(a,b){b.onTrigger&&b.onTrigger(j)}),this.register({type:e.Type.Event,name:b}),this.$element.trigger(j),this.settings&&"function"==typeof this.settings[i]&&this.settings[i].call(this,j)),j},e.prototype.enter=function(b){a.each([b].concat(this._states.tags[b]||[]),a.proxy(function(a,b){this._states.current[b]===d&&(this._states.current[b]=0),this._states.current[b]++},this))},e.prototype.leave=function(b){a.each([b].concat(this._states.tags[b]||[]),a.proxy(function(a,b){this._states.current[b]--},this))},e.prototype.register=function(b){if(b.type===e.Type.Event){if(a.event.special[b.name]||(a.event.special[b.name]={}),!a.event.special[b.name].owl){var c=a.event.special[b.name]._default;a.event.special[b.name]._default=function(a){return!c||!c.apply||a.namespace&&-1!==a.namespace.indexOf("owl")?a.namespace&&a.namespace.indexOf("owl")>-1:c.apply(this,arguments)},a.event.special[b.name].owl=!0}}else b.type===e.Type.State&&(this._states.tags[b.name]?this._states.tags[b.name]=this._states.tags[b.name].concat(b.tags):this._states.tags[b.name]=b.tags,this._states.tags[b.name]=a.grep(this._states.tags[b.name],a.proxy(function(c,d){return a.inArray(c,this._states.tags[b.name])===d},this)))},e.prototype.suppress=function(b){a.each(b,a.proxy(function(a,b){this._supress[b]=!0},this))},e.prototype.release=function(b){a.each(b,a.proxy(function(a,b){delete this._supress[b]},this))},e.prototype.pointer=function(a){var c={x:null,y:null};return a=a.originalEvent||a||b.event,a=a.touches&&a.touches.length?a.touches[0]:a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:a,a.pageX?(c.x=a.pageX,c.y=a.pageY):(c.x=a.clientX,c.y=a.clientY),c},e.prototype.isNumeric=function(a){return!isNaN(parseFloat(a))},e.prototype.difference=function(a,b){return{x:a.x-b.x,y:a.y-b.y}},a.fn.owlCarousel=function(b){var c=Array.prototype.slice.call(arguments,1);return this.each(function(){var d=a(this),f=d.data("owl.carousel");f||(f=new e(this,"object"==typeof b&&b),d.data("owl.carousel",f),a.each(["next","prev","to","destroy","refresh","replace","add","remove"],function(b,c){f.register({type:e.Type.Event,name:c}),f.$element.on(c+".owl.carousel.core",a.proxy(function(a){a.namespace&&a.relatedTarget!==this&&(this.suppress([c]),f[c].apply(this,[].slice.call(arguments,1)),this.release([c]))},f))})),"string"==typeof b&&"_"!==b.charAt(0)&&f[b].apply(f,c)})},a.fn.owlCarousel.Constructor=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this._core=b,this._interval=null,this._visible=null,this._handlers={"initialized.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.autoRefresh&&this.watch()},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this._core.$element.on(this._handlers)};e.Defaults={autoRefresh:!0,autoRefreshInterval:500},e.prototype.watch=function(){this._interval||(this._visible=this._core.$element.is(":visible"),this._interval=b.setInterval(a.proxy(this.refresh,this),this._core.settings.autoRefreshInterval))},e.prototype.refresh=function(){this._core.$element.is(":visible")!==this._visible&&(this._visible=!this._visible,this._core.$element.toggleClass("owl-hidden",!this._visible),this._visible&&this._core.invalidate("width")&&this._core.refresh())},e.prototype.destroy=function(){var a,c;b.clearInterval(this._interval);for(a in this._handlers)this._core.$element.off(a,this._handlers[a]);for(c in Object.getOwnPropertyNames(this))"function"!=typeof this[c]&&(this[c]=null)},a.fn.owlCarousel.Constructor.Plugins.AutoRefresh=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this._core=b,this._loaded=[],this._handlers={"initialized.owl.carousel change.owl.carousel resized.owl.carousel":a.proxy(function(b){if(b.namespace&&this._core.settings&&this._core.settings.lazyLoad&&(b.property&&"position"==b.property.name||"initialized"==b.type))for(var c=this._core.settings,e=c.center&&Math.ceil(c.items/2)||c.items,f=c.center&&-1*e||0,g=(b.property&&b.property.value!==d?b.property.value:this._core.current())+f,h=this._core.clones().length,i=a.proxy(function(a,b){this.load(b)},this);f++<e;)this.load(h/2+this._core.relative(g)),h&&a.each(this._core.clones(this._core.relative(g)),i),g++},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this._core.$element.on(this._handlers)};e.Defaults={lazyLoad:!1},e.prototype.load=function(c){var d=this._core.$stage.children().eq(c),e=d&&d.find(".owl-lazy");!e||a.inArray(d.get(0),this._loaded)>-1||(e.each(a.proxy(function(c,d){var e,f=a(d),g=b.devicePixelRatio>1&&f.attr("data-src-retina")||f.attr("data-src");this._core.trigger("load",{element:f,url:g},"lazy"),f.is("img")?f.one("load.owl.lazy",a.proxy(function(){f.css("opacity",1),this._core.trigger("loaded",{element:f,url:g},"lazy")},this)).attr("src",g):(e=new Image,e.onload=a.proxy(function(){f.css({"background-image":"url("+g+")",opacity:"1"}),this._core.trigger("loaded",{element:f,url:g},"lazy")},this),e.src=g)},this)),this._loaded.push(d.get(0)))},e.prototype.destroy=function(){var a,b;for(a in this.handlers)this._core.$element.off(a,this.handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.Lazy=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this._core=b,this._handlers={"initialized.owl.carousel refreshed.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.autoHeight&&this.update()},this),"changed.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.autoHeight&&"position"==a.property.name&&this.update()},this),"loaded.owl.lazy":a.proxy(function(a){a.namespace&&this._core.settings.autoHeight&&a.element.closest("."+this._core.settings.itemClass).index()===this._core.current()&&this.update()},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this._core.$element.on(this._handlers)};e.Defaults={autoHeight:!1,autoHeightClass:"owl-height"},e.prototype.update=function(){var b=this._core._current,c=b+this._core.settings.items,d=this._core.$stage.children().toArray().slice(b,c),e=[],f=0;a.each(d,function(b,c){e.push(a(c).height())}),f=Math.max.apply(null,e),this._core.$stage.parent().height(f).addClass(this._core.settings.autoHeightClass)},e.prototype.destroy=function(){var a,b;for(a in this._handlers)this._core.$element.off(a,this._handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.AutoHeight=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this._core=b,this._videos={},this._playing=null,this._handlers={"initialized.owl.carousel":a.proxy(function(a){a.namespace&&this._core.register({type:"state",name:"playing",tags:["interacting"]})},this),"resize.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.video&&this.isInFullScreen()&&a.preventDefault()},this),"refreshed.owl.carousel":a.proxy(function(a){a.namespace&&this._core.is("resizing")&&this._core.$stage.find(".cloned .owl-video-frame").remove()},this),"changed.owl.carousel":a.proxy(function(a){a.namespace&&"position"===a.property.name&&this._playing&&this.stop()},this),"prepared.owl.carousel":a.proxy(function(b){if(b.namespace){var c=a(b.content).find(".owl-video");c.length&&(c.css("display","none"),this.fetch(c,a(b.content)))}},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this._core.$element.on(this._handlers),this._core.$element.on("click.owl.video",".owl-video-play-icon",a.proxy(function(a){this.play(a)},this))};e.Defaults={video:!1,videoHeight:!1,videoWidth:!1},e.prototype.fetch=function(a,b){var c=function(){return a.attr("data-vimeo-id")?"vimeo":a.attr("data-vzaar-id")?"vzaar":"youtube"}(),d=a.attr("data-vimeo-id")||a.attr("data-youtube-id")||a.attr("data-vzaar-id"),e=a.attr("data-width")||this._core.settings.videoWidth,f=a.attr("data-height")||this._core.settings.videoHeight,g=a.attr("href");if(!g)throw new Error("Missing video URL.");if(d=g.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/),d[3].indexOf("youtu")>-1)c="youtube";else if(d[3].indexOf("vimeo")>-1)c="vimeo";else{if(!(d[3].indexOf("vzaar")>-1))throw new Error("Video URL not supported.");c="vzaar"}d=d[6],this._videos[g]={type:c,id:d,width:e,height:f},b.attr("data-video",g),this.thumbnail(a,this._videos[g])},e.prototype.thumbnail=function(b,c){var d,e,f,g=c.width&&c.height?'style="width:'+c.width+"px;height:"+c.height+'px;"':"",h=b.find("img"),i="src",j="",k=this._core.settings,l=function(a){e='<div class="owl-video-play-icon"></div>',d=k.lazyLoad?'<div class="owl-video-tn '+j+'" '+i+'="'+a+'"></div>':'<div class="owl-video-tn" style="opacity:1;background-image:url('+a+')"></div>',b.after(d),b.after(e)};return b.wrap('<div class="owl-video-wrapper"'+g+"></div>"),this._core.settings.lazyLoad&&(i="data-src",j="owl-lazy"),h.length?(l(h.attr(i)),h.remove(),!1):void("youtube"===c.type?(f="//img.youtube.com/vi/"+c.id+"/hqdefault.jpg",l(f)):"vimeo"===c.type?a.ajax({type:"GET",url:"//vimeo.com/api/v2/video/"+c.id+".json",jsonp:"callback",dataType:"jsonp",success:function(a){f=a[0].thumbnail_large,l(f)}}):"vzaar"===c.type&&a.ajax({type:"GET",url:"//vzaar.com/api/videos/"+c.id+".json",jsonp:"callback",dataType:"jsonp",success:function(a){f=a.framegrab_url,l(f)}}))},e.prototype.stop=function(){this._core.trigger("stop",null,"video"),this._playing.find(".owl-video-frame").remove(),this._playing.removeClass("owl-video-playing"),this._playing=null,this._core.leave("playing"),this._core.trigger("stopped",null,"video")},e.prototype.play=function(b){var c,d=a(b.target),e=d.closest("."+this._core.settings.itemClass),f=this._videos[e.attr("data-video")],g=f.width||"100%",h=f.height||this._core.$stage.height();this._playing||(this._core.enter("playing"),this._core.trigger("play",null,"video"),e=this._core.items(this._core.relative(e.index())),this._core.reset(e.index()),"youtube"===f.type?c='<iframe width="'+g+'" height="'+h+'" src="//www.youtube.com/embed/'+f.id+"?autoplay=1&v="+f.id+'" frameborder="0" allowfullscreen></iframe>':"vimeo"===f.type?c='<iframe src="//player.vimeo.com/video/'+f.id+'?autoplay=1" width="'+g+'" height="'+h+'" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>':"vzaar"===f.type&&(c='<iframe frameborder="0"height="'+h+'"width="'+g+'" allowfullscreen mozallowfullscreen webkitAllowFullScreen src="//view.vzaar.com/'+f.id+'/player?autoplay=true"></iframe>'),a('<div class="owl-video-frame">'+c+"</div>").insertAfter(e.find(".owl-video")),this._playing=e.addClass("owl-video-playing"))},e.prototype.isInFullScreen=function(){var b=c.fullscreenElement||c.mozFullScreenElement||c.webkitFullscreenElement;return b&&a(b).parent().hasClass("owl-video-frame")},e.prototype.destroy=function(){var a,b;this._core.$element.off("click.owl.video");for(a in this._handlers)this._core.$element.off(a,this._handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.Video=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this.core=b,this.core.options=a.extend({},e.Defaults,this.core.options),this.swapping=!0,this.previous=d,this.next=d,this.handlers={"change.owl.carousel":a.proxy(function(a){a.namespace&&"position"==a.property.name&&(this.previous=this.core.current(),this.next=a.property.value)},this),"drag.owl.carousel dragged.owl.carousel translated.owl.carousel":a.proxy(function(a){a.namespace&&(this.swapping="translated"==a.type)},this),"translate.owl.carousel":a.proxy(function(a){a.namespace&&this.swapping&&(this.core.options.animateOut||this.core.options.animateIn)&&this.swap()},this)},this.core.$element.on(this.handlers)};e.Defaults={animateOut:!1,animateIn:!1},e.prototype.swap=function(){if(1===this.core.settings.items&&a.support.animation&&a.support.transition){this.core.speed(0);var b,c=a.proxy(this.clear,this),d=this.core.$stage.children().eq(this.previous),e=this.core.$stage.children().eq(this.next),f=this.core.settings.animateIn,g=this.core.settings.animateOut;this.core.current()!==this.previous&&(g&&(b=this.core.coordinates(this.previous)-this.core.coordinates(this.next),d.one(a.support.animation.end,c).css({left:b+"px"}).addClass("animated owl-animated-out").addClass(g)),f&&e.one(a.support.animation.end,c).addClass("animated owl-animated-in").addClass(f))}},e.prototype.clear=function(b){a(b.target).css({left:""}).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut),this.core.onTransitionEnd()},e.prototype.destroy=function(){var a,b;for(a in this.handlers)this.core.$element.off(a,this.handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null);
},a.fn.owlCarousel.Constructor.Plugins.Animate=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this._core=b,this._timeout=null,this._paused=!1,this._handlers={"changed.owl.carousel":a.proxy(function(a){a.namespace&&"settings"===a.property.name?this._core.settings.autoplay?this.play():this.stop():a.namespace&&"position"===a.property.name&&this._core.settings.autoplay&&this._setAutoPlayInterval()},this),"initialized.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.autoplay&&this.play()},this),"play.owl.autoplay":a.proxy(function(a,b,c){a.namespace&&this.play(b,c)},this),"stop.owl.autoplay":a.proxy(function(a){a.namespace&&this.stop()},this),"mouseover.owl.autoplay":a.proxy(function(){this._core.settings.autoplayHoverPause&&this._core.is("rotating")&&this.pause()},this),"mouseleave.owl.autoplay":a.proxy(function(){this._core.settings.autoplayHoverPause&&this._core.is("rotating")&&this.play()},this),"touchstart.owl.core":a.proxy(function(){this._core.settings.autoplayHoverPause&&this._core.is("rotating")&&this.pause()},this),"touchend.owl.core":a.proxy(function(){this._core.settings.autoplayHoverPause&&this.play()},this)},this._core.$element.on(this._handlers),this._core.options=a.extend({},e.Defaults,this._core.options)};e.Defaults={autoplay:!1,autoplayTimeout:5e3,autoplayHoverPause:!1,autoplaySpeed:!1},e.prototype.play=function(a,b){this._paused=!1,this._core.is("rotating")||(this._core.enter("rotating"),this._setAutoPlayInterval())},e.prototype._getNextTimeout=function(d,e){return this._timeout&&b.clearTimeout(this._timeout),b.setTimeout(a.proxy(function(){this._paused||this._core.is("busy")||this._core.is("interacting")||c.hidden||this._core.next(e||this._core.settings.autoplaySpeed)},this),d||this._core.settings.autoplayTimeout)},e.prototype._setAutoPlayInterval=function(){this._timeout=this._getNextTimeout()},e.prototype.stop=function(){this._core.is("rotating")&&(b.clearTimeout(this._timeout),this._core.leave("rotating"))},e.prototype.pause=function(){this._core.is("rotating")&&(this._paused=!0)},e.prototype.destroy=function(){var a,b;this.stop();for(a in this._handlers)this._core.$element.off(a,this._handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.autoplay=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){"use strict";var e=function(b){this._core=b,this._initialized=!1,this._pages=[],this._controls={},this._templates=[],this.$element=this._core.$element,this._overrides={next:this._core.next,prev:this._core.prev,to:this._core.to},this._handlers={"prepared.owl.carousel":a.proxy(function(b){b.namespace&&this._core.settings.dotsData&&this._templates.push('<div class="'+this._core.settings.dotClass+'">'+a(b.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot")+"</div>")},this),"added.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.dotsData&&this._templates.splice(a.position,0,this._templates.pop())},this),"remove.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.dotsData&&this._templates.splice(a.position,1)},this),"changed.owl.carousel":a.proxy(function(a){a.namespace&&"position"==a.property.name&&this.draw()},this),"initialized.owl.carousel":a.proxy(function(a){a.namespace&&!this._initialized&&(this._core.trigger("initialize",null,"navigation"),this.initialize(),this.update(),this.draw(),this._initialized=!0,this._core.trigger("initialized",null,"navigation"))},this),"refreshed.owl.carousel":a.proxy(function(a){a.namespace&&this._initialized&&(this._core.trigger("refresh",null,"navigation"),this.update(),this.draw(),this._core.trigger("refreshed",null,"navigation"))},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this.$element.on(this._handlers)};e.Defaults={nav:!1,navText:["prev","next"],navSpeed:!1,navElement:"div",navContainer:!1,navContainerClass:"owl-nav",navClass:["owl-prev","owl-next"],slideBy:1,dotClass:"owl-dot",dotsClass:"owl-dots",dots:!0,dotsEach:!1,dotsData:!1,dotsSpeed:!1,dotsContainer:!1},e.prototype.initialize=function(){var b,c=this._core.settings;this._controls.$relative=(c.navContainer?a(c.navContainer):a("<div>").addClass(c.navContainerClass).appendTo(this.$element)).addClass("disabled"),this._controls.$previous=a("<"+c.navElement+">").addClass(c.navClass[0]).html(c.navText[0]).prependTo(this._controls.$relative).on("click",a.proxy(function(a){this.prev(c.navSpeed)},this)),this._controls.$next=a("<"+c.navElement+">").addClass(c.navClass[1]).html(c.navText[1]).appendTo(this._controls.$relative).on("click",a.proxy(function(a){this.next(c.navSpeed)},this)),c.dotsData||(this._templates=[a("<div>").addClass(c.dotClass).append(a("<span>")).prop("outerHTML")]),this._controls.$absolute=(c.dotsContainer?a(c.dotsContainer):a("<div>").addClass(c.dotsClass).appendTo(this.$element)).addClass("disabled"),this._controls.$absolute.on("click","div",a.proxy(function(b){var d=a(b.target).parent().is(this._controls.$absolute)?a(b.target).index():a(b.target).parent().index();b.preventDefault(),this.to(d,c.dotsSpeed)},this));for(b in this._overrides)this._core[b]=a.proxy(this[b],this)},e.prototype.destroy=function(){var a,b,c,d;for(a in this._handlers)this.$element.off(a,this._handlers[a]);for(b in this._controls)this._controls[b].remove();for(d in this.overides)this._core[d]=this._overrides[d];for(c in Object.getOwnPropertyNames(this))"function"!=typeof this[c]&&(this[c]=null)},e.prototype.update=function(){var a,b,c,d=this._core.clones().length/2,e=d+this._core.items().length,f=this._core.maximum(!0),g=this._core.settings,h=g.center||g.autoWidth||g.dotsData?1:g.dotsEach||g.items;if("page"!==g.slideBy&&(g.slideBy=Math.min(g.slideBy,g.items)),g.dots||"page"==g.slideBy)for(this._pages=[],a=d,b=0,c=0;e>a;a++){if(b>=h||0===b){if(this._pages.push({start:Math.min(f,a-d),end:a-d+h-1}),Math.min(f,a-d)===f)break;b=0,++c}b+=this._core.mergers(this._core.relative(a))}},e.prototype.draw=function(){var b,c=this._core.settings,d=this._core.items().length<=c.items,e=this._core.relative(this._core.current()),f=c.loop||c.rewind;this._controls.$relative.toggleClass("disabled",!c.nav||d),c.nav&&(this._controls.$previous.toggleClass("disabled",!f&&e<=this._core.minimum(!0)),this._controls.$next.toggleClass("disabled",!f&&e>=this._core.maximum(!0))),this._controls.$absolute.toggleClass("disabled",!c.dots||d),c.dots&&(b=this._pages.length-this._controls.$absolute.children().length,c.dotsData&&0!==b?this._controls.$absolute.html(this._templates.join("")):b>0?this._controls.$absolute.append(new Array(b+1).join(this._templates[0])):0>b&&this._controls.$absolute.children().slice(b).remove(),this._controls.$absolute.find(".active").removeClass("active"),this._controls.$absolute.children().eq(a.inArray(this.current(),this._pages)).addClass("active"))},e.prototype.onTrigger=function(b){var c=this._core.settings;b.page={index:a.inArray(this.current(),this._pages),count:this._pages.length,size:c&&(c.center||c.autoWidth||c.dotsData?1:c.dotsEach||c.items)}},e.prototype.current=function(){var b=this._core.relative(this._core.current());return a.grep(this._pages,a.proxy(function(a,c){return a.start<=b&&a.end>=b},this)).pop()},e.prototype.getPosition=function(b){var c,d,e=this._core.settings;return"page"==e.slideBy?(c=a.inArray(this.current(),this._pages),d=this._pages.length,b?++c:--c,c=this._pages[(c%d+d)%d].start):(c=this._core.relative(this._core.current()),d=this._core.items().length,b?c+=e.slideBy:c-=e.slideBy),c},e.prototype.next=function(b){a.proxy(this._overrides.to,this._core)(this.getPosition(!0),b)},e.prototype.prev=function(b){a.proxy(this._overrides.to,this._core)(this.getPosition(!1),b)},e.prototype.to=function(b,c,d){var e;!d&&this._pages.length?(e=this._pages.length,a.proxy(this._overrides.to,this._core)(this._pages[(b%e+e)%e].start,c)):a.proxy(this._overrides.to,this._core)(b,c)},a.fn.owlCarousel.Constructor.Plugins.Navigation=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){"use strict";var e=function(c){this._core=c,this._hashes={},this.$element=this._core.$element,this._handlers={"initialized.owl.carousel":a.proxy(function(c){c.namespace&&"URLHash"===this._core.settings.startPosition&&a(b).trigger("hashchange.owl.navigation")},this),"prepared.owl.carousel":a.proxy(function(b){if(b.namespace){var c=a(b.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");if(!c)return;this._hashes[c]=b.content}},this),"changed.owl.carousel":a.proxy(function(c){if(c.namespace&&"position"===c.property.name){var d=this._core.items(this._core.relative(this._core.current())),e=a.map(this._hashes,function(a,b){return a===d?b:null}).join();if(!e||b.location.hash.slice(1)===e)return;b.location.hash=e}},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this.$element.on(this._handlers),a(b).on("hashchange.owl.navigation",a.proxy(function(a){var c=b.location.hash.substring(1),e=this._core.$stage.children(),f=this._hashes[c]&&e.index(this._hashes[c]);f!==d&&f!==this._core.current()&&this._core.to(this._core.relative(f),!1,!0)},this))};e.Defaults={URLhashListener:!1},e.prototype.destroy=function(){var c,d;a(b).off("hashchange.owl.navigation");for(c in this._handlers)this._core.$element.off(c,this._handlers[c]);for(d in Object.getOwnPropertyNames(this))"function"!=typeof this[d]&&(this[d]=null)},a.fn.owlCarousel.Constructor.Plugins.Hash=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){function e(b,c){var e=!1,f=b.charAt(0).toUpperCase()+b.slice(1);return a.each((b+" "+h.join(f+" ")+f).split(" "),function(a,b){return g[b]!==d?(e=c?b:!0,!1):void 0}),e}function f(a){return e(a,!0)}var g=a("<support>").get(0).style,h="Webkit Moz O ms".split(" "),i={transition:{end:{WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd",transition:"transitionend"}},animation:{end:{WebkitAnimation:"webkitAnimationEnd",MozAnimation:"animationend",OAnimation:"oAnimationEnd",animation:"animationend"}}},j={csstransforms:function(){return!!e("transform")},csstransforms3d:function(){return!!e("perspective")},csstransitions:function(){return!!e("transition")},cssanimations:function(){return!!e("animation")}};j.csstransitions()&&(a.support.transition=new String(f("transition")),a.support.transition.end=i.transition.end[a.support.transition]),j.cssanimations()&&(a.support.animation=new String(f("animation")),a.support.animation.end=i.animation.end[a.support.animation]),j.csstransforms()&&(a.support.transform=new String(f("transform")),a.support.transform3d=j.csstransforms3d())}(window.Zepto||window.jQuery,window,document);
!(function(root, factory) {
	if (typeof define === 'function' && define.amd) {
		define(['jquery'], factory);
	} else if (typeof exports === 'object') {
		factory(require('jquery'));
	} else {
		factory(root.jQuery);
	}
})(this, function($) {
	'use strict';

	/**
	* Name of the plugin
	* @private
	* @const
	* @type {String}
	*/
	var PLUGIN_NAME = 'vide';

	/**
	* Default settings
	* @private
	* @const
	* @type {Object}
	*/
	var DEFAULTS = {
		volume: 1,
		playbackRate: 1,
		muted: true,
		loop: true,
		autoplay: true,
		position: '50% 50%',
		posterType: 'detect',
		resizing: true,
		bgColor: 'transparent',
		className: ''
	};

	/**
	* Not implemented error message
	* @private
	* @const
	* @type {String}
	*/
	var NOT_IMPLEMENTED_MSG = 'Not implemented';

	/**
	* Parse a string with options
	* @private
	* @param {String} str
	* @returns {Object|String}
	*/
	function parseOptions(str) {
		var obj = {};
		var delimiterIndex;
		var option;
		var prop;
		var val;
		var arr;
		var len;
		var i;

		// Remove spaces around delimiters and split
		arr = str.replace(/\s*:\s*/g, ':').replace(/\s*,\s*/g, ',').split(',');
		// Parse a string
		for (i = 0, len = arr.length; i < len; i++) {
			option = arr[i];
			// Ignore urls and a string without colon delimiters
			if (
				option.search(/^(http|https|ftp):\/\//) !== -1 ||
				option.search(':') === -1
			) { break; }
			delimiterIndex = option.indexOf(':');
			prop = option.substring(0, delimiterIndex);
			val = option.substring(delimiterIndex + 1);
			// If val is an empty string, make it undefined
			if (!val) {
				val = undefined;
			}
			// Convert a string value if it is like a boolean
			if (typeof val === 'string') {
				val = val === 'true' || (val === 'false' ? false : val);
			}
			// Convert a string value if it is like a number
			if (typeof val === 'string') {
				val = !isNaN(val) ? +val : val;
			}
			obj[prop] = val;
		}
		// If nothing is parsed
		if (prop == null && val == null) {
			return str;
		}
		return obj;
	}

	/**
	* Parse a position option
	* @private
	* @param {String} str
	* @returns {Object}
	*/
	function parsePosition(str) {
		str = '' + str;
		// Default value is a center
		var args = str.split(/\s+/);
		var x = '50%';
		var y = '50%';
		var len;
		var arg;
		var i;
		for (i = 0, len = args.length; i < len; i++) {
			arg = args[i];
			// Convert values
			if (arg === 'left') {
				x = '0%';
			} else if (arg === 'right') {
				x = '100%';
			} else if (arg === 'top') {
				y = '0%';
			} else if (arg === 'bottom') {
				y = '100%';
			} else if (arg === 'center') {
				if (i === 0) {
					x = '50%';
				} else {
					y = '50%';
				}
			} else {
				if (i === 0) {
					x = arg;
				} else {
					y = arg;
				}
			}
		}
		return { x: x, y: y };
	}

	/**
	* Search a poster
	* @private
	* @param {String} path
	* @param {Function} callback
	*/
	function findPoster(path, callback) {
		var onLoad = function() {
			callback(this.src);
		};

		//$('<img src="' + path + '.gif">').on('load', onLoad);
		$('<img src="' + path + '.jpg">').on('load', onLoad);
		//$('<img src="' + path + '.jpeg">').on('load', onLoad);
		//$('<img src="' + path + '.png">').on('load', onLoad);
	}

	/**
	* Vide constructor
	* @param {HTMLElement} element
	* @param {Object|String} path
	* @param {Object|String} options
	* @constructor
	*/
	function Vide(element, path, options) {
		this.$element = $(element);
		// Parse path
		if (typeof path === 'string') {
			path = parseOptions(path);
		}
		// Parse options
		if (!options) {
			options = {};
		} else if (typeof options === 'string') {
			options = parseOptions(options);
		}
		// Remove an extension
		if (typeof path === 'string') {
			path = path.replace(/\.\w*$/, '');
		} else if (typeof path === 'object') {
			for (var i in path) {
				if (path.hasOwnProperty(i)) {
					path[i] = path[i].replace(/\.\w*$/, '');
				}
			}
		}
		this.settings = $.extend({}, DEFAULTS, options);
		this.path = path;
		// https://github.com/VodkaBears/Vide/issues/110
		try {
			this.init();
		} catch (e) {
			if (e.message !== NOT_IMPLEMENTED_MSG) {
				throw e;
			}
		}
	}

	/**
	* Initialization
	* @public
	*/
	Vide.prototype.init = function() {
		var vide = this;
		var path = vide.path;
		var poster = path;
		var sources = '';
		var $element = vide.$element;
		var settings = vide.settings;
		var position = parsePosition(settings.position);
		var posterType = settings.posterType;
		var $video;
		var $wrapper;
		// Set styles of a video wrapper
		$wrapper = vide.$wrapper = $('<div>')
			.addClass(settings.className)
			.css({
				position: 'absolute',
				'z-index': -1,
				top: 0,
				left: 0,
				bottom: 0,
				right: 0,
				overflow: 'hidden',
				'-webkit-background-size': 'cover',
				'-moz-background-size': 'cover',
				'-o-background-size': 'cover',
				'background-size': 'cover',
				'background-color': settings.bgColor,
				'background-repeat': 'no-repeat',
				'background-position': position.x + ' ' + position.y
			});
		// Get a poster path
		if (typeof path === 'object') {
			if (path.poster) {
				poster = path.poster;
			} else {
				if (path.mp4) {
					poster = path.mp4;
				} else if (path.webm) {
					poster = path.webm;
				} else if (path.ogv) {
					poster = path.ogv;
				}
			}
		}
		// Set a video poster
		if (posterType === 'detect') {
			findPoster(poster, function(url) {
				$wrapper.css('background-image', 'url(' + url + ')');
			});
		} else if (posterType !== 'none') {
				$wrapper.css('background-image', 'url(' + poster + '.' + posterType + ')');
		}
		// If a parent element has a static position, make it relative
		if ($element.css('position') === 'static') {
			$element.css('position', 'relative');
		}
		$element.prepend($wrapper);
		if (typeof path === 'object') {
			if (path.mp4) {
				sources += '<source src="' + path.mp4 + '.mp4" type="video/mp4">';
			}
			if (path.webm) {
				sources += '<source src="' + path.webm + '.webm" type="video/webm">';
			}
			if (path.ogv) {
				sources += '<source src="' + path.ogv + '.ogv" type="video/ogg">';
			}
			$video = vide.$video = $('<video>' + sources + '</video>');
		} else {
			$video = vide.$video = $('<video>' + '<source src="' + path + '.mp4" type="video/mp4">' + '<source src="' + path + '.webm" type="video/webm">' + '<source src="' + path + '.ogv" type="video/ogg">' + '</video>');
		}
		// https://github.com/VodkaBears/Vide/issues/110
		try {
			$video
			// Set video properties
			.prop({
				autoplay: settings.autoplay,
				loop: settings.loop,
				volume: settings.volume,
				muted: settings.muted,
				defaultMuted: settings.muted,
				playbackRate: settings.playbackRate,
				defaultPlaybackRate: settings.playbackRate
			});
		} catch (e) {
			throw new Error(NOT_IMPLEMENTED_MSG);
		}
		// Video alignment
		$video.css({
			margin: 'auto',
			position: 'absolute',
			'z-index': -1,
			top: position.y,
			left: position.x,
			'-webkit-transform': 'translate(-' + position.x + ', -' + position.y + ')',
			'-ms-transform': 'translate(-' + position.x + ', -' + position.y + ')',
			'-moz-transform': 'translate(-' + position.x + ', -' + position.y + ')',
			transform: 'translate(-' + position.x + ', -' + position.y + ')',
			// Disable visibility, while loading
			visibility: 'hidden',
			opacity: 0
		})
		// Resize a video, when it's loaded
		.one('canplaythrough.' + PLUGIN_NAME, function() {
			vide.resize();
		})
		// Make it visible, when it's already playing
		.one('playing.' + PLUGIN_NAME, function() {
			$video.css({
				visibility: 'visible',
				opacity: 1
			});
			$wrapper.css('background-image', 'none');
		});
		// Resize event is available only for 'window'
		// Use another code solutions to detect DOM elements resizing
		$element.on('resize.' + PLUGIN_NAME, function() {
			if (settings.resizing) {
				vide.resize();
			}
		});
		// Append a video
		$wrapper.append($video);
	};

	/**
	* Get a video element
	* @public
	* @returns {HTMLVideoElement}
	*/
	Vide.prototype.getVideoObject = function() {
		return this.$video[0];
	};

	/**
	* Resize a video background
	* @public
	*/
	Vide.prototype.resize = function() {
		if (!this.$video) {
			return;
		}
		var $wrapper = this.$wrapper;
		var $video = this.$video;
		var video = $video[0];
		// Get a native video size
		var videoHeight = video.videoHeight;
		var videoWidth = video.videoWidth;
		// Get a wrapper size
		var wrapperHeight = $wrapper.height();
		var wrapperWidth = $wrapper.width();
		if (wrapperWidth / videoWidth > wrapperHeight / videoHeight) {
			$video.css({
				// +2 pixels to prevent an empty space after transformation
				width: wrapperWidth + 2,
				height: 'auto'
			});
		} else {
			$video.css({
				width: 'auto',
				// +2 pixels to prevent an empty space after transformation
				height: wrapperHeight + 2
			});
		}
	};

	/**
	* Destroy a video background
	* @public
	*/
	Vide.prototype.destroy = function() {
		delete $[PLUGIN_NAME].lookup[this.index];
		this.$video && this.$video.off(PLUGIN_NAME);
		this.$element.off(PLUGIN_NAME).removeData(PLUGIN_NAME);
		this.$wrapper.remove();
	};

	/**
	* Special plugin object for instances.
	* @public
	* @type {Object}
	*/
	$[PLUGIN_NAME] = {
		lookup: []
	};

	/**
	* Plugin constructor
	* @param {Object|String} path
	* @param {Object|String} options
	* @returns {JQuery}
	* @constructor
	*/
	$.fn[PLUGIN_NAME] = function(path, options) {
		var instance;
		this.each(function() {
			instance = $.data(this, PLUGIN_NAME);
			// Destroy the plugin instance if exists
			instance && instance.destroy();
			// Create the plugin instance
			instance = new Vide(this, path, options);
			instance.index = $[PLUGIN_NAME].lookup.push(instance) - 1;
			$.data(this, PLUGIN_NAME, instance);
		});
		return this;
	};
	$(document).ready(function() {
		var $window = $(window);
		// Window resize event listener
		$window.on('resize.' + PLUGIN_NAME, function() {
			for (var len = $[PLUGIN_NAME].lookup.length, i = 0, instance; i < len; i++) {
				instance = $[PLUGIN_NAME].lookup[i];
				if (instance && instance.settings.resizing) {
					instance.resize();
				}
			}
		});
		// https://github.com/VodkaBears/Vide/issues/68
		$window.on('unload.' + PLUGIN_NAME, function() {
			return false;
		});
		// Auto initialization
		// Add 'data-vide-bg' attribute with a path to the video without extension
		// Also you can pass options throw the 'data-vide-options' attribute
		// 'data-vide-options' must be like 'muted: false, volume: 0.5'
		$(document).find('[data-' + PLUGIN_NAME + '-bg]').each(function(i, element) {
			var $element = $(element);
			var options = $element.data(PLUGIN_NAME + '-options');
			var path = $element.data(PLUGIN_NAME + '-bg');
			$element[PLUGIN_NAME](path, options);
		});
	});
});

(function(factory) {
    "use strict";
    if (typeof define === "function" && define.amd) {
        define([ "jquery" ], factory);
    } else {
        factory(jQuery);
    }
})(function($) {
    "use strict";
    var instances = [], matchers = [], defaultOptions = {
        precision: 100,
        elapse: false,
        defer: false
    };
    matchers.push(/^[0-9]*$/.source);
    matchers.push(/([0-9]{1,2}\/){2}[0-9]{4}( [0-9]{1,2}(:[0-9]{2}){2})?/.source);
    matchers.push(/[0-9]{4}([\/\-][0-9]{1,2}){2}( [0-9]{1,2}(:[0-9]{2}){2})?/.source);
    matchers = new RegExp(matchers.join("|"));
    function parseDateString(dateString) {
        if (dateString instanceof Date) {
            return dateString;
        }
        if (String(dateString).match(matchers)) {
            if (String(dateString).match(/^[0-9]*$/)) {
                dateString = Number(dateString);
            }
            if (String(dateString).match(/\-/)) {
                dateString = String(dateString).replace(/\-/g, "/");
            }
            return new Date(dateString);
        } else {
            throw new Error("Couldn't cast `" + dateString + "` to a date object.");
        }
    }
    var DIRECTIVE_KEY_MAP = {
        Y: "years",
        m: "months",
        n: "daysToMonth",
        d: "daysToWeek",
        w: "weeks",
        W: "weeksToMonth",
        H: "hours",
        M: "minutes",
        S: "seconds",
        D: "totalDays",
        I: "totalHours",
        N: "totalMinutes",
        T: "totalSeconds"
    };
    function escapedRegExp(str) {
        var sanitize = str.toString().replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1");
        return new RegExp(sanitize);
    }
    function strftime(offsetObject) {
        return function(format) {
            var directives = format.match(/%(-|!)?[A-Z]{1}(:[^;]+;)?/gi);
            if (directives) {
                for (var i = 0, len = directives.length; i < len; ++i) {
                    var directive = directives[i].match(/%(-|!)?([a-zA-Z]{1})(:[^;]+;)?/), regexp = escapedRegExp(directive[0]), modifier = directive[1] || "", plural = directive[3] || "", value = null;
                    directive = directive[2];
                    if (DIRECTIVE_KEY_MAP.hasOwnProperty(directive)) {
                        value = DIRECTIVE_KEY_MAP[directive];
                        value = Number(offsetObject[value]);
                    }
                    if (value !== null) {
                        if (modifier === "!") {
                            value = pluralize(plural, value);
                        }
                        if (modifier === "") {
                            if (value < 10) {
                                value = "0" + value.toString();
                            }
                        }
                        format = format.replace(regexp, value.toString());
                    }
                }
            }
            format = format.replace(/%%/, "%");
            return format;
        };
    }
    function pluralize(format, count) {
        var plural = "s", singular = "";
        if (format) {
            format = format.replace(/(:|;|\s)/gi, "").split(/\,/);
            if (format.length === 1) {
                plural = format[0];
            } else {
                singular = format[0];
                plural = format[1];
            }
        }
        if (Math.abs(count) > 1) {
            return plural;
        } else {
            return singular;
        }
    }
    var Countdown = function(el, finalDate, options) {
        this.el = el;
        this.$el = $(el);
        this.interval = null;
        this.offset = {};
        this.options = $.extend({}, defaultOptions);
        this.instanceNumber = instances.length;
        instances.push(this);
        this.$el.data("countdown-instance", this.instanceNumber);
        if (options) {
            if (typeof options === "function") {
                this.$el.on("update.countdown", options);
                this.$el.on("stoped.countdown", options);
                this.$el.on("finish.countdown", options);
            } else {
                this.options = $.extend({}, defaultOptions, options);
            }
        }
        this.setFinalDate(finalDate);
        if (this.options.defer === false) {
            this.start();
        }
    };
    $.extend(Countdown.prototype, {
        start: function() {
            if (this.interval !== null) {
                clearInterval(this.interval);
            }
            var self = this;
            this.update();
            this.interval = setInterval(function() {
                self.update.call(self);
            }, this.options.precision);
        },
        stop: function() {
            clearInterval(this.interval);
            this.interval = null;
            this.dispatchEvent("stoped");
        },
        toggle: function() {
            if (this.interval) {
                this.stop();
            } else {
                this.start();
            }
        },
        pause: function() {
            this.stop();
        },
        resume: function() {
            this.start();
        },
        remove: function() {
            this.stop.call(this);
            instances[this.instanceNumber] = null;
            delete this.$el.data().countdownInstance;
        },
        setFinalDate: function(value) {
            this.finalDate = parseDateString(value);
        },
        update: function() {
            if (this.$el.closest("html").length === 0) {
                this.remove();
                return;
            }
            var hasEventsAttached = $._data(this.el, "events") !== undefined, now = new Date(), newTotalSecsLeft;
            newTotalSecsLeft = this.finalDate.getTime() - now.getTime();
            newTotalSecsLeft = Math.ceil(newTotalSecsLeft / 1e3);
            newTotalSecsLeft = !this.options.elapse && newTotalSecsLeft < 0 ? 0 : Math.abs(newTotalSecsLeft);
            if (this.totalSecsLeft === newTotalSecsLeft || !hasEventsAttached) {
                return;
            } else {
                this.totalSecsLeft = newTotalSecsLeft;
            }
            this.elapsed = now >= this.finalDate;
            this.offset = {
                seconds: this.totalSecsLeft % 60,
                minutes: Math.floor(this.totalSecsLeft / 60) % 60,
                hours: Math.floor(this.totalSecsLeft / 60 / 60) % 24,
                days: Math.floor(this.totalSecsLeft / 60 / 60 / 24) % 7,
                daysToWeek: Math.floor(this.totalSecsLeft / 60 / 60 / 24) % 7,
                daysToMonth: Math.floor(this.totalSecsLeft / 60 / 60 / 24 % 30.4368),
                weeks: Math.floor(this.totalSecsLeft / 60 / 60 / 24 / 7),
                weeksToMonth: Math.floor(this.totalSecsLeft / 60 / 60 / 24 / 7) % 4,
                months: Math.floor(this.totalSecsLeft / 60 / 60 / 24 / 30.4368),
                years: Math.abs(this.finalDate.getFullYear() - now.getFullYear()),
                totalDays: Math.floor(this.totalSecsLeft / 60 / 60 / 24),
                totalHours: Math.floor(this.totalSecsLeft / 60 / 60),
                totalMinutes: Math.floor(this.totalSecsLeft / 60),
                totalSeconds: this.totalSecsLeft
            };
            if (!this.options.elapse && this.totalSecsLeft === 0) {
                this.stop();
                this.dispatchEvent("finish");
            } else {
                this.dispatchEvent("update");
            }
        },
        dispatchEvent: function(eventName) {
            var event = $.Event(eventName + ".countdown");
            event.finalDate = this.finalDate;
            event.elapsed = this.elapsed;
            event.offset = $.extend({}, this.offset);
            event.strftime = strftime(this.offset);
            this.$el.trigger(event);
        }
    });
    $.fn.countdown = function() {
        var argumentsArray = Array.prototype.slice.call(arguments, 0);
        return this.each(function() {
            var instanceNumber = $(this).data("countdown-instance");
            if (instanceNumber !== undefined) {
                var instance = instances[instanceNumber], method = argumentsArray[0];
                if (Countdown.prototype.hasOwnProperty(method)) {
                    instance[method].apply(instance, argumentsArray.slice(1));
                } else if (String(method).match(/^[$A-Z_][0-9A-Z_$]*$/i) === null) {
                    instance.setFinalDate.call(instance, method);
                    instance.start();
                } else {
                    $.error("Method %s does not exist on jQuery.countdown".replace(/\%s/gi, method));
                }
            } else {
                new Countdown(this, argumentsArray[0], argumentsArray[1]);
            }
        });
    };
});
(function(factory){if(typeof define==="function"&&define.amd){define(["jquery"],factory);}else{factory(jQuery);}}(function($){$.ui=$.ui||{};var version=$.ui.version="1.12.1";var widgetUuid=0;var widgetSlice=Array.prototype.slice;$.cleanData=(function(orig){return function(elems){var events,elem,i;for(i=0;(elem=elems[i])!=null;i++){try{events=$._data(elem,"events");if(events&&events.remove){$(elem).triggerHandler("remove");}}catch(e){}}orig(elems);};})($.cleanData);$.widget=function(name,base,prototype){var existingConstructor,constructor,basePrototype;var proxiedPrototype={};var namespace=name.split(".")[0];name=name.split(".")[1];var fullName=namespace+"-"+name;if(!prototype){prototype=base;base=$.Widget;}if($.isArray(prototype)){prototype=$.extend.apply(null,[{}].concat(prototype));}$.expr[":"][fullName.toLowerCase()]=function(elem){return!!$.data(elem,fullName);};$[namespace]=$[namespace]||{};existingConstructor=$[namespace][name];constructor=$[namespace][name]=function(options,element){if(!this._createWidget){return new constructor(options,element);}if(arguments.length){this._createWidget(options,element);}};$.extend(constructor,existingConstructor,{version:prototype.version,_proto:$.extend({},prototype),_childConstructors:[]});basePrototype=new base();basePrototype.options=$.widget.extend({},basePrototype.options);$.each(prototype,function(prop,value){if(!$.isFunction(value)){proxiedPrototype[prop]=value;return;}proxiedPrototype[prop]=(function(){function _super(){return base.prototype[prop].apply(this,arguments);}function _superApply(args){return base.prototype[prop].apply(this,args);}return function(){var __super=this._super;var __superApply=this._superApply;var returnValue;this._super=_super;this._superApply=_superApply;returnValue=value.apply(this,arguments);this._super=__super;this._superApply=__superApply;return returnValue;};})();});constructor.prototype=$.widget.extend(basePrototype,{widgetEventPrefix:existingConstructor?(basePrototype.widgetEventPrefix||name):name},proxiedPrototype,{constructor:constructor,namespace:namespace,widgetName:name,widgetFullName:fullName});if(existingConstructor){$.each(existingConstructor._childConstructors,function(i,child){var childPrototype=child.prototype;$.widget(childPrototype.namespace+"."+childPrototype.widgetName,constructor,child._proto);});delete existingConstructor._childConstructors;}else{base._childConstructors.push(constructor);}$.widget.bridge(name,constructor);return constructor;};$.widget.extend=function(target){var input=widgetSlice.call(arguments,1);var inputIndex=0;var inputLength=input.length;var key;var value;for(;inputIndex<inputLength;inputIndex++){for(key in input[inputIndex]){value=input[inputIndex][key];if(input[inputIndex].hasOwnProperty(key)&&value!==undefined){if($.isPlainObject(value)){target[key]=$.isPlainObject(target[key])?$.widget.extend({},target[key],value):$.widget.extend({},value);}else{target[key]=value;}}}}return target;};$.widget.bridge=function(name,object){var fullName=object.prototype.widgetFullName||name;$.fn[name]=function(options){var isMethodCall=typeof options==="string";var args=widgetSlice.call(arguments,1);var returnValue=this;if(isMethodCall){if(!this.length&&options==="instance"){returnValue=undefined;}else{this.each(function(){var methodValue;var instance=$.data(this,fullName);if(options==="instance"){returnValue=instance;return false;}if(!instance){return $.error("cannot call methods on "+name+" prior to initialization; "+"attempted to call method '"+options+"'");}if(!$.isFunction(instance[options])||options.charAt(0)==="_"){return $.error("no such method '"+options+"' for "+name+" widget instance");}methodValue=instance[options].apply(instance,args);if(methodValue!==instance&&methodValue!==undefined){returnValue=methodValue&&methodValue.jquery?returnValue.pushStack(methodValue.get()):methodValue;return false;}});}}else{if(args.length){options=$.widget.extend.apply(null,[options].concat(args));}this.each(function(){var instance=$.data(this,fullName);if(instance){instance.option(options||{});if(instance._init){instance._init();}}else{$.data(this,fullName,new object(options,this));}});}return returnValue;};};$.Widget=function(){};$.Widget._childConstructors=[];$.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{classes:{},disabled:false,create:null},_createWidget:function(options,element){element=$(element||this.defaultElement||this)[0];this.element=$(element);this.uuid=widgetUuid++;this.eventNamespace="."+this.widgetName+this.uuid;this.bindings=$();this.hoverable=$();this.focusable=$();this.classesElementLookup={};if(element!==this){$.data(element,this.widgetFullName,this);this._on(true,this.element,{remove:function(event){if(event.target===element){this.destroy();}}});this.document=$(element.style?element.ownerDocument:element.document||element);this.window=$(this.document[0].defaultView||this.document[0].parentWindow);}this.options=$.widget.extend({},this.options,this._getCreateOptions(),options);this._create();if(this.options.disabled){this._setOptionDisabled(this.options.disabled);}this._trigger("create",null,this._getCreateEventData());this._init();},_getCreateOptions:function(){return{};},_getCreateEventData:$.noop,_create:$.noop,_init:$.noop,destroy:function(){var that=this;this._destroy();$.each(this.classesElementLookup,function(key,value){that._removeClass(value,key);});this.element.off(this.eventNamespace).removeData(this.widgetFullName);this.widget().off(this.eventNamespace).removeAttr("aria-disabled");this.bindings.off(this.eventNamespace);},_destroy:$.noop,widget:function(){return this.element;},option:function(key,value){var options=key;var parts;var curOption;var i;if(arguments.length===0){return $.widget.extend({},this.options);}if(typeof key==="string"){options={};parts=key.split(".");key=parts.shift();if(parts.length){curOption=options[key]=$.widget.extend({},this.options[key]);for(i=0;i<parts.length-1;i++){curOption[parts[i]]=curOption[parts[i]]||{};curOption=curOption[parts[i]];}key=parts.pop();if(arguments.length===1){return curOption[key]===undefined?null:curOption[key];}curOption[key]=value;}else{if(arguments.length===1){return this.options[key]===undefined?null:this.options[key];}options[key]=value;}}this._setOptions(options);return this;},_setOptions:function(options){var key;for(key in options){this._setOption(key,options[key]);}return this;},_setOption:function(key,value){if(key==="classes"){this._setOptionClasses(value);}this.options[key]=value;if(key==="disabled"){this._setOptionDisabled(value);}return this;},_setOptionClasses:function(value){var classKey,elements,currentElements;for(classKey in value){currentElements=this.classesElementLookup[classKey];if(value[classKey]===this.options.classes[classKey]||!currentElements||!currentElements.length){continue;}elements=$(currentElements.get());this._removeClass(currentElements,classKey);elements.addClass(this._classes({element:elements,keys:classKey,classes:value,add:true}));}},_setOptionDisabled:function(value){this._toggleClass(this.widget(),this.widgetFullName+"-disabled",null,!!value);if(value){this._removeClass(this.hoverable,null,"ui-state-hover");this._removeClass(this.focusable,null,"ui-state-focus");}},enable:function(){return this._setOptions({disabled:false});},disable:function(){return this._setOptions({disabled:true});},_classes:function(options){var full=[];var that=this;options=$.extend({element:this.element,classes:this.options.classes||{}},options);function processClassString(classes,checkOption){var current,i;for(i=0;i<classes.length;i++){current=that.classesElementLookup[classes[i]]||$();if(options.add){current=$($.unique(current.get().concat(options.element.get())));}else{current=$(current.not(options.element).get());}that.classesElementLookup[classes[i]]=current;full.push(classes[i]);if(checkOption&&options.classes[classes[i]]){full.push(options.classes[classes[i]]);}}}this._on(options.element,{"remove":"_untrackClassesElement"});if(options.keys){processClassString(options.keys.match(/\S+/g)||[],true);}if(options.extra){processClassString(options.extra.match(/\S+/g)||[]);}return full.join(" ");},_untrackClassesElement:function(event){var that=this;$.each(that.classesElementLookup,function(key,value){if($.inArray(event.target,value)!==-1){that.classesElementLookup[key]=$(value.not(event.target).get());}});},_removeClass:function(element,keys,extra){return this._toggleClass(element,keys,extra,false);},_addClass:function(element,keys,extra){return this._toggleClass(element,keys,extra,true);},_toggleClass:function(element,keys,extra,add){add=(typeof add==="boolean")?add:extra;var shift=(typeof element==="string"||element===null),options={extra:shift?keys:extra,keys:shift?element:keys,element:shift?this.element:element,add:add};options.element.toggleClass(this._classes(options),add);return this;},_on:function(suppressDisabledCheck,element,handlers){var delegateElement;var instance=this;if(typeof suppressDisabledCheck!=="boolean"){handlers=element;element=suppressDisabledCheck;suppressDisabledCheck=false;}if(!handlers){handlers=element;element=this.element;delegateElement=this.widget();}else{element=delegateElement=$(element);this.bindings=this.bindings.add(element);}$.each(handlers,function(event,handler){function handlerProxy(){if(!suppressDisabledCheck&&(instance.options.disabled===true||$(this).hasClass("ui-state-disabled"))){return;}return(typeof handler==="string"?instance[handler]:handler).apply(instance,arguments);}if(typeof handler!=="string"){handlerProxy.guid=handler.guid=handler.guid||handlerProxy.guid||$.guid++;}var match=event.match(/^([\w:-]*)\s*(.*)$/);var eventName=match[1]+instance.eventNamespace;var selector=match[2];if(selector){delegateElement.on(eventName,selector,handlerProxy);}else{element.on(eventName,handlerProxy);}});},_off:function(element,eventName){eventName=(eventName||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace;element.off(eventName).off(eventName);this.bindings=$(this.bindings.not(element).get());this.focusable=$(this.focusable.not(element).get());this.hoverable=$(this.hoverable.not(element).get());},_delay:function(handler,delay){function handlerProxy(){return(typeof handler==="string"?instance[handler]:handler).apply(instance,arguments);}var instance=this;return setTimeout(handlerProxy,delay||0);},_hoverable:function(element){this.hoverable=this.hoverable.add(element);this._on(element,{mouseenter:function(event){this._addClass($(event.currentTarget),null,"ui-state-hover");},mouseleave:function(event){this._removeClass($(event.currentTarget),null,"ui-state-hover");}});},_focusable:function(element){this.focusable=this.focusable.add(element);this._on(element,{focusin:function(event){this._addClass($(event.currentTarget),null,"ui-state-focus");},focusout:function(event){this._removeClass($(event.currentTarget),null,"ui-state-focus");}});},_trigger:function(type,event,data){var prop,orig;var callback=this.options[type];data=data||{};event=$.Event(event);event.type=(type===this.widgetEventPrefix?type:this.widgetEventPrefix+type).toLowerCase();event.target=this.element[0];orig=event.originalEvent;if(orig){for(prop in orig){if(!(prop in event)){event[prop]=orig[prop];}}}this.element.trigger(event,data);return!($.isFunction(callback)&&callback.apply(this.element[0],[event].concat(data))===false||event.isDefaultPrevented());}};$.each({show:"fadeIn",hide:"fadeOut"},function(method,defaultEffect){$.Widget.prototype["_"+method]=function(element,options,callback){if(typeof options==="string"){options={effect:options};}var hasOptions;var effectName=!options?method:options===true||typeof options==="number"?defaultEffect:options.effect||defaultEffect;options=options||{};if(typeof options==="number"){options={duration:options};}hasOptions=!$.isEmptyObject(options);options.complete=callback;if(options.delay){element.delay(options.delay);}if(hasOptions&&$.effects&&$.effects.effect[effectName]){element[method](options);}else if(effectName!==method&&element[effectName]){element[effectName](options.duration,options.easing,callback);}else{element.queue(function(next){$(this)[method]();if(callback){callback.call(element[0]);}next();});}};});var widget=$.widget;(function(){var cachedScrollbarWidth,max=Math.max,abs=Math.abs,rhorizontal=/left|center|right/,rvertical=/top|center|bottom/,roffset=/[\+\-]\d+(\.[\d]+)?%?/,rposition=/^\w+/,rpercent=/%$/,_position=$.fn.position;function getOffsets(offsets,width,height){return[parseFloat(offsets[0])*(rpercent.test(offsets[0])?width/100:1),parseFloat(offsets[1])*(rpercent.test(offsets[1])?height/100:1)];}function parseCss(element,property){return parseInt($.css(element,property),10)||0;}function getDimensions(elem){var raw=elem[0];if(raw.nodeType===9){return{width:elem.width(),height:elem.height(),offset:{top:0,left:0}};}if($.isWindow(raw)){return{width:elem.width(),height:elem.height(),offset:{top:elem.scrollTop(),left:elem.scrollLeft()}};}if(raw.preventDefault){return{width:0,height:0,offset:{top:raw.pageY,left:raw.pageX}};}return{width:elem.outerWidth(),height:elem.outerHeight(),offset:elem.offset()};}$.position={scrollbarWidth:function(){if(cachedScrollbarWidth!==undefined){return cachedScrollbarWidth;}var w1,w2,div=$("<div "+"style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'>"+"<div style='height:100px;width:auto;'></div></div>"),innerDiv=div.children()[0];$("body").append(div);w1=innerDiv.offsetWidth;div.css("overflow","scroll");w2=innerDiv.offsetWidth;if(w1===w2){w2=div[0].clientWidth;}div.remove();return(cachedScrollbarWidth=w1-w2);},getScrollInfo:function(within){var overflowX=within.isWindow||within.isDocument?"":within.element.css("overflow-x"),overflowY=within.isWindow||within.isDocument?"":within.element.css("overflow-y"),hasOverflowX=overflowX==="scroll"||(overflowX==="auto"&&within.width<within.element[0].scrollWidth),hasOverflowY=overflowY==="scroll"||(overflowY==="auto"&&within.height<within.element[0].scrollHeight);return{width:hasOverflowY?$.position.scrollbarWidth():0,height:hasOverflowX?$.position.scrollbarWidth():0};},getWithinInfo:function(element){var withinElement=$(element||window),isWindow=$.isWindow(withinElement[0]),isDocument=!!withinElement[0]&&withinElement[0].nodeType===9,hasOffset=!isWindow&&!isDocument;return{element:withinElement,isWindow:isWindow,isDocument:isDocument,offset:hasOffset?$(element).offset():{left:0,top:0},scrollLeft:withinElement.scrollLeft(),scrollTop:withinElement.scrollTop(),width:withinElement.outerWidth(),height:withinElement.outerHeight()};}};$.fn.position=function(options){if(!options||!options.of){return _position.apply(this,arguments);}options=$.extend({},options);var atOffset,targetWidth,targetHeight,targetOffset,basePosition,dimensions,target=$(options.of),within=$.position.getWithinInfo(options.within),scrollInfo=$.position.getScrollInfo(within),collision=(options.collision||"flip").split(" "),offsets={};dimensions=getDimensions(target);if(target[0].preventDefault){options.at="left top";}targetWidth=dimensions.width;targetHeight=dimensions.height;targetOffset=dimensions.offset;basePosition=$.extend({},targetOffset);$.each(["my","at"],function(){var pos=(options[this]||"").split(" "),horizontalOffset,verticalOffset;if(pos.length===1){pos=rhorizontal.test(pos[0])?pos.concat(["center"]):rvertical.test(pos[0])?["center"].concat(pos):["center","center"];}pos[0]=rhorizontal.test(pos[0])?pos[0]:"center";pos[1]=rvertical.test(pos[1])?pos[1]:"center";horizontalOffset=roffset.exec(pos[0]);verticalOffset=roffset.exec(pos[1]);offsets[this]=[horizontalOffset?horizontalOffset[0]:0,verticalOffset?verticalOffset[0]:0];options[this]=[rposition.exec(pos[0])[0],rposition.exec(pos[1])[0]];});if(collision.length===1){collision[1]=collision[0];}if(options.at[0]==="right"){basePosition.left+=targetWidth;}else if(options.at[0]==="center"){basePosition.left+=targetWidth/2;}if(options.at[1]==="bottom"){basePosition.top+=targetHeight;}else if(options.at[1]==="center"){basePosition.top+=targetHeight/2;}atOffset=getOffsets(offsets.at,targetWidth,targetHeight);basePosition.left+=atOffset[0];basePosition.top+=atOffset[1];return this.each(function(){var collisionPosition,using,elem=$(this),elemWidth=elem.outerWidth(),elemHeight=elem.outerHeight(),marginLeft=parseCss(this,"marginLeft"),marginTop=parseCss(this,"marginTop"),collisionWidth=elemWidth+marginLeft+parseCss(this,"marginRight")+scrollInfo.width,collisionHeight=elemHeight+marginTop+parseCss(this,"marginBottom")+scrollInfo.height,position=$.extend({},basePosition),myOffset=getOffsets(offsets.my,elem.outerWidth(),elem.outerHeight());if(options.my[0]==="right"){position.left-=elemWidth;}else if(options.my[0]==="center"){position.left-=elemWidth/2;}if(options.my[1]==="bottom"){position.top-=elemHeight;}else if(options.my[1]==="center"){position.top-=elemHeight/2;}position.left+=myOffset[0];position.top+=myOffset[1];collisionPosition={marginLeft:marginLeft,marginTop:marginTop};$.each(["left","top"],function(i,dir){if($.ui.position[collision[i]]){$.ui.position[collision[i]][dir](position,{targetWidth:targetWidth,targetHeight:targetHeight,elemWidth:elemWidth,elemHeight:elemHeight,collisionPosition:collisionPosition,collisionWidth:collisionWidth,collisionHeight:collisionHeight,offset:[atOffset[0]+myOffset[0],atOffset[1]+myOffset[1]],my:options.my,at:options.at,within:within,elem:elem});}});if(options.using){using=function(props){var left=targetOffset.left-position.left,right=left+targetWidth-elemWidth,top=targetOffset.top-position.top,bottom=top+targetHeight-elemHeight,feedback={target:{element:target,left:targetOffset.left,top:targetOffset.top,width:targetWidth,height:targetHeight},element:{element:elem,left:position.left,top:position.top,width:elemWidth,height:elemHeight},horizontal:right<0?"left":left>0?"right":"center",vertical:bottom<0?"top":top>0?"bottom":"middle"};if(targetWidth<elemWidth&&abs(left+right)<targetWidth){feedback.horizontal="center";}if(targetHeight<elemHeight&&abs(top+bottom)<targetHeight){feedback.vertical="middle";}if(max(abs(left),abs(right))>max(abs(top),abs(bottom))){feedback.important="horizontal";}else{feedback.important="vertical";}options.using.call(this,props,feedback);};}elem.offset($.extend(position,{using:using}));});};$.ui.position={fit:{left:function(position,data){var within=data.within,withinOffset=within.isWindow?within.scrollLeft:within.offset.left,outerWidth=within.width,collisionPosLeft=position.left-data.collisionPosition.marginLeft,overLeft=withinOffset-collisionPosLeft,overRight=collisionPosLeft+data.collisionWidth-outerWidth-withinOffset,newOverRight;if(data.collisionWidth>outerWidth){if(overLeft>0&&overRight<=0){newOverRight=position.left+overLeft+data.collisionWidth-outerWidth-withinOffset;position.left+=overLeft-newOverRight;}else if(overRight>0&&overLeft<=0){position.left=withinOffset;}else{if(overLeft>overRight){position.left=withinOffset+outerWidth-data.collisionWidth;}else{position.left=withinOffset;}}}else if(overLeft>0){position.left+=overLeft;}else if(overRight>0){position.left-=overRight;}else{position.left=max(position.left-collisionPosLeft,position.left);}},top:function(position,data){var within=data.within,withinOffset=within.isWindow?within.scrollTop:within.offset.top,outerHeight=data.within.height,collisionPosTop=position.top-data.collisionPosition.marginTop,overTop=withinOffset-collisionPosTop,overBottom=collisionPosTop+data.collisionHeight-outerHeight-withinOffset,newOverBottom;if(data.collisionHeight>outerHeight){if(overTop>0&&overBottom<=0){newOverBottom=position.top+overTop+data.collisionHeight-outerHeight-withinOffset;position.top+=overTop-newOverBottom;}else if(overBottom>0&&overTop<=0){position.top=withinOffset;}else{if(overTop>overBottom){position.top=withinOffset+outerHeight-data.collisionHeight;}else{position.top=withinOffset;}}}else if(overTop>0){position.top+=overTop;}else if(overBottom>0){position.top-=overBottom;}else{position.top=max(position.top-collisionPosTop,position.top);}}},flip:{left:function(position,data){var within=data.within,withinOffset=within.offset.left+within.scrollLeft,outerWidth=within.width,offsetLeft=within.isWindow?within.scrollLeft:within.offset.left,collisionPosLeft=position.left-data.collisionPosition.marginLeft,overLeft=collisionPosLeft-offsetLeft,overRight=collisionPosLeft+data.collisionWidth-outerWidth-offsetLeft,myOffset=data.my[0]==="left"?-data.elemWidth:data.my[0]==="right"?data.elemWidth:0,atOffset=data.at[0]==="left"?data.targetWidth:data.at[0]==="right"?-data.targetWidth:0,offset=-2*data.offset[0],newOverRight,newOverLeft;if(overLeft<0){newOverRight=position.left+myOffset+atOffset+offset+data.collisionWidth-outerWidth-withinOffset;if(newOverRight<0||newOverRight<abs(overLeft)){position.left+=myOffset+atOffset+offset;}}else if(overRight>0){newOverLeft=position.left-data.collisionPosition.marginLeft+myOffset+atOffset+offset-offsetLeft;if(newOverLeft>0||abs(newOverLeft)<overRight){position.left+=myOffset+atOffset+offset;}}},top:function(position,data){var within=data.within,withinOffset=within.offset.top+within.scrollTop,outerHeight=within.height,offsetTop=within.isWindow?within.scrollTop:within.offset.top,collisionPosTop=position.top-data.collisionPosition.marginTop,overTop=collisionPosTop-offsetTop,overBottom=collisionPosTop+data.collisionHeight-outerHeight-offsetTop,top=data.my[1]==="top",myOffset=top?-data.elemHeight:data.my[1]==="bottom"?data.elemHeight:0,atOffset=data.at[1]==="top"?data.targetHeight:data.at[1]==="bottom"?-data.targetHeight:0,offset=-2*data.offset[1],newOverTop,newOverBottom;if(overTop<0){newOverBottom=position.top+myOffset+atOffset+offset+data.collisionHeight-outerHeight-withinOffset;if(newOverBottom<0||newOverBottom<abs(overTop)){position.top+=myOffset+atOffset+offset;}}else if(overBottom>0){newOverTop=position.top-data.collisionPosition.marginTop+myOffset+atOffset+offset-offsetTop;if(newOverTop>0||abs(newOverTop)<overBottom){position.top+=myOffset+atOffset+offset;}}}},flipfit:{left:function(){$.ui.position.flip.left.apply(this,arguments);$.ui.position.fit.left.apply(this,arguments);},top:function(){$.ui.position.flip.top.apply(this,arguments);$.ui.position.fit.top.apply(this,arguments);}}};})();var position=$.ui.position;var data=$.extend($.expr[":"],{data:$.expr.createPseudo?$.expr.createPseudo(function(dataName){return function(elem){return!!$.data(elem,dataName);};}):function(elem,i,match){return!!$.data(elem,match[3]);}});var disableSelection=$.fn.extend({disableSelection:(function(){var eventType="onselectstart"in document.createElement("div")?"selectstart":"mousedown";return function(){return this.on(eventType+".ui-disableSelection",function(event){event.preventDefault();});};})(),enableSelection:function(){return this.off(".ui-disableSelection");}});$.ui.focusable=function(element,hasTabindex){var map,mapName,img,focusableIfVisible,fieldset,nodeName=element.nodeName.toLowerCase();if("area"===nodeName){map=element.parentNode;mapName=map.name;if(!element.href||!mapName||map.nodeName.toLowerCase()!=="map"){return false;}img=$("img[usemap='#"+mapName+"']");return img.length>0&&img.is(":visible");}if(/^(input|select|textarea|button|object)$/.test(nodeName)){focusableIfVisible=!element.disabled;if(focusableIfVisible){fieldset=$(element).closest("fieldset")[0];if(fieldset){focusableIfVisible=!fieldset.disabled;}}}else if("a"===nodeName){focusableIfVisible=element.href||hasTabindex;}else{focusableIfVisible=hasTabindex;}return focusableIfVisible&&$(element).is(":visible")&&visible($(element));};function visible(element){var visibility=element.css("visibility");while(visibility==="inherit"){element=element.parent();visibility=element.css("visibility");}return visibility!=="hidden";}$.extend($.expr[":"],{focusable:function(element){return $.ui.focusable(element,$.attr(element,"tabindex")!=null);}});var focusable=$.ui.focusable;var form=$.fn.form=function(){return typeof this[0].form==="string"?this.closest("form"):$(this[0].form);};var formResetMixin=$.ui.formResetMixin={_formResetHandler:function(){var form=$(this);setTimeout(function(){var instances=form.data("ui-form-reset-instances");$.each(instances,function(){this.refresh();});});},_bindFormResetHandler:function(){this.form=this.element.form();if(!this.form.length){return;}var instances=this.form.data("ui-form-reset-instances")||[];if(!instances.length){this.form.on("reset.ui-form-reset",this._formResetHandler);}instances.push(this);this.form.data("ui-form-reset-instances",instances);},_unbindFormResetHandler:function(){if(!this.form.length){return;}var instances=this.form.data("ui-form-reset-instances");instances.splice($.inArray(this,instances),1);if(instances.length){this.form.data("ui-form-reset-instances",instances);}else{this.form.removeData("ui-form-reset-instances").off("reset.ui-form-reset");}}};if($.fn.jquery.substring(0,3)==="1.7"){$.each(["Width","Height"],function(i,name){var side=name==="Width"?["Left","Right"]:["Top","Bottom"],type=name.toLowerCase(),orig={innerWidth:$.fn.innerWidth,innerHeight:$.fn.innerHeight,outerWidth:$.fn.outerWidth,outerHeight:$.fn.outerHeight};function reduce(elem,size,border,margin){$.each(side,function(){size-=parseFloat($.css(elem,"padding"+this))||0;if(border){size-=parseFloat($.css(elem,"border"+this+"Width"))||0;}if(margin){size-=parseFloat($.css(elem,"margin"+this))||0;}});return size;}$.fn["inner"+name]=function(size){if(size===undefined){return orig["inner"+name].call(this);}return this.each(function(){$(this).css(type,reduce(this,size)+"px");});};$.fn["outer"+name]=function(size,margin){if(typeof size!=="number"){return orig["outer"+name].call(this,size);}return this.each(function(){$(this).css(type,reduce(this,size,true,margin)+"px");});};});$.fn.addBack=function(selector){return this.add(selector==null?this.prevObject:this.prevObject.filter(selector));};};var keycode=$.ui.keyCode={BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38};var escapeSelector=$.ui.escapeSelector=(function(){var selectorEscape=/([!"#$%&'()*+,./:;<=>?@[\]^`{|}~])/g;return function(selector){return selector.replace(selectorEscape,"\\$1");};})();var labels=$.fn.labels=function(){var ancestor,selector,id,labels,ancestors;if(this[0].labels&&this[0].labels.length){return this.pushStack(this[0].labels);}labels=this.eq(0).parents("label");id=this.attr("id");if(id){ancestor=this.eq(0).parents().last();ancestors=ancestor.add(ancestor.length?ancestor.siblings():this.siblings());selector="label[for='"+$.ui.escapeSelector(id)+"']";labels=labels.add(ancestors.find(selector).addBack(selector));}return this.pushStack(labels);};var scrollParent=$.fn.scrollParent=function(includeHidden){var position=this.css("position"),excludeStaticParent=position==="absolute",overflowRegex=includeHidden?/(auto|scroll|hidden)/:/(auto|scroll)/,scrollParent=this.parents().filter(function(){var parent=$(this);if(excludeStaticParent&&parent.css("position")==="static"){return false;}return overflowRegex.test(parent.css("overflow")+parent.css("overflow-y")+parent.css("overflow-x"));}).eq(0);return position==="fixed"||!scrollParent.length?$(this[0].ownerDocument||document):scrollParent;};var tabbable=$.extend($.expr[":"],{tabbable:function(element){var tabIndex=$.attr(element,"tabindex"),hasTabindex=tabIndex!=null;return(!hasTabindex||tabIndex>=0)&&$.ui.focusable(element,hasTabindex);}});var uniqueId=$.fn.extend({uniqueId:(function(){var uuid=0;return function(){return this.each(function(){if(!this.id){this.id="ui-id-"+(++uuid);}});};})(),removeUniqueId:function(){return this.each(function(){if(/^ui-id-\d+$/.test(this.id)){$(this).removeAttr("id");}});}});var ie=$.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase());var mouseHandled=false;$(document).on("mouseup",function(){mouseHandled=false;});var widgetsMouse=$.widget("ui.mouse",{version:"1.12.1",options:{cancel:"input, textarea, button, select, option",distance:1,delay:0},_mouseInit:function(){var that=this;this.element.on("mousedown."+this.widgetName,function(event){return that._mouseDown(event);}).on("click."+this.widgetName,function(event){if(true===$.data(event.target,that.widgetName+".preventClickEvent")){$.removeData(event.target,that.widgetName+".preventClickEvent");event.stopImmediatePropagation();return false;}});this.started=false;},_mouseDestroy:function(){this.element.off("."+this.widgetName);if(this._mouseMoveDelegate){this.document.off("mousemove."+this.widgetName,this._mouseMoveDelegate).off("mouseup."+this.widgetName,this._mouseUpDelegate);}},_mouseDown:function(event){if(mouseHandled){return;}this._mouseMoved=false;(this._mouseStarted&&this._mouseUp(event));this._mouseDownEvent=event;var that=this,btnIsLeft=(event.which===1),elIsCancel=(typeof this.options.cancel==="string"&&event.target.nodeName?$(event.target).closest(this.options.cancel).length:false);if(!btnIsLeft||elIsCancel||!this._mouseCapture(event)){return true;}this.mouseDelayMet=!this.options.delay;if(!this.mouseDelayMet){this._mouseDelayTimer=setTimeout(function(){that.mouseDelayMet=true;},this.options.delay);}if(this._mouseDistanceMet(event)&&this._mouseDelayMet(event)){this._mouseStarted=(this._mouseStart(event)!==false);if(!this._mouseStarted){event.preventDefault();return true;}}if(true===$.data(event.target,this.widgetName+".preventClickEvent")){$.removeData(event.target,this.widgetName+".preventClickEvent");}this._mouseMoveDelegate=function(event){return that._mouseMove(event);};this._mouseUpDelegate=function(event){return that._mouseUp(event);};this.document.on("mousemove."+this.widgetName,this._mouseMoveDelegate).on("mouseup."+this.widgetName,this._mouseUpDelegate);event.preventDefault();mouseHandled=true;return true;},_mouseMove:function(event){if(this._mouseMoved){if($.ui.ie&&(!document.documentMode||document.documentMode<9)&&!event.button){return this._mouseUp(event);}else if(!event.which){if(event.originalEvent.altKey||event.originalEvent.ctrlKey||event.originalEvent.metaKey||event.originalEvent.shiftKey){this.ignoreMissingWhich=true;}else if(!this.ignoreMissingWhich){return this._mouseUp(event);}}}if(event.which||event.button){this._mouseMoved=true;}if(this._mouseStarted){this._mouseDrag(event);return event.preventDefault();}if(this._mouseDistanceMet(event)&&this._mouseDelayMet(event)){this._mouseStarted=(this._mouseStart(this._mouseDownEvent,event)!==false);(this._mouseStarted?this._mouseDrag(event):this._mouseUp(event));}return!this._mouseStarted;},_mouseUp:function(event){this.document.off("mousemove."+this.widgetName,this._mouseMoveDelegate).off("mouseup."+this.widgetName,this._mouseUpDelegate);if(this._mouseStarted){this._mouseStarted=false;if(event.target===this._mouseDownEvent.target){$.data(event.target,this.widgetName+".preventClickEvent",true);}this._mouseStop(event);}if(this._mouseDelayTimer){clearTimeout(this._mouseDelayTimer);delete this._mouseDelayTimer;}this.ignoreMissingWhich=false;mouseHandled=false;event.preventDefault();},_mouseDistanceMet:function(event){return(Math.max(Math.abs(this._mouseDownEvent.pageX-event.pageX),Math.abs(this._mouseDownEvent.pageY-event.pageY))>=this.options.distance);},_mouseDelayMet:function(){return this.mouseDelayMet;},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return true;}});var plugin=$.ui.plugin={add:function(module,option,set){var i,proto=$.ui[module].prototype;for(i in set){proto.plugins[i]=proto.plugins[i]||[];proto.plugins[i].push([option,set[i]]);}},call:function(instance,name,args,allowDisconnected){var i,set=instance.plugins[name];if(!set){return;}if(!allowDisconnected&&(!instance.element[0].parentNode||instance.element[0].parentNode.nodeType===11)){return;}for(i=0;i<set.length;i++){if(instance.options[set[i][0]]){set[i][1].apply(instance.element,args);}}}};var safeActiveElement=$.ui.safeActiveElement=function(document){var activeElement;try{activeElement=document.activeElement;}catch(error){activeElement=document.body;}if(!activeElement){activeElement=document.body;}if(!activeElement.nodeName){activeElement=document.body;}return activeElement;};var safeBlur=$.ui.safeBlur=function(element){if(element&&element.nodeName.toLowerCase()!=="body"){$(element).trigger("blur");}};$.widget("ui.draggable",$.ui.mouse,{version:"1.12.1",widgetEventPrefix:"drag",options:{addClasses:true,appendTo:"parent",axis:false,connectToSortable:false,containment:false,cursor:"auto",cursorAt:false,grid:false,handle:false,helper:"original",iframeFix:false,opacity:false,refreshPositions:false,revert:false,revertDuration:500,scope:"default",scroll:true,scrollSensitivity:20,scrollSpeed:20,snap:false,snapMode:"both",snapTolerance:20,stack:false,zIndex:false,drag:null,start:null,stop:null},_create:function(){if(this.options.helper==="original"){this._setPositionRelative();}if(this.options.addClasses){this._addClass("ui-draggable");}this._setHandleClassName();this._mouseInit();},_setOption:function(key,value){this._super(key,value);if(key==="handle"){this._removeHandleClassName();this._setHandleClassName();}},_destroy:function(){if((this.helper||this.element).is(".ui-draggable-dragging")){this.destroyOnClear=true;return;}this._removeHandleClassName();this._mouseDestroy();},_mouseCapture:function(event){var o=this.options;if(this.helper||o.disabled||$(event.target).closest(".ui-resizable-handle").length>0){return false;}this.handle=this._getHandle(event);if(!this.handle){return false;}this._blurActiveElement(event);this._blockFrames(o.iframeFix===true?"iframe":o.iframeFix);return true;},_blockFrames:function(selector){this.iframeBlocks=this.document.find(selector).map(function(){var iframe=$(this);return $("<div>").css("position","absolute").appendTo(iframe.parent()).outerWidth(iframe.outerWidth()).outerHeight(iframe.outerHeight()).offset(iframe.offset())[0];});},_unblockFrames:function(){if(this.iframeBlocks){this.iframeBlocks.remove();delete this.iframeBlocks;}},_blurActiveElement:function(event){var activeElement=$.ui.safeActiveElement(this.document[0]),target=$(event.target);if(target.closest(activeElement).length){return;}$.ui.safeBlur(activeElement);},_mouseStart:function(event){var o=this.options;this.helper=this._createHelper(event);this._addClass(this.helper,"ui-draggable-dragging");this._cacheHelperProportions();if($.ui.ddmanager){$.ui.ddmanager.current=this;}this._cacheMargins();this.cssPosition=this.helper.css("position");this.scrollParent=this.helper.scrollParent(true);this.offsetParent=this.helper.offsetParent();this.hasFixedAncestor=this.helper.parents().filter(function(){return $(this).css("position")==="fixed";}).length>0;this.positionAbs=this.element.offset();this._refreshOffsets(event);this.originalPosition=this.position=this._generatePosition(event,false);this.originalPageX=event.pageX;this.originalPageY=event.pageY;(o.cursorAt&&this._adjustOffsetFromHelper(o.cursorAt));this._setContainment();if(this._trigger("start",event)===false){this._clear();return false;}this._cacheHelperProportions();if($.ui.ddmanager&&!o.dropBehaviour){$.ui.ddmanager.prepareOffsets(this,event);}this._mouseDrag(event,true);if($.ui.ddmanager){$.ui.ddmanager.dragStart(this,event);}return true;},_refreshOffsets:function(event){this.offset={top:this.positionAbs.top-this.margins.top,left:this.positionAbs.left-this.margins.left,scroll:false,parent:this._getParentOffset(),relative:this._getRelativeOffset()};this.offset.click={left:event.pageX-this.offset.left,top:event.pageY-this.offset.top};},_mouseDrag:function(event,noPropagation){if(this.hasFixedAncestor){this.offset.parent=this._getParentOffset();}this.position=this._generatePosition(event,true);this.positionAbs=this._convertPositionTo("absolute");if(!noPropagation){var ui=this._uiHash();if(this._trigger("drag",event,ui)===false){this._mouseUp(new $.Event("mouseup",event));return false;}this.position=ui.position;}this.helper[0].style.left=this.position.left+"px";this.helper[0].style.top=this.position.top+"px";if($.ui.ddmanager){$.ui.ddmanager.drag(this,event);}return false;},_mouseStop:function(event){var that=this,dropped=false;if($.ui.ddmanager&&!this.options.dropBehaviour){dropped=$.ui.ddmanager.drop(this,event);}if(this.dropped){dropped=this.dropped;this.dropped=false;}if((this.options.revert==="invalid"&&!dropped)||(this.options.revert==="valid"&&dropped)||this.options.revert===true||($.isFunction(this.options.revert)&&this.options.revert.call(this.element,dropped))){$(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),function(){if(that._trigger("stop",event)!==false){that._clear();}});}else{if(this._trigger("stop",event)!==false){this._clear();}}return false;},_mouseUp:function(event){this._unblockFrames();if($.ui.ddmanager){$.ui.ddmanager.dragStop(this,event);}if(this.handleElement.is(event.target)){this.element.trigger("focus");}return $.ui.mouse.prototype._mouseUp.call(this,event);},cancel:function(){if(this.helper.is(".ui-draggable-dragging")){this._mouseUp(new $.Event("mouseup",{target:this.element[0]}));}else{this._clear();}return this;},_getHandle:function(event){return this.options.handle?!!$(event.target).closest(this.element.find(this.options.handle)).length:true;},_setHandleClassName:function(){this.handleElement=this.options.handle?this.element.find(this.options.handle):this.element;this._addClass(this.handleElement,"ui-draggable-handle");},_removeHandleClassName:function(){this._removeClass(this.handleElement,"ui-draggable-handle");},_createHelper:function(event){var o=this.options,helperIsFunction=$.isFunction(o.helper),helper=helperIsFunction?$(o.helper.apply(this.element[0],[event])):(o.helper==="clone"?this.element.clone().removeAttr("id"):this.element);if(!helper.parents("body").length){helper.appendTo((o.appendTo==="parent"?this.element[0].parentNode:o.appendTo));}if(helperIsFunction&&helper[0]===this.element[0]){this._setPositionRelative();}if(helper[0]!==this.element[0]&&!(/(fixed|absolute)/).test(helper.css("position"))){helper.css("position","absolute");}return helper;},_setPositionRelative:function(){if(!(/^(?:r|a|f)/).test(this.element.css("position"))){this.element[0].style.position="relative";}},_adjustOffsetFromHelper:function(obj){if(typeof obj==="string"){obj=obj.split(" ");}if($.isArray(obj)){obj={left:+obj[0],top:+obj[1]||0};}if("left"in obj){this.offset.click.left=obj.left+this.margins.left;}if("right"in obj){this.offset.click.left=this.helperProportions.width-obj.right+this.margins.left;}if("top"in obj){this.offset.click.top=obj.top+this.margins.top;}if("bottom"in obj){this.offset.click.top=this.helperProportions.height-obj.bottom+this.margins.top;}},_isRootNode:function(element){return(/(html|body)/i).test(element.tagName)||element===this.document[0];},_getParentOffset:function(){var po=this.offsetParent.offset(),document=this.document[0];if(this.cssPosition==="absolute"&&this.scrollParent[0]!==document&&$.contains(this.scrollParent[0],this.offsetParent[0])){po.left+=this.scrollParent.scrollLeft();po.top+=this.scrollParent.scrollTop();}if(this._isRootNode(this.offsetParent[0])){po={top:0,left:0};}return{top:po.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:po.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)};},_getRelativeOffset:function(){if(this.cssPosition!=="relative"){return{top:0,left:0};}var p=this.element.position(),scrollIsRootNode=this._isRootNode(this.scrollParent[0]);return{top:p.top-(parseInt(this.helper.css("top"),10)||0)+(!scrollIsRootNode?this.scrollParent.scrollTop():0),left:p.left-(parseInt(this.helper.css("left"),10)||0)+(!scrollIsRootNode?this.scrollParent.scrollLeft():0)};},_cacheMargins:function(){this.margins={left:(parseInt(this.element.css("marginLeft"),10)||0),top:(parseInt(this.element.css("marginTop"),10)||0),right:(parseInt(this.element.css("marginRight"),10)||0),bottom:(parseInt(this.element.css("marginBottom"),10)||0)};},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()};},_setContainment:function(){var isUserScrollable,c,ce,o=this.options,document=this.document[0];this.relativeContainer=null;if(!o.containment){this.containment=null;return;}if(o.containment==="window"){this.containment=[$(window).scrollLeft()-this.offset.relative.left-this.offset.parent.left,$(window).scrollTop()-this.offset.relative.top-this.offset.parent.top,$(window).scrollLeft()+$(window).width()-this.helperProportions.width-this.margins.left,$(window).scrollTop()+($(window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top];return;}if(o.containment==="document"){this.containment=[0,0,$(document).width()-this.helperProportions.width-this.margins.left,($(document).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top];return;}if(o.containment.constructor===Array){this.containment=o.containment;return;}if(o.containment==="parent"){o.containment=this.helper[0].parentNode;}c=$(o.containment);ce=c[0];if(!ce){return;}isUserScrollable=/(scroll|auto)/.test(c.css("overflow"));this.containment=[(parseInt(c.css("borderLeftWidth"),10)||0)+(parseInt(c.css("paddingLeft"),10)||0),(parseInt(c.css("borderTopWidth"),10)||0)+(parseInt(c.css("paddingTop"),10)||0),(isUserScrollable?Math.max(ce.scrollWidth,ce.offsetWidth):ce.offsetWidth)-(parseInt(c.css("borderRightWidth"),10)||0)-(parseInt(c.css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left-this.margins.right,(isUserScrollable?Math.max(ce.scrollHeight,ce.offsetHeight):ce.offsetHeight)-(parseInt(c.css("borderBottomWidth"),10)||0)-(parseInt(c.css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top-this.margins.bottom];this.relativeContainer=c;},_convertPositionTo:function(d,pos){if(!pos){pos=this.position;}var mod=d==="absolute"?1:-1,scrollIsRootNode=this._isRootNode(this.scrollParent[0]);return{top:(pos.top+this.offset.relative.top*mod+this.offset.parent.top*mod-((this.cssPosition==="fixed"?-this.offset.scroll.top:(scrollIsRootNode?0:this.offset.scroll.top))*mod)),left:(pos.left+this.offset.relative.left*mod+this.offset.parent.left*mod-((this.cssPosition==="fixed"?-this.offset.scroll.left:(scrollIsRootNode?0:this.offset.scroll.left))*mod))};},_generatePosition:function(event,constrainPosition){var containment,co,top,left,o=this.options,scrollIsRootNode=this._isRootNode(this.scrollParent[0]),pageX=event.pageX,pageY=event.pageY;if(!scrollIsRootNode||!this.offset.scroll){this.offset.scroll={top:this.scrollParent.scrollTop(),left:this.scrollParent.scrollLeft()};}if(constrainPosition){if(this.containment){if(this.relativeContainer){co=this.relativeContainer.offset();containment=[this.containment[0]+co.left,this.containment[1]+co.top,this.containment[2]+co.left,this.containment[3]+co.top];}else{containment=this.containment;}if(event.pageX-this.offset.click.left<containment[0]){pageX=containment[0]+this.offset.click.left;}if(event.pageY-this.offset.click.top<containment[1]){pageY=containment[1]+this.offset.click.top;}if(event.pageX-this.offset.click.left>containment[2]){pageX=containment[2]+this.offset.click.left;}if(event.pageY-this.offset.click.top>containment[3]){pageY=containment[3]+this.offset.click.top;}}if(o.grid){top=o.grid[1]?this.originalPageY+Math.round((pageY-this.originalPageY)/o.grid[1])*o.grid[1]:this.originalPageY;pageY=containment?((top-this.offset.click.top>=containment[1]||top-this.offset.click.top>containment[3])?top:((top-this.offset.click.top>=containment[1])?top-o.grid[1]:top+o.grid[1])):top;left=o.grid[0]?this.originalPageX+Math.round((pageX-this.originalPageX)/o.grid[0])*o.grid[0]:this.originalPageX;pageX=containment?((left-this.offset.click.left>=containment[0]||left-this.offset.click.left>containment[2])?left:((left-this.offset.click.left>=containment[0])?left-o.grid[0]:left+o.grid[0])):left;}if(o.axis==="y"){pageX=this.originalPageX;}if(o.axis==="x"){pageY=this.originalPageY;}}return{top:(pageY-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+(this.cssPosition==="fixed"?-this.offset.scroll.top:(scrollIsRootNode?0:this.offset.scroll.top))),left:(pageX-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+(this.cssPosition==="fixed"?-this.offset.scroll.left:(scrollIsRootNode?0:this.offset.scroll.left)))};},_clear:function(){this._removeClass(this.helper,"ui-draggable-dragging");if(this.helper[0]!==this.element[0]&&!this.cancelHelperRemoval){this.helper.remove();}this.helper=null;this.cancelHelperRemoval=false;if(this.destroyOnClear){this.destroy();}},_trigger:function(type,event,ui){ui=ui||this._uiHash();$.ui.plugin.call(this,type,[event,ui,this],true);if(/^(drag|start|stop)/.test(type)){this.positionAbs=this._convertPositionTo("absolute");ui.offset=this.positionAbs;}return $.Widget.prototype._trigger.call(this,type,event,ui);},plugins:{},_uiHash:function(){return{helper:this.helper,position:this.position,originalPosition:this.originalPosition,offset:this.positionAbs};}});$.ui.plugin.add("draggable","connectToSortable",{start:function(event,ui,draggable){var uiSortable=$.extend({},ui,{item:draggable.element});draggable.sortables=[];$(draggable.options.connectToSortable).each(function(){var sortable=$(this).sortable("instance");if(sortable&&!sortable.options.disabled){draggable.sortables.push(sortable);sortable.refreshPositions();sortable._trigger("activate",event,uiSortable);}});},stop:function(event,ui,draggable){var uiSortable=$.extend({},ui,{item:draggable.element});draggable.cancelHelperRemoval=false;$.each(draggable.sortables,function(){var sortable=this;if(sortable.isOver){sortable.isOver=0;draggable.cancelHelperRemoval=true;sortable.cancelHelperRemoval=false;sortable._storedCSS={position:sortable.placeholder.css("position"),top:sortable.placeholder.css("top"),left:sortable.placeholder.css("left")};sortable._mouseStop(event);sortable.options.helper=sortable.options._helper;}else{sortable.cancelHelperRemoval=true;sortable._trigger("deactivate",event,uiSortable);}});},drag:function(event,ui,draggable){$.each(draggable.sortables,function(){var innermostIntersecting=false,sortable=this;sortable.positionAbs=draggable.positionAbs;sortable.helperProportions=draggable.helperProportions;sortable.offset.click=draggable.offset.click;if(sortable._intersectsWith(sortable.containerCache)){innermostIntersecting=true;$.each(draggable.sortables,function(){this.positionAbs=draggable.positionAbs;this.helperProportions=draggable.helperProportions;this.offset.click=draggable.offset.click;if(this!==sortable&&this._intersectsWith(this.containerCache)&&$.contains(sortable.element[0],this.element[0])){innermostIntersecting=false;}return innermostIntersecting;});}if(innermostIntersecting){if(!sortable.isOver){sortable.isOver=1;draggable._parent=ui.helper.parent();sortable.currentItem=ui.helper.appendTo(sortable.element).data("ui-sortable-item",true);sortable.options._helper=sortable.options.helper;sortable.options.helper=function(){return ui.helper[0];};event.target=sortable.currentItem[0];sortable._mouseCapture(event,true);sortable._mouseStart(event,true,true);sortable.offset.click.top=draggable.offset.click.top;sortable.offset.click.left=draggable.offset.click.left;sortable.offset.parent.left-=draggable.offset.parent.left-sortable.offset.parent.left;sortable.offset.parent.top-=draggable.offset.parent.top-sortable.offset.parent.top;draggable._trigger("toSortable",event);draggable.dropped=sortable.element;$.each(draggable.sortables,function(){this.refreshPositions();});draggable.currentItem=draggable.element;sortable.fromOutside=draggable;}if(sortable.currentItem){sortable._mouseDrag(event);ui.position=sortable.position;}}else{if(sortable.isOver){sortable.isOver=0;sortable.cancelHelperRemoval=true;sortable.options._revert=sortable.options.revert;sortable.options.revert=false;sortable._trigger("out",event,sortable._uiHash(sortable));sortable._mouseStop(event,true);sortable.options.revert=sortable.options._revert;sortable.options.helper=sortable.options._helper;if(sortable.placeholder){sortable.placeholder.remove();}ui.helper.appendTo(draggable._parent);draggable._refreshOffsets(event);ui.position=draggable._generatePosition(event,true);draggable._trigger("fromSortable",event);draggable.dropped=false;$.each(draggable.sortables,function(){this.refreshPositions();});}}});}});$.ui.plugin.add("draggable","cursor",{start:function(event,ui,instance){var t=$("body"),o=instance.options;if(t.css("cursor")){o._cursor=t.css("cursor");}t.css("cursor",o.cursor);},stop:function(event,ui,instance){var o=instance.options;if(o._cursor){$("body").css("cursor",o._cursor);}}});$.ui.plugin.add("draggable","opacity",{start:function(event,ui,instance){var t=$(ui.helper),o=instance.options;if(t.css("opacity")){o._opacity=t.css("opacity");}t.css("opacity",o.opacity);},stop:function(event,ui,instance){var o=instance.options;if(o._opacity){$(ui.helper).css("opacity",o._opacity);}}});$.ui.plugin.add("draggable","scroll",{start:function(event,ui,i){if(!i.scrollParentNotHidden){i.scrollParentNotHidden=i.helper.scrollParent(false);}if(i.scrollParentNotHidden[0]!==i.document[0]&&i.scrollParentNotHidden[0].tagName!=="HTML"){i.overflowOffset=i.scrollParentNotHidden.offset();}},drag:function(event,ui,i){var o=i.options,scrolled=false,scrollParent=i.scrollParentNotHidden[0],document=i.document[0];if(scrollParent!==document&&scrollParent.tagName!=="HTML"){if(!o.axis||o.axis!=="x"){if((i.overflowOffset.top+scrollParent.offsetHeight)-event.pageY<o.scrollSensitivity){scrollParent.scrollTop=scrolled=scrollParent.scrollTop+o.scrollSpeed;}else if(event.pageY-i.overflowOffset.top<o.scrollSensitivity){scrollParent.scrollTop=scrolled=scrollParent.scrollTop-o.scrollSpeed;}}if(!o.axis||o.axis!=="y"){if((i.overflowOffset.left+scrollParent.offsetWidth)-event.pageX<o.scrollSensitivity){scrollParent.scrollLeft=scrolled=scrollParent.scrollLeft+o.scrollSpeed;}else if(event.pageX-i.overflowOffset.left<o.scrollSensitivity){scrollParent.scrollLeft=scrolled=scrollParent.scrollLeft-o.scrollSpeed;}}}else{if(!o.axis||o.axis!=="x"){if(event.pageY-$(document).scrollTop()<o.scrollSensitivity){scrolled=$(document).scrollTop($(document).scrollTop()-o.scrollSpeed);}else if($(window).height()-(event.pageY-$(document).scrollTop())<o.scrollSensitivity){scrolled=$(document).scrollTop($(document).scrollTop()+o.scrollSpeed);}}if(!o.axis||o.axis!=="y"){if(event.pageX-$(document).scrollLeft()<o.scrollSensitivity){scrolled=$(document).scrollLeft($(document).scrollLeft()-o.scrollSpeed);}else if($(window).width()-(event.pageX-$(document).scrollLeft())<o.scrollSensitivity){scrolled=$(document).scrollLeft($(document).scrollLeft()+o.scrollSpeed);}}}if(scrolled!==false&&$.ui.ddmanager&&!o.dropBehaviour){$.ui.ddmanager.prepareOffsets(i,event);}}});$.ui.plugin.add("draggable","snap",{start:function(event,ui,i){var o=i.options;i.snapElements=[];$(o.snap.constructor!==String?(o.snap.items||":data(ui-draggable)"):o.snap).each(function(){var $t=$(this),$o=$t.offset();if(this!==i.element[0]){i.snapElements.push({item:this,width:$t.outerWidth(),height:$t.outerHeight(),top:$o.top,left:$o.left});}});},drag:function(event,ui,inst){var ts,bs,ls,rs,l,r,t,b,i,first,o=inst.options,d=o.snapTolerance,x1=ui.offset.left,x2=x1+inst.helperProportions.width,y1=ui.offset.top,y2=y1+inst.helperProportions.height;for(i=inst.snapElements.length-1;i>=0;i--){l=inst.snapElements[i].left-inst.margins.left;r=l+inst.snapElements[i].width;t=inst.snapElements[i].top-inst.margins.top;b=t+inst.snapElements[i].height;if(x2<l-d||x1>r+d||y2<t-d||y1>b+d||!$.contains(inst.snapElements[i].item.ownerDocument,inst.snapElements[i].item)){if(inst.snapElements[i].snapping){(inst.options.snap.release&&inst.options.snap.release.call(inst.element,event,$.extend(inst._uiHash(),{snapItem:inst.snapElements[i].item})));}inst.snapElements[i].snapping=false;continue;}if(o.snapMode!=="inner"){ts=Math.abs(t-y2)<=d;bs=Math.abs(b-y1)<=d;ls=Math.abs(l-x2)<=d;rs=Math.abs(r-x1)<=d;if(ts){ui.position.top=inst._convertPositionTo("relative",{top:t-inst.helperProportions.height,left:0}).top;}if(bs){ui.position.top=inst._convertPositionTo("relative",{top:b,left:0}).top;}if(ls){ui.position.left=inst._convertPositionTo("relative",{top:0,left:l-inst.helperProportions.width}).left;}if(rs){ui.position.left=inst._convertPositionTo("relative",{top:0,left:r}).left;}}first=(ts||bs||ls||rs);if(o.snapMode!=="outer"){ts=Math.abs(t-y1)<=d;bs=Math.abs(b-y2)<=d;ls=Math.abs(l-x1)<=d;rs=Math.abs(r-x2)<=d;if(ts){ui.position.top=inst._convertPositionTo("relative",{top:t,left:0}).top;}if(bs){ui.position.top=inst._convertPositionTo("relative",{top:b-inst.helperProportions.height,left:0}).top;}if(ls){ui.position.left=inst._convertPositionTo("relative",{top:0,left:l}).left;}if(rs){ui.position.left=inst._convertPositionTo("relative",{top:0,left:r-inst.helperProportions.width}).left;}}if(!inst.snapElements[i].snapping&&(ts||bs||ls||rs||first)){(inst.options.snap.snap&&inst.options.snap.snap.call(inst.element,event,$.extend(inst._uiHash(),{snapItem:inst.snapElements[i].item})));}inst.snapElements[i].snapping=(ts||bs||ls||rs||first);}}});$.ui.plugin.add("draggable","stack",{start:function(event,ui,instance){var min,o=instance.options,group=$.makeArray($(o.stack)).sort(function(a,b){return(parseInt($(a).css("zIndex"),10)||0)-(parseInt($(b).css("zIndex"),10)||0);});if(!group.length){return;}min=parseInt($(group[0]).css("zIndex"),10)||0;$(group).each(function(i){$(this).css("zIndex",min+i);});this.css("zIndex",(min+group.length));}});$.ui.plugin.add("draggable","zIndex",{start:function(event,ui,instance){var t=$(ui.helper),o=instance.options;if(t.css("zIndex")){o._zIndex=t.css("zIndex");}t.css("zIndex",o.zIndex);},stop:function(event,ui,instance){var o=instance.options;if(o._zIndex){$(ui.helper).css("zIndex",o._zIndex);}}});var widgetsDraggable=$.ui.draggable;$.widget("ui.droppable",{version:"1.12.1",widgetEventPrefix:"drop",options:{accept:"*",addClasses:true,greedy:false,scope:"default",tolerance:"intersect",activate:null,deactivate:null,drop:null,out:null,over:null},_create:function(){var proportions,o=this.options,accept=o.accept;this.isover=false;this.isout=true;this.accept=$.isFunction(accept)?accept:function(d){return d.is(accept);};this.proportions=function(){if(arguments.length){proportions=arguments[0];}else{return proportions?proportions:proportions={width:this.element[0].offsetWidth,height:this.element[0].offsetHeight};}};this._addToManager(o.scope);o.addClasses&&this._addClass("ui-droppable");},_addToManager:function(scope){$.ui.ddmanager.droppables[scope]=$.ui.ddmanager.droppables[scope]||[];$.ui.ddmanager.droppables[scope].push(this);},_splice:function(drop){var i=0;for(;i<drop.length;i++){if(drop[i]===this){drop.splice(i,1);}}},_destroy:function(){var drop=$.ui.ddmanager.droppables[this.options.scope];this._splice(drop);},_setOption:function(key,value){if(key==="accept"){this.accept=$.isFunction(value)?value:function(d){return d.is(value);};}else if(key==="scope"){var drop=$.ui.ddmanager.droppables[this.options.scope];this._splice(drop);this._addToManager(value);}this._super(key,value);},_activate:function(event){var draggable=$.ui.ddmanager.current;this._addActiveClass();if(draggable){this._trigger("activate",event,this.ui(draggable));}},_deactivate:function(event){var draggable=$.ui.ddmanager.current;this._removeActiveClass();if(draggable){this._trigger("deactivate",event,this.ui(draggable));}},_over:function(event){var draggable=$.ui.ddmanager.current;if(!draggable||(draggable.currentItem||draggable.element)[0]===this.element[0]){return;}if(this.accept.call(this.element[0],(draggable.currentItem||draggable.element))){this._addHoverClass();this._trigger("over",event,this.ui(draggable));}},_out:function(event){var draggable=$.ui.ddmanager.current;if(!draggable||(draggable.currentItem||draggable.element)[0]===this.element[0]){return;}if(this.accept.call(this.element[0],(draggable.currentItem||draggable.element))){this._removeHoverClass();this._trigger("out",event,this.ui(draggable));}},_drop:function(event,custom){var draggable=custom||$.ui.ddmanager.current,childrenIntersection=false;if(!draggable||(draggable.currentItem||draggable.element)[0]===this.element[0]){return false;}this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function(){var inst=$(this).droppable("instance");if(inst.options.greedy&&!inst.options.disabled&&inst.options.scope===draggable.options.scope&&inst.accept.call(inst.element[0],(draggable.currentItem||draggable.element))&&intersect(draggable,$.extend(inst,{offset:inst.element.offset()}),inst.options.tolerance,event)){childrenIntersection=true;return false;}});if(childrenIntersection){return false;}if(this.accept.call(this.element[0],(draggable.currentItem||draggable.element))){this._removeActiveClass();this._removeHoverClass();this._trigger("drop",event,this.ui(draggable));return this.element;}return false;},ui:function(c){return{draggable:(c.currentItem||c.element),helper:c.helper,position:c.position,offset:c.positionAbs};},_addHoverClass:function(){this._addClass("ui-droppable-hover");},_removeHoverClass:function(){this._removeClass("ui-droppable-hover");},_addActiveClass:function(){this._addClass("ui-droppable-active");},_removeActiveClass:function(){this._removeClass("ui-droppable-active");}});var intersect=$.ui.intersect=(function(){function isOverAxis(x,reference,size){return(x>=reference)&&(x<(reference+size));}return function(draggable,droppable,toleranceMode,event){if(!droppable.offset){return false;}var x1=(draggable.positionAbs||draggable.position.absolute).left+draggable.margins.left,y1=(draggable.positionAbs||draggable.position.absolute).top+draggable.margins.top,x2=x1+draggable.helperProportions.width,y2=y1+draggable.helperProportions.height,l=droppable.offset.left,t=droppable.offset.top,r=l+droppable.proportions().width,b=t+droppable.proportions().height;switch(toleranceMode){case"fit":return(l<=x1&&x2<=r&&t<=y1&&y2<=b);case"intersect":return(l<x1+(draggable.helperProportions.width/2)&&x2-(draggable.helperProportions.width/2)<r&&t<y1+(draggable.helperProportions.height/2)&&y2-(draggable.helperProportions.height/2)<b);case"pointer":return isOverAxis(event.pageY,t,droppable.proportions().height)&&isOverAxis(event.pageX,l,droppable.proportions().width);case"touch":return((y1>=t&&y1<=b)||(y2>=t&&y2<=b)||(y1<t&&y2>b))&&((x1>=l&&x1<=r)||(x2>=l&&x2<=r)||(x1<l&&x2>r));default:return false;}};})();$.ui.ddmanager={current:null,droppables:{"default":[]},prepareOffsets:function(t,event){var i,j,m=$.ui.ddmanager.droppables[t.options.scope]||[],type=event?event.type:null,list=(t.currentItem||t.element).find(":data(ui-droppable)").addBack();droppablesLoop:for(i=0;i<m.length;i++){if(m[i].options.disabled||(t&&!m[i].accept.call(m[i].element[0],(t.currentItem||t.element)))){continue;}for(j=0;j<list.length;j++){if(list[j]===m[i].element[0]){m[i].proportions().height=0;continue droppablesLoop;}}m[i].visible=m[i].element.css("display")!=="none";if(!m[i].visible){continue;}if(type==="mousedown"){m[i]._activate.call(m[i],event);}m[i].offset=m[i].element.offset();m[i].proportions({width:m[i].element[0].offsetWidth,height:m[i].element[0].offsetHeight});}},drop:function(draggable,event){var dropped=false;$.each(($.ui.ddmanager.droppables[draggable.options.scope]||[]).slice(),function(){if(!this.options){return;}if(!this.options.disabled&&this.visible&&intersect(draggable,this,this.options.tolerance,event)){dropped=this._drop.call(this,event)||dropped;}if(!this.options.disabled&&this.visible&&this.accept.call(this.element[0],(draggable.currentItem||draggable.element))){this.isout=true;this.isover=false;this._deactivate.call(this,event);}});return dropped;},dragStart:function(draggable,event){draggable.element.parentsUntil("body").on("scroll.droppable",function(){if(!draggable.options.refreshPositions){$.ui.ddmanager.prepareOffsets(draggable,event);}});},drag:function(draggable,event){if(draggable.options.refreshPositions){$.ui.ddmanager.prepareOffsets(draggable,event);}$.each($.ui.ddmanager.droppables[draggable.options.scope]||[],function(){if(this.options.disabled||this.greedyChild||!this.visible){return;}var parentInstance,scope,parent,intersects=intersect(draggable,this,this.options.tolerance,event),c=!intersects&&this.isover?"isout":(intersects&&!this.isover?"isover":null);if(!c){return;}if(this.options.greedy){scope=this.options.scope;parent=this.element.parents(":data(ui-droppable)").filter(function(){return $(this).droppable("instance").options.scope===scope;});if(parent.length){parentInstance=$(parent[0]).droppable("instance");parentInstance.greedyChild=(c==="isover");}}if(parentInstance&&c==="isover"){parentInstance.isover=false;parentInstance.isout=true;parentInstance._out.call(parentInstance,event);}this[c]=true;this[c==="isout"?"isover":"isout"]=false;this[c==="isover"?"_over":"_out"].call(this,event);if(parentInstance&&c==="isout"){parentInstance.isout=false;parentInstance.isover=true;parentInstance._over.call(parentInstance,event);}});},dragStop:function(draggable,event){draggable.element.parentsUntil("body").off("scroll.droppable");if(!draggable.options.refreshPositions){$.ui.ddmanager.prepareOffsets(draggable,event);}}};if($.uiBackCompat!==false){$.widget("ui.droppable",$.ui.droppable,{options:{hoverClass:false,activeClass:false},_addActiveClass:function(){this._super();if(this.options.activeClass){this.element.addClass(this.options.activeClass);}},_removeActiveClass:function(){this._super();if(this.options.activeClass){this.element.removeClass(this.options.activeClass);}},_addHoverClass:function(){this._super();if(this.options.hoverClass){this.element.addClass(this.options.hoverClass);}},_removeHoverClass:function(){this._super();if(this.options.hoverClass){this.element.removeClass(this.options.hoverClass);}}});}var widgetsDroppable=$.ui.droppable;$.widget("ui.resizable",$.ui.mouse,{version:"1.12.1",widgetEventPrefix:"resize",options:{alsoResize:false,animate:false,animateDuration:"slow",animateEasing:"swing",aspectRatio:false,autoHide:false,classes:{"ui-resizable-se":"ui-icon ui-icon-gripsmall-diagonal-se"},containment:false,ghost:false,grid:false,handles:"e,s,se",helper:false,maxHeight:null,maxWidth:null,minHeight:10,minWidth:10,zIndex:90,resize:null,start:null,stop:null},_num:function(value){return parseFloat(value)||0;},_isNumber:function(value){return!isNaN(parseFloat(value));},_hasScroll:function(el,a){if($(el).css("overflow")==="hidden"){return false;}var scroll=(a&&a==="left")?"scrollLeft":"scrollTop",has=false;if(el[scroll]>0){return true;}el[scroll]=1;has=(el[scroll]>0);el[scroll]=0;return has;},_create:function(){var margins,o=this.options,that=this;this._addClass("ui-resizable");$.extend(this,{_aspectRatio:!!(o.aspectRatio),aspectRatio:o.aspectRatio,originalElement:this.element,_proportionallyResizeElements:[],_helper:o.helper||o.ghost||o.animate?o.helper||"ui-resizable-helper":null});if(this.element[0].nodeName.match(/^(canvas|textarea|input|select|button|img)$/i)){this.element.wrap($("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({position:this.element.css("position"),width:this.element.outerWidth(),height:this.element.outerHeight(),top:this.element.css("top"),left:this.element.css("left")}));this.element=this.element.parent().data("ui-resizable",this.element.resizable("instance"));this.elementIsWrapper=true;margins={marginTop:this.originalElement.css("marginTop"),marginRight:this.originalElement.css("marginRight"),marginBottom:this.originalElement.css("marginBottom"),marginLeft:this.originalElement.css("marginLeft")};this.element.css(margins);this.originalElement.css("margin",0);this.originalResizeStyle=this.originalElement.css("resize");this.originalElement.css("resize","none");this._proportionallyResizeElements.push(this.originalElement.css({position:"static",zoom:1,display:"block"}));this.originalElement.css(margins);this._proportionallyResize();}this._setupHandles();if(o.autoHide){$(this.element).on("mouseenter",function(){if(o.disabled){return;}that._removeClass("ui-resizable-autohide");that._handles.show();}).on("mouseleave",function(){if(o.disabled){return;}if(!that.resizing){that._addClass("ui-resizable-autohide");that._handles.hide();}});}this._mouseInit();},_destroy:function(){this._mouseDestroy();var wrapper,_destroy=function(exp){$(exp).removeData("resizable").removeData("ui-resizable").off(".resizable").find(".ui-resizable-handle").remove();};if(this.elementIsWrapper){_destroy(this.element);wrapper=this.element;this.originalElement.css({position:wrapper.css("position"),width:wrapper.outerWidth(),height:wrapper.outerHeight(),top:wrapper.css("top"),left:wrapper.css("left")}).insertAfter(wrapper);wrapper.remove();}this.originalElement.css("resize",this.originalResizeStyle);_destroy(this.originalElement);return this;},_setOption:function(key,value){this._super(key,value);switch(key){case"handles":this._removeHandles();this._setupHandles();break;default:break;}},_setupHandles:function(){var o=this.options,handle,i,n,hname,axis,that=this;this.handles=o.handles||(!$(".ui-resizable-handle",this.element).length?"e,s,se":{n:".ui-resizable-n",e:".ui-resizable-e",s:".ui-resizable-s",w:".ui-resizable-w",se:".ui-resizable-se",sw:".ui-resizable-sw",ne:".ui-resizable-ne",nw:".ui-resizable-nw"});this._handles=$();if(this.handles.constructor===String){if(this.handles==="all"){this.handles="n,e,s,w,se,sw,ne,nw";}n=this.handles.split(",");this.handles={};for(i=0;i<n.length;i++){handle=$.trim(n[i]);hname="ui-resizable-"+handle;axis=$("<div>");this._addClass(axis,"ui-resizable-handle "+hname);axis.css({zIndex:o.zIndex});this.handles[handle]=".ui-resizable-"+handle;this.element.append(axis);}}this._renderAxis=function(target){var i,axis,padPos,padWrapper;target=target||this.element;for(i in this.handles){if(this.handles[i].constructor===String){this.handles[i]=this.element.children(this.handles[i]).first().show();}else if(this.handles[i].jquery||this.handles[i].nodeType){this.handles[i]=$(this.handles[i]);this._on(this.handles[i],{"mousedown":that._mouseDown});}if(this.elementIsWrapper&&this.originalElement[0].nodeName.match(/^(textarea|input|select|button)$/i)){axis=$(this.handles[i],this.element);padWrapper=/sw|ne|nw|se|n|s/.test(i)?axis.outerHeight():axis.outerWidth();padPos=["padding",/ne|nw|n/.test(i)?"Top":/se|sw|s/.test(i)?"Bottom":/^e$/.test(i)?"Right":"Left"].join("");target.css(padPos,padWrapper);this._proportionallyResize();}this._handles=this._handles.add(this.handles[i]);}};this._renderAxis(this.element);this._handles=this._handles.add(this.element.find(".ui-resizable-handle"));this._handles.disableSelection();this._handles.on("mouseover",function(){if(!that.resizing){if(this.className){axis=this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i);}that.axis=axis&&axis[1]?axis[1]:"se";}});if(o.autoHide){this._handles.hide();this._addClass("ui-resizable-autohide");}},_removeHandles:function(){this._handles.remove();},_mouseCapture:function(event){var i,handle,capture=false;for(i in this.handles){handle=$(this.handles[i])[0];if(handle===event.target||$.contains(handle,event.target)){capture=true;}}return!this.options.disabled&&capture;},_mouseStart:function(event){var curleft,curtop,cursor,o=this.options,el=this.element;this.resizing=true;this._renderProxy();curleft=this._num(this.helper.css("left"));curtop=this._num(this.helper.css("top"));if(o.containment){curleft+=$(o.containment).scrollLeft()||0;curtop+=$(o.containment).scrollTop()||0;}this.offset=this.helper.offset();this.position={left:curleft,top:curtop};this.size=this._helper?{width:this.helper.width(),height:this.helper.height()}:{width:el.width(),height:el.height()};this.originalSize=this._helper?{width:el.outerWidth(),height:el.outerHeight()}:{width:el.width(),height:el.height()};this.sizeDiff={width:el.outerWidth()-el.width(),height:el.outerHeight()-el.height()};this.originalPosition={left:curleft,top:curtop};this.originalMousePosition={left:event.pageX,top:event.pageY};this.aspectRatio=(typeof o.aspectRatio==="number")?o.aspectRatio:((this.originalSize.width/this.originalSize.height)||1);cursor=$(".ui-resizable-"+this.axis).css("cursor");$("body").css("cursor",cursor==="auto"?this.axis+"-resize":cursor);this._addClass("ui-resizable-resizing");this._propagate("start",event);return true;},_mouseDrag:function(event){var data,props,smp=this.originalMousePosition,a=this.axis,dx=(event.pageX-smp.left)||0,dy=(event.pageY-smp.top)||0,trigger=this._change[a];this._updatePrevProperties();if(!trigger){return false;}data=trigger.apply(this,[event,dx,dy]);this._updateVirtualBoundaries(event.shiftKey);if(this._aspectRatio||event.shiftKey){data=this._updateRatio(data,event);}data=this._respectSize(data,event);this._updateCache(data);this._propagate("resize",event);props=this._applyChanges();if(!this._helper&&this._proportionallyResizeElements.length){this._proportionallyResize();}if(!$.isEmptyObject(props)){this._updatePrevProperties();this._trigger("resize",event,this.ui());this._applyChanges();}return false;},_mouseStop:function(event){this.resizing=false;var pr,ista,soffseth,soffsetw,s,left,top,o=this.options,that=this;if(this._helper){pr=this._proportionallyResizeElements;ista=pr.length&&(/textarea/i).test(pr[0].nodeName);soffseth=ista&&this._hasScroll(pr[0],"left")?0:that.sizeDiff.height;soffsetw=ista?0:that.sizeDiff.width;s={width:(that.helper.width()-soffsetw),height:(that.helper.height()-soffseth)};left=(parseFloat(that.element.css("left"))+(that.position.left-that.originalPosition.left))||null;top=(parseFloat(that.element.css("top"))+(that.position.top-that.originalPosition.top))||null;if(!o.animate){this.element.css($.extend(s,{top:top,left:left}));}that.helper.height(that.size.height);that.helper.width(that.size.width);if(this._helper&&!o.animate){this._proportionallyResize();}}$("body").css("cursor","auto");this._removeClass("ui-resizable-resizing");this._propagate("stop",event);if(this._helper){this.helper.remove();}return false;},_updatePrevProperties:function(){this.prevPosition={top:this.position.top,left:this.position.left};this.prevSize={width:this.size.width,height:this.size.height};},_applyChanges:function(){var props={};if(this.position.top!==this.prevPosition.top){props.top=this.position.top+"px";}if(this.position.left!==this.prevPosition.left){props.left=this.position.left+"px";}if(this.size.width!==this.prevSize.width){props.width=this.size.width+"px";}if(this.size.height!==this.prevSize.height){props.height=this.size.height+"px";}this.helper.css(props);return props;},_updateVirtualBoundaries:function(forceAspectRatio){var pMinWidth,pMaxWidth,pMinHeight,pMaxHeight,b,o=this.options;b={minWidth:this._isNumber(o.minWidth)?o.minWidth:0,maxWidth:this._isNumber(o.maxWidth)?o.maxWidth:Infinity,minHeight:this._isNumber(o.minHeight)?o.minHeight:0,maxHeight:this._isNumber(o.maxHeight)?o.maxHeight:Infinity};if(this._aspectRatio||forceAspectRatio){pMinWidth=b.minHeight*this.aspectRatio;pMinHeight=b.minWidth/this.aspectRatio;pMaxWidth=b.maxHeight*this.aspectRatio;pMaxHeight=b.maxWidth/this.aspectRatio;if(pMinWidth>b.minWidth){b.minWidth=pMinWidth;}if(pMinHeight>b.minHeight){b.minHeight=pMinHeight;}if(pMaxWidth<b.maxWidth){b.maxWidth=pMaxWidth;}if(pMaxHeight<b.maxHeight){b.maxHeight=pMaxHeight;}}this._vBoundaries=b;},_updateCache:function(data){this.offset=this.helper.offset();if(this._isNumber(data.left)){this.position.left=data.left;}if(this._isNumber(data.top)){this.position.top=data.top;}if(this._isNumber(data.height)){this.size.height=data.height;}if(this._isNumber(data.width)){this.size.width=data.width;}},_updateRatio:function(data){var cpos=this.position,csize=this.size,a=this.axis;if(this._isNumber(data.height)){data.width=(data.height*this.aspectRatio);}else if(this._isNumber(data.width)){data.height=(data.width/this.aspectRatio);}if(a==="sw"){data.left=cpos.left+(csize.width-data.width);data.top=null;}if(a==="nw"){data.top=cpos.top+(csize.height-data.height);data.left=cpos.left+(csize.width-data.width);}return data;},_respectSize:function(data){var o=this._vBoundaries,a=this.axis,ismaxw=this._isNumber(data.width)&&o.maxWidth&&(o.maxWidth<data.width),ismaxh=this._isNumber(data.height)&&o.maxHeight&&(o.maxHeight<data.height),isminw=this._isNumber(data.width)&&o.minWidth&&(o.minWidth>data.width),isminh=this._isNumber(data.height)&&o.minHeight&&(o.minHeight>data.height),dw=this.originalPosition.left+this.originalSize.width,dh=this.originalPosition.top+this.originalSize.height,cw=/sw|nw|w/.test(a),ch=/nw|ne|n/.test(a);if(isminw){data.width=o.minWidth;}if(isminh){data.height=o.minHeight;}if(ismaxw){data.width=o.maxWidth;}if(ismaxh){data.height=o.maxHeight;}if(isminw&&cw){data.left=dw-o.minWidth;}if(ismaxw&&cw){data.left=dw-o.maxWidth;}if(isminh&&ch){data.top=dh-o.minHeight;}if(ismaxh&&ch){data.top=dh-o.maxHeight;}if(!data.width&&!data.height&&!data.left&&data.top){data.top=null;}else if(!data.width&&!data.height&&!data.top&&data.left){data.left=null;}return data;},_getPaddingPlusBorderDimensions:function(element){var i=0,widths=[],borders=[element.css("borderTopWidth"),element.css("borderRightWidth"),element.css("borderBottomWidth"),element.css("borderLeftWidth")],paddings=[element.css("paddingTop"),element.css("paddingRight"),element.css("paddingBottom"),element.css("paddingLeft")];for(;i<4;i++){widths[i]=(parseFloat(borders[i])||0);widths[i]+=(parseFloat(paddings[i])||0);}return{height:widths[0]+widths[2],width:widths[1]+widths[3]};},_proportionallyResize:function(){if(!this._proportionallyResizeElements.length){return;}var prel,i=0,element=this.helper||this.element;for(;i<this._proportionallyResizeElements.length;i++){prel=this._proportionallyResizeElements[i];if(!this.outerDimensions){this.outerDimensions=this._getPaddingPlusBorderDimensions(prel);}prel.css({height:(element.height()-this.outerDimensions.height)||0,width:(element.width()-this.outerDimensions.width)||0});}},_renderProxy:function(){var el=this.element,o=this.options;this.elementOffset=el.offset();if(this._helper){this.helper=this.helper||$("<div style='overflow:hidden;'></div>");this._addClass(this.helper,this._helper);this.helper.css({width:this.element.outerWidth(),height:this.element.outerHeight(),position:"absolute",left:this.elementOffset.left+"px",top:this.elementOffset.top+"px",zIndex:++o.zIndex});this.helper.appendTo("body").disableSelection();}else{this.helper=this.element;}},_change:{e:function(event,dx){return{width:this.originalSize.width+dx};},w:function(event,dx){var cs=this.originalSize,sp=this.originalPosition;return{left:sp.left+dx,width:cs.width-dx};},n:function(event,dx,dy){var cs=this.originalSize,sp=this.originalPosition;return{top:sp.top+dy,height:cs.height-dy};},s:function(event,dx,dy){return{height:this.originalSize.height+dy};},se:function(event,dx,dy){return $.extend(this._change.s.apply(this,arguments),this._change.e.apply(this,[event,dx,dy]));},sw:function(event,dx,dy){return $.extend(this._change.s.apply(this,arguments),this._change.w.apply(this,[event,dx,dy]));},ne:function(event,dx,dy){return $.extend(this._change.n.apply(this,arguments),this._change.e.apply(this,[event,dx,dy]));},nw:function(event,dx,dy){return $.extend(this._change.n.apply(this,arguments),this._change.w.apply(this,[event,dx,dy]));}},_propagate:function(n,event){$.ui.plugin.call(this,n,[event,this.ui()]);(n!=="resize"&&this._trigger(n,event,this.ui()));},plugins:{},ui:function(){return{originalElement:this.originalElement,element:this.element,helper:this.helper,position:this.position,size:this.size,originalSize:this.originalSize,originalPosition:this.originalPosition};}});$.ui.plugin.add("resizable","animate",{stop:function(event){var that=$(this).resizable("instance"),o=that.options,pr=that._proportionallyResizeElements,ista=pr.length&&(/textarea/i).test(pr[0].nodeName),soffseth=ista&&that._hasScroll(pr[0],"left")?0:that.sizeDiff.height,soffsetw=ista?0:that.sizeDiff.width,style={width:(that.size.width-soffsetw),height:(that.size.height-soffseth)},left=(parseFloat(that.element.css("left"))+(that.position.left-that.originalPosition.left))||null,top=(parseFloat(that.element.css("top"))+(that.position.top-that.originalPosition.top))||null;that.element.animate($.extend(style,top&&left?{top:top,left:left}:{}),{duration:o.animateDuration,easing:o.animateEasing,step:function(){var data={width:parseFloat(that.element.css("width")),height:parseFloat(that.element.css("height")),top:parseFloat(that.element.css("top")),left:parseFloat(that.element.css("left"))};if(pr&&pr.length){$(pr[0]).css({width:data.width,height:data.height});}that._updateCache(data);that._propagate("resize",event);}});}});$.ui.plugin.add("resizable","containment",{start:function(){var element,p,co,ch,cw,width,height,that=$(this).resizable("instance"),o=that.options,el=that.element,oc=o.containment,ce=(oc instanceof $)?oc.get(0):(/parent/.test(oc))?el.parent().get(0):oc;if(!ce){return;}that.containerElement=$(ce);if(/document/.test(oc)||oc===document){that.containerOffset={left:0,top:0};that.containerPosition={left:0,top:0};that.parentData={element:$(document),left:0,top:0,width:$(document).width(),height:$(document).height()||document.body.parentNode.scrollHeight};}else{element=$(ce);p=[];$(["Top","Right","Left","Bottom"]).each(function(i,name){p[i]=that._num(element.css("padding"+name));});that.containerOffset=element.offset();that.containerPosition=element.position();that.containerSize={height:(element.innerHeight()-p[3]),width:(element.innerWidth()-p[1])};co=that.containerOffset;ch=that.containerSize.height;cw=that.containerSize.width;width=(that._hasScroll(ce,"left")?ce.scrollWidth:cw);height=(that._hasScroll(ce)?ce.scrollHeight:ch);that.parentData={element:ce,left:co.left,top:co.top,width:width,height:height};}},resize:function(event){var woset,hoset,isParent,isOffsetRelative,that=$(this).resizable("instance"),o=that.options,co=that.containerOffset,cp=that.position,pRatio=that._aspectRatio||event.shiftKey,cop={top:0,left:0},ce=that.containerElement,continueResize=true;if(ce[0]!==document&&(/static/).test(ce.css("position"))){cop=co;}if(cp.left<(that._helper?co.left:0)){that.size.width=that.size.width+(that._helper?(that.position.left-co.left):(that.position.left-cop.left));if(pRatio){that.size.height=that.size.width/that.aspectRatio;continueResize=false;}that.position.left=o.helper?co.left:0;}if(cp.top<(that._helper?co.top:0)){that.size.height=that.size.height+(that._helper?(that.position.top-co.top):that.position.top);if(pRatio){that.size.width=that.size.height*that.aspectRatio;continueResize=false;}that.position.top=that._helper?co.top:0;}isParent=that.containerElement.get(0)===that.element.parent().get(0);isOffsetRelative=/relative|absolute/.test(that.containerElement.css("position"));if(isParent&&isOffsetRelative){that.offset.left=that.parentData.left+that.position.left;that.offset.top=that.parentData.top+that.position.top;}else{that.offset.left=that.element.offset().left;that.offset.top=that.element.offset().top;}woset=Math.abs(that.sizeDiff.width+(that._helper?that.offset.left-cop.left:(that.offset.left-co.left)));hoset=Math.abs(that.sizeDiff.height+(that._helper?that.offset.top-cop.top:(that.offset.top-co.top)));if(woset+that.size.width>=that.parentData.width){that.size.width=that.parentData.width-woset;if(pRatio){that.size.height=that.size.width/that.aspectRatio;continueResize=false;}}if(hoset+that.size.height>=that.parentData.height){that.size.height=that.parentData.height-hoset;if(pRatio){that.size.width=that.size.height*that.aspectRatio;continueResize=false;}}if(!continueResize){that.position.left=that.prevPosition.left;that.position.top=that.prevPosition.top;that.size.width=that.prevSize.width;that.size.height=that.prevSize.height;}},stop:function(){var that=$(this).resizable("instance"),o=that.options,co=that.containerOffset,cop=that.containerPosition,ce=that.containerElement,helper=$(that.helper),ho=helper.offset(),w=helper.outerWidth()-that.sizeDiff.width,h=helper.outerHeight()-that.sizeDiff.height;if(that._helper&&!o.animate&&(/relative/).test(ce.css("position"))){$(this).css({left:ho.left-cop.left-co.left,width:w,height:h});}if(that._helper&&!o.animate&&(/static/).test(ce.css("position"))){$(this).css({left:ho.left-cop.left-co.left,width:w,height:h});}}});$.ui.plugin.add("resizable","alsoResize",{start:function(){var that=$(this).resizable("instance"),o=that.options;$(o.alsoResize).each(function(){var el=$(this);el.data("ui-resizable-alsoresize",{width:parseFloat(el.width()),height:parseFloat(el.height()),left:parseFloat(el.css("left")),top:parseFloat(el.css("top"))});});},resize:function(event,ui){var that=$(this).resizable("instance"),o=that.options,os=that.originalSize,op=that.originalPosition,delta={height:(that.size.height-os.height)||0,width:(that.size.width-os.width)||0,top:(that.position.top-op.top)||0,left:(that.position.left-op.left)||0};$(o.alsoResize).each(function(){var el=$(this),start=$(this).data("ui-resizable-alsoresize"),style={},css=el.parents(ui.originalElement[0]).length?["width","height"]:["width","height","top","left"];$.each(css,function(i,prop){var sum=(start[prop]||0)+(delta[prop]||0);if(sum&&sum>=0){style[prop]=sum||null;}});el.css(style);});},stop:function(){$(this).removeData("ui-resizable-alsoresize");}});$.ui.plugin.add("resizable","ghost",{start:function(){var that=$(this).resizable("instance"),cs=that.size;that.ghost=that.originalElement.clone();that.ghost.css({opacity:0.25,display:"block",position:"relative",height:cs.height,width:cs.width,margin:0,left:0,top:0});that._addClass(that.ghost,"ui-resizable-ghost");if($.uiBackCompat!==false&&typeof that.options.ghost==="string"){that.ghost.addClass(this.options.ghost);}that.ghost.appendTo(that.helper);},resize:function(){var that=$(this).resizable("instance");if(that.ghost){that.ghost.css({position:"relative",height:that.size.height,width:that.size.width});}},stop:function(){var that=$(this).resizable("instance");if(that.ghost&&that.helper){that.helper.get(0).removeChild(that.ghost.get(0));}}});$.ui.plugin.add("resizable","grid",{resize:function(){var outerDimensions,that=$(this).resizable("instance"),o=that.options,cs=that.size,os=that.originalSize,op=that.originalPosition,a=that.axis,grid=typeof o.grid==="number"?[o.grid,o.grid]:o.grid,gridX=(grid[0]||1),gridY=(grid[1]||1),ox=Math.round((cs.width-os.width)/gridX)*gridX,oy=Math.round((cs.height-os.height)/gridY)*gridY,newWidth=os.width+ox,newHeight=os.height+oy,isMaxWidth=o.maxWidth&&(o.maxWidth<newWidth),isMaxHeight=o.maxHeight&&(o.maxHeight<newHeight),isMinWidth=o.minWidth&&(o.minWidth>newWidth),isMinHeight=o.minHeight&&(o.minHeight>newHeight);o.grid=grid;if(isMinWidth){newWidth+=gridX;}if(isMinHeight){newHeight+=gridY;}if(isMaxWidth){newWidth-=gridX;}if(isMaxHeight){newHeight-=gridY;}if(/^(se|s|e)$/.test(a)){that.size.width=newWidth;that.size.height=newHeight;}else if(/^(ne)$/.test(a)){that.size.width=newWidth;that.size.height=newHeight;that.position.top=op.top-oy;}else if(/^(sw)$/.test(a)){that.size.width=newWidth;that.size.height=newHeight;that.position.left=op.left-ox;}else{if(newHeight-gridY<=0||newWidth-gridX<=0){outerDimensions=that._getPaddingPlusBorderDimensions(this);}if(newHeight-gridY>0){that.size.height=newHeight;that.position.top=op.top-oy;}else{newHeight=gridY-outerDimensions.height;that.size.height=newHeight;that.position.top=op.top+os.height-newHeight;}if(newWidth-gridX>0){that.size.width=newWidth;that.position.left=op.left-ox;}else{newWidth=gridX-outerDimensions.width;that.size.width=newWidth;that.position.left=op.left+os.width-newWidth;}}}});var widgetsResizable=$.ui.resizable;var widgetsSelectable=$.widget("ui.selectable",$.ui.mouse,{version:"1.12.1",options:{appendTo:"body",autoRefresh:true,distance:0,filter:"*",tolerance:"touch",selected:null,selecting:null,start:null,stop:null,unselected:null,unselecting:null},_create:function(){var that=this;this._addClass("ui-selectable");this.dragged=false;this.refresh=function(){that.elementPos=$(that.element[0]).offset();that.selectees=$(that.options.filter,that.element[0]);that._addClass(that.selectees,"ui-selectee");that.selectees.each(function(){var $this=$(this),selecteeOffset=$this.offset(),pos={left:selecteeOffset.left-that.elementPos.left,top:selecteeOffset.top-that.elementPos.top};$.data(this,"selectable-item",{element:this,$element:$this,left:pos.left,top:pos.top,right:pos.left+$this.outerWidth(),bottom:pos.top+$this.outerHeight(),startselected:false,selected:$this.hasClass("ui-selected"),selecting:$this.hasClass("ui-selecting"),unselecting:$this.hasClass("ui-unselecting")});});};this.refresh();this._mouseInit();this.helper=$("<div>");this._addClass(this.helper,"ui-selectable-helper");},_destroy:function(){this.selectees.removeData("selectable-item");this._mouseDestroy();},_mouseStart:function(event){var that=this,options=this.options;this.opos=[event.pageX,event.pageY];this.elementPos=$(this.element[0]).offset();if(this.options.disabled){return;}this.selectees=$(options.filter,this.element[0]);this._trigger("start",event);$(options.appendTo).append(this.helper);this.helper.css({"left":event.pageX,"top":event.pageY,"width":0,"height":0});if(options.autoRefresh){this.refresh();}this.selectees.filter(".ui-selected").each(function(){var selectee=$.data(this,"selectable-item");selectee.startselected=true;if(!event.metaKey&&!event.ctrlKey){that._removeClass(selectee.$element,"ui-selected");selectee.selected=false;that._addClass(selectee.$element,"ui-unselecting");selectee.unselecting=true;that._trigger("unselecting",event,{unselecting:selectee.element});}});$(event.target).parents().addBack().each(function(){var doSelect,selectee=$.data(this,"selectable-item");if(selectee){doSelect=(!event.metaKey&&!event.ctrlKey)||!selectee.$element.hasClass("ui-selected");that._removeClass(selectee.$element,doSelect?"ui-unselecting":"ui-selected")._addClass(selectee.$element,doSelect?"ui-selecting":"ui-unselecting");selectee.unselecting=!doSelect;selectee.selecting=doSelect;selectee.selected=doSelect;if(doSelect){that._trigger("selecting",event,{selecting:selectee.element});}else{that._trigger("unselecting",event,{unselecting:selectee.element});}return false;}});},_mouseDrag:function(event){this.dragged=true;if(this.options.disabled){return;}var tmp,that=this,options=this.options,x1=this.opos[0],y1=this.opos[1],x2=event.pageX,y2=event.pageY;if(x1>x2){tmp=x2;x2=x1;x1=tmp;}if(y1>y2){tmp=y2;y2=y1;y1=tmp;}this.helper.css({left:x1,top:y1,width:x2-x1,height:y2-y1});this.selectees.each(function(){var selectee=$.data(this,"selectable-item"),hit=false,offset={};if(!selectee||selectee.element===that.element[0]){return;}offset.left=selectee.left+that.elementPos.left;offset.right=selectee.right+that.elementPos.left;offset.top=selectee.top+that.elementPos.top;offset.bottom=selectee.bottom+that.elementPos.top;if(options.tolerance==="touch"){hit=(!(offset.left>x2||offset.right<x1||offset.top>y2||offset.bottom<y1));}else if(options.tolerance==="fit"){hit=(offset.left>x1&&offset.right<x2&&offset.top>y1&&offset.bottom<y2);}if(hit){if(selectee.selected){that._removeClass(selectee.$element,"ui-selected");selectee.selected=false;}if(selectee.unselecting){that._removeClass(selectee.$element,"ui-unselecting");selectee.unselecting=false;}if(!selectee.selecting){that._addClass(selectee.$element,"ui-selecting");selectee.selecting=true;that._trigger("selecting",event,{selecting:selectee.element});}}else{if(selectee.selecting){if((event.metaKey||event.ctrlKey)&&selectee.startselected){that._removeClass(selectee.$element,"ui-selecting");selectee.selecting=false;that._addClass(selectee.$element,"ui-selected");selectee.selected=true;}else{that._removeClass(selectee.$element,"ui-selecting");selectee.selecting=false;if(selectee.startselected){that._addClass(selectee.$element,"ui-unselecting");selectee.unselecting=true;}that._trigger("unselecting",event,{unselecting:selectee.element});}}if(selectee.selected){if(!event.metaKey&&!event.ctrlKey&&!selectee.startselected){that._removeClass(selectee.$element,"ui-selected");selectee.selected=false;that._addClass(selectee.$element,"ui-unselecting");selectee.unselecting=true;that._trigger("unselecting",event,{unselecting:selectee.element});}}}});return false;},_mouseStop:function(event){var that=this;this.dragged=false;$(".ui-unselecting",this.element[0]).each(function(){var selectee=$.data(this,"selectable-item");that._removeClass(selectee.$element,"ui-unselecting");selectee.unselecting=false;selectee.startselected=false;that._trigger("unselected",event,{unselected:selectee.element});});$(".ui-selecting",this.element[0]).each(function(){var selectee=$.data(this,"selectable-item");that._removeClass(selectee.$element,"ui-selecting")._addClass(selectee.$element,"ui-selected");selectee.selecting=false;selectee.selected=true;selectee.startselected=true;that._trigger("selected",event,{selected:selectee.element});});this._trigger("stop",event);this.helper.remove();return false;}});var widgetsSortable=$.widget("ui.sortable",$.ui.mouse,{version:"1.12.1",widgetEventPrefix:"sort",ready:false,options:{appendTo:"parent",axis:false,connectWith:false,containment:false,cursor:"auto",cursorAt:false,dropOnEmpty:true,forcePlaceholderSize:false,forceHelperSize:false,grid:false,handle:false,helper:"original",items:"> *",opacity:false,placeholder:false,revert:false,scroll:true,scrollSensitivity:20,scrollSpeed:20,scope:"default",tolerance:"intersect",zIndex:1000,activate:null,beforeStop:null,change:null,deactivate:null,out:null,over:null,receive:null,remove:null,sort:null,start:null,stop:null,update:null},_isOverAxis:function(x,reference,size){return(x>=reference)&&(x<(reference+size));},_isFloating:function(item){return(/left|right/).test(item.css("float"))||(/inline|table-cell/).test(item.css("display"));},_create:function(){this.containerCache={};this._addClass("ui-sortable");this.refresh();this.offset=this.element.offset();this._mouseInit();this._setHandleClassName();this.ready=true;},_setOption:function(key,value){this._super(key,value);if(key==="handle"){this._setHandleClassName();}},_setHandleClassName:function(){var that=this;this._removeClass(this.element.find(".ui-sortable-handle"),"ui-sortable-handle");$.each(this.items,function(){that._addClass(this.instance.options.handle?this.item.find(this.instance.options.handle):this.item,"ui-sortable-handle");});},_destroy:function(){this._mouseDestroy();for(var i=this.items.length-1;i>=0;i--){this.items[i].item.removeData(this.widgetName+"-item");}return this;},_mouseCapture:function(event,overrideHandle){var currentItem=null,validHandle=false,that=this;if(this.reverting){return false;}if(this.options.disabled||this.options.type==="static"){return false;}this._refreshItems(event);$(event.target).parents().each(function(){if($.data(this,that.widgetName+"-item")===that){currentItem=$(this);return false;}});if($.data(event.target,that.widgetName+"-item")===that){currentItem=$(event.target);}if(!currentItem){return false;}if(this.options.handle&&!overrideHandle){$(this.options.handle,currentItem).find("*").addBack().each(function(){if(this===event.target){validHandle=true;}});if(!validHandle){return false;}}this.currentItem=currentItem;this._removeCurrentsFromItems();return true;},_mouseStart:function(event,overrideHandle,noActivation){var i,body,o=this.options;this.currentContainer=this;this.refreshPositions();this.helper=this._createHelper(event);this._cacheHelperProportions();this._cacheMargins();this.scrollParent=this.helper.scrollParent();this.offset=this.currentItem.offset();this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left};$.extend(this.offset,{click:{left:event.pageX-this.offset.left,top:event.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()});this.helper.css("position","absolute");this.cssPosition=this.helper.css("position");this.originalPosition=this._generatePosition(event);this.originalPageX=event.pageX;this.originalPageY=event.pageY;(o.cursorAt&&this._adjustOffsetFromHelper(o.cursorAt));this.domPosition={prev:this.currentItem.prev()[0],parent:this.currentItem.parent()[0]};if(this.helper[0]!==this.currentItem[0]){this.currentItem.hide();}this._createPlaceholder();if(o.containment){this._setContainment();}if(o.cursor&&o.cursor!=="auto"){body=this.document.find("body");this.storedCursor=body.css("cursor");body.css("cursor",o.cursor);this.storedStylesheet=$("<style>*{ cursor: "+o.cursor+" !important; }</style>").appendTo(body);}if(o.opacity){if(this.helper.css("opacity")){this._storedOpacity=this.helper.css("opacity");}this.helper.css("opacity",o.opacity);}if(o.zIndex){if(this.helper.css("zIndex")){this._storedZIndex=this.helper.css("zIndex");}this.helper.css("zIndex",o.zIndex);}if(this.scrollParent[0]!==this.document[0]&&this.scrollParent[0].tagName!=="HTML"){this.overflowOffset=this.scrollParent.offset();}this._trigger("start",event,this._uiHash());if(!this._preserveHelperProportions){this._cacheHelperProportions();}if(!noActivation){for(i=this.containers.length-1;i>=0;i--){this.containers[i]._trigger("activate",event,this._uiHash(this));}}if($.ui.ddmanager){$.ui.ddmanager.current=this;}if($.ui.ddmanager&&!o.dropBehaviour){$.ui.ddmanager.prepareOffsets(this,event);}this.dragging=true;this._addClass(this.helper,"ui-sortable-helper");this._mouseDrag(event);return true;},_mouseDrag:function(event){var i,item,itemElement,intersection,o=this.options,scrolled=false;this.position=this._generatePosition(event);this.positionAbs=this._convertPositionTo("absolute");if(!this.lastPositionAbs){this.lastPositionAbs=this.positionAbs;}if(this.options.scroll){if(this.scrollParent[0]!==this.document[0]&&this.scrollParent[0].tagName!=="HTML"){if((this.overflowOffset.top+this.scrollParent[0].offsetHeight)-event.pageY<o.scrollSensitivity){this.scrollParent[0].scrollTop=scrolled=this.scrollParent[0].scrollTop+o.scrollSpeed;}else if(event.pageY-this.overflowOffset.top<o.scrollSensitivity){this.scrollParent[0].scrollTop=scrolled=this.scrollParent[0].scrollTop-o.scrollSpeed;}if((this.overflowOffset.left+this.scrollParent[0].offsetWidth)-event.pageX<o.scrollSensitivity){this.scrollParent[0].scrollLeft=scrolled=this.scrollParent[0].scrollLeft+o.scrollSpeed;}else if(event.pageX-this.overflowOffset.left<o.scrollSensitivity){this.scrollParent[0].scrollLeft=scrolled=this.scrollParent[0].scrollLeft-o.scrollSpeed;}}else{if(event.pageY-this.document.scrollTop()<o.scrollSensitivity){scrolled=this.document.scrollTop(this.document.scrollTop()-o.scrollSpeed);}else if(this.window.height()-(event.pageY-this.document.scrollTop())<o.scrollSensitivity){scrolled=this.document.scrollTop(this.document.scrollTop()+o.scrollSpeed);}if(event.pageX-this.document.scrollLeft()<o.scrollSensitivity){scrolled=this.document.scrollLeft(this.document.scrollLeft()-o.scrollSpeed);}else if(this.window.width()-(event.pageX-this.document.scrollLeft())<o.scrollSensitivity){scrolled=this.document.scrollLeft(this.document.scrollLeft()+o.scrollSpeed);}}if(scrolled!==false&&$.ui.ddmanager&&!o.dropBehaviour){$.ui.ddmanager.prepareOffsets(this,event);}}this.positionAbs=this._convertPositionTo("absolute");if(!this.options.axis||this.options.axis!=="y"){this.helper[0].style.left=this.position.left+"px";}if(!this.options.axis||this.options.axis!=="x"){this.helper[0].style.top=this.position.top+"px";}for(i=this.items.length-1;i>=0;i--){item=this.items[i];itemElement=item.item[0];intersection=this._intersectsWithPointer(item);if(!intersection){continue;}if(item.instance!==this.currentContainer){continue;}if(itemElement!==this.currentItem[0]&&this.placeholder[intersection===1?"next":"prev"]()[0]!==itemElement&&!$.contains(this.placeholder[0],itemElement)&&(this.options.type==="semi-dynamic"?!$.contains(this.element[0],itemElement):true)){this.direction=intersection===1?"down":"up";if(this.options.tolerance==="pointer"||this._intersectsWithSides(item)){this._rearrange(event,item);}else{break;}this._trigger("change",event,this._uiHash());break;}}this._contactContainers(event);if($.ui.ddmanager){$.ui.ddmanager.drag(this,event);}this._trigger("sort",event,this._uiHash());this.lastPositionAbs=this.positionAbs;return false;},_mouseStop:function(event,noPropagation){if(!event){return;}if($.ui.ddmanager&&!this.options.dropBehaviour){$.ui.ddmanager.drop(this,event);}if(this.options.revert){var that=this,cur=this.placeholder.offset(),axis=this.options.axis,animation={};if(!axis||axis==="x"){animation.left=cur.left-this.offset.parent.left-this.margins.left+(this.offsetParent[0]===this.document[0].body?0:this.offsetParent[0].scrollLeft);}if(!axis||axis==="y"){animation.top=cur.top-this.offset.parent.top-this.margins.top+(this.offsetParent[0]===this.document[0].body?0:this.offsetParent[0].scrollTop);}this.reverting=true;$(this.helper).animate(animation,parseInt(this.options.revert,10)||500,function(){that._clear(event);});}else{this._clear(event,noPropagation);}return false;},cancel:function(){if(this.dragging){this._mouseUp(new $.Event("mouseup",{target:null}));if(this.options.helper==="original"){this.currentItem.css(this._storedCSS);this._removeClass(this.currentItem,"ui-sortable-helper");}else{this.currentItem.show();}for(var i=this.containers.length-1;i>=0;i--){this.containers[i]._trigger("deactivate",null,this._uiHash(this));if(this.containers[i].containerCache.over){this.containers[i]._trigger("out",null,this._uiHash(this));this.containers[i].containerCache.over=0;}}}if(this.placeholder){if(this.placeholder[0].parentNode){this.placeholder[0].parentNode.removeChild(this.placeholder[0]);}if(this.options.helper!=="original"&&this.helper&&this.helper[0].parentNode){this.helper.remove();}$.extend(this,{helper:null,dragging:false,reverting:false,_noFinalSort:null});if(this.domPosition.prev){$(this.domPosition.prev).after(this.currentItem);}else{$(this.domPosition.parent).prepend(this.currentItem);}}return this;},serialize:function(o){var items=this._getItemsAsjQuery(o&&o.connected),str=[];o=o||{};$(items).each(function(){var res=($(o.item||this).attr(o.attribute||"id")||"").match(o.expression||(/(.+)[\-=_](.+)/));if(res){str.push((o.key||res[1]+"[]")+"="+(o.key&&o.expression?res[1]:res[2]));}});if(!str.length&&o.key){str.push(o.key+"=");}return str.join("&");},toArray:function(o){var items=this._getItemsAsjQuery(o&&o.connected),ret=[];o=o||{};items.each(function(){ret.push($(o.item||this).attr(o.attribute||"id")||"");});return ret;},_intersectsWith:function(item){var x1=this.positionAbs.left,x2=x1+this.helperProportions.width,y1=this.positionAbs.top,y2=y1+this.helperProportions.height,l=item.left,r=l+item.width,t=item.top,b=t+item.height,dyClick=this.offset.click.top,dxClick=this.offset.click.left,isOverElementHeight=(this.options.axis==="x")||((y1+dyClick)>t&&(y1+dyClick)<b),isOverElementWidth=(this.options.axis==="y")||((x1+dxClick)>l&&(x1+dxClick)<r),isOverElement=isOverElementHeight&&isOverElementWidth;if(this.options.tolerance==="pointer"||this.options.forcePointerForContainers||(this.options.tolerance!=="pointer"&&this.helperProportions[this.floating?"width":"height"]>item[this.floating?"width":"height"])){return isOverElement;}else{return(l<x1+(this.helperProportions.width/2)&&x2-(this.helperProportions.width/2)<r&&t<y1+(this.helperProportions.height/2)&&y2-(this.helperProportions.height/2)<b);}},_intersectsWithPointer:function(item){var verticalDirection,horizontalDirection,isOverElementHeight=(this.options.axis==="x")||this._isOverAxis(this.positionAbs.top+this.offset.click.top,item.top,item.height),isOverElementWidth=(this.options.axis==="y")||this._isOverAxis(this.positionAbs.left+this.offset.click.left,item.left,item.width),isOverElement=isOverElementHeight&&isOverElementWidth;if(!isOverElement){return false;}verticalDirection=this._getDragVerticalDirection();horizontalDirection=this._getDragHorizontalDirection();return this.floating?((horizontalDirection==="right"||verticalDirection==="down")?2:1):(verticalDirection&&(verticalDirection==="down"?2:1));},_intersectsWithSides:function(item){var isOverBottomHalf=this._isOverAxis(this.positionAbs.top+this.offset.click.top,item.top+(item.height/2),item.height),isOverRightHalf=this._isOverAxis(this.positionAbs.left+this.offset.click.left,item.left+(item.width/2),item.width),verticalDirection=this._getDragVerticalDirection(),horizontalDirection=this._getDragHorizontalDirection();if(this.floating&&horizontalDirection){return((horizontalDirection==="right"&&isOverRightHalf)||(horizontalDirection==="left"&&!isOverRightHalf));}else{return verticalDirection&&((verticalDirection==="down"&&isOverBottomHalf)||(verticalDirection==="up"&&!isOverBottomHalf));}},_getDragVerticalDirection:function(){var delta=this.positionAbs.top-this.lastPositionAbs.top;return delta!==0&&(delta>0?"down":"up");},_getDragHorizontalDirection:function(){var delta=this.positionAbs.left-this.lastPositionAbs.left;return delta!==0&&(delta>0?"right":"left");},refresh:function(event){this._refreshItems(event);this._setHandleClassName();this.refreshPositions();return this;},_connectWith:function(){var options=this.options;return options.connectWith.constructor===String?[options.connectWith]:options.connectWith;},_getItemsAsjQuery:function(connected){var i,j,cur,inst,items=[],queries=[],connectWith=this._connectWith();if(connectWith&&connected){for(i=connectWith.length-1;i>=0;i--){cur=$(connectWith[i],this.document[0]);for(j=cur.length-1;j>=0;j--){inst=$.data(cur[j],this.widgetFullName);if(inst&&inst!==this&&!inst.options.disabled){queries.push([$.isFunction(inst.options.items)?inst.options.items.call(inst.element):$(inst.options.items,inst.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),inst]);}}}}queries.push([$.isFunction(this.options.items)?this.options.items.call(this.element,null,{options:this.options,item:this.currentItem}):$(this.options.items,this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),this]);function addItems(){items.push(this);}for(i=queries.length-1;i>=0;i--){queries[i][0].each(addItems);}return $(items);},_removeCurrentsFromItems:function(){var list=this.currentItem.find(":data("+this.widgetName+"-item)");this.items=$.grep(this.items,function(item){for(var j=0;j<list.length;j++){if(list[j]===item.item[0]){return false;}}return true;});},_refreshItems:function(event){this.items=[];this.containers=[this];var i,j,cur,inst,targetData,_queries,item,queriesLength,items=this.items,queries=[[$.isFunction(this.options.items)?this.options.items.call(this.element[0],event,{item:this.currentItem}):$(this.options.items,this.element),this]],connectWith=this._connectWith();if(connectWith&&this.ready){for(i=connectWith.length-1;i>=0;i--){cur=$(connectWith[i],this.document[0]);for(j=cur.length-1;j>=0;j--){inst=$.data(cur[j],this.widgetFullName);if(inst&&inst!==this&&!inst.options.disabled){queries.push([$.isFunction(inst.options.items)?inst.options.items.call(inst.element[0],event,{item:this.currentItem}):$(inst.options.items,inst.element),inst]);this.containers.push(inst);}}}}for(i=queries.length-1;i>=0;i--){targetData=queries[i][1];_queries=queries[i][0];for(j=0,queriesLength=_queries.length;j<queriesLength;j++){item=$(_queries[j]);item.data(this.widgetName+"-item",targetData);items.push({item:item,instance:targetData,width:0,height:0,left:0,top:0});}}},refreshPositions:function(fast){this.floating=this.items.length?this.options.axis==="x"||this._isFloating(this.items[0].item):false;if(this.offsetParent&&this.helper){this.offset.parent=this._getParentOffset();}var i,item,t,p;for(i=this.items.length-1;i>=0;i--){item=this.items[i];if(item.instance!==this.currentContainer&&this.currentContainer&&item.item[0]!==this.currentItem[0]){continue;}t=this.options.toleranceElement?$(this.options.toleranceElement,item.item):item.item;if(!fast){item.width=t.outerWidth();item.height=t.outerHeight();}p=t.offset();item.left=p.left;item.top=p.top;}if(this.options.custom&&this.options.custom.refreshContainers){this.options.custom.refreshContainers.call(this);}else{for(i=this.containers.length-1;i>=0;i--){p=this.containers[i].element.offset();this.containers[i].containerCache.left=p.left;this.containers[i].containerCache.top=p.top;this.containers[i].containerCache.width=this.containers[i].element.outerWidth();this.containers[i].containerCache.height=this.containers[i].element.outerHeight();}}return this;},_createPlaceholder:function(that){that=that||this;var className,o=that.options;if(!o.placeholder||o.placeholder.constructor===String){className=o.placeholder;o.placeholder={element:function(){var nodeName=that.currentItem[0].nodeName.toLowerCase(),element=$("<"+nodeName+">",that.document[0]);that._addClass(element,"ui-sortable-placeholder",className||that.currentItem[0].className)._removeClass(element,"ui-sortable-helper");if(nodeName==="tbody"){that._createTrPlaceholder(that.currentItem.find("tr").eq(0),$("<tr>",that.document[0]).appendTo(element));}else if(nodeName==="tr"){that._createTrPlaceholder(that.currentItem,element);}else if(nodeName==="img"){element.attr("src",that.currentItem.attr("src"));}if(!className){element.css("visibility","hidden");}return element;},update:function(container,p){if(className&&!o.forcePlaceholderSize){return;}if(!p.height()){p.height(that.currentItem.innerHeight()-parseInt(that.currentItem.css("paddingTop")||0,10)-parseInt(that.currentItem.css("paddingBottom")||0,10));}if(!p.width()){p.width(that.currentItem.innerWidth()-parseInt(that.currentItem.css("paddingLeft")||0,10)-parseInt(that.currentItem.css("paddingRight")||0,10));}}};}that.placeholder=$(o.placeholder.element.call(that.element,that.currentItem));that.currentItem.after(that.placeholder);o.placeholder.update(that,that.placeholder);},_createTrPlaceholder:function(sourceTr,targetTr){var that=this;sourceTr.children().each(function(){$("<td>&#160;</td>",that.document[0]).attr("colspan",$(this).attr("colspan")||1).appendTo(targetTr);});},_contactContainers:function(event){var i,j,dist,itemWithLeastDistance,posProperty,sizeProperty,cur,nearBottom,floating,axis,innermostContainer=null,innermostIndex=null;for(i=this.containers.length-1;i>=0;i--){if($.contains(this.currentItem[0],this.containers[i].element[0])){continue;}if(this._intersectsWith(this.containers[i].containerCache)){if(innermostContainer&&$.contains(this.containers[i].element[0],innermostContainer.element[0])){continue;}innermostContainer=this.containers[i];innermostIndex=i;}else{if(this.containers[i].containerCache.over){this.containers[i]._trigger("out",event,this._uiHash(this));this.containers[i].containerCache.over=0;}}}if(!innermostContainer){return;}if(this.containers.length===1){if(!this.containers[innermostIndex].containerCache.over){this.containers[innermostIndex]._trigger("over",event,this._uiHash(this));this.containers[innermostIndex].containerCache.over=1;}}else{dist=10000;itemWithLeastDistance=null;floating=innermostContainer.floating||this._isFloating(this.currentItem);posProperty=floating?"left":"top";sizeProperty=floating?"width":"height";axis=floating?"pageX":"pageY";for(j=this.items.length-1;j>=0;j--){if(!$.contains(this.containers[innermostIndex].element[0],this.items[j].item[0])){continue;}if(this.items[j].item[0]===this.currentItem[0]){continue;}cur=this.items[j].item.offset()[posProperty];nearBottom=false;if(event[axis]-cur>this.items[j][sizeProperty]/2){nearBottom=true;}if(Math.abs(event[axis]-cur)<dist){dist=Math.abs(event[axis]-cur);itemWithLeastDistance=this.items[j];this.direction=nearBottom?"up":"down";}}if(!itemWithLeastDistance&&!this.options.dropOnEmpty){return;}if(this.currentContainer===this.containers[innermostIndex]){if(!this.currentContainer.containerCache.over){this.containers[innermostIndex]._trigger("over",event,this._uiHash());this.currentContainer.containerCache.over=1;}return;}itemWithLeastDistance?this._rearrange(event,itemWithLeastDistance,null,true):this._rearrange(event,null,this.containers[innermostIndex].element,true);this._trigger("change",event,this._uiHash());this.containers[innermostIndex]._trigger("change",event,this._uiHash(this));this.currentContainer=this.containers[innermostIndex];this.options.placeholder.update(this.currentContainer,this.placeholder);this.containers[innermostIndex]._trigger("over",event,this._uiHash(this));this.containers[innermostIndex].containerCache.over=1;}},_createHelper:function(event){var o=this.options,helper=$.isFunction(o.helper)?$(o.helper.apply(this.element[0],[event,this.currentItem])):(o.helper==="clone"?this.currentItem.clone():this.currentItem);if(!helper.parents("body").length){$(o.appendTo!=="parent"?o.appendTo:this.currentItem[0].parentNode)[0].appendChild(helper[0]);}if(helper[0]===this.currentItem[0]){this._storedCSS={width:this.currentItem[0].style.width,height:this.currentItem[0].style.height,position:this.currentItem.css("position"),top:this.currentItem.css("top"),left:this.currentItem.css("left")};}if(!helper[0].style.width||o.forceHelperSize){helper.width(this.currentItem.width());}if(!helper[0].style.height||o.forceHelperSize){helper.height(this.currentItem.height());}return helper;},_adjustOffsetFromHelper:function(obj){if(typeof obj==="string"){obj=obj.split(" ");}if($.isArray(obj)){obj={left:+obj[0],top:+obj[1]||0};}if("left"in obj){this.offset.click.left=obj.left+this.margins.left;}if("right"in obj){this.offset.click.left=this.helperProportions.width-obj.right+this.margins.left;}if("top"in obj){this.offset.click.top=obj.top+this.margins.top;}if("bottom"in obj){this.offset.click.top=this.helperProportions.height-obj.bottom+this.margins.top;}},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();var po=this.offsetParent.offset();if(this.cssPosition==="absolute"&&this.scrollParent[0]!==this.document[0]&&$.contains(this.scrollParent[0],this.offsetParent[0])){po.left+=this.scrollParent.scrollLeft();po.top+=this.scrollParent.scrollTop();}if(this.offsetParent[0]===this.document[0].body||(this.offsetParent[0].tagName&&this.offsetParent[0].tagName.toLowerCase()==="html"&&$.ui.ie)){po={top:0,left:0};}return{top:po.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:po.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)};},_getRelativeOffset:function(){if(this.cssPosition==="relative"){var p=this.currentItem.position();return{top:p.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:p.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()};}else{return{top:0,left:0};}},_cacheMargins:function(){this.margins={left:(parseInt(this.currentItem.css("marginLeft"),10)||0),top:(parseInt(this.currentItem.css("marginTop"),10)||0)};},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()};},_setContainment:function(){var ce,co,over,o=this.options;if(o.containment==="parent"){o.containment=this.helper[0].parentNode;}if(o.containment==="document"||o.containment==="window"){this.containment=[0-this.offset.relative.left-this.offset.parent.left,0-this.offset.relative.top-this.offset.parent.top,o.containment==="document"?this.document.width():this.window.width()-this.helperProportions.width-this.margins.left,(o.containment==="document"?(this.document.height()||document.body.parentNode.scrollHeight):this.window.height()||this.document[0].body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top];}if(!(/^(document|window|parent)$/).test(o.containment)){ce=$(o.containment)[0];co=$(o.containment).offset();over=($(ce).css("overflow")!=="hidden");this.containment=[co.left+(parseInt($(ce).css("borderLeftWidth"),10)||0)+(parseInt($(ce).css("paddingLeft"),10)||0)-this.margins.left,co.top+(parseInt($(ce).css("borderTopWidth"),10)||0)+(parseInt($(ce).css("paddingTop"),10)||0)-this.margins.top,co.left+(over?Math.max(ce.scrollWidth,ce.offsetWidth):ce.offsetWidth)-(parseInt($(ce).css("borderLeftWidth"),10)||0)-(parseInt($(ce).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left,co.top+(over?Math.max(ce.scrollHeight,ce.offsetHeight):ce.offsetHeight)-(parseInt($(ce).css("borderTopWidth"),10)||0)-(parseInt($(ce).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top];}},_convertPositionTo:function(d,pos){if(!pos){pos=this.position;}var mod=d==="absolute"?1:-1,scroll=this.cssPosition==="absolute"&&!(this.scrollParent[0]!==this.document[0]&&$.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,scrollIsRootNode=(/(html|body)/i).test(scroll[0].tagName);return{top:(pos.top+this.offset.relative.top*mod+this.offset.parent.top*mod-((this.cssPosition==="fixed"?-this.scrollParent.scrollTop():(scrollIsRootNode?0:scroll.scrollTop()))*mod)),left:(pos.left+this.offset.relative.left*mod+this.offset.parent.left*mod-((this.cssPosition==="fixed"?-this.scrollParent.scrollLeft():scrollIsRootNode?0:scroll.scrollLeft())*mod))};},_generatePosition:function(event){var top,left,o=this.options,pageX=event.pageX,pageY=event.pageY,scroll=this.cssPosition==="absolute"&&!(this.scrollParent[0]!==this.document[0]&&$.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,scrollIsRootNode=(/(html|body)/i).test(scroll[0].tagName);if(this.cssPosition==="relative"&&!(this.scrollParent[0]!==this.document[0]&&this.scrollParent[0]!==this.offsetParent[0])){this.offset.relative=this._getRelativeOffset();}if(this.originalPosition){if(this.containment){if(event.pageX-this.offset.click.left<this.containment[0]){pageX=this.containment[0]+this.offset.click.left;}if(event.pageY-this.offset.click.top<this.containment[1]){pageY=this.containment[1]+this.offset.click.top;}if(event.pageX-this.offset.click.left>this.containment[2]){pageX=this.containment[2]+this.offset.click.left;}if(event.pageY-this.offset.click.top>this.containment[3]){pageY=this.containment[3]+this.offset.click.top;}}if(o.grid){top=this.originalPageY+Math.round((pageY-this.originalPageY)/o.grid[1])*o.grid[1];pageY=this.containment?((top-this.offset.click.top>=this.containment[1]&&top-this.offset.click.top<=this.containment[3])?top:((top-this.offset.click.top>=this.containment[1])?top-o.grid[1]:top+o.grid[1])):top;left=this.originalPageX+Math.round((pageX-this.originalPageX)/o.grid[0])*o.grid[0];pageX=this.containment?((left-this.offset.click.left>=this.containment[0]&&left-this.offset.click.left<=this.containment[2])?left:((left-this.offset.click.left>=this.containment[0])?left-o.grid[0]:left+o.grid[0])):left;}}return{top:(pageY-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+((this.cssPosition==="fixed"?-this.scrollParent.scrollTop():(scrollIsRootNode?0:scroll.scrollTop())))),left:(pageX-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+((this.cssPosition==="fixed"?-this.scrollParent.scrollLeft():scrollIsRootNode?0:scroll.scrollLeft())))};},_rearrange:function(event,i,a,hardRefresh){a?a[0].appendChild(this.placeholder[0]):i.item[0].parentNode.insertBefore(this.placeholder[0],(this.direction==="down"?i.item[0]:i.item[0].nextSibling));this.counter=this.counter?++this.counter:1;var counter=this.counter;this._delay(function(){if(counter===this.counter){this.refreshPositions(!hardRefresh);}});},_clear:function(event,noPropagation){this.reverting=false;var i,delayedTriggers=[];if(!this._noFinalSort&&this.currentItem.parent().length){this.placeholder.before(this.currentItem);}this._noFinalSort=null;if(this.helper[0]===this.currentItem[0]){for(i in this._storedCSS){if(this._storedCSS[i]==="auto"||this._storedCSS[i]==="static"){this._storedCSS[i]="";}}this.currentItem.css(this._storedCSS);this._removeClass(this.currentItem,"ui-sortable-helper");}else{this.currentItem.show();}if(this.fromOutside&&!noPropagation){delayedTriggers.push(function(event){this._trigger("receive",event,this._uiHash(this.fromOutside));});}if((this.fromOutside||this.domPosition.prev!==this.currentItem.prev().not(".ui-sortable-helper")[0]||this.domPosition.parent!==this.currentItem.parent()[0])&&!noPropagation){delayedTriggers.push(function(event){this._trigger("update",event,this._uiHash());});}if(this!==this.currentContainer){if(!noPropagation){delayedTriggers.push(function(event){this._trigger("remove",event,this._uiHash());});delayedTriggers.push((function(c){return function(event){c._trigger("receive",event,this._uiHash(this));};}).call(this,this.currentContainer));delayedTriggers.push((function(c){return function(event){c._trigger("update",event,this._uiHash(this));};}).call(this,this.currentContainer));}}function delayEvent(type,instance,container){return function(event){container._trigger(type,event,instance._uiHash(instance));};}for(i=this.containers.length-1;i>=0;i--){if(!noPropagation){delayedTriggers.push(delayEvent("deactivate",this,this.containers[i]));}if(this.containers[i].containerCache.over){delayedTriggers.push(delayEvent("out",this,this.containers[i]));this.containers[i].containerCache.over=0;}}if(this.storedCursor){this.document.find("body").css("cursor",this.storedCursor);this.storedStylesheet.remove();}if(this._storedOpacity){this.helper.css("opacity",this._storedOpacity);}if(this._storedZIndex){this.helper.css("zIndex",this._storedZIndex==="auto"?"":this._storedZIndex);}this.dragging=false;if(!noPropagation){this._trigger("beforeStop",event,this._uiHash());}this.placeholder[0].parentNode.removeChild(this.placeholder[0]);if(!this.cancelHelperRemoval){if(this.helper[0]!==this.currentItem[0]){this.helper.remove();}this.helper=null;}if(!noPropagation){for(i=0;i<delayedTriggers.length;i++){delayedTriggers[i].call(this,event);}this._trigger("stop",event,this._uiHash());}this.fromOutside=false;return!this.cancelHelperRemoval;},_trigger:function(){if($.Widget.prototype._trigger.apply(this,arguments)===false){this.cancel();}},_uiHash:function(_inst){var inst=_inst||this;return{helper:inst.helper,placeholder:inst.placeholder||$([]),position:inst.position,originalPosition:inst.originalPosition,offset:inst.positionAbs,item:inst.currentItem,sender:_inst?_inst.element:null};}});var widgetsAccordion=$.widget("ui.accordion",{version:"1.12.1",options:{active:0,animate:{},classes:{"ui-accordion-header":"ui-corner-top","ui-accordion-header-collapsed":"ui-corner-all","ui-accordion-content":"ui-corner-bottom"},collapsible:false,event:"click",header:"> li > :first-child, > :not(li):even",heightStyle:"auto",icons:{activeHeader:"ui-icon-triangle-1-s",header:"ui-icon-triangle-1-e"},activate:null,beforeActivate:null},hideProps:{borderTopWidth:"hide",borderBottomWidth:"hide",paddingTop:"hide",paddingBottom:"hide",height:"hide"},showProps:{borderTopWidth:"show",borderBottomWidth:"show",paddingTop:"show",paddingBottom:"show",height:"show"},_create:function(){var options=this.options;this.prevShow=this.prevHide=$();this._addClass("ui-accordion","ui-widget ui-helper-reset");this.element.attr("role","tablist");if(!options.collapsible&&(options.active===false||options.active==null)){options.active=0;}this._processPanels();if(options.active<0){options.active+=this.headers.length;}this._refresh();},_getCreateEventData:function(){return{header:this.active,panel:!this.active.length?$():this.active.next()};},_createIcons:function(){var icon,children,icons=this.options.icons;if(icons){icon=$("<span>");this._addClass(icon,"ui-accordion-header-icon","ui-icon "+icons.header);icon.prependTo(this.headers);children=this.active.children(".ui-accordion-header-icon");this._removeClass(children,icons.header)._addClass(children,null,icons.activeHeader)._addClass(this.headers,"ui-accordion-icons");}},_destroyIcons:function(){this._removeClass(this.headers,"ui-accordion-icons");this.headers.children(".ui-accordion-header-icon").remove();},_destroy:function(){var contents;this.element.removeAttr("role");this.headers.removeAttr("role aria-expanded aria-selected aria-controls tabIndex").removeUniqueId();this._destroyIcons();contents=this.headers.next().css("display","").removeAttr("role aria-hidden aria-labelledby").removeUniqueId();if(this.options.heightStyle!=="content"){contents.css("height","");}},_setOption:function(key,value){if(key==="active"){this._activate(value);return;}if(key==="event"){if(this.options.event){this._off(this.headers,this.options.event);}this._setupEvents(value);}this._super(key,value);if(key==="collapsible"&&!value&&this.options.active===false){this._activate(0);}if(key==="icons"){this._destroyIcons();if(value){this._createIcons();}}},_setOptionDisabled:function(value){this._super(value);this.element.attr("aria-disabled",value);this._toggleClass(null,"ui-state-disabled",!!value);this._toggleClass(this.headers.add(this.headers.next()),null,"ui-state-disabled",!!value);},_keydown:function(event){if(event.altKey||event.ctrlKey){return;}var keyCode=$.ui.keyCode,length=this.headers.length,currentIndex=this.headers.index(event.target),toFocus=false;switch(event.keyCode){case keyCode.RIGHT:case keyCode.DOWN:toFocus=this.headers[(currentIndex+1)%length];break;case keyCode.LEFT:case keyCode.UP:toFocus=this.headers[(currentIndex-1+length)%length];break;case keyCode.SPACE:case keyCode.ENTER:this._eventHandler(event);break;case keyCode.HOME:toFocus=this.headers[0];break;case keyCode.END:toFocus=this.headers[length-1];break;}if(toFocus){$(event.target).attr("tabIndex",-1);$(toFocus).attr("tabIndex",0);$(toFocus).trigger("focus");event.preventDefault();}},_panelKeyDown:function(event){if(event.keyCode===$.ui.keyCode.UP&&event.ctrlKey){$(event.currentTarget).prev().trigger("focus");}},refresh:function(){var options=this.options;this._processPanels();if((options.active===false&&options.collapsible===true)||!this.headers.length){options.active=false;this.active=$();}else if(options.active===false){this._activate(0);}else if(this.active.length&&!$.contains(this.element[0],this.active[0])){if(this.headers.length===this.headers.find(".ui-state-disabled").length){options.active=false;this.active=$();}else{this._activate(Math.max(0,options.active-1));}}else{options.active=this.headers.index(this.active);}this._destroyIcons();this._refresh();},_processPanels:function(){var prevHeaders=this.headers,prevPanels=this.panels;this.headers=this.element.find(this.options.header);this._addClass(this.headers,"ui-accordion-header ui-accordion-header-collapsed","ui-state-default");this.panels=this.headers.next().filter(":not(.ui-accordion-content-active)").hide();this._addClass(this.panels,"ui-accordion-content","ui-helper-reset ui-widget-content");if(prevPanels){this._off(prevHeaders.not(this.headers));this._off(prevPanels.not(this.panels));}},_refresh:function(){var maxHeight,options=this.options,heightStyle=options.heightStyle,parent=this.element.parent();this.active=this._findActive(options.active);this._addClass(this.active,"ui-accordion-header-active","ui-state-active")._removeClass(this.active,"ui-accordion-header-collapsed");this._addClass(this.active.next(),"ui-accordion-content-active");this.active.next().show();this.headers.attr("role","tab").each(function(){var header=$(this),headerId=header.uniqueId().attr("id"),panel=header.next(),panelId=panel.uniqueId().attr("id");header.attr("aria-controls",panelId);panel.attr("aria-labelledby",headerId);}).next().attr("role","tabpanel");this.headers.not(this.active).attr({"aria-selected":"false","aria-expanded":"false",tabIndex:-1}).next().attr({"aria-hidden":"true"}).hide();if(!this.active.length){this.headers.eq(0).attr("tabIndex",0);}else{this.active.attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0}).next().attr({"aria-hidden":"false"});}this._createIcons();this._setupEvents(options.event);if(heightStyle==="fill"){maxHeight=parent.height();this.element.siblings(":visible").each(function(){var elem=$(this),position=elem.css("position");if(position==="absolute"||position==="fixed"){return;}maxHeight-=elem.outerHeight(true);});this.headers.each(function(){maxHeight-=$(this).outerHeight(true);});this.headers.next().each(function(){$(this).height(Math.max(0,maxHeight-$(this).innerHeight()+$(this).height()));}).css("overflow","auto");}else if(heightStyle==="auto"){maxHeight=0;this.headers.next().each(function(){var isVisible=$(this).is(":visible");if(!isVisible){$(this).show();}maxHeight=Math.max(maxHeight,$(this).css("height","").height());if(!isVisible){$(this).hide();}}).height(maxHeight);}},_activate:function(index){var active=this._findActive(index)[0];if(active===this.active[0]){return;}active=active||this.active[0];this._eventHandler({target:active,currentTarget:active,preventDefault:$.noop});},_findActive:function(selector){return typeof selector==="number"?this.headers.eq(selector):$();},_setupEvents:function(event){var events={keydown:"_keydown"};if(event){$.each(event.split(" "),function(index,eventName){events[eventName]="_eventHandler";});}this._off(this.headers.add(this.headers.next()));this._on(this.headers,events);this._on(this.headers.next(),{keydown:"_panelKeyDown"});this._hoverable(this.headers);this._focusable(this.headers);},_eventHandler:function(event){var activeChildren,clickedChildren,options=this.options,active=this.active,clicked=$(event.currentTarget),clickedIsActive=clicked[0]===active[0],collapsing=clickedIsActive&&options.collapsible,toShow=collapsing?$():clicked.next(),toHide=active.next(),eventData={oldHeader:active,oldPanel:toHide,newHeader:collapsing?$():clicked,newPanel:toShow};event.preventDefault();if((clickedIsActive&&!options.collapsible)||(this._trigger("beforeActivate",event,eventData)===false)){return;}options.active=collapsing?false:this.headers.index(clicked);this.active=clickedIsActive?$():clicked;this._toggle(eventData);this._removeClass(active,"ui-accordion-header-active","ui-state-active");if(options.icons){activeChildren=active.children(".ui-accordion-header-icon");this._removeClass(activeChildren,null,options.icons.activeHeader)._addClass(activeChildren,null,options.icons.header);}if(!clickedIsActive){this._removeClass(clicked,"ui-accordion-header-collapsed")._addClass(clicked,"ui-accordion-header-active","ui-state-active");if(options.icons){clickedChildren=clicked.children(".ui-accordion-header-icon");this._removeClass(clickedChildren,null,options.icons.header)._addClass(clickedChildren,null,options.icons.activeHeader);}this._addClass(clicked.next(),"ui-accordion-content-active");}},_toggle:function(data){var toShow=data.newPanel,toHide=this.prevShow.length?this.prevShow:data.oldPanel;this.prevShow.add(this.prevHide).stop(true,true);this.prevShow=toShow;this.prevHide=toHide;if(this.options.animate){this._animate(toShow,toHide,data);}else{toHide.hide();toShow.show();this._toggleComplete(data);}toHide.attr({"aria-hidden":"true"});toHide.prev().attr({"aria-selected":"false","aria-expanded":"false"});if(toShow.length&&toHide.length){toHide.prev().attr({"tabIndex":-1,"aria-expanded":"false"});}else if(toShow.length){this.headers.filter(function(){return parseInt($(this).attr("tabIndex"),10)===0;}).attr("tabIndex",-1);}toShow.attr("aria-hidden","false").prev().attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0});},_animate:function(toShow,toHide,data){var total,easing,duration,that=this,adjust=0,boxSizing=toShow.css("box-sizing"),down=toShow.length&&(!toHide.length||(toShow.index()<toHide.index())),animate=this.options.animate||{},options=down&&animate.down||animate,complete=function(){that._toggleComplete(data);};if(typeof options==="number"){duration=options;}if(typeof options==="string"){easing=options;}easing=easing||options.easing||animate.easing;duration=duration||options.duration||animate.duration;if(!toHide.length){return toShow.animate(this.showProps,duration,easing,complete);}if(!toShow.length){return toHide.animate(this.hideProps,duration,easing,complete);}total=toShow.show().outerHeight();toHide.animate(this.hideProps,{duration:duration,easing:easing,step:function(now,fx){fx.now=Math.round(now);}});toShow.hide().animate(this.showProps,{duration:duration,easing:easing,complete:complete,step:function(now,fx){fx.now=Math.round(now);if(fx.prop!=="height"){if(boxSizing==="content-box"){adjust+=fx.now;}}else if(that.options.heightStyle!=="content"){fx.now=Math.round(total-toHide.outerHeight()-adjust);adjust=0;}}});},_toggleComplete:function(data){var toHide=data.oldPanel,prev=toHide.prev();this._removeClass(toHide,"ui-accordion-content-active");this._removeClass(prev,"ui-accordion-header-active")._addClass(prev,"ui-accordion-header-collapsed");if(toHide.length){toHide.parent()[0].className=toHide.parent()[0].className;}this._trigger("activate",null,data);}});var widgetsMenu=$.widget("ui.menu",{version:"1.12.1",defaultElement:"<ul>",delay:300,options:{icons:{submenu:"ui-icon-caret-1-e"},items:"> *",menus:"ul",position:{my:"left top",at:"right top"},role:"menu",blur:null,focus:null,select:null},_create:function(){this.activeMenu=this.element;this.mouseHandled=false;this.element.uniqueId().attr({role:this.options.role,tabIndex:0});this._addClass("ui-menu","ui-widget ui-widget-content");this._on({"mousedown .ui-menu-item":function(event){event.preventDefault();},"click .ui-menu-item":function(event){var target=$(event.target);var active=$($.ui.safeActiveElement(this.document[0]));if(!this.mouseHandled&&target.not(".ui-state-disabled").length){this.select(event);if(!event.isPropagationStopped()){this.mouseHandled=true;}if(target.has(".ui-menu").length){this.expand(event);}else if(!this.element.is(":focus")&&active.closest(".ui-menu").length){this.element.trigger("focus",[true]);if(this.active&&this.active.parents(".ui-menu").length===1){clearTimeout(this.timer);}}}},"mouseenter .ui-menu-item":function(event){if(this.previousFilter){return;}var actualTarget=$(event.target).closest(".ui-menu-item"),target=$(event.currentTarget);if(actualTarget[0]!==target[0]){return;}this._removeClass(target.siblings().children(".ui-state-active"),null,"ui-state-active");this.focus(event,target);},mouseleave:"collapseAll","mouseleave .ui-menu":"collapseAll",focus:function(event,keepActiveItem){var item=this.active||this.element.find(this.options.items).eq(0);if(!keepActiveItem){this.focus(event,item);}},blur:function(event){this._delay(function(){var notContained=!$.contains(this.element[0],$.ui.safeActiveElement(this.document[0]));if(notContained){this.collapseAll(event);}});},keydown:"_keydown"});this.refresh();this._on(this.document,{click:function(event){if(this._closeOnDocumentClick(event)){this.collapseAll(event);}this.mouseHandled=false;}});},_destroy:function(){var items=this.element.find(".ui-menu-item").removeAttr("role aria-disabled"),submenus=items.children(".ui-menu-item-wrapper").removeUniqueId().removeAttr("tabIndex role aria-haspopup");this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeAttr("role aria-labelledby aria-expanded aria-hidden aria-disabled "+"tabIndex").removeUniqueId().show();submenus.children().each(function(){var elem=$(this);if(elem.data("ui-menu-submenu-caret")){elem.remove();}});},_keydown:function(event){var match,prev,character,skip,preventDefault=true;switch(event.keyCode){case $.ui.keyCode.PAGE_UP:this.previousPage(event);break;case $.ui.keyCode.PAGE_DOWN:this.nextPage(event);break;case $.ui.keyCode.HOME:this._move("first","first",event);break;case $.ui.keyCode.END:this._move("last","last",event);break;case $.ui.keyCode.UP:this.previous(event);break;case $.ui.keyCode.DOWN:this.next(event);break;case $.ui.keyCode.LEFT:this.collapse(event);break;case $.ui.keyCode.RIGHT:if(this.active&&!this.active.is(".ui-state-disabled")){this.expand(event);}break;case $.ui.keyCode.ENTER:case $.ui.keyCode.SPACE:this._activate(event);break;case $.ui.keyCode.ESCAPE:this.collapse(event);break;default:preventDefault=false;prev=this.previousFilter||"";skip=false;character=event.keyCode>=96&&event.keyCode<=105?(event.keyCode-96).toString():String.fromCharCode(event.keyCode);clearTimeout(this.filterTimer);if(character===prev){skip=true;}else{character=prev+character;}match=this._filterMenuItems(character);match=skip&&match.index(this.active.next())!==-1?this.active.nextAll(".ui-menu-item"):match;if(!match.length){character=String.fromCharCode(event.keyCode);match=this._filterMenuItems(character);}if(match.length){this.focus(event,match);this.previousFilter=character;this.filterTimer=this._delay(function(){delete this.previousFilter;},1000);}else{delete this.previousFilter;}}if(preventDefault){event.preventDefault();}},_activate:function(event){if(this.active&&!this.active.is(".ui-state-disabled")){if(this.active.children("[aria-haspopup='true']").length){this.expand(event);}else{this.select(event);}}},refresh:function(){var menus,items,newSubmenus,newItems,newWrappers,that=this,icon=this.options.icons.submenu,submenus=this.element.find(this.options.menus);this._toggleClass("ui-menu-icons",null,!!this.element.find(".ui-icon").length);newSubmenus=submenus.filter(":not(.ui-menu)").hide().attr({role:this.options.role,"aria-hidden":"true","aria-expanded":"false"}).each(function(){var menu=$(this),item=menu.prev(),submenuCaret=$("<span>").data("ui-menu-submenu-caret",true);that._addClass(submenuCaret,"ui-menu-icon","ui-icon "+icon);item.attr("aria-haspopup","true").prepend(submenuCaret);menu.attr("aria-labelledby",item.attr("id"));});this._addClass(newSubmenus,"ui-menu","ui-widget ui-widget-content ui-front");menus=submenus.add(this.element);items=menus.find(this.options.items);items.not(".ui-menu-item").each(function(){var item=$(this);if(that._isDivider(item)){that._addClass(item,"ui-menu-divider","ui-widget-content");}});newItems=items.not(".ui-menu-item, .ui-menu-divider");newWrappers=newItems.children().not(".ui-menu").uniqueId().attr({tabIndex:-1,role:this._itemRole()});this._addClass(newItems,"ui-menu-item")._addClass(newWrappers,"ui-menu-item-wrapper");items.filter(".ui-state-disabled").attr("aria-disabled","true");if(this.active&&!$.contains(this.element[0],this.active[0])){this.blur();}},_itemRole:function(){return{menu:"menuitem",listbox:"option"}[this.options.role];},_setOption:function(key,value){if(key==="icons"){var icons=this.element.find(".ui-menu-icon");this._removeClass(icons,null,this.options.icons.submenu)._addClass(icons,null,value.submenu);}this._super(key,value);},_setOptionDisabled:function(value){this._super(value);this.element.attr("aria-disabled",String(value));this._toggleClass(null,"ui-state-disabled",!!value);},focus:function(event,item){var nested,focused,activeParent;this.blur(event,event&&event.type==="focus");this._scrollIntoView(item);this.active=item.first();focused=this.active.children(".ui-menu-item-wrapper");this._addClass(focused,null,"ui-state-active");if(this.options.role){this.element.attr("aria-activedescendant",focused.attr("id"));}activeParent=this.active.parent().closest(".ui-menu-item").children(".ui-menu-item-wrapper");this._addClass(activeParent,null,"ui-state-active");if(event&&event.type==="keydown"){this._close();}else{this.timer=this._delay(function(){this._close();},this.delay);}nested=item.children(".ui-menu");if(nested.length&&event&&(/^mouse/.test(event.type))){this._startOpening(nested);}this.activeMenu=item.parent();this._trigger("focus",event,{item:item});},_scrollIntoView:function(item){var borderTop,paddingTop,offset,scroll,elementHeight,itemHeight;if(this._hasScroll()){borderTop=parseFloat($.css(this.activeMenu[0],"borderTopWidth"))||0;paddingTop=parseFloat($.css(this.activeMenu[0],"paddingTop"))||0;offset=item.offset().top-this.activeMenu.offset().top-borderTop-paddingTop;scroll=this.activeMenu.scrollTop();elementHeight=this.activeMenu.height();itemHeight=item.outerHeight();if(offset<0){this.activeMenu.scrollTop(scroll+offset);}else if(offset+itemHeight>elementHeight){this.activeMenu.scrollTop(scroll+offset-elementHeight+itemHeight);}}},blur:function(event,fromFocus){if(!fromFocus){clearTimeout(this.timer);}if(!this.active){return;}this._removeClass(this.active.children(".ui-menu-item-wrapper"),null,"ui-state-active");this._trigger("blur",event,{item:this.active});this.active=null;},_startOpening:function(submenu){clearTimeout(this.timer);if(submenu.attr("aria-hidden")!=="true"){return;}this.timer=this._delay(function(){this._close();this._open(submenu);},this.delay);},_open:function(submenu){var position=$.extend({of:this.active},this.options.position);clearTimeout(this.timer);this.element.find(".ui-menu").not(submenu.parents(".ui-menu")).hide().attr("aria-hidden","true");submenu.show().removeAttr("aria-hidden").attr("aria-expanded","true").position(position);},collapseAll:function(event,all){clearTimeout(this.timer);this.timer=this._delay(function(){var currentMenu=all?this.element:$(event&&event.target).closest(this.element.find(".ui-menu"));if(!currentMenu.length){currentMenu=this.element;}this._close(currentMenu);this.blur(event);this._removeClass(currentMenu.find(".ui-state-active"),null,"ui-state-active");this.activeMenu=currentMenu;},this.delay);},_close:function(startMenu){if(!startMenu){startMenu=this.active?this.active.parent():this.element;}startMenu.find(".ui-menu").hide().attr("aria-hidden","true").attr("aria-expanded","false");},_closeOnDocumentClick:function(event){return!$(event.target).closest(".ui-menu").length;},_isDivider:function(item){return!/[^\-\u2014\u2013\s]/.test(item.text());},collapse:function(event){var newItem=this.active&&this.active.parent().closest(".ui-menu-item",this.element);if(newItem&&newItem.length){this._close();this.focus(event,newItem);}},expand:function(event){var newItem=this.active&&this.active.children(".ui-menu ").find(this.options.items).first();if(newItem&&newItem.length){this._open(newItem.parent());this._delay(function(){this.focus(event,newItem);});}},next:function(event){this._move("next","first",event);},previous:function(event){this._move("prev","last",event);},isFirstItem:function(){return this.active&&!this.active.prevAll(".ui-menu-item").length;},isLastItem:function(){return this.active&&!this.active.nextAll(".ui-menu-item").length;},_move:function(direction,filter,event){var next;if(this.active){if(direction==="first"||direction==="last"){next=this.active
[direction==="first"?"prevAll":"nextAll"](".ui-menu-item").eq(-1);}else{next=this.active
[direction+"All"](".ui-menu-item").eq(0);}}if(!next||!next.length||!this.active){next=this.activeMenu.find(this.options.items)[filter]();}this.focus(event,next);},nextPage:function(event){var item,base,height;if(!this.active){this.next(event);return;}if(this.isLastItem()){return;}if(this._hasScroll()){base=this.active.offset().top;height=this.element.height();this.active.nextAll(".ui-menu-item").each(function(){item=$(this);return item.offset().top-base-height<0;});this.focus(event,item);}else{this.focus(event,this.activeMenu.find(this.options.items)[!this.active?"first":"last"]());}},previousPage:function(event){var item,base,height;if(!this.active){this.next(event);return;}if(this.isFirstItem()){return;}if(this._hasScroll()){base=this.active.offset().top;height=this.element.height();this.active.prevAll(".ui-menu-item").each(function(){item=$(this);return item.offset().top-base+height>0;});this.focus(event,item);}else{this.focus(event,this.activeMenu.find(this.options.items).first());}},_hasScroll:function(){return this.element.outerHeight()<this.element.prop("scrollHeight");},select:function(event){this.active=this.active||$(event.target).closest(".ui-menu-item");var ui={item:this.active};if(!this.active.has(".ui-menu").length){this.collapseAll(event,true);}this._trigger("select",event,ui);},_filterMenuItems:function(character){var escapedCharacter=character.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&"),regex=new RegExp("^"+escapedCharacter,"i");return this.activeMenu.find(this.options.items).filter(".ui-menu-item").filter(function(){return regex.test($.trim($(this).children(".ui-menu-item-wrapper").text()));});}});$.widget("ui.autocomplete",{version:"1.12.1",defaultElement:"<input>",options:{appendTo:null,autoFocus:false,delay:300,minLength:1,position:{my:"left top",at:"left bottom",collision:"none"},source:null,change:null,close:null,focus:null,open:null,response:null,search:null,select:null},requestIndex:0,pending:0,_create:function(){var suppressKeyPress,suppressKeyPressRepeat,suppressInput,nodeName=this.element[0].nodeName.toLowerCase(),isTextarea=nodeName==="textarea",isInput=nodeName==="input";this.isMultiLine=isTextarea||!isInput&&this._isContentEditable(this.element);this.valueMethod=this.element[isTextarea||isInput?"val":"text"];this.isNewMenu=true;this._addClass("ui-autocomplete-input");this.element.attr("autocomplete","off");this._on(this.element,{keydown:function(event){if(this.element.prop("readOnly")){suppressKeyPress=true;suppressInput=true;suppressKeyPressRepeat=true;return;}suppressKeyPress=false;suppressInput=false;suppressKeyPressRepeat=false;var keyCode=$.ui.keyCode;switch(event.keyCode){case keyCode.PAGE_UP:suppressKeyPress=true;this._move("previousPage",event);break;case keyCode.PAGE_DOWN:suppressKeyPress=true;this._move("nextPage",event);break;case keyCode.UP:suppressKeyPress=true;this._keyEvent("previous",event);break;case keyCode.DOWN:suppressKeyPress=true;this._keyEvent("next",event);break;case keyCode.ENTER:if(this.menu.active){suppressKeyPress=true;event.preventDefault();this.menu.select(event);}break;case keyCode.TAB:if(this.menu.active){this.menu.select(event);}break;case keyCode.ESCAPE:if(this.menu.element.is(":visible")){if(!this.isMultiLine){this._value(this.term);}this.close(event);event.preventDefault();}break;default:suppressKeyPressRepeat=true;this._searchTimeout(event);break;}},keypress:function(event){if(suppressKeyPress){suppressKeyPress=false;if(!this.isMultiLine||this.menu.element.is(":visible")){event.preventDefault();}return;}if(suppressKeyPressRepeat){return;}var keyCode=$.ui.keyCode;switch(event.keyCode){case keyCode.PAGE_UP:this._move("previousPage",event);break;case keyCode.PAGE_DOWN:this._move("nextPage",event);break;case keyCode.UP:this._keyEvent("previous",event);break;case keyCode.DOWN:this._keyEvent("next",event);break;}},input:function(event){if(suppressInput){suppressInput=false;event.preventDefault();return;}this._searchTimeout(event);},focus:function(){this.selectedItem=null;this.previous=this._value();},blur:function(event){if(this.cancelBlur){delete this.cancelBlur;return;}clearTimeout(this.searching);this.close(event);this._change(event);}});this._initSource();this.menu=$("<ul>").appendTo(this._appendTo()).menu({role:null}).hide().menu("instance");this._addClass(this.menu.element,"ui-autocomplete","ui-front");this._on(this.menu.element,{mousedown:function(event){event.preventDefault();this.cancelBlur=true;this._delay(function(){delete this.cancelBlur;if(this.element[0]!==$.ui.safeActiveElement(this.document[0])){this.element.trigger("focus");}});},menufocus:function(event,ui){var label,item;if(this.isNewMenu){this.isNewMenu=false;if(event.originalEvent&&/^mouse/.test(event.originalEvent.type)){this.menu.blur();this.document.one("mousemove",function(){$(event.target).trigger(event.originalEvent);});return;}}item=ui.item.data("ui-autocomplete-item");if(false!==this._trigger("focus",event,{item:item})){if(event.originalEvent&&/^key/.test(event.originalEvent.type)){this._value(item.value);}}label=ui.item.attr("aria-label")||item.value;if(label&&$.trim(label).length){this.liveRegion.children().hide();$("<div>").text(label).appendTo(this.liveRegion);}},menuselect:function(event,ui){var item=ui.item.data("ui-autocomplete-item"),previous=this.previous;if(this.element[0]!==$.ui.safeActiveElement(this.document[0])){this.element.trigger("focus");this.previous=previous;this._delay(function(){this.previous=previous;this.selectedItem=item;});}if(false!==this._trigger("select",event,{item:item})){this._value(item.value);}this.term=this._value();this.close(event);this.selectedItem=item;}});this.liveRegion=$("<div>",{role:"status","aria-live":"assertive","aria-relevant":"additions"}).appendTo(this.document[0].body);this._addClass(this.liveRegion,null,"ui-helper-hidden-accessible");this._on(this.window,{beforeunload:function(){this.element.removeAttr("autocomplete");}});},_destroy:function(){clearTimeout(this.searching);this.element.removeAttr("autocomplete");this.menu.element.remove();this.liveRegion.remove();},_setOption:function(key,value){this._super(key,value);if(key==="source"){this._initSource();}if(key==="appendTo"){this.menu.element.appendTo(this._appendTo());}if(key==="disabled"&&value&&this.xhr){this.xhr.abort();}},_isEventTargetInWidget:function(event){var menuElement=this.menu.element[0];return event.target===this.element[0]||event.target===menuElement||$.contains(menuElement,event.target);},_closeOnClickOutside:function(event){if(!this._isEventTargetInWidget(event)){this.close();}},_appendTo:function(){var element=this.options.appendTo;if(element){element=element.jquery||element.nodeType?$(element):this.document.find(element).eq(0);}if(!element||!element[0]){element=this.element.closest(".ui-front, dialog");}if(!element.length){element=this.document[0].body;}return element;},_initSource:function(){var array,url,that=this;if($.isArray(this.options.source)){array=this.options.source;this.source=function(request,response){response($.ui.autocomplete.filter(array,request.term));};}else if(typeof this.options.source==="string"){url=this.options.source;this.source=function(request,response){if(that.xhr){that.xhr.abort();}that.xhr=$.ajax({url:url,data:request,dataType:"json",success:function(data){response(data);},error:function(){response([]);}});};}else{this.source=this.options.source;}},_searchTimeout:function(event){clearTimeout(this.searching);this.searching=this._delay(function(){var equalValues=this.term===this._value(),menuVisible=this.menu.element.is(":visible"),modifierKey=event.altKey||event.ctrlKey||event.metaKey||event.shiftKey;if(!equalValues||(equalValues&&!menuVisible&&!modifierKey)){this.selectedItem=null;this.search(null,event);}},this.options.delay);},search:function(value,event){value=value!=null?value:this._value();this.term=this._value();if(value.length<this.options.minLength){return this.close(event);}if(this._trigger("search",event)===false){return;}return this._search(value);},_search:function(value){this.pending++;this._addClass("ui-autocomplete-loading");this.cancelSearch=false;this.source({term:value},this._response());},_response:function(){var index=++this.requestIndex;return $.proxy(function(content){if(index===this.requestIndex){this.__response(content);}this.pending--;if(!this.pending){this._removeClass("ui-autocomplete-loading");}},this);},__response:function(content){if(content){content=this._normalize(content);}this._trigger("response",null,{content:content});if(!this.options.disabled&&content&&content.length&&!this.cancelSearch){this._suggest(content);this._trigger("open");}else{this._close();}},close:function(event){this.cancelSearch=true;this._close(event);},_close:function(event){this._off(this.document,"mousedown");if(this.menu.element.is(":visible")){this.menu.element.hide();this.menu.blur();this.isNewMenu=true;this._trigger("close",event);}},_change:function(event){if(this.previous!==this._value()){this._trigger("change",event,{item:this.selectedItem});}},_normalize:function(items){if(items.length&&items[0].label&&items[0].value){return items;}return $.map(items,function(item){if(typeof item==="string"){return{label:item,value:item};}return $.extend({},item,{label:item.label||item.value,value:item.value||item.label});});},_suggest:function(items){var ul=this.menu.element.empty();this._renderMenu(ul,items);this.isNewMenu=true;this.menu.refresh();ul.show();this._resizeMenu();ul.position($.extend({of:this.element},this.options.position));if(this.options.autoFocus){this.menu.next();}this._on(this.document,{mousedown:"_closeOnClickOutside"});},_resizeMenu:function(){var ul=this.menu.element;ul.outerWidth(Math.max(ul.width("").outerWidth()+1,this.element.outerWidth()));},_renderMenu:function(ul,items){var that=this;$.each(items,function(index,item){that._renderItemData(ul,item);});},_renderItemData:function(ul,item){return this._renderItem(ul,item).data("ui-autocomplete-item",item);},_renderItem:function(ul,item){return $("<li>").append($("<div>").text(item.label)).appendTo(ul);},_move:function(direction,event){if(!this.menu.element.is(":visible")){this.search(null,event);return;}if(this.menu.isFirstItem()&&/^previous/.test(direction)||this.menu.isLastItem()&&/^next/.test(direction)){if(!this.isMultiLine){this._value(this.term);}this.menu.blur();return;}this.menu[direction](event);},widget:function(){return this.menu.element;},_value:function(){return this.valueMethod.apply(this.element,arguments);},_keyEvent:function(keyEvent,event){if(!this.isMultiLine||this.menu.element.is(":visible")){this._move(keyEvent,event);event.preventDefault();}},_isContentEditable:function(element){if(!element.length){return false;}var editable=element.prop("contentEditable");if(editable==="inherit"){return this._isContentEditable(element.parent());}return editable==="true";}});$.extend($.ui.autocomplete,{escapeRegex:function(value){return value.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&");},filter:function(array,term){var matcher=new RegExp($.ui.autocomplete.escapeRegex(term),"i");return $.grep(array,function(value){return matcher.test(value.label||value.value||value);});}});$.widget("ui.autocomplete",$.ui.autocomplete,{options:{messages:{noResults:"No search results.",results:function(amount){return amount+(amount>1?" results are":" result is")+" available, use up and down arrow keys to navigate.";}}},__response:function(content){var message;this._superApply(arguments);if(this.options.disabled||this.cancelSearch){return;}if(content&&content.length){message=this.options.messages.results(content.length);}else{message=this.options.messages.noResults;}this.liveRegion.children().hide();$("<div>").text(message).appendTo(this.liveRegion);}});var widgetsAutocomplete=$.ui.autocomplete;var controlgroupCornerRegex=/ui-corner-([a-z]){2,6}/g;var widgetsControlgroup=$.widget("ui.controlgroup",{version:"1.12.1",defaultElement:"<div>",options:{direction:"horizontal",disabled:null,onlyVisible:true,items:{"button":"input[type=button], input[type=submit], input[type=reset], button, a","controlgroupLabel":".ui-controlgroup-label","checkboxradio":"input[type='checkbox'], input[type='radio']","selectmenu":"select","spinner":".ui-spinner-input"}},_create:function(){this._enhance();},_enhance:function(){this.element.attr("role","toolbar");this.refresh();},_destroy:function(){this._callChildMethod("destroy");this.childWidgets.removeData("ui-controlgroup-data");this.element.removeAttr("role");if(this.options.items.controlgroupLabel){this.element.find(this.options.items.controlgroupLabel).find(".ui-controlgroup-label-contents").contents().unwrap();}},_initWidgets:function(){var that=this,childWidgets=[];$.each(this.options.items,function(widget,selector){var labels;var options={};if(!selector){return;}if(widget==="controlgroupLabel"){labels=that.element.find(selector);labels.each(function(){var element=$(this);if(element.children(".ui-controlgroup-label-contents").length){return;}element.contents().wrapAll("<span class='ui-controlgroup-label-contents'></span>");});that._addClass(labels,null,"ui-widget ui-widget-content ui-state-default");childWidgets=childWidgets.concat(labels.get());return;}if(!$.fn[widget]){return;}if(that["_"+widget+"Options"]){options=that["_"+widget+"Options"]("middle");}else{options={classes:{}};}that.element.find(selector).each(function(){var element=$(this);var instance=element[widget]("instance");var instanceOptions=$.widget.extend({},options);if(widget==="button"&&element.parent(".ui-spinner").length){return;}if(!instance){instance=element[widget]()[widget]("instance");}if(instance){instanceOptions.classes=that._resolveClassesValues(instanceOptions.classes,instance);}element[widget](instanceOptions);var widgetElement=element[widget]("widget");$.data(widgetElement[0],"ui-controlgroup-data",instance?instance:element[widget]("instance"));childWidgets.push(widgetElement[0]);});});this.childWidgets=$($.unique(childWidgets));this._addClass(this.childWidgets,"ui-controlgroup-item");},_callChildMethod:function(method){this.childWidgets.each(function(){var element=$(this),data=element.data("ui-controlgroup-data");if(data&&data[method]){data[method]();}});},_updateCornerClass:function(element,position){var remove="ui-corner-top ui-corner-bottom ui-corner-left ui-corner-right ui-corner-all";var add=this._buildSimpleOptions(position,"label").classes.label;this._removeClass(element,null,remove);this._addClass(element,null,add);},_buildSimpleOptions:function(position,key){var direction=this.options.direction==="vertical";var result={classes:{}};result.classes[key]={"middle":"","first":"ui-corner-"+(direction?"top":"left"),"last":"ui-corner-"+(direction?"bottom":"right"),"only":"ui-corner-all"}[position];return result;},_spinnerOptions:function(position){var options=this._buildSimpleOptions(position,"ui-spinner");options.classes["ui-spinner-up"]="";options.classes["ui-spinner-down"]="";return options;},_buttonOptions:function(position){return this._buildSimpleOptions(position,"ui-button");},_checkboxradioOptions:function(position){return this._buildSimpleOptions(position,"ui-checkboxradio-label");},_selectmenuOptions:function(position){var direction=this.options.direction==="vertical";return{width:direction?"auto":false,classes:{middle:{"ui-selectmenu-button-open":"","ui-selectmenu-button-closed":""},first:{"ui-selectmenu-button-open":"ui-corner-"+(direction?"top":"tl"),"ui-selectmenu-button-closed":"ui-corner-"+(direction?"top":"left")},last:{"ui-selectmenu-button-open":direction?"":"ui-corner-tr","ui-selectmenu-button-closed":"ui-corner-"+(direction?"bottom":"right")},only:{"ui-selectmenu-button-open":"ui-corner-top","ui-selectmenu-button-closed":"ui-corner-all"}}[position]};},_resolveClassesValues:function(classes,instance){var result={};$.each(classes,function(key){var current=instance.options.classes[key]||"";current=$.trim(current.replace(controlgroupCornerRegex,""));result[key]=(current+" "+classes[key]).replace(/\s+/g," ");});return result;},_setOption:function(key,value){if(key==="direction"){this._removeClass("ui-controlgroup-"+this.options.direction);}this._super(key,value);if(key==="disabled"){this._callChildMethod(value?"disable":"enable");return;}this.refresh();},refresh:function(){var children,that=this;this._addClass("ui-controlgroup ui-controlgroup-"+this.options.direction);if(this.options.direction==="horizontal"){this._addClass(null,"ui-helper-clearfix");}this._initWidgets();children=this.childWidgets;if(this.options.onlyVisible){children=children.filter(":visible");}if(children.length){$.each(["first","last"],function(index,value){var instance=children[value]().data("ui-controlgroup-data");if(instance&&that["_"+instance.widgetName+"Options"]){var options=that["_"+instance.widgetName+"Options"](children.length===1?"only":value);options.classes=that._resolveClassesValues(options.classes,instance);instance.element[instance.widgetName](options);}else{that._updateCornerClass(children[value](),value);}});this._callChildMethod("refresh");}}});$.widget("ui.checkboxradio",[$.ui.formResetMixin,{version:"1.12.1",options:{disabled:null,label:null,icon:true,classes:{"ui-checkboxradio-label":"ui-corner-all","ui-checkboxradio-icon":"ui-corner-all"}},_getCreateOptions:function(){var disabled,labels;var that=this;var options=this._super()||{};this._readType();labels=this.element.labels();this.label=$(labels[labels.length-1]);if(!this.label.length){$.error("No label found for checkboxradio widget");}this.originalLabel="";this.label.contents().not(this.element[0]).each(function(){that.originalLabel+=this.nodeType===3?$(this).text():this.outerHTML;});if(this.originalLabel){options.label=this.originalLabel;}disabled=this.element[0].disabled;if(disabled!=null){options.disabled=disabled;}return options;},_create:function(){var checked=this.element[0].checked;this._bindFormResetHandler();if(this.options.disabled==null){this.options.disabled=this.element[0].disabled;}this._setOption("disabled",this.options.disabled);this._addClass("ui-checkboxradio","ui-helper-hidden-accessible");this._addClass(this.label,"ui-checkboxradio-label","ui-button ui-widget");if(this.type==="radio"){this._addClass(this.label,"ui-checkboxradio-radio-label");}if(this.options.label&&this.options.label!==this.originalLabel){this._updateLabel();}else if(this.originalLabel){this.options.label=this.originalLabel;}this._enhance();if(checked){this._addClass(this.label,"ui-checkboxradio-checked","ui-state-active");if(this.icon){this._addClass(this.icon,null,"ui-state-hover");}}this._on({change:"_toggleClasses",focus:function(){this._addClass(this.label,null,"ui-state-focus ui-visual-focus");},blur:function(){this._removeClass(this.label,null,"ui-state-focus ui-visual-focus");}});},_readType:function(){var nodeName=this.element[0].nodeName.toLowerCase();this.type=this.element[0].type;if(nodeName!=="input"||!/radio|checkbox/.test(this.type)){$.error("Can't create checkboxradio on element.nodeName="+nodeName+" and element.type="+this.type);}},_enhance:function(){this._updateIcon(this.element[0].checked);},widget:function(){return this.label;},_getRadioGroup:function(){var group;var name=this.element[0].name;var nameSelector="input[name='"+$.ui.escapeSelector(name)+"']";if(!name){return $([]);}if(this.form.length){group=$(this.form[0].elements).filter(nameSelector);}else{group=$(nameSelector).filter(function(){return $(this).form().length===0;});}return group.not(this.element);},_toggleClasses:function(){var checked=this.element[0].checked;this._toggleClass(this.label,"ui-checkboxradio-checked","ui-state-active",checked);if(this.options.icon&&this.type==="checkbox"){this._toggleClass(this.icon,null,"ui-icon-check ui-state-checked",checked)._toggleClass(this.icon,null,"ui-icon-blank",!checked);}if(this.type==="radio"){this._getRadioGroup().each(function(){var instance=$(this).checkboxradio("instance");if(instance){instance._removeClass(instance.label,"ui-checkboxradio-checked","ui-state-active");}});}},_destroy:function(){this._unbindFormResetHandler();if(this.icon){this.icon.remove();this.iconSpace.remove();}},_setOption:function(key,value){if(key==="label"&&!value){return;}this._super(key,value);if(key==="disabled"){this._toggleClass(this.label,null,"ui-state-disabled",value);this.element[0].disabled=value;return;}this.refresh();},_updateIcon:function(checked){var toAdd="ui-icon ui-icon-background ";if(this.options.icon){if(!this.icon){this.icon=$("<span>");this.iconSpace=$("<span> </span>");this._addClass(this.iconSpace,"ui-checkboxradio-icon-space");}if(this.type==="checkbox"){toAdd+=checked?"ui-icon-check ui-state-checked":"ui-icon-blank";this._removeClass(this.icon,null,checked?"ui-icon-blank":"ui-icon-check");}else{toAdd+="ui-icon-blank";}this._addClass(this.icon,"ui-checkboxradio-icon",toAdd);if(!checked){this._removeClass(this.icon,null,"ui-icon-check ui-state-checked");}this.icon.prependTo(this.label).after(this.iconSpace);}else if(this.icon!==undefined){this.icon.remove();this.iconSpace.remove();delete this.icon;}},_updateLabel:function(){var contents=this.label.contents().not(this.element[0]);if(this.icon){contents=contents.not(this.icon[0]);}if(this.iconSpace){contents=contents.not(this.iconSpace[0]);}contents.remove();this.label.append(this.options.label);},refresh:function(){var checked=this.element[0].checked,isDisabled=this.element[0].disabled;this._updateIcon(checked);this._toggleClass(this.label,"ui-checkboxradio-checked","ui-state-active",checked);if(this.options.label!==null){this._updateLabel();}if(isDisabled!==this.options.disabled){this._setOptions({"disabled":isDisabled});}}}]);var widgetsCheckboxradio=$.ui.checkboxradio;$.widget("ui.button",{version:"1.12.1",defaultElement:"<button>",options:{classes:{"ui-button":"ui-corner-all"},disabled:null,icon:null,iconPosition:"beginning",label:null,showLabel:true},_getCreateOptions:function(){var disabled,options=this._super()||{};this.isInput=this.element.is("input");disabled=this.element[0].disabled;if(disabled!=null){options.disabled=disabled;}this.originalLabel=this.isInput?this.element.val():this.element.html();if(this.originalLabel){options.label=this.originalLabel;}return options;},_create:function(){if(!this.option.showLabel&!this.options.icon){this.options.showLabel=true;}if(this.options.disabled==null){this.options.disabled=this.element[0].disabled||false;}this.hasTitle=!!this.element.attr("title");if(this.options.label&&this.options.label!==this.originalLabel){if(this.isInput){this.element.val(this.options.label);}else{this.element.html(this.options.label);}}this._addClass("ui-button","ui-widget");this._setOption("disabled",this.options.disabled);this._enhance();if(this.element.is("a")){this._on({"keyup":function(event){if(event.keyCode===$.ui.keyCode.SPACE){event.preventDefault();if(this.element[0].click){this.element[0].click();}else{this.element.trigger("click");}}}});}},_enhance:function(){if(!this.element.is("button")){this.element.attr("role","button");}if(this.options.icon){this._updateIcon("icon",this.options.icon);this._updateTooltip();}},_updateTooltip:function(){this.title=this.element.attr("title");if(!this.options.showLabel&&!this.title){this.element.attr("title",this.options.label);}},_updateIcon:function(option,value){var icon=option!=="iconPosition",position=icon?this.options.iconPosition:value,displayBlock=position==="top"||position==="bottom";if(!this.icon){this.icon=$("<span>");this._addClass(this.icon,"ui-button-icon","ui-icon");if(!this.options.showLabel){this._addClass("ui-button-icon-only");}}else if(icon){this._removeClass(this.icon,null,this.options.icon);}if(icon){this._addClass(this.icon,null,value);}this._attachIcon(position);if(displayBlock){this._addClass(this.icon,null,"ui-widget-icon-block");if(this.iconSpace){this.iconSpace.remove();}}else{if(!this.iconSpace){this.iconSpace=$("<span> </span>");this._addClass(this.iconSpace,"ui-button-icon-space");}this._removeClass(this.icon,null,"ui-wiget-icon-block");this._attachIconSpace(position);}},_destroy:function(){this.element.removeAttr("role");if(this.icon){this.icon.remove();}if(this.iconSpace){this.iconSpace.remove();}if(!this.hasTitle){this.element.removeAttr("title");}},_attachIconSpace:function(iconPosition){this.icon[/^(?:end|bottom)/.test(iconPosition)?"before":"after"](this.iconSpace);},_attachIcon:function(iconPosition){this.element[/^(?:end|bottom)/.test(iconPosition)?"append":"prepend"](this.icon);},_setOptions:function(options){var newShowLabel=options.showLabel===undefined?this.options.showLabel:options.showLabel,newIcon=options.icon===undefined?this.options.icon:options.icon;if(!newShowLabel&&!newIcon){options.showLabel=true;}this._super(options);},_setOption:function(key,value){if(key==="icon"){if(value){this._updateIcon(key,value);}else if(this.icon){this.icon.remove();if(this.iconSpace){this.iconSpace.remove();}}}if(key==="iconPosition"){this._updateIcon(key,value);}if(key==="showLabel"){this._toggleClass("ui-button-icon-only",null,!value);this._updateTooltip();}if(key==="label"){if(this.isInput){this.element.val(value);}else{this.element.html(value);if(this.icon){this._attachIcon(this.options.iconPosition);this._attachIconSpace(this.options.iconPosition);}}}this._super(key,value);if(key==="disabled"){this._toggleClass(null,"ui-state-disabled",value);this.element[0].disabled=value;if(value){this.element.blur();}}},refresh:function(){var isDisabled=this.element.is("input, button")?this.element[0].disabled:this.element.hasClass("ui-button-disabled");if(isDisabled!==this.options.disabled){this._setOptions({disabled:isDisabled});}this._updateTooltip();}});if($.uiBackCompat!==false){$.widget("ui.button",$.ui.button,{options:{text:true,icons:{primary:null,secondary:null}},_create:function(){if(this.options.showLabel&&!this.options.text){this.options.showLabel=this.options.text;}if(!this.options.showLabel&&this.options.text){this.options.text=this.options.showLabel;}if(!this.options.icon&&(this.options.icons.primary||this.options.icons.secondary)){if(this.options.icons.primary){this.options.icon=this.options.icons.primary;}else{this.options.icon=this.options.icons.secondary;this.options.iconPosition="end";}}else if(this.options.icon){this.options.icons.primary=this.options.icon;}this._super();},_setOption:function(key,value){if(key==="text"){this._super("showLabel",value);return;}if(key==="showLabel"){this.options.text=value;}if(key==="icon"){this.options.icons.primary=value;}if(key==="icons"){if(value.primary){this._super("icon",value.primary);this._super("iconPosition","beginning");}else if(value.secondary){this._super("icon",value.secondary);this._super("iconPosition","end");}}this._superApply(arguments);}});$.fn.button=(function(orig){return function(){if(!this.length||(this.length&&this[0].tagName!=="INPUT")||(this.length&&this[0].tagName==="INPUT"&&(this.attr("type")!=="checkbox"&&this.attr("type")!=="radio"))){return orig.apply(this,arguments);}if(!$.ui.checkboxradio){$.error("Checkboxradio widget missing");}if(arguments.length===0){return this.checkboxradio({"icon":false});}return this.checkboxradio.apply(this,arguments);};})($.fn.button);$.fn.buttonset=function(){if(!$.ui.controlgroup){$.error("Controlgroup widget missing");}if(arguments[0]==="option"&&arguments[1]==="items"&&arguments[2]){return this.controlgroup.apply(this,[arguments[0],"items.button",arguments[2]]);}if(arguments[0]==="option"&&arguments[1]==="items"){return this.controlgroup.apply(this,[arguments[0],"items.button"]);}if(typeof arguments[0]==="object"&&arguments[0].items){arguments[0].items={button:arguments[0].items};}return this.controlgroup.apply(this,arguments);};}var widgetsButton=$.ui.button;$.extend($.ui,{datepicker:{version:"1.12.1"}});var datepicker_instActive;function datepicker_getZindex(elem){var position,value;while(elem.length&&elem[0]!==document){position=elem.css("position");if(position==="absolute"||position==="relative"||position==="fixed"){value=parseInt(elem.css("zIndex"),10);if(!isNaN(value)&&value!==0){return value;}}elem=elem.parent();}return 0;}function Datepicker(){this._curInst=null;this._keyEvent=false;this._disabledInputs=[];this._datepickerShowing=false;this._inDialog=false;this._mainDivId="ui-datepicker-div";this._inlineClass="ui-datepicker-inline";this._appendClass="ui-datepicker-append";this._triggerClass="ui-datepicker-trigger";this._dialogClass="ui-datepicker-dialog";this._disableClass="ui-datepicker-disabled";this._unselectableClass="ui-datepicker-unselectable";this._currentClass="ui-datepicker-current-day";this._dayOverClass="ui-datepicker-days-cell-over";this.regional=[];this.regional[""]={closeText:"Done",prevText:"Prev",nextText:"Next",currentText:"Today",monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],weekHeader:"Wk",dateFormat:"mm/dd/yy",firstDay:0,isRTL:false,showMonthAfterYear:false,yearSuffix:""};this._defaults={showOn:"focus",showAnim:"fadeIn",showOptions:{},defaultDate:null,appendText:"",buttonText:"...",buttonImage:"",buttonImageOnly:false,hideIfNoPrevNext:false,navigationAsDateFormat:false,gotoCurrent:false,changeMonth:false,changeYear:false,yearRange:"c-10:c+10",showOtherMonths:false,selectOtherMonths:false,showWeek:false,calculateWeek:this.iso8601Week,shortYearCutoff:"+10",minDate:null,maxDate:null,duration:"fast",beforeShowDay:null,beforeShow:null,onSelect:null,onChangeMonthYear:null,onClose:null,numberOfMonths:1,showCurrentAtPos:0,stepMonths:1,stepBigMonths:12,altField:"",altFormat:"",constrainInput:true,showButtonPanel:false,autoSize:false,disabled:false};$.extend(this._defaults,this.regional[""]);this.regional.en=$.extend(true,{},this.regional[""]);this.regional["en-US"]=$.extend(true,{},this.regional.en);this.dpDiv=datepicker_bindHover($("<div id='"+this._mainDivId+"' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"));}$.extend(Datepicker.prototype,{markerClassName:"hasDatepicker",maxRows:4,_widgetDatepicker:function(){return this.dpDiv;},setDefaults:function(settings){datepicker_extendRemove(this._defaults,settings||{});return this;},_attachDatepicker:function(target,settings){var nodeName,inline,inst;nodeName=target.nodeName.toLowerCase();inline=(nodeName==="div"||nodeName==="span");if(!target.id){this.uuid+=1;target.id="dp"+this.uuid;}inst=this._newInst($(target),inline);inst.settings=$.extend({},settings||{});if(nodeName==="input"){this._connectDatepicker(target,inst);}else if(inline){this._inlineDatepicker(target,inst);}},_newInst:function(target,inline){var id=target[0].id.replace(/([^A-Za-z0-9_\-])/g,"\\\\$1");return{id:id,input:target,selectedDay:0,selectedMonth:0,selectedYear:0,drawMonth:0,drawYear:0,inline:inline,dpDiv:(!inline?this.dpDiv:datepicker_bindHover($("<div class='"+this._inlineClass+" ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")))};},_connectDatepicker:function(target,inst){var input=$(target);inst.append=$([]);inst.trigger=$([]);if(input.hasClass(this.markerClassName)){return;}this._attachments(input,inst);input.addClass(this.markerClassName).on("keydown",this._doKeyDown).on("keypress",this._doKeyPress).on("keyup",this._doKeyUp);this._autoSize(inst);$.data(target,"datepicker",inst);if(inst.settings.disabled){this._disableDatepicker(target);}},_attachments:function(input,inst){var showOn,buttonText,buttonImage,appendText=this._get(inst,"appendText"),isRTL=this._get(inst,"isRTL");if(inst.append){inst.append.remove();}if(appendText){inst.append=$("<span class='"+this._appendClass+"'>"+appendText+"</span>");input[isRTL?"before":"after"](inst.append);}input.off("focus",this._showDatepicker);if(inst.trigger){inst.trigger.remove();}showOn=this._get(inst,"showOn");if(showOn==="focus"||showOn==="both"){input.on("focus",this._showDatepicker);}if(showOn==="button"||showOn==="both"){buttonText=this._get(inst,"buttonText");buttonImage=this._get(inst,"buttonImage");inst.trigger=$(this._get(inst,"buttonImageOnly")?$("<img/>").addClass(this._triggerClass).attr({src:buttonImage,alt:buttonText,title:buttonText}):$("<button type='button'></button>").addClass(this._triggerClass).html(!buttonImage?buttonText:$("<img/>").attr({src:buttonImage,alt:buttonText,title:buttonText})));input[isRTL?"before":"after"](inst.trigger);inst.trigger.on("click",function(){if($.datepicker._datepickerShowing&&$.datepicker._lastInput===input[0]){$.datepicker._hideDatepicker();}else if($.datepicker._datepickerShowing&&$.datepicker._lastInput!==input[0]){$.datepicker._hideDatepicker();$.datepicker._showDatepicker(input[0]);}else{$.datepicker._showDatepicker(input[0]);}return false;});}},_autoSize:function(inst){if(this._get(inst,"autoSize")&&!inst.inline){var findMax,max,maxI,i,date=new Date(2009,12-1,20),dateFormat=this._get(inst,"dateFormat");if(dateFormat.match(/[DM]/)){findMax=function(names){max=0;maxI=0;for(i=0;i<names.length;i++){if(names[i].length>max){max=names[i].length;maxI=i;}}return maxI;};date.setMonth(findMax(this._get(inst,(dateFormat.match(/MM/)?"monthNames":"monthNamesShort"))));date.setDate(findMax(this._get(inst,(dateFormat.match(/DD/)?"dayNames":"dayNamesShort")))+20-date.getDay());}inst.input.attr("size",this._formatDate(inst,date).length);}},_inlineDatepicker:function(target,inst){var divSpan=$(target);if(divSpan.hasClass(this.markerClassName)){return;}divSpan.addClass(this.markerClassName).append(inst.dpDiv);$.data(target,"datepicker",inst);this._setDate(inst,this._getDefaultDate(inst),true);this._updateDatepicker(inst);this._updateAlternate(inst);if(inst.settings.disabled){this._disableDatepicker(target);}inst.dpDiv.css("display","block");},_dialogDatepicker:function(input,date,onSelect,settings,pos){var id,browserWidth,browserHeight,scrollX,scrollY,inst=this._dialogInst;if(!inst){this.uuid+=1;id="dp"+this.uuid;this._dialogInput=$("<input type='text' id='"+id+"' style='position: absolute; top: -100px; width: 0px;'/>");this._dialogInput.on("keydown",this._doKeyDown);$("body").append(this._dialogInput);inst=this._dialogInst=this._newInst(this._dialogInput,false);inst.settings={};$.data(this._dialogInput[0],"datepicker",inst);}datepicker_extendRemove(inst.settings,settings||{});date=(date&&date.constructor===Date?this._formatDate(inst,date):date);this._dialogInput.val(date);this._pos=(pos?(pos.length?pos:[pos.pageX,pos.pageY]):null);if(!this._pos){browserWidth=document.documentElement.clientWidth;browserHeight=document.documentElement.clientHeight;scrollX=document.documentElement.scrollLeft||document.body.scrollLeft;scrollY=document.documentElement.scrollTop||document.body.scrollTop;this._pos=[(browserWidth/2)-100+scrollX,(browserHeight/2)-150+scrollY];}this._dialogInput.css("left",(this._pos[0]+20)+"px").css("top",this._pos[1]+"px");inst.settings.onSelect=onSelect;this._inDialog=true;this.dpDiv.addClass(this._dialogClass);this._showDatepicker(this._dialogInput[0]);if($.blockUI){$.blockUI(this.dpDiv);}$.data(this._dialogInput[0],"datepicker",inst);return this;},_destroyDatepicker:function(target){var nodeName,$target=$(target),inst=$.data(target,"datepicker");if(!$target.hasClass(this.markerClassName)){return;}nodeName=target.nodeName.toLowerCase();$.removeData(target,"datepicker");if(nodeName==="input"){inst.append.remove();inst.trigger.remove();$target.removeClass(this.markerClassName).off("focus",this._showDatepicker).off("keydown",this._doKeyDown).off("keypress",this._doKeyPress).off("keyup",this._doKeyUp);}else if(nodeName==="div"||nodeName==="span"){$target.removeClass(this.markerClassName).empty();}if(datepicker_instActive===inst){datepicker_instActive=null;}},_enableDatepicker:function(target){var nodeName,inline,$target=$(target),inst=$.data(target,"datepicker");if(!$target.hasClass(this.markerClassName)){return;}nodeName=target.nodeName.toLowerCase();if(nodeName==="input"){target.disabled=false;inst.trigger.filter("button").each(function(){this.disabled=false;}).end().filter("img").css({opacity:"1.0",cursor:""});}else if(nodeName==="div"||nodeName==="span"){inline=$target.children("."+this._inlineClass);inline.children().removeClass("ui-state-disabled");inline.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",false);}this._disabledInputs=$.map(this._disabledInputs,function(value){return(value===target?null:value);});},_disableDatepicker:function(target){var nodeName,inline,$target=$(target),inst=$.data(target,"datepicker");if(!$target.hasClass(this.markerClassName)){return;}nodeName=target.nodeName.toLowerCase();if(nodeName==="input"){target.disabled=true;inst.trigger.filter("button").each(function(){this.disabled=true;}).end().filter("img").css({opacity:"0.5",cursor:"default"});}else if(nodeName==="div"||nodeName==="span"){inline=$target.children("."+this._inlineClass);inline.children().addClass("ui-state-disabled");inline.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",true);}this._disabledInputs=$.map(this._disabledInputs,function(value){return(value===target?null:value);});this._disabledInputs[this._disabledInputs.length]=target;},_isDisabledDatepicker:function(target){if(!target){return false;}for(var i=0;i<this._disabledInputs.length;i++){if(this._disabledInputs[i]===target){return true;}}return false;},_getInst:function(target){try{return $.data(target,"datepicker");}catch(err){throw"Missing instance data for this datepicker";}},_optionDatepicker:function(target,name,value){var settings,date,minDate,maxDate,inst=this._getInst(target);if(arguments.length===2&&typeof name==="string"){return(name==="defaults"?$.extend({},$.datepicker._defaults):(inst?(name==="all"?$.extend({},inst.settings):this._get(inst,name)):null));}settings=name||{};if(typeof name==="string"){settings={};settings[name]=value;}if(inst){if(this._curInst===inst){this._hideDatepicker();}date=this._getDateDatepicker(target,true);minDate=this._getMinMaxDate(inst,"min");maxDate=this._getMinMaxDate(inst,"max");datepicker_extendRemove(inst.settings,settings);if(minDate!==null&&settings.dateFormat!==undefined&&settings.minDate===undefined){inst.settings.minDate=this._formatDate(inst,minDate);}if(maxDate!==null&&settings.dateFormat!==undefined&&settings.maxDate===undefined){inst.settings.maxDate=this._formatDate(inst,maxDate);}if("disabled"in settings){if(settings.disabled){this._disableDatepicker(target);}else{this._enableDatepicker(target);}}this._attachments($(target),inst);this._autoSize(inst);this._setDate(inst,date);this._updateAlternate(inst);this._updateDatepicker(inst);}},_changeDatepicker:function(target,name,value){this._optionDatepicker(target,name,value);},_refreshDatepicker:function(target){var inst=this._getInst(target);if(inst){this._updateDatepicker(inst);}},_setDateDatepicker:function(target,date){var inst=this._getInst(target);if(inst){this._setDate(inst,date);this._updateDatepicker(inst);this._updateAlternate(inst);}},_getDateDatepicker:function(target,noDefault){var inst=this._getInst(target);if(inst&&!inst.inline){this._setDateFromField(inst,noDefault);}return(inst?this._getDate(inst):null);},_doKeyDown:function(event){var onSelect,dateStr,sel,inst=$.datepicker._getInst(event.target),handled=true,isRTL=inst.dpDiv.is(".ui-datepicker-rtl");inst._keyEvent=true;if($.datepicker._datepickerShowing){switch(event.keyCode){case 9:$.datepicker._hideDatepicker();handled=false;break;case 13:sel=$("td."+$.datepicker._dayOverClass+":not(."+$.datepicker._currentClass+")",inst.dpDiv);if(sel[0]){$.datepicker._selectDay(event.target,inst.selectedMonth,inst.selectedYear,sel[0]);}onSelect=$.datepicker._get(inst,"onSelect");if(onSelect){dateStr=$.datepicker._formatDate(inst);onSelect.apply((inst.input?inst.input[0]:null),[dateStr,inst]);}else{$.datepicker._hideDatepicker();}return false;case 27:$.datepicker._hideDatepicker();break;case 33:$.datepicker._adjustDate(event.target,(event.ctrlKey?-$.datepicker._get(inst,"stepBigMonths"):-$.datepicker._get(inst,"stepMonths")),"M");break;case 34:$.datepicker._adjustDate(event.target,(event.ctrlKey?+$.datepicker._get(inst,"stepBigMonths"):+$.datepicker._get(inst,"stepMonths")),"M");break;case 35:if(event.ctrlKey||event.metaKey){$.datepicker._clearDate(event.target);}handled=event.ctrlKey||event.metaKey;break;case 36:if(event.ctrlKey||event.metaKey){$.datepicker._gotoToday(event.target);}handled=event.ctrlKey||event.metaKey;break;case 37:if(event.ctrlKey||event.metaKey){$.datepicker._adjustDate(event.target,(isRTL?+1:-1),"D");}handled=event.ctrlKey||event.metaKey;if(event.originalEvent.altKey){$.datepicker._adjustDate(event.target,(event.ctrlKey?-$.datepicker._get(inst,"stepBigMonths"):-$.datepicker._get(inst,"stepMonths")),"M");}break;case 38:if(event.ctrlKey||event.metaKey){$.datepicker._adjustDate(event.target,-7,"D");}handled=event.ctrlKey||event.metaKey;break;case 39:if(event.ctrlKey||event.metaKey){$.datepicker._adjustDate(event.target,(isRTL?-1:+1),"D");}handled=event.ctrlKey||event.metaKey;if(event.originalEvent.altKey){$.datepicker._adjustDate(event.target,(event.ctrlKey?+$.datepicker._get(inst,"stepBigMonths"):+$.datepicker._get(inst,"stepMonths")),"M");}break;case 40:if(event.ctrlKey||event.metaKey){$.datepicker._adjustDate(event.target,+7,"D");}handled=event.ctrlKey||event.metaKey;break;default:handled=false;}}else if(event.keyCode===36&&event.ctrlKey){$.datepicker._showDatepicker(this);}else{handled=false;}if(handled){event.preventDefault();event.stopPropagation();}},_doKeyPress:function(event){var chars,chr,inst=$.datepicker._getInst(event.target);if($.datepicker._get(inst,"constrainInput")){chars=$.datepicker._possibleChars($.datepicker._get(inst,"dateFormat"));chr=String.fromCharCode(event.charCode==null?event.keyCode:event.charCode);return event.ctrlKey||event.metaKey||(chr<" "||!chars||chars.indexOf(chr)>-1);}},_doKeyUp:function(event){var date,inst=$.datepicker._getInst(event.target);if(inst.input.val()!==inst.lastVal){try{date=$.datepicker.parseDate($.datepicker._get(inst,"dateFormat"),(inst.input?inst.input.val():null),$.datepicker._getFormatConfig(inst));if(date){$.datepicker._setDateFromField(inst);$.datepicker._updateAlternate(inst);$.datepicker._updateDatepicker(inst);}}catch(err){}}return true;},_showDatepicker:function(input){input=input.target||input;if(input.nodeName.toLowerCase()!=="input"){input=$("input",input.parentNode)[0];}if($.datepicker._isDisabledDatepicker(input)||$.datepicker._lastInput===input){return;}var inst,beforeShow,beforeShowSettings,isFixed,offset,showAnim,duration;inst=$.datepicker._getInst(input);if($.datepicker._curInst&&$.datepicker._curInst!==inst){$.datepicker._curInst.dpDiv.stop(true,true);if(inst&&$.datepicker._datepickerShowing){$.datepicker._hideDatepicker($.datepicker._curInst.input[0]);}}beforeShow=$.datepicker._get(inst,"beforeShow");beforeShowSettings=beforeShow?beforeShow.apply(input,[input,inst]):{};if(beforeShowSettings===false){return;}datepicker_extendRemove(inst.settings,beforeShowSettings);inst.lastVal=null;$.datepicker._lastInput=input;$.datepicker._setDateFromField(inst);if($.datepicker._inDialog){input.value="";}if(!$.datepicker._pos){$.datepicker._pos=$.datepicker._findPos(input);$.datepicker._pos[1]+=input.offsetHeight;}isFixed=false;$(input).parents().each(function(){isFixed|=$(this).css("position")==="fixed";return!isFixed;});offset={left:$.datepicker._pos[0],top:$.datepicker._pos[1]};$.datepicker._pos=null;inst.dpDiv.empty();inst.dpDiv.css({position:"absolute",display:"block",top:"-1000px"});$.datepicker._updateDatepicker(inst);offset=$.datepicker._checkOffset(inst,offset,isFixed);inst.dpDiv.css({position:($.datepicker._inDialog&&$.blockUI?"static":(isFixed?"fixed":"absolute")),display:"none",left:offset.left+"px",top:offset.top+"px"});if(!inst.inline){showAnim=$.datepicker._get(inst,"showAnim");duration=$.datepicker._get(inst,"duration");inst.dpDiv.css("z-index",datepicker_getZindex($(input))+1);$.datepicker._datepickerShowing=true;if($.effects&&$.effects.effect[showAnim]){inst.dpDiv.show(showAnim,$.datepicker._get(inst,"showOptions"),duration);}else{inst.dpDiv[showAnim||"show"](showAnim?duration:null);}if($.datepicker._shouldFocusInput(inst)){inst.input.trigger("focus");}$.datepicker._curInst=inst;}},_updateDatepicker:function(inst){this.maxRows=4;datepicker_instActive=inst;inst.dpDiv.empty().append(this._generateHTML(inst));this._attachHandlers(inst);var origyearshtml,numMonths=this._getNumberOfMonths(inst),cols=numMonths[1],width=17,activeCell=inst.dpDiv.find("."+this._dayOverClass+" a");if(activeCell.length>0){datepicker_handleMouseover.apply(activeCell.get(0));}inst.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width("");if(cols>1){inst.dpDiv.addClass("ui-datepicker-multi-"+cols).css("width",(width*cols)+"em");}inst.dpDiv[(numMonths[0]!==1||numMonths[1]!==1?"add":"remove")+"Class"]("ui-datepicker-multi");inst.dpDiv[(this._get(inst,"isRTL")?"add":"remove")+"Class"]("ui-datepicker-rtl");if(inst===$.datepicker._curInst&&$.datepicker._datepickerShowing&&$.datepicker._shouldFocusInput(inst)){inst.input.trigger("focus");}if(inst.yearshtml){origyearshtml=inst.yearshtml;setTimeout(function(){if(origyearshtml===inst.yearshtml&&inst.yearshtml){inst.dpDiv.find("select.ui-datepicker-year:first").replaceWith(inst.yearshtml);}origyearshtml=inst.yearshtml=null;},0);}},_shouldFocusInput:function(inst){return inst.input&&inst.input.is(":visible")&&!inst.input.is(":disabled")&&!inst.input.is(":focus");},_checkOffset:function(inst,offset,isFixed){var dpWidth=inst.dpDiv.outerWidth(),dpHeight=inst.dpDiv.outerHeight(),inputWidth=inst.input?inst.input.outerWidth():0,inputHeight=inst.input?inst.input.outerHeight():0,viewWidth=document.documentElement.clientWidth+(isFixed?0:$(document).scrollLeft()),viewHeight=document.documentElement.clientHeight+(isFixed?0:$(document).scrollTop());offset.left-=(this._get(inst,"isRTL")?(dpWidth-inputWidth):0);offset.left-=(isFixed&&offset.left===inst.input.offset().left)?$(document).scrollLeft():0;offset.top-=(isFixed&&offset.top===(inst.input.offset().top+inputHeight))?$(document).scrollTop():0;offset.left-=Math.min(offset.left,(offset.left+dpWidth>viewWidth&&viewWidth>dpWidth)?Math.abs(offset.left+dpWidth-viewWidth):0);offset.top-=Math.min(offset.top,(offset.top+dpHeight>viewHeight&&viewHeight>dpHeight)?Math.abs(dpHeight+inputHeight):0);return offset;},_findPos:function(obj){var position,inst=this._getInst(obj),isRTL=this._get(inst,"isRTL");while(obj&&(obj.type==="hidden"||obj.nodeType!==1||$.expr.filters.hidden(obj))){obj=obj[isRTL?"previousSibling":"nextSibling"];}position=$(obj).offset();return[position.left,position.top];},_hideDatepicker:function(input){var showAnim,duration,postProcess,onClose,inst=this._curInst;if(!inst||(input&&inst!==$.data(input,"datepicker"))){return;}if(this._datepickerShowing){showAnim=this._get(inst,"showAnim");duration=this._get(inst,"duration");postProcess=function(){$.datepicker._tidyDialog(inst);};if($.effects&&($.effects.effect[showAnim]||$.effects[showAnim])){inst.dpDiv.hide(showAnim,$.datepicker._get(inst,"showOptions"),duration,postProcess);}else{inst.dpDiv[(showAnim==="slideDown"?"slideUp":(showAnim==="fadeIn"?"fadeOut":"hide"))]((showAnim?duration:null),postProcess);}if(!showAnim){postProcess();}this._datepickerShowing=false;onClose=this._get(inst,"onClose");if(onClose){onClose.apply((inst.input?inst.input[0]:null),[(inst.input?inst.input.val():""),inst]);}this._lastInput=null;if(this._inDialog){this._dialogInput.css({position:"absolute",left:"0",top:"-100px"});if($.blockUI){$.unblockUI();$("body").append(this.dpDiv);}}this._inDialog=false;}},_tidyDialog:function(inst){inst.dpDiv.removeClass(this._dialogClass).off(".ui-datepicker-calendar");},_checkExternalClick:function(event){if(!$.datepicker._curInst){return;}var $target=$(event.target),inst=$.datepicker._getInst($target[0]);if((($target[0].id!==$.datepicker._mainDivId&&$target.parents("#"+$.datepicker._mainDivId).length===0&&!$target.hasClass($.datepicker.markerClassName)&&!$target.closest("."+$.datepicker._triggerClass).length&&$.datepicker._datepickerShowing&&!($.datepicker._inDialog&&$.blockUI)))||($target.hasClass($.datepicker.markerClassName)&&$.datepicker._curInst!==inst)){$.datepicker._hideDatepicker();}},_adjustDate:function(id,offset,period){var target=$(id),inst=this._getInst(target[0]);if(this._isDisabledDatepicker(target[0])){return;}this._adjustInstDate(inst,offset+(period==="M"?this._get(inst,"showCurrentAtPos"):0),period);this._updateDatepicker(inst);},_gotoToday:function(id){var date,target=$(id),inst=this._getInst(target[0]);if(this._get(inst,"gotoCurrent")&&inst.currentDay){inst.selectedDay=inst.currentDay;inst.drawMonth=inst.selectedMonth=inst.currentMonth;inst.drawYear=inst.selectedYear=inst.currentYear;}else{date=new Date();inst.selectedDay=date.getDate();inst.drawMonth=inst.selectedMonth=date.getMonth();inst.drawYear=inst.selectedYear=date.getFullYear();}this._notifyChange(inst);this._adjustDate(target);},_selectMonthYear:function(id,select,period){var target=$(id),inst=this._getInst(target[0]);inst["selected"+(period==="M"?"Month":"Year")]=inst["draw"+(period==="M"?"Month":"Year")]=parseInt(select.options[select.selectedIndex].value,10);this._notifyChange(inst);this._adjustDate(target);},_selectDay:function(id,month,year,td){var inst,target=$(id);if($(td).hasClass(this._unselectableClass)||this._isDisabledDatepicker(target[0])){return;}inst=this._getInst(target[0]);inst.selectedDay=inst.currentDay=$("a",td).html();inst.selectedMonth=inst.currentMonth=month;inst.selectedYear=inst.currentYear=year;this._selectDate(id,this._formatDate(inst,inst.currentDay,inst.currentMonth,inst.currentYear));},_clearDate:function(id){var target=$(id);this._selectDate(target,"");},_selectDate:function(id,dateStr){var onSelect,target=$(id),inst=this._getInst(target[0]);dateStr=(dateStr!=null?dateStr:this._formatDate(inst));if(inst.input){inst.input.val(dateStr);}this._updateAlternate(inst);onSelect=this._get(inst,"onSelect");if(onSelect){onSelect.apply((inst.input?inst.input[0]:null),[dateStr,inst]);}else if(inst.input){inst.input.trigger("change");}if(inst.inline){this._updateDatepicker(inst);}else{this._hideDatepicker();this._lastInput=inst.input[0];if(typeof(inst.input[0])!=="object"){inst.input.trigger("focus");}this._lastInput=null;}},_updateAlternate:function(inst){var altFormat,date,dateStr,altField=this._get(inst,"altField");if(altField){altFormat=this._get(inst,"altFormat")||this._get(inst,"dateFormat");date=this._getDate(inst);dateStr=this.formatDate(altFormat,date,this._getFormatConfig(inst));$(altField).val(dateStr);}},noWeekends:function(date){var day=date.getDay();return[(day>0&&day<6),""];},iso8601Week:function(date){var time,checkDate=new Date(date.getTime());checkDate.setDate(checkDate.getDate()+4-(checkDate.getDay()||7));time=checkDate.getTime();checkDate.setMonth(0);checkDate.setDate(1);return Math.floor(Math.round((time-checkDate)/86400000)/7)+1;},parseDate:function(format,value,settings){if(format==null||value==null){throw"Invalid arguments";}value=(typeof value==="object"?value.toString():value+"");if(value===""){return null;}var iFormat,dim,extra,iValue=0,shortYearCutoffTemp=(settings?settings.shortYearCutoff:null)||this._defaults.shortYearCutoff,shortYearCutoff=(typeof shortYearCutoffTemp!=="string"?shortYearCutoffTemp:new Date().getFullYear()%100+parseInt(shortYearCutoffTemp,10)),dayNamesShort=(settings?settings.dayNamesShort:null)||this._defaults.dayNamesShort,dayNames=(settings?settings.dayNames:null)||this._defaults.dayNames,monthNamesShort=(settings?settings.monthNamesShort:null)||this._defaults.monthNamesShort,monthNames=(settings?settings.monthNames:null)||this._defaults.monthNames,year=-1,month=-1,day=-1,doy=-1,literal=false,date,lookAhead=function(match){var matches=(iFormat+1<format.length&&format.charAt(iFormat+1)===match);if(matches){iFormat++;}return matches;},getNumber=function(match){var isDoubled=lookAhead(match),size=(match==="@"?14:(match==="!"?20:(match==="y"&&isDoubled?4:(match==="o"?3:2)))),minSize=(match==="y"?size:1),digits=new RegExp("^\\d{"+minSize+","+size+"}"),num=value.substring(iValue).match(digits);if(!num){throw"Missing number at position "+iValue;}iValue+=num[0].length;return parseInt(num[0],10);},getName=function(match,shortNames,longNames){var index=-1,names=$.map(lookAhead(match)?longNames:shortNames,function(v,k){return[[k,v]];}).sort(function(a,b){return-(a[1].length-b[1].length);});$.each(names,function(i,pair){var name=pair[1];if(value.substr(iValue,name.length).toLowerCase()===name.toLowerCase()){index=pair[0];iValue+=name.length;return false;}});if(index!==-1){return index+1;}else{throw"Unknown name at position "+iValue;}},checkLiteral=function(){if(value.charAt(iValue)!==format.charAt(iFormat)){throw"Unexpected literal at position "+iValue;}iValue++;};for(iFormat=0;iFormat<format.length;iFormat++){if(literal){if(format.charAt(iFormat)==="'"&&!lookAhead("'")){literal=false;}else{checkLiteral();}}else{switch(format.charAt(iFormat)){case"d":day=getNumber("d");break;case"D":getName("D",dayNamesShort,dayNames);break;case"o":doy=getNumber("o");break;case"m":month=getNumber("m");break;case"M":month=getName("M",monthNamesShort,monthNames);break;case"y":year=getNumber("y");break;case"@":date=new Date(getNumber("@"));year=date.getFullYear();month=date.getMonth()+1;day=date.getDate();break;case"!":date=new Date((getNumber("!")-this._ticksTo1970)/10000);year=date.getFullYear();month=date.getMonth()+1;day=date.getDate();break;case"'":if(lookAhead("'")){checkLiteral();}else{literal=true;}break;default:checkLiteral();}}}if(iValue<value.length){extra=value.substr(iValue);if(!/^\s+/.test(extra)){throw"Extra/unparsed characters found in date: "+extra;}}if(year===-1){year=new Date().getFullYear();}else if(year<100){year+=new Date().getFullYear()-new Date().getFullYear()%100+(year<=shortYearCutoff?0:-100);}if(doy>-1){month=1;day=doy;do{dim=this._getDaysInMonth(year,month-1);if(day<=dim){break;}month++;day-=dim;}while(true);}date=this._daylightSavingAdjust(new Date(year,month-1,day));if(date.getFullYear()!==year||date.getMonth()+1!==month||date.getDate()!==day){throw"Invalid date";}return date;},ATOM:"yy-mm-dd",COOKIE:"D, dd M yy",ISO_8601:"yy-mm-dd",RFC_822:"D, d M y",RFC_850:"DD, dd-M-y",RFC_1036:"D, d M y",RFC_1123:"D, d M yy",RFC_2822:"D, d M yy",RSS:"D, d M y",TICKS:"!",TIMESTAMP:"@",W3C:"yy-mm-dd",_ticksTo1970:(((1970-1)*365+Math.floor(1970/4)-Math.floor(1970/100)+Math.floor(1970/400))*24*60*60*10000000),formatDate:function(format,date,settings){if(!date){return"";}var iFormat,dayNamesShort=(settings?settings.dayNamesShort:null)||this._defaults.dayNamesShort,dayNames=(settings?settings.dayNames:null)||this._defaults.dayNames,monthNamesShort=(settings?settings.monthNamesShort:null)||this._defaults.monthNamesShort,monthNames=(settings?settings.monthNames:null)||this._defaults.monthNames,lookAhead=function(match){var matches=(iFormat+1<format.length&&format.charAt(iFormat+1)===match);if(matches){iFormat++;}return matches;},formatNumber=function(match,value,len){var num=""+value;if(lookAhead(match)){while(num.length<len){num="0"+num;}}return num;},formatName=function(match,value,shortNames,longNames){return(lookAhead(match)?longNames[value]:shortNames[value]);},output="",literal=false;if(date){for(iFormat=0;iFormat<format.length;iFormat++){if(literal){if(format.charAt(iFormat)==="'"&&!lookAhead("'")){literal=false;}else{output+=format.charAt(iFormat);}}else{switch(format.charAt(iFormat)){case"d":output+=formatNumber("d",date.getDate(),2);break;case"D":output+=formatName("D",date.getDay(),dayNamesShort,dayNames);break;case"o":output+=formatNumber("o",Math.round((new Date(date.getFullYear(),date.getMonth(),date.getDate()).getTime()-new Date(date.getFullYear(),0,0).getTime())/86400000),3);break;case"m":output+=formatNumber("m",date.getMonth()+1,2);break;case"M":output+=formatName("M",date.getMonth(),monthNamesShort,monthNames);break;case"y":output+=(lookAhead("y")?date.getFullYear():(date.getFullYear()%100<10?"0":"")+date.getFullYear()%100);break;case"@":output+=date.getTime();break;case"!":output+=date.getTime()*10000+this._ticksTo1970;break;case"'":if(lookAhead("'")){output+="'";}else{literal=true;}break;default:output+=format.charAt(iFormat);}}}}return output;},_possibleChars:function(format){var iFormat,chars="",literal=false,lookAhead=function(match){var matches=(iFormat+1<format.length&&format.charAt(iFormat+1)===match);if(matches){iFormat++;}return matches;};for(iFormat=0;iFormat<format.length;iFormat++){if(literal){if(format.charAt(iFormat)==="'"&&!lookAhead("'")){literal=false;}else{chars+=format.charAt(iFormat);}}else{switch(format.charAt(iFormat)){case"d":case"m":case"y":case"@":chars+="0123456789";break;case"D":case"M":return null;case"'":if(lookAhead("'")){chars+="'";}else{literal=true;}break;default:chars+=format.charAt(iFormat);}}}return chars;},_get:function(inst,name){return inst.settings[name]!==undefined?inst.settings[name]:this._defaults[name];},_setDateFromField:function(inst,noDefault){if(inst.input.val()===inst.lastVal){return;}var dateFormat=this._get(inst,"dateFormat"),dates=inst.lastVal=inst.input?inst.input.val():null,defaultDate=this._getDefaultDate(inst),date=defaultDate,settings=this._getFormatConfig(inst);try{date=this.parseDate(dateFormat,dates,settings)||defaultDate;}catch(event){dates=(noDefault?"":dates);}inst.selectedDay=date.getDate();inst.drawMonth=inst.selectedMonth=date.getMonth();inst.drawYear=inst.selectedYear=date.getFullYear();inst.currentDay=(dates?date.getDate():0);inst.currentMonth=(dates?date.getMonth():0);inst.currentYear=(dates?date.getFullYear():0);this._adjustInstDate(inst);},_getDefaultDate:function(inst){return this._restrictMinMax(inst,this._determineDate(inst,this._get(inst,"defaultDate"),new Date()));},_determineDate:function(inst,date,defaultDate){var offsetNumeric=function(offset){var date=new Date();date.setDate(date.getDate()+offset);return date;},offsetString=function(offset){try{return $.datepicker.parseDate($.datepicker._get(inst,"dateFormat"),offset,$.datepicker._getFormatConfig(inst));}catch(e){}var date=(offset.toLowerCase().match(/^c/)?$.datepicker._getDate(inst):null)||new Date(),year=date.getFullYear(),month=date.getMonth(),day=date.getDate(),pattern=/([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,matches=pattern.exec(offset);while(matches){switch(matches[2]||"d"){case"d":case"D":day+=parseInt(matches[1],10);break;case"w":case"W":day+=parseInt(matches[1],10)*7;break;case"m":case"M":month+=parseInt(matches[1],10);day=Math.min(day,$.datepicker._getDaysInMonth(year,month));break;case"y":case"Y":year+=parseInt(matches[1],10);day=Math.min(day,$.datepicker._getDaysInMonth(year,month));break;}matches=pattern.exec(offset);}return new Date(year,month,day);},newDate=(date==null||date===""?defaultDate:(typeof date==="string"?offsetString(date):(typeof date==="number"?(isNaN(date)?defaultDate:offsetNumeric(date)):new Date(date.getTime()))));newDate=(newDate&&newDate.toString()==="Invalid Date"?defaultDate:newDate);if(newDate){newDate.setHours(0);newDate.setMinutes(0);newDate.setSeconds(0);newDate.setMilliseconds(0);}return this._daylightSavingAdjust(newDate);},_daylightSavingAdjust:function(date){if(!date){return null;}date.setHours(date.getHours()>12?date.getHours()+2:0);return date;},_setDate:function(inst,date,noChange){var clear=!date,origMonth=inst.selectedMonth,origYear=inst.selectedYear,newDate=this._restrictMinMax(inst,this._determineDate(inst,date,new Date()));inst.selectedDay=inst.currentDay=newDate.getDate();inst.drawMonth=inst.selectedMonth=inst.currentMonth=newDate.getMonth();inst.drawYear=inst.selectedYear=inst.currentYear=newDate.getFullYear();if((origMonth!==inst.selectedMonth||origYear!==inst.selectedYear)&&!noChange){this._notifyChange(inst);}this._adjustInstDate(inst);if(inst.input){inst.input.val(clear?"":this._formatDate(inst));}},_getDate:function(inst){var startDate=(!inst.currentYear||(inst.input&&inst.input.val()==="")?null:this._daylightSavingAdjust(new Date(inst.currentYear,inst.currentMonth,inst.currentDay)));return startDate;},_attachHandlers:function(inst){var stepMonths=this._get(inst,"stepMonths"),id="#"+inst.id.replace(/\\\\/g,"\\");inst.dpDiv.find("[data-handler]").map(function(){var handler={prev:function(){$.datepicker._adjustDate(id,-stepMonths,"M");},next:function(){$.datepicker._adjustDate(id,+stepMonths,"M");},hide:function(){$.datepicker._hideDatepicker();},today:function(){$.datepicker._gotoToday(id);},selectDay:function(){$.datepicker._selectDay(id,+this.getAttribute("data-month"),+this.getAttribute("data-year"),this);return false;},selectMonth:function(){$.datepicker._selectMonthYear(id,this,"M");return false;},selectYear:function(){$.datepicker._selectMonthYear(id,this,"Y");return false;}};$(this).on(this.getAttribute("data-event"),handler[this.getAttribute("data-handler")]);});},_generateHTML:function(inst){var maxDraw,prevText,prev,nextText,next,currentText,gotoDate,controls,buttonPanel,firstDay,showWeek,dayNames,dayNamesMin,monthNames,monthNamesShort,beforeShowDay,showOtherMonths,selectOtherMonths,defaultDate,html,dow,row,group,col,selectedDate,cornerClass,calender,thead,day,daysInMonth,leadDays,curRows,numRows,printDate,dRow,tbody,daySettings,otherMonth,unselectable,tempDate=new Date(),today=this._daylightSavingAdjust(new Date(tempDate.getFullYear(),tempDate.getMonth(),tempDate.getDate())),isRTL=this._get(inst,"isRTL"),showButtonPanel=this._get(inst,"showButtonPanel"),hideIfNoPrevNext=this._get(inst,"hideIfNoPrevNext"),navigationAsDateFormat=this._get(inst,"navigationAsDateFormat"),numMonths=this._getNumberOfMonths(inst),showCurrentAtPos=this._get(inst,"showCurrentAtPos"),stepMonths=this._get(inst,"stepMonths"),isMultiMonth=(numMonths[0]!==1||numMonths[1]!==1),currentDate=this._daylightSavingAdjust((!inst.currentDay?new Date(9999,9,9):new Date(inst.currentYear,inst.currentMonth,inst.currentDay))),minDate=this._getMinMaxDate(inst,"min"),maxDate=this._getMinMaxDate(inst,"max"),drawMonth=inst.drawMonth-showCurrentAtPos,drawYear=inst.drawYear;if(drawMonth<0){drawMonth+=12;drawYear--;}if(maxDate){maxDraw=this._daylightSavingAdjust(new Date(maxDate.getFullYear(),maxDate.getMonth()-(numMonths[0]*numMonths[1])+1,maxDate.getDate()));maxDraw=(minDate&&maxDraw<minDate?minDate:maxDraw);while(this._daylightSavingAdjust(new Date(drawYear,drawMonth,1))>maxDraw){drawMonth--;if(drawMonth<0){drawMonth=11;drawYear--;}}}inst.drawMonth=drawMonth;inst.drawYear=drawYear;prevText=this._get(inst,"prevText");prevText=(!navigationAsDateFormat?prevText:this.formatDate(prevText,this._daylightSavingAdjust(new Date(drawYear,drawMonth-stepMonths,1)),this._getFormatConfig(inst)));prev=(this._canAdjustMonth(inst,-1,drawYear,drawMonth)?"<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click'"+" title='"+prevText+"'><span class='ui-icon ui-icon-circle-triangle-"+(isRTL?"e":"w")+"'>"+prevText+"</span></a>":(hideIfNoPrevNext?"":"<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='"+prevText+"'><span class='ui-icon ui-icon-circle-triangle-"+(isRTL?"e":"w")+"'>"+prevText+"</span></a>"));nextText=this._get(inst,"nextText");nextText=(!navigationAsDateFormat?nextText:this.formatDate(nextText,this._daylightSavingAdjust(new Date(drawYear,drawMonth+stepMonths,1)),this._getFormatConfig(inst)));next=(this._canAdjustMonth(inst,+1,drawYear,drawMonth)?"<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click'"+" title='"+nextText+"'><span class='ui-icon ui-icon-circle-triangle-"+(isRTL?"w":"e")+"'>"+nextText+"</span></a>":(hideIfNoPrevNext?"":"<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='"+nextText+"'><span class='ui-icon ui-icon-circle-triangle-"+(isRTL?"w":"e")+"'>"+nextText+"</span></a>"));currentText=this._get(inst,"currentText");gotoDate=(this._get(inst,"gotoCurrent")&&inst.currentDay?currentDate:today);currentText=(!navigationAsDateFormat?currentText:this.formatDate(currentText,gotoDate,this._getFormatConfig(inst)));controls=(!inst.inline?"<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>"+this._get(inst,"closeText")+"</button>":"");buttonPanel=(showButtonPanel)?"<div class='ui-datepicker-buttonpane ui-widget-content'>"+(isRTL?controls:"")+(this._isInRange(inst,gotoDate)?"<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'"+">"+currentText+"</button>":"")+(isRTL?"":controls)+"</div>":"";firstDay=parseInt(this._get(inst,"firstDay"),10);firstDay=(isNaN(firstDay)?0:firstDay);showWeek=this._get(inst,"showWeek");dayNames=this._get(inst,"dayNames");dayNamesMin=this._get(inst,"dayNamesMin");monthNames=this._get(inst,"monthNames");monthNamesShort=this._get(inst,"monthNamesShort");beforeShowDay=this._get(inst,"beforeShowDay");showOtherMonths=this._get(inst,"showOtherMonths");selectOtherMonths=this._get(inst,"selectOtherMonths");defaultDate=this._getDefaultDate(inst);html="";for(row=0;row<numMonths[0];row++){group="";this.maxRows=4;for(col=0;col<numMonths[1];col++){selectedDate=this._daylightSavingAdjust(new Date(drawYear,drawMonth,inst.selectedDay));cornerClass=" ui-corner-all";calender="";if(isMultiMonth){calender+="<div class='ui-datepicker-group";if(numMonths[1]>1){switch(col){case 0:calender+=" ui-datepicker-group-first";cornerClass=" ui-corner-"+(isRTL?"right":"left");break;case numMonths[1]-1:calender+=" ui-datepicker-group-last";cornerClass=" ui-corner-"+(isRTL?"left":"right");break;default:calender+=" ui-datepicker-group-middle";cornerClass="";break;}}calender+="'>";}calender+="<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix"+cornerClass+"'>"+(/all|left/.test(cornerClass)&&row===0?(isRTL?next:prev):"")+(/all|right/.test(cornerClass)&&row===0?(isRTL?prev:next):"")+this._generateMonthYearHeader(inst,drawMonth,drawYear,minDate,maxDate,row>0||col>0,monthNames,monthNamesShort)+"</div><table class='ui-datepicker-calendar'><thead>"+"<tr>";thead=(showWeek?"<th class='ui-datepicker-week-col'>"+this._get(inst,"weekHeader")+"</th>":"");for(dow=0;dow<7;dow++){day=(dow+firstDay)%7;thead+="<th scope='col'"+((dow+firstDay+6)%7>=5?" class='ui-datepicker-week-end'":"")+">"+"<span title='"+dayNames[day]+"'>"+dayNamesMin[day]+"</span></th>";}calender+=thead+"</tr></thead><tbody>";daysInMonth=this._getDaysInMonth(drawYear,drawMonth);if(drawYear===inst.selectedYear&&drawMonth===inst.selectedMonth){inst.selectedDay=Math.min(inst.selectedDay,daysInMonth);}leadDays=(this._getFirstDayOfMonth(drawYear,drawMonth)-firstDay+7)%7;curRows=Math.ceil((leadDays+daysInMonth)/7);numRows=(isMultiMonth?this.maxRows>curRows?this.maxRows:curRows:curRows);this.maxRows=numRows;printDate=this._daylightSavingAdjust(new Date(drawYear,drawMonth,1-leadDays));for(dRow=0;dRow<numRows;dRow++){calender+="<tr>";tbody=(!showWeek?"":"<td class='ui-datepicker-week-col'>"+this._get(inst,"calculateWeek")(printDate)+"</td>");for(dow=0;dow<7;dow++){daySettings=(beforeShowDay?beforeShowDay.apply((inst.input?inst.input[0]:null),[printDate]):[true,""]);otherMonth=(printDate.getMonth()!==drawMonth);unselectable=(otherMonth&&!selectOtherMonths)||!daySettings[0]||(minDate&&printDate<minDate)||(maxDate&&printDate>maxDate);tbody+="<td class='"+((dow+firstDay+6)%7>=5?" ui-datepicker-week-end":"")+(otherMonth?" ui-datepicker-other-month":"")+((printDate.getTime()===selectedDate.getTime()&&drawMonth===inst.selectedMonth&&inst._keyEvent)||(defaultDate.getTime()===printDate.getTime()&&defaultDate.getTime()===selectedDate.getTime())?" "+this._dayOverClass:"")+(unselectable?" "+this._unselectableClass+" ui-state-disabled":"")+(otherMonth&&!showOtherMonths?"":" "+daySettings[1]+(printDate.getTime()===currentDate.getTime()?" "+this._currentClass:"")+(printDate.getTime()===today.getTime()?" ui-datepicker-today":""))+"'"+((!otherMonth||showOtherMonths)&&daySettings[2]?" title='"+daySettings[2].replace(/'/g,"&#39;")+"'":"")+(unselectable?"":" data-handler='selectDay' data-event='click' data-month='"+printDate.getMonth()+"' data-year='"+printDate.getFullYear()+"'")+">"+(otherMonth&&!showOtherMonths?"&#xa0;":(unselectable?"<span class='ui-state-default'>"+printDate.getDate()+"</span>":"<a class='ui-state-default"+(printDate.getTime()===today.getTime()?" ui-state-highlight":"")+(printDate.getTime()===currentDate.getTime()?" ui-state-active":"")+(otherMonth?" ui-priority-secondary":"")+"' href='#'>"+printDate.getDate()+"</a>"))+"</td>";printDate.setDate(printDate.getDate()+1);printDate=this._daylightSavingAdjust(printDate);}calender+=tbody+"</tr>";}drawMonth++;if(drawMonth>11){drawMonth=0;drawYear++;}calender+="</tbody></table>"+(isMultiMonth?"</div>"+((numMonths[0]>0&&col===numMonths[1]-1)?"<div class='ui-datepicker-row-break'></div>":""):"");group+=calender;}html+=group;}html+=buttonPanel;inst._keyEvent=false;return html;},_generateMonthYearHeader:function(inst,drawMonth,drawYear,minDate,maxDate,secondary,monthNames,monthNamesShort){var inMinYear,inMaxYear,month,years,thisYear,determineYear,year,endYear,changeMonth=this._get(inst,"changeMonth"),changeYear=this._get(inst,"changeYear"),showMonthAfterYear=this._get(inst,"showMonthAfterYear"),html="<div class='ui-datepicker-title'>",monthHtml="";if(secondary||!changeMonth){monthHtml+="<span class='ui-datepicker-month'>"+monthNames[drawMonth]+"</span>";}else{inMinYear=(minDate&&minDate.getFullYear()===drawYear);inMaxYear=(maxDate&&maxDate.getFullYear()===drawYear);monthHtml+="<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>";for(month=0;month<12;month++){if((!inMinYear||month>=minDate.getMonth())&&(!inMaxYear||month<=maxDate.getMonth())){monthHtml+="<option value='"+month+"'"+(month===drawMonth?" selected='selected'":"")+">"+monthNamesShort[month]+"</option>";}}monthHtml+="</select>";}if(!showMonthAfterYear){html+=monthHtml+(secondary||!(changeMonth&&changeYear)?"&#xa0;":"");}if(!inst.yearshtml){inst.yearshtml="";if(secondary||!changeYear){html+="<span class='ui-datepicker-year'>"+drawYear+"</span>";}else{years=this._get(inst,"yearRange").split(":");thisYear=new Date().getFullYear();determineYear=function(value){var year=(value.match(/c[+\-].*/)?drawYear+parseInt(value.substring(1),10):(value.match(/[+\-].*/)?thisYear+parseInt(value,10):parseInt(value,10)));return(isNaN(year)?thisYear:year);};year=determineYear(years[0]);endYear=Math.max(year,determineYear(years[1]||""));year=(minDate?Math.max(year,minDate.getFullYear()):year);endYear=(maxDate?Math.min(endYear,maxDate.getFullYear()):endYear);inst.yearshtml+="<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>";for(;year<=endYear;year++){inst.yearshtml+="<option value='"+year+"'"+(year===drawYear?" selected='selected'":"")+">"+year+"</option>";}inst.yearshtml+="</select>";html+=inst.yearshtml;inst.yearshtml=null;}}html+=this._get(inst,"yearSuffix");if(showMonthAfterYear){html+=(secondary||!(changeMonth&&changeYear)?"&#xa0;":"")+monthHtml;}html+="</div>";return html;},_adjustInstDate:function(inst,offset,period){var year=inst.selectedYear+(period==="Y"?offset:0),month=inst.selectedMonth+(period==="M"?offset:0),day=Math.min(inst.selectedDay,this._getDaysInMonth(year,month))+(period==="D"?offset:0),date=this._restrictMinMax(inst,this._daylightSavingAdjust(new Date(year,month,day)));inst.selectedDay=date.getDate();inst.drawMonth=inst.selectedMonth=date.getMonth();inst.drawYear=inst.selectedYear=date.getFullYear();if(period==="M"||period==="Y"){this._notifyChange(inst);}},_restrictMinMax:function(inst,date){var minDate=this._getMinMaxDate(inst,"min"),maxDate=this._getMinMaxDate(inst,"max"),newDate=(minDate&&date<minDate?minDate:date);return(maxDate&&newDate>maxDate?maxDate:newDate);},_notifyChange:function(inst){var onChange=this._get(inst,"onChangeMonthYear");if(onChange){onChange.apply((inst.input?inst.input[0]:null),[inst.selectedYear,inst.selectedMonth+1,inst]);}},_getNumberOfMonths:function(inst){var numMonths=this._get(inst,"numberOfMonths");return(numMonths==null?[1,1]:(typeof numMonths==="number"?[1,numMonths]:numMonths));},_getMinMaxDate:function(inst,minMax){return this._determineDate(inst,this._get(inst,minMax+"Date"),null);},_getDaysInMonth:function(year,month){return 32-this._daylightSavingAdjust(new Date(year,month,32)).getDate();},_getFirstDayOfMonth:function(year,month){return new Date(year,month,1).getDay();},_canAdjustMonth:function(inst,offset,curYear,curMonth){var numMonths=this._getNumberOfMonths(inst),date=this._daylightSavingAdjust(new Date(curYear,curMonth+(offset<0?offset:numMonths[0]*numMonths[1]),1));if(offset<0){date.setDate(this._getDaysInMonth(date.getFullYear(),date.getMonth()));}return this._isInRange(inst,date);},_isInRange:function(inst,date){var yearSplit,currentYear,minDate=this._getMinMaxDate(inst,"min"),maxDate=this._getMinMaxDate(inst,"max"),minYear=null,maxYear=null,years=this._get(inst,"yearRange");if(years){yearSplit=years.split(":");currentYear=new Date().getFullYear();minYear=parseInt(yearSplit[0],10);maxYear=parseInt(yearSplit[1],10);if(yearSplit[0].match(/[+\-].*/)){minYear+=currentYear;}if(yearSplit[1].match(/[+\-].*/)){maxYear+=currentYear;}}return((!minDate||date.getTime()>=minDate.getTime())&&(!maxDate||date.getTime()<=maxDate.getTime())&&(!minYear||date.getFullYear()>=minYear)&&(!maxYear||date.getFullYear()<=maxYear));},_getFormatConfig:function(inst){var shortYearCutoff=this._get(inst,"shortYearCutoff");shortYearCutoff=(typeof shortYearCutoff!=="string"?shortYearCutoff:new Date().getFullYear()%100+parseInt(shortYearCutoff,10));return{shortYearCutoff:shortYearCutoff,dayNamesShort:this._get(inst,"dayNamesShort"),dayNames:this._get(inst,"dayNames"),monthNamesShort:this._get(inst,"monthNamesShort"),monthNames:this._get(inst,"monthNames")};},_formatDate:function(inst,day,month,year){if(!day){inst.currentDay=inst.selectedDay;inst.currentMonth=inst.selectedMonth;inst.currentYear=inst.selectedYear;}var date=(day?(typeof day==="object"?day:this._daylightSavingAdjust(new Date(year,month,day))):this._daylightSavingAdjust(new Date(inst.currentYear,inst.currentMonth,inst.currentDay)));return this.formatDate(this._get(inst,"dateFormat"),date,this._getFormatConfig(inst));}});function datepicker_bindHover(dpDiv){var selector="button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";return dpDiv.on("mouseout",selector,function(){$(this).removeClass("ui-state-hover");if(this.className.indexOf("ui-datepicker-prev")!==-1){$(this).removeClass("ui-datepicker-prev-hover");}if(this.className.indexOf("ui-datepicker-next")!==-1){$(this).removeClass("ui-datepicker-next-hover");}}).on("mouseover",selector,datepicker_handleMouseover);}function datepicker_handleMouseover(){if(!$.datepicker._isDisabledDatepicker(datepicker_instActive.inline?datepicker_instActive.dpDiv.parent()[0]:datepicker_instActive.input[0])){$(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover");$(this).addClass("ui-state-hover");if(this.className.indexOf("ui-datepicker-prev")!==-1){$(this).addClass("ui-datepicker-prev-hover");}if(this.className.indexOf("ui-datepicker-next")!==-1){$(this).addClass("ui-datepicker-next-hover");}}}function datepicker_extendRemove(target,props){$.extend(target,props);for(var name in props){if(props[name]==null){target[name]=props[name];}}return target;}$.fn.datepicker=function(options){if(!this.length){return this;}if(!$.datepicker.initialized){$(document).on("mousedown",$.datepicker._checkExternalClick);$.datepicker.initialized=true;}if($("#"+$.datepicker._mainDivId).length===0){$("body").append($.datepicker.dpDiv);}var otherArgs=Array.prototype.slice.call(arguments,1);if(typeof options==="string"&&(options==="isDisabled"||options==="getDate"||options==="widget")){return $.datepicker["_"+options+"Datepicker"].apply($.datepicker,[this[0]].concat(otherArgs));}if(options==="option"&&arguments.length===2&&typeof arguments[1]==="string"){return $.datepicker["_"+options+"Datepicker"].apply($.datepicker,[this[0]].concat(otherArgs));}return this.each(function(){typeof options==="string"?$.datepicker["_"+options+"Datepicker"].apply($.datepicker,[this].concat(otherArgs)):$.datepicker._attachDatepicker(this,options);});};$.datepicker=new Datepicker();$.datepicker.initialized=false;$.datepicker.uuid=new Date().getTime();$.datepicker.version="1.12.1";var widgetsDatepicker=$.datepicker;$.widget("ui.dialog",{version:"1.12.1",options:{appendTo:"body",autoOpen:true,buttons:[],classes:{"ui-dialog":"ui-corner-all","ui-dialog-titlebar":"ui-corner-all"},closeOnEscape:true,closeText:"Close",draggable:true,hide:null,height:"auto",maxHeight:null,maxWidth:null,minHeight:150,minWidth:150,modal:false,position:{my:"center",at:"center",of:window,collision:"fit",using:function(pos){var topOffset=$(this).css(pos).offset().top;if(topOffset<0){$(this).css("top",pos.top-topOffset);}}},resizable:true,show:null,title:null,width:300,beforeClose:null,close:null,drag:null,dragStart:null,dragStop:null,focus:null,open:null,resize:null,resizeStart:null,resizeStop:null},sizeRelatedOptions:{buttons:true,height:true,maxHeight:true,maxWidth:true,minHeight:true,minWidth:true,width:true},resizableRelatedOptions:{maxHeight:true,maxWidth:true,minHeight:true,minWidth:true},_create:function(){this.originalCss={display:this.element[0].style.display,width:this.element[0].style.width,minHeight:this.element[0].style.minHeight,maxHeight:this.element[0].style.maxHeight,height:this.element[0].style.height};this.originalPosition={parent:this.element.parent(),index:this.element.parent().children().index(this.element)};this.originalTitle=this.element.attr("title");if(this.options.title==null&&this.originalTitle!=null){this.options.title=this.originalTitle;}if(this.options.disabled){this.options.disabled=false;}this._createWrapper();this.element.show().removeAttr("title").appendTo(this.uiDialog);this._addClass("ui-dialog-content","ui-widget-content");this._createTitlebar();this._createButtonPane();if(this.options.draggable&&$.fn.draggable){this._makeDraggable();}if(this.options.resizable&&$.fn.resizable){this._makeResizable();}this._isOpen=false;this._trackFocus();},_init:function(){if(this.options.autoOpen){this.open();}},_appendTo:function(){var element=this.options.appendTo;if(element&&(element.jquery||element.nodeType)){return $(element);}return this.document.find(element||"body").eq(0);},_destroy:function(){var next,originalPosition=this.originalPosition;this._untrackInstance();this._destroyOverlay();this.element.removeUniqueId().css(this.originalCss).detach();this.uiDialog.remove();if(this.originalTitle){this.element.attr("title",this.originalTitle);}next=originalPosition.parent.children().eq(originalPosition.index);if(next.length&&next[0]!==this.element[0]){next.before(this.element);}else{originalPosition.parent.append(this.element);}},widget:function(){return this.uiDialog;},disable:$.noop,enable:$.noop,close:function(event){var that=this;if(!this._isOpen||this._trigger("beforeClose",event)===false){return;}this._isOpen=false;this._focusedElement=null;this._destroyOverlay();this._untrackInstance();if(!this.opener.filter(":focusable").trigger("focus").length){$.ui.safeBlur($.ui.safeActiveElement(this.document[0]));}this._hide(this.uiDialog,this.options.hide,function(){that._trigger("close",event);});},isOpen:function(){return this._isOpen;},moveToTop:function(){this._moveToTop();},_moveToTop:function(event,silent){var moved=false,zIndices=this.uiDialog.siblings(".ui-front:visible").map(function(){return+$(this).css("z-index");}).get(),zIndexMax=Math.max.apply(null,zIndices);if(zIndexMax>=+this.uiDialog.css("z-index")){this.uiDialog.css("z-index",zIndexMax+1);moved=true;}if(moved&&!silent){this._trigger("focus",event);}return moved;},open:function(){var that=this;if(this._isOpen){if(this._moveToTop()){this._focusTabbable();}return;}this._isOpen=true;this.opener=$($.ui.safeActiveElement(this.document[0]));this._size();this._position();this._createOverlay();this._moveToTop(null,true);if(this.overlay){this.overlay.css("z-index",this.uiDialog.css("z-index")-1);}this._show(this.uiDialog,this.options.show,function(){that._focusTabbable();that._trigger("focus");});this._makeFocusTarget();this._trigger("open");},_focusTabbable:function(){var hasFocus=this._focusedElement;if(!hasFocus){hasFocus=this.element.find("[autofocus]");}if(!hasFocus.length){hasFocus=this.element.find(":tabbable");}if(!hasFocus.length){hasFocus=this.uiDialogButtonPane.find(":tabbable");}if(!hasFocus.length){hasFocus=this.uiDialogTitlebarClose.filter(":tabbable");}if(!hasFocus.length){hasFocus=this.uiDialog;}hasFocus.eq(0).trigger("focus");},_keepFocus:function(event){function checkFocus(){var activeElement=$.ui.safeActiveElement(this.document[0]),isActive=this.uiDialog[0]===activeElement||$.contains(this.uiDialog[0],activeElement);if(!isActive){this._focusTabbable();}}event.preventDefault();checkFocus.call(this);this._delay(checkFocus);},_createWrapper:function(){this.uiDialog=$("<div>").hide().attr({tabIndex:-1,role:"dialog"}).appendTo(this._appendTo());this._addClass(this.uiDialog,"ui-dialog","ui-widget ui-widget-content ui-front");this._on(this.uiDialog,{keydown:function(event){if(this.options.closeOnEscape&&!event.isDefaultPrevented()&&event.keyCode&&event.keyCode===$.ui.keyCode.ESCAPE){event.preventDefault();this.close(event);return;}if(event.keyCode!==$.ui.keyCode.TAB||event.isDefaultPrevented()){return;}var tabbables=this.uiDialog.find(":tabbable"),first=tabbables.filter(":first"),last=tabbables.filter(":last");if((event.target===last[0]||event.target===this.uiDialog[0])&&!event.shiftKey){this._delay(function(){first.trigger("focus");});event.preventDefault();}else if((event.target===first[0]||event.target===this.uiDialog[0])&&event.shiftKey){this._delay(function(){last.trigger("focus");});event.preventDefault();}},mousedown:function(event){if(this._moveToTop(event)){this._focusTabbable();}}});if(!this.element.find("[aria-describedby]").length){this.uiDialog.attr({"aria-describedby":this.element.uniqueId().attr("id")});}},_createTitlebar:function(){var uiDialogTitle;this.uiDialogTitlebar=$("<div>");this._addClass(this.uiDialogTitlebar,"ui-dialog-titlebar","ui-widget-header ui-helper-clearfix");this._on(this.uiDialogTitlebar,{mousedown:function(event){if(!$(event.target).closest(".ui-dialog-titlebar-close")){this.uiDialog.trigger("focus");}}});this.uiDialogTitlebarClose=$("<button type='button'></button>").button({label:$("<a>").text(this.options.closeText).html(),icon:"ui-icon-closethick",showLabel:false}).appendTo(this.uiDialogTitlebar);this._addClass(this.uiDialogTitlebarClose,"ui-dialog-titlebar-close");this._on(this.uiDialogTitlebarClose,{click:function(event){event.preventDefault();this.close(event);}});uiDialogTitle=$("<span>").uniqueId().prependTo(this.uiDialogTitlebar);this._addClass(uiDialogTitle,"ui-dialog-title");this._title(uiDialogTitle);this.uiDialogTitlebar.prependTo(this.uiDialog);this.uiDialog.attr({"aria-labelledby":uiDialogTitle.attr("id")});},_title:function(title){if(this.options.title){title.text(this.options.title);}else{title.html("&#160;");}},_createButtonPane:function(){this.uiDialogButtonPane=$("<div>");this._addClass(this.uiDialogButtonPane,"ui-dialog-buttonpane","ui-widget-content ui-helper-clearfix");this.uiButtonSet=$("<div>").appendTo(this.uiDialogButtonPane);this._addClass(this.uiButtonSet,"ui-dialog-buttonset");this._createButtons();},_createButtons:function(){var that=this,buttons=this.options.buttons;this.uiDialogButtonPane.remove();this.uiButtonSet.empty();if($.isEmptyObject(buttons)||($.isArray(buttons)&&!buttons.length)){this._removeClass(this.uiDialog,"ui-dialog-buttons");return;}$.each(buttons,function(name,props){var click,buttonOptions;props=$.isFunction(props)?{click:props,text:name}:props;props=$.extend({type:"button"},props);click=props.click;buttonOptions={icon:props.icon,iconPosition:props.iconPosition,showLabel:props.showLabel,icons:props.icons,text:props.text};delete props.click;delete props.icon;delete props.iconPosition;delete props.showLabel;delete props.icons;if(typeof props.text==="boolean"){delete props.text;}$("<button></button>",props).button(buttonOptions).appendTo(that.uiButtonSet).on("click",function(){click.apply(that.element[0],arguments);});});this._addClass(this.uiDialog,"ui-dialog-buttons");this.uiDialogButtonPane.appendTo(this.uiDialog);},_makeDraggable:function(){var that=this,options=this.options;function filteredUi(ui){return{position:ui.position,offset:ui.offset};}this.uiDialog.draggable({cancel:".ui-dialog-content, .ui-dialog-titlebar-close",handle:".ui-dialog-titlebar",containment:"document",start:function(event,ui){that._addClass($(this),"ui-dialog-dragging");that._blockFrames();that._trigger("dragStart",event,filteredUi(ui));},drag:function(event,ui){that._trigger("drag",event,filteredUi(ui));},stop:function(event,ui){var left=ui.offset.left-that.document.scrollLeft(),top=ui.offset.top-that.document.scrollTop();options.position={my:"left top",at:"left"+(left>=0?"+":"")+left+" "+"top"+(top>=0?"+":"")+top,of:that.window};that._removeClass($(this),"ui-dialog-dragging");that._unblockFrames();that._trigger("dragStop",event,filteredUi(ui));}});},_makeResizable:function(){var that=this,options=this.options,handles=options.resizable,position=this.uiDialog.css("position"),resizeHandles=typeof handles==="string"?handles:"n,e,s,w,se,sw,ne,nw";function filteredUi(ui){return{originalPosition:ui.originalPosition,originalSize:ui.originalSize,position:ui.position,size:ui.size};}this.uiDialog.resizable({cancel:".ui-dialog-content",containment:"document",alsoResize:this.element,maxWidth:options.maxWidth,maxHeight:options.maxHeight,minWidth:options.minWidth,minHeight:this._minHeight(),handles:resizeHandles,start:function(event,ui){that._addClass($(this),"ui-dialog-resizing");that._blockFrames();that._trigger("resizeStart",event,filteredUi(ui));},resize:function(event,ui){that._trigger("resize",event,filteredUi(ui));},stop:function(event,ui){var offset=that.uiDialog.offset(),left=offset.left-that.document.scrollLeft(),top=offset.top-that.document.scrollTop();options.height=that.uiDialog.height();options.width=that.uiDialog.width();options.position={my:"left top",at:"left"+(left>=0?"+":"")+left+" "+"top"+(top>=0?"+":"")+top,of:that.window};that._removeClass($(this),"ui-dialog-resizing");that._unblockFrames();that._trigger("resizeStop",event,filteredUi(ui));}}).css("position",position);},_trackFocus:function(){this._on(this.widget(),{focusin:function(event){this._makeFocusTarget();this._focusedElement=$(event.target);}});},_makeFocusTarget:function(){this._untrackInstance();this._trackingInstances().unshift(this);},_untrackInstance:function(){var instances=this._trackingInstances(),exists=$.inArray(this,instances);if(exists!==-1){instances.splice(exists,1);}},_trackingInstances:function(){var instances=this.document.data("ui-dialog-instances");if(!instances){instances=[];this.document.data("ui-dialog-instances",instances);}return instances;},_minHeight:function(){var options=this.options;return options.height==="auto"?options.minHeight:Math.min(options.minHeight,options.height);},_position:function(){var isVisible=this.uiDialog.is(":visible");if(!isVisible){this.uiDialog.show();}this.uiDialog.position(this.options.position);if(!isVisible){this.uiDialog.hide();}},_setOptions:function(options){var that=this,resize=false,resizableOptions={};$.each(options,function(key,value){that._setOption(key,value);if(key in that.sizeRelatedOptions){resize=true;}if(key in that.resizableRelatedOptions){resizableOptions[key]=value;}});if(resize){this._size();this._position();}if(this.uiDialog.is(":data(ui-resizable)")){this.uiDialog.resizable("option",resizableOptions);}},_setOption:function(key,value){var isDraggable,isResizable,uiDialog=this.uiDialog;if(key==="disabled"){return;}this._super(key,value);if(key==="appendTo"){this.uiDialog.appendTo(this._appendTo());}if(key==="buttons"){this._createButtons();}if(key==="closeText"){this.uiDialogTitlebarClose.button({label:$("<a>").text(""+this.options.closeText).html()});}if(key==="draggable"){isDraggable=uiDialog.is(":data(ui-draggable)");if(isDraggable&&!value){uiDialog.draggable("destroy");}if(!isDraggable&&value){this._makeDraggable();}}if(key==="position"){this._position();}if(key==="resizable"){isResizable=uiDialog.is(":data(ui-resizable)");if(isResizable&&!value){uiDialog.resizable("destroy");}if(isResizable&&typeof value==="string"){uiDialog.resizable("option","handles",value);}if(!isResizable&&value!==false){this._makeResizable();}}if(key==="title"){this._title(this.uiDialogTitlebar.find(".ui-dialog-title"));}},_size:function(){var nonContentHeight,minContentHeight,maxContentHeight,options=this.options;this.element.show().css({width:"auto",minHeight:0,maxHeight:"none",height:0});if(options.minWidth>options.width){options.width=options.minWidth;}nonContentHeight=this.uiDialog.css({height:"auto",width:options.width}).outerHeight();minContentHeight=Math.max(0,options.minHeight-nonContentHeight);maxContentHeight=typeof options.maxHeight==="number"?Math.max(0,options.maxHeight-nonContentHeight):"none";if(options.height==="auto"){this.element.css({minHeight:minContentHeight,maxHeight:maxContentHeight,height:"auto"});}else{this.element.height(Math.max(0,options.height-nonContentHeight));}if(this.uiDialog.is(":data(ui-resizable)")){this.uiDialog.resizable("option","minHeight",this._minHeight());}},_blockFrames:function(){this.iframeBlocks=this.document.find("iframe").map(function(){var iframe=$(this);return $("<div>").css({position:"absolute",width:iframe.outerWidth(),height:iframe.outerHeight()}).appendTo(iframe.parent()).offset(iframe.offset())[0];});},_unblockFrames:function(){if(this.iframeBlocks){this.iframeBlocks.remove();delete this.iframeBlocks;}},_allowInteraction:function(event){if($(event.target).closest(".ui-dialog").length){return true;}return!!$(event.target).closest(".ui-datepicker").length;},_createOverlay:function(){if(!this.options.modal){return;}var isOpening=true;this._delay(function(){isOpening=false;});if(!this.document.data("ui-dialog-overlays")){this._on(this.document,{focusin:function(event){if(isOpening){return;}if(!this._allowInteraction(event)){event.preventDefault();this._trackingInstances()[0]._focusTabbable();}}});}this.overlay=$("<div>").appendTo(this._appendTo());this._addClass(this.overlay,null,"ui-widget-overlay ui-front");this._on(this.overlay,{mousedown:"_keepFocus"});this.document.data("ui-dialog-overlays",(this.document.data("ui-dialog-overlays")||0)+1);},_destroyOverlay:function(){if(!this.options.modal){return;}if(this.overlay){var overlays=this.document.data("ui-dialog-overlays")-1;if(!overlays){this._off(this.document,"focusin");this.document.removeData("ui-dialog-overlays");}else{this.document.data("ui-dialog-overlays",overlays);}this.overlay.remove();this.overlay=null;}}});if($.uiBackCompat!==false){$.widget("ui.dialog",$.ui.dialog,{options:{dialogClass:""},_createWrapper:function(){this._super();this.uiDialog.addClass(this.options.dialogClass);},_setOption:function(key,value){if(key==="dialogClass"){this.uiDialog.removeClass(this.options.dialogClass).addClass(value);}this._superApply(arguments);}});}var widgetsDialog=$.ui.dialog;var widgetsProgressbar=$.widget("ui.progressbar",{version:"1.12.1",options:{classes:{"ui-progressbar":"ui-corner-all","ui-progressbar-value":"ui-corner-left","ui-progressbar-complete":"ui-corner-right"},max:100,value:0,change:null,complete:null},min:0,_create:function(){this.oldValue=this.options.value=this._constrainedValue();this.element.attr({role:"progressbar","aria-valuemin":this.min});this._addClass("ui-progressbar","ui-widget ui-widget-content");this.valueDiv=$("<div>").appendTo(this.element);this._addClass(this.valueDiv,"ui-progressbar-value","ui-widget-header");this._refreshValue();},_destroy:function(){this.element.removeAttr("role aria-valuemin aria-valuemax aria-valuenow");this.valueDiv.remove();},value:function(newValue){if(newValue===undefined){return this.options.value;}this.options.value=this._constrainedValue(newValue);this._refreshValue();},_constrainedValue:function(newValue){if(newValue===undefined){newValue=this.options.value;}this.indeterminate=newValue===false;if(typeof newValue!=="number"){newValue=0;}return this.indeterminate?false:Math.min(this.options.max,Math.max(this.min,newValue));},_setOptions:function(options){var value=options.value;delete options.value;this._super(options);this.options.value=this._constrainedValue(value);this._refreshValue();},_setOption:function(key,value){if(key==="max"){value=Math.max(this.min,value);}this._super(key,value);},_setOptionDisabled:function(value){this._super(value);this.element.attr("aria-disabled",value);this._toggleClass(null,"ui-state-disabled",!!value);},_percentage:function(){return this.indeterminate?100:100*(this.options.value-this.min)/(this.options.max-this.min);},_refreshValue:function(){var value=this.options.value,percentage=this._percentage();this.valueDiv.toggle(this.indeterminate||value>this.min).width(percentage.toFixed(0)+"%");this._toggleClass(this.valueDiv,"ui-progressbar-complete",null,value===this.options.max)._toggleClass("ui-progressbar-indeterminate",null,this.indeterminate);if(this.indeterminate){this.element.removeAttr("aria-valuenow");if(!this.overlayDiv){this.overlayDiv=$("<div>").appendTo(this.valueDiv);this._addClass(this.overlayDiv,"ui-progressbar-overlay");}}else{this.element.attr({"aria-valuemax":this.options.max,"aria-valuenow":value});if(this.overlayDiv){this.overlayDiv.remove();this.overlayDiv=null;}}if(this.oldValue!==value){this.oldValue=value;this._trigger("change");}if(value===this.options.max){this._trigger("complete");}}});var widgetsSelectmenu=$.widget("ui.selectmenu",[$.ui.formResetMixin,{version:"1.12.1",defaultElement:"<select>",options:{appendTo:null,classes:{"ui-selectmenu-button-open":"ui-corner-top","ui-selectmenu-button-closed":"ui-corner-all"},disabled:null,icons:{button:"ui-icon-triangle-1-s"},position:{my:"left top",at:"left bottom",collision:"none"},width:false,change:null,close:null,focus:null,open:null,select:null},_create:function(){var selectmenuId=this.element.uniqueId().attr("id");this.ids={element:selectmenuId,button:selectmenuId+"-button",menu:selectmenuId+"-menu"};this._drawButton();this._drawMenu();this._bindFormResetHandler();this._rendered=false;this.menuItems=$();},_drawButton:function(){var icon,that=this,item=this._parseOption(this.element.find("option:selected"),this.element[0].selectedIndex);this.labels=this.element.labels().attr("for",this.ids.button);this._on(this.labels,{click:function(event){this.button.focus();event.preventDefault();}});this.element.hide();this.button=$("<span>",{tabindex:this.options.disabled?-1:0,id:this.ids.button,role:"combobox","aria-expanded":"false","aria-autocomplete":"list","aria-owns":this.ids.menu,"aria-haspopup":"true",title:this.element.attr("title")}).insertAfter(this.element);this._addClass(this.button,"ui-selectmenu-button ui-selectmenu-button-closed","ui-button ui-widget");icon=$("<span>").appendTo(this.button);this._addClass(icon,"ui-selectmenu-icon","ui-icon "+this.options.icons.button);this.buttonItem=this._renderButtonItem(item).appendTo(this.button);if(this.options.width!==false){this._resizeButton();}this._on(this.button,this._buttonEvents);this.button.one("focusin",function(){if(!that._rendered){that._refreshMenu();}});},_drawMenu:function(){var that=this;this.menu=$("<ul>",{"aria-hidden":"true","aria-labelledby":this.ids.button,id:this.ids.menu});this.menuWrap=$("<div>").append(this.menu);this._addClass(this.menuWrap,"ui-selectmenu-menu","ui-front");this.menuWrap.appendTo(this._appendTo());this.menuInstance=this.menu.menu({classes:{"ui-menu":"ui-corner-bottom"},role:"listbox",select:function(event,ui){event.preventDefault();that._setSelection();that._select(ui.item.data("ui-selectmenu-item"),event);},focus:function(event,ui){var item=ui.item.data("ui-selectmenu-item");if(that.focusIndex!=null&&item.index!==that.focusIndex){that._trigger("focus",event,{item:item});if(!that.isOpen){that._select(item,event);}}that.focusIndex=item.index;that.button.attr("aria-activedescendant",that.menuItems.eq(item.index).attr("id"));}}).menu("instance");this.menuInstance._off(this.menu,"mouseleave");this.menuInstance._closeOnDocumentClick=function(){return false;};this.menuInstance._isDivider=function(){return false;};},refresh:function(){this._refreshMenu();this.buttonItem.replaceWith(this.buttonItem=this._renderButtonItem(this._getSelectedItem().data("ui-selectmenu-item")||{}));if(this.options.width===null){this._resizeButton();}},_refreshMenu:function(){var item,options=this.element.find("option");this.menu.empty();this._parseOptions(options);this._renderMenu(this.menu,this.items);this.menuInstance.refresh();this.menuItems=this.menu.find("li").not(".ui-selectmenu-optgroup").find(".ui-menu-item-wrapper");this._rendered=true;if(!options.length){return;}item=this._getSelectedItem();this.menuInstance.focus(null,item);this._setAria(item.data("ui-selectmenu-item"));this._setOption("disabled",this.element.prop("disabled"));},open:function(event){if(this.options.disabled){return;}if(!this._rendered){this._refreshMenu();}else{this._removeClass(this.menu.find(".ui-state-active"),null,"ui-state-active");this.menuInstance.focus(null,this._getSelectedItem());}if(!this.menuItems.length){return;}this.isOpen=true;this._toggleAttr();this._resizeMenu();this._position();this._on(this.document,this._documentClick);this._trigger("open",event);},_position:function(){this.menuWrap.position($.extend({of:this.button},this.options.position));},close:function(event){if(!this.isOpen){return;}this.isOpen=false;this._toggleAttr();this.range=null;this._off(this.document);this._trigger("close",event);},widget:function(){return this.button;},menuWidget:function(){return this.menu;},_renderButtonItem:function(item){var buttonItem=$("<span>");this._setText(buttonItem,item.label);this._addClass(buttonItem,"ui-selectmenu-text");return buttonItem;},_renderMenu:function(ul,items){var that=this,currentOptgroup="";$.each(items,function(index,item){var li;if(item.optgroup!==currentOptgroup){li=$("<li>",{text:item.optgroup});that._addClass(li,"ui-selectmenu-optgroup","ui-menu-divider"+(item.element.parent("optgroup").prop("disabled")?" ui-state-disabled":""));li.appendTo(ul);currentOptgroup=item.optgroup;}that._renderItemData(ul,item);});},_renderItemData:function(ul,item){return this._renderItem(ul,item).data("ui-selectmenu-item",item);},_renderItem:function(ul,item){var li=$("<li>"),wrapper=$("<div>",{title:item.element.attr("title")});if(item.disabled){this._addClass(li,null,"ui-state-disabled");}this._setText(wrapper,item.label);return li.append(wrapper).appendTo(ul);},_setText:function(element,value){if(value){element.text(value);}else{element.html("&#160;");}},_move:function(direction,event){var item,next,filter=".ui-menu-item";if(this.isOpen){item=this.menuItems.eq(this.focusIndex).parent("li");}else{item=this.menuItems.eq(this.element[0].selectedIndex).parent("li");filter+=":not(.ui-state-disabled)";}if(direction==="first"||direction==="last"){next=item[direction==="first"?"prevAll":"nextAll"](filter).eq(-1);}else{next=item[direction+"All"](filter).eq(0);}if(next.length){this.menuInstance.focus(event,next);}},_getSelectedItem:function(){return this.menuItems.eq(this.element[0].selectedIndex).parent("li");},_toggle:function(event){this[this.isOpen?"close":"open"](event);},_setSelection:function(){var selection;if(!this.range){return;}if(window.getSelection){selection=window.getSelection();selection.removeAllRanges();selection.addRange(this.range);}else{this.range.select();}this.button.focus();},_documentClick:{mousedown:function(event){if(!this.isOpen){return;}if(!$(event.target).closest(".ui-selectmenu-menu, #"+$.ui.escapeSelector(this.ids.button)).length){this.close(event);}}},_buttonEvents:{mousedown:function(){var selection;if(window.getSelection){selection=window.getSelection();if(selection.rangeCount){this.range=selection.getRangeAt(0);}}else{this.range=document.selection.createRange();}},click:function(event){this._setSelection();this._toggle(event);},keydown:function(event){var preventDefault=true;switch(event.keyCode){case $.ui.keyCode.TAB:case $.ui.keyCode.ESCAPE:this.close(event);preventDefault=false;break;case $.ui.keyCode.ENTER:if(this.isOpen){this._selectFocusedItem(event);}break;case $.ui.keyCode.UP:if(event.altKey){this._toggle(event);}else{this._move("prev",event);}break;case $.ui.keyCode.DOWN:if(event.altKey){this._toggle(event);}else{this._move("next",event);}break;case $.ui.keyCode.SPACE:if(this.isOpen){this._selectFocusedItem(event);}else{this._toggle(event);}break;case $.ui.keyCode.LEFT:this._move("prev",event);break;case $.ui.keyCode.RIGHT:this._move("next",event);break;case $.ui.keyCode.HOME:case $.ui.keyCode.PAGE_UP:this._move("first",event);break;case $.ui.keyCode.END:case $.ui.keyCode.PAGE_DOWN:this._move("last",event);break;default:this.menu.trigger(event);preventDefault=false;}if(preventDefault){event.preventDefault();}}},_selectFocusedItem:function(event){var item=this.menuItems.eq(this.focusIndex).parent("li");if(!item.hasClass("ui-state-disabled")){this._select(item.data("ui-selectmenu-item"),event);}},_select:function(item,event){var oldIndex=this.element[0].selectedIndex;this.element[0].selectedIndex=item.index;this.buttonItem.replaceWith(this.buttonItem=this._renderButtonItem(item));this._setAria(item);this._trigger("select",event,{item:item});if(item.index!==oldIndex){this._trigger("change",event,{item:item});}this.close(event);},_setAria:function(item){var id=this.menuItems.eq(item.index).attr("id");this.button.attr({"aria-labelledby":id,"aria-activedescendant":id});this.menu.attr("aria-activedescendant",id);},_setOption:function(key,value){if(key==="icons"){var icon=this.button.find("span.ui-icon");this._removeClass(icon,null,this.options.icons.button)._addClass(icon,null,value.button);}this._super(key,value);if(key==="appendTo"){this.menuWrap.appendTo(this._appendTo());}if(key==="width"){this._resizeButton();}},_setOptionDisabled:function(value){this._super(value);this.menuInstance.option("disabled",value);this.button.attr("aria-disabled",value);this._toggleClass(this.button,null,"ui-state-disabled",value);this.element.prop("disabled",value);if(value){this.button.attr("tabindex",-1);this.close();}else{this.button.attr("tabindex",0);}},_appendTo:function(){var element=this.options.appendTo;if(element){element=element.jquery||element.nodeType?$(element):this.document.find(element).eq(0);}if(!element||!element[0]){element=this.element.closest(".ui-front, dialog");}if(!element.length){element=this.document[0].body;}return element;},_toggleAttr:function(){this.button.attr("aria-expanded",this.isOpen);this._removeClass(this.button,"ui-selectmenu-button-"+(this.isOpen?"closed":"open"))._addClass(this.button,"ui-selectmenu-button-"+(this.isOpen?"open":"closed"))._toggleClass(this.menuWrap,"ui-selectmenu-open",null,this.isOpen);this.menu.attr("aria-hidden",!this.isOpen);},_resizeButton:function(){var width=this.options.width;if(width===false){this.button.css("width","");return;}if(width===null){width=this.element.show().outerWidth();this.element.hide();}this.button.outerWidth(width);},_resizeMenu:function(){this.menu.outerWidth(Math.max(this.button.outerWidth(),this.menu.width("").outerWidth()+1));},_getCreateOptions:function(){var options=this._super();options.disabled=this.element.prop("disabled");return options;},_parseOptions:function(options){var that=this,data=[];options.each(function(index,item){data.push(that._parseOption($(item),index));});this.items=data;},_parseOption:function(option,index){var optgroup=option.parent("optgroup");return{element:option,index:index,value:option.val(),label:option.text(),optgroup:optgroup.attr("label")||"",disabled:optgroup.prop("disabled")||option.prop("disabled")};},_destroy:function(){this._unbindFormResetHandler();this.menuWrap.remove();this.button.remove();this.element.show();this.element.removeUniqueId();this.labels.attr("for",this.ids.element);}}]);var widgetsSlider=$.widget("ui.slider",$.ui.mouse,{version:"1.12.1",widgetEventPrefix:"slide",options:{animate:false,classes:{"ui-slider":"ui-corner-all","ui-slider-handle":"ui-corner-all","ui-slider-range":"ui-corner-all ui-widget-header"},distance:0,max:100,min:0,orientation:"horizontal",range:false,step:1,value:0,values:null,change:null,slide:null,start:null,stop:null},numPages:5,_create:function(){this._keySliding=false;this._mouseSliding=false;this._animateOff=true;this._handleIndex=null;this._detectOrientation();this._mouseInit();this._calculateNewMax();this._addClass("ui-slider ui-slider-"+this.orientation,"ui-widget ui-widget-content");this._refresh();this._animateOff=false;},_refresh:function(){this._createRange();this._createHandles();this._setupEvents();this._refreshValue();},_createHandles:function(){var i,handleCount,options=this.options,existingHandles=this.element.find(".ui-slider-handle"),handle="<span tabindex='0'></span>",handles=[];handleCount=(options.values&&options.values.length)||1;if(existingHandles.length>handleCount){existingHandles.slice(handleCount).remove();existingHandles=existingHandles.slice(0,handleCount);}for(i=existingHandles.length;i<handleCount;i++){handles.push(handle);}this.handles=existingHandles.add($(handles.join("")).appendTo(this.element));this._addClass(this.handles,"ui-slider-handle","ui-state-default");this.handle=this.handles.eq(0);this.handles.each(function(i){$(this).data("ui-slider-handle-index",i).attr("tabIndex",0);});},_createRange:function(){var options=this.options;if(options.range){if(options.range===true){if(!options.values){options.values=[this._valueMin(),this._valueMin()];}else if(options.values.length&&options.values.length!==2){options.values=[options.values[0],options.values[0]];}else if($.isArray(options.values)){options.values=options.values.slice(0);}}if(!this.range||!this.range.length){this.range=$("<div>").appendTo(this.element);this._addClass(this.range,"ui-slider-range");}else{this._removeClass(this.range,"ui-slider-range-min ui-slider-range-max");this.range.css({"left":"","bottom":""});}if(options.range==="min"||options.range==="max"){this._addClass(this.range,"ui-slider-range-"+options.range);}}else{if(this.range){this.range.remove();}this.range=null;}},_setupEvents:function(){this._off(this.handles);this._on(this.handles,this._handleEvents);this._hoverable(this.handles);this._focusable(this.handles);},_destroy:function(){this.handles.remove();if(this.range){this.range.remove();}this._mouseDestroy();},_mouseCapture:function(event){var position,normValue,distance,closestHandle,index,allowed,offset,mouseOverHandle,that=this,o=this.options;if(o.disabled){return false;}this.elementSize={width:this.element.outerWidth(),height:this.element.outerHeight()};this.elementOffset=this.element.offset();position={x:event.pageX,y:event.pageY};normValue=this._normValueFromMouse(position);distance=this._valueMax()-this._valueMin()+1;this.handles.each(function(i){var thisDistance=Math.abs(normValue-that.values(i));if((distance>thisDistance)||(distance===thisDistance&&(i===that._lastChangedValue||that.values(i)===o.min))){distance=thisDistance;closestHandle=$(this);index=i;}});allowed=this._start(event,index);if(allowed===false){return false;}this._mouseSliding=true;this._handleIndex=index;this._addClass(closestHandle,null,"ui-state-active");closestHandle.trigger("focus");offset=closestHandle.offset();mouseOverHandle=!$(event.target).parents().addBack().is(".ui-slider-handle");this._clickOffset=mouseOverHandle?{left:0,top:0}:{left:event.pageX-offset.left-(closestHandle.width()/2),top:event.pageY-offset.top-(closestHandle.height()/2)-(parseInt(closestHandle.css("borderTopWidth"),10)||0)-(parseInt(closestHandle.css("borderBottomWidth"),10)||0)+(parseInt(closestHandle.css("marginTop"),10)||0)};if(!this.handles.hasClass("ui-state-hover")){this._slide(event,index,normValue);}this._animateOff=true;return true;},_mouseStart:function(){return true;},_mouseDrag:function(event){var position={x:event.pageX,y:event.pageY},normValue=this._normValueFromMouse(position);this._slide(event,this._handleIndex,normValue);return false;},_mouseStop:function(event){this._removeClass(this.handles,null,"ui-state-active");this._mouseSliding=false;this._stop(event,this._handleIndex);this._change(event,this._handleIndex);this._handleIndex=null;this._clickOffset=null;this._animateOff=false;return false;},_detectOrientation:function(){this.orientation=(this.options.orientation==="vertical")?"vertical":"horizontal";},_normValueFromMouse:function(position){var pixelTotal,pixelMouse,percentMouse,valueTotal,valueMouse;if(this.orientation==="horizontal"){pixelTotal=this.elementSize.width;pixelMouse=position.x-this.elementOffset.left-(this._clickOffset?this._clickOffset.left:0);}else{pixelTotal=this.elementSize.height;pixelMouse=position.y-this.elementOffset.top-(this._clickOffset?this._clickOffset.top:0);}percentMouse=(pixelMouse/pixelTotal);if(percentMouse>1){percentMouse=1;}if(percentMouse<0){percentMouse=0;}if(this.orientation==="vertical"){percentMouse=1-percentMouse;}valueTotal=this._valueMax()-this._valueMin();valueMouse=this._valueMin()+percentMouse*valueTotal;return this._trimAlignValue(valueMouse);},_uiHash:function(index,value,values){var uiHash={handle:this.handles[index],handleIndex:index,value:value!==undefined?value:this.value()};if(this._hasMultipleValues()){uiHash.value=value!==undefined?value:this.values(index);uiHash.values=values||this.values();}return uiHash;},_hasMultipleValues:function(){return this.options.values&&this.options.values.length;},_start:function(event,index){return this._trigger("start",event,this._uiHash(index));},_slide:function(event,index,newVal){var allowed,otherVal,currentValue=this.value(),newValues=this.values();if(this._hasMultipleValues()){otherVal=this.values(index?0:1);currentValue=this.values(index);if(this.options.values.length===2&&this.options.range===true){newVal=index===0?Math.min(otherVal,newVal):Math.max(otherVal,newVal);}newValues[index]=newVal;}if(newVal===currentValue){return;}allowed=this._trigger("slide",event,this._uiHash(index,newVal,newValues));if(allowed===false){return;}if(this._hasMultipleValues()){this.values(index,newVal);}else{this.value(newVal);}},_stop:function(event,index){this._trigger("stop",event,this._uiHash(index));},_change:function(event,index){if(!this._keySliding&&!this._mouseSliding){this._lastChangedValue=index;this._trigger("change",event,this._uiHash(index));}},value:function(newValue){if(arguments.length){this.options.value=this._trimAlignValue(newValue);this._refreshValue();this._change(null,0);return;}return this._value();},values:function(index,newValue){var vals,newValues,i;if(arguments.length>1){this.options.values[index]=this._trimAlignValue(newValue);this._refreshValue();this._change(null,index);return;}if(arguments.length){if($.isArray(arguments[0])){vals=this.options.values;newValues=arguments[0];for(i=0;i<vals.length;i+=1){vals[i]=this._trimAlignValue(newValues[i]);this._change(null,i);}this._refreshValue();}else{if(this._hasMultipleValues()){return this._values(index);}else{return this.value();}}}else{return this._values();}},_setOption:function(key,value){var i,valsLength=0;if(key==="range"&&this.options.range===true){if(value==="min"){this.options.value=this._values(0);this.options.values=null;}else if(value==="max"){this.options.value=this._values(this.options.values.length-1);this.options.values=null;}}if($.isArray(this.options.values)){valsLength=this.options.values.length;}this._super(key,value);switch(key){case"orientation":this._detectOrientation();this._removeClass("ui-slider-horizontal ui-slider-vertical")._addClass("ui-slider-"+this.orientation);this._refreshValue();if(this.options.range){this._refreshRange(value);}this.handles.css(value==="horizontal"?"bottom":"left","");break;case"value":this._animateOff=true;this._refreshValue();this._change(null,0);this._animateOff=false;break;case"values":this._animateOff=true;this._refreshValue();for(i=valsLength-1;i>=0;i--){this._change(null,i);}this._animateOff=false;break;case"step":case"min":case"max":this._animateOff=true;this._calculateNewMax();this._refreshValue();this._animateOff=false;break;case"range":this._animateOff=true;this._refresh();this._animateOff=false;break;}},_setOptionDisabled:function(value){this._super(value);this._toggleClass(null,"ui-state-disabled",!!value);},_value:function(){var val=this.options.value;val=this._trimAlignValue(val);return val;},_values:function(index){var val,vals,i;if(arguments.length){val=this.options.values[index];val=this._trimAlignValue(val);return val;}else if(this._hasMultipleValues()){vals=this.options.values.slice();for(i=0;i<vals.length;i+=1){vals[i]=this._trimAlignValue(vals[i]);}return vals;}else{return[];}},_trimAlignValue:function(val){if(val<=this._valueMin()){return this._valueMin();}if(val>=this._valueMax()){return this._valueMax();}var step=(this.options.step>0)?this.options.step:1,valModStep=(val-this._valueMin())%step,alignValue=val-valModStep;if(Math.abs(valModStep)*2>=step){alignValue+=(valModStep>0)?step:(-step);}return parseFloat(alignValue.toFixed(5));},_calculateNewMax:function(){var max=this.options.max,min=this._valueMin(),step=this.options.step,aboveMin=Math.round((max-min)/step)*step;max=aboveMin+min;if(max>this.options.max){max-=step;}this.max=parseFloat(max.toFixed(this._precision()));},_precision:function(){var precision=this._precisionOf(this.options.step);if(this.options.min!==null){precision=Math.max(precision,this._precisionOf(this.options.min));}return precision;},_precisionOf:function(num){var str=num.toString(),decimal=str.indexOf(".");return decimal===-1?0:str.length-decimal-1;},_valueMin:function(){return this.options.min;},_valueMax:function(){return this.max;},_refreshRange:function(orientation){if(orientation==="vertical"){this.range.css({"width":"","left":""});}if(orientation==="horizontal"){this.range.css({"height":"","bottom":""});}},_refreshValue:function(){var lastValPercent,valPercent,value,valueMin,valueMax,oRange=this.options.range,o=this.options,that=this,animate=(!this._animateOff)?o.animate:false,_set={};if(this._hasMultipleValues()){this.handles.each(function(i){valPercent=(that.values(i)-that._valueMin())/(that._valueMax()-that._valueMin())*100;_set[that.orientation==="horizontal"?"left":"bottom"]=valPercent+"%";$(this).stop(1,1)[animate?"animate":"css"](_set,o.animate);if(that.options.range===true){if(that.orientation==="horizontal"){if(i===0){that.range.stop(1,1)[animate?"animate":"css"]({left:valPercent+"%"},o.animate);}if(i===1){that.range[animate?"animate":"css"]({width:(valPercent-lastValPercent)+"%"},{queue:false,duration:o.animate});}}else{if(i===0){that.range.stop(1,1)[animate?"animate":"css"]({bottom:(valPercent)+"%"},o.animate);}if(i===1){that.range[animate?"animate":"css"]({height:(valPercent-lastValPercent)+"%"},{queue:false,duration:o.animate});}}}lastValPercent=valPercent;});}else{value=this.value();valueMin=this._valueMin();valueMax=this._valueMax();valPercent=(valueMax!==valueMin)?(value-valueMin)/(valueMax-valueMin)*100:0;_set[this.orientation==="horizontal"?"left":"bottom"]=valPercent+"%";this.handle.stop(1,1)[animate?"animate":"css"](_set,o.animate);if(oRange==="min"&&this.orientation==="horizontal"){this.range.stop(1,1)[animate?"animate":"css"]({width:valPercent+"%"},o.animate);}if(oRange==="max"&&this.orientation==="horizontal"){this.range.stop(1,1)[animate?"animate":"css"]({width:(100-valPercent)+"%"},o.animate);}if(oRange==="min"&&this.orientation==="vertical"){this.range.stop(1,1)[animate?"animate":"css"]({height:valPercent+"%"},o.animate);}if(oRange==="max"&&this.orientation==="vertical"){this.range.stop(1,1)[animate?"animate":"css"]({height:(100-valPercent)+"%"},o.animate);}}},_handleEvents:{keydown:function(event){var allowed,curVal,newVal,step,index=$(event.target).data("ui-slider-handle-index");switch(event.keyCode){case $.ui.keyCode.HOME:case $.ui.keyCode.END:case $.ui.keyCode.PAGE_UP:case $.ui.keyCode.PAGE_DOWN:case $.ui.keyCode.UP:case $.ui.keyCode.RIGHT:case $.ui.keyCode.DOWN:case $.ui.keyCode.LEFT:event.preventDefault();if(!this._keySliding){this._keySliding=true;this._addClass($(event.target),null,"ui-state-active");allowed=this._start(event,index);if(allowed===false){return;}}break;}step=this.options.step;if(this._hasMultipleValues()){curVal=newVal=this.values(index);}else{curVal=newVal=this.value();}switch(event.keyCode){case $.ui.keyCode.HOME:newVal=this._valueMin();break;case $.ui.keyCode.END:newVal=this._valueMax();break;case $.ui.keyCode.PAGE_UP:newVal=this._trimAlignValue(curVal+((this._valueMax()-this._valueMin())/this.numPages));break;case $.ui.keyCode.PAGE_DOWN:newVal=this._trimAlignValue(curVal-((this._valueMax()-this._valueMin())/this.numPages));break;case $.ui.keyCode.UP:case $.ui.keyCode.RIGHT:if(curVal===this._valueMax()){return;}newVal=this._trimAlignValue(curVal+step);break;case $.ui.keyCode.DOWN:case $.ui.keyCode.LEFT:if(curVal===this._valueMin()){return;}newVal=this._trimAlignValue(curVal-step);break;}this._slide(event,index,newVal);},keyup:function(event){var index=$(event.target).data("ui-slider-handle-index");if(this._keySliding){this._keySliding=false;this._stop(event,index);this._change(event,index);this._removeClass($(event.target),null,"ui-state-active");}}}});function spinnerModifer(fn){return function(){var previous=this.element.val();fn.apply(this,arguments);this._refresh();if(previous!==this.element.val()){this._trigger("change");}};}$.widget("ui.spinner",{version:"1.12.1",defaultElement:"<input>",widgetEventPrefix:"spin",options:{classes:{"ui-spinner":"ui-corner-all","ui-spinner-down":"ui-corner-br","ui-spinner-up":"ui-corner-tr"},culture:null,icons:{down:"ui-icon-triangle-1-s",up:"ui-icon-triangle-1-n"},incremental:true,max:null,min:null,numberFormat:null,page:10,step:1,change:null,spin:null,start:null,stop:null},_create:function(){this._setOption("max",this.options.max);this._setOption("min",this.options.min);this._setOption("step",this.options.step);if(this.value()!==""){this._value(this.element.val(),true);}this._draw();this._on(this._events);this._refresh();this._on(this.window,{beforeunload:function(){this.element.removeAttr("autocomplete");}});},_getCreateOptions:function(){var options=this._super();var element=this.element;$.each(["min","max","step"],function(i,option){var value=element.attr(option);if(value!=null&&value.length){options[option]=value;}});return options;},_events:{keydown:function(event){if(this._start(event)&&this._keydown(event)){event.preventDefault();}},keyup:"_stop",focus:function(){this.previous=this.element.val();},blur:function(event){if(this.cancelBlur){delete this.cancelBlur;return;}this._stop();this._refresh();if(this.previous!==this.element.val()){this._trigger("change",event);}},mousewheel:function(event,delta){if(!delta){return;}if(!this.spinning&&!this._start(event)){return false;}this._spin((delta>0?1:-1)*this.options.step,event);clearTimeout(this.mousewheelTimer);this.mousewheelTimer=this._delay(function(){if(this.spinning){this._stop(event);}},100);event.preventDefault();},"mousedown .ui-spinner-button":function(event){var previous;previous=this.element[0]===$.ui.safeActiveElement(this.document[0])?this.previous:this.element.val();function checkFocus(){var isActive=this.element[0]===$.ui.safeActiveElement(this.document[0]);if(!isActive){this.element.trigger("focus");this.previous=previous;this._delay(function(){this.previous=previous;});}}event.preventDefault();checkFocus.call(this);this.cancelBlur=true;this._delay(function(){delete this.cancelBlur;checkFocus.call(this);});if(this._start(event)===false){return;}this._repeat(null,$(event.currentTarget).hasClass("ui-spinner-up")?1:-1,event);},"mouseup .ui-spinner-button":"_stop","mouseenter .ui-spinner-button":function(event){if(!$(event.currentTarget).hasClass("ui-state-active")){return;}if(this._start(event)===false){return false;}this._repeat(null,$(event.currentTarget).hasClass("ui-spinner-up")?1:-1,event);},"mouseleave .ui-spinner-button":"_stop"},_enhance:function(){this.uiSpinner=this.element.attr("autocomplete","off").wrap("<span>").parent().append("<a></a><a></a>");},_draw:function(){this._enhance();this._addClass(this.uiSpinner,"ui-spinner","ui-widget ui-widget-content");this._addClass("ui-spinner-input");this.element.attr("role","spinbutton");this.buttons=this.uiSpinner.children("a").attr("tabIndex",-1).attr("aria-hidden",true).button({classes:{"ui-button":""}});this._removeClass(this.buttons,"ui-corner-all");this._addClass(this.buttons.first(),"ui-spinner-button ui-spinner-up");this._addClass(this.buttons.last(),"ui-spinner-button ui-spinner-down");this.buttons.first().button({"icon":this.options.icons.up,"showLabel":false});this.buttons.last().button({"icon":this.options.icons.down,"showLabel":false});if(this.buttons.height()>Math.ceil(this.uiSpinner.height()*0.5)&&this.uiSpinner.height()>0){this.uiSpinner.height(this.uiSpinner.height());}},_keydown:function(event){var options=this.options,keyCode=$.ui.keyCode;switch(event.keyCode){case keyCode.UP:this._repeat(null,1,event);return true;case keyCode.DOWN:this._repeat(null,-1,event);return true;case keyCode.PAGE_UP:this._repeat(null,options.page,event);return true;case keyCode.PAGE_DOWN:this._repeat(null,-options.page,event);return true;}return false;},_start:function(event){if(!this.spinning&&this._trigger("start",event)===false){return false;}if(!this.counter){this.counter=1;}this.spinning=true;return true;},_repeat:function(i,steps,event){i=i||500;clearTimeout(this.timer);this.timer=this._delay(function(){this._repeat(40,steps,event);},i);this._spin(steps*this.options.step,event);},_spin:function(step,event){var value=this.value()||0;if(!this.counter){this.counter=1;}value=this._adjustValue(value+step*this._increment(this.counter));if(!this.spinning||this._trigger("spin",event,{value:value})!==false){this._value(value);this.counter++;}},_increment:function(i){var incremental=this.options.incremental;if(incremental){return $.isFunction(incremental)?incremental(i):Math.floor(i*i*i/50000-i*i/500+17*i/200+1);}return 1;},_precision:function(){var precision=this._precisionOf(this.options.step);if(this.options.min!==null){precision=Math.max(precision,this._precisionOf(this.options.min));}return precision;},_precisionOf:function(num){var str=num.toString(),decimal=str.indexOf(".");return decimal===-1?0:str.length-decimal-1;},_adjustValue:function(value){var base,aboveMin,options=this.options;base=options.min!==null?options.min:0;aboveMin=value-base;aboveMin=Math.round(aboveMin/options.step)*options.step;value=base+aboveMin;value=parseFloat(value.toFixed(this._precision()));if(options.max!==null&&value>options.max){return options.max;}if(options.min!==null&&value<options.min){return options.min;}return value;},_stop:function(event){if(!this.spinning){return;}clearTimeout(this.timer);clearTimeout(this.mousewheelTimer);this.counter=0;this.spinning=false;this._trigger("stop",event);},_setOption:function(key,value){var prevValue,first,last;if(key==="culture"||key==="numberFormat"){prevValue=this._parse(this.element.val());this.options[key]=value;this.element.val(this._format(prevValue));return;}if(key==="max"||key==="min"||key==="step"){if(typeof value==="string"){value=this._parse(value);}}if(key==="icons"){first=this.buttons.first().find(".ui-icon");this._removeClass(first,null,this.options.icons.up);this._addClass(first,null,value.up);last=this.buttons.last().find(".ui-icon");this._removeClass(last,null,this.options.icons.down);this._addClass(last,null,value.down);}this._super(key,value);},_setOptionDisabled:function(value){this._super(value);this._toggleClass(this.uiSpinner,null,"ui-state-disabled",!!value);this.element.prop("disabled",!!value);this.buttons.button(value?"disable":"enable");},_setOptions:spinnerModifer(function(options){this._super(options);}),_parse:function(val){if(typeof val==="string"&&val!==""){val=window.Globalize&&this.options.numberFormat?Globalize.parseFloat(val,10,this.options.culture):+val;}return val===""||isNaN(val)?null:val;},_format:function(value){if(value===""){return"";}return window.Globalize&&this.options.numberFormat?Globalize.format(value,this.options.numberFormat,this.options.culture):value;},_refresh:function(){this.element.attr({"aria-valuemin":this.options.min,"aria-valuemax":this.options.max,"aria-valuenow":this._parse(this.element.val())});},isValid:function(){var value=this.value();if(value===null){return false;}return value===this._adjustValue(value);},_value:function(value,allowAny){var parsed;if(value!==""){parsed=this._parse(value);if(parsed!==null){if(!allowAny){parsed=this._adjustValue(parsed);}value=this._format(parsed);}}this.element.val(value);this._refresh();},_destroy:function(){this.element.prop("disabled",false).removeAttr("autocomplete role aria-valuemin aria-valuemax aria-valuenow");this.uiSpinner.replaceWith(this.element);},stepUp:spinnerModifer(function(steps){this._stepUp(steps);}),_stepUp:function(steps){if(this._start()){this._spin((steps||1)*this.options.step);this._stop();}},stepDown:spinnerModifer(function(steps){this._stepDown(steps);}),_stepDown:function(steps){if(this._start()){this._spin((steps||1)*-this.options.step);this._stop();}},pageUp:spinnerModifer(function(pages){this._stepUp((pages||1)*this.options.page);}),pageDown:spinnerModifer(function(pages){this._stepDown((pages||1)*this.options.page);}),value:function(newVal){if(!arguments.length){return this._parse(this.element.val());}spinnerModifer(this._value).call(this,newVal);},widget:function(){return this.uiSpinner;}});if($.uiBackCompat!==false){$.widget("ui.spinner",$.ui.spinner,{_enhance:function(){this.uiSpinner=this.element.attr("autocomplete","off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml());},_uiSpinnerHtml:function(){return"<span>";},_buttonHtml:function(){return"<a></a><a></a>";}});}var widgetsSpinner=$.ui.spinner;$.widget("ui.tabs",{version:"1.12.1",delay:300,options:{active:null,classes:{"ui-tabs":"ui-corner-all","ui-tabs-nav":"ui-corner-all","ui-tabs-panel":"ui-corner-bottom","ui-tabs-tab":"ui-corner-top"},collapsible:false,event:"click",heightStyle:"content",hide:null,show:null,activate:null,beforeActivate:null,beforeLoad:null,load:null},_isLocal:(function(){var rhash=/#.*$/;return function(anchor){var anchorUrl,locationUrl;anchorUrl=anchor.href.replace(rhash,"");locationUrl=location.href.replace(rhash,"");try{anchorUrl=decodeURIComponent(anchorUrl);}catch(error){}try{locationUrl=decodeURIComponent(locationUrl);}catch(error){}return anchor.hash.length>1&&anchorUrl===locationUrl;};})(),_create:function(){var that=this,options=this.options;this.running=false;this._addClass("ui-tabs","ui-widget ui-widget-content");this._toggleClass("ui-tabs-collapsible",null,options.collapsible);this._processTabs();options.active=this._initialActive();if($.isArray(options.disabled)){options.disabled=$.unique(options.disabled.concat($.map(this.tabs.filter(".ui-state-disabled"),function(li){return that.tabs.index(li);}))).sort();}if(this.options.active!==false&&this.anchors.length){this.active=this._findActive(options.active);}else{this.active=$();}this._refresh();if(this.active.length){this.load(options.active);}},_initialActive:function(){var active=this.options.active,collapsible=this.options.collapsible,locationHash=location.hash.substring(1);if(active===null){if(locationHash){this.tabs.each(function(i,tab){if($(tab).attr("aria-controls")===locationHash){active=i;return false;}});}if(active===null){active=this.tabs.index(this.tabs.filter(".ui-tabs-active"));}if(active===null||active===-1){active=this.tabs.length?0:false;}}if(active!==false){active=this.tabs.index(this.tabs.eq(active));if(active===-1){active=collapsible?false:0;}}if(!collapsible&&active===false&&this.anchors.length){active=0;}return active;},_getCreateEventData:function(){return{tab:this.active,panel:!this.active.length?$():this._getPanelForTab(this.active)};},_tabKeydown:function(event){var focusedTab=$($.ui.safeActiveElement(this.document[0])).closest("li"),selectedIndex=this.tabs.index(focusedTab),goingForward=true;if(this._handlePageNav(event)){return;}switch(event.keyCode){case $.ui.keyCode.RIGHT:case $.ui.keyCode.DOWN:selectedIndex++;break;case $.ui.keyCode.UP:case $.ui.keyCode.LEFT:goingForward=false;selectedIndex--;break;case $.ui.keyCode.END:selectedIndex=this.anchors.length-1;break;case $.ui.keyCode.HOME:selectedIndex=0;break;case $.ui.keyCode.SPACE:event.preventDefault();clearTimeout(this.activating);this._activate(selectedIndex);return;case $.ui.keyCode.ENTER:event.preventDefault();clearTimeout(this.activating);this._activate(selectedIndex===this.options.active?false:selectedIndex);return;default:return;}event.preventDefault();clearTimeout(this.activating);selectedIndex=this._focusNextTab(selectedIndex,goingForward);if(!event.ctrlKey&&!event.metaKey){focusedTab.attr("aria-selected","false");this.tabs.eq(selectedIndex).attr("aria-selected","true");this.activating=this._delay(function(){this.option("active",selectedIndex);},this.delay);}},_panelKeydown:function(event){if(this._handlePageNav(event)){return;}if(event.ctrlKey&&event.keyCode===$.ui.keyCode.UP){event.preventDefault();this.active.trigger("focus");}},_handlePageNav:function(event){if(event.altKey&&event.keyCode===$.ui.keyCode.PAGE_UP){this._activate(this._focusNextTab(this.options.active-1,false));return true;}if(event.altKey&&event.keyCode===$.ui.keyCode.PAGE_DOWN){this._activate(this._focusNextTab(this.options.active+1,true));return true;}},_findNextTab:function(index,goingForward){var lastTabIndex=this.tabs.length-1;function constrain(){if(index>lastTabIndex){index=0;}if(index<0){index=lastTabIndex;}return index;}while($.inArray(constrain(),this.options.disabled)!==-1){index=goingForward?index+1:index-1;}return index;},_focusNextTab:function(index,goingForward){index=this._findNextTab(index,goingForward);this.tabs.eq(index).trigger("focus");return index;},_setOption:function(key,value){if(key==="active"){this._activate(value);return;}this._super(key,value);if(key==="collapsible"){this._toggleClass("ui-tabs-collapsible",null,value);if(!value&&this.options.active===false){this._activate(0);}}if(key==="event"){this._setupEvents(value);}if(key==="heightStyle"){this._setupHeightStyle(value);}},_sanitizeSelector:function(hash){return hash?hash.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g,"\\$&"):"";},refresh:function(){var options=this.options,lis=this.tablist.children(":has(a[href])");options.disabled=$.map(lis.filter(".ui-state-disabled"),function(tab){return lis.index(tab);});this._processTabs();if(options.active===false||!this.anchors.length){options.active=false;this.active=$();}else if(this.active.length&&!$.contains(this.tablist[0],this.active[0])){if(this.tabs.length===options.disabled.length){options.active=false;this.active=$();}else{this._activate(this._findNextTab(Math.max(0,options.active-1),false));}}else{options.active=this.tabs.index(this.active);}this._refresh();},_refresh:function(){this._setOptionDisabled(this.options.disabled);this._setupEvents(this.options.event);this._setupHeightStyle(this.options.heightStyle);this.tabs.not(this.active).attr({"aria-selected":"false","aria-expanded":"false",tabIndex:-1});this.panels.not(this._getPanelForTab(this.active)).hide().attr({"aria-hidden":"true"});if(!this.active.length){this.tabs.eq(0).attr("tabIndex",0);}else{this.active.attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0});this._addClass(this.active,"ui-tabs-active","ui-state-active");this._getPanelForTab(this.active).show().attr({"aria-hidden":"false"});}},_processTabs:function(){var that=this,prevTabs=this.tabs,prevAnchors=this.anchors,prevPanels=this.panels;this.tablist=this._getList().attr("role","tablist");this._addClass(this.tablist,"ui-tabs-nav","ui-helper-reset ui-helper-clearfix ui-widget-header");this.tablist.on("mousedown"+this.eventNamespace,"> li",function(event){if($(this).is(".ui-state-disabled")){event.preventDefault();}}).on("focus"+this.eventNamespace,".ui-tabs-anchor",function(){if($(this).closest("li").is(".ui-state-disabled")){this.blur();}});this.tabs=this.tablist.find("> li:has(a[href])").attr({role:"tab",tabIndex:-1});this._addClass(this.tabs,"ui-tabs-tab","ui-state-default");this.anchors=this.tabs.map(function(){return $("a",this)[0];}).attr({role:"presentation",tabIndex:-1});this._addClass(this.anchors,"ui-tabs-anchor");this.panels=$();this.anchors.each(function(i,anchor){var selector,panel,panelId,anchorId=$(anchor).uniqueId().attr("id"),tab=$(anchor).closest("li"),originalAriaControls=tab.attr("aria-controls");if(that._isLocal(anchor)){selector=anchor.hash;panelId=selector.substring(1);panel=that.element.find(that._sanitizeSelector(selector));}else{panelId=tab.attr("aria-controls")||$({}).uniqueId()[0].id;selector="#"+panelId;panel=that.element.find(selector);if(!panel.length){panel=that._createPanel(panelId);panel.insertAfter(that.panels[i-1]||that.tablist);}panel.attr("aria-live","polite");}if(panel.length){that.panels=that.panels.add(panel);}if(originalAriaControls){tab.data("ui-tabs-aria-controls",originalAriaControls);}tab.attr({"aria-controls":panelId,"aria-labelledby":anchorId});panel.attr("aria-labelledby",anchorId);});this.panels.attr("role","tabpanel");this._addClass(this.panels,"ui-tabs-panel","ui-widget-content");if(prevTabs){this._off(prevTabs.not(this.tabs));this._off(prevAnchors.not(this.anchors));this._off(prevPanels.not(this.panels));}},_getList:function(){return this.tablist||this.element.find("ol, ul").eq(0);},_createPanel:function(id){return $("<div>").attr("id",id).data("ui-tabs-destroy",true);},_setOptionDisabled:function(disabled){var currentItem,li,i;if($.isArray(disabled)){if(!disabled.length){disabled=false;}else if(disabled.length===this.anchors.length){disabled=true;}}for(i=0;(li=this.tabs[i]);i++){currentItem=$(li);if(disabled===true||$.inArray(i,disabled)!==-1){currentItem.attr("aria-disabled","true");this._addClass(currentItem,null,"ui-state-disabled");}else{currentItem.removeAttr("aria-disabled");this._removeClass(currentItem,null,"ui-state-disabled");}}this.options.disabled=disabled;this._toggleClass(this.widget(),this.widgetFullName+"-disabled",null,disabled===true);},_setupEvents:function(event){var events={};if(event){$.each(event.split(" "),function(index,eventName){events[eventName]="_eventHandler";});}this._off(this.anchors.add(this.tabs).add(this.panels));this._on(true,this.anchors,{click:function(event){event.preventDefault();}});this._on(this.anchors,events);this._on(this.tabs,{keydown:"_tabKeydown"});this._on(this.panels,{keydown:"_panelKeydown"});this._focusable(this.tabs);this._hoverable(this.tabs);},_setupHeightStyle:function(heightStyle){var maxHeight,parent=this.element.parent();if(heightStyle==="fill"){maxHeight=parent.height();maxHeight-=this.element.outerHeight()-this.element.height();this.element.siblings(":visible").each(function(){var elem=$(this),position=elem.css("position");if(position==="absolute"||position==="fixed"){return;}maxHeight-=elem.outerHeight(true);});this.element.children().not(this.panels).each(function(){maxHeight-=$(this).outerHeight(true);});this.panels.each(function(){$(this).height(Math.max(0,maxHeight-$(this).innerHeight()+$(this).height()));}).css("overflow","auto");}else if(heightStyle==="auto"){maxHeight=0;this.panels.each(function(){maxHeight=Math.max(maxHeight,$(this).height("").height());}).height(maxHeight);}},_eventHandler:function(event){var options=this.options,active=this.active,anchor=$(event.currentTarget),tab=anchor.closest("li"),clickedIsActive=tab[0]===active[0],collapsing=clickedIsActive&&options.collapsible,toShow=collapsing?$():this._getPanelForTab(tab),toHide=!active.length?$():this._getPanelForTab(active),eventData={oldTab:active,oldPanel:toHide,newTab:collapsing?$():tab,newPanel:toShow};event.preventDefault();if(tab.hasClass("ui-state-disabled")||tab.hasClass("ui-tabs-loading")||this.running||(clickedIsActive&&!options.collapsible)||(this._trigger("beforeActivate",event,eventData)===false)){return;}options.active=collapsing?false:this.tabs.index(tab);this.active=clickedIsActive?$():tab;if(this.xhr){this.xhr.abort();}if(!toHide.length&&!toShow.length){$.error("jQuery UI Tabs: Mismatching fragment identifier.");}if(toShow.length){this.load(this.tabs.index(tab),event);}this._toggle(event,eventData);},_toggle:function(event,eventData){var that=this,toShow=eventData.newPanel,toHide=eventData.oldPanel;this.running=true;function complete(){that.running=false;that._trigger("activate",event,eventData);}function show(){that._addClass(eventData.newTab.closest("li"),"ui-tabs-active","ui-state-active");if(toShow.length&&that.options.show){that._show(toShow,that.options.show,complete);}else{toShow.show();complete();}}if(toHide.length&&this.options.hide){this._hide(toHide,this.options.hide,function(){that._removeClass(eventData.oldTab.closest("li"),"ui-tabs-active","ui-state-active");show();});}else{this._removeClass(eventData.oldTab.closest("li"),"ui-tabs-active","ui-state-active");toHide.hide();show();}toHide.attr("aria-hidden","true");eventData.oldTab.attr({"aria-selected":"false","aria-expanded":"false"});if(toShow.length&&toHide.length){eventData.oldTab.attr("tabIndex",-1);}else if(toShow.length){this.tabs.filter(function(){return $(this).attr("tabIndex")===0;}).attr("tabIndex",-1);}toShow.attr("aria-hidden","false");eventData.newTab.attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0});},_activate:function(index){var anchor,active=this._findActive(index);if(active[0]===this.active[0]){return;}if(!active.length){active=this.active;}anchor=active.find(".ui-tabs-anchor")[0];this._eventHandler({target:anchor,currentTarget:anchor,preventDefault:$.noop});},_findActive:function(index){return index===false?$():this.tabs.eq(index);},_getIndex:function(index){if(typeof index==="string"){index=this.anchors.index(this.anchors.filter("[href$='"+$.ui.escapeSelector(index)+"']"));}return index;},_destroy:function(){if(this.xhr){this.xhr.abort();}this.tablist.removeAttr("role").off(this.eventNamespace);this.anchors.removeAttr("role tabIndex").removeUniqueId();this.tabs.add(this.panels).each(function(){if($.data(this,"ui-tabs-destroy")){$(this).remove();}else{$(this).removeAttr("role tabIndex "+"aria-live aria-busy aria-selected aria-labelledby aria-hidden aria-expanded");}});this.tabs.each(function(){var li=$(this),prev=li.data("ui-tabs-aria-controls");if(prev){li.attr("aria-controls",prev).removeData("ui-tabs-aria-controls");}else{li.removeAttr("aria-controls");}});this.panels.show();if(this.options.heightStyle!=="content"){this.panels.css("height","");}},enable:function(index){var disabled=this.options.disabled;if(disabled===false){return;}if(index===undefined){disabled=false;}else{index=this._getIndex(index);if($.isArray(disabled)){disabled=$.map(disabled,function(num){return num!==index?num:null;});}else{disabled=$.map(this.tabs,function(li,num){return num!==index?num:null;});}}this._setOptionDisabled(disabled);},disable:function(index){var disabled=this.options.disabled;if(disabled===true){return;}if(index===undefined){disabled=true;}else{index=this._getIndex(index);if($.inArray(index,disabled)!==-1){return;}if($.isArray(disabled)){disabled=$.merge([index],disabled).sort();}else{disabled=[index];}}this._setOptionDisabled(disabled);},load:function(index,event){index=this._getIndex(index);var that=this,tab=this.tabs.eq(index),anchor=tab.find(".ui-tabs-anchor"),panel=this._getPanelForTab(tab),eventData={tab:tab,panel:panel},complete=function(jqXHR,status){if(status==="abort"){that.panels.stop(false,true);}that._removeClass(tab,"ui-tabs-loading");panel.removeAttr("aria-busy");if(jqXHR===that.xhr){delete that.xhr;}};if(this._isLocal(anchor[0])){return;}this.xhr=$.ajax(this._ajaxSettings(anchor,event,eventData));if(this.xhr&&this.xhr.statusText!=="canceled"){this._addClass(tab,"ui-tabs-loading");panel.attr("aria-busy","true");this.xhr.done(function(response,status,jqXHR){setTimeout(function(){panel.html(response);that._trigger("load",event,eventData);complete(jqXHR,status);},1);}).fail(function(jqXHR,status){setTimeout(function(){complete(jqXHR,status);},1);});}},_ajaxSettings:function(anchor,event,eventData){var that=this;return{url:anchor.attr("href").replace(/#.*$/,""),beforeSend:function(jqXHR,settings){return that._trigger("beforeLoad",event,$.extend({jqXHR:jqXHR,ajaxSettings:settings},eventData));}};},_getPanelForTab:function(tab){var id=$(tab).attr("aria-controls");return this.element.find(this._sanitizeSelector("#"+id));}});if($.uiBackCompat!==false){$.widget("ui.tabs",$.ui.tabs,{_processTabs:function(){this._superApply(arguments);this._addClass(this.tabs,"ui-tab");}});}var widgetsTabs=$.ui.tabs;var dataSpace="ui-effects-",dataSpaceStyle="ui-effects-style",dataSpaceAnimated="ui-effects-animated",jQuery=$;$.effects={effect:{}};(function(jQuery,undefined){var stepHooks="backgroundColor borderBottomColor borderLeftColor borderRightColor "+"borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",rplusequals=/^([\-+])=\s*(\d+\.?\d*)/,stringParsers=[{re:/rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(execResult){return[execResult[1],execResult[2],execResult[3],execResult[4]];}},{re:/rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(execResult){return[execResult[1]*2.55,execResult[2]*2.55,execResult[3]*2.55,execResult[4]];}},{re:/#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,parse:function(execResult){return[parseInt(execResult[1],16),parseInt(execResult[2],16),parseInt(execResult[3],16)];}},{re:/#([a-f0-9])([a-f0-9])([a-f0-9])/,parse:function(execResult){return[parseInt(execResult[1]+execResult[1],16),parseInt(execResult[2]+execResult[2],16),parseInt(execResult[3]+execResult[3],16)];}},{re:/hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,space:"hsla",parse:function(execResult){return[execResult[1],execResult[2]/100,execResult[3]/100,execResult[4]];}}],color=jQuery.Color=function(color,green,blue,alpha){return new jQuery.Color.fn.parse(color,green,blue,alpha);},spaces={rgba:{props:{red:{idx:0,type:"byte"},green:{idx:1,type:"byte"},blue:{idx:2,type:"byte"}}},hsla:{props:{hue:{idx:0,type:"degrees"},saturation:{idx:1,type:"percent"},lightness:{idx:2,type:"percent"}}}},propTypes={"byte":{floor:true,max:255},"percent":{max:1},"degrees":{mod:360,floor:true}},support=color.support={},supportElem=jQuery("<p>")[0],colors,each=jQuery.each;supportElem.style.cssText="background-color:rgba(1,1,1,.5)";support.rgba=supportElem.style.backgroundColor.indexOf("rgba")>-1;each(spaces,function(spaceName,space){space.cache="_"+spaceName;space.props.alpha={idx:3,type:"percent",def:1};});function clamp(value,prop,allowEmpty){var type=propTypes[prop.type]||{};if(value==null){return(allowEmpty||!prop.def)?null:prop.def;}value=type.floor?~~value:parseFloat(value);if(isNaN(value)){return prop.def;}if(type.mod){return(value+type.mod)%type.mod;}return 0>value?0:type.max<value?type.max:value;}function stringParse(string){var inst=color(),rgba=inst._rgba=[];string=string.toLowerCase();each(stringParsers,function(i,parser){var parsed,match=parser.re.exec(string),values=match&&parser.parse(match),spaceName=parser.space||"rgba";if(values){parsed=inst[spaceName](values);inst[spaces[spaceName].cache]=parsed[spaces[spaceName].cache];rgba=inst._rgba=parsed._rgba;return false;}});if(rgba.length){if(rgba.join()==="0,0,0,0"){jQuery.extend(rgba,colors.transparent);}return inst;}return colors[string];}color.fn=jQuery.extend(color.prototype,{parse:function(red,green,blue,alpha){if(red===undefined){this._rgba=[null,null,null,null];return this;}if(red.jquery||red.nodeType){red=jQuery(red).css(green);green=undefined;}var inst=this,type=jQuery.type(red),rgba=this._rgba=[];if(green!==undefined){red=[red,green,blue,alpha];type="array";}if(type==="string"){return this.parse(stringParse(red)||colors._default);}if(type==="array"){each(spaces.rgba.props,function(key,prop){rgba[prop.idx]=clamp(red[prop.idx],prop);});return this;}if(type==="object"){if(red instanceof color){each(spaces,function(spaceName,space){if(red[space.cache]){inst[space.cache]=red[space.cache].slice();}});}else{each(spaces,function(spaceName,space){var cache=space.cache;each(space.props,function(key,prop){if(!inst[cache]&&space.to){if(key==="alpha"||red[key]==null){return;}inst[cache]=space.to(inst._rgba);}inst[cache][prop.idx]=clamp(red[key],prop,true);});if(inst[cache]&&jQuery.inArray(null,inst[cache].slice(0,3))<0){inst[cache][3]=1;if(space.from){inst._rgba=space.from(inst[cache]);}}});}return this;}},is:function(compare){var is=color(compare),same=true,inst=this;each(spaces,function(_,space){var localCache,isCache=is[space.cache];if(isCache){localCache=inst[space.cache]||space.to&&space.to(inst._rgba)||[];each(space.props,function(_,prop){if(isCache[prop.idx]!=null){same=(isCache[prop.idx]===localCache[prop.idx]);return same;}});}return same;});return same;},_space:function(){var used=[],inst=this;each(spaces,function(spaceName,space){if(inst[space.cache]){used.push(spaceName);}});return used.pop();},transition:function(other,distance){var end=color(other),spaceName=end._space(),space=spaces[spaceName],startColor=this.alpha()===0?color("transparent"):this,start=startColor[space.cache]||space.to(startColor._rgba),result=start.slice();end=end[space.cache];each(space.props,function(key,prop){var index=prop.idx,startValue=start[index],endValue=end[index],type=propTypes[prop.type]||{};if(endValue===null){return;}if(startValue===null){result[index]=endValue;}else{if(type.mod){if(endValue-startValue>type.mod/2){startValue+=type.mod;}else if(startValue-endValue>type.mod/2){startValue-=type.mod;}}result[index]=clamp((endValue-startValue)*distance+startValue,prop);}});return this[spaceName](result);},blend:function(opaque){if(this._rgba[3]===1){return this;}var rgb=this._rgba.slice(),a=rgb.pop(),blend=color(opaque)._rgba;return color(jQuery.map(rgb,function(v,i){return(1-a)*blend[i]+a*v;}));},toRgbaString:function(){var prefix="rgba(",rgba=jQuery.map(this._rgba,function(v,i){return v==null?(i>2?1:0):v;});if(rgba[3]===1){rgba.pop();prefix="rgb(";}return prefix+rgba.join()+")";},toHslaString:function(){var prefix="hsla(",hsla=jQuery.map(this.hsla(),function(v,i){if(v==null){v=i>2?1:0;}if(i&&i<3){v=Math.round(v*100)+"%";}return v;});if(hsla[3]===1){hsla.pop();prefix="hsl(";}return prefix+hsla.join()+")";},toHexString:function(includeAlpha){var rgba=this._rgba.slice(),alpha=rgba.pop();if(includeAlpha){rgba.push(~~(alpha*255));}return"#"+jQuery.map(rgba,function(v){v=(v||0).toString(16);return v.length===1?"0"+v:v;}).join("");},toString:function(){return this._rgba[3]===0?"transparent":this.toRgbaString();}});color.fn.parse.prototype=color.fn;function hue2rgb(p,q,h){h=(h+1)%1;if(h*6<1){return p+(q-p)*h*6;}if(h*2<1){return q;}if(h*3<2){return p+(q-p)*((2/3)-h)*6;}return p;}spaces.hsla.to=function(rgba){if(rgba[0]==null||rgba[1]==null||rgba[2]==null){return[null,null,null,rgba[3]];}var r=rgba[0]/255,g=rgba[1]/255,b=rgba[2]/255,a=rgba[3],max=Math.max(r,g,b),min=Math.min(r,g,b),diff=max-min,add=max+min,l=add*0.5,h,s;if(min===max){h=0;}else if(r===max){h=(60*(g-b)/diff)+360;}else if(g===max){h=(60*(b-r)/diff)+120;}else{h=(60*(r-g)/diff)+240;}if(diff===0){s=0;}else if(l<=0.5){s=diff/add;}else{s=diff/(2-add);}return[Math.round(h)%360,s,l,a==null?1:a];};spaces.hsla.from=function(hsla){if(hsla[0]==null||hsla[1]==null||hsla[2]==null){return[null,null,null,hsla[3]];}var h=hsla[0]/360,s=hsla[1],l=hsla[2],a=hsla[3],q=l<=0.5?l*(1+s):l+s-l*s,p=2*l-q;return[Math.round(hue2rgb(p,q,h+(1/3))*255),Math.round(hue2rgb(p,q,h)*255),Math.round(hue2rgb(p,q,h-(1/3))*255),a];};each(spaces,function(spaceName,space){var props=space.props,cache=space.cache,to=space.to,from=space.from;color.fn[spaceName]=function(value){if(to&&!this[cache]){this[cache]=to(this._rgba);}if(value===undefined){return this[cache].slice();}var ret,type=jQuery.type(value),arr=(type==="array"||type==="object")?value:arguments,local=this[cache].slice();each(props,function(key,prop){var val=arr[type==="object"?key:prop.idx];if(val==null){val=local[prop.idx];}local[prop.idx]=clamp(val,prop);});if(from){ret=color(from(local));ret[cache]=local;return ret;}else{return color(local);}};each(props,function(key,prop){if(color.fn[key]){return;}color.fn[key]=function(value){var vtype=jQuery.type(value),fn=(key==="alpha"?(this._hsla?"hsla":"rgba"):spaceName),local=this[fn](),cur=local[prop.idx],match;if(vtype==="undefined"){return cur;}if(vtype==="function"){value=value.call(this,cur);vtype=jQuery.type(value);}if(value==null&&prop.empty){return this;}if(vtype==="string"){match=rplusequals.exec(value);if(match){value=cur+parseFloat(match[2])*(match[1]==="+"?1:-1);}}local[prop.idx]=value;return this[fn](local);};});});color.hook=function(hook){var hooks=hook.split(" ");each(hooks,function(i,hook){jQuery.cssHooks[hook]={set:function(elem,value){var parsed,curElem,backgroundColor="";if(value!=="transparent"&&(jQuery.type(value)!=="string"||(parsed=stringParse(value)))){value=color(parsed||value);if(!support.rgba&&value._rgba[3]!==1){curElem=hook==="backgroundColor"?elem.parentNode:elem;while((backgroundColor===""||backgroundColor==="transparent")&&curElem&&curElem.style){try{backgroundColor=jQuery.css(curElem,"backgroundColor");curElem=curElem.parentNode;}catch(e){}}value=value.blend(backgroundColor&&backgroundColor!=="transparent"?backgroundColor:"_default");}value=value.toRgbaString();}try{elem.style[hook]=value;}catch(e){}}};jQuery.fx.step[hook]=function(fx){if(!fx.colorInit){fx.start=color(fx.elem,hook);fx.end=color(fx.end);fx.colorInit=true;}jQuery.cssHooks[hook].set(fx.elem,fx.start.transition(fx.end,fx.pos));};});};color.hook(stepHooks);jQuery.cssHooks.borderColor={expand:function(value){var expanded={};each(["Top","Right","Bottom","Left"],function(i,part){expanded["border"+part+"Color"]=value;});return expanded;}};colors=jQuery.Color.names={aqua:"#00ffff",black:"#000000",blue:"#0000ff",fuchsia:"#ff00ff",gray:"#808080",green:"#008000",lime:"#00ff00",maroon:"#800000",navy:"#000080",olive:"#808000",purple:"#800080",red:"#ff0000",silver:"#c0c0c0",teal:"#008080",white:"#ffffff",yellow:"#ffff00",transparent:[null,null,null,0],_default:"#ffffff"};})(jQuery);(function(){var classAnimationActions=["add","remove","toggle"],shorthandStyles={border:1,borderBottom:1,borderColor:1,borderLeft:1,borderRight:1,borderTop:1,borderWidth:1,margin:1,padding:1};$.each(["borderLeftStyle","borderRightStyle","borderBottomStyle","borderTopStyle"],function(_,prop){$.fx.step[prop]=function(fx){if(fx.end!=="none"&&!fx.setAttr||fx.pos===1&&!fx.setAttr){jQuery.style(fx.elem,prop,fx.end);fx.setAttr=true;}};});function getElementStyles(elem){var key,len,style=elem.ownerDocument.defaultView?elem.ownerDocument.defaultView.getComputedStyle(elem,null):elem.currentStyle,styles={};if(style&&style.length&&style[0]&&style[style[0]]){len=style.length;while(len--){key=style[len];if(typeof style[key]==="string"){styles[$.camelCase(key)]=style[key];}}}else{for(key in style){if(typeof style[key]==="string"){styles[key]=style[key];}}}return styles;}function styleDifference(oldStyle,newStyle){var diff={},name,value;for(name in newStyle){value=newStyle[name];if(oldStyle[name]!==value){if(!shorthandStyles[name]){if($.fx.step[name]||!isNaN(parseFloat(value))){diff[name]=value;}}}}return diff;}if(!$.fn.addBack){$.fn.addBack=function(selector){return this.add(selector==null?this.prevObject:this.prevObject.filter(selector));};}$.effects.animateClass=function(value,duration,easing,callback){var o=$.speed(duration,easing,callback);return this.queue(function(){var animated=$(this),baseClass=animated.attr("class")||"",applyClassChange,allAnimations=o.children?animated.find("*").addBack():animated;allAnimations=allAnimations.map(function(){var el=$(this);return{el:el,start:getElementStyles(this)};});applyClassChange=function(){$.each(classAnimationActions,function(i,action){if(value[action]){animated[action+"Class"](value[action]);}});};applyClassChange();allAnimations=allAnimations.map(function(){this.end=getElementStyles(this.el[0]);this.diff=styleDifference(this.start,this.end);return this;});animated.attr("class",baseClass);allAnimations=allAnimations.map(function(){var styleInfo=this,dfd=$.Deferred(),opts=$.extend({},o,{queue:false,complete:function(){dfd.resolve(styleInfo);}});this.el.animate(this.diff,opts);return dfd.promise();});$.when.apply($,allAnimations.get()).done(function(){applyClassChange();$.each(arguments,function(){var el=this.el;$.each(this.diff,function(key){el.css(key,"");});});o.complete.call(animated[0]);});});};$.fn.extend({addClass:(function(orig){return function(classNames,speed,easing,callback){return speed?$.effects.animateClass.call(this,{add:classNames},speed,easing,callback):orig.apply(this,arguments);};})($.fn.addClass),removeClass:(function(orig){return function(classNames,speed,easing,callback){return arguments.length>1?$.effects.animateClass.call(this,{remove:classNames},speed,easing,callback):orig.apply(this,arguments);};})($.fn.removeClass),toggleClass:(function(orig){return function(classNames,force,speed,easing,callback){if(typeof force==="boolean"||force===undefined){if(!speed){return orig.apply(this,arguments);}else{return $.effects.animateClass.call(this,(force?{add:classNames}:{remove:classNames}),speed,easing,callback);}}else{return $.effects.animateClass.call(this,{toggle:classNames},force,speed,easing);}};})($.fn.toggleClass),switchClass:function(remove,add,speed,easing,callback){return $.effects.animateClass.call(this,{add:add,remove:remove},speed,easing,callback);}});})();(function(){if($.expr&&$.expr.filters&&$.expr.filters.animated){$.expr.filters.animated=(function(orig){return function(elem){return!!$(elem).data(dataSpaceAnimated)||orig(elem);};})($.expr.filters.animated);}if($.uiBackCompat!==false){$.extend($.effects,{save:function(element,set){var i=0,length=set.length;for(;i<length;i++){if(set[i]!==null){element.data(dataSpace+set[i],element[0].style[set[i]]);}}},restore:function(element,set){var val,i=0,length=set.length;for(;i<length;i++){if(set[i]!==null){val=element.data(dataSpace+set[i]);element.css(set[i],val);}}},setMode:function(el,mode){if(mode==="toggle"){mode=el.is(":hidden")?"show":"hide";}return mode;},createWrapper:function(element){if(element.parent().is(".ui-effects-wrapper")){return element.parent();}var props={width:element.outerWidth(true),height:element.outerHeight(true),"float":element.css("float")},wrapper=$("<div></div>").addClass("ui-effects-wrapper").css({fontSize:"100%",background:"transparent",border:"none",margin:0,padding:0}),size={width:element.width(),height:element.height()},active=document.activeElement;try{active.id;}catch(e){active=document.body;}element.wrap(wrapper);if(element[0]===active||$.contains(element[0],active)){$(active).trigger("focus");}wrapper=element.parent();if(element.css("position")==="static"){wrapper.css({position:"relative"});element.css({position:"relative"});}else{$.extend(props,{position:element.css("position"),zIndex:element.css("z-index")});$.each(["top","left","bottom","right"],function(i,pos){props[pos]=element.css(pos);if(isNaN(parseInt(props[pos],10))){props[pos]="auto";}});element.css({position:"relative",top:0,left:0,right:"auto",bottom:"auto"});}element.css(size);return wrapper.css(props).show();},removeWrapper:function(element){var active=document.activeElement;if(element.parent().is(".ui-effects-wrapper")){element.parent().replaceWith(element);if(element[0]===active||$.contains(element[0],active)){$(active).trigger("focus");}}return element;}});}$.extend($.effects,{version:"1.12.1",define:function(name,mode,effect){if(!effect){effect=mode;mode="effect";}$.effects.effect[name]=effect;$.effects.effect[name].mode=mode;return effect;},scaledDimensions:function(element,percent,direction){if(percent===0){return{height:0,width:0,outerHeight:0,outerWidth:0};}var x=direction!=="horizontal"?((percent||100)/100):1,y=direction!=="vertical"?((percent||100)/100):1;return{height:element.height()*y,width:element.width()*x,outerHeight:element.outerHeight()*y,outerWidth:element.outerWidth()*x};},clipToBox:function(animation){return{width:animation.clip.right-animation.clip.left,height:animation.clip.bottom-animation.clip.top,left:animation.clip.left,top:animation.clip.top};},unshift:function(element,queueLength,count){var queue=element.queue();if(queueLength>1){queue.splice.apply(queue,[1,0].concat(queue.splice(queueLength,count)));}element.dequeue();},saveStyle:function(element){element.data(dataSpaceStyle,element[0].style.cssText);},restoreStyle:function(element){element[0].style.cssText=element.data(dataSpaceStyle)||"";element.removeData(dataSpaceStyle);},mode:function(element,mode){var hidden=element.is(":hidden");if(mode==="toggle"){mode=hidden?"show":"hide";}if(hidden?mode==="hide":mode==="show"){mode="none";}return mode;},getBaseline:function(origin,original){var y,x;switch(origin[0]){case"top":y=0;break;case"middle":y=0.5;break;case"bottom":y=1;break;default:y=origin[0]/original.height;}switch(origin[1]){case"left":x=0;break;case"center":x=0.5;break;case"right":x=1;break;default:x=origin[1]/original.width;}return{x:x,y:y};},createPlaceholder:function(element){var placeholder,cssPosition=element.css("position"),position=element.position();element.css({marginTop:element.css("marginTop"),marginBottom:element.css("marginBottom"),marginLeft:element.css("marginLeft"),marginRight:element.css("marginRight")}).outerWidth(element.outerWidth()).outerHeight(element.outerHeight());if(/^(static|relative)/.test(cssPosition)){cssPosition="absolute";placeholder=$("<"+element[0].nodeName+">").insertAfter(element).css({display:/^(inline|ruby)/.test(element.css("display"))?"inline-block":"block",visibility:"hidden",marginTop:element.css("marginTop"),marginBottom:element.css("marginBottom"),marginLeft:element.css("marginLeft"),marginRight:element.css("marginRight"),"float":element.css("float")}).outerWidth(element.outerWidth()).outerHeight(element.outerHeight()).addClass("ui-effects-placeholder");element.data(dataSpace+"placeholder",placeholder);}element.css({position:cssPosition,left:position.left,top:position.top});return placeholder;},removePlaceholder:function(element){var dataKey=dataSpace+"placeholder",placeholder=element.data(dataKey);if(placeholder){placeholder.remove();element.removeData(dataKey);}},cleanUp:function(element){$.effects.restoreStyle(element);$.effects.removePlaceholder(element);},setTransition:function(element,list,factor,value){value=value||{};$.each(list,function(i,x){var unit=element.cssUnit(x);if(unit[0]>0){value[x]=unit[0]*factor+unit[1];}});return value;}});function _normalizeArguments(effect,options,speed,callback){if($.isPlainObject(effect)){options=effect;effect=effect.effect;}effect={effect:effect};if(options==null){options={};}if($.isFunction(options)){callback=options;speed=null;options={};}if(typeof options==="number"||$.fx.speeds[options]){callback=speed;speed=options;options={};}if($.isFunction(speed)){callback=speed;speed=null;}if(options){$.extend(effect,options);}speed=speed||options.duration;effect.duration=$.fx.off?0:typeof speed==="number"?speed:speed in $.fx.speeds?$.fx.speeds[speed]:$.fx.speeds._default;effect.complete=callback||options.complete;return effect;}function standardAnimationOption(option){if(!option||typeof option==="number"||$.fx.speeds[option]){return true;}if(typeof option==="string"&&!$.effects.effect[option]){return true;}if($.isFunction(option)){return true;}if(typeof option==="object"&&!option.effect){return true;}return false;}$.fn.extend({effect:function(){var args=_normalizeArguments.apply(this,arguments),effectMethod=$.effects.effect[args.effect],defaultMode=effectMethod.mode,queue=args.queue,queueName=queue||"fx",complete=args.complete,mode=args.mode,modes=[],prefilter=function(next){var el=$(this),normalizedMode=$.effects.mode(el,mode)||defaultMode;el.data(dataSpaceAnimated,true);modes.push(normalizedMode);if(defaultMode&&(normalizedMode==="show"||(normalizedMode===defaultMode&&normalizedMode==="hide"))){el.show();}if(!defaultMode||normalizedMode!=="none"){$.effects.saveStyle(el);}if($.isFunction(next)){next();}};if($.fx.off||!effectMethod){if(mode){return this[mode](args.duration,complete);}else{return this.each(function(){if(complete){complete.call(this);}});}}function run(next){var elem=$(this);function cleanup(){elem.removeData(dataSpaceAnimated);$.effects.cleanUp(elem);if(args.mode==="hide"){elem.hide();}done();}function done(){if($.isFunction(complete)){complete.call(elem[0]);}if($.isFunction(next)){next();}}args.mode=modes.shift();if($.uiBackCompat!==false&&!defaultMode){if(elem.is(":hidden")?mode==="hide":mode==="show"){elem[mode]();done();}else{effectMethod.call(elem[0],args,done);}}else{if(args.mode==="none"){elem[mode]();done();}else{effectMethod.call(elem[0],args,cleanup);}}}return queue===false?this.each(prefilter).each(run):this.queue(queueName,prefilter).queue(queueName,run);},show:(function(orig){return function(option){if(standardAnimationOption(option)){return orig.apply(this,arguments);}else{var args=_normalizeArguments.apply(this,arguments);args.mode="show";return this.effect.call(this,args);}};})($.fn.show),hide:(function(orig){return function(option){if(standardAnimationOption(option)){return orig.apply(this,arguments);}else{var args=_normalizeArguments.apply(this,arguments);args.mode="hide";return this.effect.call(this,args);}};})($.fn.hide),toggle:(function(orig){return function(option){if(standardAnimationOption(option)||typeof option==="boolean"){return orig.apply(this,arguments);}else{var args=_normalizeArguments.apply(this,arguments);args.mode="toggle";return this.effect.call(this,args);}};})($.fn.toggle),cssUnit:function(key){var style=this.css(key),val=[];$.each(["em","px","%","pt"],function(i,unit){if(style.indexOf(unit)>0){val=[parseFloat(style),unit];}});return val;},cssClip:function(clipObj){if(clipObj){return this.css("clip","rect("+clipObj.top+"px "+clipObj.right+"px "+clipObj.bottom+"px "+clipObj.left+"px)");}return parseClip(this.css("clip"),this);},transfer:function(options,done){var element=$(this),target=$(options.to),targetFixed=target.css("position")==="fixed",body=$("body"),fixTop=targetFixed?body.scrollTop():0,fixLeft=targetFixed?body.scrollLeft():0,endPosition=target.offset(),animation={top:endPosition.top-fixTop,left:endPosition.left-fixLeft,height:target.innerHeight(),width:target.innerWidth()},startPosition=element.offset(),transfer=$("<div class='ui-effects-transfer'></div>").appendTo("body").addClass(options.className).css({top:startPosition.top-fixTop,left:startPosition.left-fixLeft,height:element.innerHeight(),width:element.innerWidth(),position:targetFixed?"fixed":"absolute"}).animate(animation,options.duration,options.easing,function(){transfer.remove();if($.isFunction(done)){done();}});}});function parseClip(str,element){var outerWidth=element.outerWidth(),outerHeight=element.outerHeight(),clipRegex=/^rect\((-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto)\)$/,values=clipRegex.exec(str)||["",0,outerWidth,outerHeight,0];return{top:parseFloat(values[1])||0,right:values[2]==="auto"?outerWidth:parseFloat(values[2]),bottom:values[3]==="auto"?outerHeight:parseFloat(values[3]),left:parseFloat(values[4])||0};}$.fx.step.clip=function(fx){if(!fx.clipInit){fx.start=$(fx.elem).cssClip();if(typeof fx.end==="string"){fx.end=parseClip(fx.end,fx.elem);}fx.clipInit=true;}$(fx.elem).cssClip({top:fx.pos*(fx.end.top-fx.start.top)+fx.start.top,right:fx.pos*(fx.end.right-fx.start.right)+fx.start.right,bottom:fx.pos*(fx.end.bottom-fx.start.bottom)+fx.start.bottom,left:fx.pos*(fx.end.left-fx.start.left)+fx.start.left});};})();(function(){var baseEasings={};$.each(["Quad","Cubic","Quart","Quint","Expo"],function(i,name){baseEasings[name]=function(p){return Math.pow(p,i+2);};});$.extend(baseEasings,{Sine:function(p){return 1-Math.cos(p*Math.PI/2);},Circ:function(p){return 1-Math.sqrt(1-p*p);},Elastic:function(p){return p===0||p===1?p:-Math.pow(2,8*(p-1))*Math.sin(((p-1)*80-7.5)*Math.PI/15);},Back:function(p){return p*p*(3*p-2);},Bounce:function(p){var pow2,bounce=4;while(p<((pow2=Math.pow(2,--bounce))-1)/11){}return 1/Math.pow(4,3-bounce)-7.5625*Math.pow((pow2*3-2)/22-p,2);}});$.each(baseEasings,function(name,easeIn){$.easing["easeIn"+name]=easeIn;$.easing["easeOut"+name]=function(p){return 1-easeIn(1-p);};$.easing["easeInOut"+name]=function(p){return p<0.5?easeIn(p*2)/2:1-easeIn(p*-2+2)/2;};});})();var effect=$.effects;var effectsEffectBlind=$.effects.define("blind","hide",function(options,done){var map={up:["bottom","top"],vertical:["bottom","top"],down:["top","bottom"],left:["right","left"],horizontal:["right","left"],right:["left","right"]},element=$(this),direction=options.direction||"up",start=element.cssClip(),animate={clip:$.extend({},start)},placeholder=$.effects.createPlaceholder(element);animate.clip[map[direction][0]]=animate.clip[map[direction][1]];if(options.mode==="show"){element.cssClip(animate.clip);if(placeholder){placeholder.css($.effects.clipToBox(animate));}animate.clip=start;}if(placeholder){placeholder.animate($.effects.clipToBox(animate),options.duration,options.easing);}element.animate(animate,{queue:false,duration:options.duration,easing:options.easing,complete:done});});var effectsEffectBounce=$.effects.define("bounce",function(options,done){var upAnim,downAnim,refValue,element=$(this),mode=options.mode,hide=mode==="hide",show=mode==="show",direction=options.direction||"up",distance=options.distance,times=options.times||5,anims=times*2+(show||hide?1:0),speed=options.duration/anims,easing=options.easing,ref=(direction==="up"||direction==="down")?"top":"left",motion=(direction==="up"||direction==="left"),i=0,queuelen=element.queue().length;$.effects.createPlaceholder(element);refValue=element.css(ref);if(!distance){distance=element[ref==="top"?"outerHeight":"outerWidth"]()/3;}if(show){downAnim={opacity:1};downAnim[ref]=refValue;element.css("opacity",0).css(ref,motion?-distance*2:distance*2).animate(downAnim,speed,easing);}if(hide){distance=distance/Math.pow(2,times-1);}downAnim={};downAnim[ref]=refValue;for(;i<times;i++){upAnim={};upAnim[ref]=(motion?"-=":"+=")+distance;element.animate(upAnim,speed,easing).animate(downAnim,speed,easing);distance=hide?distance*2:distance/2;}if(hide){upAnim={opacity:0};upAnim[ref]=(motion?"-=":"+=")+distance;element.animate(upAnim,speed,easing);}element.queue(done);$.effects.unshift(element,queuelen,anims+1);});var effectsEffectClip=$.effects.define("clip","hide",function(options,done){var start,animate={},element=$(this),direction=options.direction||"vertical",both=direction==="both",horizontal=both||direction==="horizontal",vertical=both||direction==="vertical";start=element.cssClip();animate.clip={top:vertical?(start.bottom-start.top)/2:start.top,right:horizontal?(start.right-start.left)/2:start.right,bottom:vertical?(start.bottom-start.top)/2:start.bottom,left:horizontal?(start.right-start.left)/2:start.left};$.effects.createPlaceholder(element);if(options.mode==="show"){element.cssClip(animate.clip);animate.clip=start;}element.animate(animate,{queue:false,duration:options.duration,easing:options.easing,complete:done});});var effectsEffectDrop=$.effects.define("drop","hide",function(options,done){var distance,element=$(this),mode=options.mode,show=mode==="show",direction=options.direction||"left",ref=(direction==="up"||direction==="down")?"top":"left",motion=(direction==="up"||direction==="left")?"-=":"+=",oppositeMotion=(motion==="+=")?"-=":"+=",animation={opacity:0};$.effects.createPlaceholder(element);distance=options.distance||element[ref==="top"?"outerHeight":"outerWidth"](true)/2;animation[ref]=motion+distance;if(show){element.css(animation);animation[ref]=oppositeMotion+distance;animation.opacity=1;}element.animate(animation,{queue:false,duration:options.duration,easing:options.easing,complete:done});});var effectsEffectExplode=$.effects.define("explode","hide",function(options,done){var i,j,left,top,mx,my,rows=options.pieces?Math.round(Math.sqrt(options.pieces)):3,cells=rows,element=$(this),mode=options.mode,show=mode==="show",offset=element.show().css("visibility","hidden").offset(),width=Math.ceil(element.outerWidth()/cells),height=Math.ceil(element.outerHeight()/rows),pieces=[];function childComplete(){pieces.push(this);if(pieces.length===rows*cells){animComplete();}}for(i=0;i<rows;i++){top=offset.top+i*height;my=i-(rows-1)/2;for(j=0;j<cells;j++){left=offset.left+j*width;mx=j-(cells-1)/2;element.clone().appendTo("body").wrap("<div></div>").css({position:"absolute",visibility:"visible",left:-j*width,top:-i*height}).parent().addClass("ui-effects-explode").css({position:"absolute",overflow:"hidden",width:width,height:height,left:left+(show?mx*width:0),top:top+(show?my*height:0),opacity:show?0:1}).animate({left:left+(show?0:mx*width),top:top+(show?0:my*height),opacity:show?1:0},options.duration||500,options.easing,childComplete);}}function animComplete(){element.css({visibility:"visible"});$(pieces).remove();done();}});var effectsEffectFade=$.effects.define("fade","toggle",function(options,done){var show=options.mode==="show";$(this).css("opacity",show?0:1).animate({opacity:show?1:0},{queue:false,duration:options.duration,easing:options.easing,complete:done});});var effectsEffectFold=$.effects.define("fold","hide",function(options,done){var element=$(this),mode=options.mode,show=mode==="show",hide=mode==="hide",size=options.size||15,percent=/([0-9]+)%/.exec(size),horizFirst=!!options.horizFirst,ref=horizFirst?["right","bottom"]:["bottom","right"],duration=options.duration/2,placeholder=$.effects.createPlaceholder(element),start=element.cssClip(),animation1={clip:$.extend({},start)},animation2={clip:$.extend({},start)},distance=[start[ref[0]],start[ref[1]]],queuelen=element.queue().length;if(percent){size=parseInt(percent[1],10)/100*distance[hide?0:1];}animation1.clip[ref[0]]=size;animation2.clip[ref[0]]=size;animation2.clip[ref[1]]=0;if(show){element.cssClip(animation2.clip);if(placeholder){placeholder.css($.effects.clipToBox(animation2));}animation2.clip=start;}element.queue(function(next){if(placeholder){placeholder.animate($.effects.clipToBox(animation1),duration,options.easing).animate($.effects.clipToBox(animation2),duration,options.easing);}next();}).animate(animation1,duration,options.easing).animate(animation2,duration,options.easing).queue(done);$.effects.unshift(element,queuelen,4);});var effectsEffectHighlight=$.effects.define("highlight","show",function(options,done){var element=$(this),animation={backgroundColor:element.css("backgroundColor")};if(options.mode==="hide"){animation.opacity=0;}$.effects.saveStyle(element);element.css({backgroundImage:"none",backgroundColor:options.color||"#ffff99"}).animate(animation,{queue:false,duration:options.duration,easing:options.easing,complete:done});});var effectsEffectSize=$.effects.define("size",function(options,done){var baseline,factor,temp,element=$(this),cProps=["fontSize"],vProps=["borderTopWidth","borderBottomWidth","paddingTop","paddingBottom"],hProps=["borderLeftWidth","borderRightWidth","paddingLeft","paddingRight"],mode=options.mode,restore=mode!=="effect",scale=options.scale||"both",origin=options.origin||["middle","center"],position=element.css("position"),pos=element.position(),original=$.effects.scaledDimensions(element),from=options.from||original,to=options.to||$.effects.scaledDimensions(element,0);$.effects.createPlaceholder(element);if(mode==="show"){temp=from;from=to;to=temp;}factor={from:{y:from.height/original.height,x:from.width/original.width},to:{y:to.height/original.height,x:to.width/original.width}};if(scale==="box"||scale==="both"){if(factor.from.y!==factor.to.y){from=$.effects.setTransition(element,vProps,factor.from.y,from);to=$.effects.setTransition(element,vProps,factor.to.y,to);}if(factor.from.x!==factor.to.x){from=$.effects.setTransition(element,hProps,factor.from.x,from);to=$.effects.setTransition(element,hProps,factor.to.x,to);}}if(scale==="content"||scale==="both"){if(factor.from.y!==factor.to.y){from=$.effects.setTransition(element,cProps,factor.from.y,from);to=$.effects.setTransition(element,cProps,factor.to.y,to);}}if(origin){baseline=$.effects.getBaseline(origin,original);from.top=(original.outerHeight-from.outerHeight)*baseline.y+pos.top;from.left=(original.outerWidth-from.outerWidth)*baseline.x+pos.left;to.top=(original.outerHeight-to.outerHeight)*baseline.y+pos.top;to.left=(original.outerWidth-to.outerWidth)*baseline.x+pos.left;}element.css(from);if(scale==="content"||scale==="both"){vProps=vProps.concat(["marginTop","marginBottom"]).concat(cProps);hProps=hProps.concat(["marginLeft","marginRight"]);element.find("*[width]").each(function(){var child=$(this),childOriginal=$.effects.scaledDimensions(child),childFrom={height:childOriginal.height*factor.from.y,width:childOriginal.width*factor.from.x,outerHeight:childOriginal.outerHeight*factor.from.y,outerWidth:childOriginal.outerWidth*factor.from.x},childTo={height:childOriginal.height*factor.to.y,width:childOriginal.width*factor.to.x,outerHeight:childOriginal.height*factor.to.y,outerWidth:childOriginal.width*factor.to.x};if(factor.from.y!==factor.to.y){childFrom=$.effects.setTransition(child,vProps,factor.from.y,childFrom);childTo=$.effects.setTransition(child,vProps,factor.to.y,childTo);}if(factor.from.x!==factor.to.x){childFrom=$.effects.setTransition(child,hProps,factor.from.x,childFrom);childTo=$.effects.setTransition(child,hProps,factor.to.x,childTo);}if(restore){$.effects.saveStyle(child);}child.css(childFrom);child.animate(childTo,options.duration,options.easing,function(){if(restore){$.effects.restoreStyle(child);}});});}element.animate(to,{queue:false,duration:options.duration,easing:options.easing,complete:function(){var offset=element.offset();if(to.opacity===0){element.css("opacity",from.opacity);}if(!restore){element.css("position",position==="static"?"relative":position).offset(offset);$.effects.saveStyle(element);}done();}});});var effectsEffectScale=$.effects.define("scale",function(options,done){var el=$(this),mode=options.mode,percent=parseInt(options.percent,10)||(parseInt(options.percent,10)===0?0:(mode!=="effect"?0:100)),newOptions=$.extend(true,{from:$.effects.scaledDimensions(el),to:$.effects.scaledDimensions(el,percent,options.direction||"both"),origin:options.origin||["middle","center"]},options);if(options.fade){newOptions.from.opacity=1;newOptions.to.opacity=0;}$.effects.effect.size.call(this,newOptions,done);});var effectsEffectPuff=$.effects.define("puff","hide",function(options,done){var newOptions=$.extend(true,{},options,{fade:true,percent:parseInt(options.percent,10)||150});$.effects.effect.scale.call(this,newOptions,done);});var effectsEffectPulsate=$.effects.define("pulsate","show",function(options,done){var element=$(this),mode=options.mode,show=mode==="show",hide=mode==="hide",showhide=show||hide,anims=((options.times||5)*2)+(showhide?1:0),duration=options.duration/anims,animateTo=0,i=1,queuelen=element.queue().length;if(show||!element.is(":visible")){element.css("opacity",0).show();animateTo=1;}for(;i<anims;i++){element.animate({opacity:animateTo},duration,options.easing);animateTo=1-animateTo;}element.animate({opacity:animateTo},duration,options.easing);element.queue(done);$.effects.unshift(element,queuelen,anims+1);});var effectsEffectShake=$.effects.define("shake",function(options,done){var i=1,element=$(this),direction=options.direction||"left",distance=options.distance||20,times=options.times||3,anims=times*2+1,speed=Math.round(options.duration/anims),ref=(direction==="up"||direction==="down")?"top":"left",positiveMotion=(direction==="up"||direction==="left"),animation={},animation1={},animation2={},queuelen=element.queue().length;$.effects.createPlaceholder(element);animation[ref]=(positiveMotion?"-=":"+=")+distance;animation1[ref]=(positiveMotion?"+=":"-=")+distance*2;animation2[ref]=(positiveMotion?"-=":"+=")+distance*2;element.animate(animation,speed,options.easing);for(;i<times;i++){element.animate(animation1,speed,options.easing).animate(animation2,speed,options.easing);}element.animate(animation1,speed,options.easing).animate(animation,speed/2,options.easing).queue(done);$.effects.unshift(element,queuelen,anims+1);});var effectsEffectSlide=$.effects.define("slide","show",function(options,done){var startClip,startRef,element=$(this),map={up:["bottom","top"],down:["top","bottom"],left:["right","left"],right:["left","right"]},mode=options.mode,direction=options.direction||"left",ref=(direction==="up"||direction==="down")?"top":"left",positiveMotion=(direction==="up"||direction==="left"),distance=options.distance||element[ref==="top"?"outerHeight":"outerWidth"](true),animation={};$.effects.createPlaceholder(element);startClip=element.cssClip();startRef=element.position()[ref];animation[ref]=(positiveMotion?-1:1)*distance+startRef;animation.clip=element.cssClip();animation.clip[map[direction][1]]=animation.clip[map[direction][0]];if(mode==="show"){element.cssClip(animation.clip);element.css(ref,animation[ref]);animation.clip=startClip;animation[ref]=startRef;}element.animate(animation,{queue:false,duration:options.duration,easing:options.easing,complete:done});});var effect;if($.uiBackCompat!==false){effect=$.effects.define("transfer",function(options,done){$(this).transfer(options,done);});}var effectsEffectTransfer=effect;}));


;(function ( $, window, document, undefined ) {

  // Polyfill for requestAnimationFrame
  // via: https://gist.github.com/paulirish/1579671

  (function() {
    var lastTime = 0;
    var vendors = ['ms', 'moz', 'webkit', 'o'];
    for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
      window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
      window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame']
                                 || window[vendors[x]+'CancelRequestAnimationFrame'];
    }

    if (!window.requestAnimationFrame)
      window.requestAnimationFrame = function(callback) {
        var currTime = new Date().getTime();
        var timeToCall = Math.max(0, 16 - (currTime - lastTime));
        var id = window.setTimeout(function() { callback(currTime + timeToCall); },
          timeToCall);
        lastTime = currTime + timeToCall;
        return id;
      };

    if (!window.cancelAnimationFrame)
      window.cancelAnimationFrame = function(id) {
        clearTimeout(id);
      };
  }());


  // Parallax Constructor

  function Parallax(element, options) {
    var self = this;

    if (typeof options == 'object') {
      delete options.refresh;
      delete options.render;
      $.extend(this, options);
    }

    this.$element = $(element);

    if (!this.imageSrc && this.$element.is('img')) {
      this.imageSrc = this.$element.attr('src');
    }

    var positions = (this.position + '').toLowerCase().match(/\S+/g) || [];

    if (positions.length < 1) {
      positions.push('center');
    }
    if (positions.length == 1) {
      positions.push(positions[0]);
    }

    if (positions[0] == 'top' || positions[0] == 'bottom' || positions[1] == 'left' || positions[1] == 'right') {
      positions = [positions[1], positions[0]];
    }

    if (this.positionX != undefined) positions[0] = this.positionX.toLowerCase();
    if (this.positionY != undefined) positions[1] = this.positionY.toLowerCase();

    self.positionX = positions[0];
    self.positionY = positions[1];

    if (this.positionX != 'left' && this.positionX != 'right') {
      if (isNaN(parseInt(this.positionX))) {
        this.positionX = 'center';
      } else {
        this.positionX = parseInt(this.positionX);
      }
    }

    if (this.positionY != 'top' && this.positionY != 'bottom') {
      if (isNaN(parseInt(this.positionY))) {
        this.positionY = 'center';
      } else {
        this.positionY = parseInt(this.positionY);
      }
    }

    this.position =
      this.positionX + (isNaN(this.positionX)? '' : 'px') + ' ' +
      this.positionY + (isNaN(this.positionY)? '' : 'px');

    if (navigator.userAgent.match(/(iPod|iPhone|iPad)/)) {
      if (this.iosFix && !this.$element.is('img')) {
        this.$element.css({
          backgroundImage: 'url(' + this.imageSrc + ')',
          backgroundSize: 'cover',
          backgroundPosition: this.position
        });
      }
      return this;
    }

    if (navigator.userAgent.match(/(Android)/)) {
      if (this.androidFix && !this.$element.is('img')) {
        this.$element.css({
          backgroundImage: 'url(' + this.imageSrc + ')',
          backgroundSize: 'cover',
          backgroundPosition: this.position
        });
      }
      return this;
    }

    this.$mirror = $('<div />').prependTo('body');
    this.$slider = $('<img />').prependTo(this.$mirror);

    this.$mirror.addClass('parallax-mirror').css({
      visibility: 'hidden',
      zIndex: this.zIndex,
      position: 'fixed',
      top: 0,
      left: 0,
      overflow: 'hidden'
    });

    this.$slider.addClass('parallax-slider').one('load', function() {
      if (!self.naturalHeight || !self.naturalWidth) {
        self.naturalHeight = this.naturalHeight || this.height || 1;
        self.naturalWidth  = this.naturalWidth  || this.width  || 1;
      }
      self.aspectRatio = self.naturalWidth / self.naturalHeight;

      Parallax.isSetup || Parallax.setup();
      Parallax.sliders.push(self);
      Parallax.isFresh = false;
      Parallax.requestRender();
    });

    this.$slider[0].src = this.imageSrc;

    if (this.naturalHeight && this.naturalWidth || this.$slider[0].complete) {
      this.$slider.trigger('load');
    }

  };


  // Parallax Instance Methods

  $.extend(Parallax.prototype, {
    speed:    0.2,
    bleed:    0,
    zIndex:   -100,
    iosFix:   true,
    androidFix: true,
    position: 'center',
    overScrollFix: false,

    refresh: function() {
      this.boxWidth        = this.$element.outerWidth();
      this.boxHeight       = this.$element.outerHeight() + this.bleed * 2;
      this.boxOffsetTop    = this.$element.offset().top - this.bleed;
      this.boxOffsetLeft   = this.$element.offset().left;
      this.boxOffsetBottom = this.boxOffsetTop + this.boxHeight;

      var winHeight = Parallax.winHeight;
      var docHeight = Parallax.docHeight;
      var maxOffset = Math.min(this.boxOffsetTop, docHeight - winHeight);
      var minOffset = Math.max(this.boxOffsetTop + this.boxHeight - winHeight, 0);
      var imageHeightMin = this.boxHeight + (maxOffset - minOffset) * (1 - this.speed) | 0;
      var imageOffsetMin = (this.boxOffsetTop - maxOffset) * (1 - this.speed) | 0;

      if (imageHeightMin * this.aspectRatio >= this.boxWidth) {
        this.imageWidth    = imageHeightMin * this.aspectRatio | 0;
        this.imageHeight   = imageHeightMin;
        this.offsetBaseTop = imageOffsetMin;

        var margin = this.imageWidth - this.boxWidth;

        if (this.positionX == 'left') {
          this.offsetLeft = 0;
        } else if (this.positionX == 'right') {
          this.offsetLeft = - margin;
        } else if (!isNaN(this.positionX)) {
          this.offsetLeft = Math.max(this.positionX, - margin);
        } else {
          this.offsetLeft = - margin / 2 | 0;
        }
      } else {
        this.imageWidth    = this.boxWidth;
        this.imageHeight   = this.boxWidth / this.aspectRatio | 0;
        this.offsetLeft    = 0;

        var margin = this.imageHeight - imageHeightMin;

        if (this.positionY == 'top') {
          this.offsetBaseTop = imageOffsetMin;
        } else if (this.positionY == 'bottom') {
          this.offsetBaseTop = imageOffsetMin - margin;
        } else if (!isNaN(this.positionY)) {
          this.offsetBaseTop = imageOffsetMin + Math.max(this.positionY, - margin);
        } else {
          this.offsetBaseTop = imageOffsetMin - margin / 2 | 0;
        }
      }
    },

    render: function() {
      var scrollTop    = Parallax.scrollTop;
      var scrollLeft   = Parallax.scrollLeft;
      var overScroll   = this.overScrollFix ? Parallax.overScroll : 0;
      var scrollBottom = scrollTop + Parallax.winHeight;

      if (this.boxOffsetBottom > scrollTop && this.boxOffsetTop < scrollBottom) {
        this.visibility = 'visible';
      } else {
        this.visibility = 'hidden';
      }
      this.mirrorTop = this.boxOffsetTop  - scrollTop;
      this.mirrorLeft = this.boxOffsetLeft - scrollLeft;
      this.offsetTop = this.offsetBaseTop - this.mirrorTop * (1 - this.speed);

      this.$mirror.css({
        transform: 'translate3d(0px, 0px, 0px)',
        visibility: this.visibility,
        top: this.mirrorTop - overScroll,
        left: this.mirrorLeft,
        height: this.boxHeight,
        width: this.boxWidth
      });

      this.$slider.css({
        transform: 'translate3d(0px, 0px, 0px)',
        position: 'absolute',
        top: this.offsetTop,
        left: this.offsetLeft,
        height: this.imageHeight,
        width: this.imageWidth,
        maxWidth: 'none'
      });
    }
  });


  // Parallax Static Methods

  $.extend(Parallax, {
    scrollTop:    0,
    scrollLeft:   0,
    winHeight:    0,
    winWidth:     0,
    docHeight:    1 << 30,
    docWidth:     1 << 30,
    sliders:      [],
    isReady:      false,
    isFresh:      false,
    isBusy:       false,

    setup: function() {
      if (this.isReady) return;

      var $doc = $(document), $win = $(window);

      $win.on('scroll.px.parallax load.px.parallax', function() {
          var scrollTopMax  = Parallax.docHeight - Parallax.winHeight;
          var scrollLeftMax = Parallax.docWidth  - Parallax.winWidth;
          Parallax.scrollTop  = Math.max(0, Math.min(scrollTopMax,  $win.scrollTop()));
          Parallax.scrollLeft = Math.max(0, Math.min(scrollLeftMax, $win.scrollLeft()));
          Parallax.overScroll = Math.max($win.scrollTop() - scrollTopMax, Math.min($win.scrollTop(), 0));
          Parallax.requestRender();
        })
        .on('resize.px.parallax load.px.parallax', function() {
          Parallax.winHeight = $win.height();
          Parallax.winWidth  = $win.width();
          Parallax.docHeight = $doc.height();
          Parallax.docWidth  = $doc.width();
          Parallax.isFresh = false;
          Parallax.requestRender();
        });

      this.isReady = true;
    },

    configure: function(options) {
      if (typeof options == 'object') {
        delete options.refresh;
        delete options.render;
        $.extend(this.prototype, options);
      }
    },

    refresh: function() {
      $.each(this.sliders, function(){ this.refresh() });
      this.isFresh = true;
    },

    render: function() {
      this.isFresh || this.refresh();
      $.each(this.sliders, function(){ this.render() });
    },

    requestRender: function() {
      var self = this;

      if (!this.isBusy) {
        this.isBusy = true;
        window.requestAnimationFrame(function() {
          self.render();
          self.isBusy = false;
        });
      }
    }
  });


  // Parallax Plugin Definition

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this);
      var options = typeof option == 'object' && option;

      if (this == window || this == document || $this.is('body')) {
        Parallax.configure(options);
      }
      else if (!$this.data('px.parallax')) {
        options = $.extend({}, $this.data(), options);
        $this.data('px.parallax', new Parallax(this, options));
      }
      if (typeof option == 'string') {
        Parallax[option]();
      }
    })
  };

  var old = $.fn.parallax;

  $.fn.parallax             = Plugin;
  $.fn.parallax.Constructor = Parallax;


  // Parallax No Conflict

  $.fn.parallax.noConflict = function () {
    $.fn.parallax = old;
    return this;
  };


  // Parallax Data-API

  $(document).on('ready.px.parallax.data-api', function () {
    $('[data-parallax="scroll"]').parallax();
  });

}(jQuery, window, document));

(function (factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD
        define(['jquery'], factory);
    } else if (typeof exports === 'object') {
        // CommonJS
        factory(require('jquery'));
    } else {
        // Browser globals
        factory(jQuery);
    }
}(function ($) {
  var CountTo = function (element, options) {
    this.$element = $(element);
    this.options  = $.extend({}, CountTo.DEFAULTS, this.dataOptions(), options);
    this.init();
  };

  CountTo.DEFAULTS = {
    from: 0,               // the number the element should start at
    to: 0,                 // the number the element should end at
    speed: 1000,           // how long it should take to count between the target numbers
    refreshInterval: 100,  // how often the element should be updated
    decimals: 0,           // the number of decimal places to show
    formatter: formatter,  // handler for formatting the value before rendering
    onUpdate: null,        // callback method for every time the element is updated
    onComplete: null       // callback method for when the element finishes updating
  };

  CountTo.prototype.init = function () {
    this.value     = this.options.from;
    this.loops     = Math.ceil(this.options.speed / this.options.refreshInterval);
    this.loopCount = 0;
    this.increment = (this.options.to - this.options.from) / this.loops;
  };

  CountTo.prototype.dataOptions = function () {
    var options = {
      from:            this.$element.data('from'),
      to:              this.$element.data('to'),
      speed:           this.$element.data('speed'),
      refreshInterval: this.$element.data('refresh-interval'),
      decimals:        this.$element.data('decimals')
    };

    var keys = Object.keys(options);

    for (var i in keys) {
      var key = keys[i];

      if (typeof(options[key]) === 'undefined') {
        delete options[key];
      }
    }

    return options;
  };

  CountTo.prototype.update = function () {
    this.value += this.increment;
    this.loopCount++;

    this.render();

    if (typeof(this.options.onUpdate) == 'function') {
      this.options.onUpdate.call(this.$element, this.value);
    }

    if (this.loopCount >= this.loops) {
      clearInterval(this.interval);
      this.value = this.options.to;

      if (typeof(this.options.onComplete) == 'function') {
        this.options.onComplete.call(this.$element, this.value);
      }
    }
  };

  CountTo.prototype.render = function () {
    var formattedValue = this.options.formatter.call(this.$element, this.value, this.options);
    this.$element.text(formattedValue);
  };

  CountTo.prototype.restart = function () {
    this.stop();
    this.init();
    this.start();
  };

  CountTo.prototype.start = function () {
    this.stop();
    this.render();
    this.interval = setInterval(this.update.bind(this), this.options.refreshInterval);
  };

  CountTo.prototype.stop = function () {
    if (this.interval) {
      clearInterval(this.interval);
    }
  };

  CountTo.prototype.toggle = function () {
    if (this.interval) {
      this.stop();
    } else {
      this.start();
    }
  };

  function formatter(value, options) {
    return value.toFixed(options.decimals);
  }

  $.fn.countTo = function (option) {
    return this.each(function () {
      var $this   = $(this);
      var data    = $this.data('countTo');
      var init    = !data || typeof(option) === 'object';
      var options = typeof(option) === 'object' ? option : {};
      var method  = typeof(option) === 'string' ? option : 'start';

      if (init) {
        if (data) data.stop();
        $this.data('countTo', data = new CountTo(this, options));
      }

      data[method].call(data);
    });
  };
}));


(function($){$.fn.appear=function(f,o){var s=$.extend({one:true},o);return this.each(function(){var t=$(this);t.appeared=false;if(!f){t.trigger('appear',s.data);return;}var w=$(window);var c=function(){if(!t.is(':visible')){t.appeared=false;return;}var a=w.scrollLeft();var b=w.scrollTop();var o=t.offset();var x=o.left;var y=o.top;if(y+t.height()>=b&&y<=b+w.height()&&x+t.width()>=a&&x<=a+w.width()){if(!t.appeared)t.trigger('appear',s.data);}else{t.appeared=false;}};var m=function(){t.appeared=true;if(s.one){w.unbind('scroll',c);var i=$.inArray(c,$.fn.appear.checks);if(i>=0)$.fn.appear.checks.splice(i,1);}f.apply(this,arguments);};if(s.one)t.one('appear',s.data,m);else t.bind('appear',s.data,m);w.scroll(c);$.fn.appear.checks.push(c);(c)();});};$.extend($.fn.appear,{checks:[],timeout:null,checkAll:function(){var l=$.fn.appear.checks.length;if(l>0)while(l--)($.fn.appear.checks[l])();},run:function(){if($.fn.appear.timeout)clearTimeout($.fn.appear.timeout);$.fn.appear.timeout=setTimeout($.fn.appear.checkAll,20);}});$.each(['append','prepend','after','before','attr','removeAttr','addClass','removeClass','toggleClass','remove','css','show','hide'],function(i,n){var u=$.fn[n];if(u){$.fn[n]=function(){var r=u.apply(this,arguments);$.fn.appear.run();return r;}}});})(jQuery);

;(function ($, undef) {

var defaults, gm,
  gId = 0,
  isFunction = $.isFunction,
  isArray = $.isArray;

function isObject(m) {
  return typeof m === "object";
}

function isString(m) {
  return typeof m === "string";
}

function isNumber(m) {
  return typeof m === "number";
}

function isUndefined(m) {
  return m === undef;
}

/**
 * Initialize default values
 * defaults are defined at first gmap3 call to pass the rails asset pipeline and jasmine while google library is not yet loaded
 */
function initDefaults() {
  gm = google.maps;
  if (!defaults) {
    defaults = {
      verbose: false,
      queryLimit: {
        attempt: 5,
        delay: 250, // setTimeout(..., delay + random);
        random: 250
      },
      classes: (function () {
        var r = {};
        $.each("Map Marker InfoWindow Circle Rectangle OverlayView StreetViewPanorama KmlLayer TrafficLayer TransitLayer BicyclingLayer GroundOverlay StyledMapType ImageMapType".split(" "), function (_, k) {
          r[k] = gm[k];
        });
        return r;
      }()),
      map: {
        mapTypeId : gm.MapTypeId.ROADMAP,
        center: [46.578498, 2.457275],
        zoom: 2
      },
      overlay: {
        pane: "floatPane",
        content: "",
        offset: {
          x: 0,
          y: 0
        }
      },
      geoloc: {
        getCurrentPosition: {
          maximumAge: 60000,
          timeout: 5000
        }
      }
    }
  }
}


/**
 * Generate a new ID if not defined
 * @param id {string} (optional)
 * @param simulate {boolean} (optional)
 * @returns {*}
 */
function globalId(id, simulate) {
  return isUndefined(id) ? "gmap3_" + (simulate ? gId + 1 : ++gId) : id;
}


/**
 * Return true if current version of Google Maps is equal or above to these in parameter
 * @param version {string} Minimal version required
 * @return {Boolean}
 */
function googleVersionMin(version) {
  var i,
    gmVersion = gm.version.split(".");
  version = version.split(".");
  for (i = 0; i < gmVersion.length; i++) {
    gmVersion[i] = parseInt(gmVersion[i], 10);
  }
  for (i = 0; i < version.length; i++) {
    version[i] = parseInt(version[i], 10);
    if (gmVersion.hasOwnProperty(i)) {
      if (gmVersion[i] < version[i]) {
        return false;
      }
    } else {
      return false;
    }
  }
  return true;
}


/**
 * attach events from a container to a sender
 * td[
 *  events => { eventName => function, }
 *  onces  => { eventName => function, }
 *  data   => mixed data
 * ]
 **/
function attachEvents($container, args, sender, id, senders) {
  var td = args.td || {},
    context = {
      id: id,
      data: td.data,
      tag: td.tag
    };
  function bind(items, handler) {
    if (items) {
      $.each(items, function (name, f) {
        var self = $container, fn = f;
        if (isArray(f)) {
          self = f[0];
          fn = f[1];
        }
        handler(sender, name, function (event) {
          fn.apply(self, [senders || sender, event, context]);
        });
      });
    }
  }
  bind(td.events, gm.event.addListener);
  bind(td.onces, gm.event.addListenerOnce);
}

/**
 * Extract keys from object
 * @param obj {object}
 * @returns {Array}
 */
function getKeys(obj) {
  var k, keys = [];
  for (k in obj) {
    if (obj.hasOwnProperty(k)) {
      keys.push(k);
    }
  }
  return keys;
}

/**
 * copy a key content
 **/
function copyKey(target, key) {
  var i,
    args = arguments;
  for (i = 2; i < args.length; i++) {
    if (key in args[i]) {
      if (args[i].hasOwnProperty(key)) {
        target[key] = args[i][key];
        return;
      }
    }
  }
}

/**
 * Build a tuple
 * @param args {object}
 * @param value {object}
 * @returns {object}
 */
function tuple(args, value) {
  var k, i,
    keys = ["data", "tag", "id", "events",  "onces"],
    td = {};

  // "copy" the common data
  if (args.td) {
    for (k in args.td) {
      if (args.td.hasOwnProperty(k)) {
        if ((k !== "options") && (k !== "values")) {
          td[k] = args.td[k];
        }
      }
    }
  }
  // "copy" some specific keys from value first else args.td
  for (i = 0; i < keys.length; i++) {
    copyKey(td, keys[i], value, args.td);
  }

  // create an extended options
  td.options = $.extend({}, args.opts || {}, value.options || {});

  return td;
}

/**
 * Log error
 */
function error() {
  if (defaults.verbose) {
    var i, err = [];
    if (window.console && (isFunction(console.error))) {
      for (i = 0; i < arguments.length; i++) {
        err.push(arguments[i]);
      }
      console.error.apply(console, err);
    } else {
      err = "";
      for (i = 0; i < arguments.length; i++) {
        err += arguments[i].toString() + " ";
      }
      alert(err);
    }
  }
}

/**
 * return true if mixed is usable as number
 **/
function numeric(mixed) {
  return (isNumber(mixed) || isString(mixed)) && mixed !== "" && !isNaN(mixed);
}

/**
 * convert data to array
 **/
function array(mixed) {
  var k, a = [];
  if (!isUndefined(mixed)) {
    if (isObject(mixed)) {
      if (isNumber(mixed.length)) {
        a = mixed;
      } else {
        for (k in mixed) {
          a.push(mixed[k]);
        }
      }
    } else {
      a.push(mixed);
    }
  }
  return a;
}

/**
 * create a function to check a tag
 */
function ftag(tag) {
  if (tag) {
    if (isFunction(tag)) {
      return tag;
    }
    tag = array(tag);
    return function (val) {
      var i;
      if (isUndefined(val)) {
        return false;
      }
      if (isObject(val)) {
        for (i = 0; i < val.length; i++) {
          if ($.inArray(val[i], tag) >= 0) {
            return true;
          }
        }
        return false;
      }
      return $.inArray(val, tag) >= 0;
    };
  }
}


/**
 * convert mixed [ lat, lng ] objet to gm.LatLng
 **/
function toLatLng(mixed, emptyReturnMixed, noFlat) {
  var empty = emptyReturnMixed ? mixed : null;
  if (!mixed || (isString(mixed))) {
    return empty;
  }
  // defined latLng
  if (mixed.latLng) {
    return toLatLng(mixed.latLng);
  }
  // gm.LatLng object
  if (mixed instanceof gm.LatLng) {
    return mixed;
  }
  // {lat:X, lng:Y} object
  if (numeric(mixed.lat)) {
    return new gm.LatLng(mixed.lat, mixed.lng);
  }
  // [X, Y] object
  if (!noFlat && isArray(mixed)) {
    if (!numeric(mixed[0]) || !numeric(mixed[1])) {
      return empty;
    }
    return new gm.LatLng(mixed[0], mixed[1]);
  }
  return empty;
}

/**
 * convert mixed [ sw, ne ] object by gm.LatLngBounds
 **/
function toLatLngBounds(mixed) {
  var ne, sw;
  if (!mixed || mixed instanceof gm.LatLngBounds) {
    return mixed || null;
  }
  if (isArray(mixed)) {
    if (mixed.length === 2) {
      ne = toLatLng(mixed[0]);
      sw = toLatLng(mixed[1]);
    } else if (mixed.length === 4) {
      ne = toLatLng([mixed[0], mixed[1]]);
      sw = toLatLng([mixed[2], mixed[3]]);
    }
  } else {
    if (("ne" in mixed) && ("sw" in mixed)) {
      ne = toLatLng(mixed.ne);
      sw = toLatLng(mixed.sw);
    } else if (("n" in mixed) && ("e" in mixed) && ("s" in mixed) && ("w" in mixed)) {
      ne = toLatLng([mixed.n, mixed.e]);
      sw = toLatLng([mixed.s, mixed.w]);
    }
  }
  if (ne && sw) {
    return new gm.LatLngBounds(sw, ne);
  }
  return null;
}

/**
 * resolveLatLng
 **/
function resolveLatLng(ctx, method, runLatLng, args, attempt) {
  var latLng = runLatLng ? toLatLng(args.td, false, true) : false,
    conf = latLng ?  {latLng: latLng} : (args.td.address ? (isString(args.td.address) ? {address: args.td.address} : args.td.address) : false),
    cache = conf ? geocoderCache.get(conf) : false,
    self = this;
  if (conf) {
    attempt = attempt || 0; // convert undefined to int
    if (cache) {
      args.latLng = cache.results[0].geometry.location;
      args.results = cache.results;
      args.status = cache.status;
      method.apply(ctx, [args]);
    } else {
      if (conf.location) {
        conf.location = toLatLng(conf.location);
      }
      if (conf.bounds) {
        conf.bounds = toLatLngBounds(conf.bounds);
      }
      geocoder().geocode(
        conf,
        function (results, status) {
          if (status === gm.GeocoderStatus.OK) {
            geocoderCache.store(conf, {results: results, status: status});
            args.latLng = results[0].geometry.location;
            args.results = results;
            args.status = status;
            method.apply(ctx, [args]);
          } else if ((status === gm.GeocoderStatus.OVER_QUERY_LIMIT) && (attempt < defaults.queryLimit.attempt)) {
            setTimeout(
              function () {
                resolveLatLng.apply(self, [ctx, method, runLatLng, args, attempt + 1]);
              },
              defaults.queryLimit.delay + Math.floor(Math.random() * defaults.queryLimit.random)
            );
          } else {
            error("geocode failed", status, conf);
            args.latLng = args.results = false;
            args.status = status;
            method.apply(ctx, [args]);
          }
        }
      );
    }
  } else {
    args.latLng = toLatLng(args.td, false, true);
    method.apply(ctx, [args]);
  }
}

function resolveAllLatLng(list, ctx, method, args) {
  var self = this, i = -1;

  function resolve() {
    // look for next address to resolve
    do {
      i++;
    } while ((i < list.length) && !("address" in list[i]));

    // no address found, so run method
    if (i >= list.length) {
      method.apply(ctx, [args]);
      return;
    }

    resolveLatLng(
      self,
      function (args) {
        delete args.td;
        $.extend(list[i], args);
        resolve.apply(self, []); // resolve next (using apply avoid too much recursion)
      },
      true,
      {td: list[i]}
    );
  }
  resolve();
}



/**
 * geolocalise the user and return a LatLng
 **/
function geoloc(ctx, method, args) {
  var is_echo = false; // sometime, a kind of echo appear, this trick will notice once the first call is run to ignore the next one
  if (navigator && navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      function (pos) {
        if (!is_echo) {
          is_echo = true;
          args.latLng = new gm.LatLng(pos.coords.latitude, pos.coords.longitude);
          method.apply(ctx, [args]);
        }
      },
      function () {
        if (!is_echo) {
          is_echo = true;
          args.latLng = false;
          method.apply(ctx, [args]);
        }
      },
      args.opts.getCurrentPosition
    );
  } else {
    args.latLng = false;
    method.apply(ctx, [args]);
  }
}

/**
 * Return true if get is a direct call
 * it means :
 *   - get is the only key
 *   - get has no callback
 * @param obj {Object} The request to check
 * @return {Boolean}
 */
function isDirectGet(obj) {
  var k,
    result = false;
  if (isObject(obj) && obj.hasOwnProperty("get")) {
    for (k in obj) {
      if (k !== "get") {
        return false;
      }
    }
    result = !obj.get.hasOwnProperty("callback");
  }
  return result;
}
var services = {},
  geocoderCache = new GeocoderCache();


function geocoder(){
  if (!services.geocoder) {
    services.geocoder = new gm.Geocoder();
  }
  return services.geocoder;
}
/**
 * Class GeocoderCache
 * @constructor
 */
function GeocoderCache() {
  var cache = [];

  this.get = function (request) {
    if (cache.length) {
      var i, j, k, item, eq,
        keys = getKeys(request);
      for (i = 0; i < cache.length; i++) {
        item = cache[i];
        eq = keys.length === item.keys.length;
        for (j = 0; (j < keys.length) && eq; j++) {
          k = keys[j];
          eq = k in item.request;
          if (eq) {
            if (isObject(request[k]) && ("equals" in request[k]) && isFunction(request[k])) {
              eq = request[k].equals(item.request[k]);
            } else {
              eq = request[k] === item.request[k];
            }
          }
        }
        if (eq) {
          return item.results;
        }
      }
    }
  };

  this.store = function (request, results) {
    cache.push({request: request, keys: getKeys(request), results: results});
  };
}
/**
 * Class Stack
 * @constructor
 */
function Stack() {
  var st = [],
    self = this;

  self.empty = function () {
    return !st.length;
  };

  self.add = function (v) {
    st.push(v);
  };

  self.get = function () {
    return st.length ? st[0] : false;
  };

  self.ack = function () {
    st.shift();
  };
}
/**
 * Class Store
 * @constructor
 */
function Store() {
  var store = {}, // name => [id, ...]
    objects = {}, // id => object
    self = this;

  function normalize(res) {
    return {
      id: res.id,
      name: res.name,
      object: res.obj,
      tag: res.tag,
      data: res.data
    };
  }

  /**
   * add a mixed to the store
   **/
  self.add = function (args, name, obj, sub) {
    var td = args.td || {},
      id = globalId(td.id);
    if (!store[name]) {
      store[name] = [];
    }
    if (id in objects) { // object already exists: remove it
      self.clearById(id);
    }
    objects[id] = {obj: obj, sub: sub, name: name, id: id, tag: td.tag, data: td.data};
    store[name].push(id);
    return id;
  };

  /**
   * return a stored object by its id
   **/
  self.getById = function (id, sub, full) {
    var result = false;
    if (id in objects) {
      if (sub) {
        result = objects[id].sub;
      } else if (full) {
        result = normalize(objects[id]);
      } else {
        result = objects[id].obj;
      }
    }
    return result;
  };

  /**
   * return a stored value
   **/
  self.get = function (name, last, tag, full) {
    var n, id, check = ftag(tag);
    if (!store[name] || !store[name].length) {
      return null;
    }
    n = store[name].length;
    while (n) {
      n--;
      id = store[name][last ? n : store[name].length - n - 1];
      if (id && objects[id]) {
        if (check && !check(objects[id].tag)) {
          continue;
        }
        return full ? normalize(objects[id]) : objects[id].obj;
      }
    }
    return null;
  };

  /**
   * return all stored values
   **/
  self.all = function (name, tag, full) {
    var result = [],
      check = ftag(tag),
      find = function (n) {
        var i, id;
        for (i = 0; i < store[n].length; i++) {
          id = store[n][i];
          if (id && objects[id]) {
            if (check && !check(objects[id].tag)) {
              continue;
            }
            result.push(full ? normalize(objects[id]) : objects[id].obj);
          }
        }
      };
    if (name in store) {
      find(name);
    } else if (isUndefined(name)) { // internal use only
      for (name in store) {
        find(name);
      }
    }
    return result;
  };

  /**
   * hide and remove an object
   **/
  function rm(obj) {
    // Google maps element
    if (isFunction(obj.setMap)) {
      obj.setMap(null);
    }
    // jQuery
    if (isFunction(obj.remove)) {
      obj.remove();
    }
    // internal (cluster)
    if (isFunction(obj.free)) {
      obj.free();
    }
    obj = null;
  }

  /**
   * remove one object from the store
   **/
  self.rm = function (name, check, pop) {
    var idx, id;
    if (!store[name]) {
      return false;
    }
    if (check) {
      if (pop) {
        for (idx = store[name].length - 1; idx >= 0; idx--) {
          id = store[name][idx];
          if (check(objects[id].tag)) {
            break;
          }
        }
      } else {
        for (idx = 0; idx < store[name].length; idx++) {
          id = store[name][idx];
          if (check(objects[id].tag)) {
            break;
          }
        }
      }
    } else {
      idx = pop ? store[name].length - 1 : 0;
    }
    if (!(idx in store[name])) {
      return false;
    }
    return self.clearById(store[name][idx], idx);
  };

  /**
   * remove object from the store by its id
   **/
  self.clearById = function (id, idx) {
    if (id in objects) {
      var i, name = objects[id].name;
      for (i = 0; isUndefined(idx) && i < store[name].length; i++) {
        if (id === store[name][i]) {
          idx = i;
        }
      }
      rm(objects[id].obj);
      if (objects[id].sub) {
        rm(objects[id].sub);
      }
      delete objects[id];
      store[name].splice(idx, 1);
      return true;
    }
    return false;
  };

  /**
   * return an object from a container object in the store by its id
   * ! for now, only cluster manage this feature
   **/
  self.objGetById = function (id) {
    var result, idx;
    if (store.clusterer) {
      for (idx in store.clusterer) {
        if ((result = objects[store.clusterer[idx]].obj.getById(id)) !== false) {
          return result;
        }
      }
    }
    return false;
  };

  /**
   * remove object from a container object in the store by its id
   * ! for now, only cluster manage this feature
   **/
  self.objClearById = function (id) {
    var idx;
    if (store.clusterer) {
      for (idx in store.clusterer) {
        if (objects[store.clusterer[idx]].obj.clearById(id)) {
          return true;
        }
      }
    }
    return null;
  };

  /**
   * remove objects from the store
   **/
  self.clear = function (list, last, first, tag) {
    var k, i, name,
      check = ftag(tag);
    if (!list || !list.length) {
      list = [];
      for (k in store) {
        list.push(k);
      }
    } else {
      list = array(list);
    }
    for (i = 0; i < list.length; i++) {
      name = list[i];
      if (last) {
        self.rm(name, check, true);
      } else if (first) {
        self.rm(name, check, false);
      } else { // all
        while (self.rm(name, check, false)) {
        }
      }
    }
  };

  /**
   * remove object from a container object in the store by its tags
   * ! for now, only cluster manage this feature
   **/
  self.objClear = function (list, last, first, tag) {
    var idx;
    if (store.clusterer && ($.inArray("marker", list) >= 0 || !list.length)) {
      for (idx in store.clusterer) {
        objects[store.clusterer[idx]].obj.clear(last, first, tag);
      }
    }
  };
}
/**
 * Class Task
 * @param ctx
 * @param onEnd
 * @param td
 * @constructor
 */
function Task(ctx, onEnd, td) {
  var session = {},
    self = this,
    current,
    resolve = {
      latLng: { // function => bool (=> address = latLng)
        map: false,
        marker: false,
        infowindow: false,
        circle: false,
        overlay: false,
        getlatlng: false,
        getmaxzoom: false,
        getelevation: false,
        streetviewpanorama: false,
        getaddress: true
      },
      geoloc: {
        getgeoloc: true
      }
    };

  function unify(td) {
    var result = {};
    result[td] = {};
    return result;
  }

  if (isString(td)) {
    td =  unify(td);
  }

  function next() {
    var k;
    for (k in td) {
      if (td.hasOwnProperty(k) && !session.hasOwnProperty(k)) {
        return k;
      }
    }
  }

  self.run = function () {
    var k, opts;
    while (k = next()) {
      if (isFunction(ctx[k])) {
        current = k;
        opts = $.extend(true, {}, defaults[k] || {}, td[k].options || {});
        if (k in resolve.latLng) {
          if (td[k].values) {
            resolveAllLatLng(td[k].values, ctx, ctx[k], {td: td[k], opts: opts, session: session});
          } else {
            resolveLatLng(ctx, ctx[k], resolve.latLng[k], {td: td[k], opts: opts, session: session});
          }
        } else if (k in resolve.geoloc) {
          geoloc(ctx, ctx[k], {td: td[k], opts: opts, session: session});
        } else {
          ctx[k].apply(ctx, [{td: td[k], opts: opts, session: session}]);
        }
        return; // wait until ack
      } else {
        session[k] = null;
      }
    }
    onEnd.apply(ctx, [td, session]);
  };

  self.ack = function(result){
    session[current] = result;
    self.run.apply(self, []);
  };
}

function directionsService(){
  if (!services.ds) {
    services.ds = new gm.DirectionsService();
  }
  return services.ds;
}

function distanceMatrixService() {
  if (!services.dms) {
    services.dms = new gm.DistanceMatrixService();
  }
  return services.dms;
}

function maxZoomService() {
  if (!services.mzs) {
    services.mzs = new gm.MaxZoomService();
  }
  return services.mzs;
}

function elevationService() {
  if (!services.es) {
    services.es = new gm.ElevationService();
  }
  return services.es;
}

  /**
   * Usefull to get a projection
   * => done in a function, to let dead-code analyser works without google library loaded
   **/
  function newEmptyOverlay(map, radius) {
    function Overlay() {
      var self = this;
      self.onAdd = function () {};
      self.onRemove = function () {};
      self.draw = function () {};
      return defaults.classes.OverlayView.apply(self, []);
    }
    Overlay.prototype = defaults.classes.OverlayView.prototype;
    var obj = new Overlay();
    obj.setMap(map);
    return obj;
  }

/**
 * Class InternalClusterer
 * This class manage clusters thanks to "td" objects
 *
 * Note:
 * Individuals marker are created on the fly thanks to the td objects, they are
 * first set to null to keep the indexes synchronised with the td list
 * This is the "display" function, set by the gmap3 object, which uses theses data
 * to create markers when clusters are not required
 * To remove a marker, the objects are deleted and set not null in arrays
 *    markers[key]
 *      = null : marker exist but has not been displayed yet
 *      = false : marker has been removed
 **/
function InternalClusterer($container, map, raw) {
  var timer, projection,
    ffilter, fdisplay, ferror, // callback function
    updating = false,
    updated = false,
    redrawing = false,
    ready = false,
    enabled = true,
    self = this,
    events =  [],
    store = {},   // combin of index (id1-id2-...) => object
    ids = {},     // unique id => index
    idxs = {},    // index => unique id
    markers = [], // index => marker
    tds = [],   // index => td or null if removed
    values = [],  // index => value
    overlay = newEmptyOverlay(map, raw.radius);

  main();

  function prepareMarker(index) {
    if (!markers[index]) {
      delete tds[index].options.map;
      markers[index] = new defaults.classes.Marker(tds[index].options);
      attachEvents($container, {td: tds[index]}, markers[index], tds[index].id);
    }
  }

  /**
   * return a marker by its id, null if not yet displayed and false if no exist or removed
   **/
  self.getById = function (id) {
    if (id in ids) {
      prepareMarker(ids[id]);
      return  markers[ids[id]];
    }
    return false;
  };

  /**
   * remove one object from the store
   **/
  self.rm = function (id) {
    var index = ids[id];
    if (markers[index]) { // can be null
      markers[index].setMap(null);
    }
    delete markers[index];
    markers[index] = false;

    delete tds[index];
    tds[index] = false;

    delete values[index];
    values[index] = false;

    delete ids[id];
    delete idxs[index];
    updated = true;
  };

  /**
   * remove a marker by its id
   **/
  self.clearById = function (id) {
    if (id in ids){
      self.rm(id);
      return true;
    }
  };

  /**
   * remove objects from the store
   **/
  self.clear = function (last, first, tag) {
    var start, stop, step, index, i,
      list = [],
      check = ftag(tag);
    if (last) {
      start = tds.length - 1;
      stop = -1;
      step = -1;
    } else {
      start = 0;
      stop =  tds.length;
      step = 1;
    }
    for (index = start; index !== stop; index += step) {
      if (tds[index]) {
        if (!check || check(tds[index].tag)) {
          list.push(idxs[index]);
          if (first || last) {
            break;
          }
        }
      }
    }
    for (i = 0; i < list.length; i++) {
      self.rm(list[i]);
    }
  };

  // add a "marker td" to the cluster
  self.add = function (td, value) {
    td.id = globalId(td.id);
    self.clearById(td.id);
    ids[td.id] = markers.length;
    idxs[markers.length] = td.id;
    markers.push(null); // null = marker not yet created / displayed
    tds.push(td);
    values.push(value);
    updated = true;
  };

  // add a real marker to the cluster
  self.addMarker = function (marker, td) {
    td = td || {};
    td.id = globalId(td.id);
    self.clearById(td.id);
    if (!td.options) {
      td.options = {};
    }
    td.options.position = marker.getPosition();
    attachEvents($container, {td: td}, marker, td.id);
    ids[td.id] = markers.length;
    idxs[markers.length] = td.id;
    markers.push(marker);
    tds.push(td);
    values.push(td.data || {});
    updated = true;
  };

  // return a "marker td" by its index
  self.td = function (index) {
    return tds[index];
  };

  // return a "marker value" by its index
  self.value = function (index) {
    return values[index];
  };

  // return a marker by its index
  self.marker = function (index) {
    if (index in markers) {
      prepareMarker(index);
      return  markers[index];
    }
    return false;
  };

  // return a marker by its index
  self.markerIsSet = function (index) {
    return Boolean(markers[index]);
  };

  // store a new marker instead if the default "false"
  self.setMarker = function (index, marker) {
    markers[index] = marker;
  };

  // link the visible overlay to the logical data (to hide overlays later)
  self.store = function (cluster, obj, shadow) {
    store[cluster.ref] = {obj: obj, shadow: shadow};
  };

  // free all objects
  self.free = function () {
    var i;
    for(i = 0; i < events.length; i++) {
      gm.event.removeListener(events[i]);
    }
    events = [];

    $.each(store, function (key) {
      flush(key);
    });
    store = {};

    $.each(tds, function (i) {
      tds[i] = null;
    });
    tds = [];

    $.each(markers, function (i) {
      if (markers[i]) { // false = removed
        markers[i].setMap(null);
        delete markers[i];
      }
    });
    markers = [];

    $.each(values, function (i) {
      delete values[i];
    });
    values = [];

    ids = {};
    idxs = {};
  };

  // link the display function
  self.filter = function (f) {
    ffilter = f;
    redraw();
  };

  // enable/disable the clustering feature
  self.enable = function (value) {
    if (enabled !== value) {
      enabled = value;
      redraw();
    }
  };

  // link the display function
  self.display = function (f) {
    fdisplay = f;
  };

  // link the errorfunction
  self.error = function (f) {
    ferror = f;
  };

  // lock the redraw
  self.beginUpdate = function () {
    updating = true;
  };

  // unlock the redraw
  self.endUpdate = function () {
    updating = false;
    if (updated) {
      redraw();
    }
  };

  // extends current bounds with internal markers
  self.autofit = function (bounds) {
    var i;
    for (i = 0; i < tds.length; i++) {
      if (tds[i]) {
        bounds.extend(tds[i].options.position);
      }
    }
  };

  // bind events
  function main() {
    projection = overlay.getProjection();
    if (!projection) {
      setTimeout(function () { main.apply(self, []); }, 25);
      return;
    }
    ready = true;
    events.push(gm.event.addListener(map, "zoom_changed", delayRedraw));
    events.push(gm.event.addListener(map, "bounds_changed", delayRedraw));
    redraw();
  }

  // flush overlays
  function flush(key) {
    if (isObject(store[key])) { // is overlay
      if (isFunction(store[key].obj.setMap)) {
        store[key].obj.setMap(null);
      }
      if (isFunction(store[key].obj.remove)) {
        store[key].obj.remove();
      }
      if (isFunction(store[key].shadow.remove)) {
        store[key].obj.remove();
      }
      if (isFunction(store[key].shadow.setMap)) {
        store[key].shadow.setMap(null);
      }
      delete store[key].obj;
      delete store[key].shadow;
    } else if (markers[key]) { // marker not removed
      markers[key].setMap(null);
      // don't remove the marker object, it may be displayed later
    }
    delete store[key];
  }

  /**
   * return the distance between 2 latLng couple into meters
   * Params :
   *  Lat1, Lng1, Lat2, Lng2
   *  LatLng1, Lat2, Lng2
   *  Lat1, Lng1, LatLng2
   *  LatLng1, LatLng2
   **/
  function distanceInMeter() {
    var lat1, lat2, lng1, lng2, e, f, g, h,
      cos = Math.cos,
      sin = Math.sin,
      args = arguments;
    if (args[0] instanceof gm.LatLng) {
      lat1 = args[0].lat();
      lng1 = args[0].lng();
      if (args[1] instanceof gm.LatLng) {
        lat2 = args[1].lat();
        lng2 = args[1].lng();
      } else {
        lat2 = args[1];
        lng2 = args[2];
      }
    } else {
      lat1 = args[0];
      lng1 = args[1];
      if (args[2] instanceof gm.LatLng) {
        lat2 = args[2].lat();
        lng2 = args[2].lng();
      } else {
        lat2 = args[2];
        lng2 = args[3];
      }
    }
    e = Math.PI * lat1 / 180;
    f = Math.PI * lng1 / 180;
    g = Math.PI * lat2 / 180;
    h = Math.PI * lng2 / 180;
    return 1000 * 6371 * Math.acos(Math.min(cos(e) * cos(g) * cos(f) * cos(h) + cos(e) * sin(f) * cos(g) * sin(h) + sin(e) * sin(g), 1));
  }

  // extend the visible bounds
  function extendsMapBounds() {
    var radius = distanceInMeter(map.getCenter(), map.getBounds().getNorthEast()),
      circle = new gm.Circle({
        center: map.getCenter(),
        radius: 1.25 * radius // + 25%
      });
    return circle.getBounds();
  }

  // return an object where keys are store keys
  function getStoreKeys() {
    var k,
      keys = {};
    for (k in store) {
      keys[k] = true;
    }
    return keys;
  }

  // async the delay function
  function delayRedraw() {
    clearTimeout(timer);
    timer = setTimeout(redraw, 25);
  }

  // generate bounds extended by radius
  function extendsBounds(latLng) {
    var p = projection.fromLatLngToDivPixel(latLng),
      ne = projection.fromDivPixelToLatLng(new gm.Point(p.x + raw.radius, p.y - raw.radius)),
      sw = projection.fromDivPixelToLatLng(new gm.Point(p.x - raw.radius, p.y + raw.radius));
    return new gm.LatLngBounds(sw, ne);
  }

  // run the clustering process and call the display function
  function redraw() {
    if (updating || redrawing || !ready) {
      return;
    }

    var i, j, k, indexes, check = false, bounds, cluster, position, previous, lat, lng, loop,
      keys = [],
      used = {},
      zoom = map.getZoom(),
      forceDisabled = ("maxZoom" in raw) && (zoom > raw.maxZoom),
      previousKeys = getStoreKeys();

    // reset flag
    updated = false;

    if (zoom > 3) {
      // extend the bounds of the visible map to manage clusters near the boundaries
      bounds = extendsMapBounds();

      // check contain only if boundaries are valid
      check = bounds.getSouthWest().lng() < bounds.getNorthEast().lng();
    }

    // calculate positions of "visibles" markers (in extended bounds)
    for (i = 0; i < tds.length; i++) {
      if (tds[i] && (!check || bounds.contains(tds[i].options.position)) && (!ffilter || ffilter(values[i]))) {
        keys.push(i);
      }
    }

    // for each "visible" marker, search its neighbors to create a cluster
    // we can't do a classical "for" loop, because, analysis can bypass a marker while focusing on cluster
    while (1) {
      i = 0;
      while (used[i] && (i < keys.length)) { // look for the next marker not used
        i++;
      }
      if (i === keys.length) {
        break;
      }

      indexes = [];

      if (enabled && !forceDisabled) {
        loop = 10;
        do {
          previous = indexes;
          indexes = [];
          loop--;

          if (previous.length) {
            position = bounds.getCenter();
          } else {
            position = tds[keys[i]].options.position;
          }
          bounds = extendsBounds(position);

          for (j = i; j < keys.length; j++) {
            if (used[j]) {
              continue;
            }
            if (bounds.contains(tds[keys[j]].options.position)) {
              indexes.push(j);
            }
          }
        } while ((previous.length < indexes.length) && (indexes.length > 1) && loop);
      } else {
        for (j = i; j < keys.length; j++) {
          if (!used[j]) {
            indexes.push(j);
            break;
          }
        }
      }

      cluster = {indexes: [], ref: []};
      lat = lng = 0;
      for (k = 0; k < indexes.length; k++) {
        used[indexes[k]] = true;
        cluster.indexes.push(keys[indexes[k]]);
        cluster.ref.push(keys[indexes[k]]);
        lat += tds[keys[indexes[k]]].options.position.lat();
        lng += tds[keys[indexes[k]]].options.position.lng();
      }
      lat /= indexes.length;
      lng /= indexes.length;
      cluster.latLng = new gm.LatLng(lat, lng);

      cluster.ref = cluster.ref.join("-");

      if (cluster.ref in previousKeys) { // cluster doesn't change
        delete previousKeys[cluster.ref]; // remove this entry, these still in this array will be removed
      } else { // cluster is new
        if (indexes.length === 1) { // alone markers are not stored, so need to keep the key (else, will be displayed every time and marker will blink)
          store[cluster.ref] = true;
        }
        fdisplay(cluster);
      }
    }

    // flush the previous overlays which are not still used
    $.each(previousKeys, function (key) {
      flush(key);
    });
    redrawing = false;
  }
}
/**
 * Class Clusterer
 * a facade with limited method for external use
 **/
function Clusterer(id, internalClusterer) {
  var self = this;
  self.id = function () {
    return id;
  };
  self.filter = function (f) {
    internalClusterer.filter(f);
  };
  self.enable = function () {
    internalClusterer.enable(true);
  };
  self.disable = function () {
    internalClusterer.enable(false);
  };
  self.add = function (marker, td, lock) {
    if (!lock) {
      internalClusterer.beginUpdate();
    }
    internalClusterer.addMarker(marker, td);
    if (!lock) {
      internalClusterer.endUpdate();
    }
  };
  self.getById = function (id) {
    return internalClusterer.getById(id);
  };
  self.clearById = function (id, lock) {
    var result;
    if (!lock) {
      internalClusterer.beginUpdate();
    }
    result = internalClusterer.clearById(id);
    if (!lock) {
      internalClusterer.endUpdate();
    }
    return result;
  };
  self.clear = function (last, first, tag, lock) {
    if (!lock) {
      internalClusterer.beginUpdate();
    }
    internalClusterer.clear(last, first, tag);
    if (!lock) {
      internalClusterer.endUpdate();
    }
  };
}

/**
 * Class OverlayView
 * @constructor
 */
function OverlayView(map, opts, latLng, $div) {
  var self = this,
    listeners = [];

  defaults.classes.OverlayView.call(self);
  self.setMap(map);

  self.onAdd = function () {
    var panes = self.getPanes();
    if (opts.pane in panes) {
      $(panes[opts.pane]).append($div);
    }
    $.each("dblclick click mouseover mousemove mouseout mouseup mousedown".split(" "), function (i, name) {
      listeners.push(
        gm.event.addDomListener($div[0], name, function (e) {
          $.Event(e).stopPropagation();
          gm.event.trigger(self, name, [e]);
          self.draw();
        })
      );
    });
    listeners.push(
      gm.event.addDomListener($div[0], "contextmenu", function (e) {
        $.Event(e).stopPropagation();
        gm.event.trigger(self, "rightclick", [e]);
        self.draw();
      })
    );
  };

  self.getPosition = function () {
    return latLng;
  };

  self.setPosition = function (newLatLng) {
    latLng = newLatLng;
    self.draw();
  };

  self.draw = function () {
    var ps = self.getProjection().fromLatLngToDivPixel(latLng);
    $div
      .css("left", (ps.x + opts.offset.x) + "px")
      .css("top", (ps.y + opts.offset.y) + "px");
  };

  self.onRemove = function () {
    var i;
    for (i = 0; i < listeners.length; i++) {
      gm.event.removeListener(listeners[i]);
    }
    $div.remove();
  };

  self.hide = function () {
    $div.hide();
  };

  self.show = function () {
    $div.show();
  };

  self.toggle = function () {
    if ($div) {
      if ($div.is(":visible")) {
        self.show();
      } else {
        self.hide();
      }
    }
  };

  self.toggleDOM = function () {
    self.setMap(self.getMap() ? null : map);
  };

  self.getDOMElement = function () {
    return $div[0];
  };
}

function Gmap3($this) {
  var self = this,
    stack = new Stack(),
    store = new Store(),
    map = null,
    task;

  /**
   * if not running, start next action in stack
   **/
  function run() {
    if (!task && (task = stack.get())) {
      task.run();
    }
  }

  /**
   * called when action in finished, to acknoledge the current in stack and start next one
   **/
  function end() {
    task = null;
    stack.ack();
    run.call(self); // restart to high level scope
  }

//-----------------------------------------------------------------------//
// Tools
//-----------------------------------------------------------------------//

  /**
   * execute callback functions
   **/
  function callback(args) {
    var params,
      cb = args.td.callback;
    if (cb) {
      params = Array.prototype.slice.call(arguments, 1);
      if (isFunction(cb)) {
        cb.apply($this, params);
      } else if (isArray(cb)) {
        if (isFunction(cb[1])) {
          cb[1].apply(cb[0], params);
        }
      }
    }
  }

  /**
   * execute ending functions
   **/
  function manageEnd(args, obj, id) {
    if (id) {
      attachEvents($this, args, obj, id);
    }
    callback(args, obj);
    task.ack(obj);
  }

  /**
   * initialize the map if not yet initialized
   **/
  function newMap(latLng, args) {
    args = args || {};
    var opts = args.td && args.td.options ? args.td.options : 0;
    if (map) {
      if (opts) {
        if (opts.center) {
          opts.center = toLatLng(opts.center);
        }
        map.setOptions(opts);
      }
    } else {
      opts = args.opts || $.extend(true, {}, defaults.map, opts || {});
      opts.center = latLng || toLatLng(opts.center);
      map = new defaults.classes.Map($this.get(0), opts);
    }
  }

  /**
   * store actions to execute in a stack manager
   **/
  self._plan = function (list) {
    var k;
    for (k = 0; k < list.length; k++) {
      stack.add(new Task(self, end, list[k]));
    }
    run();
  };

  /**
   * Initialize gm.Map object
   **/
  self.map = function (args) {
    newMap(args.latLng, args);
    attachEvents($this, args, map);
    manageEnd(args, map);
  };

  /**
   * destroy an existing instance
   **/
  self.destroy = function (args) {
    store.clear();
    $this.empty();
    if (map) {
      map = null;
    }
    manageEnd(args, true);
  };

  /**
   * add an overlay
   **/
  self.overlay = function (args, internal) {
    var objs = [],
      multiple = "values" in args.td;
    if (!multiple) {
      args.td.values = [{latLng: args.latLng, options: args.opts}];
    }
    if (!args.td.values.length) {
      manageEnd(args, false);
      return;
    }
    if (!OverlayView.__initialised) {
      OverlayView.prototype = new defaults.classes.OverlayView();
      OverlayView.__initialised = true;
    }
    $.each(args.td.values, function (i, value) {
      var id, obj, td = tuple(args, value),
        $div = $(document.createElement("div")).css({
          border: "none",
          borderWidth: 0,
          position: "absolute"
        });
      $div.append(td.options.content);
      obj = new OverlayView(map, td.options, toLatLng(td) || toLatLng(value), $div);
      objs.push(obj);
      $div = null; // memory leak
      if (!internal) {
        id = store.add(args, "overlay", obj);
        attachEvents($this, {td: td}, obj, id);
      }
    });
    if (internal) {
      return objs[0];
    }
    manageEnd(args, multiple ? objs : objs[0]);
  };

  /**
   * Create an InternalClusterer object
   **/
  function createClusterer(raw) {
    var internalClusterer = new InternalClusterer($this, map, raw),
      td = {},
      styles = {},
      thresholds = [],
      isInt = /^[0-9]+$/,
      calculator,
      k;

    for (k in raw) {
      if (isInt.test(k)) {
        thresholds.push(1 * k); // cast to int
        styles[k] = raw[k];
        styles[k].width = styles[k].width || 0;
        styles[k].height = styles[k].height || 0;
      } else {
        td[k] = raw[k];
      }
    }
    thresholds.sort(function (a, b) { return a > b; });

    // external calculator
    if (td.calculator) {
      calculator = function (indexes) {
        var data = [];
        $.each(indexes, function (i, index) {
          data.push(internalClusterer.value(index));
        });
        return td.calculator.apply($this, [data]);
      };
    } else {
      calculator = function (indexes) {
        return indexes.length;
      };
    }

    // set error function
    internalClusterer.error(function () {
      error.apply(self, arguments);
    });

    // set display function
    internalClusterer.display(function (cluster) {
      var i, style, atd, obj, offset, shadow,
        cnt = calculator(cluster.indexes);

      // look for the style to use
      if (raw.force || cnt > 1) {
        for (i = 0; i < thresholds.length; i++) {
          if (thresholds[i] <= cnt) {
            style = styles[thresholds[i]];
          }
        }
      }

      if (style) {
        offset = style.offset || [-style.width/2, -style.height/2];
        // create a custom overlay command
        // nb: 2 extends are faster self a deeper extend
        atd = $.extend({}, td);
        atd.options = $.extend({
            pane: "overlayLayer",
            content: style.content ? style.content.replace("CLUSTER_COUNT", cnt) : "",
            offset: {
              x: ("x" in offset ? offset.x : offset[0]) || 0,
              y: ("y" in offset ? offset.y : offset[1]) || 0
            }
          },
          td.options || {});

        obj = self.overlay({td: atd, opts: atd.options, latLng: toLatLng(cluster)}, true);

        atd.options.pane = "floatShadow";
        atd.options.content = $(document.createElement("div")).width(style.width + "px").height(style.height + "px").css({cursor: "pointer"});
        shadow = self.overlay({td: atd, opts: atd.options, latLng: toLatLng(cluster)}, true);

        // store data to the clusterer
        td.data = {
          latLng: toLatLng(cluster),
          markers:[]
        };
        $.each(cluster.indexes, function(i, index){
          td.data.markers.push(internalClusterer.value(index));
          if (internalClusterer.markerIsSet(index)){
            internalClusterer.marker(index).setMap(null);
          }
        });
        attachEvents($this, {td: td}, shadow, undef, {main: obj, shadow: shadow});
        internalClusterer.store(cluster, obj, shadow);
      } else {
        $.each(cluster.indexes, function (i, index) {
          internalClusterer.marker(index).setMap(map);
        });
      }
    });

    return internalClusterer;
  }

  /**
   *  add a marker
   **/
  self.marker = function (args) {
    var objs,
      clusterer, internalClusterer,
      multiple = "values" in args.td,
      init = !map;
    if (!multiple) {
      args.opts.position = args.latLng || toLatLng(args.opts.position);
      args.td.values = [{options: args.opts}];
    }
    if (!args.td.values.length) {
      manageEnd(args, false);
      return;
    }
    if (init) {
      newMap();
    }
    if (args.td.cluster && !map.getBounds()) { // map not initialised => bounds not available : wait for map if clustering feature is required
      gm.event.addListenerOnce(map, "bounds_changed", function () { self.marker.apply(self, [args]); });
      return;
    }
    if (args.td.cluster) {
      if (args.td.cluster instanceof Clusterer) {
        clusterer = args.td.cluster;
        internalClusterer = store.getById(clusterer.id(), true);
      } else {
        internalClusterer = createClusterer(args.td.cluster);
        clusterer = new Clusterer(globalId(args.td.id, true), internalClusterer);
        store.add(args, "clusterer", clusterer, internalClusterer);
      }
      internalClusterer.beginUpdate();

      $.each(args.td.values, function (i, value) {
        var td = tuple(args, value);
        td.options.position = td.options.position ? toLatLng(td.options.position) : toLatLng(value);
        if (td.options.position) {
          td.options.map = map;
          if (init) {
            map.setCenter(td.options.position);
            init = false;
          }
          internalClusterer.add(td, value);
        }
      });

      internalClusterer.endUpdate();
      manageEnd(args, clusterer);

    } else {
      objs = [];
      $.each(args.td.values, function (i, value) {
        var id, obj,
          td = tuple(args, value);
        td.options.position = td.options.position ? toLatLng(td.options.position) : toLatLng(value);
        if (td.options.position) {
          td.options.map = map;
          if (init) {
            map.setCenter(td.options.position);
            init = false;
          }
          obj = new defaults.classes.Marker(td.options);
          objs.push(obj);
          id = store.add({td: td}, "marker", obj);
          attachEvents($this, {td: td}, obj, id);
        }
      });
      manageEnd(args, multiple ? objs : objs[0]);
    }
  };

  /**
   * return a route
   **/
  self.getroute = function (args) {
    args.opts.origin = toLatLng(args.opts.origin, true);
    args.opts.destination = toLatLng(args.opts.destination, true);
    directionsService().route(
      args.opts,
      function (results, status) {
        callback(args, status === gm.DirectionsStatus.OK ? results : false, status);
        task.ack();
      }
    );
  };

  /**
   * return the distance between an origin and a destination
   *
   **/
  self.getdistance = function (args) {
    var i;
    args.opts.origins = array(args.opts.origins);
    for (i = 0; i < args.opts.origins.length; i++) {
      args.opts.origins[i] = toLatLng(args.opts.origins[i], true);
    }
    args.opts.destinations = array(args.opts.destinations);
    for (i = 0; i < args.opts.destinations.length; i++) {
      args.opts.destinations[i] = toLatLng(args.opts.destinations[i], true);
    }
    distanceMatrixService().getDistanceMatrix(
      args.opts,
      function (results, status) {
        callback(args, status === gm.DistanceMatrixStatus.OK ? results : false, status);
        task.ack();
      }
    );
  };

  /**
   * add an infowindow
   **/
  self.infowindow = function (args) {
    var objs = [],
      multiple = "values" in args.td;
    if (!multiple) {
      if (args.latLng) {
        args.opts.position = args.latLng;
      }
      args.td.values = [{options: args.opts}];
    }
    $.each(args.td.values, function (i, value) {
      var id, obj,
        td = tuple(args, value);
      td.options.position = td.options.position ? toLatLng(td.options.position) : toLatLng(value.latLng);
      if (!map) {
        newMap(td.options.position);
      }
      obj = new defaults.classes.InfoWindow(td.options);
      if (obj && (isUndefined(td.open) || td.open)) {
        if (multiple) {
          obj.open(map, td.anchor || undef);
        } else {
          obj.open(map, td.anchor || (args.latLng ? undef : (args.session.marker ? args.session.marker : undef)));
        }
      }
      objs.push(obj);
      id = store.add({td: td}, "infowindow", obj);
      attachEvents($this, {td: td}, obj, id);
    });
    manageEnd(args, multiple ? objs : objs[0]);
  };

  /**
   * add a circle
   **/
  self.circle = function (args) {
    var objs = [],
      multiple = "values" in args.td;
    if (!multiple) {
      args.opts.center = args.latLng || toLatLng(args.opts.center);
      args.td.values = [{options: args.opts}];
    }
    if (!args.td.values.length) {
      manageEnd(args, false);
      return;
    }
    $.each(args.td.values, function (i, value) {
      var id, obj,
        td = tuple(args, value);
      td.options.center = td.options.center ? toLatLng(td.options.center) : toLatLng(value);
      if (!map) {
        newMap(td.options.center);
      }
      td.options.map = map;
      obj = new defaults.classes.Circle(td.options);
      objs.push(obj);
      id = store.add({td: td}, "circle", obj);
      attachEvents($this, {td: td}, obj, id);
    });
    manageEnd(args, multiple ? objs : objs[0]);
  };

  /**
   * returns address structure from latlng
   **/
  self.getaddress = function (args) {
    callback(args, args.results, args.status);
    task.ack();
  };

  /**
   * returns latlng from an address
   **/
  self.getlatlng = function (args) {
    callback(args, args.results, args.status);
    task.ack();
  };

  /**
   * return the max zoom of a location
   **/
  self.getmaxzoom = function (args) {
    maxZoomService().getMaxZoomAtLatLng(
      args.latLng,
      function (result) {
        callback(args, result.status === gm.MaxZoomStatus.OK ? result.zoom : false, status);
        task.ack();
      }
    );
  };

  /**
   * return the elevation of a location
   **/
  self.getelevation = function (args) {
    var i,
      locations = [],
      f = function (results, status) {
        callback(args, status === gm.ElevationStatus.OK ? results : false, status);
        task.ack();
      };

    if (args.latLng) {
      locations.push(args.latLng);
    } else {
      locations = array(args.td.locations || []);
      for (i = 0; i < locations.length; i++) {
        locations[i] = toLatLng(locations[i]);
      }
    }
    if (locations.length) {
      elevationService().getElevationForLocations({locations: locations}, f);
    } else {
      if (args.td.path && args.td.path.length) {
        for (i = 0; i < args.td.path.length; i++) {
          locations.push(toLatLng(args.td.path[i]));
        }
      }
      if (locations.length) {
        elevationService().getElevationAlongPath({path: locations, samples:args.td.samples}, f);
      } else {
        task.ack();
      }
    }
  };

  /**
   * define defaults values
   **/
  self.defaults = function (args) {
    $.each(args.td, function(name, value) {
      if (isObject(defaults[name])) {
        defaults[name] = $.extend({}, defaults[name], value);
      } else {
        defaults[name] = value;
      }
    });
    task.ack(true);
  };

  /**
   * add a rectangle
   **/
  self.rectangle = function (args) {
    var objs = [],
      multiple = "values" in args.td;
    if (!multiple) {
      args.td.values = [{options: args.opts}];
    }
    if (!args.td.values.length) {
      manageEnd(args, false);
      return;
    }
    $.each(args.td.values, function (i, value) {
      var id, obj,
        td = tuple(args, value);
      td.options.bounds = td.options.bounds ? toLatLngBounds(td.options.bounds) : toLatLngBounds(value);
      if (!map) {
        newMap(td.options.bounds.getCenter());
      }
      td.options.map = map;

      obj = new defaults.classes.Rectangle(td.options);
      objs.push(obj);
      id = store.add({td: td}, "rectangle", obj);
      attachEvents($this, {td: td}, obj, id);
    });
    manageEnd(args, multiple ? objs : objs[0]);
  };

  /**
   * add a polygone / polyline
   **/
  function poly(args, poly, path) {
    var objs = [],
      multiple = "values" in args.td;
    if (!multiple) {
      args.td.values = [{options: args.opts}];
    }
    if (!args.td.values.length) {
      manageEnd(args, false);
      return;
    }
    newMap();
    $.each(args.td.values, function (_, value) {
      var id, i, j, obj,
        td = tuple(args, value);
      if (td.options[path]) {
        if (td.options[path][0][0] && isArray(td.options[path][0][0])) {
          for (i = 0; i < td.options[path].length; i++) {
            for (j = 0; j < td.options[path][i].length; j++) {
              td.options[path][i][j] = toLatLng(td.options[path][i][j]);
            }
          }
        } else {
          for (i = 0; i < td.options[path].length; i++) {
            td.options[path][i] = toLatLng(td.options[path][i]);
          }
        }
      }
      td.options.map = map;
      obj = new gm[poly](td.options);
      objs.push(obj);
      id = store.add({td: td}, poly.toLowerCase(), obj);
      attachEvents($this, {td: td}, obj, id);
    });
    manageEnd(args, multiple ? objs : objs[0]);
  }

  self.polyline = function (args) {
    poly(args, "Polyline", "path");
  };

  self.polygon = function (args) {
    poly(args, "Polygon", "paths");
  };

  /**
   * add a traffic layer
   **/
  self.trafficlayer = function (args) {
    newMap();
    var obj = store.get("trafficlayer");
    if (!obj) {
      obj = new defaults.classes.TrafficLayer();
      obj.setMap(map);
      store.add(args, "trafficlayer", obj);
    }
    manageEnd(args, obj);
  };


  /**
   * add a transit layer
   **/
  self.transitlayer = function (args) {
    newMap();
    var obj = store.get("transitlayer");
    if (!obj) {
      obj = new defaults.classes.TransitLayer();
      obj.setMap(map);
      store.add(args, "transitlayer", obj);
    }
    manageEnd(args, obj);
  };

  /**
   * add a bicycling layer
   **/
  self.bicyclinglayer = function (args) {
    newMap();
    var obj = store.get("bicyclinglayer");
    if (!obj) {
      obj = new defaults.classes.BicyclingLayer();
      obj.setMap(map);
      store.add(args, "bicyclinglayer", obj);
    }
    manageEnd(args, obj);
  };

  /**
   * add a ground overlay
   **/
  self.groundoverlay = function (args) {
    args.opts.bounds = toLatLngBounds(args.opts.bounds);
    if (args.opts.bounds){
      newMap(args.opts.bounds.getCenter());
    }
    var id,
      obj = new defaults.classes.GroundOverlay(args.opts.url, args.opts.bounds, args.opts.opts);
    obj.setMap(map);
    id = store.add(args, "groundoverlay", obj);
    manageEnd(args, obj, id);
  };

  /**
   * set a streetview
   **/
  self.streetviewpanorama = function (args) {
    if (!args.opts.opts) {
      args.opts.opts = {};
    }
    if (args.latLng) {
      args.opts.opts.position = args.latLng;
    } else if (args.opts.opts.position) {
      args.opts.opts.position = toLatLng(args.opts.opts.position);
    }
    if (args.td.divId) {
      args.opts.container = document.getElementById(args.td.divId);
    } else if (args.opts.container) {
      args.opts.container = $(args.opts.container).get(0);
    }
    var id, obj = new defaults.classes.StreetViewPanorama(args.opts.container, args.opts.opts);
    if (obj) {
      map.setStreetView(obj);
    }
    id = store.add(args, "streetviewpanorama", obj);
    manageEnd(args, obj, id);
  };

  self.kmllayer = function (args) {
    var objs = [],
      multiple = "values" in args.td;
    if (!multiple) {
      args.td.values = [{options: args.opts}];
    }
    if (!args.td.values.length) {
      manageEnd(args, false);
      return;
    }
    $.each(args.td.values, function (i, value) {
      var id, obj, options,
        td = tuple(args, value);
      if (!map) {
        newMap();
      }
      options = td.options;
      // compatibility 5.0-
      if (td.options.opts) {
        options = td.options.opts;
        if (td.options.url) {
          options.url = td.options.url;
        }
      }
      // -- end --
      options.map = map;
      if (googleVersionMin("3.10")) {
        obj = new defaults.classes.KmlLayer(options);
      } else {
        obj = new defaults.classes.KmlLayer(options.url, options);
      }
      objs.push(obj);
      id = store.add({td: td}, "kmllayer", obj);
      attachEvents($this, {td: td}, obj, id);
    });
    manageEnd(args, multiple ? objs : objs[0]);
  };

  /**
   * add a fix panel
   **/
  self.panel = function (args) {
    newMap();
    var id, $content,
      x = 0,
      y = 0,
      $div = $(document.createElement("div"));

    $div.css({
      position: "absolute",
      zIndex: 1000,
      visibility: "hidden"
    });

    if (args.opts.content) {
      $content = $(args.opts.content);
      $div.append($content);
      $this.first().prepend($div);

      if (!isUndefined(args.opts.left)) {
        x = args.opts.left;
      } else if (!isUndefined(args.opts.right)) {
        x = $this.width() - $content.width() - args.opts.right;
      } else if (args.opts.center) {
        x = ($this.width() - $content.width()) / 2;
      }

      if (!isUndefined(args.opts.top)) {
        y = args.opts.top;
      } else if (!isUndefined(args.opts.bottom)) {
        y = $this.height() - $content.height() - args.opts.bottom;
      } else if (args.opts.middle) {
        y = ($this.height() - $content.height()) / 2
      }

      $div.css({
        top: y,
        left: x,
        visibility: "visible"
      });
    }

    id = store.add(args, "panel", $div);
    manageEnd(args, $div, id);
    $div = null; // memory leak
  };

  /**
   * add a direction renderer
   **/
  self.directionsrenderer = function (args) {
    args.opts.map = map;
    var id,
      obj = new gm.DirectionsRenderer(args.opts);
    if (args.td.divId) {
      obj.setPanel(document.getElementById(args.td.divId));
    } else if (args.td.container) {
      obj.setPanel($(args.td.container).get(0));
    }
    id = store.add(args, "directionsrenderer", obj);
    manageEnd(args, obj, id);
  };

  /**
   * returns latLng of the user
   **/
  self.getgeoloc = function (args) {
    manageEnd(args, args.latLng);
  };

  /**
   * add a style
   **/
  self.styledmaptype = function (args) {
    newMap();
    var obj = new defaults.classes.StyledMapType(args.td.styles, args.opts);
    map.mapTypes.set(args.td.id, obj);
    manageEnd(args, obj);
  };

  /**
   * add an imageMapType
   **/
  self.imagemaptype = function (args) {
    newMap();
    var obj = new defaults.classes.ImageMapType(args.opts);
    map.mapTypes.set(args.td.id, obj);
    manageEnd(args, obj);
  };

  /**
   * autofit a map using its overlays (markers, rectangles ...)
   **/
  self.autofit = function (args) {
    var bounds = new gm.LatLngBounds();
    $.each(store.all(), function (i, obj) {
      if (obj.getPosition && obj.getPosition()) {
        bounds.extend(obj.getPosition());
      } else if (obj.getBounds && obj.getBounds()) {
        bounds.extend(obj.getBounds().getNorthEast());
        bounds.extend(obj.getBounds().getSouthWest());
      } else if (obj.getPaths && obj.getPaths()) {
        obj.getPaths().forEach(function (path) {
          path.forEach(function (latLng) {
            bounds.extend(latLng);
          });
        });
      } else if (obj.getPath && obj.getPath()) {
        obj.getPath().forEach(function (latLng) {
          bounds.extend(latLng);
        });
      } else if (obj.getCenter && obj.getCenter()) {
        bounds.extend(obj.getCenter());
      } else if (typeof Clusterer === "function" && obj instanceof Clusterer) {
        obj = store.getById(obj.id(), true);
        if (obj) {
          obj.autofit(bounds);
        }
      }
    });

    if (!bounds.isEmpty() && (!map.getBounds() || !map.getBounds().equals(bounds))) {
      if ("maxZoom" in args.td) {
        // fitBouds Callback event => detect zoom level and check maxZoom
        gm.event.addListenerOnce(
          map,
          "bounds_changed",
          function () {
            if (this.getZoom() > args.td.maxZoom) {
              this.setZoom(args.td.maxZoom);
            }
          }
        );
      }
      map.fitBounds(bounds);
    }
    manageEnd(args, true);
  };

  /**
   * remove objects from a map
   **/
  self.clear = function (args) {
    if (isString(args.td)) {
      if (store.clearById(args.td) || store.objClearById(args.td)) {
        manageEnd(args, true);
        return;
      }
      args.td = {name: args.td};
    }
    if (args.td.id) {
      $.each(array(args.td.id), function (i, id) {
        store.clearById(id) || store.objClearById(id);
      });
    } else {
      store.clear(array(args.td.name), args.td.last, args.td.first, args.td.tag);
      store.objClear(array(args.td.name), args.td.last, args.td.first, args.td.tag);
    }
    manageEnd(args, true);
  };

  /**
   * return objects previously created
   **/
  self.get = function (args, direct, full) {
    var name, res,
      td = direct ? args : args.td;
    if (!direct) {
      full = td.full;
    }
    if (isString(td)) {
      res = store.getById(td, false, full) || store.objGetById(td);
      if (res === false) {
        name = td;
        td = {};
      }
    } else {
      name = td.name;
    }
    if (name === "map") {
      res = map;
    }
    if (!res) {
      res = [];
      if (td.id) {
        $.each(array(td.id), function (i, id) {
          res.push(store.getById(id, false, full) || store.objGetById(id));
        });
        if (!isArray(td.id)) {
          res = res[0];
        }
      } else {
        $.each(name ? array(name) : [undef], function (i, aName) {
          var result;
          if (td.first) {
            result = store.get(aName, false, td.tag, full);
            if (result) {
              res.push(result);
            }
          } else if (td.all) {
            $.each(store.all(aName, td.tag, full), function (i, result) {
              res.push(result);
            });
          } else {
            result = store.get(aName, true, td.tag, full);
            if (result) {
              res.push(result);
            }
          }
        });
        if (!td.all && !isArray(name)) {
          res = res[0];
        }
      }
    }
    res = isArray(res) || !td.all ? res : [res];
    if (direct) {
      return res;
    } else {
      manageEnd(args, res);
    }
  };

  /**
   * run a function on each items selected
   **/
  self.exec = function (args) {
    $.each(array(args.td.func), function (i, func) {
      $.each(self.get(args.td, true, args.td.hasOwnProperty("full") ? args.td.full : true), function (j, res) {
        func.call($this, res);
      });
    });
    manageEnd(args, true);
  };

  /**
   * trigger events on the map
   **/
  self.trigger = function (args) {
    if (isString(args.td)) {
      gm.event.trigger(map, args.td);
    } else {
      var options = [map, args.td.eventName];
      if (args.td.var_args) {
        $.each(args.td.var_args, function (i, v) {
          options.push(v);
        });
      }
      gm.event.trigger.apply(gm.event, options);
    }
    callback(args);
    task.ack();
  };
}

$.fn.gmap3 = function () {
  var i,
    list = [],
    empty = true,
    results = [];

  // init library
  initDefaults();

  // store all arguments in a td list
  for (i = 0; i < arguments.length; i++) {
    if (arguments[i]) {
      list.push(arguments[i]);
    }
  }

  // resolve empty call - run init
  if (!list.length) {
    list.push("map");
  }

  // loop on each jQuery object
  $.each(this, function () {
    var $this = $(this),
      gmap3 = $this.data("gmap3");
    empty = false;
    if (!gmap3) {
      gmap3 = new Gmap3($this);
      $this.data("gmap3", gmap3);
    }
    if (list.length === 1 && (list[0] === "get" || isDirectGet(list[0]))) {
      if (list[0] === "get") {
        results.push(gmap3.get("map", true));
      } else {
        results.push(gmap3.get(list[0].get, true, list[0].get.full));
      }
    } else {
      gmap3._plan(list);
    }
  });

  // return for direct call only
  if (results.length) {
    if (results.length === 1) { // 1 css selector
      return results[0];
    }
    return results;
  }

  return this;
};
})(jQuery);
/* -------------------------------------
		CUSTOM FUNCTION WRITE HERE
-------------------------------------- */
jQuery(document).on('ready', function() {
	"use strict";
	jQuery('.tg-themetabnav > li > a').hover(function() {
		jQuery(this).tab('show');
	});
	/*--------------------------------------
			SCROLL TO TOP					
	--------------------------------------*/
	var _tg_btnscrolltop = jQuery("#tg-btnbacktotop");
	_tg_btnscrolltop.on('click', function(){
		var _scrollUp = jQuery('html, body');
		_scrollUp.animate({ scrollTop: 0 }, 'slow');
	})
	/* -------------------------------------
			COLLAPSE MENU SMALL DEVICES
	-------------------------------------- */
	function collapseMenu(){
		jQuery('.menu-item-has-children, .menu-item-has-mega-menu').prepend('<span class="tg-dropdowarrow"><i class="fa  fa-angle-right"></i></span>');
		jQuery('.menu-item-has-children span, .menu-item-has-mega-menu span').on('click', function() {
			jQuery(this).next().next().slideToggle(300);
			jQuery(this).parent('.menu-item-has-children, .menu-item-has-mega-menu').toggleClass('tg-open');
		});
	}
	collapseMenu();
	/*--------------------------------------
			HOME SLIDER						
	--------------------------------------*/
	var _tg_homeslider = jQuery('#tg-homeslider');
	_tg_homeslider.owlCarousel({
		items: 1,
		nav: true,
		loop: true,
		dots: true,
		autoplay:false,
		navText: [
					'<i class="icon-chevron-left"></i>',
					'<i class="icon-chevron-right"></i>'
				],
		navClass: [
					'owl-prev tg-btnround tg-btnprev',
					'owl-next tg-btnround tg-btnnext'
				],
	});
	/*--------------------------------------
			BEST BOOK SLIDER				
	--------------------------------------*/
	var _tg_bestsellingbooksslider = jQuery('#tg-bestsellingbooksslider');
	_tg_bestsellingbooksslider.owlCarousel({
		nav: true,
		loop: true,
		margin: 30,
		dots: true,
		navText: [
					'<i class="icon-chevron-left"></i>',
					'<i class="icon-chevron-right"></i>'
				],
		navClass: [
					'owl-prev tg-btnround tg-btnprev',
					'owl-next tg-btnround tg-btnnext'
				],
		responsive: {
			0: { items:1 },
			480: { items:2 },
			600: { items:3 },
			1000: { items:5 },
			1200: { items:6 },
		}
	});
	/*--------------------------------------
			RELATED PRODUCT SLIDER			
	--------------------------------------*/
	var _tg_relatedproductslider = jQuery('#tg-relatedproductslider');
	_tg_relatedproductslider.owlCarousel({
		nav: true,
		loop: true,
		margin: 30,
		dots: true,
		navText: [
					'<i class="icon-chevron-left"></i>',
					'<i class="icon-chevron-right"></i>'
				],
		navClass: [
					'owl-prev tg-btnround tg-btnprev',
					'owl-next tg-btnround tg-btnnext'
				],
		responsive: {
			0: { items:1 },
			568: { items:2 },
			768: { items:2 },
			992: { items:3 },
			1200: { items:4 },
		}
	});
	/* -------------------------------------
			COLLECTION COUNTER
	-------------------------------------- */
	try {
		var _tg_collectioncounters = jQuery('#tg-collectioncounters');
		_tg_collectioncounters.appear(function () {
			
			var _tg_collectioncounter = jQuery('.tg-collectioncounter h3');
			_tg_collectioncounter.countTo({
				formatter: function (value, options) {
					return value.toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ',');
				}
			});
		});
	} catch (err) {}
	/*--------------------------------------
			PICKED BY AUTHOR SLIDER			
	--------------------------------------*/
	var _tg_pickedbyauthorslider = jQuery('#tg-pickedbyauthorslider');
	_tg_pickedbyauthorslider.owlCarousel({
		nav: true,
		loop: true,
		dots: true,
		navText: [
					'<i class="icon-chevron-left"></i>',
					'<i class="icon-chevron-right"></i>'
				],
		navClass: [
					'owl-prev tg-btnround tg-btnprev',
					'owl-next tg-btnround tg-btnnext'
				],
		responsive: {
			0: { items:1 },
			768: { items:2 },
			992: { items:3 },
		}
	});
	/*--------------------------------------
			TESTIMONIALS SLIDER				
	--------------------------------------*/
	var _tg_testimonialsslider = jQuery('#tg-testimonialsslider');
	_tg_testimonialsslider.owlCarousel({
		items:1,
		nav: true,
		loop: true,
		dots: true,
		navText: [
					'<i class="icon-chevron-left"></i>',
					'<i class="icon-chevron-right"></i>'
				],
		navClass: [
					'owl-prev tg-btnround tg-btnprev',
					'owl-next tg-btnround tg-btnnext'
				],
	});
	/*--------------------------------------
			PICKED BY AUTHOR SLIDER			
	--------------------------------------*/
	var _tg_authorsslider = jQuery('#tg-authorsslider');
	_tg_authorsslider.owlCarousel({
		nav: true,
		loop: true,
		dots: true,
		navText: [
					'<i class="icon-chevron-left"></i>',
					'<i class="icon-chevron-right"></i>'
				],
		navClass: [
					'owl-prev tg-btnround tg-btnprev',
					'owl-next tg-btnround tg-btnnext'
				],
		responsive: {
			0: { items:1 },
			600: { items:4 },
			1000: { items:5 },
			1200: { items:6 },
		}
	});
	/*--------------------------------------
			TEAMS SLIDER					
	--------------------------------------*/
	var _tg_teamsslider = jQuery('#tg-teamsslider');
	_tg_teamsslider.owlCarousel({
		nav: true,
		loop: true,
		dots: true,
		navText: [
					'<i class="icon-chevron-left"></i>',
					'<i class="icon-chevron-right"></i>'
				],
		navClass: [
					'owl-prev tg-btnround tg-btnprev',
					'owl-next tg-btnround tg-btnnext'
				],
		responsive: {
			0: { items:1 },
			600: { items:3 },
			1000: { items:4 },
		}
	});
	/*--------------------------------------
			NEWS AND ARTICLE SLIDER			
	--------------------------------------*/
	var _tg_postslider = jQuery('#tg-postslider');
	_tg_postslider.owlCarousel({
		nav: true,
		loop: true,
		dots: true,
		navText: [
					'<i class="icon-chevron-left"></i>',
					'<i class="icon-chevron-right"></i>'
				],
		navClass: [
					'owl-prev tg-btnround tg-btnprev',
					'owl-next tg-btnround tg-btnnext'
				],
		responsive: {
			0: { items:1 },
			600: { items:2 },
			992: { items:3 },
			1200: { items:4 },
		}
	});
	/*--------------------------------------
			HOME SLIDER						
	--------------------------------------*/
	var _tg_successslider = jQuery('#tg-successslider');
	_tg_successslider.owlCarousel({
		items: 1,
		nav: true,
		loop: true,
		dots: true,
		autoplay:false,
		navText: [
					'<i class="icon-chevron-left"></i>',
					'<i class="icon-chevron-right"></i>'
				],
		navClass: [
					'owl-prev tg-btnround tg-btnprev',
					'owl-next tg-btnround tg-btnnext'
				],
	});
	/* -------------------------------------
			Google Map
	-------------------------------------- */
	jQuery("#tg-locationmap").gmap3({
		marker: {
			address: "1600 Elizabeth St, Melbourne, Victoria, Australia",
			options: {
				title: "Books Library",
			}
		},
		map: {
			options: {
				zoom: 16,
				scrollwheel: false,
				disableDoubleClickZoom: true,
			}
		}
	});
	/*------------------------------------------
			PRODUCT INCREASE
	------------------------------------------*/
	jQuery('em.minus').on('click', function () {
		jQuery('#quantity1').val(parseInt(jQuery('#quantity1').val(), 10) - 1);
	});
	jQuery('em.plus').on('click', function () {
		jQuery('#quantity1').val(parseInt(jQuery('#quantity1').val(), 10) + 1);
	});
});
function addProduct($id) {
    axios.post('/add-product-to-cart', {
        idProduct: $id
    })
    .then((response) => {
        if (response.data.success === false) {
            switch (response.data.action) {
                case 'failToCreateCart':
                    alert('Cửa hàng không đủ số lượng để cung cấp sản phẩm này');
                    break;
                case 'removeFromCart':
                    alert('Sản phẩm này sẽ bị xóa khỏi giỏ hàng của bạn do cửa hàng không còn đủ số lượng');
                    window.location.href="/";
                    break;
                case 'decreaseFromCart':
                    alert('Số lượng của sản phẩm này trong giỏ hàng của bạn sẽ bị giảm do vượt quá khả năng của cửa hàng.');
                    window.location.href="/";
                    break;
                case 'failToAddToCart':
                    alert('Cửa hàng không đủ số lượng để cung cấp sản phẩm này');
                    break;
            }
        } else {
            alert('Đã thêm sản phẩm vào giỏ hàng');
            const value = $('#value-number-cart').val();
            var totalProductInCart = parseInt(value);
            ++totalProductInCart;
    
            $('#show-number-cart').html(totalProductInCart);
            $('#value-number-cart').val(totalProductInCart);
    
            if(response.data.action === 'add') {
                $('#product-minicart').append(response.data.divCartMini);
            }
        }
    })
}

// function enableButtonSubmitInfoToChange(value, type) {
//     let oldValue = value;
//     let newValue = document.getElementById(type).value;
//     if (oldValue != newValue) {
//         document.getElementById('button-change-info').disabled = false;
//         document.getElementById('button-change-info').style.backgroundColor = "";
//     } else {
//         document.getElementById('button-change-info').disabled = true;
//         document.getElementById('button-change-info').style.backgroundColor = "gray";
//     }
// }

// function enableButtomSubmitInfoToChangeRadioType(oldValue) {
//     let elemLoaidiachi = document.getElementsByName("loaidiachi");
//     let newValue;
//     for(var elem in elemLoaidiachi)
//     {
//         if(elemLoaidiachi[elem].checked)
//         {
//             if(elemLoaidiachi[elem].value == 1)
//                 newValue = 1;
//             else if(elemLoaidiachi[elem].value == 2)
//                 newValue = 2;
//             break;
//         }
//     }
//     if (oldValue != newValue) {
//         document.getElementById('button-change-info').disabled = false;
//         document.getElementById('button-change-info').style.backgroundColor = "";
//     } else {
//         document.getElementById('button-change-info').disabled = true;
//         document.getElementById('button-change-info').style.backgroundColor = "gray";
//     }
// }

function submitInfoToChange(idKhachhang) {
    let ho = document.getElementById('manage-ho').value;
    let ten = document.getElementById('manage-ten').value;
    let dtdd = document.getElementById('manage-dtdd').value;

    let matp = document.getElementById('manage-tinhthanhpho').value;
    let maqh = document.getElementById('manage-quanhuyen').value;
    let xaid = document.getElementById('manage-xaphuongthitran').value;
    let diachi = document.getElementById('manage-diachi').value;
    let loaidiachi;
    var ele = document.getElementsByName('manage-loaidiachi');
    for(i = 0; i < ele.length; i++) {
        if(ele[i].checked) {
            loaidiachi = ele[i].value;
        }
    }
    axios.post('/submit-info-to-change', {
        idKhachhang: idKhachhang,
        ho: ho,
        ten: ten,
        dtdd: dtdd,
        diachi: diachi,
        loaidiachi: loaidiachi,
        matp: matp,
        maqh: maqh,
        xaid: xaid,
    })
    .then((response) => {
        switch(response.data.success) {
            case true:
                alert('Cập nhật thành công');
                window.location.href="/manage-info";
                break;
            case false:
                let errors = response.data.errors;
                let errorAddress = document.getElementsByClassName("error-address");
                let formAddress = document.getElementsByClassName("form-address");

                for (let i = 0; i < errorAddress.length; i++) {
                    errorAddress[i].style.setProperty('display', 'none');
                    errorAddress[i].innerHTML = "";
                    formAddress[i].classList.remove("has-error");
                }

                for(const [key, value] of Object.entries(errors)) {
                    switch (key) {
                        case 'ho':
                            for (const error of value) {
                                document.getElementById("manage-error-ho").style.setProperty('display', 'block');
                                document.getElementById("manage-contain-ho").classList.add("has-error");
                                document.getElementById('manage-error-ho').innerHTML += "<li class='help-block'>- " + error + "</li>";
                            }
                            break;
                        case 'ten':
                            for (const error of value) {
                                document.getElementById("manage-error-ten").style.setProperty('display', 'block');
                                document.getElementById("manage-contain-ten").classList.add("has-error");
                                document.getElementById('manage-error-ten').innerHTML += "<li class='help-block'>- " + error + "</li>";
                            }
                            break;
                        case 'dtdd':
                            for (const error of value) {
                                document.getElementById("manage-error-dtdd").style.setProperty('display', 'block');
                                document.getElementById("manage-contain-dtdd").classList.add("has-error");
                                document.getElementById('manage-error-dtdd').innerHTML += "<li class='help-block'>- " + error + "</li>";
                            }
                            break;
                        case 'diachi':
                            for (const error of value) {
                                document.getElementById("manage-error-diachi").style.setProperty('display', 'block');
                                document.getElementById("manage-contain-diachi").classList.add("has-error");
                                document.getElementById('manage-manage-error-diachi').innerHTML += "<li class='help-block'>- " + error + "</li>";
                            }
                            break;
                        case 'matp':
                            for (const error of value) {
                                document.getElementById("manage-error-tinhthanhpho").style.setProperty('display', 'block');
                                document.getElementById("manage-contain-tinhthanhpho").classList.add("has-error");
                                document.getElementById('manage-error-tinhthanhpho').innerHTML += "<li class='help-block'>- " + error + "</li>";
                            }
                            break;
                        case 'maqh':
                            for (const error of value) {
                                document.getElementById("manage-error-quanhuyen").style.setProperty('display', 'block');
                                document.getElementById("manage-contain-quanhuyen").classList.add("has-error");
                                document.getElementById('manage-error-quanhuyen').innerHTML += "<li class='help-block'>- " + error + "</li>";
                            }
                            break;
                        case 'xaid':
                            for (const error of value) {
                                document.getElementById("manage-error-xaphuongthitran").style.setProperty('display', 'block');
                                document.getElementById("manage-contain-xaphuongthitran").classList.add("has-error");
                                document.getElementById('manage-error-xaphuongthitran').innerHTML += "<li class='help-block'>- " + error + "</li>";
                            }
                            break;
                        case 'loaidiachi':
                            for (const error of value) {
                                document.getElementById("manage-error-loaidiachi").style.setProperty('display', 'block');
                                document.getElementById("manage-error-loaidiachi").classList.add("has-error");
                                document.getElementById('manage-error-loaidiachi').innerHTML += "<li class='help-block'>- " + error + "</li>";
                            }
                            break;
                    }
                }
                break;
        }
    })
}

function manageGetDistrict() {
    document.getElementById('manage-xaphuongthitran').innerHTML = "<option disabled value=''>Not Found</option>";
    
    let matp = document.getElementById('manage-tinhthanhpho').value;
    axios.get('/get-district', {
        params: {
            matp: matp
        }
    })
    .then((response) => {
        if (response.data.div === false) {
            document.getElementById('manage-quanhuyen').innerHTML = "<option disabled value=''>Not Found</option>";
        }
        else {
            document.getElementById('manage-quanhuyen').innerHTML = response.data.div;
        }
    })
}

function manageGetWard() {
    let maqh = document.getElementById('manage-quanhuyen').value;
    axios.get('/get-ward', {
        params: {
            maqh: maqh
        }
    })
    .then((response) => {
        if (response.data.div === false) {
            document.getElementById('manage-xaphuongthitran').innerHTML = "<option disabled value=''>Not Found</option>";
        }
        else {
            document.getElementById('manage-xaphuongthitran').innerHTML = response.data.div;
        }
    })
}

function cancelOrder(idDonhang) {
    axios.post('/detail-order/cancel-order', {
        idDonhang: idDonhang
    })
    .then((response) => {
        if (response.data.success === false) {
            alert('Hủy đơn hàng thất bại');
        } else {
            document.getElementById('cancel-button').style.display = "none";
        }
    })
}