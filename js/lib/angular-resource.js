/*
 AngularJS v1.1.2
 (c) 2010-2012 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(D,d,y){'use strict';d.module("ngResource",["ng"]).factory("$resource",["$http","$parse",function(z,A){function u(a,e){return encodeURIComponent(a).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(e?null:/%20/g,"+")}function w(a,e){this.template=a+="#";this.defaults=e||{};var b=this.urlParams={};h(a.split(/\W/),function(f){f&&a.match(RegExp("[^\\\\]:"+f+"\\W"))&&(b[f]=!0)});this.template=a.replace(/\\:/g,":")}function x(a,e,b){function f(n,b){var a=
{},b=q({},e,b);h(b,function(k,b){o(k)&&(k=k());var c;k.charAt&&k.charAt(0)=="@"?(c=k.substr(1),c=A(c)(n)):c=k;a[b]=c});return a}function g(b){v(b||{},this)}var l=new w(a),b=q({},B,b);h(b,function(b,a){b.method=d.uppercase(b.method);var e=b.method=="POST"||b.method=="PUT"||b.method=="PATCH";g[a]=function(a,c,d,C){var j={},i,m=r,s=null;switch(arguments.length){case 4:s=C,m=d;case 3:case 2:if(o(c)){if(o(a)){m=a;s=c;break}m=c;s=d}else{j=a;i=c;m=d;break}case 1:o(a)?m=a:e?i=a:j=a;break;case 0:break;default:throw"Expected between 0-4 arguments [params, data, success, error], got "+
arguments.length+" arguments.";}var p=this instanceof g?this:b.isArray?[]:new g(i),t={};h(b,function(b,a){a!="params"&&a!="isArray"&&(t[a]=v(b))});t.data=i;t.url=l.url(q({},f(i,b.params||{}),j));z(t).then(function(a){var c=a.data;if(c)b.isArray?(p.length=0,h(c,function(a){p.push(new g(a))})):v(c,p);(m||r)(p,a.headers)},s);return p};g.prototype["$"+a]=function(b,d,h){var n=f(this),j=r,i;switch(arguments.length){case 3:n=b;j=d;i=h;break;case 2:case 1:o(b)?(j=b,i=d):(n=b,j=d||r);case 0:break;default:throw"Expected between 1-3 arguments [params, success, error], got "+
arguments.length+" arguments.";}g[a].call(this,n,e?this:y,j,i)}});g.bind=function(d){return x(a,q({},e,d),b)};return g}var B={get:{method:"GET"},save:{method:"POST"},query:{method:"GET",isArray:!0},remove:{method:"DELETE"},"delete":{method:"DELETE"}},r=d.noop,h=d.forEach,q=d.extend,v=d.copy,o=d.isFunction;w.prototype={url:function(a){var e=this,b=this.template,f,g,a=a||{};h(this.urlParams,function(h,c){f=a.hasOwnProperty(c)?a[c]:e.defaults[c];d.isDefined(f)&&f!==null?(g=u(f,!0).replace(/%26/gi,"&").replace(/%3D/gi,
"=").replace(/%2B/gi,"+"),b=b.replace(RegExp(":"+c+"(\\W)","g"),g+"$1")):b=b.replace(RegExp("(/?):"+c+"(\\W)","g"),function(b,a,c){return c.charAt(0)=="/"?c:a+c})});var b=b.replace(/\/?#$/,""),l=[];h(a,function(b,a){e.urlParams[a]||l.push(u(a)+"="+u(b))});l.sort();b=b.replace(/\/*$/,"");return b+(l.length?"?"+l.join("&"):"")}};return x}])})(window,window.angular);