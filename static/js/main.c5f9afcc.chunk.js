(this["webpackJsonpproyecto-1"]=this["webpackJsonpproyecto-1"]||[]).push([[0],{77:function(e,t,a){},78:function(e,t,a){},84:function(e,t,a){},87:function(e,t,a){},88:function(e,t,a){},89:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),i=a(29),s=a.n(i),r=(a(77),a(17)),o=a(40),l=a(9),d=a(136),j=a(138),u=a(137),p=(a(78),a(2)),b=function(e){var t=e.editId,a=e.type,n=e.onCreate,i=e.onEdit,s=c.a.useState(!1),r=Object(l.a)(s,2),o=r[0],b=r[1],m=c.a.useState(""),x=Object(l.a)(m,2),h=x[0],O=x[1],g=c.a.useState(""),v=Object(l.a)(g,2),f=v[0],A=v[1],C=c.a.useState(""),N=Object(l.a)(C,2),_=N[0],I=N[1],D=c.a.useState(""),y=Object(l.a)(D,2),S=y[0],L=y[1],k=f.length>=10,E=h.length>=2,T=_.length>=20,w=Object(u.a)({root:{margin:"10px 0 0 0"}});return Object(p.jsxs)("form",{className:"DeparElemForm",onSubmit:function(e){e.preventDefault(),b(!0),"create"===a&&T&&E&&k?(n({img:f,title:h,mapImg:S,description:_}),O(""),A(""),I(""),L(""),b(!1)):"edit"===a&&T&&k?i(t,{img:f,description:_}):console.log("invalid")},children:[Object(p.jsxs)("h2",{children:[" ","create"===a?"Agregar":"Editar"," Elemento"]}),"create"===a&&Object(p.jsx)(d.a,{name:"title",label:"Departamento",variant:"outlined",className:"input",type:"text",onChange:function(e){O(e.target.value)},value:h,error:!E&&o,helperText:!E&&o?"El titulo contiene menos de 10 caracteres":""}),Object(p.jsx)(d.a,{name:"Image",type:"text",label:"URL Imagen",variant:"outlined",className:w().root,onChange:function(e){A(e.target.value)},value:f,error:o&&!k,helperText:o&&!k?"La URL contiene menos de 10 caracteres":""}),Object(p.jsx)(d.a,{name:"Logo",type:"text",label:"URL Croquis",className:w().root,variant:"outlined",onChange:function(e){L(e.target.value)},value:S,error:o&&!k,helperText:o&&!k?"La URL contiene menos de 10 caracteres":""}),Object(p.jsx)(d.a,{name:"Description",type:"text",label:"Descripci\xf3n",variant:"outlined",className:w().root,onChange:function(e){I(e.target.value)},value:_,error:!T&&o,helperText:!T&&o?"La URL contiene menos de 10 caracteres":""}),Object(p.jsx)(j.a,{type:"submit",variant:"contained",className:w().root,children:"create"===a?"Agregar nuevo elemento":"Guardar cambios"})]})},m=(a(84),a(14)),x=function(e){var t=e.id,a=e.img,n=e.title,c=e.description,i=e.mapImg,s=e.onDelate,r=e.onEdit,o=e.type,l=Object(m.g)();return Object(p.jsxs)("div",{className:"container_depart",style:{backgroundImage:'url("'.concat(a,'")')},children:["edit"===o&&Object(p.jsxs)("div",{children:[s&&Object(p.jsx)("button",{onClick:function(){s&&s(t)},children:"X"}),r&&Object(p.jsx)("button",{onClick:function(){r&&r(t)},children:"Editar"})]}),Object(p.jsx)("img",{src:i}),Object(p.jsx)("h2",{className:"container_depart--title",children:n}),Object(p.jsx)("p",{className:"container_depart--des",children:c}),"edit"===o&&Object(p.jsx)("div",{children:Object(p.jsx)("button",{onClick:function(){l.push("/details/".concat(t))},children:"Conoce m\xe1s..."})})]})},h=a(32),O=(a(87),function(e){return Object(p.jsx)(h.b,{className:"link",activeClassName:"link--active",to:e.url,children:e.text})}),g=a.p+"static/media/logo.17d4cc91.svg",v=a.p+"static/media/croquis.ffb02d47.svg",f=(a(88),a(140)),A=a(31),C=function(e){var t=e.onCreate,a=n.useState(""),c=Object(l.a)(a,2),i=c[0],s=c[1],r=n.useState(""),o=Object(l.a)(r,2),u=o[0],b=o[1],m=n.useState(""),x=Object(l.a)(m,2),h=x[0],O=x[1];return Object(p.jsxs)("form",{onSubmit:function(e){e.preventDefault();var a={id:Math.random(),title:i,weather:h,description:u};t(a)},children:[Object(p.jsx)(d.a,{name:"title",label:"Departamento",variant:"outlined",className:"input",type:"text",onChange:function(e){s(e.target.value)},value:i}),Object(p.jsx)(d.a,{name:"weather",label:"Clima",variant:"outlined",className:"input",type:"text",onChange:function(e){O(e.target.value)},value:h}),Object(p.jsx)(d.a,{name:"Description",type:"text",label:"Descripci\xf3n",variant:"outlined",onChange:function(e){b(e.target.value)},value:u}),Object(p.jsx)(j.a,{type:"submit",variant:"contained",children:"Agregar"})]})},N=function(e){var t=e.list,a=e.onCreateMunicipi,n=Object(m.h)().id,c=parseInt(n),i=t.find((function(e){return e.id===c}));if(!i)return Object(p.jsx)(m.a,{to:"/404"});var s=i.title,r=i.img,o=i.description,l=i.mapImg,d=i.munici;return Object(p.jsxs)("div",{children:[Object(p.jsx)(x,{id:c,img:r,title:s,mapImg:l,description:o,type:"detail"}),Object(p.jsxs)("h1",{children:["Municipios: ",d.length]}),Object(p.jsx)(C,{onCreate:function(e){a(c,e)}})]})},_=a(62),I=function(e){return Object(_.a)(e),Object(p.jsx)("div",{children:"Not found"})};var D=function(){var e=c.a.useState("create"),t=Object(l.a)(e,2),a=t[0],n=t[1],i=c.a.useState(null),s=Object(l.a)(i,2),d=s[0],j=s[1],u=c.a.useState([{id:0,img:"https://alponiente.com/wp-content/uploads/2018/06/valle_del_cauca-990x556.jpg",title:"Valle Del Cauca",description:"Valle del Cauca es un departamento del suroeste de Colombia. Tiene playas a lo largo de su costa en el oc\xe9ano Pac\xedfico, mientras que en el interior est\xe1 la cordillera de los Andes.",mapImg:"",munici:[]}]),C=Object(l.a)(u,2),_=C[0],D=C[1],y=function(e){var t=_.filter((function(t){return t.id!==e}));D(t)},S=function(e){j(e),n("edit")};return Object(p.jsx)(h.a,{children:Object(p.jsxs)("div",{className:"App",children:[Object(p.jsxs)("div",{className:"App__nav",children:[Object(p.jsx)(h.b,{to:"/home",children:Object(p.jsx)("img",{src:g})}),Object(p.jsxs)("div",{className:"App__link",children:[Object(p.jsx)(O,{text:"Inicio",url:"/home"}),Object(p.jsx)(O,{text:"Formulario",url:"/form"}),Object(p.jsx)(O,{text:"Departamentos",url:"/depar"}),Object(p.jsx)(O,{text:"Lugares",url:"/places"})]}),Object(p.jsx)(f.a,{sx:{bgcolor:A.a[500]},children:"PO"})]}),Object(p.jsxs)(m.d,{children:[Object(p.jsxs)(m.b,{path:"/home",children:[Object(p.jsx)("section",{className:"App__banner",children:Object(p.jsx)("p",{className:"App__text",children:"Viajes inolvidables experiencias de viaje con un impacto positivo"})}),Object(p.jsxs)("section",{className:"App__depar",children:[Object(p.jsxs)("div",{className:"App_depar-text",children:[Object(p.jsx)("h2",{children:"Municipios"}),Object(p.jsx)("p",{children:"Conoce los mejores lugares de cada municipio de nuestro pa\xeds."})]}),Object(p.jsx)("div",{className:"App_depar-list",children:_.map((function(e){return Object(p.jsx)(x,{id:e.id,img:e.img,title:e.title,description:e.description,mapImg:e.mapImg,type:"edit",onDelate:y,onEdit:S})}))})]})]}),Object(p.jsx)(m.b,{path:"/form",children:Object(p.jsx)("section",{className:"App__forms",children:Object(p.jsx)(b,{type:a,onCreate:function(e){var t=_.slice();t.push({id:Math.random(),img:e.img,title:e.title,description:e.description,mapImg:e.mapImg,munici:[]}),D(t)},editId:d,onEdit:function(e,t){var a=_.slice(),n=_.findIndex((function(t){return t.id===e}));a[n]=Object(o.a)(Object(o.a)({},_[n]),t),D(a)}})})}),Object(p.jsx)(m.b,{path:"/depar",children:Object(p.jsxs)("section",{className:"App__banner--depar",children:[Object(p.jsxs)("div",{className:"App__banner--text",children:[Object(p.jsxs)("p",{children:[" ",Object(p.jsx)("b",{children:"32"})," Departamentos por recorrer"]}),Object(p.jsx)("img",{src:v})]}),Object(p.jsx)("section",{children:Object(p.jsxs)("div",{className:"App__depar--contenedor",style:{backgroundImage:'url("https://lh3.googleusercontent.com/-DpRrUDs3yvY/YWe1gOhJV_I/AAAAAAAAH0g/G7XSIg0BTzkE3P8M1aA08WnsrXDLmq_TwCLcBGAsYHQ/ValleDelCauca.png")'},children:[Object(p.jsx)("img",{src:"https://1.bp.blogspot.com/-ou0sfTKMsgc/YWcdNxNDAZI/AAAAAAAAH0Y/G2acAc-NpNANxw0i7AT-D3II2Ber2vwBwCLcBGAsYHQ/s320/ValleDelCauca.png"}),Object(p.jsx)("h3",{children:"Valle del cauca"})]})})]})}),Object(p.jsx)(m.b,{path:"/details/:id",children:Object(p.jsx)(N,{list:_,onCreateMunicipi:function(e,t){var a=_.slice(),n=_.findIndex((function(t){return t.id===e}));a[n]=Object(o.a)(Object(o.a)({},_[n]),{},{munici:[].concat(Object(r.a)(_[n].munici),[t])}),D(a)}})}),Object(p.jsx)(m.b,{path:"/404",children:Object(p.jsx)(I,{})}),Object(p.jsx)(m.a,{to:"/home"})]})]})})},y=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,142)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,i=t.getLCP,s=t.getTTFB;a(e),n(e),c(e),i(e),s(e)}))};s.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(D,{})}),document.getElementById("root")),y()}},[[89,1,2]]]);
//# sourceMappingURL=main.c5f9afcc.chunk.js.map