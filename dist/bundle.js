(()=>{"use strict";var e,t,r,n,o,c,a,i={783:(e,t,r)=>{var n=r(618),o=Object.create(null),c="undefined"==typeof document,a=Array.prototype.forEach;function i(){}function d(e,t){if(!t){if(!e.href)return;t=e.href.split("?")[0]}if(s(t)&&!1!==e.isLoaded&&t&&t.indexOf(".css")>-1){e.visited=!0;var r=e.cloneNode();r.isLoaded=!1,r.addEventListener("load",(function(){r.isLoaded||(r.isLoaded=!0,e.parentNode.removeChild(e))})),r.addEventListener("error",(function(){r.isLoaded||(r.isLoaded=!0,e.parentNode.removeChild(e))})),r.href="".concat(t,"?").concat(Date.now()),e.nextSibling?e.parentNode.insertBefore(r,e.nextSibling):e.parentNode.appendChild(r)}}function l(e){if(!e)return!1;var t=document.querySelectorAll("link"),r=!1;return a.call(t,(function(t){if(t.href){var o=function(e,t){var r;return e=n(e),t.some((function(n){e.indexOf(t)>-1&&(r=n)})),r}(t.href,e);s(o)&&!0!==t.visited&&o&&(d(t,o),r=!0)}})),r}function u(){var e=document.querySelectorAll("link");a.call(e,(function(e){!0!==e.visited&&d(e)}))}function s(e){return!!/^[a-zA-Z][a-zA-Z\d+\-.]*:/.test(e)}e.exports=function(e,t){if(c)return console.log("no window.document found, will not HMR CSS"),i;var r,a,d,s=function(e){var t=o[e];if(!t){if(document.currentScript)t=document.currentScript.src;else{var r=document.getElementsByTagName("script"),c=r[r.length-1];c&&(t=c.src)}o[e]=t}return function(e){if(!t)return null;var r=t.split(/([^\\/]+)\.js$/),o=r&&r[1];return o&&e?e.split(",").map((function(e){var r=new RegExp("".concat(o,"\\.js$"),"g");return n(t.replace(r,"".concat(e.replace(/{fileName}/g,o),".css")))})):[t.replace(".js",".css")]}}(e);return r=function(){var e=s(t.filename),r=l(e);if(t.locals)return console.log("[HMR] Detected local css modules. Reload all css"),void u();r?console.log("[HMR] css reload %s",e.join(" ")):(console.log("[HMR] Reload all css"),u())},a=50,d=0,function(){var e=this,t=arguments,n=function(){return r.apply(e,t)};clearTimeout(d),d=setTimeout(n,a)}}},618:e=>{e.exports=function(e){if(e=e.trim(),/^data:/i.test(e))return e;var t=-1!==e.indexOf("//")?e.split("//")[0]+"//":"",r=e.replace(new RegExp(t,"i"),"").split("/"),n=r[0].toLowerCase().replace(/\.$/,"");return r[0]="",t+n+r.reduce((function(e,t){switch(t){case"..":e.pop();break;case".":break;default:e.push(t)}return e}),[]).join("/")}},224:(e,t,r)=>{var n=r(783)(e.id,{locals:!1});e.hot.dispose(n),e.hot.accept(void 0,n)},615:(e,t,r)=>{r(224);const n={A:"01:30"},o=e=>e.toString().padStart(2,"0"),c=e=>{const t=e%60,r=Math.floor(e/60);document.querySelector(".field__timer-minutes").textContent=o(r),document.querySelector(".field__timer-seconds").textContent=o(t)},a=e=>Math.round(Math.random()*(e-1)+1),i=e=>{const t=["+","-","*","/"][Math.floor(3*Math.random())],r=a(e),n="/"===t?(e=>{const t=[];for(let r=1;r<=e;r++)e%r==0&&t.push(r);return t[Math.floor(Math.random()*t.length)]})(r):a(e),o=((e,t,r)=>"+"===r?e+t:"-"===r?e-t:"/"===r?e/t:e*t)(r,n,t);return{num1:r,num2:n,operator:t,result:o}},d=e=>{const{number1:t,number2:r,operator:n}=u();t.textContent=e.num1,r.textContent=e.num2,n.textContent=e.operator},l=(e,t)=>{const{score:r,result:n,level:o}=u();n.textContent="?",o.textContent=t,r.textContent=e},u=()=>({number1:document.querySelector(".field__number1"),number2:document.querySelector(".field__number2"),operator:document.querySelector(".field__operator"),result:document.querySelector(".field__result"),input:document.querySelector(".field__input-value"),user:document.querySelector(".field__user-value"),score:document.querySelector(".field__score-value"),level:document.querySelector(".field__level-value"),btnCheck:document.querySelector(".field__check"),btnStop:document.querySelector(".field__stop")}),s=()=>{document.querySelector(".modal").classList.toggle("modal__show")},f=()=>{m(_()),s(),y("field","board"),document.querySelector(".board__select").focus()},p=(e,t,r="")=>{r&&(e.textContent=r),e.classList.add(t),setTimeout((()=>e.classList.remove(t)),1e3)},m=e=>{const t=(e=>JSON.parse(localStorage.getItem(e))||[])(e),r=document.querySelector(".board__select").getElementsByTagName("option"),n=document.querySelector(".board__list"),o=document.createElement("ul");o.classList.add("board__list");for(let t=0;t<r.length;t++)r[t].value===e&&(r[t].selected=!0);if(0===t.length){const e=document.createElement("li");e.classList.add("board__items"),e.textContent="List of players is empty",o.append(e)}else t.forEach((e=>{const t=document.createElement("li");t.classList.add("board__items"),o.append(t);const r=document.createElement("span");r.textContent=e.nickname;const n=document.createElement("span");n.textContent=e.score,t.append(r),t.append(n)}));n.replaceWith(o)},h=()=>localStorage.getItem("playerName")||"player",v=e=>!!e.value,y=(e,t)=>{document.querySelector(`.${e}`).classList.remove("block_active"),document.querySelector(`.${t}`).classList.add("block_active")},_=()=>document.querySelector("#practice").checked?"practice":"timeAttack",g=()=>{const e=document.querySelector("#name");var t;v(e)?(t=e.value,localStorage.setItem("playerName",t),y("main","field")):e.focus()},b=()=>{m(_()),y("main","board"),document.querySelector(".board__back").focus()};(()=>{const e=h(),t=document.querySelector("#name");t.value=e,t.focus()})(),document.querySelector(".main__btn")?.addEventListener("click",g),document.querySelector("#leaderboard").addEventListener("click",b),document.querySelector(".main__btn-rules").addEventListener("click",(()=>{y("main","rules"),document.querySelector(".rules__back").focus()})),(()=>{const e=()=>{const e=document.querySelector(".field__animation-item"),t=document.querySelector(".field__score-value"),r=document.querySelector(".field__list");if(w.focus(),!1===v(w))return 0;w.value==L.result?(b++,S++,k++,p(e,"animation-up","+1")):(E++,S--,k=0,p(e,"animation-down","-1"),p(t,"animation-shake")),5==k&&(q++,g+=5,k=0),p(r,"animation-left"),setTimeout((()=>{w.value="",L=i(g),d(L),p(r,"animation-right"),l(S,q)}),1e3)},t=()=>{document.querySelector(".modal__score-value").textContent=S,document.querySelector(".modal__correct-value").textContent=b,document.querySelector(".modal__incorrect-value").textContent=E,document.querySelector(".modal__leader-board").focus()},r=(e,r)=>{_();clearInterval(m),((e,t)=>{const r=_(),n=JSON.parse(localStorage.getItem(r))||[],o=n.findIndex((t=>t.nickname===e));if(-1===o){const r={nickname:e,score:t};n.push(r)}else t>n[o].score&&(n[o].score=t);n.sort(((e,t)=>t.score-e.score)),localStorage.setItem(r,JSON.stringify(n.slice(0,10)))})(e,r),s(),t()},o=()=>{let e=(()=>{const e=n.A.split(/\s|\.|\:/);return 60*parseInt(e[0])+parseInt(e[1])})();m=setInterval((function(){e<=0?(c(e),clearInterval(m),r(C,S)):c(e),--e}),1e3)},a=()=>{g=10,b=0,E=0,S=0,k=0,q=1,C=h(),w.focus(),w.value="",L=i(g),(e=>{const{user:t}=u();t.textContent=e})(C),d(L),l(S,q);"timeAttack"===_()?o():(()=>{let e=1;m=setInterval((function(){c(e),e++,3600===e&&(e=0)}),1e3)})()};let m,g=10,b=0,E=0,S=0,k=0,q=1;const{input:w,btnCheck:x,btnStop:I}=u();let C=h(),L=i(g);w?.addEventListener("input",(e=>(e=>{e.target.value.length>6&&(e.target.value=e.target.value.slice(0,6));const{result:t}=u();t.textContent=e.target.value})(e))),x?.addEventListener("click",e),I.addEventListener("click",(()=>r(C,S))),w?.addEventListener("keypress",(function(t){"Enter"===t.key&&""!==t.target.value&&e()})),document.querySelector(".modal__back").addEventListener("click",(()=>{s(),y("field","main"),document.querySelector(".main__input-name").focus()})),document.querySelector(".main__btn").addEventListener("click",a),document.querySelector(".modal__play-again").addEventListener("click",(function(){s(),a()})),document.querySelector(".modal__leader-board").addEventListener("click",f)})(),document.querySelector(".board__select").addEventListener("change",(e=>m(e.target.value))),document.querySelector(".board__back").addEventListener("click",(()=>{y("board","main"),document.querySelector(".main__input-name").focus()})),document.querySelector(".rules__back").addEventListener("click",(()=>{y("rules","main"),document.querySelector(".main__input-name").focus()}))}},d={};function l(e){var t=d[e];if(void 0!==t){if(void 0!==t.error)throw t.error;return t.exports}var r=d[e]={id:e,exports:{}};try{var n={id:e,module:r,factory:i[e],require:l};l.i.forEach((function(e){e(n)})),r=n.module,n.factory.call(r.exports,r,r.exports,n.require)}catch(e){throw r.error=e,e}return r.exports}l.m=i,l.c=d,l.i=[],l.hu=e=>e+"."+l.h()+".hot-update.js",l.miniCssF=e=>{},l.hmrF=()=>"main."+l.h()+".hot-update.json",l.h=()=>"0335d955f50d4ff9d342",l.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),l.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),e={},t="mathquiz:",l.l=(r,n,o,c)=>{if(e[r])e[r].push(n);else{var a,i;if(void 0!==o)for(var d=document.getElementsByTagName("script"),u=0;u<d.length;u++){var s=d[u];if(s.getAttribute("src")==r||s.getAttribute("data-webpack")==t+o){a=s;break}}a||(i=!0,(a=document.createElement("script")).charset="utf-8",a.timeout=120,l.nc&&a.setAttribute("nonce",l.nc),a.setAttribute("data-webpack",t+o),a.src=r),e[r]=[n];var f=(t,n)=>{a.onerror=a.onload=null,clearTimeout(p);var o=e[r];if(delete e[r],a.parentNode&&a.parentNode.removeChild(a),o&&o.forEach((e=>e(n))),t)return t(n)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=f.bind(null,a.onerror),a.onload=f.bind(null,a.onload),i&&document.head.appendChild(a)}},(()=>{var e,t,r,n={},o=l.c,c=[],a=[],i="idle",d=0,u=[];function s(e){i=e;for(var t=[],r=0;r<a.length;r++)t[r]=a[r].call(null,e);return Promise.all(t)}function f(){0==--d&&s("ready").then((function(){if(0===d){var e=u;u=[];for(var t=0;t<e.length;t++)e[t]()}}))}function p(e){if("idle"!==i)throw new Error("check() is only allowed in idle status");return s("check").then(l.hmrM).then((function(r){return r?s("prepare").then((function(){var n=[];return t=[],Promise.all(Object.keys(l.hmrC).reduce((function(e,o){return l.hmrC[o](r.c,r.r,r.m,e,t,n),e}),[])).then((function(){return t=function(){return e?h(e):s("ready").then((function(){return n}))},0===d?t():new Promise((function(e){u.push((function(){e(t())}))}));var t}))})):s(v()?"ready":"idle").then((function(){return null}))}))}function m(e){return"ready"!==i?Promise.resolve().then((function(){throw new Error("apply() is only allowed in ready status (state: "+i+")")})):h(e)}function h(e){e=e||{},v();var n=t.map((function(t){return t(e)}));t=void 0;var o=n.map((function(e){return e.error})).filter(Boolean);if(o.length>0)return s("abort").then((function(){throw o[0]}));var c=s("dispose");n.forEach((function(e){e.dispose&&e.dispose()}));var a,i=s("apply"),d=function(e){a||(a=e)},l=[];return n.forEach((function(e){if(e.apply){var t=e.apply(d);if(t)for(var r=0;r<t.length;r++)l.push(t[r])}})),Promise.all([c,i]).then((function(){return a?s("fail").then((function(){throw a})):r?h(e).then((function(e){return l.forEach((function(t){e.indexOf(t)<0&&e.push(t)})),e})):s("idle").then((function(){return l}))}))}function v(){if(r)return t||(t=[]),Object.keys(l.hmrI).forEach((function(e){r.forEach((function(r){l.hmrI[e](r,t)}))})),r=void 0,!0}l.hmrD=n,l.i.push((function(u){var h,v,y,_,g=u.module,b=function(t,r){var n=o[r];if(!n)return t;var a=function(a){if(n.hot.active){if(o[a]){var i=o[a].parents;-1===i.indexOf(r)&&i.push(r)}else c=[r],e=a;-1===n.children.indexOf(a)&&n.children.push(a)}else console.warn("[HMR] unexpected require("+a+") from disposed module "+r),c=[];return t(a)},l=function(e){return{configurable:!0,enumerable:!0,get:function(){return t[e]},set:function(r){t[e]=r}}};for(var u in t)Object.prototype.hasOwnProperty.call(t,u)&&"e"!==u&&Object.defineProperty(a,u,l(u));return a.e=function(e){return function(e){switch(i){case"ready":s("prepare");case"prepare":return d++,e.then(f,f),e;default:return e}}(t.e(e))},a}(u.require,u.id);g.hot=(h=u.id,v=g,_={_acceptedDependencies:{},_acceptedErrorHandlers:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_selfInvalidated:!1,_disposeHandlers:[],_main:y=e!==h,_requireSelf:function(){c=v.parents.slice(),e=y?void 0:h,l(h)},active:!0,accept:function(e,t,r){if(void 0===e)_._selfAccepted=!0;else if("function"==typeof e)_._selfAccepted=e;else if("object"==typeof e&&null!==e)for(var n=0;n<e.length;n++)_._acceptedDependencies[e[n]]=t||function(){},_._acceptedErrorHandlers[e[n]]=r;else _._acceptedDependencies[e]=t||function(){},_._acceptedErrorHandlers[e]=r},decline:function(e){if(void 0===e)_._selfDeclined=!0;else if("object"==typeof e&&null!==e)for(var t=0;t<e.length;t++)_._declinedDependencies[e[t]]=!0;else _._declinedDependencies[e]=!0},dispose:function(e){_._disposeHandlers.push(e)},addDisposeHandler:function(e){_._disposeHandlers.push(e)},removeDisposeHandler:function(e){var t=_._disposeHandlers.indexOf(e);t>=0&&_._disposeHandlers.splice(t,1)},invalidate:function(){switch(this._selfInvalidated=!0,i){case"idle":t=[],Object.keys(l.hmrI).forEach((function(e){l.hmrI[e](h,t)})),s("ready");break;case"ready":Object.keys(l.hmrI).forEach((function(e){l.hmrI[e](h,t)}));break;case"prepare":case"check":case"dispose":case"apply":(r=r||[]).push(h)}},check:p,apply:m,status:function(e){if(!e)return i;a.push(e)},addStatusHandler:function(e){a.push(e)},removeStatusHandler:function(e){var t=a.indexOf(e);t>=0&&a.splice(t,1)},data:n[h]},e=void 0,_),g.parents=c,g.children=[],c=[],u.require=b})),l.hmrC={},l.hmrI={}})(),(()=>{var e;l.g.importScripts&&(e=l.g.location+"");var t=l.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),l.p=e})(),r=(e,t,r,n)=>{var o=document.createElement("link");return o.rel="stylesheet",o.type="text/css",o.onerror=o.onload=c=>{if(o.onerror=o.onload=null,"load"===c.type)r();else{var a=c&&("load"===c.type?"missing":c.type),i=c&&c.target&&c.target.href||t,d=new Error("Loading CSS chunk "+e+" failed.\n("+i+")");d.code="CSS_CHUNK_LOAD_FAILED",d.type=a,d.request=i,o.parentNode.removeChild(o),n(d)}},o.href=t,document.head.appendChild(o),o},n=(e,t)=>{for(var r=document.getElementsByTagName("link"),n=0;n<r.length;n++){var o=(a=r[n]).getAttribute("data-href")||a.getAttribute("href");if("stylesheet"===a.rel&&(o===e||o===t))return a}var c=document.getElementsByTagName("style");for(n=0;n<c.length;n++){var a;if((o=(a=c[n]).getAttribute("data-href"))===e||o===t)return a}},o=[],c=[],a=e=>({dispose:()=>{for(var e=0;e<o.length;e++){var t=o[e];t.parentNode&&t.parentNode.removeChild(t)}o.length=0},apply:()=>{for(var e=0;e<c.length;e++)c[e].rel="stylesheet";c.length=0}}),l.hmrC.miniCss=(e,t,i,d,u,s)=>{u.push(a),e.forEach((e=>{var t=l.miniCssF(e),a=l.p+t,i=n(t,a);i&&d.push(new Promise(((t,n)=>{var d=r(e,a,(()=>{d.as="style",d.rel="preload",t()}),n);o.push(i),c.push(d)})))}))},(()=>{var e,t,r,n,o,c=l.hmrS_jsonp=l.hmrS_jsonp||{179:0},a={};function i(t,r){return e=r,new Promise(((e,r)=>{a[t]=e;var n=l.p+l.hu(t),o=new Error;l.l(n,(e=>{if(a[t]){a[t]=void 0;var n=e&&("load"===e.type?"missing":e.type),c=e&&e.target&&e.target.src;o.message="Loading hot update chunk "+t+" failed.\n("+n+": "+c+")",o.name="ChunkLoadError",o.type=n,o.request=c,r(o)}}))}))}function d(e){function a(e){for(var t=[e],r={},n=t.map((function(e){return{chain:[e],id:e}}));n.length>0;){var o=n.pop(),c=o.id,a=o.chain,d=l.c[c];if(d&&(!d.hot._selfAccepted||d.hot._selfInvalidated)){if(d.hot._selfDeclined)return{type:"self-declined",chain:a,moduleId:c};if(d.hot._main)return{type:"unaccepted",chain:a,moduleId:c};for(var u=0;u<d.parents.length;u++){var s=d.parents[u],f=l.c[s];if(f){if(f.hot._declinedDependencies[c])return{type:"declined",chain:a.concat([s]),moduleId:c,parentId:s};-1===t.indexOf(s)&&(f.hot._acceptedDependencies[c]?(r[s]||(r[s]=[]),i(r[s],[c])):(delete r[s],t.push(s),n.push({chain:a.concat([s]),id:s})))}}}}return{type:"accepted",moduleId:e,outdatedModules:t,outdatedDependencies:r}}function i(e,t){for(var r=0;r<t.length;r++){var n=t[r];-1===e.indexOf(n)&&e.push(n)}}l.f&&delete l.f.jsonpHmr,t=void 0;var d={},u=[],s={},f=function(e){console.warn("[HMR] unexpected require("+e.id+") to disposed module")};for(var p in r)if(l.o(r,p)){var m,h=r[p],v=!1,y=!1,_=!1,g="";switch((m=h?a(p):{type:"disposed",moduleId:p}).chain&&(g="\nUpdate propagation: "+m.chain.join(" -> ")),m.type){case"self-declined":e.onDeclined&&e.onDeclined(m),e.ignoreDeclined||(v=new Error("Aborted because of self decline: "+m.moduleId+g));break;case"declined":e.onDeclined&&e.onDeclined(m),e.ignoreDeclined||(v=new Error("Aborted because of declined dependency: "+m.moduleId+" in "+m.parentId+g));break;case"unaccepted":e.onUnaccepted&&e.onUnaccepted(m),e.ignoreUnaccepted||(v=new Error("Aborted because "+p+" is not accepted"+g));break;case"accepted":e.onAccepted&&e.onAccepted(m),y=!0;break;case"disposed":e.onDisposed&&e.onDisposed(m),_=!0;break;default:throw new Error("Unexception type "+m.type)}if(v)return{error:v};if(y)for(p in s[p]=h,i(u,m.outdatedModules),m.outdatedDependencies)l.o(m.outdatedDependencies,p)&&(d[p]||(d[p]=[]),i(d[p],m.outdatedDependencies[p]));_&&(i(u,[m.moduleId]),s[p]=f)}r=void 0;for(var b,E=[],S=0;S<u.length;S++){var k=u[S],q=l.c[k];q&&(q.hot._selfAccepted||q.hot._main)&&s[k]!==f&&!q.hot._selfInvalidated&&E.push({module:k,require:q.hot._requireSelf,errorHandler:q.hot._selfAccepted})}return{dispose:function(){var e;n.forEach((function(e){delete c[e]})),n=void 0;for(var t,r=u.slice();r.length>0;){var o=r.pop(),a=l.c[o];if(a){var i={},s=a.hot._disposeHandlers;for(S=0;S<s.length;S++)s[S].call(null,i);for(l.hmrD[o]=i,a.hot.active=!1,delete l.c[o],delete d[o],S=0;S<a.children.length;S++){var f=l.c[a.children[S]];f&&((e=f.parents.indexOf(o))>=0&&f.parents.splice(e,1))}}}for(var p in d)if(l.o(d,p)&&(a=l.c[p]))for(b=d[p],S=0;S<b.length;S++)t=b[S],(e=a.children.indexOf(t))>=0&&a.children.splice(e,1)},apply:function(t){for(var r in s)l.o(s,r)&&(l.m[r]=s[r]);for(var n=0;n<o.length;n++)o[n](l);for(var c in d)if(l.o(d,c)){var a=l.c[c];if(a){b=d[c];for(var i=[],f=[],p=[],m=0;m<b.length;m++){var h=b[m],v=a.hot._acceptedDependencies[h],y=a.hot._acceptedErrorHandlers[h];if(v){if(-1!==i.indexOf(v))continue;i.push(v),f.push(y),p.push(h)}}for(var _=0;_<i.length;_++)try{i[_].call(null,b)}catch(r){if("function"==typeof f[_])try{f[_](r,{moduleId:c,dependencyId:p[_]})}catch(n){e.onErrored&&e.onErrored({type:"accept-error-handler-errored",moduleId:c,dependencyId:p[_],error:n,originalError:r}),e.ignoreErrored||(t(n),t(r))}else e.onErrored&&e.onErrored({type:"accept-errored",moduleId:c,dependencyId:p[_],error:r}),e.ignoreErrored||t(r)}}}for(var g=0;g<E.length;g++){var S=E[g],k=S.module;try{S.require(k)}catch(r){if("function"==typeof S.errorHandler)try{S.errorHandler(r,{moduleId:k,module:l.c[k]})}catch(n){e.onErrored&&e.onErrored({type:"self-accept-error-handler-errored",moduleId:k,error:n,originalError:r}),e.ignoreErrored||(t(n),t(r))}else e.onErrored&&e.onErrored({type:"self-accept-errored",moduleId:k,error:r}),e.ignoreErrored||t(r)}}return u}}}self.webpackHotUpdatemathquiz=(t,n,c)=>{for(var i in n)l.o(n,i)&&(r[i]=n[i],e&&e.push(i));c&&o.push(c),a[t]&&(a[t](),a[t]=void 0)},l.hmrI.jsonp=function(e,t){r||(r={},o=[],n=[],t.push(d)),l.o(r,e)||(r[e]=l.m[e])},l.hmrC.jsonp=function(e,a,u,s,f,p){f.push(d),t={},n=a,r=u.reduce((function(e,t){return e[t]=!1,e}),{}),o=[],e.forEach((function(e){l.o(c,e)&&void 0!==c[e]?(s.push(i(e,p)),t[e]=!0):t[e]=!1})),l.f&&(l.f.jsonpHmr=function(e,r){t&&l.o(t,e)&&!t[e]&&(r.push(i(e)),t[e]=!0)})},l.hmrM=()=>{if("undefined"==typeof fetch)throw new Error("No browser support: need fetch API");return fetch(l.p+l.hmrF()).then((e=>{if(404!==e.status){if(!e.ok)throw new Error("Failed to fetch update manifest "+e.statusText);return e.json()}}))}})();l(615)})();