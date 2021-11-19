(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{19:function(t,e,n){t.exports={filter:"FilterSearch_filter__3hq5M",label:"FilterSearch_label__TDDii",input:"FilterSearch_input__3s2XD"}},23:function(t,e,n){t.exports={span:"Contact_span__3Y_AK"}},34:function(t,e,n){t.exports={contactBtn:"ContactList_contactBtn__3_WEg"}},35:function(t,e,n){t.exports={container:"Container_container__1Jg42"}},41:function(t,e,n){},7:function(t,e,n){t.exports={border:"Form_border___AzPs",form:"Form_form__35Gf-",label:"Form_label__3zB8m",input:"Form_input__2e-u_",button:"Form_button__AypCH"}},75:function(t,e,n){"use strict";n.r(e);var r=n(0),a=n.n(r),c=n(14),u=n.n(c),i=(n(41),n(24)),o=n(6),s=n(7),l=n.n(s),b=n(22),j=n.n(b),d=n(8),f=n.n(d),p=n(18),O=n(10),m=n.n(O),h=n(3);m.a.defaults.baseURL="https://6195417d74c1bd00176c6c9b.mockapi.io/api/v1";var v=Object(h.c)("contacts/fetchContacts",function(){var t=Object(p.a)(f.a.mark((function t(e,n){var r,a,c;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n.rejectWithValue,t.prev=1,t.next=4,m.a.get("/contacts");case 4:return a=t.sent,c=a.data,t.abrupt("return",c);case 9:return t.prev=9,t.t0=t.catch(1),t.abrupt("return",r(t.t0));case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e,n){return t.apply(this,arguments)}}()),x=Object(h.c)("contacts/addContact",function(){var t=Object(p.a)(f.a.mark((function t(e,n){var r,a,c,u;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n.rejectWithValue,t.prev=1,a={name:e.name,number:e.number},t.next=5,m.a.post("/contacts",a);case 5:return c=t.sent,u=c.data,t.abrupt("return",u);case 10:return t.prev=10,t.t0=t.catch(1),t.abrupt("return",r(t.t0));case 13:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(e,n){return t.apply(this,arguments)}}()),_=Object(h.c)("contacts/deleteContact",function(){var t=Object(p.a)(f.a.mark((function t(e,n){var r,a,c;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n.rejectWithValue,t.prev=1,t.next=4,m.a.delete("/contacts/".concat(e));case 4:return a=t.sent,c=a.data.id,t.abrupt("return",c);case 9:return t.prev=9,t.t0=t.catch(1),t.abrupt("return",r(t.t0));case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e,n){return t.apply(this,arguments)}}()),g=n(15),y=function(t){return t.contacts.contactsList},C=function(t){return t.contacts.contactFilter},N=Object(g.a)([y,C],(function(t,e){var n=e.toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(n)}))})),F=n(1);var w=function(){var t=Object(r.useState)(""),e=Object(i.a)(t,2),n=e[0],a=e[1],c=Object(r.useState)(""),u=Object(i.a)(c,2),s=u[0],b=u[1],d=j.a.generate(),f=j.a.generate(),p=Object(o.c)(y),O=Object(o.b)(),m=function(t){var e=t.currentTarget,n=e.name,r=e.value;switch(n){case"name":a(r);break;case"number":b(r);break;default:return}},h=function(){a(""),b("")};return Object(F.jsx)("div",{className:l.a.border,children:Object(F.jsxs)("form",{className:l.a.form,onSubmit:function(t){t.preventDefault();var e={name:n,number:s};p.find((function(t){return t.name===n}))?(alert("this contact already exists"),h()):(O(x(e)),h())},children:[Object(F.jsx)("label",{className:l.a.label,htmlFor:n,children:"Name"}),Object(F.jsx)("input",{className:l.a.input,value:n,id:d,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",onChange:m,required:!0}),Object(F.jsx)("label",{className:l.a.label,htmlFor:s,children:"Number"}),Object(F.jsx)("input",{className:l.a.input,value:s,id:f,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",onChange:m,required:!0}),Object(F.jsx)("button",{className:l.a.button,type:"submit",children:"Add contact"})]})})},k=n(19),A=n.n(k),L=Object(h.b)("filter/contact");var S=function(){var t=Object(o.b)(),e=Object(o.c)(C);return Object(F.jsxs)("div",{className:A.a.filter,children:[Object(F.jsx)("label",{className:A.a.label,children:"Find contacts by name"}),Object(F.jsx)("input",{className:A.a.input,type:"text",name:"name",value:e,onChange:function(e){return t(L(e.target.value))}})]})},z=n(17),B=n.n(z),q=n(23),D=n.n(q);function J(t){var e=t.name,n=t.number;return Object(F.jsxs)(F.Fragment,{children:[Object(F.jsxs)("span",{className:D.a.span,children:[e,":"]}),Object(F.jsx)("span",{className:D.a.span,children:n})]})}J.propType={name:B.a.string.isRequired,number:B.a.string.isRequired};var T=J,W=n(34),E=n.n(W);var M=function(){var t=Object(o.b)();Object(r.useEffect)((function(){return t(v())}),[t]);var e=Object(o.c)(N);return Object(F.jsx)("ul",{children:e&&e.map((function(e){var n=e.name,r=e.number,a=e.id;return Object(F.jsxs)("li",{children:[Object(F.jsx)(T,{name:n,number:r}),Object(F.jsx)("button",{className:E.a.contactBtn,type:"button",onClick:function(){return t(_(a))},children:"Delete"})]},a)}))})},R=n(35),V=n.n(R),Z=function(t){var e=t.children;return Object(F.jsx)("div",{className:V.a.container,children:e})};var P,G,H,I=function(){return Object(F.jsxs)(Z,{children:[Object(F.jsx)("h1",{children:"Phonebook"}),Object(F.jsx)(w,{}),Object(F.jsx)("h2",{children:"Contacts"}),Object(F.jsx)(S,{}),Object(F.jsx)(M,{})]})},K=n(2),U=n(36),X=n(5),Y=Object(h.d)([],(P={},Object(K.a)(P,v.fulfilled,(function(t,e){return e.payload})),Object(K.a)(P,x.fulfilled,(function(t,e){var n=e.payload;return[].concat(Object(U.a)(t),[n])})),Object(K.a)(P,_.fulfilled,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),P)),$=Object(h.d)("",Object(K.a)({},L,(function(t,e){return e.payload}))),Q=Object(h.d)(!1,(G={},Object(K.a)(G,v.pending,(function(){return!0})),Object(K.a)(G,v.fulfilled,(function(){return!1})),Object(K.a)(G,v.rejected,(function(){return!1})),Object(K.a)(G,x.pending,(function(){return!0})),Object(K.a)(G,x.fulfilled,(function(){return!1})),Object(K.a)(G,x.rejected,(function(){return!1})),Object(K.a)(G,_.pending,(function(){return!0})),Object(K.a)(G,_.fulfilled,(function(){return!1})),Object(K.a)(G,_.rejected,(function(){return!1})),G)),tt=Object(h.d)(null,(H={},Object(K.a)(H,v.rejected,(function(t,e){return e.payload})),Object(K.a)(H,v.pending,(function(){return null})),H)),et=Object(X.b)({contactsList:Y,contactFilter:$,isLoading:Q,error:tt}),nt=Object(h.a)({reducer:{contacts:et},devTools:!1});u.a.render(Object(F.jsx)(a.a.StrictMode,{children:Object(F.jsx)(o.a,{store:nt,children:Object(F.jsx)(I,{})})}),document.getElementById("root"))}},[[75,1,2]]]);
//# sourceMappingURL=main.9958c935.chunk.js.map