(this["webpackJsonptest-app"]=this["webpackJsonptest-app"]||[]).push([[0],{13:function(e,t,a){e.exports=a.p+"static/media/loading.112ac8e0.svg"},30:function(e,t,a){e.exports=a(58)},36:function(e,t,a){},58:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(25),l=a.n(c),s=(a(35),a(36),a(2)),o=a.n(s),u=a(4),m=a(1),i="http://oceanlee.cn:5001/api/blog/",b=function(e){var t=Object(n.useState)(),a=Object(m.a)(t,2),c=a[0],l=a[1],s=function(){var t=Object(u.a)(o.a.mark((function t(a){var n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("http://oceanlee.cn:5001/api/search?keyword="+a);case 2:return n=t.sent,t.next=5,n.json();case 5:n=t.sent,e.handleSetSearch(n);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{className:"form-group",onSubmit:function(e){s(c),e.preventDefault()}},r.a.createElement("label",{htmlFor:"search"}),r.a.createElement("input",{className:"form-control",name:"search",onChange:function(e){l(e.target.value)},placeholder:"search...",required:!0})))},p=function(e){return r.a.createElement("aside",{className:"col-md-4 blog-sidebar"},r.a.createElement("div",{className:"p-3 mb-3 bg-light rounded"},r.a.createElement("h4",{className:"font-italic"},"About"),r.a.createElement("p",{className:"mb-0"},"\u8fd9\u662f\u6211\u7684\u7b14\u8bb0\u672c ",r.a.createElement("em",null,"\u5174\u8da3\u662f\u5b66\u4e60\u8fdb\u6b65\u7684\u52a8\u529b"))),r.a.createElement("div",{className:"p-3"},r.a.createElement(b,{handleSetSearch:e.handleSetSearch})),r.a.createElement("div",{className:"p-3"},r.a.createElement("h4",{className:"font-italic"},"Tag"),r.a.createElement("ol",{className:"list-unstyled"})))},f=a(7),d=a(26),E=a.n(d),h=a(27),g=a.n(h),j=a(28),O=a.n(j),v=(a(49),a(50),a(51),a(52),a(53),function(e){var t=Object(n.useState)(!0),a=Object(m.a)(t,2),c=a[0],l=a[1],s=function(){var t=E()(e.source);return t=g()(t),r.a.createElement(r.a.Fragment,null,t)};return Object(n.useEffect)((function(){e.source&&l(!1)}),[e.source]),Object(n.useEffect)((function(){O.a.highlightAll()})),r.a.createElement(r.a.Fragment,null,c?"":r.a.createElement(s,null))}),x=a(13),N=a.n(x),k=function(e){var t=Object(n.useState)([{loading:!0}]),a=Object(m.a)(t,2),c=a[0],l=a[1],s=Object(n.useState)(1),b=Object(m.a)(s,2),d=b[0],E=b[1],h=Object(n.useState)(1),g=Object(m.a)(h,2),j=g[0],O=g[1],x=Object(n.useState)([]),k=Object(m.a)(x,2),y=k[0],S=k[1],w=Object(n.useState)(),F=Object(m.a)(w,2),C=F[0],D=F[1],P=Object(n.useState)(),I=Object(m.a)(P,2),T=I[0],_=I[1],A=Object(n.useCallback)(function(){var t=Object(u.a)(o.a.mark((function t(a){var n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!a){t.next=17;break}return t.prev=1,t.next=4,fetch(i+"last?page="+a);case 4:if(!(n=t.sent).ok){t.next=10;break}return t.next=8,n.json();case 8:0===(n=t.sent).count?e.history.push("/add"):l(n);case 10:t.next=15;break;case 12:t.prev=12,t.t0=t.catch(1),_("API error(".concat(t.t0.message,")"));case 15:t.next=18;break;case 17:A(1);case 18:case"end":return t.stop()}}),t,null,[[1,12]])})));return function(e){return t.apply(this,arguments)}}(),[e.history]),J=function(){var e=Object(u.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(i+"count");case 2:return t=e.sent,e.next=5,t.json();case 5:t=e.sent,O(Math.ceil(t.count/10));case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){1===d?A():A(d)}),[d,A]),Object(n.useEffect)((function(){J()}));var q=function(){return r.a.createElement(r.a.Fragment,null,0===C?r.a.createElement("h6",null,"Not Found"):"",y.map((function(e,t){return r.a.createElement("div",{className:"blog-post",key:t},r.a.createElement("h2",{className:"blog-post-title"},r.a.createElement(f.b,{to:"/"+e._id},e.subject)),r.a.createElement("p",{className:"blog-post-meta"},e?new Date(e.timestamp).toLocaleString():r.a.createElement("img",{src:N.a,alt:N.a})))})))},H=function(){return r.a.createElement(r.a.Fragment,null,c.map((function(e,t){return r.a.createElement("div",{className:"blog-post",key:t},r.a.createElement("h2",{className:"blog-post-title"},r.a.createElement(f.b,{to:"/"+e._id},e.subject)),r.a.createElement("p",{className:"blog-post-meta"},e.timestamp?new Date(e.timestamp).toLocaleString():r.a.createElement("img",{src:N.a,alt:N.a})),r.a.createElement(v,{source:e.data}))})))};return r.a.createElement(r.a.Fragment,null,r.a.createElement("main",{role:"main",className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-8 blog-main"},y?r.a.createElement(q,null):r.a.createElement(r.a.Fragment,null),r.a.createElement(r.a.Fragment,null,T?r.a.createElement("h6",{className:"text-danger"},T):r.a.createElement(r.a.Fragment,null,c.loading?r.a.createElement(r.a.Fragment,null):r.a.createElement(r.a.Fragment,null,r.a.createElement(H,null),r.a.createElement("div",{className:"blog-pagination"},r.a.createElement("button",{className:"btn btn-outline-primary",disabled:1===d?"disabled":"",onClick:function(){A(d-1),E(d-1)}},"Previous"),r.a.createElement("button",{className:"btn btn-outline-secondary",disabled:d===j?"disabled":"",onClick:function(){A(d+1),E(d+1)}},"Next")))))),r.a.createElement(p,{handleSetSearch:function(e){S(e),D(e.length),l({loading:!0})}}))))},y=a(3),S=Object(n.createContext)(),w=Object(n.createContext)(),F=function(e){var t=Object(n.useState)({last_token:"",username:""}),a=Object(m.a)(t,2),c=a[0],l=a[1];return r.a.createElement(S.Provider,{value:[c,l]},e.children)},C=function(e){var t=Object(n.useState)(!1),a=Object(m.a)(t,2),c=a[0],l=a[1];return r.a.createElement(w.Provider,{value:[c,l]},e.children)},D=a(60),P=Object(y.g)((function(e){var t=Object(n.useContext)(w),a=Object(m.a)(t,2),c=a[0],l=a[1],s=Object(D.a)("token"),i=Object(m.a)(s,2),b=i[0],p=i[1],d=Object(n.useState)(),E=Object(m.a)(d,2),h=E[0],g=E[1],j=Object(n.useCallback)(Object(u.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("http://oceanlee.cn:5001/api/check_token",{method:"POST",body:JSON.stringify(b),headers:new Headers({"Content-Type":"application/json"})});case 3:if(!(t=e.sent).ok){e.next=11;break}return e.next=7,t.json();case 7:t=e.sent,l(!0),e.next=13;break;case 11:l(!1),g("token has expired");case 13:e.next=18;break;case 15:e.prev=15,e.t0=e.catch(0),g("API error(".concat(e.t0.message,")"));case 18:case"end":return e.stop()}}),e,null,[[0,15]])}))),[b,l]);return Object(n.useEffect)((function(){void 0===b.token?l(!1):j()}),[b.token,j,l]),r.a.createElement("div",{className:"container"},r.a.createElement("header",{className:"blog-header py-3"},r.a.createElement("div",{className:"row flex-nowrap justify-content-between align-items-center"},r.a.createElement("div",{className:"col-4 text-left"},r.a.createElement("a",{href:"/",className:"blog-header-logo text-dark"},"Simple notebook")),r.a.createElement("div",{className:"col-4 d-flex justify-content-end align-items-center"},c?r.a.createElement(r.a.Fragment,null,r.a.createElement(f.b,{className:"btn btn-sm text-primary",to:"/add"},"Add"),r.a.createElement("button",{className:"btn btn-sm btn-outline-secondary",onClick:function(){p("token"),l(!1),e.history.push("/login")}},"Logout")):r.a.createElement(r.a.Fragment,null,h?r.a.createElement("span",{className:"mr-4 text-danger"},h):"",r.a.createElement(f.b,{className:"btn btn-sm btn-outline-secondary",to:"/login"},"Login"))))),r.a.createElement("div",{className:"nav-scroller py-1 mb-2"},r.a.createElement("nav",{className:"nav d-flex justify-content-between"},r.a.createElement(f.b,{className:"p-2 text-muted",to:"/"},"Home"),r.a.createElement(f.b,{className:"p-2 text-muted",to:"/page"},"Page"))))})),I=a(8),T=a(9),_=function(e){return r.a.createElement("main",{role:"main",className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col blog-main"},r.a.createElement("div",{className:"blog-post"},e.children))))},A=function(e){var t=Object(n.useContext)(S),a=Object(m.a)(t,2),c=(a[0],a[1]),l=Object(n.useContext)(w),s=Object(m.a)(l,2),i=s[0],b=s[1],p=Object(D.a)("token"),f=Object(m.a)(p,2),d=(f[0],f[1]),E=Object(n.useState)({username:"",password:""}),h=Object(m.a)(E,2),g=h[0],j=h[1],O=Object(n.useState)(),v=Object(m.a)(O,2),x=v[0],N=v[1];Object(n.useEffect)((function(){i&&e.history.push("/")}),[i,e.history]);var k=function(e){j(Object(T.a)({},g,Object(I.a)({},e.target.name,e.target.value)))},y=function(){var t=Object(u.a)(o.a.mark((function t(){var a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://192.168.1.123:5000/api/user",{method:"POST",body:JSON.stringify(g),headers:new Headers({"Content-Type":"application/json"})});case 3:if(!(a=t.sent).ok){t.next=15;break}return t.next=7,a.json();case 7:a=t.sent,N(a.info),c({token:a.token,username:a.username}),d("token",a.token,{path:"/"}),b(!0),i&&e.history.goBack(),t.next=20;break;case 15:return t.next=17,a.json();case 17:a=t.sent,N(a.info),e.history.push("/login");case 20:t.next=25;break;case 22:t.prev=22,t.t0=t.catch(0),N("API error(".concat(t.t0.message,")"));case 25:case"end":return t.stop()}}),t,null,[[0,22]])})));return function(){return t.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement(_,null,r.a.createElement("form",{className:"form-signin",onSubmit:function(e){return function(e){y(),e.preventDefault()}(e)}},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"username"}),r.a.createElement("input",{className:"form-control",name:"username",value:g.username,onChange:function(e){return k(e)},placeholder:"\u7528\u6237\u540d",autoFocus:!0,required:!0})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"password"}),r.a.createElement("input",{rows:"10",className:"form-control",name:"password",value:g.password,onChange:function(e){return k(e)},placeholder:"\u5bc6\u7801",autoFocus:!0,required:!0})),r.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Submit"),x?r.a.createElement("span",{className:"ml-4 text-danger"},x):"")))},J=function(){return r.a.createElement("footer",{className:"blog-footer"},r.a.createElement("p",null,"notebook by react and bootstrap4"))};function q(){return r.a.createElement(_,null,"Page")}var H=function(e){var t=Object(n.useState)(0),a=Object(m.a)(t,2),c=a[0],l=a[1],s=Object(n.useRef)(),i=function(){var t=Object(u.a)(o.a.mark((function t(a,n){var r,c,s;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,navigator.clipboard.read();case 2:return r=t.sent,t.next=5,r;case 5:return r=t.sent,t.prev=6,t.next=9,r[0].getType("image/png");case 9:c=t.sent,(s=new FileReader).readAsDataURL(c),s.onload=function(){var t=s.result,r=(new Date).getTime(),c="".concat(e.blogData._id,"--").concat(r),o=a.length,u="![".concat(c,"](").concat("http://oceanlee.cn:5001/api/img","/").concat(c,")\n"),m=a.slice(0,n)+u+a.slice(n,o);e.handleInsertImage(m,c,t),l(n+u.length)},t.next=18;break;case 15:t.prev=15,t.t0=t.catch(6),console.log("No images were found in the clipboard");case 18:case"end":return t.stop()}}),t,null,[[6,15]])})));return function(e,a){return t.apply(this,arguments)}}();Object(n.useEffect)((function(){s.current.selectionStart=s.current.selectionEnd=c}),[c]);return r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"data"}),r.a.createElement("textarea",{id:"text",rows:"10",ref:s,className:"form-control",onKeyDown:function(e){return function(e){if(e.ctrlKey&&86===e.keyCode){var t=e.target.value,a=e.target.selectionStart;i(t,a)}}(e)},name:"data",value:e.blogData.data,onChange:function(t){return e.handleEdit(t)},placeholder:"\u5185\u5bb9(\u652f\u6301markdown)",required:!0}))},L=function(e){var t=Object(D.a)("token"),a=Object(m.a)(t,2),c=a[0],l=(a[1],Object(n.useState)()),s=Object(m.a)(l,2),b=s[0],p=s[1],f=Object(n.useState)({_id:e._id,subject:e.subject,timestamp:Date.now(),data:e.data,image:e.image,token:c.token}),d=Object(m.a)(f,2),E=d[0],h=d[1],g=function(e){h(Object(T.a)({},E,Object(I.a)({},e.target.name,e.target.value)))},j=function(){var t=Object(u.a)(o.a.mark((function t(){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch(i+"update",{method:"POST",body:JSON.stringify(E),headers:new Headers({"Content-Type":"application/json"})});case 3:t.sent.ok&&(e.handleEdit(!1),e.handleRefetch()),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),p("API error(".concat(t.t0.message,")"));case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}();return r.a.createElement("form",{onSubmit:function(e){return function(e){j(),e.preventDefault()}(e)}},r.a.createElement("div",{className:"form-row"},r.a.createElement("div",{className:"col-7"},r.a.createElement("label",{htmlFor:"subject"}),r.a.createElement("input",{className:"form-control",name:"subject",value:E.subject,onChange:function(e){return g(e)},required:!0}))),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"data"}),r.a.createElement(H,{blogData:E,handleEdit:g,handleInsertImage:function(e,t,a){h(Object(T.a)({},E,{data:e,image:Object(T.a)({},E.image,Object(I.a)({},t,a))}))}})),r.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Submit"),r.a.createElement("button",{className:"btn btn-sm",type:"button",onClick:function(){return e.handleEdit(!1)}},"Cancel")," ",b?r.a.createElement("span",{className:"ml-4 text-danger"},b):"")},R=function(e){var t=Object(D.a)("token"),a=Object(m.a)(t,2),c=a[0],l=(a[1],Object(n.useContext)(w)),s=Object(m.a)(l,2),b=s[0],p=(s[1],Object(y.f)().slug),f=Object(n.useState)({loading:!0}),d=Object(m.a)(f,2),E=d[0],h=d[1],g=Object(n.useState)(!1),j=Object(m.a)(g,2),O=j[0],x=j[1],N=Object(n.useState)(!1),k=Object(m.a)(N,2),S=k[0],F=k[1],C=Object(n.useState)(),P=Object(m.a)(C,2),I=P[0],T=P[1],A=Object(n.useCallback)(function(){var t=Object(u.a)(o.a.mark((function t(a){var n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch(i+a);case 3:if(!(n=t.sent).ok){t.next=11;break}return t.next=7,n.json();case 7:n=t.sent,h(n),t.next=12;break;case 11:e.history.push("/404");case 12:t.next=17;break;case 14:t.prev=14,t.t0=t.catch(0),T("API err(".concat(t.t0.message,")"));case 17:case"end":return t.stop()}}),t,null,[[0,14]])})));return function(e){return t.apply(this,arguments)}}(),[e.history]),J=function(){var e=Object(u.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(i+"del",{method:"POST",body:JSON.stringify({_id:E._id,token:c.token}),headers:new Headers({"Content-Type":"application/json"})});case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),q=function(e){x(e)},H=function(){F(!0)};Object(n.useEffect)((function(){S&&(F(!1),A(p))}),[A,S,p]),Object(n.useEffect)((function(){A(p)}),[A,p]);var R=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(_,null,E.loading?"":r.a.createElement(r.a.Fragment,null,O?r.a.createElement(L,{_id:E._id,timestamp:E.timestamp,subject:E.subject,data:E.data,image:E.image,handleEdit:q,handleRefetch:H,fetchBlogData:A}):r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{className:"blog-post-title"},E.subject),r.a.createElement("p",{className:"blog-post-meta"},new Date(E.timestamp).toLocaleString(),b?r.a.createElement(r.a.Fragment,null,r.a.createElement("span",null,r.a.createElement("button",{className:"btn btn-primary btn-sm",onClick:function(){return q(!0)}},"\u7f16\u8f91")),r.a.createElement("span",null,r.a.createElement("button",{className:"btn btn-sm text-danger",onClick:function(t){return function(t){J(),t.preventDefault(),e.history.push("/")}(t)}},"\u5220\u9664"))):""),r.a.createElement(v,{source:E.data})))))};return r.a.createElement(r.a.Fragment,null,I?r.a.createElement(_,null,r.a.createElement("div",{className:"text-danger"},I)):r.a.createElement(R,null))},B=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(_,null,r.a.createElement("h1",null,"Not Found")))},K=a(62),M=function(e){var t=Object(n.useContext)(w),a=Object(m.a)(t,2),c=a[0],l=(a[1],Object(D.a)("token")),s=Object(m.a)(l,2),b=s[0],p=(s[1],Object(K.a)()),f=Object(n.useState)({_id:p,subject:"",timestamp:Date.now(),data:"",image:{},token:b.token}),d=Object(m.a)(f,2),E=d[0],h=d[1],g=Object(n.useState)(),j=Object(m.a)(g,2),O=j[0],v=j[1],x=function(e){h(Object(T.a)({},E,Object(I.a)({},e.target.name,e.target.value)))},N=function(){var t=Object(u.a)(o.a.mark((function t(){var a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch(i+"add",{method:"POST",body:JSON.stringify(E),headers:new Headers({"Content-Type":"application/json"})});case 3:if(!(a=t.sent).ok){t.next=9;break}return t.next=7,a.json();case 7:a=t.sent,e.history.push("/"+E._id);case 9:t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),v("API err(".concat(t.t0.message,")"));case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(){return t.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,c?r.a.createElement(r.a.Fragment,null,r.a.createElement(_,null,r.a.createElement("form",{onSubmit:function(e){N(),e.preventDefault()}},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"subject"}),r.a.createElement("input",{className:"form-control",name:"subject",value:E.subject,onChange:function(e){return x(e)},placeholder:"\u6807\u9898",required:!0})),r.a.createElement(H,{blogData:E,handleEdit:x,handleInsertImage:function(e,t,a){h(Object(T.a)({},E,{data:e,image:Object(T.a)({},E.image,Object(I.a)({},t,a))}))}}),r.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Submit"),r.a.createElement("button",{className:"btn btn-sm"},"Cancel"),O?r.a.createElement("span",{className:"ml-4 text-danger"},O):""))):r.a.createElement(B,null))},U=a(61),z=function(){return r.a.createElement(U.a,null,r.a.createElement(f.a,null,r.a.createElement(F,null,r.a.createElement(C,null,r.a.createElement(P,null),r.a.createElement(y.c,null,r.a.createElement(y.a,{exact:!0,path:"/page",component:q}),r.a.createElement(y.a,{exact:!0,path:"/add",component:M}),r.a.createElement(y.a,{exact:!0,path:"/",component:k}),r.a.createElement(y.a,{exact:!0,path:"/login",component:A}),r.a.createElement(y.a,{exact:!0,path:"/404",component:B}),r.a.createElement(y.a,{exact:!0,path:"/:slug",component:R})),r.a.createElement(J,null)))))};document.title="Simple notebook",l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(z,null)),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.d9156341.chunk.js.map