(function(t){function e(e){for(var r,s,o=e[0],c=e[1],u=e[2],l=0,h=[];l<o.length;l++)s=o[l],a[s]&&h.push(a[s][0]),a[s]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);m&&m(e);while(h.length)h.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,s=1;s<n.length;s++){var c=n[s];0!==a[c]&&(r=!1)}r&&(i.splice(e--,1),t=o(o.s=n[0]))}return t}var r={},a={app:0},i=[];function s(t){return o.p+"js/"+({}[t]||t)+"."+{"chunk-d72b8de6":"c5f29e96"}[t]+".js"}function o(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.e=function(t){var e=[],n=a[t];if(0!==n)if(n)e.push(n[2]);else{var r=new Promise(function(e,r){n=a[t]=[e,r]});e.push(n[2]=r);var i,c=document.createElement("script");c.charset="utf-8",c.timeout=120,o.nc&&c.setAttribute("nonce",o.nc),c.src=s(t),i=function(e){c.onerror=c.onload=null,clearTimeout(u);var n=a[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src,s=new Error("Loading chunk "+t+" failed.\n("+r+": "+i+")");s.type=r,s.request=i,n[1](s)}a[t]=void 0}};var u=setTimeout(function(){i({type:"timeout",target:c})},12e4);c.onerror=c.onload=i,document.head.appendChild(c)}return Promise.all(e)},o.m=t,o.c=r,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/",o.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var m=u;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d76")},"0abc":function(t,e,n){},"1c39":function(t,e,n){"use strict";var r=n("7673"),a=n.n(r);a.a},"37cc":function(t,e,n){},"3b0a":function(t,e,n){"use strict";var r=n("e68b"),a=n.n(r);a.a},"56d7":function(t,e,n){},"56d76":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Header",{attrs:{userInfo:t.userInfo,showAuth:t.showAuth},on:{"update:showAuth":function(e){t.showAuth=e},"update:show-auth":function(e){t.showAuth=e},signout:t.signout,search:t.search}}),n("main",[n("router-view")],1),n("Auth",{attrs:{showAuth:t.showAuth},on:{"update:showAuth":function(e){t.showAuth=e},"update:show-auth":function(e){t.showAuth=e}}})],1)},i=[],s=(n("96cf"),n("3b8d")),o=n("cebc"),c=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("header",[r("div",{staticClass:"header"},[r("div",{staticClass:"header-logo"},[r("img",{attrs:{src:n("d9ce")},on:{click:function(e){return t.$router.push("/")}}})]),r("div",{staticClass:"header-tools"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.keyword,expression:"keyword"}],staticClass:"header-tools-search",attrs:{type:"text",placeholder:"Search"},domProps:{value:t.keyword},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.search(e)},input:function(e){e.target.composing||(t.keyword=e.target.value)}}}),t.userInfo.name?r("span",{staticClass:"header-tools-name"},[t._v(t._s(t.userInfo.name))]):t._e(),t.userInfo.avatar_url?r("img",{staticClass:"header-tools-avatar",attrs:{src:t.userInfo.avatar_url,alt:""}}):t._e(),r("i",{staticClass:"fas fa-ellipsis-v header-tools-more show-menu",on:{click:function(e){t.menuOnShow=!t.menuOnShow}}})]),r("div",{directives:[{name:"show",rawName:"v-show",value:t.menuOnShow,expression:"menuOnShow"}],staticClass:"header-menu border"},[r("div",{staticClass:"header-menu-item search"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.keyword,expression:"keyword"}],staticClass:"show-menu",attrs:{type:"text",placeholder:"Search"},domProps:{value:t.keyword},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.search(e)},input:function(e){e.target.composing||(t.keyword=e.target.value)}}})]),r("div",{directives:[{name:"show",rawName:"v-show",value:!t.userInfo.login,expression:"!userInfo.login"}],staticClass:"header-menu-item",attrs:{id:"header-menu-btn"},on:{click:function(e){return t.$emit("update:showAuth",!0)}}},[t._v("\n        Login width Github\n      ")]),r("div",{directives:[{name:"show",rawName:"v-show",value:t.userInfo.login,expression:"userInfo.login"}],staticClass:"header-menu-item signout",on:{click:t.signout}},[r("i",{staticClass:"fas fa-sign-out-alt"}),t._v("\n        Signout\n      ")])])])])},u=[],l={props:["userInfo","showAuth"],data:function(){return{menuOnShow:!1,keyword:""}},mounted:function(){var t=this;window.addEventListener("click",function(e){e.target.classList.contains("show-menu")||(t.menuOnShow=!1)})},methods:{signout:function(){this.$emit("signout")},search:function(){this.$emit("search",this.keyword),this.menuOnShow=!1,this.keyword=""}}},m=l,h=(n("3b0a"),n("2877")),d=Object(h["a"])(m,c,u,!1,null,"40bb4990",null),f=d.exports,p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.showAuth?n("div",{staticClass:"auth mask",on:{click:t.hideAuth}},[n("div",{staticClass:"auth-box border"},[n("h3",{staticClass:"auth-box-title"},[t._v("\n      Auth\n    ")]),"token"===t.authMode?n("div",{staticClass:"auth-box-token input-area"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.token,expression:"token"}],attrs:{placeholder:"Github access token",type:"text"},domProps:{value:t.token},on:{input:function(e){e.target.composing||(t.token=e.target.value)}}}),n("i",{staticClass:"far fa-question-circle",on:{click:t.pageJump}})]):t._e(),"account"===t.authMode?n("div",{staticClass:"auth-box-account input-area"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.account,expression:"account"}],attrs:{placeholder:"Github account",type:"text"},domProps:{value:t.account},on:{input:function(e){e.target.composing||(t.account=e.target.value)}}}),n("br"),n("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{placeholder:"Github password",type:"password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]):t._e(),n("div",{staticClass:"auth-box-submit"},[n("span",{on:{click:t.changeAuthMode}},[t._v("Use Github "+t._s("token"===t.authMode?"account":"access token")+" to auth")]),n("button",{staticClass:"button",attrs:{disabled:!t.disableAuthBtn},on:{click:t.submitAuth}},[t._v("Submit")])])])]):t._e()},v=[],b=n("3d20"),g=n.n(b),w=n("2f62"),k={props:["showAuth"],data:function(){return{authMode:"token",token:"",account:"",password:""}},computed:{disableAuthBtn:function(){var t=!1;return t="token"===this.authMode?!!this.token.length:!!this.account.length&&!!this.password.length,t}},methods:Object(o["a"])({},Object(w["b"])(["getUserInfo"]),{hideAuth:function(t){t.target.classList.contains("mask")&&this.$emit("update:showAuth",!1)},pageJump:function(){window.open("https://github.com/settings/tokens/new")},changeAuthMode:function(){var t=this.authMode;this.authMode="token"===t?"account":"token"},submitAuth:function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(){var e,n,r,a;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e="",e="token"===this.authMode?"Bearer ".concat(this.token):"Basic ".concat(btoa(this.account+":"+this.password)),t.next=4,this.getUserInfo(e);case 4:n=t.sent,r=n.status,a=n.data,401===r?(g.a.fire({title:r,text:a.message,type:"error"}),this.token="",this.account="",this.password=""):(this.$emit("update:showAuth",!1),localStorage.setItem("github_token",e),location.reload());case 8:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()})},_=k,C=(n("f79f"),Object(h["a"])(_,p,v,!1,null,"4eaeb87d",null)),y=C.exports,A={data:function(){return{showAuth:!1}},computed:Object(o["a"])({},Object(w["e"])(["userInfo"])),components:{Header:f,Auth:y},created:function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(){var e,n,r,a,i=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.getArticles();case 2:e=t.sent,n=e.status,r=e.message,n&&g.a.fire({type:"error",title:n,text:r,confirmButtonText:"To auth"}).then(function(t){t.value&&(i.showAuth=!0)}),a=localStorage.getItem("github_token"),a&&this.getUserInfo(a);case 8:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),methods:Object(o["a"])({},Object(w["b"])(["getArticles","getUserInfo"]),Object(w["d"])(["GET_USER_INFO","UPDATE_KEYWORD"]),{signout:function(){localStorage.removeItem("github_token"),this["GET_USER_INFO"]({})},search:function(t){this.$router.push("/"),this["UPDATE_KEYWORD"](t)}})},x=A,O=(n("7c55"),Object(h["a"])(x,a,i,!1,null,null,null)),R=O.exports,L=(n("7f7f"),n("8c4f")),j=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"view main",staticStyle:{display:"flex"}},[n("section",{staticClass:"main-others"},[n("Timeline",{attrs:{timeline:t.timeline},on:{toArticle:t.toArticle}}),n("Labels",{ref:"labels",attrs:{labels:t.labels},on:{selectLabel:t.selectLabel}}),n("About")],1),n("div",{staticClass:"main-articles"},[t.articlesList.length?t._e():n("Skeleton",{attrs:{type:"preview"}}),n("div",{directives:[{name:"show",rawName:"v-show",value:t.keyword,expression:"keyword"}],staticClass:"main-articles-keyword border"},[n("i",{staticClass:"far fa-times-circle cancel",on:{click:function(e){return t.UPDATE_KEYWORD("")}}}),n("div",{staticClass:"keyword"},[t._v("\n        Keyword:\n        "),n("i",[t._v('"'+t._s(t.keyword)+'"')]),t._v("\n        .\n      ")]),n("div",{staticClass:"result"},[n("span",[t._v(t._s(t.articles.length))]),t._v("\n        results was found.\n      ")])]),t._l(t.articlesList,function(e,r){return n("Preview",{key:r,attrs:{article:e,userInfo:t.userInfo},on:{toArticle:t.toArticle,like:t.likeArticle,praise:t.praiseArticle,toComment:t.toComment}})}),n("About",{staticClass:"mobile-only",staticStyle:{padding:"0 15px 15px 15px"}})],2)])},E=[],I=(n("6762"),n("2fdb"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"preview border"},[n("div",{staticClass:"preview-cover",on:{click:t.toArticle}},[n("img",{staticClass:"preview-cover-img",attrs:{src:t.article.cover,alt:""}}),n("h3",{staticClass:"preview-cover-title"},[t._v(t._s(t.article.title))])]),n("div",{staticClass:"preview-info"},[n("span",{staticClass:"preview-info-date"},[n("i",{staticClass:"far fa-clock"}),t._v("\n      "+t._s(t.article.date)+"\n    ")]),t._l(t.article.labels,function(e){return n("span",{key:e.name,staticClass:"preview-info-label",style:"background: #"+e.color},[t._v("\n      "+t._s(e.name)+"\n    ")])})],2),n("div",{staticClass:"preview-content",domProps:{innerHTML:t._s(t.articlePreview)}}),n("div",{staticClass:"preview-tools"},[n("i",{staticClass:"far fa-thumbs-up",class:{"fas praised":t.hasPraised.length},on:{click:function(e){return t.$emit("praise",{number:t.article.number,hasPraised:t.hasPraised})}}}),t._v("\n    "+t._s(t.article.reactions.praise.length)+"\n    "),n("i",{staticClass:"far fa-heart",class:{"fas liked":t.hasLiked.length},on:{click:function(e){return t.$emit("like",{number:t.article.number,hasLiked:t.hasLiked})}}}),t._v("\n    "+t._s(t.article.reactions.like.length)+"\n    "),n("i",{staticClass:"far fa-comment-dots",on:{click:function(e){return t.$emit("toComment",t.article.number)}}}),t._v("\n    "+t._s(t.article.commentsAmount)+"\n  ")])])}),S=[],T=(n("4917"),n("a481"),n("0e54")),P=n.n(T),U=n("1487"),$=n.n(U);P.a.setOptions({highlight:function(t,e){var n=t;return e&&(n=$.a.highlight(e,t).value),n},sanitize:!0});var N={props:["article","userInfo"],computed:{articlePreview:function(){var t=this.article.content.replace(/!\[.+?\]\(.+?\)/,"");return P()(t).match(/<p>(.*?)<\/p>/)[1]},hasLiked:function(){var t=this;return this.article.reactions.like.filter(function(e){var n=e.user;return n.login===t.userInfo.login})},hasPraised:function(){var t=this;return this.article.reactions.praise.filter(function(e){var n=e.user;return n.login===t.userInfo.login})}},methods:{toArticle:function(){this.$emit("toArticle",this.article.number)}}},M=N,D=(n("1c39"),Object(h["a"])(M,I,S,!1,null,"73456817",null)),q=D.exports,G=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"timeline border"},[n("h3",{staticClass:"timeline-title"},[t._v("Timeline")]),t._l(Object.keys(t.timeline),function(e,r){return n("div",{key:r,staticClass:"timeline-item"},[n("div",{staticClass:"timeline-item-date",on:{click:function(n){return t.showDetail(e)}}},[t._v(t._s(e)+" ("+t._s(t.timeline[e].length)+")")]),n("ul",{directives:[{name:"show",rawName:"v-show",value:t.onShowTime===e,expression:"onShowTime === time"}],staticClass:"timeline-item-day"},t._l(t.timeline[e],function(e,r){return n("li",{key:r,staticClass:"article",on:{click:function(n){return t.$emit("toArticle",e.number)}}},[t._v(t._s(e.title))])}),0)])})],2)},B=[],F=(n("ac6a"),n("456d"),{props:["timeline"],data:function(){return{onShowTime:""}},watch:{timeline:function(t){this.onShowTime=Object.keys(t)[0]}},methods:{showDetail:function(t){this.onShowTime===t?this.onShowTime="":this.onShowTime=t}}}),K=F,Q=(n("80ae"),Object(h["a"])(K,G,B,!1,null,"758d51e3",null)),z=Q.exports,H=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"labels border"},[n("h3",{staticClass:"labels-title"},[t._v("\n    Labels\n    "),t.selectedLabel?n("span",{staticClass:"label",style:"background: #"+t.selectedLabel.color+";",on:{click:function(e){return t.selectLabel(!1)}}},[t._v(t._s(t.selectedLabel.name))]):t._e()]),n("div",{staticClass:"labels-list"},t._l(Object.keys(t.labels),function(e){return n("span",{directives:[{name:"show",rawName:"v-show",value:!t.selectedLabel||t.selectedLabel.name!==e,expression:"!selectedLabel || selectedLabel.name !== label"}],key:e,staticClass:"label",style:"\n        background: #"+t.labels[e].color+";\n      ",on:{click:function(n){return t.selectLabel(t.labels[e])}}},[t._v(t._s(e))])}),0)])},J=[],W={props:["labels"],data:function(){return{selectedLabel:null}},watch:{selectedLabel:function(t){this.$emit("selectLabel",t?t.name:"")}},methods:{selectLabel:function(t){this.selectedLabel=t||null},reset:function(){this.selectedLabel=null}}},Y=W,V=(n("d6a8"),Object(h["a"])(Y,H,J,!1,null,"5657cadf",null)),X=V.exports,Z=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},tt=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"about"},[n("section",{staticClass:"about-contact"},[n("a",{attrs:{href:"https://github.com/jrainlau"}},[t._v("Github")]),t._v("\n    ·\n    "),n("a",{attrs:{href:"mailto:jrainlau@gmail.com"}},[t._v("Email")]),t._v("\n    ·\n    "),n("a",{attrs:{href:"https://www.instagram.com/jrainlau/"}},[t._v("Instagram")]),t._v("\n    ·\n    懶得備案\n  ")]),n("section",{staticClass:"about-right"},[t._v("\n    © 2019 JRAIN LAU\n  ")])])}],et=(n("9361"),{}),nt=Object(h["a"])(et,Z,tt,!1,null,"8c8fa5b4",null),rt=nt.exports,at=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"skeleton"},["article"===t.type?n("div",{staticClass:"skeleton-article"},[n("h1"),t._l(2,function(t){return n("span",{key:"span"+t})}),t._l(20,function(t){return n("p",{key:"p"+t})})],2):t._e(),"preview"===t.type?n("div",{staticClass:"skeleton-preview"},t._l(4,function(e){return n("section",{key:"preview"+e,staticClass:"border"},[n("div"),n("span"),t._l(2,function(t){return n("p",{key:"p"+t})})],2)}),0):t._e()])},it=[],st={props:["type"]},ot=st,ct=(n("8c0c"),Object(h["a"])(ot,at,it,!1,null,"aed8f44e",null)),ut=ct.exports,lt={components:{Preview:q,Timeline:z,Labels:X,About:rt,Skeleton:ut},data:function(){return{labelFilterKeyword:""}},computed:Object(o["a"])({},Object(w["e"])(["keyword","userInfo"]),Object(w["c"])(["timeline","labels","articles"]),{articlesList:function(){var t=this,e=this.articles;return this.labelFilterKeyword&&(e=this.articles.filter(function(e){return e.labels.map(function(t){var e=t.name;return e}).includes(t.labelFilterKeyword)})),e}}),watch:{keyword:function(t){t&&this.$refs["labels"].reset()}},methods:Object(o["a"])({},Object(w["d"])(["UPDATE_KEYWORD"]),Object(w["b"])(["deleteAnReaction","createAnReaction"]),{toArticle:function(t){this.$router.push("/article?number="+t)},toComment:function(t){this.$router.push("/article?number="+t+"&comment=true")},selectLabel:function(t){this.labelFilterKeyword=t},checkLogin:function(){var t=!1;return this.userInfo.login?t=!0:document.querySelector("#header-menu-btn").click(),t},likeArticle:function(t){var e=t.number,n=t.hasLiked;if(!this.checkLogin())return!1;if(n.length){var r=n[0].id;this.deleteAnReaction({number:e,id:r})}else this.createAnReaction({number:e,content:"heart"})},praiseArticle:function(t){var e=t.number,n=t.hasPraised;if(!this.checkLogin())return!1;if(n.length){var r=n[0].id;this.deleteAnReaction({number:e,id:r})}else this.createAnReaction({number:e,content:"+1"})}})},mt=lt,ht=(n("5d41"),Object(h["a"])(mt,j,E,!1,null,"271c3ed8",null)),dt=ht.exports,ft=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"view"},[t.article?t._e():n("Skeleton",{attrs:{type:"article"}}),t.article?n("div",{staticClass:"article"},[n("section",{staticClass:"article-title"},[n("h1",[t._v(t._s(t.article.title))]),n("div",[n("i",{staticClass:"fas fa-feather-alt"}),n("span",[t._v(t._s(t.article.date))]),t._l(t.article.labels,function(e,r){return n("span",{key:r,staticClass:"label",style:"background: #"+e.color},[t._v(t._s(e.name))])})],2)]),n("section",{staticClass:"article-content markdown",domProps:{innerHTML:t._s(t.$options.filters.markify(t.article.content))}}),n("section",{staticClass:"article-comments"},[n("div",{staticClass:"article-comments-reactions border"},[n("i",{staticClass:"far fa-thumbs-up",class:{"fas praised":t.hasPraised.length},on:{click:t.praiseArticle}}),t._v("\n        "+t._s(t.article.reactions.praise.length)+"\n        "),n("i",{staticClass:"far fa-heart",class:{"fas liked":t.hasLiked.length},on:{click:t.likeArticle}}),t._v("\n        "+t._s(t.article.reactions.like.length)+"\n        "),n("div",{staticClass:"tools"},[n("i",{staticClass:"fas fa-qrcode qrcode",on:{click:t.showQR}}),n("i",{staticClass:"far fa-copy",on:{click:t.copyUrl}}),n("div",{directives:[{name:"show",rawName:"v-show",value:t.QR,expression:"QR"}],staticClass:"tools-qr border"},[n("img",{attrs:{src:t.QR,alt:""}})])])]),n("Comments",{attrs:{article:t.article,userInfo:t.userInfo}}),n("About")],1)]):t._e(),n("input",{ref:"pageUrl",staticStyle:{position:"absolute",opacity:"0",top:"0","z-index":"-9999"},attrs:{type:"text",id:"page-url"},domProps:{value:t.pageUrl}})],1)},pt=[],vt=(n("c5f6"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"comments"},[t.isLogin?t._e():n("div",{staticClass:"comments-auth border"},[n("button",{on:{click:t.toLogin}},[t._v("Login with Github to comment")])]),t.isLogin?n("div",{staticClass:"comments-operation border"},[n("div",{staticClass:"comments-operation-user"},[n("div",{staticClass:"avatar"},[n("img",{attrs:{src:t.userInfo.avatar_url,alt:""}})]),n("div",{staticClass:"name"},[t._v(t._s(t.userInfo.login))])]),n("div",{staticClass:"comments-operation-textarea"},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.commentContent,expression:"commentContent"}],staticClass:"border",attrs:{rows:"5"},domProps:{value:t.commentContent},on:{input:function(e){e.target.composing||(t.commentContent=e.target.value)}}})]),n("div",{staticClass:"comments-operation-button"},[n("button",{attrs:{disabled:!t.commentContent.length},on:{click:t.submitComment}},[t._v("Comment")])])]):t._e(),t.article.comments&&t.article.comments.length?n("div",{staticClass:"comments-list border"},t._l(t.article.comments,function(e,r){return n("div",{key:r,staticClass:"comments-list-item"},[n("div",{staticClass:"user"},[n("a",{staticClass:"user-avatar",attrs:{href:e.user.html_url,target:"_blank"}},[n("img",{attrs:{src:e.user.avatar_url,alt:""}})]),n("div",{staticClass:"user-info"},[n("p",{staticClass:"user-info-name"},[t._v(t._s(e.user.login))]),n("p",{staticClass:"user-info-date"},[t._v(t._s(t._f("dateFormat")(e.created_at)))])])]),n("div",{staticClass:"content markdown",domProps:{innerHTML:t._s(t.$options.filters.markify(e.body))}})])}),0):t._e()])}),bt=[];P.a.setOptions({highlight:function(t,e){var n=t;return e&&(n=$.a.highlight(e,t).value),n},sanitize:!0});var gt={props:["article","userInfo"],filters:{dateFormat:function(t){var e=new Date(t),n=e.toLocaleDateString("zh").replace(/\//g,"-"),r=e.getHours(),a=e.getMinutes(),i=r<10?"0"+r:r,s=a<10?"0"+a:a;return"".concat(n," ").concat(i,":").concat(s)},markify:function(t){return P()(t)}},data:function(){return{isLogin:!1,commentContent:"",showCommentList:!1}},mounted:function(){this.checkIsLogin()},watch:{userInfo:{deep:!0,handler:function(t){this.checkIsLogin()}}},methods:Object(o["a"])({},Object(w["b"])(["getUserInfo","getComments","createComment","deleteComment"]),{checkIsLogin:function(){this.isLogin=!!this.userInfo.login},toLogin:function(){document.querySelector("#header-menu-btn").click()},submitComment:function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(){var e,n,r,a;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e=this.commentContent,this.commentContent="",t.next=4,this.createComment({commentsUrl:this.article.commentsUrl,comment:e});case 4:if(n=t.sent,r=n.status,!(r<400)){t.next=14;break}return t.next=9,this.getComments(this.article.commentsUrl);case 9:a=document.querySelector(".view"),a.scrollTop=a.scrollHeight,g.a.fire({toast:!0,title:"Commet successed!",type:"success",showConfirmButton:!1,timer:2e3}),t.next=15;break;case 14:g.a.fire({toast:!0,title:"Commet failed!",type:"error",showConfirmButton:!1,timer:2e3});case 15:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()})},wt=gt,kt=(n("d024"),Object(h["a"])(wt,vt,bt,!1,null,"d21bacea",null)),_t=kt.exports,Ct=new P.a.Renderer;Ct.link=function(t,e,n){return'<a target="_blank" href="'.concat(t,'" title="').concat(e,'">').concat(n,"</a>")},Ct.image=function(t,e,n){return'<a target="_blank" href="'.concat(t,'" title="').concat(e,'"><image src="').concat(t,'" /></a>')},P.a.setOptions({highlight:function(t,e){var n=t;return e&&(n=$.a.highlight(e,t).value),n},sanitize:!0});var yt={components:{Comments:_t,About:rt,Skeleton:ut},filters:{markify:function(t){return P()(t,{renderer:Ct})}},data:function(){return{QR:""}},computed:Object(o["a"])({},Object(w["e"])(["articles","userInfo"]),{article:function(){var t=Number(this.$route.query.number);return this.articles.filter(function(e){var n=e.number;return n===t})[0]},hasLiked:function(){var t=this;return this.article.reactions.like.filter(function(e){var n=e.user;return n.login===t.userInfo.login})},hasPraised:function(){var t=this;return this.article.reactions.praise.filter(function(e){var n=e.user;return n.login===t.userInfo.login})},pageUrl:function(){return location.href}}),mounted:function(){this.getArticleComments()},beforeRouteEnter:function(t,e,n){n(function(){if(t.query.comment){var e=document.querySelector(".view");e.scrollTop=e.scrollHeight}})},watch:{article:function(t){this.getArticleComments()}},methods:Object(o["a"])({},Object(w["b"])(["getComments","deleteAnReaction","createAnReaction"]),{getArticleComments:function(){if(this.article){var t=this.article.commentsUrl;this.getComments(t)}},checkLogin:function(){var t=!1;return this.userInfo.login?t=!0:document.querySelector("#header-menu-btn").click(),t},likeArticle:function(){if(this.checkLogin())if(this.hasLiked.length){var t=this.hasLiked[0].id;this.deleteAnReaction({number:this.article.number,id:t})}else this.createAnReaction({number:this.article.number,content:"heart"})},praiseArticle:function(){if(this.checkLogin())if(this.hasPraised.length){var t=this.hasPraised[0].id;this.deleteAnReaction({number:this.article.number,id:t})}else this.createAnReaction({number:this.article.number,content:"+1"})},showQR:function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(){var e,r,a,i=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,n.e("chunk-d72b8de6").then(n.t.bind(null,"d055",7));case 2:return e=t.sent,t.next=5,e.toDataURL(this.pageUrl);case 5:r=t.sent,this.QR?this.QR="":this.QR=r,a=function t(e){e.target.classList.contains("qrcode")||(i.QR="",document.body.removeEventListener("click",t))},document.body.addEventListener("click",a);case 9:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),copyUrl:function(){this.$refs["pageUrl"].select(),document.execCommand("copy"),g.a.fire({toast:!0,title:"Article url has been copied to your clipboard",type:"success",showConfirmButton:!1,timer:2e3})}})},At=yt,xt=(n("ea22"),Object(h["a"])(At,ft,pt,!1,null,"ed36340e",null)),Ot=xt.exports;r["a"].use(L["a"]);var Rt=new L["a"]({routes:[{path:"/",name:"",component:dt},{path:"/article",name:"Article",component:Ot}]});Rt.afterEach(function(t,e){var n=document.querySelector("main");document.title=t.name?"JRAIN:BLOG | ".concat(t.name):"JRAIN:BLOG",n&&n.scroll(0,0)});var Lt=Rt,jt=(n("5df3"),n("3b2b"),n("bc3a")),Et=n.n(jt),It="https://api.github.com",St="".concat(It,"/repos/jrainlau/jrainlau.github.io"),Tt=function(t){var e=t.url,n=t.method,r=void 0===n?"get":n,a=t.data,i=t.headers,s=void 0===i?{}:i;return Et()({url:e,method:r,data:a,headers:Object(o["a"])({Authorization:localStorage.getItem("github_token")},s)}).then(function(t){var e=t.status,n=t.data;return{status:e,data:n}}).catch(function(t){var e=t.response;return{status:e.status,data:e.data}})};r["a"].use(w["a"]);var Pt=new w["a"].Store({state:{articles:[],userInfo:{},keyword:""},getters:{timeline:function(t){var e=t.articles,n={};return e.forEach(function(t){var e=t.date.replace(/-\d{2}$/,"");n[e]||(n[e]=[]),n[e].push(t)}),n},labels:function(t){var e=t.articles,n={};return e.forEach(function(t){t.labels.forEach(function(t){n[t.name]||(n[t.name]={}),n[t.name]={color:t.color,name:t.name}})}),n},articles:function(t){var e=t.articles,n=t.keyword,r=e;if(n){var a=new RegExp(n,"i");r=e.filter(function(t){return a.test(t.title)})}return r}},mutations:{GET_ARTICLES:function(t,e){t.articles=e},GET_USER_INFO:function(t,e){r["a"].set(t,"userInfo",e)},GET_COMMENTS:function(t,e){var n=e.commentsUrl,a=e.comments;t.articles.forEach(function(t){t.commentsUrl===n&&r["a"].set(t,"comments",a)})},UPDATE_KEYWORD:function(t,e){t.keyword=e},UPDATE_REACTIONS:function(t,e){var n=e.reactions,a=e.number;t.articles.forEach(function(t){t.number===a&&r["a"].set(t,"reactions",{like:n.filter(function(t){return"heart"===t.content}),praise:n.filter(function(t){return"+1"===t.content})})})}},actions:{getArticles:function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(e){var n,r,a,i,o,c;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,r=e.dispatch,t.next=3,Tt({url:"".concat(St,"/issues?filter=created")}).catch(function(t){return t});case 3:if(a=t.sent,i=a.status,o=a.data,!(i<400)){t.next=14;break}return t.next=9,Promise.all(o.map(function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(e){var n,a,i,s;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=e.body.match(/!\[.+?\]\((.+?[^)]*)\)/),t.next=3,r("getReactions",{number:e.number,autoCommit:!1});case 3:return a=t.sent,i=a.data,s={title:e.title,content:e.body,cover:n?n[1]:null,number:e.number,date:new Date(e.created_at).toLocaleDateString("zh").replace(/\//g,"-"),labels:e.labels,commentsUrl:e.comments_url,commentsAmount:e.comments,reactions:{like:i.filter(function(t){return"heart"===t.content}),praise:i.filter(function(t){return"+1"===t.content})}},t.abrupt("return",Promise.resolve(s));case 7:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()));case 9:return c=t.sent,n("GET_ARTICLES",c),t.abrupt("return",!0);case 14:return t.abrupt("return",{status:i,message:o.message});case 15:case"end":return t.stop()}},t)}));function e(e){return t.apply(this,arguments)}return e}(),getUserInfo:function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(e,n){var r,a,i,s;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return r=e.commit,t.next=3,Tt({url:"".concat(It,"/user"),headers:{Authorization:n}});case 3:return a=t.sent,i=a.status,s=a.data,i<400&&r("GET_USER_INFO",s),t.abrupt("return",{status:i,data:s});case 8:case"end":return t.stop()}},t)}));function e(e,n){return t.apply(this,arguments)}return e}(),getComments:function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(e,n){var r,a;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return r=e.commit,t.next=3,Tt({url:n});case 3:return a=t.sent,r("GET_COMMENTS",{commentsUrl:n,comments:a.data}),t.abrupt("return",a);case 6:case"end":return t.stop()}},t)}));function e(e,n){return t.apply(this,arguments)}return e}(),createComment:function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(e,n){var r,a,i;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e.commit,r=n.commentsUrl,a=n.comment,t.next=4,Tt({url:r,method:"post",data:{body:a}});case 4:return i=t.sent,t.abrupt("return",i);case 6:case"end":return t.stop()}},t)}));function e(e,n){return t.apply(this,arguments)}return e}(),getReactions:function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(e,n){var r,a,i,s;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return r=e.commit,a=n.number,i=n.autoCommit,t.next=4,Tt({url:"".concat(St,"/issues/").concat(a,"/reactions"),headers:{Accept:"application/vnd.github.squirrel-girl-preview+json"}}).catch(function(t){return t});case 4:return s=t.sent,i&&r("UPDATE_REACTIONS",{reactions:s.data,number:a}),t.abrupt("return",s);case 7:case"end":return t.stop()}},t)}));function e(e,n){return t.apply(this,arguments)}return e}(),createAnReaction:function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(e,n){var r,a,i;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return r=e.dispatch,a=n.number,i=n.content,t.next=4,Tt({method:"post",url:"".concat(St,"/issues/").concat(a,"/reactions"),data:{content:i},headers:{Accept:"application/vnd.github.squirrel-girl-preview+json"}}).catch(function(t){return t});case 4:r("getReactions",{number:a,autoCommit:!0});case 5:case"end":return t.stop()}},t)}));function e(e,n){return t.apply(this,arguments)}return e}(),deleteAnReaction:function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(e,n){var r,a,i;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return r=e.dispatch,a=n.number,i=n.id,t.next=4,Tt({method:"delete",url:"".concat(It,"/reactions/").concat(i),headers:{Accept:"application/vnd.github.squirrel-girl-preview+json"}}).catch(function(t){return t});case 4:r("getReactions",{number:a,autoCommit:!0});case 5:case"end":return t.stop()}},t)}));function e(e,n){return t.apply(this,arguments)}return e}()}});n("becf"),n("2c43"),n("cb74"),n("6423");r["a"].config.productionTip=!1,new r["a"]({router:Lt,store:Pt,render:function(t){return t(R)}}).$mount("#app")},"5aac":function(t,e,n){},"5c48":function(t,e,n){},"5d41":function(t,e,n){"use strict";var r=n("0abc"),a=n.n(r);a.a},6423:function(t,e,n){},7673:function(t,e,n){},"7c55":function(t,e,n){"use strict";var r=n("5c48"),a=n.n(r);a.a},"80ae":function(t,e,n){"use strict";var r=n("d479"),a=n.n(r);a.a},"8c0c":function(t,e,n){"use strict";var r=n("5aac"),a=n.n(r);a.a},9361:function(t,e,n){"use strict";var r=n("d75f"),a=n.n(r);a.a},aa76:function(t,e,n){},ba02:function(t,e,n){},cb74:function(t,e,n){},d024:function(t,e,n){"use strict";var r=n("aa76"),a=n.n(r);a.a},d479:function(t,e,n){},d6a8:function(t,e,n){"use strict";var r=n("ba02"),a=n.n(r);a.a},d75f:function(t,e,n){},d9ce:function(t,e,n){t.exports=n.p+"img/logo-h.85ae145a.png"},e68b:function(t,e,n){},ea22:function(t,e,n){"use strict";var r=n("37cc"),a=n.n(r);a.a},f79f:function(t,e,n){"use strict";var r=n("56d7"),a=n.n(r);a.a}});
//# sourceMappingURL=app.b5897276.js.map