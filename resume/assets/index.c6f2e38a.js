var e=Object.assign;import{c as t,o as a,a as n,b as r,u as o,d as l,e as s,w as i,r as c,f as d,g as u,h as m,n as p,i as h,j as v,k as g,l as f,m as b,t as y,F as w,p as x,q as k,s as z,v as M,T as _,V as S}from"./vendor.8ed8e1a3.js";!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(a){const n=new URL(e,location),r=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((a,o)=>{const l=new URL(e,n);if(self[t].moduleMap[l])return a(self[t].moduleMap[l]);const s=new Blob([`import * as m from '${l}';`,`${t}.moduleMap['${l}']=m;`],{type:"text/javascript"}),i=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(s),onerror(){o(new Error(`Failed to import: ${e}`)),r(i)},onload(){a(self[t].moduleMap[l]),r(i)}});document.head.appendChild(i)})),self[t].moduleMap={}}}("/resume/assets/");var C=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:{name:e=>{const{normalize:t}=e;return t(["Maximo Mussini"])},button:{print:e=>{const{normalize:t}=e;return t(["Print"])},toggle_dark:e=>{const{normalize:t}=e;return t(["Toggle dark mode"])},toggle_langs:e=>{const{normalize:t}=e;return t(["Change language"])}},location:{separator:e=>{const{normalize:t}=e;return t(["at"])}},intro:{subtitle:e=>{const{normalize:t}=e;return t(["I am a creative problem-solver with a wide range of skills."])},referrals:e=>{const{normalize:t}=e;return t(["A few kind words from great people I have worked with over the years, mostly from check-ins and 360 reviews. I can provide their contact information as needed."])}},sections:{summary:e=>{const{normalize:t}=e;return t(["Summary"])},experience:e=>{const{normalize:t}=e;return t(["Selected Work Experience"])},tech:e=>{const{normalize:t}=e;return t(["Technologies"])},education:e=>{const{normalize:t}=e;return t(["Education"])},interests:e=>{const{normalize:t}=e;return t(["Interests"])},referrals:e=>{const{normalize:t}=e;return t(["What colleagues say about me"])}},"not-found":e=>{const{normalize:t}=e;return t(["Not found"])}}}),H=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:{name:e=>{const{normalize:t}=e;return t(["Máximo Mussini"])},button:{print:e=>{const{normalize:t}=e;return t(["Imprimir"])},toggle_dark:e=>{const{normalize:t}=e;return t(["Alternar modo oscuro"])},toggle_langs:e=>{const{normalize:t}=e;return t(["Cambiar idioma"])}},location:{separator:e=>{const{normalize:t}=e;return t(["en"])}},intro:{subtitle:e=>{const{normalize:t}=e;return t(["Soy una persona creativa con un amplio rango de habilidades."])},referrals:e=>{const{normalize:t}=e;return t(["Algunas palabras amables de buenos colegas con los que he trabajado a lo largo de los años, en su mayoría citadas de check-ins y evaluaciones 360. Puedo proveer su información de contacto."])}},sections:{summary:e=>{const{normalize:t}=e;return t(["Resumen"])},experience:e=>{const{normalize:t}=e;return t(["Experiencia de Trabajo Seleccionada"])},tech:e=>{const{normalize:t}=e;return t(["Tecnologías"])},education:e=>{const{normalize:t}=e;return t(["Educación"])},interests:e=>{const{normalize:t}=e;return t(["Intereses"])},referrals:e=>{const{normalize:t}=e;return t(["Frases de mis colegas acerca de mí"])}},"not-found":e=>{const{normalize:t}=e;return t(["No se ha encontrado"])}}});const j=Object.fromEntries(Object.entries({"../../locales/en.json":C,"../../locales/es.json":H}).map((([e,t])=>[e.slice(14,-5),t.default])));var L=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",install:({app:e})=>{const a=t({legacy:!1,locale:"en",messages:j});e.use(a)}});const I={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",style:{"vertical-align":"middle",transform:"translateY(-5%)"}},T=r("path",{d:"M28 9h-3V3H7v6H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h3v6h18v-6h3a2 2 0 0 0 2-2V11a2 2 0 0 0-2-2zM9 5h14v4H9zm14 22H9V17h14zm5-6h-3v-6H7v6H4V11h24z",fill:"currentColor"},null,-1);var R={render:function(e,t){return a(),n("svg",I,[T])}};const A={},V={width:"24",height:"24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},O=r("path",{d:"M15 14.25h3.75v1.5H15v-1.5zM15 11.25h7.501v1.5H15v-1.5zM15 8.25h7.501v1.5H15v-1.5zM2 10V3h4.869v1.183H3.484v1.681h3.078v1.183H3.484v1.77h3.591V10H2zM11.26 10L9.328 4.76c.094.87.141 1.483.141 1.836V10H8.177V3h1.695l1.976 5.381c-.094-.813-.14-1.444-.14-1.894V3H13v7h-1.74zM2 20.9v-6.794h4.716v1.148H3.437v1.632H6.42v1.148H3.437v1.717h3.478V20.9H2zM13 18.93c0 .645-.239 1.152-.716 1.521-.474.366-1.135.549-1.983.549-.763 0-1.385-.166-1.866-.499-.48-.332-.789-.815-.925-1.45l1.388-.186c.075.315.23.566.468.75.237.181.562.272.974.272.429 0 .745-.07.95-.212.208-.14.312-.36.312-.66a.7.7 0 00-.273-.558c-.182-.155-.447-.276-.794-.363-.698-.174-1.192-.325-1.481-.453a2.558 2.558 0 01-.687-.438 1.7 1.7 0 01-.4-.564 1.881 1.881 0 01-.136-.73c0-.588.228-1.053.682-1.395.458-.343 1.06-.514 1.808-.514.727 0 1.296.15 1.705.448.409.296.674.756.794 1.38l-1.393.146c-.143-.614-.522-.921-1.136-.921-.344 0-.607.067-.789.201-.182.13-.273.32-.273.569 0 .165.044.302.132.413.088.107.206.2.356.277.152.074.46.173.925.297.61.155 1.08.327 1.408.519.328.188.568.416.721.685.153.268.229.574.229.916z",fill:"currentColor"},null,-1);A.render=function(e,t){return a(),n("svg",V,[O])};const E={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",style:{"vertical-align":"middle",transform:"translateY(-5%)"}},Y=r("path",{d:"M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3z",fill:"currentColor"},null,-1);var q={render:function(e,t){return a(),n("svg",E,[Y])}};const P={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",style:{"vertical-align":"middle",transform:"translateY(-5%)"}},B=r("path",{d:"M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6z",fill:"currentColor"},null,-1),D=r("path",{d:"M5.394 6.813l1.414-1.415l3.506 3.506L8.9 10.318z",fill:"currentColor"},null,-1),U=r("path",{d:"M2 15.005h5v2H2z",fill:"currentColor"},null,-1),F=r("path",{d:"M5.394 25.197L8.9 21.691l1.414 1.415l-3.506 3.505z",fill:"currentColor"},null,-1),$=r("path",{d:"M15 25.005h2v5h-2z",fill:"currentColor"},null,-1),J=r("path",{d:"M21.687 23.106l1.414-1.415l3.506 3.506l-1.414 1.414z",fill:"currentColor"},null,-1),N=r("path",{d:"M25 15.005h5v2h-5z",fill:"currentColor"},null,-1),W=r("path",{d:"M21.687 8.904l3.506-3.506l1.414 1.415l-3.506 3.505z",fill:"currentColor"},null,-1),G=r("path",{d:"M15 2.005h2v5h-2z",fill:"currentColor"},null,-1);var Q={render:function(e,t){return a(),n("svg",P,[B,D,U,F,$,J,N,W,G])}};const K=o("color-schema","auto"),X=l(),Z=s({get:()=>"auto"===K.value?X.value:"dark"===K.value,set(e){e===X.value?K.value="auto":K.value=e?"dark":"light"}});let ee;i(Z,(e=>"undefined"!=typeof document&&document.documentElement.classList.toggle("dark",e)),{immediate:!0});const te=c(!1),ae=s((()=>!te.value));"undefined"!=typeof window&&(window.onbeforeprint=()=>{te.value=!0},window.onafterprint=()=>{te.value=!1}),i(te,(e=>{"undefined"!=typeof document&&document.documentElement.classList.toggle("print",e),e?(ee=Z.value,Z.value=!1):Z.value=ee}),{immediate:!0});const ne=[{quote:"I appreciate Maximo’s patience when explaining any complex subject, and I like that he approaches every review with the heart of a teacher.",author:"Software Developer"},{quote:"Probably the most resourceful engineer in the development team. He manages to provide extremely insightful reviews across multiple product areas in record time.<br/>Not only is his feedback valuable, but he is also always trying to point out what others have done well, which helps to create a friendly and collaborative environment in the team.",author:"Sr. Software Engineer"},{quote:"He is not afraid to speak up and always offers his expert opinion, but in a way that also allows for compromise to include others as well.",author:"Product Manager"},{quote:"Maximo has been the backbone of our development team for years. Every day, he pushes all of us to be more innovative, to challenge the status quo, and to improve and build scalable products.",author:"Program Manager"},{quote:"He is constantly looking for areas of improvement in our software and processes, and investigating how to make life easier for developers. This brings an unmeasurable performance boost to all teams.",author:"Sr. Software Engineer"}];var re={en:Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",jobs:[{date:"Sep 2016 - Aug 2020",title:"Technical Lead",company:"CipherHealth",description:["Brought developer experience to the forefront, introduced chat-ops, and modernized internal tooling, leading to high developer satisfaction.","Led the migration to a new design system implemented with Vue and a Rails API, obtaining a smoother user experience and substantial performance improvements.","Enabled a 2x faster release cycle by automating deploy checklists and release management, and involving QA earlier in the process.","Nurtured the culture to emphasize mutual learning and healthy async collaboration, unifying team members in 6 different time zones.","Designed a scalable cloud-native architecture to power the COVID-19 crisis response solutions."]},{date:"Jan 2014 - Sep 2016",title:"Senior Software Engineer",company:"CipherHealth",description:["Worked closely with the CTO and developed 3 new products that helped to expand the company's market share.","Led an initiative to improve code quality in the system, crushing the technical debt ratio in a Rails monolith to an extremely low level.","Improved customer satisfaction after achieving an 80% reduction in perceived load time by optimizing database design and caching."]},{date:"Oct 2012 - Dec 2013",title:"Senior Mobile Developer",company:"Xmartlabs",description:["Developed beautiful native and hybrid mobile applications for the healthcare and finance industries, applying user-centered design.","Joined early on and helped to shape the culture of the company."]}],education:[{date:"2008 - 2013",title:"B.Sc. Computer Science",university:"Udelar (Uruguay)"},{date:"2008 - 2010",title:"Software Analyst",university:"Udelar (Uruguay)"}],technologies:[{name:"Languages",items:["Ruby","JavaScript","TypeScript","Kotlin","C#"]},{name:"Frontend",items:["Vue","React","PostCSS","Sass"]},{name:"Storage",items:["PostgreSQL","MongoDB","Redis"]},{name:"Other",items:["Git","Figma","Photoshop"]}],interests:"\nOpen Source is a great thing. I have released several libraries for Ruby and JS, and often contribute to libraries I use.\n\nI love listening to music and playing guitar. I record songs from time to time, and upload them to my SoundCloud and YouTube channels.\n\nI enjoy doing CrossFit and riding my bike to stay fit, and I've recently taken on water sports like sailing and rowing.\n\nIn my website I post technical articles and tutorials, but I also have a hidden section for cooking recipes, can you find it?\n",referrals:ne}),es:Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",jobs:[{date:"sep 2016 - ago 2020",title:"Technical Lead",company:"CipherHealth",description:["Nutrí la cultura del equipo para enfatizar el aprendizaje mutuo y la comunicación, integrando colaboradores en 6 husos horarios.","Lideré la migración a un nuevo sistema de diseño implementado con Vue y Rails API, obteniendo una mejor experiencia de usuario, y mejoras sustanciales en el rendimiento del sistema.","Logré un ciclo de release 2x más rápido al automatizar el manejo de los releases, e involucrar a QA más temprano en el proceso.","Mejoré la experiencia de desarrollo al introducir chat-ops y modernizar las herramientas internas, obteniendo una satisfacción muy alta en los miembros del equipo.","Diseñé una arquitectura cloud para dar capacidad adicional al sistema ante la crisis del COVID-19."]},{date:"ene 2014 - sep 2016",title:"Senior Software Engineer",company:"CipherHealth",description:["Trabajé junto al CTO y desarrollé 3 nuevos productos que ayudaron a expandir la participación de la empresa en el mercado.","Lideré una iniciativa para reducir la deuda técnica, mejorando la calidad general del código significativamente en una app Rails.","Mejoré la satisfacción de los clientes mediante una reducción del 80% en el tiempo de respuesta percibido, al optimizar el diseño de la base de datos."]},{date:"oct 2012 - dec 2013",title:"Senior Mobile Developer",company:"Xmartlabs",description:["Desarrollé aplicaciones móviles nativas e híbridas para los sectores de salud y finanzas, aplicando técnicas de diseño enfocado al usuario."]}],education:[{date:"2008 - 2013",title:"Ingeniero en Computación",university:"Udelar (Uruguay)"},{date:"2008 - 2010",title:"Analista en Computación",university:"Udelar (Uruguay)"}],technologies:[{name:"Lenguajes",items:["Ruby","JavaScript","TypeScript","Kotlin","C#"]},{name:"Frontend",items:["Vue","React","PostCSS","Sass"]},{name:"Bases de Datos",items:["PostgreSQL","MongoDB","Redis"]},{name:"Otros",items:["Git","Figma","Photoshop"]}],interests:"\nEl Open Source es un gran invento. He liberado varias bibliotecas para Ruby and JS, y contribuyo frecuentemente en bibliotecas que utilizo.\n\nMe encanta escuchar música y tocar la guitarra. Grabo canciones de vez en cuando, y las subo a mis canales de SoundCloud y YouTube.\n\nDisfruto hacer CrossFit y andar en bici para mantenerme en forma, y recientemente he incursionado en deportes acuáticos como navegación a vela y remo.\n\nEn mi sitio web escribo artículos técnicos y tutoriales, pero también tengo una sección oculta para recetas de cocina, puedes encontrarla?\n",referrals:ne})};function oe(e){const{locale:t}=d();return s((()=>re[t.value][e]))}const le={class:"text-xl absolute m-4 top-0 right-0 print:hidden"};var se=u({expose:[],setup(e){const{t:t,availableLocales:o,locale:l}=d(),s=()=>{const e=o;l.value=e[(e.indexOf(l.value)+1)%e.length]},i=()=>{te.value=!0,p((()=>window.print()))};return(e,o)=>{const l=R,c=A,d=q,u=Q;return a(),n("nav",le,[r("a",{class:"icon-btn mx-2",title:m(t)("button.print"),onClick:i},[r(l)],8,["title"]),r("a",{class:"icon-btn mx-2",title:m(t)("button.toggle_langs"),onClick:s},[r(c)],8,["title"]),r("a",{class:"icon-btn ml-2",title:m(t)("button.toggle_dark"),onClick:o[1]||(o[1]=e=>Z.value=!m(Z))},[m(Z)?(a(),n(d,{key:0})):(a(),n(u,{key:1}))],8,["title"])])}}});const ie={},ce={class:"logo h-8 w-8",src:"/resume/logo.svg"};ie.render=function(e,t){return a(),n("img",ce)};const de={},ue={href:"https://maximomussini.com",target:"_blank",rel:"noreferrer"};de.render=function(e,t){return a(),n("a",ue,[h(e.$slots,"default")])};const me={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",style:{"vertical-align":"middle",transform:"translateY(-5%)"}},pe=r("path",{d:"M26 29h-.17C6.18 27.87 3.39 11.29 3 6.23A3 3 0 0 1 5.76 3h5.51a2 2 0 0 1 1.86 1.26L14.65 8a2 2 0 0 1-.44 2.16l-2.13 2.15a9.37 9.37 0 0 0 7.58 7.6l2.17-2.15a2 2 0 0 1 2.17-.41l3.77 1.51A2 2 0 0 1 29 20.72V26a3 3 0 0 1-3 3zM6 5a1 1 0 0 0-1 1v.08C5.46 12 8.41 26 25.94 27a1 1 0 0 0 1.06-.94v-5.34l-3.77-1.51l-2.87 2.85l-.48-.06c-8.7-1.09-9.88-9.79-9.88-9.88l-.06-.48l2.84-2.87L11.28 5z",fill:"currentColor"},null,-1);var he={render:function(e,t){return a(),n("svg",me,[pe])}};const ve={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",style:{"vertical-align":"middle",transform:"translateY(-5%)"}},ge=r("path",{d:"M28 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2zm-2.2 2L16 14.78L6.2 8zM4 24V8.91l11.43 7.91a1 1 0 0 0 1.14 0L28 8.91V24z",fill:"currentColor"},null,-1);var fe={render:function(e,t){return a(),n("svg",ve,[ge])}};const be={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",style:{"vertical-align":"middle",transform:"translateY(-5%)"}},ye=r("path",{d:"M16 2a14 14 0 0 0-4.43 27.28c.7.13 1-.3 1-.67v-2.38c-3.89.84-4.71-1.88-4.71-1.88a3.71 3.71 0 0 0-1.62-2.05c-1.27-.86.1-.85.1-.85a2.94 2.94 0 0 1 2.14 1.45a3 3 0 0 0 4.08 1.16a2.93 2.93 0 0 1 .88-1.87c-3.1-.36-6.37-1.56-6.37-6.92a5.4 5.4 0 0 1 1.44-3.76a5 5 0 0 1 .14-3.7s1.17-.38 3.85 1.43a13.3 13.3 0 0 1 7 0c2.67-1.81 3.84-1.43 3.84-1.43a5 5 0 0 1 .14 3.7a5.4 5.4 0 0 1 1.44 3.76c0 5.38-3.27 6.56-6.39 6.91a3.33 3.33 0 0 1 .95 2.59v3.84c0 .46.25.81 1 .67A14 14 0 0 0 16 2z","fill-rule":"evenodd",fill:"currentColor"},null,-1);var we={render:function(e,t){return a(),n("svg",be,[ye])}};const xe={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",style:{"vertical-align":"middle",transform:"translateY(-5%)"}},ke=r("path",{d:"M26.21 4H5.79A1.78 1.78 0 0 0 4 5.73V26.2a1.77 1.77 0 0 0 1.79 1.73h20.42A1.77 1.77 0 0 0 28 26.2V5.73A1.78 1.78 0 0 0 26.21 4zm-15.1 20.41H7.59V13h3.52zm-1.72-13a2.07 2.07 0 0 1-2.07-2.02a2 2 0 0 1 2.07-2.07a2.07 2.07 0 0 1 0 4.13zm15.09 12.93H21v-5.58c0-1.33 0-3.06-1.86-3.06S17 17.16 17 18.63v5.65h-3.56V13h3.32v1.5h.07a3.72 3.72 0 0 1 3.39-1.86c3.59 0 4.26 2.4 4.26 5.45z",fill:"currentColor"},null,-1);var ze={render:function(e,t){return a(),n("svg",xe,[ke])}};const Me=g("data-v-5b4ffe39"),_e={expose:[],setup(t){const o=(t,{attrs:a,slots:n})=>(a=e(e({},a),{target:"_blank",rel:"noreferrer",class:["icon-btn mx-2",a.class]}),te.value&&(a.class="mb-2",n={default:()=>a.href.split(":")[1].replace("//","")}),f("a",a,n));return Me(((e,t)=>{const l=he,s=fe,i=we,c=ze;return a(),n("div",{class:["contact",{"flex flex-col text-right text-xs":m(te)}]},[r(o,{href:"tel:(+598) 91 975 895",title:"Phone"},{default:Me((()=>[r(l)])),_:1}),m(te)?(a(),n(o,{key:0,href:"https://maximomussini.com",title:"Website",class:"mr-0"})):v("",!0),r(o,{href:"mailto:maximomussini@gmail.com",title:"Email"},{default:Me((()=>[r(s)])),_:1}),m(ae)?(a(),n(o,{key:1,href:"https://github.com/ElMassimo",title:"GitHub"},{default:Me((()=>[r(i)])),_:1})):v("",!0),m(ae)?(a(),n(o,{key:2,href:"https://linkedin.com/in/maximomussini",title:"LinkedIn",class:"mr-0"},{default:Me((()=>[r(c)])),_:1})):v("",!0)],2)}))},__scopeId:"data-v-5b4ffe39"},Se={class:"flex text-xl mb-2 md:mb-3 relative items-center"},Ce={class:"flex-grow text-3xl font-semibold text-gray-900 dark:text-gray-100 pb-px"},He={class:"subtitle text-xl ml-0.5"};var je=u({expose:[],setup(e){const{t:t}=d();return(e,o)=>{const l=ie,s=de,i=_e;return a(),n(w,null,[r("header",Se,[r(s,{class:"mr-3 hidden md:block print:hidden"},{default:b((()=>[r(l)])),_:1}),r("h1",Ce,[r(s,null,{default:b((()=>[x(y(m(t)("name")),1)])),_:1})]),r(i)]),r("h2",He,y(m(t)("intro.subtitle")),1)],64)}}});const Le={},Ie=g("data-v-fd864544");k("data-v-fd864544");const Te={class:"section mt-8 mb-2 text-gray-800 dark:text-gray-200 text-xl font-bold flex items-center"};z();const Re=Ie(((e,t)=>(a(),n("h3",Te,[h(e.$slots,"default")]))));Le.render=Re,Le.__scopeId="data-v-fd864544";const Ae={},Ve={class:"section-label text-gray-500 dark:text-gray-400 text-sm font-normal text-left inline-block w-48 sm:w-48 pl-1 mb-1 align-middle"};Ae.render=function(e,t){return a(),n("span",Ve,[h(e.$slots,"default")])};const Oe={class:"section-location text-gray-800 dark:text-gray-400 text-base font-semibold"},Ee={key:0,class:"text-gray-600 dark:text-gray-500 text-sm font-normal ml-1.5 mr-1"};var Ye=u({expose:[],props:{at:{type:Boolean,default:!1}},setup(e){const{at:t}=e,{t:r}=d();return(e,o)=>(a(),n("span",Oe,[t?(a(),n("span",Ee,y(m(r)("location.separator")),1)):v("",!0),h(e.$slots,"default")]))}});const qe={},Pe={class:"section-title mb-2 text-accent-700 dark:text-accent-400 text-lg font-semibold"};qe.render=function(e,t){return a(),n("h4",Pe,[h(e.$slots,"default")])};const Be={class:"job mt-4"},De={class:"section-description list-disc ml-48 leading-7"};var Ue=u({expose:[],setup(e){const{t:t}=d(),o=oe("jobs");return(e,l)=>{const s=Le,i=Ae,c=Ye,d=qe;return a(),n(w,null,[r(s,null,{default:b((()=>[x(y(m(t)("sections.experience")),1)])),_:1}),(a(!0),n(w,null,M(m(o),(e=>(a(),n("div",Be,[r(d,null,{default:b((()=>[r(i,null,{default:b((()=>[x(y(e.date),1)])),_:2},1024),r("span",null,y(e.title),1),e.company?(a(),n(c,{key:0,at:""},{default:b((()=>[x(y(e.company),1)])),_:2},1024)):v("",!0)])),_:2},1024),r("ul",De,[(a(!0),n(w,null,M(e.description,(e=>(a(),n("li",{class:"mb-1.5 ml-4",innerHTML:e},null,8,["innerHTML"])))),256))])])))),256))],64)}}});const Fe=g("data-v-77068873");k("data-v-77068873");const $e={class:"technology grid mt-2"},Je={class:"technology-items leading-5 flex-grow"};z();var Ne=u({expose:[],setup(e){const{t:t}=d(),o=oe("technologies");return Fe(((e,l)=>{const s=Le,i=Ae;return a(),n(w,null,[r(s,null,{default:Fe((()=>[x(y(m(t)("sections.tech")),1)])),_:1}),(a(!0),n(w,null,M(m(o),(e=>(a(),n("div",$e,[r(i,null,{default:Fe((()=>[x(y(e.name),1)])),_:2},1024),r("div",Je,y(e.items.join(", ")),1)])))),256))],64)}))}});Ne.__scopeId="data-v-77068873";var We=u({expose:[],setup(e){const{t:t}=d(),o=oe("education");return(e,l)=>{const s=Le,i=Ae,c=Ye,d=qe;return a(),n(w,null,[r(s,null,{default:b((()=>[x(y(m(t)("sections.education")),1)])),_:1}),(a(!0),n(w,null,M(m(o),(e=>(a(),n(d,{class:"education mt-2"},{default:b((()=>[r(i,null,{default:b((()=>[x(y(e.date),1)])),_:2},1024),r("span",null,y(e.title),1),r(c,{at:""},{default:b((()=>[x(y(e.university),1)])),_:2},1024)])),_:2},1024)))),256))],64)}}});const Ge=g("data-v-746bf1de");k("data-v-746bf1de");const Qe={class:"interests-list list-disc ml-4 leading-7"};z();var Ke=u({expose:[],setup(e){const{t:t}=d(),o=oe("interests"),l=s((()=>o.value.replace(/(released|liberado)/,'<a href="https://github.com/ElMassimo" target="_blank" rel="noreferrer">$1</a>').replace("SoundCloud",'<a href="https://soundcloud.com/maximomussini" target="_blank" rel="noreferrer">SoundCloud</a>').replace("YouTube",'<a href="https://www.youtube.com/c/maximomussini" target="_blank" rel="noreferrer">YouTube</a>').split("\n").filter((e=>e))));return Ge(((e,o)=>{const s=Le;return a(),n(w,null,[r(s,{class:"interests"},{default:Ge((()=>[x(y(m(t)("sections.interests")),1)])),_:1}),r("ul",Qe,[(a(!0),n(w,null,M(m(l),(e=>(a(),n("li",{class:"mt-2",innerHTML:e},null,8,["innerHTML"])))),256))])],64)}))}});Ke.__scopeId="data-v-746bf1de";const Xe=g("data-v-0dc6c0ea");k("data-v-0dc6c0ea");const Ze={class:"my-2"},et={class:"leading-7 relative m-6"},tt=r("div",{className:"quote-mark font-dank-mono text-accent-600 opacity-30 dark:opacity-100 absolute leading-none mr-2 italic","aria-hidden":"true"},"“",-1),at={class:"text-gray-800 dark:text-gray-400 text-right text-xs text-bold"},nt={class:"font-semibold"},rt=x(", CipherHealth ");z();var ot=u({expose:[],setup(e){const{t:t}=d(),o=oe("referrals");return Xe(((e,l)=>{const s=Le;return a(),n(w,null,[r(s,null,{default:Xe((()=>[x(y(m(t)("sections.referrals")),1)])),_:1}),r("p",Ze,y(m(t)("intro.referrals")),1),(a(!0),n(w,null,M(m(o),(e=>(a(),n("blockquote",et,[tt,r("div",{class:"italic",innerHTML:e.quote},null,8,["innerHTML"]),r("span",at,[r("span",nt,y(e.author),1),rt])])))),256))],64)}))}});ot.__scopeId="data-v-0dc6c0ea";const lt=g("data-v-67bfd8bc");k("data-v-67bfd8bc");const st={class:"resume m-auto p-4 sm:p-10 sm:pt-8 bg-white dark:bg-black shadow-md rounded-md transition duration-500 transform print:shadow-none print:p-0 print:m-0 print:transform-none"},it={class:"content"},ct={key:0,class:"transition duration-500 transform"},dt={key:0,class:"mt-8 text-center print:hidden"},ut=x(" Would you like to "),mt=x("? ");z();var pt=u({expose:[],setup(e){d();const t=c(!1);return lt(((e,o)=>{const l=je,s=Ue,i=Ne,c=We,d=Ke,u=ot;return a(),n(w,null,[r(_,{name:"rise",duration:1e4,appear:""},{default:lt((()=>[r("div",st,[r(l),r("div",it,[r(s),r(i),r(c),r(_,{name:"expand",duration:1e4,appear:""},{default:lt((()=>[t.value?(a(),n("div",ct,[r(d),r(u)])):v("",!0)])),_:1})])])])),_:1}),t.value?v("",!0):(a(),n("p",dt,[ut,r("button",{class:"underline text-accent-600",onClick:o[1]||(o[1]=e=>t.value=!0)},"read more"),mt]))],64)}))}});pt.__scopeId="data-v-67bfd8bc";const ht={},vt={class:"relative p-2 py-16 sm:px-4 text-gray-700 dark:text-gray-200 print:p-0"};ht.render=function(e,t){const o=se,l=pt;return a(),n("main",vt,[r(o),r(l)])},S(ht,{routes:[]},(e=>{Object.values({"./modules/i18n.ts":L}).map((t=>{var a;return null==(a=t.install)?void 0:a.call(t,e)}))}));