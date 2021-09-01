(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{13:function(t,e,n){t.exports={contact:"ContactList_contact__3FFCj",contactBtn:"ContactList_contactBtn__ZGl4H"}},17:function(t,e,n){t.exports={filter:"Filter_filter__3XI9T",filterInput:"Filter_filterInput__3IGSy"}},27:function(t,e,n){},44:function(t,e,n){"use strict";n.r(e);var a,c=n(0),r=n.n(c),o=n(10),i=n.n(o),s=(n(27),n(6)),l=n(19),u=n(3),b=n(20),d=n.n(b),j=n(4),m=n(21),f=n.n(m),O=n(12),h=n(22),p=n(2),C=n(8),x=n.n(C),g=Object(u.b)("addContact",(function(t){return{payload:{name:t.name,number:t.number,id:x()()}}})),_=Object(u.b)("deleteContact"),F=Object(u.b)("filterContacts"),v=Object(u.c)([],(a={},Object(O.a)(a,g,(function(t,e){return[].concat(Object(h.a)(t),[e.payload])})),Object(O.a)(a,_,(function(t,e){return t.filter((function(t){return t.id!==e.payload}))})),a)),k=Object(u.c)("",Object(O.a)({},F,(function(t,e){return e.payload}))),y=Object(p.b)({items:v,filter:k}),A={key:"contacts",storage:f.a,blacklist:["filter"]},N=Object(j.g)(A,y),B=Object(u.a)({reducer:{contacts:N},middleware:function(t){return t({serializableCheck:{ignoredActions:[j.a,j.f,j.b,j.c,j.d,j.e]}}).concat(d.a)}}),I=Object(j.h)(B),w=n(18),z=n(5),L=n.n(z),Z=n(1),S=function(t){var e=t.name,n=t.number,a=t.onChange,c=t.onHandleAppend,r=t.nameId,o=t.numberId;return Object(Z.jsxs)("form",{className:L.a.forma,children:[Object(Z.jsx)("p",{className:L.a.title,children:"Name"}),Object(Z.jsx)("input",{className:L.a.inputForm,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:e,id:r,onChange:a}),Object(Z.jsx)("p",{className:L.a.title,children:"Number"}),Object(Z.jsx)("input",{className:L.a.inputForm,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:n,id:o,onChange:a}),Object(Z.jsx)("button",{className:L.a.formBtn,type:"button",onClick:c,children:"Add contact"})]})},D=n(17),J=n.n(D),P=function(t){var e=t.filter,n=t.onChange;return Object(Z.jsxs)("label",{className:J.a.filter,children:["Find contacts by name",Object(Z.jsx)("input",{className:J.a.filterInput,type:"text",name:"filter",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:e,onChange:n})]})},q=n(13),G=n.n(q),H=function(t){var e=t.contacts,n=t.onDelete;return Object(Z.jsx)("ul",{className:G.a.ContactList,children:e.map((function(t){var e=t.id,a=t.name,c=t.number;return a.length>0&&c.length>0&&Object(Z.jsxs)("li",{className:G.a.contact,children:[a,": ",c,Object(Z.jsx)("button",{className:G.a.contactBtn,type:"button",onClick:function(){return n(e)},children:"Delete"})]},e)}))})};function M(){var t=Object(c.useState)(""),e=Object(w.a)(t,2),n=e[0],a=e[1],r=Object(c.useState)(""),o=Object(w.a)(r,2),i=o[0],l=o[1],u=x.a.generate(),b=x.a.generate(),d=Object(s.c)((function(t){return t.contacts.items})),j=Object(s.c)((function(t){return t.contacts.filter})),m=Object(s.b)(),f=function(t){var e=t.target,n=e.name,c=e.value;switch(n){case"name":a(c);break;case"number":l(c);break;case"filter":m(F(c));break;default:return void console.error()}},O=function(){a(""),l("")};return Object(Z.jsxs)("div",{children:[Object(Z.jsx)("h2",{children:"Phonebook"}),Object(Z.jsx)(S,{name:n,number:i,onChange:f,onHandleAppend:function(){if(d.find((function(t){return t.name===n})))return alert("".concat(n," is already in contacts")),void O();m(g({name:n,number:i})),O()},nameId:u,numberId:b}),Object(Z.jsx)("h2",{children:"Contacts"}),Object(Z.jsx)(P,{filter:j,onChange:f}),Object(Z.jsx)(H,{contacts:function(){var t=j.toLowerCase();return d.filter((function(e){return e.name.toLowerCase().includes(t)}))}(),onDelete:function(t){m(_(t))}})]})}var T=function(){return Object(Z.jsx)(Z.Fragment,{children:Object(Z.jsx)(M,{})})},$=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,45)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,r=e.getLCP,o=e.getTTFB;n(t),a(t),c(t),r(t),o(t)}))};i.a.render(Object(Z.jsx)(r.a.StrictMode,{children:Object(Z.jsx)(s.a,{store:B,children:Object(Z.jsx)(l.a,{loading:null,persistor:I,children:Object(Z.jsx)(T,{})})})}),document.getElementById("root")),$()},5:function(t,e,n){t.exports={forma:"ContactForm_forma__2dwhp",title:"ContactForm_title__PlBG0",inputForm:"ContactForm_inputForm__3dkcK",formBtn:"ContactForm_formBtn__26wL6"}}},[[44,1,2]]]);
//# sourceMappingURL=main.b6b1d2d5.chunk.js.map