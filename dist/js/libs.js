/*
 AngularJS v1.3.0-rc.3
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(O,Y,s){'use strict';function Q(b){return function(){var a=arguments[0],c;c="["+(b?b+":":"")+a+"] http://errors.angularjs.org/1.3.0-rc.3/"+(b?b+"/":"")+a;for(a=1;a<arguments.length;a++){c=c+(1==a?"?":"&")+"p"+(a-1)+"=";var d=encodeURIComponent,e;e=arguments[a];e="function"==typeof e?e.toString().replace(/ \{[\s\S]*$/,""):"undefined"==typeof e?"undefined":"string"!=typeof e?JSON.stringify(e):e;c+=d(e)}return Error(c)}}function Na(b){if(null==b||Oa(b))return!1;var a=b.length;return 1===b.nodeType&&
a?!0:C(b)||M(b)||0===a||"number"===typeof a&&0<a&&a-1 in b}function r(b,a,c){var d,e;if(b)if(F(b))for(d in b)"prototype"==d||"length"==d||"name"==d||b.hasOwnProperty&&!b.hasOwnProperty(d)||a.call(c,b[d],d,b);else if(M(b)||Na(b)){var f="object"!==typeof b;d=0;for(e=b.length;d<e;d++)(f||d in b)&&a.call(c,b[d],d,b)}else if(b.forEach&&b.forEach!==r)b.forEach(a,c,b);else for(d in b)b.hasOwnProperty(d)&&a.call(c,b[d],d,b);return b}function ac(b){var a=[],c;for(c in b)b.hasOwnProperty(c)&&a.push(c);return a.sort()}
function rd(b,a,c){for(var d=ac(b),e=0;e<d.length;e++)a.call(c,b[d[e]],d[e]);return d}function bc(b){return function(a,c){b(c,a)}}function sd(){return++cb}function cc(b,a){a?b.$$hashKey=a:delete b.$$hashKey}function v(b){for(var a=b.$$hashKey,c=1,d=arguments.length;c<d;c++){var e=arguments[c];if(e)for(var f=Object.keys(e),g=0,h=f.length;g<h;g++){var k=f[g];b[k]=e[k]}}cc(b,a);return b}function Z(b){return parseInt(b,10)}function dc(b,a){return v(new (v(function(){},{prototype:b})),a)}function z(){}
function Pa(b){return b}function ga(b){return function(){return b}}function w(b){return"undefined"===typeof b}function x(b){return"undefined"!==typeof b}function S(b){return null!==b&&"object"===typeof b}function C(b){return"string"===typeof b}function ea(b){return"number"===typeof b}function ha(b){return"[object Date]"===Fa.call(b)}function F(b){return"function"===typeof b}function db(b){return"[object RegExp]"===Fa.call(b)}function Oa(b){return b&&b.window===b}function Qa(b){return b&&b.$evalAsync&&
b.$watch}function eb(b){return"boolean"===typeof b}function td(b){return!(!b||!(b.nodeName||b.prop&&b.attr&&b.find))}function ud(b){var a={};b=b.split(",");var c;for(c=0;c<b.length;c++)a[b[c]]=!0;return a}function pa(b){return R(b.nodeName||b[0].nodeName)}function Ra(b,a){var c=b.indexOf(a);0<=c&&b.splice(c,1);return a}function Ga(b,a,c,d){if(Oa(b)||Qa(b))throw Sa("cpws");if(a){if(b===a)throw Sa("cpi");c=c||[];d=d||[];if(S(b)){var e=c.indexOf(b);if(-1!==e)return d[e];c.push(b);d.push(a)}if(M(b))for(var f=
a.length=0;f<b.length;f++)e=Ga(b[f],null,c,d),S(b[f])&&(c.push(b[f]),d.push(e)),a.push(e);else{var g=a.$$hashKey;M(a)?a.length=0:r(a,function(b,c){delete a[c]});for(f in b)b.hasOwnProperty(f)&&(e=Ga(b[f],null,c,d),S(b[f])&&(c.push(b[f]),d.push(e)),a[f]=e);cc(a,g)}}else if(a=b)M(b)?a=Ga(b,[],c,d):ha(b)?a=new Date(b.getTime()):db(b)?(a=new RegExp(b.source,b.toString().match(/[^\/]*$/)[0]),a.lastIndex=b.lastIndex):S(b)&&(e=Object.create(Object.getPrototypeOf(b)),a=Ga(b,e,c,d));return a}function qa(b,
a){if(M(b)){a=a||[];for(var c=0,d=b.length;c<d;c++)a[c]=b[c]}else if(S(b))for(c in a=a||{},b)if("$"!==c.charAt(0)||"$"!==c.charAt(1))a[c]=b[c];return a||b}function ra(b,a){if(b===a)return!0;if(null===b||null===a)return!1;if(b!==b&&a!==a)return!0;var c=typeof b,d;if(c==typeof a&&"object"==c)if(M(b)){if(!M(a))return!1;if((c=b.length)==a.length){for(d=0;d<c;d++)if(!ra(b[d],a[d]))return!1;return!0}}else{if(ha(b))return ha(a)?ra(b.getTime(),a.getTime()):!1;if(db(b)&&db(a))return b.toString()==a.toString();
if(Qa(b)||Qa(a)||Oa(b)||Oa(a)||M(a))return!1;c={};for(d in b)if("$"!==d.charAt(0)&&!F(b[d])){if(!ra(b[d],a[d]))return!1;c[d]=!0}for(d in a)if(!c.hasOwnProperty(d)&&"$"!==d.charAt(0)&&a[d]!==s&&!F(a[d]))return!1;return!0}return!1}function fb(b,a,c){return b.concat(Ta.call(a,c))}function ec(b,a){var c=2<arguments.length?Ta.call(arguments,2):[];return!F(a)||a instanceof RegExp?a:c.length?function(){return arguments.length?a.apply(b,c.concat(Ta.call(arguments,0))):a.apply(b,c)}:function(){return arguments.length?
a.apply(b,arguments):a.call(b)}}function vd(b,a){var c=a;"string"===typeof b&&"$"===b.charAt(0)&&"$"===b.charAt(1)?c=s:Oa(a)?c="$WINDOW":a&&Y===a?c="$DOCUMENT":Qa(a)&&(c="$SCOPE");return c}function sa(b,a){return"undefined"===typeof b?s:JSON.stringify(b,vd,a?"  ":null)}function fc(b){return C(b)?JSON.parse(b):b}function ta(b){b=D(b).clone();try{b.empty()}catch(a){}var c=D("<div>").append(b).html();try{return 3===b[0].nodeType?R(c):c.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/,function(a,b){return"<"+
R(b)})}catch(d){return R(c)}}function gc(b){try{return decodeURIComponent(b)}catch(a){}}function hc(b){var a={},c,d;r((b||"").split("&"),function(b){b&&(c=b.replace(/\+/g,"%20").split("="),d=gc(c[0]),x(d)&&(b=x(c[1])?gc(c[1]):!0,Ab.call(a,d)?M(a[d])?a[d].push(b):a[d]=[a[d],b]:a[d]=b))});return a}function Bb(b){var a=[];r(b,function(b,d){M(b)?r(b,function(b){a.push(Ca(d,!0)+(!0===b?"":"="+Ca(b,!0)))}):a.push(Ca(d,!0)+(!0===b?"":"="+Ca(b,!0)))});return a.length?a.join("&"):""}function gb(b){return Ca(b,
!0).replace(/%26/gi,"&").replace(/%3D/gi,"=").replace(/%2B/gi,"+")}function Ca(b,a){return encodeURIComponent(b).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%3B/gi,";").replace(/%20/g,a?"%20":"+")}function wd(b,a){var c,d,e=hb.length;b=D(b);for(d=0;d<e;++d)if(c=hb[d]+a,C(c=b.attr(c)))return c;return null}function xd(b,a){var c,d,e={};r(hb,function(a){a+="app";!c&&b.hasAttribute&&b.hasAttribute(a)&&(c=b,d=b.getAttribute(a))});r(hb,function(a){a+="app";
var e;!c&&(e=b.querySelector("["+a.replace(":","\\:")+"]"))&&(c=e,d=e.getAttribute(a))});c&&(e.strictDi=null!==wd(c,"strict-di"),a(c,d?[d]:[],e))}function ic(b,a,c){S(c)||(c={});c=v({strictDi:!1},c);var d=function(){b=D(b);if(b.injector()){var d=b[0]===Y?"document":ta(b);throw Sa("btstrpd",d.replace(/</,"&lt;").replace(/>/,"&gt;"));}a=a||[];a.unshift(["$provide",function(a){a.value("$rootElement",b)}]);c.debugInfoEnabled&&a.push(["$compileProvider",function(a){a.debugInfoEnabled(!0)}]);a.unshift("ng");
d=Cb(a,c.strictDi);d.invoke(["$rootScope","$rootElement","$compile","$injector",function(a,b,c,d){a.$apply(function(){b.data("$injector",d);c(b)(a)})}]);return d},e=/^NG_ENABLE_DEBUG_INFO!/,f=/^NG_DEFER_BOOTSTRAP!/;O&&e.test(O.name)&&(c.debugInfoEnabled=!0,O.name=O.name.replace(e,""));if(O&&!f.test(O.name))return d();O.name=O.name.replace(f,"");Da.resumeBootstrap=function(b){r(b,function(b){a.push(b)});d()}}function yd(){O.name="NG_ENABLE_DEBUG_INFO!"+O.name;O.location.reload()}function zd(b){return Da.element(b).injector().get("$$testability")}
function Db(b,a){a=a||"_";return b.replace(Ad,function(b,d){return(d?a:"")+b.toLowerCase()})}function Bd(){var b;jc||((ma=O.jQuery)&&ma.fn.on?(D=ma,v(ma.fn,{scope:Ha.scope,isolateScope:Ha.isolateScope,controller:Ha.controller,injector:Ha.injector,inheritedData:Ha.inheritedData}),b=ma.cleanData,ma.cleanData=function(a){var c;if(Eb)Eb=!1;else for(var d=0,e;null!=(e=a[d]);d++)(c=ma._data(e,"events"))&&c.$destroy&&ma(e).triggerHandler("$destroy");b(a)}):D=T,Da.element=D,jc=!0)}function Fb(b,a,c){if(!b)throw Sa("areq",
a||"?",c||"required");return b}function ib(b,a,c){c&&M(b)&&(b=b[b.length-1]);Fb(F(b),a,"not a function, got "+(b&&"object"===typeof b?b.constructor.name||"Object":typeof b));return b}function Ia(b,a){if("hasOwnProperty"===b)throw Sa("badname",a);}function kc(b,a,c){if(!a)return b;a=a.split(".");for(var d,e=b,f=a.length,g=0;g<f;g++)d=a[g],b&&(b=(e=b)[d]);return!c&&F(b)?ec(e,b):b}function jb(b){var a=b[0];b=b[b.length-1];var c=[a];do{a=a.nextSibling;if(!a)break;c.push(a)}while(a!==b);return D(c)}function Cd(b){function a(a,
b,c){return a[b]||(a[b]=c())}var c=Q("$injector"),d=Q("ng");b=a(b,"angular",Object);b.$$minErr=b.$$minErr||Q;return a(b,"module",function(){var b={};return function(f,g,h){if("hasOwnProperty"===f)throw d("badname","module");g&&b.hasOwnProperty(f)&&(b[f]=null);return a(b,f,function(){function a(c,d,e,f){f||(f=b);return function(){f[e||"push"]([c,d,arguments]);return m}}if(!g)throw c("nomod",f);var b=[],d=[],e=[],q=a("$injector","invoke","push",d),m={_invokeQueue:b,_configBlocks:d,_runBlocks:e,requires:g,
name:f,provider:a("$provide","provider"),factory:a("$provide","factory"),service:a("$provide","service"),value:a("$provide","value"),constant:a("$provide","constant","unshift"),animation:a("$animateProvider","register"),filter:a("$filterProvider","register"),controller:a("$controllerProvider","register"),directive:a("$compileProvider","directive"),config:q,run:function(a){e.push(a);return this}};h&&q(h);return m})}})}function Dd(b){v(b,{bootstrap:ic,copy:Ga,extend:v,equals:ra,element:D,forEach:r,
injector:Cb,noop:z,bind:ec,toJson:sa,fromJson:fc,identity:Pa,isUndefined:w,isDefined:x,isString:C,isFunction:F,isObject:S,isNumber:ea,isElement:td,isArray:M,version:Ed,isDate:ha,lowercase:R,uppercase:kb,callbacks:{counter:0},getTestability:zd,$$minErr:Q,$$csp:Ua,reloadWithDebugInfo:yd,$$hasClass:lb});Va=Cd(O);try{Va("ngLocale")}catch(a){Va("ngLocale",[]).provider("$locale",Fd)}Va("ng",["ngLocale"],["$provide",function(a){a.provider({$$sanitizeUri:Gd});a.provider("$compile",lc).directive({a:Hd,input:mc,
textarea:mc,form:Id,script:Jd,select:Kd,style:Ld,option:Md,ngBind:Nd,ngBindHtml:Od,ngBindTemplate:Pd,ngClass:Qd,ngClassEven:Rd,ngClassOdd:Sd,ngCloak:Td,ngController:Ud,ngForm:Vd,ngHide:Wd,ngIf:Xd,ngInclude:Yd,ngInit:Zd,ngNonBindable:$d,ngPluralize:ae,ngRepeat:be,ngShow:ce,ngStyle:de,ngSwitch:ee,ngSwitchWhen:fe,ngSwitchDefault:ge,ngOptions:he,ngTransclude:ie,ngModel:je,ngList:ke,ngChange:le,pattern:nc,ngPattern:nc,required:oc,ngRequired:oc,minlength:pc,ngMinlength:pc,maxlength:qc,ngMaxlength:qc,ngValue:me,
ngModelOptions:ne}).directive({ngInclude:oe}).directive(mb).directive(rc);a.provider({$anchorScroll:pe,$animate:qe,$browser:re,$cacheFactory:se,$controller:te,$document:ue,$exceptionHandler:ve,$filter:sc,$interpolate:we,$interval:xe,$http:ye,$httpBackend:ze,$location:Ae,$log:Be,$parse:Ce,$rootScope:De,$q:Ee,$$q:Fe,$sce:Ge,$sceDelegate:He,$sniffer:Ie,$templateCache:Je,$templateRequest:Ke,$$testability:Le,$timeout:Me,$window:Ne,$$rAF:Oe,$$asyncCallback:Pe})}])}function Wa(b){return b.replace(Qe,function(a,
b,d,e){return e?d.toUpperCase():d}).replace(Re,"Moz$1")}function tc(b){b=b.nodeType;return 1===b||!b||9===b}function uc(b,a){var c,d,e=a.createDocumentFragment(),f=[];if(Gb.test(b)){c=c||e.appendChild(a.createElement("div"));d=(Se.exec(b)||["",""])[1].toLowerCase();d=ia[d]||ia._default;c.innerHTML=d[1]+b.replace(Te,"<$1></$2>")+d[2];for(d=d[0];d--;)c=c.lastChild;f=fb(f,c.childNodes);c=e.firstChild;c.textContent=""}else f.push(a.createTextNode(b));e.textContent="";e.innerHTML="";r(f,function(a){e.appendChild(a)});
return e}function T(b){if(b instanceof T)return b;var a;C(b)&&(b=ca(b),a=!0);if(!(this instanceof T)){if(a&&"<"!=b.charAt(0))throw Hb("nosel");return new T(b)}if(a){a=Y;var c;b=(c=Ue.exec(b))?[a.createElement(c[1])]:(c=uc(b,a))?c.childNodes:[]}vc(this,b)}function Ib(b){return b.cloneNode(!0)}function nb(b,a){a||ob(b);if(b.querySelectorAll)for(var c=b.querySelectorAll("*"),d=0,e=c.length;d<e;d++)ob(c[d])}function wc(b,a,c,d){if(x(d))throw Hb("offargs");var e=(d=pb(b))&&d.events;if(d&&d.handle)if(a)r(a.split(" "),
function(a){w(c)?(b.removeEventListener(a,e[a],!1),delete e[a]):Ra(e[a]||[],c)});else for(a in e)"$destroy"!==a&&b.removeEventListener(a,e[a],!1),delete e[a]}function ob(b,a){var c=b.ng339,d=c&&qb[c];d&&(a?delete d.data[a]:(d.handle&&(d.events.$destroy&&d.handle({},"$destroy"),wc(b)),delete qb[c],b.ng339=s))}function pb(b,a){var c=b.ng339,c=c&&qb[c];a&&!c&&(b.ng339=c=++Ve,c=qb[c]={events:{},data:{},handle:s});return c}function Jb(b,a,c){if(tc(b)){var d=x(c),e=!d&&a&&!S(a),f=!a;b=(b=pb(b,!e))&&b.data;
if(d)b[a]=c;else{if(f)return b;if(e)return b&&b[a];v(b,a)}}}function lb(b,a){return b.getAttribute?-1<(" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").indexOf(" "+a+" "):!1}function Kb(b,a){a&&b.setAttribute&&r(a.split(" "),function(a){b.setAttribute("class",ca((" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").replace(" "+ca(a)+" "," ")))})}function Lb(b,a){if(a&&b.setAttribute){var c=(" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ");r(a.split(" "),function(a){a=
ca(a);-1===c.indexOf(" "+a+" ")&&(c+=a+" ")});b.setAttribute("class",ca(c))}}function vc(b,a){if(a)if(a.nodeType)b[b.length++]=a;else{var c=a.length;if("number"===typeof c&&a.window!==a){if(c)for(var d=0;d<c;d++)b[b.length++]=a[d]}else b[b.length++]=a}}function xc(b,a){return rb(b,"$"+(a||"ngController")+"Controller")}function rb(b,a,c){9==b.nodeType&&(b=b.documentElement);for(a=M(a)?a:[a];b;){for(var d=0,e=a.length;d<e;d++)if((c=D.data(b,a[d]))!==s)return c;b=b.parentNode||11===b.nodeType&&b.host}}
function yc(b){for(nb(b,!0);b.firstChild;)b.removeChild(b.firstChild)}function zc(b,a){a||nb(b);var c=b.parentNode;c&&c.removeChild(b)}function Ac(b,a){var c=sb[a.toLowerCase()];return c&&Bc[pa(b)]&&c}function We(b,a){var c=b.nodeName;return("INPUT"===c||"TEXTAREA"===c)&&Cc[a]}function Xe(b,a){var c=function(c,e){c.isDefaultPrevented=function(){return c.defaultPrevented};var f=a[e||c.type],g=f?f.length:0;if(g){if(w(c.immediatePropagationStopped)){var h=c.stopImmediatePropagation;c.stopImmediatePropagation=
function(){c.immediatePropagationStopped=!0;c.stopPropagation&&c.stopPropagation();h&&h.call(c)}}c.isImmediatePropagationStopped=function(){return!0===c.immediatePropagationStopped};1<g&&(f=qa(f));for(var k=0;k<g;k++)c.isImmediatePropagationStopped()||f[k].call(b,c)}};c.elem=b;return c}function Ja(b,a){var c=b&&b.$$hashKey;if(c)return"function"===typeof c&&(c=b.$$hashKey()),c;c=typeof b;return c="function"==c||"object"==c&&null!==b?b.$$hashKey=c+":"+(a||sd)():c+":"+b}function Xa(b,a){if(a){var c=
0;this.nextUid=function(){return++c}}r(b,this.put,this)}function Ye(b){return(b=b.toString().replace(Dc,"").match(Ec))?"function("+(b[1]||"").replace(/[\s\r\n]+/," ")+")":"fn"}function Mb(b,a,c){var d;if("function"===typeof b){if(!(d=b.$inject)){d=[];if(b.length){if(a)throw C(c)&&c||(c=b.name||Ye(b)),Ka("strictdi",c);a=b.toString().replace(Dc,"");a=a.match(Ec);r(a[1].split(Ze),function(a){a.replace($e,function(a,b,c){d.push(c)})})}b.$inject=d}}else M(b)?(a=b.length-1,ib(b[a],"fn"),d=b.slice(0,a)):
ib(b,"fn",!0);return d}function Cb(b,a){function c(a){return function(b,c){if(S(b))r(b,bc(a));else return a(b,c)}}function d(a,b){Ia(a,"service");if(F(b)||M(b))b=p.instantiate(b);if(!b.$get)throw Ka("pget",a);return n[a+"Provider"]=b}function e(a,b){return d(a,{$get:b})}function f(a){var b=[],c;r(a,function(a){function d(a){var b,c;b=0;for(c=a.length;b<c;b++){var e=a[b],f=p.get(e[0]);f[e[1]].apply(f,e[2])}}if(!l.get(a)){l.put(a,!0);try{C(a)?(c=Va(a),b=b.concat(f(c.requires)).concat(c._runBlocks),
d(c._invokeQueue),d(c._configBlocks)):F(a)?b.push(p.invoke(a)):M(a)?b.push(p.invoke(a)):ib(a,"module")}catch(e){throw M(a)&&(a=a[a.length-1]),e.message&&e.stack&&-1==e.stack.indexOf(e.message)&&(e=e.message+"\n"+e.stack),Ka("modulerr",a,e.stack||e.message||e);}}});return b}function g(b,c){function d(a){if(b.hasOwnProperty(a)){if(b[a]===h)throw Ka("cdep",a+" <- "+k.join(" <- "));return b[a]}try{return k.unshift(a),b[a]=h,b[a]=c(a)}catch(e){throw b[a]===h&&delete b[a],e;}finally{k.shift()}}function e(b,
c,f,g){"string"===typeof f&&(g=f,f=null);var h=[];g=Mb(b,a,g);var k,l,m;l=0;for(k=g.length;l<k;l++){m=g[l];if("string"!==typeof m)throw Ka("itkn",m);h.push(f&&f.hasOwnProperty(m)?f[m]:d(m))}M(b)&&(b=b[k]);return b.apply(c,h)}return{invoke:e,instantiate:function(a,b,c){var d=function(){};d.prototype=(M(a)?a[a.length-1]:a).prototype;d=new d;a=e(a,d,b,c);return S(a)||F(a)?a:d},get:d,annotate:Mb,has:function(a){return n.hasOwnProperty(a+"Provider")||b.hasOwnProperty(a)}}}a=!0===a;var h={},k=[],l=new Xa([],
!0),n={$provide:{provider:c(d),factory:c(e),service:c(function(a,b){return e(a,["$injector",function(a){return a.instantiate(b)}])}),value:c(function(a,b){return e(a,ga(b))}),constant:c(function(a,b){Ia(a,"constant");n[a]=b;q[a]=b}),decorator:function(a,b){var c=p.get(a+"Provider"),d=c.$get;c.$get=function(){var a=m.invoke(d,c);return m.invoke(b,null,{$delegate:a})}}}},p=n.$injector=g(n,function(){throw Ka("unpr",k.join(" <- "));}),q={},m=q.$injector=g(q,function(a){var b=p.get(a+"Provider");return m.invoke(b.$get,
b,s,a)});r(f(b),function(a){m.invoke(a||z)});return m}function pe(){var b=!0;this.disableAutoScrolling=function(){b=!1};this.$get=["$window","$location","$rootScope",function(a,c,d){function e(a){var b=null;r(a,function(a){b||"a"!==pa(a)||(b=a)});return b}function f(){var b=c.hash(),d;b?(d=g.getElementById(b))?d.scrollIntoView():(d=e(g.getElementsByName(b)))?d.scrollIntoView():"top"===b&&a.scrollTo(0,0):a.scrollTo(0,0)}var g=a.document;b&&d.$watch(function(){return c.hash()},function(){d.$evalAsync(f)});
return f}]}function Pe(){this.$get=["$$rAF","$timeout",function(b,a){return b.supported?function(a){return b(a)}:function(b){return a(b,0,!1)}}]}function af(b,a,c,d){function e(a){try{a.apply(null,Ta.call(arguments,1))}finally{if(t--,0===t)for(;u.length;)try{u.pop()()}catch(b){c.error(b)}}}function f(a,b){(function tb(){r(H,function(a){a()});A=b(tb,a)})()}function g(){G=null;y!=h.url()&&(y=h.url(),r(B,function(a){a(h.url())}))}var h=this,k=a[0],l=b.location,n=b.history,p=b.setTimeout,q=b.clearTimeout,
m={};h.isMock=!1;var t=0,u=[];h.$$completeOutstandingRequest=e;h.$$incOutstandingRequestCount=function(){t++};h.notifyWhenNoOutstandingRequests=function(a){r(H,function(a){a()});0===t?a():u.push(a)};var H=[],A;h.addPollFn=function(a){w(A)&&f(100,p);H.push(a);return a};var y=l.href,E=a.find("base"),G=null;h.url=function(a,c){l!==b.location&&(l=b.location);n!==b.history&&(n=b.history);if(a){if(y!=a)return y=a,d.history?c?n.replaceState(null,"",a):(n.pushState(null,"",a),E.attr("href",E.attr("href"))):
(G=a,c?l.replace(a):l.href=a),h}else return G||l.href.replace(/%27/g,"'")};var B=[],X=!1;h.onUrlChange=function(a){if(!X){if(d.history)D(b).on("popstate",g);if(d.hashchange)D(b).on("hashchange",g);else h.addPollFn(g);X=!0}B.push(a);return a};h.$$checkUrlChange=g;h.baseHref=function(){var a=E.attr("href");return a?a.replace(/^(https?\:)?\/\/[^\/]*/,""):""};var K={},L="",P=h.baseHref();h.cookies=function(a,b){var d,e,f,g;if(a)b===s?k.cookie=encodeURIComponent(a)+"=;path="+P+";expires=Thu, 01 Jan 1970 00:00:00 GMT":
C(b)&&(d=(k.cookie=encodeURIComponent(a)+"="+encodeURIComponent(b)+";path="+P).length+1,4096<d&&c.warn("Cookie '"+a+"' possibly not set or overflowed because it was too large ("+d+" > 4096 bytes)!"));else{if(k.cookie!==L)for(L=k.cookie,d=L.split("; "),K={},f=0;f<d.length;f++)e=d[f],g=e.indexOf("="),0<g&&(a=decodeURIComponent(e.substring(0,g)),K[a]===s&&(K[a]=decodeURIComponent(e.substring(g+1))));return K}};h.defer=function(a,b){var c;t++;c=p(function(){delete m[c];e(a)},b||0);m[c]=!0;return c};h.defer.cancel=
function(a){return m[a]?(delete m[a],q(a),e(z),!0):!1}}function re(){this.$get=["$window","$log","$sniffer","$document",function(b,a,c,d){return new af(b,d,a,c)}]}function se(){this.$get=function(){function b(b,d){function e(a){a!=p&&(q?q==a&&(q=a.n):q=a,f(a.n,a.p),f(a,p),p=a,p.n=null)}function f(a,b){a!=b&&(a&&(a.p=b),b&&(b.n=a))}if(b in a)throw Q("$cacheFactory")("iid",b);var g=0,h=v({},d,{id:b}),k={},l=d&&d.capacity||Number.MAX_VALUE,n={},p=null,q=null;return a[b]={put:function(a,b){if(l<Number.MAX_VALUE){var c=
n[a]||(n[a]={key:a});e(c)}if(!w(b))return a in k||g++,k[a]=b,g>l&&this.remove(q.key),b},get:function(a){if(l<Number.MAX_VALUE){var b=n[a];if(!b)return;e(b)}return k[a]},remove:function(a){if(l<Number.MAX_VALUE){var b=n[a];if(!b)return;b==p&&(p=b.p);b==q&&(q=b.n);f(b.n,b.p);delete n[a]}delete k[a];g--},removeAll:function(){k={};g=0;n={};p=q=null},destroy:function(){n=h=k=null;delete a[b]},info:function(){return v({},h,{size:g})}}}var a={};b.info=function(){var b={};r(a,function(a,e){b[e]=a.info()});
return b};b.get=function(b){return a[b]};return b}}function Je(){this.$get=["$cacheFactory",function(b){return b("templates")}]}function lc(b,a){function c(a,b){var c=/^\s*([@=&])(\??)\s*(\w*)\s*$/,d={};r(a,function(a,e){var f=a.match(c);if(!f)throw ja("iscp",b,e,a);d[e]={attrName:f[3]||e,mode:f[1],optional:"?"===f[2]}});return d}var d={},e=/^\s*directive\:\s*([\d\w_\-]+)\s+(.*)$/,f=/(([\d\w_\-]+)(?:\:([^;]+))?;?)/,g=ud("ngSrc,ngSrcset,src,srcset"),h=/^(on[a-z]+|formaction)$/;this.directive=function n(a,
e){Ia(a,"directive");C(a)?(Fb(e,"directiveFactory"),d.hasOwnProperty(a)||(d[a]=[],b.factory(a+"Directive",["$injector","$exceptionHandler",function(b,e){var f=[];r(d[a],function(d,g){try{var h=b.invoke(d);F(h)?h={compile:ga(h)}:!h.compile&&h.link&&(h.compile=ga(h.link));h.priority=h.priority||0;h.index=g;h.name=h.name||a;h.require=h.require||h.controller&&h.name;h.restrict=h.restrict||"EA";S(h.scope)&&(h.$$isolateBindings=c(h.scope,h.name));f.push(h)}catch(k){e(k)}});return f}])),d[a].push(e)):r(a,
bc(n));return this};this.aHrefSanitizationWhitelist=function(b){return x(b)?(a.aHrefSanitizationWhitelist(b),this):a.aHrefSanitizationWhitelist()};this.imgSrcSanitizationWhitelist=function(b){return x(b)?(a.imgSrcSanitizationWhitelist(b),this):a.imgSrcSanitizationWhitelist()};var k=!0;this.debugInfoEnabled=function(a){return x(a)?(k=a,this):k};this.$get=["$injector","$interpolate","$exceptionHandler","$templateRequest","$parse","$controller","$rootScope","$document","$sce","$animate","$$sanitizeUri",
function(a,b,c,m,t,u,H,A,y,E,G){function B(a,b){try{a.addClass(b)}catch(c){}}function X(a,b,c,d,e){a instanceof D||(a=D(a));r(a,function(b,c){3==b.nodeType&&b.nodeValue.match(/\S+/)&&(a[c]=D(b).wrap("<span></span>").parent()[0])});var f=K(a,b,a,c,d,e);X.$$addScopeClass(a);var h=null,g=a,k;return function(b,c,d,e,m){Fb(b,"scope");h||(h=(m=m&&m[0])?"foreignobject"!==pa(m)&&m.toString().match(/SVG/)?"svg":"html":"html");"html"!==h&&a[0]!==k&&(g=D(Nb(h,D("<div>").append(a).html())));k=a[0];m=c?Ha.clone.call(g):
g;if(d)for(var q in d)m.data("$"+q+"Controller",d[q].instance);X.$$addScopeInfo(m,b);c&&c(m,b);f&&f(b,m,m,e);return m}}function K(a,b,c,d,e,f){function h(a,c,d,e){var f,k,m,q,n,p,y;if(u)for(y=Array(c.length),q=0;q<g.length;q+=3)f=g[q],y[f]=c[f];else y=c;q=0;for(n=g.length;q<n;)k=y[g[q++]],c=g[q++],f=g[q++],c?(c.scope?(m=a.$new(),X.$$addScopeInfo(D(k),m)):m=a,p=c.transcludeOnThisElement?L(a,c.transclude,e,c.elementTranscludeOnThisElement):!c.templateOnThisElement&&e?e:!e&&b?L(a,b):null,c(f,m,k,d,p)):
f&&f(a,k.childNodes,s,e)}for(var g=[],k,m,q,n,u,p=0;p<a.length;p++){k=new Ob;m=P(a[p],[],k,0===p?d:s,e);(f=m.length?U(m,a[p],k,b,c,null,[],[],f):null)&&f.scope&&X.$$addScopeClass(k.$$element);k=f&&f.terminal||!(q=a[p].childNodes)||!q.length?null:K(q,f?(f.transcludeOnThisElement||!f.templateOnThisElement)&&f.transclude:b);if(f||k)g.push(p,f,k),n=!0,u=u||f;f=null}return n?h:null}function L(a,b,c,d){return function(e,f,g,h){var k=!1;e||(e=a.$new(),k=e.$$transcluded=!0);f=b(e,f,g,c,h);if(k&&!d)f.on("$destroy",
function(){e.$destroy()});return f}}function P(b,c,g,h,k){var m=g.$attr,q;switch(b.nodeType){case 1:$(c,va(pa(b)),"E",h,k);for(var u,p,y,t=b.attributes,E=0,H=t&&t.length;E<H;E++){var K=!1,G=!1;u=t[E];if(!aa||8<=aa||u.specified){q=u.name;u=ca(u.value);p=va(q);if(y=ka.test(p))q=Db(p.substr(6),"-");var A=p.replace(/(Start|End)$/,""),r;a:{var U=A;if(d.hasOwnProperty(U)){r=void 0;for(var U=a.get(U+"Directive"),N=0,B=U.length;N<B;N++)if(r=U[N],r.multiElement){r=!0;break a}}r=!1}r&&p===A+"Start"&&(K=q,G=
q.substr(0,q.length-5)+"end",q=q.substr(0,q.length-6));p=va(q.toLowerCase());m[p]=q;if(y||!g.hasOwnProperty(p))g[p]=u,Ac(b,p)&&(g[p]=!0);V(b,c,u,p,y);$(c,p,"A",h,k,K,G)}}b=b.className;if(C(b)&&""!==b)for(;q=f.exec(b);)p=va(q[2]),$(c,p,"C",h,k)&&(g[p]=ca(q[3])),b=b.substr(q.index+q[0].length);break;case 3:O(c,b.nodeValue);break;case 8:try{if(q=e.exec(b.nodeValue))p=va(q[1]),$(c,p,"M",h,k)&&(g[p]=ca(q[2]))}catch(P){}}c.sort(w);return c}function J(a,b,c){var d=[],e=0;if(b&&a.hasAttribute&&a.hasAttribute(b)){do{if(!a)throw ja("uterdir",
b,c);1==a.nodeType&&(a.hasAttribute(b)&&e++,a.hasAttribute(c)&&e--);d.push(a);a=a.nextSibling}while(0<e)}else d.push(a);return D(d)}function N(a,b,c){return function(d,e,f,g,h){e=J(e[0],b,c);return a(d,e,f,g,h)}}function U(a,d,e,f,g,h,k,m,n){function y(a,b,c,d){if(a){c&&(a=N(a,c,d));a.require=I.require;a.directiveName=ka;if(B===I||I.$$isolateScope)a=Fc(a,{isolateScope:!0});k.push(a)}if(b){c&&(b=N(b,c,d));b.require=I.require;b.directiveName=ka;if(B===I||I.$$isolateScope)b=Fc(b,{isolateScope:!0});m.push(b)}}
function E(a,b,c,d){var e,f="data",g=!1;if(C(b)){for(;"^"==(e=b.charAt(0))||"?"==e;)b=b.substr(1),"^"==e&&(f="inheritedData"),g=g||"?"==e;e=null;d&&"data"===f&&(e=d[b])&&(e=e.instance);e=e||c[f]("$"+b+"Controller");if(!e&&!g)throw ja("ctreq",b,a);}else M(b)&&(e=[],r(b,function(b){e.push(E(a,b,c,d))}));return e}function H(a,c,f,g,h){function q(a,b,c){var d;Qa(a)||(c=b,b=a,a=s);w&&(d=G);c||(c=w?P.parent():P);return h(a,b,d,c)}var n,y,K,ua,G,N,P,J;d===f?(J=e,P=e.$$element):(P=D(f),J=new Ob(P,e));B&&
(ua=c.$new(!0));N=h&&q;A&&(U={},G={},r(A,function(a){var b={$scope:a===B||a.$$isolateScope?ua:c,$element:P,$attrs:J,$transclude:N};K=a.controller;"@"==K&&(K=J[a.name]);b=u(K,b,!0,a.controllerAs);G[a.name]=b;w||P.data("$"+a.name+"Controller",b.instance);U[a.name]=b}));if(B){X.$$addScopeInfo(P,ua,!0,!(L&&(L===B||L===B.$$originalDirective)));X.$$addScopeClass(P,!0);g=U&&U[B.name];var $=ua;g&&g.identifier&&!0===B.bindToController&&($=g.instance);r(ua.$$isolateBindings=B.$$isolateBindings,function(a,d){var e=
a.attrName,f=a.optional,g,h,k,m;switch(a.mode){case "@":J.$observe(e,function(a){$[d]=a});J.$$observers[e].$$scope=c;J[e]&&($[d]=b(J[e])(c));break;case "=":if(f&&!J[e])break;h=t(J[e]);m=h.literal?ra:function(a,b){return a===b||a!==a&&b!==b};k=h.assign||function(){g=$[d]=h(c);throw ja("nonassign",J[e],B.name);};g=$[d]=h(c);f=function(a){m(a,$[d])||(m(a,g)?k(c,a=$[d]):$[d]=a);return g=a};f.$stateful=!0;f=c.$watch(t(J[e],f),null,h.literal);ua.$on("$destroy",f);break;case "&":h=t(J[e]),$[d]=function(a){return h(c,
a)}}})}U&&(r(U,function(a){a()}),U=null);g=0;for(n=k.length;g<n;g++)y=k[g],Gc(y,y.isolateScope?ua:c,P,J,y.require&&E(y.directiveName,y.require,P,G),N);g=c;B&&(B.template||null===B.templateUrl)&&(g=ua);a&&a(g,f.childNodes,s,h);for(g=m.length-1;0<=g;g--)y=m[g],Gc(y,y.isolateScope?ua:c,P,J,y.require&&E(y.directiveName,y.require,P,G),N)}n=n||{};for(var K=-Number.MAX_VALUE,G,A=n.controllerDirectives,U,B=n.newIsolateScopeDirective,L=n.templateDirective,$=n.nonTlbTranscludeDirective,z=!1,V=!1,w=n.hasElementTranscludeDirective,
v=e.$$element=D(d),I,ka,W,ya=f,O,R=0,xa=a.length;R<xa;R++){I=a[R];var T=I.$$start,Pb=I.$$end;T&&(v=J(d,T,Pb));W=s;if(K>I.priority)break;if(W=I.scope)I.templateUrl||(S(W)?(Q("new/isolated scope",B||G,I,v),B=I):Q("new/isolated scope",B,I,v)),G=G||I;ka=I.name;!I.templateUrl&&I.controller&&(W=I.controller,A=A||{},Q("'"+ka+"' controller",A[ka],I,v),A[ka]=I);if(W=I.transclude)z=!0,I.$$tlb||(Q("transclusion",$,I,v),$=I),"element"==W?(w=!0,K=I.priority,W=v,v=e.$$element=D(Y.createComment(" "+ka+": "+e[ka]+
" ")),d=v[0],fa(g,Ta.call(W,0),d),ya=X(W,f,K,h&&h.name,{nonTlbTranscludeDirective:$})):(W=D(Ib(d)).contents(),v.empty(),ya=X(W,f));if(I.template)if(V=!0,Q("template",L,I,v),L=I,W=F(I.template)?I.template(v,e):I.template,W=Z(W),I.replace){h=I;W=Gb.test(W)?D(Nb(I.templateNamespace,ca(W))):[];d=W[0];if(1!=W.length||1!==d.nodeType)throw ja("tplrt",ka,"");fa(g,v,d);xa={$attr:{}};W=P(d,[],xa);var aa=a.splice(R+1,a.length-(R+1));B&&tb(W);a=a.concat(W).concat(aa);x(e,xa);xa=a.length}else v.html(W);if(I.templateUrl)V=
!0,Q("template",L,I,v),L=I,I.replace&&(h=I),H=bf(a.splice(R,a.length-R),v,e,g,z&&ya,k,m,{controllerDirectives:A,newIsolateScopeDirective:B,templateDirective:L,nonTlbTranscludeDirective:$}),xa=a.length;else if(I.compile)try{O=I.compile(v,e,ya),F(O)?y(null,O,T,Pb):O&&y(O.pre,O.post,T,Pb)}catch(ba){c(ba,ta(v))}I.terminal&&(H.terminal=!0,K=Math.max(K,I.priority))}H.scope=G&&!0===G.scope;H.transcludeOnThisElement=z;H.elementTranscludeOnThisElement=w;H.templateOnThisElement=V;H.transclude=ya;n.hasElementTranscludeDirective=
w;return H}function tb(a){for(var b=0,c=a.length;b<c;b++)a[b]=dc(a[b],{$$isolateScope:!0})}function $(b,e,f,g,h,k,m){if(e===h)return null;h=null;if(d.hasOwnProperty(e)){var u;e=a.get(e+"Directive");for(var p=0,y=e.length;p<y;p++)try{u=e[p],(g===s||g>u.priority)&&-1!=u.restrict.indexOf(f)&&(k&&(u=dc(u,{$$start:k,$$end:m})),b.push(u),h=u)}catch(t){c(t)}}return h}function x(a,b){var c=b.$attr,d=a.$attr,e=a.$$element;r(a,function(d,e){"$"!=e.charAt(0)&&(b[e]&&b[e]!==d&&(d+=("style"===e?";":" ")+b[e]),
a.$set(e,d,!0,c[e]))});r(b,function(b,f){"class"==f?(B(e,b),a["class"]=(a["class"]?a["class"]+" ":"")+b):"style"==f?(e.attr("style",e.attr("style")+";"+b),a.style=(a.style?a.style+";":"")+b):"$"==f.charAt(0)||a.hasOwnProperty(f)||(a[f]=b,d[f]=c[f])})}function bf(a,b,c,d,e,f,g,h){var k=[],q,n,u=b[0],p=a.shift(),t=v({},p,{templateUrl:null,transclude:null,replace:null,$$originalDirective:p}),E=F(p.templateUrl)?p.templateUrl(b,c):p.templateUrl,H=p.templateNamespace;b.empty();m(y.getTrustedResourceUrl(E)).then(function(m){var y,
G;m=Z(m);if(p.replace){m=Gb.test(m)?D(Nb(H,ca(m))):[];y=m[0];if(1!=m.length||1!==y.nodeType)throw ja("tplrt",p.name,E);m={$attr:{}};fa(d,b,y);var A=P(y,[],m);S(p.scope)&&tb(A);a=A.concat(a);x(c,m)}else y=u,b.html(m);a.unshift(t);q=U(a,y,c,e,b,p,f,g,h);r(d,function(a,c){a==y&&(d[c]=b[0])});for(n=K(b[0].childNodes,e);k.length;){m=k.shift();G=k.shift();var N=k.shift(),J=k.shift(),A=b[0];if(G!==u){var X=G.className;h.hasElementTranscludeDirective&&p.replace||(A=Ib(y));fa(N,D(G),A);B(D(A),X)}G=q.transcludeOnThisElement?
L(m,q.transclude,J):J;q(n,m,A,d,G)}k=null});return function(a,b,c,d,e){a=e;k?(k.push(b),k.push(c),k.push(d),k.push(a)):(q.transcludeOnThisElement&&(a=L(b,q.transclude,e)),q(n,b,c,d,a))}}function w(a,b){var c=b.priority-a.priority;return 0!==c?c:a.name!==b.name?a.name<b.name?-1:1:a.index-b.index}function Q(a,b,c,d){if(b)throw ja("multidir",b.name,c.name,a,ta(d));}function O(a,c){var d=b(c,!0);d&&a.push({priority:0,compile:function(a){a=a.parent();var b=!!a.length;b&&X.$$addBindingClass(a);return function(a,
c){var e=c.parent();b||X.$$addBindingClass(e);X.$$addBindingInfo(e,d.expressions);a.$watch(d,function(a){c[0].nodeValue=a})}}})}function Nb(a,b){a=R(a||"html");switch(a){case "svg":case "math":var c=Y.createElement("div");c.innerHTML="<"+a+">"+b+"</"+a+">";return c.childNodes[0].childNodes;default:return b}}function xa(a,b){if("srcdoc"==b)return y.HTML;var c=pa(a);if("xlinkHref"==b||"form"==c&&"action"==b||"img"!=c&&("src"==b||"ngSrc"==b))return y.RESOURCE_URL}function V(a,c,d,e,f){var k=b(d,!0);
if(k){if("multiple"===e&&"select"===pa(a))throw ja("selmulti",ta(a));c.push({priority:100,compile:function(){return{pre:function(c,d,m){d=m.$$observers||(m.$$observers={});if(h.test(e))throw ja("nodomevents");if(k=b(m[e],!0,xa(a,e),g[e]||f))m[e]=k(c),(d[e]||(d[e]=[])).$$inter=!0,(m.$$observers&&m.$$observers[e].$$scope||c).$watch(k,function(a,b){"class"===e&&a!=b?m.$updateClass(a,b):m.$set(e,a)})}}}})}}function fa(a,b,c){var d=b[0],e=b.length,f=d.parentNode,g,h;if(a)for(g=0,h=a.length;g<h;g++)if(a[g]==
d){a[g++]=c;h=g+e-1;for(var k=a.length;g<k;g++,h++)h<k?a[g]=a[h]:delete a[g];a.length-=e-1;a.context===d&&(a.context=c);break}f&&f.replaceChild(c,d);a=Y.createDocumentFragment();a.appendChild(d);D(c).data(D(d).data());ma?(Eb=!0,ma.cleanData([d])):delete D.cache[d[D.expando]];d=1;for(e=b.length;d<e;d++)f=b[d],D(f).remove(),a.appendChild(f),delete b[d];b[0]=c;b.length=1}function Fc(a,b){return v(function(){return a.apply(null,arguments)},a,b)}function Gc(a,b,d,e,f,g){try{a(b,d,e,f,g)}catch(h){c(h,ta(d))}}
var Ob=function(a,b){if(b){var c=Object.keys(b),d,e,f;d=0;for(e=c.length;d<e;d++)f=c[d],this[f]=b[f]}else this.$attr={};this.$$element=a};Ob.prototype={$normalize:va,$addClass:function(a){a&&0<a.length&&E.addClass(this.$$element,a)},$removeClass:function(a){a&&0<a.length&&E.removeClass(this.$$element,a)},$updateClass:function(a,b){var c=Hc(a,b);c&&c.length&&E.addClass(this.$$element,c);(c=Hc(b,a))&&c.length&&E.removeClass(this.$$element,c)},$set:function(a,b,d,e){var f=this.$$element[0],g=Ac(f,a),
h=We(f,a),f=a;g?(this.$$element.prop(a,b),e=g):h&&(this[h]=b,f=h);this[a]=b;e?this.$attr[a]=e:(e=this.$attr[a])||(this.$attr[a]=e=Db(a,"-"));g=pa(this.$$element);if("a"===g&&"href"===a||"img"===g&&"src"===a)this[a]=b=G(b,"src"===a);!1!==d&&(null===b||b===s?this.$$element.removeAttr(e):this.$$element.attr(e,b));(a=this.$$observers)&&r(a[f],function(a){try{a(b)}catch(d){c(d)}})},$observe:function(a,b){var c=this,d=c.$$observers||(c.$$observers={}),e=d[a]||(d[a]=[]);e.push(b);H.$evalAsync(function(){e.$$inter||
b(c[a])});return function(){Ra(e,b)}}};var ya=b.startSymbol(),T=b.endSymbol(),Z="{{"==ya||"}}"==T?Pa:function(a){return a.replace(/\{\{/g,ya).replace(/}}/g,T)},ka=/^ngAttr[A-Z]/;X.$$addBindingInfo=k?function(a,b){var c=a.data("$binding")||[];M(b)?c=c.concat(b):c.push(b);a.data("$binding",c)}:z;X.$$addBindingClass=k?function(a){B(a,"ng-binding")}:z;X.$$addScopeInfo=k?function(a,b,c,d){a.data(c?d?"$isolateScopeNoTemplate":"$isolateScope":"$scope",b)}:z;X.$$addScopeClass=k?function(a,b){B(a,b?"ng-isolate-scope":
"ng-scope")}:z;return X}]}function va(b){return Wa(b.replace(cf,""))}function Hc(b,a){var c="",d=b.split(/\s+/),e=a.split(/\s+/),f=0;a:for(;f<d.length;f++){for(var g=d[f],h=0;h<e.length;h++)if(g==e[h])continue a;c+=(0<c.length?" ":"")+g}return c}function te(){var b={},a=!1,c=/^(\S+)(\s+as\s+(\w+))?$/;this.register=function(a,c){Ia(a,"controller");S(a)?v(b,a):b[a]=c};this.allowGlobals=function(){a=!0};this.$get=["$injector","$window",function(d,e){function f(a,b,c,d){if(!a||!S(a.$scope))throw Q("$controller")("noscp",
d,b);a.$scope[b]=c}return function(g,h,k,l){var n,p,q;k=!0===k;l&&C(l)&&(q=l);C(g)&&(l=g.match(c),p=l[1],q=q||l[3],g=b.hasOwnProperty(p)?b[p]:kc(h.$scope,p,!0)||(a?kc(e,p,!0):s),ib(g,p,!0));if(k)return k=function(){},k.prototype=(M(g)?g[g.length-1]:g).prototype,n=new k,q&&f(h,q,n,p||g.name),v(function(){d.invoke(g,n,h,p);return n},{instance:n,identifier:q});n=d.instantiate(g,h,p);q&&f(h,q,n,p||g.name);return n}}]}function ue(){this.$get=["$window",function(b){return D(b.document)}]}function ve(){this.$get=
["$log",function(b){return function(a,c){b.error.apply(b,arguments)}}]}function Ic(b){var a={},c,d,e;if(!b)return a;r(b.split("\n"),function(b){e=b.indexOf(":");c=R(ca(b.substr(0,e)));d=ca(b.substr(e+1));c&&(a[c]=a[c]?a[c]+", "+d:d)});return a}function Jc(b){var a=S(b)?b:s;return function(c){a||(a=Ic(b));return c?a[R(c)]||null:a}}function Kc(b,a,c){if(F(c))return c(b,a);r(c,function(c){b=c(b,a)});return b}function ye(){var b=/^\s*(\[|\{[^\{])/,a=/[\}\]]\s*$/,c=/^\)\]\}',?\n/,d={"Content-Type":"application/json;charset=utf-8"},
e=this.defaults={transformResponse:[function(d){C(d)&&(d=d.replace(c,""),b.test(d)&&a.test(d)&&(d=fc(d)));return d}],transformRequest:[function(a){return S(a)&&"[object File]"!==Fa.call(a)&&"[object Blob]"!==Fa.call(a)?sa(a):a}],headers:{common:{Accept:"application/json, text/plain, */*"},post:qa(d),put:qa(d),patch:qa(d)},xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN"},f=!1;this.useApplyAsync=function(a){return x(a)?(f=!!a,this):f};var g=this.interceptors=[];this.$get=["$httpBackend","$browser",
"$cacheFactory","$rootScope","$q","$injector",function(a,b,c,d,p,q){function m(a){function b(a){var d=v({},a,{data:Kc(a.data,a.headers,c.transformResponse)});a=a.status;return 200<=a&&300>a?d:p.reject(d)}var c={method:"get",transformRequest:e.transformRequest,transformResponse:e.transformResponse},d=function(a){var b=e.headers,c=v({},a.headers),d,f,b=v({},b.common,b[R(a.method)]);a:for(d in b){a=R(d);for(f in c)if(R(f)===a)continue a;c[d]=b[d]}(function(a){var b;r(a,function(c,d){F(c)&&(b=c(),null!=
b?a[d]=b:delete a[d])})})(c);return c}(a);v(c,a);c.headers=d;c.method=kb(c.method);var f=[function(a){d=a.headers;var c=Kc(a.data,Jc(d),a.transformRequest);w(c)&&r(d,function(a,b){"content-type"===R(b)&&delete d[b]});w(a.withCredentials)&&!w(e.withCredentials)&&(a.withCredentials=e.withCredentials);return t(a,c,d).then(b,b)},s],g=p.when(c);for(r(A,function(a){(a.request||a.requestError)&&f.unshift(a.request,a.requestError);(a.response||a.responseError)&&f.push(a.response,a.responseError)});f.length;){a=
f.shift();var h=f.shift(),g=g.then(a,h)}g.success=function(a){g.then(function(b){a(b.data,b.status,b.headers,c)});return g};g.error=function(a){g.then(null,function(b){a(b.data,b.status,b.headers,c)});return g};return g}function t(c,g,l){function q(a,b,c,e){function g(){t(b,a,c,e)}J&&(200<=a&&300>a?J.put(U,[a,b,Ic(c),e]):J.remove(U));f?d.$applyAsync(g):(g(),d.$$phase||d.$apply())}function t(a,b,d,e){b=Math.max(b,0);(200<=b&&300>b?r.resolve:r.reject)({data:a,status:b,headers:Jc(d),config:c,statusText:e})}
function A(){var a=m.pendingRequests.indexOf(c);-1!==a&&m.pendingRequests.splice(a,1)}var r=p.defer(),P=r.promise,J,N,U=u(c.url,c.params);m.pendingRequests.push(c);P.then(A,A);!c.cache&&!e.cache||!1===c.cache||"GET"!==c.method&&"JSONP"!==c.method||(J=S(c.cache)?c.cache:S(e.cache)?e.cache:H);if(J)if(N=J.get(U),x(N)){if(N&&F(N.then))return N.then(A,A),N;M(N)?t(N[1],N[0],qa(N[2]),N[3]):t(N,200,{},"OK")}else J.put(U,P);w(N)&&((N=Lc(c.url)?b.cookies()[c.xsrfCookieName||e.xsrfCookieName]:s)&&(l[c.xsrfHeaderName||
e.xsrfHeaderName]=N),a(c.method,U,g,q,l,c.timeout,c.withCredentials,c.responseType));return P}function u(a,b){if(!b)return a;var c=[];rd(b,function(a,b){null===a||w(a)||(M(a)||(a=[a]),r(a,function(a){S(a)&&(a=ha(a)?a.toISOString():sa(a));c.push(Ca(b)+"="+Ca(a))}))});0<c.length&&(a+=(-1==a.indexOf("?")?"?":"&")+c.join("&"));return a}var H=c("$http"),A=[];r(g,function(a){A.unshift(C(a)?q.get(a):q.invoke(a))});m.pendingRequests=[];(function(a){r(arguments,function(a){m[a]=function(b,c){return m(v(c||
{},{method:a,url:b}))}})})("get","delete","head","jsonp");(function(a){r(arguments,function(a){m[a]=function(b,c,d){return m(v(d||{},{method:a,url:b,data:c}))}})})("post","put","patch");m.defaults=e;return m}]}function df(b){if(8>=aa&&(!b.match(/^(get|post|head|put|delete|options)$/i)||!O.XMLHttpRequest))return new O.ActiveXObject("Microsoft.XMLHTTP");if(O.XMLHttpRequest)return new O.XMLHttpRequest;throw Q("$httpBackend")("noxhr");}function ze(){this.$get=["$browser","$window","$document",function(b,
a,c){return ef(b,df,b.defer,a.angular.callbacks,c[0])}]}function ef(b,a,c,d,e){function f(a,b,c){var f=e.createElement("script"),n=null;f.type="text/javascript";f.src=a;f.async=!0;n=function(a){f.removeEventListener("load",n,!1);f.removeEventListener("error",n,!1);e.body.removeChild(f);f=null;var g=-1,m="unknown";a&&("load"!==a.type||d[b].called||(a={type:"error"}),m=a.type,g="error"===a.type?404:200);c&&c(g,m)};f.addEventListener("load",n,!1);f.addEventListener("error",n,!1);e.body.appendChild(f);
return n}return function(e,h,k,l,n,p,q,m){function t(){H=-1;y&&y();E&&E.abort()}function u(a,d,e,f,g){B&&c.cancel(B);y=E=null;0===d&&(d=e?200:"file"==za(h).protocol?404:0);a(1223===d?204:d,e,f,g||"");b.$$completeOutstandingRequest(z)}var H;b.$$incOutstandingRequestCount();h=h||b.url();if("jsonp"==R(e)){var A="_"+(d.counter++).toString(36);d[A]=function(a){d[A].data=a;d[A].called=!0};var y=f(h.replace("JSON_CALLBACK","angular.callbacks."+A),A,function(a,b){u(l,a,d[A].data,"",b);d[A]=z})}else{var E=
a(e);E.open(e,h,!0);r(n,function(a,b){x(a)&&E.setRequestHeader(b,a)});E.onreadystatechange=function(){if(E&&4==E.readyState){var a=null,b=null,c="";-1!==H&&(a=E.getAllResponseHeaders(),b="response"in E?E.response:E.responseText);-1===H&&10>aa||(c=E.statusText);u(l,H||E.status,b,a,c)}};q&&(E.withCredentials=!0);if(m)try{E.responseType=m}catch(G){if("json"!==m)throw G;}E.send(k||null)}if(0<p)var B=c(t,p);else p&&F(p.then)&&p.then(t)}}function we(){var b="{{",a="}}";this.startSymbol=function(a){return a?
(b=a,this):b};this.endSymbol=function(b){return b?(a=b,this):a};this.$get=["$parse","$exceptionHandler","$sce",function(c,d,e){function f(a){return"\\\\\\"+a}function g(f,g,m,t){function u(c){return c.replace(l,b).replace(n,a)}function H(a){try{var b;var c=m?e.getTrusted(m,a):e.valueOf(a);if(null==c)b="";else{switch(typeof c){case "string":break;case "number":c=""+c;break;default:c=sa(c)}b=c}return b}catch(g){a=Qb("interr",f,g.toString()),d(a)}}t=!!t;for(var A,y,E=0,G=[],r=[],s=f.length,K=[],L=[];E<
s;)if(-1!=(A=f.indexOf(b,E))&&-1!=(y=f.indexOf(a,A+h)))E!==A&&K.push(u(f.substring(E,A))),E=f.substring(A+h,y),G.push(E),r.push(c(E,H)),E=y+k,L.push(K.length),K.push("");else{E!==s&&K.push(u(f.substring(E)));break}if(m&&1<K.length)throw Qb("noconcat",f);if(!g||G.length){var P=function(a){for(var b=0,c=G.length;b<c;b++){if(t&&w(a[b]))return;K[L[b]]=a[b]}return K.join("")};return v(function(a){var b=0,c=G.length,e=Array(c);try{for(;b<c;b++)e[b]=r[b](a);return P(e)}catch(g){a=Qb("interr",f,g.toString()),
d(a)}},{exp:f,expressions:G,$$watchDelegate:function(a,b,c){var d;return a.$watchGroup(r,function(c,e){var f=P(c);F(b)&&b.call(this,f,c!==e?d:f,a);d=f},c)}})}}var h=b.length,k=a.length,l=new RegExp(b.replace(/./g,f),"g"),n=new RegExp(a.replace(/./g,f),"g");g.startSymbol=function(){return b};g.endSymbol=function(){return a};return g}]}function xe(){this.$get=["$rootScope","$window","$q","$$q",function(b,a,c,d){function e(e,h,k,l){var n=a.setInterval,p=a.clearInterval,q=0,m=x(l)&&!l,t=(m?d:c).defer(),
u=t.promise;k=x(k)?k:0;u.then(null,null,e);u.$$intervalId=n(function(){t.notify(q++);0<k&&q>=k&&(t.resolve(q),p(u.$$intervalId),delete f[u.$$intervalId]);m||b.$apply()},h);f[u.$$intervalId]=t;return u}var f={};e.cancel=function(b){return b&&b.$$intervalId in f?(f[b.$$intervalId].reject("canceled"),a.clearInterval(b.$$intervalId),delete f[b.$$intervalId],!0):!1};return e}]}function Fd(){this.$get=function(){return{id:"en-us",NUMBER_FORMATS:{DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{minInt:1,minFrac:0,
maxFrac:3,posPre:"",posSuf:"",negPre:"-",negSuf:"",gSize:3,lgSize:3},{minInt:1,minFrac:2,maxFrac:2,posPre:"\u00a4",posSuf:"",negPre:"(\u00a4",negSuf:")",gSize:3,lgSize:3}],CURRENCY_SYM:"$"},DATETIME_FORMATS:{MONTH:"January February March April May June July August September October November December".split(" "),SHORTMONTH:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),DAY:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),SHORTDAY:"Sun Mon Tue Wed Thu Fri Sat".split(" "),
AMPMS:["AM","PM"],medium:"MMM d, y h:mm:ss a",short:"M/d/yy h:mm a",fullDate:"EEEE, MMMM d, y",longDate:"MMMM d, y",mediumDate:"MMM d, y",shortDate:"M/d/yy",mediumTime:"h:mm:ss a",shortTime:"h:mm a"},pluralCat:function(b){return 1===b?"one":"other"}}}}function Rb(b){b=b.split("/");for(var a=b.length;a--;)b[a]=gb(b[a]);return b.join("/")}function Mc(b,a,c){b=za(b,c);a.$$protocol=b.protocol;a.$$host=b.hostname;a.$$port=Z(b.port)||ff[b.protocol]||null}function Nc(b,a,c){var d="/"!==b.charAt(0);d&&(b=
"/"+b);b=za(b,c);a.$$path=decodeURIComponent(d&&"/"===b.pathname.charAt(0)?b.pathname.substring(1):b.pathname);a.$$search=hc(b.search);a.$$hash=decodeURIComponent(b.hash);a.$$path&&"/"!=a.$$path.charAt(0)&&(a.$$path="/"+a.$$path)}function wa(b,a){if(0===a.indexOf(b))return a.substr(b.length)}function Ya(b){var a=b.indexOf("#");return-1==a?b:b.substr(0,a)}function Sb(b){return b.substr(0,Ya(b).lastIndexOf("/")+1)}function Oc(b,a){this.$$html5=!0;a=a||"";var c=Sb(b);Mc(b,this,b);this.$$parse=function(a){var e=
wa(c,a);if(!C(e))throw ub("ipthprfx",a,c);Nc(e,this,b);this.$$path||(this.$$path="/");this.$$compose()};this.$$compose=function(){var a=Bb(this.$$search),b=this.$$hash?"#"+gb(this.$$hash):"";this.$$url=Rb(this.$$path)+(a?"?"+a:"")+b;this.$$absUrl=c+this.$$url.substr(1)};this.$$parseLinkUrl=function(d,e){if(e&&"#"===e[0])return this.hash(e.slice(1)),!0;var f,g;(f=wa(b,d))!==s?(g=f,g=(f=wa(a,f))!==s?c+(wa("/",f)||f):b+g):(f=wa(c,d))!==s?g=c+f:c==d+"/"&&(g=c);g&&this.$$parse(g);return!!g}}function Tb(b,
a){var c=Sb(b);Mc(b,this,b);this.$$parse=function(d){var e=wa(b,d)||wa(c,d),e="#"==e.charAt(0)?wa(a,e):this.$$html5?e:"";if(!C(e))throw ub("ihshprfx",d,a);Nc(e,this,b);d=this.$$path;var f=/^\/[A-Z]:(\/.*)/;0===e.indexOf(b)&&(e=e.replace(b,""));f.exec(e)||(d=(e=f.exec(d))?e[1]:d);this.$$path=d;this.$$compose()};this.$$compose=function(){var c=Bb(this.$$search),e=this.$$hash?"#"+gb(this.$$hash):"";this.$$url=Rb(this.$$path)+(c?"?"+c:"")+e;this.$$absUrl=b+(this.$$url?a+this.$$url:"")};this.$$parseLinkUrl=
function(a,c){return Ya(b)==Ya(a)?(this.$$parse(a),!0):!1}}function Pc(b,a){this.$$html5=!0;Tb.apply(this,arguments);var c=Sb(b);this.$$parseLinkUrl=function(d,e){if(e&&"#"===e[0])return this.hash(e.slice(1)),!0;var f,g;b==Ya(d)?f=d:(g=wa(c,d))?f=b+a+g:c===d+"/"&&(f=c);f&&this.$$parse(f);return!!f};this.$$compose=function(){var c=Bb(this.$$search),e=this.$$hash?"#"+gb(this.$$hash):"";this.$$url=Rb(this.$$path)+(c?"?"+c:"")+e;this.$$absUrl=b+a+this.$$url}}function vb(b){return function(){return this[b]}}
function Qc(b,a){return function(c){if(w(c))return this[b];this[b]=a(c);this.$$compose();return this}}function Ae(){var b="",a={enabled:!1,requireBase:!0};this.hashPrefix=function(a){return x(a)?(b=a,this):b};this.html5Mode=function(b){return eb(b)?(a.enabled=b,this):S(b)?(a.enabled=eb(b.enabled)?b.enabled:a.enabled,a.requireBase=eb(b.requireBase)?b.requireBase:a.requireBase,this):a};this.$get=["$rootScope","$browser","$sniffer","$rootElement",function(c,d,e,f){function g(a){c.$broadcast("$locationChangeSuccess",
h.absUrl(),a)}var h,k=d.baseHref(),l=d.url();if(a.enabled){if(!k&&a.requireBase)throw ub("nobase");k=l.substring(0,l.indexOf("/",l.indexOf("//")+2))+(k||"/");e=e.history?Oc:Pc}else k=Ya(l),e=Tb;h=new e(k,"#"+b);h.$$parseLinkUrl(l,l);var n=/^\s*(javascript|mailto):/i;f.on("click",function(a){if(!a.ctrlKey&&!a.metaKey&&2!=a.which){for(var b=D(a.target);"a"!==pa(b[0]);)if(b[0]===f[0]||!(b=b.parent())[0])return;var e=b.prop("href"),g=b.attr("href")||b.attr("xlink:href");S(e)&&"[object SVGAnimatedString]"===
e.toString()&&(e=za(e.animVal).href);n.test(e)||!e||b.attr("target")||a.isDefaultPrevented()||!h.$$parseLinkUrl(e,g)||(a.preventDefault(),h.absUrl()!=d.url()&&(c.$apply(),O.angular["ff-684208-preventDefault"]=!0))}});h.absUrl()!=l&&d.url(h.absUrl(),!0);d.onUrlChange(function(a){h.absUrl()!=a&&(c.$evalAsync(function(){var b=h.absUrl();h.$$parse(a);c.$broadcast("$locationChangeStart",a,b).defaultPrevented?(h.$$parse(b),d.url(b)):g(b)}),c.$$phase||c.$digest())});var p=0;c.$watch(function(){var a=d.url(),
b=h.$$replace;p&&a==h.absUrl()||(p++,c.$evalAsync(function(){c.$broadcast("$locationChangeStart",h.absUrl(),a).defaultPrevented?h.$$parse(a):(d.url(h.absUrl(),b),g(a))}));h.$$replace=!1;return p});return h}]}function Be(){var b=!0,a=this;this.debugEnabled=function(a){return x(a)?(b=a,this):b};this.$get=["$window",function(c){function d(a){a instanceof Error&&(a.stack?a=a.message&&-1===a.stack.indexOf(a.message)?"Error: "+a.message+"\n"+a.stack:a.stack:a.sourceURL&&(a=a.message+"\n"+a.sourceURL+":"+
a.line));return a}function e(a){var b=c.console||{},e=b[a]||b.log||z;a=!1;try{a=!!e.apply}catch(k){}return a?function(){var a=[];r(arguments,function(b){a.push(d(b))});return e.apply(b,a)}:function(a,b){e(a,null==b?"":b)}}return{log:e("log"),info:e("info"),warn:e("warn"),error:e("error"),debug:function(){var c=e("debug");return function(){b&&c.apply(a,arguments)}}()}}]}function na(b,a){if("__defineGetter__"===b||"__defineSetter__"===b||"__lookupGetter__"===b||"__lookupSetter__"===b||"__proto__"===
b)throw oa("isecfld",a);return b}function Aa(b,a){if(b){if(b.constructor===b)throw oa("isecfn",a);if(b.window===b)throw oa("isecwindow",a);if(b.children&&(b.nodeName||b.prop&&b.attr&&b.find))throw oa("isecdom",a);if(b===Object)throw oa("isecobj",a);}return b}function Ub(b){return b.constant}function La(b,a,c,d){Aa(b,d);a=a.split(".");for(var e,f=0;1<a.length;f++){e=na(a.shift(),d);var g=Aa(b[e],d);g||(g={},b[e]=g);b=g}e=na(a.shift(),d);Aa(b[e],d);return b[e]=c}function Rc(b,a,c,d,e,f){na(b,f);na(a,
f);na(c,f);na(d,f);na(e,f);return function(f,h){var k=h&&h.hasOwnProperty(b)?h:f;if(null==k)return k;k=k[b];if(!a)return k;if(null==k)return s;k=k[a];if(!c)return k;if(null==k)return s;k=k[c];if(!d)return k;if(null==k)return s;k=k[d];return e?null==k?s:k=k[e]:k}}function Sc(b,a,c){var d=Tc[b];if(d)return d;var e=b.split("."),f=e.length;if(a.csp)d=6>f?Rc(e[0],e[1],e[2],e[3],e[4],c):function(a,b){var d=0,g;do g=Rc(e[d++],e[d++],e[d++],e[d++],e[d++],c)(a,b),b=s,a=g;while(d<f);return g};else{var g="";
r(e,function(a,b){na(a,c);g+="if(s == null) return undefined;\ns="+(b?"s":'((l&&l.hasOwnProperty("'+a+'"))?l:s)')+"."+a+";\n"});g+="return s;";a=new Function("s","l",g);a.toString=ga(g);d=a}d.sharedGetter=!0;d.assign=function(a,c){return La(a,b,c,b)};return Tc[b]=d}function Ce(){var b=Object.create(null),a={csp:!1};this.$get=["$filter","$sniffer",function(c,d){function e(a){var b=a;a.sharedGetter&&(b=function(b,c){return a(b,c)},b.literal=a.literal,b.constant=a.constant,b.assign=a.assign);return b}
function f(a,b){for(var c=0,d=a.length;c<d;c++){var e=a[c];e.constant||(e.inputs?f(e.inputs,b):-1===b.indexOf(e)&&b.push(e))}return b}function g(a,b){return null==a||null==b?a===b:"object"===typeof a&&(a=a.valueOf(),"object"===typeof a)?!1:a===b||a!==a&&b!==b}function h(a,b,c,d){var e=d.$$inputs||(d.$$inputs=f(d.inputs,[])),h;if(1===e.length){var k=g,e=e[0];return a.$watch(function(a){var b=e(a);g(b,k)||(h=d(a),k=b&&b.valueOf());return h},b,c)}for(var l=[],n=0,p=e.length;n<p;n++)l[n]=g;return a.$watch(function(a){for(var b=
!1,c=0,f=e.length;c<f;c++){var k=e[c](a);if(b||(b=!g(k,l[c])))l[c]=k&&k.valueOf()}b&&(h=d(a));return h},b,c)}function k(a,b,c,d){var e,f;return e=a.$watch(function(a){return d(a)},function(a,c,d){f=a;F(b)&&b.apply(this,arguments);x(a)&&d.$$postDigest(function(){x(f)&&e()})},c)}function l(a,b,c,d){function e(a){var b=!0;r(a,function(a){x(a)||(b=!1)});return b}var f;return f=a.$watch(function(a){return d(a)},function(a,c,d){F(b)&&b.call(this,a,c,d);e(a)&&d.$$postDigest(function(){e(a)&&f()})},c)}function n(a,
b,c,d){var e;return e=a.$watch(function(a){return d(a)},function(a,c,d){F(b)&&b.apply(this,arguments);e()},c)}function p(a,b){if(!b)return a;var c=function(c,d){var e=a(c,d),f=b(e,c,d);return x(e)?f:e};a.$$watchDelegate&&a.$$watchDelegate!==h?c.$$watchDelegate=a.$$watchDelegate:b.$stateful||(c.$$watchDelegate=h,c.inputs=[a]);return c}a.csp=d.csp;return function(d,f){var g,u,H;switch(typeof d){case "string":return H=d=d.trim(),g=b[H],g||(":"===d.charAt(0)&&":"===d.charAt(1)&&(u=!0,d=d.substring(2)),
g=new Vb(a),g=(new Za(g,c,a)).parse(d),g.constant?g.$$watchDelegate=n:u?(g=e(g),g.$$watchDelegate=g.literal?l:k):g.inputs&&(g.$$watchDelegate=h),b[H]=g),p(g,f);case "function":return p(d,f);default:return p(z,f)}}}]}function Ee(){this.$get=["$rootScope","$exceptionHandler",function(b,a){return Uc(function(a){b.$evalAsync(a)},a)}]}function Fe(){this.$get=["$browser","$exceptionHandler",function(b,a){return Uc(function(a){b.defer(a)},a)}]}function Uc(b,a){function c(a,b,c){function d(b){return function(c){e||
(e=!0,b.call(a,c))}}var e=!1;return[d(b),d(c)]}function d(){this.$$state={status:0}}function e(a,b){return function(c){b.call(a,c)}}function f(c){!c.processScheduled&&c.pending&&(c.processScheduled=!0,b(function(){var b,d,e;e=c.pending;c.processScheduled=!1;c.pending=s;for(var f=0,g=e.length;f<g;++f){d=e[f][0];b=e[f][c.status];try{F(b)?d.resolve(b(c.value)):1===c.status?d.resolve(c.value):d.reject(c.value)}catch(h){d.reject(h),a(h)}}}))}function g(){this.promise=new d;this.resolve=e(this,this.resolve);
this.reject=e(this,this.reject);this.notify=e(this,this.notify)}var h=Q("$q",TypeError);d.prototype={then:function(a,b,c){var d=new g;this.$$state.pending=this.$$state.pending||[];this.$$state.pending.push([d,a,b,c]);0<this.$$state.status&&f(this.$$state);return d.promise},"catch":function(a){return this.then(null,a)},"finally":function(a,b){return this.then(function(b){return l(b,!0,a)},function(b){return l(b,!1,a)},b)}};g.prototype={resolve:function(a){this.promise.$$state.status||(a===this.promise?
this.$$reject(h("qcycle",a)):this.$$resolve(a))},$$resolve:function(b){var d,e;e=c(this,this.$$resolve,this.$$reject);try{if(S(b)||F(b))d=b&&b.then;F(d)?(this.promise.$$state.status=-1,d.call(b,e[0],e[1],this.notify)):(this.promise.$$state.value=b,this.promise.$$state.status=1,f(this.promise.$$state))}catch(g){e[1](g),a(g)}},reject:function(a){this.promise.$$state.status||this.$$reject(a)},$$reject:function(a){this.promise.$$state.value=a;this.promise.$$state.status=2;f(this.promise.$$state)},notify:function(c){var d=
this.promise.$$state.pending;0>=this.promise.$$state.status&&d&&d.length&&b(function(){for(var b,e,f=0,g=d.length;f<g;f++){e=d[f][0];b=d[f][3];try{e.notify(F(b)?b(c):c)}catch(h){a(h)}}})}};var k=function(a,b){var c=new g;b?c.resolve(a):c.reject(a);return c.promise},l=function(a,b,c){var d=null;try{F(c)&&(d=c())}catch(e){return k(e,!1)}return d&&F(d.then)?d.then(function(){return k(a,b)},function(a){return k(a,!1)}):k(a,b)},n=function(a,b,c,d){var e=new g;e.resolve(a);return e.promise.then(b,c,d)},
p=function m(a){if(!F(a))throw h("norslvr",a);if(!(this instanceof m))return new m(a);var b=new g;a(function(a){b.resolve(a)},function(a){b.reject(a)});return b.promise};p.defer=function(){return new g};p.reject=function(a){var b=new g;b.reject(a);return b.promise};p.when=n;p.all=function(a){var b=new g,c=0,d=M(a)?[]:{};r(a,function(a,e){c++;n(a).then(function(a){d.hasOwnProperty(e)||(d[e]=a,--c||b.resolve(d))},function(a){d.hasOwnProperty(e)||b.reject(a)})});0===c&&b.resolve(d);return b.promise};
return p}function Oe(){this.$get=["$window","$timeout",function(b,a){var c=b.requestAnimationFrame||b.webkitRequestAnimationFrame||b.mozRequestAnimationFrame,d=b.cancelAnimationFrame||b.webkitCancelAnimationFrame||b.mozCancelAnimationFrame||b.webkitCancelRequestAnimationFrame,e=!!c,f=e?function(a){var b=c(a);return function(){d(b)}}:function(b){var c=a(b,16.66,!1);return function(){a.cancel(c)}};f.supported=e;return f}]}function De(){var b=10,a=Q("$rootScope"),c=null,d=null;this.digestTtl=function(a){arguments.length&&
(b=a);return b};this.$get=["$injector","$exceptionHandler","$parse","$browser",function(e,f,g,h){function k(){this.$id=++cb;this.$$phase=this.$parent=this.$$watchers=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=null;this["this"]=this.$root=this;this.$$destroyed=!1;this.$$asyncQueue=[];this.$$postDigestQueue=[];this.$$listeners={};this.$$listenerCount={};this.$$isolateBindings=null;this.$$applyAsyncQueue=[]}function l(b){if(t.$$phase)throw a("inprog",t.$$phase);t.$$phase=
b}function n(a,b,c){do a.$$listenerCount[c]-=b,0===a.$$listenerCount[c]&&delete a.$$listenerCount[c];while(a=a.$parent)}function p(){}function q(){for(var a=t.$$applyAsyncQueue;a.length;)try{a.shift()()}catch(b){f(b)}d=null}function m(){null===d&&(d=h.defer(function(){t.$apply(q)}))}k.prototype={constructor:k,$new:function(a){a?(a=new k,a.$root=this.$root,a.$$asyncQueue=this.$$asyncQueue,a.$$postDigestQueue=this.$$postDigestQueue):(this.$$ChildScope||(this.$$ChildScope=function(){this.$$watchers=
this.$$nextSibling=this.$$childHead=this.$$childTail=null;this.$$listeners={};this.$$listenerCount={};this.$id=++cb;this.$$ChildScope=null},this.$$ChildScope.prototype=this),a=new this.$$ChildScope);a["this"]=a;a.$parent=this;a.$$prevSibling=this.$$childTail;this.$$childHead?this.$$childTail=this.$$childTail.$$nextSibling=a:this.$$childHead=this.$$childTail=a;return a},$watch:function(a,b,d){var e=g(a);if(e.$$watchDelegate)return e.$$watchDelegate(this,b,d,e);var f=this.$$watchers,h={fn:b,last:p,
get:e,exp:a,eq:!!d};c=null;F(b)||(h.fn=z);f||(f=this.$$watchers=[]);f.unshift(h);return function(){Ra(f,h);c=null}},$watchGroup:function(a,b){function c(){h=!1;k?(k=!1,b(e,e,g)):b(e,d,g)}var d=Array(a.length),e=Array(a.length),f=[],g=this,h=!1,k=!0;if(!a.length){var l=!0;g.$evalAsync(function(){l&&b(e,e,g)});return function(){l=!1}}if(1===a.length)return this.$watch(a[0],function(a,c,f){e[0]=a;d[0]=c;b(e,a===c?e:d,f)});r(a,function(a,b){var k=g.$watch(a,function(a,f){e[b]=a;d[b]=f;h||(h=!0,g.$evalAsync(c))});
f.push(k)});return function(){for(;f.length;)f.shift()()}},$watchCollection:function(a,b){function c(a){e=a;var b,d,g,h;if(S(e))if(Na(e))for(f!==m&&(f=m,r=f.length=0,l++),a=e.length,r!==a&&(l++,f.length=r=a),b=0;b<a;b++)h=f[b],g=e[b],d=h!==h&&g!==g,d||h===g||(l++,f[b]=g);else{f!==p&&(f=p={},r=0,l++);a=0;for(b in e)e.hasOwnProperty(b)&&(a++,g=e[b],h=f[b],b in f?(d=h!==h&&g!==g,d||h===g||(l++,f[b]=g)):(r++,f[b]=g,l++));if(r>a)for(b in l++,f)e.hasOwnProperty(b)||(r--,delete f[b])}else f!==e&&(f=e,l++);
return l}c.$stateful=!0;var d=this,e,f,h,k=1<b.length,l=0,n=g(a,c),m=[],p={},q=!0,r=0;return this.$watch(n,function(){q?(q=!1,b(e,e,d)):b(e,h,d);if(k)if(S(e))if(Na(e)){h=Array(e.length);for(var a=0;a<e.length;a++)h[a]=e[a]}else for(a in h={},e)Ab.call(e,a)&&(h[a]=e[a]);else h=e})},$digest:function(){var e,g,k,n,m=this.$$asyncQueue,r=this.$$postDigestQueue,B,s,K=b,L,P=[],J,N,U;l("$digest");h.$$checkUrlChange();this===t&&null!==d&&(h.defer.cancel(d),q());c=null;do{s=!1;for(L=this;m.length;){try{U=m.shift(),
U.scope.$eval(U.expression)}catch(v){f(v)}c=null}a:do{if(n=L.$$watchers)for(B=n.length;B--;)try{if(e=n[B])if((g=e.get(L))!==(k=e.last)&&!(e.eq?ra(g,k):"number"===typeof g&&"number"===typeof k&&isNaN(g)&&isNaN(k)))s=!0,c=e,e.last=e.eq?Ga(g,null):g,e.fn(g,k===p?g:k,L),5>K&&(J=4-K,P[J]||(P[J]=[]),N=F(e.exp)?"fn: "+(e.exp.name||e.exp.toString()):e.exp,N+="; newVal: "+sa(g)+"; oldVal: "+sa(k),P[J].push(N));else if(e===c){s=!1;break a}}catch(x){f(x)}if(!(n=L.$$childHead||L!==this&&L.$$nextSibling))for(;L!==
this&&!(n=L.$$nextSibling);)L=L.$parent}while(L=n);if((s||m.length)&&!K--)throw t.$$phase=null,a("infdig",b,sa(P));}while(s||m.length);for(t.$$phase=null;r.length;)try{r.shift()()}catch(D){f(D)}},$destroy:function(){if(!this.$$destroyed){var a=this.$parent;this.$broadcast("$destroy");this.$$destroyed=!0;if(this!==t){for(var b in this.$$listenerCount)n(this,this.$$listenerCount[b],b);a.$$childHead==this&&(a.$$childHead=this.$$nextSibling);a.$$childTail==this&&(a.$$childTail=this.$$prevSibling);this.$$prevSibling&&
(this.$$prevSibling.$$nextSibling=this.$$nextSibling);this.$$nextSibling&&(this.$$nextSibling.$$prevSibling=this.$$prevSibling);this.$parent=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=this.$root=null;this.$$listeners={};this.$$watchers=this.$$asyncQueue=this.$$postDigestQueue=[];this.$destroy=this.$digest=this.$apply=z;this.$on=this.$watch=this.$watchGroup=function(){return z}}}},$eval:function(a,b){return g(a)(this,b)},$evalAsync:function(a){t.$$phase||t.$$asyncQueue.length||
h.defer(function(){t.$$asyncQueue.length&&t.$digest()});this.$$asyncQueue.push({scope:this,expression:a})},$$postDigest:function(a){this.$$postDigestQueue.push(a)},$apply:function(a){try{return l("$apply"),this.$eval(a)}catch(b){f(b)}finally{t.$$phase=null;try{t.$digest()}catch(c){throw f(c),c;}}},$applyAsync:function(a){function b(){c.$eval(a)}var c=this;a&&t.$$applyAsyncQueue.push(b);m()},$on:function(a,b){var c=this.$$listeners[a];c||(this.$$listeners[a]=c=[]);c.push(b);var d=this;do d.$$listenerCount[a]||
(d.$$listenerCount[a]=0),d.$$listenerCount[a]++;while(d=d.$parent);var e=this;return function(){c[c.indexOf(b)]=null;n(e,1,a)}},$emit:function(a,b){var c=[],d,e=this,g=!1,h={name:a,targetScope:e,stopPropagation:function(){g=!0},preventDefault:function(){h.defaultPrevented=!0},defaultPrevented:!1},k=fb([h],arguments,1),l,n;do{d=e.$$listeners[a]||c;h.currentScope=e;l=0;for(n=d.length;l<n;l++)if(d[l])try{d[l].apply(null,k)}catch(m){f(m)}else d.splice(l,1),l--,n--;if(g)return h.currentScope=null,h;e=
e.$parent}while(e);h.currentScope=null;return h},$broadcast:function(a,b){var c=this,d=this,e={name:a,targetScope:this,preventDefault:function(){e.defaultPrevented=!0},defaultPrevented:!1};if(!this.$$listenerCount[a])return e;for(var g=fb([e],arguments,1),h,k;c=d;){e.currentScope=c;d=c.$$listeners[a]||[];h=0;for(k=d.length;h<k;h++)if(d[h])try{d[h].apply(null,g)}catch(l){f(l)}else d.splice(h,1),h--,k--;if(!(d=c.$$listenerCount[a]&&c.$$childHead||c!==this&&c.$$nextSibling))for(;c!==this&&!(d=c.$$nextSibling);)c=
c.$parent}e.currentScope=null;return e}};var t=new k;return t}]}function Gd(){var b=/^\s*(https?|ftp|mailto|tel|file):/,a=/^\s*((https?|ftp|file|blob):|data:image\/)/;this.aHrefSanitizationWhitelist=function(a){return x(a)?(b=a,this):b};this.imgSrcSanitizationWhitelist=function(b){return x(b)?(a=b,this):a};this.$get=function(){return function(c,d){var e=d?a:b,f;if(!aa||8<=aa)if(f=za(c).href,""!==f&&!f.match(e))return"unsafe:"+f;return c}}}function gf(b){if("self"===b)return b;if(C(b)){if(-1<b.indexOf("***"))throw Ba("iwcard",
b);b=b.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,"\\$1").replace(/\x08/g,"\\x08").replace("\\*\\*",".*").replace("\\*","[^:/.?&;]*");return new RegExp("^"+b+"$")}if(db(b))return new RegExp("^"+b.source+"$");throw Ba("imatcher");}function Vc(b){var a=[];x(b)&&r(b,function(b){a.push(gf(b))});return a}function He(){this.SCE_CONTEXTS=la;var b=["self"],a=[];this.resourceUrlWhitelist=function(a){arguments.length&&(b=Vc(a));return b};this.resourceUrlBlacklist=function(b){arguments.length&&(a=Vc(b));return a};
this.$get=["$injector",function(c){function d(a,b){return"self"===a?Lc(b):!!a.exec(b.href)}function e(a){var b=function(a){this.$$unwrapTrustedValue=function(){return a}};a&&(b.prototype=new a);b.prototype.valueOf=function(){return this.$$unwrapTrustedValue()};b.prototype.toString=function(){return this.$$unwrapTrustedValue().toString()};return b}var f=function(a){throw Ba("unsafe");};c.has("$sanitize")&&(f=c.get("$sanitize"));var g=e(),h={};h[la.HTML]=e(g);h[la.CSS]=e(g);h[la.URL]=e(g);h[la.JS]=
e(g);h[la.RESOURCE_URL]=e(h[la.URL]);return{trustAs:function(a,b){var c=h.hasOwnProperty(a)?h[a]:null;if(!c)throw Ba("icontext",a,b);if(null===b||b===s||""===b)return b;if("string"!==typeof b)throw Ba("itype",a);return new c(b)},getTrusted:function(c,e){if(null===e||e===s||""===e)return e;var g=h.hasOwnProperty(c)?h[c]:null;if(g&&e instanceof g)return e.$$unwrapTrustedValue();if(c===la.RESOURCE_URL){var g=za(e.toString()),p,q,m=!1;p=0;for(q=b.length;p<q;p++)if(d(b[p],g)){m=!0;break}if(m)for(p=0,q=
a.length;p<q;p++)if(d(a[p],g)){m=!1;break}if(m)return e;throw Ba("insecurl",e.toString());}if(c===la.HTML)return f(e);throw Ba("unsafe");},valueOf:function(a){return a instanceof g?a.$$unwrapTrustedValue():a}}}]}function Ge(){var b=!0;this.enabled=function(a){arguments.length&&(b=!!a);return b};this.$get=["$parse","$sniffer","$sceDelegate",function(a,c,d){if(b&&c.msie&&8>c.msieDocumentMode)throw Ba("iequirks");var e=qa(la);e.isEnabled=function(){return b};e.trustAs=d.trustAs;e.getTrusted=d.getTrusted;
e.valueOf=d.valueOf;b||(e.trustAs=e.getTrusted=function(a,b){return b},e.valueOf=Pa);e.parseAs=function(b,c){var d=a(c);return d.literal&&d.constant?d:a(c,function(a){return e.getTrusted(b,a)})};var f=e.parseAs,g=e.getTrusted,h=e.trustAs;r(la,function(a,b){var c=R(b);e[Wa("parse_as_"+c)]=function(b){return f(a,b)};e[Wa("get_trusted_"+c)]=function(b){return g(a,b)};e[Wa("trust_as_"+c)]=function(b){return h(a,b)}});return e}]}function Ie(){this.$get=["$window","$document",function(b,a){var c={},d=Z((/android (\d+)/.exec(R((b.navigator||
{}).userAgent))||[])[1]),e=/Boxee/i.test((b.navigator||{}).userAgent),f=a[0]||{},g=f.documentMode,h,k=/^(Moz|webkit|O|ms)(?=[A-Z])/,l=f.body&&f.body.style,n=!1,p=!1;if(l){for(var q in l)if(n=k.exec(q)){h=n[0];h=h.substr(0,1).toUpperCase()+h.substr(1);break}h||(h="WebkitOpacity"in l&&"webkit");n=!!("transition"in l||h+"Transition"in l);p=!!("animation"in l||h+"Animation"in l);!d||n&&p||(n=C(f.body.style.webkitTransition),p=C(f.body.style.webkitAnimation))}return{history:!(!b.history||!b.history.pushState||
4>d||e),hashchange:"onhashchange"in b&&(!g||7<g),hasEvent:function(a){if("input"==a&&9==aa)return!1;if(w(c[a])){var b=f.createElement("div");c[a]="on"+a in b}return c[a]},csp:Ua(),vendorPrefix:h,transitions:n,animations:p,android:d,msie:aa,msieDocumentMode:g}}]}function Ke(){this.$get=["$templateCache","$http","$q",function(b,a,c){function d(e,f){function g(){h.totalPendingRequests--;if(!f)throw ja("tpload",e);return c.reject()}var h=d;h.totalPendingRequests++;return a.get(e,{cache:b}).then(function(a){a=
a.data;if(!a||0===a.length)return g();h.totalPendingRequests--;b.put(e,a);return a},g)}d.totalPendingRequests=0;return d}]}function Le(){this.$get=["$rootScope","$browser","$location",function(b,a,c){return{findBindings:function(a,b,c){a=a.getElementsByClassName("ng-binding");var g=[];r(a,function(a){var d=Da.element(a).data("$binding");d&&r(d,function(d){c?(new RegExp("(^|\\s)"+b+"(\\s|\\||$)")).test(d)&&g.push(a):-1!=d.indexOf(b)&&g.push(a)})});return g},findModels:function(a,b,c){for(var g=["ng-",
"data-ng-","ng\\:"],h=0;h<g.length;++h){var k=a.querySelectorAll("["+g[h]+"model"+(c?"=":"*=")+'"'+b+'"]');if(k.length)return k}},getLocation:function(){return c.url()},setLocation:function(a){a!==c.url()&&(c.url(a),b.$digest())},whenStable:function(b){a.notifyWhenNoOutstandingRequests(b)}}}]}function Me(){this.$get=["$rootScope","$browser","$q","$$q","$exceptionHandler",function(b,a,c,d,e){function f(f,k,l){var n=x(l)&&!l,p=(n?d:c).defer(),q=p.promise;k=a.defer(function(){try{p.resolve(f())}catch(a){p.reject(a),
e(a)}finally{delete g[q.$$timeoutId]}n||b.$apply()},k);q.$$timeoutId=k;g[k]=p;return q}var g={};f.cancel=function(b){return b&&b.$$timeoutId in g?(g[b.$$timeoutId].reject("canceled"),delete g[b.$$timeoutId],a.defer.cancel(b.$$timeoutId)):!1};return f}]}function za(b,a){var c=b;aa&&(ba.setAttribute("href",c),c=ba.href);ba.setAttribute("href",c);return{href:ba.href,protocol:ba.protocol?ba.protocol.replace(/:$/,""):"",host:ba.host,search:ba.search?ba.search.replace(/^\?/,""):"",hash:ba.hash?ba.hash.replace(/^#/,
""):"",hostname:ba.hostname,port:ba.port,pathname:"/"===ba.pathname.charAt(0)?ba.pathname:"/"+ba.pathname}}function Lc(b){b=C(b)?za(b):b;return b.protocol===Wc.protocol&&b.host===Wc.host}function Ne(){this.$get=ga(O)}function sc(b){function a(c,d){if(S(c)){var e={};r(c,function(b,c){e[c]=a(c,b)});return e}return b.factory(c+"Filter",d)}this.register=a;this.$get=["$injector",function(a){return function(b){return a.get(b+"Filter")}}];a("currency",Xc);a("date",Yc);a("filter",hf);a("json",jf);a("limitTo",
kf);a("lowercase",lf);a("number",Zc);a("orderBy",$c);a("uppercase",mf)}function hf(){return function(b,a,c){if(!M(b))return b;var d=typeof c,e=[];e.check=function(a,b){for(var c=0;c<e.length;c++)if(!e[c](a,b))return!1;return!0};"function"!==d&&(c="boolean"===d&&c?function(a,b){return Da.equals(a,b)}:function(a,b){if(a&&b&&"object"===typeof a&&"object"===typeof b){for(var d in a)if("$"!==d.charAt(0)&&Ab.call(a,d)&&c(a[d],b[d]))return!0;return!1}b=(""+b).toLowerCase();return-1<(""+a).toLowerCase().indexOf(b)});
var f=function(a,b){if("string"==typeof b&&"!"===b.charAt(0))return!f(a,b.substr(1));switch(typeof a){case "boolean":case "number":case "string":return c(a,b);case "object":switch(typeof b){case "object":return c(a,b);default:for(var d in a)if("$"!==d.charAt(0)&&f(a[d],b))return!0}return!1;case "array":for(d=0;d<a.length;d++)if(f(a[d],b))return!0;return!1;default:return!1}};switch(typeof a){case "boolean":case "number":case "string":a={$:a};case "object":for(var g in a)(function(b){"undefined"!==
typeof a[b]&&e.push(function(c){return f("$"==b?c:c&&c[b],a[b])})})(g);break;case "function":e.push(a);break;default:return b}d=[];for(g=0;g<b.length;g++){var h=b[g];e.check(h,g)&&d.push(h)}return d}}function Xc(b){var a=b.NUMBER_FORMATS;return function(b,d){w(d)&&(d=a.CURRENCY_SYM);return null==b?b:ad(b,a.PATTERNS[1],a.GROUP_SEP,a.DECIMAL_SEP,2).replace(/\u00A4/g,d)}}function Zc(b){var a=b.NUMBER_FORMATS;return function(b,d){return null==b?b:ad(b,a.PATTERNS[0],a.GROUP_SEP,a.DECIMAL_SEP,d)}}function ad(b,
a,c,d,e){if(!isFinite(b)||S(b))return"";var f=0>b;b=Math.abs(b);var g=b+"",h="",k=[],l=!1;if(-1!==g.indexOf("e")){var n=g.match(/([\d\.]+)e(-?)(\d+)/);n&&"-"==n[2]&&n[3]>e+1?(g="0",b=0):(h=g,l=!0)}if(l)0<e&&-1<b&&1>b&&(h=b.toFixed(e));else{g=(g.split(bd)[1]||"").length;w(e)&&(e=Math.min(Math.max(a.minFrac,g),a.maxFrac));b=+(Math.round(+(b.toString()+"e"+e)).toString()+"e"+-e);0===b&&(f=!1);b=(""+b).split(bd);g=b[0];b=b[1]||"";var n=0,p=a.lgSize,q=a.gSize;if(g.length>=p+q)for(n=g.length-p,l=0;l<n;l++)0===
(n-l)%q&&0!==l&&(h+=c),h+=g.charAt(l);for(l=n;l<g.length;l++)0===(g.length-l)%p&&0!==l&&(h+=c),h+=g.charAt(l);for(;b.length<e;)b+="0";e&&"0"!==e&&(h+=d+b.substr(0,e))}k.push(f?a.negPre:a.posPre);k.push(h);k.push(f?a.negSuf:a.posSuf);return k.join("")}function wb(b,a,c){var d="";0>b&&(d="-",b=-b);for(b=""+b;b.length<a;)b="0"+b;c&&(b=b.substr(b.length-a));return d+b}function da(b,a,c,d){c=c||0;return function(e){e=e["get"+b]();if(0<c||e>-c)e+=c;0===e&&-12==c&&(e=12);return wb(e,a,d)}}function xb(b,
a){return function(c,d){var e=c["get"+b](),f=kb(a?"SHORT"+b:b);return d[f][e]}}function cd(b){var a=(new Date(b,0,1)).getDay();return new Date(b,0,(4>=a?5:12)-a)}function dd(b){return function(a){var c=cd(a.getFullYear());a=+new Date(a.getFullYear(),a.getMonth(),a.getDate()+(4-a.getDay()))-+c;a=1+Math.round(a/6048E5);return wb(a,b)}}function Yc(b){function a(a){var b;if(b=a.match(c)){a=new Date(0);var f=0,g=0,h=b[8]?a.setUTCFullYear:a.setFullYear,k=b[8]?a.setUTCHours:a.setHours;b[9]&&(f=Z(b[9]+b[10]),
g=Z(b[9]+b[11]));h.call(a,Z(b[1]),Z(b[2])-1,Z(b[3]));f=Z(b[4]||0)-f;g=Z(b[5]||0)-g;h=Z(b[6]||0);b=Math.round(1E3*parseFloat("0."+(b[7]||0)));k.call(a,f,g,h,b)}return a}var c=/^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;return function(c,e,f){var g="",h=[],k,l;e=e||"mediumDate";e=b.DATETIME_FORMATS[e]||e;C(c)&&(c=nf.test(c)?Z(c):a(c));ea(c)&&(c=new Date(c));if(!ha(c))return c;for(;e;)(l=of.exec(e))?(h=fb(h,l,1),e=h.pop()):(h.push(e),e=null);
f&&"UTC"===f&&(c=new Date(c.getTime()),c.setMinutes(c.getMinutes()+c.getTimezoneOffset()));r(h,function(a){k=pf[a];g+=k?k(c,b.DATETIME_FORMATS):a.replace(/(^'|'$)/g,"").replace(/''/g,"'")});return g}}function jf(){return function(b){return sa(b,!0)}}function kf(){return function(b,a){ea(b)&&(b=b.toString());if(!M(b)&&!C(b))return b;a=Infinity===Math.abs(Number(a))?Number(a):Z(a);if(C(b))return a?0<=a?b.slice(0,a):b.slice(a,b.length):"";var c=[],d,e;a>b.length?a=b.length:a<-b.length&&(a=-b.length);
0<a?(d=0,e=a):(d=b.length+a,e=b.length);for(;d<e;d++)c.push(b[d]);return c}}function $c(b){return function(a,c,d){function e(a,b){return b?function(b,c){return a(c,b)}:a}function f(a,b){var c=typeof a,d=typeof b;return c==d?(ha(a)&&ha(b)&&(a=a.valueOf(),b=b.valueOf()),"string"==c&&(a=a.toLowerCase(),b=b.toLowerCase()),a===b?0:a<b?-1:1):c<d?-1:1}if(!Na(a)||!c)return a;c=M(c)?c:[c];c=c.map(function(a){var c=!1,d=a||Pa;if(C(a)){if("+"==a.charAt(0)||"-"==a.charAt(0))c="-"==a.charAt(0),a=a.substring(1);
d=b(a);if(d.constant){var g=d();return e(function(a,b){return f(a[g],b[g])},c)}}return e(function(a,b){return f(d(a),d(b))},c)});for(var g=[],h=0;h<a.length;h++)g.push(a[h]);return g.sort(e(function(a,b){for(var d=0;d<c.length;d++){var e=c[d](a,b);if(0!==e)return e}return 0},d))}}function Ea(b){F(b)&&(b={link:b});b.restrict=b.restrict||"AC";return ga(b)}function ed(b,a,c,d,e){var f=this,g=[],h=f.$$parentForm=b.parent().controller("form")||$a;f.$error={};f.$$success={};f.$pending=s;f.$name=e(a.name||
a.ngForm||"")(c);f.$dirty=!1;f.$pristine=!0;f.$valid=!0;f.$invalid=!1;f.$submitted=!1;h.$addControl(f);b.addClass(Ma);f.$rollbackViewValue=function(){r(g,function(a){a.$rollbackViewValue()})};f.$commitViewValue=function(){r(g,function(a){a.$commitViewValue()})};f.$addControl=function(a){Ia(a.$name,"input");g.push(a);a.$name&&(f[a.$name]=a)};f.$$renameControl=function(a,b){var c=a.$name;f[c]===a&&delete f[c];f[b]=a;a.$name=b};f.$removeControl=function(a){a.$name&&f[a.$name]===a&&delete f[a.$name];
r(f.$pending,function(b,c){f.$setValidity(c,null,a)});r(f.$error,function(b,c){f.$setValidity(c,null,a)});Ra(g,a)};fd({ctrl:this,$element:b,set:function(a,b,c){var d=a[b];d?-1===d.indexOf(c)&&d.push(c):a[b]=[c]},unset:function(a,b,c){var d=a[b];d&&(Ra(d,c),0===d.length&&delete a[b])},parentForm:h,$animate:d});f.$setDirty=function(){d.removeClass(b,Ma);d.addClass(b,yb);f.$dirty=!0;f.$pristine=!1;h.$setDirty()};f.$setPristine=function(){d.setClass(b,Ma,yb+" ng-submitted");f.$dirty=!1;f.$pristine=!0;
f.$submitted=!1;r(g,function(a){a.$setPristine()})};f.$setUntouched=function(){r(g,function(a){a.$setUntouched()})};f.$setSubmitted=function(){d.addClass(b,"ng-submitted");f.$submitted=!0;h.$setSubmitted()}}function Wb(b){b.$formatters.push(function(a){return b.$isEmpty(a)?a:a.toString()})}function ab(b,a,c,d,e,f){a.prop("validity");var g=a[0].placeholder,h={},k=R(a[0].type);if(!e.android){var l=!1;a.on("compositionstart",function(a){l=!0});a.on("compositionend",function(){l=!1;n()})}var n=function(b){if(!l){var e=
a.val(),f=b&&b.type;aa&&"input"===(b||h).type&&a[0].placeholder!==g?g=a[0].placeholder:("password"===k||c.ngTrim&&"false"===c.ngTrim||(e=ca(e)),(d.$viewValue!==e||""===e&&d.$$hasNativeValidators)&&d.$setViewValue(e,f))}};if(e.hasEvent("input"))a.on("input",n);else{var p,q=function(a){p||(p=f.defer(function(){n(a);p=null}))};a.on("keydown",function(a){var b=a.keyCode;91===b||15<b&&19>b||37<=b&&40>=b||q(a)});if(e.hasEvent("paste"))a.on("paste cut",q)}a.on("change",n);d.$render=function(){a.val(d.$isEmpty(d.$modelValue)?
"":d.$viewValue)}}function zb(b,a){return function(c,d){var e,f;if(ha(c))return c;if(C(c)){'"'==c.charAt(0)&&'"'==c.charAt(c.length-1)&&(c=c.substring(1,c.length-1));if(qf.test(c))return new Date(c);b.lastIndex=0;if(e=b.exec(c))return e.shift(),f=d?{yyyy:d.getFullYear(),MM:d.getMonth()+1,dd:d.getDate(),HH:d.getHours(),mm:d.getMinutes(),ss:d.getSeconds(),sss:d.getMilliseconds()/1E3}:{yyyy:1970,MM:1,dd:1,HH:0,mm:0,ss:0,sss:0},r(e,function(b,c){c<a.length&&(f[a[c]]=+b)}),new Date(f.yyyy,f.MM-1,f.dd,
f.HH,f.mm,f.ss||0,1E3*f.sss||0)}return NaN}}function bb(b,a,c,d){return function(e,f,g,h,k,l,n){function p(a){return x(a)?ha(a)?a:c(a):s}gd(e,f,g,h);ab(e,f,g,h,k,l);var q=h&&h.$options&&h.$options.timezone;h.$$parserName=b;h.$parsers.push(function(b){if(h.$isEmpty(b))return null;if(a.test(b)){var d=h.$modelValue;if(d&&"UTC"===q)var e=6E4*d.getTimezoneOffset(),d=new Date(d.getTime()+e);b=c(b,d);"UTC"===q&&b.setMinutes(b.getMinutes()-b.getTimezoneOffset());return b}return s});h.$formatters.push(function(a){return ha(a)?
n("date")(a,d,q):""});if(x(g.min)||g.ngMin){var m;h.$validators.min=function(a){return h.$isEmpty(a)||w(m)||c(a)>=m};g.$observe("min",function(a){m=p(a);h.$validate()})}if(x(g.max)||g.ngMax){var r;h.$validators.max=function(a){return h.$isEmpty(a)||w(r)||c(a)<=r};g.$observe("max",function(a){r=p(a);h.$validate()})}}}function gd(b,a,c,d){(d.$$hasNativeValidators=S(a[0].validity))&&d.$parsers.push(function(b){var c=a.prop("validity")||{};return c.badInput&&!c.typeMismatch?s:b})}function hd(b,a,c,d,
e){if(x(d)){b=b(d);if(!b.constant)throw Q("ngModel")("constexpr",c,d);return b(a)}return e}function fd(b){function a(a,b){b&&!f[a]?(l.addClass(e,a),f[a]=!0):!b&&f[a]&&(l.removeClass(e,a),f[a]=!1)}function c(b,c){b=b?"-"+Db(b,"-"):"";a(rf+b,!0===c);a(sf+b,!1===c)}var d=b.ctrl,e=b.$element,f={},g=b.set,h=b.unset,k=b.parentForm,l=b.$animate;d.$setValidity=function(b,e,f){e===s?(d.$pending||(d.$pending={}),g(d.$pending,b,f)):(d.$pending&&h(d.$pending,b,f),id(d.$pending)&&(d.$pending=s));eb(e)?e?(h(d.$error,
b,f),g(d.$$success,b,f)):(g(d.$error,b,f),h(d.$$success,b,f)):(h(d.$error,b,f),h(d.$$success,b,f));d.$pending?(a(jd,!0),d.$valid=d.$invalid=s,c("",null)):(a(jd,!1),d.$valid=id(d.$error),d.$invalid=!d.$valid,c("",d.$valid));e=d.$pending&&d.$pending[b]?s:d.$error[b]?!1:d.$$success[b]?!0:null;c(b,e);k.$setValidity(b,e,d)};c("",!0)}function id(b){if(b)for(var a in b)return!1;return!0}function Xb(b,a){b="ngClass"+b;return["$animate",function(c){function d(a,b){var c=[],d=0;a:for(;d<a.length;d++){for(var e=
a[d],n=0;n<b.length;n++)if(e==b[n])continue a;c.push(e)}return c}function e(a){if(!M(a)){if(C(a))return a.split(" ");if(S(a)){var b=[];r(a,function(a,c){a&&(b=b.concat(c.split(" ")))});return b}}return a}return{restrict:"AC",link:function(f,g,h){function k(a,b){var c=g.data("$classCounts")||{},d=[];r(a,function(a){if(0<b||c[a])c[a]=(c[a]||0)+b,c[a]===+(0<b)&&d.push(a)});g.data("$classCounts",c);return d.join(" ")}function l(b){if(!0===a||f.$index%2===a){var l=e(b||[]);if(!n){var m=k(l,1);h.$addClass(m)}else if(!ra(b,
n)){var r=e(n),m=d(l,r),l=d(r,l),m=k(m,1),l=k(l,-1);m&&m.length&&c.addClass(g,m);l&&l.length&&c.removeClass(g,l)}}n=qa(b)}var n;f.$watch(h[b],l,!0);h.$observe("class",function(a){l(f.$eval(h[b]))});"ngClass"!==b&&f.$watch("$index",function(c,d){var g=c&1;if(g!==(d&1)){var l=e(f.$eval(h[b]));g===a?(g=k(l,1),h.$addClass(g)):(g=k(l,-1),h.$removeClass(g))}})}}}]}var tf=/^\/(.+)\/([a-z]*)$/,R=function(b){return C(b)?b.toLowerCase():b},Ab=Object.prototype.hasOwnProperty,kb=function(b){return C(b)?b.toUpperCase():
b},aa,D,ma,Ta=[].slice,uf=[].push,Fa=Object.prototype.toString,Sa=Q("ng"),Da=O.angular||(O.angular={}),Va,cb=0;aa=Z((/msie (\d+)/.exec(R(navigator.userAgent))||[])[1]);isNaN(aa)&&(aa=Z((/trident\/.*; rv:(\d+)/.exec(R(navigator.userAgent))||[])[1]));z.$inject=[];Pa.$inject=[];var M=Array.isArray,ca=function(b){return C(b)?b.trim():b},Ua=function(){if(x(Ua.isActive_))return Ua.isActive_;var b=!(!Y.querySelector("[ng-csp]")&&!Y.querySelector("[data-ng-csp]"));if(!b)try{new Function("")}catch(a){b=!0}return Ua.isActive_=
b},hb=["ng-","data-ng-","ng:","x-ng-"],Ad=/[A-Z]/g,jc=!1,Eb,Ed={full:"1.3.0-rc.3",major:1,minor:3,dot:0,codeName:"aggressive-pacifism"};T.expando="ng339";var qb=T.cache={},Ve=1;T._data=function(b){return this.cache[b[this.expando]]||{}};var Qe=/([\:\-\_]+(.))/g,Re=/^moz([A-Z])/,vf={mouseleave:"mouseout",mouseenter:"mouseover"},Hb=Q("jqLite"),Ue=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,Gb=/<|&#?\w+;/,Se=/<([\w:]+)/,Te=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,ia={option:[1,'<select multiple="multiple">',
"</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ia.optgroup=ia.option;ia.tbody=ia.tfoot=ia.colgroup=ia.caption=ia.thead;ia.th=ia.td;var Ha=T.prototype={ready:function(b){function a(){c||(c=!0,b())}var c=!1;"complete"===Y.readyState?setTimeout(a):(this.on("DOMContentLoaded",a),T(O).on("load",a),this.on("DOMContentLoaded",a))},toString:function(){var b=
[];r(this,function(a){b.push(""+a)});return"["+b.join(", ")+"]"},eq:function(b){return 0<=b?D(this[b]):D(this[this.length+b])},length:0,push:uf,sort:[].sort,splice:[].splice},sb={};r("multiple selected checked disabled readOnly required open".split(" "),function(b){sb[R(b)]=b});var Bc={};r("input select option textarea button form details".split(" "),function(b){Bc[b]=!0});var Cc={ngMinlength:"minlength",ngMaxlength:"maxlength",ngMin:"min",ngMax:"max",ngPattern:"pattern"};r({data:Jb,removeData:ob},
function(b,a){T[a]=b});r({data:Jb,inheritedData:rb,scope:function(b){return D.data(b,"$scope")||rb(b.parentNode||b,["$isolateScope","$scope"])},isolateScope:function(b){return D.data(b,"$isolateScope")||D.data(b,"$isolateScopeNoTemplate")},controller:xc,injector:function(b){return rb(b,"$injector")},removeAttr:function(b,a){b.removeAttribute(a)},hasClass:lb,css:function(b,a,c){a=Wa(a);if(x(c))b.style[a]=c;else return b.style[a]},attr:function(b,a,c){var d=R(a);if(sb[d])if(x(c))c?(b[a]=!0,b.setAttribute(a,
d)):(b[a]=!1,b.removeAttribute(d));else return b[a]||(b.attributes.getNamedItem(a)||z).specified?d:s;else if(x(c))b.setAttribute(a,c);else if(b.getAttribute)return b=b.getAttribute(a,2),null===b?s:b},prop:function(b,a,c){if(x(c))b[a]=c;else return b[a]},text:function(){function b(a,b){if(w(b)){var d=a.nodeType;return 1===d||3===d?a.textContent:""}a.textContent=b}b.$dv="";return b}(),val:function(b,a){if(w(a)){if(b.multiple&&"select"===pa(b)){var c=[];r(b.options,function(a){a.selected&&c.push(a.value||
a.text)});return 0===c.length?null:c}return b.value}b.value=a},html:function(b,a){if(w(a))return b.innerHTML;nb(b,!0);b.innerHTML=a},empty:yc},function(b,a){T.prototype[a]=function(a,d){var e,f,g=this.length;if(b!==yc&&(2==b.length&&b!==lb&&b!==xc?a:d)===s){if(S(a)){for(e=0;e<g;e++)if(b===Jb)b(this[e],a);else for(f in a)b(this[e],f,a[f]);return this}e=b.$dv;g=e===s?Math.min(g,1):g;for(f=0;f<g;f++){var h=b(this[f],a,d);e=e?e+h:h}return e}for(e=0;e<g;e++)b(this[e],a,d);return this}});r({removeData:ob,
on:function a(c,d,e,f){if(x(f))throw Hb("onargs");if(tc(c)){var g=pb(c,!0);f=g.events;var h=g.handle;h||(h=g.handle=Xe(c,f));for(var g=0<=d.indexOf(" ")?d.split(" "):[d],k=g.length;k--;){d=g[k];var l=f[d];l||(f[d]=[],"mouseenter"===d||"mouseleave"===d?a(c,vf[d],function(a){var c=a.relatedTarget;c&&(c===this||this.contains(c))||h(a,d)}):"$destroy"!==d&&c.addEventListener(d,h,!1),l=f[d]);l.push(e)}}},off:wc,one:function(a,c,d){a=D(a);a.on(c,function f(){a.off(c,d);a.off(c,f)});a.on(c,d)},replaceWith:function(a,
c){var d,e=a.parentNode;nb(a);r(new T(c),function(c){d?e.insertBefore(c,d.nextSibling):e.replaceChild(c,a);d=c})},children:function(a){var c=[];r(a.childNodes,function(a){1===a.nodeType&&c.push(a)});return c},contents:function(a){return a.contentDocument||a.childNodes||[]},append:function(a,c){var d=a.nodeType;if(1===d||11===d){c=new T(c);for(var d=0,e=c.length;d<e;d++)a.appendChild(c[d])}},prepend:function(a,c){if(1===a.nodeType){var d=a.firstChild;r(new T(c),function(c){a.insertBefore(c,d)})}},
wrap:function(a,c){c=D(c).eq(0).clone()[0];var d=a.parentNode;d&&d.replaceChild(c,a);c.appendChild(a)},remove:zc,detach:function(a){zc(a,!0)},after:function(a,c){var d=a,e=a.parentNode;c=new T(c);for(var f=0,g=c.length;f<g;f++){var h=c[f];e.insertBefore(h,d.nextSibling);d=h}},addClass:Lb,removeClass:Kb,toggleClass:function(a,c,d){c&&r(c.split(" "),function(c){var f=d;w(f)&&(f=!lb(a,c));(f?Lb:Kb)(a,c)})},parent:function(a){return(a=a.parentNode)&&11!==a.nodeType?a:null},next:function(a){return a.nextElementSibling},
find:function(a,c){return a.getElementsByTagName?a.getElementsByTagName(c):[]},clone:Ib,triggerHandler:function(a,c,d){var e,f,g=c.type||c,h=pb(a);if(h=(h=h&&h.events)&&h[g])e={preventDefault:function(){this.defaultPrevented=!0},isDefaultPrevented:function(){return!0===this.defaultPrevented},stopImmediatePropagation:function(){this.immediatePropagationStopped=!0},isImmediatePropagationStopped:function(){return!0===this.immediatePropagationStopped},stopPropagation:z,type:g,target:a},c.type&&(e=v(e,
c)),c=qa(h),f=d?[e].concat(d):[e],r(c,function(c){e.isImmediatePropagationStopped()||c.apply(a,f)})}},function(a,c){T.prototype[c]=function(c,e,f){for(var g,h=0,k=this.length;h<k;h++)w(g)?(g=a(this[h],c,e,f),x(g)&&(g=D(g))):vc(g,a(this[h],c,e,f));return x(g)?g:this};T.prototype.bind=T.prototype.on;T.prototype.unbind=T.prototype.off});Xa.prototype={put:function(a,c){this[Ja(a,this.nextUid)]=c},get:function(a){return this[Ja(a,this.nextUid)]},remove:function(a){var c=this[a=Ja(a,this.nextUid)];delete this[a];
return c}};var Ec=/^function\s*[^\(]*\(\s*([^\)]*)\)/m,Ze=/,/,$e=/^\s*(_?)(\S+?)\1\s*$/,Dc=/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg,Ka=Q("$injector");Cb.$$annotate=Mb;var wf=Q("$animate"),qe=["$provide",function(a){this.$$selectors={};this.register=function(c,d){var e=c+"-animation";if(c&&"."!=c.charAt(0))throw wf("notcsel",c);this.$$selectors[c.substr(1)]=e;a.factory(e,d)};this.classNameFilter=function(a){1===arguments.length&&(this.$$classNameFilter=a instanceof RegExp?a:null);return this.$$classNameFilter};
this.$get=["$$q","$$asyncCallback",function(a,d){function e(){f||(f=a.defer(),d(function(){f.resolve();f=null}));return f.promise}var f;return{enter:function(a,c,d){d?d.after(a):c.prepend(a);return e()},leave:function(a){a.remove();return e()},move:function(a,c,d){return this.enter(a,c,d)},addClass:function(a,c){c=C(c)?c:M(c)?c.join(" "):"";r(a,function(a){Lb(a,c)});return e()},removeClass:function(a,c){c=C(c)?c:M(c)?c.join(" "):"";r(a,function(a){Kb(a,c)});return e()},setClass:function(a,c,d){this.addClass(a,
c);this.removeClass(a,d);return e()},enabled:z,cancel:z}}]}],ja=Q("$compile");lc.$inject=["$provide","$$sanitizeUriProvider"];var cf=/^(x[\:\-_]|data[\:\-_])/i,Qb=Q("$interpolate"),xf=/^([^\?#]*)(\?([^#]*))?(#(.*))?$/,ff={http:80,https:443,ftp:21},ub=Q("$location");Pc.prototype=Tb.prototype=Oc.prototype={$$html5:!1,$$replace:!1,absUrl:vb("$$absUrl"),url:function(a){if(w(a))return this.$$url;a=xf.exec(a);a[1]&&this.path(decodeURIComponent(a[1]));(a[2]||a[1])&&this.search(a[3]||"");this.hash(a[5]||
"");return this},protocol:vb("$$protocol"),host:vb("$$host"),port:vb("$$port"),path:Qc("$$path",function(a){a=a?a.toString():"";return"/"==a.charAt(0)?a:"/"+a}),search:function(a,c){switch(arguments.length){case 0:return this.$$search;case 1:if(C(a)||ea(a))a=a.toString(),this.$$search=hc(a);else if(S(a))r(a,function(c,e){null==c&&delete a[e]}),this.$$search=a;else throw ub("isrcharg");break;default:w(c)||null===c?delete this.$$search[a]:this.$$search[a]=c}this.$$compose();return this},hash:Qc("$$hash",
function(a){return a?a.toString():""}),replace:function(){this.$$replace=!0;return this}};var oa=Q("$parse"),yf=Function.prototype.call,zf=Function.prototype.apply,Af=Function.prototype.bind,kd=Object.create(null);r({"null":function(){return null},"true":function(){return!0},"false":function(){return!1},undefined:function(){}},function(a,c){a.constant=a.literal=a.sharedGetter=!0;kd[c]=a});var Yb=v(Object.create(null),{"+":function(a,c,d,e){d=d(a,c);e=e(a,c);return x(d)?x(e)?d+e:d:x(e)?e:s},"-":function(a,
c,d,e){d=d(a,c);e=e(a,c);return(x(d)?d:0)-(x(e)?e:0)},"*":function(a,c,d,e){return d(a,c)*e(a,c)},"/":function(a,c,d,e){return d(a,c)/e(a,c)},"%":function(a,c,d,e){return d(a,c)%e(a,c)},"^":function(a,c,d,e){return d(a,c)^e(a,c)},"===":function(a,c,d,e){return d(a,c)===e(a,c)},"!==":function(a,c,d,e){return d(a,c)!==e(a,c)},"==":function(a,c,d,e){return d(a,c)==e(a,c)},"!=":function(a,c,d,e){return d(a,c)!=e(a,c)},"<":function(a,c,d,e){return d(a,c)<e(a,c)},">":function(a,c,d,e){return d(a,c)>e(a,
c)},"<=":function(a,c,d,e){return d(a,c)<=e(a,c)},">=":function(a,c,d,e){return d(a,c)>=e(a,c)},"&&":function(a,c,d,e){return d(a,c)&&e(a,c)},"||":function(a,c,d,e){return d(a,c)||e(a,c)},"&":function(a,c,d,e){return d(a,c)&e(a,c)},"!":function(a,c,d){return!d(a,c)},"=":!0,"|":!0}),Bf={n:"\n",f:"\f",r:"\r",t:"\t",v:"\v","'":"'",'"':'"'},Vb=function(a){this.options=a};Vb.prototype={constructor:Vb,lex:function(a){this.text=a;this.index=0;this.ch=s;for(this.tokens=[];this.index<this.text.length;)if(this.ch=
this.text.charAt(this.index),this.is("\"'"))this.readString(this.ch);else if(this.isNumber(this.ch)||this.is(".")&&this.isNumber(this.peek()))this.readNumber();else if(this.isIdent(this.ch))this.readIdent();else if(this.is("(){}[].,;:?"))this.tokens.push({index:this.index,text:this.ch}),this.index++;else if(this.isWhitespace(this.ch))this.index++;else{a=this.ch+this.peek();var c=a+this.peek(2),d=Yb[this.ch],e=Yb[a],f=Yb[c];f?(this.tokens.push({index:this.index,text:c,fn:f}),this.index+=3):e?(this.tokens.push({index:this.index,
text:a,fn:e}),this.index+=2):d?(this.tokens.push({index:this.index,text:this.ch,fn:d}),this.index+=1):this.throwError("Unexpected next character ",this.index,this.index+1)}return this.tokens},is:function(a){return-1!==a.indexOf(this.ch)},peek:function(a){a=a||1;return this.index+a<this.text.length?this.text.charAt(this.index+a):!1},isNumber:function(a){return"0"<=a&&"9">=a},isWhitespace:function(a){return" "===a||"\r"===a||"\t"===a||"\n"===a||"\v"===a||"\u00a0"===a},isIdent:function(a){return"a"<=
a&&"z">=a||"A"<=a&&"Z">=a||"_"===a||"$"===a},isExpOperator:function(a){return"-"===a||"+"===a||this.isNumber(a)},throwError:function(a,c,d){d=d||this.index;c=x(c)?"s "+c+"-"+this.index+" ["+this.text.substring(c,d)+"]":" "+d;throw oa("lexerr",a,c,this.text);},readNumber:function(){for(var a="",c=this.index;this.index<this.text.length;){var d=R(this.text.charAt(this.index));if("."==d||this.isNumber(d))a+=d;else{var e=this.peek();if("e"==d&&this.isExpOperator(e))a+=d;else if(this.isExpOperator(d)&&
e&&this.isNumber(e)&&"e"==a.charAt(a.length-1))a+=d;else if(!this.isExpOperator(d)||e&&this.isNumber(e)||"e"!=a.charAt(a.length-1))break;else this.throwError("Invalid exponent")}this.index++}a*=1;this.tokens.push({index:c,text:a,constant:!0,fn:function(){return a}})},readIdent:function(){for(var a=this.text,c="",d=this.index,e,f,g,h;this.index<this.text.length;){h=this.text.charAt(this.index);if("."===h||this.isIdent(h)||this.isNumber(h))"."===h&&(e=this.index),c+=h;else break;this.index++}e&&"."===
c[c.length-1]&&(this.index--,c=c.slice(0,-1),e=c.lastIndexOf("."),-1===e&&(e=s));if(e)for(f=this.index;f<this.text.length;){h=this.text.charAt(f);if("("===h){g=c.substr(e-d+1);c=c.substr(0,e-d);this.index=f;break}if(this.isWhitespace(h))f++;else break}this.tokens.push({index:d,text:c,fn:kd[c]||Sc(c,this.options,a)});g&&(this.tokens.push({index:e,text:"."}),this.tokens.push({index:e+1,text:g}))},readString:function(a){var c=this.index;this.index++;for(var d="",e=a,f=!1;this.index<this.text.length;){var g=
this.text.charAt(this.index),e=e+g;if(f)"u"===g?(f=this.text.substring(this.index+1,this.index+5),f.match(/[\da-f]{4}/i)||this.throwError("Invalid unicode escape [\\u"+f+"]"),this.index+=4,d+=String.fromCharCode(parseInt(f,16))):d+=Bf[g]||g,f=!1;else if("\\"===g)f=!0;else{if(g===a){this.index++;this.tokens.push({index:c,text:e,string:d,constant:!0,fn:function(){return d}});return}d+=g}this.index++}this.throwError("Unterminated quote",c)}};var Za=function(a,c,d){this.lexer=a;this.$filter=c;this.options=
d};Za.ZERO=v(function(){return 0},{sharedGetter:!0,constant:!0});Za.prototype={constructor:Za,parse:function(a){this.text=a;this.tokens=this.lexer.lex(a);a=this.statements();0!==this.tokens.length&&this.throwError("is an unexpected token",this.tokens[0]);a.literal=!!a.literal;a.constant=!!a.constant;return a},primary:function(){var a;if(this.expect("("))a=this.filterChain(),this.consume(")");else if(this.expect("["))a=this.arrayDeclaration();else if(this.expect("{"))a=this.object();else{var c=this.expect();
(a=c.fn)||this.throwError("not a primary expression",c);c.constant&&(a.constant=!0,a.literal=!0)}for(var d;c=this.expect("(","[",".");)"("===c.text?(a=this.functionCall(a,d),d=null):"["===c.text?(d=a,a=this.objectIndex(a)):"."===c.text?(d=a,a=this.fieldAccess(a)):this.throwError("IMPOSSIBLE");return a},throwError:function(a,c){throw oa("syntax",c.text,a,c.index+1,this.text,this.text.substring(c.index));},peekToken:function(){if(0===this.tokens.length)throw oa("ueoe",this.text);return this.tokens[0]},
peek:function(a,c,d,e){if(0<this.tokens.length){var f=this.tokens[0],g=f.text;if(g===a||g===c||g===d||g===e||!(a||c||d||e))return f}return!1},expect:function(a,c,d,e){return(a=this.peek(a,c,d,e))?(this.tokens.shift(),a):!1},consume:function(a){this.expect(a)||this.throwError("is unexpected, expecting ["+a+"]",this.peek())},unaryFn:function(a,c){return v(function(d,e){return a(d,e,c)},{constant:c.constant,inputs:[c]})},binaryFn:function(a,c,d,e){return v(function(e,g){return c(e,g,a,d)},{constant:a.constant&&
d.constant,inputs:!e&&[a,d]})},statements:function(){for(var a=[];;)if(0<this.tokens.length&&!this.peek("}",")",";","]")&&a.push(this.filterChain()),!this.expect(";"))return 1===a.length?a[0]:function(c,d){for(var e,f=0,g=a.length;f<g;f++)e=a[f](c,d);return e}},filterChain:function(){for(var a=this.expression();this.expect("|");)a=this.filter(a);return a},filter:function(a){var c=this.expect(),d=this.$filter(c.text),e,f;if(this.peek(":"))for(e=[],f=[];this.expect(":");)e.push(this.expression());c=
[a].concat(e||[]);return v(function(c,h){var k=a(c,h);if(f){f[0]=k;for(k=e.length;k--;)f[k+1]=e[k](c,h);return d.apply(s,f)}return d(k)},{constant:!d.$stateful&&c.every(Ub),inputs:!d.$stateful&&c})},expression:function(){return this.assignment()},assignment:function(){var a=this.ternary(),c,d;return(d=this.expect("="))?(a.assign||this.throwError("implies assignment but ["+this.text.substring(0,d.index)+"] can not be assigned to",d),c=this.ternary(),v(function(d,f){return a.assign(d,c(d,f),f)},{inputs:[a,
c]})):a},ternary:function(){var a=this.logicalOR(),c,d;if(d=this.expect("?")){c=this.assignment();if(d=this.expect(":")){var e=this.assignment();return v(function(d,g){return a(d,g)?c(d,g):e(d,g)},{constant:a.constant&&c.constant&&e.constant})}this.throwError("expected :",d)}return a},logicalOR:function(){for(var a=this.logicalAND(),c;c=this.expect("||");)a=this.binaryFn(a,c.fn,this.logicalAND(),!0);return a},logicalAND:function(){var a=this.equality(),c;if(c=this.expect("&&"))a=this.binaryFn(a,c.fn,
this.logicalAND(),!0);return a},equality:function(){var a=this.relational(),c;if(c=this.expect("==","!=","===","!=="))a=this.binaryFn(a,c.fn,this.equality());return a},relational:function(){var a=this.additive(),c;if(c=this.expect("<",">","<=",">="))a=this.binaryFn(a,c.fn,this.relational());return a},additive:function(){for(var a=this.multiplicative(),c;c=this.expect("+","-");)a=this.binaryFn(a,c.fn,this.multiplicative());return a},multiplicative:function(){for(var a=this.unary(),c;c=this.expect("*",
"/","%");)a=this.binaryFn(a,c.fn,this.unary());return a},unary:function(){var a;return this.expect("+")?this.primary():(a=this.expect("-"))?this.binaryFn(Za.ZERO,a.fn,this.unary()):(a=this.expect("!"))?this.unaryFn(a.fn,this.unary()):this.primary()},fieldAccess:function(a){var c=this.text,d=this.expect().text,e=Sc(d,this.options,c);return v(function(c,d,h){return e(h||a(c,d))},{assign:function(e,g,h){(h=a(e,h))||a.assign(e,h={});return La(h,d,g,c)}})},objectIndex:function(a){var c=this.text,d=this.expression();
this.consume("]");return v(function(e,f){var g=a(e,f),h=d(e,f);na(h,c);return g?Aa(g[h],c):s},{assign:function(e,f,g){var h=na(d(e,g),c);(g=Aa(a(e,g),c))||a.assign(e,g={});return g[h]=f}})},functionCall:function(a,c){var d=[];if(")"!==this.peekToken().text){do d.push(this.expression());while(this.expect(","))}this.consume(")");var e=this.text,f=d.length?[]:null;return function(g,h){var k=c?c(g,h):g,l=a(g,h,k)||z;if(f)for(var n=d.length;n--;)f[n]=Aa(d[n](g,h),e);Aa(k,e);if(l){if(l.constructor===l)throw oa("isecfn",
e);if(l===yf||l===zf||l===Af)throw oa("isecff",e);}k=l.apply?l.apply(k,f):l(f[0],f[1],f[2],f[3],f[4]);return Aa(k,e)}},arrayDeclaration:function(){var a=[];if("]"!==this.peekToken().text){do{if(this.peek("]"))break;var c=this.expression();a.push(c)}while(this.expect(","))}this.consume("]");return v(function(c,e){for(var f=[],g=0,h=a.length;g<h;g++)f.push(a[g](c,e));return f},{literal:!0,constant:a.every(Ub),inputs:a})},object:function(){var a=[],c=[];if("}"!==this.peekToken().text){do{if(this.peek("}"))break;
var d=this.expect();a.push(d.string||d.text);this.consume(":");d=this.expression();c.push(d)}while(this.expect(","))}this.consume("}");return v(function(d,f){for(var g={},h=0,k=c.length;h<k;h++)g[a[h]]=c[h](d,f);return g},{literal:!0,constant:c.every(Ub),inputs:c})}};var Tc=Object.create(null),Ba=Q("$sce"),la={HTML:"html",CSS:"css",URL:"url",RESOURCE_URL:"resourceUrl",JS:"js"},ja=Q("$compile"),ba=Y.createElement("a"),Wc=za(O.location.href,!0);sc.$inject=["$provide"];Xc.$inject=["$locale"];Zc.$inject=
["$locale"];var bd=".",pf={yyyy:da("FullYear",4),yy:da("FullYear",2,0,!0),y:da("FullYear",1),MMMM:xb("Month"),MMM:xb("Month",!0),MM:da("Month",2,1),M:da("Month",1,1),dd:da("Date",2),d:da("Date",1),HH:da("Hours",2),H:da("Hours",1),hh:da("Hours",2,-12),h:da("Hours",1,-12),mm:da("Minutes",2),m:da("Minutes",1),ss:da("Seconds",2),s:da("Seconds",1),sss:da("Milliseconds",3),EEEE:xb("Day"),EEE:xb("Day",!0),a:function(a,c){return 12>a.getHours()?c.AMPMS[0]:c.AMPMS[1]},Z:function(a){a=-1*a.getTimezoneOffset();
return a=(0<=a?"+":"")+(wb(Math[0<a?"floor":"ceil"](a/60),2)+wb(Math.abs(a%60),2))},ww:dd(2),w:dd(1)},of=/((?:[^yMdHhmsaZEw']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z|w+))(.*)/,nf=/^\-?\d+$/;Yc.$inject=["$locale"];var lf=ga(R),mf=ga(kb);$c.$inject=["$parse"];var Hd=ga({restrict:"E",compile:function(a,c){8>=aa&&(c.href||c.name||c.$set("href",""),a.append(Y.createComment("IE fix")));if(!c.href&&!c.xlinkHref&&!c.name)return function(a,c){var f="[object SVGAnimatedString]"===Fa.call(c.prop("href"))?
"xlink:href":"href";c.on("click",function(a){c.attr(f)||a.preventDefault()})}}}),mb={};r(sb,function(a,c){if("multiple"!=a){var d=va("ng-"+c);mb[d]=function(){return{restrict:"A",priority:100,link:function(a,f,g){a.$watch(g[d],function(a){g.$set(c,!!a)})}}}}});r(Cc,function(a,c){mb[c]=function(){return{priority:100,link:function(a,e,f){if("ngPattern"===c&&"/"==f.ngPattern.charAt(0)&&(e=f.ngPattern.match(tf))){f.$set("ngPattern",new RegExp(e[1],e[2]));return}a.$watch(f[c],function(a){f.$set(c,a)})}}}});
r(["src","srcset","href"],function(a){var c=va("ng-"+a);mb[c]=function(){return{priority:99,link:function(d,e,f){var g=a,h=a;"href"===a&&"[object SVGAnimatedString]"===Fa.call(e.prop("href"))&&(h="xlinkHref",f.$attr[h]="xlink:href",g=null);f.$observe(c,function(c){c?(f.$set(h,c),aa&&g&&e.prop(g,f[h])):"href"===a&&f.$set(h,null)})}}}});var $a={$addControl:z,$$renameControl:function(a,c){a.$name=c},$removeControl:z,$setValidity:z,$$setPending:z,$setDirty:z,$setPristine:z,$setSubmitted:z,$$clearControlValidity:z};
ed.$inject=["$element","$attrs","$scope","$animate","$interpolate"];var ld=function(a){return["$timeout",function(c){return{name:"form",restrict:a?"EAC":"E",controller:ed,compile:function(){return{pre:function(a,e,f,g){if(!f.action){var h=function(c){a.$apply(function(){g.$commitViewValue();g.$setSubmitted()});c.preventDefault?c.preventDefault():c.returnValue=!1};e[0].addEventListener("submit",h,!1);e.on("$destroy",function(){c(function(){e[0].removeEventListener("submit",h,!1)},0,!1)})}var k=g.$$parentForm,
l=g.$name;l&&(La(a,l,g,l),f.$observe(f.name?"name":"ngForm",function(c){l!==c&&(La(a,l,s,l),l=c,La(a,l,g,l),k.$$renameControl(g,l))}));if(k!==$a)e.on("$destroy",function(){k.$removeControl(g);l&&La(a,l,s,l);v(g,$a)})}}}}}]},Id=ld(),Vd=ld(!0),qf=/\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)/,Cf=/^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/,Df=/^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i,
Ef=/^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/,md=/^(\d{4})-(\d{2})-(\d{2})$/,nd=/^(\d{4})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,Zb=/^(\d{4})-W(\d\d)$/,od=/^(\d{4})-(\d\d)$/,pd=/^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,Ff=/(\s+|^)default(\s+|$)/,$b=new Q("ngModel"),qd={text:function(a,c,d,e,f,g){ab(a,c,d,e,f,g);Wb(e)},date:bb("date",md,zb(md,["yyyy","MM","dd"]),"yyyy-MM-dd"),"datetime-local":bb("datetimelocal",nd,zb(nd,"yyyy MM dd HH mm ss sss".split(" ")),"yyyy-MM-ddTHH:mm:ss.sss"),time:bb("time",
pd,zb(pd,["HH","mm","ss","sss"]),"HH:mm:ss.sss"),week:bb("week",Zb,function(a,c){if(ha(a))return a;if(C(a)){Zb.lastIndex=0;var d=Zb.exec(a);if(d){var e=+d[1],f=+d[2],g=d=0,h=0,k=0,l=cd(e),f=7*(f-1);c&&(d=c.getHours(),g=c.getMinutes(),h=c.getSeconds(),k=c.getMilliseconds());return new Date(e,0,l.getDate()+f,d,g,h,k)}}return NaN},"yyyy-Www"),month:bb("month",od,zb(od,["yyyy","MM"]),"yyyy-MM"),number:function(a,c,d,e,f,g){gd(a,c,d,e);ab(a,c,d,e,f,g);e.$$parserName="number";e.$parsers.push(function(a){return e.$isEmpty(a)?
null:Ef.test(a)?parseFloat(a):s});e.$formatters.push(function(a){if(!e.$isEmpty(a)){if(!ea(a))throw $b("numfmt",a);a=a.toString()}return a});if(d.min||d.ngMin){var h;e.$validators.min=function(a){return e.$isEmpty(a)||w(h)||a>=h};d.$observe("min",function(a){x(a)&&!ea(a)&&(a=parseFloat(a,10));h=ea(a)&&!isNaN(a)?a:s;e.$validate()})}if(d.max||d.ngMax){var k;e.$validators.max=function(a){return e.$isEmpty(a)||w(k)||a<=k};d.$observe("max",function(a){x(a)&&!ea(a)&&(a=parseFloat(a,10));k=ea(a)&&!isNaN(a)?
a:s;e.$validate()})}},url:function(a,c,d,e,f,g){ab(a,c,d,e,f,g);Wb(e);e.$$parserName="url";e.$validators.url=function(a){return e.$isEmpty(a)||Cf.test(a)}},email:function(a,c,d,e,f,g){ab(a,c,d,e,f,g);Wb(e);e.$$parserName="email";e.$validators.email=function(a){return e.$isEmpty(a)||Df.test(a)}},radio:function(a,c,d,e){w(d.name)&&c.attr("name",++cb);c.on("click",function(a){c[0].checked&&e.$setViewValue(d.value,a&&a.type)});e.$render=function(){c[0].checked=d.value==e.$viewValue};d.$observe("value",
e.$render)},checkbox:function(a,c,d,e,f,g,h,k){var l=hd(k,a,"ngTrueValue",d.ngTrueValue,!0),n=hd(k,a,"ngFalseValue",d.ngFalseValue,!1);c.on("click",function(a){e.$setViewValue(c[0].checked,a&&a.type)});e.$render=function(){c[0].checked=e.$viewValue};e.$isEmpty=function(a){return a!==l};e.$formatters.push(function(a){return ra(a,l)});e.$parsers.push(function(a){return a?l:n})},hidden:z,button:z,submit:z,reset:z,file:z},mc=["$browser","$sniffer","$filter","$parse",function(a,c,d,e){return{restrict:"E",
require:["?ngModel"],link:function(f,g,h,k){k[0]&&(qd[R(h.type)]||qd.text)(f,g,h,k[0],c,a,d,e)}}}],rf="ng-valid",sf="ng-invalid",Ma="ng-pristine",yb="ng-dirty",jd="ng-pending",Gf=["$scope","$exceptionHandler","$attrs","$element","$parse","$animate","$timeout","$rootScope","$q","$interpolate",function(a,c,d,e,f,g,h,k,l,n){this.$modelValue=this.$viewValue=Number.NaN;this.$validators={};this.$asyncValidators={};this.$parsers=[];this.$formatters=[];this.$viewChangeListeners=[];this.$untouched=!0;this.$touched=
!1;this.$pristine=!0;this.$dirty=!1;this.$valid=!0;this.$invalid=!1;this.$error={};this.$$success={};this.$pending=s;this.$name=n(d.name||"",!1)(a);var p=f(d.ngModel),q=null,m=this,t=function(){var c=p(a);m.$options&&m.$options.getterSetter&&F(c)&&(c=c());return c},u=function(c){var d;m.$options&&m.$options.getterSetter&&F(d=p(a))?d(m.$modelValue):p.assign(a,m.$modelValue)};this.$$setOptions=function(a){m.$options=a;if(!(p.assign||a&&a.getterSetter))throw $b("nonassign",d.ngModel,ta(e));};this.$render=
z;this.$isEmpty=function(a){return w(a)||""===a||null===a||a!==a};var H=e.inheritedData("$formController")||$a,A=0;e.addClass(Ma).addClass("ng-untouched");fd({ctrl:this,$element:e,set:function(a,c){a[c]=!0},unset:function(a,c){delete a[c]},parentForm:H,$animate:g});this.$setPristine=function(){m.$dirty=!1;m.$pristine=!0;g.removeClass(e,yb);g.addClass(e,Ma)};this.$setUntouched=function(){m.$touched=!1;m.$untouched=!0;g.setClass(e,"ng-untouched","ng-touched")};this.$setTouched=function(){m.$touched=
!0;m.$untouched=!1;g.setClass(e,"ng-touched","ng-untouched")};this.$rollbackViewValue=function(){h.cancel(q);m.$viewValue=m.$$lastCommittedViewValue;m.$render()};this.$validate=function(){ea(m.$modelValue)&&isNaN(m.$modelValue)||this.$$parseAndValidate()};this.$$runValidators=function(a,c,d,e){function f(){var a=!0;r(m.$validators,function(e,f){var g=e(c,d);a=a&&g;h(f,g)});return a?!0:(r(m.$asyncValidators,function(a,c){h(c,null)}),!1)}function g(){var a=[],e=!0;r(m.$asyncValidators,function(f,g){var k=
f(c,d);if(!k||!F(k.then))throw $b("$asyncValidators",k);h(g,s);a.push(k.then(function(){h(g,!0)},function(a){e=!1;h(g,!1)}))});a.length?l.all(a).then(function(){k(e)},z):k(!0)}function h(a,c){p===A&&m.$setValidity(a,c)}function k(a){p===A&&e(a)}A++;var p=A;(function(a){var c=m.$$parserName||"parse";if(a===s)h(c,null);else if(h(c,a),!a)return r(m.$validators,function(a,c){h(c,null)}),r(m.$asyncValidators,function(a,c){h(c,null)}),!1;return!0})(a)?f()?g():k(!1):k(!1)};this.$commitViewValue=function(){var a=
m.$viewValue;h.cancel(q);if(m.$$lastCommittedViewValue!==a||""===a&&m.$$hasNativeValidators)m.$$lastCommittedViewValue=a,m.$pristine&&(m.$dirty=!0,m.$pristine=!1,g.removeClass(e,Ma),g.addClass(e,yb),H.$setDirty()),this.$$parseAndValidate()};this.$$parseAndValidate=function(){for(var a=!0,c=m.$$lastCommittedViewValue,d=c,e=0;e<m.$parsers.length;e++)if(d=m.$parsers[e](d),w(d)){a=!1;break}ea(m.$modelValue)&&isNaN(m.$modelValue)&&(m.$modelValue=t());var f=m.$modelValue,g=m.$options&&m.$options.allowInvalid;
g&&(m.$modelValue=d,m.$modelValue!==f&&m.$$writeModelToScope());m.$$runValidators(a,d,c,function(a){g||(m.$modelValue=a?d:s,m.$modelValue!==f&&m.$$writeModelToScope())})};this.$$writeModelToScope=function(){u(m.$modelValue);r(m.$viewChangeListeners,function(a){try{a()}catch(d){c(d)}})};this.$setViewValue=function(a,c){m.$viewValue=a;m.$options&&!m.$options.updateOnDefault||m.$$debounceViewValueCommit(c)};this.$$debounceViewValueCommit=function(c){var d=0,e=m.$options;e&&x(e.debounce)&&(e=e.debounce,
ea(e)?d=e:ea(e[c])?d=e[c]:ea(e["default"])&&(d=e["default"]));h.cancel(q);d?q=h(function(){m.$commitViewValue()},d):k.$$phase?m.$commitViewValue():a.$apply(function(){m.$commitViewValue()})};a.$watch(function(){var a=t();if(a!==m.$modelValue){m.$modelValue=a;for(var c=m.$formatters,d=c.length,e=a;d--;)e=c[d](e);m.$viewValue!==e&&(m.$viewValue=m.$$lastCommittedViewValue=e,m.$render(),m.$$runValidators(s,a,e,z))}return a})}],je=function(){return{restrict:"A",require:["ngModel","^?form","^?ngModelOptions"],
controller:Gf,link:{pre:function(a,c,d,e){var f=e[0],g=e[1]||$a;f.$$setOptions(e[2]&&e[2].$options);g.$addControl(f);d.$observe("name",function(a){f.$name!==a&&g.$$renameControl(f,a)});a.$on("$destroy",function(){g.$removeControl(f)})},post:function(a,c,d,e){var f=e[0];if(f.$options&&f.$options.updateOn)c.on(f.$options.updateOn,function(a){f.$$debounceViewValueCommit(a&&a.type)});c.on("blur",function(c){f.$touched||a.$apply(function(){f.$setTouched()})})}}}},le=ga({restrict:"A",require:"ngModel",
link:function(a,c,d,e){e.$viewChangeListeners.push(function(){a.$eval(d.ngChange)})}}),oc=function(){return{restrict:"A",require:"?ngModel",link:function(a,c,d,e){e&&(d.required=!0,e.$validators.required=function(a){return!d.required||!e.$isEmpty(a)},d.$observe("required",function(){e.$validate()}))}}},nc=function(){return{restrict:"A",require:"?ngModel",link:function(a,c,d,e){if(e){var f,g=d.ngPattern||d.pattern;d.$observe("pattern",function(a){C(a)&&0<a.length&&(a=new RegExp(a));if(a&&!a.test)throw Q("ngPattern")("noregexp",
g,a,ta(c));f=a||s;e.$validate()});e.$validators.pattern=function(a){return e.$isEmpty(a)||w(f)||f.test(a)}}}}},qc=function(){return{restrict:"A",require:"?ngModel",link:function(a,c,d,e){if(e){var f=0;d.$observe("maxlength",function(a){f=Z(a)||0;e.$validate()});e.$validators.maxlength=function(a,c){return e.$isEmpty(a)||c.length<=f}}}}},pc=function(){return{restrict:"A",require:"?ngModel",link:function(a,c,d,e){if(e){var f=0;d.$observe("minlength",function(a){f=Z(a)||0;e.$validate()});e.$validators.minlength=
function(a,c){return e.$isEmpty(a)||c.length>=f}}}}},ke=function(){return{restrict:"A",priority:100,require:"ngModel",link:function(a,c,d,e){var f=c.attr(d.$attr.ngList)||", ",g="false"!==d.ngTrim,h=g?ca(f):f;e.$parsers.push(function(a){if(!w(a)){var c=[];a&&r(a.split(h),function(a){a&&c.push(g?ca(a):a)});return c}});e.$formatters.push(function(a){return M(a)?a.join(f):s});e.$isEmpty=function(a){return!a||!a.length}}}},Hf=/^(true|false|\d+)$/,me=function(){return{restrict:"A",priority:100,compile:function(a,
c){return Hf.test(c.ngValue)?function(a,c,f){f.$set("value",a.$eval(f.ngValue))}:function(a,c,f){a.$watch(f.ngValue,function(a){f.$set("value",a)})}}}},ne=function(){return{restrict:"A",controller:["$scope","$attrs",function(a,c){var d=this;this.$options=a.$eval(c.ngModelOptions);this.$options.updateOn!==s?(this.$options.updateOnDefault=!1,this.$options.updateOn=ca(this.$options.updateOn.replace(Ff,function(){d.$options.updateOnDefault=!0;return" "}))):this.$options.updateOnDefault=!0}]}},Nd=["$compile",
function(a){return{restrict:"AC",compile:function(c){a.$$addBindingClass(c);return function(c,e,f){a.$$addBindingInfo(e,f.ngBind);c.$watch(f.ngBind,function(a){e.text(a==s?"":a)})}}}}],Pd=["$interpolate","$compile",function(a,c){return{compile:function(d){c.$$addBindingClass(d);return function(d,f,g){d=a(f.attr(g.$attr.ngBindTemplate));c.$$addBindingInfo(f,d.expressions);g.$observe("ngBindTemplate",function(a){f.text(a)})}}}}],Od=["$sce","$parse","$compile",function(a,c,d){return{restrict:"A",compile:function(e,
f){var g=c(f.ngBindHtml),h=c(f.ngBindHtml,function(a){return(a||"").toString()});d.$$addBindingClass(e);return function(c,e,f){d.$$addBindingInfo(e,f.ngBindHtml);c.$watch(h,function(){e.html(a.getTrustedHtml(g(c))||"")})}}}}],Qd=Xb("",!0),Sd=Xb("Odd",0),Rd=Xb("Even",1),Td=Ea({compile:function(a,c){c.$set("ngCloak",s);a.removeClass("ng-cloak")}}),Ud=[function(){return{restrict:"A",scope:!0,controller:"@",priority:500}}],rc={},If={blur:!0,focus:!0};r("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "),
function(a){var c=va("ng-"+a);rc[c]=["$parse","$rootScope",function(d,e){return{restrict:"A",compile:function(f,g){var h=d(g[c]);return function(c,d){d.on(a,function(d){var f=function(){h(c,{$event:d})};If[a]&&e.$$phase?c.$evalAsync(f):c.$apply(f)})}}}}]});var Xd=["$animate",function(a){return{multiElement:!0,transclude:"element",priority:600,terminal:!0,restrict:"A",$$tlb:!0,link:function(c,d,e,f,g){var h,k,l;c.$watch(e.ngIf,function(c){c?k||g(function(c,f){k=f;c[c.length++]=Y.createComment(" end ngIf: "+
e.ngIf+" ");h={clone:c};a.enter(c,d.parent(),d)}):(l&&(l.remove(),l=null),k&&(k.$destroy(),k=null),h&&(l=jb(h.clone),a.leave(l).then(function(){l=null}),h=null))})}}}],Yd=["$templateRequest","$anchorScroll","$animate","$sce",function(a,c,d,e){return{restrict:"ECA",priority:400,terminal:!0,transclude:"element",controller:Da.noop,compile:function(f,g){var h=g.ngInclude||g.src,k=g.onload||"",l=g.autoscroll;return function(f,g,q,m,r){var u=0,s,A,y,E=function(){A&&(A.remove(),A=null);s&&(s.$destroy(),
s=null);y&&(d.leave(y).then(function(){A=null}),A=y,y=null)};f.$watch(e.parseAsResourceUrl(h),function(e){var h=function(){!x(l)||l&&!f.$eval(l)||c()},q=++u;e?(a(e,!0).then(function(a){if(q===u){var c=f.$new();m.template=a;a=r(c,function(a){E();d.enter(a,null,g).then(h)});s=c;y=a;s.$emit("$includeContentLoaded",e);f.$eval(k)}},function(){q===u&&(E(),f.$emit("$includeContentError",e))}),f.$emit("$includeContentRequested",e)):(E(),m.template=null)})}}}}],oe=["$compile",function(a){return{restrict:"ECA",
priority:-400,require:"ngInclude",link:function(c,d,e,f){/SVG/.test(d[0].toString())?(d.empty(),a(uc(f.template,Y).childNodes)(c,function(a){d.append(a)},s,s,d)):(d.html(f.template),a(d.contents())(c))}}}],Zd=Ea({priority:450,compile:function(){return{pre:function(a,c,d){a.$eval(d.ngInit)}}}}),$d=Ea({terminal:!0,priority:1E3}),ae=["$locale","$interpolate",function(a,c){var d=/{}/g;return{restrict:"EA",link:function(e,f,g){var h=g.count,k=g.$attr.when&&f.attr(g.$attr.when),l=g.offset||0,n=e.$eval(k)||
{},p={},q=c.startSymbol(),m=c.endSymbol(),s=/^when(Minus)?(.+)$/;r(g,function(a,c){s.test(c)&&(n[R(c.replace("when","").replace("Minus","-"))]=f.attr(g.$attr[c]))});r(n,function(a,e){p[e]=c(a.replace(d,q+h+"-"+l+m))});e.$watch(function(){var c=parseFloat(e.$eval(h));if(isNaN(c))return"";c in n||(c=a.pluralCat(c-l));return p[c](e)},function(a){f.text(a)})}}}],be=["$parse","$animate",function(a,c){var d=Q("ngRepeat"),e=function(a,c,d,e,l,n,p){a[d]=e;l&&(a[l]=n);a.$index=c;a.$first=0===c;a.$last=c===
p-1;a.$middle=!(a.$first||a.$last);a.$odd=!(a.$even=0===(c&1))};return{restrict:"A",multiElement:!0,transclude:"element",priority:1E3,terminal:!0,$$tlb:!0,compile:function(f,g){var h=g.ngRepeat,k=Y.createComment(" end ngRepeat: "+h+" "),l=h.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);if(!l)throw d("iexp",h);var n=l[1],p=l[2],q=l[3],m=l[4],l=n.match(/^(?:([\$\w]+)|\(([\$\w]+)\s*,\s*([\$\w]+)\))$/);if(!l)throw d("iidexp",n);var t=l[3]||l[1],u=
l[2];if(q&&(!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(q)||/^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent)$/.test(q)))throw d("badident",q);var v,A,y,E,x={$id:Ja};m?v=a(m):(y=function(a,c){return Ja(c)},E=function(a){return a});return function(a,f,g,m,l){v&&(A=function(c,d,e){u&&(x[u]=c);x[t]=d;x.$index=e;return v(a,x)});var n=Object.create(null);a.$watchCollection(p,function(g){var m,p,K=f[0],x,v=Object.create(null),L,z,H,w,G,V,fa;q&&(a[q]=g);if(Na(g))G=g,p=A||y;else{p=A||E;
G=[];for(fa in g)g.hasOwnProperty(fa)&&"$"!=fa.charAt(0)&&G.push(fa);G.sort()}L=G.length;fa=Array(L);for(m=0;m<L;m++)if(z=g===G?m:G[m],H=g[z],w=p(z,H,m),n[w])V=n[w],delete n[w],v[w]=V,fa[m]=V;else{if(v[w])throw r(fa,function(a){a&&a.scope&&(n[a.id]=a)}),d("dupes",h,w,sa(H));fa[m]={id:w,scope:s,clone:s};v[w]=!0}for(x in n){V=n[x];w=jb(V.clone);c.leave(w);if(w[0].parentNode)for(m=0,p=w.length;m<p;m++)w[m].$$NG_REMOVED=!0;V.scope.$destroy()}for(m=0;m<L;m++)if(z=g===G?m:G[m],H=g[z],V=fa[m],V.scope){x=
K;do x=x.nextSibling;while(x&&x.$$NG_REMOVED);V.clone[0]!=x&&c.move(jb(V.clone),null,D(K));K=V.clone[V.clone.length-1];e(V.scope,m,t,H,u,z,L)}else l(function(a,d){V.scope=d;var f=k.cloneNode(!1);a[a.length++]=f;c.enter(a,null,D(K));K=f;V.clone=a;v[V.id]=V;e(V.scope,m,t,H,u,z,L)});n=v})}}}}],ce=["$animate",function(a){return{restrict:"A",multiElement:!0,link:function(c,d,e){c.$watch(e.ngShow,function(c){a[c?"removeClass":"addClass"](d,"ng-hide")})}}}],Wd=["$animate",function(a){return{restrict:"A",
multiElement:!0,link:function(c,d,e){c.$watch(e.ngHide,function(c){a[c?"addClass":"removeClass"](d,"ng-hide")})}}}],de=Ea(function(a,c,d){a.$watch(d.ngStyle,function(a,d){d&&a!==d&&r(d,function(a,d){c.css(d,"")});a&&c.css(a)},!0)}),ee=["$animate",function(a){return{restrict:"EA",require:"ngSwitch",controller:["$scope",function(){this.cases={}}],link:function(c,d,e,f){var g=[],h=[],k=[],l=[],n=function(a,c){return function(){a.splice(c,1)}};c.$watch(e.ngSwitch||e.on,function(c){var d,e;d=0;for(e=k.length;d<
e;++d)a.cancel(k[d]);d=k.length=0;for(e=l.length;d<e;++d){var s=jb(h[d].clone);l[d].$destroy();(k[d]=a.leave(s)).then(n(k,d))}h.length=0;l.length=0;(g=f.cases["!"+c]||f.cases["?"])&&r(g,function(c){c.transclude(function(d,e){l.push(e);var f=c.element;d[d.length++]=Y.createComment(" end ngSwitchWhen: ");h.push({clone:d});a.enter(d,f.parent(),f)})})})}}}],fe=Ea({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function(a,c,d,e,f){e.cases["!"+d.ngSwitchWhen]=e.cases["!"+d.ngSwitchWhen]||
[];e.cases["!"+d.ngSwitchWhen].push({transclude:f,element:c})}}),ge=Ea({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function(a,c,d,e,f){e.cases["?"]=e.cases["?"]||[];e.cases["?"].push({transclude:f,element:c})}}),ie=Ea({restrict:"EAC",link:function(a,c,d,e,f){if(!f)throw Q("ngTransclude")("orphan",ta(c));f(function(a){c.empty();c.append(a)})}}),Jd=["$templateCache",function(a){return{restrict:"E",terminal:!0,compile:function(c,d){"text/ng-template"==d.type&&a.put(d.id,
c[0].text)}}}],Jf=Q("ngOptions"),he=ga({restrict:"A",terminal:!0}),Kd=["$compile","$parse",function(a,c){var d=/^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,e={$setViewValue:z};return{restrict:"E",require:["select","?ngModel"],controller:["$element","$scope","$attrs",function(a,c,d){var k=this,l={},n=e,p;k.databound=d.ngModel;k.init=function(a,
c,d){n=a;p=d};k.addOption=function(c,d){Ia(c,'"option value"');l[c]=!0;n.$viewValue==c&&(a.val(c),p.parent()&&p.remove());d[0].hasAttribute("selected")&&(d[0].selected=!0)};k.removeOption=function(a){this.hasOption(a)&&(delete l[a],n.$viewValue==a&&this.renderUnknownOption(a))};k.renderUnknownOption=function(c){c="? "+Ja(c)+" ?";p.val(c);a.prepend(p);a.val(c);p.prop("selected",!0)};k.hasOption=function(a){return l.hasOwnProperty(a)};c.$on("$destroy",function(){k.renderUnknownOption=z})}],link:function(e,
g,h,k){function l(a,c,d,e){d.$render=function(){var a=d.$viewValue;e.hasOption(a)?(z.parent()&&z.remove(),c.val(a),""===a&&v.prop("selected",!0)):w(a)&&v?c.val(""):e.renderUnknownOption(a)};c.on("change",function(){a.$apply(function(){z.parent()&&z.remove();d.$setViewValue(c.val())})})}function n(a,c,d){var e;d.$render=function(){var a=new Xa(d.$viewValue);r(c.find("option"),function(c){c.selected=x(a.get(c.value))})};a.$watch(function(){ra(e,d.$viewValue)||(e=qa(d.$viewValue),d.$render())});c.on("change",
function(){a.$apply(function(){var a=[];r(c.find("option"),function(c){c.selected&&a.push(c.value)});d.$setViewValue(a)})})}function p(e,f,g){function h(){A||(e.$$postDigest(k),A=!0)}function k(){A=!1;var a={"":[]},c=[""],d,h,l,s,t;l=g.$modelValue;s=z(e)||[];var G=q?ac(s):s,H,B,C;B={};C=!1;if(m)if(h=g.$modelValue,w&&M(h))for(C=new Xa([]),d={},t=0;t<h.length;t++)d[n]=h[t],C.put(w(e,d),h[t]);else C=new Xa(h);t=C;var F,J;for(C=0;H=G.length,C<H;C++){h=C;if(q){h=G[C];if("$"===h.charAt(0))continue;B[q]=
h}B[n]=s[h];d=r(e,B)||"";(h=a[d])||(h=a[d]=[],c.push(d));m?d=x(t.remove(w?w(e,B):v(e,B))):(w?(d={},d[n]=l,d=w(e,d)===w(e,B)):d=l===v(e,B),t=t||d);F=p(e,B);F=x(F)?F:"";h.push({id:w?w(e,B):q?G[C]:C,label:F,selected:d})}m||(u||null===l?a[""].unshift({id:"",label:"",selected:!t}):t||a[""].unshift({id:"?",label:"",selected:!0}));B=0;for(G=c.length;B<G;B++){d=c[B];h=a[d];D.length<=B?(l={element:E.clone().attr("label",d),label:h.label},s=[l],D.push(s),f.append(l.element)):(s=D[B],l=s[0],l.label!=d&&l.element.attr("label",
l.label=d));F=null;C=0;for(H=h.length;C<H;C++)d=h[C],(t=s[C+1])?(F=t.element,t.label!==d.label&&F.text(t.label=d.label),t.id!==d.id&&F.val(t.id=d.id),F[0].selected!==d.selected&&(F.prop("selected",t.selected=d.selected),aa&&F.prop("selected",t.selected))):(""===d.id&&u?J=u:(J=y.clone()).val(d.id).prop("selected",d.selected).attr("selected",d.selected).text(d.label),s.push({element:J,label:d.label,id:d.id,selected:d.selected}),F?F.after(J):l.element.append(J),F=J);for(C++;s.length>C;)s.pop().element.remove()}for(;D.length>
B;)D.pop()[0].element.remove()}var l;if(!(l=t.match(d)))throw Jf("iexp",t,ta(f));var p=c(l[2]||l[1]),n=l[4]||l[6],q=l[5],r=c(l[3]||""),v=c(l[2]?l[1]:n),z=c(l[7]),w=l[8]?c(l[8]):null,D=[[{element:f,label:""}]];u&&(a(u)(e),u.removeClass("ng-scope"),u.remove());f.empty();f.on("change",function(){e.$apply(function(){var a,c=z(e)||[],d={},h,l,p,r,t,x,u;if(m)for(l=[],r=0,x=D.length;r<x;r++)for(a=D[r],p=1,t=a.length;p<t;p++){if((h=a[p].element)[0].selected){h=h.val();q&&(d[q]=h);if(w)for(u=0;u<c.length&&
(d[n]=c[u],w(e,d)!=h);u++);else d[n]=c[h];l.push(v(e,d))}}else if(h=f.val(),"?"==h)l=s;else if(""===h)l=null;else if(w)for(u=0;u<c.length;u++){if(d[n]=c[u],w(e,d)==h){l=v(e,d);break}}else d[n]=c[h],q&&(d[q]=h),l=v(e,d);g.$setViewValue(l);k()})});g.$render=k;e.$watchCollection(z,h);e.$watchCollection(function(){var a={},c=z(e);if(c){for(var d=Array(c.length),f=0,g=c.length;f<g;f++)a[n]=c[f],d[f]=p(e,a);return d}},h);m&&e.$watchCollection(function(){return g.$modelValue},h)}if(k[1]){var q=k[0];k=k[1];
var m=h.multiple,t=h.ngOptions,u=!1,v,A=!1,y=D(Y.createElement("option")),E=D(Y.createElement("optgroup")),z=y.clone();h=0;for(var B=g.children(),C=B.length;h<C;h++)if(""===B[h].value){v=u=B.eq(h);break}q.init(k,u,z);m&&(k.$isEmpty=function(a){return!a||0===a.length});t?p(e,g,k):m?n(e,g,k):l(e,g,k,q)}}}}],Md=["$interpolate",function(a){var c={addOption:z,removeOption:z};return{restrict:"E",priority:100,compile:function(d,e){if(w(e.value)){var f=a(d.text(),!0);f||e.$set("value",d.text())}return function(a,
d,e){var l=d.parent(),n=l.data("$selectController")||l.parent().data("$selectController");n&&n.databound?d.prop("selected",!1):n=c;f?a.$watch(f,function(a,c){e.$set("value",a);c!==a&&n.removeOption(c);n.addOption(a,d)}):n.addOption(e.value,d);d.on("$destroy",function(){n.removeOption(e.value)})}}}}],Ld=ga({restrict:"E",terminal:!1});O.angular.bootstrap?console.log("WARNING: Tried to load angular more than once."):(Bd(),Dd(Da),D(Y).ready(function(){xd(Y,ic)}))})(window,document);
!window.angular.$$csp()&&window.angular.element(document).find("head").prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-animate){display:none !important;}ng\\:form{display:block;}</style>');
//# sourceMappingURL=angular.min.js.map

/**
 * State-based routing for AngularJS
 * @version v0.2.10
 * @link http://angular-ui.github.com/
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */
"undefined"!=typeof module&&"undefined"!=typeof exports&&module.exports===exports&&(module.exports="ui.router"),function(a,b,c){"use strict";function d(a,b){return I(new(I(function(){},{prototype:a})),b)}function e(a){return H(arguments,function(b){b!==a&&H(b,function(b,c){a.hasOwnProperty(c)||(a[c]=b)})}),a}function f(a,b){var c=[];for(var d in a.path){if(a.path[d]!==b.path[d])break;c.push(a.path[d])}return c}function g(a,b){if(Array.prototype.indexOf)return a.indexOf(b,Number(arguments[2])||0);var c=a.length>>>0,d=Number(arguments[2])||0;for(d=0>d?Math.ceil(d):Math.floor(d),0>d&&(d+=c);c>d;d++)if(d in a&&a[d]===b)return d;return-1}function h(a,b,c,d){var e,h=f(c,d),i={},j=[];for(var k in h)if(h[k].params&&h[k].params.length){e=h[k].params;for(var l in e)g(j,e[l])>=0||(j.push(e[l]),i[e[l]]=a[e[l]])}return I({},i,b)}function i(a,b){var c={};return H(a,function(a){var d=b[a];c[a]=null!=d?String(d):null}),c}function j(a,b,c){if(!c){c=[];for(var d in a)c.push(d)}for(var e=0;e<c.length;e++){var f=c[e];if(a[f]!=b[f])return!1}return!0}function k(a,b){var c={};return H(a,function(a){c[a]=b[a]}),c}function l(a,b){var d=1,f=2,g={},h=[],i=g,j=I(a.when(g),{$$promises:g,$$values:g});this.study=function(g){function k(a,c){if(o[c]!==f){if(n.push(c),o[c]===d)throw n.splice(0,n.indexOf(c)),new Error("Cyclic dependency: "+n.join(" -> "));if(o[c]=d,E(a))m.push(c,[function(){return b.get(a)}],h);else{var e=b.annotate(a);H(e,function(a){a!==c&&g.hasOwnProperty(a)&&k(g[a],a)}),m.push(c,a,e)}n.pop(),o[c]=f}}function l(a){return F(a)&&a.then&&a.$$promises}if(!F(g))throw new Error("'invocables' must be an object");var m=[],n=[],o={};return H(g,k),g=n=o=null,function(d,f,g){function h(){--s||(t||e(r,f.$$values),p.$$values=r,p.$$promises=!0,o.resolve(r))}function k(a){p.$$failure=a,o.reject(a)}function n(c,e,f){function i(a){l.reject(a),k(a)}function j(){if(!C(p.$$failure))try{l.resolve(b.invoke(e,g,r)),l.promise.then(function(a){r[c]=a,h()},i)}catch(a){i(a)}}var l=a.defer(),m=0;H(f,function(a){q.hasOwnProperty(a)&&!d.hasOwnProperty(a)&&(m++,q[a].then(function(b){r[a]=b,--m||j()},i))}),m||j(),q[c]=l.promise}if(l(d)&&g===c&&(g=f,f=d,d=null),d){if(!F(d))throw new Error("'locals' must be an object")}else d=i;if(f){if(!l(f))throw new Error("'parent' must be a promise returned by $resolve.resolve()")}else f=j;var o=a.defer(),p=o.promise,q=p.$$promises={},r=I({},d),s=1+m.length/3,t=!1;if(C(f.$$failure))return k(f.$$failure),p;f.$$values?(t=e(r,f.$$values),h()):(I(q,f.$$promises),f.then(h,k));for(var u=0,v=m.length;v>u;u+=3)d.hasOwnProperty(m[u])?h():n(m[u],m[u+1],m[u+2]);return p}},this.resolve=function(a,b,c,d){return this.study(a)(b,c,d)}}function m(a,b,c){this.fromConfig=function(a,b,c){return C(a.template)?this.fromString(a.template,b):C(a.templateUrl)?this.fromUrl(a.templateUrl,b):C(a.templateProvider)?this.fromProvider(a.templateProvider,b,c):null},this.fromString=function(a,b){return D(a)?a(b):a},this.fromUrl=function(c,d){return D(c)&&(c=c(d)),null==c?null:a.get(c,{cache:b}).then(function(a){return a.data})},this.fromProvider=function(a,b,d){return c.invoke(a,null,d||{params:b})}}function n(a){function b(b){if(!/^\w+(-+\w+)*$/.test(b))throw new Error("Invalid parameter name '"+b+"' in pattern '"+a+"'");if(f[b])throw new Error("Duplicate parameter name '"+b+"' in pattern '"+a+"'");f[b]=!0,j.push(b)}function c(a){return a.replace(/[\\\[\]\^$*+?.()|{}]/g,"\\$&")}var d,e=/([:*])(\w+)|\{(\w+)(?:\:((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g,f={},g="^",h=0,i=this.segments=[],j=this.params=[];this.source=a;for(var k,l,m;(d=e.exec(a))&&(k=d[2]||d[3],l=d[4]||("*"==d[1]?".*":"[^/]*"),m=a.substring(h,d.index),!(m.indexOf("?")>=0));)g+=c(m)+"("+l+")",b(k),i.push(m),h=e.lastIndex;m=a.substring(h);var n=m.indexOf("?");if(n>=0){var o=this.sourceSearch=m.substring(n);m=m.substring(0,n),this.sourcePath=a.substring(0,h+n),H(o.substring(1).split(/[&?]/),b)}else this.sourcePath=a,this.sourceSearch="";g+=c(m)+"$",i.push(m),this.regexp=new RegExp(g),this.prefix=i[0]}function o(){this.compile=function(a){return new n(a)},this.isMatcher=function(a){return F(a)&&D(a.exec)&&D(a.format)&&D(a.concat)},this.$get=function(){return this}}function p(a){function b(a){var b=/^\^((?:\\[^a-zA-Z0-9]|[^\\\[\]\^$*+?.()|{}]+)*)/.exec(a.source);return null!=b?b[1].replace(/\\(.)/g,"$1"):""}function c(a,b){return a.replace(/\$(\$|\d{1,2})/,function(a,c){return b["$"===c?0:Number(c)]})}function d(a,b,c){if(!c)return!1;var d=a.invoke(b,b,{$match:c});return C(d)?d:!0}var e=[],f=null;this.rule=function(a){if(!D(a))throw new Error("'rule' must be a function");return e.push(a),this},this.otherwise=function(a){if(E(a)){var b=a;a=function(){return b}}else if(!D(a))throw new Error("'rule' must be a function");return f=a,this},this.when=function(e,f){var g,h=E(f);if(E(e)&&(e=a.compile(e)),!h&&!D(f)&&!G(f))throw new Error("invalid 'handler' in when()");var i={matcher:function(b,c){return h&&(g=a.compile(c),c=["$match",function(a){return g.format(a)}]),I(function(a,e){return d(a,c,b.exec(e.path(),e.search()))},{prefix:E(b.prefix)?b.prefix:""})},regex:function(a,e){if(a.global||a.sticky)throw new Error("when() RegExp must not be global or sticky");return h&&(g=e,e=["$match",function(a){return c(g,a)}]),I(function(b,c){return d(b,e,a.exec(c.path()))},{prefix:b(a)})}},j={matcher:a.isMatcher(e),regex:e instanceof RegExp};for(var k in j)if(j[k])return this.rule(i[k](e,f));throw new Error("invalid 'what' in when()")},this.$get=["$location","$rootScope","$injector",function(a,b,c){function d(b){function d(b){var d=b(c,a);return d?(E(d)&&a.replace().url(d),!0):!1}if(!b||!b.defaultPrevented){var g,h=e.length;for(g=0;h>g;g++)if(d(e[g]))return;f&&d(f)}}return b.$on("$locationChangeSuccess",d),{sync:function(){d()}}}]}function q(a,e,f){function g(a){return 0===a.indexOf(".")||0===a.indexOf("^")}function l(a,b){var d=E(a),e=d?a:a.name,f=g(e);if(f){if(!b)throw new Error("No reference point given for path '"+e+"'");for(var h=e.split("."),i=0,j=h.length,k=b;j>i;i++)if(""!==h[i]||0!==i){if("^"!==h[i])break;if(!k.parent)throw new Error("Path '"+e+"' not valid for state '"+b.name+"'");k=k.parent}else k=b;h=h.slice(i).join("."),e=k.name+(k.name&&h?".":"")+h}var l=w[e];return!l||!d&&(d||l!==a&&l.self!==a)?c:l}function m(a,b){x[a]||(x[a]=[]),x[a].push(b)}function n(b){b=d(b,{self:b,resolve:b.resolve||{},toString:function(){return this.name}});var c=b.name;if(!E(c)||c.indexOf("@")>=0)throw new Error("State must have a valid name");if(w.hasOwnProperty(c))throw new Error("State '"+c+"'' is already defined");var e=-1!==c.indexOf(".")?c.substring(0,c.lastIndexOf(".")):E(b.parent)?b.parent:"";if(e&&!w[e])return m(e,b.self);for(var f in z)D(z[f])&&(b[f]=z[f](b,z.$delegates[f]));if(w[c]=b,!b[y]&&b.url&&a.when(b.url,["$match","$stateParams",function(a,c){v.$current.navigable==b&&j(a,c)||v.transitionTo(b,a,{location:!1})}]),x[c])for(var g=0;g<x[c].length;g++)n(x[c][g]);return b}function o(a){return a.indexOf("*")>-1}function p(a){var b=a.split("."),c=v.$current.name.split(".");if("**"===b[0]&&(c=c.slice(c.indexOf(b[1])),c.unshift("**")),"**"===b[b.length-1]&&(c.splice(c.indexOf(b[b.length-2])+1,Number.MAX_VALUE),c.push("**")),b.length!=c.length)return!1;for(var d=0,e=b.length;e>d;d++)"*"===b[d]&&(c[d]="*");return c.join("")===b.join("")}function q(a,b){return E(a)&&!C(b)?z[a]:D(b)&&E(a)?(z[a]&&!z.$delegates[a]&&(z.$delegates[a]=z[a]),z[a]=b,this):this}function r(a,b){return F(a)?b=a:b.name=a,n(b),this}function s(a,e,g,m,n,q,r,s,x){function z(){r.url()!==M&&(r.url(M),r.replace())}function A(a,c,d,f,h){var i=d?c:k(a.params,c),j={$stateParams:i};h.resolve=n.resolve(a.resolve,j,h.resolve,a);var l=[h.resolve.then(function(a){h.globals=a})];return f&&l.push(f),H(a.views,function(c,d){var e=c.resolve&&c.resolve!==a.resolve?c.resolve:{};e.$template=[function(){return g.load(d,{view:c,locals:j,params:i,notify:!1})||""}],l.push(n.resolve(e,j,h.resolve,a).then(function(f){if(D(c.controllerProvider)||G(c.controllerProvider)){var g=b.extend({},e,j);f.$$controller=m.invoke(c.controllerProvider,null,g)}else f.$$controller=c.controller;f.$$state=a,f.$$controllerAs=c.controllerAs,h[d]=f}))}),e.all(l).then(function(){return h})}var B=e.reject(new Error("transition superseded")),F=e.reject(new Error("transition prevented")),K=e.reject(new Error("transition aborted")),L=e.reject(new Error("transition failed")),M=r.url(),N=x.baseHref();return u.locals={resolve:null,globals:{$stateParams:{}}},v={params:{},current:u.self,$current:u,transition:null},v.reload=function(){v.transitionTo(v.current,q,{reload:!0,inherit:!1,notify:!1})},v.go=function(a,b,c){return this.transitionTo(a,b,I({inherit:!0,relative:v.$current},c))},v.transitionTo=function(b,c,f){c=c||{},f=I({location:!0,inherit:!1,relative:null,notify:!0,reload:!1,$retry:!1},f||{});var g,k=v.$current,n=v.params,o=k.path,p=l(b,f.relative);if(!C(p)){var s={to:b,toParams:c,options:f};if(g=a.$broadcast("$stateNotFound",s,k.self,n),g.defaultPrevented)return z(),K;if(g.retry){if(f.$retry)return z(),L;var w=v.transition=e.when(g.retry);return w.then(function(){return w!==v.transition?B:(s.options.$retry=!0,v.transitionTo(s.to,s.toParams,s.options))},function(){return K}),z(),w}if(b=s.to,c=s.toParams,f=s.options,p=l(b,f.relative),!C(p)){if(f.relative)throw new Error("Could not resolve '"+b+"' from state '"+f.relative+"'");throw new Error("No such state '"+b+"'")}}if(p[y])throw new Error("Cannot transition to abstract state '"+b+"'");f.inherit&&(c=h(q,c||{},v.$current,p)),b=p;var x,D,E=b.path,G=u.locals,H=[];for(x=0,D=E[x];D&&D===o[x]&&j(c,n,D.ownParams)&&!f.reload;x++,D=E[x])G=H[x]=D.locals;if(t(b,k,G,f))return b.self.reloadOnSearch!==!1&&z(),v.transition=null,e.when(v.current);if(c=i(b.params,c||{}),f.notify&&(g=a.$broadcast("$stateChangeStart",b.self,c,k.self,n),g.defaultPrevented))return z(),F;for(var N=e.when(G),O=x;O<E.length;O++,D=E[O])G=H[O]=d(G),N=A(D,c,D===b,N,G);var P=v.transition=N.then(function(){var d,e,g;if(v.transition!==P)return B;for(d=o.length-1;d>=x;d--)g=o[d],g.self.onExit&&m.invoke(g.self.onExit,g.self,g.locals.globals),g.locals=null;for(d=x;d<E.length;d++)e=E[d],e.locals=H[d],e.self.onEnter&&m.invoke(e.self.onEnter,e.self,e.locals.globals);if(v.transition!==P)return B;v.$current=b,v.current=b.self,v.params=c,J(v.params,q),v.transition=null;var h=b.navigable;return f.location&&h&&(r.url(h.url.format(h.locals.globals.$stateParams)),"replace"===f.location&&r.replace()),f.notify&&a.$broadcast("$stateChangeSuccess",b.self,c,k.self,n),M=r.url(),v.current},function(d){return v.transition!==P?B:(v.transition=null,a.$broadcast("$stateChangeError",b.self,c,k.self,n,d),z(),e.reject(d))});return P},v.is=function(a,d){var e=l(a);return C(e)?v.$current!==e?!1:C(d)&&null!==d?b.equals(q,d):!0:c},v.includes=function(a,d){if(E(a)&&o(a)){if(!p(a))return!1;a=v.$current.name}var e=l(a);if(!C(e))return c;if(!C(v.$current.includes[e.name]))return!1;var f=!0;return b.forEach(d,function(a,b){C(q[b])&&q[b]===a||(f=!1)}),f},v.href=function(a,b,c){c=I({lossy:!0,inherit:!1,absolute:!1,relative:v.$current},c||{});var d=l(a,c.relative);if(!C(d))return null;b=h(q,b||{},v.$current,d);var e=d&&c.lossy?d.navigable:d,g=e&&e.url?e.url.format(i(d.params,b||{})):null;return!f.html5Mode()&&g&&(g="#"+f.hashPrefix()+g),"/"!==N&&(f.html5Mode()?g=N.slice(0,-1)+g:c.absolute&&(g=N.slice(1)+g)),c.absolute&&g&&(g=r.protocol()+"://"+r.host()+(80==r.port()||443==r.port()?"":":"+r.port())+(!f.html5Mode()&&g?"/":"")+g),g},v.get=function(a,b){if(!C(a)){var c=[];return H(w,function(a){c.push(a.self)}),c}var d=l(a,b);return d&&d.self?d.self:null},v}function t(a,b,c,d){return a!==b||(c!==b.locals||d.reload)&&a.self.reloadOnSearch!==!1?void 0:!0}var u,v,w={},x={},y="abstract",z={parent:function(a){if(C(a.parent)&&a.parent)return l(a.parent);var b=/^(.+)\.[^.]+$/.exec(a.name);return b?l(b[1]):u},data:function(a){return a.parent&&a.parent.data&&(a.data=a.self.data=I({},a.parent.data,a.data)),a.data},url:function(a){var b=a.url;if(E(b))return"^"==b.charAt(0)?e.compile(b.substring(1)):(a.parent.navigable||u).url.concat(b);if(e.isMatcher(b)||null==b)return b;throw new Error("Invalid url '"+b+"' in state '"+a+"'")},navigable:function(a){return a.url?a:a.parent?a.parent.navigable:null},params:function(a){if(!a.params)return a.url?a.url.parameters():a.parent.params;if(!G(a.params))throw new Error("Invalid params in state '"+a+"'");if(a.url)throw new Error("Both params and url specicified in state '"+a+"'");return a.params},views:function(a){var b={};return H(C(a.views)?a.views:{"":a},function(c,d){d.indexOf("@")<0&&(d+="@"+a.parent.name),b[d]=c}),b},ownParams:function(a){if(!a.parent)return a.params;var b={};H(a.params,function(a){b[a]=!0}),H(a.parent.params,function(c){if(!b[c])throw new Error("Missing required parameter '"+c+"' in state '"+a.name+"'");b[c]=!1});var c=[];return H(b,function(a,b){a&&c.push(b)}),c},path:function(a){return a.parent?a.parent.path.concat(a):[]},includes:function(a){var b=a.parent?I({},a.parent.includes):{};return b[a.name]=!0,b},$delegates:{}};u=n({name:"",url:"^",views:null,"abstract":!0}),u.navigable=null,this.decorator=q,this.state=r,this.$get=s,s.$inject=["$rootScope","$q","$view","$injector","$resolve","$stateParams","$location","$urlRouter","$browser"]}function r(){function a(a,b){return{load:function(c,d){var e,f={template:null,controller:null,view:null,locals:null,notify:!0,async:!0,params:{}};return d=I(f,d),d.view&&(e=b.fromConfig(d.view,d.params,d.locals)),e&&d.notify&&a.$broadcast("$viewContentLoading",d),e}}}this.$get=a,a.$inject=["$rootScope","$templateFactory"]}function s(){var a=!1;this.useAnchorScroll=function(){a=!0},this.$get=["$anchorScroll","$timeout",function(b,c){return a?b:function(a){c(function(){a[0].scrollIntoView()},0,!1)}}]}function t(a,c,d){function e(){return c.has?function(a){return c.has(a)?c.get(a):null}:function(a){try{return c.get(a)}catch(b){return null}}}function f(a,b){var c=function(){return{enter:function(a,b,c){b.after(a),c()},leave:function(a,b){a.remove(),b()}}};if(i)return{enter:function(a,b,c){i.enter(a,null,b,c)},leave:function(a,b){i.leave(a,b)}};if(h){var d=h&&h(b,a);return{enter:function(a,b,c){d.enter(a,null,b),c()},leave:function(a,b){d.leave(a),b()}}}return c()}var g=e(),h=g("$animator"),i=g("$animate"),j={restrict:"ECA",terminal:!0,priority:400,transclude:"element",compile:function(c,e,g){return function(c,e,h){function i(){k&&(k.remove(),k=null),m&&(m.$destroy(),m=null),l&&(q.leave(l,function(){k=null}),k=l,l=null)}function j(f){var h=c.$new(),j=l&&l.data("$uiViewName"),k=j&&a.$current&&a.$current.locals[j];if(f||k!==n){var r=g(h,function(a){q.enter(a,e,function(){(b.isDefined(p)&&!p||c.$eval(p))&&d(a)}),i()});n=a.$current.locals[r.data("$uiViewName")],l=r,m=h,m.$emit("$viewContentLoaded"),m.$eval(o)}}var k,l,m,n,o=h.onload||"",p=h.autoscroll,q=f(h,c);c.$on("$stateChangeSuccess",function(){j(!1)}),c.$on("$viewContentLoading",function(){j(!1)}),j(!0)}}};return j}function u(a,b,c){return{restrict:"ECA",priority:-400,compile:function(d){var e=d.html();return function(d,f,g){var h=g.uiView||g.name||"",i=f.inheritedData("$uiView");h.indexOf("@")<0&&(h=h+"@"+(i?i.state.name:"")),f.data("$uiViewName",h);var j=c.$current,k=j&&j.locals[h];if(k){f.data("$uiView",{name:h,state:k.$$state}),f.html(k.$template?k.$template:e);var l=a(f.contents());if(k.$$controller){k.$scope=d;var m=b(k.$$controller,k);k.$$controllerAs&&(d[k.$$controllerAs]=m),f.data("$ngControllerController",m),f.children().data("$ngControllerController",m)}l(d)}}}}}function v(a){var b=a.replace(/\n/g," ").match(/^([^(]+?)\s*(\((.*)\))?$/);if(!b||4!==b.length)throw new Error("Invalid state ref '"+a+"'");return{state:b[1],paramExpr:b[3]||null}}function w(a){var b=a.parent().inheritedData("$uiView");return b&&b.state&&b.state.name?b.state:void 0}function x(a,c){var d=["location","inherit","reload"];return{restrict:"A",require:"?^uiSrefActive",link:function(e,f,g,h){var i=v(g.uiSref),j=null,k=w(f)||a.$current,l="FORM"===f[0].nodeName,m=l?"action":"href",n=!0,o={relative:k},p=e.$eval(g.uiSrefOpts)||{};b.forEach(d,function(a){a in p&&(o[a]=p[a])});var q=function(b){if(b&&(j=b),n){var c=a.href(i.state,j,o);return h&&h.$$setStateInfo(i.state,j),c?void(f[0][m]=c):(n=!1,!1)}};i.paramExpr&&(e.$watch(i.paramExpr,function(a){a!==j&&q(a)},!0),j=e.$eval(i.paramExpr)),q(),l||f.bind("click",function(b){var d=b.which||b.button;d>1||b.ctrlKey||b.metaKey||b.shiftKey||f.attr("target")||(c(function(){a.go(i.state,j,o)}),b.preventDefault())})}}}function y(a,b,c){return{restrict:"A",controller:["$scope","$element","$attrs",function(d,e,f){function g(){a.$current.self===i&&h()?e.addClass(l):e.removeClass(l)}function h(){return!k||j(k,b)}var i,k,l;l=c(f.uiSrefActive||"",!1)(d),this.$$setStateInfo=function(b,c){i=a.get(b,w(e)),k=c,g()},d.$on("$stateChangeSuccess",g)}]}}function z(a){return function(b){return a.is(b)}}function A(a){return function(b){return a.includes(b)}}function B(a,b){function e(a){this.locals=a.locals.globals,this.params=this.locals.$stateParams}function f(){this.locals=null,this.params=null}function g(c,g){if(null!=g.redirectTo){var h,j=g.redirectTo;if(E(j))h=j;else{if(!D(j))throw new Error("Invalid 'redirectTo' in when()");h=function(a,b){return j(a,b.path(),b.search())}}b.when(c,h)}else a.state(d(g,{parent:null,name:"route:"+encodeURIComponent(c),url:c,onEnter:e,onExit:f}));return i.push(g),this}function h(a,b,d){function e(a){return""!==a.name?a:c}var f={routes:i,params:d,current:c};return b.$on("$stateChangeStart",function(a,c,d,f){b.$broadcast("$routeChangeStart",e(c),e(f))}),b.$on("$stateChangeSuccess",function(a,c,d,g){f.current=e(c),b.$broadcast("$routeChangeSuccess",e(c),e(g)),J(d,f.params)}),b.$on("$stateChangeError",function(a,c,d,f,g,h){b.$broadcast("$routeChangeError",e(c),e(f),h)}),f}var i=[];e.$inject=["$$state"],this.when=g,this.$get=h,h.$inject=["$state","$rootScope","$routeParams"]}var C=b.isDefined,D=b.isFunction,E=b.isString,F=b.isObject,G=b.isArray,H=b.forEach,I=b.extend,J=b.copy;b.module("ui.router.util",["ng"]),b.module("ui.router.router",["ui.router.util"]),b.module("ui.router.state",["ui.router.router","ui.router.util"]),b.module("ui.router",["ui.router.state"]),b.module("ui.router.compat",["ui.router"]),l.$inject=["$q","$injector"],b.module("ui.router.util").service("$resolve",l),m.$inject=["$http","$templateCache","$injector"],b.module("ui.router.util").service("$templateFactory",m),n.prototype.concat=function(a){return new n(this.sourcePath+a+this.sourceSearch)},n.prototype.toString=function(){return this.source},n.prototype.exec=function(a,b){var c=this.regexp.exec(a);if(!c)return null;var d,e=this.params,f=e.length,g=this.segments.length-1,h={};if(g!==c.length-1)throw new Error("Unbalanced capture group in route '"+this.source+"'");for(d=0;g>d;d++)h[e[d]]=c[d+1];for(;f>d;d++)h[e[d]]=b[e[d]];return h},n.prototype.parameters=function(){return this.params},n.prototype.format=function(a){var b=this.segments,c=this.params;if(!a)return b.join("");var d,e,f,g=b.length-1,h=c.length,i=b[0];for(d=0;g>d;d++)f=a[c[d]],null!=f&&(i+=encodeURIComponent(f)),i+=b[d+1];for(;h>d;d++)f=a[c[d]],null!=f&&(i+=(e?"&":"?")+c[d]+"="+encodeURIComponent(f),e=!0);return i},b.module("ui.router.util").provider("$urlMatcherFactory",o),p.$inject=["$urlMatcherFactoryProvider"],b.module("ui.router.router").provider("$urlRouter",p),q.$inject=["$urlRouterProvider","$urlMatcherFactoryProvider","$locationProvider"],b.module("ui.router.state").value("$stateParams",{}).provider("$state",q),r.$inject=[],b.module("ui.router.state").provider("$view",r),b.module("ui.router.state").provider("$uiViewScroll",s),t.$inject=["$state","$injector","$uiViewScroll"],u.$inject=["$compile","$controller","$state"],b.module("ui.router.state").directive("uiView",t),b.module("ui.router.state").directive("uiView",u),x.$inject=["$state","$timeout"],y.$inject=["$state","$stateParams","$interpolate"],b.module("ui.router.state").directive("uiSref",x).directive("uiSrefActive",y),z.$inject=["$state"],A.$inject=["$state"],b.module("ui.router.state").filter("isState",z).filter("includedByState",A),B.$inject=["$stateProvider","$urlRouterProvider"],b.module("ui.router.compat").provider("$route",B).directive("ngView",t)}(window,window.angular);
/*!
 * jQuery JavaScript Library v2.1.1
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright 2005, 2014 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2014-05-01T17:11Z
 */

(function( global, factory ) {

	if ( typeof module === "object" && typeof module.exports === "object" ) {
		// For CommonJS and CommonJS-like environments where a proper window is present,
		// execute the factory and get jQuery
		// For environments that do not inherently posses a window with a document
		// (such as Node.js), expose a jQuery-making factory as module.exports
		// This accentuates the need for the creation of a real window
		// e.g. var jQuery = require("jquery")(window);
		// See ticket #14549 for more info
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

// Pass this if window is not defined yet
}(typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Can't do this because several apps including ASP.NET trace
// the stack via arguments.caller.callee and Firefox dies if
// you try to trace through "use strict" call chains. (#13335)
// Support: Firefox 18+
//

var arr = [];

var slice = arr.slice;

var concat = arr.concat;

var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var support = {};



var
	// Use the correct document accordingly with window argument (sandbox)
	document = window.document,

	version = "2.1.1",

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {
		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	},

	// Support: Android<4.1
	// Make sure we trim BOM and NBSP
	rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,

	// Matches dashed string for camelizing
	rmsPrefix = /^-ms-/,
	rdashAlpha = /-([\da-z])/gi,

	// Used by jQuery.camelCase as callback to replace()
	fcamelCase = function( all, letter ) {
		return letter.toUpperCase();
	};

jQuery.fn = jQuery.prototype = {
	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// Start with an empty selector
	selector: "",

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {
		return num != null ?

			// Return just the one element from the set
			( num < 0 ? this[ num + this.length ] : this[ num ] ) :

			// Return all the elements in a clean array
			slice.call( this );
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;
		ret.context = this.context;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	// (You can seed the arguments with an array of args, but this is
	// only used internally.)
	each: function( callback, args ) {
		return jQuery.each( this, callback, args );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map(this, function( elem, i ) {
			return callback.call( elem, i, elem );
		}));
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[j] ] : [] );
	},

	end: function() {
		return this.prevObject || this.constructor(null);
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: arr.sort,
	splice: arr.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[0] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !jQuery.isFunction(target) ) {
		target = {};
	}

	// extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {
		// Only deal with non-null/undefined values
		if ( (options = arguments[ i ]) != null ) {
			// Extend the base object
			for ( name in options ) {
				src = target[ name ];
				copy = options[ name ];

				// Prevent never-ending loop
				if ( target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject(copy) || (copyIsArray = jQuery.isArray(copy)) ) ) {
					if ( copyIsArray ) {
						copyIsArray = false;
						clone = src && jQuery.isArray(src) ? src : [];

					} else {
						clone = src && jQuery.isPlainObject(src) ? src : {};
					}

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend({
	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	// See test/unit/core.js for details concerning isFunction.
	// Since version 1.3, DOM methods and functions like alert
	// aren't supported. They return false on IE (#2968).
	isFunction: function( obj ) {
		return jQuery.type(obj) === "function";
	},

	isArray: Array.isArray,

	isWindow: function( obj ) {
		return obj != null && obj === obj.window;
	},

	isNumeric: function( obj ) {
		// parseFloat NaNs numeric-cast false positives (null|true|false|"")
		// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
		// subtraction forces infinities to NaN
		return !jQuery.isArray( obj ) && obj - parseFloat( obj ) >= 0;
	},

	isPlainObject: function( obj ) {
		// Not plain objects:
		// - Any object or value whose internal [[Class]] property is not "[object Object]"
		// - DOM nodes
		// - window
		if ( jQuery.type( obj ) !== "object" || obj.nodeType || jQuery.isWindow( obj ) ) {
			return false;
		}

		if ( obj.constructor &&
				!hasOwn.call( obj.constructor.prototype, "isPrototypeOf" ) ) {
			return false;
		}

		// If the function hasn't returned already, we're confident that
		// |obj| is a plain object, created by {} or constructed with new Object
		return true;
	},

	isEmptyObject: function( obj ) {
		var name;
		for ( name in obj ) {
			return false;
		}
		return true;
	},

	type: function( obj ) {
		if ( obj == null ) {
			return obj + "";
		}
		// Support: Android < 4.0, iOS < 6 (functionish RegExp)
		return typeof obj === "object" || typeof obj === "function" ?
			class2type[ toString.call(obj) ] || "object" :
			typeof obj;
	},

	// Evaluates a script in a global context
	globalEval: function( code ) {
		var script,
			indirect = eval;

		code = jQuery.trim( code );

		if ( code ) {
			// If the code includes a valid, prologue position
			// strict mode pragma, execute code by injecting a
			// script tag into the document.
			if ( code.indexOf("use strict") === 1 ) {
				script = document.createElement("script");
				script.text = code;
				document.head.appendChild( script ).parentNode.removeChild( script );
			} else {
			// Otherwise, avoid the DOM node creation, insertion
			// and removal by using an indirect global eval
				indirect( code );
			}
		}
	},

	// Convert dashed to camelCase; used by the css and data modules
	// Microsoft forgot to hump their vendor prefix (#9572)
	camelCase: function( string ) {
		return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
	},

	nodeName: function( elem, name ) {
		return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
	},

	// args is for internal usage only
	each: function( obj, callback, args ) {
		var value,
			i = 0,
			length = obj.length,
			isArray = isArraylike( obj );

		if ( args ) {
			if ( isArray ) {
				for ( ; i < length; i++ ) {
					value = callback.apply( obj[ i ], args );

					if ( value === false ) {
						break;
					}
				}
			} else {
				for ( i in obj ) {
					value = callback.apply( obj[ i ], args );

					if ( value === false ) {
						break;
					}
				}
			}

		// A special, fast, case for the most common use of each
		} else {
			if ( isArray ) {
				for ( ; i < length; i++ ) {
					value = callback.call( obj[ i ], i, obj[ i ] );

					if ( value === false ) {
						break;
					}
				}
			} else {
				for ( i in obj ) {
					value = callback.call( obj[ i ], i, obj[ i ] );

					if ( value === false ) {
						break;
					}
				}
			}
		}

		return obj;
	},

	// Support: Android<4.1
	trim: function( text ) {
		return text == null ?
			"" :
			( text + "" ).replace( rtrim, "" );
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArraylike( Object(arr) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
					[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		return arr == null ? -1 : indexOf.call( arr, elem, i );
	},

	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;

		for ( ; j < len; j++ ) {
			first[ i++ ] = second[ j ];
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		return matches;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var value,
			i = 0,
			length = elems.length,
			isArray = isArraylike( elems ),
			ret = [];

		// Go through the array, translating each of the items to their new values
		if ( isArray ) {
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}
		}

		// Flatten any nested arrays
		return concat.apply( [], ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// Bind a function to a context, optionally partially applying any
	// arguments.
	proxy: function( fn, context ) {
		var tmp, args, proxy;

		if ( typeof context === "string" ) {
			tmp = fn[ context ];
			context = fn;
			fn = tmp;
		}

		// Quick check to determine if target is callable, in the spec
		// this throws a TypeError, but we will just return undefined.
		if ( !jQuery.isFunction( fn ) ) {
			return undefined;
		}

		// Simulated bind
		args = slice.call( arguments, 2 );
		proxy = function() {
			return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
		};

		// Set the guid of unique handler to the same of original handler, so it can be removed
		proxy.guid = fn.guid = fn.guid || jQuery.guid++;

		return proxy;
	},

	now: Date.now,

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
});

// Populate the class2type map
jQuery.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(i, name) {
	class2type[ "[object " + name + "]" ] = name.toLowerCase();
});

function isArraylike( obj ) {
	var length = obj.length,
		type = jQuery.type( obj );

	if ( type === "function" || jQuery.isWindow( obj ) ) {
		return false;
	}

	if ( obj.nodeType === 1 && length ) {
		return true;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}
var Sizzle =
/*!
 * Sizzle CSS Selector Engine v1.10.19
 * http://sizzlejs.com/
 *
 * Copyright 2013 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2014-04-18
 */
(function( window ) {

var i,
	support,
	Expr,
	getText,
	isXML,
	tokenize,
	compile,
	select,
	outermostContext,
	sortInput,
	hasDuplicate,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,

	// Instance-specific data
	expando = "sizzle" + -(new Date()),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	// General-purpose constants
	strundefined = typeof undefined,
	MAX_NEGATIVE = 1 << 31,

	// Instance methods
	hasOwn = ({}).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	push_native = arr.push,
	push = arr.push,
	slice = arr.slice,
	// Use a stripped-down indexOf if we can't use a native one
	indexOf = arr.indexOf || function( elem ) {
		var i = 0,
			len = this.length;
		for ( ; i < len; i++ ) {
			if ( this[i] === elem ) {
				return i;
			}
		}
		return -1;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// Whitespace characters http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",
	// http://www.w3.org/TR/css3-syntax/#characters
	characterEncoding = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",

	// Loosely modeled on CSS identifier characters
	// An unquoted value should be a CSS identifier http://www.w3.org/TR/css3-selectors/#attribute-selectors
	// Proper syntax: http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
	identifier = characterEncoding.replace( "w", "w#" ),

	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + characterEncoding + ")(?:" + whitespace +
		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +
		// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
		"*\\]",

	pseudos = ":(" + characterEncoding + ")(?:\\((" +
		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),

	rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + characterEncoding + ")" ),
		"CLASS": new RegExp( "^\\.(" + characterEncoding + ")" ),
		"TAG": new RegExp( "^(" + characterEncoding.replace( "w", "w*" ) + ")" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
			"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
			"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
			whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rnative = /^[^{]+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,
	rescape = /'|\\/g,

	// CSS escapes http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
	funescape = function( _, escaped, escapedWhitespace ) {
		var high = "0x" + escaped - 0x10000;
		// NaN means non-codepoint
		// Support: Firefox<24
		// Workaround erroneous numeric interpretation of +"0x"
		return high !== high || escapedWhitespace ?
			escaped :
			high < 0 ?
				// BMP codepoint
				String.fromCharCode( high + 0x10000 ) :
				// Supplemental Plane codepoint (surrogate pair)
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	};

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		(arr = slice.call( preferredDoc.childNodes )),
		preferredDoc.childNodes
	);
	// Support: Android<4.0
	// Detect silently failing push.apply
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) {
			push_native.apply( target, slice.call(els) );
		} :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ) {
			var j = target.length,
				i = 0;
			// Can't trust NodeList.length
			while ( (target[j++] = els[i++]) ) {}
			target.length = j - 1;
		}
	};
}

function Sizzle( selector, context, results, seed ) {
	var match, elem, m, nodeType,
		// QSA vars
		i, groups, old, nid, newContext, newSelector;

	if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
		setDocument( context );
	}

	context = context || document;
	results = results || [];

	if ( !selector || typeof selector !== "string" ) {
		return results;
	}

	if ( (nodeType = context.nodeType) !== 1 && nodeType !== 9 ) {
		return [];
	}

	if ( documentIsHTML && !seed ) {

		// Shortcuts
		if ( (match = rquickExpr.exec( selector )) ) {
			// Speed-up: Sizzle("#ID")
			if ( (m = match[1]) ) {
				if ( nodeType === 9 ) {
					elem = context.getElementById( m );
					// Check parentNode to catch when Blackberry 4.6 returns
					// nodes that are no longer in the document (jQuery #6963)
					if ( elem && elem.parentNode ) {
						// Handle the case where IE, Opera, and Webkit return items
						// by name instead of ID
						if ( elem.id === m ) {
							results.push( elem );
							return results;
						}
					} else {
						return results;
					}
				} else {
					// Context is not a document
					if ( context.ownerDocument && (elem = context.ownerDocument.getElementById( m )) &&
						contains( context, elem ) && elem.id === m ) {
						results.push( elem );
						return results;
					}
				}

			// Speed-up: Sizzle("TAG")
			} else if ( match[2] ) {
				push.apply( results, context.getElementsByTagName( selector ) );
				return results;

			// Speed-up: Sizzle(".CLASS")
			} else if ( (m = match[3]) && support.getElementsByClassName && context.getElementsByClassName ) {
				push.apply( results, context.getElementsByClassName( m ) );
				return results;
			}
		}

		// QSA path
		if ( support.qsa && (!rbuggyQSA || !rbuggyQSA.test( selector )) ) {
			nid = old = expando;
			newContext = context;
			newSelector = nodeType === 9 && selector;

			// qSA works strangely on Element-rooted queries
			// We can work around this by specifying an extra ID on the root
			// and working up from there (Thanks to Andrew Dupont for the technique)
			// IE 8 doesn't work on object elements
			if ( nodeType === 1 && context.nodeName.toLowerCase() !== "object" ) {
				groups = tokenize( selector );

				if ( (old = context.getAttribute("id")) ) {
					nid = old.replace( rescape, "\\$&" );
				} else {
					context.setAttribute( "id", nid );
				}
				nid = "[id='" + nid + "'] ";

				i = groups.length;
				while ( i-- ) {
					groups[i] = nid + toSelector( groups[i] );
				}
				newContext = rsibling.test( selector ) && testContext( context.parentNode ) || context;
				newSelector = groups.join(",");
			}

			if ( newSelector ) {
				try {
					push.apply( results,
						newContext.querySelectorAll( newSelector )
					);
					return results;
				} catch(qsaError) {
				} finally {
					if ( !old ) {
						context.removeAttribute("id");
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {Function(string, Object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {
		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {
			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return (cache[ key + " " ] = value);
	}
	return cache;
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created div and expects a boolean result
 */
function assert( fn ) {
	var div = document.createElement("div");

	try {
		return !!fn( div );
	} catch (e) {
		return false;
	} finally {
		// Remove from its parent by default
		if ( div.parentNode ) {
			div.parentNode.removeChild( div );
		}
		// release memory in IE
		div = null;
	}
}

/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split("|"),
		i = attrs.length;

	while ( i-- ) {
		Expr.attrHandle[ arr[i] ] = handler;
	}
}

/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			( ~b.sourceIndex || MAX_NEGATIVE ) -
			( ~a.sourceIndex || MAX_NEGATIVE );

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( (cur = cur.nextSibling) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return (name === "input" || name === "button") && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction(function( argument ) {
		argument = +argument;
		return markFunction(function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ (j = matchIndexes[i]) ] ) {
					seed[j] = !(matches[j] = seed[j]);
				}
			}
		});
	});
}

/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== strundefined && context;
}

// Expose support vars for convenience
support = Sizzle.support = {};

/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
isXML = Sizzle.isXML = function( elem ) {
	// documentElement is verified for cases where it doesn't yet exist
	// (such as loading iframes in IE - #4833)
	var documentElement = elem && (elem.ownerDocument || elem).documentElement;
	return documentElement ? documentElement.nodeName !== "HTML" : false;
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var hasCompare,
		doc = node ? node.ownerDocument || node : preferredDoc,
		parent = doc.defaultView;

	// If no document and documentElement is available, return
	if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Set our document
	document = doc;
	docElem = doc.documentElement;

	// Support tests
	documentIsHTML = !isXML( doc );

	// Support: IE>8
	// If iframe document is assigned to "document" variable and if iframe has been reloaded,
	// IE will throw "permission denied" error when accessing "document" variable, see jQuery #13936
	// IE6-8 do not support the defaultView property so parent will be undefined
	if ( parent && parent !== parent.top ) {
		// IE11 does not have attachEvent, so all must suffer
		if ( parent.addEventListener ) {
			parent.addEventListener( "unload", function() {
				setDocument();
			}, false );
		} else if ( parent.attachEvent ) {
			parent.attachEvent( "onunload", function() {
				setDocument();
			});
		}
	}

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties (excepting IE8 booleans)
	support.attributes = assert(function( div ) {
		div.className = "i";
		return !div.getAttribute("className");
	});

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert(function( div ) {
		div.appendChild( doc.createComment("") );
		return !div.getElementsByTagName("*").length;
	});

	// Check if getElementsByClassName can be trusted
	support.getElementsByClassName = rnative.test( doc.getElementsByClassName ) && assert(function( div ) {
		div.innerHTML = "<div class='a'></div><div class='a i'></div>";

		// Support: Safari<4
		// Catch class over-caching
		div.firstChild.className = "i";
		// Support: Opera<10
		// Catch gEBCN failure to find non-leading classes
		return div.getElementsByClassName("i").length === 2;
	});

	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert(function( div ) {
		docElem.appendChild( div ).id = expando;
		return !doc.getElementsByName || !doc.getElementsByName( expando ).length;
	});

	// ID find and filter
	if ( support.getById ) {
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== strundefined && documentIsHTML ) {
				var m = context.getElementById( id );
				// Check parentNode to catch when Blackberry 4.6 returns
				// nodes that are no longer in the document #6963
				return m && m.parentNode ? [ m ] : [];
			}
		};
		Expr.filter["ID"] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute("id") === attrId;
			};
		};
	} else {
		// Support: IE6/7
		// getElementById is not reliable as a find shortcut
		delete Expr.find["ID"];

		Expr.filter["ID"] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== strundefined && elem.getAttributeNode("id");
				return node && node.value === attrId;
			};
		};
	}

	// Tag
	Expr.find["TAG"] = support.getElementsByTagName ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== strundefined ) {
				return context.getElementsByTagName( tag );
			}
		} :
		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,
				results = context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag === "*" ) {
				while ( (elem = results[i++]) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Class
	Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
		if ( typeof context.getElementsByClassName !== strundefined && documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See http://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ( (support.qsa = rnative.test( doc.querySelectorAll )) ) {
		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert(function( div ) {
			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explicitly
			// setting a boolean content attribute,
			// since its presence should be enough
			// http://bugs.jquery.com/ticket/12359
			div.innerHTML = "<select msallowclip=''><option selected=''></option></select>";

			// Support: IE8, Opera 11-12.16
			// Nothing should be selected when empty strings follow ^= or $= or *=
			// The test attribute must be unknown in Opera but "safe" for WinRT
			// http://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if ( div.querySelectorAll("[msallowclip^='']").length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			}

			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !div.querySelectorAll("[selected]").length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !div.querySelectorAll(":checked").length ) {
				rbuggyQSA.push(":checked");
			}
		});

		assert(function( div ) {
			// Support: Windows 8 Native Apps
			// The type and name attributes are restricted during .innerHTML assignment
			var input = doc.createElement("input");
			input.setAttribute( "type", "hidden" );
			div.appendChild( input ).setAttribute( "name", "D" );

			// Support: IE8
			// Enforce case-sensitivity of name attribute
			if ( div.querySelectorAll("[name=d]").length ) {
				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( !div.querySelectorAll(":enabled").length ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Opera 10-11 does not throw on post-comma invalid pseudos
			div.querySelectorAll("*,:x");
			rbuggyQSA.push(",.*:");
		});
	}

	if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector) )) ) {

		assert(function( div ) {
			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( div, "div" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( div, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		});
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

	/* Contains
	---------------------------------------------------------------------- */
	hasCompare = rnative.test( docElem.compareDocumentPosition );

	// Element contains another
	// Purposefully does not implement inclusive descendent
	// As in, an element does not contain itself
	contains = hasCompare || rnative.test( docElem.contains ) ?
		function( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			));
		} :
		function( a, b ) {
			if ( b ) {
				while ( (b = b.parentNode) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = hasCompare ?
	function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

		// Calculate position if both inputs belong to the same document
		compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

			// Choose the first element that is related to our preferred document
			if ( a === doc || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
				return -1;
			}
			if ( b === doc || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
				return 1;
			}

			// Maintain original order
			return sortInput ?
				( indexOf.call( sortInput, a ) - indexOf.call( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	} :
	function( a, b ) {
		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Parentless nodes are either documents or disconnected
		if ( !aup || !bup ) {
			return a === doc ? -1 :
				b === doc ? 1 :
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf.call( sortInput, a ) - indexOf.call( sortInput, b ) ) :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( (cur = cur.parentNode) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( (cur = cur.parentNode) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[i] === bp[i] ) {
			i++;
		}

		return i ?
			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[i], bp[i] ) :

			// Otherwise nodes in our document sort first
			ap[i] === preferredDoc ? -1 :
			bp[i] === preferredDoc ? 1 :
			0;
	};

	return doc;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	// Make sure that attribute selectors are quoted
	expr = expr.replace( rattributeQuotes, "='$1']" );

	if ( support.matchesSelector && documentIsHTML &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||
					// As well, disconnected nodes are said to be in a document
					// fragment in IE 9
					elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch(e) {}
	}

	return Sizzle( expr, document, null, [ elem ] ).length > 0;
};

Sizzle.contains = function( context, elem ) {
	// Set document vars if needed
	if ( ( context.ownerDocument || context ) !== document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],
		// Don't get fooled by Object.prototype properties (jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	return val !== undefined ?
		val :
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ) :
			(val = elem.getAttributeNode(name)) && val.specified ?
				val.value :
				null;
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 );
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		while ( (elem = results[i++]) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	return results;
};

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {
		// If no nodeType, this is expected to be an array
		while ( (node = elem[i++]) ) {
			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
		// Use textContent for elements
		// innerText usage removed for consistency of new lines (jQuery #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {
			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}
	// Do not include comment or processing instruction nodes

	return ret;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[1] = match[1].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

			if ( match[2] === "~=" ) {
				match[3] = " " + match[3] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {
			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[1] = match[1].toLowerCase();

			if ( match[1].slice( 0, 3 ) === "nth" ) {
				// nth-* requires argument
				if ( !match[3] ) {
					Sizzle.error( match[0] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
				match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

			// other types prohibit arguments
			} else if ( match[3] ) {
				Sizzle.error( match[0] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[6] && match[2];

			if ( matchExpr["CHILD"].test( match[0] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[3] ) {
				match[2] = match[4] || match[5] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&
				// Get excess from tokenize (recursively)
				(excess = tokenize( unquoted, true )) &&
				// advance to the next closing parenthesis
				(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

				// excess is a negative index
				match[0] = match[0].slice( 0, excess );
				match[2] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() { return true; } :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
				classCache( className, function( elem ) {
					return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== strundefined && elem.getAttribute("class") || "" );
				});
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
			};
		},

		"CHILD": function( type, what, argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, context, xml ) {
					var cache, outerCache, node, diff, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( (node = node[ dir ]) ) {
									if ( ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1 ) {
										return false;
									}
								}
								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {
							// Seek `elem` from a previously-cached index
							outerCache = parent[ expando ] || (parent[ expando ] = {});
							cache = outerCache[ type ] || [];
							nodeIndex = cache[0] === dirruns && cache[1];
							diff = cache[0] === dirruns && cache[2];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( (node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								(diff = nodeIndex = 0) || start.pop()) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									outerCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						// Use previously-cached element index if available
						} else if ( useCache && (cache = (elem[ expando ] || (elem[ expando ] = {}))[ type ]) && cache[0] === dirruns ) {
							diff = cache[1];

						// xml :nth-child(...) or :nth-last-child(...) or :nth(-last)?-of-type(...)
						} else {
							// Use the same loop as above to seek `elem` from the start
							while ( (node = ++nodeIndex && node && node[ dir ] ||
								(diff = nodeIndex = 0) || start.pop()) ) {

								if ( ( ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1 ) && ++diff ) {
									// Cache the index of each encountered element
									if ( useCache ) {
										(node[ expando ] || (node[ expando ] = {}))[ type ] = [ dirruns, diff ];
									}

									if ( node === elem ) {
										break;
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {
			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction(function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf.call( seed, matched[i] );
							seed[ idx ] = !( matches[ idx ] = matched[i] );
						}
					}) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {
		// Potentially complex pseudos
		"not": markFunction(function( selector ) {
			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction(function( seed, matches, context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( (elem = unmatched[i]) ) {
							seed[i] = !(matches[i] = elem);
						}
					}
				}) :
				function( elem, context, xml ) {
					input[0] = elem;
					matcher( input, null, xml, results );
					return !results.pop();
				};
		}),

		"has": markFunction(function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		}),

		"contains": markFunction(function( text ) {
			return function( elem ) {
				return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
			};
		}),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {
			// lang value must be a valid identifier
			if ( !ridentifier.test(lang || "") ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( (elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
				return false;
			};
		}),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
		},

		// Boolean properties
		"enabled": function( elem ) {
			return elem.disabled === false;
		},

		"disabled": function( elem ) {
			return elem.disabled === true;
		},

		"checked": function( elem ) {
			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
		},

		"selected": function( elem ) {
			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		"empty": function( elem ) {
			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos["empty"]( elem );
		},

		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function( elem ) {
			var attr;
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&

				// Support: IE<8
				// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
				( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		"first": createPositionalPseudo(function() {
			return [ 0 ];
		}),

		"last": createPositionalPseudo(function( matchIndexes, length ) {
			return [ length - 1 ];
		}),

		"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		}),

		"even": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"odd": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		})
	}
};

Expr.pseudos["nth"] = Expr.pseudos["eq"];

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || (match = rcomma.exec( soFar )) ) {
			if ( match ) {
				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[0].length ) || soFar;
			}
			groups.push( (tokens = []) );
		}

		matched = false;

		// Combinators
		if ( (match = rcombinators.exec( soFar )) ) {
			matched = match.shift();
			tokens.push({
				value: matched,
				// Cast descendant combinators to space
				type: match[0].replace( rtrim, " " )
			});
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
				(match = preFilters[ type ]( match ))) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					type: type,
					matches: match
				});
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :
			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
};

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[i].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		checkNonElements = base && dir === "parentNode",
		doneName = done++;

	return combinator.first ?
		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( (elem = elem[ dir ]) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from dir caching
			if ( xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || (elem[ expando ] = {});
						if ( (oldCache = outerCache[ dir ]) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return (newCache[ 2 ] = oldCache[ 2 ]);
						} else {
							// Reuse newcache so results back-propagate to previous elements
							outerCache[ dir ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
								return true;
							}
						}
					}
				}
			}
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[i]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[0];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[i], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( (elem = unmatched[i]) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction(function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?
				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( (elem = temp[i]) ) {
					matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {
					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) ) {
							// Restore matcherIn since elem is not yet a final match
							temp.push( (matcherIn[i] = elem) );
						}
					}
					postFinder( null, (matcherOut = []), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( (elem = matcherOut[i]) &&
						(temp = postFinder ? indexOf.call( seed, elem ) : preMap[i]) > -1 ) {

						seed[temp] = !(results[temp] = elem);
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	});
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[0].type ],
		implicitRelative = leadingRelative || Expr.relative[" "],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf.call( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			return ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				(checkContext = context).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );
		} ];

	for ( ; i < len; i++ ) {
		if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
			matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
		} else {
			matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {
				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[j].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(
						// If the preceding token was a descendant combinator, insert an implicit any-element `*`
						tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,
				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
				len = elems.length;

			if ( outermost ) {
				outermostContext = context !== document && context;
			}

			// Add elements passing elementMatchers directly to results
			// Keep `i` a string if there are no elements so `matchedCount` will be "00" below
			// Support: IE<9, Safari
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
			for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;
					while ( (matcher = elementMatchers[j++]) ) {
						if ( matcher( elem, context, xml ) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {
					// They will have gone through all possible matchers
					if ( (elem = !matcher && elem) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// Apply set filters to unmatched elements
			matchedCount += i;
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( (matcher = setMatchers[j++]) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {
					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !(unmatched[i] || setMatched[i]) ) {
								setMatched[i] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {
		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[i] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
};

/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
select = Sizzle.select = function( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( (selector = compiled.selector || selector) );

	results = results || [];

	// Try to minimize operations if there is no seed and only one group
	if ( match.length === 1 ) {

		// Take a shortcut and set the context if the root selector is an ID
		tokens = match[0] = match[0].slice( 0 );
		if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
				support.getById && context.nodeType === 9 && documentIsHTML &&
				Expr.relative[ tokens[1].type ] ) {

			context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[i];

			// Abort if we hit a combinator
			if ( Expr.relative[ (type = token.type) ] ) {
				break;
			}
			if ( (find = Expr.find[ type ]) ) {
				// Search, expanding context for leading sibling combinators
				if ( (seed = find(
					token.matches[0].replace( runescape, funescape ),
					rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
				)) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
};

// One-time assignments

// Sort stability
support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

// Support: Chrome<14
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert(function( div1 ) {
	// Should return 1, but returns 4 (following)
	return div1.compareDocumentPosition( document.createElement("div") ) & 1;
});

// Support: IE<8
// Prevent attribute/property "interpolation"
// http://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert(function( div ) {
	div.innerHTML = "<a href='#'></a>";
	return div.firstChild.getAttribute("href") === "#" ;
}) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	});
}

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert(function( div ) {
	div.innerHTML = "<input/>";
	div.firstChild.setAttribute( "value", "" );
	return div.firstChild.getAttribute( "value" ) === "";
}) ) {
	addHandle( "value", function( elem, name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	});
}

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert(function( div ) {
	return div.getAttribute("disabled") == null;
}) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return elem[ name ] === true ? name.toLowerCase() :
					(val = elem.getAttributeNode( name )) && val.specified ?
					val.value :
				null;
		}
	});
}

return Sizzle;

})( window );



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;
jQuery.expr[":"] = jQuery.expr.pseudos;
jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;



var rneedsContext = jQuery.expr.match.needsContext;

var rsingleTag = (/^<(\w+)\s*\/?>(?:<\/\1>|)$/);



var risSimple = /^.[^:#\[\.,]*$/;

// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( jQuery.isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			/* jshint -W018 */
			return !!qualifier.call( elem, i, elem ) !== not;
		});

	}

	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		});

	}

	if ( typeof qualifier === "string" ) {
		if ( risSimple.test( qualifier ) ) {
			return jQuery.filter( qualifier, elements, not );
		}

		qualifier = jQuery.filter( qualifier, elements );
	}

	return jQuery.grep( elements, function( elem ) {
		return ( indexOf.call( qualifier, elem ) >= 0 ) !== not;
	});
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	return elems.length === 1 && elem.nodeType === 1 ?
		jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [] :
		jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
			return elem.nodeType === 1;
		}));
};

jQuery.fn.extend({
	find: function( selector ) {
		var i,
			len = this.length,
			ret = [],
			self = this;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter(function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			}) );
		}

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		// Needed because $( selector, context ) becomes $( context ).find( selector )
		ret = this.pushStack( len > 1 ? jQuery.unique( ret ) : ret );
		ret.selector = this.selector ? this.selector + " " + selector : selector;
		return ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow(this, selector || [], false) );
	},
	not: function( selector ) {
		return this.pushStack( winnow(this, selector || [], true) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
});


// Initialize a jQuery object


// A central reference to the root jQuery(document)
var rootjQuery,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,

	init = jQuery.fn.init = function( selector, context ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector[0] === "<" && selector[ selector.length - 1 ] === ">" && selector.length >= 3 ) {
				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && (match[1] || !context) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[1] ) {
					context = context instanceof jQuery ? context[0] : context;

					// scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[1],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[1] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {
							// Properties of context are called as methods if possible
							if ( jQuery.isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[2] );

					// Check parentNode to catch when Blackberry 4.6 returns
					// nodes that are no longer in the document #6963
					if ( elem && elem.parentNode ) {
						// Inject the element directly into the jQuery object
						this.length = 1;
						this[0] = elem;
					}

					this.context = document;
					this.selector = selector;
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || rootjQuery ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this.context = this[0] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( jQuery.isFunction( selector ) ) {
			return typeof rootjQuery.ready !== "undefined" ?
				rootjQuery.ready( selector ) :
				// Execute immediately if ready is not present
				selector( jQuery );
		}

		if ( selector.selector !== undefined ) {
			this.selector = selector.selector;
			this.context = selector.context;
		}

		return jQuery.makeArray( selector, this );
	};

// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;

// Initialize central reference
rootjQuery = jQuery( document );


var rparentsprev = /^(?:parents|prev(?:Until|All))/,
	// methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.extend({
	dir: function( elem, dir, until ) {
		var matched = [],
			truncate = until !== undefined;

		while ( (elem = elem[ dir ]) && elem.nodeType !== 9 ) {
			if ( elem.nodeType === 1 ) {
				if ( truncate && jQuery( elem ).is( until ) ) {
					break;
				}
				matched.push( elem );
			}
		}
		return matched;
	},

	sibling: function( n, elem ) {
		var matched = [];

		for ( ; n; n = n.nextSibling ) {
			if ( n.nodeType === 1 && n !== elem ) {
				matched.push( n );
			}
		}

		return matched;
	}
});

jQuery.fn.extend({
	has: function( target ) {
		var targets = jQuery( target, this ),
			l = targets.length;

		return this.filter(function() {
			var i = 0;
			for ( ; i < l; i++ ) {
				if ( jQuery.contains( this, targets[i] ) ) {
					return true;
				}
			}
		});
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			pos = rneedsContext.test( selectors ) || typeof selectors !== "string" ?
				jQuery( selectors, context || this.context ) :
				0;

		for ( ; i < l; i++ ) {
			for ( cur = this[i]; cur && cur !== context; cur = cur.parentNode ) {
				// Always skip document fragments
				if ( cur.nodeType < 11 && (pos ?
					pos.index(cur) > -1 :

					// Don't pass non-elements to Sizzle
					cur.nodeType === 1 &&
						jQuery.find.matchesSelector(cur, selectors)) ) {

					matched.push( cur );
					break;
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.unique( matched ) : matched );
	},

	// Determine the position of an element within
	// the matched set of elements
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// index in selector
		if ( typeof elem === "string" ) {
			return indexOf.call( jQuery( elem ), this[ 0 ] );
		}

		// Locate the position of the desired element
		return indexOf.call( this,

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[ 0 ] : elem
		);
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.unique(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter(selector)
		);
	}
});

function sibling( cur, dir ) {
	while ( (cur = cur[dir]) && cur.nodeType !== 1 ) {}
	return cur;
}

jQuery.each({
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return jQuery.dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, i, until ) {
		return jQuery.dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return jQuery.dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return jQuery.dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, i, until ) {
		return jQuery.dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, i, until ) {
		return jQuery.dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return jQuery.sibling( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return jQuery.sibling( elem.firstChild );
	},
	contents: function( elem ) {
		return elem.contentDocument || jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var matched = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			matched = jQuery.filter( selector, matched );
		}

		if ( this.length > 1 ) {
			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				jQuery.unique( matched );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				matched.reverse();
			}
		}

		return this.pushStack( matched );
	};
});
var rnotwhite = (/\S+/g);



// String to Object options format cache
var optionsCache = {};

// Convert String-formatted options into Object-formatted ones and store in cache
function createOptions( options ) {
	var object = optionsCache[ options ] = {};
	jQuery.each( options.match( rnotwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	});
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		( optionsCache[ options ] || createOptions( options ) ) :
		jQuery.extend( {}, options );

	var // Last fire value (for non-forgettable lists)
		memory,
		// Flag to know if list was already fired
		fired,
		// Flag to know if list is currently firing
		firing,
		// First callback to fire (used internally by add and fireWith)
		firingStart,
		// End of the loop when firing
		firingLength,
		// Index of currently firing callback (modified by remove if needed)
		firingIndex,
		// Actual callback list
		list = [],
		// Stack of fire calls for repeatable lists
		stack = !options.once && [],
		// Fire callbacks
		fire = function( data ) {
			memory = options.memory && data;
			fired = true;
			firingIndex = firingStart || 0;
			firingStart = 0;
			firingLength = list.length;
			firing = true;
			for ( ; list && firingIndex < firingLength; firingIndex++ ) {
				if ( list[ firingIndex ].apply( data[ 0 ], data[ 1 ] ) === false && options.stopOnFalse ) {
					memory = false; // To prevent further calls using add
					break;
				}
			}
			firing = false;
			if ( list ) {
				if ( stack ) {
					if ( stack.length ) {
						fire( stack.shift() );
					}
				} else if ( memory ) {
					list = [];
				} else {
					self.disable();
				}
			}
		},
		// Actual Callbacks object
		self = {
			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {
					// First, we save the current length
					var start = list.length;
					(function add( args ) {
						jQuery.each( args, function( _, arg ) {
							var type = jQuery.type( arg );
							if ( type === "function" ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && type !== "string" ) {
								// Inspect recursively
								add( arg );
							}
						});
					})( arguments );
					// Do we need to add the callbacks to the
					// current firing batch?
					if ( firing ) {
						firingLength = list.length;
					// With memory, if we're not firing then
					// we should call right away
					} else if ( memory ) {
						firingStart = start;
						fire( memory );
					}
				}
				return this;
			},
			// Remove a callback from the list
			remove: function() {
				if ( list ) {
					jQuery.each( arguments, function( _, arg ) {
						var index;
						while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
							list.splice( index, 1 );
							// Handle firing indexes
							if ( firing ) {
								if ( index <= firingLength ) {
									firingLength--;
								}
								if ( index <= firingIndex ) {
									firingIndex--;
								}
							}
						}
					});
				}
				return this;
			},
			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ? jQuery.inArray( fn, list ) > -1 : !!( list && list.length );
			},
			// Remove all callbacks from the list
			empty: function() {
				list = [];
				firingLength = 0;
				return this;
			},
			// Have the list do nothing anymore
			disable: function() {
				list = stack = memory = undefined;
				return this;
			},
			// Is it disabled?
			disabled: function() {
				return !list;
			},
			// Lock the list in its current state
			lock: function() {
				stack = undefined;
				if ( !memory ) {
					self.disable();
				}
				return this;
			},
			// Is it locked?
			locked: function() {
				return !stack;
			},
			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( list && ( !fired || stack ) ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					if ( firing ) {
						stack.push( args );
					} else {
						fire( args );
					}
				}
				return this;
			},
			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},
			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};


jQuery.extend({

	Deferred: function( func ) {
		var tuples = [
				// action, add listener, listener list, final state
				[ "resolve", "done", jQuery.Callbacks("once memory"), "resolved" ],
				[ "reject", "fail", jQuery.Callbacks("once memory"), "rejected" ],
				[ "notify", "progress", jQuery.Callbacks("memory") ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				then: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;
					return jQuery.Deferred(function( newDefer ) {
						jQuery.each( tuples, function( i, tuple ) {
							var fn = jQuery.isFunction( fns[ i ] ) && fns[ i ];
							// deferred[ done | fail | progress ] for forwarding actions to newDefer
							deferred[ tuple[1] ](function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && jQuery.isFunction( returned.promise ) ) {
									returned.promise()
										.done( newDefer.resolve )
										.fail( newDefer.reject )
										.progress( newDefer.notify );
								} else {
									newDefer[ tuple[ 0 ] + "With" ]( this === promise ? newDefer.promise() : this, fn ? [ returned ] : arguments );
								}
							});
						});
						fns = null;
					}).promise();
				},
				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Keep pipe for back-compat
		promise.pipe = promise.then;

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 3 ];

			// promise[ done | fail | progress ] = list.add
			promise[ tuple[1] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add(function() {
					// state = [ resolved | rejected ]
					state = stateString;

				// [ reject_list | resolve_list ].disable; progress_list.lock
				}, tuples[ i ^ 1 ][ 2 ].disable, tuples[ 2 ][ 2 ].lock );
			}

			// deferred[ resolve | reject | notify ]
			deferred[ tuple[0] ] = function() {
				deferred[ tuple[0] + "With" ]( this === deferred ? promise : this, arguments );
				return this;
			};
			deferred[ tuple[0] + "With" ] = list.fireWith;
		});

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( subordinate /* , ..., subordinateN */ ) {
		var i = 0,
			resolveValues = slice.call( arguments ),
			length = resolveValues.length,

			// the count of uncompleted subordinates
			remaining = length !== 1 || ( subordinate && jQuery.isFunction( subordinate.promise ) ) ? length : 0,

			// the master Deferred. If resolveValues consist of only a single Deferred, just use that.
			deferred = remaining === 1 ? subordinate : jQuery.Deferred(),

			// Update function for both resolve and progress values
			updateFunc = function( i, contexts, values ) {
				return function( value ) {
					contexts[ i ] = this;
					values[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( values === progressValues ) {
						deferred.notifyWith( contexts, values );
					} else if ( !( --remaining ) ) {
						deferred.resolveWith( contexts, values );
					}
				};
			},

			progressValues, progressContexts, resolveContexts;

		// add listeners to Deferred subordinates; treat others as resolved
		if ( length > 1 ) {
			progressValues = new Array( length );
			progressContexts = new Array( length );
			resolveContexts = new Array( length );
			for ( ; i < length; i++ ) {
				if ( resolveValues[ i ] && jQuery.isFunction( resolveValues[ i ].promise ) ) {
					resolveValues[ i ].promise()
						.done( updateFunc( i, resolveContexts, resolveValues ) )
						.fail( deferred.reject )
						.progress( updateFunc( i, progressContexts, progressValues ) );
				} else {
					--remaining;
				}
			}
		}

		// if we're not waiting on anything, resolve the master
		if ( !remaining ) {
			deferred.resolveWith( resolveContexts, resolveValues );
		}

		return deferred.promise();
	}
});


// The deferred used on DOM ready
var readyList;

jQuery.fn.ready = function( fn ) {
	// Add the callback
	jQuery.ready.promise().done( fn );

	return this;
};

jQuery.extend({
	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

	// Hold (or release) the ready event
	holdReady: function( hold ) {
		if ( hold ) {
			jQuery.readyWait++;
		} else {
			jQuery.ready( true );
		}
	},

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );

		// Trigger any bound ready events
		if ( jQuery.fn.triggerHandler ) {
			jQuery( document ).triggerHandler( "ready" );
			jQuery( document ).off( "ready" );
		}
	}
});

/**
 * The ready event handler and self cleanup method
 */
function completed() {
	document.removeEventListener( "DOMContentLoaded", completed, false );
	window.removeEventListener( "load", completed, false );
	jQuery.ready();
}

jQuery.ready.promise = function( obj ) {
	if ( !readyList ) {

		readyList = jQuery.Deferred();

		// Catch cases where $(document).ready() is called after the browser event has already occurred.
		// we once tried to use readyState "interactive" here, but it caused issues like the one
		// discovered by ChrisS here: http://bugs.jquery.com/ticket/12282#comment:15
		if ( document.readyState === "complete" ) {
			// Handle it asynchronously to allow scripts the opportunity to delay ready
			setTimeout( jQuery.ready );

		} else {

			// Use the handy event callback
			document.addEventListener( "DOMContentLoaded", completed, false );

			// A fallback to window.onload, that will always work
			window.addEventListener( "load", completed, false );
		}
	}
	return readyList.promise( obj );
};

// Kick off the DOM ready check even if the user does not
jQuery.ready.promise();




// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = jQuery.access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		len = elems.length,
		bulk = key == null;

	// Sets many values
	if ( jQuery.type( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			jQuery.access( elems, fn, i, key[i], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !jQuery.isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {
			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < len; i++ ) {
				fn( elems[i], key, raw ? value : value.call( elems[i], i, fn( elems[i], key ) ) );
			}
		}
	}

	return chainable ?
		elems :

		// Gets
		bulk ?
			fn.call( elems ) :
			len ? fn( elems[0], key ) : emptyGet;
};


/**
 * Determines whether an object can have data
 */
jQuery.acceptData = function( owner ) {
	// Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
	/* jshint -W018 */
	return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
};


function Data() {
	// Support: Android < 4,
	// Old WebKit does not have Object.preventExtensions/freeze method,
	// return new empty object instead with no [[set]] accessor
	Object.defineProperty( this.cache = {}, 0, {
		get: function() {
			return {};
		}
	});

	this.expando = jQuery.expando + Math.random();
}

Data.uid = 1;
Data.accepts = jQuery.acceptData;

Data.prototype = {
	key: function( owner ) {
		// We can accept data for non-element nodes in modern browsers,
		// but we should not, see #8335.
		// Always return the key for a frozen object.
		if ( !Data.accepts( owner ) ) {
			return 0;
		}

		var descriptor = {},
			// Check if the owner object already has a cache key
			unlock = owner[ this.expando ];

		// If not, create one
		if ( !unlock ) {
			unlock = Data.uid++;

			// Secure it in a non-enumerable, non-writable property
			try {
				descriptor[ this.expando ] = { value: unlock };
				Object.defineProperties( owner, descriptor );

			// Support: Android < 4
			// Fallback to a less secure definition
			} catch ( e ) {
				descriptor[ this.expando ] = unlock;
				jQuery.extend( owner, descriptor );
			}
		}

		// Ensure the cache object
		if ( !this.cache[ unlock ] ) {
			this.cache[ unlock ] = {};
		}

		return unlock;
	},
	set: function( owner, data, value ) {
		var prop,
			// There may be an unlock assigned to this node,
			// if there is no entry for this "owner", create one inline
			// and set the unlock as though an owner entry had always existed
			unlock = this.key( owner ),
			cache = this.cache[ unlock ];

		// Handle: [ owner, key, value ] args
		if ( typeof data === "string" ) {
			cache[ data ] = value;

		// Handle: [ owner, { properties } ] args
		} else {
			// Fresh assignments by object are shallow copied
			if ( jQuery.isEmptyObject( cache ) ) {
				jQuery.extend( this.cache[ unlock ], data );
			// Otherwise, copy the properties one-by-one to the cache object
			} else {
				for ( prop in data ) {
					cache[ prop ] = data[ prop ];
				}
			}
		}
		return cache;
	},
	get: function( owner, key ) {
		// Either a valid cache is found, or will be created.
		// New caches will be created and the unlock returned,
		// allowing direct access to the newly created
		// empty data object. A valid owner object must be provided.
		var cache = this.cache[ this.key( owner ) ];

		return key === undefined ?
			cache : cache[ key ];
	},
	access: function( owner, key, value ) {
		var stored;
		// In cases where either:
		//
		//   1. No key was specified
		//   2. A string key was specified, but no value provided
		//
		// Take the "read" path and allow the get method to determine
		// which value to return, respectively either:
		//
		//   1. The entire cache object
		//   2. The data stored at the key
		//
		if ( key === undefined ||
				((key && typeof key === "string") && value === undefined) ) {

			stored = this.get( owner, key );

			return stored !== undefined ?
				stored : this.get( owner, jQuery.camelCase(key) );
		}

		// [*]When the key is not a string, or both a key and value
		// are specified, set or extend (existing objects) with either:
		//
		//   1. An object of properties
		//   2. A key and value
		//
		this.set( owner, key, value );

		// Since the "set" path can have two possible entry points
		// return the expected data based on which path was taken[*]
		return value !== undefined ? value : key;
	},
	remove: function( owner, key ) {
		var i, name, camel,
			unlock = this.key( owner ),
			cache = this.cache[ unlock ];

		if ( key === undefined ) {
			this.cache[ unlock ] = {};

		} else {
			// Support array or space separated string of keys
			if ( jQuery.isArray( key ) ) {
				// If "name" is an array of keys...
				// When data is initially created, via ("key", "val") signature,
				// keys will be converted to camelCase.
				// Since there is no way to tell _how_ a key was added, remove
				// both plain key and camelCase key. #12786
				// This will only penalize the array argument path.
				name = key.concat( key.map( jQuery.camelCase ) );
			} else {
				camel = jQuery.camelCase( key );
				// Try the string as a key before any manipulation
				if ( key in cache ) {
					name = [ key, camel ];
				} else {
					// If a key with the spaces exists, use it.
					// Otherwise, create an array by matching non-whitespace
					name = camel;
					name = name in cache ?
						[ name ] : ( name.match( rnotwhite ) || [] );
				}
			}

			i = name.length;
			while ( i-- ) {
				delete cache[ name[ i ] ];
			}
		}
	},
	hasData: function( owner ) {
		return !jQuery.isEmptyObject(
			this.cache[ owner[ this.expando ] ] || {}
		);
	},
	discard: function( owner ) {
		if ( owner[ this.expando ] ) {
			delete this.cache[ owner[ this.expando ] ];
		}
	}
};
var data_priv = new Data();

var data_user = new Data();



/*
	Implementation Summary

	1. Enforce API surface and semantic compatibility with 1.9.x branch
	2. Improve the module's maintainability by reducing the storage
		paths to a single mechanism.
	3. Use the same single mechanism to support "private" and "user" data.
	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
	5. Avoid exposing implementation details on user objects (eg. expando properties)
	6. Provide a clear path for implementation upgrade to WeakMap in 2014
*/
var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /([A-Z])/g;

function dataAttr( elem, key, data ) {
	var name;

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {
		name = "data-" + key.replace( rmultiDash, "-$1" ).toLowerCase();
		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = data === "true" ? true :
					data === "false" ? false :
					data === "null" ? null :
					// Only convert to a number if it doesn't change the string
					+data + "" === data ? +data :
					rbrace.test( data ) ? jQuery.parseJSON( data ) :
					data;
			} catch( e ) {}

			// Make sure we set the data so it isn't changed later
			data_user.set( elem, key, data );
		} else {
			data = undefined;
		}
	}
	return data;
}

jQuery.extend({
	hasData: function( elem ) {
		return data_user.hasData( elem ) || data_priv.hasData( elem );
	},

	data: function( elem, name, data ) {
		return data_user.access( elem, name, data );
	},

	removeData: function( elem, name ) {
		data_user.remove( elem, name );
	},

	// TODO: Now that all calls to _data and _removeData have been replaced
	// with direct calls to data_priv methods, these can be deprecated.
	_data: function( elem, name, data ) {
		return data_priv.access( elem, name, data );
	},

	_removeData: function( elem, name ) {
		data_priv.remove( elem, name );
	}
});

jQuery.fn.extend({
	data: function( key, value ) {
		var i, name, data,
			elem = this[ 0 ],
			attrs = elem && elem.attributes;

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = data_user.get( elem );

				if ( elem.nodeType === 1 && !data_priv.get( elem, "hasDataAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE11+
						// The attrs elements can be null (#14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = jQuery.camelCase( name.slice(5) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					data_priv.set( elem, "hasDataAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each(function() {
				data_user.set( this, key );
			});
		}

		return access( this, function( value ) {
			var data,
				camelKey = jQuery.camelCase( key );

			// The calling jQuery object (element matches) is not empty
			// (and therefore has an element appears at this[ 0 ]) and the
			// `value` parameter was not undefined. An empty jQuery object
			// will result in `undefined` for elem = this[ 0 ] which will
			// throw an exception if an attempt to read a data cache is made.
			if ( elem && value === undefined ) {
				// Attempt to get data from the cache
				// with the key as-is
				data = data_user.get( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to get data from the cache
				// with the key camelized
				data = data_user.get( elem, camelKey );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to "discover" the data in
				// HTML5 custom data-* attrs
				data = dataAttr( elem, camelKey, undefined );
				if ( data !== undefined ) {
					return data;
				}

				// We tried really hard, but the data doesn't exist.
				return;
			}

			// Set the data...
			this.each(function() {
				// First, attempt to store a copy or reference of any
				// data that might've been store with a camelCased key.
				var data = data_user.get( this, camelKey );

				// For HTML5 data-* attribute interop, we have to
				// store property names with dashes in a camelCase form.
				// This might not apply to all properties...*
				data_user.set( this, camelKey, value );

				// *... In the case of properties that might _actually_
				// have dashes, we need to also store a copy of that
				// unchanged property.
				if ( key.indexOf("-") !== -1 && data !== undefined ) {
					data_user.set( this, key, value );
				}
			});
		}, null, value, arguments.length > 1, null, true );
	},

	removeData: function( key ) {
		return this.each(function() {
			data_user.remove( this, key );
		});
	}
});


jQuery.extend({
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = data_priv.get( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || jQuery.isArray( data ) ) {
					queue = data_priv.access( elem, type, jQuery.makeArray(data) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// not intended for public consumption - generates a queueHooks object, or returns the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return data_priv.get( elem, key ) || data_priv.access( elem, key, {
			empty: jQuery.Callbacks("once memory").add(function() {
				data_priv.remove( elem, [ type + "queue", key ] );
			})
		});
	}
});

jQuery.fn.extend({
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[0], type );
		}

		return data === undefined ?
			this :
			this.each(function() {
				var queue = jQuery.queue( this, type, data );

				// ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[0] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			});
	},
	dequeue: function( type ) {
		return this.each(function() {
			jQuery.dequeue( this, type );
		});
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},
	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = data_priv.get( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
});
var pnum = (/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/).source;

var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

var isHidden = function( elem, el ) {
		// isHidden might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;
		return jQuery.css( elem, "display" ) === "none" || !jQuery.contains( elem.ownerDocument, elem );
	};

var rcheckableType = (/^(?:checkbox|radio)$/i);



(function() {
	var fragment = document.createDocumentFragment(),
		div = fragment.appendChild( document.createElement( "div" ) ),
		input = document.createElement( "input" );

	// #11217 - WebKit loses check when the name is after the checked attribute
	// Support: Windows Web Apps (WWA)
	// `name` and `type` need .setAttribute for WWA
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Support: Safari 5.1, iOS 5.1, Android 4.x, Android 2.3
	// old WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Make sure textarea (and checkbox) defaultValue is properly cloned
	// Support: IE9-IE11+
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
})();
var strundefined = typeof undefined;



support.focusinBubbles = "onfocusin" in window;


var
	rkeyEvent = /^key/,
	rmouseEvent = /^(?:mouse|pointer|contextmenu)|click/,
	rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
	rtypenamespace = /^([^.]*)(?:\.(.+)|)$/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {

		var handleObjIn, eventHandle, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = data_priv.get( elem );

		// Don't attach events to noData or text/comment nodes (but allow plain objects)
		if ( !elemData ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !(events = elemData.events) ) {
			events = elemData.events = {};
		}
		if ( !(eventHandle = elemData.handle) ) {
			eventHandle = elemData.handle = function( e ) {
				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== strundefined && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply( elem, arguments ) : undefined;
			};
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnotwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[t] ) || [];
			type = origType = tmp[1];
			namespaces = ( tmp[2] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend({
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join(".")
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !(handlers = events[ type ]) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener if the special events handler returns false
				if ( !special.setup || special.setup.call( elem, data, namespaces, eventHandle ) === false ) {
					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle, false );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {

		var j, origCount, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = data_priv.hasData( elem ) && data_priv.get( elem );

		if ( !elemData || !(events = elemData.events) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnotwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[t] ) || [];
			type = origType = tmp[1];
			namespaces = ( tmp[2] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[2] && new RegExp( "(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector || selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown || special.teardown.call( elem, namespaces, elemData.handle ) === false ) {
					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			delete elemData.handle;
			data_priv.remove( elem, "events" );
		}
	},

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split(".") : [];

		cur = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf(".") >= 0 ) {
			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split(".");
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf(":") < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join(".");
		event.namespace_re = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !jQuery.isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === (elem.ownerDocument || document) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( (cur = eventPath[i++]) && !event.isPropagationStopped() ) {

			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = ( data_priv.get( cur, "events" ) || {} )[ event.type ] && data_priv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && jQuery.acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( (!special._default || special._default.apply( eventPath.pop(), data ) === false) &&
				jQuery.acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name name as the event.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && jQuery.isFunction( elem[ type ] ) && !jQuery.isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;
					elem[ type ]();
					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	dispatch: function( event ) {

		// Make a writable jQuery.Event from the native event object
		event = jQuery.event.fix( event );

		var i, j, ret, matched, handleObj,
			handlerQueue = [],
			args = slice.call( arguments ),
			handlers = ( data_priv.get( this, "events" ) || {} )[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[0] = event;
		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( (matched = handlerQueue[ i++ ]) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( (handleObj = matched.handlers[ j++ ]) && !event.isImmediatePropagationStopped() ) {

				// Triggered event must either 1) have no namespace, or
				// 2) have namespace(s) a subset or equal to those in the bound event (both can have no namespace).
				if ( !event.namespace_re || event.namespace_re.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( (jQuery.event.special[ handleObj.origType ] || {}).handle || handleObj.handler )
							.apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( (event.result = ret) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, matches, sel, handleObj,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Find delegate handlers
		// Black-hole SVG <use> instance trees (#13180)
		// Avoid non-left-click bubbling in Firefox (#3861)
		if ( delegateCount && cur.nodeType && (!event.button || event.type !== "click") ) {

			for ( ; cur !== this; cur = cur.parentNode || this ) {

				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.disabled !== true || event.type !== "click" ) {
					matches = [];
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";

						if ( matches[ sel ] === undefined ) {
							matches[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) >= 0 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matches[ sel ] ) {
							matches.push( handleObj );
						}
					}
					if ( matches.length ) {
						handlerQueue.push({ elem: cur, handlers: matches });
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		if ( delegateCount < handlers.length ) {
			handlerQueue.push({ elem: this, handlers: handlers.slice( delegateCount ) });
		}

		return handlerQueue;
	},

	// Includes some event props shared by KeyEvent and MouseEvent
	props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),

	fixHooks: {},

	keyHooks: {
		props: "char charCode key keyCode".split(" "),
		filter: function( event, original ) {

			// Add which for key events
			if ( event.which == null ) {
				event.which = original.charCode != null ? original.charCode : original.keyCode;
			}

			return event;
		}
	},

	mouseHooks: {
		props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
		filter: function( event, original ) {
			var eventDoc, doc, body,
				button = original.button;

			// Calculate pageX/Y if missing and clientX/Y available
			if ( event.pageX == null && original.clientX != null ) {
				eventDoc = event.target.ownerDocument || document;
				doc = eventDoc.documentElement;
				body = eventDoc.body;

				event.pageX = original.clientX + ( doc && doc.scrollLeft || body && body.scrollLeft || 0 ) - ( doc && doc.clientLeft || body && body.clientLeft || 0 );
				event.pageY = original.clientY + ( doc && doc.scrollTop  || body && body.scrollTop  || 0 ) - ( doc && doc.clientTop  || body && body.clientTop  || 0 );
			}

			// Add which for click: 1 === left; 2 === middle; 3 === right
			// Note: button is not normalized, so don't use it
			if ( !event.which && button !== undefined ) {
				event.which = ( button & 1 ? 1 : ( button & 2 ? 3 : ( button & 4 ? 2 : 0 ) ) );
			}

			return event;
		}
	},

	fix: function( event ) {
		if ( event[ jQuery.expando ] ) {
			return event;
		}

		// Create a writable copy of the event object and normalize some properties
		var i, prop, copy,
			type = event.type,
			originalEvent = event,
			fixHook = this.fixHooks[ type ];

		if ( !fixHook ) {
			this.fixHooks[ type ] = fixHook =
				rmouseEvent.test( type ) ? this.mouseHooks :
				rkeyEvent.test( type ) ? this.keyHooks :
				{};
		}
		copy = fixHook.props ? this.props.concat( fixHook.props ) : this.props;

		event = new jQuery.Event( originalEvent );

		i = copy.length;
		while ( i-- ) {
			prop = copy[ i ];
			event[ prop ] = originalEvent[ prop ];
		}

		// Support: Cordova 2.5 (WebKit) (#13255)
		// All events should have a target; Cordova deviceready doesn't
		if ( !event.target ) {
			event.target = document;
		}

		// Support: Safari 6.0+, Chrome < 28
		// Target should not be a text node (#504, #13143)
		if ( event.target.nodeType === 3 ) {
			event.target = event.target.parentNode;
		}

		return fixHook.filter ? fixHook.filter( event, originalEvent ) : event;
	},

	special: {
		load: {
			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		focus: {
			// Fire native event if possible so blur/focus sequence is correct
			trigger: function() {
				if ( this !== safeActiveElement() && this.focus ) {
					this.focus();
					return false;
				}
			},
			delegateType: "focusin"
		},
		blur: {
			trigger: function() {
				if ( this === safeActiveElement() && this.blur ) {
					this.blur();
					return false;
				}
			},
			delegateType: "focusout"
		},
		click: {
			// For checkbox, fire native event so checked state will be right
			trigger: function() {
				if ( this.type === "checkbox" && this.click && jQuery.nodeName( this, "input" ) ) {
					this.click();
					return false;
				}
			},

			// For cross-browser consistency, don't fire native .click() on links
			_default: function( event ) {
				return jQuery.nodeName( event.target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	},

	simulate: function( type, elem, event, bubble ) {
		// Piggyback on a donor event to simulate a different one.
		// Fake originalEvent to avoid donor's stopPropagation, but if the
		// simulated event prevents default then we do the same on the donor.
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true,
				originalEvent: {}
			}
		);
		if ( bubble ) {
			jQuery.event.trigger( e, null, elem );
		} else {
			jQuery.event.dispatch.call( elem, e );
		}
		if ( e.isDefaultPrevented() ) {
			event.preventDefault();
		}
	}
};

jQuery.removeEvent = function( elem, type, handle ) {
	if ( elem.removeEventListener ) {
		elem.removeEventListener( type, handle, false );
	}
};

jQuery.Event = function( src, props ) {
	// Allow instantiation without the 'new' keyword
	if ( !(this instanceof jQuery.Event) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&
				// Support: Android < 4.0
				src.returnValue === false ?
			returnTrue :
			returnFalse;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || jQuery.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// http://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if ( e && e.preventDefault ) {
			e.preventDefault();
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( e && e.stopPropagation ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && e.stopImmediatePropagation ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Create mouseenter/leave events using mouseover/out and event-time checks
// Support: Chrome 15+
jQuery.each({
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mousenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || (related !== target && !jQuery.contains( target, related )) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
});

// Create "bubbling" focus and blur events
// Support: Firefox, Chrome, Safari
if ( !support.focusinBubbles ) {
	jQuery.each({ focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
				jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ), true );
			};

		jQuery.event.special[ fix ] = {
			setup: function() {
				var doc = this.ownerDocument || this,
					attaches = data_priv.access( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				data_priv.access( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this,
					attaches = data_priv.access( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					data_priv.remove( doc, fix );

				} else {
					data_priv.access( doc, fix, attaches );
				}
			}
		};
	});
}

jQuery.fn.extend({

	on: function( types, selector, data, fn, /*INTERNAL*/ one ) {
		var origFn, type;

		// Types can be a map of types/handlers
		if ( typeof types === "object" ) {
			// ( types-Object, selector, data )
			if ( typeof selector !== "string" ) {
				// ( types-Object, data )
				data = data || selector;
				selector = undefined;
			}
			for ( type in types ) {
				this.on( type, selector, data, types[ type ], one );
			}
			return this;
		}

		if ( data == null && fn == null ) {
			// ( types, fn )
			fn = selector;
			data = selector = undefined;
		} else if ( fn == null ) {
			if ( typeof selector === "string" ) {
				// ( types, selector, fn )
				fn = data;
				data = undefined;
			} else {
				// ( types, data, fn )
				fn = data;
				data = selector;
				selector = undefined;
			}
		}
		if ( fn === false ) {
			fn = returnFalse;
		} else if ( !fn ) {
			return this;
		}

		if ( one === 1 ) {
			origFn = fn;
			fn = function( event ) {
				// Can use an empty set, since event contains the info
				jQuery().off( event );
				return origFn.apply( this, arguments );
			};
			// Use same guid so caller can remove using origFn
			fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
		}
		return this.each( function() {
			jQuery.event.add( this, types, fn, data, selector );
		});
	},
	one: function( types, selector, data, fn ) {
		return this.on( types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {
			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {
			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {
			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each(function() {
			jQuery.event.remove( this, types, fn, selector );
		});
	},

	trigger: function( type, data ) {
		return this.each(function() {
			jQuery.event.trigger( type, data, this );
		});
	},
	triggerHandler: function( type, data ) {
		var elem = this[0];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
});


var
	rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
	rtagName = /<([\w:]+)/,
	rhtml = /<|&#?\w+;/,
	rnoInnerhtml = /<(?:script|style|link)/i,
	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rscriptType = /^$|\/(?:java|ecma)script/i,
	rscriptTypeMasked = /^true\/(.*)/,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,

	// We have to close these tags to support XHTML (#13200)
	wrapMap = {

		// Support: IE 9
		option: [ 1, "<select multiple='multiple'>", "</select>" ],

		thead: [ 1, "<table>", "</table>" ],
		col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
		tr: [ 2, "<table><tbody>", "</tbody></table>" ],
		td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

		_default: [ 0, "", "" ]
	};

// Support: IE 9
wrapMap.optgroup = wrapMap.option;

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;

// Support: 1.x compatibility
// Manipulating tables requires a tbody
function manipulationTarget( elem, content ) {
	return jQuery.nodeName( elem, "table" ) &&
		jQuery.nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ?

		elem.getElementsByTagName("tbody")[0] ||
			elem.appendChild( elem.ownerDocument.createElement("tbody") ) :
		elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = (elem.getAttribute("type") !== null) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	var match = rscriptTypeMasked.exec( elem.type );

	if ( match ) {
		elem.type = match[ 1 ];
	} else {
		elem.removeAttribute("type");
	}

	return elem;
}

// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		data_priv.set(
			elems[ i ], "globalEval", !refElements || data_priv.get( refElements[ i ], "globalEval" )
		);
	}
}

function cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

	if ( dest.nodeType !== 1 ) {
		return;
	}

	// 1. Copy private data: events, handlers, etc.
	if ( data_priv.hasData( src ) ) {
		pdataOld = data_priv.access( src );
		pdataCur = data_priv.set( dest, pdataOld );
		events = pdataOld.events;

		if ( events ) {
			delete pdataCur.handle;
			pdataCur.events = {};

			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	}

	// 2. Copy user data
	if ( data_user.hasData( src ) ) {
		udataOld = data_user.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		data_user.set( dest, udataCur );
	}
}

function getAll( context, tag ) {
	var ret = context.getElementsByTagName ? context.getElementsByTagName( tag || "*" ) :
			context.querySelectorAll ? context.querySelectorAll( tag || "*" ) :
			[];

	return tag === undefined || tag && jQuery.nodeName( context, tag ) ?
		jQuery.merge( [ context ], ret ) :
		ret;
}

// Support: IE >= 9
function fixInput( src, dest ) {
	var nodeName = dest.nodeName.toLowerCase();

	// Fails to persist the checked state of a cloned checkbox or radio button.
	if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		dest.checked = src.checked;

	// Fails to return the selected option to the default selected state when cloning options
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

jQuery.extend({
	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = jQuery.contains( elem.ownerDocument, elem );

		// Support: IE >= 9
		// Fix Cloning issues
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elem ) ) {

			// We eschew Sizzle here for performance reasons: http://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		// Return the cloned set
		return clone;
	},

	buildFragment: function( elems, context, scripts, selection ) {
		var elem, tmp, tag, wrap, contains, j,
			fragment = context.createDocumentFragment(),
			nodes = [],
			i = 0,
			l = elems.length;

		for ( ; i < l; i++ ) {
			elem = elems[ i ];

			if ( elem || elem === 0 ) {

				// Add nodes directly
				if ( jQuery.type( elem ) === "object" ) {
					// Support: QtWebKit
					// jQuery.merge because push.apply(_, arraylike) throws
					jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

				// Convert non-html into a text node
				} else if ( !rhtml.test( elem ) ) {
					nodes.push( context.createTextNode( elem ) );

				// Convert html into DOM nodes
				} else {
					tmp = tmp || fragment.appendChild( context.createElement("div") );

					// Deserialize a standard representation
					tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
					wrap = wrapMap[ tag ] || wrapMap._default;
					tmp.innerHTML = wrap[ 1 ] + elem.replace( rxhtmlTag, "<$1></$2>" ) + wrap[ 2 ];

					// Descend through wrappers to the right content
					j = wrap[ 0 ];
					while ( j-- ) {
						tmp = tmp.lastChild;
					}

					// Support: QtWebKit
					// jQuery.merge because push.apply(_, arraylike) throws
					jQuery.merge( nodes, tmp.childNodes );

					// Remember the top-level container
					tmp = fragment.firstChild;

					// Fixes #12346
					// Support: Webkit, IE
					tmp.textContent = "";
				}
			}
		}

		// Remove wrapper from fragment
		fragment.textContent = "";

		i = 0;
		while ( (elem = nodes[ i++ ]) ) {

			// #4087 - If origin and destination elements are the same, and this is
			// that element, do not do anything
			if ( selection && jQuery.inArray( elem, selection ) !== -1 ) {
				continue;
			}

			contains = jQuery.contains( elem.ownerDocument, elem );

			// Append to fragment
			tmp = getAll( fragment.appendChild( elem ), "script" );

			// Preserve script evaluation history
			if ( contains ) {
				setGlobalEval( tmp );
			}

			// Capture executables
			if ( scripts ) {
				j = 0;
				while ( (elem = tmp[ j++ ]) ) {
					if ( rscriptType.test( elem.type || "" ) ) {
						scripts.push( elem );
					}
				}
			}
		}

		return fragment;
	},

	cleanData: function( elems ) {
		var data, elem, type, key,
			special = jQuery.event.special,
			i = 0;

		for ( ; (elem = elems[ i ]) !== undefined; i++ ) {
			if ( jQuery.acceptData( elem ) ) {
				key = elem[ data_priv.expando ];

				if ( key && (data = data_priv.cache[ key ]) ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}
					if ( data_priv.cache[ key ] ) {
						// Discard any remaining `private` data
						delete data_priv.cache[ key ];
					}
				}
			}
			// Discard any remaining `user` data
			delete data_user.cache[ elem[ data_user.expando ] ];
		}
	}
});

jQuery.fn.extend({
	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().each(function() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = value;
					}
				});
		}, null, value, arguments.length );
	},

	append: function() {
		return this.domManip( arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		});
	},

	prepend: function() {
		return this.domManip( arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		});
	},

	before: function() {
		return this.domManip( arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		});
	},

	after: function() {
		return this.domManip( arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		});
	},

	remove: function( selector, keepData /* Internal Use Only */ ) {
		var elem,
			elems = selector ? jQuery.filter( selector, this ) : this,
			i = 0;

		for ( ; (elem = elems[i]) != null; i++ ) {
			if ( !keepData && elem.nodeType === 1 ) {
				jQuery.cleanData( getAll( elem ) );
			}

			if ( elem.parentNode ) {
				if ( keepData && jQuery.contains( elem.ownerDocument, elem ) ) {
					setGlobalEval( getAll( elem, "script" ) );
				}
				elem.parentNode.removeChild( elem );
			}
		}

		return this;
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; (elem = this[i]) != null; i++ ) {
			if ( elem.nodeType === 1 ) {

				// Prevent memory leaks
				jQuery.cleanData( getAll( elem, false ) );

				// Remove any remaining nodes
				elem.textContent = "";
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map(function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		});
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined && elem.nodeType === 1 ) {
				return elem.innerHTML;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = value.replace( rxhtmlTag, "<$1></$2>" );

				try {
					for ( ; i < l; i++ ) {
						elem = this[ i ] || {};

						// Remove element nodes and prevent memory leaks
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var arg = arguments[ 0 ];

		// Make the changes, replacing each context element with the new content
		this.domManip( arguments, function( elem ) {
			arg = this.parentNode;

			jQuery.cleanData( getAll( this ) );

			if ( arg ) {
				arg.replaceChild( elem, this );
			}
		});

		// Force removal if there was no new content (e.g., from empty arguments)
		return arg && (arg.length || arg.nodeType) ? this : this.remove();
	},

	detach: function( selector ) {
		return this.remove( selector, true );
	},

	domManip: function( args, callback ) {

		// Flatten any nested arrays
		args = concat.apply( [], args );

		var fragment, first, scripts, hasScripts, node, doc,
			i = 0,
			l = this.length,
			set = this,
			iNoClone = l - 1,
			value = args[ 0 ],
			isFunction = jQuery.isFunction( value );

		// We can't cloneNode fragments that contain checked, in WebKit
		if ( isFunction ||
				( l > 1 && typeof value === "string" &&
					!support.checkClone && rchecked.test( value ) ) ) {
			return this.each(function( index ) {
				var self = set.eq( index );
				if ( isFunction ) {
					args[ 0 ] = value.call( this, index, self.html() );
				}
				self.domManip( args, callback );
			});
		}

		if ( l ) {
			fragment = jQuery.buildFragment( args, this[ 0 ].ownerDocument, false, this );
			first = fragment.firstChild;

			if ( fragment.childNodes.length === 1 ) {
				fragment = first;
			}

			if ( first ) {
				scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
				hasScripts = scripts.length;

				// Use the original fragment for the last item instead of the first because it can end up
				// being emptied incorrectly in certain situations (#8070).
				for ( ; i < l; i++ ) {
					node = fragment;

					if ( i !== iNoClone ) {
						node = jQuery.clone( node, true, true );

						// Keep references to cloned scripts for later restoration
						if ( hasScripts ) {
							// Support: QtWebKit
							// jQuery.merge because push.apply(_, arraylike) throws
							jQuery.merge( scripts, getAll( node, "script" ) );
						}
					}

					callback.call( this[ i ], node, i );
				}

				if ( hasScripts ) {
					doc = scripts[ scripts.length - 1 ].ownerDocument;

					// Reenable scripts
					jQuery.map( scripts, restoreScript );

					// Evaluate executable scripts on first document insertion
					for ( i = 0; i < hasScripts; i++ ) {
						node = scripts[ i ];
						if ( rscriptType.test( node.type || "" ) &&
							!data_priv.access( node, "globalEval" ) && jQuery.contains( doc, node ) ) {

							if ( node.src ) {
								// Optional AJAX dependency, but won't run scripts if not present
								if ( jQuery._evalUrl ) {
									jQuery._evalUrl( node.src );
								}
							} else {
								jQuery.globalEval( node.textContent.replace( rcleanScript, "" ) );
							}
						}
					}
				}
			}
		}

		return this;
	}
});

jQuery.each({
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1,
			i = 0;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Support: QtWebKit
			// .get() because push.apply(_, arraylike) throws
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
});


var iframe,
	elemdisplay = {};

/**
 * Retrieve the actual display of a element
 * @param {String} name nodeName of the element
 * @param {Object} doc Document object
 */
// Called only from within defaultDisplay
function actualDisplay( name, doc ) {
	var style,
		elem = jQuery( doc.createElement( name ) ).appendTo( doc.body ),

		// getDefaultComputedStyle might be reliably used only on attached element
		display = window.getDefaultComputedStyle && ( style = window.getDefaultComputedStyle( elem[ 0 ] ) ) ?

			// Use of this method is a temporary fix (more like optmization) until something better comes along,
			// since it was removed from specification and supported only in FF
			style.display : jQuery.css( elem[ 0 ], "display" );

	// We don't have any data stored on the element,
	// so use "detach" method as fast way to get rid of the element
	elem.detach();

	return display;
}

/**
 * Try to determine the default display value of an element
 * @param {String} nodeName
 */
function defaultDisplay( nodeName ) {
	var doc = document,
		display = elemdisplay[ nodeName ];

	if ( !display ) {
		display = actualDisplay( nodeName, doc );

		// If the simple way fails, read from inside an iframe
		if ( display === "none" || !display ) {

			// Use the already-created iframe if possible
			iframe = (iframe || jQuery( "<iframe frameborder='0' width='0' height='0'/>" )).appendTo( doc.documentElement );

			// Always write a new HTML skeleton so Webkit and Firefox don't choke on reuse
			doc = iframe[ 0 ].contentDocument;

			// Support: IE
			doc.write();
			doc.close();

			display = actualDisplay( nodeName, doc );
			iframe.detach();
		}

		// Store the correct default display
		elemdisplay[ nodeName ] = display;
	}

	return display;
}
var rmargin = (/^margin/);

var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var getStyles = function( elem ) {
		return elem.ownerDocument.defaultView.getComputedStyle( elem, null );
	};



function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,
		style = elem.style;

	computed = computed || getStyles( elem );

	// Support: IE9
	// getPropertyValue is only needed for .css('filter') in IE9, see #12537
	if ( computed ) {
		ret = computed.getPropertyValue( name ) || computed[ name ];
	}

	if ( computed ) {

		if ( ret === "" && !jQuery.contains( elem.ownerDocument, elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// Support: iOS < 6
		// A tribute to the "awesome hack by Dean Edwards"
		// iOS < 6 (at least) returns percentage for a larger set of values, but width seems to be reliably pixels
		// this is against the CSSOM draft spec: http://dev.w3.org/csswg/cssom/#resolved-values
		if ( rnumnonpx.test( ret ) && rmargin.test( name ) ) {

			// Remember the original values
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Put in the new values to get a computed value out
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Revert the changed values
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret !== undefined ?
		// Support: IE
		// IE returns zIndex value as an integer.
		ret + "" :
		ret;
}


function addGetHookIf( conditionFn, hookFn ) {
	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {
				// Hook not needed (or it's not possible to use it due to missing dependency),
				// remove it.
				// Since there are no other hooks for marginRight, remove the whole object.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.

			return (this.get = hookFn).apply( this, arguments );
		}
	};
}


(function() {
	var pixelPositionVal, boxSizingReliableVal,
		docElem = document.documentElement,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	if ( !div.style ) {
		return;
	}

	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	container.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;" +
		"position:absolute";
	container.appendChild( div );

	// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computePixelPositionAndBoxSizingReliable() {
		div.style.cssText =
			// Support: Firefox<29, Android 2.3
			// Vendor-prefix box-sizing
			"-webkit-box-sizing:border-box;-moz-box-sizing:border-box;" +
			"box-sizing:border-box;display:block;margin-top:1%;top:1%;" +
			"border:1px;padding:1px;width:4px;position:absolute";
		div.innerHTML = "";
		docElem.appendChild( container );

		var divStyle = window.getComputedStyle( div, null );
		pixelPositionVal = divStyle.top !== "1%";
		boxSizingReliableVal = divStyle.width === "4px";

		docElem.removeChild( container );
	}

	// Support: node.js jsdom
	// Don't assume that getComputedStyle is a property of the global object
	if ( window.getComputedStyle ) {
		jQuery.extend( support, {
			pixelPosition: function() {
				// This test is executed only once but we still do memoizing
				// since we can use the boxSizingReliable pre-computing.
				// No need to check if the test was already performed, though.
				computePixelPositionAndBoxSizingReliable();
				return pixelPositionVal;
			},
			boxSizingReliable: function() {
				if ( boxSizingReliableVal == null ) {
					computePixelPositionAndBoxSizingReliable();
				}
				return boxSizingReliableVal;
			},
			reliableMarginRight: function() {
				// Support: Android 2.3
				// Check if div with explicit width and no margin-right incorrectly
				// gets computed margin-right based on width of container. (#3333)
				// WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
				// This support function is only executed once so no memoizing is needed.
				var ret,
					marginDiv = div.appendChild( document.createElement( "div" ) );

				// Reset CSS: box-sizing; display; margin; border; padding
				marginDiv.style.cssText = div.style.cssText =
					// Support: Firefox<29, Android 2.3
					// Vendor-prefix box-sizing
					"-webkit-box-sizing:content-box;-moz-box-sizing:content-box;" +
					"box-sizing:content-box;display:block;margin:0;border:0;padding:0";
				marginDiv.style.marginRight = marginDiv.style.width = "0";
				div.style.width = "1px";
				docElem.appendChild( container );

				ret = !parseFloat( window.getComputedStyle( marginDiv, null ).marginRight );

				docElem.removeChild( container );

				return ret;
			}
		});
	}
})();


// A method for quickly swapping in/out CSS properties to get correct calculations.
jQuery.swap = function( elem, options, callback, args ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.apply( elem, args || [] );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};


var
	// swappable if display is none or starts with table except "table", "table-cell", or "table-caption"
	// see here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	rnumsplit = new RegExp( "^(" + pnum + ")(.*)$", "i" ),
	rrelNum = new RegExp( "^([+-])=(" + pnum + ")", "i" ),

	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	},

	cssPrefixes = [ "Webkit", "O", "Moz", "ms" ];

// return a css property mapped to a potentially vendor prefixed property
function vendorPropName( style, name ) {

	// shortcut for names that are not vendor prefixed
	if ( name in style ) {
		return name;
	}

	// check for vendor prefixed names
	var capName = name[0].toUpperCase() + name.slice(1),
		origName = name,
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in style ) {
			return name;
		}
	}

	return origName;
}

function setPositiveNumber( elem, value, subtract ) {
	var matches = rnumsplit.exec( value );
	return matches ?
		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 1 ] - ( subtract || 0 ) ) + ( matches[ 2 ] || "px" ) :
		value;
}

function augmentWidthOrHeight( elem, name, extra, isBorderBox, styles ) {
	var i = extra === ( isBorderBox ? "border" : "content" ) ?
		// If we already have the right measurement, avoid augmentation
		4 :
		// Otherwise initialize for horizontal or vertical properties
		name === "width" ? 1 : 0,

		val = 0;

	for ( ; i < 4; i += 2 ) {
		// both box models exclude margin, so add it if we want it
		if ( extra === "margin" ) {
			val += jQuery.css( elem, extra + cssExpand[ i ], true, styles );
		}

		if ( isBorderBox ) {
			// border-box includes padding, so remove it if we want content
			if ( extra === "content" ) {
				val -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// at this point, extra isn't border nor margin, so remove border
			if ( extra !== "margin" ) {
				val -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		} else {
			// at this point, extra isn't content, so add padding
			val += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// at this point, extra isn't content nor padding, so add border
			if ( extra !== "padding" ) {
				val += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	return val;
}

function getWidthOrHeight( elem, name, extra ) {

	// Start with offset property, which is equivalent to the border-box value
	var valueIsBorderBox = true,
		val = name === "width" ? elem.offsetWidth : elem.offsetHeight,
		styles = getStyles( elem ),
		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

	// some non-html elements return undefined for offsetWidth, so check for null/undefined
	// svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
	// MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
	if ( val <= 0 || val == null ) {
		// Fall back to computed then uncomputed css if necessary
		val = curCSS( elem, name, styles );
		if ( val < 0 || val == null ) {
			val = elem.style[ name ];
		}

		// Computed unit is not pixels. Stop here and return.
		if ( rnumnonpx.test(val) ) {
			return val;
		}

		// we need the check for style in case a browser which returns unreliable values
		// for getComputedStyle silently falls back to the reliable elem.style
		valueIsBorderBox = isBorderBox &&
			( support.boxSizingReliable() || val === elem.style[ name ] );

		// Normalize "", auto, and prepare for extra
		val = parseFloat( val ) || 0;
	}

	// use the active box-sizing model to add/subtract irrelevant styles
	return ( val +
		augmentWidthOrHeight(
			elem,
			name,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles
		)
	) + "px";
}

function showHide( elements, show ) {
	var display, elem, hidden,
		values = [],
		index = 0,
		length = elements.length;

	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		values[ index ] = data_priv.get( elem, "olddisplay" );
		display = elem.style.display;
		if ( show ) {
			// Reset the inline display of this element to learn if it is
			// being hidden by cascaded rules or not
			if ( !values[ index ] && display === "none" ) {
				elem.style.display = "";
			}

			// Set elements which have been overridden with display: none
			// in a stylesheet to whatever the default browser style is
			// for such an element
			if ( elem.style.display === "" && isHidden( elem ) ) {
				values[ index ] = data_priv.access( elem, "olddisplay", defaultDisplay(elem.nodeName) );
			}
		} else {
			hidden = isHidden( elem );

			if ( display !== "none" || !hidden ) {
				data_priv.set( elem, "olddisplay", hidden ? display : jQuery.css( elem, "display" ) );
			}
		}
	}

	// Set the display of most of the elements in a second loop
	// to avoid the constant reflow
	for ( index = 0; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}
		if ( !show || elem.style.display === "none" || elem.style.display === "" ) {
			elem.style.display = show ? values[ index ] || "" : "none";
		}
	}

	return elements;
}

jQuery.extend({
	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {
					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {
		// normalize float css property
		"float": "cssFloat"
	},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {
		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = jQuery.camelCase( name ),
			style = elem.style;

		name = jQuery.cssProps[ origName ] || ( jQuery.cssProps[ origName ] = vendorPropName( style, origName ) );

		// gets hook for the prefixed version
		// followed by the unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// convert relative number strings (+= or -=) to relative numbers. #7345
			if ( type === "string" && (ret = rrelNum.exec( value )) ) {
				value = ( ret[1] + 1 ) * ret[2] + parseFloat( jQuery.css( elem, name ) );
				// Fixes bug #9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set. See: #7116
			if ( value == null || value !== value ) {
				return;
			}

			// If a number was passed in, add 'px' to the (except for certain CSS properties)
			if ( type === "number" && !jQuery.cssNumber[ origName ] ) {
				value += "px";
			}

			// Fixes #8908, it can be done more correctly by specifying setters in cssHooks,
			// but it would mean to define eight (for every problematic property) identical functions
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !("set" in hooks) || (value = hooks.set( elem, value, extra )) !== undefined ) {
				style[ name ] = value;
			}

		} else {
			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks && (ret = hooks.get( elem, false, extra )) !== undefined ) {
				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = jQuery.camelCase( name );

		// Make sure that we're working with the right name
		name = jQuery.cssProps[ origName ] || ( jQuery.cssProps[ origName ] = vendorPropName( elem.style, origName ) );

		// gets hook for the prefixed version
		// followed by the unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		//convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Return, converting to number if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || jQuery.isNumeric( num ) ? num || 0 : val;
		}
		return val;
	}
});

jQuery.each([ "height", "width" ], function( i, name ) {
	jQuery.cssHooks[ name ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {
				// certain elements can have dimension info if we invisibly show them
				// however, it must have a current display style that would benefit from this
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) && elem.offsetWidth === 0 ?
					jQuery.swap( elem, cssShow, function() {
						return getWidthOrHeight( elem, name, extra );
					}) :
					getWidthOrHeight( elem, name, extra );
			}
		},

		set: function( elem, value, extra ) {
			var styles = extra && getStyles( elem );
			return setPositiveNumber( elem, value, extra ?
				augmentWidthOrHeight(
					elem,
					name,
					extra,
					jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
					styles
				) : 0
			);
		}
	};
});

// Support: Android 2.3
jQuery.cssHooks.marginRight = addGetHookIf( support.reliableMarginRight,
	function( elem, computed ) {
		if ( computed ) {
			// WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
			// Work around by temporarily setting element display to inline-block
			return jQuery.swap( elem, { "display": "inline-block" },
				curCSS, [ elem, "marginRight" ] );
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each({
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// assumes a single number if not a string
				parts = typeof value === "string" ? value.split(" ") : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( !rmargin.test( prefix ) ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
});

jQuery.fn.extend({
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( jQuery.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	},
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each(function() {
			if ( isHidden( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		});
	}
});


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || "swing";
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			if ( tween.elem[ tween.prop ] != null &&
				(!tween.elem.style || tween.elem.style[ tween.prop ] == null) ) {
				return tween.elem[ tween.prop ];
			}

			// passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails
			// so, simple values such as "10px" are parsed to Float.
			// complex values such as "rotate(1rad)" are returned as is.
			result = jQuery.css( tween.elem, tween.prop, "" );
			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {
			// use step hook for back compat - use cssHook if its there - use .style if its
			// available and use plain properties where available
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.style && ( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null || jQuery.cssHooks[ tween.prop ] ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE9
// Panic based approach to setting things on disconnected nodes

Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	}
};

jQuery.fx = Tween.prototype.init;

// Back Compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, timerId,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rfxnum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" ),
	rrun = /queueHooks$/,
	animationPrefilters = [ defaultPrefilter ],
	tweeners = {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value ),
				target = tween.cur(),
				parts = rfxnum.exec( value ),
				unit = parts && parts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

				// Starting value computation is required for potential unit mismatches
				start = ( jQuery.cssNumber[ prop ] || unit !== "px" && +target ) &&
					rfxnum.exec( jQuery.css( tween.elem, prop ) ),
				scale = 1,
				maxIterations = 20;

			if ( start && start[ 3 ] !== unit ) {
				// Trust units reported by jQuery.css
				unit = unit || start[ 3 ];

				// Make sure we update the tween properties later on
				parts = parts || [];

				// Iteratively approximate from a nonzero starting point
				start = +target || 1;

				do {
					// If previous iteration zeroed out, double until we get *something*
					// Use a string for doubling factor so we don't accidentally see scale as unchanged below
					scale = scale || ".5";

					// Adjust and apply
					start = start / scale;
					jQuery.style( tween.elem, prop, start + unit );

				// Update scale, tolerating zero or NaN from tween.cur()
				// And breaking the loop if scale is unchanged or perfect, or if we've just had enough
				} while ( scale !== (scale = tween.cur() / target) && scale !== 1 && --maxIterations );
			}

			// Update tween properties
			if ( parts ) {
				start = tween.start = +start || +target || 0;
				tween.unit = unit;
				// If a +=/-= token was provided, we're doing a relative animation
				tween.end = parts[ 1 ] ?
					start + ( parts[ 1 ] + 1 ) * parts[ 2 ] :
					+parts[ 2 ];
			}

			return tween;
		} ]
	};

// Animations created synchronously will run synchronously
function createFxNow() {
	setTimeout(function() {
		fxNow = undefined;
	});
	return ( fxNow = jQuery.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		i = 0,
		attrs = { height: type };

	// if we include width, step value is 1 to do all cssExpand values,
	// if we don't include width, step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4 ; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( tweeners[ prop ] || [] ).concat( tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( (tween = collection[ index ].call( animation, prop, value )) ) {

			// we're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	/* jshint validthis: true */
	var prop, value, toggle, tween, hooks, oldfire, display, checkDisplay,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHidden( elem ),
		dataShow = data_priv.get( elem, "fxshow" );

	// handle queue: false promises
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always(function() {
			// doing this makes sure that the complete handler will be called
			// before this completes
			anim.always(function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			});
		});
	}

	// height/width overflow pass
	if ( elem.nodeType === 1 && ( "height" in props || "width" in props ) ) {
		// Make sure that nothing sneaks out
		// Record all 3 overflow attributes because IE9-10 do not
		// change the overflow attribute when overflowX and
		// overflowY are set to the same value
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Set display property to inline-block for height/width
		// animations on inline elements that are having width/height animated
		display = jQuery.css( elem, "display" );

		// Test default display if display is currently "none"
		checkDisplay = display === "none" ?
			data_priv.get( elem, "olddisplay" ) || defaultDisplay( elem.nodeName ) : display;

		if ( checkDisplay === "inline" && jQuery.css( elem, "float" ) === "none" ) {
			style.display = "inline-block";
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		anim.always(function() {
			style.overflow = opts.overflow[ 0 ];
			style.overflowX = opts.overflow[ 1 ];
			style.overflowY = opts.overflow[ 2 ];
		});
	}

	// show/hide pass
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.exec( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// If there is dataShow left over from a stopped hide or show and we are going to proceed with show, we should pretend to be hidden
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );

		// Any non-fx value stops us from restoring the original display value
		} else {
			display = undefined;
		}
	}

	if ( !jQuery.isEmptyObject( orig ) ) {
		if ( dataShow ) {
			if ( "hidden" in dataShow ) {
				hidden = dataShow.hidden;
			}
		} else {
			dataShow = data_priv.access( elem, "fxshow", {} );
		}

		// store state if its toggle - enables .stop().toggle() to "reverse"
		if ( toggle ) {
			dataShow.hidden = !hidden;
		}
		if ( hidden ) {
			jQuery( elem ).show();
		} else {
			anim.done(function() {
				jQuery( elem ).hide();
			});
		}
		anim.done(function() {
			var prop;

			data_priv.remove( elem, "fxshow" );
			for ( prop in orig ) {
				jQuery.style( elem, prop, orig[ prop ] );
			}
		});
		for ( prop in orig ) {
			tween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );

			if ( !( prop in dataShow ) ) {
				dataShow[ prop ] = tween.start;
				if ( hidden ) {
					tween.end = tween.start;
					tween.start = prop === "width" || prop === "height" ? 1 : 0;
				}
			}
		}

	// If this is a noop like .hide().hide(), restore an overwritten display value
	} else if ( (display === "none" ? defaultDisplay( elem.nodeName ) : display) === "inline" ) {
		style.display = display;
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = jQuery.camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( jQuery.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// not quite $.extend, this wont overwrite keys already present.
			// also - reusing 'index' from above because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = animationPrefilters.length,
		deferred = jQuery.Deferred().always( function() {
			// don't match elem in the :animated selector
			delete tick.elem;
		}),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),
				// archaic crash bug won't allow us to use 1 - ( 0.5 || 0 ) (#12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length ; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ]);

			if ( percent < 1 && length ) {
				return remaining;
			} else {
				deferred.resolveWith( elem, [ animation ] );
				return false;
			}
		},
		animation = deferred.promise({
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, { specialEasing: {} }, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
						animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,
					// if we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length ; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// resolve when we played the last frame
				// otherwise, reject
				if ( gotoEnd ) {
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		}),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length ; index++ ) {
		result = animationPrefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( jQuery.isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		})
	);

	// attach callbacks from options
	return animation.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );
}

jQuery.Animation = jQuery.extend( Animation, {

	tweener: function( props, callback ) {
		if ( jQuery.isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.split(" ");
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length ; index++ ) {
			prop = props[ index ];
			tweeners[ prop ] = tweeners[ prop ] || [];
			tweeners[ prop ].unshift( callback );
		}
	},

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			animationPrefilters.unshift( callback );
		} else {
			animationPrefilters.push( callback );
		}
	}
});

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			jQuery.isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !jQuery.isFunction( easing ) && easing
	};

	opt.duration = jQuery.fx.off ? 0 : typeof opt.duration === "number" ? opt.duration :
		opt.duration in jQuery.fx.speeds ? jQuery.fx.speeds[ opt.duration ] : jQuery.fx.speeds._default;

	// normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( jQuery.isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend({
	fadeTo: function( speed, to, easing, callback ) {

		// show any hidden elements after setting opacity to 0
		return this.filter( isHidden ).css( "opacity", 0 ).show()

			// animate to the value specified
			.end().animate({ opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {
				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || data_priv.get( this, "finish" ) ) {
					anim.stop( true );
				}
			};
			doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue && type !== false ) {
			this.queue( type || "fx", [] );
		}

		return this.each(function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = data_priv.get( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && (type == null || timers[ index ].queue === type) ) {
					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// start the next in the queue if the last step wasn't forced
			// timers currently will call their complete callbacks, which will dequeue
			// but only if they were gotoEnd
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		});
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each(function() {
			var index,
				data = data_priv.get( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// enable finishing flag on private data
			data.finish = true;

			// empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// turn off finishing flag
			delete data.finish;
		});
	}
});

jQuery.each([ "toggle", "show", "hide" ], function( i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
});

// Generate shortcuts for custom animations
jQuery.each({
	slideDown: genFx("show"),
	slideUp: genFx("hide"),
	slideToggle: genFx("toggle"),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
});

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		i = 0,
		timers = jQuery.timers;

	fxNow = jQuery.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];
		// Checks the timer has not already been removed
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	if ( timer() ) {
		jQuery.fx.start();
	} else {
		jQuery.timers.pop();
	}
};

jQuery.fx.interval = 13;

jQuery.fx.start = function() {
	if ( !timerId ) {
		timerId = setInterval( jQuery.fx.tick, jQuery.fx.interval );
	}
};

jQuery.fx.stop = function() {
	clearInterval( timerId );
	timerId = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,
	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
// http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = setTimeout( next, time );
		hooks.stop = function() {
			clearTimeout( timeout );
		};
	});
};


(function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

	// Support: iOS 5.1, Android 4.x, Android 2.3
	// Check the default checkbox/radio value ("" on old WebKit; "on" elsewhere)
	support.checkOn = input.value !== "";

	// Must access the parent to make an option select properly
	// Support: IE9, IE10
	support.optSelected = opt.selected;

	// Make sure that the options inside disabled selects aren't marked as disabled
	// (WebKit marks them as disabled)
	select.disabled = true;
	support.optDisabled = !opt.disabled;

	// Check if an input maintains its value after becoming a radio
	// Support: IE9, IE10
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
})();


var nodeHook, boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend({
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each(function() {
			jQuery.removeAttr( this, name );
		});
	}
});

jQuery.extend({
	attr: function( elem, name, value ) {
		var hooks, ret,
			nType = elem.nodeType;

		// don't get/set attributes on text, comment and attribute nodes
		if ( !elem || nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === strundefined ) {
			return jQuery.prop( elem, name, value );
		}

		// All attributes are lowercase
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			name = name.toLowerCase();
			hooks = jQuery.attrHooks[ name ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : nodeHook );
		}

		if ( value !== undefined ) {

			if ( value === null ) {
				jQuery.removeAttr( elem, name );

			} else if ( hooks && "set" in hooks && (ret = hooks.set( elem, value, name )) !== undefined ) {
				return ret;

			} else {
				elem.setAttribute( name, value + "" );
				return value;
			}

		} else if ( hooks && "get" in hooks && (ret = hooks.get( elem, name )) !== null ) {
			return ret;

		} else {
			ret = jQuery.find.attr( elem, name );

			// Non-existent attributes return null, we normalize to undefined
			return ret == null ?
				undefined :
				ret;
		}
	},

	removeAttr: function( elem, value ) {
		var name, propName,
			i = 0,
			attrNames = value && value.match( rnotwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( (name = attrNames[i++]) ) {
				propName = jQuery.propFix[ name ] || name;

				// Boolean attributes get special treatment (#10870)
				if ( jQuery.expr.match.bool.test( name ) ) {
					// Set corresponding property to false
					elem[ propName ] = false;
				}

				elem.removeAttribute( name );
			}
		}
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					jQuery.nodeName( elem, "input" ) ) {
					// Setting the type on a radio button after the value resets the value in IE6-9
					// Reset value to default in case type is set after value during creation
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	}
});

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {
			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};
jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle;
		if ( !isXML ) {
			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ name ];
			attrHandle[ name ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				name.toLowerCase() :
				null;
			attrHandle[ name ] = handle;
		}
		return ret;
	};
});




var rfocusable = /^(?:input|select|textarea|button)$/i;

jQuery.fn.extend({
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each(function() {
			delete this[ jQuery.propFix[ name ] || name ];
		});
	}
});

jQuery.extend({
	propFix: {
		"for": "htmlFor",
		"class": "className"
	},

	prop: function( elem, name, value ) {
		var ret, hooks, notxml,
			nType = elem.nodeType;

		// don't get/set properties on text, comment and attribute nodes
		if ( !elem || nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		notxml = nType !== 1 || !jQuery.isXMLDoc( elem );

		if ( notxml ) {
			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			return hooks && "set" in hooks && (ret = hooks.set( elem, value, name )) !== undefined ?
				ret :
				( elem[ name ] = value );

		} else {
			return hooks && "get" in hooks && (ret = hooks.get( elem, name )) !== null ?
				ret :
				elem[ name ];
		}
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {
				return elem.hasAttribute( "tabindex" ) || rfocusable.test( elem.nodeName ) || elem.href ?
					elem.tabIndex :
					-1;
			}
		}
	}
});

// Support: IE9+
// Selectedness for an option in an optgroup can be inaccurate
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {
			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		}
	};
}

jQuery.each([
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
});




var rclass = /[\t\r\n\f]/g;

jQuery.fn.extend({
	addClass: function( value ) {
		var classes, elem, cur, clazz, j, finalValue,
			proceed = typeof value === "string" && value,
			i = 0,
			len = this.length;

		if ( jQuery.isFunction( value ) ) {
			return this.each(function( j ) {
				jQuery( this ).addClass( value.call( this, j, this.className ) );
			});
		}

		if ( proceed ) {
			// The disjunction here is for better compressibility (see removeClass)
			classes = ( value || "" ).match( rnotwhite ) || [];

			for ( ; i < len; i++ ) {
				elem = this[ i ];
				cur = elem.nodeType === 1 && ( elem.className ?
					( " " + elem.className + " " ).replace( rclass, " " ) :
					" "
				);

				if ( cur ) {
					j = 0;
					while ( (clazz = classes[j++]) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// only assign if different to avoid unneeded rendering.
					finalValue = jQuery.trim( cur );
					if ( elem.className !== finalValue ) {
						elem.className = finalValue;
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, clazz, j, finalValue,
			proceed = arguments.length === 0 || typeof value === "string" && value,
			i = 0,
			len = this.length;

		if ( jQuery.isFunction( value ) ) {
			return this.each(function( j ) {
				jQuery( this ).removeClass( value.call( this, j, this.className ) );
			});
		}
		if ( proceed ) {
			classes = ( value || "" ).match( rnotwhite ) || [];

			for ( ; i < len; i++ ) {
				elem = this[ i ];
				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 && ( elem.className ?
					( " " + elem.className + " " ).replace( rclass, " " ) :
					""
				);

				if ( cur ) {
					j = 0;
					while ( (clazz = classes[j++]) ) {
						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) >= 0 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// only assign if different to avoid unneeded rendering.
					finalValue = value ? jQuery.trim( cur ) : "";
					if ( elem.className !== finalValue ) {
						elem.className = finalValue;
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value;

		if ( typeof stateVal === "boolean" && type === "string" ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( jQuery.isFunction( value ) ) {
			return this.each(function( i ) {
				jQuery( this ).toggleClass( value.call(this, i, this.className, stateVal), stateVal );
			});
		}

		return this.each(function() {
			if ( type === "string" ) {
				// toggle individual class names
				var className,
					i = 0,
					self = jQuery( this ),
					classNames = value.match( rnotwhite ) || [];

				while ( (className = classNames[ i++ ]) ) {
					// check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( type === strundefined || type === "boolean" ) {
				if ( this.className ) {
					// store className if set
					data_priv.set( this, "__className__", this.className );
				}

				// If the element has a class name or if we're passed "false",
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				this.className = this.className || value === false ? "" : data_priv.get( this, "__className__" ) || "";
			}
		});
	},

	hasClass: function( selector ) {
		var className = " " + selector + " ",
			i = 0,
			l = this.length;
		for ( ; i < l; i++ ) {
			if ( this[i].nodeType === 1 && (" " + this[i].className + " ").replace(rclass, " ").indexOf( className ) >= 0 ) {
				return true;
			}
		}

		return false;
	}
});




var rreturn = /\r/g;

jQuery.fn.extend({
	val: function( value ) {
		var hooks, ret, isFunction,
			elem = this[0];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] || jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks && "get" in hooks && (ret = hooks.get( elem, "value" )) !== undefined ) {
					return ret;
				}

				ret = elem.value;

				return typeof ret === "string" ?
					// handle most common string cases
					ret.replace(rreturn, "") :
					// handle cases where value is null/undef or number
					ret == null ? "" : ret;
			}

			return;
		}

		isFunction = jQuery.isFunction( value );

		return this.each(function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( isFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( jQuery.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				});
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !("set" in hooks) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		});
	}
});

jQuery.extend({
	valHooks: {
		option: {
			get: function( elem ) {
				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :
					// Support: IE10-11+
					// option.text throws exceptions (#14686, #14858)
					jQuery.trim( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one" || index < 0,
					values = one ? null : [],
					max = one ? index + 1 : options.length,
					i = index < 0 ?
						max :
						one ? index : 0;

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// IE6-9 doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&
							// Don't return options that are disabled or in a disabled optgroup
							( support.optDisabled ? !option.disabled : option.getAttribute( "disabled" ) === null ) &&
							( !option.parentNode.disabled || !jQuery.nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];
					if ( (option.selected = jQuery.inArray( option.value, values ) >= 0) ) {
						optionSet = true;
					}
				}

				// force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
});

// Radios and checkboxes getter/setter
jQuery.each([ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( jQuery.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery(elem).val(), value ) >= 0 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			// Support: Webkit
			// "" is returned instead of "on" if a value isn't specified
			return elem.getAttribute("value") === null ? "on" : elem.value;
		};
	}
});




// Return jQuery for attributes-only inclusion


jQuery.each( ("blur focus focusin focusout load resize scroll unload click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup error contextmenu").split(" "), function( i, name ) {

	// Handle event binding
	jQuery.fn[ name ] = function( data, fn ) {
		return arguments.length > 0 ?
			this.on( name, null, data, fn ) :
			this.trigger( name );
	};
});

jQuery.fn.extend({
	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	},

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {
		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ? this.off( selector, "**" ) : this.off( types, selector || "**", fn );
	}
});


var nonce = jQuery.now();

var rquery = (/\?/);



// Support: Android 2.3
// Workaround failure to string-cast null input
jQuery.parseJSON = function( data ) {
	return JSON.parse( data + "" );
};


// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml, tmp;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

	// Support: IE9
	try {
		tmp = new DOMParser();
		xml = tmp.parseFromString( data, "text/xml" );
	} catch ( e ) {
		xml = undefined;
	}

	if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
		jQuery.error( "Invalid XML: " + data );
	}
	return xml;
};


var
	// Document location
	ajaxLocParts,
	ajaxLocation,

	rhash = /#.*$/,
	rts = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,
	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,
	rurl = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat("*");

// #8138, IE may throw an exception when accessing
// a field from window.location if document.domain has been set
try {
	ajaxLocation = location.href;
} catch( e ) {
	// Use the href attribute of an A element
	// since IE will modify it given document.location
	ajaxLocation = document.createElement( "a" );
	ajaxLocation.href = "";
	ajaxLocation = ajaxLocation.href;
}

// Segment location into parts
ajaxLocParts = rurl.exec( ajaxLocation.toLowerCase() ) || [];

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnotwhite ) || [];

		if ( jQuery.isFunction( func ) ) {
			// For each dataType in the dataTypeExpression
			while ( (dataType = dataTypes[i++]) ) {
				// Prepend if requested
				if ( dataType[0] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					(structure[ dataType ] = structure[ dataType ] || []).unshift( func );

				// Otherwise append
				} else {
					(structure[ dataType ] = structure[ dataType ] || []).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" && !seekingTransport && !inspected[ dataTypeOrTransport ] ) {
				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		});
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || (deep = {}) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader("Content-Type");
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {
		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[0] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}
		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},
		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

		// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {
								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s[ "throws" ] ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return { state: "parsererror", error: conv ? e : "No conversion from " + prev + " to " + current };
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend({

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: ajaxLocation,
		type: "GET",
		isLocal: rlocalProtocol.test( ajaxLocParts[ 1 ] ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",
		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /xml/,
			html: /html/,
			json: /json/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": jQuery.parseJSON,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var transport,
			// URL without anti-cache param
			cacheURL,
			// Response headers
			responseHeadersString,
			responseHeaders,
			// timeout handle
			timeoutTimer,
			// Cross-domain detection vars
			parts,
			// To know if global events are to be dispatched
			fireGlobals,
			// Loop variable
			i,
			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),
			// Callbacks context
			callbackContext = s.context || s,
			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context && ( callbackContext.nodeType || callbackContext.jquery ) ?
				jQuery( callbackContext ) :
				jQuery.event,
			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks("once memory"),
			// Status-dependent callbacks
			statusCode = s.statusCode || {},
			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},
			// The jqXHR state
			state = 0,
			// Default abort message
			strAbort = "canceled",
			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( state === 2 ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( (match = rheaders.exec( responseHeadersString )) ) {
								responseHeaders[ match[1].toLowerCase() ] = match[ 2 ];
							}
						}
						match = responseHeaders[ key.toLowerCase() ];
					}
					return match == null ? null : match;
				},

				// Raw string
				getAllResponseHeaders: function() {
					return state === 2 ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					var lname = name.toLowerCase();
					if ( !state ) {
						name = requestHeadersNames[ lname ] = requestHeadersNames[ lname ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( !state ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( state < 2 ) {
							for ( code in map ) {
								// Lazy-add the new callback in a way that preserves old ones
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						} else {
							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR ).complete = completeDeferred.add;
		jqXHR.success = jqXHR.done;
		jqXHR.error = jqXHR.fail;

		// Remove hash character (#7531: and string promotion)
		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || ajaxLocation ) + "" ).replace( rhash, "" )
			.replace( rprotocol, ajaxLocParts[ 1 ] + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = jQuery.trim( s.dataType || "*" ).toLowerCase().match( rnotwhite ) || [ "" ];

		// A cross-domain request is in order when we have a protocol:host:port mismatch
		if ( s.crossDomain == null ) {
			parts = rurl.exec( s.url.toLowerCase() );
			s.crossDomain = !!( parts &&
				( parts[ 1 ] !== ajaxLocParts[ 1 ] || parts[ 2 ] !== ajaxLocParts[ 2 ] ||
					( parts[ 3 ] || ( parts[ 1 ] === "http:" ? "80" : "443" ) ) !==
						( ajaxLocParts[ 3 ] || ( ajaxLocParts[ 1 ] === "http:" ? "80" : "443" ) ) )
			);
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( state === 2 ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		fireGlobals = s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger("ajaxStart");
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		cacheURL = s.url;

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// If data is available, append data to url
			if ( s.data ) {
				cacheURL = ( s.url += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data );
				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add anti-cache in url if needed
			if ( s.cache === false ) {
				s.url = rts.test( cacheURL ) ?

					// If there is already a '_' parameter, set its value
					cacheURL.replace( rts, "$1_=" + nonce++ ) :

					// Otherwise add one to the end
					cacheURL + ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + nonce++;
			}
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[0] ] ?
				s.accepts[ s.dataTypes[0] ] + ( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend && ( s.beforeSend.call( callbackContext, jqXHR, s ) === false || state === 2 ) ) {
			// Abort if not done already and return
			return jqXHR.abort();
		}

		// aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		for ( i in { success: 1, error: 1, complete: 1 } ) {
			jqXHR[ i ]( s[ i ] );
		}

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}
			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = setTimeout(function() {
					jqXHR.abort("timeout");
				}, s.timeout );
			}

			try {
				state = 1;
				transport.send( requestHeaders, done );
			} catch ( e ) {
				// Propagate exception as error if not done
				if ( state < 2 ) {
					done( -1, e );
				// Simply rethrow otherwise
				} else {
					throw e;
				}
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Called once
			if ( state === 2 ) {
				return;
			}

			// State is "done" now
			state = 2;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader("Last-Modified");
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader("etag");
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {
				// We extract error from statusText
				// then normalize statusText and status for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );
				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger("ajaxStop");
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
});

jQuery.each( [ "get", "post" ], function( i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {
		// shift arguments if data argument was omitted
		if ( jQuery.isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		return jQuery.ajax({
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		});
	};
});

// Attach a bunch of functions for handling common AJAX events
jQuery.each( [ "ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend" ], function( i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
});


jQuery._evalUrl = function( url ) {
	return jQuery.ajax({
		url: url,
		type: "GET",
		dataType: "script",
		async: false,
		global: false,
		"throws": true
	});
};


jQuery.fn.extend({
	wrapAll: function( html ) {
		var wrap;

		if ( jQuery.isFunction( html ) ) {
			return this.each(function( i ) {
				jQuery( this ).wrapAll( html.call(this, i) );
			});
		}

		if ( this[ 0 ] ) {

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map(function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			}).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( jQuery.isFunction( html ) ) {
			return this.each(function( i ) {
				jQuery( this ).wrapInner( html.call(this, i) );
			});
		}

		return this.each(function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		});
	},

	wrap: function( html ) {
		var isFunction = jQuery.isFunction( html );

		return this.each(function( i ) {
			jQuery( this ).wrapAll( isFunction ? html.call(this, i) : html );
		});
	},

	unwrap: function() {
		return this.parent().each(function() {
			if ( !jQuery.nodeName( this, "body" ) ) {
				jQuery( this ).replaceWith( this.childNodes );
			}
		}).end();
	}
});


jQuery.expr.filters.hidden = function( elem ) {
	// Support: Opera <= 12.12
	// Opera reports offsetWidths and offsetHeights less than zero on some elements
	return elem.offsetWidth <= 0 && elem.offsetHeight <= 0;
};
jQuery.expr.filters.visible = function( elem ) {
	return !jQuery.expr.filters.hidden( elem );
};




var r20 = /%20/g,
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( jQuery.isArray( obj ) ) {
		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {
				// Treat each array item as a scalar.
				add( prefix, v );

			} else {
				// Item is non-scalar (array or object), encode its numeric index.
				buildParams( prefix + "[" + ( typeof v === "object" ? i : "" ) + "]", v, traditional, add );
			}
		});

	} else if ( !traditional && jQuery.type( obj ) === "object" ) {
		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {
		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, value ) {
			// If value is a function, invoke it and return its value
			value = jQuery.isFunction( value ) ? value() : ( value == null ? "" : value );
			s[ s.length ] = encodeURIComponent( key ) + "=" + encodeURIComponent( value );
		};

	// Set traditional to true for jQuery <= 1.3.2 behavior.
	if ( traditional === undefined ) {
		traditional = jQuery.ajaxSettings && jQuery.ajaxSettings.traditional;
	}

	// If an array was passed in, assume that it is an array of form elements.
	if ( jQuery.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {
		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		});

	} else {
		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" ).replace( r20, "+" );
};

jQuery.fn.extend({
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map(function() {
			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		})
		.filter(function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		})
		.map(function( i, elem ) {
			var val = jQuery( this ).val();

			return val == null ?
				null :
				jQuery.isArray( val ) ?
					jQuery.map( val, function( val ) {
						return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
					}) :
					{ name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		}).get();
	}
});


jQuery.ajaxSettings.xhr = function() {
	try {
		return new XMLHttpRequest();
	} catch( e ) {}
};

var xhrId = 0,
	xhrCallbacks = {},
	xhrSuccessStatus = {
		// file protocol always yields status code 0, assume 200
		0: 200,
		// Support: IE9
		// #1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

// Support: IE9
// Open requests must be manually aborted on unload (#5280)
if ( window.ActiveXObject ) {
	jQuery( window ).on( "unload", function() {
		for ( var key in xhrCallbacks ) {
			xhrCallbacks[ key ]();
		}
	});
}

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport(function( options ) {
	var callback;

	// Cross domain only allowed if supported through XMLHttpRequest
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i,
					xhr = options.xhr(),
					id = ++xhrId;

				xhr.open( options.type, options.url, options.async, options.username, options.password );

				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}

				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers["X-Requested-With"] ) {
					headers["X-Requested-With"] = "XMLHttpRequest";
				}

				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}

				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							delete xhrCallbacks[ id ];
							callback = xhr.onload = xhr.onerror = null;

							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {
								complete(
									// file: protocol always yields status 0; see #8605, #14207
									xhr.status,
									xhr.statusText
								);
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,
									// Support: IE9
									// Accessing binary-data responseText throws an exception
									// (#11426)
									typeof xhr.responseText === "string" ? {
										text: xhr.responseText
									} : undefined,
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Listen to events
				xhr.onload = callback();
				xhr.onerror = callback("error");

				// Create the abort callback
				callback = xhrCallbacks[ id ] = callback("abort");

				try {
					// Do send the request (this may raise an exception)
					xhr.send( options.hasContent && options.data || null );
				} catch ( e ) {
					// #14683: Only rethrow if this hasn't been notified as an error yet
					if ( callback ) {
						throw e;
					}
				}
			},

			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
});




// Install script dataType
jQuery.ajaxSetup({
	accepts: {
		script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /(?:java|ecma)script/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
});

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
});

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {
	// This transport only deals with cross domain requests
	if ( s.crossDomain ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery("<script>").prop({
					async: true,
					charset: s.scriptCharset,
					src: s.url
				}).on(
					"load error",
					callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					}
				);
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
});




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup({
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
		this[ callback ] = true;
		return callback;
	}
});

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" && !( s.contentType || "" ).indexOf("application/x-www-form-urlencoded") && rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = jQuery.isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters["script json"] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always(function() {
			// Restore preexisting value
			window[ callbackName ] = overwritten;

			// Save back as free
			if ( s[ callbackName ] ) {
				// make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && jQuery.isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		});

		// Delegate to script
		return "script";
	}
});




// data: string of html
// context (optional): If specified, the fragment will be created in this context, defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( !data || typeof data !== "string" ) {
		return null;
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}
	context = context || document;

	var parsed = rsingleTag.exec( data ),
		scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[1] ) ];
	}

	parsed = jQuery.buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


// Keep a copy of the old load method
var _load = jQuery.fn.load;

/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	if ( typeof url !== "string" && _load ) {
		return _load.apply( this, arguments );
	}

	var selector, type, response,
		self = this,
		off = url.indexOf(" ");

	if ( off >= 0 ) {
		selector = jQuery.trim( url.slice( off ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( jQuery.isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax({
			url: url,

			// if "type" variable is undefined, then "GET" method will be used
			type: type,
			dataType: "html",
			data: params
		}).done(function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery("<div>").append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		}).complete( callback && function( jqXHR, status ) {
			self.each( callback, response || [ jqXHR.responseText, status, jqXHR ] );
		});
	}

	return this;
};




jQuery.expr.filters.animated = function( elem ) {
	return jQuery.grep(jQuery.timers, function( fn ) {
		return elem === fn.elem;
	}).length;
};




var docElem = window.document.documentElement;

/**
 * Gets a window from an element
 */
function getWindow( elem ) {
	return jQuery.isWindow( elem ) ? elem : elem.nodeType === 9 && elem.defaultView;
}

jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf("auto") > -1;

		// Need to be able to calculate position if either top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( jQuery.isFunction( options ) ) {
			options = options.call( elem, i, curOffset );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			curElem.css( props );
		}
	}
};

jQuery.fn.extend({
	offset: function( options ) {
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each(function( i ) {
					jQuery.offset.setOffset( this, options, i );
				});
		}

		var docElem, win,
			elem = this[ 0 ],
			box = { top: 0, left: 0 },
			doc = elem && elem.ownerDocument;

		if ( !doc ) {
			return;
		}

		docElem = doc.documentElement;

		// Make sure it's not a disconnected DOM node
		if ( !jQuery.contains( docElem, elem ) ) {
			return box;
		}

		// If we don't have gBCR, just use 0,0 rather than error
		// BlackBerry 5, iOS 3 (original iPhone)
		if ( typeof elem.getBoundingClientRect !== strundefined ) {
			box = elem.getBoundingClientRect();
		}
		win = getWindow( doc );
		return {
			top: box.top + win.pageYOffset - docElem.clientTop,
			left: box.left + win.pageXOffset - docElem.clientLeft
		};
	},

	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// Fixed elements are offset from window (parentOffset = {top:0, left: 0}, because it is its only offset parent
		if ( jQuery.css( elem, "position" ) === "fixed" ) {
			// We assume that getBoundingClientRect is available when computed position is fixed
			offset = elem.getBoundingClientRect();

		} else {
			// Get *real* offsetParent
			offsetParent = this.offsetParent();

			// Get correct offsets
			offset = this.offset();
			if ( !jQuery.nodeName( offsetParent[ 0 ], "html" ) ) {
				parentOffset = offsetParent.offset();
			}

			// Add offsetParent borders
			parentOffset.top += jQuery.css( offsetParent[ 0 ], "borderTopWidth", true );
			parentOffset.left += jQuery.css( offsetParent[ 0 ], "borderLeftWidth", true );
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	offsetParent: function() {
		return this.map(function() {
			var offsetParent = this.offsetParent || docElem;

			while ( offsetParent && ( !jQuery.nodeName( offsetParent, "html" ) && jQuery.css( offsetParent, "position" ) === "static" ) ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || docElem;
		});
	}
});

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {
			var win = getWindow( elem );

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : window.pageXOffset,
					top ? val : window.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length, null );
	};
});

// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// getComputedStyle returns percent when specified for top/left/bottom/right
// rather than make the css module depend on the offset module, we just check for it here
jQuery.each( [ "top", "left" ], function( i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );
				// if curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
});


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name }, function( defaultExtra, funcName ) {
		// margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( jQuery.isWindow( elem ) ) {
					// As of 5/8/2012 this will yield incorrect results for Mobile Safari, but there
					// isn't a whole lot we can do. See pull request at this URL for discussion:
					// https://github.com/jquery/jquery/pull/764
					return elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?
					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable, null );
		};
	});
});


// The number of elements contained in the matched element set
jQuery.fn.size = function() {
	return this.length;
};

jQuery.fn.andSelf = jQuery.fn.addBack;




// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( typeof define === "function" && define.amd ) {
	define( "jquery", [], function() {
		return jQuery;
	});
}




var
	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in
// AMD (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( typeof noGlobal === strundefined ) {
	window.jQuery = window.$ = jQuery;
}




return jQuery;

}));

'use strict';
/*
* angular-css-injector v1.0.4
* Written by Gabriel Delépine
* Special thanks to (github users) : @kleiinnn
* License: MIT
* https://github.com/Yappli/angular-css-injector/
*/
angular.module('angular.css.injector', [])
.provider('cssInjector', function() {
	var singlePageMode = false;

	function CssInjector($compile, $rootScope){
        // Variables
        var head = angular.element(document.getElementsByTagName('head')[0]),
            scope;

        // Capture the event `locationChangeStart` when the url change. If singlePageMode===TRUE, call the function `removeAll`
        $rootScope.$on('$locationChangeStart', function()
        {
            if(singlePageMode === true)
                removeAll();
        });

        // Always called by the functions `addStylesheet` and `removeAll` to initialize the variable `scope`
        var _initScope = function()
        {
            if(scope === undefined)
            {
                if((scope = head.scope()) === undefined) // We initialise head's scope in a separated function because it is not defined at the time of the initialisation of the service.
                    throw("angular.css.injector error : Please initialize your app in the HTML tag and be sure your page has a HEAD tag.");
            }
        };

        // Used to add a CSS files in the head tag of the page
        var addStylesheet = function(href)
        {
            _initScope();

            if(scope.injectedStylesheets === undefined)
            {
                scope.injectedStylesheets = [];
                head.append($compile("<link data-ng-repeat='stylesheet in injectedStylesheets' data-ng-href='{{stylesheet.href}}' rel='stylesheet' />")(scope)); // Found here : http://stackoverflow.com/a/11913182/1662766
            }
            else
            {
                for(var i in scope.injectedStylesheets)
                {
                    if(scope.injectedStylesheets[i].href == href) // An url can't be added more than once. I use a loop FOR, not the function indexOf to make the code IE < 9 compatible
                        return;
                }
            }

            scope.injectedStylesheets.push({href: href});
        };

		var remove = function(href){
			_initScope();

			if(scope.injectedStylesheets){
				for(var i = 0; i < scope.injectedStylesheets.length; i++){
					if(scope.injectedStylesheets[i].href === href){
						scope.injectedStylesheets.splice(i, 1);
						return;
					}
				}
			}
		};

        // Used to remove all of the CSS files added with the function `addStylesheet`
        var removeAll = function()
        {
            _initScope();

            if(scope.injectedStylesheets !== undefined)
                scope.injectedStylesheets = []; // Make it empty
        };

        return {
            add: addStylesheet,
			remove: remove,
            removeAll: removeAll
        };
	}

	this.$get = ['$compile', '$rootScope', function($compile, $rootScope){
		return new CssInjector($compile, $rootScope);
	}];

	this.setSinglePageMode = function(mode){
		singlePageMode = mode;
		return this;
	}
});
/**
 * @license Angulartics v0.17.0
 * (c) 2013 Luis Farzati http://luisfarzati.github.io/angulartics
 * License: MIT
 */
(function(angular, analytics) {
'use strict';

var angulartics = window.angulartics || (window.angulartics = {});
angulartics.waitForVendorCount = 0;
angulartics.waitForVendorApi = function (objectName, delay, containsField, registerFn, onTimeout) {
  if (!onTimeout) { angulartics.waitForVendorCount++; }
  if (!registerFn) { registerFn = containsField; containsField = undefined; }
  if (!Object.prototype.hasOwnProperty.call(window, objectName) || (containsField !== undefined && window[objectName][containsField] === undefined)) {
    setTimeout(function () { angulartics.waitForVendorApi(objectName, delay, containsField, registerFn, true); }, delay);
  }
  else {
    angulartics.waitForVendorCount--;
    registerFn(window[objectName]);
  }
};

/**
 * @ngdoc overview
 * @name angulartics
 */
angular.module('angulartics', [])
.provider('$analytics', function () {
  var settings = {
    pageTracking: {
      autoTrackFirstPage: true,
      autoTrackVirtualPages: true,
      trackRelativePath: false,
      autoBasePath: false,
      basePath: ''
    },
    eventTracking: {},
    bufferFlushDelay: 1000 // Support only one configuration for buffer flush delay to simplify buffering
  };

  // List of known handlers that plugins can register themselves for
  var knownHandlers = [
    'pageTrack',
    'eventTrack',
    'setAlias',
    'setUsername',
    'setUserProperties',
    'setUserPropertiesOnce',
    'setSuperProperties',
    'setSuperPropertiesOnce'
  ];
  // Cache and handler properties will match values in 'knownHandlers' as the buffering functons are installed.
  var cache = {};
  var handlers = {};

  // General buffering handler
  var bufferedHandler = function(handlerName){
    return function(){
      if(angulartics.waitForVendorCount){
        if(!cache[handlerName]){ cache[handlerName] = []; }
        cache[handlerName].push(arguments);
      }
    };
  };

  // As handlers are installed by plugins, they get pushed into a list and invoked in order.
  var updateHandlers = function(handlerName, fn){
    if(!handlers[handlerName]){
      handlers[handlerName] = [];
    }
    handlers[handlerName].push(fn);
    return function(){
      var handlerArgs = arguments;
      angular.forEach(handlers[handlerName], function(handler){
        handler.apply(this, handlerArgs);
      }, this);
    };
  };

  // The api (returned by this provider) gets populated with handlers below.
  var api = {
    settings: settings
  };

  // Will run setTimeout if delay is > 0
  // Runs immediately if no delay to make sure cache/buffer is flushed before anything else.
  // Plugins should take care to register handlers by order of precedence.
  var onTimeout = function(fn, delay){
    if(delay){
      setTimeout(fn, delay);
    } else {
      fn();
    }
  };

  var provider = {
    $get: function() { return api; },
    api: api,
    settings: settings,
    virtualPageviews: function (value) { this.settings.pageTracking.autoTrackVirtualPages = value; },
    firstPageview: function (value) { this.settings.pageTracking.autoTrackFirstPage = value; },
    withBase: function (value) { this.settings.pageTracking.basePath = (value) ? angular.element('base').attr('href').slice(0, -1) : ''; },
    withAutoBase: function (value) { this.settings.pageTracking.autoBasePath = value; },
  };

  // General function to register plugin handlers. Flushes buffers immediately upon registration according to the specified delay.
  var register = function(handlerName, fn){
    api[handlerName] = updateHandlers(handlerName, fn);
    var handlerSettings = settings[handlerName];
    var handlerDelay = (handlerSettings) ? handlerSettings.bufferFlushDelay : null;
    var delay = (handlerDelay !== null) ? handlerDelay : settings.bufferFlushDelay;
    angular.forEach(cache[handlerName], function (args, index) {
      onTimeout(function () { fn.apply(this, args); }, index * delay);
    });
  };

  var capitalize = function (input) {
      return input.replace(/^./, function (match) {
          return match.toUpperCase();
      });
  };

  // Adds to the provider a 'register#{handlerName}' function that manages multiple plugins and buffer flushing.
  var installHandlerRegisterFunction = function(handlerName){
    var registerName = 'register'+capitalize(handlerName);
    provider[registerName] = function(fn){
      register(handlerName, fn);
    };
    api[handlerName] = updateHandlers(handlerName, bufferedHandler(handlerName));
  };

  // Set up register functions for each known handler
  angular.forEach(knownHandlers, installHandlerRegisterFunction);
  return provider;
})

.run(['$rootScope', '$location', '$window', '$analytics', '$injector', function ($rootScope, $location, $window, $analytics, $injector) {


  if ($analytics.settings.pageTracking.autoTrackFirstPage) {
    /* Only track the 'first page' if there are no routes or states on the page */
    var noRoutesOrStates = true;
    if ($injector.has('$route')) {
       var $route = $injector.get('$route');
       for (var route in $route.routes) {
         noRoutesOrStates = false;
         break;
       }
    } else if ($injector.has('$state')) {
      var $state = $injector.get('$state');
      for (var state in $state.get()) {
        noRoutesOrStates = false;
        break;
      }
    }
    if (noRoutesOrStates) {
      if ($analytics.settings.pageTracking.autoBasePath) {
        $analytics.settings.pageTracking.basePath = $window.location.pathname;
      }
      if ($analytics.settings.trackRelativePath) {
        var url = $analytics.settings.pageTracking.basePath + $location.url();
        $analytics.pageTrack(url);
      } else {
        $analytics.pageTrack($location.absUrl());
      }
    }
  }
  if ($analytics.settings.pageTracking.autoTrackVirtualPages) {
    if ($analytics.settings.pageTracking.autoBasePath) {
      /* Add the full route to the base. */
      $analytics.settings.pageTracking.basePath = $window.location.pathname + "#";
    }
    if ($injector.has('$route')) {
      $rootScope.$on('$routeChangeSuccess', function (event, current) {
        if (current && (current.$$route||current).redirectTo) return;
        var url = $analytics.settings.pageTracking.basePath + $location.url();
        $analytics.pageTrack(url);
      });
    }
    if ($injector.has('$state')) {
      $rootScope.$on('$stateChangeSuccess', function (event, current) {
        var url = $analytics.settings.pageTracking.basePath + $location.url();
        $analytics.pageTrack(url);
      });
    }
  }
}])

.directive('analyticsOn', ['$analytics', function ($analytics) {
  function isCommand(element) {
    return ['a:','button:','button:button','button:submit','input:button','input:submit'].indexOf(
      element.tagName.toLowerCase()+':'+(element.type||'')) >= 0;
  }

  function inferEventType(element) {
    if (isCommand(element)) return 'click';
    return 'click';
  }

  function inferEventName(element) {
    if (isCommand(element)) return element.innerText || element.value;
    return element.id || element.name || element.tagName;
  }

  function isProperty(name) {
    return name.substr(0, 9) === 'analytics' && ['On', 'Event', 'If', 'Properties', 'EventType'].indexOf(name.substr(9)) === -1;
  }

  function propertyName(name) {
    var s = name.slice(9); // slice off the 'analytics' prefix
    if (typeof s !== 'undefined' && s!==null && s.length > 0) {
      return s.substring(0, 1).toLowerCase() + s.substring(1);
    }
    else {
      return s;
    }
  }

  return {
    restrict: 'A',
    scope: true,
    link: function ($scope, $element, $attrs) {
      var eventType = $attrs.analyticsOn || inferEventType($element[0]);

      $scope.$analytics = {};

      angular.forEach($attrs.$attr, function(attr, name) {
        if (isProperty(name)) {
          $scope.$analytics[propertyName(name)] = $attrs[name];
          $attrs.$observe(name, function(value){
            $scope.$analytics[propertyName(name)] = value;
          });
        }
      });

      angular.element($element[0]).bind(eventType, function ($event) {
        var eventName = $attrs.analyticsEvent || inferEventName($element[0]);
        var properties = {};
        $scope.$analytics.eventType = $event.type;

        if($attrs.analyticsIf){
          if(! $scope.$eval($attrs.analyticsIf)){
            return; // Cancel this event if we don't pass the analytics-if condition
          }
        }
        // Allow components to pass through an expression that gets merged on to the event properties
        // eg. analytics-properites='myComponentScope.someConfigExpression.$analyticsProperties'
        if($attrs.analyticsProperties){
          angular.extend($scope.$analytics, $scope.$eval($attrs.analyticsProperties));
        }
        $analytics.eventTrack(eventName, $scope.$analytics);
      });
    }
  };
}]);
})(angular);

/**
 * @license Angulartics v0.17.0
 * (c) 2013 Luis Farzati http://luisfarzati.github.io/angulartics
 * Universal Analytics update contributed by http://github.com/willmcclellan
 * License: MIT
 */
(function(angular) {
'use strict';

/**
 * @ngdoc overview
 * @name angulartics.google.analytics
 * Enables analytics support for Google Analytics (http://google.com/analytics)
 */
angular.module('angulartics.google.analytics', ['angulartics'])
.config(['$analyticsProvider', function ($analyticsProvider) {

  // GA already supports buffered invocations so we don't need
  // to wrap these inside angulartics.waitForVendorApi

  $analyticsProvider.settings.trackRelativePath = true;

  $analyticsProvider.registerPageTrack(function (path) {
    if (window._gaq) _gaq.push(['_trackPageview', path]);
    if (window.ga) ga('send', 'pageview', path);
  });

  /**
   * Track Event in GA
   * @name eventTrack
   *
   * @param {string} action Required 'action' (string) associated with the event
   * @param {object} properties Comprised of the mandatory field 'category' (string) and optional  fields 'label' (string), 'value' (integer) and 'noninteraction' (boolean)
   *
   * @link https://developers.google.com/analytics/devguides/collection/gajs/eventTrackerGuide#SettingUpEventTracking
   *
   * @link https://developers.google.com/analytics/devguides/collection/analyticsjs/events
   */
  $analyticsProvider.registerEventTrack(function (action, properties) {

    // do nothing if there is no category (it's required by GA)
    if (!properties || !properties.category) { 
		return; 
	}
    // GA requires that eventValue be an integer, see:
    // https://developers.google.com/analytics/devguides/collection/analyticsjs/field-reference#eventValue
    // https://github.com/luisfarzati/angulartics/issues/81
    if(properties.value) {
      var parsed = parseInt(properties.value, 10);
      properties.value = isNaN(parsed) ? 0 : parsed;
    }

    if (window._gaq) {
      _gaq.push(['_trackEvent', properties.category, action, properties.label, properties.value, properties.noninteraction]);
    }
    else if (window.ga) {
	  var eventOptions = {
		eventCategory: properties.category || null,
		eventAction: action || null,
		eventLabel: properties.label ||  null,
		eventValue: properties.value || null,
		nonInteraction: properties.noninteraction || null
	  };

	  // add custom dimensions and metrics
	  for(var idx = 1; idx<=20;idx++) {
		if(properties['dimension' +idx.toString()]) {
		  eventOptions['dimension' +idx.toString()] = properties['dimension' +idx.toString()];
		}
		if(properties['metric' +idx.toString()]) {
		  eventOptions['metric' +idx.toString()] = properties['metric' +idx.toString()];
	    }
	  }
	  ga('send', 'event', eventOptions);
    }
  });

}]);
})(angular);

/* global YT */
angular.module('youtube-embed', ['ng'])
.service ('youtubeEmbedUtils', ['$window', '$rootScope', function ($window, $rootScope) {
    var Service = {}

    // adapted from http://stackoverflow.com/a/5831191/1614967
    var youtubeRegexp = /https?:\/\/(?:[0-9A-Z-]+\.)?(?:youtu\.be\/|youtube(?:-nocookie)?\.com\S*[^\w\s-])([\w-]{11})(?=[^\w-]|$)(?![?=&+%\w.-]*(?:['"][^<>]*>|<\/a>))[?=&+%\w.-]*/ig;
    var timeRegexp = /t=(\d+)[ms]?(\d+)?s?/;

    function contains(str, substr) {
        return (str.indexOf(substr) > -1);
    }

    Service.getIdFromURL = function getIdFromURL(url) {
        var id = url.replace(youtubeRegexp, '$1');

        if (contains(id, ';')) {
            var pieces = id.split(';');

            if (contains(pieces[1], '%')) {
                // links like this:
                // "http://www.youtube.com/attribution_link?a=pxa6goHqzaA&amp;u=%2Fwatch%3Fv%3DdPdgx30w9sU%26feature%3Dshare"
                // have the real query string URI encoded behind a ';'.
                // at this point, `id is 'pxa6goHqzaA;u=%2Fwatch%3Fv%3DdPdgx30w9sU%26feature%3Dshare'
                var uriComponent = decodeURIComponent(id.split(';')[1]);
                id = ('http://youtube.com' + uriComponent)
                        .replace(youtubeRegexp, '$1');
            } else {
                // https://www.youtube.com/watch?v=VbNF9X1waSc&amp;feature=youtu.be
                // `id` looks like 'VbNF9X1waSc;feature=youtu.be' currently.
                // strip the ';feature=youtu.be'
                id = pieces[0];
            }
        } else if (contains(id, '#')) {
            // id might look like '93LvTKF_jW0#t=1'
            // and we want '93LvTKF_jW0'
            id = id.split('#')[0];
        }

        return id;
    };

    Service.getTimeFromURL = function getTimeFromURL(url) {
        url = url || '';

        // t=4m20s
        // returns ['t=4m20s', '4', '20']
        // t=46s
        // returns ['t=46s', '46']
        // t=46
        // returns ['t=46', '46']
        var times = url.match(timeRegexp);

        if (!times) {
            // zero seconds
            return 0;
        }

        // assume the first
        var full = times[0],
            minutes = times[1],
            seconds = times[2];

        // t=4m20s
        if (typeof seconds !== 'undefined') {
            seconds = parseInt(seconds, 10);
            minutes = parseInt(minutes, 10);

        // t=4m
        } else if (contains(full, 'm')) {
            minutes = parseInt(minutes, 10);
            seconds = 0;

        // t=4s
        // t=4
        } else {
            seconds = parseInt(minutes, 10);
            minutes = 0;
        }

        // in seconds
        return seconds + (minutes * 60);
    };

    // Inject YouTube's iFrame API
    (function () {
        if(!window['YT']){
        var tag = document.createElement('script');
        tag.src = 'https://www.youtube.com/iframe_api';
        var firstScriptTag = document.getElementsByTagName('script')[0];
        console.log("FST:",firstScriptTag);
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
        }
    }());

    Service.ready = false;

    // Youtube callback when API is ready
    $window.onYouTubeIframeAPIReady = function () {
        $rootScope.$apply(function () {
            Service.ready = true;
        });
    };

    return Service;
}])
.directive('youtubeVideo', ['youtubeEmbedUtils', function (youtubeEmbedUtils) {
    var uniqId = 1;

    // from YT.PlayerState
    var stateNames = {
        '-1': 'unstarted',
        0: 'ended',
        1: 'playing',
        2: 'paused',
        3: 'buffering',
        5: 'queued'
    };

    var eventPrefix = 'youtube.player.';

    return {
        restrict: 'EA',
        scope: {
            videoId: '=?',
            videoUrl: '=?',
            player: '=?',
            playerVars: '=?',
            playerHeight: '=?',
            playerWidth: '=?'
        },
        link: function (scope, element, attrs) {
            // allows us to $watch `ready`
            scope.utils = youtubeEmbedUtils;

            // player-id attr > id attr > directive-generated ID
            var playerId = attrs.playerId || element[0].id || 'unique-youtube-embed-id-' + uniqId++;
            element[0].id = playerId;

            // Attach to element
            scope.playerHeight = scope.playerHeight || 390;
            scope.playerWidth = scope.playerWidth || 640;
            scope.playerVars = scope.playerVars || {};

            // YT calls callbacks outside of digest cycle
            function applyBroadcast () {
                var args = Array.prototype.slice.call(arguments);
                scope.$apply(function () {
                    scope.$emit.apply(scope, args);
                });
            }

            function onPlayerStateChange (event) {
                var state = stateNames[event.data];
                if (typeof state !== 'undefined') {
                    applyBroadcast(eventPrefix + state, scope.player, event);
                }
                scope.$apply(function () {
                    scope.player.currentState = state;
                });
            }

            function onPlayerReady (event) {
                applyBroadcast(eventPrefix + 'ready', scope.player, event);
            }

            function createPlayer () {
                var playerVars = angular.copy(scope.playerVars);
                playerVars.start = playerVars.start || scope.urlStartTime;
                var player = new YT.Player(playerId, {
                    height: scope.playerHeight,
                    width: scope.playerWidth,
                    videoId: scope.videoId,
                    playerVars: playerVars,
                    events: {
                        onReady: onPlayerReady,
                        onStateChange: onPlayerStateChange
                    }
                });

                player.id = playerId;
                return player;
            }

            function loadPlayer () {
                if (scope.videoId || scope.playerVars.list) {
                    if (scope.player && scope.player.d &&
                        typeof scope.player.destroy === 'function') {
                        scope.player.destroy();
                    }

                    scope.player = createPlayer();
                }
            };

            var stopWatchingReady = scope.$watch(
                function () {
                    return scope.utils.ready
                        // Wait until one of them is defined...
                        && (typeof scope.videoUrl !== 'undefined'
                        ||  typeof scope.videoId !== 'undefined'
                        ||  typeof scope.playerVars.list !== 'undefined');
                },
                function (ready) {
                    if (ready) {
                        stopWatchingReady();

                        // URL takes first priority
                        if (typeof scope.videoUrl !== 'undefined') {
                            scope.$watch('videoUrl', function (url) {
                                scope.videoId = scope.utils.getIdFromURL(url);
                                scope.urlStartTime = scope.utils.getTimeFromURL(url);

                                loadPlayer();
                            });

                        // then, a video ID
                        } else if (typeof scope.videoId !== 'undefined') {
                            scope.$watch('videoId', function () {
                                scope.urlStartTime = null;
                                loadPlayer();
                            });

                        // finally, a list
                        } else {
                            scope.$watch('playerVars.list', function () {
                                scope.urlStartTime = null;
                                loadPlayer();
                            });
                        }
                    }
            });

            scope.$watchCollection(['playerHeight', 'playerWidth'], function() {
                if (scope.player) {
                    scope.player.setSize(scope.playerWidth, scope.playerHeight);
                }
            });

            scope.$on('$destroy', function () {
                scope.player && scope.player.destroy();
            });
        }
    };
}]);

!function(e,t){"function"==typeof define&&define.amd?define(t):"object"==typeof exports?module.exports=t(require,exports,module):e.scrollReveal=t()}(this,function(){return window.scrollReveal=function(e){"use strict";function t(t){return r=this,r.elems={},r.serial=1,r.blocked=!1,r.config=o(r.defaults,t),r.isMobile()&&!r.config.mobile||!r.isSupported()?void r.destroy():(r.config.viewport==e.document.documentElement?(e.addEventListener("scroll",n,!1),e.addEventListener("resize",n,!1)):r.config.viewport.addEventListener("scroll",n,!1),void r.init(!0))}var i,o,n,r;return t.prototype={defaults:{enter:"bottom",move:"8px",over:"0.6s",wait:"0s",easing:"ease",scale:{direction:"up",power:"5%"},opacity:0,mobile:!1,reset:!1,viewport:e.document.documentElement,delay:"once",vFactor:.6,complete:function(){}},init:function(e){var t,i,o;o=Array.prototype.slice.call(r.config.viewport.querySelectorAll("[data-sr]")),o.forEach(function(e){t=r.serial++,i=r.elems[t]={domEl:e},i.config=r.configFactory(i),i.styles=r.styleFactory(i),i.seen=!1,e.removeAttribute("data-sr"),e.setAttribute("style",i.styles.inline+i.styles.initial)}),r.scrolled=r.scrollY(),r.animate(e)},animate:function(e){var t,i,o,n;n=function(e){var t=r.elems[e];setTimeout(function(){t.domEl.setAttribute("style",t.styles.inline),t.config.complete(t.domEl),delete r.elems[e]},t.styles.duration)};for(t in r.elems)r.elems.hasOwnProperty(t)&&(i=r.elems[t],o=r.isElemInViewport(i),o&&("always"===r.config.delay||"onload"===r.config.delay&&e||"once"===r.config.delay&&!i.seen?i.domEl.setAttribute("style",i.styles.inline+i.styles.target+i.styles.transition):i.domEl.setAttribute("style",i.styles.inline+i.styles.target+i.styles.reset),i.seen=!0,i.config.reset||i.animating||(i.animating=!0,n(t))),!o&&i.config.reset&&i.domEl.setAttribute("style",i.styles.inline+i.styles.initial+i.styles.reset));r.blocked=!1},configFactory:function(e){var t={},i={},n=e.domEl.getAttribute("data-sr").split(/[, ]+/);return n=r.filter(n),n.forEach(function(e,i){switch(e){case"enter":return void(t.enter=n[i+1]);case"wait":return void(t.wait=n[i+1]);case"move":return void(t.move=n[i+1]);case"ease":return t.move=n[i+1],void(t.ease="ease");case"ease-in":return"up"==n[i+1]||"down"==n[i+1]?(t.scale.direction=n[i+1],t.scale.power=n[i+2],void(t.easing="ease-in")):(t.move=n[i+1],void(t.easing="ease-in"));case"ease-in-out":return"up"==n[i+1]||"down"==n[i+1]?(t.scale.direction=n[i+1],t.scale.power=n[i+2],void(t.easing="ease-in-out")):(t.move=n[i+1],void(t.easing="ease-in-out"));case"ease-out":return"up"==n[i+1]||"down"==n[i+1]?(t.scale.direction=n[i+1],t.scale.power=n[i+2],void(t.easing="ease-out")):(t.move=n[i+1],void(t.easing="ease-out"));case"hustle":return"up"==n[i+1]||"down"==n[i+1]?(t.scale.direction=n[i+1],t.scale.power=n[i+2],void(t.easing="cubic-bezier( 0.6, 0.2, 0.1, 1 )")):(t.move=n[i+1],void(t.easing="cubic-bezier( 0.6, 0.2, 0.1, 1 )"));case"over":return void(t.over=n[i+1]);case"reset":return void(t.reset="no"==n[i-1]?!1:!0);case"scale":return t.scale={},"up"==n[i+1]||"down"==n[i+1]?(t.scale.direction=n[i+1],void(t.scale.power=n[i+2])):void(t.scale.power=n[i+1]);default:return}}),i=o(i,r.config),i=o(i,t),("top"==i.enter||"bottom"==i.enter)&&(i.axis="Y"),("left"==i.enter||"right"==i.enter)&&(i.axis="X"),"hustle"==i.easing&&(i.easing="cubic-bezier( 0.6, 0.2, 0.1, 1 )"),("top"==i.enter||"left"==i.enter)&&(i.move="-"+i.move),i},styleFactory:function(e){var t,i,o,n,r,a;return r=e.domEl.getAttribute("style")?e.domEl.getAttribute("style")+"; visibility: visible; ":"visibility: visible; ",t="-webkit-transition: -webkit-transform "+e.config.over+" "+e.config.easing+" "+e.config.wait+", opacity "+e.config.over+" "+e.config.easing+" "+e.config.wait+"; transition: transform "+e.config.over+" "+e.config.easing+" "+e.config.wait+", opacity "+e.config.over+" "+e.config.easing+" "+e.config.wait+"; -webkit-perspective: 1000;-webkit-backface-visibility: hidden;",n="-webkit-transition: -webkit-transform "+e.config.over+" "+e.config.easing+" 0s, opacity "+e.config.over+" "+e.config.easing+" 0s; transition: transform "+e.config.over+" "+e.config.easing+" 0s, opacity "+e.config.over+" "+e.config.easing+" 0s; -webkit-perspective: 1000; -webkit-backface-visibility: hidden; ",a=function(){0!=parseInt(e.config.move)&&(i+=" translate"+e.config.axis+"("+e.config.move+")",o+=" translate"+e.config.axis+"(0)"),0!=parseInt(e.config.scale.power)&&("up"==e.config.scale.direction&&(e.config.scale.value=1-.01*parseFloat(e.config.scale.power)),"down"==e.config.scale.direction&&(e.config.scale.value=1+.01*parseFloat(e.config.scale.power)),i+=" scale("+e.config.scale.value+")",o+=" scale(1)"),i+="; opacity: "+e.config.opacity+"; ",o+="; opacity: 1; "},i="transform:",o="transform:",a(),i+="-webkit-transform:",o+="-webkit-transform:",a(),{transition:t,initial:i,target:o,reset:n,inline:r,duration:1e3*(parseFloat(e.config.over)+parseFloat(e.config.wait))}},filter:function(e){var t=[],i=["from","the","and","then","but","with","please"];return e.forEach(function(e){i.indexOf(e)>-1||t.push(e)}),t},getViewportH:function(){var t=r.config.viewport.clientHeight,i=e.innerHeight;return r.config.viewport==e.document.documentElement&&i>t?i:t},scrollY:function(){return r.config.viewport==e.document.documentElement?e.pageYOffset:r.config.viewport.scrollTop+r.config.viewport.offsetTop},getOffset:function(e){var t=0,i=0;do isNaN(e.offsetTop)||(t+=e.offsetTop),isNaN(e.offsetLeft)||(i+=e.offsetLeft);while(e=e.offsetParent);return{top:t,left:i}},isElemInViewport:function(t){var i=t.domEl.offsetHeight,o=r.getOffset(t.domEl).top,n=o+i,a=t.config.vFactor||0;return o+i*a<r.scrolled+r.getViewportH()&&n-i*a>r.scrolled||"fixed"==(t.domEl.currentStyle?t.domEl.currentStyle:e.getComputedStyle(t.domEl,null)).position},isMobile:function(){var t=navigator.userAgent||navigator.vendor||e.opera;return/(ipad|playbook|silk|android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(t)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0,4))?!0:!1},isSupported:function(){for(var e=document.createElement("sensor"),t="Webkit,Moz,O,".split(","),i=("transition "+t.join("transition,")).split(","),o=0;o<i.length;o++)if(""===!e.style[i[o]])return!1;return!0},destroy:function(){var e;e=Array.prototype.slice.call(r.config.viewport.querySelectorAll("[data-sr]")),e.forEach(function(e){e.removeAttribute("data-sr")})}},n=function(){r.blocked||(r.blocked=!0,r.scrolled=r.scrollY(),i(function(){r.animate()}))},o=function(e,t){for(var i in t)t.hasOwnProperty(i)&&(e[i]=t[i]);return e},i=function(){return e.requestAnimationFrame||e.webkitRequestAnimationFrame||e.mozRequestAnimationFrame||function(t){e.setTimeout(t,1e3/60)}}(),t}(window),scrollReveal});

//docs here:https://github.com/d-oliveros/angular-smooth-scroll
angular.module("smoothScroll",[]).directive("smoothScroll",["$timeout","smoothScroll",function(e,t){return{restrict:"A",scope:{callbackBefore:"&",callbackAfter:"&"},link:function(n,o,a){e(function(){if(void 0===a.scrollIf||"true"===a.scrollIf){var e=function(e){if(a.callbackBefore){var t=n.callbackBefore({element:e});"function"==typeof t&&t(e)}},c=function(e){if(a.callbackAfter){var t=n.callbackAfter({element:e});"function"==typeof t&&t(e)}};t(o[0],{duration:a.duration,offset:a.offset,easing:a.easing,callbackBefore:e,callbackAfter:c})}})}}}]).directive("scrollTo",["smoothScroll",function(e){return{restrict:"A",scope:{callbackBefore:"&",callbackAfter:"&"},link:function(t,n,o){var a;n.on("click",function(n){if(a=document.getElementById(o.scrollTo)){n.preventDefault();var c=function(e){if(o.callbackBefore){var n=t.callbackBefore({element:e});"function"==typeof n&&n(e)}},r=function(e){if(o.callbackAfter){var n=t.callbackAfter({element:e});"function"==typeof n&&n(e)}};return e(a,{duration:o.duration,offset:o.offset,easing:o.easing,callbackBefore:c,callbackAfter:r}),!1}})}}}]).factory("smoothScroll",["$timeout",function(e){var t=function(){return window.pageYOffset?window.pageYOffset:document.documentElement.scrollTop},n=function(n,o){e(function(){var e,a,c=t(),r=0;o=o||{};var f=o.duration||800,l=o.offset||0,u=o.easing||"easeInOutQuart",i=o.callbackBefore||function(){},s=o.callbackAfter||function(){},d=function(e,t){return"easeInQuad"==e?t*t:"easeOutQuad"==e?t*(2-t):"easeInOutQuad"==e?.5>t?2*t*t:-1+(4-2*t)*t:"easeInCubic"==e?t*t*t:"easeOutCubic"==e?--t*t*t+1:"easeInOutCubic"==e?.5>t?4*t*t*t:(t-1)*(2*t-2)*(2*t-2)+1:"easeInQuart"==e?t*t*t*t:"easeOutQuart"==e?1- --t*t*t*t:"easeInOutQuart"==e?.5>t?8*t*t*t*t:1-8*--t*t*t*t:"easeInQuint"==e?t*t*t*t*t:"easeOutQuint"==e?1+--t*t*t*t*t:"easeInOutQuint"==e?.5>t?16*t*t*t*t*t:1+16*--t*t*t*t*t:t},b=function(e){var t=0;if(e.offsetParent)do t+=e.offsetTop,e=e.offsetParent;while(e);return t=Math.max(t-l,0)},k=b(n),m=k-c,v=function(){var e=t();a!=k&&e!=k&&window.innerHeight+e<document.body.scrollHeight||(clearInterval(g),s(n))},I=function(){r+=16,e=r/f,e=e>1?1:e,a=c+m*d(u,e),window.scrollTo(0,a),v()};i(n);var g=setInterval(I,16)})};return n}]);

(function (document, navigator, CACHE, IE9TO11) {
	if (IE9TO11) document.addEventListener('DOMContentLoaded', function () {
		[].forEach.call(document.querySelectorAll('use'), function (use) {
			var
			svg = use.parentNode,
			url = use.getAttribute('xlink:href').split('#'),
			url_root = url[0],
			url_hash = url[1],
			xhr = CACHE[url_root] = CACHE[url_root] || new XMLHttpRequest();

			if (!xhr.s) {
				xhr.s = [];

				xhr.open('GET', url_root);

				xhr.onload = function () {
					var x = document.createElement('x'), s = xhr.s;

					x.innerHTML = xhr.responseText;

					xhr.onload = function () {
						s.splice(0).map(function (array) {
							var g = x.querySelector('#' + array[2]);

							if (g) array[0].replaceChild(g.cloneNode(true), array[1]);
						});
					};

					xhr.onload();
				};

				xhr.send();
			}

			xhr.s.push([svg, use, url_hash]);

			if (xhr.responseText) xhr.onload();
		});
	});
})(
	document,
	navigator,
	{},
	/Trident\/[567]\b/.test(navigator.userAgent)
);

// Generated by CoffeeScript 1.3.3
(function() {
  var ROOT, STATE_DESC, m;

  m = {};

  ROOT = 'https://mandrillapp.com/api/1.0/';

  STATE_DESC = {
    1: 'OPENED',
    2: 'HEADERS_RECEIVED',
    3: 'LOADING',
    4: 'DONE'
  };

  m.Mandrill = (function() {

    function Mandrill(apikey, debug) {
      this.apikey = apikey;
      this.debug = debug != null ? debug : false;
      this.templates = new m.Templates(this);
      this.exports = new m.Exports(this);
      this.users = new m.Users(this);
      this.rejects = new m.Rejects(this);
      this.inbound = new m.Inbound(this);
      this.tags = new m.Tags(this);
      this.messages = new m.Messages(this);
      this.whitelists = new m.Whitelists(this);
      this.ips = new m.Ips(this);
      this.internal = new m.Internal(this);
      this.subaccounts = new m.Subaccounts(this);
      this.urls = new m.Urls(this);
      this.webhooks = new m.Webhooks(this);
      this.senders = new m.Senders(this);
      this.metadata = new m.Metadata(this);
    }

    Mandrill.prototype.call = function(uri, params, onresult, onerror) {
      var req,
        _this = this;
      if (params == null) {
        params = {};
      }
      params.key = this.apikey;
      params = JSON.stringify(params);
      req = new XMLHttpRequest();
      req.open('POST', "" + ROOT + uri + ".json");
      req.setRequestHeader('Content-Type', 'application/json');
      if (this.debug) {
        console.log("Mandrill: Opening request to " + ROOT + uri + ".json");
      }
      req.onreadystatechange = function() {
        var res;
        if (_this.debug) {
          console.log("Mandrill: Request state " + STATE_DESC[req.readyState]);
        }
        if (req.readyState !== 4) {
          return;
        }
        res = JSON.parse(req.responseText);
        if (res == null) {
          res = {
            status: 'error',
            name: 'GeneralError',
            message: 'An unexpected error occurred'
          };
        }
        if (req.status !== 200) {
          if (onerror) {
            return onerror(res);
          } else {
            return _this.onerror(res);
          }
        } else {
          if (onresult) {
            return onresult(res);
          }
        }
      };
      return req.send(params);
    };

    Mandrill.prototype.onerror = function(err) {
      throw {
        name: err.name,
        message: err.message,
        toString: function() {
          return "" + err.name + ": " + err.message;
        }
      };
    };

    return Mandrill;

  })();

  m.Templates = (function() {

    function Templates(master) {
      this.master = master;
    }

    /*
        Add a new template
        @param {Object} params the hash of the parameters to pass to the request
        @option params {String} name the name for the new template - must be unique
        @option params {String} from_email a default sending address for emails sent using this template
        @option params {String} from_name a default from name to be used
        @option params {String} subject a default subject line to be used
        @option params {String} code the HTML code for the template with mc:edit attributes for the editable elements
        @option params {String} text a default text part to be used when sending with this template
        @option params {Boolean} publish set to false to add a draft template without publishing
        @option params {Array} labels an optional array of up to 10 labels to use for filtering templates
             - labels[] {String} a single label
        @param {Function} onsuccess an optional callback to execute when the API call is successfully made
        @param {Function} onerror an optional callback to execute when the API call errors out - defaults to throwing the error as an exception
    */


    Templates.prototype.add = function(params, onsuccess, onerror) {
      var _ref, _ref1, _ref2, _ref3, _ref4, _ref5, _ref6;
      if (params == null) {
        params = {};
      }
      if (typeof params === 'function') {
        onerror = onsuccess;
        onsuccess = params;
        params = {};
      }
      if ((_ref = params["from_email"]) == null) {
        params["from_email"] = null;
      }
      if ((_ref1 = params["from_name"]) == null) {
        params["from_name"] = null;
      }
      if ((_ref2 = params["subject"]) == null) {
        params["subject"] = null;
      }
      if ((_ref3 = params["code"]) == null) {
        params["code"] = null;
      }
      if ((_ref4 = params["text"]) == null) {
        params["text"] = null;
      }
      if ((_ref5 = params["publish"]) == null) {
        params["publish"] = true;
      }
      if ((_ref6 = params["labels"]) == null) {
        params["labels"] = [];
      }
      return this.master.call('templates/add', params, onsuccess, onerror);
    };

    /*
        Get the information for an existing template
        @param {Object} params the hash of the parameters to pass to the request
        @option params {String} name the immutable name of an existing template
        @param {Function} onsuccess an optional callback to execute when the API call is successfully made
        @param {Function} onerror an optional callback to execute when the API call errors out - defaults to throwing the error as an exception
    */


    Templates.prototype.info = function(params, onsuccess, onerror) {
      if (params == null) {
        params = {};
      }
      if (typeof params === 'function') {
        onerror = onsuccess;
        onsuccess = params;
        params = {};
      }
      return this.master.call('templates/info', params, onsuccess, onerror);
    };

    /*
        Update the code for an existing template. If null is provided for any fields, the values will remain unchanged.
        @param {Object} params the hash of the parameters to pass to the request
        @option params {String} name the immutable name of an existing template
        @option params {String} from_email the new default sending address
        @option params {String} from_name the new default from name
        @option params {String} subject the new default subject line
        @option params {String} code the new code for the template
        @option params {String} text the new default text part to be used
        @option params {Boolean} publish set to false to update the draft version of the template without publishing
        @option params {Array} labels an optional array of up to 10 labels to use for filtering templates
             - labels[] {String} a single label
        @param {Function} onsuccess an optional callback to execute when the API call is successfully made
        @param {Function} onerror an optional callback to execute when the API call errors out - defaults to throwing the error as an exception
    */


    Templates.prototype.update = function(params, onsuccess, onerror) {
      var _ref, _ref1, _ref2, _ref3, _ref4, _ref5, _ref6;
      if (params == null) {
        params = {};
      }
      if (typeof params === 'function') {
        onerror = onsuccess;
        onsuccess = params;
        params = {};
      }
      if ((_ref = params["from_email"]) == null) {
        params["from_email"] = null;
      }
      if ((_ref1 = params["from_name"]) == null) {
        params["from_name"] = null;
      }
      if ((_ref2 = params["subject"]) == null) {
        params["subject"] = null;
      }
      if ((_ref3 = params["code"]) == null) {
        params["code"] = null;
      }
      if ((_ref4 = params["text"]) == null) {
        params["text"] = null;
      }
      if ((_ref5 = params["publish"]) == null) {
        params["publish"] = true;
      }
      if ((_ref6 = params["labels"]) == null) {
        params["labels"] = null;
      }
      return this.master.call('templates/update', params, onsuccess, onerror);
    };

    /*
        Publish the content for the template. Any new messages sent using this template will start using the content that was previously in draft.
        @param {Object} params the hash of the parameters to pass to the request
        @option params {String} name the immutable name of an existing template
        @param {Function} onsuccess an optional callback to execute when the API call is successfully made
        @param {Function} onerror an optional callback to execute when the API call errors out - defaults to throwing the error as an exception
    */


    Templates.prototype.publish = function(params, onsuccess, onerror) {
      if (params == null) {
        params = {};
      }
      if (typeof params === 'function') {
        onerror = onsuccess;
        onsuccess = params;
        params = {};
      }
      return this.master.call('templates/publish', params, onsuccess, onerror);
    };

    /*
        Delete a template
        @param {Object} params the hash of the parameters to pass to the request
        @option params {String} name the immutable name of an existing template
        @param {Function} onsuccess an optional callback to execute when the API call is successfully made
        @param {Function} onerror an optional callback to execute when the API call errors out - defaults to throwing the error as an exception
    */


    Templates.prototype["delete"] = function(params, onsuccess, onerror) {
      if (params == null) {
        params = {};
      }
      if (typeof params === 'function') {
        onerror = onsuccess;
        onsuccess = params;
        params = {};
      }
      return this.master.call('templates/delete', params, onsuccess, onerror);
    };

    /*
        Return a list of all the templates available to this user
        @param {Object} params the hash of the parameters to pass to the request
        @option params {String} label an optional label to filter the templates
        @param {Function} onsuccess an optional callback to execute when the API call is successfully made
        @param {Function} onerror an optional callback to execute when the API call errors out - defaults to throwing the error as an exception
    */


    Templates.prototype.list = function(params, onsuccess, onerror) {
      var _ref;
      if (params == null) {
        params = {};
      }
      if (typeof params === 'function') {
        onerror = onsuccess;
        onsuccess = params;
        params = {};
      }
      if ((_ref = params["label"]) == null) {
        params["label"] = null;
      }
      return this.master.call('templates/list', params, onsuccess, onerror);
    };

    /*
        Return the recent history (hourly stats for the last 30 days) for a template
        @param {Object} params the hash of the parameters to pass to the request
        @option params {String} name the name of an existing template
        @param {Function} onsuccess an optional callback to execute when the API call is successfully made
        @param {Function} onerror an optional callback to execute when the API call errors out - defaults to throwing the error as an exception
    */


    Templates.prototype.timeSeries = function(params, onsuccess, onerror) {
      if (params == null) {
        params = {};
      }
      if (typeof params === 'function') {
        onerror = onsuccess;
        onsuccess = params;
        params = {};
      }
      return this.master.call('templates/time-series', params, onsuccess, onerror);
    };

    /*
        Inject content and optionally merge fields into a template, returning the HTML that results
        @param {Object} params the hash of the parameters to pass to the request
        @option params {String} template_name the immutable name of a template that exists in the user's account
        @option params {Array} template_content an array of template content to render.  Each item in the array should be a struct with two keys - name: the name of the content block to set the content for, and content: the actual content to put into the block
             - template_content[] {Object} the injection of a single piece of content into a single editable region
                 - name {String} the name of the mc:edit editable region to inject into
                 - content {String} the content to inject
        @option params {Array} merge_vars optional merge variables to use for injecting merge field content.  If this is not provided, no merge fields will be replaced.
             - merge_vars[] {Object} a single merge variable
                 - name {String} the merge variable's name. Merge variable names are case-insensitive and may not start with _
                 - content {String} the merge variable's content
        @param {Function} onsuccess an optional callback to execute when the API call is successfully made
        @param {Function} onerror an optional callback to execute when the API call errors out - defaults to throwing the error as an exception
    */


    Templates.prototype.render = function(params, onsuccess, onerror) {
      var _ref;
      if (params == null) {
        params = {};
      }
      if (typeof params === 'function') {
        onerror = onsuccess;
        onsuccess = params;
        params = {};
      }
      if ((_ref = params["merge_vars"]) == null) {
        params["merge_vars"] = null;
      }
      return this.master.call('templates/render', params, onsuccess, onerror);
    };

    return Templates;

  })();

  m.Exports = (function() {

    function Exports(master) {
      this.master = master;
    }

    /*
        Returns information about an export job. If the export job's state is 'complete',
    the returned data will include a URL you can use to fetch the results. Every export
    job produces a zip archive, but the format of the archive is distinct for each job
    type. The api calls that initiate exports include more details about the output format
    for that job type.
        @param {Object} params the hash of the parameters to pass to the request
        @option params {String} id an export job identifier
        @param {Function} onsuccess an optional callback to execute when the API call is successfully made
        @param {Function} onerror an optional callback to execute when the API call errors out - defaults to throwing the error as an exception
    */


    Exports.prototype.info = function(params, onsuccess, onerror) {
      if (params == null) {
        params = {};
      }
      if (typeof params === 'function') {
        onerror = onsuccess;
        onsuccess = params;
        params = {};
      }
      return this.master.call('exports/info', params, onsuccess, onerror);
    };

    /*
        Returns a list of your exports.
        @param {Object} params the hash of the parameters to pass to the request
        @param {Function} onsuccess an optional callback to execute when the API call is successfully made
        @param {Function} onerror an optional callback to execute when the API call errors out - defaults to throwing the error as an exception
    */


    Exports.prototype.list = function(params, onsuccess, onerror) {
      if (params == null) {
        params = {};
      }
      if (typeof params === 'function') {
        onerror = onsuccess;
        onsuccess = params;
        params = {};
      }
      return this.master.call('exports/list', params, onsuccess, onerror);
    };

    /*
        Begins an export of your rejection blacklist. The blacklist will be exported to a zip archive
    containing a single file named rejects.csv that includes the following fields: email,
    reason, detail, created_at, expires_at, last_event_at, expires_at.
        @param {Object} params the hash of the parameters to pass to the request
        @option params {String} notify_email an optional email address to notify when the export job has finished.
        @param {Function} onsuccess an optional callback to execute when the API call is successfully made
        @param {Function} onerror an optional callback to execute when the API call errors out - defaults to throwing the error as an exception
    */


    Exports.prototype.rejects = function(params, onsuccess, onerror) {
      var _ref;
      if (params == null) {
        params = {};
      }
      if (typeof params === 'function') {
        onerror = onsuccess;
        onsuccess = params;
        params = {};
      }
      if ((_ref = params["notify_email"]) == null) {
        params["notify_email"] = null;
      }
      return this.master.call('exports/rejects', params, onsuccess, onerror);
    };

    /*
        Begins an export of your rejection whitelist. The whitelist will be exported to a zip archive
    containing a single file named whitelist.csv that includes the following fields:
    email, detail, created_at.
        @param {Object} params the hash of the parameters to pass to the request
        @option params {String} notify_email an optional email address to notify when the export job has finished.
        @param {Function} onsuccess an optional callback to execute when the API call is successfully made
        @param {Function} onerror an optional callback to execute when the API call errors out - defaults to throwing the error as an exception
    */


    Exports.prototype.whitelist = function(params, onsuccess, onerror) {
      var _ref;
      if (params == null) {
        params = {};
      }
      if (typeof params === 'function') {
        onerror = onsuccess;
        onsuccess = params;
        params = {};
      }
      if ((_ref = params["notify_email"]) == null) {
        params["notify_email"] = null;
      }
      return this.master.call('exports/whitelist', params, onsuccess, onerror);
    };

    /*
        Begins an export of your activity history. The activity will be exported to a zip archive
    containing a single file named activity.csv in the same format as you would be able to export
    from your account's activity view. It includes the following fields: Date, Email Address,
    Sender, Subject, Status, Tags, Opens, Clicks, Bounce Detail. If you have configured any custom
    metadata fields, they will be included in the exported data.
        @param {Object} params the hash of the parameters to pass to the request
        @option params {String} notify_email an optional email address to notify when the export job has finished
        @option params {String} date_from start date as a UTC string in YYYY-MM-DD HH:MM:SS format
        @option params {String} date_to end date as a UTC string in YYYY-MM-DD HH:MM:SS format
        @option params {Array} tags an array of tag names to narrow the export to; will match messages that contain ANY of the tags
             - tags[] {String} a tag name
        @option params {Array} senders an array of senders to narrow the export to
             - senders[] {String} a sender address
        @option params {Array} states an array of states to narrow the export to; messages with ANY of the states will be included
             - states[] {String} a message state
        @option params {Array} api_keys an array of api keys to narrow the export to; messsagse sent with ANY of the keys will be included
             - api_keys[] {String} an API key associated with your account
        @param {Function} onsuccess an optional callback to execute when the API call is successfully made
        @param {Function} onerror an optional callback to execute when the API call errors out - defaults to throwing the error as an exception
    */


    Exports.prototype.activity = function(params, onsuccess, onerror) {
      var _ref, _ref1, _ref2, _ref3, _ref4, _ref5, _ref6;
      if (params == null) {
        params = {};
      }
      if (typeof params === 'function') {
        onerror = onsuccess;
        onsuccess = params;
        params = {};
      }
      if ((_ref = params["notify_email"]) == null) {
        params["notify_email"] = null;
      }
      if ((_ref1 = params["date_from"]) == null) {
        params["date_from"] = null;
      }
      if ((_ref2 = params["date_to"]) == null) {
        params["date_to"] = null;
      }
      if ((_ref3 = params["tags"]) == null) {
        params["tags"] = null;
      }
      if ((_ref4 = params["senders"]) == null) {
        params["senders"] = null;
      }
      if ((_ref5 = params["states"]) == null) {
        params["states"] = null;
      }
      if ((_ref6 = params["api_keys"]) == null) {
        params["api_keys"] = null;
      }
      return this.master.call('exports/activity', params, onsuccess, onerror);
    };

    return Exports;

  })();

  m.Users = (function() {

    function Users(master) {
      this.master = master;
    }

    /*
        Return the information about the API-connected user
        @param {Object} params the hash of the parameters to pass to the request
        @param {Function} onsuccess an optional callback to execute when the API call is successfully made
        @param {Function} onerror an optional callback to execute when the API call errors out - defaults to throwing the error as an exception
    */


    Users.prototype.info = function(params, onsuccess, onerror) {
      if (params == null) {
        params = {};
      }
      if (typeof params === 'function') {
        onerror = onsuccess;
        onsuccess = params;
        params = {};
      }
      return this.master.call('users/info', params, onsuccess, onerror);
    };

    /*
        Validate an API key and respond to a ping
        @param {Object} params the hash of the parameters to pass to the request
        @param {Function} onsuccess an optional callback to execute when the API call is successfully made
        @param {Function} onerror an optional callback to execute when the API call errors out - defaults to throwing the error as an exception
    */


    Users.prototype.ping = function(params, onsuccess, onerror) {
      if (params == null) {
        params = {};
      }
      if (typeof params === 'function') {
        onerror = onsuccess;
        onsuccess = params;
        params = {};
      }
      return this.master.call('users/ping', params, onsuccess, onerror);
    };

    /*
        Validate an API key and respond to a ping (anal JSON parser version)
        @param {Object} params the hash of the parameters to pass to the request
        @param {Function} onsuccess an optional callback to execute when the API call is successfully made
        @param {Function} onerror an optional callback to execute when the API call errors out - defaults to throwing the error as an exception
    */


    Users.prototype.ping2 = function(params, onsuccess, onerror) {
      if (params == null) {
        params = {};
      }
      if (typeof params === 'function') {
        onerror = onsuccess;
        onsuccess = params;
        params = {};
      }
      return this.master.call('users/ping2', params, onsuccess, onerror);
    };

    /*
        Return the senders that have tried to use this account, both verified and unverified
        @param {Object} params the hash of the parameters to pass to the request
        @param {Function} onsuccess an optional callback to execute when the API call is successfully made
        @param {Function} onerror an optional callback to execute when the API call errors out - defaults to throwing the error as an exception
    */


    Users.prototype.senders = function(params, onsuccess, onerror) {
      if (params == null) {
        params = {};
      }
      if (typeof params === 'function') {
        onerror = onsuccess;
        onsuccess = params;
        params = {};
      }
      return this.master.call('users/senders', params, onsuccess, onerror);
    };

    return Users;

  })();

  m.Rejects = (function() {

    function Rejects(master) {
      this.master = master;
    }

    /*
        Adds an email to your email rejection blacklist. Addresses that you
    add manually will never expire and there is no reputation penalty
    for removing them from your blacklist. Attempting to blacklist an
    address that has been whitelisted will have no effect.
        @param {Object} params the hash of the parameters to pass to the request
        @option params {String} email an email address to block
        @option params {String} comment an optional comment describing the rejection
        @option params {String} subaccount an optional unique identifier for the subaccount to limit the blacklist entry
        @param {Function} onsuccess an optional callback to execute when the API call is successfully made
        @param {Function} onerror an optional callback to execute when the API call errors out - defaults to throwing the error as an exception
    */


    Rejects.prototype.add = function(params, onsuccess, onerror) {
      var _ref, _ref1;
      if (params == null) {
        params = {};
      }
      if (typeof params === 'function') {
        onerror = onsuccess;
        onsuccess = params;
        params = {};
      }
      if ((_ref = params["comment"]) == null) {
        params["comment"] = null;
      }
      if ((_ref1 = params["subaccount"]) == null) {
        params["subaccount"] = null;
      }
      return this.master.call('rejects/add', params, onsuccess, onerror);
    };

    /*
        Retrieves your email rejection blacklist. You can provide an email
    address to limit the results. Returns up to 1000 results. By default,
    entries that have expired are excluded from the results; set
    include_expired to true to include them.
        @param {Object} params the hash of the parameters to pass to the request
        @option params {String} email an optional email address to search by
        @option params {Boolean} include_expired whether to include rejections that have already expired.
        @option params {String} subaccount an optional unique identifier for the subaccount to limit the blacklist
        @param {Function} onsuccess an optional callback to execute when the API call is successfully made
        @param {Function} onerror an optional callback to execute when the API call errors out - defaults to throwing the error as an exception
    */


    Rejects.prototype.list = function(params, onsuccess, onerror) {
      var _ref, _ref1, _ref2;
      if (params == null) {
        params = {};
      }
      if (typeof params === 'function') {
        onerror = onsuccess;
        onsuccess = params;
        params = {};
      }
      if ((_ref = params["email"]) == null) {
        params["email"] = null;
      }
      if ((_ref1 = params["include_expired"]) == null) {
        params["include_expired"] = false;
      }
      if ((_ref2 = params["subaccount"]) == null) {
        params["subaccount"] = null;
      }
      return this.master.call('rejects/list', params, onsuccess, onerror);
    };

    /*
        Deletes an email rejection. There is no limit to how many rejections
    you can remove from your blacklist, but keep in mind that each deletion
    has an affect on your reputation.
        @param {Object} params the hash of the parameters to pass to the request
        @option params {String} email an email address
        @option params {String} subaccount an optional unique identifier for the subaccount to limit the blacklist deletion
        @param {Function} onsuccess an optional callback to execute when the API call is successfully made
        @param {Function} onerror an optional callback to execute when the API call errors out - defaults to throwing the error as an exception
    */


    Rejects.prototype["delete"] = function(params, onsuccess, onerror) {
      var _ref;
      if (params == null) {
        params = {};
      }
      if (typeof params === 'function') {
        onerror = onsuccess;
        onsuccess = params;
        params = {};
      }
      if ((_ref = params["subaccount"]) == null) {
        params["subaccount"] = null;
      }
      return this.master.call('rejects/delete', params, onsuccess, onerror);
    };

    return Rejects;

  })();

  m.Inbound = (function() {

    function Inbound(master) {
      this.master = master;
    }

    /*
        List the domains that have been configured for inbound delivery
        @param {Object} params the hash of the parameters to pass to the request
        @param {Function} onsuccess an optional callback to execute when the API call is successfully made
        @param {Function} onerror an optional callback to execute when the API call errors out - defaults to throwing the error as an exception
    */


    Inbound.prototype.domains = function(params, onsuccess, onerror) {
      if (params == null) {
        params = {};
      }
      if (typeof params === 'function') {
        onerror = onsuccess;
        onsuccess = params;
        params = {};
      }
      return this.master.call('inbound/domains', params, onsuccess, onerror);
    };

    /*
        Add an inbound domain to your account
        @param {Object} params the hash of the parameters to pass to the request
        @option params {String} domain a domain name
        @param {Function} onsuccess an optional callback to execute when the API call is successfully made
        @param {Function} onerror an optional callback to execute when the API call errors out - defaults to throwing the error as an exception
    */


    Inbound.prototype.addDomain = function(params, onsuccess, onerror) {
      if (params == null) {
        params = {};
      }
      if (typeof params === 'function') {
        onerror = onsuccess;
        onsuccess = params;
        params = {};
      }
      return this.master.call('inbound/add-domain', params, onsuccess, onerror);
    };

    /*
        Check the MX settings for an inbound domain. The domain must have already been added with the add-domain call
        @param {Object} params the hash of the parameters to pass to the request
        @option params {String} domain an existing inbound domain
        @param {Function} onsuccess an optional callback to execute when the API call is successfully made
        @param {Function} onerror an optional callback to execute when the API call errors out - defaults to throwing the error as an exception
    */


    Inbound.prototype.checkDomain = function(params, onsuccess, onerror) {
      if (params == null) {
        params = {};
      }
      if (typeof params === 'function') {
        onerror = onsuccess;
        onsuccess = params;
        params = {};
      }
      return this.master.call('inbound/check-domain', params, onsuccess, onerror);
    };

    /*
        Delete an inbound domain from the account. All mail will stop routing for this domain immediately.
        @param {Object} params the hash of the parameters to pass to the request
        @option params {String} domain an existing inbound domain
        @param {Function} onsuccess an optional callback to execute when the API call is successfully made
        @param {Function} onerror an optional callback to execute when the API call errors out - defaults to throwing the error as an exception
    */


    Inbound.prototype.deleteDomain = function(params, onsuccess, onerror) {
      if (params == null) {
        params = {};
      }
      if (typeof params === 'function') {
        onerror = onsuccess;
        onsuccess = params;
        params = {};
      }
      return this.master.call('inbound/delete-domain', params, onsuccess, onerror);
    };

    /*
        List the mailbox routes defined for an inbound domain
        @param {Object} params the hash of the parameters to pass to the request
        @option params {String} domain the domain to check
        @param {Function} onsuccess an optional callback to execute when the API call is successfully made
        @param {Function} onerror an optional callback to execute when the API call errors out - defaults to throwing the error as an exception
    */


    Inbound.prototype.routes = function(params, onsuccess, onerror) {
      if (params == null) {
        params = {};
      }
      if (typeof params === 'function') {
        onerror = onsuccess;
        onsuccess = params;
        params = {};
      }
      return this.master.call('inbound/routes', params, onsuccess, onerror);
    };

    /*
        Add a new mailbox route to an inbound domain
        @param {Object} params the hash of the parameters to pass to the request
        @option params {String} domain an existing inbound domain
        @option params {String} pattern the search pattern that the mailbox name should match
        @option params {String} url the webhook URL where the inbound messages will be published
        @param {Function} onsuccess an optional callback to execute when the API call is successfully made
        @param {Function} onerror an optional callback to execute when the API call errors out - defaults to throwing the error as an exception
    */


    Inbound.prototype.addRoute = function(params, onsuccess, onerror) {
      if (params == null) {
        params = {};
      }
      if (typeof params === 'function') {
        onerror = onsuccess;
        onsuccess = params;
        params = {};
      }
      return this.master.call('inbound/add-route', params, onsuccess, onerror);
    };

    /*
        Update the pattern or webhook of an existing inbound mailbox route. If null is provided for any fields, the values will remain unchanged.
        @param {Object} params the hash of the parameters to pass to the request
        @option params {String} id the unique identifier of an existing mailbox route
        @option params {String} pattern the search pattern that the mailbox name should match
        @option params {String} url the webhook URL where the inbound messages will be published
        @param {Function} onsuccess an optional callback to execute when the API call is successfully made
        @param {Function} onerror an optional callback to execute when the API call errors out - defaults to throwing the error as an exception
    */


    Inbound.prototype.updateRoute = function(params, onsuccess, onerror) {
      var _ref, _ref1;
      if (params == null) {
        params = {};
      }
      if (typeof params === 'function') {
        onerror = onsuccess;
        onsuccess = params;
        params = {};
      }
      if ((_ref = params["pattern"]) == null) {
        params["pattern"] = null;
      }
      if ((_ref1 = params["url"]) == null) {
        params["url"] = null;
      }
      return this.master.call('inbound/update-route', params, onsuccess, onerror);
    };

    /*
        Delete an existing inbound mailbox route
        @param {Object} params the hash of the parameters to pass to the request
        @option params {String} id the unique identifier of an existing route
        @param {Function} onsuccess an optional callback to execute when the API call is successfully made
        @param {Function} onerror an optional callback to execute when the API call errors out - defaults to throwing the error as an exception
    */


    Inbound.prototype.deleteRoute = function(params, onsuccess, onerror) {
      if (params == null) {
        params = {};
      }
      if (typeof params === 'function') {
        onerror = onsuccess;
        onsuccess = params;
        params = {};
      }
      return this.master.call('inbound/delete-route', params, onsuccess, onerror);
    };

    /*
        Take a raw MIME document destined for a domain with inbound domains set up, and send it to the inbound hook exactly as if it had been sent over SMTP
        @param {Object} params the hash of the parameters to pass to the request
        @option params {String} raw_message the full MIME document of an email message
        @option params {Array|null} to optionally define the recipients to receive the message - otherwise we'll use the To, Cc, and Bcc headers provided in the document
             - to[] {String} the email address of the recipient
        @option params {String} mail_from the address specified in the MAIL FROM stage of the SMTP conversation. Required for the SPF check.
        @option params {String} helo the identification provided by the client mta in the MTA state of the SMTP conversation. Required for the SPF check.
        @option params {String} client_address the remote MTA's ip address. Optional; required for the SPF check.
        @param {Function} onsuccess an optional callback to execute when the API call is successfully made
        @param {Function} onerror an optional callback to execute when the API call errors out - defaults to throwing the error as an exception
    */


    Inbound.prototype.sendRaw = function(params, onsuccess, onerror) {
      var _ref, _ref1, _ref2, _ref3;
      if (params == null) {
        params = {};
      }
      if (typeof params === 'function') {
        onerror = onsuccess;
        onsuccess = params;
        params = {};
      }
      if ((_ref = params["to"]) == null) {
        params["to"] = null;
      }
      if ((_ref1 = params["mail_from"]) == null) {
        params["mail_from"] = null;
      }
      if ((_ref2 = params["helo"]) == null) {
        params["helo"] = null;
      }
      if ((_ref3 = params["client_address"]) == null) {
        params["client_address"] = null;
      }
      return this.master.call('inbound/send-raw', params, onsuccess, onerror);
    };

    return Inbound;

  })();

  m.Tags = (function() {

    function Tags(master) {
      this.master = master;
    }

    /*
        Return all of the user-defined tag information
        @param {Object} params the hash of the parameters to pass to the request
        @param {Function} onsuccess an optional callback to execute when the API call is successfully made
        @param {Function} onerror an optional callback to execute when the API call errors out - defaults to throwing the error as an exception
    */


    Tags.prototype.list = function(params, onsuccess, onerror) {
      if (params == null) {
        params = {};
      }
      if (typeof params === 'function') {
        onerror = onsuccess;
        onsuccess = params;
        params = {};
      }
      return this.master.call('tags/list', params, onsuccess, onerror);
    };

    /*
        Deletes a tag permanently. Deleting a tag removes the tag from any messages
    that have been sent, and also deletes the tag's stats. There is no way to
    undo this operation, so use it carefully.
        @param {Object} params the hash of the parameters to pass to the request
        @option params {String} tag a tag name
        @param {Function} onsuccess an optional callback to execute when the API call is successfully made
        @param {Function} onerror an optional callback to execute when the API call errors out - defaults to throwing the error as an exception
    */


    Tags.prototype["delete"] = function(params, onsuccess, onerror) {
      if (params == null) {
        params = {};
      }
      if (typeof params === 'function') {
        onerror = onsuccess;
        onsuccess = params;
        params = {};
      }
      return this.master.call('tags/delete', params, onsuccess, onerror);
    };

    /*
        Return more detailed information about a single tag, including aggregates of recent stats
        @param {Object} params the hash of the parameters to pass to the request
        @option params {String} tag an existing tag name
        @param {Function} onsuccess an optional callback to execute when the API call is successfully made
        @param {Function} onerror an optional callback to execute when the API call errors out - defaults to throwing the error as an exception
    */


    Tags.prototype.info = function(params, onsuccess, onerror) {
      if (params == null) {
        params = {};
      }
      if (typeof params === 'function') {
        onerror = onsuccess;
        onsuccess = params;
        params = {};
      }
      return this.master.call('tags/info', params, onsuccess, onerror);
    };

    /*
        Return the recent history (hourly stats for the last 30 days) for a tag
        @param {Object} params the hash of the parameters to pass to the request
        @option params {String} tag an existing tag name
        @param {Function} onsuccess an optional callback to execute when the API call is successfully made
        @param {Function} onerror an optional callback to execute when the API call errors out - defaults to throwing the error as an exception
    */


    Tags.prototype.timeSeries = function(params, onsuccess, onerror) {
      if (params == null) {
        params = {};
      }
      if (typeof params === 'function') {
        onerror = onsuccess;
        onsuccess = params;
        params = {};
      }
      return this.master.call('tags/time-series', params, onsuccess, onerror);
    };

    /*
        Return the recent history (hourly stats for the last 30 days) for all tags
        @param {Object} params the hash of the parameters to pass to the request
        @param {Function} onsuccess an optional callback to execute when the API call is successfully made
        @param {Function} onerror an optional callback to execute when the API call errors out - defaults to throwing the error as an exception
    */


    Tags.prototype.allTimeSeries = function(params, onsuccess, onerror) {
      if (params == null) {
        params = {};
      }
      if (typeof params === 'function') {
        onerror = onsuccess;
        onsuccess = params;
        params = {};
      }
      return this.master.call('tags/all-time-series', params, onsuccess, onerror);
    };

    return Tags;

  })();

  m.Messages = (function() {

    function Messages(master) {
      this.master = master;
    }

    /*
        Send a new transactional message through Mandrill
        @param {Object} params the hash of the parameters to pass to the request
        @option params {Struct} message the information on the message to send
             - html {String} the full HTML content to be sent
             - text {String} optional full text content to be sent
             - subject {String} the message subject
             - from_email {String} the sender email address.
             - from_name {String} optional from name to be used
             - to {Array} an array of recipient information.
                 - to[] {Object} a single recipient's information.
                     - email {String} the email address of the recipient
                     - name {String} the optional display name to use for the recipient
                     - type {String} the header type to use for the recipient, defaults to "to" if not provided
             - headers {Object} optional extra headers to add to the message (most headers are allowed)
             - important {Boolean} whether or not this message is important, and should be delivered ahead of non-important messages
             - track_opens {Boolean} whether or not to turn on open tracking for the message
             - track_clicks {Boolean} whether or not to turn on click tracking for the message
             - auto_text {Boolean} whether or not to automatically generate a text part for messages that are not given text
             - auto_html {Boolean} whether or not to automatically generate an HTML part for messages that are not given HTML
             - inline_css {Boolean} whether or not to automatically inline all CSS styles provided in the message HTML - only for HTML documents less than 256KB in size
             - url_strip_qs {Boolean} whether or not to strip the query string from URLs when aggregating tracked URL data
             - preserve_recipients {Boolean} whether or not to expose all recipients in to "To" header for each email
             - view_content_link {Boolean} set to false to remove content logging for sensitive emails
             - bcc_address {String} an optional address to receive an exact copy of each recipient's email
             - tracking_domain {String} a custom domain to use for tracking opens and clicks instead of mandrillapp.com
             - signing_domain {String} a custom domain to use for SPF/DKIM signing instead of mandrill (for "via" or "on behalf of" in email clients)
             - return_path_domain {String} a custom domain to use for the messages's return-path
             - merge {Boolean} whether to evaluate merge tags in the message. Will automatically be set to true if either merge_vars or global_merge_vars are provided.
             - global_merge_vars {Array} global merge variables to use for all recipients. You can override these per recipient.
                 - global_merge_vars[] {Object} a single global merge variable
                     - name {String} the global merge variable's name. Merge variable names are case-insensitive and may not start with _
                     - content {String} the global merge variable's content
             - merge_vars {Array} per-recipient merge variables, which override global merge variables with the same name.
                 - merge_vars[] {Object} per-recipient merge variables
                     - rcpt {String} the email address of the recipient that the merge variables should apply to
                     - vars {Array} the recipient's merge variables
                         - vars[] {Object} a single merge variable
                             - name {String} the merge variable's name. Merge variable names are case-insensitive and may not start with _
                             - content {String} the merge variable's content
             - tags {Array} an array of string to tag the message with.  Stats are accumulated using tags, though we only store the first 100 we see, so this should not be unique or change frequently.  Tags should be 50 characters or less.  Any tags starting with an underscore are reserved for internal use and will cause errors.
                 - tags[] {String} a single tag - must not start with an underscore
             - subaccount {String} the unique id of a subaccount for this message - must already exist or will fail with an error
             - google_analytics_domains {Array} an array of strings indicating for which any matching URLs will automatically have Google Analytics parameters appended to their query string automatically.
             - google_analytics_campaign {Array|string} optional string indicating the value to set for the utm_campaign tracking parameter. If this isn't provided the email's from address will be used instead.
             - metadata {Array} metadata an associative array of user metadata. Mandrill will store this metadata and make it available for retrieval. In addition, you can select up to 10 metadata fields to index and make searchable using the Mandrill search api.
             - recipient_metadata {Array} Per-recipient metadata that will override the global values specified in the metadata parameter.
                 - recipient_metadata[] {Object} metadata for a single recipient
                     - rcpt {String} the email address of the recipient that the metadata is associated with
                     - values {Array} an associated array containing the recipient's unique metadata. If a key exists in both the per-recipient metadata and the global metadata, the per-recipient metadata will be used.
             - attachments {Array} an array of supported attachments to add to the message
                 - attachments[] {Object} a single supported attachment
                     - type {String} the MIME type of the attachment
                     - name {String} the file name of the attachment
                     - content {String} the content of the attachment as a base64-encoded string
             - images {Array} an array of embedded images to add to the message
                 - images[] {Object} a single embedded image
                     - type {String} the MIME type of the image - must start with "image/"
                     - name {String} the Content ID of the image - use <img src="cid:THIS_VALUE"> to reference the image in your HTML content
                     - content {String} the content of the image as a base64-encoded string
        @option params {Boolean} async enable a background sending mode that is optimized for bulk sending. In async mode, messages/send will immediately return a status of "queued" for every recipient. To handle rejections when sending in async mode, set up a webhook for the 'reject' event. Defaults to false for messages with no more than 10 recipients; messages with more than 10 recipients are always sent asynchronously, regardless of the value of async.
        @option params {String} ip_pool the name of the dedicated ip pool that should be used to send the message. If you do not have any dedicated IPs, this parameter has no effect. If you specify a pool that does not exist, your default pool will be used instead.
        @option params {String} send_at when this message should be sent as a UTC timestamp in YYYY-MM-DD HH:MM:SS format. If you specify a time in the past, the message will be sent immediately. An additional fee applies for scheduled email, and this feature is only available to accounts with a positive balance.
        @param {Function} onsuccess an optional callback to execute when the API call is successfully made
        @param {Function} onerror an optional callback to execute when the API call errors out - defaults to throwing the error as an exception
    */


    Messages.prototype.send = function(params, onsuccess, onerror) {
      var _ref, _ref1, _ref2;
      if (params == null) {
        params = {};
      }
      if (typeof params === 'function') {
        onerror = onsuccess;
        onsuccess = params;
        params = {};
      }
      if ((_ref = params["async"]) == null) {
        params["async"] = false;
      }
      if ((_ref1 = params["ip_pool"]) == null) {
        params["ip_pool"] = null;
      }
      if ((_ref2 = params["send_at"]) == null) {
        params["send_at"] = null;
      }
      return this.master.call('messages/send', params, onsuccess, onerror);
    };

    /*
        Send a new transactional message through Mandrill using a template
        @param {Object} params the hash of the parameters to pass to the request
        @option params {String} template_name the immutable name or slug of a template that exists in the user's account. For backwards-compatibility, the template name may also be used but the immutable slug is preferred.
        @option params {Array} template_content an array of template content to send.  Each item in the array should be a struct with two keys - name: the name of the content block to set the content for, and content: the actual content to put into the block
             - template_content[] {Object} the injection of a single piece of content into a single editable region
                 - name {String} the name of the mc:edit editable region to inject into
                 - content {String} the content to inject
        @option params {Struct} message the other information on the message to send - same as /messages/send, but without the html content
             - html {String} optional full HTML content to be sent if not in template
             - text {String} optional full text content to be sent
             - subject {String} the message subject
             - from_email {String} the sender email address.
             - from_name {String} optional from name to be used
             - to {Array} an array of recipient information.
                 - to[] {Object} a single recipient's information.
                     - email {String} the email address of the recipient
                     - name {String} the optional display name to use for the recipient
                     - type {String} the header type to use for the recipient, defaults to "to" if not provided
             - headers {Object} optional extra headers to add to the message (most headers are allowed)
             - important {Boolean} whether or not this message is important, and should be delivered ahead of non-important messages
             - track_opens {Boolean} whether or not to turn on open tracking for the message
             - track_clicks {Boolean} whether or not to turn on click tracking for the message
             - auto_text {Boolean} whether or not to automatically generate a text part for messages that are not given text
             - auto_html {Boolean} whether or not to automatically generate an HTML part for messages that are not given HTML
             - inline_css {Boolean} whether or not to automatically inline all CSS styles provided in the message HTML - only for HTML documents less than 256KB in size
             - url_strip_qs {Boolean} whether or not to strip the query string from URLs when aggregating tracked URL data
             - preserve_recipients {Boolean} whether or not to expose all recipients in to "To" header for each email
             - view_content_link {Boolean} set to false to remove content logging for sensitive emails
             - bcc_address {String} an optional address to receive an exact copy of each recipient's email
             - tracking_domain {String} a custom domain to use for tracking opens and clicks instead of mandrillapp.com
             - signing_domain {String} a custom domain to use for SPF/DKIM signing instead of mandrill (for "via" or "on behalf of" in email clients)
             - return_path_domain {String} a custom domain to use for the messages's return-path
             - merge {Boolean} whether to evaluate merge tags in the message. Will automatically be set to true if either merge_vars or global_merge_vars are provided.
             - global_merge_vars {Array} global merge variables to use for all recipients. You can override these per recipient.
                 - global_merge_vars[] {Object} a single global merge variable
                     - name {String} the global merge variable's name. Merge variable names are case-insensitive and may not start with _
                     - content {String} the global merge variable's content
             - merge_vars {Array} per-recipient merge variables, which override global merge variables with the same name.
                 - merge_vars[] {Object} per-recipient merge variables
                     - rcpt {String} the email address of the recipient that the merge variables should apply to
                     - vars {Array} the recipient's merge variables
                         - vars[] {Object} a single merge variable
                             - name {String} the merge variable's name. Merge variable names are case-insensitive and may not start with _
                             - content {String} the merge variable's content
             - tags {Array} an array of string to tag the message with.  Stats are accumulated using tags, though we only store the first 100 we see, so this should not be unique or change frequently.  Tags should be 50 characters or less.  Any tags starting with an underscore are reserved for internal use and will cause errors.
                 - tags[] {String} a single tag - must not start with an underscore
             - subaccount {String} the unique id of a subaccount for this message - must already exist or will fail with an error
             - google_analytics_domains {Array} an array of strings indicating for which any matching URLs will automatically have Google Analytics parameters appended to their query string automatically.
             - google_analytics_campaign {Array|string} optional string indicating the value to set for the utm_campaign tracking parameter. If this isn't provided the email's from address will be used instead.
             - metadata {Array} metadata an associative array of user metadata. Mandrill will store this metadata and make it available for retrieval. In addition, you can select up to 10 metadata fields to index and make searchable using the Mandrill search api.
             - recipient_metadata {Array} Per-recipient metadata that will override the global values specified in the metadata parameter.
                 - recipient_metadata[] {Object} metadata for a single recipient
                     - rcpt {String} the email address of the recipient that the metadata is associated with
                     - values {Array} an associated array containing the recipient's unique metadata. If a key exists in both the per-recipient metadata and the global metadata, the per-recipient metadata will be used.
             - attachments {Array} an array of supported attachments to add to the message
                 - attachments[] {Object} a single supported attachment
                     - type {String} the MIME type of the attachment
                     - name {String} the file name of the attachment
                     - content {String} the content of the attachment as a base64-encoded string
             - images {Array} an array of embedded images to add to the message
                 - images[] {Object} a single embedded image
                     - type {String} the MIME type of the image - must start with "image/"
                     - name {String} the Content ID of the image - use <img src="cid:THIS_VALUE"> to reference the image in your HTML content
                     - content {String} the content of the image as a base64-encoded string
        @option params {Boolean} async enable a background sending mode that is optimized for bulk sending. In async mode, messages/send will immediately return a status of "queued" for every recipient. To handle rejections when sending in async mode, set up a webhook for the 'reject' event. Defaults to false for messages with no more than 10 recipients; messages with more than 10 recipients are always sent asynchronously, regardless of the value of async.
        @option params {String} ip_pool the name of the dedicated ip pool that should be used to send the message. If you do not have any dedicated IPs, this parameter has no effect. If you specify a pool that does not exist, your default pool will be used instead.
        @option params {String} send_at when this message should be sent as a UTC timestamp in YYYY-MM-DD HH:MM:SS format. If you specify a time in the past, the message will be sent immediately. An additional fee applies for scheduled email, and this feature is only available to accounts with a positive balance.
        @param {Function} onsuccess an optional callback to execute when the API call is successfully made
        @param {Function} onerror an optional callback to execute when the API call errors out - defaults to throwing the error as an exception
    */


    Messages.prototype.sendTemplate = function(params, onsuccess, onerror) {
      var _ref, _ref1, _ref2;
      if (params == null) {
        params = {};
      }
      if (typeof params === 'function') {
        onerror = onsuccess;
        onsuccess = params;
        params = {};
      }
      if ((_ref = params["async"]) == null) {
        params["async"] = false;
      }
      if ((_ref1 = params["ip_pool"]) == null) {
        params["ip_pool"] = null;
      }
      if ((_ref2 = params["send_at"]) == null) {
        params["send_at"] = null;
      }
      return this.master.call('messages/send-template', params, onsuccess, onerror);
    };

    /*
        Search recently sent messages and optionally narrow by date range, tags, senders, and API keys. If no date range is specified, results within the last 7 days are returned. This method may be called up to 20 times per minute. If you need the data more often, you can use <a href="/api/docs/messages.html#method=info">/messages/info.json</a> to get the information for a single message, or <a href="http://help.mandrill.com/entries/21738186-Introduction-to-Webhooks">webhooks</a> to push activity to your own application for querying.
        @param {Object} params the hash of the parameters to pass to the request
        @option params {String} query <a href="http://help.mandrill.com/entries/22211902">search terms</a> to find matching messages
        @option params {String} date_from start date
        @option params {String} date_to end date
        @option params {Array} tags an array of tag names to narrow the search to, will return messages that contain ANY of the tags
        @option params {Array} senders an array of sender addresses to narrow the search to, will return messages sent by ANY of the senders
        @option params {Array} api_keys an array of API keys to narrow the search to, will return messages sent by ANY of the keys
        @option params {Integer} limit the maximum number of results to return, defaults to 100, 1000 is the maximum
        @param {Function} onsuccess an optional callback to execute when the API call is successfully made
        @param {Function} onerror an optional callback to execute when the API call errors out - defaults to throwing the error as an exception
    */


    Messages.prototype.search = function(params, onsuccess, onerror) {
      var _ref, _ref1, _ref2, _ref3, _ref4, _ref5, _ref6;
      if (params == null) {
        params = {};
      }
      if (typeof params === 'function') {
        onerror = onsuccess;
        onsuccess = params;
        params = {};
      }
      if ((_ref = params["query"]) == null) {
        params["query"] = '*';
      }
      if ((_ref1 = params["date_from"]) == null) {
        params["date_from"] = null;
      }
      if ((_ref2 = params["date_to"]) == null) {
        params["date_to"] = null;
      }
      if ((_ref3 = params["tags"]) == null) {
        params["tags"] = null;
      }
      if ((_ref4 = params["senders"]) == null) {
        params["senders"] = null;
      }
      if ((_ref5 = params["api_keys"]) == null) {
        params["api_keys"] = null;
      }
      if ((_ref6 = params["limit"]) == null) {
        params["limit"] = 100;
      }
      return this.master.call('messages/search', params, onsuccess, onerror);
    };

    /*
        Search the content of recently sent messages and return the aggregated hourly stats for matching messages
        @param {Object} params the hash of the parameters to pass to the request
        @option params {String} query the search terms to find matching messages for
        @option params {String} date_from start date
        @option params {String} date_to end date
        @option params {Array} tags an array of tag names to narrow the search to, will return messages that contain ANY of the tags
        @option params {Array} senders an array of sender addresses to narrow the search to, will return messages sent by ANY of the senders
        @param {Function} onsuccess an optional callback to execute when the API call is successfully made
        @param {Function} onerror an optional callback to execute when the API call errors out - defaults to throwing the error as an exception
    */


    Messages.prototype.searchTimeSeries = function(params, onsuccess, onerror) {
      var _ref, _ref1, _ref2, _ref3, _ref4;
      if (params == null) {
        params = {};
      }
      if (typeof params === 'function') {
        onerror = onsuccess;
        onsuccess = params;
        params = {};
      }
      if ((_ref = params["query"]) == null) {
        params["query"] = '*';
      }
      if ((_ref1 = params["date_from"]) == null) {
        params["date_from"] = null;
      }
      if ((_ref2 = params["date_to"]) == null) {
        params["date_to"] = null;
      }
      if ((_ref3 = params["tags"]) == null) {
        params["tags"] = null;
      }
      if ((_ref4 = params["senders"]) == null) {
        params["senders"] = null;
      }
      return this.master.call('messages/search-time-series', params, onsuccess, onerror);
    };

    /*
        Get the information for a single recently sent message
        @param {Object} params the hash of the parameters to pass to the request
        @option params {String} id the unique id of the message to get - passed as the "_id" field in webhooks, send calls, or search calls
        @param {Function} onsuccess an optional callback to execute when the API call is successfully made
        @param {Function} onerror an optional callback to execute when the API call errors out - defaults to throwing the error as an exception
    */


    Messages.prototype.info = function(params, onsuccess, onerror) {
      if (params == null) {
        params = {};
      }
      if (typeof params === 'function') {
        onerror = onsuccess;
        onsuccess = params;
        params = {};
      }
      return this.master.call('messages/info', params, onsuccess, onerror);
    };

    /*
        Get the full content of a recently sent message
        @param {Object} params the hash of the parameters to pass to the request
        @option params {String} id the unique id of the message to get - passed as the "_id" field in webhooks, send calls, or search calls
        @param {Function} onsuccess an optional callback to execute when the API call is successfully made
        @param {Function} onerror an optional callback to execute when the API call errors out - defaults to throwing the error as an exception
    */


    Messages.prototype.content = function(params, onsuccess, onerror) {
      if (params == null) {
        params = {};
      }
      if (typeof params === 'function') {
        onerror = onsuccess;
        onsuccess = params;
        params = {};
      }
      return this.master.call('messages/content', params, onsuccess, onerror);
    };

    /*
        Parse the full MIME document for an email message, returning the content of the message broken into its constituent pieces
        @param {Object} params the hash of the parameters to pass to the request
        @option params {String} raw_message the full MIME document of an email message
        @param {Function} onsuccess an optional callback to execute when the API call is successfully made
        @param {Function} onerror an optional callback to execute when the API call errors out - defaults to throwing the error as an exception
    */


    Messages.prototype.parse = function(params, onsuccess, onerror) {
      if (params == null) {
        params = {};
      }
      if (typeof params === 'function') {
        onerror = onsuccess;
        onsuccess = params;
        params = {};
      }
      return this.master.call('messages/parse', params, onsuccess, onerror);
    };

    /*
        Take a raw MIME document for a message, and send it exactly as if it were sent through Mandrill's SMTP servers
        @param {Object} params the hash of the parameters to pass to the request
        @option params {String} raw_message the full MIME document of an email message
        @option params {String|null} from_email optionally define the sender address - otherwise we'll use the address found in the provided headers
        @option params {String|null} from_name optionally define the sender alias
        @option params {Array|null} to optionally define the recipients to receive the message - otherwise we'll use the To, Cc, and Bcc headers provided in the document
             - to[] {String} the email address of the recipient
        @option params {Boolean} async enable a background sending mode that is optimized for bulk sending. In async mode, messages/sendRaw will immediately return a status of "queued" for every recipient. To handle rejections when sending in async mode, set up a webhook for the 'reject' event. Defaults to false for messages with no more than 10 recipients; messages with more than 10 recipients are always sent asynchronously, regardless of the value of async.
        @option params {String} ip_pool the name of the dedicated ip pool that should be used to send the message. If you do not have any dedicated IPs, this parameter has no effect. If you specify a pool that does not exist, your default pool will be used instead.
        @option params {String} send_at when this message should be sent as a UTC timestamp in YYYY-MM-DD HH:MM:SS format. If you specify a time in the past, the message will be sent immediately.
        @option params {String} return_path_domain a custom domain to use for the messages's return-path
        @param {Function} onsuccess an optional callback to execute when the API call is successfully made
        @param {Function} onerror an optional callback to execute when the API call errors out - defaults to throwing the error as an exception
    */


    Messages.prototype.sendRaw = function(params, onsuccess, onerror) {
      var _ref, _ref1, _ref2, _ref3, _ref4, _ref5, _ref6;
      if (params == null) {
        params = {};
      }
      if (typeof params === 'function') {
        onerror = onsuccess;
        onsuccess = params;
        params = {};
      }
      if ((_ref = params["from_email"]) == null) {
        params["from_email"] = null;
      }
      if ((_ref1 = params["from_name"]) == null) {
        params["from_name"] = null;
      }
      if ((_ref2 = params["to"]) == null) {
        params["to"] = null;
      }
      if ((_ref3 = params["async"]) == null) {
        params["async"] = false;
      }
      if ((_ref4 = params["ip_pool"]) == null) {
        params["ip_pool"] = null;
      }
      if ((_ref5 = params["send_at"]) == null) {
        params["send_at"] = null;
      }
      if ((_ref6 = params["return_path_domain"]) == null) {
        params["return_path_domain"] = null;
      }
      return this.master.call('messages/send-raw', params, onsuccess, onerror);
    };

    /*
        Queries your scheduled emails by sender or recipient, or both.
        @param {Object} params the hash of the parameters to pass to the request
        @option params {String} to an optional recipient address to restrict results to
        @param {Function} onsuccess an optional callback to execute when the API call is successfully made
        @param {Function} onerror an optional callback to execute when the API call errors out - defaults to throwing the error as an exception
    */


    Messages.prototype.listScheduled = function(params, onsuccess, onerror) {
      var _ref;
      if (params == null) {
        params = {};
      }
      if (typeof params === 'function') {
        onerror = onsuccess;
        onsuccess = params;
        params = {};
      }
      if ((_ref = params["to"]) == null) {
        params["to"] = null;
      }
      return this.master.call('messages/list-scheduled', params, onsuccess, onerror);
    };

    /*
        Cancels a scheduled email.
        @param {Object} params the hash of the parameters to pass to the request
        @option params {String} id a scheduled email id, as returned by any of the messages/send calls or messages/list-scheduled
        @param {Function} onsuccess an optional callback to execute when the API call is successfully made
        @param {Function} onerror an optional callback to execute when the API call errors out - defaults to throwing the error as an exception
    */


    Messages.prototype.cancelScheduled = function(params, onsuccess, onerror) {
      if (params == null) {
        params = {};
      }
      if (typeof params === 'function') {
        onerror = onsuccess;
        onsuccess = params;
        params = {};
      }
      return this.master.call('messages/cancel-scheduled', params, onsuccess, onerror);
    };

    /*
        Reschedules a scheduled email.
        @param {Object} params the hash of the parameters to pass to the request
        @option params {String} id a scheduled email id, as returned by any of the messages/send calls or messages/list-scheduled
        @option params {String} send_at the new UTC timestamp when the message should sent. Mandrill can't time travel, so if you specify a time in past the message will be sent immediately
        @param {Function} onsuccess an optional callback to execute when the API call is successfully made
        @param {Function} onerror an optional callback to execute when the API call errors out - defaults to throwing the error as an exception
    */


    Messages.prototype.reschedule = function(params, onsuccess, onerror) {
      if (params == null) {
        params = {};
      }
      if (typeof params === 'function') {
        onerror = onsuccess;
        onsuccess = params;
        params = {};
      }
      return this.master.call('messages/reschedule', params, onsuccess, onerror);
    };

    return Messages;

  })();

  m.Whitelists = (function() {

    function Whitelists(master) {
      this.master = master;
    }

    /*
        Adds an email to your email rejection whitelist. If the address is
    currently on your blacklist, that blacklist entry will be removed
    automatically.
        @param {Object} params the hash of the parameters to pass to the request
        @option params {String} email an email address to add to the whitelist
        @option params {String} comment an optional description of why the email was whitelisted
        @param {Function} onsuccess an optional callback to execute when the API call is successfully made
        @param {Function} onerror an optional callback to execute when the API call errors out - defaults to throwing the error as an exception
    */


    Whitelists.prototype.add = function(params, onsuccess, onerror) {
      var _ref;
      if (params == null) {
        params = {};
      }
      if (typeof params === 'function') {
        onerror = onsuccess;
        onsuccess = params;
        params = {};
      }
      if ((_ref = params["comment"]) == null) {
        params["comment"] = null;
      }
      return this.master.call('whitelists/add', params, onsuccess, onerror);
    };

    /*
        Retrieves your email rejection whitelist. You can provide an email
    address or search prefix to limit the results. Returns up to 1000 results.
        @param {Object} params the hash of the parameters to pass to the request
        @option params {String} email an optional email address or prefix to search by
        @param {Function} onsuccess an optional callback to execute when the API call is successfully made
        @param {Function} onerror an optional callback to execute when the API call errors out - defaults to throwing the error as an exception
    */


    Whitelists.prototype.list = function(params, onsuccess, onerror) {
      var _ref;
      if (params == null) {
        params = {};
      }
      if (typeof params === 'function') {
        onerror = onsuccess;
        onsuccess = params;
        params = {};
      }
      if ((_ref = params["email"]) == null) {
        params["email"] = null;
      }
      return this.master.call('whitelists/list', params, onsuccess, onerror);
    };

    /*
        Removes an email address from the whitelist.
        @param {Object} params the hash of the parameters to pass to the request
        @option params {String} email the email address to remove from the whitelist
        @param {Function} onsuccess an optional callback to execute when the API call is successfully made
        @param {Function} onerror an optional callback to execute when the API call errors out - defaults to throwing the error as an exception
    */


    Whitelists.prototype["delete"] = function(params, onsuccess, onerror) {
      if (params == null) {
        params = {};
      }
      if (typeof params === 'function') {
        onerror = onsuccess;
        onsuccess = params;
        params = {};
      }
      return this.master.call('whitelists/delete', params, onsuccess, onerror);
    };

    return Whitelists;

  })();

  m.Ips = (function() {

    function Ips(master) {
      this.master = master;
    }

    /*
        Lists your dedicated IPs.
        @param {Object} params the hash of the parameters to pass to the request
        @param {Function} onsuccess an optional callback to execute when the API call is successfully made
        @param {Function} onerror an optional callback to execute when the API call errors out - defaults to throwing the error as an exception
    */


    Ips.prototype.list = function(params, onsuccess, onerror) {
      if (params == null) {
        params = {};
      }
      if (typeof params === 'function') {
        onerror = onsuccess;
        onsuccess = params;
        params = {};
      }
      return this.master.call('ips/list', params, onsuccess, onerror);
    };

    /*
        Retrieves information about a single dedicated ip.
        @param {Object} params the hash of the parameters to pass to the request
        @option params {String} ip a dedicated IP address
        @param {Function} onsuccess an optional callback to execute when the API call is successfully made
        @param {Function} onerror an optional callback to execute when the API call errors out - defaults to throwing the error as an exception
    */


    Ips.prototype.info = function(params, onsuccess, onerror) {
      if (params == null) {
        params = {};
      }
      if (typeof params === 'function') {
        onerror = onsuccess;
        onsuccess = params;
        params = {};
      }
      return this.master.call('ips/info', params, onsuccess, onerror);
    };

    /*
        Requests an additional dedicated IP for your account. Accounts may
    have one outstanding request at any time, and provisioning requests
    are processed within 24 hours.
        @param {Object} params the hash of the parameters to pass to the request
        @option params {Boolean} warmup whether to enable warmup mode for the ip
        @option params {String} pool the id of the pool to add the dedicated ip to, or null to use your account's default pool
        @param {Function} onsuccess an optional callback to execute when the API call is successfully made
        @param {Function} onerror an optional callback to execute when the API call errors out - defaults to throwing the error as an exception
    */


    Ips.prototype.provision = function(params, onsuccess, onerror) {
      var _ref, _ref1;
      if (params == null) {
        params = {};
      }
      if (typeof params === 'function') {
        onerror = onsuccess;
        onsuccess = params;
        params = {};
      }
      if ((_ref = params["warmup"]) == null) {
        params["warmup"] = false;
      }
      if ((_ref1 = params["pool"]) == null) {
        params["pool"] = null;
      }
      return this.master.call('ips/provision', params, onsuccess, onerror);
    };

    /*
        Begins the warmup process for a dedicated IP. During the warmup process,
    Mandrill will gradually increase the percentage of your mail that is sent over
    the warming-up IP, over a period of roughly 30 days. The rest of your mail
    will be sent over shared IPs or other dedicated IPs in the same pool.
        @param {Object} params the hash of the parameters to pass to the request
        @option params {String} ip a dedicated ip address
        @param {Function} onsuccess an optional callback to execute when the API call is successfully made
        @param {Function} onerror an optional callback to execute when the API call errors out - defaults to throwing the error as an exception
    */


    Ips.prototype.startWarmup = function(params, onsuccess, onerror) {
      if (params == null) {
        params = {};
      }
      if (typeof params === 'function') {
        onerror = onsuccess;
        onsuccess = params;
        params = {};
      }
      return this.master.call('ips/start-warmup', params, onsuccess, onerror);
    };

    /*
        Cancels the warmup process for a dedicated IP.
        @param {Object} params the hash of the parameters to pass to the request
        @option params {String} ip a dedicated ip address
        @param {Function} onsuccess an optional callback to execute when the API call is successfully made
        @param {Function} onerror an optional callback to execute when the API call errors out - defaults to throwing the error as an exception
    */


    Ips.prototype.cancelWarmup = function(params, onsuccess, onerror) {
      if (params == null) {
        params = {};
      }
      if (typeof params === 'function') {
        onerror = onsuccess;
        onsuccess = params;
        params = {};
      }
      return this.master.call('ips/cancel-warmup', params, onsuccess, onerror);
    };

    /*
        Moves a dedicated IP to a different pool.
        @param {Object} params the hash of the parameters to pass to the request
        @option params {String} ip a dedicated ip address
        @option params {String} pool the name of the new pool to add the dedicated ip to
        @option params {Boolean} create_pool whether to create the pool if it does not exist; if false and the pool does not exist, an Unknown_Pool will be thrown.
        @param {Function} onsuccess an optional callback to execute when the API call is successfully made
        @param {Function} onerror an optional callback to execute when the API call errors out - defaults to throwing the error as an exception
    */


    Ips.prototype.setPool = function(params, onsuccess, onerror) {
      var _ref;
      if (params == null) {
        params = {};
      }
      if (typeof params === 'function') {
        onerror = onsuccess;
        onsuccess = params;
        params = {};
      }
      if ((_ref = params["create_pool"]) == null) {
        params["create_pool"] = false;
      }
      return this.master.call('ips/set-pool', params, onsuccess, onerror);
    };

    /*
        Deletes a dedicated IP. This is permanent and cannot be undone.
        @param {Object} params the hash of the parameters to pass to the request
        @option params {String} ip the dedicated ip to remove from your account
        @param {Function} onsuccess an optional callback to execute when the API call is successfully made
        @param {Function} onerror an optional callback to execute when the API call errors out - defaults to throwing the error as an exception
    */


    Ips.prototype["delete"] = function(params, onsuccess, onerror) {
      if (params == null) {
        params = {};
      }
      if (typeof params === 'function') {
        onerror = onsuccess;
        onsuccess = params;
        params = {};
      }
      return this.master.call('ips/delete', params, onsuccess, onerror);
    };

    /*
        Lists your dedicated IP pools.
        @param {Object} params the hash of the parameters to pass to the request
        @param {Function} onsuccess an optional callback to execute when the API call is successfully made
        @param {Function} onerror an optional callback to execute when the API call errors out - defaults to throwing the error as an exception
    */


    Ips.prototype.listPools = function(params, onsuccess, onerror) {
      if (params == null) {
        params = {};
      }
      if (typeof params === 'function') {
        onerror = onsuccess;
        onsuccess = params;
        params = {};
      }
      return this.master.call('ips/list-pools', params, onsuccess, onerror);
    };

    /*
        Describes a single dedicated IP pool.
        @param {Object} params the hash of the parameters to pass to the request
        @option params {String} pool a pool name
        @param {Function} onsuccess an optional callback to execute when the API call is successfully made
        @param {Function} onerror an optional callback to execute when the API call errors out - defaults to throwing the error as an exception
    */


    Ips.prototype.poolInfo = function(params, onsuccess, onerror) {
      if (params == null) {
        params = {};
      }
      if (typeof params === 'function') {
        onerror = onsuccess;
        onsuccess = params;
        params = {};
      }
      return this.master.call('ips/pool-info', params, onsuccess, onerror);
    };

    /*
        Creates a pool and returns it. If a pool already exists with this
    name, no action will be performed.
        @param {Object} params the hash of the parameters to pass to the request
        @option params {String} pool the name of a pool to create
        @param {Function} onsuccess an optional callback to execute when the API call is successfully made
        @param {Function} onerror an optional callback to execute when the API call errors out - defaults to throwing the error as an exception
    */


    Ips.prototype.createPool = function(params, onsuccess, onerror) {
      if (params == null) {
        params = {};
      }
      if (typeof params === 'function') {
        onerror = onsuccess;
        onsuccess = params;
        params = {};
      }
      return this.master.call('ips/create-pool', params, onsuccess, onerror);
    };

    /*
        Deletes a pool. A pool must be empty before you can delete it, and you cannot delete your default pool.
        @param {Object} params the hash of the parameters to pass to the request
        @option params {String} pool the name of the pool to delete
        @param {Function} onsuccess an optional callback to execute when the API call is successfully made
        @param {Function} onerror an optional callback to execute when the API call errors out - defaults to throwing the error as an exception
    */


    Ips.prototype.deletePool = function(params, onsuccess, onerror) {
      if (params == null) {
        params = {};
      }
      if (typeof params === 'function') {
        onerror = onsuccess;
        onsuccess = params;
        params = {};
      }
      return this.master.call('ips/delete-pool', params, onsuccess, onerror);
    };

    /*
        Tests whether a domain name is valid for use as the custom reverse
    DNS for a dedicated IP.
        @param {Object} params the hash of the parameters to pass to the request
        @option params {String} ip a dedicated ip address
        @option params {String} domain the domain name to test
        @param {Function} onsuccess an optional callback to execute when the API call is successfully made
        @param {Function} onerror an optional callback to execute when the API call errors out - defaults to throwing the error as an exception
    */


    Ips.prototype.checkCustomDns = function(params, onsuccess, onerror) {
      if (params == null) {
        params = {};
      }
      if (typeof params === 'function') {
        onerror = onsuccess;
        onsuccess = params;
        params = {};
      }
      return this.master.call('ips/check-custom-dns', params, onsuccess, onerror);
    };

    /*
        Configures the custom DNS name for a dedicated IP.
        @param {Object} params the hash of the parameters to pass to the request
        @option params {String} ip a dedicated ip address
        @option params {String} domain a domain name to set as the dedicated IP's custom dns name.
        @param {Function} onsuccess an optional callback to execute when the API call is successfully made
        @param {Function} onerror an optional callback to execute when the API call errors out - defaults to throwing the error as an exception
    */


    Ips.prototype.setCustomDns = function(params, onsuccess, onerror) {
      if (params == null) {
        params = {};
      }
      if (typeof params === 'function') {
        onerror = onsuccess;
        onsuccess = params;
        params = {};
      }
      return this.master.call('ips/set-custom-dns', params, onsuccess, onerror);
    };

    return Ips;

  })();

  m.Internal = (function() {

    function Internal(master) {
      this.master = master;
    }

    return Internal;

  })();

  m.Subaccounts = (function() {

    function Subaccounts(master) {
      this.master = master;
    }

    /*
        Get the list of subaccounts defined for the account, optionally filtered by a prefix
        @param {Object} params the hash of the parameters to pass to the request
        @option params {String} q an optional prefix to filter the subaccounts' ids and names
        @param {Function} onsuccess an optional callback to execute when the API call is successfully made
        @param {Function} onerror an optional callback to execute when the API call errors out - defaults to throwing the error as an exception
    */


    Subaccounts.prototype.list = function(params, onsuccess, onerror) {
      var _ref;
      if (params == null) {
        params = {};
      }
      if (typeof params === 'function') {
        onerror = onsuccess;
        onsuccess = params;
        params = {};
      }
      if ((_ref = params["q"]) == null) {
        params["q"] = null;
      }
      return this.master.call('subaccounts/list', params, onsuccess, onerror);
    };

    /*
        Add a new subaccount
        @param {Object} params the hash of the parameters to pass to the request
        @option params {String} id a unique identifier for the subaccount to be used in sending calls
        @option params {String} name an optional display name to further identify the subaccount
        @option params {String} notes optional extra text to associate with the subaccount
        @option params {Integer} custom_quota an optional manual hourly quota for the subaccount. If not specified, Mandrill will manage this based on reputation
        @param {Function} onsuccess an optional callback to execute when the API call is successfully made
        @param {Function} onerror an optional callback to execute when the API call errors out - defaults to throwing the error as an exception
    */


    Subaccounts.prototype.add = function(params, onsuccess, onerror) {
      var _ref, _ref1, _ref2;
      if (params == null) {
        params = {};
      }
      if (typeof params === 'function') {
        onerror = onsuccess;
        onsuccess = params;
        params = {};
      }
      if ((_ref = params["name"]) == null) {
        params["name"] = null;
      }
      if ((_ref1 = params["notes"]) == null) {
        params["notes"] = null;
      }
      if ((_ref2 = params["custom_quota"]) == null) {
        params["custom_quota"] = null;
      }
      return this.master.call('subaccounts/add', params, onsuccess, onerror);
    };

    /*
        Given the ID of an existing subaccount, return the data about it
        @param {Object} params the hash of the parameters to pass to the request
        @option params {String} id the unique identifier of the subaccount to query
        @param {Function} onsuccess an optional callback to execute when the API call is successfully made
        @param {Function} onerror an optional callback to execute when the API call errors out - defaults to throwing the error as an exception
    */


    Subaccounts.prototype.info = function(params, onsuccess, onerror) {
      if (params == null) {
        params = {};
      }
      if (typeof params === 'function') {
        onerror = onsuccess;
        onsuccess = params;
        params = {};
      }
      return this.master.call('subaccounts/info', params, onsuccess, onerror);
    };

    /*
        Update an existing subaccount
        @param {Object} params the hash of the parameters to pass to the request
        @option params {String} id the unique identifier of the subaccount to update
        @option params {String} name an optional display name to further identify the subaccount
        @option params {String} notes optional extra text to associate with the subaccount
        @option params {Integer} custom_quota an optional manual hourly quota for the subaccount. If not specified, Mandrill will manage this based on reputation
        @param {Function} onsuccess an optional callback to execute when the API call is successfully made
        @param {Function} onerror an optional callback to execute when the API call errors out - defaults to throwing the error as an exception
    */


    Subaccounts.prototype.update = function(params, onsuccess, onerror) {
      var _ref, _ref1, _ref2;
      if (params == null) {
        params = {};
      }
      if (typeof params === 'function') {
        onerror = onsuccess;
        onsuccess = params;
        params = {};
      }
      if ((_ref = params["name"]) == null) {
        params["name"] = null;
      }
      if ((_ref1 = params["notes"]) == null) {
        params["notes"] = null;
      }
      if ((_ref2 = params["custom_quota"]) == null) {
        params["custom_quota"] = null;
      }
      return this.master.call('subaccounts/update', params, onsuccess, onerror);
    };

    /*
        Delete an existing subaccount. Any email related to the subaccount will be saved, but stats will be removed and any future sending calls to this subaccount will fail.
        @param {Object} params the hash of the parameters to pass to the request
        @option params {String} id the unique identifier of the subaccount to delete
        @param {Function} onsuccess an optional callback to execute when the API call is successfully made
        @param {Function} onerror an optional callback to execute when the API call errors out - defaults to throwing the error as an exception
    */


    Subaccounts.prototype["delete"] = function(params, onsuccess, onerror) {
      if (params == null) {
        params = {};
      }
      if (typeof params === 'function') {
        onerror = onsuccess;
        onsuccess = params;
        params = {};
      }
      return this.master.call('subaccounts/delete', params, onsuccess, onerror);
    };

    /*
        Pause a subaccount's sending. Any future emails delivered to this subaccount will be queued for a maximum of 3 days until the subaccount is resumed.
        @param {Object} params the hash of the parameters to pass to the request
        @option params {String} id the unique identifier of the subaccount to pause
        @param {Function} onsuccess an optional callback to execute when the API call is successfully made
        @param {Function} onerror an optional callback to execute when the API call errors out - defaults to throwing the error as an exception
    */


    Subaccounts.prototype.pause = function(params, onsuccess, onerror) {
      if (params == null) {
        params = {};
      }
      if (typeof params === 'function') {
        onerror = onsuccess;
        onsuccess = params;
        params = {};
      }
      return this.master.call('subaccounts/pause', params, onsuccess, onerror);
    };

    /*
        Resume a paused subaccount's sending
        @param {Object} params the hash of the parameters to pass to the request
        @option params {String} id the unique identifier of the subaccount to resume
        @param {Function} onsuccess an optional callback to execute when the API call is successfully made
        @param {Function} onerror an optional callback to execute when the API call errors out - defaults to throwing the error as an exception
    */


    Subaccounts.prototype.resume = function(params, onsuccess, onerror) {
      if (params == null) {
        params = {};
      }
      if (typeof params === 'function') {
        onerror = onsuccess;
        onsuccess = params;
        params = {};
      }
      return this.master.call('subaccounts/resume', params, onsuccess, onerror);
    };

    return Subaccounts;

  })();

  m.Urls = (function() {

    function Urls(master) {
      this.master = master;
    }

    /*
        Get the 100 most clicked URLs
        @param {Object} params the hash of the parameters to pass to the request
        @param {Function} onsuccess an optional callback to execute when the API call is successfully made
        @param {Function} onerror an optional callback to execute when the API call errors out - defaults to throwing the error as an exception
    */


    Urls.prototype.list = function(params, onsuccess, onerror) {
      if (params == null) {
        params = {};
      }
      if (typeof params === 'function') {
        onerror = onsuccess;
        onsuccess = params;
        params = {};
      }
      return this.master.call('urls/list', params, onsuccess, onerror);
    };

    /*
        Return the 100 most clicked URLs that match the search query given
        @param {Object} params the hash of the parameters to pass to the request
        @option params {String} q a search query
        @param {Function} onsuccess an optional callback to execute when the API call is successfully made
        @param {Function} onerror an optional callback to execute when the API call errors out - defaults to throwing the error as an exception
    */


    Urls.prototype.search = function(params, onsuccess, onerror) {
      if (params == null) {
        params = {};
      }
      if (typeof params === 'function') {
        onerror = onsuccess;
        onsuccess = params;
        params = {};
      }
      return this.master.call('urls/search', params, onsuccess, onerror);
    };

    /*
        Return the recent history (hourly stats for the last 30 days) for a url
        @param {Object} params the hash of the parameters to pass to the request
        @option params {String} url an existing URL
        @param {Function} onsuccess an optional callback to execute when the API call is successfully made
        @param {Function} onerror an optional callback to execute when the API call errors out - defaults to throwing the error as an exception
    */


    Urls.prototype.timeSeries = function(params, onsuccess, onerror) {
      if (params == null) {
        params = {};
      }
      if (typeof params === 'function') {
        onerror = onsuccess;
        onsuccess = params;
        params = {};
      }
      return this.master.call('urls/time-series', params, onsuccess, onerror);
    };

    /*
        Get the list of tracking domains set up for this account
        @param {Object} params the hash of the parameters to pass to the request
        @param {Function} onsuccess an optional callback to execute when the API call is successfully made
        @param {Function} onerror an optional callback to execute when the API call errors out - defaults to throwing the error as an exception
    */


    Urls.prototype.trackingDomains = function(params, onsuccess, onerror) {
      if (params == null) {
        params = {};
      }
      if (typeof params === 'function') {
        onerror = onsuccess;
        onsuccess = params;
        params = {};
      }
      return this.master.call('urls/tracking-domains', params, onsuccess, onerror);
    };

    /*
        Add a tracking domain to your account
        @param {Object} params the hash of the parameters to pass to the request
        @option params {String} domain a domain name
        @param {Function} onsuccess an optional callback to execute when the API call is successfully made
        @param {Function} onerror an optional callback to execute when the API call errors out - defaults to throwing the error as an exception
    */


    Urls.prototype.addTrackingDomain = function(params, onsuccess, onerror) {
      if (params == null) {
        params = {};
      }
      if (typeof params === 'function') {
        onerror = onsuccess;
        onsuccess = params;
        params = {};
      }
      return this.master.call('urls/add-tracking-domain', params, onsuccess, onerror);
    };

    /*
        Checks the CNAME settings for a tracking domain. The domain must have been added already with the add-tracking-domain call
        @param {Object} params the hash of the parameters to pass to the request
        @option params {String} domain an existing tracking domain name
        @param {Function} onsuccess an optional callback to execute when the API call is successfully made
        @param {Function} onerror an optional callback to execute when the API call errors out - defaults to throwing the error as an exception
    */


    Urls.prototype.checkTrackingDomain = function(params, onsuccess, onerror) {
      if (params == null) {
        params = {};
      }
      if (typeof params === 'function') {
        onerror = onsuccess;
        onsuccess = params;
        params = {};
      }
      return this.master.call('urls/check-tracking-domain', params, onsuccess, onerror);
    };

    return Urls;

  })();

  m.Webhooks = (function() {

    function Webhooks(master) {
      this.master = master;
    }

    /*
        Get the list of all webhooks defined on the account
        @param {Object} params the hash of the parameters to pass to the request
        @param {Function} onsuccess an optional callback to execute when the API call is successfully made
        @param {Function} onerror an optional callback to execute when the API call errors out - defaults to throwing the error as an exception
    */


    Webhooks.prototype.list = function(params, onsuccess, onerror) {
      if (params == null) {
        params = {};
      }
      if (typeof params === 'function') {
        onerror = onsuccess;
        onsuccess = params;
        params = {};
      }
      return this.master.call('webhooks/list', params, onsuccess, onerror);
    };

    /*
        Add a new webhook
        @param {Object} params the hash of the parameters to pass to the request
        @option params {String} url the URL to POST batches of events
        @option params {String} description an optional description of the webhook
        @option params {Array} events an optional list of events that will be posted to the webhook
             - events[] {String} the individual event to listen for
        @param {Function} onsuccess an optional callback to execute when the API call is successfully made
        @param {Function} onerror an optional callback to execute when the API call errors out - defaults to throwing the error as an exception
    */


    Webhooks.prototype.add = function(params, onsuccess, onerror) {
      var _ref, _ref1;
      if (params == null) {
        params = {};
      }
      if (typeof params === 'function') {
        onerror = onsuccess;
        onsuccess = params;
        params = {};
      }
      if ((_ref = params["description"]) == null) {
        params["description"] = null;
      }
      if ((_ref1 = params["events"]) == null) {
        params["events"] = [];
      }
      return this.master.call('webhooks/add', params, onsuccess, onerror);
    };

    /*
        Given the ID of an existing webhook, return the data about it
        @param {Object} params the hash of the parameters to pass to the request
        @option params {Integer} id the unique identifier of a webhook belonging to this account
        @param {Function} onsuccess an optional callback to execute when the API call is successfully made
        @param {Function} onerror an optional callback to execute when the API call errors out - defaults to throwing the error as an exception
    */


    Webhooks.prototype.info = function(params, onsuccess, onerror) {
      if (params == null) {
        params = {};
      }
      if (typeof params === 'function') {
        onerror = onsuccess;
        onsuccess = params;
        params = {};
      }
      return this.master.call('webhooks/info', params, onsuccess, onerror);
    };

    /*
        Update an existing webhook
        @param {Object} params the hash of the parameters to pass to the request
        @option params {Integer} id the unique identifier of a webhook belonging to this account
        @option params {String} url the URL to POST batches of events
        @option params {String} description an optional description of the webhook
        @option params {Array} events an optional list of events that will be posted to the webhook
             - events[] {String} the individual event to listen for
        @param {Function} onsuccess an optional callback to execute when the API call is successfully made
        @param {Function} onerror an optional callback to execute when the API call errors out - defaults to throwing the error as an exception
    */


    Webhooks.prototype.update = function(params, onsuccess, onerror) {
      var _ref, _ref1;
      if (params == null) {
        params = {};
      }
      if (typeof params === 'function') {
        onerror = onsuccess;
        onsuccess = params;
        params = {};
      }
      if ((_ref = params["description"]) == null) {
        params["description"] = null;
      }
      if ((_ref1 = params["events"]) == null) {
        params["events"] = [];
      }
      return this.master.call('webhooks/update', params, onsuccess, onerror);
    };

    /*
        Delete an existing webhook
        @param {Object} params the hash of the parameters to pass to the request
        @option params {Integer} id the unique identifier of a webhook belonging to this account
        @param {Function} onsuccess an optional callback to execute when the API call is successfully made
        @param {Function} onerror an optional callback to execute when the API call errors out - defaults to throwing the error as an exception
    */


    Webhooks.prototype["delete"] = function(params, onsuccess, onerror) {
      if (params == null) {
        params = {};
      }
      if (typeof params === 'function') {
        onerror = onsuccess;
        onsuccess = params;
        params = {};
      }
      return this.master.call('webhooks/delete', params, onsuccess, onerror);
    };

    return Webhooks;

  })();

  m.Senders = (function() {

    function Senders(master) {
      this.master = master;
    }

    /*
        Return the senders that have tried to use this account.
        @param {Object} params the hash of the parameters to pass to the request
        @param {Function} onsuccess an optional callback to execute when the API call is successfully made
        @param {Function} onerror an optional callback to execute when the API call errors out - defaults to throwing the error as an exception
    */


    Senders.prototype.list = function(params, onsuccess, onerror) {
      if (params == null) {
        params = {};
      }
      if (typeof params === 'function') {
        onerror = onsuccess;
        onsuccess = params;
        params = {};
      }
      return this.master.call('senders/list', params, onsuccess, onerror);
    };

    /*
        Returns the sender domains that have been added to this account.
        @param {Object} params the hash of the parameters to pass to the request
        @param {Function} onsuccess an optional callback to execute when the API call is successfully made
        @param {Function} onerror an optional callback to execute when the API call errors out - defaults to throwing the error as an exception
    */


    Senders.prototype.domains = function(params, onsuccess, onerror) {
      if (params == null) {
        params = {};
      }
      if (typeof params === 'function') {
        onerror = onsuccess;
        onsuccess = params;
        params = {};
      }
      return this.master.call('senders/domains', params, onsuccess, onerror);
    };

    /*
        Adds a sender domain to your account. Sender domains are added automatically as you
    send, but you can use this call to add them ahead of time.
        @param {Object} params the hash of the parameters to pass to the request
        @option params {String} domain a domain name
        @param {Function} onsuccess an optional callback to execute when the API call is successfully made
        @param {Function} onerror an optional callback to execute when the API call errors out - defaults to throwing the error as an exception
    */


    Senders.prototype.addDomain = function(params, onsuccess, onerror) {
      if (params == null) {
        params = {};
      }
      if (typeof params === 'function') {
        onerror = onsuccess;
        onsuccess = params;
        params = {};
      }
      return this.master.call('senders/add-domain', params, onsuccess, onerror);
    };

    /*
        Checks the SPF and DKIM settings for a domain. If you haven't already added this domain to your
    account, it will be added automatically.
        @param {Object} params the hash of the parameters to pass to the request
        @option params {String} domain a domain name
        @param {Function} onsuccess an optional callback to execute when the API call is successfully made
        @param {Function} onerror an optional callback to execute when the API call errors out - defaults to throwing the error as an exception
    */


    Senders.prototype.checkDomain = function(params, onsuccess, onerror) {
      if (params == null) {
        params = {};
      }
      if (typeof params === 'function') {
        onerror = onsuccess;
        onsuccess = params;
        params = {};
      }
      return this.master.call('senders/check-domain', params, onsuccess, onerror);
    };

    /*
        Sends a verification email in order to verify ownership of a domain.
    Domain verification is an optional step to confirm ownership of a domain. Once a
    domain has been verified in a Mandrill account, other accounts may not have their
    messages signed by that domain unless they also verify the domain. This prevents
    other Mandrill accounts from sending mail signed by your domain.
        @param {Object} params the hash of the parameters to pass to the request
        @option params {String} domain a domain name at which you can receive email
        @option params {String} mailbox a mailbox at the domain where the verification email should be sent
        @param {Function} onsuccess an optional callback to execute when the API call is successfully made
        @param {Function} onerror an optional callback to execute when the API call errors out - defaults to throwing the error as an exception
    */


    Senders.prototype.verifyDomain = function(params, onsuccess, onerror) {
      if (params == null) {
        params = {};
      }
      if (typeof params === 'function') {
        onerror = onsuccess;
        onsuccess = params;
        params = {};
      }
      return this.master.call('senders/verify-domain', params, onsuccess, onerror);
    };

    /*
        Return more detailed information about a single sender, including aggregates of recent stats
        @param {Object} params the hash of the parameters to pass to the request
        @option params {String} address the email address of the sender
        @param {Function} onsuccess an optional callback to execute when the API call is successfully made
        @param {Function} onerror an optional callback to execute when the API call errors out - defaults to throwing the error as an exception
    */


    Senders.prototype.info = function(params, onsuccess, onerror) {
      if (params == null) {
        params = {};
      }
      if (typeof params === 'function') {
        onerror = onsuccess;
        onsuccess = params;
        params = {};
      }
      return this.master.call('senders/info', params, onsuccess, onerror);
    };

    /*
        Return the recent history (hourly stats for the last 30 days) for a sender
        @param {Object} params the hash of the parameters to pass to the request
        @option params {String} address the email address of the sender
        @param {Function} onsuccess an optional callback to execute when the API call is successfully made
        @param {Function} onerror an optional callback to execute when the API call errors out - defaults to throwing the error as an exception
    */


    Senders.prototype.timeSeries = function(params, onsuccess, onerror) {
      if (params == null) {
        params = {};
      }
      if (typeof params === 'function') {
        onerror = onsuccess;
        onsuccess = params;
        params = {};
      }
      return this.master.call('senders/time-series', params, onsuccess, onerror);
    };

    return Senders;

  })();

  m.Metadata = (function() {

    function Metadata(master) {
      this.master = master;
    }

    /*
        Get the list of custom metadata fields indexed for the account.
        @param {Object} params the hash of the parameters to pass to the request
        @param {Function} onsuccess an optional callback to execute when the API call is successfully made
        @param {Function} onerror an optional callback to execute when the API call errors out - defaults to throwing the error as an exception
    */


    Metadata.prototype.list = function(params, onsuccess, onerror) {
      if (params == null) {
        params = {};
      }
      if (typeof params === 'function') {
        onerror = onsuccess;
        onsuccess = params;
        params = {};
      }
      return this.master.call('metadata/list', params, onsuccess, onerror);
    };

    /*
        Add a new custom metadata field to be indexed for the account.
        @param {Object} params the hash of the parameters to pass to the request
        @option params {String} name a unique identifier for the metadata field
        @option params {String} view_template optional Mustache template to control how the metadata is rendered in your activity log
        @param {Function} onsuccess an optional callback to execute when the API call is successfully made
        @param {Function} onerror an optional callback to execute when the API call errors out - defaults to throwing the error as an exception
    */


    Metadata.prototype.add = function(params, onsuccess, onerror) {
      var _ref;
      if (params == null) {
        params = {};
      }
      if (typeof params === 'function') {
        onerror = onsuccess;
        onsuccess = params;
        params = {};
      }
      if ((_ref = params["view_template"]) == null) {
        params["view_template"] = null;
      }
      return this.master.call('metadata/add', params, onsuccess, onerror);
    };

    /*
        Update an existing custom metadata field.
        @param {Object} params the hash of the parameters to pass to the request
        @option params {String} name the unique identifier of the metadata field to update
        @option params {String} view_template optional Mustache template to control how the metadata is rendered in your activity log
        @param {Function} onsuccess an optional callback to execute when the API call is successfully made
        @param {Function} onerror an optional callback to execute when the API call errors out - defaults to throwing the error as an exception
    */


    Metadata.prototype.update = function(params, onsuccess, onerror) {
      if (params == null) {
        params = {};
      }
      if (typeof params === 'function') {
        onerror = onsuccess;
        onsuccess = params;
        params = {};
      }
      return this.master.call('metadata/update', params, onsuccess, onerror);
    };

    /*
        Delete an existing custom metadata field. Deletion isn't instataneous, and /metadata/list will continue to return the field until the asynchronous deletion process is complete.
        @param {Object} params the hash of the parameters to pass to the request
        @option params {String} name the unique identifier of the metadata field to update
        @param {Function} onsuccess an optional callback to execute when the API call is successfully made
        @param {Function} onerror an optional callback to execute when the API call errors out - defaults to throwing the error as an exception
    */


    Metadata.prototype["delete"] = function(params, onsuccess, onerror) {
      if (params == null) {
        params = {};
      }
      if (typeof params === 'function') {
        onerror = onsuccess;
        onsuccess = params;
        params = {};
      }
      return this.master.call('metadata/delete', params, onsuccess, onerror);
    };

    return Metadata;

  })();

  (typeof exports !== "undefined" && exports !== null ? exports : this).mandrill = m;

}).call(this);
/*
    json2.js
    2011-10-19

    Public Domain.

    NO WARRANTY EXPRESSED OR IMPLIED. USE AT YOUR OWN RISK.

    See http://www.JSON.org/js.html


    This code should be minified before deployment.
    See http://javascript.crockford.com/jsmin.html

    USE YOUR OWN COPY. IT IS EXTREMELY UNWISE TO LOAD CODE FROM SERVERS YOU DO
    NOT CONTROL.


    This file creates a global JSON object containing two methods: stringify
    and parse.

        JSON.stringify(value, replacer, space)
            value       any JavaScript value, usually an object or array.

            replacer    an optional parameter that determines how object
                        values are stringified for objects. It can be a
                        function or an array of strings.

            space       an optional parameter that specifies the indentation
                        of nested structures. If it is omitted, the text will
                        be packed without extra whitespace. If it is a number,
                        it will specify the number of spaces to indent at each
                        level. If it is a string (such as '\t' or '&nbsp;'),
                        it contains the characters used to indent at each level.

            This method produces a JSON text from a JavaScript value.

            When an object value is found, if the object contains a toJSON
            method, its toJSON method will be called and the result will be
            stringified. A toJSON method does not serialize: it returns the
            value represented by the name/value pair that should be serialized,
            or undefined if nothing should be serialized. The toJSON method
            will be passed the key associated with the value, and this will be
            bound to the value

            For example, this would serialize Dates as ISO strings.

                Date.prototype.toJSON = function (key) {
                    function f(n) {
                        // Format integers to have at least two digits.
                        return n < 10 ? '0' + n : n;
                    }

                    return this.getUTCFullYear()   + '-' +
                         f(this.getUTCMonth() + 1) + '-' +
                         f(this.getUTCDate())      + 'T' +
                         f(this.getUTCHours())     + ':' +
                         f(this.getUTCMinutes())   + ':' +
                         f(this.getUTCSeconds())   + 'Z';
                };

            You can provide an optional replacer method. It will be passed the
            key and value of each member, with this bound to the containing
            object. The value that is returned from your method will be
            serialized. If your method returns undefined, then the member will
            be excluded from the serialization.

            If the replacer parameter is an array of strings, then it will be
            used to select the members to be serialized. It filters the results
            such that only members with keys listed in the replacer array are
            stringified.

            Values that do not have JSON representations, such as undefined or
            functions, will not be serialized. Such values in objects will be
            dropped; in arrays they will be replaced with null. You can use
            a replacer function to replace those with JSON values.
            JSON.stringify(undefined) returns undefined.

            The optional space parameter produces a stringification of the
            value that is filled with line breaks and indentation to make it
            easier to read.

            If the space parameter is a non-empty string, then that string will
            be used for indentation. If the space parameter is a number, then
            the indentation will be that many spaces.

            Example:

            text = JSON.stringify(['e', {pluribus: 'unum'}]);
            // text is '["e",{"pluribus":"unum"}]'


            text = JSON.stringify(['e', {pluribus: 'unum'}], null, '\t');
            // text is '[\n\t"e",\n\t{\n\t\t"pluribus": "unum"\n\t}\n]'

            text = JSON.stringify([new Date()], function (key, value) {
                return this[key] instanceof Date ?
                    'Date(' + this[key] + ')' : value;
            });
            // text is '["Date(---current time---)"]'


        JSON.parse(text, reviver)
            This method parses a JSON text to produce an object or array.
            It can throw a SyntaxError exception.

            The optional reviver parameter is a function that can filter and
            transform the results. It receives each of the keys and values,
            and its return value is used instead of the original value.
            If it returns what it received, then the structure is not modified.
            If it returns undefined then the member is deleted.

            Example:

            // Parse the text. Values that look like ISO date strings will
            // be converted to Date objects.

            myData = JSON.parse(text, function (key, value) {
                var a;
                if (typeof value === 'string') {
                    a =
/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*)?)Z$/.exec(value);
                    if (a) {
                        return new Date(Date.UTC(+a[1], +a[2] - 1, +a[3], +a[4],
                            +a[5], +a[6]));
                    }
                }
                return value;
            });

            myData = JSON.parse('["Date(09/09/2001)"]', function (key, value) {
                var d;
                if (typeof value === 'string' &&
                        value.slice(0, 5) === 'Date(' &&
                        value.slice(-1) === ')') {
                    d = new Date(value.slice(5, -1));
                    if (d) {
                        return d;
                    }
                }
                return value;
            });


    This is a reference implementation. You are free to copy, modify, or
    redistribute.
*/

/*jslint evil: true, regexp: true */

/*members "", "\b", "\t", "\n", "\f", "\r", "\"", JSON, "\\", apply,
    call, charCodeAt, getUTCDate, getUTCFullYear, getUTCHours,
    getUTCMinutes, getUTCMonth, getUTCSeconds, hasOwnProperty, join,
    lastIndex, length, parse, prototype, push, replace, slice, stringify,
    test, toJSON, toString, valueOf
*/


// Create a JSON object only if one does not already exist. We create the
// methods in a closure to avoid creating global variables.

var JSON;
if (!JSON) {
    JSON = {};
}

(function () {
    'use strict';

    function f(n) {
        // Format integers to have at least two digits.
        return n < 10 ? '0' + n : n;
    }

    if (typeof Date.prototype.toJSON !== 'function') {

        Date.prototype.toJSON = function (key) {

            return isFinite(this.valueOf())
                ? this.getUTCFullYear()     + '-' +
                    f(this.getUTCMonth() + 1) + '-' +
                    f(this.getUTCDate())      + 'T' +
                    f(this.getUTCHours())     + ':' +
                    f(this.getUTCMinutes())   + ':' +
                    f(this.getUTCSeconds())   + 'Z'
                : null;
        };

        String.prototype.toJSON      =
            Number.prototype.toJSON  =
            Boolean.prototype.toJSON = function (key) {
                return this.valueOf();
            };
    }

    var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        gap,
        indent,
        meta = {    // table of character substitutions
            '\b': '\\b',
            '\t': '\\t',
            '\n': '\\n',
            '\f': '\\f',
            '\r': '\\r',
            '"' : '\\"',
            '\\': '\\\\'
        },
        rep;


    function quote(string) {

// If the string contains no control characters, no quote characters, and no
// backslash characters, then we can safely slap some quotes around it.
// Otherwise we must also replace the offending characters with safe escape
// sequences.

        escapable.lastIndex = 0;
        return escapable.test(string) ? '"' + string.replace(escapable, function (a) {
            var c = meta[a];
            return typeof c === 'string'
                ? c
                : '\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
        }) + '"' : '"' + string + '"';
    }


    function str(key, holder) {

// Produce a string from holder[key].

        var i,          // The loop counter.
            k,          // The member key.
            v,          // The member value.
            length,
            mind = gap,
            partial,
            value = holder[key];

// If the value has a toJSON method, call it to obtain a replacement value.

        if (value && typeof value === 'object' &&
                typeof value.toJSON === 'function') {
            value = value.toJSON(key);
        }

// If we were called with a replacer function, then call the replacer to
// obtain a replacement value.

        if (typeof rep === 'function') {
            value = rep.call(holder, key, value);
        }

// What happens next depends on the value's type.

        switch (typeof value) {
        case 'string':
            return quote(value);

        case 'number':

// JSON numbers must be finite. Encode non-finite numbers as null.

            return isFinite(value) ? String(value) : 'null';

        case 'boolean':
        case 'null':

// If the value is a boolean or null, convert it to a string. Note:
// typeof null does not produce 'null'. The case is included here in
// the remote chance that this gets fixed someday.

            return String(value);

// If the type is 'object', we might be dealing with an object or an array or
// null.

        case 'object':

// Due to a specification blunder in ECMAScript, typeof null is 'object',
// so watch out for that case.

            if (!value) {
                return 'null';
            }

// Make an array to hold the partial results of stringifying this object value.

            gap += indent;
            partial = [];

// Is the value an array?

            if (Object.prototype.toString.apply(value) === '[object Array]') {

// The value is an array. Stringify every element. Use null as a placeholder
// for non-JSON values.

                length = value.length;
                for (i = 0; i < length; i += 1) {
                    partial[i] = str(i, value) || 'null';
                }

// Join all of the elements together, separated with commas, and wrap them in
// brackets.

                v = partial.length === 0
                    ? '[]'
                    : gap
                    ? '[\n' + gap + partial.join(',\n' + gap) + '\n' + mind + ']'
                    : '[' + partial.join(',') + ']';
                gap = mind;
                return v;
            }

// If the replacer is an array, use it to select the members to be stringified.

            if (rep && typeof rep === 'object') {
                length = rep.length;
                for (i = 0; i < length; i += 1) {
                    if (typeof rep[i] === 'string') {
                        k = rep[i];
                        v = str(k, value);
                        if (v) {
                            partial.push(quote(k) + (gap ? ': ' : ':') + v);
                        }
                    }
                }
            } else {

// Otherwise, iterate through all of the keys in the object.

                for (k in value) {
                    if (Object.prototype.hasOwnProperty.call(value, k)) {
                        v = str(k, value);
                        if (v) {
                            partial.push(quote(k) + (gap ? ': ' : ':') + v);
                        }
                    }
                }
            }

// Join all of the member texts together, separated with commas,
// and wrap them in braces.

            v = partial.length === 0
                ? '{}'
                : gap
                ? '{\n' + gap + partial.join(',\n' + gap) + '\n' + mind + '}'
                : '{' + partial.join(',') + '}';
            gap = mind;
            return v;
        }
    }

// If the JSON object does not yet have a stringify method, give it one.

    if (typeof JSON.stringify !== 'function') {
        JSON.stringify = function (value, replacer, space) {

// The stringify method takes a value and an optional replacer, and an optional
// space parameter, and returns a JSON text. The replacer can be a function
// that can replace values, or an array of strings that will select the keys.
// A default replacer method can be provided. Use of the space parameter can
// produce text that is more easily readable.

            var i;
            gap = '';
            indent = '';

// If the space parameter is a number, make an indent string containing that
// many spaces.

            if (typeof space === 'number') {
                for (i = 0; i < space; i += 1) {
                    indent += ' ';
                }

// If the space parameter is a string, it will be used as the indent string.

            } else if (typeof space === 'string') {
                indent = space;
            }

// If there is a replacer, it must be a function or an array.
// Otherwise, throw an error.

            rep = replacer;
            if (replacer && typeof replacer !== 'function' &&
                    (typeof replacer !== 'object' ||
                    typeof replacer.length !== 'number')) {
                throw new Error('JSON.stringify');
            }

// Make a fake root object containing our value under the key of ''.
// Return the result of stringifying the value.

            return str('', {'': value});
        };
    }


// If the JSON object does not yet have a parse method, give it one.

    if (typeof JSON.parse !== 'function') {
        JSON.parse = function (text, reviver) {

// The parse method takes a text and an optional reviver function, and returns
// a JavaScript value if the text is a valid JSON text.

            var j;

            function walk(holder, key) {

// The walk method is used to recursively walk the resulting structure so
// that modifications can be made.

                var k, v, value = holder[key];
                if (value && typeof value === 'object') {
                    for (k in value) {
                        if (Object.prototype.hasOwnProperty.call(value, k)) {
                            v = walk(value, k);
                            if (v !== undefined) {
                                value[k] = v;
                            } else {
                                delete value[k];
                            }
                        }
                    }
                }
                return reviver.call(holder, key, value);
            }


// Parsing happens in four stages. In the first stage, we replace certain
// Unicode characters with escape sequences. JavaScript handles many characters
// incorrectly, either silently deleting them, or treating them as line endings.

            text = String(text);
            cx.lastIndex = 0;
            if (cx.test(text)) {
                text = text.replace(cx, function (a) {
                    return '\\u' +
                        ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
                });
            }

// In the second stage, we run the text against regular expressions that look
// for non-JSON patterns. We are especially concerned with '()' and 'new'
// because they can cause invocation, and '=' because it can cause mutation.
// But just to be safe, we want to reject all unexpected forms.

// We split the second stage into 4 regexp operations in order to work around
// crippling inefficiencies in IE's and Safari's regexp engines. First we
// replace the JSON backslash pairs with '@' (a non-JSON character). Second, we
// replace all simple value tokens with ']' characters. Third, we delete all
// open brackets that follow a colon or comma or that begin the text. Finally,
// we look to see that the remaining characters are only whitespace or ']' or
// ',' or ':' or '{' or '}'. If that is so, then the text is safe for eval.

            if (/^[\],:{}\s]*$/
                    .test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, '@')
                        .replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']')
                        .replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {

// In the third stage we use the eval function to compile the text into a
// JavaScript structure. The '{' operator is subject to a syntactic ambiguity
// in JavaScript: it can begin a block or an object literal. We wrap the text
// in parens to eliminate the ambiguity.

                j = eval('(' + text + ')');

// In the optional fourth stage, we recursively walk the new structure, passing
// each name/value pair to a reviver function for possible transformation.

                return typeof reviver === 'function'
                    ? walk({'': j}, '')
                    : j;
            }

// If the text is not JSON parseable, then a SyntaxError is thrown.

            throw new SyntaxError('JSON.parse');
        };
    }
}());
/*!
  * Bowser - a browser detector
  * https://github.com/ded/bowser
  * MIT License | (c) Dustin Diaz 2014
  */

!function (name, definition) {
  if (typeof module != 'undefined' && module.exports) module.exports['browser'] = definition()
  else if (typeof define == 'function' && define.amd) define(definition)
  else this[name] = definition()
}('bowser', function () {
  /**
    * See useragents.js for examples of navigator.userAgent
    */

  var t = true

  function detect(ua) {

    function getFirstMatch(regex) {
      var match = ua.match(regex);
      return (match && match.length > 1 && match[1]) || '';
    }

    var iosdevice = getFirstMatch(/(ipod|iphone|ipad)/i).toLowerCase()
      , likeAndroid = /like android/i.test(ua)
      , android = !likeAndroid && /android/i.test(ua)
      , versionIdentifier = getFirstMatch(/version\/(\d+(\.\d+)?)/i)
      , tablet = /tablet/i.test(ua)
      , mobile = !tablet && /[^-]mobi/i.test(ua)
      , result

    if (/opera|opr/i.test(ua)) {
      result = {
        name: 'Opera'
      , opera: t
      , version: versionIdentifier || getFirstMatch(/(?:opera|opr)[\s\/](\d+(\.\d+)?)/i)
      }
    }
    else if (/windows phone/i.test(ua)) {
      result = {
        name: 'Windows Phone'
      , windowsphone: t
      , msie: t
      , version: getFirstMatch(/iemobile\/(\d+(\.\d+)?)/i)
      }
    }
    else if (/msie|trident/i.test(ua)) {
      result = {
        name: 'Internet Explorer'
      , msie: t
      , version: getFirstMatch(/(?:msie |rv:)(\d+(\.\d+)?)/i)
      }
    }
    else if (/chrome|crios|crmo/i.test(ua)) {
      result = {
        name: 'Chrome'
      , chrome: t
      , version: getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
      }
    }
    else if (iosdevice) {
      result = {
        name : iosdevice == 'iphone' ? 'iPhone' : iosdevice == 'ipad' ? 'iPad' : 'iPod'
      }
      // WTF: version is not part of user agent in web apps
      if (versionIdentifier) {
        result.version = versionIdentifier
      }
    }
    else if (/sailfish/i.test(ua)) {
      result = {
        name: 'Sailfish'
      , sailfish: t
      , version: getFirstMatch(/sailfish\s?browser\/(\d+(\.\d+)?)/i)
      }
    }
    else if (/seamonkey\//i.test(ua)) {
      result = {
        name: 'SeaMonkey'
      , seamonkey: t
      , version: getFirstMatch(/seamonkey\/(\d+(\.\d+)?)/i)
      }
    }
    else if (/firefox|iceweasel/i.test(ua)) {
      result = {
        name: 'Firefox'
      , firefox: t
      , version: getFirstMatch(/(?:firefox|iceweasel)[ \/](\d+(\.\d+)?)/i)
      }
      if (/\((mobile|tablet);[^\)]*rv:[\d\.]+\)/i.test(ua)) {
        result.firefoxos = t
      }
    }
    else if (/silk/i.test(ua)) {
      result =  {
        name: 'Amazon Silk'
      , silk: t
      , version : getFirstMatch(/silk\/(\d+(\.\d+)?)/i)
      }
    }
    else if (android) {
      result = {
        name: 'Android'
      , version: versionIdentifier
      }
    }
    else if (/phantom/i.test(ua)) {
      result = {
        name: 'PhantomJS'
      , phantom: t
      , version: getFirstMatch(/phantomjs\/(\d+(\.\d+)?)/i)
      }
    }
    else if (/blackberry|\bbb\d+/i.test(ua) || /rim\stablet/i.test(ua)) {
      result = {
        name: 'BlackBerry'
      , blackberry: t
      , version: versionIdentifier || getFirstMatch(/blackberry[\d]+\/(\d+(\.\d+)?)/i)
      }
    }
    else if (/(web|hpw)os/i.test(ua)) {
      result = {
        name: 'WebOS'
      , webos: t
      , version: versionIdentifier || getFirstMatch(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)
      };
      /touchpad\//i.test(ua) && (result.touchpad = t)
    }
    else if (/bada/i.test(ua)) {
      result = {
        name: 'Bada'
      , bada: t
      , version: getFirstMatch(/dolfin\/(\d+(\.\d+)?)/i)
      };
    }
    else if (/tizen/i.test(ua)) {
      result = {
        name: 'Tizen'
      , tizen: t
      , version: getFirstMatch(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i) || versionIdentifier
      };
    }
    else if (/safari/i.test(ua)) {
      result = {
        name: 'Safari'
      , safari: t
      , version: versionIdentifier
      }
    }
    else result = {}

    // set webkit or gecko flag for browsers based on these engines
    if (/(apple)?webkit/i.test(ua)) {
      result.name = result.name || "Webkit"
      result.webkit = t
      if (!result.version && versionIdentifier) {
        result.version = versionIdentifier
      }
    } else if (!result.opera && /gecko\//i.test(ua)) {
      result.name = result.name || "Gecko"
      result.gecko = t
      result.version = result.version || getFirstMatch(/gecko\/(\d+(\.\d+)?)/i)
    }

    // set OS flags for platforms that have multiple browsers
    if (android || result.silk) {
      result.android = t
    } else if (iosdevice) {
      result[iosdevice] = t
      result.ios = t
    }

    // OS version extraction
    var osVersion = '';
    if (iosdevice) {
      osVersion = getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i);
      osVersion = osVersion.replace(/[_\s]/g, '.');
    } else if (android) {
      osVersion = getFirstMatch(/android[ \/-](\d+(\.\d+)*)/i);
    } else if (result.windowsphone) {
      osVersion = getFirstMatch(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i);
    } else if (result.webos) {
      osVersion = getFirstMatch(/(?:web|hpw)os\/(\d+(\.\d+)*)/i);
    } else if (result.blackberry) {
      osVersion = getFirstMatch(/rim\stablet\sos\s(\d+(\.\d+)*)/i);
    } else if (result.bada) {
      osVersion = getFirstMatch(/bada\/(\d+(\.\d+)*)/i);
    } else if (result.tizen) {
      osVersion = getFirstMatch(/tizen[\/\s](\d+(\.\d+)*)/i);
    }
    if (osVersion) {
      result.osversion = osVersion;
    }

    // device type extraction
    var osMajorVersion = osVersion.split('.')[0];
    if (tablet || iosdevice == 'ipad' || (android && (osMajorVersion == 3 || (osMajorVersion == 4 && !mobile))) || result.silk) {
      result.tablet = t
    } else if (mobile || iosdevice == 'iphone' || iosdevice == 'ipod' || android || result.blackberry || result.webos || result.bada) {
      result.mobile = t
    }

    // Graded Browser Support
    // http://developer.yahoo.com/yui/articles/gbs
    if ((result.msie && result.version >= 10) ||
        (result.chrome && result.version >= 20) ||
        (result.firefox && result.version >= 20.0) ||
        (result.safari && result.version >= 6) ||
        (result.opera && result.version >= 10.0) ||
        (result.ios && result.osversion && result.osversion.split(".")[0] >= 6) ||
        (result.blackberry && result.version >= 10.1)
        ) {
      result.a = t;
    }
    else if ((result.msie && result.version < 10) ||
        (result.chrome && result.version < 20) ||
        (result.firefox && result.version < 20.0) ||
        (result.safari && result.version < 6) ||
        (result.opera && result.version < 10.0) ||
        (result.ios && result.osversion && result.osversion.split(".")[0] < 6)
        ) {
      result.c = t
    } else result.x = t

    return result
  }

  var bowser = detect(typeof navigator !== 'undefined' ? navigator.userAgent : '')


  /*
   * Set our detect method to the main bowser object so we can
   * reuse it to test other user agents.
   * This is needed to implement future tests.
   */
  bowser._detect = detect;

  return bowser
});


var preload = function(){

jQuery("html").addClass('mktplc-html-onload');
 jQuery("#mktplc-pageloader").removeClass();


 // disable browser scroll on touch devices
jQuery(document.body).on("touchmove", function(e) {
    e.preventDefault();
});

 // disable browser scroll on desktop
var scrollPosition = [
self.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft,
self.pageYOffset || document.documentElement.scrollTop  || document.body.scrollTop
];
var html = jQuery('html');
html.data('scroll-position', scrollPosition);
html.data('previous-overflow', html.css('overflow'));
html.css('overflow', 'hidden');
window.scrollTo(scrollPosition[0], scrollPosition[1]);

//jQuery(window).load(function() {

     // after delay, restore browser scroll + fade out loader background + slide down page
    setTimeout(function(){

         //enable browser scroll on touch devices
        jQuery(document.body).unbind('touchmove');

         // enable browser scroll on desktop
        var html = jQuery('html');
        var scrollPosition = html.data('scroll-position');
        html.css('overflow', html.data('previous-overflow'));
        window.scrollTo(scrollPosition[0], scrollPosition[1]);

         // fade out loader
        jQuery("#mktplc-pageloader").addClass('mktplc-pageloader-fade');

        //  slide down html
        jQuery("html").removeClass('mktplc-html-onload');
        //Inits scroll reveal effects:
        window.sr = new scrollReveal();
    },500);

     // after  delay, hide (not fade out) loader
    setTimeout(function(){

     // hide loader after fading out
        jQuery("#mktplc-pageloader").addClass('mktplc-pageloader-hide');

    },1500);
};


var unload = function(){
     //
};

//});



function ExecuteLoaders(){
/* TypeKit
**********************/
try{
    Typekit.load();
    $('span[aria-hidden]').remove();
}catch(e){

}

/* Set the Animations at Scroll
**********************/


}









