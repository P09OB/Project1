(this["webpackJsonpproyecto-1"]=this["webpackJsonpproyecto-1"]||[]).push([[0],{107:function(e,t,a){},113:function(e,t,a){},115:function(e,t,a){},116:function(e,t,a){},117:function(e,t,a){},119:function(e,t,a){},120:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),i=a(35),r=a.n(i),s=(a(107),a(17)),o=a(38),l=a(9),d=a(171),u=a(176),j=a(172),p=(a(74),a(1)),m=function(e){var t=e.editId,a=e.type,c=e.onCreate,i=e.onEdit,r=n.a.useState(!1),s=Object(l.a)(r,2),o=s[0],m=s[1],b=n.a.useState(""),h=Object(l.a)(b,2),g=h[0],x=h[1],O=n.a.useState(""),A=Object(l.a)(O,2),f=A[0],v=A[1],C=n.a.useState(""),N=Object(l.a)(C,2),D=N[0],y=N[1],I=n.a.useState(""),_=Object(l.a)(I,2),T=_[0],L=_[1],S=f.length>=10,w=g.length>=2,Y=D.length>=20,B=Object(j.a)({root:{margin:"10px 0 0 0"}});return Object(p.jsxs)("form",{className:"DeparElemForm",onSubmit:function(e){e.preventDefault(),m(!0),"create"===a&&Y&&w&&S?(c({img:f,title:g,mapImg:T,description:D}),x(""),v(""),y(""),L(""),m(!1)):"edit"===a&&Y&&S?i(t,{img:f,description:D}):console.log("invalid")},children:[Object(p.jsxs)("h2",{children:[" ","create"===a?"Agregar":"Editar"," Elemento"]}),"create"===a&&Object(p.jsx)(d.a,{name:"title",label:"Departamento",variant:"outlined",className:"input",type:"text",color:"secondary",onChange:function(e){x(e.target.value)},value:g,error:!w&&o,helperText:!w&&o?"El titulo contiene menos de 10 caracteres":""}),Object(p.jsx)(d.a,{name:"Image",type:"text",label:"URL Imagen",variant:"outlined",color:"secondary",className:B().root,onChange:function(e){v(e.target.value)},value:f,error:o&&!S,helperText:o&&!S?"La URL contiene menos de 10 caracteres":""}),Object(p.jsx)(d.a,{name:"Logo",type:"text",label:"URL Croquis",className:B().root,variant:"outlined",color:"secondary",onChange:function(e){L(e.target.value)},value:T,error:o&&!S,helperText:o&&!S?"La URL contiene menos de 10 caracteres":""}),Object(p.jsx)(d.a,{name:"Description",type:"text",label:"Descripci\xf3n",variant:"outlined",color:"secondary",className:B().root,onChange:function(e){y(e.target.value)},value:D,error:!Y&&o,helperText:!Y&&o?"La URL contiene menos de 10 caracteres":""}),Object(p.jsx)(u.a,{type:"submit",variant:"contained",color:"secondary",className:B().root,children:"create"===a?"Agregar nuevo elemento":"Guardar cambios"})]})},b=(a(113),a(14)),h=a(177),g=a(84),x=a.n(g),O=a(85),A=a.n(O),f=function(e){var t,a=e.id,c=e.img,n=e.title,i=(e.description,e.mapImg),r=e.onDelate,s=e.onEdit,o=e.type,l=e.format,d=Object(b.g)();return t="slide"===l?"depar_contenedor--big":"depar_contenedor",Object(p.jsxs)("div",{className:t,style:{backgroundImage:'url("'.concat(c,'")')},children:["edit"===o&&Object(p.jsxs)("div",{children:[r&&Object(p.jsx)(h.a,{"aria-label":"delete",color:"primary",onClick:function(){r&&r(a)},children:Object(p.jsx)(x.a,{})}),s&&Object(p.jsx)(h.a,{"aria-label":"delete",color:"primary",onClick:function(){s&&s(a)},children:Object(p.jsx)(A.a,{})})]}),Object(p.jsxs)("div",{className:"depar__elem",onClick:function(){d.push("/details/".concat(a))},children:[Object(p.jsx)("img",{src:i}),"slide"===l&&Object(p.jsx)("p",{className:"depar_contenedor--text",children:"Quiero explorar"}),Object(p.jsx)("h2",{className:"depar_contenedor--text",children:n})]})]})},v=a(24),C=(a(115),function(e){return Object(p.jsx)(v.b,{className:"link",activeClassName:"link--active",to:e.url,children:e.text})}),N=a.p+"static/media/logo.17d4cc91.svg",D=a.p+"static/media/croquis.ffb02d47.svg",y=(a(116),a(175)),I=a(39),_=(a(117),function(e){var t=e.id,a=(e.idDepar,e.title),c=e.description,n=e.img,i=Object(b.g)();return Object(p.jsx)(p.Fragment,{children:Object(p.jsx)("div",{className:"Munici__component",style:{backgroundImage:'url("'.concat(n,'")')},children:Object(p.jsxs)("div",{className:"Munici__place",children:[Object(p.jsx)("h1",{className:"Munici--title",children:a}),Object(p.jsx)("p",{className:"Munici--desc",children:c}),Object(p.jsx)("button",{className:"Munici--button",onClick:function(){i.push("/municipio/".concat(t))},children:"IR A"})]})})})}),T=function(e){var t=e.onCreate,a=Object(b.h)().id,n=parseFloat(a),i=c.useState(""),r=Object(l.a)(i,2),s=r[0],o=r[1],j=c.useState(""),m=Object(l.a)(j,2),h=m[0],g=m[1],x=c.useState(""),O=Object(l.a)(x,2),A=O[0],f=O[1],v=c.useState(""),C=Object(l.a)(v,2),N=C[0],D=C[1];return Object(p.jsxs)("form",{className:"DeparElemForm",onSubmit:function(e){e.preventDefault();var a={id:Math.random(),idDepar:n,title:s,weather:A,description:h,img:N};t(a)},children:[Object(p.jsx)(d.a,{name:"title",label:"Departamento",variant:"outlined",className:"input",type:"text",color:"secondary",onChange:function(e){o(e.target.value)},value:s}),Object(p.jsx)(d.a,{name:"weather",label:"Clima",variant:"outlined",className:"input",type:"text",color:"secondary",onChange:function(e){f(e.target.value)},value:A}),Object(p.jsx)(d.a,{name:"Imagen",label:"URL",variant:"outlined",className:"input",type:"text",color:"secondary",onChange:function(e){D(e.target.value)},value:N}),Object(p.jsx)(d.a,{name:"Description",type:"text",label:"Descripci\xf3n",variant:"outlined",color:"secondary",onChange:function(e){g(e.target.value)},value:h}),Object(p.jsx)(u.a,{type:"submit",variant:"contained",children:"Agregar"})]})},L=a(56),S=(a(119),function(e){var t=e.list,a=e.onCreateMunicipi,c=Object(b.h)().id,n=parseFloat(c),i=t.find((function(e){return e.id===n}));if(!i)return Object(p.jsx)(b.a,{to:"/404"});var r=i.title,s=i.img,o=i.description,l=i.mapImg,d=i.munici;return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(f,{id:n,img:s,title:r,mapImg:l,description:o,type:"detail",format:"slide"}),Object(p.jsxs)("div",{className:"container",children:[Object(p.jsx)("div",{className:"container--details",children:Object(p.jsx)("p",{className:"container--details--text",children:o})}),Object(p.jsx)("h1",{children:d.length}),Object(p.jsx)(L.a,{isRTL:!1,itemsToShow:2,children:d.map((function(e){return Object(p.jsx)(_,{id:e.id,idDepar:n,title:e.title,weather:e.weather,description:e.description,img:e.img})}))})]}),Object(p.jsx)("h2",{className:"container--title",children:"Agregar Municipio"}),Object(p.jsx)(T,{onCreate:function(e){a(n,e)}})]})}),w=a(90),Y=function(e){return Object(w.a)(e),Object(p.jsx)("div",{children:"Not found"})},B=function(e){var t=e.onCreate,a=e.id,n=e.idDepar,i=c.useState(""),r=Object(l.a)(i,2),s=r[0],o=r[1],j=c.useState(""),m=Object(l.a)(j,2),b=m[0],h=m[1],g=c.useState(""),x=Object(l.a)(g,2),O=x[0],A=x[1];return Object(p.jsxs)("form",{onSubmit:function(e){e.preventDefault();var c={id:Math.random(),idDepar:n,idMunici:a,name:s,coordinates:O,score:0,descriptionPlace:b};t(c)},children:[Object(p.jsx)(d.a,{name:"title",label:"Nombre del lugar",variant:"outlined",className:"input",type:"text",color:"secondary",onChange:function(e){o(e.target.value)},value:s}),Object(p.jsx)(d.a,{name:"Description",label:"Descripci\xf3n",variant:"outlined",className:"input",type:"text",color:"secondary",onChange:function(e){h(e.target.value)},value:b}),Object(p.jsx)(d.a,{name:"location",label:"ubicaci\xf3n",variant:"outlined",className:"input",type:"text",color:"secondary",onChange:function(e){A(e.target.value)},value:O}),Object(p.jsx)(u.a,{type:"submit",variant:"contained",children:"Agregar"})]})},F=function(e){var t=e.id,a=e.name,c=e.coordinates,n=(e.score,e.description,Object(b.g)());return Object(p.jsxs)("div",{children:[Object(p.jsx)("h2",{children:a}),Object(p.jsx)("p",{children:c}),Object(p.jsx)(u.a,{onClick:function(){n.push("/place/".concat(t))},variant:"contained",children:"Ir"})]})},M=function(e){var t=e.list,a=e.listPlace,c=e.onCreatePlace,n=Object(b.h)().id,i=parseFloat(n),r=t.find((function(e){return e.id===i}));if(!r)return Object(p.jsx)(b.a,{to:"/404"});var s=r.idDepar,o=r.title,l=r.weather,d=r.description,u=r.img,j=a.filter((function(e){return e.idMunici===i}));return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("img",{src:u}),Object(p.jsx)("p",{children:o}),Object(p.jsx)("p",{children:d}),Object(p.jsx)("p",{children:l}),j.map((function(e){return Object(p.jsx)(F,{id:e.id,name:e.name,coordinates:e.coordinates,score:e.score,description:e.descriptionPlace})})),Object(p.jsx)(B,{id:i,idDepar:s,onCreate:function(e){c(s,e)}})]})},V=function(e){var t=e.listPlace,a=Object(b.h)().id,c=parseFloat(a),n=t.find((function(e){return e.id===c}));if(!n)return Object(p.jsx)(b.a,{to:"/404"});var i=n.name,r=n.coordinates,s=n.score,o=n.descriptionPlace;return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("p",{children:i}),Object(p.jsx)("p",{children:r}),Object(p.jsx)("p",{children:s}),Object(p.jsx)("p",{children:o})]})};var P=function(){var e=n.a.useState("create"),t=Object(l.a)(e,2),a=t[0],c=t[1],i=n.a.useState(null),r=Object(l.a)(i,2),d=r[0],u=r[1],j=n.a.useState([{id:0,img:"https://lh3.googleusercontent.com/-DpRrUDs3yvY/YWe1gOhJV_I/AAAAAAAAH0g/G7XSIg0BTzkE3P8M1aA08WnsrXDLmq_TwCLcBGAsYHQ/ValleDelCauca.png",title:"Valle Del Cauca",description:"Valle del Cauca es un departamento del suroeste de Colombia. Tiene playas a lo largo de su costa en el oc\xe9ano Pac\xedfico, mientras que en el interior est\xe1 la cordillera de los Andes.",mapImg:"https://1.bp.blogspot.com/-ou0sfTKMsgc/YWcdNxNDAZI/AAAAAAAAH0Y/G2acAc-NpNANxw0i7AT-D3II2Ber2vwBwCLcBGAsYHQ/s320/ValleDelCauca.png",munici:[],place:[]},{id:1,img:"https://lh3.googleusercontent.com/-DpRrUDs3yvY/YWe1gOhJV_I/AAAAAAAAH0g/G7XSIg0BTzkE3P8M1aA08WnsrXDLmq_TwCLcBGAsYHQ/ValleDelCauca.png",title:"Valle Del Cauca",description:"Valle del Cauca es un departamento del suroeste de Colombia. Tiene playas a lo largo de su costa en el oc\xe9ano Pac\xedfico, mientras que en el interior est\xe1 la cordillera de los Andes.",mapImg:"https://1.bp.blogspot.com/-ou0sfTKMsgc/YWcdNxNDAZI/AAAAAAAAH0Y/G2acAc-NpNANxw0i7AT-D3II2Ber2vwBwCLcBGAsYHQ/s320/ValleDelCauca.png",munici:[],place:[]},{id:2,img:"https://lh3.googleusercontent.com/-DpRrUDs3yvY/YWe1gOhJV_I/AAAAAAAAH0g/G7XSIg0BTzkE3P8M1aA08WnsrXDLmq_TwCLcBGAsYHQ/ValleDelCauca.png",title:"Valle Del Cauca",description:"Valle del Cauca es un departamento del suroeste de Colombia. Tiene playas a lo largo de su costa en el oc\xe9ano Pac\xedfico, mientras que en el interior est\xe1 la cordillera de los Andes.",mapImg:"https://1.bp.blogspot.com/-ou0sfTKMsgc/YWcdNxNDAZI/AAAAAAAAH0Y/G2acAc-NpNANxw0i7AT-D3II2Ber2vwBwCLcBGAsYHQ/s320/ValleDelCauca.png",munici:[],place:[]},{id:3,img:"https://lh3.googleusercontent.com/-DpRrUDs3yvY/YWe1gOhJV_I/AAAAAAAAH0g/G7XSIg0BTzkE3P8M1aA08WnsrXDLmq_TwCLcBGAsYHQ/ValleDelCauca.png",title:"Valle Del Cauca",description:"Valle del Cauca es un departamento del suroeste de Colombia. Tiene playas a lo largo de su costa en el oc\xe9ano Pac\xedfico, mientras que en el interior est\xe1 la cordillera de los Andes.",mapImg:"https://1.bp.blogspot.com/-ou0sfTKMsgc/YWcdNxNDAZI/AAAAAAAAH0Y/G2acAc-NpNANxw0i7AT-D3II2Ber2vwBwCLcBGAsYHQ/s320/ValleDelCauca.png",munici:[],place:[]}]),h=Object(l.a)(j,2),g=h[0],x=h[1],O=function(e){var t=g.filter((function(t){return t.id!==e}));x(t)},A=function(e){u(e),c("edit")},_=[],T=[];return g.forEach((function(e){e.munici.forEach((function(e){_.push(e)}))})),g.forEach((function(e){e.place.forEach((function(e){T.push(e)}))})),Object(p.jsx)(v.a,{children:Object(p.jsxs)("div",{className:"App",children:[Object(p.jsxs)("div",{className:"App__nav",children:[Object(p.jsx)(v.b,{to:"/home",children:Object(p.jsx)("img",{src:N})}),Object(p.jsxs)("div",{className:"App__link",children:[Object(p.jsx)(C,{text:"Inicio",url:"/home"}),Object(p.jsx)(C,{text:"Formulario",url:"/form"}),Object(p.jsx)(C,{text:"Departamentos",url:"/depar"}),Object(p.jsx)(C,{text:"Lugares",url:"/places"})]}),Object(p.jsx)(y.a,{sx:{bgcolor:I.a[500]},children:"PO"})]}),Object(p.jsxs)(b.d,{children:[Object(p.jsxs)(b.b,{path:"/home",children:[Object(p.jsx)("section",{className:"App__banner",children:Object(p.jsx)("p",{className:"App__text",children:"Viajes inolvidables experiencias de viaje con un impacto positivo"})}),Object(p.jsx)("section",{children:Object(p.jsx)(L.a,{isRTL:false,itemsToShow:1,children:g.map((function(e){return Object(p.jsx)(f,{id:e.id,img:e.img,title:e.title,description:e.description,mapImg:e.mapImg,type:"detail",format:"slide",onDelate:O,onEdit:A})}))})})]}),Object(p.jsx)(b.b,{path:"/form",children:Object(p.jsx)("section",{className:"App__forms",children:Object(p.jsx)(m,{type:a,onCreate:function(e){var t=g.slice();t.push({id:Math.random(),img:e.img,title:e.title,description:e.description,mapImg:e.mapImg,munici:[],place:[]}),x(t)},editId:d,onEdit:function(e,t){var a=g.slice(),c=g.findIndex((function(t){return t.id===e}));a[c]=Object(o.a)(Object(o.a)({},g[c]),t),x(a)}})})}),Object(p.jsx)(b.b,{path:"/depar",children:Object(p.jsxs)("section",{className:"App__banner--depar",children:[Object(p.jsxs)("div",{className:"App__banner--text",children:[Object(p.jsxs)("p",{children:[" ",Object(p.jsx)("b",{children:"32"})," Departamentos por recorrer"]}),Object(p.jsx)("img",{src:D})]}),Object(p.jsx)("section",{className:"App__depar",children:g.map((function(e){return Object(p.jsx)(f,{id:e.id,img:e.img,title:e.title,description:e.description,mapImg:e.mapImg,type:"edit",format:"card",onDelate:O,onEdit:A})}))})]})}),Object(p.jsx)(b.b,{path:"/details/:id",children:Object(p.jsx)(S,{list:g,onCreateMunicipi:function(e,t){var a=g.slice(),c=g.findIndex((function(t){return t.id===e}));console.log(e),a[c]=Object(o.a)(Object(o.a)({},g[c]),{},{munici:[].concat(Object(s.a)(g[c].munici),[t])}),x(a)}})}),Object(p.jsx)(b.b,{path:"/municipio/:id",children:Object(p.jsx)(M,{listPlace:T,list:_,onCreatePlace:function(e,t){var a=g.slice(),c=g.findIndex((function(t){return t.id===e}));console.log(e),a[c]=Object(o.a)(Object(o.a)({},g[c]),{},{place:[].concat(Object(s.a)(g[c].place),[t])}),console.log(a),x(a)}})}),Object(p.jsx)(b.b,{path:"/place/:id",children:Object(p.jsx)(V,{listPlace:T})}),Object(p.jsx)(b.b,{path:"/404",children:Object(p.jsx)(Y,{})}),Object(p.jsx)(b.a,{to:"/home"})]})]})})},E=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,179)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,i=t.getLCP,r=t.getTTFB;a(e),c(e),n(e),i(e),r(e)}))},G=a(91),k=a(178),H=Object(G.a)({palette:{primary:{main:"#FFFFFF"},secondary:{main:"#09282F"}}});r.a.render(Object(p.jsx)(n.a.StrictMode,{children:Object(p.jsx)(k.a,{theme:H,children:Object(p.jsx)(P,{})})}),document.getElementById("root")),E()},74:function(e,t,a){}},[[120,1,2]]]);
//# sourceMappingURL=main.508acabb.chunk.js.map