var e=Object.assign;import{c as t,o as a,a as n,b as r,u as l,d as o,e as i,w as s,r as c,f as d,g as u,h as m,n as p,i as h,j as g,k as v,l as f,m as x,t as w,F as b,p as y,q as z,s as M,v as _,T as k,V as C}from"./vendor.dff0ddc2.js";!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(a){const n=new URL(e,location),r=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((a,l)=>{const o=new URL(e,n);if(self[t].moduleMap[o])return a(self[t].moduleMap[o]);const i=new Blob([`import * as m from '${o}';`,`${t}.moduleMap['${o}']=m;`],{type:"text/javascript"}),s=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(i),onerror(){l(new Error(`Failed to import: ${e}`)),r(s)},onload(){a(self[t].moduleMap[o]),r(s)}});document.head.appendChild(s)})),self[t].moduleMap={}}}("/resume/assets/");var S=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:{name:e=>{const{normalize:t}=e;return t(["Maximo Mussini"])},button:{print:e=>{const{normalize:t}=e;return t(["Print"])},toggle_dark:e=>{const{normalize:t}=e;return t(["Toggle dark mode"])},toggle_langs:e=>{const{normalize:t}=e;return t(["Change language"])}},location:{separator:e=>{const{normalize:t}=e;return t(["at"])}},intro:{subtitle:e=>{const{normalize:t}=e;return t(["I am a creative problem-solver with a wide range of skills."])}},sections:{summary:e=>{const{normalize:t}=e;return t(["Summary"])},experience:e=>{const{normalize:t}=e;return t(["Selected Work Experience"])},tech:e=>{const{normalize:t}=e;return t(["Technologies"])},education:e=>{const{normalize:t}=e;return t(["Education"])},interests:e=>{const{normalize:t}=e;return t(["Interests"])},quotes:e=>{const{normalize:t}=e;return t(["Quotes from colleagues"])}},"not-found":e=>{const{normalize:t}=e;return t(["Not found"])}}}),j=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:{name:e=>{const{normalize:t}=e;return t(["Máximo Mussini"])},button:{print:e=>{const{normalize:t}=e;return t(["Imprimir"])},toggle_dark:e=>{const{normalize:t}=e;return t(["Alternar modo oscuro"])},toggle_langs:e=>{const{normalize:t}=e;return t(["Cambiar idioma"])}},location:{separator:e=>{const{normalize:t}=e;return t(["en"])}},intro:{subtitle:e=>{const{normalize:t}=e;return t(["Soy una persona creativa con un amplio rango de habilidades."])}},sections:{summary:e=>{const{normalize:t}=e;return t(["Resumen"])},experience:e=>{const{normalize:t}=e;return t(["Experiencia de Trabajo Seleccionada"])},tech:e=>{const{normalize:t}=e;return t(["Tecnologías"])},education:e=>{const{normalize:t}=e;return t(["Educación"])},interests:e=>{const{normalize:t}=e;return t(["Intereses"])},quotes:e=>{const{normalize:t}=e;return t(["Referencias de colegas"])}},"not-found":e=>{const{normalize:t}=e;return t(["No se ha encontrado"])}}});const L=Object.fromEntries(Object.entries({"../../locales/en.json":S,"../../locales/es.json":j}).map((([e,t])=>[e.slice(14,-5),t.default])));var H=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",install:({app:e})=>{const a=t({legacy:!1,locale:"en",messages:L});e.use(a)}});const A={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",style:{"vertical-align":"middle",transform:"translateY(-5%)"}},R=r("path",{d:"M28 9h-3V3H7v6H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h3v6h18v-6h3a2 2 0 0 0 2-2V11a2 2 0 0 0-2-2zM9 5h14v4H9zm14 22H9V17h14zm5-6h-3v-6H7v6H4V11h24z",fill:"currentColor"},null,-1);var V={render:function(e,t){return a(),n("svg",A,[R])}};const O={},T={width:"24",height:"24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},I=r("path",{d:"M15 14.25h3.75v1.5H15v-1.5zM15 11.25h7.501v1.5H15v-1.5zM15 8.25h7.501v1.5H15v-1.5zM2 10V3h4.869v1.183H3.484v1.681h3.078v1.183H3.484v1.77h3.591V10H2zM11.26 10L9.328 4.76c.094.87.141 1.483.141 1.836V10H8.177V3h1.695l1.976 5.381c-.094-.813-.14-1.444-.14-1.894V3H13v7h-1.74zM2 20.9v-6.794h4.716v1.148H3.437v1.632H6.42v1.148H3.437v1.717h3.478V20.9H2zM13 18.93c0 .645-.239 1.152-.716 1.521-.474.366-1.135.549-1.983.549-.763 0-1.385-.166-1.866-.499-.48-.332-.789-.815-.925-1.45l1.388-.186c.075.315.23.566.468.75.237.181.562.272.974.272.429 0 .745-.07.95-.212.208-.14.312-.36.312-.66a.7.7 0 00-.273-.558c-.182-.155-.447-.276-.794-.363-.698-.174-1.192-.325-1.481-.453a2.558 2.558 0 01-.687-.438 1.7 1.7 0 01-.4-.564 1.881 1.881 0 01-.136-.73c0-.588.228-1.053.682-1.395.458-.343 1.06-.514 1.808-.514.727 0 1.296.15 1.705.448.409.296.674.756.794 1.38l-1.393.146c-.143-.614-.522-.921-1.136-.921-.344 0-.607.067-.789.201-.182.13-.273.32-.273.569 0 .165.044.302.132.413.088.107.206.2.356.277.152.074.46.173.925.297.61.155 1.08.327 1.408.519.328.188.568.416.721.685.153.268.229.574.229.916z",fill:"currentColor"},null,-1);O.render=function(e,t){return a(),n("svg",T,[I])};const B={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",style:{"vertical-align":"middle",transform:"translateY(-5%)"}},E=r("path",{d:"M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3z",fill:"currentColor"},null,-1);var U={render:function(e,t){return a(),n("svg",B,[E])}};const Y={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",style:{"vertical-align":"middle",transform:"translateY(-5%)"}},P=r("path",{d:"M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6z",fill:"currentColor"},null,-1),D=r("path",{d:"M5.394 6.813l1.414-1.415l3.506 3.506L8.9 10.318z",fill:"currentColor"},null,-1),$=r("path",{d:"M2 15.005h5v2H2z",fill:"currentColor"},null,-1),q=r("path",{d:"M5.394 25.197L8.9 21.691l1.414 1.415l-3.506 3.505z",fill:"currentColor"},null,-1),F=r("path",{d:"M15 25.005h2v5h-2z",fill:"currentColor"},null,-1),G=r("path",{d:"M21.687 23.106l1.414-1.415l3.506 3.506l-1.414 1.414z",fill:"currentColor"},null,-1),Q=r("path",{d:"M25 15.005h5v2h-5z",fill:"currentColor"},null,-1),J=r("path",{d:"M21.687 8.904l3.506-3.506l1.414 1.415l-3.506 3.505z",fill:"currentColor"},null,-1),N=r("path",{d:"M15 2.005h2v5h-2z",fill:"currentColor"},null,-1);var K={render:function(e,t){return a(),n("svg",Y,[P,D,$,q,F,G,Q,J,N])}};const W=l("color-schema","auto"),X=o(),Z=i({get:()=>"auto"===W.value?X.value:"dark"===W.value,set(e){e===X.value?W.value="auto":W.value=e?"dark":"light"}});let ee;s(Z,(e=>"undefined"!=typeof document&&document.documentElement.classList.toggle("dark",e)),{immediate:!0});const te=c(!1),ae=i((()=>!te.value));"undefined"!=typeof window&&(window.onbeforeprint=()=>{te.value=!0},window.onafterprint=()=>{te.value=!1}),s(te,(e=>{"undefined"!=typeof document&&document.documentElement.classList.toggle("print",e),e?(ee=Z.value,Z.value=!1):Z.value=ee}),{immediate:!0});var ne={en:Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",jobs:[{date:"Sep, 2016 - Aug, 2020",title:"Technical Lead",company:"CipherHealth",description:["Brought developer experience to the forefront by introducing chat-ops and modernizing internal tooling, leading to excellent team retention rates and high developer satisfaction.","Nurtured the culture to emphasize mutual learning and healthy async collaboration, integrating people in 6 different time zones.","Led the migration to a new design system implemented with Vue and a Rails API, obtaining a smoother user experience and substantial performance improvements.","Enabled a 2x faster release cycle by automating deploy checklists and release management, and involving QA earlier in the process.","Designed a scalable cloud-native architecture to power the COVID-19 crisis response solutions."]},{date:"Jan, 2014 - Sep, 2016",title:"Senior Software Engineer",company:"CipherHealth",description:["Worked closely with the CTO and developed 3 new products that helped to expand the company's market share.","Led an initiative to reduce technical debt in the system, raising the overall code quality from 1.9 to 3.6 GPA in a Rails monolith.","Improved customer satisfaction after achieving an 80% reduction in perceived load time by optimizing database design and caching."]},{date:"Oct, 2012 - Dec, 2013",title:"Senior Mobile Developer",company:"Xmartlabs",description:["Developed beautiful native and hybrid mobile applications for the healthcare and finance industries, applying user-centered design.","Joined early on and helped to shape the culture of the company."]}],education:[{date:"2008 - 2013",title:"B.Sc. Computer Science",university:"Udelar (Uruguay)"},{date:"2008 - 2010",title:"Software Analyst",university:"Udelar (Uruguay)"}],technologies:[{name:"Languages",items:["Ruby","JavaScript","TypeScript","Kotlin","C#"]},{name:"Frontend",items:["Vue","React","PostCSS","Sass"]},{name:"Storage",items:["PostgreSQL","MongoDB","Redis"]},{name:"Other",items:["Git","Figma","Photoshop"]}]}),es:Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",jobs:[{date:"sep 2016 - ago 2020",title:"Technical Lead",company:"CipherHealth",description:["Mejoré la experiencia de desarrollo al introducir chat-ops y modernizar las herramientas internas, obteniendo una retención muy alta de los miembros del equipo.","Nutrí la cultura del equipo para enfatizar el aprendizaje mutuo y la comunicación, integrando colaboradores en 6 husos horarios.","Lideré la migración a un nuevo sistema de diseño implementado con Vue y Rails API, obteniendo una mejor experiencia de usuario, y mejoras sustanciales en el rendimiento del sistema.","Logré un ciclo de release 2x más rápido al automatizar el manejo de los releases, e involucrar a QA más temprano en el proceso.","Diseñé una arquitectura cloud para dar capacidad adicional al sistema ante la crisis del COVID-19."]},{date:"ene 2014 - sep 2016",title:"Senior Software Engineer",company:"CipherHealth",description:["Trabajé junto al CTO y desarrollé 3 nuevos productos que ayudaron a expandir la participación de la empresa en el mercado.","Lideré una iniciativa para reducir la deuda técnica, mejorando la calidad general del código desde 1.9 a 3.6 GPA, en una app Rails.","Mejoré la satisfacción de los clientes mediante una reducción del 80% en el tiempo de respuesta percibido, al optimizar el diseño de la base de datos."]},{date:"oct 2012 - dec 2013",title:"Senior Mobile Developer",company:"Xmartlabs",description:["Desarrollé aplicaciones móviles nativas e híbridas para los sectores de salud y finanzas, aplicando técnicas de diseño enfocado al usuario."]}],education:[{date:"2008 - 2013",title:"Ingeniero en Computación",university:"Udelar (Uruguay)"},{date:"2008 - 2010",title:"Analista en Computación",university:"Udelar (Uruguay)"}],technologies:[{name:"Lenguajes",items:["Ruby","JavaScript","TypeScript","Kotlin","C#"]},{name:"Frontend",items:["Vue","React","PostCSS","Sass"]},{name:"Bases de Datos",items:["PostgreSQL","MongoDB","Redis"]},{name:"Otros",items:["Git","Figma","Photoshop"]}]})};function re(e){const{locale:t}=d();return i((()=>ne[t.value][e]))}const le={class:"text-xl absolute m-4 top-0 right-0 print:hidden"};var oe=u({expose:[],setup(e){const{t:t,availableLocales:l,locale:o}=d(),i=()=>{const e=l;o.value=e[(e.indexOf(o.value)+1)%e.length]},s=()=>{te.value=!0,p((()=>window.print()))};return(e,l)=>{const o=V,c=O,d=U,u=K;return a(),n("nav",le,[r("a",{class:"icon-btn mx-2",title:m(t)("button.print"),onClick:s},[r(o)],8,["title"]),r("a",{class:"icon-btn mx-2",title:m(t)("button.toggle_langs"),onClick:i},[r(c)],8,["title"]),r("a",{class:"icon-btn ml-2",title:m(t)("button.toggle_dark"),onClick:l[1]||(l[1]=e=>Z.value=!m(Z))},[m(Z)?(a(),n(d,{key:0})):(a(),n(u,{key:1}))],8,["title"])])}}});const ie={},se={class:"logo h-8 w-8",src:"/resume/logo.svg"};ie.render=function(e,t){return a(),n("img",se)};const ce={},de={href:"https://maximomussini.com",target:"_blank",rel:"noreferrer"};ce.render=function(e,t){return a(),n("a",de,[h(e.$slots,"default")])};const ue={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",style:{"vertical-align":"middle",transform:"translateY(-5%)"}},me=r("path",{d:"M26 29h-.17C6.18 27.87 3.39 11.29 3 6.23A3 3 0 0 1 5.76 3h5.51a2 2 0 0 1 1.86 1.26L14.65 8a2 2 0 0 1-.44 2.16l-2.13 2.15a9.37 9.37 0 0 0 7.58 7.6l2.17-2.15a2 2 0 0 1 2.17-.41l3.77 1.51A2 2 0 0 1 29 20.72V26a3 3 0 0 1-3 3zM6 5a1 1 0 0 0-1 1v.08C5.46 12 8.41 26 25.94 27a1 1 0 0 0 1.06-.94v-5.34l-3.77-1.51l-2.87 2.85l-.48-.06c-8.7-1.09-9.88-9.79-9.88-9.88l-.06-.48l2.84-2.87L11.28 5z",fill:"currentColor"},null,-1);var pe={render:function(e,t){return a(),n("svg",ue,[me])}};const he={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",style:{"vertical-align":"middle",transform:"translateY(-5%)"}},ge=r("path",{d:"M28 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2zm-2.2 2L16 14.78L6.2 8zM4 24V8.91l11.43 7.91a1 1 0 0 0 1.14 0L28 8.91V24z",fill:"currentColor"},null,-1);var ve={render:function(e,t){return a(),n("svg",he,[ge])}};const fe={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",style:{"vertical-align":"middle",transform:"translateY(-5%)"}},xe=r("path",{d:"M16 2a14 14 0 0 0-4.43 27.28c.7.13 1-.3 1-.67v-2.38c-3.89.84-4.71-1.88-4.71-1.88a3.71 3.71 0 0 0-1.62-2.05c-1.27-.86.1-.85.1-.85a2.94 2.94 0 0 1 2.14 1.45a3 3 0 0 0 4.08 1.16a2.93 2.93 0 0 1 .88-1.87c-3.1-.36-6.37-1.56-6.37-6.92a5.4 5.4 0 0 1 1.44-3.76a5 5 0 0 1 .14-3.7s1.17-.38 3.85 1.43a13.3 13.3 0 0 1 7 0c2.67-1.81 3.84-1.43 3.84-1.43a5 5 0 0 1 .14 3.7a5.4 5.4 0 0 1 1.44 3.76c0 5.38-3.27 6.56-6.39 6.91a3.33 3.33 0 0 1 .95 2.59v3.84c0 .46.25.81 1 .67A14 14 0 0 0 16 2z","fill-rule":"evenodd",fill:"currentColor"},null,-1);var we={render:function(e,t){return a(),n("svg",fe,[xe])}};const be={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",style:{"vertical-align":"middle",transform:"translateY(-5%)"}},ye=r("path",{d:"M26.21 4H5.79A1.78 1.78 0 0 0 4 5.73V26.2a1.77 1.77 0 0 0 1.79 1.73h20.42A1.77 1.77 0 0 0 28 26.2V5.73A1.78 1.78 0 0 0 26.21 4zm-15.1 20.41H7.59V13h3.52zm-1.72-13a2.07 2.07 0 0 1-2.07-2.02a2 2 0 0 1 2.07-2.07a2.07 2.07 0 0 1 0 4.13zm15.09 12.93H21v-5.58c0-1.33 0-3.06-1.86-3.06S17 17.16 17 18.63v5.65h-3.56V13h3.32v1.5h.07a3.72 3.72 0 0 1 3.39-1.86c3.59 0 4.26 2.4 4.26 5.45z",fill:"currentColor"},null,-1);var ze={render:function(e,t){return a(),n("svg",be,[ye])}};const Me=v("data-v-e3a9e32c"),_e={expose:[],setup(t){const l=(t,{attrs:a,slots:n})=>(a=e(e({},a),{target:"_blank",rel:"noreferrer",class:["icon-btn mx-2",a.class]}),te.value&&(a.class="mb-2",n={default:()=>a.href.split(":")[1].replace("//","")}),f("a",a,n));return Me(((e,t)=>{const o=pe,i=ve,s=we,c=ze;return a(),n("div",{class:["contact",{"flex flex-col text-right text-xs":m(te)}]},[r(l,{href:"tel:(+598) 91 975 895",title:"Phone"},{default:Me((()=>[r(o)])),_:1}),r(l,{href:"mailto:maximomussini@gmail.com",title:"Email"},{default:Me((()=>[r(i)])),_:1}),r(l,{href:"https://github.com/ElMassimo",title:"GitHub"},{default:Me((()=>[r(s)])),_:1}),m(ae)?(a(),n(l,{key:0,href:"https://linkedin.com/in/maximomussini",title:"LinkedIn",class:"mr-0"},{default:Me((()=>[r(c)])),_:1})):g("",!0)],2)}))},__scopeId:"data-v-e3a9e32c"},ke={class:"flex text-xl mb-2 md:mb-3 relative items-center"},Ce={class:"flex-grow text-3xl font-semibold text-gray-900 dark:text-gray-100 pb-px"},Se={class:"subtitle text-xl ml-0.5"};var je=u({expose:[],setup(e){const{t:t}=d();return(e,l)=>{const o=ie,i=ce,s=_e;return a(),n(b,null,[r("header",ke,[r(i,{class:"mr-3 hidden md:block print:hidden"},{default:x((()=>[r(o)])),_:1}),r("h1",Ce,[r(i,null,{default:x((()=>[y(w(m(t)("name")),1)])),_:1})]),r(s)]),r("h2",Se,w(m(t)("intro.subtitle")),1)],64)}}});const Le={},He=v("data-v-eae62340");z("data-v-eae62340");const Ae={class:"section mt-8 mb-2 text-gray-800 dark:text-gray-400 text-xl font-bold flex items-center"};M();const Re=He(((e,t)=>(a(),n("h3",Ae,[h(e.$slots,"default")]))));Le.render=Re,Le.__scopeId="data-v-eae62340";const Ve={},Oe={class:"section-label text-gray-500 dark:text-gray-400 text-sm font-normal text-left inline-block w-48 sm:w-48 pl-1 mb-1 align-middle"};Ve.render=function(e,t){return a(),n("span",Oe,[h(e.$slots,"default")])};const Te={class:"section-location text-gray-800 dark:text-gray-400 text-base font-semibold"},Ie={key:0,class:"text-gray-600 dark:text-gray-500 text-sm font-normal ml-1.5 mr-1"};var Be=u({expose:[],props:{at:{type:Boolean,default:!1}},setup(e){const{at:t}=e,{t:r}=d();return(e,l)=>(a(),n("span",Te,[t?(a(),n("span",Ie,w(m(r)("location.separator")),1)):g("",!0),h(e.$slots,"default")]))}});const Ee={},Ue={class:"section-title mb-2 text-accent-700 dark:text-accent-400 text-lg font-semibold"};Ee.render=function(e,t){return a(),n("h4",Ue,[h(e.$slots,"default")])};const Ye={},Pe={class:"section-description ml-48"};Ye.render=function(e,t){return a(),n("p",Pe,[h(e.$slots,"default")])};const De={class:"job mt-4"},$e={class:"list-disc ml-4 leading-7"};var qe=u({expose:[],setup(e){const{t:t}=d(),l=re("jobs");return(e,o)=>{const i=Le,s=Ve,c=Be,d=Ee,u=Ye;return a(),n(b,null,[r(i,null,{default:x((()=>[y(w(m(t)("sections.experience")),1)])),_:1}),(a(!0),n(b,null,_(m(l),(e=>(a(),n("div",De,[r(d,null,{default:x((()=>[r(s,null,{default:x((()=>[y(w(e.date),1)])),_:2},1024),r("span",null,w(e.title),1),e.company?(a(),n(c,{key:0,at:""},{default:x((()=>[y(w(e.company),1)])),_:2},1024)):g("",!0)])),_:2},1024),r(u,null,{default:x((()=>[r("ul",$e,[(a(!0),n(b,null,_(e.description,(e=>(a(),n("li",null,w(e),1)))),256))])])),_:2},1024)])))),256))],64)}}});const Fe=v("data-v-77068873");z("data-v-77068873");const Ge={class:"technology grid mt-2"},Qe={class:"technology-items leading-5 flex-grow"};M();var Je=u({expose:[],setup(e){const{t:t}=d(),l=re("technologies");return Fe(((e,o)=>{const i=Le,s=Ve;return a(),n(b,null,[r(i,null,{default:Fe((()=>[y(w(m(t)("sections.tech")),1)])),_:1}),(a(!0),n(b,null,_(m(l),(e=>(a(),n("div",Ge,[r(s,null,{default:Fe((()=>[y(w(e.name),1)])),_:2},1024),r("div",Qe,w(e.items.join(", ")),1)])))),256))],64)}))}});Je.__scopeId="data-v-77068873";var Ne=u({expose:[],setup(e){const{t:t}=d(),l=re("education");return(e,o)=>{const i=Le,s=Ve,c=Be,d=Ee;return a(),n(b,null,[r(i,null,{default:x((()=>[y(w(m(t)("sections.education")),1)])),_:1}),(a(!0),n(b,null,_(m(l),(e=>(a(),n(d,{class:"education mt-2"},{default:x((()=>[r(s,null,{default:x((()=>[y(w(e.date),1)])),_:2},1024),r("span",null,w(e.title),1),r(c,{at:""},{default:x((()=>[y(w(e.university),1)])),_:2},1024)])),_:2},1024)))),256))],64)}}});const Ke=v("data-v-568eb120");z("data-v-568eb120");const We={class:"resume m-auto p-4 sm:p-10 sm:pt-8 bg-white dark:bg-black shadow-md rounded-md transition duration-500 transform print:shadow-none print:p-0 print:m-0 print:transform-none"};M();var Xe=u({expose:[],setup(e){const{t:t}=d();return Ke(((e,t)=>{const l=je,o=qe,i=Je,s=Ne;return a(),n(k,{name:"rise",duration:1e4,appear:""},{default:Ke((()=>[r("div",We,[r(l),r(o),r(i),r(s)])])),_:1})}))}});Xe.__scopeId="data-v-568eb120";const Ze={},et={class:"relative p-2 py-16 sm:px-4 text-gray-700 dark:text-gray-200 print:p-0"};Ze.render=function(e,t){const l=oe,o=Xe;return a(),n("main",et,[r(l),r(o)])};C(Ze,{routes:[]},(e=>{Object.values({"./modules/i18n.ts":H}).map((t=>{var a;return null==(a=t.install)?void 0:a.call(t,e)}))}));