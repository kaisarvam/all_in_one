(this.webpackJsonpall_in_one=this.webpackJsonpall_in_one||[]).push([[0],{45:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),s=n(20),i=n.n(s),r=n(2),l=n(0),o=function(e){var t=e.items,n=Object(a.useState)(null),s=Object(r.a)(n,2),i=s[0],o=s[1],u=t.map((function(e,t){var n=t===i?"active":"";return Object(l.jsxs)(c.a.Fragment,{children:[Object(l.jsxs)("div",{className:"title ".concat(n),onClick:function(){!function(e){o(e),console.log("Title clicked",e)}(t)},children:[Object(l.jsx)("i",{className:"dropdown icon",children:" "}),e.title]}),Object(l.jsx)("div",{className:"content ".concat(n),children:Object(l.jsxs)("p",{children:[" ",e.content]})})]},e.title)}));return Object(l.jsxs)("div",{className:"ui styled accordion",children:[u,Object(l.jsx)("h1",{children:i})]})},u=n(4),d=n.n(u),j=n(9),h=n(10),b=n.n(h),m=function(){var e=Object(a.useState)("programming"),t=Object(r.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)([]),i=Object(r.a)(s,2),o=i[0],u=i[1];Object(a.useEffect)((function(){var e=function(){var e=Object(j.a)(d.a.mark((function e(){var t,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get("http://en.wikipedia.org/w/api.php",{params:{action:"query",list:"search",origin:"*",format:"json",srsearch:n}});case 2:t=e.sent,a=t.data,u(a.query.search);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();if(!n||o.length){var t=setTimeout((function(){n&&e()}),1e3);return function(){clearTimeout(t)}}e()}),[n]);var h=o.map((function(e){return Object(l.jsxs)("div",{className:"item",children:[Object(l.jsx)("div",{className:"right floated content",children:Object(l.jsx)("a",{className:"ui button",href:"https://en.wikipedia.org?curid=".concat(e.pageid),children:"Go"})}),Object(l.jsxs)("div",{className:"content",children:[Object(l.jsx)("div",{className:"header",children:e.title}),Object(l.jsx)("span",{dangerouslySetInnerHTML:{__html:e.snippet}})]})]},e.pageid)}));return Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{className:"ui form",children:Object(l.jsxs)("div",{className:"field",children:[Object(l.jsx)("label",{children:"Enter Search Term"}),Object(l.jsx)("input",{value:n,onChange:function(e){c(e.target.value)},className:"input"})]})}),Object(l.jsx)("div",{className:"ui called list",children:h})]})},v=function(e){var t=e.options,n=e.selected,c=e.onSelectedChange,s=e.label,i=Object(a.useState)(!1),o=Object(r.a)(i,2),u=o[0],d=o[1],j=Object(a.useRef)();Object(a.useEffect)((function(){var e=function(e){if(null!==j.current){if(j.current.contains(e.target))return;d(!1)}};return document.body.addEventListener("click",e),function(){document.body.removeEventListener("click",e)}}),[]);var h=t.map((function(e){return e.value===n.value?null:Object(l.jsx)("div",{className:"item",onClick:function(){c(e),console.log("item clicked")},children:Object(l.jsx)("div",{style:{color:"".concat(e.value)},children:e.label})},e.value)}));return Object(l.jsx)("div",{ref:j,className:"ui form",children:Object(l.jsxs)("div",{className:"field",children:[Object(l.jsxs)("label",{className:"label",children:[" ",s]}),Object(l.jsxs)("div",{onClick:function(e){d(!u),console.log("Dropdown clicked")},className:"ui selection dropdown ".concat(u?"visible active":""),children:[Object(l.jsx)("i",{className:"dropdown icon"}),Object(l.jsxs)("div",{className:"text",style:{color:"".concat(n.value)},children:[" Now selected : ",n.label," "]}),Object(l.jsx)("div",{className:"menu ".concat(u?"visible transition":""),children:h})]})]})})},p=function(e){var t=e.language,n=e.text,c=Object(a.useState)(""),s=Object(r.a)(c,2),i=s[0],o=s[1],u=Object(a.useState)(n),h=Object(r.a)(u,2),m=h[0],v=h[1];return Object(a.useEffect)((function(){var e=setTimeout((function(){v(n)}),500);return function(){clearTimeout(e)}}),[n]),Object(a.useEffect)((function(){(function(){var e=Object(j.a)(d.a.mark((function e(){var n,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.post("https://translation.googleapis.com/language/translate/v2",{},{params:{q:m,target:t.value,key:"AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM"}});case 2:n=e.sent,a=n.data,o(a.data.translations[0].translatedText);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()(),console.log("New language or text")}),[t,m]),Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{className:"ui header",children:" "}),Object(l.jsxs)("p",{children:[" ",i," "]})]})},O=[{label:"African",value:"af"},{label:"Arabic",value:"ar"},{label:"Hindi",value:"hi"},{label:"English",value:"en"},{label:"Bangla",value:"bn"}],f=function(){var e=Object(a.useState)(O[0]),t=Object(r.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)(""),i=Object(r.a)(s,2),o=i[0],u=i[1];return Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{className:"ui form",children:Object(l.jsxs)("div",{className:"field",children:[Object(l.jsx)("label",{children:"Enter Text"}),Object(l.jsx)("input",{value:o,onChange:function(e){u(e.target.value)}})]})}),Object(l.jsx)(v,{label:"Select a Language",selected:n,onSelectedChange:c,options:O}),Object(l.jsx)("hr",{}),Object(l.jsx)("h3",{className:"ui header",children:"Output"}),Object(l.jsx)(p,{text:o,language:n})]})},x=function(e){var t=e.path,n=e.children,c=Object(a.useState)(window.location.pathname),s=Object(r.a)(c,2),i=s[0],l=s[1];return Object(a.useEffect)((function(){var e=function(){console.log("location changed"),l(window.location.pathname)};return window.addEventListener("popstate",e),function(){window.removeEventListener("popstate",e)}}),[]),i===t?n:null},g=function(e){var t=e.className,n=e.href,a=e.children;return Object(l.jsx)("a",{onClick:function(e){if(!e.metaKey&&!e.ctrlKey){e.preventDefault(),window.history.pushState({},"",n);var t=new PopStateEvent("popstate");window.dispatchEvent(t)}},className:t,href:n,children:a})},N=function(){return Object(l.jsxs)("div",{className:"ui secondary pointing menu",children:[Object(l.jsx)(g,{href:"/",className:"item",children:"Accordion"}),Object(l.jsx)(g,{href:"/list",className:"item",children:"Search"}),Object(l.jsx)(g,{href:"/dropdown",className:"item",children:"Dropdown"}),Object(l.jsx)(g,{href:"/translate",className:"item",children:"Translate"}),Object(l.jsx)(g,{href:"/imagesearch",className:"item",children:"Image Search"}),Object(l.jsx)(g,{href:"/Youtube",className:"item",children:"Video Search"})]})},S=n(5),w=n(6),y=n(8),k=n(7),C=b.a.create({baseURL:"https://api.unsplash.com",headers:{Authorization:"Client-ID p2X1zZEsWKBVUMUZ7d2xQtRo6AIaSOizxmOGc81C5CQ"}}),T=function(e){Object(y.a)(n,e);var t=Object(k.a)(n);function n(){var e;Object(S.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={term:""},e.onFromSubmit=function(t){t.preventDefault(),e.props.onSubmitForm(e.state.term)},e}return Object(w.a)(n,[{key:"render",value:function(){var e=this;return Object(l.jsx)("div",{className:"ui segment",children:Object(l.jsx)("form",{onSubmit:this.onFromSubmit,className:"ui form",children:Object(l.jsxs)("div",{className:"field",children:[Object(l.jsx)("label",{children:"image search"}),Object(l.jsx)("input",{type:"text",value:this.state.term,onChange:function(t){e.setState({term:t.target.value})}})]})})})}}]),n}(c.a.Component),E=(n(45),function(e){Object(y.a)(n,e);var t=Object(k.a)(n);function n(e){var a;return Object(S.a)(this,n),(a=t.call(this,e)).setSpans=function(){var e=a.imageRef.current.clientHeight,t=Math.ceil(e/10);a.setState({spans:t})},a.state={spans:0},a.imageRef=c.a.createRef(),a}return Object(w.a)(n,[{key:"componentDidMount",value:function(){this.imageRef.current.addEventListener("load",this.setSpans)}},{key:"render",value:function(){var e=this.props.image,t=e.description,n=e.urls;return Object(l.jsx)("div",{style:{gridRowEnd:"span ".concat(this.state.spans)},children:Object(l.jsx)("img",{ref:this.imageRef,alt:t,src:n.regular})})}}]),n}(c.a.Component)),R=function(e){var t=e.images.map((function(e){return Object(l.jsx)(E,{image:e},e.id)}));return Object(l.jsx)("div",{className:"image-list",children:t})},V=function(e){Object(y.a)(n,e);var t=Object(k.a)(n);function n(){var e;Object(S.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={images:[]},e.onSearchSubmit=function(){var t=Object(j.a)(d.a.mark((function t(n){var a;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,C.get("/search/photos",{params:{query:n}});case 2:a=t.sent,e.setState({images:a.data.results});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(w.a)(n,[{key:"render",value:function(){return Object(l.jsxs)("div",{className:"ui container",style:{marginTop:"10px"},children:[Object(l.jsx)(T,{onSubmitForm:this.onSearchSubmit}),"Found: ",this.state.images.length," images",Object(l.jsx)(R,{images:this.state.images})]})}}]),n}(c.a.Component),F=function(e){Object(y.a)(n,e);var t=Object(k.a)(n);function n(){var e;Object(S.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={term:""},e.onInputChange=function(t){e.setState({term:t.target.value})},e.onFromSubmit=function(t){t.preventDefault(),e.props.onTermSubmit(e.state.term)},e}return Object(w.a)(n,[{key:"render",value:function(){return Object(l.jsx)("div",{className:"search-bar ui segment",children:Object(l.jsx)("form",{className:"ui form",onSubmit:this.onFromSubmit,children:Object(l.jsxs)("div",{className:"field",children:[Object(l.jsx)("label",{children:"Video search"}),Object(l.jsx)("input",{type:"text",placeholder:"please enter here",value:this.state.term,onChange:this.onInputChange})]})})})}}]),n}(c.a.Component),I=b.a.create({baseURL:"https://www.googleapis.com/youtube/v3",params:{part:"snippet",maxResults:5,key:"AIzaSyCsIkFTfE0tfiMOs6efG7Vvekr_YyeYQYE"}}),A=(n(46),function(e){return Object(l.jsxs)("div",{onClick:function(t){e.onVideoSelect(e.video)},className:"item video-item",children:[Object(l.jsx)("img",{alt:e.video.snippet.title,className:"ui image",src:e.video.snippet.thumbnails.medium.url}),Object(l.jsx)("div",{className:"content",children:Object(l.jsxs)("div",{className:"header",children:[" ",e.video.snippet.title," "]})})]})}),L=function(e){var t=e.videos.map((function(t){return Object(l.jsx)(A,{onVideoSelect:e.onVideoSelect,video:t},t.id.videoId)}));return Object(l.jsx)("div",{className:"ui relaxed devided list",children:t})},D=function(e){if(!e.video)return Object(l.jsx)("div",{children:" Loading...."});var t="https://www.youtube.com/embed/".concat(e.video.id.videoId);return Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{className:"ui embed",children:Object(l.jsx)("iframe",{title:"video player",src:t,allowfullscreen:"true"})}),Object(l.jsxs)("div",{className:"ui segment",children:[Object(l.jsx)("h4",{className:"ui header",children:e.video.snippet.title}),Object(l.jsxs)("p",{children:[" ",e.video.snippet.description]})]})]})},_=function(e){Object(y.a)(n,e);var t=Object(k.a)(n);function n(){var e;Object(S.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={videos:[],selectedVideo:null},e.onTermSubmit=function(){var t=Object(j.a)(d.a.mark((function t(n){var a;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,I.get("/search",{params:{q:n}});case 2:a=t.sent,console.log(a),e.setState({videos:a.data.items});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.onVideoSelect=function(t){e.setState({selectedVideo:t}),console.log("From the app",t)},e}return Object(w.a)(n,[{key:"componentDidMount",value:function(){this.onTermSubmit("Falcon amnd winter solider")}},{key:"render",value:function(){return Object(l.jsxs)("div",{className:"ui container",children:[Object(l.jsx)(F,{onTermSubmit:this.onTermSubmit}),"There are ",this.state.videos.length," videos matching your search result ..",Object(l.jsx)("div",{className:"ui grid",children:Object(l.jsxs)("div",{className:"ui row",children:[Object(l.jsx)("div",{className:"eleven wide column",children:Object(l.jsx)(D,{video:this.state.selectedVideo})}),Object(l.jsx)("div",{className:"five wide column",children:Object(l.jsx)(L,{onVideoSelect:this.onVideoSelect,videos:this.state.videos})})]})})]})}}]),n}(c.a.Component),M=[{title:"What is react",content:"React is a front end javascript framework"},{title:"Why use react?",content:"React is favourite js library among  web devs"},{title:"How do you use it ?",content:"You use react by using components"}],q=[{label:"The color Red ",value:"red"},{label:"The color Green",value:"green"},{label:"The color Blue",value:"Blue"}],H=function(){var e=Object(a.useState)(q[0]),t=Object(r.a)(e,2),n=t[0],c=t[1];return Object(l.jsxs)("div",{children:[Object(l.jsx)(N,{}),Object(l.jsx)(x,{path:"/",children:Object(l.jsx)(o,{items:M})}),Object(l.jsx)(x,{path:"/list",children:Object(l.jsx)(m,{})}),Object(l.jsx)(x,{path:"/dropdown",children:Object(l.jsx)(v,{label:"select a color",selected:n,onSelectedChange:c,options:q})}),Object(l.jsx)(x,{path:"/translate",children:Object(l.jsx)(f,{})}),Object(l.jsx)(x,{path:"/imagesearch",children:Object(l.jsx)(V,{})}),Object(l.jsx)(x,{path:"/Youtube",children:Object(l.jsx)(_,{})})]})};i.a.render(Object(l.jsx)(H,{}),document.querySelector("#root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.38a45393.chunk.js.map