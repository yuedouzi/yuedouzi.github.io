(this["webpackJsonptest-app"]=this["webpackJsonptest-app"]||[]).push([[0],{13:function(e,t,a){e.exports=a.p+"static/media/loading.112ac8e0.svg"},30:function(e,t,a){e.exports=a(58)},36:function(e,t,a){},58:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(25),l=a.n(r),s=(a(35),a(36),a(2)),o=a.n(s),u=a(4),m=a(1),i="https://www.oceanlee.cn:5001/api/blog/",b=function(e){var t=Object(n.useState)(),a=Object(m.a)(t,2),r=a[0],l=a[1],s=function(){var t=Object(u.a)(o.a.mark((function t(a){var n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://www.oceanlee.cn:5001/api/search?keyword="+a);case 2:return n=t.sent,t.next=5,n.json();case 5:n=t.sent,e.handleSetSearch(n);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return c.a.createElement(c.a.Fragment,null,c.a.createElement("form",{className:"form-group",onSubmit:function(e){s(r),e.preventDefault()}},c.a.createElement("label",{htmlFor:"search"}),c.a.createElement("input",{className:"form-control",name:"search",onChange:function(e){l(e.target.value)},placeholder:"search...",required:!0})))},p=function(e){return c.a.createElement("aside",{className:"col-md-4 blog-sidebar"},c.a.createElement("div",{className:"p-3 mb-3 bg-light rounded"},c.a.createElement("h4",{className:"font-italic"},"About"),c.a.createElement("p",{className:"mb-0"},"\u8fd9\u662f\u6211\u7684\u7b14\u8bb0\u672c ",c.a.createElement("em",null,"\u5174\u8da3\u662f\u5b66\u4e60\u8fdb\u6b65\u7684\u52a8\u529b"))),c.a.createElement("div",{className:"p-3"},c.a.createElement(b,{handleSetSearch:e.handleSetSearch})),c.a.createElement("div",{className:"p-3"},c.a.createElement("h4",{className:"font-italic"},"Tag"),c.a.createElement("ol",{className:"list-unstyled"})))},f=a(7),d=a(26),g=a.n(d),E=a(27),h=a.n(E),j=a(28),O=a.n(j),v=(a(49),a(50),a(51),a(52),a(53),function(e){var t=Object(n.useState)(!0),a=Object(m.a)(t,2),r=a[0],l=a[1],s=function(){var t=g()(e.source);return t=h()(t),c.a.createElement(c.a.Fragment,null,t)};return Object(n.useEffect)((function(){e.source&&l(!1)}),[e.source]),Object(n.useEffect)((function(){O.a.highlightAll()})),c.a.createElement(c.a.Fragment,null,r?"":c.a.createElement(s,null))}),x=a(13),k=a.n(x),N=function(e){var t=Object(n.useState)([{loading:!0}]),a=Object(m.a)(t,2),r=a[0],l=a[1],s=Object(n.useState)(1),b=Object(m.a)(s,2),d=b[0],g=b[1],E=Object(n.useState)(1),h=Object(m.a)(E,2),j=h[0],O=h[1],x=Object(n.useState)([]),N=Object(m.a)(x,2),w=N[0],y=N[1],S=Object(n.useState)(),F=Object(m.a)(S,2),C=F[0],D=F[1],P=Object(n.useState)(),I=Object(m.a)(P,2),T=I[0],_=I[1],A=Object(n.useCallback)(function(){var t=Object(u.a)(o.a.mark((function t(a){var n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!a){t.next=17;break}return t.prev=1,t.next=4,fetch(i+"last?page="+a);case 4:if(!(n=t.sent).ok){t.next=10;break}return t.next=8,n.json();case 8:0===(n=t.sent).count?e.history.push("/simple-blog/add"):l(n);case 10:t.next=15;break;case 12:t.prev=12,t.t0=t.catch(1),_("API error(".concat(t.t0.message,")"));case 15:t.next=18;break;case 17:A(1);case 18:case"end":return t.stop()}}),t,null,[[1,12]])})));return function(e){return t.apply(this,arguments)}}(),[e.history]),J=function(){var e=Object(u.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(i+"count");case 2:return t=e.sent,e.next=5,t.json();case 5:t=e.sent,O(Math.ceil(t.count/10));case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){1===d?A():A(d)}),[d,A]),Object(n.useEffect)((function(){J()}));var q=function(){return c.a.createElement(c.a.Fragment,null,0===C?c.a.createElement("h6",null,"Not Found"):"",w.map((function(e,t){return c.a.createElement("div",{className:"blog-post",key:t},c.a.createElement("h2",{className:"blog-post-title"},c.a.createElement(f.b,{to:"/simple-blog/"+e._id},e.subject)),c.a.createElement("p",{className:"blog-post-meta"},e?new Date(e.timestamp).toLocaleString():c.a.createElement("img",{src:k.a,alt:k.a})))})))},H=function(){return c.a.createElement(c.a.Fragment,null,r.map((function(e,t){return c.a.createElement("div",{className:"blog-post",key:t},c.a.createElement("h2",{className:"blog-post-title"},c.a.createElement(f.b,{to:"/simple-blog/"+e._id},e.subject)),c.a.createElement("p",{className:"blog-post-meta"},e.timestamp?new Date(e.timestamp).toLocaleString():c.a.createElement("img",{src:k.a,alt:k.a})),c.a.createElement(v,{source:e.data}))})))};return c.a.createElement(c.a.Fragment,null,c.a.createElement("main",{role:"main",className:"container"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-8 blog-main"},w?c.a.createElement(q,null):c.a.createElement(c.a.Fragment,null),c.a.createElement(c.a.Fragment,null,T?c.a.createElement("h6",{className:"text-danger"},T):c.a.createElement(c.a.Fragment,null,r.loading?c.a.createElement(c.a.Fragment,null):c.a.createElement(c.a.Fragment,null,c.a.createElement(H,null),c.a.createElement("div",{className:"blog-pagination"},c.a.createElement("button",{className:"btn btn-outline-primary",disabled:1===d?"disabled":"",onClick:function(){A(d-1),g(d-1)}},"Previous"),c.a.createElement("button",{className:"btn btn-outline-secondary",disabled:d===j?"disabled":"",onClick:function(){A(d+1),g(d+1)}},"Next")))))),c.a.createElement(p,{handleSetSearch:function(e){y(e),D(e.length),l({loading:!0})}}))))},w=a(3),y=Object(n.createContext)(),S=Object(n.createContext)(),F=function(e){var t=Object(n.useState)({last_token:"",username:""}),a=Object(m.a)(t,2),r=a[0],l=a[1];return c.a.createElement(y.Provider,{value:[r,l]},e.children)},C=function(e){var t=Object(n.useState)(!1),a=Object(m.a)(t,2),r=a[0],l=a[1];return c.a.createElement(S.Provider,{value:[r,l]},e.children)},D=a(60),P=Object(w.g)((function(e){var t=Object(n.useContext)(S),a=Object(m.a)(t,2),r=a[0],l=a[1],s=Object(D.a)("token"),i=Object(m.a)(s,2),b=i[0],p=i[1],d=Object(n.useState)(),g=Object(m.a)(d,2),E=g[0],h=g[1],j=Object(n.useCallback)(Object(u.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://www.oceanlee.cn:5001/api/check_token",{method:"POST",body:JSON.stringify(b),headers:new Headers({"Content-Type":"application/json"})});case 3:if(!(t=e.sent).ok){e.next=11;break}return e.next=7,t.json();case 7:t=e.sent,l(!0),e.next=13;break;case 11:l(!1),h("token has expired");case 13:e.next=18;break;case 15:e.prev=15,e.t0=e.catch(0),h("API error(".concat(e.t0.message,")"));case 18:case"end":return e.stop()}}),e,null,[[0,15]])}))),[b,l]);return Object(n.useEffect)((function(){void 0===b.token?l(!1):j()}),[b.token,j,l]),c.a.createElement("div",{className:"container"},c.a.createElement("header",{className:"blog-header py-3"},c.a.createElement("div",{className:"row flex-nowrap justify-content-between align-items-center"},c.a.createElement("div",{className:"col-4 text-left"},c.a.createElement("a",{href:"/simple-blog",className:"blog-header-logo text-dark"},"Simple notebook")),c.a.createElement("div",{className:"col-4 d-flex justify-content-end align-items-center"},r?c.a.createElement(c.a.Fragment,null,c.a.createElement(f.b,{className:"btn btn-sm text-primary",to:"/simple-blog/add"},"Add"),c.a.createElement("button",{className:"btn btn-sm btn-outline-secondary",onClick:function(){p("token"),l(!1),e.history.push("/simple-blog/login")}},"Logout")):c.a.createElement(c.a.Fragment,null,E?c.a.createElement("span",{className:"mr-4 text-danger"},E):"",c.a.createElement(f.b,{className:"btn btn-sm btn-outline-secondary",to:"/simple-blog/login"},"Login"))))),c.a.createElement("div",{className:"nav-scroller py-1 mb-2"},c.a.createElement("nav",{className:"nav d-flex justify-content-between"},c.a.createElement(f.b,{className:"p-2 text-muted",to:"/simple-blog"},"Home"),c.a.createElement(f.b,{className:"p-2 text-muted",to:"/simple-blog/page"}," Page"))))})),I=a(8),T=a(9),_=function(e){return c.a.createElement("main",{role:"main",className:"container"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col blog-main"},c.a.createElement("div",{className:"blog-post"},e.children))))},A=function(e){var t=Object(n.useContext)(y),a=Object(m.a)(t,2),r=(a[0],a[1]),l=Object(n.useContext)(S),s=Object(m.a)(l,2),i=s[0],b=s[1],p=Object(D.a)("token"),f=Object(m.a)(p,2),d=(f[0],f[1]),g=Object(n.useState)({username:"",password:""}),E=Object(m.a)(g,2),h=E[0],j=E[1],O=Object(n.useState)(),v=Object(m.a)(O,2),x=v[0],k=v[1];Object(n.useEffect)((function(){i&&e.history.push("/simple-blog")}),[i,e.history]);var N=function(e){j(Object(T.a)({},h,Object(I.a)({},e.target.name,e.target.value)))},w=function(){var t=Object(u.a)(o.a.mark((function t(){var a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://www.oceanlee.cn:5001/api/user",{method:"POST",body:JSON.stringify(h),headers:new Headers({"Content-Type":"application/json"})});case 3:if(!(a=t.sent).ok){t.next=15;break}return t.next=7,a.json();case 7:a=t.sent,k(a.info),r({token:a.token,username:a.username}),d("token",a.token,{path:"/"}),b(!0),i&&e.history.goBack(),t.next=20;break;case 15:return t.next=17,a.json();case 17:a=t.sent,k(a.info),e.history.push("/simple-blog/login");case 20:t.next=25;break;case 22:t.prev=22,t.t0=t.catch(0),k("API error(".concat(t.t0.message,")"));case 25:case"end":return t.stop()}}),t,null,[[0,22]])})));return function(){return t.apply(this,arguments)}}();return c.a.createElement(c.a.Fragment,null,c.a.createElement(_,null,c.a.createElement("form",{className:"form-signin",onSubmit:function(e){return function(e){w(),e.preventDefault()}(e)}},c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:"username"}),c.a.createElement("input",{className:"form-control",name:"username",type:"text",value:h.username,onChange:function(e){return N(e)},placeholder:"\u7528\u6237\u540d",autoFocus:!0,required:!0})),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:"password"}),c.a.createElement("input",{rows:"10",className:"form-control",name:"password",type:"password",value:h.password,onChange:function(e){return N(e)},placeholder:"\u5bc6\u7801",autoFocus:!0,required:!0})),c.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Submit"),x?c.a.createElement("span",{className:"ml-4 text-danger"},x):"")))},J=function(){return c.a.createElement("footer",{className:"blog-footer"},c.a.createElement("p",null,"notebook by react and bootstrap4"))};function q(){return c.a.createElement(_,null,"Page")}var H=function(e){var t=Object(n.useState)(0),a=Object(m.a)(t,2),r=a[0],l=a[1],s=Object(n.useRef)(),i=function(){var t=Object(u.a)(o.a.mark((function t(a,n){var c,r,s;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,navigator.clipboard.read();case 2:return c=t.sent,t.next=5,c;case 5:return c=t.sent,t.prev=6,t.next=9,c[0].getType("image/png");case 9:r=t.sent,(s=new FileReader).readAsDataURL(r),s.onload=function(){var t=s.result,c=(new Date).getTime(),r="".concat(e.blogData._id,"--").concat(c),o=a.length,u="![".concat(r,"](").concat("https://www.oceanlee.cn:5001/api/img","/").concat(r,")\n"),m=a.slice(0,n)+u+a.slice(n,o);e.handleInsertImage(m,r,t),l(n+u.length)},t.next=18;break;case 15:t.prev=15,t.t0=t.catch(6),console.log("No images were found in the clipboard");case 18:case"end":return t.stop()}}),t,null,[[6,15]])})));return function(e,a){return t.apply(this,arguments)}}();Object(n.useEffect)((function(){s.current.selectionStart=s.current.selectionEnd=r}),[r]);return c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:"data"}),c.a.createElement("textarea",{id:"text",rows:"10",ref:s,className:"form-control",onKeyDown:function(e){return function(e){if(e.ctrlKey&&86===e.keyCode){var t=e.target.value,a=e.target.selectionStart;i(t,a)}}(e)},name:"data",value:e.blogData.data,onChange:function(t){return e.handleEdit(t)},placeholder:"\u5185\u5bb9(\u652f\u6301markdown)",required:!0}))},L=function(e){var t=Object(D.a)("token"),a=Object(m.a)(t,2),r=a[0],l=(a[1],Object(n.useState)()),s=Object(m.a)(l,2),b=s[0],p=s[1],f=Object(n.useState)({_id:e._id,subject:e.subject,timestamp:Date.now(),data:e.data,image:e.image,token:r.token}),d=Object(m.a)(f,2),g=d[0],E=d[1],h=function(e){E(Object(T.a)({},g,Object(I.a)({},e.target.name,e.target.value)))},j=function(){var t=Object(u.a)(o.a.mark((function t(){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch(i+"update",{method:"POST",body:JSON.stringify(g),headers:new Headers({"Content-Type":"application/json"})});case 3:t.sent.ok&&(e.handleEdit(!1),e.handleRefetch()),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),p("API error(".concat(t.t0.message,")"));case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}();return c.a.createElement("form",{onSubmit:function(e){return function(e){j(),e.preventDefault()}(e)}},c.a.createElement("div",{className:"form-row"},c.a.createElement("div",{className:"col-7"},c.a.createElement("label",{htmlFor:"subject"}),c.a.createElement("input",{className:"form-control",name:"subject",value:g.subject,onChange:function(e){return h(e)},required:!0}))),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:"data"}),c.a.createElement(H,{blogData:g,handleEdit:h,handleInsertImage:function(e,t,a){E(Object(T.a)({},g,{data:e,image:Object(T.a)({},g.image,Object(I.a)({},t,a))}))}})),c.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Submit"),c.a.createElement("button",{className:"btn btn-sm",type:"button",onClick:function(){return e.handleEdit(!1)}},"Cancel")," ",b?c.a.createElement("span",{className:"ml-4 text-danger"},b):"")},R=function(e){var t=Object(D.a)("token"),a=Object(m.a)(t,2),r=a[0],l=(a[1],Object(n.useContext)(S)),s=Object(m.a)(l,2),b=s[0],p=(s[1],Object(w.f)().slug),f=Object(n.useState)({loading:!0}),d=Object(m.a)(f,2),g=d[0],E=d[1],h=Object(n.useState)(!1),j=Object(m.a)(h,2),O=j[0],x=j[1],k=Object(n.useState)(!1),N=Object(m.a)(k,2),y=N[0],F=N[1],C=Object(n.useState)(),P=Object(m.a)(C,2),I=P[0],T=P[1],A=Object(n.useCallback)(function(){var t=Object(u.a)(o.a.mark((function t(a){var n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch(i+a);case 3:if(!(n=t.sent).ok){t.next=11;break}return t.next=7,n.json();case 7:n=t.sent,E(n),t.next=12;break;case 11:e.history.push("/simple-blog/404");case 12:t.next=17;break;case 14:t.prev=14,t.t0=t.catch(0),T("API err(".concat(t.t0.message,")"));case 17:case"end":return t.stop()}}),t,null,[[0,14]])})));return function(e){return t.apply(this,arguments)}}(),[e.history]),J=function(){var t=Object(u.a)(o.a.mark((function t(){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch(i+"del",{method:"POST",body:JSON.stringify({_id:g._id,token:r.token}),headers:new Headers({"Content-Type":"application/json"})});case 3:t.sent.ok&&e.history.push("/simple-blog"),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),T("API err(".concat(t.t0.message,")"));case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}(),q=function(e){x(e)},H=function(){F(!0)};Object(n.useEffect)((function(){y&&(F(!1),A(p))}),[A,y,p]),Object(n.useEffect)((function(){A(p)}),[A,p]);var R=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(_,null,g.loading?"":c.a.createElement(c.a.Fragment,null,O?c.a.createElement(L,{_id:g._id,timestamp:g.timestamp,subject:g.subject,data:g.data,image:g.image,handleEdit:q,handleRefetch:H,fetchBlogData:A}):c.a.createElement(c.a.Fragment,null,c.a.createElement("h2",{className:"blog-post-title"},g.subject),c.a.createElement("p",{className:"blog-post-meta"},new Date(g.timestamp).toLocaleString(),b?c.a.createElement(c.a.Fragment,null,c.a.createElement("span",null,c.a.createElement("button",{className:"btn btn-primary btn-sm",onClick:function(){return q(!0)}},"\u7f16\u8f91")),c.a.createElement("span",null,c.a.createElement("button",{className:"btn btn-sm text-danger",onClick:function(e){return function(e){J(),e.preventDefault()}(e)}},"\u5220\u9664"))):""),c.a.createElement(v,{source:g.data})))))};return c.a.createElement(c.a.Fragment,null,I?c.a.createElement(_,null,c.a.createElement("div",{className:"text-danger"},I)):c.a.createElement(R,null))},B=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(_,null,c.a.createElement("h1",null,"Not Found")))},K=a(62),M=function(e){var t=Object(n.useContext)(S),a=Object(m.a)(t,2),r=a[0],l=(a[1],Object(D.a)("token")),s=Object(m.a)(l,2),b=s[0],p=(s[1],Object(K.a)()),f=Object(n.useState)({_id:p,subject:"",timestamp:Date.now(),data:"",image:{},token:b.token}),d=Object(m.a)(f,2),g=d[0],E=d[1],h=Object(n.useState)(),j=Object(m.a)(h,2),O=j[0],v=j[1],x=function(e){E(Object(T.a)({},g,Object(I.a)({},e.target.name,e.target.value)))},k=function(){var t=Object(u.a)(o.a.mark((function t(){var a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch(i+"add",{method:"POST",body:JSON.stringify(g),headers:new Headers({"Content-Type":"application/json"})});case 3:if(!(a=t.sent).ok){t.next=9;break}return t.next=7,a.json();case 7:a=t.sent,e.history.push("/simple-blog/"+g._id);case 9:t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),v("API err(".concat(t.t0.message,")"));case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(){return t.apply(this,arguments)}}();return c.a.createElement(c.a.Fragment,null,r?c.a.createElement(c.a.Fragment,null,c.a.createElement(_,null,c.a.createElement("form",{onSubmit:function(e){k(),e.preventDefault()}},c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:"subject"}),c.a.createElement("input",{className:"form-control",name:"subject",value:g.subject,onChange:function(e){return x(e)},placeholder:"\u6807\u9898",required:!0})),c.a.createElement(H,{blogData:g,handleEdit:x,handleInsertImage:function(e,t,a){E(Object(T.a)({},g,{data:e,image:Object(T.a)({},g.image,Object(I.a)({},t,a))}))}}),c.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Submit"),c.a.createElement("button",{className:"btn btn-sm"},"Cancel"),O?c.a.createElement("span",{className:"ml-4 text-danger"},O):""))):c.a.createElement(B,null))},U=a(61),z=function(){return c.a.createElement(U.a,null,c.a.createElement(f.a,null,c.a.createElement(F,null,c.a.createElement(C,null,c.a.createElement(P,null),c.a.createElement(w.c,null,c.a.createElement(w.a,{exact:!0,path:"/simple-blog/page",component:q}),c.a.createElement(w.a,{exact:!0,path:"/simple-blog/add",component:M}),c.a.createElement(w.a,{exact:!0,path:"/simple-blog",component:N}),c.a.createElement(w.a,{exact:!0,path:"/simple-blog/login",component:A}),c.a.createElement(w.a,{exact:!0,path:"/simple-blog/404",component:B}),c.a.createElement(w.a,{exact:!0,path:"/simple-blog/:slug",component:R})),c.a.createElement(J,null)))))};document.title="Simple notebook",l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(z,null)),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.174c01d9.chunk.js.map