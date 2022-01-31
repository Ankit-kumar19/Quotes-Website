(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,n){e.exports={form:"QuoteForm_form__2se-8",loading:"QuoteForm_loading__TncqD",control:"QuoteForm_control__2wJ_X",actions:"QuoteForm_actions__27m9-"}},function(e,t,n){e.exports={header:"MainNavigation_header__2ztCv",logo:"MainNavigation_logo__i1pA7",nav:"MainNavigation_nav__3WErU",active:"MainNavigation_active__2oWp7"}},,function(e,t,n){e.exports={form:"NewCommentForm_form__1HvcC",loading:"NewCommentForm_loading__2pWfV",control:"NewCommentForm_control__15Gxi",actions:"NewCommentForm_actions__YGtR5"}},,,,,function(e,t,n){e.exports={list:"QuoteList_list__3DdAO",sorting:"QuoteList_sorting__Z5OON"}},,function(e,t,n){e.exports={item:"QuoteItem_item__OqXGR"}},,function(e,t,n){e.exports={spinner:"LoadingSpinner_spinner__1KMyE"}},function(e,t,n){e.exports={noquotes:"NoQuotesFound_noquotes__Kfavi"}},function(e,t,n){e.exports={card:"Card_card__10ZVJ"}},function(e,t,n){e.exports={comments:"Comments_comments__12rvO"}},function(e,t,n){e.exports={item:"CommentItem_item__1lbSm"}},function(e,t,n){e.exports={comments:"CommentsList_comments__38k0-"}},function(e,t,n){e.exports={quote:"HighlightedQuote_quote__10fOj"}},function(e,t,n){e.exports={main:"Layout_main__26-zv"}},,,,,function(e,t,n){},,,,,,,,,,,function(e,t,n){"use strict";n.r(t);var c=n(22),s=n.n(c),r=n(4),a=(n(37),n(2)),o=n(1),i=n(12),u=n(5),j=n.n(u),d=n(9),l=n(11);function m(e,t){return"SEND"===t.type?{data:null,error:null,status:"pending"}:"SUCCESS"===t.type?{data:t.responseData,error:null,status:"completed"}:"ERROR"===t.type?{data:null,error:t.errorMessage,status:"completed"}:e}var b=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=Object(o.useReducer)(m,{status:t?"pending":null,data:null,error:null}),c=Object(l.a)(n,2),s=c[0],r=c[1],a=Object(o.useCallback)(function(){var t=Object(d.a)(j.a.mark((function t(n){var c;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r({type:"SEND"}),t.prev=1,t.next=4,e(n);case 4:c=t.sent,r({type:"SUCCESS",responseData:c}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),r({type:"ERROR",errorMessage:t.t0.message||"Something went wrong!"});case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}(),[e]);return Object(i.a)({sendRequest:a},s)},x="https://quotes-website-6cdfc-default-rtdb.firebaseio.com";function h(){return O.apply(this,arguments)}function O(){return(O=Object(d.a)(j.a.mark((function e(){var t,n,c,s,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(x,"/quotes.json"));case 2:return t=e.sent,e.next=5,t.json();case 5:if(n=e.sent,t.ok){e.next=8;break}throw new Error(n.message||"Could not fetch quotes.");case 8:for(s in c=[],n)r=Object(i.a)({id:s},n[s]),c.push(r);return e.abrupt("return",c);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(e){return p.apply(this,arguments)}function p(){return(p=Object(d.a)(j.a.mark((function e(t){var n,c,s;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(x,"/quotes/").concat(t,".json"));case 2:return n=e.sent,e.next=5,n.json();case 5:if(c=e.sent,n.ok){e.next=8;break}throw new Error(c.message||"Could not fetch quote.");case 8:return s=Object(i.a)({id:t},c),e.abrupt("return",s);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(e){return _.apply(this,arguments)}function _(){return(_=Object(d.a)(j.a.mark((function e(t){var n,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(x,"/quotes.json"),{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}});case 2:return n=e.sent,e.next=5,n.json();case 5:if(c=e.sent,n.ok){e.next=8;break}throw new Error(c.message||"Could not create quote.");case 8:return e.abrupt("return",null);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function g(e){return N.apply(this,arguments)}function N(){return(N=Object(d.a)(j.a.mark((function e(t){var n,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(x,"/comments/").concat(t.quoteId,".json"),{method:"POST",body:JSON.stringify(t.commentData),headers:{"Content-Type":"application/json"}});case 2:return n=e.sent,e.next=5,n.json();case 5:if(c=e.sent,n.ok){e.next=8;break}throw new Error(c.message||"Could not add comment.");case 8:return e.abrupt("return",{commentId:c.name});case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function q(e){return w.apply(this,arguments)}function w(){return(w=Object(d.a)(j.a.mark((function e(t){var n,c,s,r,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(x,"/comments/").concat(t,".json"));case 2:return n=e.sent,e.next=5,n.json();case 5:if(c=e.sent,n.ok){e.next=8;break}throw new Error(c.message||"Could not get comments.");case 8:for(r in s=[],c)a=Object(i.a)({id:r},c[r]),s.push(a);return e.abrupt("return",s);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var C=n(23),y=n.n(C),k=n(0),E=function(e){return Object(k.jsxs)("li",{className:y.a.item,children:[Object(k.jsxs)("figure",{children:[Object(k.jsx)("blockquote",{children:Object(k.jsx)("p",{children:e.text})}),Object(k.jsx)("figcaption",{children:e.author})]}),Object(k.jsx)(r.b,{className:"btn",to:"/quotes/".concat(e.id),children:"View Fullscreen"})]})},S=n(21),R=n.n(S),F=function(e){var t,n,c=Object(a.h)(),s=Object(a.i)(),r="asc"===new URLSearchParams(s.search).get("sort"),i=(t=e.quotes,n=r,t.sort((function(e,t){return n?e.id>t.id?1:-1:e.id<t.id?1:-1})));return Object(k.jsxs)(o.Fragment,{children:[Object(k.jsx)("div",{className:R.a.sorting,children:Object(k.jsxs)("button",{onClick:function(){c.push("/quotes?sort="+(r?"desc":"asc"))},children:["Sort ",r?"Descending":"Ascending"]})}),Object(k.jsx)("ul",{className:R.a.list,children:i.map((function(e){return Object(k.jsx)(E,{id:e.id,author:e.author,text:e.text},e.id)}))})]})},Q=n(25),A=n.n(Q),D=function(){return Object(k.jsx)("div",{className:A.a.spinner})},L=n(26),I=n.n(L),M=function(){return Object(k.jsxs)("div",{className:I.a.noquotes,children:[Object(k.jsx)("p",{children:"No quotes found!"}),Object(k.jsx)(r.b,{className:"btn",to:"/new-quote",children:"Add a Quote "})]})},J=function(){var e=b(h,!0),t=e.sendRequest,n=e.status,c=e.data,s=e.error;return Object(o.useEffect)((function(){t()}),[t]),"pending"===n?Object(k.jsx)("div",{className:"centered",children:Object(k.jsx)(D,{})}):s?Object(k.jsx)("div",{className:"centered focused",children:Object(k.jsx)("p",{children:"Error in fetching quotes"})}):"completed"!==n||c&&0!==c.length?Object(k.jsx)(F,{quotes:c}):Object(k.jsx)(M,{})},T=n(27),U=n.n(T),G=function(e){return Object(k.jsx)("div",{className:U.a.card,children:e.children})},P=n(13),V=n.n(P),W=function(e){var t=Object(o.useState)(!1),n=Object(l.a)(t,2),c=n[0],s=n[1],r=Object(o.useRef)(),i=Object(o.useRef)();return Object(k.jsxs)(o.Fragment,{children:[Object(k.jsx)(a.a,{when:c,message:function(e){return"Are you sure you want to leave ? Entered data will be lost"}}),Object(k.jsx)(G,{children:Object(k.jsxs)("form",{onFocus:function(){s(!0)},className:V.a.form,onSubmit:function(t){t.preventDefault();var n=r.current.value,c=i.current.value;e.onAddQuote({author:n,text:c})},children:[e.isLoading&&Object(k.jsx)("div",{className:V.a.loading,children:Object(k.jsx)(D,{})}),Object(k.jsxs)("div",{className:V.a.control,children:[Object(k.jsx)("label",{htmlFor:"author",children:"Author"}),Object(k.jsx)("input",{type:"text",id:"author",ref:r})]}),Object(k.jsxs)("div",{className:V.a.control,children:[Object(k.jsx)("label",{htmlFor:"text",children:"Text"}),Object(k.jsx)("textarea",{id:"text",rows:"5",ref:i})]}),Object(k.jsx)("div",{className:V.a.actions,children:Object(k.jsx)("button",{onClick:function(){s(!1)},className:"btn",children:"Add Quote"})})]})})]})},z=function(){var e=b(v),t=e.sendRequest,n=e.status,c=Object(a.h)();Object(o.useEffect)((function(){"completed"===n&&c.push("/quotes")}),[n,c]);return Object(k.jsx)(W,{onAddQuote:function(e){t(e)},isLoading:"pending"===n})},H=n(28),K=n.n(H),X=n(16),Y=n.n(X),Z=function(e){var t=b(g),n=t.sendRequest,c=t.status,s=t.error,r=Object(o.useRef)(),a=e.onaddedComment,i=function(t){t.preventDefault();var c=r.current.value;n({commentData:{text:c},quoteid:e.quoteID})};return Object(o.useEffect)((function(){"completed"!==c||s||a()}),[c,s,a]),Object(k.jsxs)("form",{className:Y.a.form,onSubmit:i,children:["pending"===c&&Object(k.jsx)("div",{className:"centered",children:Object(k.jsx)(D,{})}),Object(k.jsxs)("div",{className:Y.a.control,onSubmit:i,children:[Object(k.jsx)("label",{htmlFor:"comment",children:"Your Comment"}),Object(k.jsx)("textarea",{id:"comment",rows:"5",ref:r})]}),Object(k.jsx)("div",{className:Y.a.actions,children:Object(k.jsx)("button",{className:"btn",children:"Add Comment"})})]})},B=n(29),$=n.n(B),ee=function(e){return Object(k.jsx)("li",{className:$.a.item,children:Object(k.jsx)("p",{children:e.text})})},te=n(30),ne=n.n(te),ce=function(e){return Object(k.jsx)("ul",{className:ne.a.comments,children:e.comments.map((function(e){return Object(k.jsx)(ee,{text:e.text},e.id)}))})},se=function(){var e,t=Object(o.useState)(!1),n=Object(l.a)(t,2),c=n[0],s=n[1],r=b(q),i=r.sendRequest,u=r.status,j=r.data,d=Object(a.j)().quoteid,m=Object(o.useCallback)((function(){i(d)}),[d,i]);return Object(o.useEffect)((function(){i(d)}),[d,i]),"pending"===u&&(e=Object(k.jsx)("div",{className:"centered",children:Object(k.jsx)(D,{})})),"completed"===u&&j&&j.length>0&&(e=Object(k.jsx)(ce,{comments:j})),"completed"===u&&(!j||j.length<0)&&(e=Object(k.jsx)("div",{className:"centerd",children:Object(k.jsx)("p",{children:"No comments added yet"})})),Object(k.jsxs)("section",{className:K.a.comments,children:[Object(k.jsx)("h2",{children:"User Comments"}),!c&&Object(k.jsx)("button",{className:"btn",onClick:function(){s(!0)},children:"Add a Comment"}),c&&Object(k.jsx)(Z,{quoteID:d,onaddedComment:m}),e]})},re=n(31),ae=n.n(re),oe=function(e){return Object(k.jsxs)("figure",{className:ae.a.quote,children:[Object(k.jsx)("p",{children:e.text}),Object(k.jsx)("figcaption",{children:e.author})]})},ie=function(){var e=b(f,!0),t=e.sendRequest,n=e.status,c=e.data,s=e.error,i=Object(a.j)().quoteid;return Object(o.useEffect)((function(){t(i)}),[t,i]),"pending"===n?Object(k.jsx)("div",{className:"centered",children:Object(k.jsx)(D,{})}):s?Object(k.jsx)("div",{className:"centered focused",children:Object(k.jsx)("p",{children:"Error in fetching quotes"})}):c.text?Object(k.jsxs)(o.Fragment,{children:[Object(k.jsx)(oe,{text:c.text,author:c.author}),Object(k.jsx)(a.c,{path:"/quotes/".concat(i),exact:!0,children:Object(k.jsx)("div",{className:"centered",children:Object(k.jsx)(r.b,{className:"btn--flat",to:"/quotes/".concat(i,"/comments"),children:"Load Comments"})})}),Object(k.jsx)(a.c,{path:"/quotes/".concat(i,"/comments"),children:Object(k.jsx)(se,{})})]}):Object(k.jsx)(M,{})},ue=n(32),je=n.n(ue),de=n(14),le=n.n(de),me=function(){return Object(k.jsxs)("header",{className:le.a.header,children:[Object(k.jsx)("div",{className:le.a.logo,children:"Great Quotes"}),Object(k.jsx)("nav",{className:le.a.nav,children:Object(k.jsxs)("ul",{children:[Object(k.jsx)("li",{children:Object(k.jsx)(r.c,{to:"/quotes",activeClassName:le.a.active,children:"All Quotes"})}),Object(k.jsx)("li",{children:Object(k.jsx)(r.c,{to:"/new-quote",activeClassName:le.a.active,children:"Add a quote"})})]})})]})},be=function(e){return Object(k.jsxs)(o.Fragment,{children:[Object(k.jsx)(me,{}),Object(k.jsx)("main",{className:je.a.main,children:e.children})]})},xe=function(){return Object(k.jsx)("div",{className:"centered",children:"Page not found"})};var he=function(){return Object(k.jsx)(be,{children:Object(k.jsxs)(a.e,{children:[Object(k.jsx)(a.c,{path:"/",exact:!0,children:Object(k.jsx)(a.b,{to:"/quotes"})}),Object(k.jsx)(a.c,{path:"/quotes",exact:!0,children:Object(k.jsx)(J,{})}),Object(k.jsx)(a.c,{path:"/new-quote",children:Object(k.jsx)(z,{})}),Object(k.jsx)(a.c,{path:"/quotes/:quoteid",children:Object(k.jsx)(ie,{})}),Object(k.jsx)(a.c,{path:"*",children:Object(k.jsx)(xe,{})})]})})};s.a.render(Object(k.jsx)(r.a,{children:Object(k.jsx)(he,{})}),document.getElementById("root"))}],[[48,1,2]]]);
//# sourceMappingURL=main.295018ec.chunk.js.map