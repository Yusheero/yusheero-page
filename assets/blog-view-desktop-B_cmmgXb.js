import{_ as f}from"./navigation-C4O_fJbo.js";import{h as _,z as c,o as s,c as l,g as t,t as i,F as g,k as m,f as b,a as u,d as k,w as D,b as h}from"./index-BKKJ5i25.js";import{C as w}from"./calendar-CnGOobyv.js";import{d as $}from"./blog-nZRoxvuN.js";import"./navigation-mobile-4B6NWBIc.js";/* empty css                                                                          */import"./createLucideIcon--aI9htqL.js";const x={class:"blog-item"},y={class:"blog-item__content"},B={class:"blog-item__header"},C=["title"],V={class:"blog-item__body"},I={class:"blog-item__text"},N={class:"blog-item__tags"},z={class:"blog-item__footer"},F={key:0,class:"blog-item__date"},T={class:"blog-item__links"},j={__name:"blog-item",props:{blogData:{type:Object,required:!0}},setup(o){const a=o,r=c(()=>a.blogData.title?a.blogData.title.length>25?a.blogData.title.slice(0,25)+"...":a.blogData.title:""),e=c(()=>["Blog","Article","Guide"]);return(n,d)=>(s(),l("div",x,[t("div",y,[t("div",B,[t("h2",{class:"blog-item__title",title:o.blogData.title},i(r.value),9,C)]),t("div",V,[t("p",I,i(o.blogData.text),1)]),t("div",N,[(s(!0),l(g,null,m(e.value,(v,p)=>(s(),l("span",{class:"tag",key:p},i(v),1))),128))]),t("div",z,[o.blogData.date?(s(),l("div",F,[b(u(w),{size:"14"}),t("span",null,i(o.blogData.date),1)])):k("",!0),t("div",T,[t("a",{class:"blog-item__link",href:"#",target:"_blank",rel:"noopener noreferrer",onClick:d[0]||(d[0]=D(()=>{},["prevent"]))}," read ")])])])]))}},q=_(j,[["__scopeId","data-v-b089c82f"]]),A={class:"page-container"},E={class:"blog-view-desktop"},G={class:"blog-view-desktop__content"},L={class:"terminal-container"},M={class:"blogs-container"},O={__name:"blog-view-desktop",setup(o){const a=$.data;return(r,e)=>(s(),l("div",A,[t("div",E,[b(f,{class:"blog-view-desktop__navigation"}),t("div",G,[t("div",L,[e[0]||(e[0]=t("div",{class:"crt-effect"},null,-1)),e[1]||(e[1]=t("div",{class:"scanline-effect"},null,-1)),e[2]||(e[2]=t("div",{class:"noise-effect"},null,-1)),t("div",M,[(s(!0),l(g,null,m(u(a),n=>(s(),h(q,{key:n.id,blogData:n,class:"blog-view-desktop__item"},null,8,["blogData"]))),128))]),e[3]||(e[3]=t("div",{class:"terminal-top-gradient"},null,-1)),e[4]||(e[4]=t("div",{class:"terminal-bottom-gradient"},null,-1))])])])]))}},U=_(O,[["__scopeId","data-v-a488336e"]]);export{U as default};
