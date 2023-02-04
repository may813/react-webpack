/*! For license information please see react.development.js.LICENSE.txt */
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e=e||self).React={})}(this,(function(e){"use strict";var t=Symbol.for("react.element"),n=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),i=Symbol.for("react.provider"),u=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),s=Symbol.for("react.suspense"),l=Symbol.for("react.suspense_list"),f=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),d=Symbol.for("react.offscreen"),y=Symbol.iterator;function m(e){if(null===e||"object"!=typeof e)return null;var t=y&&e[y]||e["@@iterator"];return"function"==typeof t?t:null}var v={current:null},h={transition:null},g={current:null,isBatchingLegacy:!1,didScheduleLegacyUpdate:!1},b={current:null},_={},w=null;function k(e){w=e}_.setExtraStackFrame=function(e){w=e},_.getCurrentStack=null,_.getStackAddendum=function(){var e="";w&&(e+=w);var t=_.getCurrentStack;return t&&(e+=t()||""),e};var C={ReactCurrentDispatcher:v,ReactCurrentBatchConfig:h,ReactCurrentOwner:b};function R(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];P("warn",e,n)}function S(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];P("error",e,n)}function P(e,t,n){var r=C.ReactDebugCurrentFrame.getStackAddendum();""!==r&&(t+="%s",n=n.concat([r]));var o=n.map((function(e){return String(e)}));o.unshift("Warning: "+t),Function.prototype.apply.call(console[e],console,o)}C.ReactDebugCurrentFrame=_,C.ReactCurrentActQueue=g;var j={};function x(e,t){var n=e.constructor,r=n&&(n.displayName||n.name)||"ReactClass",o=r+"."+t;j[o]||(S("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.",t,r),j[o]=!0)}var O={isMounted:function(e){return!1},enqueueForceUpdate:function(e,t,n){x(e,"forceUpdate")},enqueueReplaceState:function(e,t,n,r){x(e,"replaceState")},enqueueSetState:function(e,t,n,r){x(e,"setState")}},T=Object.assign,E={};function $(e,t,n){this.props=e,this.context=t,this.refs=E,this.updater=n||O}Object.freeze(E),$.prototype.isReactComponent={},$.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},$.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};var I={isMounted:["isMounted","Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],replaceState:["replaceState","Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]},D=function(e,t){Object.defineProperty($.prototype,e,{get:function(){R("%s(...) is deprecated in plain JavaScript React classes. %s",t[0],t[1])}})};for(var F in I)I.hasOwnProperty(F)&&D(F,I[F]);function N(){}function M(e,t,n){this.props=e,this.context=t,this.refs=E,this.updater=n||O}N.prototype=$.prototype;var L=M.prototype=new N;L.constructor=M,T(L,$.prototype),L.isPureReactComponent=!0;var z=Array.isArray;function U(e){return z(e)}function A(e){return""+e}function V(e){if(function(e){try{return A(e),!1}catch(e){return!0}}(e))return S("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",function(e){return"function"==typeof Symbol&&Symbol.toStringTag&&e[Symbol.toStringTag]||e.constructor.name||"Object"}(e)),A(e)}function Y(e){return e.displayName||"Context"}function q(e){if(null==e)return null;if("number"==typeof e.tag&&S("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),"function"==typeof e)return e.displayName||e.name||null;if("string"==typeof e)return e;switch(e){case r:return"Fragment";case n:return"Portal";case a:return"Profiler";case o:return"StrictMode";case s:return"Suspense";case l:return"SuspenseList"}if("object"==typeof e)switch(e.$$typeof){case u:return Y(e)+".Consumer";case i:return Y(e._context)+".Provider";case c:return function(e,t,n){var r=e.displayName;if(r)return r;var o=t.displayName||t.name||"";return""!==o?n+"("+o+")":n}(e,e.render,"ForwardRef");case f:var t=e.displayName||null;return null!==t?t:q(e.type)||"Memo";case p:var d=e,y=d._payload,m=d._init;try{return q(m(y))}catch(e){return null}}return null}var W,B,H,J=Object.prototype.hasOwnProperty,Q={key:!0,ref:!0,__self:!0,__source:!0};function X(e){if(J.call(e,"ref")){var t=Object.getOwnPropertyDescriptor(e,"ref").get;if(t&&t.isReactWarning)return!1}return void 0!==e.ref}function G(e){if(J.call(e,"key")){var t=Object.getOwnPropertyDescriptor(e,"key").get;if(t&&t.isReactWarning)return!1}return void 0!==e.key}function K(e,t){var n=function(){W||(W=!0,S("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",t))};n.isReactWarning=!0,Object.defineProperty(e,"key",{get:n,configurable:!0})}function Z(e,t){var n=function(){B||(B=!0,S("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",t))};n.isReactWarning=!0,Object.defineProperty(e,"ref",{get:n,configurable:!0})}function ee(e){if("string"==typeof e.ref&&b.current&&e.__self&&b.current.stateNode!==e.__self){var t=q(b.current.type);H[t]||(S('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',t,e.ref),H[t]=!0)}}H={};var te=function(e,n,r,o,a,i,u){var c={$$typeof:t,type:e,key:n,ref:r,props:u,_owner:i,_store:{}};return Object.defineProperty(c._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(c,"_self",{configurable:!1,enumerable:!1,writable:!1,value:o}),Object.defineProperty(c,"_source",{configurable:!1,enumerable:!1,writable:!1,value:a}),Object.freeze&&(Object.freeze(c.props),Object.freeze(c)),c};function ne(e,t,n){var r,o={},a=null,i=null,u=null,c=null;if(null!=t)for(r in X(t)&&(i=t.ref,ee(t)),G(t)&&(V(t.key),a=""+t.key),u=void 0===t.__self?null:t.__self,c=void 0===t.__source?null:t.__source,t)J.call(t,r)&&!Q.hasOwnProperty(r)&&(o[r]=t[r]);var s=arguments.length-2;if(1===s)o.children=n;else if(s>1){for(var l=Array(s),f=0;f<s;f++)l[f]=arguments[f+2];Object.freeze&&Object.freeze(l),o.children=l}if(e&&e.defaultProps){var p=e.defaultProps;for(r in p)void 0===o[r]&&(o[r]=p[r])}if(a||i){var d="function"==typeof e?e.displayName||e.name||"Unknown":e;a&&K(o,d),i&&Z(o,d)}return te(e,a,i,u,c,b.current,o)}function re(e,t,n){if(null==e)throw new Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r,o,a=T({},e.props),i=e.key,u=e.ref,c=e._self,s=e._source,l=e._owner;if(null!=t)for(r in X(t)&&(u=t.ref,l=b.current),G(t)&&(V(t.key),i=""+t.key),e.type&&e.type.defaultProps&&(o=e.type.defaultProps),t)J.call(t,r)&&!Q.hasOwnProperty(r)&&(void 0===t[r]&&void 0!==o?a[r]=o[r]:a[r]=t[r]);var f=arguments.length-2;if(1===f)a.children=n;else if(f>1){for(var p=Array(f),d=0;d<f;d++)p[d]=arguments[d+2];a.children=p}return te(e.type,i,u,c,s,l,a)}function oe(e){return"object"==typeof e&&null!==e&&e.$$typeof===t}var ae=!1,ie=/\/+/g;function ue(e){return e.replace(ie,"$&/")}function ce(e,t){return"object"==typeof e&&null!==e&&null!=e.key?(V(e.key),n=""+e.key,r={"=":"=0",":":"=2"},"$"+n.replace(/[=:]/g,(function(e){return r[e]}))):t.toString(36);var n,r}function se(e,r,o,a,i){var u=typeof e;"undefined"!==u&&"boolean"!==u||(e=null);var c,s,l,f=!1;if(null===e)f=!0;else switch(u){case"string":case"number":f=!0;break;case"object":switch(e.$$typeof){case t:case n:f=!0}}if(f){var p=e,d=i(p),y=""===a?"."+ce(p,0):a;if(U(d)){var v="";null!=y&&(v=ue(y)+"/"),se(d,r,v,"",(function(e){return e}))}else null!=d&&(oe(d)&&(!d.key||p&&p.key===d.key||V(d.key),c=d,s=o+(!d.key||p&&p.key===d.key?"":ue(""+d.key)+"/")+y,d=te(c.type,s,c.ref,c._self,c._source,c._owner,c.props)),r.push(d));return 1}var h=0,g=""===a?".":a+":";if(U(e))for(var b=0;b<e.length;b++)h+=se(l=e[b],r,o,g+ce(l,b),i);else{var _=m(e);if("function"==typeof _){var w=e;_===w.entries&&(ae||R("Using Maps as children is not supported. Use an array of keyed ReactElements instead."),ae=!0);for(var k,C=_.call(w),S=0;!(k=C.next()).done;)h+=se(l=k.value,r,o,g+ce(l,S++),i)}else if("object"===u){var P=String(e);throw new Error("Objects are not valid as a React child (found: "+("[object Object]"===P?"object with keys {"+Object.keys(e).join(", ")+"}":P)+"). If you meant to render a collection of children, use an array instead.")}}return h}function le(e,t,n){if(null==e)return e;var r=[],o=0;return se(e,r,"","",(function(e){return t.call(n,e,o++)})),r}var fe;function pe(e){if(-1===e._status){var t=(0,e._result)();if(t.then((function(t){if(0===e._status||-1===e._status){var n=e;n._status=1,n._result=t}}),(function(t){if(0===e._status||-1===e._status){var n=e;n._status=2,n._result=t}})),-1===e._status){var n=e;n._status=0,n._result=t}}if(1===e._status){var r=e._result;return void 0===r&&S("lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))\n\nDid you accidentally put curly braces around the import?",r),"default"in r||S("lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))",r),r.default}throw e._result}function de(e){return"string"==typeof e||"function"==typeof e||(e===r||e===a||e===o||e===s||e===l||e===d||"object"==typeof e&&null!==e&&(e.$$typeof===p||e.$$typeof===f||e.$$typeof===i||e.$$typeof===u||e.$$typeof===c||e.$$typeof===fe||void 0!==e.getModuleId))}function ye(){var e=v.current;return null===e&&S("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem."),e}fe=Symbol.for("react.module.reference");var me,ve,he,ge,be,_e,we,ke=0;function Ce(){}Ce.__reactDisabledLog=!0;var Re,Se=C.ReactCurrentDispatcher;function Pe(e,t,n){if(void 0===Re)try{throw Error()}catch(e){var r=e.stack.trim().match(/\n( *(at )?)/);Re=r&&r[1]||""}return"\n"+Re+e}var je,xe=!1,Oe="function"==typeof WeakMap?WeakMap:Map;function Te(e,t){if(!e||xe)return"";var n,r=je.get(e);if(void 0!==r)return r;xe=!0;var o,a=Error.prepareStackTrace;Error.prepareStackTrace=void 0,o=Se.current,Se.current=null,function(){if(0===ke){me=console.log,ve=console.info,he=console.warn,ge=console.error,be=console.group,_e=console.groupCollapsed,we=console.groupEnd;var e={configurable:!0,enumerable:!0,value:Ce,writable:!0};Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e})}ke++}();try{if(t){var i=function(){throw Error()};if(Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),"object"==typeof Reflect&&Reflect.construct){try{Reflect.construct(i,[])}catch(e){n=e}Reflect.construct(e,[],i)}else{try{i.call()}catch(e){n=e}e.call(i.prototype)}}else{try{throw Error()}catch(e){n=e}e()}}catch(t){if(t&&n&&"string"==typeof t.stack){for(var u=t.stack.split("\n"),c=n.stack.split("\n"),s=u.length-1,l=c.length-1;s>=1&&l>=0&&u[s]!==c[l];)l--;for(;s>=1&&l>=0;s--,l--)if(u[s]!==c[l]){if(1!==s||1!==l)do{if(s--,--l<0||u[s]!==c[l]){var f="\n"+u[s].replace(" at new "," at ");return e.displayName&&f.includes("<anonymous>")&&(f=f.replace("<anonymous>",e.displayName)),"function"==typeof e&&je.set(e,f),f}}while(s>=1&&l>=0);break}}}finally{xe=!1,Se.current=o,function(){if(0==--ke){var e={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:T({},e,{value:me}),info:T({},e,{value:ve}),warn:T({},e,{value:he}),error:T({},e,{value:ge}),group:T({},e,{value:be}),groupCollapsed:T({},e,{value:_e}),groupEnd:T({},e,{value:we})})}ke<0&&S("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}(),Error.prepareStackTrace=a}var p=e?e.displayName||e.name:"",d=p?Pe(p):"";return"function"==typeof e&&je.set(e,d),d}function Ee(e,t,n){if(null==e)return"";if("function"==typeof e)return Te(e,function(e){var t=e.prototype;return!(!t||!t.isReactComponent)}(e));if("string"==typeof e)return Pe(e);switch(e){case s:return Pe("Suspense");case l:return Pe("SuspenseList")}if("object"==typeof e)switch(e.$$typeof){case c:return Te(e.render,!1);case f:return Ee(e.type,t,n);case p:var r=e,o=r._payload,a=r._init;try{return Ee(a(o),t,n)}catch(e){}}return""}je=new Oe;var $e,Ie={},De=C.ReactDebugCurrentFrame;function Fe(e){if(e){var t=e._owner,n=Ee(e.type,e._source,t?t.type:null);De.setExtraStackFrame(n)}else De.setExtraStackFrame(null)}function Ne(e){if(e){var t=e._owner;k(Ee(e.type,e._source,t?t.type:null))}else k(null)}function Me(){if(b.current){var e=q(b.current.type);if(e)return"\n\nCheck the render method of `"+e+"`."}return""}function Le(e){return null!=e&&void 0!==(t=e.__source)?"\n\nCheck your code at "+t.fileName.replace(/^.*[\\\/]/,"")+":"+t.lineNumber+".":"";var t}$e=!1;var ze={};function Ue(e,t){if(e._store&&!e._store.validated&&null==e.key){e._store.validated=!0;var n=function(e){var t=Me();if(!t){var n="string"==typeof e?e:e.displayName||e.name;n&&(t="\n\nCheck the top-level render call using <"+n+">.")}return t}(t);if(!ze[n]){ze[n]=!0;var r="";e&&e._owner&&e._owner!==b.current&&(r=" It was passed a child from "+q(e._owner.type)+"."),Ne(e),S('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',n,r),Ne(null)}}}function Ae(e,t){if("object"==typeof e)if(U(e))for(var n=0;n<e.length;n++){var r=e[n];oe(r)&&Ue(r,t)}else if(oe(e))e._store&&(e._store.validated=!0);else if(e){var o=m(e);if("function"==typeof o&&o!==e.entries)for(var a,i=o.call(e);!(a=i.next()).done;)oe(a.value)&&Ue(a.value,t)}}function Ve(e){var t,n=e.type;if(null!=n&&"string"!=typeof n){if("function"==typeof n)t=n.propTypes;else{if("object"!=typeof n||n.$$typeof!==c&&n.$$typeof!==f)return;t=n.propTypes}if(t){var r=q(n);!function(e,t,n,r,o){var a=Function.call.bind(J);for(var i in e)if(a(e,i)){var u=void 0;try{if("function"!=typeof e[i]){var c=Error((r||"React class")+": "+n+" type `"+i+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[i]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw c.name="Invariant Violation",c}u=e[i](t,i,r,n,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(e){u=e}!u||u instanceof Error||(Fe(o),S("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",r||"React class",n,i,typeof u),Fe(null)),u instanceof Error&&!(u.message in Ie)&&(Ie[u.message]=!0,Fe(o),S("Failed %s type: %s",n,u.message),Fe(null))}}(t,e.props,"prop",r,e)}else if(void 0!==n.PropTypes&&!$e){$e=!0,S("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",q(n)||"Unknown")}"function"!=typeof n.getDefaultProps||n.getDefaultProps.isReactClassApproved||S("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}function Ye(e){for(var t=Object.keys(e.props),n=0;n<t.length;n++){var r=t[n];if("children"!==r&&"key"!==r){Ne(e),S("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",r),Ne(null);break}}null!==e.ref&&(Ne(e),S("Invalid attribute `ref` supplied to `React.Fragment`."),Ne(null))}function qe(e,n,o){var a=de(e);if(!a){var i="";(void 0===e||"object"==typeof e&&null!==e&&0===Object.keys(e).length)&&(i+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var u,c=Le(n);i+=c||Me(),null===e?u="null":U(e)?u="array":void 0!==e&&e.$$typeof===t?(u="<"+(q(e.type)||"Unknown")+" />",i=" Did you accidentally export a JSX literal instead of a component?"):u=typeof e,S("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",u,i)}var s=ne.apply(this,arguments);if(null==s)return s;if(a)for(var l=2;l<arguments.length;l++)Ae(arguments[l],e);return e===r?Ye(s):Ve(s),s}var We=!1;function Be(e,t){var n=e.length;e.push(t),function(e,t,n){var r=n;for(;r>0;){var o=r-1>>>1,a=e[o];if(!(Qe(a,t)>0))return;e[o]=t,e[r]=a,r=o}}(e,t,n)}function He(e){return 0===e.length?null:e[0]}function Je(e){if(0===e.length)return null;var t=e[0],n=e.pop();return n!==t&&(e[0]=n,function(e,t,n){var r=n,o=e.length,a=o>>>1;for(;r<a;){var i=2*(r+1)-1,u=e[i],c=i+1,s=e[c];if(Qe(u,t)<0)c<o&&Qe(s,u)<0?(e[r]=s,e[c]=t,r=c):(e[r]=u,e[i]=t,r=i);else{if(!(c<o&&Qe(s,t)<0))return;e[r]=s,e[c]=t,r=c}}}(e,n,0)),t}function Qe(e,t){var n=e.sortIndex-t.sortIndex;return 0!==n?n:e.id-t.id}var Xe;if("object"==typeof performance&&"function"==typeof performance.now){var Ge=performance;Xe=function(){return Ge.now()}}else{var Ke=Date,Ze=Ke.now();Xe=function(){return Ke.now()-Ze}}var et=[],tt=[],nt=1,rt=null,ot=3,at=!1,it=!1,ut=!1,ct="function"==typeof setTimeout?setTimeout:null,st="function"==typeof clearTimeout?clearTimeout:null,lt="undefined"!=typeof setImmediate?setImmediate:null;"undefined"!=typeof navigator&&void 0!==navigator.scheduling&&void 0!==navigator.scheduling.isInputPending&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function ft(e){for(var t=He(tt);null!==t;){if(null===t.callback)Je(tt);else{if(!(t.startTime<=e))return;Je(tt),t.sortIndex=t.expirationTime,Be(et,t)}t=He(tt)}}function pt(e){if(ut=!1,ft(e),!it)if(null!==He(et))it=!0,St(dt);else{var t=He(tt);null!==t&&Pt(pt,t.startTime-e)}}function dt(e,t){it=!1,ut&&(ut=!1,jt()),at=!0;var n=ot;try{return yt(e,t)}finally{rt=null,ot=n,at=!1}}function yt(e,t){var n=t;for(ft(n),rt=He(et);null!==rt&&(!(rt.expirationTime>n)||e&&!_t());){var r=rt.callback;if("function"==typeof r){rt.callback=null,ot=rt.priorityLevel;var o=r(rt.expirationTime<=n);n=Xe(),"function"==typeof o?rt.callback=o:rt===He(et)&&Je(et),ft(n)}else Je(et);rt=He(et)}if(null!==rt)return!0;var a=He(tt);return null!==a&&Pt(pt,a.startTime-n),!1}var mt=!1,vt=null,ht=-1,gt=5,bt=-1;function _t(){return!(Xe()-bt<gt)}var wt,kt=function(){if(null!==vt){var e=Xe();bt=e;var t=!0;try{t=vt(!0,e)}finally{t?wt():(mt=!1,vt=null)}}else mt=!1};if("function"==typeof lt)wt=function(){lt(kt)};else if("undefined"!=typeof MessageChannel){var Ct=new MessageChannel,Rt=Ct.port2;Ct.port1.onmessage=kt,wt=function(){Rt.postMessage(null)}}else wt=function(){ct(kt,0)};function St(e){vt=e,mt||(mt=!0,wt())}function Pt(e,t){ht=ct((function(){e(Xe())}),t)}function jt(){st(ht),ht=-1}var xt=function(){},Ot=Object.freeze({__proto__:null,unstable_ImmediatePriority:1,unstable_UserBlockingPriority:2,unstable_NormalPriority:3,unstable_IdlePriority:5,unstable_LowPriority:4,unstable_runWithPriority:function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=ot;ot=e;try{return t()}finally{ot=n}},unstable_next:function(e){var t;switch(ot){case 1:case 2:case 3:t=3;break;default:t=ot}var n=ot;ot=t;try{return e()}finally{ot=n}},unstable_scheduleCallback:function(e,t,n){var r,o,a=Xe();if("object"==typeof n&&null!==n){var i=n.delay;r="number"==typeof i&&i>0?a+i:a}else r=a;switch(e){case 1:o=-1;break;case 2:o=250;break;case 5:o=1073741823;break;case 4:o=1e4;break;default:o=5e3}var u=r+o,c={id:nt++,callback:t,priorityLevel:e,startTime:r,expirationTime:u,sortIndex:-1};return r>a?(c.sortIndex=r,Be(tt,c),null===He(et)&&c===He(tt)&&(ut?jt():ut=!0,Pt(pt,r-a))):(c.sortIndex=u,Be(et,c),it||at||(it=!0,St(dt))),c},unstable_cancelCallback:function(e){e.callback=null},unstable_wrapCallback:function(e){var t=ot;return function(){var n=ot;ot=t;try{return e.apply(this,arguments)}finally{ot=n}}},unstable_getCurrentPriorityLevel:function(){return ot},unstable_shouldYield:_t,unstable_requestPaint:xt,unstable_continueExecution:function(){it||at||(it=!0,St(dt))},unstable_pauseExecution:function(){},unstable_getFirstCallbackNode:function(){return He(et)},get unstable_now(){return Xe},unstable_forceFrameRate:function(e){e<0||e>125?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):gt=e>0?Math.floor(1e3/e):5},unstable_Profiling:null}),Tt={ReactCurrentDispatcher:v,ReactCurrentOwner:b,ReactCurrentBatchConfig:h,Scheduler:Ot};Tt.ReactCurrentActQueue=g,Tt.ReactDebugCurrentFrame=_;var Et=!1,$t=null;var It=0,Dt=!1;function Ft(e){e!==It-1&&S("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "),It=e}function Nt(e,t,n){var r=g.current;if(null!==r)try{Lt(r),function(e){if(null===$t)try{var t=("require"+Math.random()).slice(0,7),n=module&&module[t];$t=n.call(module,"timers").setImmediate}catch(e){$t=function(e){!1===Et&&(Et=!0,"undefined"==typeof MessageChannel&&S("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));var t=new MessageChannel;t.port1.onmessage=e,t.port2.postMessage(void 0)}}$t(e)}((function(){0===r.length?(g.current=null,t(e)):Nt(e,t,n)}))}catch(e){n(e)}else t(e)}var Mt=!1;function Lt(e){if(!Mt){Mt=!0;var t=0;try{for(;t<e.length;t++){var n=e[t];do{n=n(!0)}while(null!==n)}e.length=0}catch(n){throw e=e.slice(t+1),n}finally{Mt=!1}}}var zt=qe,Ut=function(e,t,n){for(var r=re.apply(this,arguments),o=2;o<arguments.length;o++)Ae(arguments[o],r.type);return Ve(r),r},At=function(e){var t=qe.bind(null,e);return t.type=e,We||(We=!0,R("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")),Object.defineProperty(t,"type",{enumerable:!1,get:function(){return R("Factory.type is deprecated. Access the class directly before passing it to createFactory."),Object.defineProperty(this,"type",{value:e}),e}}),t},Vt={map:le,forEach:function(e,t,n){le(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return le(e,(function(){t++})),t},toArray:function(e){return le(e,(function(e){return e}))||[]},only:function(e){if(!oe(e))throw new Error("React.Children.only expected to receive a single React element child.");return e}};e.Children=Vt,e.Component=$,e.Fragment=r,e.Profiler=a,e.PureComponent=M,e.StrictMode=o,e.Suspense=s,e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Tt,e.cloneElement=Ut,e.createContext=function(e){var t={$$typeof:u,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null};t.Provider={$$typeof:i,_context:t};var n=!1,r=!1,o=!1,a={$$typeof:u,_context:t};return Object.defineProperties(a,{Provider:{get:function(){return r||(r=!0,S("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")),t.Provider},set:function(e){t.Provider=e}},_currentValue:{get:function(){return t._currentValue},set:function(e){t._currentValue=e}},_currentValue2:{get:function(){return t._currentValue2},set:function(e){t._currentValue2=e}},_threadCount:{get:function(){return t._threadCount},set:function(e){t._threadCount=e}},Consumer:{get:function(){return n||(n=!0,S("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")),t.Consumer}},displayName:{get:function(){return t.displayName},set:function(e){o||(R("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.",e),o=!0)}}}),t.Consumer=a,t._currentRenderer=null,t._currentRenderer2=null,t},e.createElement=zt,e.createFactory=At,e.createRef=function(){var e={current:null};return Object.seal(e),e},e.forwardRef=function(e){null!=e&&e.$$typeof===f?S("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...))."):"function"!=typeof e?S("forwardRef requires a render function but was given %s.",null===e?"null":typeof e):0!==e.length&&2!==e.length&&S("forwardRef render functions accept exactly two parameters: props and ref. %s",1===e.length?"Did you forget to use the ref parameter?":"Any additional parameter will be undefined."),null!=e&&(null==e.defaultProps&&null==e.propTypes||S("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?"));var t,n={$$typeof:c,render:e};return Object.defineProperty(n,"displayName",{enumerable:!1,configurable:!0,get:function(){return t},set:function(n){t=n,e.name||e.displayName||(e.displayName=n)}}),n},e.isValidElement=oe,e.lazy=function(e){var t,n,r={$$typeof:p,_payload:{_status:-1,_result:e},_init:pe};return Object.defineProperties(r,{defaultProps:{configurable:!0,get:function(){return t},set:function(e){S("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."),t=e,Object.defineProperty(r,"defaultProps",{enumerable:!0})}},propTypes:{configurable:!0,get:function(){return n},set:function(e){S("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."),n=e,Object.defineProperty(r,"propTypes",{enumerable:!0})}}}),r},e.memo=function(e,t){de(e)||S("memo: The first argument must be a component. Instead received: %s",null===e?"null":typeof e);var n,r={$$typeof:f,type:e,compare:void 0===t?null:t};return Object.defineProperty(r,"displayName",{enumerable:!1,configurable:!0,get:function(){return n},set:function(t){n=t,e.name||e.displayName||(e.displayName=t)}}),r},e.startTransition=function(e,t){var n=h.transition;h.transition={};var r=h.transition;h.transition._updatedFibers=new Set;try{e()}finally{if(h.transition=n,null===n&&r._updatedFibers)r._updatedFibers.size>10&&R("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."),r._updatedFibers.clear()}},e.unstable_act=function(e){var t=It;It++,null===g.current&&(g.current=[]);var n,r=g.isBatchingLegacy;try{if(g.isBatchingLegacy=!0,n=e(),!r&&g.didScheduleLegacyUpdate){var o=g.current;null!==o&&(g.didScheduleLegacyUpdate=!1,Lt(o))}}catch(e){throw Ft(t),e}finally{g.isBatchingLegacy=r}if(null!==n&&"object"==typeof n&&"function"==typeof n.then){var a=n,i=!1,u={then:function(e,n){i=!0,a.then((function(r){Ft(t),0===It?Nt(r,e,n):e(r)}),(function(e){Ft(t),n(e)}))}};return Dt||"undefined"==typeof Promise||Promise.resolve().then((function(){})).then((function(){i||(Dt=!0,S("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"))})),u}var c=n;if(Ft(t),0===It){var s=g.current;return null!==s&&(Lt(s),g.current=null),{then:function(e,t){null===g.current?(g.current=[],Nt(c,e,t)):e(c)}}}return{then:function(e,t){e(c)}}},e.useCallback=function(e,t){return ye().useCallback(e,t)},e.useContext=function(e){var t=ye();if(void 0!==e._context){var n=e._context;n.Consumer===e?S("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?"):n.Provider===e&&S("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?")}return t.useContext(e)},e.useDebugValue=function(e,t){return ye().useDebugValue(e,t)},e.useDeferredValue=function(e){return ye().useDeferredValue(e)},e.useEffect=function(e,t){return ye().useEffect(e,t)},e.useId=function(){return ye().useId()},e.useImperativeHandle=function(e,t,n){return ye().useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return ye().useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return ye().useLayoutEffect(e,t)},e.useMemo=function(e,t){return ye().useMemo(e,t)},e.useReducer=function(e,t,n){return ye().useReducer(e,t,n)},e.useRef=function(e){return ye().useRef(e)},e.useState=function(e){return ye().useState(e)},e.useSyncExternalStore=function(e,t,n){return ye().useSyncExternalStore(e,t,n)},e.useTransition=function(){return ye().useTransition()},e.version="18.2.0"}));