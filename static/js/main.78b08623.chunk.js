(this["webpackJsonpproyecto-1"]=this["webpackJsonpproyecto-1"]||[]).push([[0],{112:function(e,t,a){},118:function(e,t,a){},120:function(e,t,a){},121:function(e,t,a){},122:function(e,t,a){},124:function(e,t,a){},125:function(e,t,a){},126:function(e,t,a){},127:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),i=a(37),r=a.n(i),o=(a(112),a(41)),s=a(16),l=a(8),d=a(175),u=a(181),m=a(176),j=(a(77),a(1)),p=function(e){var t=e.editId,a=e.type,n=e.onCreate,i=e.onEdit,r=c.a.useState(!1),o=Object(l.a)(r,2),s=o[0],p=o[1],b=c.a.useState(""),h=Object(l.a)(b,2),g=h[0],x=h[1],O=c.a.useState(""),f=Object(l.a)(O,2),v=f[0],_=f[1],A=c.a.useState(""),y=Object(l.a)(A,2),N=y[0],C=y[1],I=c.a.useState(""),D=Object(l.a)(I,2),M=D[0],L=D[1],E=v.length>=10,S=g.length>=2,P=N.length>=20,w=Object(m.a)({root:{margin:"10px 0 0 0"}});return Object(j.jsxs)("form",{className:"DeparElemForm",onSubmit:function(e){e.preventDefault(),p(!0),"create"===a&&P&&S&&E?(n({img:v,title:g,mapImg:M,description:N}),x(""),_(""),C(""),L(""),p(!1)):"edit"===a&&P&&E?i(t,{img:v,description:N}):console.log("invalid")},children:[Object(j.jsxs)("h2",{children:[" ","create"===a?"Agregar":"Editar"," Departamento"]}),"create"===a&&Object(j.jsx)(d.a,{name:"title",label:"Departamento",variant:"outlined",className:"input",type:"text",color:"secondary",onChange:function(e){x(e.target.value)},value:g,error:!S&&s,helperText:!S&&s?"El titulo contiene menos de 10 caracteres":""}),Object(j.jsx)(d.a,{name:"Image",type:"text",label:"URL Imagen",variant:"outlined",color:"secondary",className:w().root,onChange:function(e){_(e.target.value)},value:v,error:s&&!E,helperText:s&&!E?"La URL contiene menos de 10 caracteres":""}),Object(j.jsx)(d.a,{name:"Logo",type:"text",label:"URL Croquis",className:w().root,variant:"outlined",color:"secondary",onChange:function(e){L(e.target.value)},value:M,error:s&&!E,helperText:s&&!E?"La URL contiene menos de 10 caracteres":""}),Object(j.jsx)(d.a,{name:"Description",type:"text",label:"Descripci\xf3n",variant:"outlined",color:"secondary",className:w().root,onChange:function(e){C(e.target.value)},value:N,error:!P&&s,helperText:!P&&s?"La URL contiene menos de 10 caracteres":""}),Object(j.jsx)(u.a,{type:"submit",variant:"contained",color:"secondary",className:w().root,children:"create"===a?"Agregar nuevo elemento":"Guardar cambios"})]})},b=(a(118),a(14)),h=a(182),g=a(44),x=a.n(g),O=a(45),f=a.n(O),v=function(e){var t,a=e.id,n=e.img,c=e.title,i=(e.description,e.mapImg),r=e.onDelate,o=e.onEdit,s=e.type,l=e.format,d=Object(b.g)();return t="slide"===l?"depar_contenedor--big":"depar_contenedor",Object(j.jsxs)("div",{className:t,style:{backgroundImage:'url("'.concat(n,'")')},children:["edit"===s&&Object(j.jsxs)("div",{children:[r&&Object(j.jsx)(h.a,{"aria-label":"delete",color:"primary",onClick:function(){r&&r(a)},children:Object(j.jsx)(x.a,{})}),o&&Object(j.jsx)(h.a,{"aria-label":"delete",color:"primary",onClick:function(){o&&o(a)},children:Object(j.jsx)(f.a,{})})]}),Object(j.jsxs)("div",{className:"depar__elem",onClick:function(){d.push("/details/".concat(a))},children:[Object(j.jsx)("img",{className:"depar__elem--img",src:i}),"slide"===l&&Object(j.jsx)("p",{className:"depar_contenedor--text",children:"Quiero explorar"}),Object(j.jsx)("h2",{className:"depar_contenedor--text",children:c})]})]})},_=a(25),A=(a(120),function(e){return Object(j.jsx)(_.b,{className:"link",activeClassName:"link--active",to:e.url,children:e.text})}),y=a.p+"static/media/logo.17d4cc91.svg",N=a.p+"static/media/croquis.ffb02d47.svg",C=(a(121),a(180)),I=a(42),D=(a(122),function(e){var t=e.id,a=(e.idDepar,e.title),n=e.description,c=e.img,i=e.onDelate,r=e.onEdit,o=e.type,s=Object(b.g)();return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("div",{className:"Munici__component",style:{backgroundImage:'url("'.concat(c,'")')},children:Object(j.jsxs)("div",{className:"Munici__component",children:["edit"===o&&Object(j.jsxs)("div",{children:[i&&Object(j.jsx)(h.a,{"aria-label":"delete",color:"primary",onClick:function(){i&&i(t)},children:Object(j.jsx)(x.a,{})}),r&&Object(j.jsx)(h.a,{"aria-label":"edit",color:"primary",onClick:function(){r&&r(t)},children:Object(j.jsx)(f.a,{})})]}),Object(j.jsxs)("div",{className:"Munici__place",children:[Object(j.jsx)("h1",{className:"Munici--title",children:a}),Object(j.jsx)("p",{className:"Munici--desc",children:n}),Object(j.jsx)("button",{className:"Munici--button",onClick:function(){s.push("/municipio/".concat(t))},children:"Conoce m\xe1s"})]})]})})})}),M=function(e){var t=e.onCreate,a=Object(b.h)().id,c=parseFloat(a),i=n.useState(!1),r=Object(l.a)(i,2),o=r[0],s=r[1],m=n.useState(""),p=Object(l.a)(m,2),h=p[0],g=p[1],x=n.useState(""),O=Object(l.a)(x,2),f=O[0],v=O[1],_=n.useState(""),A=Object(l.a)(_,2),y=A[0],N=A[1],C=n.useState(""),I=Object(l.a)(C,2),D=I[0],M=I[1],L=([].map((function(e){return{label:e}})),h.length>=2),E=D.length>=10,S=f.length>=20,P=y.length>=3;return Object(j.jsxs)("form",{className:"DeparElemForm",onSubmit:function(e){e.preventDefault(),s(!0);var a={id:Math.random(),idDepar:c,title:h,weather:y,description:f,img:D};L&&E&&S&&P&&(t(a),g(""),v(""),N(""),M(""),s(!1))},children:[Object(j.jsx)(d.a,{name:"title",label:"Departamento",variant:"outlined",className:"input",type:"text",color:"secondary",onChange:function(e){g(e.target.value)},value:h,error:!L&&o,helperText:!L&&o?"El titulo contiene menos de 10 caracteres":""}),Object(j.jsx)(d.a,{name:"weather",label:"Temperatura promedio",variant:"outlined",className:"input",type:"text",color:"secondary",onChange:function(e){N(e.target.value)},value:y,error:!P&&o,helperText:!P&&o?"La temperatura no puede contener mas de 3 caracteres":""}),Object(j.jsx)(d.a,{name:"image",label:"URL Imagen",variant:"outlined",className:"input",type:"text",color:"secondary",onChange:function(e){M(e.target.value)},value:D,error:o&&!E,helperText:o&&!E?"La URL contiene menos de 10 caracteres":""}),Object(j.jsx)(d.a,{name:"Description",type:"text",label:"Descripci\xf3n",variant:"outlined",color:"secondary",onChange:function(e){v(e.target.value)},value:f,error:!S&&o,helperText:!S&&o?"La URL contiene menos de 10 caracteres":""}),Object(j.jsx)(u.a,{type:"submit",variant:"contained",children:"Agregar"})]})},L=a(40),E=(a(124),function(e){var t=e.list,a=e.onCreateMunicipi,n=e.onDelate,c=e.onEdit,i=Object(b.h)().id,r=parseFloat(i),o=t.find((function(e){return e.id===r}));if(!o)return Object(j.jsx)(b.a,{to:"/404"});var s=o.title,l=o.img,d=o.description,u=o.mapImg,m=o.munici,p=function(e){n(r,e)},h=function(e){};return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(v,{id:r,img:l,title:s,mapImg:u,description:d,type:"detail",format:"slide"}),Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("div",{className:"container--details",children:Object(j.jsx)("p",{className:"container--details--text",children:d})}),Object(j.jsx)(L.a,{isRTL:!1,itemsToShow:2,children:m.map((function(e){return Object(j.jsx)(D,{id:e.id,idDepar:r,title:e.title,weather:e.weather,description:e.description,img:e.img,onDelate:p,onEdit:h,type:"edit"})}))})]}),Object(j.jsx)("h2",{className:"container--title",children:"Agregar Municipio"}),Object(j.jsx)(M,{onCreate:function(e){a(r,e)},onEdit:function(e,t){c(r,e,t)}})]})}),S=a(93),P=function(e){return Object(S.a)(e),Object(j.jsx)("div",{children:"Not found"})},w=function(e){var t=e.onCreate,a=e.id,c=e.idDepar,i=(e.onEdit,e.type),r=n.useState(!1),o=Object(l.a)(r,2),s=o[0],p=o[1],b=n.useState(""),h=Object(l.a)(b,2),g=h[0],x=h[1],O=n.useState(""),f=Object(l.a)(O,2),v=f[0],_=f[1],A=n.useState(""),y=Object(l.a)(A,2),N=y[0],C=y[1],I=n.useState(""),D=Object(l.a)(I,2),M=D[0],L=D[1],E=M.length>=10,S=g.length>=2,P=v.length>=20,w=N.length>=10;return Object(j.jsxs)("form",{className:"DeparElemForm",onSubmit:function(e){e.preventDefault(),p(!0);var n={id:Math.random(),idDepar:c,idMunici:a,name:g,coordinates:N,score:0,descriptionPlace:v,img:M};E&&S&&P&&w&&(t(n),x(""),C(""),_(""),L(""),p(!1));Object(m.a)({root:{margin:"10px 0 0 0"}})},children:[Object(j.jsxs)("h2",{children:[" ","create"===i?"Agregar":"Editar"," un nuevo lugar"]}),Object(j.jsx)(d.a,{name:"title",label:"Nombre del lugar",variant:"outlined",className:"input",type:"text",color:"secondary",onChange:function(e){x(e.target.value)},value:g,error:!S&&s,helperText:!S&&s?"El titulo contiene menos de 10 caracteres":""}),Object(j.jsx)(d.a,{name:"Description",label:"Descripci\xf3n",variant:"outlined",className:"input",type:"text",color:"secondary",onChange:function(e){_(e.target.value)},value:v,error:!P&&s,helperText:!P&&s?"La URL contiene menos de 10 caracteres":""}),Object(j.jsx)(d.a,{name:"location",label:"ubicaci\xf3n",variant:"outlined",className:"input",type:"text",color:"secondary",onChange:function(e){C(e.target.value)},value:N,error:s&&!w,helperText:s&&!w?"La location contiene menos de 10 caracteres":""}),Object(j.jsx)(d.a,{name:"img",label:"URL Imagen",variant:"outlined",className:"input",type:"text",color:"secondary",onChange:function(e){L(e.target.value)},value:M,error:s&&!E,helperText:s&&!E?"La URL contiene menos de 10 caracteres":""}),Object(j.jsx)(u.a,{type:"submit",variant:"contained",children:"Agregar"})]})},T=a(178),F=(a(125),function(e){var t=e.id,a=e.name,n=(e.coordinates,e.score),i=e.img,r=e.description,o=e.format,s=e.onDelate,d=e.type,u=e.onEdit,m=Object(b.g)(),p=c.a.useState(2),g=Object(l.a)(p,2);g[0],g[1];return Object(j.jsxs)(j.Fragment,{children:["card"===o&&Object(j.jsxs)("div",{className:"Place__component",style:{backgroundImage:'url("'.concat(i,'")')},children:["edit"===d&&Object(j.jsxs)("div",{className:"Place__component--edit",children:[s&&Object(j.jsx)(h.a,{"aria-label":"delete",color:"primary",onClick:function(){s&&s(t)},children:Object(j.jsx)(x.a,{})}),u&&Object(j.jsx)(h.a,{"aria-label":"edit",color:"primary",onClick:function(){u&&u(t)},children:Object(j.jsx)(f.a,{})})]}),Object(j.jsxs)("div",{className:"Place__component--info",onClick:function(){m.push("/place/".concat(t))},children:[Object(j.jsx)("h2",{children:a}),Object(j.jsx)(T.a,{name:"no-value",value:n,readOnly:!0})]})]}),"slide"===o&&Object(j.jsxs)("div",{className:"Place__component--slide",children:[Object(j.jsx)("div",{className:"Place__component--img",style:{backgroundImage:'url("'.concat(i,'")')},children:Object(j.jsx)("h2",{children:a})}),Object(j.jsx)("p",{className:"Place__component--des",children:r}),Object(j.jsx)("button",{className:"Place--button",children:"Conoce m\xe1s"})]})]})}),k=a.p+"static/media/cloudy.a62dd05d.svg",R=a.p+"static/media/location.c6eaaaf0.svg",Y=(a(126),function(e){var t=e.list,a=e.listPlace,n=e.onCreatePlace,c=e.onDelate,i=Object(b.h)().id,r=parseFloat(i),o=t.find((function(e){return e.id===r}));if(!o)return Object(j.jsx)(b.a,{to:"/404"});var s=o.idDepar,l=o.title,d=o.weather,u=o.description,m=o.img,p=a.filter((function(e){return e.idMunici===r})),h=function(e){c(s,e)},g=function(){};return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:"Munici__component--big",style:{backgroundImage:'url("'.concat(m,'")')},children:Object(j.jsx)("div",{className:"Munici__component--big",children:Object(j.jsxs)("div",{className:"Munici__component--box",children:[Object(j.jsxs)("div",{className:"Munici__component--info",children:[Object(j.jsx)("p",{className:"Munici__component--title",children:l}),Object(j.jsx)("p",{className:"Munici__component--des",children:u}),Object(j.jsxs)("div",{className:"Munici__component--status",children:[Object(j.jsx)("img",{src:k}),Object(j.jsxs)("p",{className:"Munici__component--text",children:[d," C\xb0"]})]}),Object(j.jsxs)("div",{className:"Munici__component--status",children:[Object(j.jsx)("img",{src:R}),Object(j.jsxs)("p",{className:"Munici__component--text",children:[l,", Colombia"]})]})]}),Object(j.jsx)(L.a,{isRTL:!1,itemsToShow:3,children:p.map((function(e){return Object(j.jsx)(F,{id:e.id,img:e.img,name:e.name,coordinates:e.coordinates,score:e.score,description:e.descriptionPlace,format:"card",onDelate:h,onEdit:g,type:"edit"})}))})]})})}),Object(j.jsx)(w,{id:r,idDepar:s,onCreate:function(e){n(s,e)},onEdit:function(e,t){throw new Error("Function not implemented.")},type:"create"})]})}),q=function(e){var t=e.listPlace,a=Object(b.h)().id,n=parseFloat(a),c=t.find((function(e){return e.id===n}));if(!c)return Object(j.jsx)(b.a,{to:"/404"});var i=c.name,r=c.coordinates,o=(c.score,c.descriptionPlace),s=c.img;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:"Munici__component--big",style:{backgroundImage:'url("'.concat(s,'")')},children:Object(j.jsx)("div",{className:"Munici__component--big",children:Object(j.jsxs)("div",{className:"Munici__component--bigEdit",children:[Object(j.jsx)("p",{className:"Place__component--bigEdit",children:i}),Object(j.jsxs)("div",{className:"Place__component--boxPlace",children:[Object(j.jsx)("img",{src:R}),Object(j.jsxs)("a",{className:"Place__component--location",href:r,children:["  ",i,", Colombia"]})]})]})})}),Object(j.jsxs)("section",{className:"Place__component-info",children:[Object(j.jsx)("img",{className:"Place__component--imagen",src:s}),Object(j.jsx)("p",{className:"Place__component--text",children:o})]})]})};var U=function(){var e=c.a.useState("create"),t=Object(l.a)(e,2),a=t[0],n=t[1],i=c.a.useState(null),r=Object(l.a)(i,2),d=r[0],u=r[1],m=c.a.useState([{id:0,img:"https://lh3.googleusercontent.com/-DpRrUDs3yvY/YWe1gOhJV_I/AAAAAAAAH0g/G7XSIg0BTzkE3P8M1aA08WnsrXDLmq_TwCLcBGAsYHQ/ValleDelCauca.png",title:"Valle Del Cauca",description:"Valle del Cauca es un departamento del suroeste de Colombia. Tiene playas a lo largo de su costa en el oc\xe9ano Pac\xedfico, mientras que en el interior est\xe1 la cordillera de los Andes.",mapImg:"https://lh3.googleusercontent.com/-U9y4fsOqYpQ/YYndVTc4sdI/AAAAAAAAH20/G6PyFPm1zh04XpM5XOVpqE40Ijq65tMhACLcBGAsYHQ/MapValle.png",munici:[{id:.3,idDepar:0,title:"Cali",weather:"20",description:"Es conocida por el baile de la salsa, del que hay muchos clubes en el suburbio de Juanchito.",img:"https://blogs.iadb.org/ciudades-sostenibles/wp-content/uploads/sites/17/2016/04/cali-3.jpg"},{id:.5,idDepar:0,title:"Ginebra",weather:"18",description:"Es conocida a nivel internacional por su sancocho de gallina, por la producci\xf3n de uva isabella y por el festival Mono N\xfa\xf1ez. Es la ciudad natal del portero Miguel Calero.",img:"https://elturismoencolombia.com/wp-content/uploads/2017/10/ginebra_iglesia_nuestra_se%C3%B1ora_del_rosario_valle_turismo_colombia_travel.jpg"},{id:.6,idDepar:0,title:"Buga",weather:"23",description:"Es conocida por su Bas\xedlica del Se\xf1or de los Milagros de comienzos del siglo XX, un sitio de peregrinaci\xf3n que alberga una imagen sagrada de Cristo que se cree que hace milagros",img:"https://www.las2orillas.co/wp-content/uploads/2017/11/buga_0.jpg"}],place:[{id:.33,idDepar:0,idMunici:.3,name:"Cristo Rey",coordinates:"https://www.google.com/maps/dir//Cristo+Rey+Cali,+Via+a+Cristo+Rey,+Cali,+Valle+del+Cauca/@3.4320701,-76.5692172,14z/data=!4m9!4m8!1m0!1m5!1m1!1s0x8e30a42b7a2d7127:0x3c59ada77403b687!2m2!1d-76.5649183!2d3.4358061!3e0",score:.04,descriptionPlace:"es una estatua de 26 metros de altura ubicada en el Cerro los Cristales a 1440 msnm en el corregimiento Los Andes, al occidente de la ciudad de Santiago de Cali, Colombia. ",img:"https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQjutPqV8UD5MIbamcPKb1UlYS9cxka1ZbeOb6k2PPnGd3liT6VTcN5ME7Sm86-HjTkKrMFVRVT1ol4ELIc0pcSeg"}]},{id:1,img:"https://lh3.googleusercontent.com/-McqWm9Q4KbQ/YYnLB2CE_ZI/AAAAAAAAH1U/F-W2J9Xrlh8LkgbrC4pAlo19XIv6aGjrQCLcBGAsYHQ/boyaca.png",title:"Boyaca",description:"Tiene ciudades coloniales que se destacan por su arquitectura y fue el lugar de victorias cruciales durante la lucha de Colombia por su independencia. ",mapImg:"https://lh3.googleusercontent.com/-sSL8PNBRe6s/YYndVSy98BI/AAAAAAAAH24/kXAm_IyA-_YhC3J5yVndQ8RuOay_nHrBQCLcBGAsYHQ/MapBoyaca.png",munici:[],place:[]},{id:2,img:"https://lh3.googleusercontent.com/-XVYG9-exyZM/YYnXwmSadsI/AAAAAAAAH2Q/y7kmgoYYkd8DGOzIB3dsItOF4FvnV6nZwCLcBGAsYHQ/AMAZONAS.png",title:"Amazonas",description:"La Amazonia Colombiana es un lugar incre\xedble para los turistas que buscan tener contacto extremo con la naturaleza y conocer algunas de las culturas m\xe1s representativas del pa\xeds.      ",mapImg:"https://lh3.googleusercontent.com/-La8UkjdPHgA/YYneQb7yBSI/AAAAAAAAH3Q/nysYjUnfR0wLuU_mwMQB0fIQLPYMpP05wCLcBGAsYHQ/MapAmazonas.png",munici:[],place:[]}]),h=Object(l.a)(m,2),g=h[0],x=h[1],O=function(e){var t=g.filter((function(t){return t.id!==e}));x(t)},f=function(e){u(e),n("edit")},M=[],S=[];return g.forEach((function(e){e.munici.forEach((function(e){M.push(e)}))})),g.forEach((function(e){e.place.forEach((function(e){S.push(e)}))})),Object(j.jsx)(_.a,{children:Object(j.jsxs)("div",{className:"App",children:[Object(j.jsxs)("div",{className:"App__nav",children:[Object(j.jsx)(_.b,{to:"/home",children:Object(j.jsx)("img",{src:y})}),Object(j.jsxs)("div",{className:"App__link",children:[Object(j.jsx)(A,{text:"Inicio",url:"/home"}),Object(j.jsx)(A,{text:"Formulario",url:"/form"}),Object(j.jsx)(A,{text:"Departamentos",url:"/depar"}),Object(j.jsx)(A,{text:"Lugares",url:"/places"})]}),Object(j.jsx)(C.a,{sx:{bgcolor:I.a[500]},children:"PO"})]}),Object(j.jsxs)(b.d,{children:[Object(j.jsxs)(b.b,{path:"/home",children:[Object(j.jsx)("section",{className:"App__banner",children:Object(j.jsx)("p",{className:"App__text",children:"Viajes inolvidables experiencias de viaje con un impacto positivo"})}),Object(j.jsxs)(L.a,{isRTL:false,itemsToShow:3,children:[Object(j.jsxs)("div",{className:"App__banner-text",children:[Object(j.jsx)("h2",{className:"App__banner-title",children:"Municipios"}),Object(j.jsx)("p",{children:"Conoce los mejores lugares de cada municipio de nuestro pa\xeds."})]}),M.map((function(e){return Object(j.jsx)(D,{id:e.id,idDepar:e.idDepar,title:e.title,weather:e.weather,description:e.description,img:e.img,type:"detail"})})),Object(j.jsx)("div",{})]}),Object(j.jsxs)("section",{className:"App__banner--places",children:[Object(j.jsx)(F,{id:0,name:"Casa Terracota",coordinates:"",score:.4,description:"Una casa de arcilla que ocupa quinientos metros cuadrados es considerada la cer\xe1mica m\xe1s grande del mundo. ",img:"https://blog.redbus.co/wp-content/uploads/2019/03/AAvEJSR.jpg",format:"slide",type:"detail"}),Object(j.jsxs)("div",{className:"App__banner--comp",children:[Object(j.jsx)("h2",{className:"App__banner--title",children:"Lugares m\xe1s visitados de Colombia"}),Object(j.jsx)(F,{id:0,name:"Casa Terracota",coordinates:"",score:.4,description:"Una casa de arcilla que ocupa quinientos metros cuadrados es considerada la cer\xe1mica m\xe1s grande del mundo. ",img:"https://blog.redbus.co/wp-content/uploads/2019/03/AAvEJSR.jpg",format:"slide",type:"detail"})]}),Object(j.jsx)(F,{id:0,name:"Casa Terracota",coordinates:"",score:.4,description:"Una casa de arcilla que ocupa quinientos metros cuadrados es considerada la cer\xe1mica m\xe1s grande del mundo. ",img:"https://blog.redbus.co/wp-content/uploads/2019/03/AAvEJSR.jpg",format:"slide",type:"detail"})]}),Object(j.jsx)("section",{children:Object(j.jsx)(L.a,{isRTL:false,itemsToShow:1,children:g.map((function(e){return Object(j.jsx)(v,{id:e.id,img:e.img,title:e.title,description:e.description,mapImg:e.mapImg,type:"detail",format:"slide",onDelate:O,onEdit:f})}))})})]}),Object(j.jsx)(b.b,{path:"/form",children:Object(j.jsx)("section",{className:"App__forms",children:Object(j.jsx)(p,{type:a,onCreate:function(e){var t=g.slice();t.push({id:Math.random(),img:e.img,title:e.title,description:e.description,mapImg:e.mapImg,munici:[],place:[]}),x(t)},editId:d,onEdit:function(e,t){var a=g.slice(),n=g.findIndex((function(t){return t.id===e}));a[n]=Object(o.a)(Object(o.a)({},g[n]),t),x(a)}})})}),Object(j.jsx)(b.b,{path:"/depar",children:Object(j.jsxs)("section",{className:"App__banner--depar",children:[Object(j.jsxs)("div",{className:"App__banner--text",children:[Object(j.jsxs)("p",{children:[" ",Object(j.jsx)("b",{children:"32"})," Departamentos por recorrer"]}),Object(j.jsx)("img",{src:N})]}),Object(j.jsx)("section",{className:"App__depar",children:g.map((function(e){return Object(j.jsx)(v,{id:e.id,img:e.img,title:e.title,description:e.description,mapImg:e.mapImg,type:"edit",format:"card",onDelate:O,onEdit:f})}))})]})}),Object(j.jsx)(b.b,{path:"/details/:id",children:Object(j.jsx)(E,{list:g,onCreateMunicipi:function(e,t){var a=g.slice(),n=g.findIndex((function(t){return t.id===e}));a[n]=Object(o.a)(Object(o.a)({},g[n]),{},{munici:[].concat(Object(s.a)(g[n].munici),[t])}),x(a)},onDelate:function(e,t){var a=g.findIndex((function(t){return t.id===e})),n=g[a].munici.filter((function(e){return e.id!==t}));x((function(e){var t=e;return t[a].munici=n,Object(s.a)(t)}))},onEdit:function(e,t,a){var n=g.slice(),c=g.findIndex((function(t){return t.id===e})),i=n[c].munici.findIndex((function(e){return e.id===t}));x((function(e){var t=e;return t[c].munici[i]=a,Object(s.a)(t)}))}})}),Object(j.jsx)(b.b,{path:"/municipio/:id",children:Object(j.jsx)(Y,{listPlace:S,list:M,onCreatePlace:function(e,t){var a=g.slice(),n=g.findIndex((function(t){return t.id===e}));a[n]=Object(o.a)(Object(o.a)({},g[n]),{},{place:[].concat(Object(s.a)(g[n].place),[t])}),x(a)},onDelate:function(e,t){var a=g.findIndex((function(t){return t.id===e})),n=g[a].place.filter((function(e){return e.id!==t}));x((function(e){var t=e;return t[a].place=n,Object(s.a)(t)}))}})}),Object(j.jsx)(b.b,{path:"/place/:id",children:Object(j.jsx)(q,{listPlace:S})}),Object(j.jsx)(b.b,{path:"/404",children:Object(j.jsx)(P,{})}),Object(j.jsx)(b.a,{to:"/home"})]})]})})},B=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,184)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,i=t.getLCP,r=t.getTTFB;a(e),n(e),c(e),i(e),r(e)}))},Q=a(94),V=a(183),G=Object(Q.a)({palette:{primary:{main:"#FFFFFF"},secondary:{main:"#09282F"}}});r.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(V.a,{theme:G,children:Object(j.jsx)(U,{})})}),document.getElementById("root")),B()},77:function(e,t,a){}},[[127,1,2]]]);
//# sourceMappingURL=main.78b08623.chunk.js.map