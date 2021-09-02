(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{13:function(t,e,n){t.exports={contact:"ContactList_contact__3FFCj",contactBtn:"ContactList_contactBtn__ZGl4H"}},17:function(t,e,n){t.exports={filter:"Filter_filter__3XI9T",filterInput:"Filter_filterInput__3IGSy"}},27:function(t,e,n){},44:function(t,e,n){"use strict";n.r(e);var c,a=n(0),r=n.n(a),o=n(10),i=n.n(o),s=(n(27),n(3)),l=n(19),u=n(4),b=n(20),j=n.n(b),d=n(5),m=n(21),f=n.n(m),O=n(12),h=n(22),p=n(2),x=n(8),C=n.n(x),g=Object(u.b)("addContact",(function(t){return{payload:{name:t.name,number:t.number,id:C()()}}})),_=Object(u.b)("deleteContact"),F=Object(u.b)("filterContacts"),v=Object(u.c)([],(c={},Object(O.a)(c,g,(function(t,e){return[].concat(Object(h.a)(t),[e.payload])})),Object(O.a)(c,_,(function(t,e){return t.filter((function(t){return t.id!==e.payload}))})),c)),y=Object(u.c)("",Object(O.a)({},F,(function(t,e){return e.payload}))),k=Object(p.b)({items:v,filter:y}),N={key:"contacts",storage:f.a,blacklist:["filter"]},A=Object(d.g)(N,k),B=Object(u.a)({reducer:{contacts:A},middleware:function(t){return t({serializableCheck:{ignoredActions:[d.a,d.f,d.b,d.c,d.d,d.e]}}).concat(j.a)},devTools:!1}),w=Object(d.h)(B),z=n(18),L=n(6),I=n.n(L),Z=n(1),S=function(){var t=Object(a.useState)(""),e=Object(z.a)(t,2),n=e[0],c=e[1],r=Object(a.useState)(""),o=Object(z.a)(r,2),i=o[0],l=o[1],u=C.a.generate(),b=C.a.generate(),j=Object(s.c)((function(t){return t.contacts.items})),d=Object(s.b)(),m=function(t){var e=t.target,n=e.name,a=e.value;switch(n){case"name":c(a);break;case"number":l(a);break;default:return void console.error()}},f=function(){c(""),l("")};return Object(Z.jsxs)("form",{className:I.a.forma,children:[Object(Z.jsx)("p",{className:I.a.title,children:"Name"}),Object(Z.jsx)("input",{className:I.a.inputForm,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:n,id:u,onChange:m}),Object(Z.jsx)("p",{className:I.a.title,children:"Number"}),Object(Z.jsx)("input",{className:I.a.inputForm,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:i,id:b,onChange:m}),Object(Z.jsx)("button",{className:I.a.formBtn,type:"button",onClick:function(){if(j.find((function(t){return t.name===n})))return alert("".concat(n," is already in contacts")),void f();d(g({name:n,number:i})),f()},children:"Add contact"})]})},J=n(17),P=n.n(J),T=function(){var t=Object(s.b)();return Object(Z.jsxs)("label",{className:P.a.filter,children:["Find contacts by name",Object(Z.jsx)("input",{className:P.a.filterInput,type:"text",name:"filter",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:function(e){return t(F(e.target.value))}})]})},q=n(13),G=n.n(q),M=function(){var t=Object(s.b)(),e=Object(s.c)((function(t){var e=t.contacts,n=e.filter,c=e.items,a=n.toLowerCase();return c.filter((function(t){return t.name.toLowerCase().includes(a)}))}));return Object(Z.jsx)("ul",{className:G.a.ContactList,children:e.map((function(e){var n=e.id,c=e.name,a=e.number;return c.length>0&&a.length>0&&Object(Z.jsxs)("li",{className:G.a.contact,children:[c,": ",a,Object(Z.jsx)("button",{className:G.a.contactBtn,type:"button",onClick:function(){t(_(n))},children:"Delete"})]},n)}))})};function D(){return Object(Z.jsxs)("div",{children:[Object(Z.jsx)("h2",{children:"Phonebook"}),Object(Z.jsx)(S,{}),Object(Z.jsx)("h2",{children:"Contacts"}),Object(Z.jsx)(T,{}),Object(Z.jsx)(M,{})]})}var $=function(){return Object(Z.jsx)(Z.Fragment,{children:Object(Z.jsx)(D,{})})},E=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,45)).then((function(e){var n=e.getCLS,c=e.getFID,a=e.getFCP,r=e.getLCP,o=e.getTTFB;n(t),c(t),a(t),r(t),o(t)}))};i.a.render(Object(Z.jsx)(r.a.StrictMode,{children:Object(Z.jsx)(s.a,{store:B,children:Object(Z.jsx)(l.a,{loading:null,persistor:w,children:Object(Z.jsx)($,{})})})}),document.getElementById("root")),E()},6:function(t,e,n){t.exports={forma:"ContactForm_forma__2dwhp",title:"ContactForm_title__PlBG0",inputForm:"ContactForm_inputForm__3dkcK",formBtn:"ContactForm_formBtn__26wL6"}}},[[44,1,2]]]);
//# sourceMappingURL=main.6a7ff520.chunk.js.map