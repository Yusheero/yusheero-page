(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Kt(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const tt={},js=[],jt=()=>{},Gr=()=>!1,As=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),fc=t=>t.startsWith("onUpdate:"),nt=Object.assign,hc=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},YE=Object.prototype.hasOwnProperty,lt=(t,e)=>YE.call(t,e),Pe=Array.isArray,Ks=t=>pr(t)==="[object Map]",Rs=t=>pr(t)==="[object Set]",Zu=t=>pr(t)==="[object Date]",d_=t=>pr(t)==="[object RegExp]",ze=t=>typeof t=="function",Xe=t=>typeof t=="string",Sn=t=>typeof t=="symbol",ft=t=>t!==null&&typeof t=="object",dc=t=>(ft(t)||ze(t))&&ze(t.then)&&ze(t.catch),ph=Object.prototype.toString,pr=t=>ph.call(t),p_=t=>pr(t).slice(8,-1),ya=t=>pr(t)==="[object Object]",pc=t=>Xe(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Bi=Kt(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),m_=Kt("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"),mc=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},jE=/-(\w)/g,xt=mc(t=>t.replace(jE,(e,n)=>n?n.toUpperCase():"")),KE=/\B([A-Z])/g,ln=mc(t=>t.replace(KE,"-$1").toLowerCase()),Cs=mc(t=>t.charAt(0).toUpperCase()+t.slice(1)),Zs=mc(t=>t?`on${Cs(t)}`:""),rn=(t,e)=>!Object.is(t,e),Js=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},mh=(t,e,n,i=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:i,value:n})},ta=t=>{const e=parseFloat(t);return isNaN(e)?t:e},na=t=>{const e=Xe(t)?Number(t):NaN;return isNaN(e)?t:e};let Xd;const Ma=()=>Xd||(Xd=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}),ZE=/^[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*$/;function JE(t){return ZE.test(t)?`__props.${t}`:`__props[${JSON.stringify(t)}]`}function QE(t,e){return t+JSON.stringify(e,(n,i)=>typeof i=="function"?i.toString():i)}const eS={TEXT:1,1:"TEXT",CLASS:2,2:"CLASS",STYLE:4,4:"STYLE",PROPS:8,8:"PROPS",FULL_PROPS:16,16:"FULL_PROPS",NEED_HYDRATION:32,32:"NEED_HYDRATION",STABLE_FRAGMENT:64,64:"STABLE_FRAGMENT",KEYED_FRAGMENT:128,128:"KEYED_FRAGMENT",UNKEYED_FRAGMENT:256,256:"UNKEYED_FRAGMENT",NEED_PATCH:512,512:"NEED_PATCH",DYNAMIC_SLOTS:1024,1024:"DYNAMIC_SLOTS",DEV_ROOT_FRAGMENT:2048,2048:"DEV_ROOT_FRAGMENT",CACHED:-1,"-1":"CACHED",BAIL:-2,"-2":"BAIL"},tS={1:"TEXT",2:"CLASS",4:"STYLE",8:"PROPS",16:"FULL_PROPS",32:"NEED_HYDRATION",64:"STABLE_FRAGMENT",128:"KEYED_FRAGMENT",256:"UNKEYED_FRAGMENT",512:"NEED_PATCH",1024:"DYNAMIC_SLOTS",2048:"DEV_ROOT_FRAGMENT",[-1]:"HOISTED",[-2]:"BAIL"},nS={ELEMENT:1,1:"ELEMENT",FUNCTIONAL_COMPONENT:2,2:"FUNCTIONAL_COMPONENT",STATEFUL_COMPONENT:4,4:"STATEFUL_COMPONENT",TEXT_CHILDREN:8,8:"TEXT_CHILDREN",ARRAY_CHILDREN:16,16:"ARRAY_CHILDREN",SLOTS_CHILDREN:32,32:"SLOTS_CHILDREN",TELEPORT:64,64:"TELEPORT",SUSPENSE:128,128:"SUSPENSE",COMPONENT_SHOULD_KEEP_ALIVE:256,256:"COMPONENT_SHOULD_KEEP_ALIVE",COMPONENT_KEPT_ALIVE:512,512:"COMPONENT_KEPT_ALIVE",COMPONENT:6,6:"COMPONENT"},iS={STABLE:1,1:"STABLE",DYNAMIC:2,2:"DYNAMIC",FORWARDED:3,3:"FORWARDED"},sS={1:"STABLE",2:"DYNAMIC",3:"FORWARDED"},rS="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console,Error,Symbol",_h=Kt(rS),oS=_h,$d=2;function __(t,e=0,n=t.length){if(e=Math.max(0,Math.min(e,t.length)),n=Math.max(0,Math.min(n,t.length)),e>n)return"";let i=t.split(/(\r?\n)/);const s=i.filter((a,l)=>l%2===1);i=i.filter((a,l)=>l%2===0);let r=0;const o=[];for(let a=0;a<i.length;a++)if(r+=i[a].length+(s[a]&&s[a].length||0),r>=e){for(let l=a-$d;l<=a+$d||n>r;l++){if(l<0||l>=i.length)continue;const c=l+1;o.push(`${c}${" ".repeat(Math.max(3-String(c).length,0))}|  ${i[l]}`);const u=i[l].length,f=s[l]&&s[l].length||0;if(l===a){const h=e-(r-(u+f)),d=Math.max(1,n>r?u-h:n-e);o.push("   |  "+" ".repeat(h)+"^".repeat(d))}else if(l>a){if(n>r){const h=Math.max(Math.min(n-r,u),1);o.push("   |  "+"^".repeat(h))}r+=u+f}}break}return o.join(`
`)}function So(t){if(Pe(t)){const e={};for(let n=0;n<t.length;n++){const i=t[n],s=Xe(i)?gh(i):So(i);if(s)for(const r in s)e[r]=s[r]}return e}else if(Xe(t)||ft(t))return t}const aS=/;(?![^(]*\))/g,lS=/:([^]+)/,cS=/\/\*[^]*?\*\//g;function gh(t){const e={};return t.replace(cS,"").split(aS).forEach(n=>{if(n){const i=n.split(lS);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function uS(t){if(!t)return"";if(Xe(t))return t;let e="";for(const n in t){const i=t[n];if(Xe(i)||typeof i=="number"){const s=n.startsWith("--")?n:ln(n);e+=`${s}:${i};`}}return e}function xo(t){let e="";if(Xe(t))e=t;else if(Pe(t))for(let n=0;n<t.length;n++){const i=xo(t[n]);i&&(e+=i+" ")}else if(ft(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}function g_(t){if(!t)return null;let{class:e,style:n}=t;return e&&!Xe(e)&&(t.class=xo(e)),n&&(t.style=So(n)),t}const fS="html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot",hS="svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view",dS="annotation,annotation-xml,maction,maligngroup,malignmark,math,menclose,merror,mfenced,mfrac,mfraction,mglyph,mi,mlabeledtr,mlongdiv,mmultiscripts,mn,mo,mover,mpadded,mphantom,mprescripts,mroot,mrow,ms,mscarries,mscarry,msgroup,msline,mspace,msqrt,msrow,mstack,mstyle,msub,msubsup,msup,mtable,mtd,mtext,mtr,munder,munderover,none,semantics",pS="area,base,br,col,embed,hr,img,input,link,meta,param,source,track,wbr",v_=Kt(fS),E_=Kt(hS),S_=Kt(dS),x_=Kt(pS),y_="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",M_=Kt(y_),mS=Kt(y_+",async,autofocus,autoplay,controls,default,defer,disabled,hidden,inert,loop,open,required,reversed,scoped,seamless,checked,muted,multiple,selected");function vh(t){return!!t||t===""}const _S=/[>/="'\u0009\u000a\u000c\u0020]/,tu={};function gS(t){if(tu.hasOwnProperty(t))return tu[t];const e=_S.test(t);return e&&console.error(`unsafe attribute name: ${t}`),tu[t]=!e}const vS={acceptCharset:"accept-charset",className:"class",htmlFor:"for",httpEquiv:"http-equiv"},ES=Kt("accept,accept-charset,accesskey,action,align,allow,alt,async,autocapitalize,autocomplete,autofocus,autoplay,background,bgcolor,border,buffered,capture,challenge,charset,checked,cite,class,code,codebase,color,cols,colspan,content,contenteditable,contextmenu,controls,coords,crossorigin,csp,data,datetime,decoding,default,defer,dir,dirname,disabled,download,draggable,dropzone,enctype,enterkeyhint,for,form,formaction,formenctype,formmethod,formnovalidate,formtarget,headers,height,hidden,high,href,hreflang,http-equiv,icon,id,importance,inert,integrity,ismap,itemprop,keytype,kind,label,lang,language,loading,list,loop,low,manifest,max,maxlength,minlength,media,min,multiple,muted,name,novalidate,open,optimum,pattern,ping,placeholder,poster,preload,radiogroup,readonly,referrerpolicy,rel,required,reversed,rows,rowspan,sandbox,scope,scoped,selected,shape,size,sizes,slot,span,spellcheck,src,srcdoc,srclang,srcset,start,step,style,summary,tabindex,target,title,translate,type,usemap,value,width,wrap"),SS=Kt("xmlns,accent-height,accumulate,additive,alignment-baseline,alphabetic,amplitude,arabic-form,ascent,attributeName,attributeType,azimuth,baseFrequency,baseline-shift,baseProfile,bbox,begin,bias,by,calcMode,cap-height,class,clip,clipPathUnits,clip-path,clip-rule,color,color-interpolation,color-interpolation-filters,color-profile,color-rendering,contentScriptType,contentStyleType,crossorigin,cursor,cx,cy,d,decelerate,descent,diffuseConstant,direction,display,divisor,dominant-baseline,dur,dx,dy,edgeMode,elevation,enable-background,end,exponent,fill,fill-opacity,fill-rule,filter,filterRes,filterUnits,flood-color,flood-opacity,font-family,font-size,font-size-adjust,font-stretch,font-style,font-variant,font-weight,format,from,fr,fx,fy,g1,g2,glyph-name,glyph-orientation-horizontal,glyph-orientation-vertical,glyphRef,gradientTransform,gradientUnits,hanging,height,href,hreflang,horiz-adv-x,horiz-origin-x,id,ideographic,image-rendering,in,in2,intercept,k,k1,k2,k3,k4,kernelMatrix,kernelUnitLength,kerning,keyPoints,keySplines,keyTimes,lang,lengthAdjust,letter-spacing,lighting-color,limitingConeAngle,local,marker-end,marker-mid,marker-start,markerHeight,markerUnits,markerWidth,mask,maskContentUnits,maskUnits,mathematical,max,media,method,min,mode,name,numOctaves,offset,opacity,operator,order,orient,orientation,origin,overflow,overline-position,overline-thickness,panose-1,paint-order,path,pathLength,patternContentUnits,patternTransform,patternUnits,ping,pointer-events,points,pointsAtX,pointsAtY,pointsAtZ,preserveAlpha,preserveAspectRatio,primitiveUnits,r,radius,referrerPolicy,refX,refY,rel,rendering-intent,repeatCount,repeatDur,requiredExtensions,requiredFeatures,restart,result,rotate,rx,ry,scale,seed,shape-rendering,slope,spacing,specularConstant,specularExponent,speed,spreadMethod,startOffset,stdDeviation,stemh,stemv,stitchTiles,stop-color,stop-opacity,strikethrough-position,strikethrough-thickness,string,stroke,stroke-dasharray,stroke-dashoffset,stroke-linecap,stroke-linejoin,stroke-miterlimit,stroke-opacity,stroke-width,style,surfaceScale,systemLanguage,tabindex,tableValues,target,targetX,targetY,text-anchor,text-decoration,text-rendering,textLength,to,transform,transform-origin,type,u1,u2,underline-position,underline-thickness,unicode,unicode-bidi,unicode-range,units-per-em,v-alphabetic,v-hanging,v-ideographic,v-mathematical,values,vector-effect,version,vert-adv-y,vert-origin-x,vert-origin-y,viewBox,viewTarget,visibility,width,widths,word-spacing,writing-mode,x,x-height,x1,x2,xChannelSelector,xlink:actuate,xlink:arcrole,xlink:href,xlink:role,xlink:show,xlink:title,xlink:type,xmlns:xlink,xml:base,xml:lang,xml:space,y,y1,y2,yChannelSelector,z,zoomAndPan"),xS=Kt("accent,accentunder,actiontype,align,alignmentscope,altimg,altimg-height,altimg-valign,altimg-width,alttext,bevelled,close,columnsalign,columnlines,columnspan,denomalign,depth,dir,display,displaystyle,encoding,equalcolumns,equalrows,fence,fontstyle,fontweight,form,frame,framespacing,groupalign,height,href,id,indentalign,indentalignfirst,indentalignlast,indentshift,indentshiftfirst,indentshiftlast,indextype,justify,largetop,largeop,lquote,lspace,mathbackground,mathcolor,mathsize,mathvariant,maxsize,minlabelspacing,mode,other,overflow,position,rowalign,rowlines,rowspan,rquote,rspace,scriptlevel,scriptminsize,scriptsizemultiplier,selection,separator,separators,shift,side,src,stackalign,stretchy,subscriptshift,superscriptshift,symmetric,voffset,width,widths,xlink:href,xlink:show,xlink:type,xmlns");function yS(t){if(t==null)return!1;const e=typeof t;return e==="string"||e==="number"||e==="boolean"}const MS=/["'&<>]/;function TS(t){const e=""+t,n=MS.exec(e);if(!n)return e;let i="",s,r,o=0;for(r=n.index;r<e.length;r++){switch(e.charCodeAt(r)){case 34:s="&quot;";break;case 38:s="&amp;";break;case 39:s="&#39;";break;case 60:s="&lt;";break;case 62:s="&gt;";break;default:continue}o!==r&&(i+=e.slice(o,r)),o=r+1,i+=s}return o!==r?i+e.slice(o,r):i}const bS=/^-?>|<!--|-->|--!>|<!-$/g;function AS(t){return t.replace(bS,"")}const T_=/[ !"#$%&'()*+,./:;<=>?@[\\\]^`{|}~]/g;function RS(t,e){return t.replace(T_,n=>e?n==='"'?'\\\\\\"':`\\\\${n}`:`\\${n}`)}function CS(t,e){if(t.length!==e.length)return!1;let n=!0;for(let i=0;n&&i<t.length;i++)n=Gi(t[i],e[i]);return n}function Gi(t,e){if(t===e)return!0;let n=Zu(t),i=Zu(e);if(n||i)return n&&i?t.getTime()===e.getTime():!1;if(n=Sn(t),i=Sn(e),n||i)return t===e;if(n=Pe(t),i=Pe(e),n||i)return n&&i?CS(t,e):!1;if(n=ft(t),i=ft(e),n||i){if(!n||!i)return!1;const s=Object.keys(t).length,r=Object.keys(e).length;if(s!==r)return!1;for(const o in t){const a=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!Gi(t[o],e[o]))return!1}}return String(t)===String(e)}function Ta(t,e){return t.findIndex(n=>Gi(n,e))}const b_=t=>!!(t&&t.__v_isRef===!0),En=t=>Xe(t)?t:t==null?"":Pe(t)||ft(t)&&(t.toString===ph||!ze(t.toString))?b_(t)?En(t.value):JSON.stringify(t,A_,2):String(t),A_=(t,e)=>b_(e)?A_(t,e.value):Ks(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[i,s],r)=>(n[nu(i,r)+" =>"]=s,n),{})}:Rs(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>nu(n))}:Sn(e)?nu(e):ft(e)&&!Pe(e)&&!ya(e)?String(e):e,nu=(t,e="")=>{var n;return Sn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t},wS=Object.freeze(Object.defineProperty({__proto__:null,EMPTY_ARR:js,EMPTY_OBJ:tt,NO:Gr,NOOP:jt,PatchFlagNames:tS,PatchFlags:eS,ShapeFlags:nS,SlotFlags:iS,camelize:xt,capitalize:Cs,cssVarNameEscapeSymbolsRE:T_,def:mh,escapeHtml:TS,escapeHtmlComment:AS,extend:nt,genCacheKey:QE,genPropsAccessExp:JE,generateCodeFrame:__,getEscapedCssVarName:RS,getGlobalThis:Ma,hasChanged:rn,hasOwn:lt,hyphenate:ln,includeBooleanAttr:vh,invokeArrayFns:Js,isArray:Pe,isBooleanAttr:mS,isBuiltInDirective:m_,isDate:Zu,isFunction:ze,isGloballyAllowed:_h,isGloballyWhitelisted:oS,isHTMLTag:v_,isIntegerKey:pc,isKnownHtmlAttr:ES,isKnownMathMLAttr:xS,isKnownSvgAttr:SS,isMap:Ks,isMathMLTag:S_,isModelListener:fc,isObject:ft,isOn:As,isPlainObject:ya,isPromise:dc,isRegExp:d_,isRenderableAttrValue:yS,isReservedProp:Bi,isSSRSafeAttrName:gS,isSVGTag:E_,isSet:Rs,isSpecialBooleanAttr:M_,isString:Xe,isSymbol:Sn,isVoidTag:x_,looseEqual:Gi,looseIndexOf:Ta,looseToNumber:ta,makeMap:Kt,normalizeClass:xo,normalizeProps:g_,normalizeStyle:So,objectToString:ph,parseStringStyle:gh,propsToAttrMap:vS,remove:hc,slotFlagsText:sS,stringifyStyle:uS,toDisplayString:En,toHandlerKey:Zs,toNumber:na,toRawType:p_,toTypeString:pr},Symbol.toStringTag,{value:"Module"}));/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let mn;class Eh{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=mn,!e&&mn&&(this.index=(mn.scopes||(mn.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=mn;try{return mn=this,e()}finally{mn=n}}}on(){mn=this}off(){mn=this.parent}stop(e){if(this._active){this._active=!1;let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(this.effects.length=0,n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Sh(t){return new Eh(t)}function xh(){return mn}function R_(t,e=!1){mn&&mn.cleanups.push(t)}let St;const iu=new WeakSet;class ia{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,mn&&mn.active&&mn.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,iu.has(this)&&(iu.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||w_(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,qd(this),P_(this);const e=St,n=ri;St=this,ri=!0;try{return this.fn()}finally{I_(this),St=e,ri=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Th(e);this.deps=this.depsTail=void 0,qd(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?iu.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Ju(this)&&this.run()}get dirty(){return Ju(this)}}let C_=0,Wo,Xo;function w_(t,e=!1){if(t.flags|=8,e){t.next=Xo,Xo=t;return}t.next=Wo,Wo=t}function yh(){C_++}function Mh(){if(--C_>0)return;if(Xo){let e=Xo;for(Xo=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;Wo;){let e=Wo;for(Wo=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){t||(t=i)}e=n}}if(t)throw t}function P_(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function I_(t){let e,n=t.depsTail,i=n;for(;i;){const s=i.prevDep;i.version===-1?(i===n&&(n=s),Th(i),PS(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}t.deps=e,t.depsTail=n}function Ju(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(N_(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function N_(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===sa))return;t.globalVersion=sa;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!Ju(t)){t.flags&=-3;return}const n=St,i=ri;St=t,ri=!0;try{P_(t);const s=t.fn(t._value);(e.version===0||rn(s,t._value))&&(t._value=s,e.version++)}catch(s){throw e.version++,s}finally{St=n,ri=i,I_(t),t.flags&=-3}}function Th(t,e=!1){const{dep:n,prevSub:i,nextSub:s}=t;if(i&&(i.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=i,t.nextSub=void 0),n.subs===t&&(n.subs=i,!i&&n.computed)){n.computed.flags&=-5;for(let r=n.computed.deps;r;r=r.nextDep)Th(r,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function PS(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}function IS(t,e){t.effect instanceof ia&&(t=t.effect.fn);const n=new ia(t);e&&nt(n,e);try{n.run()}catch(s){throw n.stop(),s}const i=n.run.bind(n);return i.effect=n,i}function NS(t){t.effect.stop()}let ri=!0;const D_=[];function ws(){D_.push(ri),ri=!1}function Ps(){const t=D_.pop();ri=t===void 0?!0:t}function qd(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=St;St=void 0;try{e()}finally{St=n}}}let sa=0;class DS{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class _c{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!St||!ri||St===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==St)n=this.activeLink=new DS(St,this),St.deps?(n.prevDep=St.depsTail,St.depsTail.nextDep=n,St.depsTail=n):St.deps=St.depsTail=n,L_(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const i=n.nextDep;i.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=i),n.prevDep=St.depsTail,n.nextDep=void 0,St.depsTail.nextDep=n,St.depsTail=n,St.deps===n&&(St.deps=i)}return n}trigger(e){this.version++,sa++,this.notify(e)}notify(e){yh();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Mh()}}}function L_(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)L_(i)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Vl=new WeakMap,Qs=Symbol(""),Qu=Symbol(""),ra=Symbol("");function on(t,e,n){if(ri&&St){let i=Vl.get(t);i||Vl.set(t,i=new Map);let s=i.get(n);s||(i.set(n,s=new _c),s.map=i,s.key=n),s.track()}}function Ni(t,e,n,i,s,r){const o=Vl.get(t);if(!o){sa++;return}const a=l=>{l&&l.trigger()};if(yh(),e==="clear")o.forEach(a);else{const l=Pe(t),c=l&&pc(n);if(l&&n==="length"){const u=Number(i);o.forEach((f,h)=>{(h==="length"||h===ra||!Sn(h)&&h>=u)&&a(f)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),c&&a(o.get(ra)),e){case"add":l?c&&a(o.get("length")):(a(o.get(Qs)),Ks(t)&&a(o.get(Qu)));break;case"delete":l||(a(o.get(Qs)),Ks(t)&&a(o.get(Qu)));break;case"set":Ks(t)&&a(o.get(Qs));break}}Mh()}function LS(t,e){const n=Vl.get(t);return n&&n.get(e)}function Sr(t){const e=it(t);return e===t?e:(on(e,"iterate",ra),Un(t)?e:e.map(an))}function gc(t){return on(t=it(t),"iterate",ra),t}const OS={__proto__:null,[Symbol.iterator](){return su(this,Symbol.iterator,an)},concat(...t){return Sr(this).concat(...t.map(e=>Pe(e)?Sr(e):e))},entries(){return su(this,"entries",t=>(t[1]=an(t[1]),t))},every(t,e){return xi(this,"every",t,e,void 0,arguments)},filter(t,e){return xi(this,"filter",t,e,n=>n.map(an),arguments)},find(t,e){return xi(this,"find",t,e,an,arguments)},findIndex(t,e){return xi(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return xi(this,"findLast",t,e,an,arguments)},findLastIndex(t,e){return xi(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return xi(this,"forEach",t,e,void 0,arguments)},includes(...t){return ru(this,"includes",t)},indexOf(...t){return ru(this,"indexOf",t)},join(t){return Sr(this).join(t)},lastIndexOf(...t){return ru(this,"lastIndexOf",t)},map(t,e){return xi(this,"map",t,e,void 0,arguments)},pop(){return Do(this,"pop")},push(...t){return Do(this,"push",t)},reduce(t,...e){return Yd(this,"reduce",t,e)},reduceRight(t,...e){return Yd(this,"reduceRight",t,e)},shift(){return Do(this,"shift")},some(t,e){return xi(this,"some",t,e,void 0,arguments)},splice(...t){return Do(this,"splice",t)},toReversed(){return Sr(this).toReversed()},toSorted(t){return Sr(this).toSorted(t)},toSpliced(...t){return Sr(this).toSpliced(...t)},unshift(...t){return Do(this,"unshift",t)},values(){return su(this,"values",an)}};function su(t,e,n){const i=gc(t),s=i[e]();return i!==t&&!Un(t)&&(s._next=s.next,s.next=()=>{const r=s._next();return r.value&&(r.value=n(r.value)),r}),s}const US=Array.prototype;function xi(t,e,n,i,s,r){const o=gc(t),a=o!==t&&!Un(t),l=o[e];if(l!==US[e]){const f=l.apply(t,r);return a?an(f):f}let c=n;o!==t&&(a?c=function(f,h){return n.call(this,an(f),h,t)}:n.length>2&&(c=function(f,h){return n.call(this,f,h,t)}));const u=l.call(o,c,i);return a&&s?s(u):u}function Yd(t,e,n,i){const s=gc(t);let r=n;return s!==t&&(Un(t)?n.length>3&&(r=function(o,a,l){return n.call(this,o,a,l,t)}):r=function(o,a,l){return n.call(this,o,an(a),l,t)}),s[e](r,...i)}function ru(t,e,n){const i=it(t);on(i,"iterate",ra);const s=i[e](...n);return(s===-1||s===!1)&&Sc(n[0])?(n[0]=it(n[0]),i[e](...n)):s}function Do(t,e,n=[]){ws(),yh();const i=it(t)[e].apply(t,n);return Mh(),Ps(),i}const FS=Kt("__proto__,__v_isRef,__isVue"),O_=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Sn));function kS(t){Sn(t)||(t=String(t));const e=it(this);return on(e,"has",t),e.hasOwnProperty(t)}class U_{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,i){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,r=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return r;if(n==="__v_raw")return i===(s?r?z_:H_:r?V_:B_).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=Pe(e);if(!s){let l;if(o&&(l=OS[n]))return l;if(n==="hasOwnProperty")return kS}const a=Reflect.get(e,n,Rt(e)?e:i);return(Sn(n)?O_.has(n):FS(n))||(s||on(e,"get",n),r)?a:Rt(a)?o&&pc(n)?a:a.value:ft(a)?s?Ah(a):yo(a):a}}class F_ extends U_{constructor(e=!1){super(!1,e)}set(e,n,i,s){let r=e[n];if(!this._isShallow){const l=xs(r);if(!Un(i)&&!xs(i)&&(r=it(r),i=it(i)),!Pe(e)&&Rt(r)&&!Rt(i))return l?!1:(r.value=i,!0)}const o=Pe(e)&&pc(n)?Number(n)<e.length:lt(e,n),a=Reflect.set(e,n,i,Rt(e)?e:s);return e===it(s)&&(o?rn(i,r)&&Ni(e,"set",n,i):Ni(e,"add",n,i)),a}deleteProperty(e,n){const i=lt(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&i&&Ni(e,"delete",n,void 0),s}has(e,n){const i=Reflect.has(e,n);return(!Sn(n)||!O_.has(n))&&on(e,"has",n),i}ownKeys(e){return on(e,"iterate",Pe(e)?"length":Qs),Reflect.ownKeys(e)}}class k_ extends U_{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const BS=new F_,VS=new k_,HS=new F_(!0),zS=new k_(!0),ef=t=>t,Va=t=>Reflect.getPrototypeOf(t);function GS(t,e,n){return function(...i){const s=this.__v_raw,r=it(s),o=Ks(r),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=s[t](...i),u=n?ef:e?tf:an;return!e&&on(r,"iterate",l?Qu:Qs),{next(){const{value:f,done:h}=c.next();return h?{value:f,done:h}:{value:a?[u(f[0]),u(f[1])]:u(f),done:h}},[Symbol.iterator](){return this}}}}function Ha(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function WS(t,e){const n={get(s){const r=this.__v_raw,o=it(r),a=it(s);t||(rn(s,a)&&on(o,"get",s),on(o,"get",a));const{has:l}=Va(o),c=e?ef:t?tf:an;if(l.call(o,s))return c(r.get(s));if(l.call(o,a))return c(r.get(a));r!==o&&r.get(s)},get size(){const s=this.__v_raw;return!t&&on(it(s),"iterate",Qs),Reflect.get(s,"size",s)},has(s){const r=this.__v_raw,o=it(r),a=it(s);return t||(rn(s,a)&&on(o,"has",s),on(o,"has",a)),s===a?r.has(s):r.has(s)||r.has(a)},forEach(s,r){const o=this,a=o.__v_raw,l=it(a),c=e?ef:t?tf:an;return!t&&on(l,"iterate",Qs),a.forEach((u,f)=>s.call(r,c(u),c(f),o))}};return nt(n,t?{add:Ha("add"),set:Ha("set"),delete:Ha("delete"),clear:Ha("clear")}:{add(s){!e&&!Un(s)&&!xs(s)&&(s=it(s));const r=it(this);return Va(r).has.call(r,s)||(r.add(s),Ni(r,"add",s,s)),this},set(s,r){!e&&!Un(r)&&!xs(r)&&(r=it(r));const o=it(this),{has:a,get:l}=Va(o);let c=a.call(o,s);c||(s=it(s),c=a.call(o,s));const u=l.call(o,s);return o.set(s,r),c?rn(r,u)&&Ni(o,"set",s,r):Ni(o,"add",s,r),this},delete(s){const r=it(this),{has:o,get:a}=Va(r);let l=o.call(r,s);l||(s=it(s),l=o.call(r,s)),a&&a.call(r,s);const c=r.delete(s);return l&&Ni(r,"delete",s,void 0),c},clear(){const s=it(this),r=s.size!==0,o=s.clear();return r&&Ni(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=GS(s,t,e)}),n}function vc(t,e){const n=WS(t,e);return(i,s,r)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?i:Reflect.get(lt(n,s)&&s in i?n:i,s,r)}const XS={get:vc(!1,!1)},$S={get:vc(!1,!0)},qS={get:vc(!0,!1)},YS={get:vc(!0,!0)},B_=new WeakMap,V_=new WeakMap,H_=new WeakMap,z_=new WeakMap;function jS(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function KS(t){return t.__v_skip||!Object.isExtensible(t)?0:jS(p_(t))}function yo(t){return xs(t)?t:Ec(t,!1,BS,XS,B_)}function bh(t){return Ec(t,!1,HS,$S,V_)}function Ah(t){return Ec(t,!0,VS,qS,H_)}function ZS(t){return Ec(t,!0,zS,YS,z_)}function Ec(t,e,n,i,s){if(!ft(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=s.get(t);if(r)return r;const o=KS(t);if(o===0)return t;const a=new Proxy(t,o===2?i:n);return s.set(t,a),a}function mi(t){return xs(t)?mi(t.__v_raw):!!(t&&t.__v_isReactive)}function xs(t){return!!(t&&t.__v_isReadonly)}function Un(t){return!!(t&&t.__v_isShallow)}function Sc(t){return t?!!t.__v_raw:!1}function it(t){const e=t&&t.__v_raw;return e?it(e):t}function xc(t){return!lt(t,"__v_skip")&&Object.isExtensible(t)&&mh(t,"__v_skip",!0),t}const an=t=>ft(t)?yo(t):t,tf=t=>ft(t)?Ah(t):t;function Rt(t){return t?t.__v_isRef===!0:!1}function _i(t){return G_(t,!1)}function Rh(t){return G_(t,!0)}function G_(t,e){return Rt(t)?t:new JS(t,e)}class JS{constructor(e,n){this.dep=new _c,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:it(e),this._value=n?e:an(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,i=this.__v_isShallow||Un(e)||xs(e);e=i?e:it(e),rn(e,n)&&(this._rawValue=e,this._value=i?e:an(e),this.dep.trigger())}}function QS(t){t.dep&&t.dep.trigger()}function Re(t){return Rt(t)?t.value:t}function ex(t){return ze(t)?t():Re(t)}const tx={get:(t,e,n)=>e==="__v_raw"?t:Re(Reflect.get(t,e,n)),set:(t,e,n,i)=>{const s=t[e];return Rt(s)&&!Rt(n)?(s.value=n,!0):Reflect.set(t,e,n,i)}};function Ch(t){return mi(t)?t:new Proxy(t,tx)}class nx{constructor(e){this.__v_isRef=!0,this._value=void 0;const n=this.dep=new _c,{get:i,set:s}=e(n.track.bind(n),n.trigger.bind(n));this._get=i,this._set=s}get value(){return this._value=this._get()}set value(e){this._set(e)}}function W_(t){return new nx(t)}function X_(t){const e=Pe(t)?new Array(t.length):{};for(const n in t)e[n]=$_(t,n);return e}class ix{constructor(e,n,i){this._object=e,this._key=n,this._defaultValue=i,this.__v_isRef=!0,this._value=void 0}get value(){const e=this._object[this._key];return this._value=e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return LS(it(this._object),this._key)}}class sx{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0,this._value=void 0}get value(){return this._value=this._getter()}}function rx(t,e,n){return Rt(t)?t:ze(t)?new sx(t):ft(t)&&arguments.length>1?$_(t,e,n):_i(t)}function $_(t,e,n){const i=t[e];return Rt(i)?i:new ix(t,e,n)}class ox{constructor(e,n,i){this.fn=e,this.setter=n,this._value=void 0,this.dep=new _c(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=sa-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&St!==this)return w_(this,!0),!0}get value(){const e=this.dep.track();return N_(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function ax(t,e,n=!1){let i,s;return ze(t)?i=t:(i=t.get,s=t.set),new ox(i,s,n)}const lx={GET:"get",HAS:"has",ITERATE:"iterate"},cx={SET:"set",ADD:"add",DELETE:"delete",CLEAR:"clear"},za={},Hl=new WeakMap;let os;function ux(){return os}function q_(t,e=!1,n=os){if(n){let i=Hl.get(n);i||Hl.set(n,i=[]),i.push(t)}}function fx(t,e,n=tt){const{immediate:i,deep:s,once:r,scheduler:o,augmentJob:a,call:l}=n,c=M=>s?M:Un(M)||s===!1||s===0?Di(M,1):Di(M);let u,f,h,d,g=!1,E=!1;if(Rt(t)?(f=()=>t.value,g=Un(t)):mi(t)?(f=()=>c(t),g=!0):Pe(t)?(E=!0,g=t.some(M=>mi(M)||Un(M)),f=()=>t.map(M=>{if(Rt(M))return M.value;if(mi(M))return c(M);if(ze(M))return l?l(M,2):M()})):ze(t)?e?f=l?()=>l(t,2):t:f=()=>{if(h){ws();try{h()}finally{Ps()}}const M=os;os=u;try{return l?l(t,3,[d]):t(d)}finally{os=M}}:f=jt,e&&s){const M=f,P=s===!0?1/0:s;f=()=>Di(M(),P)}const _=xh(),p=()=>{u.stop(),_&&_.active&&hc(_.effects,u)};if(r&&e){const M=e;e=(...P)=>{M(...P),p()}}let R=E?new Array(t.length).fill(za):za;const x=M=>{if(!(!(u.flags&1)||!u.dirty&&!M))if(e){const P=u.run();if(s||g||(E?P.some((N,T)=>rn(N,R[T])):rn(P,R))){h&&h();const N=os;os=u;try{const T=[P,R===za?void 0:E&&R[0]===za?[]:R,d];l?l(e,3,T):e(...T),R=P}finally{os=N}}}else u.run()};return a&&a(x),u=new ia(f),u.scheduler=o?()=>o(x,!1):x,d=M=>q_(M,!1,u),h=u.onStop=()=>{const M=Hl.get(u);if(M){if(l)l(M,4);else for(const P of M)P();Hl.delete(u)}},e?i?x(!0):R=u.run():o?o(x.bind(null,!0),!0):u.run(),p.pause=u.pause.bind(u),p.resume=u.resume.bind(u),p.stop=p,p}function Di(t,e=1/0,n){if(e<=0||!ft(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,Rt(t))Di(t.value,e,n);else if(Pe(t))for(let i=0;i<t.length;i++)Di(t[i],e,n);else if(Rs(t)||Ks(t))t.forEach(i=>{Di(i,e,n)});else if(ya(t)){for(const i in t)Di(t[i],e,n);for(const i of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,i)&&Di(t[i],e,n)}return t}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const Y_=[];function hx(t){Y_.push(t)}function dx(){Y_.pop()}function px(t,e){}const mx={SETUP_FUNCTION:0,0:"SETUP_FUNCTION",RENDER_FUNCTION:1,1:"RENDER_FUNCTION",NATIVE_EVENT_HANDLER:5,5:"NATIVE_EVENT_HANDLER",COMPONENT_EVENT_HANDLER:6,6:"COMPONENT_EVENT_HANDLER",VNODE_HOOK:7,7:"VNODE_HOOK",DIRECTIVE_HOOK:8,8:"DIRECTIVE_HOOK",TRANSITION_HOOK:9,9:"TRANSITION_HOOK",APP_ERROR_HANDLER:10,10:"APP_ERROR_HANDLER",APP_WARN_HANDLER:11,11:"APP_WARN_HANDLER",FUNCTION_REF:12,12:"FUNCTION_REF",ASYNC_COMPONENT_LOADER:13,13:"ASYNC_COMPONENT_LOADER",SCHEDULER:14,14:"SCHEDULER",COMPONENT_UPDATE:15,15:"COMPONENT_UPDATE",APP_UNMOUNT_CLEANUP:16,16:"APP_UNMOUNT_CLEANUP"},_x={sp:"serverPrefetch hook",bc:"beforeCreate hook",c:"created hook",bm:"beforeMount hook",m:"mounted hook",bu:"beforeUpdate hook",u:"updated",bum:"beforeUnmount hook",um:"unmounted hook",a:"activated hook",da:"deactivated hook",ec:"errorCaptured hook",rtc:"renderTracked hook",rtg:"renderTriggered hook",0:"setup function",1:"render function",2:"watcher getter",3:"watcher callback",4:"watcher cleanup function",5:"native event handler",6:"component event handler",7:"vnode hook",8:"directive hook",9:"transition hook",10:"app errorHandler",11:"app warnHandler",12:"ref function",13:"async component loader",14:"scheduler flush",15:"component update",16:"app unmount cleanup function"};function Mo(t,e,n,i){try{return i?t(...i):t()}catch(s){mr(s,e,n)}}function qn(t,e,n,i){if(ze(t)){const s=Mo(t,e,n,i);return s&&dc(s)&&s.catch(r=>{mr(r,e,n)}),s}if(Pe(t)){const s=[];for(let r=0;r<t.length;r++)s.push(qn(t[r],e,n,i));return s}}function mr(t,e,n,i=!0){const s=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||tt;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const u=a.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](t,l,c)===!1)return}a=a.parent}if(r){ws(),Mo(r,null,10,[t,l,c]),Ps();return}}gx(t,n,s,i,o)}function gx(t,e,n,i=!0,s=!1){if(s)throw t;console.error(t)}const _n=[];let ui=-1;const qr=[];let as=null,kr=0;const j_=Promise.resolve();let zl=null;function To(t){const e=zl||j_;return t?e.then(this?t.bind(this):t):e}function vx(t){let e=ui+1,n=_n.length;for(;e<n;){const i=e+n>>>1,s=_n[i],r=aa(s);r<t||r===t&&s.flags&2?e=i+1:n=i}return e}function wh(t){if(!(t.flags&1)){const e=aa(t),n=_n[_n.length-1];!n||!(t.flags&2)&&e>=aa(n)?_n.push(t):_n.splice(vx(e),0,t),t.flags|=1,K_()}}function K_(){zl||(zl=j_.then(Z_))}function oa(t){Pe(t)?qr.push(...t):as&&t.id===-1?as.splice(kr+1,0,t):t.flags&1||(qr.push(t),t.flags|=1),K_()}function jd(t,e,n=ui+1){for(;n<_n.length;n++){const i=_n[n];if(i&&i.flags&2){if(t&&i.id!==t.uid)continue;_n.splice(n,1),n--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function Gl(t){if(qr.length){const e=[...new Set(qr)].sort((n,i)=>aa(n)-aa(i));if(qr.length=0,as){as.push(...e);return}for(as=e,kr=0;kr<as.length;kr++){const n=as[kr];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}as=null,kr=0}}const aa=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Z_(t){try{for(ui=0;ui<_n.length;ui++){const e=_n[ui];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Mo(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;ui<_n.length;ui++){const e=_n[ui];e&&(e.flags&=-2)}ui=-1,_n.length=0,Gl(),zl=null,(_n.length||qr.length)&&Z_()}}let Br,Ga=[];function J_(t,e){var n,i;Br=t,Br?(Br.enabled=!0,Ga.forEach(({event:s,args:r})=>Br.emit(s,...r)),Ga=[]):typeof window<"u"&&window.HTMLElement&&!((i=(n=window.navigator)==null?void 0:n.userAgent)!=null&&i.includes("jsdom"))?((e.__VUE_DEVTOOLS_HOOK_REPLAY__=e.__VUE_DEVTOOLS_HOOK_REPLAY__||[]).push(r=>{J_(r,e)}),setTimeout(()=>{Br||(e.__VUE_DEVTOOLS_HOOK_REPLAY__=null,Ga=[])},3e3)):Ga=[]}let Wt=null,yc=null;function la(t){const e=Wt;return Wt=t,yc=t&&t.type.__scopeId||null,e}function Ex(t){yc=t}function Sx(){yc=null}const xx=t=>At;function At(t,e=Wt,n){if(!e||t._n)return t;const i=(...s)=>{i._d&&uf(-1);const r=la(e);let o;try{o=t(...s)}finally{la(r),i._d&&uf(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function yx(t,e){if(Wt===null)return t;const n=wa(Wt),i=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[r,o,a,l=tt]=e[s];r&&(ze(r)&&(r={mounted:r,updated:r}),r.deep&&Di(o),i.push({dir:r,instance:n,value:o,oldValue:void 0,arg:a,modifiers:l}))}return t}function fi(t,e,n,i){const s=t.dirs,r=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[i];l&&(ws(),qn(l,n,8,[t.el,a,t,e]),Ps())}}const Q_=Symbol("_vte"),eg=t=>t.__isTeleport,$o=t=>t&&(t.disabled||t.disabled===""),Kd=t=>t&&(t.defer||t.defer===""),Zd=t=>typeof SVGElement<"u"&&t instanceof SVGElement,Jd=t=>typeof MathMLElement=="function"&&t instanceof MathMLElement,nf=(t,e)=>{const n=t&&t.to;return Xe(n)?e?e(n):null:n},tg={name:"Teleport",__isTeleport:!0,process(t,e,n,i,s,r,o,a,l,c){const{mc:u,pc:f,pbc:h,o:{insert:d,querySelector:g,createText:E,createComment:_}}=c,p=$o(e.props);let{shapeFlag:R,children:x,dynamicChildren:M}=e;if(t==null){const P=e.el=E(""),N=e.anchor=E("");d(P,n,i),d(N,n,i);const T=(m,v)=>{R&16&&(s&&s.isCE&&(s.ce._teleportTarget=m),u(x,m,v,s,r,o,a,l))},A=()=>{const m=e.target=nf(e.props,g),v=ng(m,e,E,d);m&&(o!=="svg"&&Zd(m)?o="svg":o!=="mathml"&&Jd(m)&&(o="mathml"),p||(T(m,v),Tl(e,!1)))};p&&(T(n,N),Tl(e,!0)),Kd(e.props)?zt(()=>{A(),e.el.__isMounted=!0},r):A()}else{if(Kd(e.props)&&!t.el.__isMounted){zt(()=>{tg.process(t,e,n,i,s,r,o,a,l,c),delete t.el.__isMounted},r);return}e.el=t.el,e.targetStart=t.targetStart;const P=e.anchor=t.anchor,N=e.target=t.target,T=e.targetAnchor=t.targetAnchor,A=$o(t.props),m=A?n:N,v=A?P:T;if(o==="svg"||Zd(N)?o="svg":(o==="mathml"||Jd(N))&&(o="mathml"),M?(h(t.dynamicChildren,M,m,s,r,o,a),zh(t,e,!0)):l||f(t,e,m,v,s,r,o,a,!1),p)A?e.props&&t.props&&e.props.to!==t.props.to&&(e.props.to=t.props.to):Wa(e,n,P,c,1);else if((e.props&&e.props.to)!==(t.props&&t.props.to)){const C=e.target=nf(e.props,g);C&&Wa(e,C,null,c,0)}else A&&Wa(e,N,T,c,1);Tl(e,p)}},remove(t,e,n,{um:i,o:{remove:s}},r){const{shapeFlag:o,children:a,anchor:l,targetStart:c,targetAnchor:u,target:f,props:h}=t;if(f&&(s(c),s(u)),r&&s(l),o&16){const d=r||!$o(h);for(let g=0;g<a.length;g++){const E=a[g];i(E,e,n,d,!!E.dynamicChildren)}}},move:Wa,hydrate:Mx};function Wa(t,e,n,{o:{insert:i},m:s},r=2){r===0&&i(t.targetAnchor,e,n);const{el:o,anchor:a,shapeFlag:l,children:c,props:u}=t,f=r===2;if(f&&i(o,e,n),(!f||$o(u))&&l&16)for(let h=0;h<c.length;h++)s(c[h],e,n,2);f&&i(a,e,n)}function Mx(t,e,n,i,s,r,{o:{nextSibling:o,parentNode:a,querySelector:l,insert:c,createText:u}},f){const h=e.target=nf(e.props,l);if(h){const d=$o(e.props),g=h._lpa||h.firstChild;if(e.shapeFlag&16)if(d)e.anchor=f(o(t),e,a(t),n,i,s,r),e.targetStart=g,e.targetAnchor=g&&o(g);else{e.anchor=o(t);let E=g;for(;E;){if(E&&E.nodeType===8){if(E.data==="teleport start anchor")e.targetStart=E;else if(E.data==="teleport anchor"){e.targetAnchor=E,h._lpa=e.targetAnchor&&o(e.targetAnchor);break}}E=o(E)}e.targetAnchor||ng(h,e,u,c),f(g&&o(g),e,h,n,i,s,r)}Tl(e,d)}return e.anchor&&o(e.anchor)}const Tx=tg;function Tl(t,e){const n=t.ctx;if(n&&n.ut){let i,s;for(e?(i=t.el,s=t.anchor):(i=t.targetStart,s=t.targetAnchor);i&&i!==s;)i.nodeType===1&&i.setAttribute("data-v-owner",n.uid),i=i.nextSibling;n.ut()}}function ng(t,e,n,i){const s=e.targetStart=n(""),r=e.targetAnchor=n("");return s[Q_]=r,t&&(i(s,t),i(r,t)),r}const ls=Symbol("_leaveCb"),Xa=Symbol("_enterCb");function Ph(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return _r(()=>{t.isMounted=!0}),Ac(()=>{t.isUnmounting=!0}),t}const Hn=[Function,Array],Ih={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Hn,onEnter:Hn,onAfterEnter:Hn,onEnterCancelled:Hn,onBeforeLeave:Hn,onLeave:Hn,onAfterLeave:Hn,onLeaveCancelled:Hn,onBeforeAppear:Hn,onAppear:Hn,onAfterAppear:Hn,onAppearCancelled:Hn},ig=t=>{const e=t.subTree;return e.component?ig(e.component):e},bx={name:"BaseTransition",props:Ih,setup(t,{slots:e}){const n=Yn(),i=Ph();return()=>{const s=e.default&&Mc(e.default(),!0);if(!s||!s.length)return;const r=sg(s),o=it(t),{mode:a}=o;if(i.isLeaving)return ou(r);const l=Qd(r);if(!l)return ou(r);let c=eo(l,o,i,n,f=>c=f);l.type!==Bt&&Wi(l,c);let u=n.subTree&&Qd(n.subTree);if(u&&u.type!==Bt&&!ni(l,u)&&ig(n).type!==Bt){let f=eo(u,o,i,n);if(Wi(u,f),a==="out-in"&&l.type!==Bt)return i.isLeaving=!0,f.afterLeave=()=>{i.isLeaving=!1,n.job.flags&8||n.update(),delete f.afterLeave,u=void 0},ou(r);a==="in-out"&&l.type!==Bt?f.delayLeave=(h,d,g)=>{const E=og(i,u);E[String(u.key)]=u,h[ls]=()=>{d(),h[ls]=void 0,delete c.delayedLeave,u=void 0},c.delayedLeave=()=>{g(),delete c.delayedLeave,u=void 0}}:u=void 0}else u&&(u=void 0);return r}}};function sg(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==Bt){e=n;break}}return e}const rg=bx;function og(t,e){const{leavingVNodes:n}=t;let i=n.get(e.type);return i||(i=Object.create(null),n.set(e.type,i)),i}function eo(t,e,n,i,s){const{appear:r,mode:o,persisted:a=!1,onBeforeEnter:l,onEnter:c,onAfterEnter:u,onEnterCancelled:f,onBeforeLeave:h,onLeave:d,onAfterLeave:g,onLeaveCancelled:E,onBeforeAppear:_,onAppear:p,onAfterAppear:R,onAppearCancelled:x}=e,M=String(t.key),P=og(n,t),N=(m,v)=>{m&&qn(m,i,9,v)},T=(m,v)=>{const C=v[1];N(m,v),Pe(m)?m.every(I=>I.length<=1)&&C():m.length<=1&&C()},A={mode:o,persisted:a,beforeEnter(m){let v=l;if(!n.isMounted)if(r)v=_||l;else return;m[ls]&&m[ls](!0);const C=P[M];C&&ni(t,C)&&C.el[ls]&&C.el[ls](),N(v,[m])},enter(m){let v=c,C=u,I=f;if(!n.isMounted)if(r)v=p||c,C=R||u,I=x||f;else return;let L=!1;const k=m[Xa]=G=>{L||(L=!0,G?N(I,[m]):N(C,[m]),A.delayedLeave&&A.delayedLeave(),m[Xa]=void 0)};v?T(v,[m,k]):k()},leave(m,v){const C=String(t.key);if(m[Xa]&&m[Xa](!0),n.isUnmounting)return v();N(h,[m]);let I=!1;const L=m[ls]=k=>{I||(I=!0,v(),k?N(E,[m]):N(g,[m]),m[ls]=void 0,P[C]===t&&delete P[C])};P[C]=t,d?T(d,[m,L]):L()},clone(m){const v=eo(m,e,n,i,s);return s&&s(v),v}};return A}function ou(t){if(ba(t))return t=vi(t),t.children=null,t}function Qd(t){if(!ba(t))return eg(t.type)&&t.children?sg(t.children):t;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&ze(n.default))return n.default()}}function Wi(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Wi(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Mc(t,e=!1,n){let i=[],s=0;for(let r=0;r<t.length;r++){let o=t[r];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:r);o.type===Et?(o.patchFlag&128&&s++,i=i.concat(Mc(o.children,e,a))):(e||o.type!==Bt)&&i.push(a!=null?vi(o,{key:a}):o)}if(s>1)for(let r=0;r<i.length;r++)i[r].patchFlag=-2;return i}/*! #__NO_SIDE_EFFECTS__ */function kn(t,e){return ze(t)?nt({name:t.name},e,{setup:t}):t}function Ax(){const t=Yn();return t?(t.appContext.config.idPrefix||"v")+"-"+t.ids[0]+t.ids[1]++:""}function Nh(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Rx(t){const e=Yn(),n=Rh(null);if(e){const s=e.refs===tt?e.refs={}:e.refs;Object.defineProperty(s,t,{enumerable:!0,get:()=>n.value,set:r=>n.value=r})}return n}function ca(t,e,n,i,s=!1){if(Pe(t)){t.forEach((g,E)=>ca(g,e&&(Pe(e)?e[E]:e),n,i,s));return}if(ms(i)&&!s){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&ca(t,e,n,i.component.subTree);return}const r=i.shapeFlag&4?wa(i.component):i.el,o=s?null:r,{i:a,r:l}=t,c=e&&e.r,u=a.refs===tt?a.refs={}:a.refs,f=a.setupState,h=it(f),d=f===tt?()=>!1:g=>lt(h,g);if(c!=null&&c!==l&&(Xe(c)?(u[c]=null,d(c)&&(f[c]=null)):Rt(c)&&(c.value=null)),ze(l))Mo(l,a,12,[o,u]);else{const g=Xe(l),E=Rt(l);if(g||E){const _=()=>{if(t.f){const p=g?d(l)?f[l]:u[l]:l.value;s?Pe(p)&&hc(p,r):Pe(p)?p.includes(r)||p.push(r):g?(u[l]=[r],d(l)&&(f[l]=u[l])):(l.value=[r],t.k&&(u[t.k]=l.value))}else g?(u[l]=o,d(l)&&(f[l]=o)):E&&(l.value=o,t.k&&(u[t.k]=o))};o?(_.id=-1,zt(_,n)):_()}}}let ep=!1;const xr=()=>{ep||(console.error("Hydration completed but contains mismatches."),ep=!0)},Cx=t=>t.namespaceURI.includes("svg")&&t.tagName!=="foreignObject",wx=t=>t.namespaceURI.includes("MathML"),$a=t=>{if(t.nodeType===1){if(Cx(t))return"svg";if(wx(t))return"mathml"}},Wr=t=>t.nodeType===8;function Px(t){const{mt:e,p:n,o:{patchProp:i,createText:s,nextSibling:r,parentNode:o,remove:a,insert:l,createComment:c}}=t,u=(x,M)=>{if(!M.hasChildNodes()){n(null,x,M),Gl(),M._vnode=x;return}f(M.firstChild,x,null,null,null),Gl(),M._vnode=x},f=(x,M,P,N,T,A=!1)=>{A=A||!!M.dynamicChildren;const m=Wr(x)&&x.data==="[",v=()=>E(x,M,P,N,T,m),{type:C,ref:I,shapeFlag:L,patchFlag:k}=M;let G=x.nodeType;M.el=x,k===-2&&(A=!1,M.dynamicChildren=null);let O=null;switch(C){case gs:G!==3?M.children===""?(l(M.el=s(""),o(x),x),O=x):O=v():(x.data!==M.children&&(xr(),x.data=M.children),O=r(x));break;case Bt:R(x)?(O=r(x),p(M.el=x.content.firstChild,x,P)):G!==8||m?O=v():O=r(x);break;case tr:if(m&&(x=r(x),G=x.nodeType),G===1||G===3){O=x;const W=!M.children.length;for(let F=0;F<M.staticCount;F++)W&&(M.children+=O.nodeType===1?O.outerHTML:O.data),F===M.staticCount-1&&(M.anchor=O),O=r(O);return m?r(O):O}else v();break;case Et:m?O=g(x,M,P,N,T,A):O=v();break;default:if(L&1)(G!==1||M.type.toLowerCase()!==x.tagName.toLowerCase())&&!R(x)?O=v():O=h(x,M,P,N,T,A);else if(L&6){M.slotScopeIds=T;const W=o(x);if(m?O=_(x):Wr(x)&&x.data==="teleport start"?O=_(x,x.data,"teleport end"):O=r(x),e(M,W,null,P,N,$a(W),A),ms(M)&&!M.type.__asyncResolved){let F;m?(F=ge(Et),F.anchor=O?O.previousSibling:W.lastChild):F=x.nodeType===3?Ca(""):ge("div"),F.el=x,M.component.subTree=F}}else L&64?G!==8?O=v():O=M.type.hydrate(x,M,P,N,T,A,t,d):L&128&&(O=M.type.hydrate(x,M,P,N,$a(o(x)),T,A,t,f))}return I!=null&&ca(I,null,N,M),O},h=(x,M,P,N,T,A)=>{A=A||!!M.dynamicChildren;const{type:m,props:v,patchFlag:C,shapeFlag:I,dirs:L,transition:k}=M,G=m==="input"||m==="option";if(G||C!==-1){L&&fi(M,null,P,"created");let O=!1;if(R(x)){O=Ig(null,k)&&P&&P.vnode.props&&P.vnode.props.appear;const F=x.content.firstChild;O&&k.beforeEnter(F),p(F,x,P),M.el=x=F}if(I&16&&!(v&&(v.innerHTML||v.textContent))){let F=d(x.firstChild,M,x,P,N,T,A);for(;F;){qa(x,1)||xr();const le=F;F=F.nextSibling,a(le)}}else if(I&8){let F=M.children;F[0]===`
`&&(x.tagName==="PRE"||x.tagName==="TEXTAREA")&&(F=F.slice(1)),x.textContent!==F&&(qa(x,0)||xr(),x.textContent=M.children)}if(v){if(G||!A||C&48){const F=x.tagName.includes("-");for(const le in v)(G&&(le.endsWith("value")||le==="indeterminate")||As(le)&&!Bi(le)||le[0]==="."||F)&&i(x,le,null,v[le],void 0,P)}else if(v.onClick)i(x,"onClick",null,v.onClick,void 0,P);else if(C&4&&mi(v.style))for(const F in v.style)v.style[F]}let W;(W=v&&v.onVnodeBeforeMount)&&An(W,P,M),L&&fi(M,null,P,"beforeMount"),((W=v&&v.onVnodeMounted)||L||O)&&Vg(()=>{W&&An(W,P,M),O&&k.enter(x),L&&fi(M,null,P,"mounted")},N)}return x.nextSibling},d=(x,M,P,N,T,A,m)=>{m=m||!!M.dynamicChildren;const v=M.children,C=v.length;for(let I=0;I<C;I++){const L=m?v[I]:v[I]=Rn(v[I]),k=L.type===gs;x?(k&&!m&&I+1<C&&Rn(v[I+1]).type===gs&&(l(s(x.data.slice(L.children.length)),P,r(x)),x.data=L.children),x=f(x,L,N,T,A,m)):k&&!L.children?l(L.el=s(""),P):(qa(P,1)||xr(),n(null,L,P,null,N,T,$a(P),A))}return x},g=(x,M,P,N,T,A)=>{const{slotScopeIds:m}=M;m&&(T=T?T.concat(m):m);const v=o(x),C=d(r(x),M,v,P,N,T,A);return C&&Wr(C)&&C.data==="]"?r(M.anchor=C):(xr(),l(M.anchor=c("]"),v,C),C)},E=(x,M,P,N,T,A)=>{if(qa(x.parentElement,1)||xr(),M.el=null,A){const C=_(x);for(;;){const I=r(x);if(I&&I!==C)a(I);else break}}const m=r(x),v=o(x);return a(x),n(null,M,v,m,P,N,$a(v),T),P&&(P.vnode.el=M.el,Cc(P,M.el)),m},_=(x,M="[",P="]")=>{let N=0;for(;x;)if(x=r(x),x&&Wr(x)&&(x.data===M&&N++,x.data===P)){if(N===0)return r(x);N--}return x},p=(x,M,P)=>{const N=M.parentNode;N&&N.replaceChild(x,M);let T=P;for(;T;)T.vnode.el===M&&(T.vnode.el=T.subTree.el=x),T=T.parent},R=x=>x.nodeType===1&&x.tagName==="TEMPLATE";return[u,f]}const tp="data-allow-mismatch",Ix={0:"text",1:"children",2:"class",3:"style",4:"attribute"};function qa(t,e){if(e===0||e===1)for(;t&&!t.hasAttribute(tp);)t=t.parentElement;const n=t&&t.getAttribute(tp);if(n==null)return!1;if(n==="")return!0;{const i=n.split(",");return e===0&&i.includes("children")?!0:n.split(",").includes(Ix[e])}}const Nx=Ma().requestIdleCallback||(t=>setTimeout(t,1)),Dx=Ma().cancelIdleCallback||(t=>clearTimeout(t)),Lx=(t=1e4)=>e=>{const n=Nx(e,{timeout:t});return()=>Dx(n)};function Ox(t){const{top:e,left:n,bottom:i,right:s}=t.getBoundingClientRect(),{innerHeight:r,innerWidth:o}=window;return(e>0&&e<r||i>0&&i<r)&&(n>0&&n<o||s>0&&s<o)}const Ux=t=>(e,n)=>{const i=new IntersectionObserver(s=>{for(const r of s)if(r.isIntersecting){i.disconnect(),e();break}},t);return n(s=>{if(s instanceof Element){if(Ox(s))return e(),i.disconnect(),!1;i.observe(s)}}),()=>i.disconnect()},Fx=t=>e=>{if(t){const n=matchMedia(t);if(n.matches)e();else return n.addEventListener("change",e,{once:!0}),()=>n.removeEventListener("change",e)}},kx=(t=[])=>(e,n)=>{Xe(t)&&(t=[t]);let i=!1;const s=o=>{i||(i=!0,r(),e(),o.target.dispatchEvent(new o.constructor(o.type,o)))},r=()=>{n(o=>{for(const a of t)o.removeEventListener(a,s)})};return n(o=>{for(const a of t)o.addEventListener(a,s,{once:!0})}),r};function Bx(t,e){if(Wr(t)&&t.data==="["){let n=1,i=t.nextSibling;for(;i;){if(i.nodeType===1){if(e(i)===!1)break}else if(Wr(i))if(i.data==="]"){if(--n===0)break}else i.data==="["&&n++;i=i.nextSibling}}else e(t)}const ms=t=>!!t.type.__asyncLoader;/*! #__NO_SIDE_EFFECTS__ */function Vx(t){ze(t)&&(t={loader:t});const{loader:e,loadingComponent:n,errorComponent:i,delay:s=200,hydrate:r,timeout:o,suspensible:a=!0,onError:l}=t;let c=null,u,f=0;const h=()=>(f++,c=null,d()),d=()=>{let g;return c||(g=c=e().catch(E=>{if(E=E instanceof Error?E:new Error(String(E)),l)return new Promise((_,p)=>{l(E,()=>_(h()),()=>p(E),f+1)});throw E}).then(E=>g!==c&&c?c:(E&&(E.__esModule||E[Symbol.toStringTag]==="Module")&&(E=E.default),u=E,E)))};return kn({name:"AsyncComponentWrapper",__asyncLoader:d,__asyncHydrate(g,E,_){const p=r?()=>{const R=r(_,x=>Bx(g,x));R&&(E.bum||(E.bum=[])).push(R)}:_;u?p():d().then(()=>!E.isUnmounted&&p())},get __asyncResolved(){return u},setup(){const g=Gt;if(Nh(g),u)return()=>au(u,g);const E=x=>{c=null,mr(x,g,13,!i)};if(a&&g.suspense||to)return d().then(x=>()=>au(x,g)).catch(x=>(E(x),()=>i?ge(i,{error:x}):null));const _=_i(!1),p=_i(),R=_i(!!s);return s&&setTimeout(()=>{R.value=!1},s),o!=null&&setTimeout(()=>{if(!_.value&&!p.value){const x=new Error(`Async component timed out after ${o}ms.`);E(x),p.value=x}},o),d().then(()=>{_.value=!0,g.parent&&ba(g.parent.vnode)&&g.parent.update()}).catch(x=>{E(x),p.value=x}),()=>{if(_.value&&u)return au(u,g);if(p.value&&i)return ge(i,{error:p.value});if(n&&!R.value)return ge(n)}}})}function au(t,e){const{ref:n,props:i,children:s,ce:r}=e.vnode,o=ge(t,i,s);return o.ref=n,o.ce=r,delete e.vnode.ce,o}const ba=t=>t.type.__isKeepAlive,Hx={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(t,{slots:e}){const n=Yn(),i=n.ctx;if(!i.renderer)return()=>{const R=e.default&&e.default();return R&&R.length===1?R[0]:R};const s=new Map,r=new Set;let o=null;const a=n.suspense,{renderer:{p:l,m:c,um:u,o:{createElement:f}}}=i,h=f("div");i.activate=(R,x,M,P,N)=>{const T=R.component;c(R,x,M,0,a),l(T.vnode,R,x,M,T,a,P,R.slotScopeIds,N),zt(()=>{T.isDeactivated=!1,T.a&&Js(T.a);const A=R.props&&R.props.onVnodeMounted;A&&An(A,T.parent,R)},a)},i.deactivate=R=>{const x=R.component;Xl(x.m),Xl(x.a),c(R,h,null,1,a),zt(()=>{x.da&&Js(x.da);const M=R.props&&R.props.onVnodeUnmounted;M&&An(M,x.parent,R),x.isDeactivated=!0},a)};function d(R){lu(R),u(R,n,a,!0)}function g(R){s.forEach((x,M)=>{const P=mf(x.type);P&&!R(P)&&E(M)})}function E(R){const x=s.get(R);x&&(!o||!ni(x,o))?d(x):o&&lu(o),s.delete(R),r.delete(R)}_s(()=>[t.include,t.exclude],([R,x])=>{R&&g(M=>Ho(R,M)),x&&g(M=>!Ho(x,M))},{flush:"post",deep:!0});let _=null;const p=()=>{_!=null&&($l(n.subTree.type)?zt(()=>{s.set(_,Ya(n.subTree))},n.subTree.suspense):s.set(_,Ya(n.subTree)))};return _r(p),bc(p),Ac(()=>{s.forEach(R=>{const{subTree:x,suspense:M}=n,P=Ya(x);if(R.type===P.type&&R.key===P.key){lu(P);const N=P.component.da;N&&zt(N,M);return}d(R)})}),()=>{if(_=null,!e.default)return o=null;const R=e.default(),x=R[0];if(R.length>1)return o=null,R;if(!Xi(x)||!(x.shapeFlag&4)&&!(x.shapeFlag&128))return o=null,x;let M=Ya(x);if(M.type===Bt)return o=null,M;const P=M.type,N=mf(ms(M)?M.type.__asyncResolved||{}:P),{include:T,exclude:A,max:m}=t;if(T&&(!N||!Ho(T,N))||A&&N&&Ho(A,N))return M.shapeFlag&=-257,o=M,x;const v=M.key==null?P:M.key,C=s.get(v);return M.el&&(M=vi(M),x.shapeFlag&128&&(x.ssContent=M)),_=v,C?(M.el=C.el,M.component=C.component,M.transition&&Wi(M,M.transition),M.shapeFlag|=512,r.delete(v),r.add(v)):(r.add(v),m&&r.size>parseInt(m,10)&&E(r.values().next().value)),M.shapeFlag|=256,o=M,$l(x.type)?x:M}}},zx=Hx;function Ho(t,e){return Pe(t)?t.some(n=>Ho(n,e)):Xe(t)?t.split(",").includes(e):d_(t)?(t.lastIndex=0,t.test(e)):!1}function ag(t,e){cg(t,"a",e)}function lg(t,e){cg(t,"da",e)}function cg(t,e,n=Gt){const i=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Tc(e,i,n),n){let s=n.parent;for(;s&&s.parent;)ba(s.parent.vnode)&&Gx(i,e,n,s),s=s.parent}}function Gx(t,e,n,i){const s=Tc(e,t,i,!0);Aa(()=>{hc(i[e],s)},n)}function lu(t){t.shapeFlag&=-257,t.shapeFlag&=-513}function Ya(t){return t.shapeFlag&128?t.ssContent:t}function Tc(t,e,n=Gt,i=!1){if(n){const s=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{ws();const a=rr(n),l=qn(e,n,t,o);return a(),Ps(),l});return i?s.unshift(r):s.push(r),r}}const Yi=t=>(e,n=Gt)=>{(!to||t==="sp")&&Tc(t,(...i)=>e(...i),n)},Dh=Yi("bm"),_r=Yi("m"),Lh=Yi("bu"),bc=Yi("u"),Ac=Yi("bum"),Aa=Yi("um"),ug=Yi("sp"),fg=Yi("rtg"),hg=Yi("rtc");function dg(t,e=Gt){Tc("ec",t,e)}const Oh="components",Wx="directives";function bo(t,e){return Uh(Oh,t,!0,e)||t}const pg=Symbol.for("v-ndc");function Xx(t){return Xe(t)?Uh(Oh,t,!1)||t:t||pg}function $x(t){return Uh(Wx,t)}function Uh(t,e,n=!0,i=!1){const s=Wt||Gt;if(s){const r=s.type;if(t===Oh){const a=mf(r,!1);if(a&&(a===e||a===xt(e)||a===Cs(xt(e))))return r}const o=np(s[t]||r[t],e)||np(s.appContext[t],e);return!o&&i?r:o}}function np(t,e){return t&&(t[e]||t[xt(e)]||t[Cs(xt(e))])}function Fh(t,e,n,i){let s;const r=n&&n[i],o=Pe(t);if(o||Xe(t)){const a=o&&mi(t);let l=!1;a&&(l=!Un(t),t=gc(t)),s=new Array(t.length);for(let c=0,u=t.length;c<u;c++)s[c]=e(l?an(t[c]):t[c],c,void 0,r&&r[c])}else if(typeof t=="number"){s=new Array(t);for(let a=0;a<t;a++)s[a]=e(a+1,a,void 0,r&&r[a])}else if(ft(t))if(t[Symbol.iterator])s=Array.from(t,(a,l)=>e(a,l,void 0,r&&r[l]));else{const a=Object.keys(t);s=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];s[l]=e(t[u],u,l,r&&r[l])}}else s=[];return n&&(n[i]=s),s}function qx(t,e){for(let n=0;n<e.length;n++){const i=e[n];if(Pe(i))for(let s=0;s<i.length;s++)t[i[s].name]=i[s].fn;else i&&(t[i.name]=i.key?(...s)=>{const r=i.fn(...s);return r&&(r.key=i.key),r}:i.fn)}return t}function kh(t,e,n={},i,s){if(Wt.ce||Wt.parent&&ms(Wt.parent)&&Wt.parent.ce)return e!=="default"&&(n.name=e),be(),rt(Et,null,[ge("slot",n,i&&i())],64);let r=t[e];r&&r._c&&(r._d=!1),be();const o=r&&Bh(r(n)),a=n.key||o&&o.key,l=rt(Et,{key:(a&&!Sn(a)?a:`_${e}`)+(!o&&i?"_fb":"")},o||(i?i():[]),o&&t._===1?64:-2);return!s&&l.scopeId&&(l.slotScopeIds=[l.scopeId+"-s"]),r&&r._c&&(r._d=!0),l}function Bh(t){return t.some(e=>Xi(e)?!(e.type===Bt||e.type===Et&&!Bh(e.children)):!0)?t:null}function Yx(t,e){const n={};for(const i in t)n[e&&/[A-Z]/.test(i)?`on:${i}`:Zs(i)]=t[i];return n}const sf=t=>t?$g(t)?wa(t):sf(t.parent):null,qo=nt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>sf(t.parent),$root:t=>sf(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Vh(t),$forceUpdate:t=>t.f||(t.f=()=>{wh(t.update)}),$nextTick:t=>t.n||(t.n=To.bind(t.proxy)),$watch:t=>by.bind(t)}),cu=(t,e)=>t!==tt&&!t.__isScriptSetup&&lt(t,e),rf={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const d=o[e];if(d!==void 0)switch(d){case 1:return i[e];case 2:return s[e];case 4:return n[e];case 3:return r[e]}else{if(cu(i,e))return o[e]=1,i[e];if(s!==tt&&lt(s,e))return o[e]=2,s[e];if((c=t.propsOptions[0])&&lt(c,e))return o[e]=3,r[e];if(n!==tt&&lt(n,e))return o[e]=4,n[e];of&&(o[e]=0)}}const u=qo[e];let f,h;if(u)return e==="$attrs"&&on(t.attrs,"get",""),u(t);if((f=a.__cssModules)&&(f=f[e]))return f;if(n!==tt&&lt(n,e))return o[e]=4,n[e];if(h=l.config.globalProperties,lt(h,e))return h[e]},set({_:t},e,n){const{data:i,setupState:s,ctx:r}=t;return cu(s,e)?(s[e]=n,!0):i!==tt&&lt(i,e)?(i[e]=n,!0):lt(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:s,propsOptions:r}},o){let a;return!!n[o]||t!==tt&&lt(t,o)||cu(e,o)||(a=r[0])&&lt(a,o)||lt(i,o)||lt(qo,o)||lt(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:lt(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}},jx=nt({},rf,{get(t,e){if(e!==Symbol.unscopables)return rf.get(t,e,t)},has(t,e){return e[0]!=="_"&&!_h(e)}});function Kx(){return null}function Zx(){return null}function Jx(t){}function Qx(t){}function ey(){return null}function ty(){}function ny(t,e){return null}function iy(){return mg().slots}function sy(){return mg().attrs}function mg(){const t=Yn();return t.setupContext||(t.setupContext=jg(t))}function ua(t){return Pe(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}function ry(t,e){const n=ua(t);for(const i in e){if(i.startsWith("__skip"))continue;let s=n[i];s?Pe(s)||ze(s)?s=n[i]={type:s,default:e[i]}:s.default=e[i]:s===null&&(s=n[i]={default:e[i]}),s&&e[`__skip_${i}`]&&(s.skipFactory=!0)}return n}function oy(t,e){return!t||!e?t||e:Pe(t)&&Pe(e)?t.concat(e):nt({},ua(t),ua(e))}function ay(t,e){const n={};for(const i in t)e.includes(i)||Object.defineProperty(n,i,{enumerable:!0,get:()=>t[i]});return n}function ly(t){const e=Yn();let n=t();return hf(),dc(n)&&(n=n.catch(i=>{throw rr(e),i})),[n,()=>rr(e)]}let of=!0;function cy(t){const e=Vh(t),n=t.proxy,i=t.ctx;of=!1,e.beforeCreate&&ip(e.beforeCreate,t,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:h,beforeUpdate:d,updated:g,activated:E,deactivated:_,beforeDestroy:p,beforeUnmount:R,destroyed:x,unmounted:M,render:P,renderTracked:N,renderTriggered:T,errorCaptured:A,serverPrefetch:m,expose:v,inheritAttrs:C,components:I,directives:L,filters:k}=e;if(c&&uy(c,i,null),o)for(const W in o){const F=o[W];ze(F)&&(i[W]=F.bind(n))}if(s){const W=s.call(n,n);ft(W)&&(t.data=yo(W))}if(of=!0,r)for(const W in r){const F=r[W],le=ze(F)?F.bind(n,n):ze(F.get)?F.get.bind(n,n):jt,he=!ze(F)&&ze(F.set)?F.set.bind(n):jt,de=Dt({get:le,set:he});Object.defineProperty(i,W,{enumerable:!0,configurable:!0,get:()=>de.value,set:ye=>de.value=ye})}if(a)for(const W in a)_g(a[W],i,n,W);if(l){const W=ze(l)?l.call(n):l;Reflect.ownKeys(W).forEach(F=>{Yo(F,W[F])})}u&&ip(u,t,"c");function O(W,F){Pe(F)?F.forEach(le=>W(le.bind(n))):F&&W(F.bind(n))}if(O(Dh,f),O(_r,h),O(Lh,d),O(bc,g),O(ag,E),O(lg,_),O(dg,A),O(hg,N),O(fg,T),O(Ac,R),O(Aa,M),O(ug,m),Pe(v))if(v.length){const W=t.exposed||(t.exposed={});v.forEach(F=>{Object.defineProperty(W,F,{get:()=>n[F],set:le=>n[F]=le})})}else t.exposed||(t.exposed={});P&&t.render===jt&&(t.render=P),C!=null&&(t.inheritAttrs=C),I&&(t.components=I),L&&(t.directives=L),m&&Nh(t)}function uy(t,e,n=jt){Pe(t)&&(t=af(t));for(const i in t){const s=t[i];let r;ft(s)?"default"in s?r=oi(s.from||i,s.default,!0):r=oi(s.from||i):r=oi(s),Rt(r)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[i]=r}}function ip(t,e,n){qn(Pe(t)?t.map(i=>i.bind(e.proxy)):t.bind(e.proxy),e,n)}function _g(t,e,n,i){let s=i.includes(".")?Ug(n,i):()=>n[i];if(Xe(t)){const r=e[t];ze(r)&&_s(s,r)}else if(ze(t))_s(s,t.bind(n));else if(ft(t))if(Pe(t))t.forEach(r=>_g(r,e,n,i));else{const r=ze(t.handler)?t.handler.bind(n):e[t.handler];ze(r)&&_s(s,r,t)}}function Vh(t){const e=t.type,{mixins:n,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,a=r.get(e);let l;return a?l=a:!s.length&&!n&&!i?l=e:(l={},s.length&&s.forEach(c=>Wl(l,c,o,!0)),Wl(l,e,o)),ft(e)&&r.set(e,l),l}function Wl(t,e,n,i=!1){const{mixins:s,extends:r}=e;r&&Wl(t,r,n,!0),s&&s.forEach(o=>Wl(t,o,n,!0));for(const o in e)if(!(i&&o==="expose")){const a=fy[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const fy={data:sp,props:rp,emits:rp,methods:zo,computed:zo,beforeCreate:hn,created:hn,beforeMount:hn,mounted:hn,beforeUpdate:hn,updated:hn,beforeDestroy:hn,beforeUnmount:hn,destroyed:hn,unmounted:hn,activated:hn,deactivated:hn,errorCaptured:hn,serverPrefetch:hn,components:zo,directives:zo,watch:dy,provide:sp,inject:hy};function sp(t,e){return e?t?function(){return nt(ze(t)?t.call(this,this):t,ze(e)?e.call(this,this):e)}:e:t}function hy(t,e){return zo(af(t),af(e))}function af(t){if(Pe(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function hn(t,e){return t?[...new Set([].concat(t,e))]:e}function zo(t,e){return t?nt(Object.create(null),t,e):e}function rp(t,e){return t?Pe(t)&&Pe(e)?[...new Set([...t,...e])]:nt(Object.create(null),ua(t),ua(e??{})):e}function dy(t,e){if(!t)return e;if(!e)return t;const n=nt(Object.create(null),t);for(const i in e)n[i]=hn(t[i],e[i]);return n}function gg(){return{app:null,config:{isNativeTag:Gr,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let py=0;function my(t,e){return function(i,s=null){ze(i)||(i=nt({},i)),s!=null&&!ft(s)&&(s=null);const r=gg(),o=new WeakSet,a=[];let l=!1;const c=r.app={_uid:py++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:Zg,get config(){return r.config},set config(u){},use(u,...f){return o.has(u)||(u&&ze(u.install)?(o.add(u),u.install(c,...f)):ze(u)&&(o.add(u),u(c,...f))),c},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),c},component(u,f){return f?(r.components[u]=f,c):r.components[u]},directive(u,f){return f?(r.directives[u]=f,c):r.directives[u]},mount(u,f,h){if(!l){const d=c._ceVNode||ge(i,s);return d.appContext=r,h===!0?h="svg":h===!1&&(h=void 0),f&&e?e(d,u):t(d,u,h),l=!0,c._container=u,u.__vue_app__=c,wa(d.component)}},onUnmount(u){a.push(u)},unmount(){l&&(qn(a,c._instance,16),t(null,c._container),delete c._container.__vue_app__)},provide(u,f){return r.provides[u]=f,c},runWithContext(u){const f=er;er=c;try{return u()}finally{er=f}}};return c}}let er=null;function Yo(t,e){if(Gt){let n=Gt.provides;const i=Gt.parent&&Gt.parent.provides;i===n&&(n=Gt.provides=Object.create(i)),n[t]=e}}function oi(t,e,n=!1){const i=Gt||Wt;if(i||er){const s=er?er._context.provides:i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&ze(e)?e.call(i&&i.proxy):e}}function vg(){return!!(Gt||Wt||er)}const Eg={},Sg=()=>Object.create(Eg),xg=t=>Object.getPrototypeOf(t)===Eg;function _y(t,e,n,i=!1){const s={},r=Sg();t.propsDefaults=Object.create(null),yg(t,e,s,r);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=i?s:bh(s):t.type.props?t.props=s:t.props=r,t.attrs=r}function gy(t,e,n,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=t,a=it(s),[l]=t.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(Rc(t.emitsOptions,h))continue;const d=e[h];if(l)if(lt(r,h))d!==r[h]&&(r[h]=d,c=!0);else{const g=xt(h);s[g]=lf(l,a,g,d,t,!1)}else d!==r[h]&&(r[h]=d,c=!0)}}}else{yg(t,e,s,r)&&(c=!0);let u;for(const f in a)(!e||!lt(e,f)&&((u=ln(f))===f||!lt(e,u)))&&(l?n&&(n[f]!==void 0||n[u]!==void 0)&&(s[f]=lf(l,a,f,void 0,t,!0)):delete s[f]);if(r!==a)for(const f in r)(!e||!lt(e,f))&&(delete r[f],c=!0)}c&&Ni(t.attrs,"set","")}function yg(t,e,n,i){const[s,r]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(Bi(l))continue;const c=e[l];let u;s&&lt(s,u=xt(l))?!r||!r.includes(u)?n[u]=c:(a||(a={}))[u]=c:Rc(t.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(r){const l=it(n),c=a||tt;for(let u=0;u<r.length;u++){const f=r[u];n[f]=lf(s,l,f,c[f],t,!lt(c,f))}}return o}function lf(t,e,n,i,s,r){const o=t[n];if(o!=null){const a=lt(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&ze(l)){const{propsDefaults:c}=s;if(n in c)i=c[n];else{const u=rr(s);i=c[n]=l.call(null,e),u()}}else i=l;s.ce&&s.ce._setProp(n,i)}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===ln(n))&&(i=!0))}return i}const vy=new WeakMap;function Mg(t,e,n=!1){const i=n?vy:e.propsCache,s=i.get(t);if(s)return s;const r=t.props,o={},a=[];let l=!1;if(!ze(t)){const u=f=>{l=!0;const[h,d]=Mg(f,e,!0);nt(o,h),d&&a.push(...d)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!l)return ft(t)&&i.set(t,js),js;if(Pe(r))for(let u=0;u<r.length;u++){const f=xt(r[u]);op(f)&&(o[f]=tt)}else if(r)for(const u in r){const f=xt(u);if(op(f)){const h=r[u],d=o[f]=Pe(h)||ze(h)?{type:h}:nt({},h),g=d.type;let E=!1,_=!0;if(Pe(g))for(let p=0;p<g.length;++p){const R=g[p],x=ze(R)&&R.name;if(x==="Boolean"){E=!0;break}else x==="String"&&(_=!1)}else E=ze(g)&&g.name==="Boolean";d[0]=E,d[1]=_,(E||lt(d,"default"))&&a.push(f)}}const c=[o,a];return ft(t)&&i.set(t,c),c}function op(t){return t[0]!=="$"&&!Bi(t)}const Tg=t=>t[0]==="_"||t==="$stable",Hh=t=>Pe(t)?t.map(Rn):[Rn(t)],Ey=(t,e,n)=>{if(e._n)return e;const i=At((...s)=>Hh(e(...s)),n);return i._c=!1,i},bg=(t,e,n)=>{const i=t._ctx;for(const s in t){if(Tg(s))continue;const r=t[s];if(ze(r))e[s]=Ey(s,r,i);else if(r!=null){const o=Hh(r);e[s]=()=>o}}},Ag=(t,e)=>{const n=Hh(e);t.slots.default=()=>n},Rg=(t,e,n)=>{for(const i in e)(n||i!=="_")&&(t[i]=e[i])},Sy=(t,e,n)=>{const i=t.slots=Sg();if(t.vnode.shapeFlag&32){const s=e._;s?(Rg(i,e,n),n&&mh(i,"_",s,!0)):bg(e,i)}else e&&Ag(t,e)},xy=(t,e,n)=>{const{vnode:i,slots:s}=t;let r=!0,o=tt;if(i.shapeFlag&32){const a=e._;a?n&&a===1?r=!1:Rg(s,e,n):(r=!e.$stable,bg(e,s)),o=e}else e&&(Ag(t,e),o={default:1});if(r)for(const a in s)!Tg(a)&&o[a]==null&&delete s[a]},zt=Vg;function Cg(t){return Pg(t)}function wg(t){return Pg(t,Px)}function Pg(t,e){const n=Ma();n.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:h,setScopeId:d=jt,insertStaticContent:g}=t,E=(D,y,K,$=null,H=null,z=null,Z=void 0,q=null,b=!!y.dynamicChildren)=>{if(D===y)return;D&&!ni(D,y)&&($=B(D),ye(D,H,z,!0),D=null),y.patchFlag===-2&&(b=!1,y.dynamicChildren=null);const{type:S,ref:U,shapeFlag:V}=y;switch(S){case gs:_(D,y,K,$);break;case Bt:p(D,y,K,$);break;case tr:D==null&&R(y,K,$,Z);break;case Et:I(D,y,K,$,H,z,Z,q,b);break;default:V&1?P(D,y,K,$,H,z,Z,q,b):V&6?L(D,y,K,$,H,z,Z,q,b):(V&64||V&128)&&S.process(D,y,K,$,H,z,Z,q,b,te)}U!=null&&H&&ca(U,D&&D.ref,z,y||D,!y)},_=(D,y,K,$)=>{if(D==null)i(y.el=a(y.children),K,$);else{const H=y.el=D.el;y.children!==D.children&&c(H,y.children)}},p=(D,y,K,$)=>{D==null?i(y.el=l(y.children||""),K,$):y.el=D.el},R=(D,y,K,$)=>{[D.el,D.anchor]=g(D.children,y,K,$,D.el,D.anchor)},x=({el:D,anchor:y},K,$)=>{let H;for(;D&&D!==y;)H=h(D),i(D,K,$),D=H;i(y,K,$)},M=({el:D,anchor:y})=>{let K;for(;D&&D!==y;)K=h(D),s(D),D=K;s(y)},P=(D,y,K,$,H,z,Z,q,b)=>{y.type==="svg"?Z="svg":y.type==="math"&&(Z="mathml"),D==null?N(y,K,$,H,z,Z,q,b):m(D,y,H,z,Z,q,b)},N=(D,y,K,$,H,z,Z,q)=>{let b,S;const{props:U,shapeFlag:V,transition:j,dirs:Q}=D;if(b=D.el=o(D.type,z,U&&U.is,U),V&8?u(b,D.children):V&16&&A(D.children,b,null,$,H,uu(D,z),Z,q),Q&&fi(D,null,$,"created"),T(b,D,D.scopeId,Z,$),U){for(const ve in U)ve!=="value"&&!Bi(ve)&&r(b,ve,null,U[ve],z,$);"value"in U&&r(b,"value",null,U.value,z),(S=U.onVnodeBeforeMount)&&An(S,$,D)}Q&&fi(D,null,$,"beforeMount");const Se=Ig(H,j);Se&&j.beforeEnter(b),i(b,y,K),((S=U&&U.onVnodeMounted)||Se||Q)&&zt(()=>{S&&An(S,$,D),Se&&j.enter(b),Q&&fi(D,null,$,"mounted")},H)},T=(D,y,K,$,H)=>{if(K&&d(D,K),$)for(let z=0;z<$.length;z++)d(D,$[z]);if(H){let z=H.subTree;if(y===z||$l(z.type)&&(z.ssContent===y||z.ssFallback===y)){const Z=H.vnode;T(D,Z,Z.scopeId,Z.slotScopeIds,H.parent)}}},A=(D,y,K,$,H,z,Z,q,b=0)=>{for(let S=b;S<D.length;S++){const U=D[S]=q?cs(D[S]):Rn(D[S]);E(null,U,y,K,$,H,z,Z,q)}},m=(D,y,K,$,H,z,Z)=>{const q=y.el=D.el;let{patchFlag:b,dynamicChildren:S,dirs:U}=y;b|=D.patchFlag&16;const V=D.props||tt,j=y.props||tt;let Q;if(K&&Ls(K,!1),(Q=j.onVnodeBeforeUpdate)&&An(Q,K,y,D),U&&fi(y,D,K,"beforeUpdate"),K&&Ls(K,!0),(V.innerHTML&&j.innerHTML==null||V.textContent&&j.textContent==null)&&u(q,""),S?v(D.dynamicChildren,S,q,K,$,uu(y,H),z):Z||F(D,y,q,null,K,$,uu(y,H),z,!1),b>0){if(b&16)C(q,V,j,K,H);else if(b&2&&V.class!==j.class&&r(q,"class",null,j.class,H),b&4&&r(q,"style",V.style,j.style,H),b&8){const Se=y.dynamicProps;for(let ve=0;ve<Se.length;ve++){const _e=Se[ve],We=V[_e],ue=j[_e];(ue!==We||_e==="value")&&r(q,_e,We,ue,H,K)}}b&1&&D.children!==y.children&&u(q,y.children)}else!Z&&S==null&&C(q,V,j,K,H);((Q=j.onVnodeUpdated)||U)&&zt(()=>{Q&&An(Q,K,y,D),U&&fi(y,D,K,"updated")},$)},v=(D,y,K,$,H,z,Z)=>{for(let q=0;q<y.length;q++){const b=D[q],S=y[q],U=b.el&&(b.type===Et||!ni(b,S)||b.shapeFlag&70)?f(b.el):K;E(b,S,U,null,$,H,z,Z,!0)}},C=(D,y,K,$,H)=>{if(y!==K){if(y!==tt)for(const z in y)!Bi(z)&&!(z in K)&&r(D,z,y[z],null,H,$);for(const z in K){if(Bi(z))continue;const Z=K[z],q=y[z];Z!==q&&z!=="value"&&r(D,z,q,Z,H,$)}"value"in K&&r(D,"value",y.value,K.value,H)}},I=(D,y,K,$,H,z,Z,q,b)=>{const S=y.el=D?D.el:a(""),U=y.anchor=D?D.anchor:a("");let{patchFlag:V,dynamicChildren:j,slotScopeIds:Q}=y;Q&&(q=q?q.concat(Q):Q),D==null?(i(S,K,$),i(U,K,$),A(y.children||[],K,U,H,z,Z,q,b)):V>0&&V&64&&j&&D.dynamicChildren?(v(D.dynamicChildren,j,K,H,z,Z,q),(y.key!=null||H&&y===H.subTree)&&zh(D,y,!0)):F(D,y,K,U,H,z,Z,q,b)},L=(D,y,K,$,H,z,Z,q,b)=>{y.slotScopeIds=q,D==null?y.shapeFlag&512?H.ctx.activate(y,K,$,Z,b):k(y,K,$,H,z,Z,b):G(D,y,b)},k=(D,y,K,$,H,z,Z)=>{const q=D.component=Xg(D,$,H);if(ba(D)&&(q.ctx.renderer=te),qg(q,!1,Z),q.asyncDep){if(H&&H.registerDep(q,O,Z),!D.el){const b=q.subTree=ge(Bt);p(null,b,y,K)}}else O(q,D,y,K,H,z,Z)},G=(D,y,K)=>{const $=y.component=D.component;if(Iy(D,y,K))if($.asyncDep&&!$.asyncResolved){W($,y,K);return}else $.next=y,$.update();else y.el=D.el,$.vnode=y},O=(D,y,K,$,H,z,Z)=>{const q=()=>{if(D.isMounted){let{next:V,bu:j,u:Q,parent:Se,vnode:ve}=D;{const Oe=Ng(D);if(Oe){V&&(V.el=ve.el,W(D,V,Z)),Oe.asyncDep.then(()=>{D.isUnmounted||q()});return}}let _e=V,We;Ls(D,!1),V?(V.el=ve.el,W(D,V,Z)):V=ve,j&&Js(j),(We=V.props&&V.props.onVnodeBeforeUpdate)&&An(We,Se,V,ve),Ls(D,!0);const ue=bl(D),Te=D.subTree;D.subTree=ue,E(Te,ue,f(Te.el),B(Te),D,H,z),V.el=ue.el,_e===null&&Cc(D,ue.el),Q&&zt(Q,H),(We=V.props&&V.props.onVnodeUpdated)&&zt(()=>An(We,Se,V,ve),H)}else{let V;const{el:j,props:Q}=y,{bm:Se,m:ve,parent:_e,root:We,type:ue}=D,Te=ms(y);if(Ls(D,!1),Se&&Js(Se),!Te&&(V=Q&&Q.onVnodeBeforeMount)&&An(V,_e,y),Ls(D,!0),j&&Me){const Oe=()=>{D.subTree=bl(D),Me(j,D.subTree,D,H,null)};Te&&ue.__asyncHydrate?ue.__asyncHydrate(j,D,Oe):Oe()}else{We.ce&&We.ce._injectChildStyle(ue);const Oe=D.subTree=bl(D);E(null,Oe,K,$,D,H,z),y.el=Oe.el}if(ve&&zt(ve,H),!Te&&(V=Q&&Q.onVnodeMounted)){const Oe=y;zt(()=>An(V,_e,Oe),H)}(y.shapeFlag&256||_e&&ms(_e.vnode)&&_e.vnode.shapeFlag&256)&&D.a&&zt(D.a,H),D.isMounted=!0,y=K=$=null}};D.scope.on();const b=D.effect=new ia(q);D.scope.off();const S=D.update=b.run.bind(b),U=D.job=b.runIfDirty.bind(b);U.i=D,U.id=D.uid,b.scheduler=()=>wh(U),Ls(D,!0),S()},W=(D,y,K)=>{y.component=D;const $=D.vnode.props;D.vnode=y,D.next=null,gy(D,y.props,$,K),xy(D,y.children,K),ws(),jd(D),Ps()},F=(D,y,K,$,H,z,Z,q,b=!1)=>{const S=D&&D.children,U=D?D.shapeFlag:0,V=y.children,{patchFlag:j,shapeFlag:Q}=y;if(j>0){if(j&128){he(S,V,K,$,H,z,Z,q,b);return}else if(j&256){le(S,V,K,$,H,z,Z,q,b);return}}Q&8?(U&16&&fe(S,H,z),V!==S&&u(K,V)):U&16?Q&16?he(S,V,K,$,H,z,Z,q,b):fe(S,H,z,!0):(U&8&&u(K,""),Q&16&&A(V,K,$,H,z,Z,q,b))},le=(D,y,K,$,H,z,Z,q,b)=>{D=D||js,y=y||js;const S=D.length,U=y.length,V=Math.min(S,U);let j;for(j=0;j<V;j++){const Q=y[j]=b?cs(y[j]):Rn(y[j]);E(D[j],Q,K,null,H,z,Z,q,b)}S>U?fe(D,H,z,!0,!1,V):A(y,K,$,H,z,Z,q,b,V)},he=(D,y,K,$,H,z,Z,q,b)=>{let S=0;const U=y.length;let V=D.length-1,j=U-1;for(;S<=V&&S<=j;){const Q=D[S],Se=y[S]=b?cs(y[S]):Rn(y[S]);if(ni(Q,Se))E(Q,Se,K,null,H,z,Z,q,b);else break;S++}for(;S<=V&&S<=j;){const Q=D[V],Se=y[j]=b?cs(y[j]):Rn(y[j]);if(ni(Q,Se))E(Q,Se,K,null,H,z,Z,q,b);else break;V--,j--}if(S>V){if(S<=j){const Q=j+1,Se=Q<U?y[Q].el:$;for(;S<=j;)E(null,y[S]=b?cs(y[S]):Rn(y[S]),K,Se,H,z,Z,q,b),S++}}else if(S>j)for(;S<=V;)ye(D[S],H,z,!0),S++;else{const Q=S,Se=S,ve=new Map;for(S=Se;S<=j;S++){const Ge=y[S]=b?cs(y[S]):Rn(y[S]);Ge.key!=null&&ve.set(Ge.key,S)}let _e,We=0;const ue=j-Se+1;let Te=!1,Oe=0;const ke=new Array(ue);for(S=0;S<ue;S++)ke[S]=0;for(S=Q;S<=V;S++){const Ge=D[S];if(We>=ue){ye(Ge,H,z,!0);continue}let Ve;if(Ge.key!=null)Ve=ve.get(Ge.key);else for(_e=Se;_e<=j;_e++)if(ke[_e-Se]===0&&ni(Ge,y[_e])){Ve=_e;break}Ve===void 0?ye(Ge,H,z,!0):(ke[Ve-Se]=S+1,Ve>=Oe?Oe=Ve:Te=!0,E(Ge,y[Ve],K,null,H,z,Z,q,b),We++)}const Ne=Te?yy(ke):js;for(_e=Ne.length-1,S=ue-1;S>=0;S--){const Ge=Se+S,Ve=y[Ge],pt=Ge+1<U?y[Ge+1].el:$;ke[S]===0?E(null,Ve,K,pt,H,z,Z,q,b):Te&&(_e<0||S!==Ne[_e]?de(Ve,K,pt,2):_e--)}}},de=(D,y,K,$,H=null)=>{const{el:z,type:Z,transition:q,children:b,shapeFlag:S}=D;if(S&6){de(D.component.subTree,y,K,$);return}if(S&128){D.suspense.move(y,K,$);return}if(S&64){Z.move(D,y,K,te);return}if(Z===Et){i(z,y,K);for(let V=0;V<b.length;V++)de(b[V],y,K,$);i(D.anchor,y,K);return}if(Z===tr){x(D,y,K);return}if($!==2&&S&1&&q)if($===0)q.beforeEnter(z),i(z,y,K),zt(()=>q.enter(z),H);else{const{leave:V,delayLeave:j,afterLeave:Q}=q,Se=()=>i(z,y,K),ve=()=>{V(z,()=>{Se(),Q&&Q()})};j?j(z,Se,ve):ve()}else i(z,y,K)},ye=(D,y,K,$=!1,H=!1)=>{const{type:z,props:Z,ref:q,children:b,dynamicChildren:S,shapeFlag:U,patchFlag:V,dirs:j,cacheIndex:Q}=D;if(V===-2&&(H=!1),q!=null&&ca(q,null,K,D,!0),Q!=null&&(y.renderCache[Q]=void 0),U&256){y.ctx.deactivate(D);return}const Se=U&1&&j,ve=!ms(D);let _e;if(ve&&(_e=Z&&Z.onVnodeBeforeUnmount)&&An(_e,y,D),U&6)ae(D.component,K,$);else{if(U&128){D.suspense.unmount(K,$);return}Se&&fi(D,null,y,"beforeUnmount"),U&64?D.type.remove(D,y,K,te,$):S&&!S.hasOnce&&(z!==Et||V>0&&V&64)?fe(S,y,K,!1,!0):(z===Et&&V&384||!H&&U&16)&&fe(b,y,K),$&&Le(D)}(ve&&(_e=Z&&Z.onVnodeUnmounted)||Se)&&zt(()=>{_e&&An(_e,y,D),Se&&fi(D,null,y,"unmounted")},K)},Le=D=>{const{type:y,el:K,anchor:$,transition:H}=D;if(y===Et){ee(K,$);return}if(y===tr){M(D);return}const z=()=>{s(K),H&&!H.persisted&&H.afterLeave&&H.afterLeave()};if(D.shapeFlag&1&&H&&!H.persisted){const{leave:Z,delayLeave:q}=H,b=()=>Z(K,z);q?q(D.el,z,b):b()}else z()},ee=(D,y)=>{let K;for(;D!==y;)K=h(D),s(D),D=K;s(y)},ae=(D,y,K)=>{const{bum:$,scope:H,job:z,subTree:Z,um:q,m:b,a:S}=D;Xl(b),Xl(S),$&&Js($),H.stop(),z&&(z.flags|=8,ye(Z,D,y,K)),q&&zt(q,y),zt(()=>{D.isUnmounted=!0},y),y&&y.pendingBranch&&!y.isUnmounted&&D.asyncDep&&!D.asyncResolved&&D.suspenseId===y.pendingId&&(y.deps--,y.deps===0&&y.resolve())},fe=(D,y,K,$=!1,H=!1,z=0)=>{for(let Z=z;Z<D.length;Z++)ye(D[Z],y,K,$,H)},B=D=>{if(D.shapeFlag&6)return B(D.component.subTree);if(D.shapeFlag&128)return D.suspense.next();const y=h(D.anchor||D.el),K=y&&y[Q_];return K?h(K):y};let ie=!1;const se=(D,y,K)=>{D==null?y._vnode&&ye(y._vnode,null,null,!0):E(y._vnode||null,D,y,null,null,null,K),y._vnode=D,ie||(ie=!0,jd(),Gl(),ie=!1)},te={p:E,um:ye,m:de,r:Le,mt:k,mc:A,pc:F,pbc:v,n:B,o:t};let Ee,Me;return e&&([Ee,Me]=e(te)),{render:se,hydrate:Ee,createApp:my(se,Ee)}}function uu({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Ls({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function Ig(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function zh(t,e,n=!1){const i=t.children,s=e.children;if(Pe(i)&&Pe(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=cs(s[r]),a.el=o.el),!n&&a.patchFlag!==-2&&zh(o,a)),a.type===gs&&(a.el=o.el)}}function yy(t){const e=t.slice(),n=[0];let i,s,r,o,a;const l=t.length;for(i=0;i<l;i++){const c=t[i];if(c!==0){if(s=n[n.length-1],t[s]<c){e[i]=s,n.push(i);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,t[n[a]]<c?r=a+1:o=a;c<t[n[r]]&&(r>0&&(e[i]=n[r-1]),n[r]=i)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}function Ng(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Ng(e)}function Xl(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const Dg=Symbol.for("v-scx"),Lg=()=>oi(Dg);function My(t,e){return Ra(t,null,e)}function Ty(t,e){return Ra(t,null,{flush:"post"})}function Og(t,e){return Ra(t,null,{flush:"sync"})}function _s(t,e,n){return Ra(t,e,n)}function Ra(t,e,n=tt){const{immediate:i,deep:s,flush:r,once:o}=n,a=nt({},n),l=e&&i||!e&&r!=="post";let c;if(to){if(r==="sync"){const d=Lg();c=d.__watcherHandles||(d.__watcherHandles=[])}else if(!l){const d=()=>{};return d.stop=jt,d.resume=jt,d.pause=jt,d}}const u=Gt;a.call=(d,g,E)=>qn(d,u,g,E);let f=!1;r==="post"?a.scheduler=d=>{zt(d,u&&u.suspense)}:r!=="sync"&&(f=!0,a.scheduler=(d,g)=>{g?d():wh(d)}),a.augmentJob=d=>{e&&(d.flags|=4),f&&(d.flags|=2,u&&(d.id=u.uid,d.i=u))};const h=fx(t,e,a);return to&&(c?c.push(h):l&&h()),h}function by(t,e,n){const i=this.proxy,s=Xe(t)?t.includes(".")?Ug(i,t):()=>i[t]:t.bind(i,i);let r;ze(e)?r=e:(r=e.handler,n=e);const o=rr(this),a=Ra(s,r.bind(i),n);return o(),a}function Ug(t,e){const n=e.split(".");return()=>{let i=t;for(let s=0;s<n.length&&i;s++)i=i[n[s]];return i}}function Ay(t,e,n=tt){const i=Yn(),s=xt(e),r=ln(e),o=Fg(t,s),a=W_((l,c)=>{let u,f=tt,h;return Og(()=>{const d=t[s];rn(u,d)&&(u=d,c())}),{get(){return l(),n.get?n.get(u):u},set(d){const g=n.set?n.set(d):d;if(!rn(g,u)&&!(f!==tt&&rn(d,f)))return;const E=i.vnode.props;E&&(e in E||s in E||r in E)&&(`onUpdate:${e}`in E||`onUpdate:${s}`in E||`onUpdate:${r}`in E)||(u=d,c()),i.emit(`update:${e}`,g),rn(d,g)&&rn(d,f)&&!rn(g,h)&&c(),f=d,h=g}}});return a[Symbol.iterator]=()=>{let l=0;return{next(){return l<2?{value:l++?o||tt:a,done:!1}:{done:!0}}}},a}const Fg=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${xt(e)}Modifiers`]||t[`${ln(e)}Modifiers`];function Ry(t,e,...n){if(t.isUnmounted)return;const i=t.vnode.props||tt;let s=n;const r=e.startsWith("update:"),o=r&&Fg(i,e.slice(7));o&&(o.trim&&(s=n.map(u=>Xe(u)?u.trim():u)),o.number&&(s=n.map(ta)));let a,l=i[a=Zs(e)]||i[a=Zs(xt(e))];!l&&r&&(l=i[a=Zs(ln(e))]),l&&qn(l,t,6,s);const c=i[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,qn(c,t,6,s)}}function kg(t,e,n=!1){const i=e.emitsCache,s=i.get(t);if(s!==void 0)return s;const r=t.emits;let o={},a=!1;if(!ze(t)){const l=c=>{const u=kg(c,e,!0);u&&(a=!0,nt(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!r&&!a?(ft(t)&&i.set(t,null),null):(Pe(r)?r.forEach(l=>o[l]=null):nt(o,r),ft(t)&&i.set(t,o),o)}function Rc(t,e){return!t||!As(e)?!1:(e=e.slice(2).replace(/Once$/,""),lt(t,e[0].toLowerCase()+e.slice(1))||lt(t,ln(e))||lt(t,e))}function bl(t){const{type:e,vnode:n,proxy:i,withProxy:s,propsOptions:[r],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:f,data:h,setupState:d,ctx:g,inheritAttrs:E}=t,_=la(t);let p,R;try{if(n.shapeFlag&4){const M=s||i,P=M;p=Rn(c.call(P,M,u,f,d,h,g)),R=a}else{const M=e;p=Rn(M.length>1?M(f,{attrs:a,slots:o,emit:l}):M(f,null)),R=e.props?a:wy(a)}}catch(M){jo.length=0,mr(M,t,1),p=ge(Bt)}let x=p;if(R&&E!==!1){const M=Object.keys(R),{shapeFlag:P}=x;M.length&&P&7&&(r&&M.some(fc)&&(R=Py(R,r)),x=vi(x,R,!1,!0))}return n.dirs&&(x=vi(x,null,!1,!0),x.dirs=x.dirs?x.dirs.concat(n.dirs):n.dirs),n.transition&&Wi(x,n.transition),p=x,la(_),p}function Cy(t,e=!0){let n;for(let i=0;i<t.length;i++){const s=t[i];if(Xi(s)){if(s.type!==Bt||s.children==="v-if"){if(n)return;n=s}}else return}return n}const wy=t=>{let e;for(const n in t)(n==="class"||n==="style"||As(n))&&((e||(e={}))[n]=t[n]);return e},Py=(t,e)=>{const n={};for(const i in t)(!fc(i)||!(i.slice(9)in e))&&(n[i]=t[i]);return n};function Iy(t,e,n){const{props:i,children:s,component:r}=t,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return i?ap(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(o[h]!==i[h]&&!Rc(c,h))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?ap(i,o,c):!0:!!o;return!1}function ap(t,e,n){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(e[r]!==t[r]&&!Rc(n,r))return!0}return!1}function Cc({vnode:t,parent:e},n){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===t&&(i.el=t.el),i===t)(t=e.vnode).el=n,e=e.parent;else break}}const $l=t=>t.__isSuspense;let cf=0;const Ny={name:"Suspense",__isSuspense:!0,process(t,e,n,i,s,r,o,a,l,c){if(t==null)Ly(e,n,i,s,r,o,a,l,c);else{if(r&&r.deps>0&&!t.suspense.isInFallback){e.suspense=t.suspense,e.suspense.vnode=e,e.el=t.el;return}Oy(t,e,n,i,s,o,a,l,c)}},hydrate:Uy,normalize:Fy},Dy=Ny;function fa(t,e){const n=t.props&&t.props[e];ze(n)&&n()}function Ly(t,e,n,i,s,r,o,a,l){const{p:c,o:{createElement:u}}=l,f=u("div"),h=t.suspense=Bg(t,s,i,e,f,n,r,o,a,l);c(null,h.pendingBranch=t.ssContent,f,null,i,h,r,o),h.deps>0?(fa(t,"onPending"),fa(t,"onFallback"),c(null,t.ssFallback,e,n,i,null,r,o),Yr(h,t.ssFallback)):h.resolve(!1,!0)}function Oy(t,e,n,i,s,r,o,a,{p:l,um:c,o:{createElement:u}}){const f=e.suspense=t.suspense;f.vnode=e,e.el=t.el;const h=e.ssContent,d=e.ssFallback,{activeBranch:g,pendingBranch:E,isInFallback:_,isHydrating:p}=f;if(E)f.pendingBranch=h,ni(h,E)?(l(E,h,f.hiddenContainer,null,s,f,r,o,a),f.deps<=0?f.resolve():_&&(p||(l(g,d,n,i,s,null,r,o,a),Yr(f,d)))):(f.pendingId=cf++,p?(f.isHydrating=!1,f.activeBranch=E):c(E,s,f),f.deps=0,f.effects.length=0,f.hiddenContainer=u("div"),_?(l(null,h,f.hiddenContainer,null,s,f,r,o,a),f.deps<=0?f.resolve():(l(g,d,n,i,s,null,r,o,a),Yr(f,d))):g&&ni(h,g)?(l(g,h,n,i,s,f,r,o,a),f.resolve(!0)):(l(null,h,f.hiddenContainer,null,s,f,r,o,a),f.deps<=0&&f.resolve()));else if(g&&ni(h,g))l(g,h,n,i,s,f,r,o,a),Yr(f,h);else if(fa(e,"onPending"),f.pendingBranch=h,h.shapeFlag&512?f.pendingId=h.component.suspenseId:f.pendingId=cf++,l(null,h,f.hiddenContainer,null,s,f,r,o,a),f.deps<=0)f.resolve();else{const{timeout:R,pendingId:x}=f;R>0?setTimeout(()=>{f.pendingId===x&&f.fallback(d)},R):R===0&&f.fallback(d)}}function Bg(t,e,n,i,s,r,o,a,l,c,u=!1){const{p:f,m:h,um:d,n:g,o:{parentNode:E,remove:_}}=c;let p;const R=ky(t);R&&e&&e.pendingBranch&&(p=e.pendingId,e.deps++);const x=t.props?na(t.props.timeout):void 0,M=r,P={vnode:t,parent:e,parentComponent:n,namespace:o,container:i,hiddenContainer:s,deps:0,pendingId:cf++,timeout:typeof x=="number"?x:-1,activeBranch:null,pendingBranch:null,isInFallback:!u,isHydrating:u,isUnmounted:!1,effects:[],resolve(N=!1,T=!1){const{vnode:A,activeBranch:m,pendingBranch:v,pendingId:C,effects:I,parentComponent:L,container:k}=P;let G=!1;P.isHydrating?P.isHydrating=!1:N||(G=m&&v.transition&&v.transition.mode==="out-in",G&&(m.transition.afterLeave=()=>{C===P.pendingId&&(h(v,k,r===M?g(m):r,0),oa(I))}),m&&(E(m.el)===k&&(r=g(m)),d(m,L,P,!0)),G||h(v,k,r,0)),Yr(P,v),P.pendingBranch=null,P.isInFallback=!1;let O=P.parent,W=!1;for(;O;){if(O.pendingBranch){O.effects.push(...I),W=!0;break}O=O.parent}!W&&!G&&oa(I),P.effects=[],R&&e&&e.pendingBranch&&p===e.pendingId&&(e.deps--,e.deps===0&&!T&&e.resolve()),fa(A,"onResolve")},fallback(N){if(!P.pendingBranch)return;const{vnode:T,activeBranch:A,parentComponent:m,container:v,namespace:C}=P;fa(T,"onFallback");const I=g(A),L=()=>{P.isInFallback&&(f(null,N,v,I,m,null,C,a,l),Yr(P,N))},k=N.transition&&N.transition.mode==="out-in";k&&(A.transition.afterLeave=L),P.isInFallback=!0,d(A,m,null,!0),k||L()},move(N,T,A){P.activeBranch&&h(P.activeBranch,N,T,A),P.container=N},next(){return P.activeBranch&&g(P.activeBranch)},registerDep(N,T,A){const m=!!P.pendingBranch;m&&P.deps++;const v=N.vnode.el;N.asyncDep.catch(C=>{mr(C,N,0)}).then(C=>{if(N.isUnmounted||P.isUnmounted||P.pendingId!==N.suspenseId)return;N.asyncResolved=!0;const{vnode:I}=N;df(N,C,!1),v&&(I.el=v);const L=!v&&N.subTree.el;T(N,I,E(v||N.subTree.el),v?null:g(N.subTree),P,o,A),L&&_(L),Cc(N,I.el),m&&--P.deps===0&&P.resolve()})},unmount(N,T){P.isUnmounted=!0,P.activeBranch&&d(P.activeBranch,n,N,T),P.pendingBranch&&d(P.pendingBranch,n,N,T)}};return P}function Uy(t,e,n,i,s,r,o,a,l){const c=e.suspense=Bg(e,i,n,t.parentNode,document.createElement("div"),null,s,r,o,a,!0),u=l(t,c.pendingBranch=e.ssContent,n,c,r,o);return c.deps===0&&c.resolve(!1,!0),u}function Fy(t){const{shapeFlag:e,children:n}=t,i=e&32;t.ssContent=lp(i?n.default:n),t.ssFallback=i?lp(n.fallback):ge(Bt)}function lp(t){let e;if(ze(t)){const n=sr&&t._c;n&&(t._d=!1,be()),t=t(),n&&(t._d=!0,e=cn,Hg())}return Pe(t)&&(t=Cy(t)),t=Rn(t),e&&!t.dynamicChildren&&(t.dynamicChildren=e.filter(n=>n!==t)),t}function Vg(t,e){e&&e.pendingBranch?Pe(t)?e.effects.push(...t):e.effects.push(t):oa(t)}function Yr(t,e){t.activeBranch=e;const{vnode:n,parentComponent:i}=t;let s=e.el;for(;!s&&e.component;)e=e.component.subTree,s=e.el;n.el=s,i&&i.subTree===n&&(i.vnode.el=s,Cc(i,s))}function ky(t){const e=t.props&&t.props.suspensible;return e!=null&&e!==!1}const Et=Symbol.for("v-fgt"),gs=Symbol.for("v-txt"),Bt=Symbol.for("v-cmt"),tr=Symbol.for("v-stc"),jo=[];let cn=null;function be(t=!1){jo.push(cn=t?null:[])}function Hg(){jo.pop(),cn=jo[jo.length-1]||null}let sr=1;function uf(t,e=!1){sr+=t,t<0&&cn&&e&&(cn.hasOnce=!0)}function zg(t){return t.dynamicChildren=sr>0?cn||js:null,Hg(),sr>0&&cn&&cn.push(t),t}function je(t,e,n,i,s,r){return zg(pe(t,e,n,i,s,r,!0))}function rt(t,e,n,i,s){return zg(ge(t,e,n,i,s,!0))}function Xi(t){return t?t.__v_isVNode===!0:!1}function ni(t,e){return t.type===e.type&&t.key===e.key}function By(t){}const Gg=({key:t})=>t??null,Al=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Xe(t)||Rt(t)||ze(t)?{i:Wt,r:t,k:e,f:!!n}:t:null);function pe(t,e=null,n=null,i=0,s=null,r=t===Et?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Gg(e),ref:e&&Al(e),scopeId:yc,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Wt};return a?(Wh(l,n),r&128&&t.normalize(l)):n&&(l.shapeFlag|=Xe(n)?8:16),sr>0&&!o&&cn&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&cn.push(l),l}const ge=Vy;function Vy(t,e=null,n=null,i=0,s=null,r=!1){if((!t||t===pg)&&(t=Bt),Xi(t)){const a=vi(t,e,!0);return n&&Wh(a,n),sr>0&&!r&&cn&&(a.shapeFlag&6?cn[cn.indexOf(t)]=a:cn.push(a)),a.patchFlag=-2,a}if(qy(t)&&(t=t.__vccOpts),e){e=Wg(e);let{class:a,style:l}=e;a&&!Xe(a)&&(e.class=xo(a)),ft(l)&&(Sc(l)&&!Pe(l)&&(l=nt({},l)),e.style=So(l))}const o=Xe(t)?1:$l(t)?128:eg(t)?64:ft(t)?4:ze(t)?2:0;return pe(t,e,n,i,s,o,r,!0)}function Wg(t){return t?Sc(t)||xg(t)?nt({},t):t:null}function vi(t,e,n=!1,i=!1){const{props:s,ref:r,patchFlag:o,children:a,transition:l}=t,c=e?Ei(s||{},e):s,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&Gg(c),ref:e&&e.ref?n&&r?Pe(r)?r.concat(Al(e)):[r,Al(e)]:Al(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Et?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&vi(t.ssContent),ssFallback:t.ssFallback&&vi(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&i&&Wi(u,l.clone(u)),u}function Ca(t=" ",e=0){return ge(gs,null,t,e)}function Gh(t,e){const n=ge(tr,null,t);return n.staticCount=e,n}function xn(t="",e=!1){return e?(be(),rt(Bt,null,t)):ge(Bt,null,t)}function Rn(t){return t==null||typeof t=="boolean"?ge(Bt):Pe(t)?ge(Et,null,t.slice()):Xi(t)?cs(t):ge(gs,null,String(t))}function cs(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:vi(t)}function Wh(t,e){let n=0;const{shapeFlag:i}=t;if(e==null)e=null;else if(Pe(e))n=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),Wh(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!xg(e)?e._ctx=Wt:s===3&&Wt&&(Wt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ze(e)?(e={default:e,_ctx:Wt},n=32):(e=String(e),i&64?(n=16,e=[Ca(e)]):n=8);t.children=e,t.shapeFlag|=n}function Ei(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=xo([e.class,i.class]));else if(s==="style")e.style=So([e.style,i.style]);else if(As(s)){const r=e[s],o=i[s];o&&r!==o&&!(Pe(r)&&r.includes(o))&&(e[s]=r?[].concat(r,o):o)}else s!==""&&(e[s]=i[s])}return e}function An(t,e,n,i=null){qn(t,e,7,[n,i])}const Hy=gg();let zy=0;function Xg(t,e,n){const i=t.type,s=(e?e.appContext:t.appContext)||Hy,r={uid:zy++,vnode:t,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Eh(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Mg(i,s),emitsOptions:kg(i,s),emit:null,emitted:null,propsDefaults:tt,inheritAttrs:i.inheritAttrs,ctx:tt,data:tt,props:tt,attrs:tt,slots:tt,refs:tt,setupState:tt,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=Ry.bind(null,r),t.ce&&t.ce(r),r}let Gt=null;const Yn=()=>Gt||Wt;let ql,ff;{const t=Ma(),e=(n,i)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(i),r=>{s.length>1?s.forEach(o=>o(r)):s[0](r)}};ql=e("__VUE_INSTANCE_SETTERS__",n=>Gt=n),ff=e("__VUE_SSR_SETTERS__",n=>to=n)}const rr=t=>{const e=Gt;return ql(t),t.scope.on(),()=>{t.scope.off(),ql(e)}},hf=()=>{Gt&&Gt.scope.off(),ql(null)};function $g(t){return t.vnode.shapeFlag&4}let to=!1;function qg(t,e=!1,n=!1){e&&ff(e);const{props:i,children:s}=t.vnode,r=$g(t);_y(t,i,r,e),Sy(t,s,n);const o=r?Gy(t,e):void 0;return e&&ff(!1),o}function Gy(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,rf);const{setup:i}=n;if(i){ws();const s=t.setupContext=i.length>1?jg(t):null,r=rr(t),o=Mo(i,t,0,[t.props,s]),a=dc(o);if(Ps(),r(),(a||t.sp)&&!ms(t)&&Nh(t),a){if(o.then(hf,hf),e)return o.then(l=>{df(t,l,e)}).catch(l=>{mr(l,t,0)});t.asyncDep=o}else df(t,o,e)}else Yg(t,e)}function df(t,e,n){ze(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ft(e)&&(t.setupState=Ch(e)),Yg(t,n)}let Yl,pf;function Wy(t){Yl=t,pf=e=>{e.render._rc&&(e.withProxy=new Proxy(e.ctx,jx))}}const Xy=()=>!Yl;function Yg(t,e,n){const i=t.type;if(!t.render){if(!e&&Yl&&!i.render){const s=i.template||Vh(t).template;if(s){const{isCustomElement:r,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=i,c=nt(nt({isCustomElement:r,delimiters:a},o),l);i.render=Yl(s,c)}}t.render=i.render||jt,pf&&pf(t)}{const s=rr(t);ws();try{cy(t)}finally{Ps(),s()}}}const $y={get(t,e){return on(t,"get",""),t[e]}};function jg(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,$y),slots:t.slots,emit:t.emit,expose:e}}function wa(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Ch(xc(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in qo)return qo[n](t)},has(e,n){return n in e||n in qo}})):t.proxy}function mf(t,e=!0){return ze(t)?t.displayName||t.name:t.name||e&&t.__name}function qy(t){return ze(t)&&"__vccOpts"in t}const Dt=(t,e)=>ax(t,e,to);function or(t,e,n){const i=arguments.length;return i===2?ft(e)&&!Pe(e)?Xi(e)?ge(t,null,[e]):ge(t,e):ge(t,null,e):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&Xi(n)&&(n=[n]),ge(t,e,n))}function Yy(){}function jy(t,e,n,i){const s=n[i];if(s&&Kg(s,t))return s;const r=e();return r.memo=t.slice(),r.cacheIndex=i,n[i]=r}function Kg(t,e){const n=t.memo;if(n.length!=e.length)return!1;for(let i=0;i<n.length;i++)if(rn(n[i],e[i]))return!1;return sr>0&&cn&&cn.push(t),!0}const Zg="3.5.13",Ky=jt,Zy=_x,Jy=Br,Qy=J_,eM={createComponentInstance:Xg,setupComponent:qg,renderComponentRoot:bl,setCurrentRenderingInstance:la,isVNode:Xi,normalizeVNode:Rn,getComponentPublicInstance:wa,ensureValidVNode:Bh,pushWarningContext:hx,popWarningContext:dx},tM=eM,nM=null,iM=null,sM=null;/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let _f;const cp=typeof window<"u"&&window.trustedTypes;if(cp)try{_f=cp.createPolicy("vue",{createHTML:t=>t})}catch{}const Jg=_f?t=>_f.createHTML(t):t=>t,rM="http://www.w3.org/2000/svg",oM="http://www.w3.org/1998/Math/MathML",Ii=typeof document<"u"?document:null,up=Ii&&Ii.createElement("template"),aM={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const s=e==="svg"?Ii.createElementNS(rM,t):e==="mathml"?Ii.createElementNS(oM,t):n?Ii.createElement(t,{is:n}):Ii.createElement(t);return t==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:t=>Ii.createTextNode(t),createComment:t=>Ii.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Ii.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,i,s,r){const o=n?n.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===r||!(s=s.nextSibling)););else{up.innerHTML=Jg(i==="svg"?`<svg>${t}</svg>`:i==="mathml"?`<math>${t}</math>`:t);const a=up.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},ji="transition",Lo="animation",no=Symbol("_vtc"),Qg={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},e0=nt({},Ih,Qg),lM=t=>(t.displayName="Transition",t.props=e0,t),cM=lM((t,{slots:e})=>or(rg,t0(t),e)),Os=(t,e=[])=>{Pe(t)?t.forEach(n=>n(...e)):t&&t(...e)},fp=t=>t?Pe(t)?t.some(e=>e.length>1):t.length>1:!1;function t0(t){const e={};for(const I in t)I in Qg||(e[I]=t[I]);if(t.css===!1)return e;const{name:n="v",type:i,duration:s,enterFromClass:r=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=r,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:f=`${n}-leave-from`,leaveActiveClass:h=`${n}-leave-active`,leaveToClass:d=`${n}-leave-to`}=t,g=uM(s),E=g&&g[0],_=g&&g[1],{onBeforeEnter:p,onEnter:R,onEnterCancelled:x,onLeave:M,onLeaveCancelled:P,onBeforeAppear:N=p,onAppear:T=R,onAppearCancelled:A=x}=e,m=(I,L,k,G)=>{I._enterCancelled=G,ss(I,L?u:a),ss(I,L?c:o),k&&k()},v=(I,L)=>{I._isLeaving=!1,ss(I,f),ss(I,d),ss(I,h),L&&L()},C=I=>(L,k)=>{const G=I?T:R,O=()=>m(L,I,k);Os(G,[L,O]),hp(()=>{ss(L,I?l:r),ci(L,I?u:a),fp(G)||dp(L,i,E,O)})};return nt(e,{onBeforeEnter(I){Os(p,[I]),ci(I,r),ci(I,o)},onBeforeAppear(I){Os(N,[I]),ci(I,l),ci(I,c)},onEnter:C(!1),onAppear:C(!0),onLeave(I,L){I._isLeaving=!0;const k=()=>v(I,L);ci(I,f),I._enterCancelled?(ci(I,h),gf()):(gf(),ci(I,h)),hp(()=>{I._isLeaving&&(ss(I,f),ci(I,d),fp(M)||dp(I,i,_,k))}),Os(M,[I,k])},onEnterCancelled(I){m(I,!1,void 0,!0),Os(x,[I])},onAppearCancelled(I){m(I,!0,void 0,!0),Os(A,[I])},onLeaveCancelled(I){v(I),Os(P,[I])}})}function uM(t){if(t==null)return null;if(ft(t))return[fu(t.enter),fu(t.leave)];{const e=fu(t);return[e,e]}}function fu(t){return na(t)}function ci(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[no]||(t[no]=new Set)).add(e)}function ss(t,e){e.split(/\s+/).forEach(i=>i&&t.classList.remove(i));const n=t[no];n&&(n.delete(e),n.size||(t[no]=void 0))}function hp(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let fM=0;function dp(t,e,n,i){const s=t._endId=++fM,r=()=>{s===t._endId&&i()};if(n!=null)return setTimeout(r,n);const{type:o,timeout:a,propCount:l}=n0(t,e);if(!o)return i();const c=o+"end";let u=0;const f=()=>{t.removeEventListener(c,h),r()},h=d=>{d.target===t&&++u>=l&&f()};setTimeout(()=>{u<l&&f()},a+1),t.addEventListener(c,h)}function n0(t,e){const n=window.getComputedStyle(t),i=g=>(n[g]||"").split(", "),s=i(`${ji}Delay`),r=i(`${ji}Duration`),o=pp(s,r),a=i(`${Lo}Delay`),l=i(`${Lo}Duration`),c=pp(a,l);let u=null,f=0,h=0;e===ji?o>0&&(u=ji,f=o,h=r.length):e===Lo?c>0&&(u=Lo,f=c,h=l.length):(f=Math.max(o,c),u=f>0?o>c?ji:Lo:null,h=u?u===ji?r.length:l.length:0);const d=u===ji&&/\b(transform|all)(,|$)/.test(i(`${ji}Property`).toString());return{type:u,timeout:f,propCount:h,hasTransform:d}}function pp(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,i)=>mp(n)+mp(t[i])))}function mp(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function gf(){return document.body.offsetHeight}function hM(t,e,n){const i=t[no];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const jl=Symbol("_vod"),i0=Symbol("_vsh"),s0={beforeMount(t,{value:e},{transition:n}){t[jl]=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):Oo(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:i}){!e!=!n&&(i?e?(i.beforeEnter(t),Oo(t,!0),i.enter(t)):i.leave(t,()=>{Oo(t,!1)}):Oo(t,e))},beforeUnmount(t,{value:e}){Oo(t,e)}};function Oo(t,e){t.style.display=e?t[jl]:"none",t[i0]=!e}function dM(){s0.getSSRProps=({value:t})=>{if(!t)return{style:{display:"none"}}}}const r0=Symbol("");function pM(t){const e=Yn();if(!e)return;const n=e.ut=(s=t(e.proxy))=>{Array.from(document.querySelectorAll(`[data-v-owner="${e.uid}"]`)).forEach(r=>Kl(r,s))},i=()=>{const s=t(e.proxy);e.ce?Kl(e.ce,s):vf(e.subTree,s),n(s)};Lh(()=>{oa(i)}),_r(()=>{_s(i,jt,{flush:"post"});const s=new MutationObserver(i);s.observe(e.subTree.el.parentNode,{childList:!0}),Aa(()=>s.disconnect())})}function vf(t,e){if(t.shapeFlag&128){const n=t.suspense;t=n.activeBranch,n.pendingBranch&&!n.isHydrating&&n.effects.push(()=>{vf(n.activeBranch,e)})}for(;t.component;)t=t.component.subTree;if(t.shapeFlag&1&&t.el)Kl(t.el,e);else if(t.type===Et)t.children.forEach(n=>vf(n,e));else if(t.type===tr){let{el:n,anchor:i}=t;for(;n&&(Kl(n,e),n!==i);)n=n.nextSibling}}function Kl(t,e){if(t.nodeType===1){const n=t.style;let i="";for(const s in e)n.setProperty(`--${s}`,e[s]),i+=`--${s}: ${e[s]};`;n[r0]=i}}const mM=/(^|;)\s*display\s*:/;function _M(t,e,n){const i=t.style,s=Xe(n);let r=!1;if(n&&!s){if(e)if(Xe(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&Rl(i,a,"")}else for(const o in e)n[o]==null&&Rl(i,o,"");for(const o in n)o==="display"&&(r=!0),Rl(i,o,n[o])}else if(s){if(e!==n){const o=i[r0];o&&(n+=";"+o),i.cssText=n,r=mM.test(n)}}else e&&t.removeAttribute("style");jl in t&&(t[jl]=r?i.display:"",t[i0]&&(i.display="none"))}const _p=/\s*!important$/;function Rl(t,e,n){if(Pe(n))n.forEach(i=>Rl(t,e,i));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const i=gM(t,e);_p.test(n)?t.setProperty(ln(i),n.replace(_p,""),"important"):t[i]=n}}const gp=["Webkit","Moz","ms"],hu={};function gM(t,e){const n=hu[e];if(n)return n;let i=xt(e);if(i!=="filter"&&i in t)return hu[e]=i;i=Cs(i);for(let s=0;s<gp.length;s++){const r=gp[s]+i;if(r in t)return hu[e]=r}return e}const vp="http://www.w3.org/1999/xlink";function Ep(t,e,n,i,s,r=M_(e)){i&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(vp,e.slice(6,e.length)):t.setAttributeNS(vp,e,n):n==null||r&&!vh(n)?t.removeAttribute(e):t.setAttribute(e,r?"":Sn(n)?String(n):n)}function Sp(t,e,n,i,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Jg(n):n);return}const r=t.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(a!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=vh(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function Li(t,e,n,i){t.addEventListener(e,n,i)}function vM(t,e,n,i){t.removeEventListener(e,n,i)}const xp=Symbol("_vei");function EM(t,e,n,i,s=null){const r=t[xp]||(t[xp]={}),o=r[e];if(i&&o)o.value=i;else{const[a,l]=SM(e);if(i){const c=r[e]=MM(i,s);Li(t,a,c,l)}else o&&(vM(t,a,o,l),r[e]=void 0)}}const yp=/(?:Once|Passive|Capture)$/;function SM(t){let e;if(yp.test(t)){e={};let i;for(;i=t.match(yp);)t=t.slice(0,t.length-i[0].length),e[i[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):ln(t.slice(2)),e]}let du=0;const xM=Promise.resolve(),yM=()=>du||(xM.then(()=>du=0),du=Date.now());function MM(t,e){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;qn(TM(i,n.value),e,5,[i])};return n.value=t,n.attached=yM(),n}function TM(t,e){if(Pe(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(i=>s=>!s._stopped&&i&&i(s))}else return e}const Mp=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,bM=(t,e,n,i,s,r)=>{const o=s==="svg";e==="class"?hM(t,i,o):e==="style"?_M(t,n,i):As(e)?fc(e)||EM(t,e,n,i,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):AM(t,e,i,o))?(Sp(t,e,i),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Ep(t,e,i,o,r,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!Xe(i))?Sp(t,xt(e),i,r,e):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),Ep(t,e,i,o))};function AM(t,e,n,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in t&&Mp(e)&&ze(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Mp(e)&&Xe(n)?!1:e in t}const Tp={};/*! #__NO_SIDE_EFFECTS__ */function o0(t,e,n){const i=kn(t,e);ya(i)&&nt(i,e);class s extends wc{constructor(o){super(i,o,n)}}return s.def=i,s}/*! #__NO_SIDE_EFFECTS__ */const RM=(t,e)=>o0(t,e,v0),CM=typeof HTMLElement<"u"?HTMLElement:class{};class wc extends CM{constructor(e,n={},i=Ql){super(),this._def=e,this._props=n,this._createApp=i,this._isVueCE=!0,this._instance=null,this._app=null,this._nonce=this._def.nonce,this._connected=!1,this._resolved=!1,this._numberProps=null,this._styleChildren=new WeakSet,this._ob=null,this.shadowRoot&&i!==Ql?this._root=this.shadowRoot:e.shadowRoot!==!1?(this.attachShadow({mode:"open"}),this._root=this.shadowRoot):this._root=this,this._def.__asyncLoader||this._resolveProps(this._def)}connectedCallback(){if(!this.isConnected)return;this.shadowRoot||this._parseSlots(),this._connected=!0;let e=this;for(;e=e&&(e.parentNode||e.host);)if(e instanceof wc){this._parent=e;break}this._instance||(this._resolved?(this._setParent(),this._update()):e&&e._pendingResolve?this._pendingResolve=e._pendingResolve.then(()=>{this._pendingResolve=void 0,this._resolveDef()}):this._resolveDef())}_setParent(e=this._parent){e&&(this._instance.parent=e._instance,this._instance.provides=e._instance.provides)}disconnectedCallback(){this._connected=!1,To(()=>{this._connected||(this._ob&&(this._ob.disconnect(),this._ob=null),this._app&&this._app.unmount(),this._instance&&(this._instance.ce=void 0),this._app=this._instance=null)})}_resolveDef(){if(this._pendingResolve)return;for(let i=0;i<this.attributes.length;i++)this._setAttr(this.attributes[i].name);this._ob=new MutationObserver(i=>{for(const s of i)this._setAttr(s.attributeName)}),this._ob.observe(this,{attributes:!0});const e=(i,s=!1)=>{this._resolved=!0,this._pendingResolve=void 0;const{props:r,styles:o}=i;let a;if(r&&!Pe(r))for(const l in r){const c=r[l];(c===Number||c&&c.type===Number)&&(l in this._props&&(this._props[l]=na(this._props[l])),(a||(a=Object.create(null)))[xt(l)]=!0)}this._numberProps=a,s&&this._resolveProps(i),this.shadowRoot&&this._applyStyles(o),this._mount(i)},n=this._def.__asyncLoader;n?this._pendingResolve=n().then(i=>e(this._def=i,!0)):e(this._def)}_mount(e){this._app=this._createApp(e),e.configureApp&&e.configureApp(this._app),this._app._ceVNode=this._createVNode(),this._app.mount(this._root);const n=this._instance&&this._instance.exposed;if(n)for(const i in n)lt(this,i)||Object.defineProperty(this,i,{get:()=>Re(n[i])})}_resolveProps(e){const{props:n}=e,i=Pe(n)?n:Object.keys(n||{});for(const s of Object.keys(this))s[0]!=="_"&&i.includes(s)&&this._setProp(s,this[s]);for(const s of i.map(xt))Object.defineProperty(this,s,{get(){return this._getProp(s)},set(r){this._setProp(s,r,!0,!0)}})}_setAttr(e){if(e.startsWith("data-v-"))return;const n=this.hasAttribute(e);let i=n?this.getAttribute(e):Tp;const s=xt(e);n&&this._numberProps&&this._numberProps[s]&&(i=na(i)),this._setProp(s,i,!1,!0)}_getProp(e){return this._props[e]}_setProp(e,n,i=!0,s=!1){if(n!==this._props[e]&&(n===Tp?delete this._props[e]:(this._props[e]=n,e==="key"&&this._app&&(this._app._ceVNode.key=n)),s&&this._instance&&this._update(),i)){const r=this._ob;r&&r.disconnect(),n===!0?this.setAttribute(ln(e),""):typeof n=="string"||typeof n=="number"?this.setAttribute(ln(e),n+""):n||this.removeAttribute(ln(e)),r&&r.observe(this,{attributes:!0})}}_update(){g0(this._createVNode(),this._root)}_createVNode(){const e={};this.shadowRoot||(e.onVnodeMounted=e.onVnodeUpdated=this._renderSlots.bind(this));const n=ge(this._def,nt(e,this._props));return this._instance||(n.ce=i=>{this._instance=i,i.ce=this,i.isCE=!0;const s=(r,o)=>{this.dispatchEvent(new CustomEvent(r,ya(o[0])?nt({detail:o},o[0]):{detail:o}))};i.emit=(r,...o)=>{s(r,o),ln(r)!==r&&s(ln(r),o)},this._setParent()}),n}_applyStyles(e,n){if(!e)return;if(n){if(n===this._def||this._styleChildren.has(n))return;this._styleChildren.add(n)}const i=this._nonce;for(let s=e.length-1;s>=0;s--){const r=document.createElement("style");i&&r.setAttribute("nonce",i),r.textContent=e[s],this.shadowRoot.prepend(r)}}_parseSlots(){const e=this._slots={};let n;for(;n=this.firstChild;){const i=n.nodeType===1&&n.getAttribute("slot")||"default";(e[i]||(e[i]=[])).push(n),this.removeChild(n)}}_renderSlots(){const e=(this._teleportTarget||this).querySelectorAll("slot"),n=this._instance.type.__scopeId;for(let i=0;i<e.length;i++){const s=e[i],r=s.getAttribute("name")||"default",o=this._slots[r],a=s.parentNode;if(o)for(const l of o){if(n&&l.nodeType===1){const c=n+"-s",u=document.createTreeWalker(l,1);l.setAttribute(c,"");let f;for(;f=u.nextNode();)f.setAttribute(c,"")}a.insertBefore(l,s)}else for(;s.firstChild;)a.insertBefore(s.firstChild,s);a.removeChild(s)}}_injectChildStyle(e){this._applyStyles(e.styles,e)}_removeChildStyle(e){}}function a0(t){const e=Yn(),n=e&&e.ce;return n||null}function wM(){const t=a0();return t&&t.shadowRoot}function PM(t="$style"){{const e=Yn();if(!e)return tt;const n=e.type.__cssModules;if(!n)return tt;const i=n[t];return i||tt}}const l0=new WeakMap,c0=new WeakMap,Zl=Symbol("_moveCb"),bp=Symbol("_enterCb"),IM=t=>(delete t.props.mode,t),NM=IM({name:"TransitionGroup",props:nt({},e0,{tag:String,moveClass:String}),setup(t,{slots:e}){const n=Yn(),i=Ph();let s,r;return bc(()=>{if(!s.length)return;const o=t.moveClass||`${t.name||"v"}-move`;if(!FM(s[0].el,n.vnode.el,o))return;s.forEach(LM),s.forEach(OM);const a=s.filter(UM);gf(),a.forEach(l=>{const c=l.el,u=c.style;ci(c,o),u.transform=u.webkitTransform=u.transitionDuration="";const f=c[Zl]=h=>{h&&h.target!==c||(!h||/transform$/.test(h.propertyName))&&(c.removeEventListener("transitionend",f),c[Zl]=null,ss(c,o))};c.addEventListener("transitionend",f)})}),()=>{const o=it(t),a=t0(o);let l=o.tag||Et;if(s=[],r)for(let c=0;c<r.length;c++){const u=r[c];u.el&&u.el instanceof Element&&(s.push(u),Wi(u,eo(u,a,i,n)),l0.set(u,u.el.getBoundingClientRect()))}r=e.default?Mc(e.default()):[];for(let c=0;c<r.length;c++){const u=r[c];u.key!=null&&Wi(u,eo(u,a,i,n))}return ge(l,null,r)}}}),DM=NM;function LM(t){const e=t.el;e[Zl]&&e[Zl](),e[bp]&&e[bp]()}function OM(t){c0.set(t,t.el.getBoundingClientRect())}function UM(t){const e=l0.get(t),n=c0.get(t),i=e.left-n.left,s=e.top-n.top;if(i||s){const r=t.el.style;return r.transform=r.webkitTransform=`translate(${i}px,${s}px)`,r.transitionDuration="0s",t}}function FM(t,e,n){const i=t.cloneNode(),s=t[no];s&&s.forEach(a=>{a.split(/\s+/).forEach(l=>l&&i.classList.remove(l))}),n.split(/\s+/).forEach(a=>a&&i.classList.add(a)),i.style.display="none";const r=e.nodeType===1?e:e.parentNode;r.appendChild(i);const{hasTransform:o}=n0(i);return r.removeChild(i),o}const ys=t=>{const e=t.props["onUpdate:modelValue"]||!1;return Pe(e)?n=>Js(e,n):e};function kM(t){t.target.composing=!0}function Ap(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Xn=Symbol("_assign"),Jl={created(t,{modifiers:{lazy:e,trim:n,number:i}},s){t[Xn]=ys(s);const r=i||s.props&&s.props.type==="number";Li(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),r&&(a=ta(a)),t[Xn](a)}),n&&Li(t,"change",()=>{t.value=t.value.trim()}),e||(Li(t,"compositionstart",kM),Li(t,"compositionend",Ap),Li(t,"change",Ap))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:i,trim:s,number:r}},o){if(t[Xn]=ys(o),t.composing)return;const a=(r||t.type==="number")&&!/^0\d/.test(t.value)?ta(t.value):t.value,l=e??"";a!==l&&(document.activeElement===t&&t.type!=="range"&&(i&&e===n||s&&t.value.trim()===l)||(t.value=l))}},Xh={deep:!0,created(t,e,n){t[Xn]=ys(n),Li(t,"change",()=>{const i=t._modelValue,s=io(t),r=t.checked,o=t[Xn];if(Pe(i)){const a=Ta(i,s),l=a!==-1;if(r&&!l)o(i.concat(s));else if(!r&&l){const c=[...i];c.splice(a,1),o(c)}}else if(Rs(i)){const a=new Set(i);r?a.add(s):a.delete(s),o(a)}else o(f0(t,r))})},mounted:Rp,beforeUpdate(t,e,n){t[Xn]=ys(n),Rp(t,e,n)}};function Rp(t,{value:e,oldValue:n},i){t._modelValue=e;let s;if(Pe(e))s=Ta(e,i.props.value)>-1;else if(Rs(e))s=e.has(i.props.value);else{if(e===n)return;s=Gi(e,f0(t,!0))}t.checked!==s&&(t.checked=s)}const $h={created(t,{value:e},n){t.checked=Gi(e,n.props.value),t[Xn]=ys(n),Li(t,"change",()=>{t[Xn](io(t))})},beforeUpdate(t,{value:e,oldValue:n},i){t[Xn]=ys(i),e!==n&&(t.checked=Gi(e,i.props.value))}},u0={deep:!0,created(t,{value:e,modifiers:{number:n}},i){const s=Rs(e);Li(t,"change",()=>{const r=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?ta(io(o)):io(o));t[Xn](t.multiple?s?new Set(r):r:r[0]),t._assigning=!0,To(()=>{t._assigning=!1})}),t[Xn]=ys(i)},mounted(t,{value:e}){Cp(t,e)},beforeUpdate(t,e,n){t[Xn]=ys(n)},updated(t,{value:e}){t._assigning||Cp(t,e)}};function Cp(t,e){const n=t.multiple,i=Pe(e);if(!(n&&!i&&!Rs(e))){for(let s=0,r=t.options.length;s<r;s++){const o=t.options[s],a=io(o);if(n)if(i){const l=typeof a;l==="string"||l==="number"?o.selected=e.some(c=>String(c)===String(a)):o.selected=Ta(e,a)>-1}else o.selected=e.has(a);else if(Gi(io(o),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function io(t){return"_value"in t?t._value:t.value}function f0(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const h0={created(t,e,n){ja(t,e,n,null,"created")},mounted(t,e,n){ja(t,e,n,null,"mounted")},beforeUpdate(t,e,n,i){ja(t,e,n,i,"beforeUpdate")},updated(t,e,n,i){ja(t,e,n,i,"updated")}};function d0(t,e){switch(t){case"SELECT":return u0;case"TEXTAREA":return Jl;default:switch(e){case"checkbox":return Xh;case"radio":return $h;default:return Jl}}}function ja(t,e,n,i,s){const o=d0(t.tagName,n.props&&n.props.type)[s];o&&o(t,e,n,i)}function BM(){Jl.getSSRProps=({value:t})=>({value:t}),$h.getSSRProps=({value:t},e)=>{if(e.props&&Gi(e.props.value,t))return{checked:!0}},Xh.getSSRProps=({value:t},e)=>{if(Pe(t)){if(e.props&&Ta(t,e.props.value)>-1)return{checked:!0}}else if(Rs(t)){if(e.props&&t.has(e.props.value))return{checked:!0}}else if(t)return{checked:!0}},h0.getSSRProps=(t,e)=>{if(typeof e.type!="string")return;const n=d0(e.type.toUpperCase(),e.props&&e.props.type);if(n.getSSRProps)return n.getSSRProps(t,e)}}const VM=["ctrl","shift","alt","meta"],HM={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>VM.some(n=>t[`${n}Key`]&&!e.includes(n))},zM=(t,e)=>{const n=t._withMods||(t._withMods={}),i=e.join(".");return n[i]||(n[i]=(s,...r)=>{for(let o=0;o<e.length;o++){const a=HM[e[o]];if(a&&a(s,e))return}return t(s,...r)})},GM={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},WM=(t,e)=>{const n=t._withKeys||(t._withKeys={}),i=e.join(".");return n[i]||(n[i]=s=>{if(!("key"in s))return;const r=ln(s.key);if(e.some(o=>o===r||GM[o]===r))return t(s)})},p0=nt({patchProp:bM},aM);let Ko,wp=!1;function m0(){return Ko||(Ko=Cg(p0))}function _0(){return Ko=wp?Ko:wg(p0),wp=!0,Ko}const g0=(...t)=>{m0().render(...t)},XM=(...t)=>{_0().hydrate(...t)},Ql=(...t)=>{const e=m0().createApp(...t),{mount:n}=e;return e.mount=i=>{const s=S0(i);if(!s)return;const r=e._component;!ze(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,E0(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e},v0=(...t)=>{const e=_0().createApp(...t),{mount:n}=e;return e.mount=i=>{const s=S0(i);if(s)return n(s,!0,E0(s))},e};function E0(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function S0(t){return Xe(t)?document.querySelector(t):t}let Pp=!1;const $M=()=>{Pp||(Pp=!0,BM(),dM())},qM=Object.freeze(Object.defineProperty({__proto__:null,BaseTransition:rg,BaseTransitionPropsValidators:Ih,Comment:Bt,DeprecationTypes:sM,EffectScope:Eh,ErrorCodes:mx,ErrorTypeStrings:Zy,Fragment:Et,KeepAlive:zx,ReactiveEffect:ia,Static:tr,Suspense:Dy,Teleport:Tx,Text:gs,TrackOpTypes:lx,Transition:cM,TransitionGroup:DM,TriggerOpTypes:cx,VueElement:wc,assertNumber:px,callWithAsyncErrorHandling:qn,callWithErrorHandling:Mo,camelize:xt,capitalize:Cs,cloneVNode:vi,compatUtils:iM,computed:Dt,createApp:Ql,createBlock:rt,createCommentVNode:xn,createElementBlock:je,createElementVNode:pe,createHydrationRenderer:wg,createPropsRestProxy:ay,createRenderer:Cg,createSSRApp:v0,createSlots:qx,createStaticVNode:Gh,createTextVNode:Ca,createVNode:ge,customRef:W_,defineAsyncComponent:Vx,defineComponent:kn,defineCustomElement:o0,defineEmits:Zx,defineExpose:Jx,defineModel:ty,defineOptions:Qx,defineProps:Kx,defineSSRCustomElement:RM,defineSlots:ey,devtools:Jy,effect:IS,effectScope:Sh,getCurrentInstance:Yn,getCurrentScope:xh,getCurrentWatcher:ux,getTransitionRawChildren:Mc,guardReactiveProps:Wg,h:or,handleError:mr,hasInjectionContext:vg,hydrate:XM,hydrateOnIdle:Lx,hydrateOnInteraction:kx,hydrateOnMediaQuery:Fx,hydrateOnVisible:Ux,initCustomFormatter:Yy,initDirectivesForSSR:$M,inject:oi,isMemoSame:Kg,isProxy:Sc,isReactive:mi,isReadonly:xs,isRef:Rt,isRuntimeOnly:Xy,isShallow:Un,isVNode:Xi,markRaw:xc,mergeDefaults:ry,mergeModels:oy,mergeProps:Ei,nextTick:To,normalizeClass:xo,normalizeProps:g_,normalizeStyle:So,onActivated:ag,onBeforeMount:Dh,onBeforeUnmount:Ac,onBeforeUpdate:Lh,onDeactivated:lg,onErrorCaptured:dg,onMounted:_r,onRenderTracked:hg,onRenderTriggered:fg,onScopeDispose:R_,onServerPrefetch:ug,onUnmounted:Aa,onUpdated:bc,onWatcherCleanup:q_,openBlock:be,popScopeId:Sx,provide:Yo,proxyRefs:Ch,pushScopeId:Ex,queuePostFlushCb:oa,reactive:yo,readonly:Ah,ref:_i,registerRuntimeCompiler:Wy,render:g0,renderList:Fh,renderSlot:kh,resolveComponent:bo,resolveDirective:$x,resolveDynamicComponent:Xx,resolveFilter:nM,resolveTransitionHooks:eo,setBlockTracking:uf,setDevtoolsHook:Qy,setTransitionHooks:Wi,shallowReactive:bh,shallowReadonly:ZS,shallowRef:Rh,ssrContextKey:Dg,ssrUtils:tM,stop:NS,toDisplayString:En,toHandlerKey:Zs,toHandlers:Yx,toRaw:it,toRef:rx,toRefs:X_,toValue:ex,transformVNodeArgs:By,triggerRef:QS,unref:Re,useAttrs:sy,useCssModule:PM,useCssVars:pM,useHost:a0,useId:Ax,useModel:Ay,useSSRContext:Lg,useShadowRoot:wM,useSlots:iy,useTemplateRef:Rx,useTransitionState:Ph,vModelCheckbox:Xh,vModelDynamic:h0,vModelRadio:$h,vModelSelect:u0,vModelText:Jl,vShow:s0,version:Zg,warn:Ky,watch:_s,watchEffect:My,watchPostEffect:Ty,watchSyncEffect:Og,withAsyncContext:ly,withCtx:At,withDefaults:ny,withDirectives:yx,withKeys:WM,withMemo:jy,withModifiers:zM,withScopeId:xx},Symbol.toStringTag,{value:"Module"}));var YM=!1;/*!
 * pinia v2.3.0
 * (c) 2024 Eduardo San Martin Morote
 * @license MIT
 */let x0;const Pc=t=>x0=t,y0=Symbol();function Ef(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var Zo;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Zo||(Zo={}));function jM(){const t=Sh(!0),e=t.run(()=>_i({}));let n=[],i=[];const s=xc({install(r){Pc(s),s._a=r,r.provide(y0,s),r.config.globalProperties.$pinia=s,i.forEach(o=>n.push(o)),i=[]},use(r){return!this._a&&!YM?i.push(r):n.push(r),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const M0=()=>{};function Ip(t,e,n,i=M0){t.push(e);const s=()=>{const r=t.indexOf(e);r>-1&&(t.splice(r,1),i())};return!n&&xh()&&R_(s),s}function yr(t,...e){t.slice().forEach(n=>{n(...e)})}const KM=t=>t(),Np=Symbol(),pu=Symbol();function Sf(t,e){t instanceof Map&&e instanceof Map?e.forEach((n,i)=>t.set(i,n)):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const i=e[n],s=t[n];Ef(s)&&Ef(i)&&t.hasOwnProperty(n)&&!Rt(i)&&!mi(i)?t[n]=Sf(s,i):t[n]=i}return t}const ZM=Symbol();function JM(t){return!Ef(t)||!t.hasOwnProperty(ZM)}const{assign:rs}=Object;function QM(t){return!!(Rt(t)&&t.effect)}function eT(t,e,n,i){const{state:s,actions:r,getters:o}=e,a=n.state.value[t];let l;function c(){a||(n.state.value[t]=s?s():{});const u=X_(n.state.value[t]);return rs(u,r,Object.keys(o||{}).reduce((f,h)=>(f[h]=xc(Dt(()=>{Pc(n);const d=n._s.get(t);return o[h].call(d,d)})),f),{}))}return l=T0(t,c,e,n,i,!0),l}function T0(t,e,n={},i,s,r){let o;const a=rs({actions:{}},n),l={deep:!0};let c,u,f=[],h=[],d;const g=i.state.value[t];!r&&!g&&(i.state.value[t]={}),_i({});let E;function _(A){let m;c=u=!1,typeof A=="function"?(A(i.state.value[t]),m={type:Zo.patchFunction,storeId:t,events:d}):(Sf(i.state.value[t],A),m={type:Zo.patchObject,payload:A,storeId:t,events:d});const v=E=Symbol();To().then(()=>{E===v&&(c=!0)}),u=!0,yr(f,m,i.state.value[t])}const p=r?function(){const{state:m}=n,v=m?m():{};this.$patch(C=>{rs(C,v)})}:M0;function R(){o.stop(),f=[],h=[],i._s.delete(t)}const x=(A,m="")=>{if(Np in A)return A[pu]=m,A;const v=function(){Pc(i);const C=Array.from(arguments),I=[],L=[];function k(W){I.push(W)}function G(W){L.push(W)}yr(h,{args:C,name:v[pu],store:P,after:k,onError:G});let O;try{O=A.apply(this&&this.$id===t?this:P,C)}catch(W){throw yr(L,W),W}return O instanceof Promise?O.then(W=>(yr(I,W),W)).catch(W=>(yr(L,W),Promise.reject(W))):(yr(I,O),O)};return v[Np]=!0,v[pu]=m,v},M={_p:i,$id:t,$onAction:Ip.bind(null,h),$patch:_,$reset:p,$subscribe(A,m={}){const v=Ip(f,A,m.detached,()=>C()),C=o.run(()=>_s(()=>i.state.value[t],I=>{(m.flush==="sync"?u:c)&&A({storeId:t,type:Zo.direct,events:d},I)},rs({},l,m)));return v},$dispose:R},P=yo(M);i._s.set(t,P);const T=(i._a&&i._a.runWithContext||KM)(()=>i._e.run(()=>(o=Sh()).run(()=>e({action:x}))));for(const A in T){const m=T[A];if(Rt(m)&&!QM(m)||mi(m))r||(g&&JM(m)&&(Rt(m)?m.value=g[A]:Sf(m,g[A])),i.state.value[t][A]=m);else if(typeof m=="function"){const v=x(m,A);T[A]=v,a.actions[A]=m}}return rs(P,T),rs(it(P),T),Object.defineProperty(P,"$state",{get:()=>i.state.value[t],set:A=>{_(m=>{rs(m,A)})}}),i._p.forEach(A=>{rs(P,o.run(()=>A({store:P,app:i._a,pinia:i,options:a})))}),g&&r&&n.hydrate&&n.hydrate(P.$state,g),c=!0,u=!0,P}/*! #__NO_SIDE_EFFECTS__ */function tT(t,e,n){let i,s;const r=typeof e=="function";i=t,s=r?n:e;function o(a,l){const c=vg();return a=a||(c?oi(y0,null):null),a&&Pc(a),a=x0,a._s.has(i)||(r?T0(i,e,s,a):eT(i,s,a)),a._s.get(i)}return o.$id=i,o}const yn=tT("store",()=>({isMobile:_i("false")})),Ot=(t,e)=>{const n=t.__vccOpts||t;for(const[i,s]of e)n[i]=s;return n},nT={class:"main"},iT={__name:"App",setup(t){const e=yn(),n=()=>{e.isMobile=window.innerWidth<=768};return _r(()=>{window.addEventListener("resize",n)}),Aa(()=>{window.removeEventListener("resize",n)}),Dh(()=>{e.isMobile=window.innerWidth<=768,console.log("before mount",e.isMobile)}),(i,s)=>{const r=bo("Router-view");return be(),je("main",nT,[ge(r)])}}},sT=Ot(iT,[["__scopeId","data-v-20c7ac5c"]]);/*!
  * vue-router v4.5.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const Vr=typeof document<"u";function b0(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function rT(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&b0(t.default)}const yt=Object.assign;function mu(t,e){const n={};for(const i in e){const s=e[i];n[i]=li(s)?s.map(t):t(s)}return n}const Jo=()=>{},li=Array.isArray,A0=/#/g,oT=/&/g,aT=/\//g,lT=/=/g,cT=/\?/g,R0=/\+/g,uT=/%5B/g,fT=/%5D/g,C0=/%5E/g,hT=/%60/g,w0=/%7B/g,dT=/%7C/g,P0=/%7D/g,pT=/%20/g;function qh(t){return encodeURI(""+t).replace(dT,"|").replace(uT,"[").replace(fT,"]")}function mT(t){return qh(t).replace(w0,"{").replace(P0,"}").replace(C0,"^")}function xf(t){return qh(t).replace(R0,"%2B").replace(pT,"+").replace(A0,"%23").replace(oT,"%26").replace(hT,"`").replace(w0,"{").replace(P0,"}").replace(C0,"^")}function _T(t){return xf(t).replace(lT,"%3D")}function gT(t){return qh(t).replace(A0,"%23").replace(cT,"%3F")}function vT(t){return t==null?"":gT(t).replace(aT,"%2F")}function ha(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const ET=/\/$/,ST=t=>t.replace(ET,"");function _u(t,e,n="/"){let i,s={},r="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(i=e.slice(0,l),r=e.slice(l+1,a>-1?a:e.length),s=t(r)),a>-1&&(i=i||e.slice(0,a),o=e.slice(a,e.length)),i=TT(i??e,n),{fullPath:i+(r&&"?")+r+o,path:i,query:s,hash:ha(o)}}function xT(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function yT(t,e,n){const i=e.matched.length-1,s=n.matched.length-1;return i>-1&&i===s&&so(e.matched[i],n.matched[s])&&I0(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function so(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function I0(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!MT(t[n],e[n]))return!1;return!0}function MT(t,e){return li(t)?Dp(t,e):li(e)?Dp(e,t):t===e}function Dp(t,e){return li(e)?t.length===e.length&&t.every((n,i)=>n===e[i]):t.length===1&&t[0]===e}function TT(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),i=t.split("/"),s=i[i.length-1];(s===".."||s===".")&&i.push("");let r=n.length-1,o,a;for(o=0;o<i.length;o++)if(a=i[o],a!==".")if(a==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+i.slice(o).join("/")}const Ki={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var da;(function(t){t.pop="pop",t.push="push"})(da||(da={}));var ec;(function(t){t.back="back",t.forward="forward",t.unknown=""})(ec||(ec={}));const gu="";function bT(t){if(!t)if(Vr){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),ST(t)}const AT=/^[^#]+#/;function RT(t,e){return t.replace(AT,"#")+e}function CT(t,e){const n=document.documentElement.getBoundingClientRect(),i=t.getBoundingClientRect();return{behavior:e.behavior,left:i.left-n.left-(e.left||0),top:i.top-n.top-(e.top||0)}}const wT=()=>({left:window.scrollX,top:window.scrollY});function PT(t){let e;if("el"in t){const n=t.el,i=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?i?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=CT(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Lp(t,e){return(history.state?history.state.position-e:-1)+t}const yf=new Map;function IT(t,e){yf.set(t,e)}function NT(t){const e=yf.get(t);return yf.delete(t),e}function DT(t=""){let e=[],n=[gu],i=0;t=bT(t);function s(a){i++,i!==n.length&&n.splice(i),n.push(a)}function r(a,l,{direction:c,delta:u}){const f={direction:c,delta:u,type:da.pop};for(const h of e)h(a,l,f)}const o={location:gu,state:{},base:t,createHref:RT.bind(null,t),replace(a){n.splice(i--,1),s(a)},push(a,l){s(a)},listen(a){return e.push(a),()=>{const l=e.indexOf(a);l>-1&&e.splice(l,1)}},destroy(){e=[],n=[gu],i=0},go(a,l=!0){const c=this.location,u=a<0?ec.back:ec.forward;i=Math.max(0,Math.min(i+a,n.length-1)),l&&r(this.location,c,{direction:u,delta:a})}};return Object.defineProperty(o,"location",{enumerable:!0,get:()=>n[i]}),o}function LT(t){return typeof t=="string"||t&&typeof t=="object"}function N0(t){return typeof t=="string"||typeof t=="symbol"}const D0=Symbol("");var Op;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Op||(Op={}));function ro(t,e){return yt(new Error,{type:t,[D0]:!0},e)}function yi(t,e){return t instanceof Error&&D0 in t&&(e==null||!!(t.type&e))}const Up="[^/]+?",OT={sensitive:!1,strict:!1,start:!0,end:!0},UT=/[.+*?^${}()[\]/\\]/g;function FT(t,e){const n=yt({},OT,e),i=[];let s=n.start?"^":"";const r=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(s+="/");for(let f=0;f<c.length;f++){const h=c[f];let d=40+(n.sensitive?.25:0);if(h.type===0)f||(s+="/"),s+=h.value.replace(UT,"\\$&"),d+=40;else if(h.type===1){const{value:g,repeatable:E,optional:_,regexp:p}=h;r.push({name:g,repeatable:E,optional:_});const R=p||Up;if(R!==Up){d+=10;try{new RegExp(`(${R})`)}catch(M){throw new Error(`Invalid custom RegExp for param "${g}" (${R}): `+M.message)}}let x=E?`((?:${R})(?:/(?:${R}))*)`:`(${R})`;f||(x=_&&c.length<2?`(?:/${x})`:"/"+x),_&&(x+="?"),s+=x,d+=20,_&&(d+=-8),E&&(d+=-20),R===".*"&&(d+=-50)}u.push(d)}i.push(u)}if(n.strict&&n.end){const c=i.length-1;i[c][i[c].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(c){const u=c.match(o),f={};if(!u)return null;for(let h=1;h<u.length;h++){const d=u[h]||"",g=r[h-1];f[g.name]=d&&g.repeatable?d.split("/"):d}return f}function l(c){let u="",f=!1;for(const h of t){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const d of h)if(d.type===0)u+=d.value;else if(d.type===1){const{value:g,repeatable:E,optional:_}=d,p=g in c?c[g]:"";if(li(p)&&!E)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const R=li(p)?p.join("/"):p;if(!R)if(_)h.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${g}"`);u+=R}}return u||"/"}return{re:o,score:i,keys:r,parse:a,stringify:l}}function kT(t,e){let n=0;for(;n<t.length&&n<e.length;){const i=e[n]-t[n];if(i)return i;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function L0(t,e){let n=0;const i=t.score,s=e.score;for(;n<i.length&&n<s.length;){const r=kT(i[n],s[n]);if(r)return r;n++}if(Math.abs(s.length-i.length)===1){if(Fp(i))return 1;if(Fp(s))return-1}return s.length-i.length}function Fp(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const BT={type:0,value:""},VT=/[a-zA-Z0-9_]/;function HT(t){if(!t)return[[]];if(t==="/")return[[BT]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(d){throw new Error(`ERR (${n})/"${c}": ${d}`)}let n=0,i=n;const s=[];let r;function o(){r&&s.push(r),r=[]}let a=0,l,c="",u="";function f(){c&&(n===0?r.push({type:0,value:c}):n===1||n===2||n===3?(r.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function h(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){i=n,n=4;continue}switch(n){case 0:l==="/"?(c&&f(),o()):l===":"?(f(),n=1):h();break;case 4:h(),n=i;break;case 1:l==="("?n=2:VT.test(l)?h():(f(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:f(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),f(),o(),s}function zT(t,e,n){const i=FT(HT(t.path),n),s=yt(i,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function GT(t,e){const n=[],i=new Map;e=Hp({strict:!1,end:!0,sensitive:!1},e);function s(f){return i.get(f)}function r(f,h,d){const g=!d,E=Bp(f);E.aliasOf=d&&d.record;const _=Hp(e,f),p=[E];if("alias"in f){const M=typeof f.alias=="string"?[f.alias]:f.alias;for(const P of M)p.push(Bp(yt({},E,{components:d?d.record.components:E.components,path:P,aliasOf:d?d.record:E})))}let R,x;for(const M of p){const{path:P}=M;if(h&&P[0]!=="/"){const N=h.record.path,T=N[N.length-1]==="/"?"":"/";M.path=h.record.path+(P&&T+P)}if(R=zT(M,h,_),d?d.alias.push(R):(x=x||R,x!==R&&x.alias.push(R),g&&f.name&&!Vp(R)&&o(f.name)),O0(R)&&l(R),E.children){const N=E.children;for(let T=0;T<N.length;T++)r(N[T],R,d&&d.children[T])}d=d||R}return x?()=>{o(x)}:Jo}function o(f){if(N0(f)){const h=i.get(f);h&&(i.delete(f),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(f);h>-1&&(n.splice(h,1),f.record.name&&i.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function a(){return n}function l(f){const h=$T(f,n);n.splice(h,0,f),f.record.name&&!Vp(f)&&i.set(f.record.name,f)}function c(f,h){let d,g={},E,_;if("name"in f&&f.name){if(d=i.get(f.name),!d)throw ro(1,{location:f});_=d.record.name,g=yt(kp(h.params,d.keys.filter(x=>!x.optional).concat(d.parent?d.parent.keys.filter(x=>x.optional):[]).map(x=>x.name)),f.params&&kp(f.params,d.keys.map(x=>x.name))),E=d.stringify(g)}else if(f.path!=null)E=f.path,d=n.find(x=>x.re.test(E)),d&&(g=d.parse(E),_=d.record.name);else{if(d=h.name?i.get(h.name):n.find(x=>x.re.test(h.path)),!d)throw ro(1,{location:f,currentLocation:h});_=d.record.name,g=yt({},h.params,f.params),E=d.stringify(g)}const p=[];let R=d;for(;R;)p.unshift(R.record),R=R.parent;return{name:_,path:E,params:g,matched:p,meta:XT(p)}}t.forEach(f=>r(f));function u(){n.length=0,i.clear()}return{addRoute:r,resolve:c,removeRoute:o,clearRoutes:u,getRoutes:a,getRecordMatcher:s}}function kp(t,e){const n={};for(const i of e)i in t&&(n[i]=t[i]);return n}function Bp(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:WT(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function WT(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const i in t.components)e[i]=typeof n=="object"?n[i]:n;return e}function Vp(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function XT(t){return t.reduce((e,n)=>yt(e,n.meta),{})}function Hp(t,e){const n={};for(const i in t)n[i]=i in e?e[i]:t[i];return n}function $T(t,e){let n=0,i=e.length;for(;n!==i;){const r=n+i>>1;L0(t,e[r])<0?i=r:n=r+1}const s=qT(t);return s&&(i=e.lastIndexOf(s,i-1)),i}function qT(t){let e=t;for(;e=e.parent;)if(O0(e)&&L0(t,e)===0)return e}function O0({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function YT(t){const e={};if(t===""||t==="?")return e;const i=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<i.length;++s){const r=i[s].replace(R0," "),o=r.indexOf("="),a=ha(o<0?r:r.slice(0,o)),l=o<0?null:ha(r.slice(o+1));if(a in e){let c=e[a];li(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function zp(t){let e="";for(let n in t){const i=t[n];if(n=_T(n),i==null){i!==void 0&&(e+=(e.length?"&":"")+n);continue}(li(i)?i.map(r=>r&&xf(r)):[i&&xf(i)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+n,r!=null&&(e+="="+r))})}return e}function jT(t){const e={};for(const n in t){const i=t[n];i!==void 0&&(e[n]=li(i)?i.map(s=>s==null?null:""+s):i==null?i:""+i)}return e}const KT=Symbol(""),Gp=Symbol(""),Yh=Symbol(""),U0=Symbol(""),Mf=Symbol("");function Uo(){let t=[];function e(i){return t.push(i),()=>{const s=t.indexOf(i);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function us(t,e,n,i,s,r=o=>o()){const o=i&&(i.enterCallbacks[s]=i.enterCallbacks[s]||[]);return()=>new Promise((a,l)=>{const c=h=>{h===!1?l(ro(4,{from:n,to:e})):h instanceof Error?l(h):LT(h)?l(ro(2,{from:e,to:h})):(o&&i.enterCallbacks[s]===o&&typeof h=="function"&&o.push(h),a())},u=r(()=>t.call(i&&i.instances[s],e,n,c));let f=Promise.resolve(u);t.length<3&&(f=f.then(c)),f.catch(h=>l(h))})}function vu(t,e,n,i,s=r=>r()){const r=[];for(const o of t)for(const a in o.components){let l=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(b0(l)){const u=(l.__vccOpts||l)[e];u&&r.push(us(u,n,i,o,a,s))}else{let c=l();r.push(()=>c.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const f=rT(u)?u.default:u;o.mods[a]=u,o.components[a]=f;const d=(f.__vccOpts||f)[e];return d&&us(d,n,i,o,a,s)()}))}}return r}function Wp(t){const e=oi(Yh),n=oi(U0),i=Dt(()=>{const l=Re(t.to);return e.resolve(l)}),s=Dt(()=>{const{matched:l}=i.value,{length:c}=l,u=l[c-1],f=n.matched;if(!u||!f.length)return-1;const h=f.findIndex(so.bind(null,u));if(h>-1)return h;const d=Xp(l[c-2]);return c>1&&Xp(u)===d&&f[f.length-1].path!==d?f.findIndex(so.bind(null,l[c-2])):h}),r=Dt(()=>s.value>-1&&tb(n.params,i.value.params)),o=Dt(()=>s.value>-1&&s.value===n.matched.length-1&&I0(n.params,i.value.params));function a(l={}){if(eb(l)){const c=e[Re(t.replace)?"replace":"push"](Re(t.to)).catch(Jo);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>c),c}return Promise.resolve()}return{route:i,href:Dt(()=>i.value.href),isActive:r,isExactActive:o,navigate:a}}function ZT(t){return t.length===1?t[0]:t}const JT=kn({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Wp,setup(t,{slots:e}){const n=yo(Wp(t)),{options:i}=oi(Yh),s=Dt(()=>({[$p(t.activeClass,i.linkActiveClass,"router-link-active")]:n.isActive,[$p(t.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=e.default&&ZT(e.default(n));return t.custom?r:or("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},r)}}}),QT=JT;function eb(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function tb(t,e){for(const n in e){const i=e[n],s=t[n];if(typeof i=="string"){if(i!==s)return!1}else if(!li(s)||s.length!==i.length||i.some((r,o)=>r!==s[o]))return!1}return!0}function Xp(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const $p=(t,e,n)=>t??e??n,nb=kn({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const i=oi(Mf),s=Dt(()=>t.route||i.value),r=oi(Gp,0),o=Dt(()=>{let c=Re(r);const{matched:u}=s.value;let f;for(;(f=u[c])&&!f.components;)c++;return c}),a=Dt(()=>s.value.matched[o.value]);Yo(Gp,Dt(()=>o.value+1)),Yo(KT,a),Yo(Mf,s);const l=_i();return _s(()=>[l.value,a.value,t.name],([c,u,f],[h,d,g])=>{u&&(u.instances[f]=c,d&&d!==u&&c&&c===h&&(u.leaveGuards.size||(u.leaveGuards=d.leaveGuards),u.updateGuards.size||(u.updateGuards=d.updateGuards))),c&&u&&(!d||!so(u,d)||!h)&&(u.enterCallbacks[f]||[]).forEach(E=>E(c))},{flush:"post"}),()=>{const c=s.value,u=t.name,f=a.value,h=f&&f.components[u];if(!h)return qp(n.default,{Component:h,route:c});const d=f.props[u],g=d?d===!0?c.params:typeof d=="function"?d(c):d:null,_=or(h,yt({},g,e,{onVnodeUnmounted:p=>{p.component.isUnmounted&&(f.instances[u]=null)},ref:l}));return qp(n.default,{Component:_,route:c})||_}}});function qp(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const ib=nb;function sb(t){const e=GT(t.routes,t),n=t.parseQuery||YT,i=t.stringifyQuery||zp,s=t.history,r=Uo(),o=Uo(),a=Uo(),l=Rh(Ki);let c=Ki;Vr&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=mu.bind(null,B=>""+B),f=mu.bind(null,vT),h=mu.bind(null,ha);function d(B,ie){let se,te;return N0(B)?(se=e.getRecordMatcher(B),te=ie):te=B,e.addRoute(te,se)}function g(B){const ie=e.getRecordMatcher(B);ie&&e.removeRoute(ie)}function E(){return e.getRoutes().map(B=>B.record)}function _(B){return!!e.getRecordMatcher(B)}function p(B,ie){if(ie=yt({},ie||l.value),typeof B=="string"){const y=_u(n,B,ie.path),K=e.resolve({path:y.path},ie),$=s.createHref(y.fullPath);return yt(y,K,{params:h(K.params),hash:ha(y.hash),redirectedFrom:void 0,href:$})}let se;if(B.path!=null)se=yt({},B,{path:_u(n,B.path,ie.path).path});else{const y=yt({},B.params);for(const K in y)y[K]==null&&delete y[K];se=yt({},B,{params:f(y)}),ie.params=f(ie.params)}const te=e.resolve(se,ie),Ee=B.hash||"";te.params=u(h(te.params));const Me=xT(i,yt({},B,{hash:mT(Ee),path:te.path})),D=s.createHref(Me);return yt({fullPath:Me,hash:Ee,query:i===zp?jT(B.query):B.query||{}},te,{redirectedFrom:void 0,href:D})}function R(B){return typeof B=="string"?_u(n,B,l.value.path):yt({},B)}function x(B,ie){if(c!==B)return ro(8,{from:ie,to:B})}function M(B){return T(B)}function P(B){return M(yt(R(B),{replace:!0}))}function N(B){const ie=B.matched[B.matched.length-1];if(ie&&ie.redirect){const{redirect:se}=ie;let te=typeof se=="function"?se(B):se;return typeof te=="string"&&(te=te.includes("?")||te.includes("#")?te=R(te):{path:te},te.params={}),yt({query:B.query,hash:B.hash,params:te.path!=null?{}:B.params},te)}}function T(B,ie){const se=c=p(B),te=l.value,Ee=B.state,Me=B.force,D=B.replace===!0,y=N(se);if(y)return T(yt(R(y),{state:typeof y=="object"?yt({},Ee,y.state):Ee,force:Me,replace:D}),ie||se);const K=se;K.redirectedFrom=ie;let $;return!Me&&yT(i,te,se)&&($=ro(16,{to:K,from:te}),de(te,te,!0,!1)),($?Promise.resolve($):v(K,te)).catch(H=>yi(H)?yi(H,2)?H:he(H):F(H,K,te)).then(H=>{if(H){if(yi(H,2))return T(yt({replace:D},R(H.to),{state:typeof H.to=="object"?yt({},Ee,H.to.state):Ee,force:Me}),ie||K)}else H=I(K,te,!0,D,Ee);return C(K,te,H),H})}function A(B,ie){const se=x(B,ie);return se?Promise.reject(se):Promise.resolve()}function m(B){const ie=ee.values().next().value;return ie&&typeof ie.runWithContext=="function"?ie.runWithContext(B):B()}function v(B,ie){let se;const[te,Ee,Me]=rb(B,ie);se=vu(te.reverse(),"beforeRouteLeave",B,ie);for(const y of te)y.leaveGuards.forEach(K=>{se.push(us(K,B,ie))});const D=A.bind(null,B,ie);return se.push(D),fe(se).then(()=>{se=[];for(const y of r.list())se.push(us(y,B,ie));return se.push(D),fe(se)}).then(()=>{se=vu(Ee,"beforeRouteUpdate",B,ie);for(const y of Ee)y.updateGuards.forEach(K=>{se.push(us(K,B,ie))});return se.push(D),fe(se)}).then(()=>{se=[];for(const y of Me)if(y.beforeEnter)if(li(y.beforeEnter))for(const K of y.beforeEnter)se.push(us(K,B,ie));else se.push(us(y.beforeEnter,B,ie));return se.push(D),fe(se)}).then(()=>(B.matched.forEach(y=>y.enterCallbacks={}),se=vu(Me,"beforeRouteEnter",B,ie,m),se.push(D),fe(se))).then(()=>{se=[];for(const y of o.list())se.push(us(y,B,ie));return se.push(D),fe(se)}).catch(y=>yi(y,8)?y:Promise.reject(y))}function C(B,ie,se){a.list().forEach(te=>m(()=>te(B,ie,se)))}function I(B,ie,se,te,Ee){const Me=x(B,ie);if(Me)return Me;const D=ie===Ki,y=Vr?history.state:{};se&&(te||D?s.replace(B.fullPath,yt({scroll:D&&y&&y.scroll},Ee)):s.push(B.fullPath,Ee)),l.value=B,de(B,ie,se,D),he()}let L;function k(){L||(L=s.listen((B,ie,se)=>{if(!ae.listening)return;const te=p(B),Ee=N(te);if(Ee){T(yt(Ee,{replace:!0,force:!0}),te).catch(Jo);return}c=te;const Me=l.value;Vr&&IT(Lp(Me.fullPath,se.delta),wT()),v(te,Me).catch(D=>yi(D,12)?D:yi(D,2)?(T(yt(R(D.to),{force:!0}),te).then(y=>{yi(y,20)&&!se.delta&&se.type===da.pop&&s.go(-1,!1)}).catch(Jo),Promise.reject()):(se.delta&&s.go(-se.delta,!1),F(D,te,Me))).then(D=>{D=D||I(te,Me,!1),D&&(se.delta&&!yi(D,8)?s.go(-se.delta,!1):se.type===da.pop&&yi(D,20)&&s.go(-1,!1)),C(te,Me,D)}).catch(Jo)}))}let G=Uo(),O=Uo(),W;function F(B,ie,se){he(B);const te=O.list();return te.length?te.forEach(Ee=>Ee(B,ie,se)):console.error(B),Promise.reject(B)}function le(){return W&&l.value!==Ki?Promise.resolve():new Promise((B,ie)=>{G.add([B,ie])})}function he(B){return W||(W=!B,k(),G.list().forEach(([ie,se])=>B?se(B):ie()),G.reset()),B}function de(B,ie,se,te){const{scrollBehavior:Ee}=t;if(!Vr||!Ee)return Promise.resolve();const Me=!se&&NT(Lp(B.fullPath,0))||(te||!se)&&history.state&&history.state.scroll||null;return To().then(()=>Ee(B,ie,Me)).then(D=>D&&PT(D)).catch(D=>F(D,B,ie))}const ye=B=>s.go(B);let Le;const ee=new Set,ae={currentRoute:l,listening:!0,addRoute:d,removeRoute:g,clearRoutes:e.clearRoutes,hasRoute:_,getRoutes:E,resolve:p,options:t,push:M,replace:P,go:ye,back:()=>ye(-1),forward:()=>ye(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:O.add,isReady:le,install(B){const ie=this;B.component("RouterLink",QT),B.component("RouterView",ib),B.config.globalProperties.$router=ie,Object.defineProperty(B.config.globalProperties,"$route",{enumerable:!0,get:()=>Re(l)}),Vr&&!Le&&l.value===Ki&&(Le=!0,M(s.location).catch(Ee=>{}));const se={};for(const Ee in Ki)Object.defineProperty(se,Ee,{get:()=>l.value[Ee],enumerable:!0});B.provide(Yh,ie),B.provide(U0,bh(se)),B.provide(Mf,l);const te=B.unmount;ee.add(B),B.unmount=function(){ee.delete(B),ee.size<1&&(c=Ki,L&&L(),L=null,l.value=Ki,Le=!1,W=!1),te()}}};function fe(B){return B.reduce((ie,se)=>ie.then(()=>m(se)),Promise.resolve())}return ae}function rb(t,e){const n=[],i=[],s=[],r=Math.max(e.matched.length,t.matched.length);for(let o=0;o<r;o++){const a=e.matched[o];a&&(t.matched.find(c=>so(c,a))?i.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>so(c,l))||s.push(l))}return[n,i,s]}const ob=["width","height"],ab=pe("title",null,"Discord",-1),lb=pe("path",{d:"M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"},null,-1),cb=[ab,lb],F0=kn({__name:"DiscordIcon",props:{size:{default:24}},setup(t){const e=t,n=Dt(()=>{const i=Re(e.size);return typeof i=="number"?`${i}px`:i});return(i,s)=>(be(),je("svg",Ei({width:n.value,height:n.value,role:"img",viewBox:"0 0 24 24"},i.$attrs,{fill:"currentColor"}),cb,16,ob))}}),ub=["width","height"],fb=pe("title",null,"GitHub",-1),hb=pe("path",{d:"M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"},null,-1),db=[fb,hb],k0=kn({__name:"GitHubIcon",props:{size:{default:24}},setup(t){const e=t,n=Dt(()=>{const i=Re(e.size);return typeof i=="number"?`${i}px`:i});return(i,s)=>(be(),je("svg",Ei({width:n.value,height:n.value,role:"img",viewBox:"0 0 24 24"},i.$attrs,{fill:"currentColor"}),db,16,ub))}}),pb=["width","height"],mb=pe("title",null,"Gmail",-1),_b=pe("path",{d:"M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"},null,-1),gb=[mb,_b],B0=kn({__name:"GmailIcon",props:{size:{default:24}},setup(t){const e=t,n=Dt(()=>{const i=Re(e.size);return typeof i=="number"?`${i}px`:i});return(i,s)=>(be(),je("svg",Ei({width:n.value,height:n.value,role:"img",viewBox:"0 0 24 24"},i.$attrs,{fill:"currentColor"}),gb,16,pb))}}),vb=["width","height"],Eb=pe("title",null,"Instagram",-1),Sb=pe("path",{d:"M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077"},null,-1),xb=[Eb,Sb],V0=kn({__name:"InstagramIcon",props:{size:{default:24}},setup(t){const e=t,n=Dt(()=>{const i=Re(e.size);return typeof i=="number"?`${i}px`:i});return(i,s)=>(be(),je("svg",Ei({width:n.value,height:n.value,role:"img",viewBox:"0 0 24 24"},i.$attrs,{fill:"currentColor"}),xb,16,vb))}}),yb=["width","height"],Mb=pe("title",null,"LinkedIn",-1),Tb=pe("path",{d:"M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"},null,-1),bb=[Mb,Tb],H0=kn({__name:"LinkedInIcon",props:{size:{default:24}},setup(t){const e=t,n=Dt(()=>{const i=Re(e.size);return typeof i=="number"?`${i}px`:i});return(i,s)=>(be(),je("svg",Ei({width:n.value,height:n.value,role:"img",viewBox:"0 0 24 24"},i.$attrs,{fill:"currentColor"}),bb,16,yb))}}),Ab=["width","height"],Rb=pe("title",null,"Steam",-1),Cb=pe("path",{d:"M11.979 0C5.678 0 .511 4.86.022 11.037l6.432 2.658c.545-.371 1.203-.59 1.912-.59.063 0 .125.004.188.006l2.861-4.142V8.91c0-2.495 2.028-4.524 4.524-4.524 2.494 0 4.524 2.031 4.524 4.527s-2.03 4.525-4.524 4.525h-.105l-4.076 2.911c0 .052.004.105.004.159 0 1.875-1.515 3.396-3.39 3.396-1.635 0-3.016-1.173-3.331-2.727L.436 15.27C1.862 20.307 6.486 24 11.979 24c6.627 0 11.999-5.373 11.999-12S18.605 0 11.979 0zM7.54 18.21l-1.473-.61c.262.543.714.999 1.314 1.25 1.297.539 2.793-.076 3.332-1.375.263-.63.264-1.319.005-1.949s-.75-1.121-1.377-1.383c-.624-.26-1.29-.249-1.878-.03l1.523.63c.956.4 1.409 1.5 1.009 2.455-.397.957-1.497 1.41-2.454 1.012H7.54zm11.415-9.303c0-1.662-1.353-3.015-3.015-3.015-1.665 0-3.015 1.353-3.015 3.015 0 1.665 1.35 3.015 3.015 3.015 1.663 0 3.015-1.35 3.015-3.015zm-5.273-.005c0-1.252 1.013-2.266 2.265-2.266 1.249 0 2.266 1.014 2.266 2.266 0 1.251-1.017 2.265-2.266 2.265-1.253 0-2.265-1.014-2.265-2.265z"},null,-1),wb=[Rb,Cb],z0=kn({__name:"SteamIcon",props:{size:{default:24}},setup(t){const e=t,n=Dt(()=>{const i=Re(e.size);return typeof i=="number"?`${i}px`:i});return(i,s)=>(be(),je("svg",Ei({width:n.value,height:n.value,role:"img",viewBox:"0 0 24 24"},i.$attrs,{fill:"currentColor"}),wb,16,Ab))}}),Pb=["width","height"],Ib=pe("title",null,"Telegram",-1),Nb=pe("path",{d:"M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"},null,-1),Db=[Ib,Nb],G0=kn({__name:"TelegramIcon",props:{size:{default:24}},setup(t){const e=t,n=Dt(()=>{const i=Re(e.size);return typeof i=="number"?`${i}px`:i});return(i,s)=>(be(),je("svg",Ei({width:n.value,height:n.value,role:"img",viewBox:"0 0 24 24"},i.$attrs,{fill:"currentColor"}),Db,16,Pb))}}),Lb=["width","height"],Ob=pe("title",null,"YouTube",-1),Ub=pe("path",{d:"M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"},null,-1),Fb=[Ob,Ub],W0=kn({__name:"YouTubeIcon",props:{size:{default:24}},setup(t){const e=t,n=Dt(()=>{const i=Re(e.size);return typeof i=="number"?`${i}px`:i});return(i,s)=>(be(),je("svg",Ei({width:n.value,height:n.value,role:"img",viewBox:"0 0 24 24"},i.$attrs,{fill:"currentColor"}),Fb,16,Lb))}}),kb={class:"contacts-block-mobile"},Bb={class:"contacts-block-mobile__item contacts-block-mobile__telegram",href:"https://t.me/yusheero_dev"},Vb={class:"contacts-block-mobile__item contacts-block-mobile__discord",href:"https://discord.gg/Zv2h3TAACx"},Hb={class:"contacts-block-mobile__item contacts-block-mobile__github",href:"https://github.com/Yusheero"},zb={class:"contacts-block-mobile__item contacts-block-mobile__inst",href:"https://www.instagram.com/yusheero_dev/"},Gb={class:"contacts-block-mobile__item contacts-block-mobile__steam",href:""},Wb={class:"contacts-block-mobile__item contacts-block-mobile__gmail",href:""},Xb={class:"contacts-block-mobile__item contacts-block-mobile__linkedin",href:""},$b={class:"contacts-block-mobile__item contacts-block-mobile__youtube",href:""},qb={__name:"contacts-block-mobile",setup(t){return yn(),(e,n)=>(be(),je("div",kb,[pe("a",Bb,[ge(Re(G0),{style:{fill:"white"},size:"24px"})]),pe("a",Vb,[ge(Re(F0),{style:{fill:"white"},size:"24px"})]),pe("a",Hb,[ge(Re(k0),{style:{fill:"white"},size:"24px"})]),pe("a",zb,[ge(Re(V0),{style:{fill:"white"},size:"24px"})]),pe("a",Gb,[ge(Re(z0),{style:{fill:"white"},size:"24px"})]),pe("a",Wb,[ge(Re(B0),{style:{fill:"white"},size:"24px"})]),pe("a",Xb,[ge(Re(H0),{style:{fill:"white"},size:"24px"})]),pe("a",$b,[ge(Re(W0),{style:{fill:"white"},size:"24px"})])]))}},Yb=Ot(qb,[["__scopeId","data-v-b1d5c5ab"]]),jb={key:1,class:"contacts-block"},Kb={class:"contacts-block__item contacts-block__telegram",href:"https://t.me/yusheero_dev"},Zb={class:"contacts-block__item contacts-block__discord",href:"https://discord.gg/Zv2h3TAACx"},Jb={class:"contacts-block__item contacts-block__github",href:"https://github.com/Yusheero"},Qb={class:"contacts-block__item contacts-block__inst",href:"https://www.instagram.com/yusheero_dev/"},e1={class:"contacts-block__item contacts-block__steam",href:""},t1={class:"contacts-block__item contacts-block__gmail",href:""},n1={class:"contacts-block__item contacts-block__linkedin",href:""},i1={class:"contacts-block__item contacts-block__youtube",href:""},s1={__name:"contacts-block",setup(t){const e=yn();return(n,i)=>Re(e).isMobile?(be(),rt(Yb,{key:0})):(be(),je("div",jb,[pe("a",Kb,[ge(Re(G0),{style:{fill:"white"},size:"24px"})]),pe("a",Zb,[ge(Re(F0),{style:{fill:"white"},size:"24px"})]),pe("a",Jb,[ge(Re(k0),{style:{fill:"white"},size:"24px"})]),pe("a",Qb,[ge(Re(V0),{style:{fill:"white"},size:"24px"})]),pe("a",e1,[ge(Re(z0),{style:{fill:"white"},size:"24px"})]),pe("a",t1,[ge(Re(B0),{style:{fill:"white"},size:"24px"})]),pe("a",n1,[ge(Re(H0),{style:{fill:"white"},size:"24px"})]),pe("a",i1,[ge(Re(W0),{style:{fill:"white"},size:"24px"})])]))}},X0=Ot(s1,[["__scopeId","data-v-00cd3b61"]]),r1={},o1={class:"gif-block-mobile"};function a1(t,e){return be(),je("div",o1)}const l1=Ot(r1,[["render",a1],["__scopeId","data-v-36d5ecd3"]]),c1={key:1,class:"gif-block"},u1={__name:"gif-block",setup(t){const e=yn();return(n,i)=>Re(e).isMobile?(be(),rt(l1,{key:0})):(be(),je("div",c1))}},$0=Ot(u1,[["__scopeId","data-v-8ef7412e"]]),f1=""+new URL("avatar-BEfawV4t.jpg",import.meta.url).href,h1={},d1={class:"logo-block"};function p1(t,e){return be(),je("div",d1,e[0]||(e[0]=[pe("img",{class:"logo-block__image",src:f1,alt:"avatar"},null,-1)]))}const q0=Ot(h1,[["render",p1],["__scopeId","data-v-8c4f966e"]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m1=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Ka={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _1=({size:t,strokeWidth:e=2,absoluteStrokeWidth:n,color:i,iconNode:s,name:r,class:o,...a},{slots:l})=>or("svg",{...Ka,width:t||Ka.width,height:t||Ka.height,stroke:i||Ka.stroke,"stroke-width":n?Number(e)*24/Number(t):e,class:["lucide",`lucide-${m1(r??"icon")}`],...a},[...s.map(c=>or(...c)),...l.default?[l.default()]:[]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Is=(t,e)=>(n,{slots:i})=>or(_1,{...n,iconNode:e,name:t},i);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y0=Is("ArrowRightIcon",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j0=Is("EyeIcon",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K0=Is("LocateFixedIcon",[["line",{x1:"2",x2:"5",y1:"12",y2:"12",key:"bvdh0s"}],["line",{x1:"19",x2:"22",y1:"12",y2:"12",key:"1tbv5k"}],["line",{x1:"12",x2:"12",y1:"2",y2:"5",key:"11lu5j"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22",key:"x3vr5v"}],["circle",{cx:"12",cy:"12",r:"7",key:"fim9np"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z0=Is("MessageCircleMoreIcon",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}],["path",{d:"M8 12h.01",key:"czm47f"}],["path",{d:"M12 12h.01",key:"1mp3jc"}],["path",{d:"M16 12h.01",key:"1l6xoz"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J0=Is("PanelsTopLeftIcon",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M9 21V9",key:"1oto5p"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g1=Is("SmileIcon",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 14s1.5 2 4 2 4-2 4-2",key:"1y1vjs"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9",key:"yxxnd0"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9",key:"1p4y9e"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v1=Is("SquareLibraryIcon",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M7 7v10",key:"d5nglc"}],["path",{d:"M11 7v10",key:"pptsnr"}],["path",{d:"m15 7 2 10",key:"1m7qm5"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q0=Is("TargetIcon",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]),E1={class:"name-block-mobile"},S1={class:"name-block-mobile__location"},x1={__name:"name-block-mobile",setup(t){return(e,n)=>(be(),je("div",E1,[n[1]||(n[1]=pe("div",{class:"name-block-mobile__titles"},[pe("h1",{class:"name-block-mobile__title"},"Hello, I am Yusheero"),pe("h2",{class:"name-block-mobile__subtitle"},"Frontend Developer")],-1)),pe("div",S1,[ge(Re(K0),{color:"white",size:"24","stroke-width":"1.5"}),n[0]||(n[0]=Ca("Vladivostok, Russia"))])]))}},y1=Ot(x1,[["__scopeId","data-v-9e8f1eed"]]),M1={key:1,class:"name-block"},T1={class:"name-block__location"},b1={__name:"name-block",setup(t){const e=yn();return(n,i)=>Re(e).isMobile?(be(),rt(y1,{key:0})):(be(),je("div",M1,[i[1]||(i[1]=pe("div",{class:"name-block__titles"},[pe("h1",{class:"name-block__title"},"Hello, I am Yusheero"),pe("h2",{class:"name-block__subtitle"},"Frontend Developer")],-1)),pe("div",T1,[ge(Re(K0),{color:"white",size:"20","stroke-width":"1.5"}),i[0]||(i[0]=Ca("Vladivostok, Russia"))])]))}},ev=Ot(b1,[["__scopeId","data-v-32c468b1"]]);function jh(t){if(t.__esModule)return t;var e=t.default;if(typeof e=="function"){var n=function i(){return this instanceof i?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};n.prototype=e.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(t).forEach(function(i){var s=Object.getOwnPropertyDescriptor(t,i);Object.defineProperty(n,i,s.get?s:{enumerable:!0,get:function(){return t[i]}})}),n}var Za={},Eu={exports:{}},Su={};/**
* @vue/compiler-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const oo=Symbol(""),jr=Symbol(""),Ic=Symbol(""),pa=Symbol(""),Kh=Symbol(""),Ms=Symbol(""),Zh=Symbol(""),Jh=Symbol(""),Nc=Symbol(""),Dc=Symbol(""),Ao=Symbol(""),Lc=Symbol(""),Qh=Symbol(""),Oc=Symbol(""),Uc=Symbol(""),Fc=Symbol(""),kc=Symbol(""),Bc=Symbol(""),Vc=Symbol(""),ed=Symbol(""),td=Symbol(""),Pa=Symbol(""),ma=Symbol(""),Hc=Symbol(""),zc=Symbol(""),ao=Symbol(""),Ro=Symbol(""),Gc=Symbol(""),tc=Symbol(""),tv=Symbol(""),nc=Symbol(""),_a=Symbol(""),nv=Symbol(""),iv=Symbol(""),Wc=Symbol(""),sv=Symbol(""),rv=Symbol(""),Xc=Symbol(""),nd=Symbol(""),ar={[oo]:"Fragment",[jr]:"Teleport",[Ic]:"Suspense",[pa]:"KeepAlive",[Kh]:"BaseTransition",[Ms]:"openBlock",[Zh]:"createBlock",[Jh]:"createElementBlock",[Nc]:"createVNode",[Dc]:"createElementVNode",[Ao]:"createCommentVNode",[Lc]:"createTextVNode",[Qh]:"createStaticVNode",[Oc]:"resolveComponent",[Uc]:"resolveDynamicComponent",[Fc]:"resolveDirective",[kc]:"resolveFilter",[Bc]:"withDirectives",[Vc]:"renderList",[ed]:"renderSlot",[td]:"createSlots",[Pa]:"toDisplayString",[ma]:"mergeProps",[Hc]:"normalizeClass",[zc]:"normalizeStyle",[ao]:"normalizeProps",[Ro]:"guardReactiveProps",[Gc]:"toHandlers",[tc]:"camelize",[tv]:"capitalize",[nc]:"toHandlerKey",[_a]:"setBlockTracking",[nv]:"pushScopeId",[iv]:"popScopeId",[Wc]:"withCtx",[sv]:"unref",[rv]:"isRef",[Xc]:"withMemo",[nd]:"isMemoSame"};function ov(t){Object.getOwnPropertySymbols(t).forEach(e=>{ar[e]=t[e]})}const A1={HTML:0,0:"HTML",SVG:1,1:"SVG",MATH_ML:2,2:"MATH_ML"},R1={ROOT:0,0:"ROOT",ELEMENT:1,1:"ELEMENT",TEXT:2,2:"TEXT",COMMENT:3,3:"COMMENT",SIMPLE_EXPRESSION:4,4:"SIMPLE_EXPRESSION",INTERPOLATION:5,5:"INTERPOLATION",ATTRIBUTE:6,6:"ATTRIBUTE",DIRECTIVE:7,7:"DIRECTIVE",COMPOUND_EXPRESSION:8,8:"COMPOUND_EXPRESSION",IF:9,9:"IF",IF_BRANCH:10,10:"IF_BRANCH",FOR:11,11:"FOR",TEXT_CALL:12,12:"TEXT_CALL",VNODE_CALL:13,13:"VNODE_CALL",JS_CALL_EXPRESSION:14,14:"JS_CALL_EXPRESSION",JS_OBJECT_EXPRESSION:15,15:"JS_OBJECT_EXPRESSION",JS_PROPERTY:16,16:"JS_PROPERTY",JS_ARRAY_EXPRESSION:17,17:"JS_ARRAY_EXPRESSION",JS_FUNCTION_EXPRESSION:18,18:"JS_FUNCTION_EXPRESSION",JS_CONDITIONAL_EXPRESSION:19,19:"JS_CONDITIONAL_EXPRESSION",JS_CACHE_EXPRESSION:20,20:"JS_CACHE_EXPRESSION",JS_BLOCK_STATEMENT:21,21:"JS_BLOCK_STATEMENT",JS_TEMPLATE_LITERAL:22,22:"JS_TEMPLATE_LITERAL",JS_IF_STATEMENT:23,23:"JS_IF_STATEMENT",JS_ASSIGNMENT_EXPRESSION:24,24:"JS_ASSIGNMENT_EXPRESSION",JS_SEQUENCE_EXPRESSION:25,25:"JS_SEQUENCE_EXPRESSION",JS_RETURN_STATEMENT:26,26:"JS_RETURN_STATEMENT"},C1={ELEMENT:0,0:"ELEMENT",COMPONENT:1,1:"COMPONENT",SLOT:2,2:"SLOT",TEMPLATE:3,3:"TEMPLATE"},w1={NOT_CONSTANT:0,0:"NOT_CONSTANT",CAN_SKIP_PATCH:1,1:"CAN_SKIP_PATCH",CAN_CACHE:2,2:"CAN_CACHE",CAN_STRINGIFY:3,3:"CAN_STRINGIFY"},qt={start:{line:1,column:1,offset:0},end:{line:1,column:1,offset:0},source:""};function av(t,e=""){return{type:0,source:e,children:t,helpers:new Set,components:[],directives:[],hoists:[],imports:[],cached:[],temps:0,codegenNode:void 0,loc:qt}}function lo(t,e,n,i,s,r,o,a=!1,l=!1,c=!1,u=qt){return t&&(a?(t.helper(Ms),t.helper(ur(t.inSSR,c))):t.helper(cr(t.inSSR,c)),o&&t.helper(Bc)),{type:13,tag:e,props:n,children:i,patchFlag:s,dynamicProps:r,directives:o,isBlock:a,disableTracking:l,isComponent:c,loc:u}}function vs(t,e=qt){return{type:17,loc:e,elements:t}}function On(t,e=qt){return{type:15,loc:e,properties:t}}function It(t,e){return{type:16,loc:qt,key:Xe(t)?Ye(t,!0):t,value:e}}function Ye(t,e=!1,n=qt,i=0){return{type:4,loc:n,content:t,isStatic:e,constType:e?3:i}}function P1(t,e){return{type:5,loc:e,content:Xe(t)?Ye(t,!1,e):t}}function $n(t,e=qt){return{type:8,loc:e,children:t}}function kt(t,e=[],n=qt){return{type:14,loc:n,callee:t,arguments:e}}function lr(t,e=void 0,n=!1,i=!1,s=qt){return{type:18,params:t,returns:e,newline:n,isSlot:i,loc:s}}function ic(t,e,n,i=!0){return{type:19,test:t,consequent:e,alternate:n,newline:i,loc:qt}}function lv(t,e,n=!1,i=!1){return{type:20,index:t,value:e,needPauseTracking:n,inVOnce:i,needArraySpread:!1,loc:qt}}function cv(t){return{type:21,body:t,loc:qt}}function I1(t){return{type:22,elements:t,loc:qt}}function N1(t,e,n){return{type:23,test:t,consequent:e,alternate:n,loc:qt}}function D1(t,e){return{type:24,left:t,right:e,loc:qt}}function L1(t){return{type:25,expressions:t,loc:qt}}function O1(t){return{type:26,returns:t,loc:qt}}function cr(t,e){return t||e?Nc:Dc}function ur(t,e){return t||e?Zh:Jh}function $c(t,{helper:e,removeHelper:n,inSSR:i}){t.isBlock||(t.isBlock=!0,n(cr(i,t.isComponent)),e(Ms),e(ur(i,t.isComponent)))}const Yp=new Uint8Array([123,123]),jp=new Uint8Array([125,125]);function Kp(t){return t>=97&&t<=122||t>=65&&t<=90}function Ln(t){return t===32||t===10||t===9||t===12||t===13}function Zi(t){return t===47||t===62||Ln(t)}function sc(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}const en={Cdata:new Uint8Array([67,68,65,84,65,91]),CdataEnd:new Uint8Array([93,93,62]),CommentEnd:new Uint8Array([45,45,62]),ScriptEnd:new Uint8Array([60,47,115,99,114,105,112,116]),StyleEnd:new Uint8Array([60,47,115,116,121,108,101]),TitleEnd:new Uint8Array([60,47,116,105,116,108,101]),TextareaEnd:new Uint8Array([60,47,116,101,120,116,97,114,101,97])};class U1{constructor(e,n){this.stack=e,this.cbs=n,this.state=1,this.buffer="",this.sectionStart=0,this.index=0,this.entityStart=0,this.baseState=1,this.inRCDATA=!1,this.inXML=!1,this.inVPre=!1,this.newlines=[],this.mode=0,this.delimiterOpen=Yp,this.delimiterClose=jp,this.delimiterIndex=-1,this.currentSequence=void 0,this.sequenceIndex=0}get inSFCRoot(){return this.mode===2&&this.stack.length===0}reset(){this.state=1,this.mode=0,this.buffer="",this.sectionStart=0,this.index=0,this.baseState=1,this.inRCDATA=!1,this.currentSequence=void 0,this.newlines.length=0,this.delimiterOpen=Yp,this.delimiterClose=jp}getPos(e){let n=1,i=e+1;for(let s=this.newlines.length-1;s>=0;s--){const r=this.newlines[s];if(e>r){n=s+2,i=e-r;break}}return{column:i,line:n,offset:e}}peek(){return this.buffer.charCodeAt(this.index+1)}stateText(e){e===60?(this.index>this.sectionStart&&this.cbs.ontext(this.sectionStart,this.index),this.state=5,this.sectionStart=this.index):!this.inVPre&&e===this.delimiterOpen[0]&&(this.state=2,this.delimiterIndex=0,this.stateInterpolationOpen(e))}stateInterpolationOpen(e){if(e===this.delimiterOpen[this.delimiterIndex])if(this.delimiterIndex===this.delimiterOpen.length-1){const n=this.index+1-this.delimiterOpen.length;n>this.sectionStart&&this.cbs.ontext(this.sectionStart,n),this.state=3,this.sectionStart=n}else this.delimiterIndex++;else this.inRCDATA?(this.state=32,this.stateInRCDATA(e)):(this.state=1,this.stateText(e))}stateInterpolation(e){e===this.delimiterClose[0]&&(this.state=4,this.delimiterIndex=0,this.stateInterpolationClose(e))}stateInterpolationClose(e){e===this.delimiterClose[this.delimiterIndex]?this.delimiterIndex===this.delimiterClose.length-1?(this.cbs.oninterpolation(this.sectionStart,this.index+1),this.inRCDATA?this.state=32:this.state=1,this.sectionStart=this.index+1):this.delimiterIndex++:(this.state=3,this.stateInterpolation(e))}stateSpecialStartSequence(e){const n=this.sequenceIndex===this.currentSequence.length;if(!(n?Zi(e):(e|32)===this.currentSequence[this.sequenceIndex]))this.inRCDATA=!1;else if(!n){this.sequenceIndex++;return}this.sequenceIndex=0,this.state=6,this.stateInTagName(e)}stateInRCDATA(e){if(this.sequenceIndex===this.currentSequence.length){if(e===62||Ln(e)){const n=this.index-this.currentSequence.length;if(this.sectionStart<n){const i=this.index;this.index=n,this.cbs.ontext(this.sectionStart,n),this.index=i}this.sectionStart=n+2,this.stateInClosingTagName(e),this.inRCDATA=!1;return}this.sequenceIndex=0}(e|32)===this.currentSequence[this.sequenceIndex]?this.sequenceIndex+=1:this.sequenceIndex===0?this.currentSequence===en.TitleEnd||this.currentSequence===en.TextareaEnd&&!this.inSFCRoot?!this.inVPre&&e===this.delimiterOpen[0]&&(this.state=2,this.delimiterIndex=0,this.stateInterpolationOpen(e)):this.fastForwardTo(60)&&(this.sequenceIndex=1):this.sequenceIndex=+(e===60)}stateCDATASequence(e){e===en.Cdata[this.sequenceIndex]?++this.sequenceIndex===en.Cdata.length&&(this.state=28,this.currentSequence=en.CdataEnd,this.sequenceIndex=0,this.sectionStart=this.index+1):(this.sequenceIndex=0,this.state=23,this.stateInDeclaration(e))}fastForwardTo(e){for(;++this.index<this.buffer.length;){const n=this.buffer.charCodeAt(this.index);if(n===10&&this.newlines.push(this.index),n===e)return!0}return this.index=this.buffer.length-1,!1}stateInCommentLike(e){e===this.currentSequence[this.sequenceIndex]?++this.sequenceIndex===this.currentSequence.length&&(this.currentSequence===en.CdataEnd?this.cbs.oncdata(this.sectionStart,this.index-2):this.cbs.oncomment(this.sectionStart,this.index-2),this.sequenceIndex=0,this.sectionStart=this.index+1,this.state=1):this.sequenceIndex===0?this.fastForwardTo(this.currentSequence[0])&&(this.sequenceIndex=1):e!==this.currentSequence[this.sequenceIndex-1]&&(this.sequenceIndex=0)}startSpecial(e,n){this.enterRCDATA(e,n),this.state=31}enterRCDATA(e,n){this.inRCDATA=!0,this.currentSequence=e,this.sequenceIndex=n}stateBeforeTagName(e){e===33?(this.state=22,this.sectionStart=this.index+1):e===63?(this.state=24,this.sectionStart=this.index+1):Kp(e)?(this.sectionStart=this.index,this.mode===0?this.state=6:this.inSFCRoot?this.state=34:this.inXML?this.state=6:e===116?this.state=30:this.state=e===115?29:6):e===47?this.state=8:(this.state=1,this.stateText(e))}stateInTagName(e){Zi(e)&&this.handleTagName(e)}stateInSFCRootTagName(e){if(Zi(e)){const n=this.buffer.slice(this.sectionStart,this.index);n!=="template"&&this.enterRCDATA(sc("</"+n),0),this.handleTagName(e)}}handleTagName(e){this.cbs.onopentagname(this.sectionStart,this.index),this.sectionStart=-1,this.state=11,this.stateBeforeAttrName(e)}stateBeforeClosingTagName(e){Ln(e)||(e===62?(this.state=1,this.sectionStart=this.index+1):(this.state=Kp(e)?9:27,this.sectionStart=this.index))}stateInClosingTagName(e){(e===62||Ln(e))&&(this.cbs.onclosetag(this.sectionStart,this.index),this.sectionStart=-1,this.state=10,this.stateAfterClosingTagName(e))}stateAfterClosingTagName(e){e===62&&(this.state=1,this.sectionStart=this.index+1)}stateBeforeAttrName(e){e===62?(this.cbs.onopentagend(this.index),this.inRCDATA?this.state=32:this.state=1,this.sectionStart=this.index+1):e===47?this.state=7:e===60&&this.peek()===47?(this.cbs.onopentagend(this.index),this.state=5,this.sectionStart=this.index):Ln(e)||this.handleAttrStart(e)}handleAttrStart(e){e===118&&this.peek()===45?(this.state=13,this.sectionStart=this.index):e===46||e===58||e===64||e===35?(this.cbs.ondirname(this.index,this.index+1),this.state=14,this.sectionStart=this.index+1):(this.state=12,this.sectionStart=this.index)}stateInSelfClosingTag(e){e===62?(this.cbs.onselfclosingtag(this.index),this.state=1,this.sectionStart=this.index+1,this.inRCDATA=!1):Ln(e)||(this.state=11,this.stateBeforeAttrName(e))}stateInAttrName(e){(e===61||Zi(e))&&(this.cbs.onattribname(this.sectionStart,this.index),this.handleAttrNameEnd(e))}stateInDirName(e){e===61||Zi(e)?(this.cbs.ondirname(this.sectionStart,this.index),this.handleAttrNameEnd(e)):e===58?(this.cbs.ondirname(this.sectionStart,this.index),this.state=14,this.sectionStart=this.index+1):e===46&&(this.cbs.ondirname(this.sectionStart,this.index),this.state=16,this.sectionStart=this.index+1)}stateInDirArg(e){e===61||Zi(e)?(this.cbs.ondirarg(this.sectionStart,this.index),this.handleAttrNameEnd(e)):e===91?this.state=15:e===46&&(this.cbs.ondirarg(this.sectionStart,this.index),this.state=16,this.sectionStart=this.index+1)}stateInDynamicDirArg(e){e===93?this.state=14:(e===61||Zi(e))&&(this.cbs.ondirarg(this.sectionStart,this.index+1),this.handleAttrNameEnd(e))}stateInDirModifier(e){e===61||Zi(e)?(this.cbs.ondirmodifier(this.sectionStart,this.index),this.handleAttrNameEnd(e)):e===46&&(this.cbs.ondirmodifier(this.sectionStart,this.index),this.sectionStart=this.index+1)}handleAttrNameEnd(e){this.sectionStart=this.index,this.state=17,this.cbs.onattribnameend(this.index),this.stateAfterAttrName(e)}stateAfterAttrName(e){e===61?this.state=18:e===47||e===62?(this.cbs.onattribend(0,this.sectionStart),this.sectionStart=-1,this.state=11,this.stateBeforeAttrName(e)):Ln(e)||(this.cbs.onattribend(0,this.sectionStart),this.handleAttrStart(e))}stateBeforeAttrValue(e){e===34?(this.state=19,this.sectionStart=this.index+1):e===39?(this.state=20,this.sectionStart=this.index+1):Ln(e)||(this.sectionStart=this.index,this.state=21,this.stateInAttrValueNoQuotes(e))}handleInAttrValue(e,n){(e===n||this.fastForwardTo(n))&&(this.cbs.onattribdata(this.sectionStart,this.index),this.sectionStart=-1,this.cbs.onattribend(n===34?3:2,this.index+1),this.state=11)}stateInAttrValueDoubleQuotes(e){this.handleInAttrValue(e,34)}stateInAttrValueSingleQuotes(e){this.handleInAttrValue(e,39)}stateInAttrValueNoQuotes(e){Ln(e)||e===62?(this.cbs.onattribdata(this.sectionStart,this.index),this.sectionStart=-1,this.cbs.onattribend(1,this.index),this.state=11,this.stateBeforeAttrName(e)):(e===39||e===60||e===61||e===96)&&this.cbs.onerr(18,this.index)}stateBeforeDeclaration(e){e===91?(this.state=26,this.sequenceIndex=0):this.state=e===45?25:23}stateInDeclaration(e){(e===62||this.fastForwardTo(62))&&(this.state=1,this.sectionStart=this.index+1)}stateInProcessingInstruction(e){(e===62||this.fastForwardTo(62))&&(this.cbs.onprocessinginstruction(this.sectionStart,this.index),this.state=1,this.sectionStart=this.index+1)}stateBeforeComment(e){e===45?(this.state=28,this.currentSequence=en.CommentEnd,this.sequenceIndex=2,this.sectionStart=this.index+1):this.state=23}stateInSpecialComment(e){(e===62||this.fastForwardTo(62))&&(this.cbs.oncomment(this.sectionStart,this.index),this.state=1,this.sectionStart=this.index+1)}stateBeforeSpecialS(e){e===en.ScriptEnd[3]?this.startSpecial(en.ScriptEnd,4):e===en.StyleEnd[3]?this.startSpecial(en.StyleEnd,4):(this.state=6,this.stateInTagName(e))}stateBeforeSpecialT(e){e===en.TitleEnd[3]?this.startSpecial(en.TitleEnd,4):e===en.TextareaEnd[3]?this.startSpecial(en.TextareaEnd,4):(this.state=6,this.stateInTagName(e))}startEntity(){}stateInEntity(){}parse(e){for(this.buffer=e;this.index<this.buffer.length;){const n=this.buffer.charCodeAt(this.index);switch(n===10&&this.newlines.push(this.index),this.state){case 1:{this.stateText(n);break}case 2:{this.stateInterpolationOpen(n);break}case 3:{this.stateInterpolation(n);break}case 4:{this.stateInterpolationClose(n);break}case 31:{this.stateSpecialStartSequence(n);break}case 32:{this.stateInRCDATA(n);break}case 26:{this.stateCDATASequence(n);break}case 19:{this.stateInAttrValueDoubleQuotes(n);break}case 12:{this.stateInAttrName(n);break}case 13:{this.stateInDirName(n);break}case 14:{this.stateInDirArg(n);break}case 15:{this.stateInDynamicDirArg(n);break}case 16:{this.stateInDirModifier(n);break}case 28:{this.stateInCommentLike(n);break}case 27:{this.stateInSpecialComment(n);break}case 11:{this.stateBeforeAttrName(n);break}case 6:{this.stateInTagName(n);break}case 34:{this.stateInSFCRootTagName(n);break}case 9:{this.stateInClosingTagName(n);break}case 5:{this.stateBeforeTagName(n);break}case 17:{this.stateAfterAttrName(n);break}case 20:{this.stateInAttrValueSingleQuotes(n);break}case 18:{this.stateBeforeAttrValue(n);break}case 8:{this.stateBeforeClosingTagName(n);break}case 10:{this.stateAfterClosingTagName(n);break}case 29:{this.stateBeforeSpecialS(n);break}case 30:{this.stateBeforeSpecialT(n);break}case 21:{this.stateInAttrValueNoQuotes(n);break}case 7:{this.stateInSelfClosingTag(n);break}case 23:{this.stateInDeclaration(n);break}case 22:{this.stateBeforeDeclaration(n);break}case 25:{this.stateBeforeComment(n);break}case 24:{this.stateInProcessingInstruction(n);break}case 33:{this.stateInEntity();break}}this.index++}this.cleanup(),this.finish()}cleanup(){this.sectionStart!==this.index&&(this.state===1||this.state===32&&this.sequenceIndex===0?(this.cbs.ontext(this.sectionStart,this.index),this.sectionStart=this.index):(this.state===19||this.state===20||this.state===21)&&(this.cbs.onattribdata(this.sectionStart,this.index),this.sectionStart=this.index))}finish(){this.handleTrailingData(),this.cbs.onend()}handleTrailingData(){const e=this.buffer.length;this.sectionStart>=e||(this.state===28?this.currentSequence===en.CdataEnd?this.cbs.oncdata(this.sectionStart,e):this.cbs.oncomment(this.sectionStart,e):this.state===6||this.state===11||this.state===18||this.state===17||this.state===12||this.state===13||this.state===14||this.state===15||this.state===16||this.state===20||this.state===19||this.state===21||this.state===9||this.cbs.ontext(this.sectionStart,e))}emitCodePoint(e,n){}}const F1={COMPILER_IS_ON_ELEMENT:"COMPILER_IS_ON_ELEMENT",COMPILER_V_BIND_SYNC:"COMPILER_V_BIND_SYNC",COMPILER_V_BIND_OBJECT_ORDER:"COMPILER_V_BIND_OBJECT_ORDER",COMPILER_V_ON_NATIVE:"COMPILER_V_ON_NATIVE",COMPILER_V_IF_V_FOR_PRECEDENCE:"COMPILER_V_IF_V_FOR_PRECEDENCE",COMPILER_NATIVE_TEMPLATE:"COMPILER_NATIVE_TEMPLATE",COMPILER_INLINE_TEMPLATE:"COMPILER_INLINE_TEMPLATE",COMPILER_FILTERS:"COMPILER_FILTERS"},k1={COMPILER_IS_ON_ELEMENT:{message:'Platform-native elements with "is" prop will no longer be treated as components in Vue 3 unless the "is" value is explicitly prefixed with "vue:".',link:"https://v3-migration.vuejs.org/breaking-changes/custom-elements-interop.html"},COMPILER_V_BIND_SYNC:{message:t=>`.sync modifier for v-bind has been removed. Use v-model with argument instead. \`v-bind:${t}.sync\` should be changed to \`v-model:${t}\`.`,link:"https://v3-migration.vuejs.org/breaking-changes/v-model.html"},COMPILER_V_BIND_OBJECT_ORDER:{message:'v-bind="obj" usage is now order sensitive and behaves like JavaScript object spread: it will now overwrite an existing non-mergeable attribute that appears before v-bind in the case of conflict. To retain 2.x behavior, move v-bind to make it the first attribute. You can also suppress this warning if the usage is intended.',link:"https://v3-migration.vuejs.org/breaking-changes/v-bind.html"},COMPILER_V_ON_NATIVE:{message:".native modifier for v-on has been removed as is no longer necessary.",link:"https://v3-migration.vuejs.org/breaking-changes/v-on-native-modifier-removed.html"},COMPILER_V_IF_V_FOR_PRECEDENCE:{message:"v-if / v-for precedence when used on the same element has changed in Vue 3: v-if now takes higher precedence and will no longer have access to v-for scope variables. It is best to avoid the ambiguity with <template> tags or use a computed property that filters v-for data source.",link:"https://v3-migration.vuejs.org/breaking-changes/v-if-v-for.html"},COMPILER_NATIVE_TEMPLATE:{message:"<template> with no special directives will render as a native template element instead of its inner content in Vue 3."},COMPILER_INLINE_TEMPLATE:{message:'"inline-template" has been removed in Vue 3.',link:"https://v3-migration.vuejs.org/breaking-changes/inline-template-attribute.html"},COMPILER_FILTERS:{message:'filters have been removed in Vue 3. The "|" symbol will be treated as native JavaScript bitwise OR operator. Use method calls or computed properties instead.',link:"https://v3-migration.vuejs.org/breaking-changes/filters.html"}};function Tf(t,{compatConfig:e}){const n=e&&e[t];return t==="MODE"?n||3:n}function nr(t,e){const n=Tf("MODE",e),i=Tf(t,e);return n===3?i===!0:i!==!1}function co(t,e,n,...i){return nr(t,e)}function B1(t,e,n,...i){if(Tf(t,e)==="suppress-warning")return;const{message:r,link:o}=k1[t],a=`(deprecation ${t}) ${typeof r=="function"?r(...i):r}${o?`
  Details: ${o}`:""}`,l=new SyntaxError(a);l.code=t,n&&(l.loc=n),e.onWarn(l)}function id(t){throw t}function uv(t){}function Mt(t,e,n,i){const s=`https://vuejs.org/error-reference/#compiler-${t}`,r=new SyntaxError(String(s));return r.code=t,r.loc=e,r}const V1={ABRUPT_CLOSING_OF_EMPTY_COMMENT:0,0:"ABRUPT_CLOSING_OF_EMPTY_COMMENT",CDATA_IN_HTML_CONTENT:1,1:"CDATA_IN_HTML_CONTENT",DUPLICATE_ATTRIBUTE:2,2:"DUPLICATE_ATTRIBUTE",END_TAG_WITH_ATTRIBUTES:3,3:"END_TAG_WITH_ATTRIBUTES",END_TAG_WITH_TRAILING_SOLIDUS:4,4:"END_TAG_WITH_TRAILING_SOLIDUS",EOF_BEFORE_TAG_NAME:5,5:"EOF_BEFORE_TAG_NAME",EOF_IN_CDATA:6,6:"EOF_IN_CDATA",EOF_IN_COMMENT:7,7:"EOF_IN_COMMENT",EOF_IN_SCRIPT_HTML_COMMENT_LIKE_TEXT:8,8:"EOF_IN_SCRIPT_HTML_COMMENT_LIKE_TEXT",EOF_IN_TAG:9,9:"EOF_IN_TAG",INCORRECTLY_CLOSED_COMMENT:10,10:"INCORRECTLY_CLOSED_COMMENT",INCORRECTLY_OPENED_COMMENT:11,11:"INCORRECTLY_OPENED_COMMENT",INVALID_FIRST_CHARACTER_OF_TAG_NAME:12,12:"INVALID_FIRST_CHARACTER_OF_TAG_NAME",MISSING_ATTRIBUTE_VALUE:13,13:"MISSING_ATTRIBUTE_VALUE",MISSING_END_TAG_NAME:14,14:"MISSING_END_TAG_NAME",MISSING_WHITESPACE_BETWEEN_ATTRIBUTES:15,15:"MISSING_WHITESPACE_BETWEEN_ATTRIBUTES",NESTED_COMMENT:16,16:"NESTED_COMMENT",UNEXPECTED_CHARACTER_IN_ATTRIBUTE_NAME:17,17:"UNEXPECTED_CHARACTER_IN_ATTRIBUTE_NAME",UNEXPECTED_CHARACTER_IN_UNQUOTED_ATTRIBUTE_VALUE:18,18:"UNEXPECTED_CHARACTER_IN_UNQUOTED_ATTRIBUTE_VALUE",UNEXPECTED_EQUALS_SIGN_BEFORE_ATTRIBUTE_NAME:19,19:"UNEXPECTED_EQUALS_SIGN_BEFORE_ATTRIBUTE_NAME",UNEXPECTED_NULL_CHARACTER:20,20:"UNEXPECTED_NULL_CHARACTER",UNEXPECTED_QUESTION_MARK_INSTEAD_OF_TAG_NAME:21,21:"UNEXPECTED_QUESTION_MARK_INSTEAD_OF_TAG_NAME",UNEXPECTED_SOLIDUS_IN_TAG:22,22:"UNEXPECTED_SOLIDUS_IN_TAG",X_INVALID_END_TAG:23,23:"X_INVALID_END_TAG",X_MISSING_END_TAG:24,24:"X_MISSING_END_TAG",X_MISSING_INTERPOLATION_END:25,25:"X_MISSING_INTERPOLATION_END",X_MISSING_DIRECTIVE_NAME:26,26:"X_MISSING_DIRECTIVE_NAME",X_MISSING_DYNAMIC_DIRECTIVE_ARGUMENT_END:27,27:"X_MISSING_DYNAMIC_DIRECTIVE_ARGUMENT_END",X_V_IF_NO_EXPRESSION:28,28:"X_V_IF_NO_EXPRESSION",X_V_IF_SAME_KEY:29,29:"X_V_IF_SAME_KEY",X_V_ELSE_NO_ADJACENT_IF:30,30:"X_V_ELSE_NO_ADJACENT_IF",X_V_FOR_NO_EXPRESSION:31,31:"X_V_FOR_NO_EXPRESSION",X_V_FOR_MALFORMED_EXPRESSION:32,32:"X_V_FOR_MALFORMED_EXPRESSION",X_V_FOR_TEMPLATE_KEY_PLACEMENT:33,33:"X_V_FOR_TEMPLATE_KEY_PLACEMENT",X_V_BIND_NO_EXPRESSION:34,34:"X_V_BIND_NO_EXPRESSION",X_V_ON_NO_EXPRESSION:35,35:"X_V_ON_NO_EXPRESSION",X_V_SLOT_UNEXPECTED_DIRECTIVE_ON_SLOT_OUTLET:36,36:"X_V_SLOT_UNEXPECTED_DIRECTIVE_ON_SLOT_OUTLET",X_V_SLOT_MIXED_SLOT_USAGE:37,37:"X_V_SLOT_MIXED_SLOT_USAGE",X_V_SLOT_DUPLICATE_SLOT_NAMES:38,38:"X_V_SLOT_DUPLICATE_SLOT_NAMES",X_V_SLOT_EXTRANEOUS_DEFAULT_SLOT_CHILDREN:39,39:"X_V_SLOT_EXTRANEOUS_DEFAULT_SLOT_CHILDREN",X_V_SLOT_MISPLACED:40,40:"X_V_SLOT_MISPLACED",X_V_MODEL_NO_EXPRESSION:41,41:"X_V_MODEL_NO_EXPRESSION",X_V_MODEL_MALFORMED_EXPRESSION:42,42:"X_V_MODEL_MALFORMED_EXPRESSION",X_V_MODEL_ON_SCOPE_VARIABLE:43,43:"X_V_MODEL_ON_SCOPE_VARIABLE",X_V_MODEL_ON_PROPS:44,44:"X_V_MODEL_ON_PROPS",X_INVALID_EXPRESSION:45,45:"X_INVALID_EXPRESSION",X_KEEP_ALIVE_INVALID_CHILDREN:46,46:"X_KEEP_ALIVE_INVALID_CHILDREN",X_PREFIX_ID_NOT_SUPPORTED:47,47:"X_PREFIX_ID_NOT_SUPPORTED",X_MODULE_MODE_NOT_SUPPORTED:48,48:"X_MODULE_MODE_NOT_SUPPORTED",X_CACHE_HANDLER_NOT_SUPPORTED:49,49:"X_CACHE_HANDLER_NOT_SUPPORTED",X_SCOPE_ID_NOT_SUPPORTED:50,50:"X_SCOPE_ID_NOT_SUPPORTED",X_VNODE_HOOKS:51,51:"X_VNODE_HOOKS",X_V_BIND_INVALID_SAME_NAME_ARGUMENT:52,52:"X_V_BIND_INVALID_SAME_NAME_ARGUMENT",__EXTEND_POINT__:53,53:"__EXTEND_POINT__"},H1={0:"Illegal comment.",1:"CDATA section is allowed only in XML context.",2:"Duplicate attribute.",3:"End tag cannot have attributes.",4:"Illegal '/' in tags.",5:"Unexpected EOF in tag.",6:"Unexpected EOF in CDATA section.",7:"Unexpected EOF in comment.",8:"Unexpected EOF in script.",9:"Unexpected EOF in tag.",10:"Incorrectly closed comment.",11:"Incorrectly opened comment.",12:"Illegal tag name. Use '&lt;' to print '<'.",13:"Attribute value was expected.",14:"End tag name was expected.",15:"Whitespace was expected.",16:"Unexpected '<!--' in comment.",17:`Attribute name cannot contain U+0022 ("), U+0027 ('), and U+003C (<).`,18:"Unquoted attribute value cannot contain U+0022 (\"), U+0027 ('), U+003C (<), U+003D (=), and U+0060 (`).",19:"Attribute name cannot start with '='.",21:"'<?' is allowed only in XML context.",20:"Unexpected null character.",22:"Illegal '/' in tags.",23:"Invalid end tag.",24:"Element is missing end tag.",25:"Interpolation end sign was not found.",27:"End bracket for dynamic directive argument was not found. Note that dynamic directive argument cannot contain spaces.",26:"Legal directive name was expected.",28:"v-if/v-else-if is missing expression.",29:"v-if/else branches must use unique keys.",30:"v-else/v-else-if has no adjacent v-if or v-else-if.",31:"v-for is missing expression.",32:"v-for has invalid expression.",33:"<template v-for> key should be placed on the <template> tag.",34:"v-bind is missing expression.",52:"v-bind with same-name shorthand only allows static argument.",35:"v-on is missing expression.",36:"Unexpected custom directive on <slot> outlet.",37:"Mixed v-slot usage on both the component and nested <template>. When there are multiple named slots, all slots should use <template> syntax to avoid scope ambiguity.",38:"Duplicate slot names found. ",39:"Extraneous children found when component already has explicitly named default slot. These children will be ignored.",40:"v-slot can only be used on components or <template> tags.",41:"v-model is missing expression.",42:"v-model value must be a valid JavaScript member expression.",43:"v-model cannot be used on v-for or v-slot scope variables because they are not writable.",44:`v-model cannot be used on a prop, because local prop bindings are not writable.
Use a v-bind binding combined with a v-on listener that emits update:x event instead.`,45:"Error parsing JavaScript expression: ",46:"<KeepAlive> expects exactly one child component.",51:"@vnode-* hooks in templates are no longer supported. Use the vue: prefix instead. For example, @vnode-mounted should be changed to @vue:mounted. @vnode-* hooks support has been removed in 3.4.",47:'"prefixIdentifiers" option is not supported in this build of compiler.',48:"ES module mode is not supported in this build of compiler.",49:'"cacheHandlers" option is only supported when the "prefixIdentifiers" option is enabled.',50:'"scopeId" option is only supported in module mode.',53:""};function z1(t,e,n=!1,i=[],s=Object.create(null)){}function G1(t,e,n){return!1}function W1(t,e){if(t&&(t.type==="ObjectProperty"||t.type==="ArrayPattern")){let n=e.length;for(;n--;){const i=e[n];if(i.type==="AssignmentExpression")return!0;if(i.type!=="ObjectProperty"&&!i.type.endsWith("Pattern"))break}}return!1}function X1(t){let e=t.length;for(;e--;){const n=t[e];if(n.type==="NewExpression")return!0;if(n.type!=="MemberExpression")break}return!1}function $1(t,e){for(const n of t.params)for(const i of Oi(n))e(i)}function q1(t,e){for(const n of t.body)if(n.type==="VariableDeclaration"){if(n.declare)continue;for(const i of n.declarations)for(const s of Oi(i.id))e(s)}else if(n.type==="FunctionDeclaration"||n.type==="ClassDeclaration"){if(n.declare||!n.id)continue;e(n.id)}else Y1(n)&&j1(n,!0,e)}function Y1(t){return t.type==="ForOfStatement"||t.type==="ForInStatement"||t.type==="ForStatement"}function j1(t,e,n){const i=t.type==="ForStatement"?t.init:t.left;if(i&&i.type==="VariableDeclaration"&&(i.kind==="var"?e:!e))for(const s of i.declarations)for(const r of Oi(s.id))n(r)}function Oi(t,e=[]){switch(t.type){case"Identifier":e.push(t);break;case"MemberExpression":let n=t;for(;n.type==="MemberExpression";)n=n.object;e.push(n);break;case"ObjectPattern":for(const i of t.properties)i.type==="RestElement"?Oi(i.argument,e):Oi(i.value,e);break;case"ArrayPattern":t.elements.forEach(i=>{i&&Oi(i,e)});break;case"RestElement":Oi(t.argument,e);break;case"AssignmentPattern":Oi(t.left,e);break}return e}const K1=t=>/Function(?:Expression|Declaration)$|Method$/.test(t.type),fv=t=>t&&(t.type==="ObjectProperty"||t.type==="ObjectMethod")&&!t.computed,Z1=(t,e)=>fv(e)&&e.key===t,hv=["TSAsExpression","TSTypeAssertion","TSNonNullExpression","TSInstantiationExpression","TSSatisfiesExpression"];function dv(t){return hv.includes(t.type)?dv(t.expression):t}const vn=t=>t.type===4&&t.isStatic;function sd(t){switch(t){case"Teleport":case"teleport":return jr;case"Suspense":case"suspense":return Ic;case"KeepAlive":case"keep-alive":return pa;case"BaseTransition":case"base-transition":return Kh}}const J1=/^\d|[^\$\w\xA0-\uFFFF]/,Ia=t=>!J1.test(t),Q1=/[A-Za-z_$\xA0-\uFFFF]/,eA=/[\.\?\w$\xA0-\uFFFF]/,tA=/\s+[.[]\s*|\s*[.[]\s+/g,pv=t=>t.type===4?t.content:t.loc.source,mv=t=>{const e=pv(t).trim().replace(tA,a=>a.trim());let n=0,i=[],s=0,r=0,o=null;for(let a=0;a<e.length;a++){const l=e.charAt(a);switch(n){case 0:if(l==="[")i.push(n),n=1,s++;else if(l==="(")i.push(n),n=2,r++;else if(!(a===0?Q1:eA).test(l))return!1;break;case 1:l==="'"||l==='"'||l==="`"?(i.push(n),n=3,o=l):l==="["?s++:l==="]"&&(--s||(n=i.pop()));break;case 2:if(l==="'"||l==='"'||l==="`")i.push(n),n=3,o=l;else if(l==="(")r++;else if(l===")"){if(a===e.length-1)return!1;--r||(n=i.pop())}break;case 3:l===o&&(n=i.pop(),o=null);break}}return!s&&!r},nA=jt,rd=mv,iA=/^\s*(async\s*)?(\([^)]*?\)|[\w$_]+)\s*(:[^=]+)?=>|^\s*(async\s+)?function(?:\s+[\w$]+)?\s*\(/,_v=t=>iA.test(pv(t)),sA=jt,gv=_v;function rA(t,e,n=e.length){return vv({offset:t.offset,line:t.line,column:t.column},e,n)}function vv(t,e,n=e.length){let i=0,s=-1;for(let r=0;r<n;r++)e.charCodeAt(r)===10&&(i++,s=r);return t.offset+=n,t.line+=i,t.column=s===-1?t.column+n:n-s,t}function oA(t,e){if(!t)throw new Error(e||"unexpected compiler condition")}function gn(t,e,n=!1){for(let i=0;i<t.props.length;i++){const s=t.props[i];if(s.type===7&&(n||s.exp)&&(Xe(e)?s.name===e:e.test(s.name)))return s}}function Na(t,e,n=!1,i=!1){for(let s=0;s<t.props.length;s++){const r=t.props[s];if(r.type===6){if(n)continue;if(r.name===e&&(r.value||i))return r}else if(r.name==="bind"&&(r.exp||i)&&ps(r.arg,e))return r}}function ps(t,e){return!!(t&&vn(t)&&t.content===e)}function Ev(t){return t.props.some(e=>e.type===7&&e.name==="bind"&&(!e.arg||e.arg.type!==4||!e.arg.isStatic))}function Cl(t){return t.type===5||t.type===2}function od(t){return t.type===7&&t.name==="slot"}function uo(t){return t.type===1&&t.tagType===3}function ga(t){return t.type===1&&t.tagType===2}const aA=new Set([ao,Ro]);function Sv(t,e=[]){if(t&&!Xe(t)&&t.type===14){const n=t.callee;if(!Xe(n)&&aA.has(n))return Sv(t.arguments[0],e.concat(t))}return[t,e]}function va(t,e,n){let i,s=t.type===13?t.props:t.arguments[2],r=[],o;if(s&&!Xe(s)&&s.type===14){const a=Sv(s);s=a[0],r=a[1],o=r[r.length-1]}if(s==null||Xe(s))i=On([e]);else if(s.type===14){const a=s.arguments[0];!Xe(a)&&a.type===15?Zp(e,a)||a.properties.unshift(e):s.callee===Gc?i=kt(n.helper(ma),[On([e]),s]):s.arguments.unshift(On([e])),!i&&(i=s)}else s.type===15?(Zp(e,s)||s.properties.unshift(e),i=s):(i=kt(n.helper(ma),[On([e]),s]),o&&o.callee===Ro&&(o=r[r.length-2]));t.type===13?o?o.arguments[0]=i:t.props=i:o?o.arguments[0]=i:t.arguments[2]=i}function Zp(t,e){let n=!1;if(t.key.type===4){const i=t.key.content;n=e.properties.some(s=>s.key.type===4&&s.key.content===i)}return n}function fo(t,e){return`_${e}_${t.replace(/[^\w]/g,(n,i)=>n==="-"?"_":t.charCodeAt(i).toString())}`}function ti(t,e){if(!t||Object.keys(e).length===0)return!1;switch(t.type){case 1:for(let n=0;n<t.props.length;n++){const i=t.props[n];if(i.type===7&&(ti(i.arg,e)||ti(i.exp,e)))return!0}return t.children.some(n=>ti(n,e));case 11:return ti(t.source,e)?!0:t.children.some(n=>ti(n,e));case 9:return t.branches.some(n=>ti(n,e));case 10:return ti(t.condition,e)?!0:t.children.some(n=>ti(n,e));case 4:return!t.isStatic&&Ia(t.content)&&!!e[t.content];case 8:return t.children.some(n=>ft(n)&&ti(n,e));case 5:case 12:return ti(t.content,e);case 2:case 3:case 20:return!1;default:return!1}}function xv(t){return t.type===14&&t.callee===Xc?t.arguments[1].returns:t}const yv=/([\s\S]*?)\s+(?:in|of)\s+(\S[\s\S]*)/,Mv={parseMode:"base",ns:0,delimiters:["{{","}}"],getNamespace:()=>0,isVoidTag:Gr,isPreTag:Gr,isIgnoreNewlineTag:Gr,isCustomElement:Gr,onError:id,onWarn:uv,comments:!1,prefixIdentifiers:!1};let ut=Mv,Ea=null,Vi="",sn=null,st=null,bn="",wi=-1,zs=-1,ad=0,fs=!1,bf=null;const bt=[],Pt=new U1(bt,{onerr:Mi,ontext(t,e){Ja(Jt(t,e),t,e)},ontextentity(t,e,n){Ja(t,e,n)},oninterpolation(t,e){if(fs)return Ja(Jt(t,e),t,e);let n=t+Pt.delimiterOpen.length,i=e-Pt.delimiterClose.length;for(;Ln(Vi.charCodeAt(n));)n++;for(;Ln(Vi.charCodeAt(i-1));)i--;let s=Jt(n,i);s.includes("&")&&(s=ut.decodeEntities(s,!1)),Af({type:5,content:Pl(s,!1,Nt(n,i)),loc:Nt(t,e)})},onopentagname(t,e){const n=Jt(t,e);sn={type:1,tag:n,ns:ut.getNamespace(n,bt[0],ut.ns),tagType:0,props:[],children:[],loc:Nt(t-1,e),codegenNode:void 0}},onopentagend(t){Qp(t)},onclosetag(t,e){const n=Jt(t,e);if(!ut.isVoidTag(n)){let i=!1;for(let s=0;s<bt.length;s++)if(bt[s].tag.toLowerCase()===n.toLowerCase()){i=!0,s>0&&Mi(24,bt[0].loc.start.offset);for(let o=0;o<=s;o++){const a=bt.shift();wl(a,e,o<s)}break}i||Mi(23,Tv(t,60))}},onselfclosingtag(t){const e=sn.tag;sn.isSelfClosing=!0,Qp(t),bt[0]&&bt[0].tag===e&&wl(bt.shift(),t)},onattribname(t,e){st={type:6,name:Jt(t,e),nameLoc:Nt(t,e),value:void 0,loc:Nt(t)}},ondirname(t,e){const n=Jt(t,e),i=n==="."||n===":"?"bind":n==="@"?"on":n==="#"?"slot":n.slice(2);if(!fs&&i===""&&Mi(26,t),fs||i==="")st={type:6,name:n,nameLoc:Nt(t,e),value:void 0,loc:Nt(t)};else if(st={type:7,name:i,rawName:n,exp:void 0,arg:void 0,modifiers:n==="."?[Ye("prop")]:[],loc:Nt(t)},i==="pre"){fs=Pt.inVPre=!0,bf=sn;const s=sn.props;for(let r=0;r<s.length;r++)s[r].type===7&&(s[r]=vA(s[r]))}},ondirarg(t,e){if(t===e)return;const n=Jt(t,e);if(fs)st.name+=n,$s(st.nameLoc,e);else{const i=n[0]!=="[";st.arg=Pl(i?n:n.slice(1,-1),i,Nt(t,e),i?3:0)}},ondirmodifier(t,e){const n=Jt(t,e);if(fs)st.name+="."+n,$s(st.nameLoc,e);else if(st.name==="slot"){const i=st.arg;i&&(i.content+="."+n,$s(i.loc,e))}else{const i=Ye(n,!0,Nt(t,e));st.modifiers.push(i)}},onattribdata(t,e){bn+=Jt(t,e),wi<0&&(wi=t),zs=e},onattribentity(t,e,n){bn+=t,wi<0&&(wi=e),zs=n},onattribnameend(t){const e=st.loc.start.offset,n=Jt(e,t);st.type===7&&(st.rawName=n),sn.props.some(i=>(i.type===7?i.rawName:i.name)===n)&&Mi(2,e)},onattribend(t,e){if(sn&&st){if($s(st.loc,e),t!==0)if(bn.includes("&")&&(bn=ut.decodeEntities(bn,!0)),st.type===6)st.name==="class"&&(bn=Av(bn).trim()),t===1&&!bn&&Mi(13,e),st.value={type:2,content:bn,loc:t===1?Nt(wi,zs):Nt(wi-1,zs+1)},Pt.inSFCRoot&&sn.tag==="template"&&st.name==="lang"&&bn&&bn!=="html"&&Pt.enterRCDATA(sc("</template"),0);else{let n=0;st.exp=Pl(bn,!1,Nt(wi,zs),0,n),st.name==="for"&&(st.forParseResult=cA(st.exp));let i=-1;st.name==="bind"&&(i=st.modifiers.findIndex(s=>s.content==="sync"))>-1&&co("COMPILER_V_BIND_SYNC",ut,st.loc,st.rawName)&&(st.name="model",st.modifiers.splice(i,1))}(st.type!==7||st.name!=="pre")&&sn.props.push(st)}bn="",wi=zs=-1},oncomment(t,e){ut.comments&&Af({type:3,content:Jt(t,e),loc:Nt(t-4,e+3)})},onend(){const t=Vi.length;for(let e=0;e<bt.length;e++)wl(bt[e],t-1),Mi(24,bt[e].loc.start.offset)},oncdata(t,e){bt[0].ns!==0?Ja(Jt(t,e),t,e):Mi(1,t-9)},onprocessinginstruction(t){(bt[0]?bt[0].ns:ut.ns)===0&&Mi(21,t-1)}}),Jp=/,([^,\}\]]*)(?:,([^,\}\]]*))?$/,lA=/^\(|\)$/g;function cA(t){const e=t.loc,n=t.content,i=n.match(yv);if(!i)return;const[,s,r]=i,o=(f,h,d=!1)=>{const g=e.start.offset+h,E=g+f.length;return Pl(f,!1,Nt(g,E),0,d?1:0)},a={source:o(r.trim(),n.indexOf(r,s.length)),value:void 0,key:void 0,index:void 0,finalized:!1};let l=s.trim().replace(lA,"").trim();const c=s.indexOf(l),u=l.match(Jp);if(u){l=l.replace(Jp,"").trim();const f=u[1].trim();let h;if(f&&(h=n.indexOf(f,c+l.length),a.key=o(f,h,!0)),u[2]){const d=u[2].trim();d&&(a.index=o(d,n.indexOf(d,a.key?h+f.length:c+l.length),!0))}}return l&&(a.value=o(l,c,!0)),a}function Jt(t,e){return Vi.slice(t,e)}function Qp(t){Pt.inSFCRoot&&(sn.innerLoc=Nt(t+1,t+1)),Af(sn);const{tag:e,ns:n}=sn;n===0&&ut.isPreTag(e)&&ad++,ut.isVoidTag(e)?wl(sn,t):(bt.unshift(sn),(n===1||n===2)&&(Pt.inXML=!0)),sn=null}function Ja(t,e,n){{const r=bt[0]&&bt[0].tag;r!=="script"&&r!=="style"&&t.includes("&")&&(t=ut.decodeEntities(t,!1))}const i=bt[0]||Ea,s=i.children[i.children.length-1];s&&s.type===2?(s.content+=t,$s(s.loc,n)):i.children.push({type:2,content:t,loc:Nt(e,n)})}function wl(t,e,n=!1){n?$s(t.loc,Tv(e,60)):$s(t.loc,uA(e,62)+1),Pt.inSFCRoot&&(t.children.length?t.innerLoc.end=nt({},t.children[t.children.length-1].loc.end):t.innerLoc.end=nt({},t.innerLoc.start),t.innerLoc.source=Jt(t.innerLoc.start.offset,t.innerLoc.end.offset));const{tag:i,ns:s,children:r}=t;if(fs||(i==="slot"?t.tagType=2:em(t)?t.tagType=3:hA(t)&&(t.tagType=1)),Pt.inRCDATA||(t.children=bv(r)),s===0&&ut.isIgnoreNewlineTag(i)){const o=r[0];o&&o.type===2&&(o.content=o.content.replace(/^\r?\n/,""))}s===0&&ut.isPreTag(i)&&ad--,bf===t&&(fs=Pt.inVPre=!1,bf=null),Pt.inXML&&(bt[0]?bt[0].ns:ut.ns)===0&&(Pt.inXML=!1);{const o=t.props;if(!Pt.inSFCRoot&&nr("COMPILER_NATIVE_TEMPLATE",ut)&&t.tag==="template"&&!em(t)){const l=bt[0]||Ea,c=l.children.indexOf(t);l.children.splice(c,1,...t.children)}const a=o.find(l=>l.type===6&&l.name==="inline-template");a&&co("COMPILER_INLINE_TEMPLATE",ut,a.loc)&&t.children.length&&(a.value={type:2,content:Jt(t.children[0].loc.start.offset,t.children[t.children.length-1].loc.end.offset),loc:a.loc})}}function uA(t,e){let n=t;for(;Vi.charCodeAt(n)!==e&&n<Vi.length-1;)n++;return n}function Tv(t,e){let n=t;for(;Vi.charCodeAt(n)!==e&&n>=0;)n--;return n}const fA=new Set(["if","else","else-if","for","slot"]);function em({tag:t,props:e}){if(t==="template"){for(let n=0;n<e.length;n++)if(e[n].type===7&&fA.has(e[n].name))return!0}return!1}function hA({tag:t,props:e}){if(ut.isCustomElement(t))return!1;if(t==="component"||dA(t.charCodeAt(0))||sd(t)||ut.isBuiltInComponent&&ut.isBuiltInComponent(t)||ut.isNativeTag&&!ut.isNativeTag(t))return!0;for(let n=0;n<e.length;n++){const i=e[n];if(i.type===6){if(i.name==="is"&&i.value){if(i.value.content.startsWith("vue:"))return!0;if(co("COMPILER_IS_ON_ELEMENT",ut,i.loc))return!0}}else if(i.name==="bind"&&ps(i.arg,"is")&&co("COMPILER_IS_ON_ELEMENT",ut,i.loc))return!0}return!1}function dA(t){return t>64&&t<91}const pA=/\r\n/g;function bv(t,e){const n=ut.whitespace!=="preserve";let i=!1;for(let s=0;s<t.length;s++){const r=t[s];if(r.type===2)if(ad)r.content=r.content.replace(pA,`
`);else if(mA(r.content)){const o=t[s-1]&&t[s-1].type,a=t[s+1]&&t[s+1].type;!o||!a||n&&(o===3&&(a===3||a===1)||o===1&&(a===3||a===1&&_A(r.content)))?(i=!0,t[s]=null):r.content=" "}else n&&(r.content=Av(r.content))}return i?t.filter(Boolean):t}function mA(t){for(let e=0;e<t.length;e++)if(!Ln(t.charCodeAt(e)))return!1;return!0}function _A(t){for(let e=0;e<t.length;e++){const n=t.charCodeAt(e);if(n===10||n===13)return!0}return!1}function Av(t){let e="",n=!1;for(let i=0;i<t.length;i++)Ln(t.charCodeAt(i))?n||(e+=" ",n=!0):(e+=t[i],n=!1);return e}function Af(t){(bt[0]||Ea).children.push(t)}function Nt(t,e){return{start:Pt.getPos(t),end:e==null?e:Pt.getPos(e),source:e==null?e:Jt(t,e)}}function gA(t){return Nt(t.start.offset,t.end.offset)}function $s(t,e){t.end=Pt.getPos(e),t.source=Jt(t.start.offset,e)}function vA(t){const e={type:6,name:t.rawName,nameLoc:Nt(t.loc.start.offset,t.loc.start.offset+t.rawName.length),value:void 0,loc:t.loc};if(t.exp){const n=t.exp.loc;n.end.offset<t.loc.end.offset&&(n.start.offset--,n.start.column--,n.end.offset++,n.end.column++),e.value={type:2,content:t.exp.content,loc:n}}return e}function Pl(t,e=!1,n,i=0,s=0){return Ye(t,e,n,i)}function Mi(t,e,n){ut.onError(Mt(t,Nt(e,e)))}function EA(){Pt.reset(),sn=null,st=null,bn="",wi=-1,zs=-1,bt.length=0}function ld(t,e){if(EA(),Vi=t,ut=nt({},Mv),e){let s;for(s in e)e[s]!=null&&(ut[s]=e[s])}Pt.mode=ut.parseMode==="html"?1:ut.parseMode==="sfc"?2:0,Pt.inXML=ut.ns===1||ut.ns===2;const n=e&&e.delimiters;n&&(Pt.delimiterOpen=sc(n[0]),Pt.delimiterClose=sc(n[1]));const i=Ea=av([],t);return Pt.parse(Vi),i.loc=Nt(0,t.length),i.children=bv(i.children),Ea=null,i}function SA(t,e){Il(t,void 0,e,Rv(t,t.children[0]))}function Rv(t,e){const{children:n}=t;return n.length===1&&e.type===1&&!ga(e)}function Il(t,e,n,i=!1,s=!1){const{children:r}=t,o=[];for(let u=0;u<r.length;u++){const f=r[u];if(f.type===1&&f.tagType===0){const h=i?0:Cn(f,n);if(h>0){if(h>=2){f.codegenNode.patchFlag=-1,o.push(f);continue}}else{const d=f.codegenNode;if(d.type===13){const g=d.patchFlag;if((g===void 0||g===512||g===1)&&wv(f,n)>=2){const E=Pv(f);E&&(d.props=n.hoist(E))}d.dynamicProps&&(d.dynamicProps=n.hoist(d.dynamicProps))}}}else if(f.type===12&&(i?0:Cn(f,n))>=2){o.push(f);continue}if(f.type===1){const h=f.tagType===1;h&&n.scopes.vSlot++,Il(f,t,n,!1,s),h&&n.scopes.vSlot--}else if(f.type===11)Il(f,t,n,f.children.length===1,!0);else if(f.type===9)for(let h=0;h<f.branches.length;h++)Il(f.branches[h],t,n,f.branches[h].children.length===1,s)}let a=!1;if(o.length===r.length&&t.type===1){if(t.tagType===0&&t.codegenNode&&t.codegenNode.type===13&&Pe(t.codegenNode.children))t.codegenNode.children=l(vs(t.codegenNode.children)),a=!0;else if(t.tagType===1&&t.codegenNode&&t.codegenNode.type===13&&t.codegenNode.children&&!Pe(t.codegenNode.children)&&t.codegenNode.children.type===15){const u=c(t.codegenNode,"default");u&&(u.returns=l(vs(u.returns)),a=!0)}else if(t.tagType===3&&e&&e.type===1&&e.tagType===1&&e.codegenNode&&e.codegenNode.type===13&&e.codegenNode.children&&!Pe(e.codegenNode.children)&&e.codegenNode.children.type===15){const u=gn(t,"slot",!0),f=u&&u.arg&&c(e.codegenNode,u.arg);f&&(f.returns=l(vs(f.returns)),a=!0)}}if(!a)for(const u of o)u.codegenNode=n.cache(u.codegenNode);function l(u){const f=n.cache(u);return s&&n.hmr&&(f.needArraySpread=!0),f}function c(u,f){if(u.children&&!Pe(u.children)&&u.children.type===15){const h=u.children.properties.find(d=>d.key===f||d.key.content===f);return h&&h.value}}o.length&&n.transformHoist&&n.transformHoist(r,n,t)}function Cn(t,e){const{constantCache:n}=e;switch(t.type){case 1:if(t.tagType!==0)return 0;const i=n.get(t);if(i!==void 0)return i;const s=t.codegenNode;if(s.type!==13||s.isBlock&&t.tag!=="svg"&&t.tag!=="foreignObject"&&t.tag!=="math")return 0;if(s.patchFlag===void 0){let o=3;const a=wv(t,e);if(a===0)return n.set(t,0),0;a<o&&(o=a);for(let l=0;l<t.children.length;l++){const c=Cn(t.children[l],e);if(c===0)return n.set(t,0),0;c<o&&(o=c)}if(o>1)for(let l=0;l<t.props.length;l++){const c=t.props[l];if(c.type===7&&c.name==="bind"&&c.exp){const u=Cn(c.exp,e);if(u===0)return n.set(t,0),0;u<o&&(o=u)}}if(s.isBlock){for(let l=0;l<t.props.length;l++)if(t.props[l].type===7)return n.set(t,0),0;e.removeHelper(Ms),e.removeHelper(ur(e.inSSR,s.isComponent)),s.isBlock=!1,e.helper(cr(e.inSSR,s.isComponent))}return n.set(t,o),o}else return n.set(t,0),0;case 2:case 3:return 3;case 9:case 11:case 10:return 0;case 5:case 12:return Cn(t.content,e);case 4:return t.constType;case 8:let r=3;for(let o=0;o<t.children.length;o++){const a=t.children[o];if(Xe(a)||Sn(a))continue;const l=Cn(a,e);if(l===0)return 0;l<r&&(r=l)}return r;case 20:return 2;default:return 0}}const xA=new Set([Hc,zc,ao,Ro]);function Cv(t,e){if(t.type===14&&!Xe(t.callee)&&xA.has(t.callee)){const n=t.arguments[0];if(n.type===4)return Cn(n,e);if(n.type===14)return Cv(n,e)}return 0}function wv(t,e){let n=3;const i=Pv(t);if(i&&i.type===15){const{properties:s}=i;for(let r=0;r<s.length;r++){const{key:o,value:a}=s[r],l=Cn(o,e);if(l===0)return l;l<n&&(n=l);let c;if(a.type===4?c=Cn(a,e):a.type===14?c=Cv(a,e):c=0,c===0)return c;c<n&&(n=c)}}return n}function Pv(t){const e=t.codegenNode;if(e.type===13)return e.props}function Iv(t,{filename:e="",prefixIdentifiers:n=!1,hoistStatic:i=!1,hmr:s=!1,cacheHandlers:r=!1,nodeTransforms:o=[],directiveTransforms:a={},transformHoist:l=null,isBuiltInComponent:c=jt,isCustomElement:u=jt,expressionPlugins:f=[],scopeId:h=null,slotted:d=!0,ssr:g=!1,inSSR:E=!1,ssrCssVars:_="",bindingMetadata:p=tt,inline:R=!1,isTS:x=!1,onError:M=id,onWarn:P=uv,compatConfig:N}){const T=e.replace(/\?.*$/,"").match(/([^/\\]+)\.\w+$/),A={filename:e,selfName:T&&Cs(xt(T[1])),prefixIdentifiers:n,hoistStatic:i,hmr:s,cacheHandlers:r,nodeTransforms:o,directiveTransforms:a,transformHoist:l,isBuiltInComponent:c,isCustomElement:u,expressionPlugins:f,scopeId:h,slotted:d,ssr:g,inSSR:E,ssrCssVars:_,bindingMetadata:p,inline:R,isTS:x,onError:M,onWarn:P,compatConfig:N,root:t,helpers:new Map,components:new Set,directives:new Set,hoists:[],imports:[],cached:[],constantCache:new WeakMap,temps:0,identifiers:Object.create(null),scopes:{vFor:0,vSlot:0,vPre:0,vOnce:0},parent:null,grandParent:null,currentNode:t,childIndex:0,inVOnce:!1,helper(m){const v=A.helpers.get(m)||0;return A.helpers.set(m,v+1),m},removeHelper(m){const v=A.helpers.get(m);if(v){const C=v-1;C?A.helpers.set(m,C):A.helpers.delete(m)}},helperString(m){return`_${ar[A.helper(m)]}`},replaceNode(m){A.parent.children[A.childIndex]=A.currentNode=m},removeNode(m){const v=A.parent.children,C=m?v.indexOf(m):A.currentNode?A.childIndex:-1;!m||m===A.currentNode?(A.currentNode=null,A.onNodeRemoved()):A.childIndex>C&&(A.childIndex--,A.onNodeRemoved()),A.parent.children.splice(C,1)},onNodeRemoved:jt,addIdentifiers(m){},removeIdentifiers(m){},hoist(m){Xe(m)&&(m=Ye(m)),A.hoists.push(m);const v=Ye(`_hoisted_${A.hoists.length}`,!1,m.loc,2);return v.hoisted=m,v},cache(m,v=!1,C=!1){const I=lv(A.cached.length,m,v,C);return A.cached.push(I),I}};return A.filters=new Set,A}function Nv(t,e){const n=Iv(t,e);Da(t,n),e.hoistStatic&&SA(t,n),e.ssr||yA(t,n),t.helpers=new Set([...n.helpers.keys()]),t.components=[...n.components],t.directives=[...n.directives],t.imports=n.imports,t.hoists=n.hoists,t.temps=n.temps,t.cached=n.cached,t.transformed=!0,t.filters=[...n.filters]}function yA(t,e){const{helper:n}=e,{children:i}=t;if(i.length===1){const s=i[0];if(Rv(t,s)&&s.codegenNode){const r=s.codegenNode;r.type===13&&$c(r,e),t.codegenNode=r}else t.codegenNode=s}else if(i.length>1){let s=64;t.codegenNode=lo(e,n(oo),void 0,t.children,s,void 0,void 0,!0,void 0,!1)}}function MA(t,e){let n=0;const i=()=>{n--};for(;n<t.children.length;n++){const s=t.children[n];Xe(s)||(e.grandParent=e.parent,e.parent=t,e.childIndex=n,e.onNodeRemoved=i,Da(s,e))}}function Da(t,e){e.currentNode=t;const{nodeTransforms:n}=e,i=[];for(let r=0;r<n.length;r++){const o=n[r](t,e);if(o&&(Pe(o)?i.push(...o):i.push(o)),e.currentNode)t=e.currentNode;else return}switch(t.type){case 3:e.ssr||e.helper(Ao);break;case 5:e.ssr||e.helper(Pa);break;case 9:for(let r=0;r<t.branches.length;r++)Da(t.branches[r],e);break;case 10:case 11:case 1:case 0:MA(t,e);break}e.currentNode=t;let s=i.length;for(;s--;)i[s]()}function cd(t,e){const n=Xe(t)?i=>i===t:i=>t.test(i);return(i,s)=>{if(i.type===1){const{props:r}=i;if(i.tagType===3&&r.some(od))return;const o=[];for(let a=0;a<r.length;a++){const l=r[a];if(l.type===7&&n(l.name)){r.splice(a,1),a--;const c=e(i,l,s);c&&o.push(c)}}return o}}}const qc="/*@__PURE__*/",Dv=t=>`${ar[t]}: _${ar[t]}`;function TA(t,{mode:e="function",prefixIdentifiers:n=e==="module",sourceMap:i=!1,filename:s="template.vue.html",scopeId:r=null,optimizeImports:o=!1,runtimeGlobalName:a="Vue",runtimeModuleName:l="vue",ssrRuntimeModuleName:c="vue/server-renderer",ssr:u=!1,isTS:f=!1,inSSR:h=!1}){const d={mode:e,prefixIdentifiers:n,sourceMap:i,filename:s,scopeId:r,optimizeImports:o,runtimeGlobalName:a,runtimeModuleName:l,ssrRuntimeModuleName:c,ssr:u,isTS:f,inSSR:h,source:t.source,code:"",column:1,line:1,offset:0,indentLevel:0,pure:!1,map:void 0,helper(E){return`_${ar[E]}`},push(E,_=-2,p){d.code+=E},indent(){g(++d.indentLevel)},deindent(E=!1){E?--d.indentLevel:g(--d.indentLevel)},newline(){g(d.indentLevel)}};function g(E){d.push(`
`+"  ".repeat(E),0)}return d}function Lv(t,e={}){const n=TA(t,e);e.onContextCreated&&e.onContextCreated(n);const{mode:i,push:s,prefixIdentifiers:r,indent:o,deindent:a,newline:l,scopeId:c,ssr:u}=n,f=Array.from(t.helpers),h=f.length>0,d=!r&&i!=="module";bA(t,n);const E=u?"ssrRender":"render",p=(u?["_ctx","_push","_parent","_attrs"]:["_ctx","_cache"]).join(", ");if(s(`function ${E}(${p}) {`),o(),d&&(s("with (_ctx) {"),o(),h&&(s(`const { ${f.map(Dv).join(", ")} } = _Vue
`,-1),l())),t.components.length&&(xu(t.components,"component",n),(t.directives.length||t.temps>0)&&l()),t.directives.length&&(xu(t.directives,"directive",n),t.temps>0&&l()),t.filters&&t.filters.length&&(l(),xu(t.filters,"filter",n),l()),t.temps>0){s("let ");for(let R=0;R<t.temps;R++)s(`${R>0?", ":""}_temp${R}`)}return(t.components.length||t.directives.length||t.temps)&&(s(`
`,0),l()),u||s("return "),t.codegenNode?un(t.codegenNode,n):s("null"),d&&(a(),s("}")),a(),s("}"),{ast:t,code:n.code,preamble:"",map:n.map?n.map.toJSON():void 0}}function bA(t,e){const{ssr:n,prefixIdentifiers:i,push:s,newline:r,runtimeModuleName:o,runtimeGlobalName:a,ssrRuntimeModuleName:l}=e,c=a,u=Array.from(t.helpers);if(u.length>0&&(s(`const _Vue = ${c}
`,-1),t.hoists.length)){const f=[Nc,Dc,Ao,Lc,Qh].filter(h=>u.includes(h)).map(Dv).join(", ");s(`const { ${f} } = _Vue
`,-1)}AA(t.hoists,e),r(),s("return ")}function xu(t,e,{helper:n,push:i,newline:s,isTS:r}){const o=n(e==="filter"?kc:e==="component"?Oc:Fc);for(let a=0;a<t.length;a++){let l=t[a];const c=l.endsWith("__self");c&&(l=l.slice(0,-6)),i(`const ${fo(l,e)} = ${o}(${JSON.stringify(l)}${c?", true":""})${r?"!":""}`),a<t.length-1&&s()}}function AA(t,e){if(!t.length)return;e.pure=!0;const{push:n,newline:i}=e;i();for(let s=0;s<t.length;s++){const r=t[s];r&&(n(`const _hoisted_${s+1} = `),un(r,e),i())}e.pure=!1}function ud(t,e){const n=t.length>3||!1;e.push("["),n&&e.indent(),La(t,e,n),n&&e.deindent(),e.push("]")}function La(t,e,n=!1,i=!0){const{push:s,newline:r}=e;for(let o=0;o<t.length;o++){const a=t[o];Xe(a)?s(a,-3):Pe(a)?ud(a,e):un(a,e),o<t.length-1&&(n?(i&&s(","),r()):i&&s(", "))}}function un(t,e){if(Xe(t)){e.push(t,-3);return}if(Sn(t)){e.push(e.helper(t));return}switch(t.type){case 1:case 9:case 11:un(t.codegenNode,e);break;case 2:RA(t,e);break;case 4:Ov(t,e);break;case 5:CA(t,e);break;case 12:un(t.codegenNode,e);break;case 8:Uv(t,e);break;case 3:PA(t,e);break;case 13:IA(t,e);break;case 14:DA(t,e);break;case 15:LA(t,e);break;case 17:OA(t,e);break;case 18:UA(t,e);break;case 19:FA(t,e);break;case 20:kA(t,e);break;case 21:La(t.body,e,!0,!1);break}}function RA(t,e){e.push(JSON.stringify(t.content),-3,t)}function Ov(t,e){const{content:n,isStatic:i}=t;e.push(i?JSON.stringify(n):n,-3,t)}function CA(t,e){const{push:n,helper:i,pure:s}=e;s&&n(qc),n(`${i(Pa)}(`),un(t.content,e),n(")")}function Uv(t,e){for(let n=0;n<t.children.length;n++){const i=t.children[n];Xe(i)?e.push(i,-3):un(i,e)}}function wA(t,e){const{push:n}=e;if(t.type===8)n("["),Uv(t,e),n("]");else if(t.isStatic){const i=Ia(t.content)?t.content:JSON.stringify(t.content);n(i,-2,t)}else n(`[${t.content}]`,-3,t)}function PA(t,e){const{push:n,helper:i,pure:s}=e;s&&n(qc),n(`${i(Ao)}(${JSON.stringify(t.content)})`,-3,t)}function IA(t,e){const{push:n,helper:i,pure:s}=e,{tag:r,props:o,children:a,patchFlag:l,dynamicProps:c,directives:u,isBlock:f,disableTracking:h,isComponent:d}=t;let g;l&&(g=String(l)),u&&n(i(Bc)+"("),f&&n(`(${i(Ms)}(${h?"true":""}), `),s&&n(qc);const E=f?ur(e.inSSR,d):cr(e.inSSR,d);n(i(E)+"(",-2,t),La(NA([r,o,a,g,c]),e),n(")"),f&&n(")"),u&&(n(", "),un(u,e),n(")"))}function NA(t){let e=t.length;for(;e--&&t[e]==null;);return t.slice(0,e+1).map(n=>n||"null")}function DA(t,e){const{push:n,helper:i,pure:s}=e,r=Xe(t.callee)?t.callee:i(t.callee);s&&n(qc),n(r+"(",-2,t),La(t.arguments,e),n(")")}function LA(t,e){const{push:n,indent:i,deindent:s,newline:r}=e,{properties:o}=t;if(!o.length){n("{}",-2,t);return}const a=o.length>1||!1;n(a?"{":"{ "),a&&i();for(let l=0;l<o.length;l++){const{key:c,value:u}=o[l];wA(c,e),n(": "),un(u,e),l<o.length-1&&(n(","),r())}a&&s(),n(a?"}":" }")}function OA(t,e){ud(t.elements,e)}function UA(t,e){const{push:n,indent:i,deindent:s}=e,{params:r,returns:o,body:a,newline:l,isSlot:c}=t;c&&n(`_${ar[Wc]}(`),n("(",-2,t),Pe(r)?La(r,e):r&&un(r,e),n(") => "),(l||a)&&(n("{"),i()),o?(l&&n("return "),Pe(o)?ud(o,e):un(o,e)):a&&un(a,e),(l||a)&&(s(),n("}")),c&&(t.isNonScopedSlot&&n(", undefined, true"),n(")"))}function FA(t,e){const{test:n,consequent:i,alternate:s,newline:r}=t,{push:o,indent:a,deindent:l,newline:c}=e;if(n.type===4){const f=!Ia(n.content);f&&o("("),Ov(n,e),f&&o(")")}else o("("),un(n,e),o(")");r&&a(),e.indentLevel++,r||o(" "),o("? "),un(i,e),e.indentLevel--,r&&c(),r||o(" "),o(": ");const u=s.type===19;u||e.indentLevel++,un(s,e),u||e.indentLevel--,r&&l(!0)}function kA(t,e){const{push:n,helper:i,indent:s,deindent:r,newline:o}=e,{needPauseTracking:a,needArraySpread:l}=t;l&&n("[...("),n(`_cache[${t.index}] || (`),a&&(s(),n(`${i(_a)}(-1`),t.inVOnce&&n(", true"),n("),"),o(),n("(")),n(`_cache[${t.index}] = `),un(t.value,e),a&&(n(`).cacheIndex = ${t.index},`),o(),n(`${i(_a)}(1),`),o(),n(`_cache[${t.index}]`),r()),n(")"),l&&n(")]")}new RegExp("\\b"+"arguments,await,break,case,catch,class,const,continue,debugger,default,delete,do,else,export,extends,finally,for,function,if,import,let,new,return,super,switch,throw,try,var,void,while,with,yield".split(",").join("\\b|\\b")+"\\b");const BA=(t,e)=>{if(t.type===5)t.content=Nl(t.content,e);else if(t.type===1){const n=gn(t,"memo");for(let i=0;i<t.props.length;i++){const s=t.props[i];if(s.type===7&&s.name!=="for"){const r=s.exp,o=s.arg;r&&r.type===4&&!(s.name==="on"&&o)&&!(n&&o&&o.type===4&&o.content==="key")&&(s.exp=Nl(r,e,s.name==="slot")),o&&o.type===4&&!o.isStatic&&(s.arg=Nl(o,e))}}}};function Nl(t,e,n=!1,i=!1,s=Object.create(e.identifiers)){return t}function Fv(t){return Xe(t)?t:t.type===4?t.content:t.children.map(Fv).join("")}const VA=cd(/^(if|else|else-if)$/,(t,e,n)=>kv(t,e,n,(i,s,r)=>{const o=n.parent.children;let a=o.indexOf(i),l=0;for(;a-->=0;){const c=o[a];c&&c.type===9&&(l+=c.branches.length)}return()=>{if(r)i.codegenNode=nm(s,l,n);else{const c=HA(i.codegenNode);c.alternate=nm(s,l+i.branches.length-1,n)}}}));function kv(t,e,n,i){if(e.name!=="else"&&(!e.exp||!e.exp.content.trim())){const s=e.exp?e.exp.loc:t.loc;n.onError(Mt(28,e.loc)),e.exp=Ye("true",!1,s)}if(e.name==="if"){const s=tm(t,e),r={type:9,loc:gA(t.loc),branches:[s]};if(n.replaceNode(r),i)return i(r,s,!0)}else{const s=n.parent.children;let r=s.indexOf(t);for(;r-->=-1;){const o=s[r];if(o&&o.type===3){n.removeNode(o);continue}if(o&&o.type===2&&!o.content.trim().length){n.removeNode(o);continue}if(o&&o.type===9){e.name==="else-if"&&o.branches[o.branches.length-1].condition===void 0&&n.onError(Mt(30,t.loc)),n.removeNode();const a=tm(t,e);o.branches.push(a);const l=i&&i(o,a,!1);Da(a,n),l&&l(),n.currentNode=null}else n.onError(Mt(30,t.loc));break}}}function tm(t,e){const n=t.tagType===3;return{type:10,loc:t.loc,condition:e.name==="else"?void 0:e.exp,children:n&&!gn(t,"for")?t.children:[t],userKey:Na(t,"key"),isTemplateIf:n}}function nm(t,e,n){return t.condition?ic(t.condition,im(t,e,n),kt(n.helper(Ao),['""',"true"])):im(t,e,n)}function im(t,e,n){const{helper:i}=n,s=It("key",Ye(`${e}`,!1,qt,2)),{children:r}=t,o=r[0];if(r.length!==1||o.type!==1)if(r.length===1&&o.type===11){const l=o.codegenNode;return va(l,s,n),l}else return lo(n,i(oo),On([s]),r,64,void 0,void 0,!0,!1,!1,t.loc);else{const l=o.codegenNode,c=xv(l);return c.type===13&&$c(c,n),va(c,s,n),l}}function HA(t){for(;;)if(t.type===19)if(t.alternate.type===19)t=t.alternate;else return t;else t.type===20&&(t=t.value)}const Bv=(t,e,n)=>{const{modifiers:i,loc:s}=t,r=t.arg;let{exp:o}=t;if(o&&o.type===4&&!o.content.trim()&&(o=void 0),!o){if(r.type!==4||!r.isStatic)return n.onError(Mt(52,r.loc)),{props:[It(r,Ye("",!0,s))]};Vv(t),o=t.exp}return r.type!==4?(r.children.unshift("("),r.children.push(') || ""')):r.isStatic||(r.content=`${r.content} || ""`),i.some(a=>a.content==="camel")&&(r.type===4?r.isStatic?r.content=xt(r.content):r.content=`${n.helperString(tc)}(${r.content})`:(r.children.unshift(`${n.helperString(tc)}(`),r.children.push(")"))),n.inSSR||(i.some(a=>a.content==="prop")&&sm(r,"."),i.some(a=>a.content==="attr")&&sm(r,"^")),{props:[It(r,o)]}},Vv=(t,e)=>{const n=t.arg,i=xt(n.content);t.exp=Ye(i,!1,n.loc)},sm=(t,e)=>{t.type===4?t.isStatic?t.content=e+t.content:t.content=`\`${e}\${${t.content}}\``:(t.children.unshift(`'${e}' + (`),t.children.push(")"))},zA=cd("for",(t,e,n)=>{const{helper:i,removeHelper:s}=n;return Hv(t,e,n,r=>{const o=kt(i(Vc),[r.source]),a=uo(t),l=gn(t,"memo"),c=Na(t,"key",!1,!0);c&&c.type===7&&!c.exp&&Vv(c);let f=c&&(c.type===6?c.value?Ye(c.value.content,!0):void 0:c.exp);const h=c&&f?It("key",f):null,d=r.source.type===4&&r.source.constType>0,g=d?64:c?128:256;return r.codegenNode=lo(n,i(oo),void 0,o,g,void 0,void 0,!0,!d,!1,t.loc),()=>{let E;const{children:_}=r,p=_.length!==1||_[0].type!==1,R=ga(t)?t:a&&t.children.length===1&&ga(t.children[0])?t.children[0]:null;if(R?(E=R.codegenNode,a&&h&&va(E,h,n)):p?E=lo(n,i(oo),h?On([h]):void 0,t.children,64,void 0,void 0,!0,void 0,!1):(E=_[0].codegenNode,a&&h&&va(E,h,n),E.isBlock!==!d&&(E.isBlock?(s(Ms),s(ur(n.inSSR,E.isComponent))):s(cr(n.inSSR,E.isComponent))),E.isBlock=!d,E.isBlock?(i(Ms),i(ur(n.inSSR,E.isComponent))):i(cr(n.inSSR,E.isComponent))),l){const x=lr(rc(r.parseResult,[Ye("_cached")]));x.body=cv([$n(["const _memo = (",l.exp,")"]),$n(["if (_cached",...f?[" && _cached.key === ",f]:[],` && ${n.helperString(nd)}(_cached, _memo)) return _cached`]),$n(["const _item = ",E]),Ye("_item.memo = _memo"),Ye("return _item")]),o.arguments.push(x,Ye("_cache"),Ye(String(n.cached.length))),n.cached.push(null)}else o.arguments.push(lr(rc(r.parseResult),E,!0))}})});function Hv(t,e,n,i){if(!e.exp){n.onError(Mt(31,e.loc));return}const s=e.forParseResult;if(!s){n.onError(Mt(32,e.loc));return}fd(s);const{addIdentifiers:r,removeIdentifiers:o,scopes:a}=n,{source:l,value:c,key:u,index:f}=s,h={type:11,loc:e.loc,source:l,valueAlias:c,keyAlias:u,objectIndexAlias:f,parseResult:s,children:uo(t)?t.children:[t]};n.replaceNode(h),a.vFor++;const d=i&&i(h);return()=>{a.vFor--,d&&d()}}function fd(t,e){t.finalized||(t.finalized=!0)}function rc({value:t,key:e,index:n},i=[]){return GA([t,e,n,...i])}function GA(t){let e=t.length;for(;e--&&!t[e];);return t.slice(0,e+1).map((n,i)=>n||Ye("_".repeat(i+1),!1))}const rm=Ye("undefined",!1),zv=(t,e)=>{if(t.type===1&&(t.tagType===1||t.tagType===3)){const n=gn(t,"slot");if(n)return n.exp,e.scopes.vSlot++,()=>{e.scopes.vSlot--}}},WA=(t,e)=>{let n;if(uo(t)&&t.props.some(od)&&(n=gn(t,"for"))){const i=n.forParseResult;if(i){fd(i);const{value:s,key:r,index:o}=i,{addIdentifiers:a,removeIdentifiers:l}=e;return s&&a(s),r&&a(r),o&&a(o),()=>{s&&l(s),r&&l(r),o&&l(o)}}}},XA=(t,e,n,i)=>lr(t,n,!1,!0,n.length?n[0].loc:i);function Gv(t,e,n=XA){e.helper(Wc);const{children:i,loc:s}=t,r=[],o=[];let a=e.scopes.vSlot>0||e.scopes.vFor>0;const l=gn(t,"slot",!0);if(l){const{arg:_,exp:p}=l;_&&!vn(_)&&(a=!0),r.push(It(_||Ye("default",!0),n(p,void 0,i,s)))}let c=!1,u=!1;const f=[],h=new Set;let d=0;for(let _=0;_<i.length;_++){const p=i[_];let R;if(!uo(p)||!(R=gn(p,"slot",!0))){p.type!==3&&f.push(p);continue}if(l){e.onError(Mt(37,R.loc));break}c=!0;const{children:x,loc:M}=p,{arg:P=Ye("default",!0),exp:N,loc:T}=R;let A;vn(P)?A=P?P.content:"default":a=!0;const m=gn(p,"for"),v=n(N,m,x,M);let C,I;if(C=gn(p,"if"))a=!0,o.push(ic(C.exp,Qa(P,v,d++),rm));else if(I=gn(p,/^else(-if)?$/,!0)){let L=_,k;for(;L--&&(k=i[L],k.type===3););if(k&&uo(k)&&gn(k,/^(else-)?if$/)){let G=o[o.length-1];for(;G.alternate.type===19;)G=G.alternate;G.alternate=I.exp?ic(I.exp,Qa(P,v,d++),rm):Qa(P,v,d++)}else e.onError(Mt(30,I.loc))}else if(m){a=!0;const L=m.forParseResult;L?(fd(L),o.push(kt(e.helper(Vc),[L.source,lr(rc(L),Qa(P,v),!0)]))):e.onError(Mt(32,m.loc))}else{if(A){if(h.has(A)){e.onError(Mt(38,T));continue}h.add(A),A==="default"&&(u=!0)}r.push(It(P,v))}}if(!l){const _=(p,R)=>{const x=n(p,void 0,R,s);return e.compatConfig&&(x.isNonScopedSlot=!0),It("default",x)};c?f.length&&f.some(p=>Wv(p))&&(u?e.onError(Mt(39,f[0].loc)):r.push(_(void 0,f))):r.push(_(void 0,i))}const g=a?2:Dl(t.children)?3:1;let E=On(r.concat(It("_",Ye(g+"",!1))),s);return o.length&&(E=kt(e.helper(td),[E,vs(o)])),{slots:E,hasDynamicSlots:a}}function Qa(t,e,n){const i=[It("name",t),It("fn",e)];return n!=null&&i.push(It("key",Ye(String(n),!0))),On(i)}function Dl(t){for(let e=0;e<t.length;e++){const n=t[e];switch(n.type){case 1:if(n.tagType===2||Dl(n.children))return!0;break;case 9:if(Dl(n.branches))return!0;break;case 10:case 11:if(Dl(n.children))return!0;break}}return!1}function Wv(t){return t.type!==2&&t.type!==12?!0:t.type===2?!!t.content.trim():Wv(t.content)}const Xv=new WeakMap,$v=(t,e)=>function(){if(t=e.currentNode,!(t.type===1&&(t.tagType===0||t.tagType===1)))return;const{tag:i,props:s}=t,r=t.tagType===1;let o=r?qv(t,e):`"${i}"`;const a=ft(o)&&o.callee===Uc;let l,c,u=0,f,h,d,g=a||o===jr||o===Ic||!r&&(i==="svg"||i==="foreignObject"||i==="math");if(s.length>0){const E=hd(t,e,void 0,r,a);l=E.props,u=E.patchFlag,h=E.dynamicPropNames;const _=E.directives;d=_&&_.length?vs(_.map(p=>Yv(p,e))):void 0,E.shouldUseBlock&&(g=!0)}if(t.children.length>0)if(o===pa&&(g=!0,u|=1024),r&&o!==jr&&o!==pa){const{slots:_,hasDynamicSlots:p}=Gv(t,e);c=_,p&&(u|=1024)}else if(t.children.length===1&&o!==jr){const _=t.children[0],p=_.type,R=p===5||p===8;R&&Cn(_,e)===0&&(u|=1),R||p===2?c=_:c=t.children}else c=t.children;h&&h.length&&(f=qA(h)),t.codegenNode=lo(e,o,l,c,u===0?void 0:u,f,d,!!g,!1,r,t.loc)};function qv(t,e,n=!1){let{tag:i}=t;const s=Rf(i),r=Na(t,"is",!1,!0);if(r)if(s||nr("COMPILER_IS_ON_ELEMENT",e)){let a;if(r.type===6?a=r.value&&Ye(r.value.content,!0):(a=r.exp,a||(a=Ye("is",!1,r.arg.loc))),a)return kt(e.helper(Uc),[a])}else r.type===6&&r.value.content.startsWith("vue:")&&(i=r.value.content.slice(4));const o=sd(i)||e.isBuiltInComponent(i);return o?(n||e.helper(o),o):(e.helper(Oc),e.components.add(i),fo(i,"component"))}function hd(t,e,n=t.props,i,s,r=!1){const{tag:o,loc:a,children:l}=t;let c=[];const u=[],f=[],h=l.length>0;let d=!1,g=0,E=!1,_=!1,p=!1,R=!1,x=!1,M=!1;const P=[],N=v=>{c.length&&(u.push(On(om(c),a)),c=[]),v&&u.push(v)},T=()=>{e.scopes.vFor>0&&c.push(It(Ye("ref_for",!0),Ye("true")))},A=({key:v,value:C})=>{if(vn(v)){const I=v.content,L=As(I);if(L&&(!i||s)&&I.toLowerCase()!=="onclick"&&I!=="onUpdate:modelValue"&&!Bi(I)&&(R=!0),L&&Bi(I)&&(M=!0),L&&C.type===14&&(C=C.arguments[0]),C.type===20||(C.type===4||C.type===8)&&Cn(C,e)>0)return;I==="ref"?E=!0:I==="class"?_=!0:I==="style"?p=!0:I!=="key"&&!P.includes(I)&&P.push(I),i&&(I==="class"||I==="style")&&!P.includes(I)&&P.push(I)}else x=!0};for(let v=0;v<n.length;v++){const C=n[v];if(C.type===6){const{loc:I,name:L,nameLoc:k,value:G}=C;let O=!0;if(L==="ref"&&(E=!0,T()),L==="is"&&(Rf(o)||G&&G.content.startsWith("vue:")||nr("COMPILER_IS_ON_ELEMENT",e)))continue;c.push(It(Ye(L,!0,k),Ye(G?G.content:"",O,G?G.loc:I)))}else{const{name:I,arg:L,exp:k,loc:G,modifiers:O}=C,W=I==="bind",F=I==="on";if(I==="slot"){i||e.onError(Mt(40,G));continue}if(I==="once"||I==="memo"||I==="is"||W&&ps(L,"is")&&(Rf(o)||nr("COMPILER_IS_ON_ELEMENT",e))||F&&r)continue;if((W&&ps(L,"key")||F&&h&&ps(L,"vue:before-update"))&&(d=!0),W&&ps(L,"ref")&&T(),!L&&(W||F)){if(x=!0,k)if(W){if(T(),N(),nr("COMPILER_V_BIND_OBJECT_ORDER",e)){u.unshift(k);continue}u.push(k)}else N({type:14,loc:G,callee:e.helper(Gc),arguments:i?[k]:[k,"true"]});else e.onError(Mt(W?34:35,G));continue}W&&O.some(he=>he.content==="prop")&&(g|=32);const le=e.directiveTransforms[I];if(le){const{props:he,needRuntime:de}=le(C,t,e);!r&&he.forEach(A),F&&L&&!vn(L)?N(On(he,a)):c.push(...he),de&&(f.push(C),Sn(de)&&Xv.set(C,de))}else m_(I)||(f.push(C),h&&(d=!0))}}let m;if(u.length?(N(),u.length>1?m=kt(e.helper(ma),u,a):m=u[0]):c.length&&(m=On(om(c),a)),x?g|=16:(_&&!i&&(g|=2),p&&!i&&(g|=4),P.length&&(g|=8),R&&(g|=32)),!d&&(g===0||g===32)&&(E||M||f.length>0)&&(g|=512),!e.inSSR&&m)switch(m.type){case 15:let v=-1,C=-1,I=!1;for(let G=0;G<m.properties.length;G++){const O=m.properties[G].key;vn(O)?O.content==="class"?v=G:O.content==="style"&&(C=G):O.isHandlerKey||(I=!0)}const L=m.properties[v],k=m.properties[C];I?m=kt(e.helper(ao),[m]):(L&&!vn(L.value)&&(L.value=kt(e.helper(Hc),[L.value])),k&&(p||k.value.type===4&&k.value.content.trim()[0]==="["||k.value.type===17)&&(k.value=kt(e.helper(zc),[k.value])));break;case 14:break;default:m=kt(e.helper(ao),[kt(e.helper(Ro),[m])]);break}return{props:m,directives:f,patchFlag:g,dynamicPropNames:P,shouldUseBlock:d}}function om(t){const e=new Map,n=[];for(let i=0;i<t.length;i++){const s=t[i];if(s.key.type===8||!s.key.isStatic){n.push(s);continue}const r=s.key.content,o=e.get(r);o?(r==="style"||r==="class"||As(r))&&$A(o,s):(e.set(r,s),n.push(s))}return n}function $A(t,e){t.value.type===17?t.value.elements.push(e.value):t.value=vs([t.value,e.value],t.loc)}function Yv(t,e){const n=[],i=Xv.get(t);i?n.push(e.helperString(i)):(e.helper(Fc),e.directives.add(t.name),n.push(fo(t.name,"directive")));const{loc:s}=t;if(t.exp&&n.push(t.exp),t.arg&&(t.exp||n.push("void 0"),n.push(t.arg)),Object.keys(t.modifiers).length){t.arg||(t.exp||n.push("void 0"),n.push("void 0"));const r=Ye("true",!1,s);n.push(On(t.modifiers.map(o=>It(o,r)),s))}return vs(n,t.loc)}function qA(t){let e="[";for(let n=0,i=t.length;n<i;n++)e+=JSON.stringify(t[n]),n<i-1&&(e+=", ");return e+"]"}function Rf(t){return t==="component"||t==="Component"}const YA=(t,e)=>{if(ga(t)){const{children:n,loc:i}=t,{slotName:s,slotProps:r}=jv(t,e),o=[e.prefixIdentifiers?"_ctx.$slots":"$slots",s,"{}","undefined","true"];let a=2;r&&(o[2]=r,a=3),n.length&&(o[3]=lr([],n,!1,!1,i),a=4),e.scopeId&&!e.slotted&&(a=5),o.splice(a),t.codegenNode=kt(e.helper(ed),o,i)}};function jv(t,e){let n='"default"',i;const s=[];for(let r=0;r<t.props.length;r++){const o=t.props[r];if(o.type===6)o.value&&(o.name==="name"?n=JSON.stringify(o.value.content):(o.name=xt(o.name),s.push(o)));else if(o.name==="bind"&&ps(o.arg,"name")){if(o.exp)n=o.exp;else if(o.arg&&o.arg.type===4){const a=xt(o.arg.content);n=o.exp=Ye(a,!1,o.arg.loc)}}else o.name==="bind"&&o.arg&&vn(o.arg)&&(o.arg.content=xt(o.arg.content)),s.push(o)}if(s.length>0){const{props:r,directives:o}=hd(t,e,s,!1,!1);i=r,o.length&&e.onError(Mt(36,o[0].loc))}return{slotName:n,slotProps:i}}const dd=(t,e,n,i)=>{const{loc:s,modifiers:r,arg:o}=t;!t.exp&&!r.length&&n.onError(Mt(35,s));let a;if(o.type===4)if(o.isStatic){let f=o.content;f.startsWith("vue:")&&(f=`vnode-${f.slice(4)}`);const h=e.tagType!==0||f.startsWith("vnode")||!/[A-Z]/.test(f)?Zs(xt(f)):`on:${f}`;a=Ye(h,!0,o.loc)}else a=$n([`${n.helperString(nc)}(`,o,")"]);else a=o,a.children.unshift(`${n.helperString(nc)}(`),a.children.push(")");let l=t.exp;l&&!l.content.trim()&&(l=void 0);let c=n.cacheHandlers&&!l&&!n.inVOnce;if(l){const f=rd(l),h=!(f||gv(l)),d=l.content.includes(";");(h||c&&f)&&(l=$n([`${h?"$event":"(...args)"} => ${d?"{":"("}`,l,d?"}":")"]))}let u={props:[It(a,l||Ye("() => {}",!1,s))]};return i&&(u=i(u)),c&&(u.props[0].value=n.cache(u.props[0].value)),u.props.forEach(f=>f.key.isHandlerKey=!0),u},jA=(t,e)=>{if(t.type===0||t.type===1||t.type===11||t.type===10)return()=>{const n=t.children;let i,s=!1;for(let r=0;r<n.length;r++){const o=n[r];if(Cl(o)){s=!0;for(let a=r+1;a<n.length;a++){const l=n[a];if(Cl(l))i||(i=n[r]=$n([o],o.loc)),i.children.push(" + ",l),n.splice(a,1),a--;else{i=void 0;break}}}}if(!(!s||n.length===1&&(t.type===0||t.type===1&&t.tagType===0&&!t.props.find(r=>r.type===7&&!e.directiveTransforms[r.name])&&t.tag!=="template")))for(let r=0;r<n.length;r++){const o=n[r];if(Cl(o)||o.type===8){const a=[];(o.type!==2||o.content!==" ")&&a.push(o),!e.ssr&&Cn(o,e)===0&&a.push("1"),n[r]={type:12,content:o,loc:o.loc,codegenNode:kt(e.helper(Lc),a)}}}}},am=new WeakSet,KA=(t,e)=>{if(t.type===1&&gn(t,"once",!0))return am.has(t)||e.inVOnce||e.inSSR?void 0:(am.add(t),e.inVOnce=!0,e.helper(_a),()=>{e.inVOnce=!1;const n=e.currentNode;n.codegenNode&&(n.codegenNode=e.cache(n.codegenNode,!0,!0))})},pd=(t,e,n)=>{const{exp:i,arg:s}=t;if(!i)return n.onError(Mt(41,t.loc)),el();const r=i.loc.source.trim(),o=i.type===4?i.content:r,a=n.bindingMetadata[r];if(a==="props"||a==="props-aliased")return n.onError(Mt(44,i.loc)),el();if(!o.trim()||!rd(i)&&!!1)return n.onError(Mt(42,i.loc)),el();const c=s||Ye("modelValue",!0),u=s?vn(s)?`onUpdate:${xt(s.content)}`:$n(['"onUpdate:" + ',s]):"onUpdate:modelValue";let f;const h=n.isTS?"($event: any)":"$event";f=$n([`${h} => ((`,i,") = $event)"]);const d=[It(c,t.exp),It(u,f)];if(t.modifiers.length&&e.tagType===1){const g=t.modifiers.map(_=>_.content).map(_=>(Ia(_)?_:JSON.stringify(_))+": true").join(", "),E=s?vn(s)?`${s.content}Modifiers`:$n([s,' + "Modifiers"']):"modelModifiers";d.push(It(E,Ye(`{ ${g} }`,!1,t.loc,2)))}return el(d)};function el(t=[]){return{props:t}}const ZA=/[\w).+\-_$\]]/,JA=(t,e)=>{nr("COMPILER_FILTERS",e)&&(t.type===5?oc(t.content,e):t.type===1&&t.props.forEach(n=>{n.type===7&&n.name!=="for"&&n.exp&&oc(n.exp,e)}))};function oc(t,e){if(t.type===4)lm(t,e);else for(let n=0;n<t.children.length;n++){const i=t.children[n];typeof i=="object"&&(i.type===4?lm(i,e):i.type===8?oc(t,e):i.type===5&&oc(i.content,e))}}function lm(t,e){const n=t.content;let i=!1,s=!1,r=!1,o=!1,a=0,l=0,c=0,u=0,f,h,d,g,E=[];for(d=0;d<n.length;d++)if(h=f,f=n.charCodeAt(d),i)f===39&&h!==92&&(i=!1);else if(s)f===34&&h!==92&&(s=!1);else if(r)f===96&&h!==92&&(r=!1);else if(o)f===47&&h!==92&&(o=!1);else if(f===124&&n.charCodeAt(d+1)!==124&&n.charCodeAt(d-1)!==124&&!a&&!l&&!c)g===void 0?(u=d+1,g=n.slice(0,d).trim()):_();else{switch(f){case 34:s=!0;break;case 39:i=!0;break;case 96:r=!0;break;case 40:c++;break;case 41:c--;break;case 91:l++;break;case 93:l--;break;case 123:a++;break;case 125:a--;break}if(f===47){let p=d-1,R;for(;p>=0&&(R=n.charAt(p),R===" ");p--);(!R||!ZA.test(R))&&(o=!0)}}g===void 0?g=n.slice(0,d).trim():u!==0&&_();function _(){E.push(n.slice(u,d).trim()),u=d+1}if(E.length){for(d=0;d<E.length;d++)g=QA(g,E[d],e);t.content=g,t.ast=void 0}}function QA(t,e,n){n.helper(kc);const i=e.indexOf("(");if(i<0)return n.filters.add(e),`${fo(e,"filter")}(${t})`;{const s=e.slice(0,i),r=e.slice(i+1);return n.filters.add(s),`${fo(s,"filter")}(${t}${r!==")"?","+r:r}`}}const cm=new WeakSet,eR=(t,e)=>{if(t.type===1){const n=gn(t,"memo");return!n||cm.has(t)?void 0:(cm.add(t),()=>{const i=t.codegenNode||e.currentNode.codegenNode;i&&i.type===13&&(t.tagType!==1&&$c(i,e),t.codegenNode=kt(e.helper(Xc),[n.exp,lr(void 0,i),"_cache",String(e.cached.length)]),e.cached.push(null))})}};function Kv(t){return[[KA,VA,eR,zA,JA,YA,$v,zv,jA],{on:dd,bind:Bv,model:pd}]}function Zv(t,e={}){const n=e.onError||id,i=e.mode==="module";e.prefixIdentifiers===!0?n(Mt(47)):i&&n(Mt(48));const s=!1;e.cacheHandlers&&n(Mt(49)),e.scopeId&&!i&&n(Mt(50));const r=nt({},e,{prefixIdentifiers:s}),o=Xe(t)?ld(t,r):t,[a,l]=Kv();return Nv(o,nt({},r,{nodeTransforms:[...a,...e.nodeTransforms||[]],directiveTransforms:nt({},l,e.directiveTransforms||{})})),Lv(o,r)}const tR={DATA:"data",PROPS:"props",PROPS_ALIASED:"props-aliased",SETUP_LET:"setup-let",SETUP_CONST:"setup-const",SETUP_REACTIVE_CONST:"setup-reactive-const",SETUP_MAYBE_REF:"setup-maybe-ref",SETUP_REF:"setup-ref",OPTIONS:"options",LITERAL_CONST:"literal-const"},Jv=()=>({props:[]});/**
* @vue/compiler-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const md=Symbol(""),_d=Symbol(""),gd=Symbol(""),vd=Symbol(""),ac=Symbol(""),Ed=Symbol(""),Sd=Symbol(""),xd=Symbol(""),yd=Symbol(""),Md=Symbol("");ov({[md]:"vModelRadio",[_d]:"vModelCheckbox",[gd]:"vModelText",[vd]:"vModelSelect",[ac]:"vModelDynamic",[Ed]:"withModifiers",[Sd]:"withKeys",[xd]:"vShow",[yd]:"Transition",[Md]:"TransitionGroup"});let Mr;function nR(t,e=!1){return Mr||(Mr=document.createElement("div")),e?(Mr.innerHTML=`<div foo="${t.replace(/"/g,"&quot;")}">`,Mr.children[0].getAttribute("foo")):(Mr.innerHTML=t,Mr.textContent)}const Td={parseMode:"html",isVoidTag:x_,isNativeTag:t=>v_(t)||E_(t)||S_(t),isPreTag:t=>t==="pre",isIgnoreNewlineTag:t=>t==="pre"||t==="textarea",decodeEntities:nR,isBuiltInComponent:t=>{if(t==="Transition"||t==="transition")return yd;if(t==="TransitionGroup"||t==="transition-group")return Md},getNamespace(t,e,n){let i=e?e.ns:n;if(e&&i===2)if(e.tag==="annotation-xml"){if(t==="svg")return 1;e.props.some(s=>s.type===6&&s.name==="encoding"&&s.value!=null&&(s.value.content==="text/html"||s.value.content==="application/xhtml+xml"))&&(i=0)}else/^m(?:[ions]|text)$/.test(e.tag)&&t!=="mglyph"&&t!=="malignmark"&&(i=0);else e&&i===1&&(e.tag==="foreignObject"||e.tag==="desc"||e.tag==="title")&&(i=0);if(i===0){if(t==="svg")return 1;if(t==="math")return 2}return i}},Qv=t=>{t.type===1&&t.props.forEach((e,n)=>{e.type===6&&e.name==="style"&&e.value&&(t.props[n]={type:7,name:"bind",arg:Ye("style",!0,e.loc),exp:iR(e.value.content,e.loc),modifiers:[],loc:e.loc})})},iR=(t,e)=>{const n=gh(t);return Ye(JSON.stringify(n),!1,e,3)};function Hi(t,e){return Mt(t,e)}const sR={X_V_HTML_NO_EXPRESSION:53,53:"X_V_HTML_NO_EXPRESSION",X_V_HTML_WITH_CHILDREN:54,54:"X_V_HTML_WITH_CHILDREN",X_V_TEXT_NO_EXPRESSION:55,55:"X_V_TEXT_NO_EXPRESSION",X_V_TEXT_WITH_CHILDREN:56,56:"X_V_TEXT_WITH_CHILDREN",X_V_MODEL_ON_INVALID_ELEMENT:57,57:"X_V_MODEL_ON_INVALID_ELEMENT",X_V_MODEL_ARG_ON_ELEMENT:58,58:"X_V_MODEL_ARG_ON_ELEMENT",X_V_MODEL_ON_FILE_INPUT_ELEMENT:59,59:"X_V_MODEL_ON_FILE_INPUT_ELEMENT",X_V_MODEL_UNNECESSARY_VALUE:60,60:"X_V_MODEL_UNNECESSARY_VALUE",X_V_SHOW_NO_EXPRESSION:61,61:"X_V_SHOW_NO_EXPRESSION",X_TRANSITION_INVALID_CHILDREN:62,62:"X_TRANSITION_INVALID_CHILDREN",X_IGNORED_SIDE_EFFECT_TAG:63,63:"X_IGNORED_SIDE_EFFECT_TAG",__EXTEND_POINT__:64,64:"__EXTEND_POINT__"},rR={53:"v-html is missing expression.",54:"v-html will override element children.",55:"v-text is missing expression.",56:"v-text will override element children.",57:"v-model can only be used on <input>, <textarea> and <select> elements.",58:"v-model argument is not supported on plain elements.",59:"v-model cannot be used on file inputs since they are read-only. Use a v-on:change listener instead.",60:"Unnecessary value binding used alongside v-model. It will interfere with v-model's behavior.",61:"v-show is missing expression.",62:"<Transition> expects exactly one child element or component.",63:"Tags with side effect (<script> and <style>) are ignored in client component templates."},oR=(t,e,n)=>{const{exp:i,loc:s}=t;return i||n.onError(Hi(53,s)),e.children.length&&(n.onError(Hi(54,s)),e.children.length=0),{props:[It(Ye("innerHTML",!0,s),i||Ye("",!0))]}},aR=(t,e,n)=>{const{exp:i,loc:s}=t;return i||n.onError(Hi(55,s)),e.children.length&&(n.onError(Hi(56,s)),e.children.length=0),{props:[It(Ye("textContent",!0),i?Cn(i,n)>0?i:kt(n.helperString(Pa),[i],s):Ye("",!0))]}},lR=(t,e,n)=>{const i=pd(t,e,n);if(!i.props.length||e.tagType===1)return i;t.arg&&n.onError(Hi(58,t.arg.loc));const{tag:s}=e,r=n.isCustomElement(s);if(s==="input"||s==="textarea"||s==="select"||r){let o=gd,a=!1;if(s==="input"||r){const l=Na(e,"type");if(l){if(l.type===7)o=ac;else if(l.value)switch(l.value.content){case"radio":o=md;break;case"checkbox":o=_d;break;case"file":a=!0,n.onError(Hi(59,t.loc));break}}else Ev(e)&&(o=ac)}else s==="select"&&(o=vd);a||(i.needRuntime=n.helper(o))}else n.onError(Hi(57,t.loc));return i.props=i.props.filter(o=>!(o.key.type===4&&o.key.content==="modelValue")),i},cR=Kt("passive,once,capture"),uR=Kt("stop,prevent,self,ctrl,shift,alt,meta,exact,middle"),fR=Kt("left,right"),eE=Kt("onkeyup,onkeydown,onkeypress"),hR=(t,e,n,i)=>{const s=[],r=[],o=[];for(let a=0;a<e.length;a++){const l=e[a].content;l==="native"&&co("COMPILER_V_ON_NATIVE",n)||cR(l)?o.push(l):fR(l)?vn(t)?eE(t.content.toLowerCase())?s.push(l):r.push(l):(s.push(l),r.push(l)):uR(l)?r.push(l):s.push(l)}return{keyModifiers:s,nonKeyModifiers:r,eventOptionModifiers:o}},um=(t,e)=>vn(t)&&t.content.toLowerCase()==="onclick"?Ye(e,!0):t.type!==4?$n(["(",t,`) === "onClick" ? "${e}" : (`,t,")"]):t,dR=(t,e,n)=>dd(t,e,n,i=>{const{modifiers:s}=t;if(!s.length)return i;let{key:r,value:o}=i.props[0];const{keyModifiers:a,nonKeyModifiers:l,eventOptionModifiers:c}=hR(r,s,n,t.loc);if(l.includes("right")&&(r=um(r,"onContextmenu")),l.includes("middle")&&(r=um(r,"onMouseup")),l.length&&(o=kt(n.helper(Ed),[o,JSON.stringify(l)])),a.length&&(!vn(r)||eE(r.content.toLowerCase()))&&(o=kt(n.helper(Sd),[o,JSON.stringify(a)])),c.length){const u=c.map(Cs).join("");r=vn(r)?Ye(`${r.content}${u}`,!0):$n(["(",r,`) + "${u}"`])}return{props:[It(r,o)]}}),pR=(t,e,n)=>{const{exp:i,loc:s}=t;return i||n.onError(Hi(61,s)),{props:[],needRuntime:n.helper(xd)}},mR=(t,e)=>{t.type===1&&t.tagType===0&&(t.tag==="script"||t.tag==="style")&&e.removeNode()},tE=[Qv],nE={cloak:Jv,html:oR,text:aR,model:lR,on:dR,show:pR};function _R(t,e={}){return Zv(t,nt({},Td,e,{nodeTransforms:[mR,...tE,...e.nodeTransforms||[]],directiveTransforms:nt({},nE,e.directiveTransforms||{}),transformHoist:null}))}function gR(t,e={}){return ld(t,nt({},Td,e))}const vR=Object.freeze(Object.defineProperty({__proto__:null,BASE_TRANSITION:Kh,BindingTypes:tR,CAMELIZE:tc,CAPITALIZE:tv,CREATE_BLOCK:Zh,CREATE_COMMENT:Ao,CREATE_ELEMENT_BLOCK:Jh,CREATE_ELEMENT_VNODE:Dc,CREATE_SLOTS:td,CREATE_STATIC:Qh,CREATE_TEXT:Lc,CREATE_VNODE:Nc,CompilerDeprecationTypes:F1,ConstantTypes:w1,DOMDirectiveTransforms:nE,DOMErrorCodes:sR,DOMErrorMessages:rR,DOMNodeTransforms:tE,ElementTypes:C1,ErrorCodes:V1,FRAGMENT:oo,GUARD_REACTIVE_PROPS:Ro,IS_MEMO_SAME:nd,IS_REF:rv,KEEP_ALIVE:pa,MERGE_PROPS:ma,NORMALIZE_CLASS:Hc,NORMALIZE_PROPS:ao,NORMALIZE_STYLE:zc,Namespaces:A1,NodeTypes:R1,OPEN_BLOCK:Ms,POP_SCOPE_ID:iv,PUSH_SCOPE_ID:nv,RENDER_LIST:Vc,RENDER_SLOT:ed,RESOLVE_COMPONENT:Oc,RESOLVE_DIRECTIVE:Fc,RESOLVE_DYNAMIC_COMPONENT:Uc,RESOLVE_FILTER:kc,SET_BLOCK_TRACKING:_a,SUSPENSE:Ic,TELEPORT:jr,TO_DISPLAY_STRING:Pa,TO_HANDLERS:Gc,TO_HANDLER_KEY:nc,TRANSITION:yd,TRANSITION_GROUP:Md,TS_NODE_TYPES:hv,UNREF:sv,V_MODEL_CHECKBOX:_d,V_MODEL_DYNAMIC:ac,V_MODEL_RADIO:md,V_MODEL_SELECT:vd,V_MODEL_TEXT:gd,V_ON_WITH_KEYS:Sd,V_ON_WITH_MODIFIERS:Ed,V_SHOW:xd,WITH_CTX:Wc,WITH_DIRECTIVES:Bc,WITH_MEMO:Xc,advancePositionWithClone:rA,advancePositionWithMutation:vv,assert:oA,baseCompile:Zv,baseParse:ld,buildDirectiveArgs:Yv,buildProps:hd,buildSlots:Gv,checkCompatEnabled:co,compile:_R,convertToBlock:$c,createArrayExpression:vs,createAssignmentExpression:D1,createBlockStatement:cv,createCacheExpression:lv,createCallExpression:kt,createCompilerError:Mt,createCompoundExpression:$n,createConditionalExpression:ic,createDOMCompilerError:Hi,createForLoopParams:rc,createFunctionExpression:lr,createIfStatement:N1,createInterpolation:P1,createObjectExpression:On,createObjectProperty:It,createReturnStatement:O1,createRoot:av,createSequenceExpression:L1,createSimpleExpression:Ye,createStructuralDirectiveTransform:cd,createTemplateLiteral:I1,createTransformContext:Iv,createVNodeCall:lo,errorMessages:H1,extractIdentifiers:Oi,findDir:gn,findProp:Na,forAliasRE:yv,generate:Lv,generateCodeFrame:__,getBaseTransformPreset:Kv,getConstantType:Cn,getMemoedVNodeCall:xv,getVNodeBlockHelper:ur,getVNodeHelper:cr,hasDynamicKeyVBind:Ev,hasScopeRef:ti,helperNameMap:ar,injectProp:va,isCoreComponent:sd,isFnExpression:gv,isFnExpressionBrowser:_v,isFnExpressionNode:sA,isFunctionType:K1,isInDestructureAssignment:W1,isInNewExpression:X1,isMemberExpression:rd,isMemberExpressionBrowser:mv,isMemberExpressionNode:nA,isReferencedIdentifier:G1,isSimpleIdentifier:Ia,isSlotOutlet:ga,isStaticArgOf:ps,isStaticExp:vn,isStaticProperty:fv,isStaticPropertyKey:Z1,isTemplateNode:uo,isText:Cl,isVSlot:od,locStub:qt,noopDirectiveTransform:Jv,parse:gR,parserOptions:Td,processExpression:Nl,processFor:Hv,processIf:kv,processSlotOutlet:jv,registerRuntimeHelpers:ov,resolveComponentType:qv,stringifyExpression:Fv,toValidAssetId:fo,trackSlotScopes:zv,trackVForSlotScopes:WA,transform:Nv,transformBind:Bv,transformElement:$v,transformExpression:BA,transformModel:pd,transformOn:dd,transformStyle:Qv,traverseNode:Da,unwrapTSNode:dv,walkBlockDeclarations:q1,walkFunctionParams:$1,walkIdentifiers:z1,warnDeprecation:B1},Symbol.toStringTag,{value:"Module"})),ER=jh(vR),SR=jh(qM),xR=jh(wS);/**
* vue v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/var fm;function yR(){return fm||(fm=1,function(t){Object.defineProperty(t,"__esModule",{value:!0});var e=ER,n=SR,i=xR;function s(l){var c=Object.create(null);if(l)for(var u in l)c[u]=l[u];return c.default=l,Object.freeze(c)}var r=s(n);const o=Object.create(null);function a(l,c){if(!i.isString(l))if(l.nodeType)l=l.innerHTML;else return i.NOOP;const u=i.genCacheKey(l,c),f=o[u];if(f)return f;if(l[0]==="#"){const E=document.querySelector(l);l=E?E.innerHTML:""}const h=i.extend({hoistStatic:!0,onError:void 0,onWarn:i.NOOP},c);!h.isCustomElement&&typeof customElements<"u"&&(h.isCustomElement=E=>!!customElements.get(E));const{code:d}=e.compile(l,h),g=new Function("Vue",d)(r);return g._rc=!0,o[u]=g}n.registerRuntimeCompiler(a),t.compile=a,Object.keys(n).forEach(function(l){l!=="default"&&!Object.prototype.hasOwnProperty.call(t,l)&&(t[l]=n[l])})}(Su)),Su}var hm;function MR(){return hm||(hm=1,Eu.exports=yR()),Eu.exports}var dm;function TR(){if(dm)return Za;dm=1,Object.defineProperty(Za,"__esModule",{value:!0});var t=MR(),e=function(){return e=Object.assign||function(T){for(var A,m=1,v=arguments.length;m<v;m++)for(var C in A=arguments[m])Object.prototype.hasOwnProperty.call(A,C)&&(T[C]=A[C]);return T},e.apply(this,arguments)};function n(T,A,m){for(var v,C=0,I=A.length;C<I;C++)!v&&C in A||(v||(v=Array.prototype.slice.call(A,0,C)),v[C]=A[C]);return T.concat(v||Array.prototype.slice.call(A))}function i(T){return Array.prototype.slice.call(T)}function s(T,A){var m=Math.floor(T);return m===A||m+1===A?T:A}function r(){return Date.now()}function o(T,A,m){if(A="data-keen-slider-"+A,m===null)return T.removeAttribute(A);T.setAttribute(A,m||"")}function a(T,A){return A=A||document,typeof T=="function"&&(T=T(A)),Array.isArray(T)?T:typeof T=="string"?i(A.querySelectorAll(T)):T instanceof HTMLElement?[T]:T instanceof NodeList?i(T):[]}function l(T){T.raw&&(T=T.raw),T.cancelable&&!T.defaultPrevented&&T.preventDefault()}function c(T){T.raw&&(T=T.raw),T.stopPropagation&&T.stopPropagation()}function u(){var T=[];return{add:function(A,m,v,C){A.addListener?A.addListener(v):A.addEventListener(m,v,C),T.push([A,m,v,C])},input:function(A,m,v,C){this.add(A,m,function(I){return function(L){L.nativeEvent&&(L=L.nativeEvent);var k=L.changedTouches||[],G=L.targetTouches||[],O=L.detail&&L.detail.x?L.detail:null;return I({id:O?O.identifier?O.identifier:"i":G[0]?G[0]?G[0].identifier:"e":"d",idChanged:O?O.identifier?O.identifier:"i":k[0]?k[0]?k[0].identifier:"e":"d",raw:L,x:O&&O.x?O.x:G[0]?G[0].screenX:O?O.x:L.pageX,y:O&&O.y?O.y:G[0]?G[0].screenY:O?O.y:L.pageY})}}(v),C)},purge:function(){T.forEach(function(A){A[0].removeListener?A[0].removeListener(A[2]):A[0].removeEventListener(A[1],A[2],A[3])}),T=[]}}}function f(T,A,m){return Math.min(Math.max(T,A),m)}function h(T){return(T>0?1:0)-(T<0?1:0)||+T}function d(T){var A=T.getBoundingClientRect();return{height:s(A.height,T.offsetHeight),width:s(A.width,T.offsetWidth)}}function g(T,A,m,v){var C=T&&T[A];return C==null?m:v&&typeof C=="function"?C():C}function E(T){return Math.round(1e6*T)/1e6}function _(T){var A,m,v,C,I,L;function k(le){L||(L=le),G(!0);var he=le-L;he>v&&(he=v);var de=C[m];if(de[3]<he)return m++,k(le);var ye=de[2],Le=de[4],ee=de[0],ae=de[1]*(0,de[5])(Le===0?1:(he-ye)/Le);if(ae&&T.track.to(ee+ae),he<v)return W();L=null,G(!1),O(null),T.emit("animationEnded")}function G(le){A.active=le}function O(le){A.targetIdx=le}function W(){var le;le=k,I=window.requestAnimationFrame(le)}function F(){var le;le=I,window.cancelAnimationFrame(le),G(!1),O(null),L&&T.emit("animationStopped"),L=null}return A={active:!1,start:function(le){if(F(),T.track.details){var he=0,de=T.track.details.position;m=0,v=0,C=le.map(function(ye){var Le,ee=Number(de),ae=(Le=ye.earlyExit)!==null&&Le!==void 0?Le:ye.duration,fe=ye.easing,B=ye.distance*fe(ae/ye.duration)||0;de+=B;var ie=v;return v+=ae,he+=B,[ee,ye.distance,ie,v,ye.duration,fe]}),O(T.track.distToIdx(he)),W(),T.emit("animationStarted")}},stop:F,targetIdx:null}}function p(T){var A,m,v,C,I,L,k,G,O,W,F,le,he,de,ye=1/0,Le=[],ee=null,ae=0;function fe(H){K(ae+H)}function B(H){var z=ie(ae+H).abs;return Ee(z)?z:null}function ie(H){var z=Math.floor(Math.abs(E(H/m))),Z=E((H%m+m)%m);Z===m&&(Z=0);var q=h(H),b=k.indexOf(n([],k).reduce(function(U,V){return Math.abs(V-Z)<Math.abs(U-Z)?V:U})),S=b;return q<0&&z++,b===L&&(S=0,z+=q>0?1:-1),{abs:S+z*L*q,origin:b,rel:S}}function se(H,z,Z){var q;if(z||!D())return te(H,Z);if(!Ee(H))return null;var b=ie(Z??ae),S=b.abs,U=H-b.rel,V=S+U;q=te(V);var j=te(V-L*h(U));return(j!==null&&Math.abs(j)<Math.abs(q)||q===null)&&(q=j),E(q)}function te(H,z){if(z==null&&(z=E(ae)),!Ee(H)||H===null)return null;H=Math.round(H);var Z=ie(z),q=Z.abs,b=Z.rel,S=Z.origin,U=y(H),V=(z%m+m)%m,j=k[S],Q=Math.floor((H-(q-b))/L)*m;return E(j-V-j+k[U]+Q+(S===L?m:0))}function Ee(H){return Me(H)===H}function Me(H){return f(H,O,W)}function D(){return C.loop}function y(H){return(H%L+L)%L}function K(H){var z;z=H-ae,Le.push({distance:z,timestamp:r()}),Le.length>6&&(Le=Le.slice(-6)),ae=E(H);var Z=$().abs;if(Z!==ee){var q=ee!==null;ee=Z,q&&T.emit("slideChanged")}}function $(H){var z=H?null:function(){if(L){var Z=D(),q=Z?(ae%m+m)%m:ae,b=(Z?ae%m:ae)-I[0][2],S=0-(b<0&&Z?m-Math.abs(b):b),U=0,V=ie(ae),j=V.abs,Q=V.rel,Se=I[Q][2],ve=I.map(function(_e,We){var ue=S+U;(ue<0-_e[0]||ue>1)&&(ue+=(Math.abs(ue)>m-1&&Z?m:0)*h(-ue));var Te=We-Q,Oe=h(Te),ke=Te+j;Z&&(Oe===-1&&ue>Se&&(ke+=L),Oe===1&&ue<Se&&(ke-=L),F!==null&&ke<F&&(ue+=m),le!==null&&ke>le&&(ue-=m));var Ne=ue+_e[0]+_e[1],Ge=Math.max(ue>=0&&Ne<=1?1:Ne<0||ue>1?0:ue<0?Math.min(1,(_e[0]+ue)/_e[0]):(1-ue)/_e[0],0);return U+=_e[0]+_e[1],{abs:ke,distance:C.rtl?-1*ue+1-_e[0]:ue,portion:Ge,size:_e[0]}});return j=Me(j),Q=y(j),{abs:Me(j),length:v,max:de,maxIdx:W,min:he,minIdx:O,position:ae,progress:Z?q/m:ae/v,rel:Q,slides:ve,slidesLength:m}}}();return A.details=z,T.emit("detailsChanged"),z}return A={absToRel:y,add:fe,details:null,distToIdx:B,idxToDist:se,init:function(H){if(function(){if(C=T.options,I=(C.trackConfig||[]).map(function(b){return[g(b,"size",1),g(b,"spacing",0),g(b,"origin",0)]}),L=I.length){m=E(I.reduce(function(b,S){return b+S[0]+S[1]},0));var Z,q=L-1;v=E(m+I[0][2]-I[q][0]-I[q][2]-I[q][1]),k=I.reduce(function(b,S){if(!b)return[0];var U=I[b.length-1],V=b[b.length-1]+(U[0]+U[2])+U[1];return V-=S[2],b[b.length-1]>V&&(V=b[b.length-1]),V=E(V),b.push(V),(!Z||Z<V)&&(G=b.length-1),Z=V,b},null),v===0&&(G=0),k.push(E(m))}}(),!L)return $(!0);var z;(function(){var Z=T.options.range,q=T.options.loop;F=O=q?g(q,"min",-1/0):0,le=W=q?g(q,"max",ye):G;var b=g(Z,"min",null),S=g(Z,"max",null);b!==null&&(O=b),S!==null&&(W=S),he=O===-1/0?O:T.track.idxToDist(O||0,!0,0),de=W===ye?W:se(W,!0,0),S===null&&(le=W),g(Z,"align",!1)&&W!==ye&&I[y(W)][2]===0&&(de-=1-I[y(W)][0],W=B(de-ae)),he=E(he),de=E(de)})(),z=H,Number(z)===z?fe(te(Me(H))):$()},to:K,velocity:function(){var H=r(),z=Le.reduce(function(Z,q){var b=q.distance,S=q.timestamp;return H-S>200||(h(b)!==h(Z.distance)&&Z.distance&&(Z={distance:0,lastTimestamp:0,time:0}),Z.time&&(Z.distance+=b),Z.lastTimestamp&&(Z.time+=S-Z.lastTimestamp),Z.lastTimestamp=S),Z},{distance:0,lastTimestamp:0,time:0});return z.distance/z.time||0}}}function R(T){var A,m,v,C,I,L,k,G;function O(ee){return 2*ee}function W(ee){return f(ee,k,G)}function F(ee){return 1-Math.pow(1-ee,3)}function le(){return v?T.track.velocity():0}function he(){Le();var ee=T.options.mode==="free-snap",ae=T.track,fe=le();C=h(fe);var B=T.track.details,ie=[];if(fe||!ee){var se=de(fe),te=se.dist,Ee=se.dur;if(Ee=O(Ee),te*=C,ee){var Me=ae.idxToDist(ae.distToIdx(te),!0);Me&&(te=Me)}ie.push({distance:te,duration:Ee,easing:F});var D=B.position,y=D+te;if(y<I||y>L){var K=y<I?I-D:L-D,$=0,H=fe;if(h(K)===C){var z=Math.min(Math.abs(K)/Math.abs(te),1),Z=function(S){return 1-Math.pow(1-S,1/3)}(z)*Ee;ie[0].earlyExit=Z,H=fe*(1-z)}else ie[0].earlyExit=0,$+=K;var q=de(H,100),b=q.dist*C;T.options.rubberband&&(ie.push({distance:b,duration:O(q.dur),easing:F}),ie.push({distance:-b+$,duration:500,easing:F}))}T.animator.start(ie)}else T.moveToIdx(W(B.abs),!0,{duration:500,easing:function(S){return 1+--S*S*S*S*S}})}function de(ee,ae){ae===void 0&&(ae=1e3);var fe=147e-9+(ee=Math.abs(ee))/ae;return{dist:Math.pow(ee,2)/fe,dur:ee/fe}}function ye(){var ee=T.track.details;ee&&(I=ee.min,L=ee.max,k=ee.minIdx,G=ee.maxIdx)}function Le(){T.animator.stop()}T.on("updated",ye),T.on("optionsChanged",ye),T.on("created",ye),T.on("dragStarted",function(){v=!1,Le(),A=m=T.track.details.abs}),T.on("dragChecked",function(){v=!0}),T.on("dragEnded",function(){var ee=T.options.mode;ee==="snap"&&function(){var ae=T.track,fe=T.track.details,B=fe.position,ie=h(le());(B>L||B<I)&&(ie=0);var se=A+ie;fe.slides[ae.absToRel(se)].portion===0&&(se-=ie),A!==m&&(se=m),h(ae.idxToDist(se,!0))!==ie&&(se+=ie),se=W(se);var te=ae.idxToDist(se,!0);T.animator.start([{distance:te,duration:500,easing:function(Ee){return 1+--Ee*Ee*Ee*Ee*Ee}}])}(),ee!=="free"&&ee!=="free-snap"||he()}),T.on("dragged",function(){m=T.track.details.abs})}function x(T){var A,m,v,C,I,L,k,G,O,W,F,le,he,de,ye,Le,ee,ae,fe=u();function B($){if(L&&G===$.id){var H=Ee($);if(O){if(!te($))return se($);W=H,O=!1,T.emit("dragChecked")}if(Le)return W=H;l($);var z=function(q){if(ee===-1/0&&ae===1/0)return q;var b=T.track.details,S=b.length,U=b.position,V=f(q,ee-U,ae-U);if(S===0)return 0;if(!T.options.rubberband)return V;if(U<=ae&&U>=ee||U<ee&&m>0||U>ae&&m<0)return q;var j=(U<ee?U-ee:U-ae)/S,Q=C*S,Se=Math.abs(j*Q),ve=Math.max(0,1-Se/I*2);return ve*ve*q}(k(W-H)/C*v);m=h(z);var Z=T.track.details.position;(Z>ee&&Z<ae||Z===ee&&m>0||Z===ae&&m<0)&&c($),F+=z,!le&&Math.abs(F*C)>5&&(le=!0),T.track.add(z),W=H,T.emit("dragged")}}function ie($){!L&&T.track.details&&T.track.details.length&&(F=0,L=!0,le=!1,O=!0,G=$.id,te($),W=Ee($),T.emit("dragStarted"))}function se($){L&&G===$.idChanged&&(L=!1,T.emit("dragEnded"))}function te($){var H=Me(),z=H?$.y:$.x,Z=H?$.x:$.y,q=he!==void 0&&de!==void 0&&Math.abs(de-Z)<=Math.abs(he-z);return he=z,de=Z,q}function Ee($){return Me()?$.y:$.x}function Me(){return T.options.vertical}function D(){C=T.size,I=Me()?window.innerHeight:window.innerWidth;var $=T.track.details;$&&(ee=$.min,ae=$.max)}function y($){le&&(c($),l($))}function K(){if(fe.purge(),T.options.drag&&!T.options.disabled){var $;$=T.options.dragSpeed||1,k=typeof $=="function"?$:function(z){return z*$},v=T.options.rtl?-1:1,D(),A=T.container,function(){var z="data-keen-slider-clickable";a("[".concat(z,"]:not([").concat(z,"=false])"),A).map(function(Z){fe.add(Z,"dragstart",c),fe.add(Z,"mousedown",c),fe.add(Z,"touchstart",c)})}(),fe.add(A,"dragstart",function(z){l(z)}),fe.add(A,"click",y,{capture:!0}),fe.input(A,"ksDragStart",ie),fe.input(A,"ksDrag",B),fe.input(A,"ksDragEnd",se),fe.input(A,"mousedown",ie),fe.input(A,"mousemove",B),fe.input(A,"mouseleave",se),fe.input(A,"mouseup",se),fe.input(A,"touchstart",ie,{passive:!0}),fe.input(A,"touchmove",B,{passive:!1}),fe.input(A,"touchend",se),fe.input(A,"touchcancel",se),fe.add(window,"wheel",function(z){L&&l(z)});var H="data-keen-slider-scrollable";a("[".concat(H,"]:not([").concat(H,"=false])"),T.container).map(function(z){return function(Z){var q;fe.input(Z,"touchstart",function(b){q=Ee(b),Le=!0,ye=!0},{passive:!0}),fe.input(Z,"touchmove",function(b){var S=Me(),U=S?Z.scrollHeight-Z.clientHeight:Z.scrollWidth-Z.clientWidth,V=q-Ee(b),j=S?Z.scrollTop:Z.scrollLeft,Q=S&&Z.style.overflowY==="scroll"||!S&&Z.style.overflowX==="scroll";if(q=Ee(b),(V<0&&j>0||V>0&&j<U)&&ye&&Q)return Le=!0;ye=!1,l(b),Le=!1}),fe.input(Z,"touchend",function(){Le=!1})}(z)})}}T.on("updated",D),T.on("optionsChanged",K),T.on("created",K),T.on("destroyed",fe.purge)}function M(T){var A,m,v=null;function C(he,de,ye){T.animator.active?L(he,de,ye):requestAnimationFrame(function(){return L(he,de,ye)})}function I(){C(!1,!1,m)}function L(he,de,ye){var Le=0,ee=T.size,ae=T.track.details;if(ae&&A){var fe=ae.slides;A.forEach(function(B,ie){if(he)!v&&de&&G(B,null,ye),O(B,null,ye);else{if(!fe[ie])return;var se=fe[ie].size*ee;!v&&de&&G(B,se,ye),O(B,fe[ie].distance*ee-Le,ye),Le+=se}})}}function k(he){return T.options.renderMode==="performance"?Math.round(he):he}function G(he,de,ye){var Le=ye?"height":"width";de!==null&&(de=k(de)+"px"),he.style["min-"+Le]=de,he.style["max-"+Le]=de}function O(he,de,ye){if(de!==null){de=k(de);var Le=ye?de:0;de="translate3d(".concat(ye?0:de,"px, ").concat(Le,"px, 0)")}he.style.transform=de,he.style["-webkit-transform"]=de}function W(){A&&(L(!0,!0,m),A=null),T.on("detailsChanged",I,!0)}function F(){C(!1,!0,m)}function le(){W(),m=T.options.vertical,T.options.disabled||T.options.renderMode==="custom"||(v=g(T.options.slides,"perView",null)==="auto",T.on("detailsChanged",I),(A=T.slides).length&&F())}T.on("created",le),T.on("optionsChanged",le),T.on("beforeOptionsChanged",function(){W()}),T.on("updated",F),T.on("destroyed",W)}function P(T,A){return function(m){var v,C,I,L,k,G=u();function O(te){var Ee;o(m.container,"reverse",(Ee=m.container,window.getComputedStyle(Ee,null).getPropertyValue("direction")!=="rtl"||te?null:"")),o(m.container,"v",m.options.vertical&&!te?"":null),o(m.container,"disabled",m.options.disabled&&!te?"":null)}function W(){F()&&Le()}function F(){var te=null;if(L.forEach(function(Me){Me.matches&&(te=Me.__media)}),te===v)return!1;v||m.emit("beforeOptionsChanged"),v=te;var Ee=te?I.breakpoints[te]:I;return m.options=e(e({},I),Ee),O(),ie(),se(),ae(),!0}function le(te){var Ee=d(te);return(m.options.vertical?Ee.height:Ee.width)/m.size||1}function he(){return m.options.trackConfig.length}function de(te){for(var Ee in v=!1,I=e(e({},A),te),G.purge(),C=m.size,L=[],I.breakpoints||[]){var Me=window.matchMedia(Ee);Me.__media=Ee,L.push(Me),G.add(Me,"change",W)}G.add(window,"orientationchange",B),G.add(window,"resize",fe),F()}function ye(te){m.animator.stop();var Ee=m.track.details;m.track.init(te??(Ee?Ee.abs:0))}function Le(te){ye(te),m.emit("optionsChanged")}function ee(te,Ee){if(te)return de(te),void Le(Ee);ie(),se();var Me=he();ae(),he()!==Me?Le(Ee):ye(Ee),m.emit("updated")}function ae(){var te=m.options.slides;if(typeof te=="function")return m.options.trackConfig=te(m.size,m.slides);for(var Ee=m.slides,Me=Ee.length,D=typeof te=="number"?te:g(te,"number",Me,!0),y=[],K=g(te,"perView",1,!0),$=g(te,"spacing",0,!0)/m.size||0,H=K==="auto"?$:$/K,z=g(te,"origin","auto"),Z=0,q=0;q<D;q++){var b=K==="auto"?le(Ee[q]):1/K-$+H,S=z==="center"?.5-b/2:z==="auto"?0:z;y.push({origin:S,size:b,spacing:$}),Z+=b}if(Z+=$*(D-1),z==="auto"&&!m.options.loop&&K!==1){var U=0;y.map(function(V){var j=Z-U;return U+=V.size+$,j>=1||(V.origin=1-j-(Z>1?0:1-Z)),V})}m.options.trackConfig=y}function fe(){ie();var te=m.size;m.options.disabled||te===C||(C=te,ee())}function B(){fe(),setTimeout(fe,500),setTimeout(fe,2e3)}function ie(){var te=d(m.container);m.size=(m.options.vertical?te.height:te.width)||1}function se(){m.slides=a(m.options.selector,m.container)}m.container=(k=a(T,document)).length?k[0]:null,m.destroy=function(){G.purge(),m.emit("destroyed"),O(!0)},m.prev=function(){m.moveToIdx(m.track.details.abs-1,!0)},m.next=function(){m.moveToIdx(m.track.details.abs+1,!0)},m.update=ee,de(m.options)}}var N=function(T,A,m){try{return function(v,C){var I,L={};return I={emit:function(k){L[k]&&L[k].forEach(function(O){O(I)});var G=I.options&&I.options[k];G&&G(I)},moveToIdx:function(k,G,O){var W=I.track.idxToDist(k,G);if(W){var F=I.options.defaultAnimation;I.animator.start([{distance:W,duration:g(O||F,"duration",500),easing:g(O||F,"easing",function(le){return 1+--le*le*le*le*le})}])}},on:function(k,G,O){O===void 0&&(O=!1),L[k]||(L[k]=[]);var W=L[k].indexOf(G);W>-1?O&&delete L[k][W]:O||L[k].push(G)},options:v},function(){if(I.track=p(I),I.animator=_(I),C)for(var k=0,G=C;k<G.length;k++)(0,G[k])(I);I.track.init(I.options.initial||0),I.emit("created")}(),I}(A,n([P(T,{drag:!0,mode:"snap",renderMode:"precision",rubberband:!0,selector:".keen-slider__slide"}),M,x,R],m||[],!0))}catch(v){console.error(v)}};return Za.useKeenSlider=function(T,A){var m=t.ref(),v=t.ref();return t.isRef(T)&&t.watch(T,function(C,I){v.value&&v.value.update(C)}),t.onMounted(function(){m.value&&(v.value=new N(m.value,t.isRef(T)?T.value:T,A))}),t.onUnmounted(function(){v.value&&v.value.destroy()}),[m,v]},Za}var bd=TR();const bR={class:"tech-block-mobile"},AR={__name:"tech-block-mobile",setup(t){const e={duration:15e3,easing:s=>s},[n,i]=bd.useKeenSlider({loop:!0,initial:0,slides:{perView:5,spacing:8},created(s){s.moveToIdx(5,!0,e)},updated(s){s.moveToIdx(s.track.details.abs+5,!0,e)},animationEnded(s){s.moveToIdx(s.track.details.abs+5,!0,e)}},[]);return(s,r)=>(be(),je("div",bR,[pe("div",{ref_key:"container",ref:n,class:"keen-slider"},r[0]||(r[0]=[Gh('<div class="keen-slider__slide keen-slider__slide-js number-slide1" data-v-e5a11cc8></div><div class="keen-slider__slide keen-slider__slide-ts number-slide2" data-v-e5a11cc8></div><div class="keen-slider__slide keen-slider__slide-vite number-slide3" data-v-e5a11cc8></div><div class="keen-slider__slide keen-slider__slide-vue number-slide4" data-v-e5a11cc8></div><div class="keen-slider__slide keen-slider__slide-sass number-slide5" data-v-e5a11cc8></div><div class="keen-slider__slide keen-slider__slide-nuxt number-slide6" data-v-e5a11cc8></div><div class="keen-slider__slide keen-slider__slide-router number-slide6" data-v-e5a11cc8></div><div class="keen-slider__slide keen-slider__slide-pinia number-slide6" data-v-e5a11cc8></div><div class="keen-slider__slide keen-slider__slide-npm number-slide6" data-v-e5a11cc8></div><div class="keen-slider__slide keen-slider__slide-git number-slide6" data-v-e5a11cc8></div><div class="keen-slider__slide keen-slider__slide-nodejs number-slide6" data-v-e5a11cc8></div><div class="keen-slider__slide keen-slider__slide-threejs number-slide6" data-v-e5a11cc8></div>',12)]),512)]))}},RR=Ot(AR,[["__scopeId","data-v-e5a11cc8"]]),CR={key:1,class:"tech-block"},wR={__name:"tech-block",setup(t){const e=yn(),n={duration:15e3,easing:r=>r},[i,s]=bd.useKeenSlider({loop:!0,initial:0,slides:{perView:11,spacing:8},created(r){r.moveToIdx(5,!0,n)},updated(r){r.moveToIdx(r.track.details.abs+5,!0,n)},animationEnded(r){r.moveToIdx(r.track.details.abs+5,!0,n)}});return(r,o)=>Re(e).isMobile?(be(),rt(RR,{key:0})):(be(),je("div",CR,[pe("div",{ref_key:"container",ref:i,class:"keen-slider"},o[0]||(o[0]=[Gh('<div class="keen-slider__slide keen-slider__slide-js number-slide1" data-v-d8248063></div><div class="keen-slider__slide keen-slider__slide-ts number-slide2" data-v-d8248063></div><div class="keen-slider__slide keen-slider__slide-vite number-slide3" data-v-d8248063></div><div class="keen-slider__slide keen-slider__slide-vue number-slide4" data-v-d8248063></div><div class="keen-slider__slide keen-slider__slide-sass number-slide5" data-v-d8248063></div><div class="keen-slider__slide keen-slider__slide-nuxt number-slide6" data-v-d8248063></div><div class="keen-slider__slide keen-slider__slide-router number-slide6" data-v-d8248063></div><div class="keen-slider__slide keen-slider__slide-pinia number-slide6" data-v-d8248063></div><div class="keen-slider__slide keen-slider__slide-npm number-slide6" data-v-d8248063></div><div class="keen-slider__slide keen-slider__slide-git number-slide6" data-v-d8248063></div><div class="keen-slider__slide keen-slider__slide-nodejs number-slide6" data-v-d8248063></div><div class="keen-slider__slide keen-slider__slide-threejs number-slide6" data-v-d8248063></div>',12)]),512)]))}},iE=Ot(wR,[["__scopeId","data-v-d8248063"]]),PR=[{name:"Alesha",title:"Frontender, serious?",text:"AI replace you in 2026, think about it",date:"13.01.2025"}],sE={data:PR},IR={class:"reviews-block"},NR={class:"reviews-block__item"},DR={class:"reviews-block__item-author"},LR={class:"reviews-block__item-title"},OR={class:"reviews-block__item-text"},UR={__name:"reviews-block",setup(t){const e=sE.data,n=e.length,i=e[n-1];return(s,r)=>{const o=bo("router-link");return be(),je("div",IR,[r[0]||(r[0]=pe("div",{class:"reviews-block__title"}," LAST REVIEW ",-1)),pe("div",NR,[pe("div",DR,En(Re(i).name),1),pe("div",LR,En(Re(i).title),1),pe("div",OR,En(Re(i).text),1),ge(o,{class:"reviews-block__button",to:{name:"Reviews"}},{default:At(()=>[ge(Re(Y0),{color:"white",size:"20","stroke-width":"1.5"})]),_:1})])])}}},rE=Ot(UR,[["__scopeId","data-v-41fc00dd"]]),FR=[{title:"Completion of layout",text:"Finally figured out the mobile version and the project structure",date:"27.12.2024"},{title:"I am a middle post",text:"I am the middle of the posts, ask questions",date:"27.12.2024"},{title:"Switched to Nuxt and came back",text:"I am the last of the posts, ask questions",date:"27.12.2024"},{title:"Homepage will be ready soon",text:"There is still a little bit of work left to do on the block with the car model, but the main work is almost finished. In the future, I will only make small, professional edits.",date:"19.01.2025"}],oE={data:FR},kR={class:"last-post-block"},BR={class:"last-post-block__item"},VR={class:"last-post-block__item-title"},HR={class:"last-post-block__item-text"},zR={class:"last-post-block__item-date"},GR={__name:"last-post-block",setup(t){const e=oE.data,n=e.length,i=e[n-1];return(s,r)=>{const o=bo("router-link");return be(),je("div",kR,[r[0]||(r[0]=pe("div",{class:"last-post-block__title"}," LAST POST ",-1)),pe("div",BR,[pe("div",VR,En(Re(i).title),1),pe("div",HR,En(Re(i).text),1),pe("div",zR,En(Re(i).date),1),ge(o,{class:"last-post-block__button",to:{name:"Blog"}},{default:At(()=>[ge(Re(Y0),{color:"white",size:"20","stroke-width":"1.5"})]),_:1})])])}}},aE=Ot(GR,[["__scopeId","data-v-910f306f"]]),WR={},XR={ref:"beerCanvas",class:"donate-block"};function $R(t,e){return be(),je("div",XR,e[0]||(e[0]=[pe("div",{class:"donate-block__title"},"BUY ME A BEER",-1),pe("a",{class:"donate-block__button",href:"https://donatty.com/yusheero"},"SURE!",-1)]),512)}const lE=Ot(WR,[["render",$R],["__scopeId","data-v-1e71611e"]]),qR={},YR={class:"watch-stream"};function jR(t,e){return be(),je("div",YR,e[0]||(e[0]=[pe("a",{class:"watch-stream__twitch-link",href:"https://www.twitch.tv/yusheero"},"Watch Stream",-1)]))}const Co=Ot(qR,[["render",jR],["__scopeId","data-v-50290d47"]]),KR={class:"navigation"},ZR={__name:"navigation-desktop",setup(t){return(e,n)=>{const i=bo("router-link");return be(),je("div",KR,[ge(i,{class:"navigation__button navigation__home",to:{name:"Home"}},{default:At(()=>[ge(Re(J0),{color:"white",size:"60","stroke-width":"1.5"})]),_:1}),ge(i,{class:"navigation__button navigation__projects",to:{name:"Projects"}},{default:At(()=>[ge(Re(Q0),{color:"white",size:"25","stroke-width":"1.5"})]),_:1}),ge(i,{class:"navigation__button navigation__experience",to:{name:"Experience"}},{default:At(()=>[ge(Re(j0),{color:"white",size:"25","stroke-width":"1.5"})]),_:1}),ge(i,{class:"navigation__button navigation__blog",to:{name:"Blog"}},{default:At(()=>[ge(Re(Z0),{color:"white",size:"25","stroke-width":"1.5"})]),_:1}),ge(i,{class:"navigation__button navigation__reviews",to:{name:"Reviews"}},{default:At(()=>[ge(Re(g1),{color:"white",size:"25","stroke-width":"1.5"})]),_:1}),ge(i,{class:"navigation__button navigation__game",to:{name:"Library"}},{default:At(()=>[ge(Re(v1),{color:"white",size:"25","stroke-width":"1.5"})]),_:1})])}}},JR=Ot(ZR,[["__scopeId","data-v-d43d0076"]]),QR={class:"navigation"},eC={__name:"navigation-mobile",setup(t){return(e,n)=>{const i=bo("router-link");return be(),je("div",QR,[ge(i,{class:"navigation__button",to:{name:"Home"}},{default:At(()=>[ge(Re(J0),{color:"white",size:"24","stroke-width":"1.5"})]),_:1}),ge(i,{class:"navigation__button",to:{name:"Projects"}},{default:At(()=>[ge(Re(Q0),{color:"white",size:"24","stroke-width":"1.5"})]),_:1}),ge(i,{class:"navigation__button",to:{name:"Experience"}},{default:At(()=>[ge(Re(j0),{color:"white",size:"24","stroke-width":"1.5"})]),_:1}),ge(i,{class:"navigation__button",to:{name:"Blog"}},{default:At(()=>[ge(Re(Z0),{color:"white",size:"24","stroke-width":"1.5"})]),_:1})])}}},tC=Ot(eC,[["__scopeId","data-v-c5bf7438"]]),jn={__name:"navigation",setup(t){const e=yn();return(n,i)=>(be(),je(Et,null,[Re(e).isMobile?(be(),rt(tC,{key:0})):xn("",!0),Re(e).isMobile?xn("",!0):(be(),rt(JR,{key:1}))],64))}},nC={class:"home-view-mobile"},iC={class:"home-view-mobile__header"},sC={__name:"home-view-mobile",setup(t){return(e,n)=>(be(),je("div",nC,[pe("div",iC,[ge(jn),ge(Co)]),ge(q0),ge(ev),ge($0),ge(aE),ge(lE),ge(iE),ge(rE),ge(X0)]))}};/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ad="171",Kr={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Xr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},rC=0,pm=1,oC=2,cE=1,aC=2,Pi=3,Ts=0,wn=1,Ui=2,Es=0,Zr=1,mm=2,_m=3,gm=4,lC=5,Ws=100,cC=101,uC=102,fC=103,hC=104,dC=200,pC=201,mC=202,_C=203,Cf=204,wf=205,gC=206,vC=207,EC=208,SC=209,xC=210,yC=211,MC=212,TC=213,bC=214,Pf=0,If=1,Nf=2,ho=3,Df=4,Lf=5,Of=6,Uf=7,uE=0,AC=1,RC=2,Ss=0,CC=1,wC=2,PC=3,IC=4,NC=5,DC=6,LC=7,fE=300,po=301,mo=302,Ff=303,kf=304,Yc=306,Bf=1e3,qs=1001,Vf=1002,ai=1003,OC=1004,tl=1005,di=1006,yu=1007,Ys=1008,$i=1009,hE=1010,dE=1011,Sa=1012,Rd=1013,fr=1014,Fi=1015,Oa=1016,Cd=1017,wd=1018,_o=1020,pE=35902,mE=1021,_E=1022,si=1023,gE=1024,vE=1025,Jr=1026,go=1027,EE=1028,Pd=1029,SE=1030,Id=1031,Nd=1033,Ll=33776,Ol=33777,Ul=33778,Fl=33779,Hf=35840,zf=35841,Gf=35842,Wf=35843,Xf=36196,$f=37492,qf=37496,Yf=37808,jf=37809,Kf=37810,Zf=37811,Jf=37812,Qf=37813,eh=37814,th=37815,nh=37816,ih=37817,sh=37818,rh=37819,oh=37820,ah=37821,kl=36492,lh=36494,ch=36495,xE=36283,uh=36284,fh=36285,hh=36286,UC=3200,FC=3201,kC=0,BC=1,ds="",Gn="srgb",vo="srgb-linear",lc="linear",_t="srgb",Tr=7680,vm=519,VC=512,HC=513,zC=514,yE=515,GC=516,WC=517,XC=518,$C=519,Em=35044,Sm="300 es",ki=2e3,cc=2001;class gr{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(n);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let xm=1234567;const Qo=Math.PI/180,xa=180/Math.PI;function wo(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(tn[t&255]+tn[t>>8&255]+tn[t>>16&255]+tn[t>>24&255]+"-"+tn[e&255]+tn[e>>8&255]+"-"+tn[e>>16&15|64]+tn[e>>24&255]+"-"+tn[n&63|128]+tn[n>>8&255]+"-"+tn[n>>16&255]+tn[n>>24&255]+tn[i&255]+tn[i>>8&255]+tn[i>>16&255]+tn[i>>24&255]).toLowerCase()}function et(t,e,n){return Math.max(e,Math.min(n,t))}function Dd(t,e){return(t%e+e)%e}function qC(t,e,n,i,s){return i+(t-e)*(s-i)/(n-e)}function YC(t,e,n){return t!==e?(n-t)/(e-t):0}function ea(t,e,n){return(1-n)*t+n*e}function jC(t,e,n,i){return ea(t,e,1-Math.exp(-n*i))}function KC(t,e=1){return e-Math.abs(Dd(t,e*2)-e)}function ZC(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function JC(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function QC(t,e){return t+Math.floor(Math.random()*(e-t+1))}function ew(t,e){return t+Math.random()*(e-t)}function tw(t){return t*(.5-Math.random())}function nw(t){t!==void 0&&(xm=t);let e=xm+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function iw(t){return t*Qo}function sw(t){return t*xa}function rw(t){return(t&t-1)===0&&t!==0}function ow(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function aw(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function lw(t,e,n,i,s){const r=Math.cos,o=Math.sin,a=r(n/2),l=o(n/2),c=r((e+i)/2),u=o((e+i)/2),f=r((e-i)/2),h=o((e-i)/2),d=r((i-e)/2),g=o((i-e)/2);switch(s){case"XYX":t.set(a*u,l*f,l*h,a*c);break;case"YZY":t.set(l*h,a*u,l*f,a*c);break;case"ZXZ":t.set(l*f,l*h,a*u,a*c);break;case"XZX":t.set(a*u,l*g,l*d,a*c);break;case"YXY":t.set(l*d,a*u,l*g,a*c);break;case"ZYZ":t.set(l*g,l*d,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Hr(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function dn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const cw={DEG2RAD:Qo,RAD2DEG:xa,generateUUID:wo,clamp:et,euclideanModulo:Dd,mapLinear:qC,inverseLerp:YC,lerp:ea,damp:jC,pingpong:KC,smoothstep:ZC,smootherstep:JC,randInt:QC,randFloat:ew,randFloatSpread:tw,seededRandom:nw,degToRad:iw,radToDeg:sw,isPowerOfTwo:rw,ceilPowerOfTwo:ow,floorPowerOfTwo:aw,setQuaternionFromProperEuler:lw,normalize:dn,denormalize:Hr};class Qe{constructor(e=0,n=0){Qe.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6],this.y=s[1]*n+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=et(this.x,e.x,n.x),this.y=et(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=et(this.x,e,n),this.y=et(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(et(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(et(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),s=Math.sin(n),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ze{constructor(e,n,i,s,r,o,a,l,c){Ze.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,s,r,o,a,l,c)}set(e,n,i,s,r,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=n,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,s=n.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],h=i[2],d=i[5],g=i[8],E=s[0],_=s[3],p=s[6],R=s[1],x=s[4],M=s[7],P=s[2],N=s[5],T=s[8];return r[0]=o*E+a*R+l*P,r[3]=o*_+a*x+l*N,r[6]=o*p+a*M+l*T,r[1]=c*E+u*R+f*P,r[4]=c*_+u*x+f*N,r[7]=c*p+u*M+f*T,r[2]=h*E+d*R+g*P,r[5]=h*_+d*x+g*N,r[8]=h*p+d*M+g*T,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return n*o*u-n*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){const e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,h=a*l-u*r,d=c*r-o*l,g=n*f+i*h+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/g;return e[0]=f*E,e[1]=(s*c-u*i)*E,e[2]=(a*i-s*o)*E,e[3]=h*E,e[4]=(u*n-s*l)*E,e[5]=(s*r-a*n)*E,e[6]=d*E,e[7]=(i*l-c*n)*E,e[8]=(o*n-i*r)*E,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(Mu.makeScale(e,n)),this}rotate(e){return this.premultiply(Mu.makeRotation(-e)),this}translate(e,n){return this.premultiply(Mu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let s=0;s<9;s++)if(n[s]!==i[s])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Mu=new Ze;function ME(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function uc(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function uw(){const t=uc("canvas");return t.style.display="block",t}const ym={};function zr(t){t in ym||(ym[t]=!0,console.warn(t))}function fw(t,e,n){return new Promise(function(i,s){function r(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:s();break;case t.TIMEOUT_EXPIRED:setTimeout(r,n);break;default:i()}}setTimeout(r,n)})}function hw(t){const e=t.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function dw(t){const e=t.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Mm=new Ze().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Tm=new Ze().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function pw(){const t={enabled:!0,workingColorSpace:vo,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===_t&&(s.r=zi(s.r),s.g=zi(s.g),s.b=zi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===_t&&(s.r=Qr(s.r),s.g=Qr(s.g),s.b=Qr(s.b))),s},fromWorkingColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},toWorkingColorSpace:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ds?lc:this.spaces[s].transfer},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[vo]:{primaries:e,whitePoint:i,transfer:lc,toXYZ:Mm,fromXYZ:Tm,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Gn},outputColorSpaceConfig:{drawingBufferColorSpace:Gn}},[Gn]:{primaries:e,whitePoint:i,transfer:_t,toXYZ:Mm,fromXYZ:Tm,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Gn}}}),t}const ct=pw();function zi(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Qr(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let br;class mw{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{br===void 0&&(br=uc("canvas")),br.width=e.width,br.height=e.height;const i=br.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=br}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=uc("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=zi(r[o]/255)*255;return i.putImageData(s,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(zi(n[i]/255)*255):n[i]=zi(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let _w=0;class TE{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:_w++}),this.uuid=wo(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Tu(s[o].image)):r.push(Tu(s[o]))}else r=Tu(s);i.url=r}return n||(e.images[this.uuid]=i),i}}function Tu(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?mw.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let gw=0;class Pn extends gr{constructor(e=Pn.DEFAULT_IMAGE,n=Pn.DEFAULT_MAPPING,i=qs,s=qs,r=di,o=Ys,a=si,l=$i,c=Pn.DEFAULT_ANISOTROPY,u=ds){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:gw++}),this.uuid=wo(),this.name="",this.source=new TE(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Qe(0,0),this.repeat=new Qe(1,1),this.center=new Qe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==fE)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Bf:e.x=e.x-Math.floor(e.x);break;case qs:e.x=e.x<0?0:1;break;case Vf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Bf:e.y=e.y-Math.floor(e.y);break;case qs:e.y=e.y<0?0:1;break;case Vf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Pn.DEFAULT_IMAGE=null;Pn.DEFAULT_MAPPING=fE;Pn.DEFAULT_ANISOTROPY=1;class Lt{constructor(e=0,n=0,i=0,s=1){Lt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,s){return this.x=e,this.y=n,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*n+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*n+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*n+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,s,r;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],d=l[5],g=l[9],E=l[2],_=l[6],p=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-E)<.01&&Math.abs(g-_)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+E)<.1&&Math.abs(g+_)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const x=(c+1)/2,M=(d+1)/2,P=(p+1)/2,N=(u+h)/4,T=(f+E)/4,A=(g+_)/4;return x>M&&x>P?x<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(x),s=N/i,r=T/i):M>P?M<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),i=N/s,r=A/s):P<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(P),i=T/r,s=A/r),this.set(i,s,r,n),this}let R=Math.sqrt((_-g)*(_-g)+(f-E)*(f-E)+(h-u)*(h-u));return Math.abs(R)<.001&&(R=1),this.x=(_-g)/R,this.y=(f-E)/R,this.z=(h-u)/R,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=et(this.x,e.x,n.x),this.y=et(this.y,e.y,n.y),this.z=et(this.z,e.z,n.z),this.w=et(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=et(this.x,e,n),this.y=et(this.y,e,n),this.z=et(this.z,e,n),this.w=et(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(et(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class vw extends gr{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Lt(0,0,e,n),this.scissorTest=!1,this.viewport=new Lt(0,0,e,n);const s={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:di,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const r=new Pn(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=n,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new TE(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class hr extends vw{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class bE extends Pn{constructor(e=null,n=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:s},this.magFilter=ai,this.minFilter=ai,this.wrapR=qs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ew extends Pn{constructor(e=null,n=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:s},this.magFilter=ai,this.minFilter=ai,this.wrapR=qs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class dr{constructor(e=0,n=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=s}static slerpFlat(e,n,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],f=i[s+3];const h=r[o+0],d=r[o+1],g=r[o+2],E=r[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f;return}if(a===1){e[n+0]=h,e[n+1]=d,e[n+2]=g,e[n+3]=E;return}if(f!==E||l!==h||c!==d||u!==g){let _=1-a;const p=l*h+c*d+u*g+f*E,R=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){const P=Math.sqrt(x),N=Math.atan2(P,p*R);_=Math.sin(_*N)/P,a=Math.sin(a*N)/P}const M=a*R;if(l=l*_+h*M,c=c*_+d*M,u=u*_+g*M,f=f*_+E*M,_===1-a){const P=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=P,c*=P,u*=P,f*=P}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],f=r[o],h=r[o+1],d=r[o+2],g=r[o+3];return e[n]=a*g+u*f+l*d-c*h,e[n+1]=l*g+u*h+c*f-a*d,e[n+2]=c*g+u*d+a*h-l*f,e[n+3]=u*g-a*f-l*h-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,s){return this._x=e,this._y=n,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),f=a(r/2),h=l(i/2),d=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=h*u*f+c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f-h*d*g;break;case"YXZ":this._x=h*u*f+c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f+h*d*g;break;case"ZXY":this._x=h*u*f-c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f-h*d*g;break;case"ZYX":this._x=h*u*f-c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f+h*d*g;break;case"YZX":this._x=h*u*f+c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f-h*d*g;break;case"XZY":this._x=h*u*f-c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f+h*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],s=n[4],r=n[8],o=n[1],a=n[5],l=n[9],c=n[2],u=n[6],f=n[10],h=i+a+f;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-l)*d,this._y=(r-c)*d,this._z=(o-s)*d}else if(i>a&&i>f){const d=2*Math.sqrt(1+i-a-f);this._w=(u-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+c)/d}else if(a>f){const d=2*Math.sqrt(1+a-i-f);this._w=(r-c)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+f-i-a);this._w=(o-s)/d,this._x=(r+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(et(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,n/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,s=e._y,r=e._z,o=e._w,a=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-n;return this._w=d*o+n*this._w,this._x=d*i+n*this._x,this._y=d*s+n*this._y,this._z=d*r+n*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-n)*u)/c,h=Math.sin(n*u)/c;return this._w=o*f+this._w*h,this._x=i*f+this._x*h,this._y=s*f+this._y*h,this._z=r*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(n),r*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ne{constructor(e=0,n=0,i=0){ne.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(bm.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(bm.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6]*s,this.y=r[1]*n+r[4]*i+r[7]*s,this.z=r[2]*n+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*n+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*n+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*n+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*n+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),u=2*(a*n-r*s),f=2*(r*i-o*n);return this.x=n+l*c+o*f-a*u,this.y=i+l*u+a*c-r*f,this.z=s+l*f+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*n+r[4]*i+r[8]*s,this.y=r[1]*n+r[5]*i+r[9]*s,this.z=r[2]*n+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=et(this.x,e.x,n.x),this.y=et(this.y,e.y,n.y),this.z=et(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=et(this.x,e,n),this.y=et(this.y,e,n),this.z=et(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(et(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,s=e.y,r=e.z,o=n.x,a=n.y,l=n.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return bu.copy(this).projectOnVector(e),this.sub(bu)}reflect(e){return this.sub(bu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(et(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return n*n+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const s=Math.sin(n)*e;return this.x=s*Math.sin(i),this.y=Math.cos(n)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=s,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const bu=new ne,bm=new dr;class Ua{constructor(e=new ne(1/0,1/0,1/0),n=new ne(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Jn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Jn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Jn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(n===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Jn):Jn.fromBufferAttribute(r,o),Jn.applyMatrix4(e.matrixWorld),this.expandByPoint(Jn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),nl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),nl.copy(i.boundingBox)),nl.applyMatrix4(e.matrixWorld),this.union(nl)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Jn),Jn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Fo),il.subVectors(this.max,Fo),Ar.subVectors(e.a,Fo),Rr.subVectors(e.b,Fo),Cr.subVectors(e.c,Fo),Ji.subVectors(Rr,Ar),Qi.subVectors(Cr,Rr),Us.subVectors(Ar,Cr);let n=[0,-Ji.z,Ji.y,0,-Qi.z,Qi.y,0,-Us.z,Us.y,Ji.z,0,-Ji.x,Qi.z,0,-Qi.x,Us.z,0,-Us.x,-Ji.y,Ji.x,0,-Qi.y,Qi.x,0,-Us.y,Us.x,0];return!Au(n,Ar,Rr,Cr,il)||(n=[1,0,0,0,1,0,0,0,1],!Au(n,Ar,Rr,Cr,il))?!1:(sl.crossVectors(Ji,Qi),n=[sl.x,sl.y,sl.z],Au(n,Ar,Rr,Cr,il))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Jn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Jn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ti[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ti[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ti[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ti[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ti[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ti[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ti[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ti[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ti),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ti=[new ne,new ne,new ne,new ne,new ne,new ne,new ne,new ne],Jn=new ne,nl=new Ua,Ar=new ne,Rr=new ne,Cr=new ne,Ji=new ne,Qi=new ne,Us=new ne,Fo=new ne,il=new ne,sl=new ne,Fs=new ne;function Au(t,e,n,i,s){for(let r=0,o=t.length-3;r<=o;r+=3){Fs.fromArray(t,r);const a=s.x*Math.abs(Fs.x)+s.y*Math.abs(Fs.y)+s.z*Math.abs(Fs.z),l=e.dot(Fs),c=n.dot(Fs),u=i.dot(Fs);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Sw=new Ua,ko=new ne,Ru=new ne;class Ld{constructor(e=new ne,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):Sw.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ko.subVectors(e,this.center);const n=ko.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),s=(i-this.radius)*.5;this.center.addScaledVector(ko,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ru.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ko.copy(e.center).add(Ru)),this.expandByPoint(ko.copy(e.center).sub(Ru))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const bi=new ne,Cu=new ne,rl=new ne,es=new ne,wu=new ne,ol=new ne,Pu=new ne;class AE{constructor(e=new ne,n=new ne(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,bi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=bi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(bi.copy(this.origin).addScaledVector(this.direction,n),bi.distanceToSquared(e))}distanceSqToSegment(e,n,i,s){Cu.copy(e).add(n).multiplyScalar(.5),rl.copy(n).sub(e).normalize(),es.copy(this.origin).sub(Cu);const r=e.distanceTo(n)*.5,o=-this.direction.dot(rl),a=es.dot(this.direction),l=-es.dot(rl),c=es.lengthSq(),u=Math.abs(1-o*o);let f,h,d,g;if(u>0)if(f=o*l-a,h=o*a-l,g=r*u,f>=0)if(h>=-g)if(h<=g){const E=1/u;f*=E,h*=E,d=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=r,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;else h=-r,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;else h<=-g?(f=Math.max(0,-(-o*r+a)),h=f>0?-r:Math.min(Math.max(-r,-l),r),d=-f*f+h*(h+2*l)+c):h<=g?(f=0,h=Math.min(Math.max(-r,-l),r),d=h*(h+2*l)+c):(f=Math.max(0,-(o*r+a)),h=f>0?r:Math.min(Math.max(-r,-l),r),d=-f*f+h*(h+2*l)+c);else h=o>0?-r:r,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Cu).addScaledVector(rl,h),d}intersectSphere(e,n){bi.subVectors(e.center,this.origin);const i=bi.dot(this.direction),s=bi.dot(bi)-i*i,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,s=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,s=(e.min.x-h.x)*c),u>=0?(r=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(r=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,n)}intersectsBox(e){return this.intersectBox(e,bi)!==null}intersectTriangle(e,n,i,s,r){wu.subVectors(n,e),ol.subVectors(i,e),Pu.crossVectors(wu,ol);let o=this.direction.dot(Pu),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;es.subVectors(this.origin,e);const l=a*this.direction.dot(ol.crossVectors(es,ol));if(l<0)return null;const c=a*this.direction.dot(wu.cross(es));if(c<0||l+c>o)return null;const u=-a*es.dot(Pu);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Vt{constructor(e,n,i,s,r,o,a,l,c,u,f,h,d,g,E,_){Vt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,s,r,o,a,l,c,u,f,h,d,g,E,_)}set(e,n,i,s,r,o,a,l,c,u,f,h,d,g,E,_){const p=this.elements;return p[0]=e,p[4]=n,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=f,p[14]=h,p[3]=d,p[7]=g,p[11]=E,p[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Vt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,s=1/wr.setFromMatrixColumn(e,0).length(),r=1/wr.setFromMatrixColumn(e,1).length(),o=1/wr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*s,n[1]=i[1]*s,n[2]=i[2]*s,n[3]=0,n[4]=i[4]*r,n[5]=i[5]*r,n[6]=i[6]*r,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){const h=o*u,d=o*f,g=a*u,E=a*f;n[0]=l*u,n[4]=-l*f,n[8]=c,n[1]=d+g*c,n[5]=h-E*c,n[9]=-a*l,n[2]=E-h*c,n[6]=g+d*c,n[10]=o*l}else if(e.order==="YXZ"){const h=l*u,d=l*f,g=c*u,E=c*f;n[0]=h+E*a,n[4]=g*a-d,n[8]=o*c,n[1]=o*f,n[5]=o*u,n[9]=-a,n[2]=d*a-g,n[6]=E+h*a,n[10]=o*l}else if(e.order==="ZXY"){const h=l*u,d=l*f,g=c*u,E=c*f;n[0]=h-E*a,n[4]=-o*f,n[8]=g+d*a,n[1]=d+g*a,n[5]=o*u,n[9]=E-h*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const h=o*u,d=o*f,g=a*u,E=a*f;n[0]=l*u,n[4]=g*c-d,n[8]=h*c+E,n[1]=l*f,n[5]=E*c+h,n[9]=d*c-g,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const h=o*l,d=o*c,g=a*l,E=a*c;n[0]=l*u,n[4]=E-h*f,n[8]=g*f+d,n[1]=f,n[5]=o*u,n[9]=-a*u,n[2]=-c*u,n[6]=d*f+g,n[10]=h-E*f}else if(e.order==="XZY"){const h=o*l,d=o*c,g=a*l,E=a*c;n[0]=l*u,n[4]=-f,n[8]=c*u,n[1]=h*f+E,n[5]=o*u,n[9]=d*f-g,n[2]=g*f-d,n[6]=a*u,n[10]=E*f+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(xw,e,yw)}lookAt(e,n,i){const s=this.elements;return Nn.subVectors(e,n),Nn.lengthSq()===0&&(Nn.z=1),Nn.normalize(),ts.crossVectors(i,Nn),ts.lengthSq()===0&&(Math.abs(i.z)===1?Nn.x+=1e-4:Nn.z+=1e-4,Nn.normalize(),ts.crossVectors(i,Nn)),ts.normalize(),al.crossVectors(Nn,ts),s[0]=ts.x,s[4]=al.x,s[8]=Nn.x,s[1]=ts.y,s[5]=al.y,s[9]=Nn.y,s[2]=ts.z,s[6]=al.z,s[10]=Nn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,s=n.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],h=i[9],d=i[13],g=i[2],E=i[6],_=i[10],p=i[14],R=i[3],x=i[7],M=i[11],P=i[15],N=s[0],T=s[4],A=s[8],m=s[12],v=s[1],C=s[5],I=s[9],L=s[13],k=s[2],G=s[6],O=s[10],W=s[14],F=s[3],le=s[7],he=s[11],de=s[15];return r[0]=o*N+a*v+l*k+c*F,r[4]=o*T+a*C+l*G+c*le,r[8]=o*A+a*I+l*O+c*he,r[12]=o*m+a*L+l*W+c*de,r[1]=u*N+f*v+h*k+d*F,r[5]=u*T+f*C+h*G+d*le,r[9]=u*A+f*I+h*O+d*he,r[13]=u*m+f*L+h*W+d*de,r[2]=g*N+E*v+_*k+p*F,r[6]=g*T+E*C+_*G+p*le,r[10]=g*A+E*I+_*O+p*he,r[14]=g*m+E*L+_*W+p*de,r[3]=R*N+x*v+M*k+P*F,r[7]=R*T+x*C+M*G+P*le,r[11]=R*A+x*I+M*O+P*he,r[15]=R*m+x*L+M*W+P*de,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],d=e[14],g=e[3],E=e[7],_=e[11],p=e[15];return g*(+r*l*f-s*c*f-r*a*h+i*c*h+s*a*d-i*l*d)+E*(+n*l*d-n*c*h+r*o*h-s*o*d+s*c*u-r*l*u)+_*(+n*c*f-n*a*d-r*o*f+i*o*d+r*a*u-i*c*u)+p*(-s*a*u-n*l*f+n*a*h+s*o*f-i*o*h+i*l*u)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=n,s[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],d=e[11],g=e[12],E=e[13],_=e[14],p=e[15],R=f*_*c-E*h*c+E*l*d-a*_*d-f*l*p+a*h*p,x=g*h*c-u*_*c-g*l*d+o*_*d+u*l*p-o*h*p,M=u*E*c-g*f*c+g*a*d-o*E*d-u*a*p+o*f*p,P=g*f*l-u*E*l-g*a*h+o*E*h+u*a*_-o*f*_,N=n*R+i*x+s*M+r*P;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/N;return e[0]=R*T,e[1]=(E*h*r-f*_*r-E*s*d+i*_*d+f*s*p-i*h*p)*T,e[2]=(a*_*r-E*l*r+E*s*c-i*_*c-a*s*p+i*l*p)*T,e[3]=(f*l*r-a*h*r-f*s*c+i*h*c+a*s*d-i*l*d)*T,e[4]=x*T,e[5]=(u*_*r-g*h*r+g*s*d-n*_*d-u*s*p+n*h*p)*T,e[6]=(g*l*r-o*_*r-g*s*c+n*_*c+o*s*p-n*l*p)*T,e[7]=(o*h*r-u*l*r+u*s*c-n*h*c-o*s*d+n*l*d)*T,e[8]=M*T,e[9]=(g*f*r-u*E*r-g*i*d+n*E*d+u*i*p-n*f*p)*T,e[10]=(o*E*r-g*a*r+g*i*c-n*E*c-o*i*p+n*a*p)*T,e[11]=(u*a*r-o*f*r-u*i*c+n*f*c+o*i*d-n*a*d)*T,e[12]=P*T,e[13]=(u*E*s-g*f*s+g*i*h-n*E*h-u*i*_+n*f*_)*T,e[14]=(g*a*s-o*E*s-g*i*l+n*E*l+o*i*_-n*a*_)*T,e[15]=(o*f*s-u*a*s+u*i*l-n*f*l-o*i*h+n*a*h)*T,this}scale(e){const n=this.elements,i=e.x,s=e.y,r=e.z;return n[0]*=i,n[4]*=s,n[8]*=r,n[1]*=i,n[5]*=s,n[9]*=r,n[2]*=i,n[6]*=s,n[10]*=r,n[3]*=i,n[7]*=s,n[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,s))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),s=Math.sin(n),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,n,s,1,0,0,0,0,1),this}compose(e,n,i){const s=this.elements,r=n._x,o=n._y,a=n._z,l=n._w,c=r+r,u=o+o,f=a+a,h=r*c,d=r*u,g=r*f,E=o*u,_=o*f,p=a*f,R=l*c,x=l*u,M=l*f,P=i.x,N=i.y,T=i.z;return s[0]=(1-(E+p))*P,s[1]=(d+M)*P,s[2]=(g-x)*P,s[3]=0,s[4]=(d-M)*N,s[5]=(1-(h+p))*N,s[6]=(_+R)*N,s[7]=0,s[8]=(g+x)*T,s[9]=(_-R)*T,s[10]=(1-(h+E))*T,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,n,i){const s=this.elements;let r=wr.set(s[0],s[1],s[2]).length();const o=wr.set(s[4],s[5],s[6]).length(),a=wr.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Qn.copy(this);const c=1/r,u=1/o,f=1/a;return Qn.elements[0]*=c,Qn.elements[1]*=c,Qn.elements[2]*=c,Qn.elements[4]*=u,Qn.elements[5]*=u,Qn.elements[6]*=u,Qn.elements[8]*=f,Qn.elements[9]*=f,Qn.elements[10]*=f,n.setFromRotationMatrix(Qn),i.x=r,i.y=o,i.z=a,this}makePerspective(e,n,i,s,r,o,a=ki){const l=this.elements,c=2*r/(n-e),u=2*r/(i-s),f=(n+e)/(n-e),h=(i+s)/(i-s);let d,g;if(a===ki)d=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===cc)d=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,s,r,o,a=ki){const l=this.elements,c=1/(n-e),u=1/(i-s),f=1/(o-r),h=(n+e)*c,d=(i+s)*u;let g,E;if(a===ki)g=(o+r)*f,E=-2*f;else if(a===cc)g=r*f,E=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=E,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let s=0;s<16;s++)if(n[s]!==i[s])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const wr=new ne,Qn=new Vt,xw=new ne(0,0,0),yw=new ne(1,1,1),ts=new ne,al=new ne,Nn=new ne,Am=new Vt,Rm=new dr;class qi{constructor(e=0,n=0,i=0,s=qi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,s=this._order){return this._x=e,this._y=n,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],f=s[2],h=s[6],d=s[10];switch(n){case"XYZ":this._y=Math.asin(et(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-et(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(et(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-et(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(et(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-et(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Am.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Am,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Rm.setFromEuler(this),this.setFromQuaternion(Rm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}qi.DEFAULT_ORDER="XYZ";class RE{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Mw=0;const Cm=new ne,Pr=new dr,Ai=new Vt,ll=new ne,Bo=new ne,Tw=new ne,bw=new dr,wm=new ne(1,0,0),Pm=new ne(0,1,0),Im=new ne(0,0,1),Nm={type:"added"},Aw={type:"removed"},Ir={type:"childadded",child:null},Iu={type:"childremoved",child:null};class Fn extends gr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Mw++}),this.uuid=wo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Fn.DEFAULT_UP.clone();const e=new ne,n=new qi,i=new dr,s=new ne(1,1,1);function r(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Vt},normalMatrix:{value:new Ze}}),this.matrix=new Vt,this.matrixWorld=new Vt,this.matrixAutoUpdate=Fn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Fn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new RE,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Pr.setFromAxisAngle(e,n),this.quaternion.multiply(Pr),this}rotateOnWorldAxis(e,n){return Pr.setFromAxisAngle(e,n),this.quaternion.premultiply(Pr),this}rotateX(e){return this.rotateOnAxis(wm,e)}rotateY(e){return this.rotateOnAxis(Pm,e)}rotateZ(e){return this.rotateOnAxis(Im,e)}translateOnAxis(e,n){return Cm.copy(e).applyQuaternion(this.quaternion),this.position.add(Cm.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(wm,e)}translateY(e){return this.translateOnAxis(Pm,e)}translateZ(e){return this.translateOnAxis(Im,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ai.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?ll.copy(e):ll.set(e,n,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Bo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ai.lookAt(Bo,ll,this.up):Ai.lookAt(ll,Bo,this.up),this.quaternion.setFromRotationMatrix(Ai),s&&(Ai.extractRotation(s.matrixWorld),Pr.setFromRotationMatrix(Ai),this.quaternion.premultiply(Pr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Nm),Ir.child=e,this.dispatchEvent(Ir),Ir.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(Aw),Iu.child=e,this.dispatchEvent(Iu),Iu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ai.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ai.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ai),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Nm),Ir.child=e,this.dispatchEvent(Ir),Ir.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bo,e,Tw),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bo,bw,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),h=o(e.skeletons),d=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),d.length>0&&(i.animations=d),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}Fn.DEFAULT_UP=new ne(0,1,0);Fn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Fn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ei=new ne,Ri=new ne,Nu=new ne,Ci=new ne,Nr=new ne,Dr=new ne,Dm=new ne,Du=new ne,Lu=new ne,Ou=new ne,Uu=new Lt,Fu=new Lt,ku=new Lt;class ii{constructor(e=new ne,n=new ne,i=new ne){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,s){s.subVectors(i,n),ei.subVectors(e,n),s.cross(ei);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,n,i,s,r){ei.subVectors(s,n),Ri.subVectors(i,n),Nu.subVectors(e,n);const o=ei.dot(ei),a=ei.dot(Ri),l=ei.dot(Nu),c=Ri.dot(Ri),u=Ri.dot(Nu),f=o*c-a*a;if(f===0)return r.set(0,0,0),null;const h=1/f,d=(c*l-a*u)*h,g=(o*u-a*l)*h;return r.set(1-d-g,g,d)}static containsPoint(e,n,i,s){return this.getBarycoord(e,n,i,s,Ci)===null?!1:Ci.x>=0&&Ci.y>=0&&Ci.x+Ci.y<=1}static getInterpolation(e,n,i,s,r,o,a,l){return this.getBarycoord(e,n,i,s,Ci)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ci.x),l.addScaledVector(o,Ci.y),l.addScaledVector(a,Ci.z),l)}static getInterpolatedAttribute(e,n,i,s,r,o){return Uu.setScalar(0),Fu.setScalar(0),ku.setScalar(0),Uu.fromBufferAttribute(e,n),Fu.fromBufferAttribute(e,i),ku.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Uu,r.x),o.addScaledVector(Fu,r.y),o.addScaledVector(ku,r.z),o}static isFrontFacing(e,n,i,s){return ei.subVectors(i,n),Ri.subVectors(e,n),ei.cross(Ri).dot(s)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,s){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,n,i,s){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ei.subVectors(this.c,this.b),Ri.subVectors(this.a,this.b),ei.cross(Ri).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ii.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return ii.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,s,r){return ii.getInterpolation(e,this.a,this.b,this.c,n,i,s,r)}containsPoint(e){return ii.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ii.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,s=this.b,r=this.c;let o,a;Nr.subVectors(s,i),Dr.subVectors(r,i),Du.subVectors(e,i);const l=Nr.dot(Du),c=Dr.dot(Du);if(l<=0&&c<=0)return n.copy(i);Lu.subVectors(e,s);const u=Nr.dot(Lu),f=Dr.dot(Lu);if(u>=0&&f<=u)return n.copy(s);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),n.copy(i).addScaledVector(Nr,o);Ou.subVectors(e,r);const d=Nr.dot(Ou),g=Dr.dot(Ou);if(g>=0&&d<=g)return n.copy(r);const E=d*c-l*g;if(E<=0&&c>=0&&g<=0)return a=c/(c-g),n.copy(i).addScaledVector(Dr,a);const _=u*g-d*f;if(_<=0&&f-u>=0&&d-g>=0)return Dm.subVectors(r,s),a=(f-u)/(f-u+(d-g)),n.copy(s).addScaledVector(Dm,a);const p=1/(_+E+h);return o=E*p,a=h*p,n.copy(i).addScaledVector(Nr,o).addScaledVector(Dr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const CE={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ns={h:0,s:0,l:0},cl={h:0,s:0,l:0};function Bu(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class vt{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Gn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ct.toWorkingColorSpace(this,n),this}setRGB(e,n,i,s=ct.workingColorSpace){return this.r=e,this.g=n,this.b=i,ct.toWorkingColorSpace(this,s),this}setHSL(e,n,i,s=ct.workingColorSpace){if(e=Dd(e,1),n=et(n,0,1),i=et(i,0,1),n===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+n):i+n-i*n,o=2*i-r;this.r=Bu(o,r,e+1/3),this.g=Bu(o,r,e),this.b=Bu(o,r,e-1/3)}return ct.toWorkingColorSpace(this,s),this}setStyle(e,n=Gn){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,n);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,n);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(r,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Gn){const i=CE[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=zi(e.r),this.g=zi(e.g),this.b=zi(e.b),this}copyLinearToSRGB(e){return this.r=Qr(e.r),this.g=Qr(e.g),this.b=Qr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Gn){return ct.fromWorkingColorSpace(nn.copy(this),e),Math.round(et(nn.r*255,0,255))*65536+Math.round(et(nn.g*255,0,255))*256+Math.round(et(nn.b*255,0,255))}getHexString(e=Gn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=ct.workingColorSpace){ct.fromWorkingColorSpace(nn.copy(this),n);const i=nn.r,s=nn.g,r=nn.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-i)/f+2;break;case r:l=(i-s)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=ct.workingColorSpace){return ct.fromWorkingColorSpace(nn.copy(this),n),e.r=nn.r,e.g=nn.g,e.b=nn.b,e}getStyle(e=Gn){ct.fromWorkingColorSpace(nn.copy(this),e);const n=nn.r,i=nn.g,s=nn.b;return e!==Gn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,n,i){return this.getHSL(ns),this.setHSL(ns.h+e,ns.s+n,ns.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(ns),e.getHSL(cl);const i=ea(ns.h,cl.h,n),s=ea(ns.s,cl.s,n),r=ea(ns.l,cl.l,n);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*n+r[3]*i+r[6]*s,this.g=r[1]*n+r[4]*i+r[7]*s,this.b=r[2]*n+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const nn=new vt;vt.NAMES=CE;let Rw=0;class jc extends gr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Rw++}),this.uuid=wo(),this.name="",this.type="Material",this.blending=Zr,this.side=Ts,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Cf,this.blendDst=wf,this.blendEquation=Ws,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new vt(0,0,0),this.blendAlpha=0,this.depthFunc=ho,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=vm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Tr,this.stencilZFail=Tr,this.stencilZPass=Tr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const s=this[n];if(s===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Zr&&(i.blending=this.blending),this.side!==Ts&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Cf&&(i.blendSrc=this.blendSrc),this.blendDst!==wf&&(i.blendDst=this.blendDst),this.blendEquation!==Ws&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ho&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==vm&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Tr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Tr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Tr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(n){const r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const s=n.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=n[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Od extends jc{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new vt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qi,this.combine=uE,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ft=new ne,ul=new Qe;class gi{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Em,this.updateRanges=[],this.gpuType=Fi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=n.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)ul.fromBufferAttribute(this,n),ul.applyMatrix3(e),this.setXY(n,ul.x,ul.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Ft.fromBufferAttribute(this,n),Ft.applyMatrix3(e),this.setXYZ(n,Ft.x,Ft.y,Ft.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Ft.fromBufferAttribute(this,n),Ft.applyMatrix4(e),this.setXYZ(n,Ft.x,Ft.y,Ft.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Ft.fromBufferAttribute(this,n),Ft.applyNormalMatrix(e),this.setXYZ(n,Ft.x,Ft.y,Ft.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Ft.fromBufferAttribute(this,n),Ft.transformDirection(e),this.setXYZ(n,Ft.x,Ft.y,Ft.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Hr(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=dn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Hr(n,this.array)),n}setX(e,n){return this.normalized&&(n=dn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Hr(n,this.array)),n}setY(e,n){return this.normalized&&(n=dn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Hr(n,this.array)),n}setZ(e,n){return this.normalized&&(n=dn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Hr(n,this.array)),n}setW(e,n){return this.normalized&&(n=dn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=dn(n,this.array),i=dn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,s){return e*=this.itemSize,this.normalized&&(n=dn(n,this.array),i=dn(i,this.array),s=dn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,n,i,s,r){return e*=this.itemSize,this.normalized&&(n=dn(n,this.array),i=dn(i,this.array),s=dn(s,this.array),r=dn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Em&&(e.usage=this.usage),e}}class wE extends gi{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class PE extends gi{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class ir extends gi{constructor(e,n,i){super(new Float32Array(e),n,i)}}let Cw=0;const zn=new Vt,Vu=new Fn,Lr=new ne,Dn=new Ua,Vo=new Ua,Yt=new ne;class vr extends gr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Cw++}),this.uuid=wo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ME(e)?PE:wE)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Ze().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return zn.makeRotationFromQuaternion(e),this.applyMatrix4(zn),this}rotateX(e){return zn.makeRotationX(e),this.applyMatrix4(zn),this}rotateY(e){return zn.makeRotationY(e),this.applyMatrix4(zn),this}rotateZ(e){return zn.makeRotationZ(e),this.applyMatrix4(zn),this}translate(e,n,i){return zn.makeTranslation(e,n,i),this.applyMatrix4(zn),this}scale(e,n,i){return zn.makeScale(e,n,i),this.applyMatrix4(zn),this}lookAt(e){return Vu.lookAt(e),Vu.updateMatrix(),this.applyMatrix4(Vu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Lr).negate(),this.translate(Lr.x,Lr.y,Lr.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ir(i,3))}else{const i=Math.min(e.length,n.count);for(let s=0;s<i;s++){const r=e[s];n.setXYZ(s,r.x,r.y,r.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ua);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ne(-1/0,-1/0,-1/0),new ne(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,s=n.length;i<s;i++){const r=n[i];Dn.setFromBufferAttribute(r),this.morphTargetsRelative?(Yt.addVectors(this.boundingBox.min,Dn.min),this.boundingBox.expandByPoint(Yt),Yt.addVectors(this.boundingBox.max,Dn.max),this.boundingBox.expandByPoint(Yt)):(this.boundingBox.expandByPoint(Dn.min),this.boundingBox.expandByPoint(Dn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ld);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ne,1/0);return}if(e){const i=this.boundingSphere.center;if(Dn.setFromBufferAttribute(e),n)for(let r=0,o=n.length;r<o;r++){const a=n[r];Vo.setFromBufferAttribute(a),this.morphTargetsRelative?(Yt.addVectors(Dn.min,Vo.min),Dn.expandByPoint(Yt),Yt.addVectors(Dn.max,Vo.max),Dn.expandByPoint(Yt)):(Dn.expandByPoint(Vo.min),Dn.expandByPoint(Vo.max))}Dn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)Yt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Yt));if(n)for(let r=0,o=n.length;r<o;r++){const a=n[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Yt.fromBufferAttribute(a,c),l&&(Lr.fromBufferAttribute(e,c),Yt.add(Lr)),s=Math.max(s,i.distanceToSquared(Yt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,s=n.normal,r=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new gi(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let A=0;A<i.count;A++)a[A]=new ne,l[A]=new ne;const c=new ne,u=new ne,f=new ne,h=new Qe,d=new Qe,g=new Qe,E=new ne,_=new ne;function p(A,m,v){c.fromBufferAttribute(i,A),u.fromBufferAttribute(i,m),f.fromBufferAttribute(i,v),h.fromBufferAttribute(r,A),d.fromBufferAttribute(r,m),g.fromBufferAttribute(r,v),u.sub(c),f.sub(c),d.sub(h),g.sub(h);const C=1/(d.x*g.y-g.x*d.y);isFinite(C)&&(E.copy(u).multiplyScalar(g.y).addScaledVector(f,-d.y).multiplyScalar(C),_.copy(f).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(C),a[A].add(E),a[m].add(E),a[v].add(E),l[A].add(_),l[m].add(_),l[v].add(_))}let R=this.groups;R.length===0&&(R=[{start:0,count:e.count}]);for(let A=0,m=R.length;A<m;++A){const v=R[A],C=v.start,I=v.count;for(let L=C,k=C+I;L<k;L+=3)p(e.getX(L+0),e.getX(L+1),e.getX(L+2))}const x=new ne,M=new ne,P=new ne,N=new ne;function T(A){P.fromBufferAttribute(s,A),N.copy(P);const m=a[A];x.copy(m),x.sub(P.multiplyScalar(P.dot(m))).normalize(),M.crossVectors(N,m);const C=M.dot(l[A])<0?-1:1;o.setXYZW(A,x.x,x.y,x.z,C)}for(let A=0,m=R.length;A<m;++A){const v=R[A],C=v.start,I=v.count;for(let L=C,k=C+I;L<k;L+=3)T(e.getX(L+0)),T(e.getX(L+1)),T(e.getX(L+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new gi(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,d=i.count;h<d;h++)i.setXYZ(h,0,0,0);const s=new ne,r=new ne,o=new ne,a=new ne,l=new ne,c=new ne,u=new ne,f=new ne;if(e)for(let h=0,d=e.count;h<d;h+=3){const g=e.getX(h+0),E=e.getX(h+1),_=e.getX(h+2);s.fromBufferAttribute(n,g),r.fromBufferAttribute(n,E),o.fromBufferAttribute(n,_),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,E),c.fromBufferAttribute(i,_),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(E,l.x,l.y,l.z),i.setXYZ(_,c.x,c.y,c.z)}else for(let h=0,d=n.count;h<d;h+=3)s.fromBufferAttribute(n,h+0),r.fromBufferAttribute(n,h+1),o.fromBufferAttribute(n,h+2),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Yt.fromBufferAttribute(e,n),Yt.normalize(),e.setXYZ(n,Yt.x,Yt.y,Yt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,h=new c.constructor(l.length*u);let d=0,g=0;for(let E=0,_=l.length;E<_;E++){a.isInterleavedBufferAttribute?d=l[E]*a.data.stride+a.offset:d=l[E]*u;for(let p=0;p<u;p++)h[g++]=c[d++]}return new gi(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new vr,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,i);n.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,f=c.length;u<f;u++){const h=c[u],d=e(h,i);l.push(d)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const d=c[f];u.push(d.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(n))}const r=e.morphAttributes;for(const c in r){const u=[],f=r[c];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Lm=new Vt,ks=new AE,fl=new Ld,Om=new ne,hl=new ne,dl=new ne,pl=new ne,Hu=new ne,ml=new ne,Um=new ne,_l=new ne;class pi extends Fn{constructor(e=new vr,n=new Od){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,n){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){ml.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],f=r[l];u!==0&&(Hu.fromBufferAttribute(f,e),o?ml.addScaledVector(Hu,u):ml.addScaledVector(Hu.sub(n),u))}n.add(ml)}return n}raycast(e,n){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),fl.copy(i.boundingSphere),fl.applyMatrix4(r),ks.copy(e.ray).recast(e.near),!(fl.containsPoint(ks.origin)===!1&&(ks.intersectSphere(fl,Om)===null||ks.origin.distanceToSquared(Om)>(e.far-e.near)**2))&&(Lm.copy(r).invert(),ks.copy(e.ray).applyMatrix4(Lm),!(i.boundingBox!==null&&ks.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,ks)))}_computeIntersections(e,n,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,h=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,E=h.length;g<E;g++){const _=h[g],p=o[_.materialIndex],R=Math.max(_.start,d.start),x=Math.min(a.count,Math.min(_.start+_.count,d.start+d.count));for(let M=R,P=x;M<P;M+=3){const N=a.getX(M),T=a.getX(M+1),A=a.getX(M+2);s=gl(this,p,e,i,c,u,f,N,T,A),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=_.materialIndex,n.push(s))}}else{const g=Math.max(0,d.start),E=Math.min(a.count,d.start+d.count);for(let _=g,p=E;_<p;_+=3){const R=a.getX(_),x=a.getX(_+1),M=a.getX(_+2);s=gl(this,o,e,i,c,u,f,R,x,M),s&&(s.faceIndex=Math.floor(_/3),n.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,E=h.length;g<E;g++){const _=h[g],p=o[_.materialIndex],R=Math.max(_.start,d.start),x=Math.min(l.count,Math.min(_.start+_.count,d.start+d.count));for(let M=R,P=x;M<P;M+=3){const N=M,T=M+1,A=M+2;s=gl(this,p,e,i,c,u,f,N,T,A),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=_.materialIndex,n.push(s))}}else{const g=Math.max(0,d.start),E=Math.min(l.count,d.start+d.count);for(let _=g,p=E;_<p;_+=3){const R=_,x=_+1,M=_+2;s=gl(this,o,e,i,c,u,f,R,x,M),s&&(s.faceIndex=Math.floor(_/3),n.push(s))}}}}function ww(t,e,n,i,s,r,o,a){let l;if(e.side===wn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===Ts,a),l===null)return null;_l.copy(a),_l.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(_l);return c<n.near||c>n.far?null:{distance:c,point:_l.clone(),object:t}}function gl(t,e,n,i,s,r,o,a,l,c){t.getVertexPosition(a,hl),t.getVertexPosition(l,dl),t.getVertexPosition(c,pl);const u=ww(t,e,n,i,hl,dl,pl,Um);if(u){const f=new ne;ii.getBarycoord(Um,hl,dl,pl,f),s&&(u.uv=ii.getInterpolatedAttribute(s,a,l,c,f,new Qe)),r&&(u.uv1=ii.getInterpolatedAttribute(r,a,l,c,f,new Qe)),o&&(u.normal=ii.getInterpolatedAttribute(o,a,l,c,f,new ne),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new ne,materialIndex:0};ii.getNormal(hl,dl,pl,h.normal),u.face=h,u.barycoord=f}return u}class Po extends vr{constructor(e=1,n=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],f=[];let h=0,d=0;g("z","y","x",-1,-1,i,n,e,o,r,0),g("z","y","x",1,-1,i,n,-e,o,r,1),g("x","z","y",1,1,e,i,n,s,o,2),g("x","z","y",1,-1,e,i,-n,s,o,3),g("x","y","z",1,-1,e,n,i,s,r,4),g("x","y","z",-1,-1,e,n,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new ir(c,3)),this.setAttribute("normal",new ir(u,3)),this.setAttribute("uv",new ir(f,2));function g(E,_,p,R,x,M,P,N,T,A,m){const v=M/T,C=P/A,I=M/2,L=P/2,k=N/2,G=T+1,O=A+1;let W=0,F=0;const le=new ne;for(let he=0;he<O;he++){const de=he*C-L;for(let ye=0;ye<G;ye++){const Le=ye*v-I;le[E]=Le*R,le[_]=de*x,le[p]=k,c.push(le.x,le.y,le.z),le[E]=0,le[_]=0,le[p]=N>0?1:-1,u.push(le.x,le.y,le.z),f.push(ye/T),f.push(1-he/A),W+=1}}for(let he=0;he<A;he++)for(let de=0;de<T;de++){const ye=h+de+G*he,Le=h+de+G*(he+1),ee=h+(de+1)+G*(he+1),ae=h+(de+1)+G*he;l.push(ye,Le,ae),l.push(Le,ee,ae),F+=6}a.addGroup(d,F,m),d+=F,h+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Po(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Eo(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const s=t[n][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=s.clone():Array.isArray(s)?e[n][i]=s.slice():e[n][i]=s}}return e}function pn(t){const e={};for(let n=0;n<t.length;n++){const i=Eo(t[n]);for(const s in i)e[s]=i[s]}return e}function Pw(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function IE(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ct.workingColorSpace}const Iw={clone:Eo,merge:pn};var Nw=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Dw=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class bs extends jc{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Nw,this.fragmentShader=Dw,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Eo(e.uniforms),this.uniformsGroups=Pw(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?n.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[s]={type:"m4",value:o.toArray()}:n.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class NE extends Fn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Vt,this.projectionMatrix=new Vt,this.projectionMatrixInverse=new Vt,this.coordinateSystem=ki}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const is=new ne,Fm=new Qe,km=new Qe;class Wn extends NE{constructor(e=50,n=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=xa*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Qo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return xa*2*Math.atan(Math.tan(Qo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){is.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(is.x,is.y).multiplyScalar(-e/is.z),is.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(is.x,is.y).multiplyScalar(-e/is.z)}getViewSize(e,n){return this.getViewBounds(e,Fm,km),n.subVectors(km,Fm)}setViewOffset(e,n,i,s,r,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Qo*.5*this.fov)/this.zoom,i=2*n,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,n-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Or=-90,Ur=1;class Lw extends Fn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Wn(Or,Ur,e,n);s.layers=this.layers,this.add(s);const r=new Wn(Or,Ur,e,n);r.layers=this.layers,this.add(r);const o=new Wn(Or,Ur,e,n);o.layers=this.layers,this.add(o);const a=new Wn(Or,Ur,e,n);a.layers=this.layers,this.add(a);const l=new Wn(Or,Ur,e,n);l.layers=this.layers,this.add(l);const c=new Wn(Or,Ur,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,s,r,o,a,l]=n;for(const c of n)this.remove(c);if(e===ki)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===cc)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const E=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(n,r),e.setRenderTarget(i,1,s),e.render(n,o),e.setRenderTarget(i,2,s),e.render(n,a),e.setRenderTarget(i,3,s),e.render(n,l),e.setRenderTarget(i,4,s),e.render(n,c),i.texture.generateMipmaps=E,e.setRenderTarget(i,5,s),e.render(n,u),e.setRenderTarget(f,h,d),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class DE extends Pn{constructor(e,n,i,s,r,o,a,l,c,u){e=e!==void 0?e:[],n=n!==void 0?n:po,super(e,n,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ow extends hr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new DE(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:di}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Po(5,5,5),r=new bs({name:"CubemapFromEquirect",uniforms:Eo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:wn,blending:Es});r.uniforms.tEquirect.value=n;const o=new pi(s,r),a=n.minFilter;return n.minFilter===Ys&&(n.minFilter=di),new Lw(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,s){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,s);e.setRenderTarget(r)}}class Uw extends Fn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new qi,this.environmentIntensity=1,this.environmentRotation=new qi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const zu=new ne,Fw=new ne,kw=new Ze;class hs{constructor(e=new ne(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,s){return this.normal.set(e,n,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const s=zu.subVectors(i,n).cross(Fw.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(zu),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:n.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||kw.getNormalMatrix(e),s=this.coplanarPoint(zu).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Bs=new Ld,vl=new ne;class LE{constructor(e=new hs,n=new hs,i=new hs,s=new hs,r=new hs,o=new hs){this.planes=[e,n,i,s,r,o]}set(e,n,i,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=ki){const i=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],u=s[5],f=s[6],h=s[7],d=s[8],g=s[9],E=s[10],_=s[11],p=s[12],R=s[13],x=s[14],M=s[15];if(i[0].setComponents(l-r,h-c,_-d,M-p).normalize(),i[1].setComponents(l+r,h+c,_+d,M+p).normalize(),i[2].setComponents(l+o,h+u,_+g,M+R).normalize(),i[3].setComponents(l-o,h-u,_-g,M-R).normalize(),i[4].setComponents(l-a,h-f,_-E,M-x).normalize(),n===ki)i[5].setComponents(l+a,h+f,_+E,M+x).normalize();else if(n===cc)i[5].setComponents(a,f,E,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Bs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Bs.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Bs)}intersectsSprite(e){return Bs.center.set(0,0,0),Bs.radius=.7071067811865476,Bs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Bs)}intersectsSphere(e){const n=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(n[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const s=n[i];if(vl.x=s.normal.x>0?e.max.x:e.min.x,vl.y=s.normal.y>0?e.max.y:e.min.y,vl.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(vl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class El extends Fn{constructor(){super(),this.isGroup=!0,this.type="Group"}}class OE extends Pn{constructor(e,n,i,s,r,o,a,l,c,u=Jr){if(u!==Jr&&u!==go)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Jr&&(i=fr),i===void 0&&u===go&&(i=_o),super(null,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:ai,this.minFilter=l!==void 0?l:ai,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class Kc extends vr{constructor(e=1,n=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:s};const r=e/2,o=n/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,f=e/a,h=n/l,d=[],g=[],E=[],_=[];for(let p=0;p<u;p++){const R=p*h-o;for(let x=0;x<c;x++){const M=x*f-r;g.push(M,-R,0),E.push(0,0,1),_.push(x/a),_.push(1-p/l)}}for(let p=0;p<l;p++)for(let R=0;R<a;R++){const x=R+c*p,M=R+c*(p+1),P=R+1+c*(p+1),N=R+1+c*p;d.push(x,M,N),d.push(M,P,N)}this.setIndex(d),this.setAttribute("position",new ir(g,3)),this.setAttribute("normal",new ir(E,3)),this.setAttribute("uv",new ir(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Kc(e.width,e.height,e.widthSegments,e.heightSegments)}}class Bw extends jc{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=UC,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Vw extends jc{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Hw extends NE{constructor(e=-1,n=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=s+n,l=s-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class zw extends Wn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Bm{constructor(e=1,n=0,i=0){return this.radius=e,this.phi=n,this.theta=i,this}set(e,n,i){return this.radius=e,this.phi=n,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=et(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,i){return this.radius=Math.sqrt(e*e+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(et(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Gw extends gr{constructor(e,n=null){super(),this.object=e,this.domElement=n,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}function Vm(t,e,n,i){const s=Ww(i);switch(n){case mE:return t*e;case gE:return t*e;case vE:return t*e*2;case EE:return t*e/s.components*s.byteLength;case Pd:return t*e/s.components*s.byteLength;case SE:return t*e*2/s.components*s.byteLength;case Id:return t*e*2/s.components*s.byteLength;case _E:return t*e*3/s.components*s.byteLength;case si:return t*e*4/s.components*s.byteLength;case Nd:return t*e*4/s.components*s.byteLength;case Ll:case Ol:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Ul:case Fl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case zf:case Wf:return Math.max(t,16)*Math.max(e,8)/4;case Hf:case Gf:return Math.max(t,8)*Math.max(e,8)/2;case Xf:case $f:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case qf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Yf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case jf:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Kf:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Zf:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Jf:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Qf:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case eh:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case th:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case nh:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case ih:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case sh:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case rh:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case oh:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case ah:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case kl:case lh:case ch:return Math.ceil(t/4)*Math.ceil(e/4)*16;case xE:case uh:return Math.ceil(t/4)*Math.ceil(e/4)*8;case fh:case hh:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function Ww(t){switch(t){case $i:case hE:return{byteLength:1,components:1};case Sa:case dE:case Oa:return{byteLength:2,components:1};case Cd:case wd:return{byteLength:2,components:4};case fr:case Rd:case Fi:return{byteLength:4,components:1};case pE:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ad}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ad);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function UE(){let t=null,e=!1,n=null,i=null;function s(r,o){n(r,o),i=t.requestAnimationFrame(s)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(s),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){n=r},setContext:function(r){t=r}}}function Xw(t){const e=new WeakMap;function n(a,l){const c=a.array,u=a.usage,f=c.byteLength,h=t.createBuffer();t.bindBuffer(l,h),t.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=t.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=t.HALF_FLOAT:d=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=t.SHORT;else if(c instanceof Uint32Array)d=t.UNSIGNED_INT;else if(c instanceof Int32Array)d=t.INT;else if(c instanceof Int8Array)d=t.BYTE;else if(c instanceof Uint8Array)d=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){const u=l.array,f=l.updateRanges;if(t.bindBuffer(c,a),f.length===0)t.bufferSubData(c,0,u);else{f.sort((d,g)=>d.start-g.start);let h=0;for(let d=1;d<f.length;d++){const g=f[h],E=f[d];E.start<=g.start+g.count+1?g.count=Math.max(g.count,E.start+E.count-g.start):(++h,f[h]=E)}f.length=h+1;for(let d=0,g=f.length;d<g;d++){const E=f[d];t.bufferSubData(c,E.start*u.BYTES_PER_ELEMENT,u,E.start,E.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var $w=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,qw=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Yw=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,jw=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Kw=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Zw=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Jw=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Qw=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,e2=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,t2=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,n2=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,i2=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,s2=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,r2=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,o2=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,a2=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,l2=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,c2=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,u2=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,f2=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,h2=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,d2=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,p2=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,m2=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,_2=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,g2=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,v2=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,E2=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,S2=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,x2=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,y2="gl_FragColor = linearToOutputTexel( gl_FragColor );",M2=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,T2=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,b2=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,A2=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,R2=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,C2=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,w2=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,P2=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,I2=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,N2=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,D2=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,L2=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,O2=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,U2=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,F2=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,k2=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,B2=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,V2=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,H2=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,z2=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,G2=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,W2=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,X2=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,$2=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,q2=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Y2=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,j2=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,K2=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Z2=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,J2=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Q2=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,eP=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,tP=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,nP=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,iP=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,sP=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,rP=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,oP=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,aP=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,lP=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cP=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,uP=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,fP=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hP=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dP=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,pP=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,mP=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,_P=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,gP=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,vP=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,EP=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,SP=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,xP=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,yP=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,MP=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,TP=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,bP=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,AP=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,RP=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,CP=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,wP=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,PP=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,IP=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,NP=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,DP=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,LP=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,OP=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,UP=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,FP=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,kP=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,BP=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,VP=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,HP=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,zP=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,GP=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,WP=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const XP=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,$P=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qP=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,YP=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jP=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,KP=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ZP=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,JP=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,QP=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,eI=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,tI=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,nI=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,iI=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sI=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,rI=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,oI=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,aI=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,lI=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cI=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,uI=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fI=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,hI=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,dI=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,pI=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mI=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,_I=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gI=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vI=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,EI=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,SI=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,xI=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yI=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,MI=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,TI=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Je={alphahash_fragment:$w,alphahash_pars_fragment:qw,alphamap_fragment:Yw,alphamap_pars_fragment:jw,alphatest_fragment:Kw,alphatest_pars_fragment:Zw,aomap_fragment:Jw,aomap_pars_fragment:Qw,batching_pars_vertex:e2,batching_vertex:t2,begin_vertex:n2,beginnormal_vertex:i2,bsdfs:s2,iridescence_fragment:r2,bumpmap_pars_fragment:o2,clipping_planes_fragment:a2,clipping_planes_pars_fragment:l2,clipping_planes_pars_vertex:c2,clipping_planes_vertex:u2,color_fragment:f2,color_pars_fragment:h2,color_pars_vertex:d2,color_vertex:p2,common:m2,cube_uv_reflection_fragment:_2,defaultnormal_vertex:g2,displacementmap_pars_vertex:v2,displacementmap_vertex:E2,emissivemap_fragment:S2,emissivemap_pars_fragment:x2,colorspace_fragment:y2,colorspace_pars_fragment:M2,envmap_fragment:T2,envmap_common_pars_fragment:b2,envmap_pars_fragment:A2,envmap_pars_vertex:R2,envmap_physical_pars_fragment:k2,envmap_vertex:C2,fog_vertex:w2,fog_pars_vertex:P2,fog_fragment:I2,fog_pars_fragment:N2,gradientmap_pars_fragment:D2,lightmap_pars_fragment:L2,lights_lambert_fragment:O2,lights_lambert_pars_fragment:U2,lights_pars_begin:F2,lights_toon_fragment:B2,lights_toon_pars_fragment:V2,lights_phong_fragment:H2,lights_phong_pars_fragment:z2,lights_physical_fragment:G2,lights_physical_pars_fragment:W2,lights_fragment_begin:X2,lights_fragment_maps:$2,lights_fragment_end:q2,logdepthbuf_fragment:Y2,logdepthbuf_pars_fragment:j2,logdepthbuf_pars_vertex:K2,logdepthbuf_vertex:Z2,map_fragment:J2,map_pars_fragment:Q2,map_particle_fragment:eP,map_particle_pars_fragment:tP,metalnessmap_fragment:nP,metalnessmap_pars_fragment:iP,morphinstance_vertex:sP,morphcolor_vertex:rP,morphnormal_vertex:oP,morphtarget_pars_vertex:aP,morphtarget_vertex:lP,normal_fragment_begin:cP,normal_fragment_maps:uP,normal_pars_fragment:fP,normal_pars_vertex:hP,normal_vertex:dP,normalmap_pars_fragment:pP,clearcoat_normal_fragment_begin:mP,clearcoat_normal_fragment_maps:_P,clearcoat_pars_fragment:gP,iridescence_pars_fragment:vP,opaque_fragment:EP,packing:SP,premultiplied_alpha_fragment:xP,project_vertex:yP,dithering_fragment:MP,dithering_pars_fragment:TP,roughnessmap_fragment:bP,roughnessmap_pars_fragment:AP,shadowmap_pars_fragment:RP,shadowmap_pars_vertex:CP,shadowmap_vertex:wP,shadowmask_pars_fragment:PP,skinbase_vertex:IP,skinning_pars_vertex:NP,skinning_vertex:DP,skinnormal_vertex:LP,specularmap_fragment:OP,specularmap_pars_fragment:UP,tonemapping_fragment:FP,tonemapping_pars_fragment:kP,transmission_fragment:BP,transmission_pars_fragment:VP,uv_pars_fragment:HP,uv_pars_vertex:zP,uv_vertex:GP,worldpos_vertex:WP,background_vert:XP,background_frag:$P,backgroundCube_vert:qP,backgroundCube_frag:YP,cube_vert:jP,cube_frag:KP,depth_vert:ZP,depth_frag:JP,distanceRGBA_vert:QP,distanceRGBA_frag:eI,equirect_vert:tI,equirect_frag:nI,linedashed_vert:iI,linedashed_frag:sI,meshbasic_vert:rI,meshbasic_frag:oI,meshlambert_vert:aI,meshlambert_frag:lI,meshmatcap_vert:cI,meshmatcap_frag:uI,meshnormal_vert:fI,meshnormal_frag:hI,meshphong_vert:dI,meshphong_frag:pI,meshphysical_vert:mI,meshphysical_frag:_I,meshtoon_vert:gI,meshtoon_frag:vI,points_vert:EI,points_frag:SI,shadow_vert:xI,shadow_frag:yI,sprite_vert:MI,sprite_frag:TI},Ae={common:{diffuse:{value:new vt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ze}},envmap:{envMap:{value:null},envMapRotation:{value:new Ze},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ze},normalScale:{value:new Qe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new vt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new vt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0},uvTransform:{value:new Ze}},sprite:{diffuse:{value:new vt(16777215)},opacity:{value:1},center:{value:new Qe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}}},hi={basic:{uniforms:pn([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.fog]),vertexShader:Je.meshbasic_vert,fragmentShader:Je.meshbasic_frag},lambert:{uniforms:pn([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new vt(0)}}]),vertexShader:Je.meshlambert_vert,fragmentShader:Je.meshlambert_frag},phong:{uniforms:pn([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new vt(0)},specular:{value:new vt(1118481)},shininess:{value:30}}]),vertexShader:Je.meshphong_vert,fragmentShader:Je.meshphong_frag},standard:{uniforms:pn([Ae.common,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.roughnessmap,Ae.metalnessmap,Ae.fog,Ae.lights,{emissive:{value:new vt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag},toon:{uniforms:pn([Ae.common,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.gradientmap,Ae.fog,Ae.lights,{emissive:{value:new vt(0)}}]),vertexShader:Je.meshtoon_vert,fragmentShader:Je.meshtoon_frag},matcap:{uniforms:pn([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,{matcap:{value:null}}]),vertexShader:Je.meshmatcap_vert,fragmentShader:Je.meshmatcap_frag},points:{uniforms:pn([Ae.points,Ae.fog]),vertexShader:Je.points_vert,fragmentShader:Je.points_frag},dashed:{uniforms:pn([Ae.common,Ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Je.linedashed_vert,fragmentShader:Je.linedashed_frag},depth:{uniforms:pn([Ae.common,Ae.displacementmap]),vertexShader:Je.depth_vert,fragmentShader:Je.depth_frag},normal:{uniforms:pn([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,{opacity:{value:1}}]),vertexShader:Je.meshnormal_vert,fragmentShader:Je.meshnormal_frag},sprite:{uniforms:pn([Ae.sprite,Ae.fog]),vertexShader:Je.sprite_vert,fragmentShader:Je.sprite_frag},background:{uniforms:{uvTransform:{value:new Ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Je.background_vert,fragmentShader:Je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ze}},vertexShader:Je.backgroundCube_vert,fragmentShader:Je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Je.cube_vert,fragmentShader:Je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Je.equirect_vert,fragmentShader:Je.equirect_frag},distanceRGBA:{uniforms:pn([Ae.common,Ae.displacementmap,{referencePosition:{value:new ne},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Je.distanceRGBA_vert,fragmentShader:Je.distanceRGBA_frag},shadow:{uniforms:pn([Ae.lights,Ae.fog,{color:{value:new vt(0)},opacity:{value:1}}]),vertexShader:Je.shadow_vert,fragmentShader:Je.shadow_frag}};hi.physical={uniforms:pn([hi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ze},clearcoatNormalScale:{value:new Qe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ze},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ze},sheen:{value:0},sheenColor:{value:new vt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ze},transmissionSamplerSize:{value:new Qe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ze},attenuationDistance:{value:0},attenuationColor:{value:new vt(0)},specularColor:{value:new vt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ze},anisotropyVector:{value:new Qe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ze}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag};const Sl={r:0,b:0,g:0},Vs=new qi,bI=new Vt;function AI(t,e,n,i,s,r,o){const a=new vt(0);let l=r===!0?0:1,c,u,f=null,h=0,d=null;function g(x){let M=x.isScene===!0?x.background:null;return M&&M.isTexture&&(M=(x.backgroundBlurriness>0?n:e).get(M)),M}function E(x){let M=!1;const P=g(x);P===null?p(a,l):P&&P.isColor&&(p(P,1),M=!0);const N=t.xr.getEnvironmentBlendMode();N==="additive"?i.buffers.color.setClear(0,0,0,1,o):N==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||M)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function _(x,M){const P=g(M);P&&(P.isCubeTexture||P.mapping===Yc)?(u===void 0&&(u=new pi(new Po(1,1,1),new bs({name:"BackgroundCubeMaterial",uniforms:Eo(hi.backgroundCube.uniforms),vertexShader:hi.backgroundCube.vertexShader,fragmentShader:hi.backgroundCube.fragmentShader,side:wn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(N,T,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Vs.copy(M.backgroundRotation),Vs.x*=-1,Vs.y*=-1,Vs.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(Vs.y*=-1,Vs.z*=-1),u.material.uniforms.envMap.value=P,u.material.uniforms.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(bI.makeRotationFromEuler(Vs)),u.material.toneMapped=ct.getTransfer(P.colorSpace)!==_t,(f!==P||h!==P.version||d!==t.toneMapping)&&(u.material.needsUpdate=!0,f=P,h=P.version,d=t.toneMapping),u.layers.enableAll(),x.unshift(u,u.geometry,u.material,0,0,null)):P&&P.isTexture&&(c===void 0&&(c=new pi(new Kc(2,2),new bs({name:"BackgroundMaterial",uniforms:Eo(hi.background.uniforms),vertexShader:hi.background.vertexShader,fragmentShader:hi.background.fragmentShader,side:Ts,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=P,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=ct.getTransfer(P.colorSpace)!==_t,P.matrixAutoUpdate===!0&&P.updateMatrix(),c.material.uniforms.uvTransform.value.copy(P.matrix),(f!==P||h!==P.version||d!==t.toneMapping)&&(c.material.needsUpdate=!0,f=P,h=P.version,d=t.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function p(x,M){x.getRGB(Sl,IE(t)),i.buffers.color.setClear(Sl.r,Sl.g,Sl.b,M,o)}function R(){u!==void 0&&(u.geometry.dispose(),u.material.dispose()),c!==void 0&&(c.geometry.dispose(),c.material.dispose())}return{getClearColor:function(){return a},setClearColor:function(x,M=1){a.set(x),l=M,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,p(a,l)},render:E,addToRenderList:_,dispose:R}}function RI(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},s=h(null);let r=s,o=!1;function a(v,C,I,L,k){let G=!1;const O=f(L,I,C);r!==O&&(r=O,c(r.object)),G=d(v,L,I,k),G&&g(v,L,I,k),k!==null&&e.update(k,t.ELEMENT_ARRAY_BUFFER),(G||o)&&(o=!1,M(v,C,I,L),k!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(k).buffer))}function l(){return t.createVertexArray()}function c(v){return t.bindVertexArray(v)}function u(v){return t.deleteVertexArray(v)}function f(v,C,I){const L=I.wireframe===!0;let k=i[v.id];k===void 0&&(k={},i[v.id]=k);let G=k[C.id];G===void 0&&(G={},k[C.id]=G);let O=G[L];return O===void 0&&(O=h(l()),G[L]=O),O}function h(v){const C=[],I=[],L=[];for(let k=0;k<n;k++)C[k]=0,I[k]=0,L[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:I,attributeDivisors:L,object:v,attributes:{},index:null}}function d(v,C,I,L){const k=r.attributes,G=C.attributes;let O=0;const W=I.getAttributes();for(const F in W)if(W[F].location>=0){const he=k[F];let de=G[F];if(de===void 0&&(F==="instanceMatrix"&&v.instanceMatrix&&(de=v.instanceMatrix),F==="instanceColor"&&v.instanceColor&&(de=v.instanceColor)),he===void 0||he.attribute!==de||de&&he.data!==de.data)return!0;O++}return r.attributesNum!==O||r.index!==L}function g(v,C,I,L){const k={},G=C.attributes;let O=0;const W=I.getAttributes();for(const F in W)if(W[F].location>=0){let he=G[F];he===void 0&&(F==="instanceMatrix"&&v.instanceMatrix&&(he=v.instanceMatrix),F==="instanceColor"&&v.instanceColor&&(he=v.instanceColor));const de={};de.attribute=he,he&&he.data&&(de.data=he.data),k[F]=de,O++}r.attributes=k,r.attributesNum=O,r.index=L}function E(){const v=r.newAttributes;for(let C=0,I=v.length;C<I;C++)v[C]=0}function _(v){p(v,0)}function p(v,C){const I=r.newAttributes,L=r.enabledAttributes,k=r.attributeDivisors;I[v]=1,L[v]===0&&(t.enableVertexAttribArray(v),L[v]=1),k[v]!==C&&(t.vertexAttribDivisor(v,C),k[v]=C)}function R(){const v=r.newAttributes,C=r.enabledAttributes;for(let I=0,L=C.length;I<L;I++)C[I]!==v[I]&&(t.disableVertexAttribArray(I),C[I]=0)}function x(v,C,I,L,k,G,O){O===!0?t.vertexAttribIPointer(v,C,I,k,G):t.vertexAttribPointer(v,C,I,L,k,G)}function M(v,C,I,L){E();const k=L.attributes,G=I.getAttributes(),O=C.defaultAttributeValues;for(const W in G){const F=G[W];if(F.location>=0){let le=k[W];if(le===void 0&&(W==="instanceMatrix"&&v.instanceMatrix&&(le=v.instanceMatrix),W==="instanceColor"&&v.instanceColor&&(le=v.instanceColor)),le!==void 0){const he=le.normalized,de=le.itemSize,ye=e.get(le);if(ye===void 0)continue;const Le=ye.buffer,ee=ye.type,ae=ye.bytesPerElement,fe=ee===t.INT||ee===t.UNSIGNED_INT||le.gpuType===Rd;if(le.isInterleavedBufferAttribute){const B=le.data,ie=B.stride,se=le.offset;if(B.isInstancedInterleavedBuffer){for(let te=0;te<F.locationSize;te++)p(F.location+te,B.meshPerAttribute);v.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=B.meshPerAttribute*B.count)}else for(let te=0;te<F.locationSize;te++)_(F.location+te);t.bindBuffer(t.ARRAY_BUFFER,Le);for(let te=0;te<F.locationSize;te++)x(F.location+te,de/F.locationSize,ee,he,ie*ae,(se+de/F.locationSize*te)*ae,fe)}else{if(le.isInstancedBufferAttribute){for(let B=0;B<F.locationSize;B++)p(F.location+B,le.meshPerAttribute);v.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let B=0;B<F.locationSize;B++)_(F.location+B);t.bindBuffer(t.ARRAY_BUFFER,Le);for(let B=0;B<F.locationSize;B++)x(F.location+B,de/F.locationSize,ee,he,de*ae,de/F.locationSize*B*ae,fe)}}else if(O!==void 0){const he=O[W];if(he!==void 0)switch(he.length){case 2:t.vertexAttrib2fv(F.location,he);break;case 3:t.vertexAttrib3fv(F.location,he);break;case 4:t.vertexAttrib4fv(F.location,he);break;default:t.vertexAttrib1fv(F.location,he)}}}}R()}function P(){A();for(const v in i){const C=i[v];for(const I in C){const L=C[I];for(const k in L)u(L[k].object),delete L[k];delete C[I]}delete i[v]}}function N(v){if(i[v.id]===void 0)return;const C=i[v.id];for(const I in C){const L=C[I];for(const k in L)u(L[k].object),delete L[k];delete C[I]}delete i[v.id]}function T(v){for(const C in i){const I=i[C];if(I[v.id]===void 0)continue;const L=I[v.id];for(const k in L)u(L[k].object),delete L[k];delete I[v.id]}}function A(){m(),o=!0,r!==s&&(r=s,c(r.object))}function m(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:A,resetDefaultState:m,dispose:P,releaseStatesOfGeometry:N,releaseStatesOfProgram:T,initAttributes:E,enableAttribute:_,disableUnusedAttributes:R}}function CI(t,e,n){let i;function s(c){i=c}function r(c,u){t.drawArrays(i,c,u),n.update(u,i,1)}function o(c,u,f){f!==0&&(t.drawArraysInstanced(i,c,u,f),n.update(u,i,f))}function a(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,f);let d=0;for(let g=0;g<f;g++)d+=u[g];n.update(d,i,1)}function l(c,u,f,h){if(f===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)o(c[g],u[g],h[g]);else{d.multiDrawArraysInstancedWEBGL(i,c,0,u,0,h,0,f);let g=0;for(let E=0;E<f;E++)g+=u[E]*h[E];n.update(g,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function wI(t,e,n,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");s=t.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(T){return!(T!==si&&i.convert(T)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){const A=T===Oa&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==$i&&i.convert(T)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==Fi&&!A)}function l(T){if(T==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=n.logarithmicDepthBuffer===!0,h=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),d=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=t.getParameter(t.MAX_TEXTURE_SIZE),_=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),p=t.getParameter(t.MAX_VERTEX_ATTRIBS),R=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),x=t.getParameter(t.MAX_VARYING_VECTORS),M=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),P=g>0,N=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:h,maxTextures:d,maxVertexTextures:g,maxTextureSize:E,maxCubemapSize:_,maxAttributes:p,maxVertexUniforms:R,maxVaryings:x,maxFragmentUniforms:M,vertexTextures:P,maxSamples:N}}function PI(t){const e=this;let n=null,i=0,s=!1,r=!1;const o=new hs,a=new Ze,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const d=f.length!==0||h||i!==0||s;return s=h,i=f.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,h){n=u(f,h,0)},this.setState=function(f,h,d){const g=f.clippingPlanes,E=f.clipIntersection,_=f.clipShadows,p=t.get(f);if(!s||g===null||g.length===0||r&&!_)r?u(null):c();else{const R=r?0:i,x=R*4;let M=p.clippingState||null;l.value=M,M=u(g,h,x,d);for(let P=0;P!==x;++P)M[P]=n[P];p.clippingState=M,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=R}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,h,d,g){const E=f!==null?f.length:0;let _=null;if(E!==0){if(_=l.value,g!==!0||_===null){const p=d+E*4,R=h.matrixWorldInverse;a.getNormalMatrix(R),(_===null||_.length<p)&&(_=new Float32Array(p));for(let x=0,M=d;x!==E;++x,M+=4)o.copy(f[x]).applyMatrix4(R,a),o.normal.toArray(_,M),_[M+3]=o.constant}l.value=_,l.needsUpdate=!0}return e.numPlanes=E,e.numIntersection=0,_}}function II(t){let e=new WeakMap;function n(o,a){return a===Ff?o.mapping=po:a===kf&&(o.mapping=mo),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Ff||a===kf)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Ow(l.height);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",s),n(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}const $r=4,Hm=[.125,.215,.35,.446,.526,.582],Xs=20,Gu=new Hw,zm=new vt;let Wu=null,Xu=0,$u=0,qu=!1;const Gs=(1+Math.sqrt(5))/2,Fr=1/Gs,Gm=[new ne(-Gs,Fr,0),new ne(Gs,Fr,0),new ne(-Fr,0,Gs),new ne(Fr,0,Gs),new ne(0,Gs,-Fr),new ne(0,Gs,Fr),new ne(-1,1,-1),new ne(1,1,-1),new ne(-1,1,1),new ne(1,1,1)];class Wm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,s=100){Wu=this._renderer.getRenderTarget(),Xu=this._renderer.getActiveCubeFace(),$u=this._renderer.getActiveMipmapLevel(),qu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),n>0&&this._blur(r,0,0,n),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=qm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=$m(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Wu,Xu,$u),this._renderer.xr.enabled=qu,e.scissorTest=!1,xl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===po||e.mapping===mo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Wu=this._renderer.getRenderTarget(),Xu=this._renderer.getActiveCubeFace(),$u=this._renderer.getActiveMipmapLevel(),qu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:di,minFilter:di,generateMipmaps:!1,type:Oa,format:si,colorSpace:vo,depthBuffer:!1},s=Xm(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Xm(e,n,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=NI(r)),this._blurMaterial=DI(r,e,n)}return s}_compileMaterial(e){const n=new pi(this._lodPlanes[0],e);this._renderer.compile(n,Gu)}_sceneToCubeUV(e,n,i,s){const a=new Wn(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(zm),u.toneMapping=Ss,u.autoClear=!1;const d=new Od({name:"PMREM.Background",side:wn,depthWrite:!1,depthTest:!1}),g=new pi(new Po,d);let E=!1;const _=e.background;_?_.isColor&&(d.color.copy(_),e.background=null,E=!0):(d.color.copy(zm),E=!0);for(let p=0;p<6;p++){const R=p%3;R===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):R===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const x=this._cubeSize;xl(s,R*x,p>2?x:0,x,x),u.setRenderTarget(s),E&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=h,u.autoClear=f,e.background=_}_textureToCubeUV(e,n){const i=this._renderer,s=e.mapping===po||e.mapping===mo;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=qm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=$m());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new pi(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;xl(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Gu)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Gm[(s-r-1)%Gm.length];this._blur(e,r-1,r,o,a)}n.autoClear=i}_blur(e,n,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,n,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new pi(this._lodPlanes[s],c),h=c.uniforms,d=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Xs-1),E=r/g,_=isFinite(r)?1+Math.floor(u*E):Xs;_>Xs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${Xs}`);const p=[];let R=0;for(let T=0;T<Xs;++T){const A=T/E,m=Math.exp(-A*A/2);p.push(m),T===0?R+=m:T<_&&(R+=2*m)}for(let T=0;T<p.length;T++)p[T]=p[T]/R;h.envMap.value=e.texture,h.samples.value=_,h.weights.value=p,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:x}=this;h.dTheta.value=g,h.mipInt.value=x-i;const M=this._sizeLods[s],P=3*M*(s>x-$r?s-x+$r:0),N=4*(this._cubeSize-M);xl(n,P,N,3*M,2*M),l.setRenderTarget(n),l.render(f,Gu)}}function NI(t){const e=[],n=[],i=[];let s=t;const r=t-$r+1+Hm.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);n.push(a);let l=1/a;o>t-$r?l=Hm[o-t+$r-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],d=6,g=6,E=3,_=2,p=1,R=new Float32Array(E*g*d),x=new Float32Array(_*g*d),M=new Float32Array(p*g*d);for(let N=0;N<d;N++){const T=N%3*2/3-1,A=N>2?0:-1,m=[T,A,0,T+2/3,A,0,T+2/3,A+1,0,T,A,0,T+2/3,A+1,0,T,A+1,0];R.set(m,E*g*N),x.set(h,_*g*N);const v=[N,N,N,N,N,N];M.set(v,p*g*N)}const P=new vr;P.setAttribute("position",new gi(R,E)),P.setAttribute("uv",new gi(x,_)),P.setAttribute("faceIndex",new gi(M,p)),e.push(P),s>$r&&s--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Xm(t,e,n){const i=new hr(t,e,n);return i.texture.mapping=Yc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function xl(t,e,n,i,s){t.viewport.set(e,n,i,s),t.scissor.set(e,n,i,s)}function DI(t,e,n){const i=new Float32Array(Xs),s=new ne(0,1,0);return new bs({name:"SphericalGaussianBlur",defines:{n:Xs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ud(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Es,depthTest:!1,depthWrite:!1})}function $m(){return new bs({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ud(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Es,depthTest:!1,depthWrite:!1})}function qm(){return new bs({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ud(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Es,depthTest:!1,depthWrite:!1})}function Ud(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function LI(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Ff||l===kf,u=l===po||l===mo;if(c||u){let f=e.get(a);const h=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return n===null&&(n=new Wm(t)),f=c?n.fromEquirectangular(a,f):n.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const d=a.image;return c&&d&&d.height>0||u&&d&&s(d)?(n===null&&(n=new Wm(t)),f=c?n.fromEquirectangular(a):n.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",r),f.texture):null}}}return a}function s(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function OI(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=t.getExtension(i)}return e[i]=s,s}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const s=n(i);return s===null&&zr("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function UI(t,e,n,i){const s={},r=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",o),delete s[h.id];const d=r.get(h);d&&(e.remove(d),r.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function a(f,h){return s[h.id]===!0||(h.addEventListener("dispose",o),s[h.id]=!0,n.memory.geometries++),h}function l(f){const h=f.attributes;for(const d in h)e.update(h[d],t.ARRAY_BUFFER)}function c(f){const h=[],d=f.index,g=f.attributes.position;let E=0;if(d!==null){const R=d.array;E=d.version;for(let x=0,M=R.length;x<M;x+=3){const P=R[x+0],N=R[x+1],T=R[x+2];h.push(P,N,N,T,T,P)}}else if(g!==void 0){const R=g.array;E=g.version;for(let x=0,M=R.length/3-1;x<M;x+=3){const P=x+0,N=x+1,T=x+2;h.push(P,N,N,T,T,P)}}else return;const _=new(ME(h)?PE:wE)(h,1);_.version=E;const p=r.get(f);p&&e.remove(p),r.set(f,_)}function u(f){const h=r.get(f);if(h){const d=f.index;d!==null&&h.version<d.version&&c(f)}else c(f);return r.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function FI(t,e,n){let i;function s(h){i=h}let r,o;function a(h){r=h.type,o=h.bytesPerElement}function l(h,d){t.drawElements(i,d,r,h*o),n.update(d,i,1)}function c(h,d,g){g!==0&&(t.drawElementsInstanced(i,d,r,h*o,g),n.update(d,i,g))}function u(h,d,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,h,0,g);let _=0;for(let p=0;p<g;p++)_+=d[p];n.update(_,i,1)}function f(h,d,g,E){if(g===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let p=0;p<h.length;p++)c(h[p]/o,d[p],E[p]);else{_.multiDrawElementsInstancedWEBGL(i,d,0,r,h,0,E,0,g);let p=0;for(let R=0;R<g;R++)p+=d[R]*E[R];n.update(p,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function kI(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(r/3);break;case t.LINES:n.lines+=a*(r/2);break;case t.LINE_STRIP:n.lines+=a*(r-1);break;case t.LINE_LOOP:n.lines+=a*r;break;case t.POINTS:n.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:s,update:i}}function BI(t,e,n){const i=new WeakMap,s=new Lt;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let h=i.get(a);if(h===void 0||h.count!==f){let m=function(){T.dispose(),i.delete(a),a.removeEventListener("dispose",m)};h!==void 0&&h.texture.dispose();const d=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,E=a.morphAttributes.color!==void 0,_=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],R=a.morphAttributes.color||[];let x=0;d===!0&&(x=1),g===!0&&(x=2),E===!0&&(x=3);let M=a.attributes.position.count*x,P=1;M>e.maxTextureSize&&(P=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);const N=new Float32Array(M*P*4*f),T=new bE(N,M,P,f);T.type=Fi,T.needsUpdate=!0;const A=x*4;for(let v=0;v<f;v++){const C=_[v],I=p[v],L=R[v],k=M*P*4*v;for(let G=0;G<C.count;G++){const O=G*A;d===!0&&(s.fromBufferAttribute(C,G),N[k+O+0]=s.x,N[k+O+1]=s.y,N[k+O+2]=s.z,N[k+O+3]=0),g===!0&&(s.fromBufferAttribute(I,G),N[k+O+4]=s.x,N[k+O+5]=s.y,N[k+O+6]=s.z,N[k+O+7]=0),E===!0&&(s.fromBufferAttribute(L,G),N[k+O+8]=s.x,N[k+O+9]=s.y,N[k+O+10]=s.z,N[k+O+11]=L.itemSize===4?s.w:1)}}h={count:f,texture:T,size:new Qe(M,P)},i.set(a,h),a.addEventListener("dispose",m)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let d=0;for(let E=0;E<c.length;E++)d+=c[E];const g=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(t,"morphTargetBaseInfluence",g),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",h.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",h.size)}return{update:r}}function VI(t,e,n,i){let s=new WeakMap;function r(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(s.get(f)!==c&&(e.update(f),s.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;s.get(h)!==c&&(h.update(),s.set(h,c))}return f}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:r,dispose:o}}const FE=new Pn,Ym=new OE(1,1),kE=new bE,BE=new Ew,VE=new DE,jm=[],Km=[],Zm=new Float32Array(16),Jm=new Float32Array(9),Qm=new Float32Array(4);function Io(t,e,n){const i=t[0];if(i<=0||i>0)return t;const s=e*n;let r=jm[s];if(r===void 0&&(r=new Float32Array(s),jm[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(r,a)}return r}function Xt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function $t(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Zc(t,e){let n=Km[e];n===void 0&&(n=new Int32Array(e),Km[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function HI(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function zI(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Xt(n,e))return;t.uniform2fv(this.addr,e),$t(n,e)}}function GI(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Xt(n,e))return;t.uniform3fv(this.addr,e),$t(n,e)}}function WI(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Xt(n,e))return;t.uniform4fv(this.addr,e),$t(n,e)}}function XI(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Xt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),$t(n,e)}else{if(Xt(n,i))return;Qm.set(i),t.uniformMatrix2fv(this.addr,!1,Qm),$t(n,i)}}function $I(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Xt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),$t(n,e)}else{if(Xt(n,i))return;Jm.set(i),t.uniformMatrix3fv(this.addr,!1,Jm),$t(n,i)}}function qI(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Xt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),$t(n,e)}else{if(Xt(n,i))return;Zm.set(i),t.uniformMatrix4fv(this.addr,!1,Zm),$t(n,i)}}function YI(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function jI(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Xt(n,e))return;t.uniform2iv(this.addr,e),$t(n,e)}}function KI(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Xt(n,e))return;t.uniform3iv(this.addr,e),$t(n,e)}}function ZI(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Xt(n,e))return;t.uniform4iv(this.addr,e),$t(n,e)}}function JI(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function QI(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Xt(n,e))return;t.uniform2uiv(this.addr,e),$t(n,e)}}function eN(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Xt(n,e))return;t.uniform3uiv(this.addr,e),$t(n,e)}}function tN(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Xt(n,e))return;t.uniform4uiv(this.addr,e),$t(n,e)}}function nN(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s);let r;this.type===t.SAMPLER_2D_SHADOW?(Ym.compareFunction=yE,r=Ym):r=FE,n.setTexture2D(e||r,s)}function iN(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTexture3D(e||BE,s)}function sN(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTextureCube(e||VE,s)}function rN(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTexture2DArray(e||kE,s)}function oN(t){switch(t){case 5126:return HI;case 35664:return zI;case 35665:return GI;case 35666:return WI;case 35674:return XI;case 35675:return $I;case 35676:return qI;case 5124:case 35670:return YI;case 35667:case 35671:return jI;case 35668:case 35672:return KI;case 35669:case 35673:return ZI;case 5125:return JI;case 36294:return QI;case 36295:return eN;case 36296:return tN;case 35678:case 36198:case 36298:case 36306:case 35682:return nN;case 35679:case 36299:case 36307:return iN;case 35680:case 36300:case 36308:case 36293:return sN;case 36289:case 36303:case 36311:case 36292:return rN}}function aN(t,e){t.uniform1fv(this.addr,e)}function lN(t,e){const n=Io(e,this.size,2);t.uniform2fv(this.addr,n)}function cN(t,e){const n=Io(e,this.size,3);t.uniform3fv(this.addr,n)}function uN(t,e){const n=Io(e,this.size,4);t.uniform4fv(this.addr,n)}function fN(t,e){const n=Io(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function hN(t,e){const n=Io(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function dN(t,e){const n=Io(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function pN(t,e){t.uniform1iv(this.addr,e)}function mN(t,e){t.uniform2iv(this.addr,e)}function _N(t,e){t.uniform3iv(this.addr,e)}function gN(t,e){t.uniform4iv(this.addr,e)}function vN(t,e){t.uniform1uiv(this.addr,e)}function EN(t,e){t.uniform2uiv(this.addr,e)}function SN(t,e){t.uniform3uiv(this.addr,e)}function xN(t,e){t.uniform4uiv(this.addr,e)}function yN(t,e,n){const i=this.cache,s=e.length,r=Zc(n,s);Xt(i,r)||(t.uniform1iv(this.addr,r),$t(i,r));for(let o=0;o!==s;++o)n.setTexture2D(e[o]||FE,r[o])}function MN(t,e,n){const i=this.cache,s=e.length,r=Zc(n,s);Xt(i,r)||(t.uniform1iv(this.addr,r),$t(i,r));for(let o=0;o!==s;++o)n.setTexture3D(e[o]||BE,r[o])}function TN(t,e,n){const i=this.cache,s=e.length,r=Zc(n,s);Xt(i,r)||(t.uniform1iv(this.addr,r),$t(i,r));for(let o=0;o!==s;++o)n.setTextureCube(e[o]||VE,r[o])}function bN(t,e,n){const i=this.cache,s=e.length,r=Zc(n,s);Xt(i,r)||(t.uniform1iv(this.addr,r),$t(i,r));for(let o=0;o!==s;++o)n.setTexture2DArray(e[o]||kE,r[o])}function AN(t){switch(t){case 5126:return aN;case 35664:return lN;case 35665:return cN;case 35666:return uN;case 35674:return fN;case 35675:return hN;case 35676:return dN;case 5124:case 35670:return pN;case 35667:case 35671:return mN;case 35668:case 35672:return _N;case 35669:case 35673:return gN;case 5125:return vN;case 36294:return EN;case 36295:return SN;case 36296:return xN;case 35678:case 36198:case 36298:case 36306:case 35682:return yN;case 35679:case 36299:case 36307:return MN;case 35680:case 36300:case 36308:case 36293:return TN;case 36289:case 36303:case 36311:case 36292:return bN}}class RN{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=oN(n.type)}}class CN{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=AN(n.type)}}class wN{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,n[a.id],i)}}}const Yu=/(\w+)(\])?(\[|\.)?/g;function e_(t,e){t.seq.push(e),t.map[e.id]=e}function PN(t,e,n){const i=t.name,s=i.length;for(Yu.lastIndex=0;;){const r=Yu.exec(i),o=Yu.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){e_(n,c===void 0?new RN(a,t,e):new CN(a,t,e));break}else{let f=n.map[a];f===void 0&&(f=new wN(a),e_(n,f)),n=f}}}class Bl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=e.getActiveUniform(n,s),o=e.getUniformLocation(n,r.name);PN(r,o,this)}}setValue(e,n,i,s){const r=this.map[n];r!==void 0&&r.setValue(e,i,s)}setOptional(e,n,i){const s=n[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,n,i,s){for(let r=0,o=n.length;r!==o;++r){const a=n[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,n){const i=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in n&&i.push(o)}return i}}function t_(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const IN=37297;let NN=0;function DN(t,e){const n=t.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,n.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}const n_=new Ze;function LN(t){ct._getMatrix(n_,ct.workingColorSpace,t);const e=`mat3( ${n_.elements.map(n=>n.toFixed(4))} )`;switch(ct.getTransfer(t)){case lc:return[e,"LinearTransferOETF"];case _t:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function i_(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=t.getShaderInfoLog(e).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return n.toUpperCase()+`

`+s+`

`+DN(t.getShaderSource(e),o)}else return s}function ON(t,e){const n=LN(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function UN(t,e){let n;switch(e){case CC:n="Linear";break;case wC:n="Reinhard";break;case PC:n="Cineon";break;case IC:n="ACESFilmic";break;case DC:n="AgX";break;case LC:n="Neutral";break;case NC:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const yl=new ne;function FN(){ct.getLuminanceCoefficients(yl);const t=yl.x.toFixed(4),e=yl.y.toFixed(4),n=yl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function kN(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Go).join(`
`)}function BN(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function VN(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=t.getActiveAttrib(e,s),o=r.name;let a=1;r.type===t.FLOAT_MAT2&&(a=2),r.type===t.FLOAT_MAT3&&(a=3),r.type===t.FLOAT_MAT4&&(a=4),n[o]={type:r.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Go(t){return t!==""}function s_(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function r_(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const HN=/^[ \t]*#include +<([\w\d./]+)>/gm;function dh(t){return t.replace(HN,GN)}const zN=new Map;function GN(t,e){let n=Je[e];if(n===void 0){const i=zN.get(e);if(i!==void 0)n=Je[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return dh(n)}const WN=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function o_(t){return t.replace(WN,XN)}function XN(t,e,n,i){let s="";for(let r=parseInt(e);r<parseInt(n);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function a_(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function $N(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===cE?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===aC?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===Pi&&(e="SHADOWMAP_TYPE_VSM"),e}function qN(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case po:case mo:e="ENVMAP_TYPE_CUBE";break;case Yc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function YN(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case mo:e="ENVMAP_MODE_REFRACTION";break}return e}function jN(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case uE:e="ENVMAP_BLENDING_MULTIPLY";break;case AC:e="ENVMAP_BLENDING_MIX";break;case RC:e="ENVMAP_BLENDING_ADD";break}return e}function KN(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function ZN(t,e,n,i){const s=t.getContext(),r=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=$N(n),c=qN(n),u=YN(n),f=jN(n),h=KN(n),d=kN(n),g=BN(r),E=s.createProgram();let _,p,R=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(_=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(Go).join(`
`),_.length>0&&(_+=`
`),p=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(Go).join(`
`),p.length>0&&(p+=`
`)):(_=[a_(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Go).join(`
`),p=[a_(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Ss?"#define TONE_MAPPING":"",n.toneMapping!==Ss?Je.tonemapping_pars_fragment:"",n.toneMapping!==Ss?UN("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Je.colorspace_pars_fragment,ON("linearToOutputTexel",n.outputColorSpace),FN(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Go).join(`
`)),o=dh(o),o=s_(o,n),o=r_(o,n),a=dh(a),a=s_(a,n),a=r_(a,n),o=o_(o),a=o_(a),n.isRawShaderMaterial!==!0&&(R=`#version 300 es
`,_=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,p=["#define varying in",n.glslVersion===Sm?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Sm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const x=R+_+o,M=R+p+a,P=t_(s,s.VERTEX_SHADER,x),N=t_(s,s.FRAGMENT_SHADER,M);s.attachShader(E,P),s.attachShader(E,N),n.index0AttributeName!==void 0?s.bindAttribLocation(E,0,n.index0AttributeName):n.morphTargets===!0&&s.bindAttribLocation(E,0,"position"),s.linkProgram(E);function T(C){if(t.debug.checkShaderErrors){const I=s.getProgramInfoLog(E).trim(),L=s.getShaderInfoLog(P).trim(),k=s.getShaderInfoLog(N).trim();let G=!0,O=!0;if(s.getProgramParameter(E,s.LINK_STATUS)===!1)if(G=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(s,E,P,N);else{const W=i_(s,P,"vertex"),F=i_(s,N,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(E,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+I+`
`+W+`
`+F)}else I!==""?console.warn("THREE.WebGLProgram: Program Info Log:",I):(L===""||k==="")&&(O=!1);O&&(C.diagnostics={runnable:G,programLog:I,vertexShader:{log:L,prefix:_},fragmentShader:{log:k,prefix:p}})}s.deleteShader(P),s.deleteShader(N),A=new Bl(s,E),m=VN(s,E)}let A;this.getUniforms=function(){return A===void 0&&T(this),A};let m;this.getAttributes=function(){return m===void 0&&T(this),m};let v=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=s.getProgramParameter(E,IN)),v},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(E),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=NN++,this.cacheKey=e,this.usedTimes=1,this.program=E,this.vertexShader=P,this.fragmentShader=N,this}let JN=0;class QN{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(n),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new eD(e),n.set(e,i)),i}}class eD{constructor(e){this.id=JN++,this.code=e,this.usedTimes=0}}function tD(t,e,n,i,s,r,o){const a=new RE,l=new QN,c=new Set,u=[],f=s.logarithmicDepthBuffer,h=s.vertexTextures;let d=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(m){return c.add(m),m===0?"uv":`uv${m}`}function _(m,v,C,I,L){const k=I.fog,G=L.geometry,O=m.isMeshStandardMaterial?I.environment:null,W=(m.isMeshStandardMaterial?n:e).get(m.envMap||O),F=W&&W.mapping===Yc?W.image.height:null,le=g[m.type];m.precision!==null&&(d=s.getMaxPrecision(m.precision),d!==m.precision&&console.warn("THREE.WebGLProgram.getParameters:",m.precision,"not supported, using",d,"instead."));const he=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,de=he!==void 0?he.length:0;let ye=0;G.morphAttributes.position!==void 0&&(ye=1),G.morphAttributes.normal!==void 0&&(ye=2),G.morphAttributes.color!==void 0&&(ye=3);let Le,ee,ae,fe;if(le){const mt=hi[le];Le=mt.vertexShader,ee=mt.fragmentShader}else Le=m.vertexShader,ee=m.fragmentShader,l.update(m),ae=l.getVertexShaderID(m),fe=l.getFragmentShaderID(m);const B=t.getRenderTarget(),ie=t.state.buffers.depth.getReversed(),se=L.isInstancedMesh===!0,te=L.isBatchedMesh===!0,Ee=!!m.map,Me=!!m.matcap,D=!!W,y=!!m.aoMap,K=!!m.lightMap,$=!!m.bumpMap,H=!!m.normalMap,z=!!m.displacementMap,Z=!!m.emissiveMap,q=!!m.metalnessMap,b=!!m.roughnessMap,S=m.anisotropy>0,U=m.clearcoat>0,V=m.dispersion>0,j=m.iridescence>0,Q=m.sheen>0,Se=m.transmission>0,ve=S&&!!m.anisotropyMap,_e=U&&!!m.clearcoatMap,We=U&&!!m.clearcoatNormalMap,ue=U&&!!m.clearcoatRoughnessMap,Te=j&&!!m.iridescenceMap,Oe=j&&!!m.iridescenceThicknessMap,ke=Q&&!!m.sheenColorMap,Ne=Q&&!!m.sheenRoughnessMap,Ge=!!m.specularMap,Ve=!!m.specularColorMap,pt=!!m.specularIntensityMap,X=Se&&!!m.transmissionMap,Ce=Se&&!!m.thicknessMap,ce=!!m.gradientMap,me=!!m.alphaMap,De=m.alphaTest>0,Ie=!!m.alphaHash,Ke=!!m.extensions;let Ct=Ss;m.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(Ct=t.toneMapping);const Qt={shaderID:le,shaderType:m.type,shaderName:m.name,vertexShader:Le,fragmentShader:ee,defines:m.defines,customVertexShaderID:ae,customFragmentShaderID:fe,isRawShaderMaterial:m.isRawShaderMaterial===!0,glslVersion:m.glslVersion,precision:d,batching:te,batchingColor:te&&L._colorsTexture!==null,instancing:se,instancingColor:se&&L.instanceColor!==null,instancingMorph:se&&L.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:B===null?t.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:vo,alphaToCoverage:!!m.alphaToCoverage,map:Ee,matcap:Me,envMap:D,envMapMode:D&&W.mapping,envMapCubeUVHeight:F,aoMap:y,lightMap:K,bumpMap:$,normalMap:H,displacementMap:h&&z,emissiveMap:Z,normalMapObjectSpace:H&&m.normalMapType===BC,normalMapTangentSpace:H&&m.normalMapType===kC,metalnessMap:q,roughnessMap:b,anisotropy:S,anisotropyMap:ve,clearcoat:U,clearcoatMap:_e,clearcoatNormalMap:We,clearcoatRoughnessMap:ue,dispersion:V,iridescence:j,iridescenceMap:Te,iridescenceThicknessMap:Oe,sheen:Q,sheenColorMap:ke,sheenRoughnessMap:Ne,specularMap:Ge,specularColorMap:Ve,specularIntensityMap:pt,transmission:Se,transmissionMap:X,thicknessMap:Ce,gradientMap:ce,opaque:m.transparent===!1&&m.blending===Zr&&m.alphaToCoverage===!1,alphaMap:me,alphaTest:De,alphaHash:Ie,combine:m.combine,mapUv:Ee&&E(m.map.channel),aoMapUv:y&&E(m.aoMap.channel),lightMapUv:K&&E(m.lightMap.channel),bumpMapUv:$&&E(m.bumpMap.channel),normalMapUv:H&&E(m.normalMap.channel),displacementMapUv:z&&E(m.displacementMap.channel),emissiveMapUv:Z&&E(m.emissiveMap.channel),metalnessMapUv:q&&E(m.metalnessMap.channel),roughnessMapUv:b&&E(m.roughnessMap.channel),anisotropyMapUv:ve&&E(m.anisotropyMap.channel),clearcoatMapUv:_e&&E(m.clearcoatMap.channel),clearcoatNormalMapUv:We&&E(m.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ue&&E(m.clearcoatRoughnessMap.channel),iridescenceMapUv:Te&&E(m.iridescenceMap.channel),iridescenceThicknessMapUv:Oe&&E(m.iridescenceThicknessMap.channel),sheenColorMapUv:ke&&E(m.sheenColorMap.channel),sheenRoughnessMapUv:Ne&&E(m.sheenRoughnessMap.channel),specularMapUv:Ge&&E(m.specularMap.channel),specularColorMapUv:Ve&&E(m.specularColorMap.channel),specularIntensityMapUv:pt&&E(m.specularIntensityMap.channel),transmissionMapUv:X&&E(m.transmissionMap.channel),thicknessMapUv:Ce&&E(m.thicknessMap.channel),alphaMapUv:me&&E(m.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(H||S),vertexColors:m.vertexColors,vertexAlphas:m.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!G.attributes.uv&&(Ee||me),fog:!!k,useFog:m.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:m.flatShading===!0,sizeAttenuation:m.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:ie,skinning:L.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:de,morphTextureStride:ye,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:m.dithering,shadowMapEnabled:t.shadowMap.enabled&&C.length>0,shadowMapType:t.shadowMap.type,toneMapping:Ct,decodeVideoTexture:Ee&&m.map.isVideoTexture===!0&&ct.getTransfer(m.map.colorSpace)===_t,decodeVideoTextureEmissive:Z&&m.emissiveMap.isVideoTexture===!0&&ct.getTransfer(m.emissiveMap.colorSpace)===_t,premultipliedAlpha:m.premultipliedAlpha,doubleSided:m.side===Ui,flipSided:m.side===wn,useDepthPacking:m.depthPacking>=0,depthPacking:m.depthPacking||0,index0AttributeName:m.index0AttributeName,extensionClipCullDistance:Ke&&m.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ke&&m.extensions.multiDraw===!0||te)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:m.customProgramCacheKey()};return Qt.vertexUv1s=c.has(1),Qt.vertexUv2s=c.has(2),Qt.vertexUv3s=c.has(3),c.clear(),Qt}function p(m){const v=[];if(m.shaderID?v.push(m.shaderID):(v.push(m.customVertexShaderID),v.push(m.customFragmentShaderID)),m.defines!==void 0)for(const C in m.defines)v.push(C),v.push(m.defines[C]);return m.isRawShaderMaterial===!1&&(R(v,m),x(v,m),v.push(t.outputColorSpace)),v.push(m.customProgramCacheKey),v.join()}function R(m,v){m.push(v.precision),m.push(v.outputColorSpace),m.push(v.envMapMode),m.push(v.envMapCubeUVHeight),m.push(v.mapUv),m.push(v.alphaMapUv),m.push(v.lightMapUv),m.push(v.aoMapUv),m.push(v.bumpMapUv),m.push(v.normalMapUv),m.push(v.displacementMapUv),m.push(v.emissiveMapUv),m.push(v.metalnessMapUv),m.push(v.roughnessMapUv),m.push(v.anisotropyMapUv),m.push(v.clearcoatMapUv),m.push(v.clearcoatNormalMapUv),m.push(v.clearcoatRoughnessMapUv),m.push(v.iridescenceMapUv),m.push(v.iridescenceThicknessMapUv),m.push(v.sheenColorMapUv),m.push(v.sheenRoughnessMapUv),m.push(v.specularMapUv),m.push(v.specularColorMapUv),m.push(v.specularIntensityMapUv),m.push(v.transmissionMapUv),m.push(v.thicknessMapUv),m.push(v.combine),m.push(v.fogExp2),m.push(v.sizeAttenuation),m.push(v.morphTargetsCount),m.push(v.morphAttributeCount),m.push(v.numDirLights),m.push(v.numPointLights),m.push(v.numSpotLights),m.push(v.numSpotLightMaps),m.push(v.numHemiLights),m.push(v.numRectAreaLights),m.push(v.numDirLightShadows),m.push(v.numPointLightShadows),m.push(v.numSpotLightShadows),m.push(v.numSpotLightShadowsWithMaps),m.push(v.numLightProbes),m.push(v.shadowMapType),m.push(v.toneMapping),m.push(v.numClippingPlanes),m.push(v.numClipIntersection),m.push(v.depthPacking)}function x(m,v){a.disableAll(),v.supportsVertexTextures&&a.enable(0),v.instancing&&a.enable(1),v.instancingColor&&a.enable(2),v.instancingMorph&&a.enable(3),v.matcap&&a.enable(4),v.envMap&&a.enable(5),v.normalMapObjectSpace&&a.enable(6),v.normalMapTangentSpace&&a.enable(7),v.clearcoat&&a.enable(8),v.iridescence&&a.enable(9),v.alphaTest&&a.enable(10),v.vertexColors&&a.enable(11),v.vertexAlphas&&a.enable(12),v.vertexUv1s&&a.enable(13),v.vertexUv2s&&a.enable(14),v.vertexUv3s&&a.enable(15),v.vertexTangents&&a.enable(16),v.anisotropy&&a.enable(17),v.alphaHash&&a.enable(18),v.batching&&a.enable(19),v.dispersion&&a.enable(20),v.batchingColor&&a.enable(21),m.push(a.mask),a.disableAll(),v.fog&&a.enable(0),v.useFog&&a.enable(1),v.flatShading&&a.enable(2),v.logarithmicDepthBuffer&&a.enable(3),v.reverseDepthBuffer&&a.enable(4),v.skinning&&a.enable(5),v.morphTargets&&a.enable(6),v.morphNormals&&a.enable(7),v.morphColors&&a.enable(8),v.premultipliedAlpha&&a.enable(9),v.shadowMapEnabled&&a.enable(10),v.doubleSided&&a.enable(11),v.flipSided&&a.enable(12),v.useDepthPacking&&a.enable(13),v.dithering&&a.enable(14),v.transmission&&a.enable(15),v.sheen&&a.enable(16),v.opaque&&a.enable(17),v.pointsUvs&&a.enable(18),v.decodeVideoTexture&&a.enable(19),v.decodeVideoTextureEmissive&&a.enable(20),v.alphaToCoverage&&a.enable(21),m.push(a.mask)}function M(m){const v=g[m.type];let C;if(v){const I=hi[v];C=Iw.clone(I.uniforms)}else C=m.uniforms;return C}function P(m,v){let C;for(let I=0,L=u.length;I<L;I++){const k=u[I];if(k.cacheKey===v){C=k,++C.usedTimes;break}}return C===void 0&&(C=new ZN(t,v,m,r),u.push(C)),C}function N(m){if(--m.usedTimes===0){const v=u.indexOf(m);u[v]=u[u.length-1],u.pop(),m.destroy()}}function T(m){l.remove(m)}function A(){l.dispose()}return{getParameters:_,getProgramCacheKey:p,getUniforms:M,acquireProgram:P,releaseProgram:N,releaseShaderCache:T,programs:u,dispose:A}}function nD(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function s(o,a,l){t.get(o)[a]=l}function r(){t=new WeakMap}return{has:e,get:n,remove:i,update:s,dispose:r}}function iD(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function l_(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function c_(){const t=[];let e=0;const n=[],i=[],s=[];function r(){e=0,n.length=0,i.length=0,s.length=0}function o(f,h,d,g,E,_){let p=t[e];return p===void 0?(p={id:f.id,object:f,geometry:h,material:d,groupOrder:g,renderOrder:f.renderOrder,z:E,group:_},t[e]=p):(p.id=f.id,p.object=f,p.geometry=h,p.material=d,p.groupOrder=g,p.renderOrder=f.renderOrder,p.z=E,p.group=_),e++,p}function a(f,h,d,g,E,_){const p=o(f,h,d,g,E,_);d.transmission>0?i.push(p):d.transparent===!0?s.push(p):n.push(p)}function l(f,h,d,g,E,_){const p=o(f,h,d,g,E,_);d.transmission>0?i.unshift(p):d.transparent===!0?s.unshift(p):n.unshift(p)}function c(f,h){n.length>1&&n.sort(f||iD),i.length>1&&i.sort(h||l_),s.length>1&&s.sort(h||l_)}function u(){for(let f=e,h=t.length;f<h;f++){const d=t[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:n,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function sD(){let t=new WeakMap;function e(i,s){const r=t.get(i);let o;return r===void 0?(o=new c_,t.set(i,[o])):s>=r.length?(o=new c_,r.push(o)):o=r[s],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function rD(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new ne,color:new vt};break;case"SpotLight":n={position:new ne,direction:new ne,color:new vt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new ne,color:new vt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new ne,skyColor:new vt,groundColor:new vt};break;case"RectAreaLight":n={color:new vt,position:new ne,halfWidth:new ne,halfHeight:new ne};break}return t[e.id]=n,n}}}function oD(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let aD=0;function lD(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function cD(t){const e=new rD,n=oD(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new ne);const s=new ne,r=new Vt,o=new Vt;function a(c){let u=0,f=0,h=0;for(let m=0;m<9;m++)i.probe[m].set(0,0,0);let d=0,g=0,E=0,_=0,p=0,R=0,x=0,M=0,P=0,N=0,T=0;c.sort(lD);for(let m=0,v=c.length;m<v;m++){const C=c[m],I=C.color,L=C.intensity,k=C.distance,G=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)u+=I.r*L,f+=I.g*L,h+=I.b*L;else if(C.isLightProbe){for(let O=0;O<9;O++)i.probe[O].addScaledVector(C.sh.coefficients[O],L);T++}else if(C.isDirectionalLight){const O=e.get(C);if(O.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const W=C.shadow,F=n.get(C);F.shadowIntensity=W.intensity,F.shadowBias=W.bias,F.shadowNormalBias=W.normalBias,F.shadowRadius=W.radius,F.shadowMapSize=W.mapSize,i.directionalShadow[d]=F,i.directionalShadowMap[d]=G,i.directionalShadowMatrix[d]=C.shadow.matrix,R++}i.directional[d]=O,d++}else if(C.isSpotLight){const O=e.get(C);O.position.setFromMatrixPosition(C.matrixWorld),O.color.copy(I).multiplyScalar(L),O.distance=k,O.coneCos=Math.cos(C.angle),O.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),O.decay=C.decay,i.spot[E]=O;const W=C.shadow;if(C.map&&(i.spotLightMap[P]=C.map,P++,W.updateMatrices(C),C.castShadow&&N++),i.spotLightMatrix[E]=W.matrix,C.castShadow){const F=n.get(C);F.shadowIntensity=W.intensity,F.shadowBias=W.bias,F.shadowNormalBias=W.normalBias,F.shadowRadius=W.radius,F.shadowMapSize=W.mapSize,i.spotShadow[E]=F,i.spotShadowMap[E]=G,M++}E++}else if(C.isRectAreaLight){const O=e.get(C);O.color.copy(I).multiplyScalar(L),O.halfWidth.set(C.width*.5,0,0),O.halfHeight.set(0,C.height*.5,0),i.rectArea[_]=O,_++}else if(C.isPointLight){const O=e.get(C);if(O.color.copy(C.color).multiplyScalar(C.intensity),O.distance=C.distance,O.decay=C.decay,C.castShadow){const W=C.shadow,F=n.get(C);F.shadowIntensity=W.intensity,F.shadowBias=W.bias,F.shadowNormalBias=W.normalBias,F.shadowRadius=W.radius,F.shadowMapSize=W.mapSize,F.shadowCameraNear=W.camera.near,F.shadowCameraFar=W.camera.far,i.pointShadow[g]=F,i.pointShadowMap[g]=G,i.pointShadowMatrix[g]=C.shadow.matrix,x++}i.point[g]=O,g++}else if(C.isHemisphereLight){const O=e.get(C);O.skyColor.copy(C.color).multiplyScalar(L),O.groundColor.copy(C.groundColor).multiplyScalar(L),i.hemi[p]=O,p++}}_>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ae.LTC_FLOAT_1,i.rectAreaLTC2=Ae.LTC_FLOAT_2):(i.rectAreaLTC1=Ae.LTC_HALF_1,i.rectAreaLTC2=Ae.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=h;const A=i.hash;(A.directionalLength!==d||A.pointLength!==g||A.spotLength!==E||A.rectAreaLength!==_||A.hemiLength!==p||A.numDirectionalShadows!==R||A.numPointShadows!==x||A.numSpotShadows!==M||A.numSpotMaps!==P||A.numLightProbes!==T)&&(i.directional.length=d,i.spot.length=E,i.rectArea.length=_,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=R,i.directionalShadowMap.length=R,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=R,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=M+P-N,i.spotLightMap.length=P,i.numSpotLightShadowsWithMaps=N,i.numLightProbes=T,A.directionalLength=d,A.pointLength=g,A.spotLength=E,A.rectAreaLength=_,A.hemiLength=p,A.numDirectionalShadows=R,A.numPointShadows=x,A.numSpotShadows=M,A.numSpotMaps=P,A.numLightProbes=T,i.version=aD++)}function l(c,u){let f=0,h=0,d=0,g=0,E=0;const _=u.matrixWorldInverse;for(let p=0,R=c.length;p<R;p++){const x=c[p];if(x.isDirectionalLight){const M=i.directional[f];M.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(_),f++}else if(x.isSpotLight){const M=i.spot[d];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(_),M.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(_),d++}else if(x.isRectAreaLight){const M=i.rectArea[g];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(_),o.identity(),r.copy(x.matrixWorld),r.premultiply(_),o.extractRotation(r),M.halfWidth.set(x.width*.5,0,0),M.halfHeight.set(0,x.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),g++}else if(x.isPointLight){const M=i.point[h];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(_),h++}else if(x.isHemisphereLight){const M=i.hemi[E];M.direction.setFromMatrixPosition(x.matrixWorld),M.direction.transformDirection(_),E++}}}return{setup:a,setupView:l,state:i}}function u_(t){const e=new cD(t),n=[],i=[];function s(u){c.camera=u,n.length=0,i.length=0}function r(u){n.push(u)}function o(u){i.push(u)}function a(){e.setup(n)}function l(u){e.setupView(n,u)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function uD(t){let e=new WeakMap;function n(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new u_(t),e.set(s,[a])):r>=o.length?(a=new u_(t),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:n,dispose:i}}const fD=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,hD=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function dD(t,e,n){let i=new LE;const s=new Qe,r=new Qe,o=new Lt,a=new Bw({depthPacking:FC}),l=new Vw,c={},u=n.maxTextureSize,f={[Ts]:wn,[wn]:Ts,[Ui]:Ui},h=new bs({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Qe},radius:{value:4}},vertexShader:fD,fragmentShader:hD}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const g=new vr;g.setAttribute("position",new gi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new pi(g,h),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=cE;let p=this.type;this.render=function(N,T,A){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||N.length===0)return;const m=t.getRenderTarget(),v=t.getActiveCubeFace(),C=t.getActiveMipmapLevel(),I=t.state;I.setBlending(Es),I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const L=p!==Pi&&this.type===Pi,k=p===Pi&&this.type!==Pi;for(let G=0,O=N.length;G<O;G++){const W=N[G],F=W.shadow;if(F===void 0){console.warn("THREE.WebGLShadowMap:",W,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;s.copy(F.mapSize);const le=F.getFrameExtents();if(s.multiply(le),r.copy(F.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/le.x),s.x=r.x*le.x,F.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/le.y),s.y=r.y*le.y,F.mapSize.y=r.y)),F.map===null||L===!0||k===!0){const de=this.type!==Pi?{minFilter:ai,magFilter:ai}:{};F.map!==null&&F.map.dispose(),F.map=new hr(s.x,s.y,de),F.map.texture.name=W.name+".shadowMap",F.camera.updateProjectionMatrix()}t.setRenderTarget(F.map),t.clear();const he=F.getViewportCount();for(let de=0;de<he;de++){const ye=F.getViewport(de);o.set(r.x*ye.x,r.y*ye.y,r.x*ye.z,r.y*ye.w),I.viewport(o),F.updateMatrices(W,de),i=F.getFrustum(),M(T,A,F.camera,W,this.type)}F.isPointLightShadow!==!0&&this.type===Pi&&R(F,A),F.needsUpdate=!1}p=this.type,_.needsUpdate=!1,t.setRenderTarget(m,v,C)};function R(N,T){const A=e.update(E);h.defines.VSM_SAMPLES!==N.blurSamples&&(h.defines.VSM_SAMPLES=N.blurSamples,d.defines.VSM_SAMPLES=N.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),N.mapPass===null&&(N.mapPass=new hr(s.x,s.y)),h.uniforms.shadow_pass.value=N.map.texture,h.uniforms.resolution.value=N.mapSize,h.uniforms.radius.value=N.radius,t.setRenderTarget(N.mapPass),t.clear(),t.renderBufferDirect(T,null,A,h,E,null),d.uniforms.shadow_pass.value=N.mapPass.texture,d.uniforms.resolution.value=N.mapSize,d.uniforms.radius.value=N.radius,t.setRenderTarget(N.map),t.clear(),t.renderBufferDirect(T,null,A,d,E,null)}function x(N,T,A,m){let v=null;const C=A.isPointLight===!0?N.customDistanceMaterial:N.customDepthMaterial;if(C!==void 0)v=C;else if(v=A.isPointLight===!0?l:a,t.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const I=v.uuid,L=T.uuid;let k=c[I];k===void 0&&(k={},c[I]=k);let G=k[L];G===void 0&&(G=v.clone(),k[L]=G,T.addEventListener("dispose",P)),v=G}if(v.visible=T.visible,v.wireframe=T.wireframe,m===Pi?v.side=T.shadowSide!==null?T.shadowSide:T.side:v.side=T.shadowSide!==null?T.shadowSide:f[T.side],v.alphaMap=T.alphaMap,v.alphaTest=T.alphaTest,v.map=T.map,v.clipShadows=T.clipShadows,v.clippingPlanes=T.clippingPlanes,v.clipIntersection=T.clipIntersection,v.displacementMap=T.displacementMap,v.displacementScale=T.displacementScale,v.displacementBias=T.displacementBias,v.wireframeLinewidth=T.wireframeLinewidth,v.linewidth=T.linewidth,A.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const I=t.properties.get(v);I.light=A}return v}function M(N,T,A,m,v){if(N.visible===!1)return;if(N.layers.test(T.layers)&&(N.isMesh||N.isLine||N.isPoints)&&(N.castShadow||N.receiveShadow&&v===Pi)&&(!N.frustumCulled||i.intersectsObject(N))){N.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,N.matrixWorld);const L=e.update(N),k=N.material;if(Array.isArray(k)){const G=L.groups;for(let O=0,W=G.length;O<W;O++){const F=G[O],le=k[F.materialIndex];if(le&&le.visible){const he=x(N,le,m,v);N.onBeforeShadow(t,N,T,A,L,he,F),t.renderBufferDirect(A,null,L,he,N,F),N.onAfterShadow(t,N,T,A,L,he,F)}}}else if(k.visible){const G=x(N,k,m,v);N.onBeforeShadow(t,N,T,A,L,G,null),t.renderBufferDirect(A,null,L,G,N,null),N.onAfterShadow(t,N,T,A,L,G,null)}}const I=N.children;for(let L=0,k=I.length;L<k;L++)M(I[L],T,A,m,v)}function P(N){N.target.removeEventListener("dispose",P);for(const A in c){const m=c[A],v=N.target.uuid;v in m&&(m[v].dispose(),delete m[v])}}}const pD={[Pf]:If,[Nf]:Of,[Df]:Uf,[ho]:Lf,[If]:Pf,[Of]:Nf,[Uf]:Df,[Lf]:ho};function mD(t,e){function n(){let X=!1;const Ce=new Lt;let ce=null;const me=new Lt(0,0,0,0);return{setMask:function(De){ce!==De&&!X&&(t.colorMask(De,De,De,De),ce=De)},setLocked:function(De){X=De},setClear:function(De,Ie,Ke,Ct,Qt){Qt===!0&&(De*=Ct,Ie*=Ct,Ke*=Ct),Ce.set(De,Ie,Ke,Ct),me.equals(Ce)===!1&&(t.clearColor(De,Ie,Ke,Ct),me.copy(Ce))},reset:function(){X=!1,ce=null,me.set(-1,0,0,0)}}}function i(){let X=!1,Ce=!1,ce=null,me=null,De=null;return{setReversed:function(Ie){if(Ce!==Ie){const Ke=e.get("EXT_clip_control");Ce?Ke.clipControlEXT(Ke.LOWER_LEFT_EXT,Ke.ZERO_TO_ONE_EXT):Ke.clipControlEXT(Ke.LOWER_LEFT_EXT,Ke.NEGATIVE_ONE_TO_ONE_EXT);const Ct=De;De=null,this.setClear(Ct)}Ce=Ie},getReversed:function(){return Ce},setTest:function(Ie){Ie?B(t.DEPTH_TEST):ie(t.DEPTH_TEST)},setMask:function(Ie){ce!==Ie&&!X&&(t.depthMask(Ie),ce=Ie)},setFunc:function(Ie){if(Ce&&(Ie=pD[Ie]),me!==Ie){switch(Ie){case Pf:t.depthFunc(t.NEVER);break;case If:t.depthFunc(t.ALWAYS);break;case Nf:t.depthFunc(t.LESS);break;case ho:t.depthFunc(t.LEQUAL);break;case Df:t.depthFunc(t.EQUAL);break;case Lf:t.depthFunc(t.GEQUAL);break;case Of:t.depthFunc(t.GREATER);break;case Uf:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}me=Ie}},setLocked:function(Ie){X=Ie},setClear:function(Ie){De!==Ie&&(Ce&&(Ie=1-Ie),t.clearDepth(Ie),De=Ie)},reset:function(){X=!1,ce=null,me=null,De=null,Ce=!1}}}function s(){let X=!1,Ce=null,ce=null,me=null,De=null,Ie=null,Ke=null,Ct=null,Qt=null;return{setTest:function(mt){X||(mt?B(t.STENCIL_TEST):ie(t.STENCIL_TEST))},setMask:function(mt){Ce!==mt&&!X&&(t.stencilMask(mt),Ce=mt)},setFunc:function(mt,Kn,Si){(ce!==mt||me!==Kn||De!==Si)&&(t.stencilFunc(mt,Kn,Si),ce=mt,me=Kn,De=Si)},setOp:function(mt,Kn,Si){(Ie!==mt||Ke!==Kn||Ct!==Si)&&(t.stencilOp(mt,Kn,Si),Ie=mt,Ke=Kn,Ct=Si)},setLocked:function(mt){X=mt},setClear:function(mt){Qt!==mt&&(t.clearStencil(mt),Qt=mt)},reset:function(){X=!1,Ce=null,ce=null,me=null,De=null,Ie=null,Ke=null,Ct=null,Qt=null}}}const r=new n,o=new i,a=new s,l=new WeakMap,c=new WeakMap;let u={},f={},h=new WeakMap,d=[],g=null,E=!1,_=null,p=null,R=null,x=null,M=null,P=null,N=null,T=new vt(0,0,0),A=0,m=!1,v=null,C=null,I=null,L=null,k=null;const G=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let O=!1,W=0;const F=t.getParameter(t.VERSION);F.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(F)[1]),O=W>=1):F.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),O=W>=2);let le=null,he={};const de=t.getParameter(t.SCISSOR_BOX),ye=t.getParameter(t.VIEWPORT),Le=new Lt().fromArray(de),ee=new Lt().fromArray(ye);function ae(X,Ce,ce,me){const De=new Uint8Array(4),Ie=t.createTexture();t.bindTexture(X,Ie),t.texParameteri(X,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(X,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ke=0;Ke<ce;Ke++)X===t.TEXTURE_3D||X===t.TEXTURE_2D_ARRAY?t.texImage3D(Ce,0,t.RGBA,1,1,me,0,t.RGBA,t.UNSIGNED_BYTE,De):t.texImage2D(Ce+Ke,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,De);return Ie}const fe={};fe[t.TEXTURE_2D]=ae(t.TEXTURE_2D,t.TEXTURE_2D,1),fe[t.TEXTURE_CUBE_MAP]=ae(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),fe[t.TEXTURE_2D_ARRAY]=ae(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),fe[t.TEXTURE_3D]=ae(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),B(t.DEPTH_TEST),o.setFunc(ho),$(!1),H(pm),B(t.CULL_FACE),y(Es);function B(X){u[X]!==!0&&(t.enable(X),u[X]=!0)}function ie(X){u[X]!==!1&&(t.disable(X),u[X]=!1)}function se(X,Ce){return f[X]!==Ce?(t.bindFramebuffer(X,Ce),f[X]=Ce,X===t.DRAW_FRAMEBUFFER&&(f[t.FRAMEBUFFER]=Ce),X===t.FRAMEBUFFER&&(f[t.DRAW_FRAMEBUFFER]=Ce),!0):!1}function te(X,Ce){let ce=d,me=!1;if(X){ce=h.get(Ce),ce===void 0&&(ce=[],h.set(Ce,ce));const De=X.textures;if(ce.length!==De.length||ce[0]!==t.COLOR_ATTACHMENT0){for(let Ie=0,Ke=De.length;Ie<Ke;Ie++)ce[Ie]=t.COLOR_ATTACHMENT0+Ie;ce.length=De.length,me=!0}}else ce[0]!==t.BACK&&(ce[0]=t.BACK,me=!0);me&&t.drawBuffers(ce)}function Ee(X){return g!==X?(t.useProgram(X),g=X,!0):!1}const Me={[Ws]:t.FUNC_ADD,[cC]:t.FUNC_SUBTRACT,[uC]:t.FUNC_REVERSE_SUBTRACT};Me[fC]=t.MIN,Me[hC]=t.MAX;const D={[dC]:t.ZERO,[pC]:t.ONE,[mC]:t.SRC_COLOR,[Cf]:t.SRC_ALPHA,[xC]:t.SRC_ALPHA_SATURATE,[EC]:t.DST_COLOR,[gC]:t.DST_ALPHA,[_C]:t.ONE_MINUS_SRC_COLOR,[wf]:t.ONE_MINUS_SRC_ALPHA,[SC]:t.ONE_MINUS_DST_COLOR,[vC]:t.ONE_MINUS_DST_ALPHA,[yC]:t.CONSTANT_COLOR,[MC]:t.ONE_MINUS_CONSTANT_COLOR,[TC]:t.CONSTANT_ALPHA,[bC]:t.ONE_MINUS_CONSTANT_ALPHA};function y(X,Ce,ce,me,De,Ie,Ke,Ct,Qt,mt){if(X===Es){E===!0&&(ie(t.BLEND),E=!1);return}if(E===!1&&(B(t.BLEND),E=!0),X!==lC){if(X!==_||mt!==m){if((p!==Ws||M!==Ws)&&(t.blendEquation(t.FUNC_ADD),p=Ws,M=Ws),mt)switch(X){case Zr:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case mm:t.blendFunc(t.ONE,t.ONE);break;case _m:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case gm:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}else switch(X){case Zr:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case mm:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case _m:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case gm:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}R=null,x=null,P=null,N=null,T.set(0,0,0),A=0,_=X,m=mt}return}De=De||Ce,Ie=Ie||ce,Ke=Ke||me,(Ce!==p||De!==M)&&(t.blendEquationSeparate(Me[Ce],Me[De]),p=Ce,M=De),(ce!==R||me!==x||Ie!==P||Ke!==N)&&(t.blendFuncSeparate(D[ce],D[me],D[Ie],D[Ke]),R=ce,x=me,P=Ie,N=Ke),(Ct.equals(T)===!1||Qt!==A)&&(t.blendColor(Ct.r,Ct.g,Ct.b,Qt),T.copy(Ct),A=Qt),_=X,m=!1}function K(X,Ce){X.side===Ui?ie(t.CULL_FACE):B(t.CULL_FACE);let ce=X.side===wn;Ce&&(ce=!ce),$(ce),X.blending===Zr&&X.transparent===!1?y(Es):y(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),o.setFunc(X.depthFunc),o.setTest(X.depthTest),o.setMask(X.depthWrite),r.setMask(X.colorWrite);const me=X.stencilWrite;a.setTest(me),me&&(a.setMask(X.stencilWriteMask),a.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),a.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),Z(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?B(t.SAMPLE_ALPHA_TO_COVERAGE):ie(t.SAMPLE_ALPHA_TO_COVERAGE)}function $(X){v!==X&&(X?t.frontFace(t.CW):t.frontFace(t.CCW),v=X)}function H(X){X!==rC?(B(t.CULL_FACE),X!==C&&(X===pm?t.cullFace(t.BACK):X===oC?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):ie(t.CULL_FACE),C=X}function z(X){X!==I&&(O&&t.lineWidth(X),I=X)}function Z(X,Ce,ce){X?(B(t.POLYGON_OFFSET_FILL),(L!==Ce||k!==ce)&&(t.polygonOffset(Ce,ce),L=Ce,k=ce)):ie(t.POLYGON_OFFSET_FILL)}function q(X){X?B(t.SCISSOR_TEST):ie(t.SCISSOR_TEST)}function b(X){X===void 0&&(X=t.TEXTURE0+G-1),le!==X&&(t.activeTexture(X),le=X)}function S(X,Ce,ce){ce===void 0&&(le===null?ce=t.TEXTURE0+G-1:ce=le);let me=he[ce];me===void 0&&(me={type:void 0,texture:void 0},he[ce]=me),(me.type!==X||me.texture!==Ce)&&(le!==ce&&(t.activeTexture(ce),le=ce),t.bindTexture(X,Ce||fe[X]),me.type=X,me.texture=Ce)}function U(){const X=he[le];X!==void 0&&X.type!==void 0&&(t.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function V(){try{t.compressedTexImage2D.apply(t,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function j(){try{t.compressedTexImage3D.apply(t,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Q(){try{t.texSubImage2D.apply(t,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Se(){try{t.texSubImage3D.apply(t,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ve(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function _e(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function We(){try{t.texStorage2D.apply(t,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ue(){try{t.texStorage3D.apply(t,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Te(){try{t.texImage2D.apply(t,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Oe(){try{t.texImage3D.apply(t,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ke(X){Le.equals(X)===!1&&(t.scissor(X.x,X.y,X.z,X.w),Le.copy(X))}function Ne(X){ee.equals(X)===!1&&(t.viewport(X.x,X.y,X.z,X.w),ee.copy(X))}function Ge(X,Ce){let ce=c.get(Ce);ce===void 0&&(ce=new WeakMap,c.set(Ce,ce));let me=ce.get(X);me===void 0&&(me=t.getUniformBlockIndex(Ce,X.name),ce.set(X,me))}function Ve(X,Ce){const me=c.get(Ce).get(X);l.get(Ce)!==me&&(t.uniformBlockBinding(Ce,me,X.__bindingPointIndex),l.set(Ce,me))}function pt(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),o.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),u={},le=null,he={},f={},h=new WeakMap,d=[],g=null,E=!1,_=null,p=null,R=null,x=null,M=null,P=null,N=null,T=new vt(0,0,0),A=0,m=!1,v=null,C=null,I=null,L=null,k=null,Le.set(0,0,t.canvas.width,t.canvas.height),ee.set(0,0,t.canvas.width,t.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:B,disable:ie,bindFramebuffer:se,drawBuffers:te,useProgram:Ee,setBlending:y,setMaterial:K,setFlipSided:$,setCullFace:H,setLineWidth:z,setPolygonOffset:Z,setScissorTest:q,activeTexture:b,bindTexture:S,unbindTexture:U,compressedTexImage2D:V,compressedTexImage3D:j,texImage2D:Te,texImage3D:Oe,updateUBOMapping:Ge,uniformBlockBinding:Ve,texStorage2D:We,texStorage3D:ue,texSubImage2D:Q,texSubImage3D:Se,compressedTexSubImage2D:ve,compressedTexSubImage3D:_e,scissor:ke,viewport:Ne,reset:pt}}function _D(t,e,n,i,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Qe,u=new WeakMap;let f;const h=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(b,S){return d?new OffscreenCanvas(b,S):uc("canvas")}function E(b,S,U){let V=1;const j=q(b);if((j.width>U||j.height>U)&&(V=U/Math.max(j.width,j.height)),V<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const Q=Math.floor(V*j.width),Se=Math.floor(V*j.height);f===void 0&&(f=g(Q,Se));const ve=S?g(Q,Se):f;return ve.width=Q,ve.height=Se,ve.getContext("2d").drawImage(b,0,0,Q,Se),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+Q+"x"+Se+")."),ve}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),b;return b}function _(b){return b.generateMipmaps}function p(b){t.generateMipmap(b)}function R(b){return b.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?t.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function x(b,S,U,V,j=!1){if(b!==null){if(t[b]!==void 0)return t[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let Q=S;if(S===t.RED&&(U===t.FLOAT&&(Q=t.R32F),U===t.HALF_FLOAT&&(Q=t.R16F),U===t.UNSIGNED_BYTE&&(Q=t.R8)),S===t.RED_INTEGER&&(U===t.UNSIGNED_BYTE&&(Q=t.R8UI),U===t.UNSIGNED_SHORT&&(Q=t.R16UI),U===t.UNSIGNED_INT&&(Q=t.R32UI),U===t.BYTE&&(Q=t.R8I),U===t.SHORT&&(Q=t.R16I),U===t.INT&&(Q=t.R32I)),S===t.RG&&(U===t.FLOAT&&(Q=t.RG32F),U===t.HALF_FLOAT&&(Q=t.RG16F),U===t.UNSIGNED_BYTE&&(Q=t.RG8)),S===t.RG_INTEGER&&(U===t.UNSIGNED_BYTE&&(Q=t.RG8UI),U===t.UNSIGNED_SHORT&&(Q=t.RG16UI),U===t.UNSIGNED_INT&&(Q=t.RG32UI),U===t.BYTE&&(Q=t.RG8I),U===t.SHORT&&(Q=t.RG16I),U===t.INT&&(Q=t.RG32I)),S===t.RGB_INTEGER&&(U===t.UNSIGNED_BYTE&&(Q=t.RGB8UI),U===t.UNSIGNED_SHORT&&(Q=t.RGB16UI),U===t.UNSIGNED_INT&&(Q=t.RGB32UI),U===t.BYTE&&(Q=t.RGB8I),U===t.SHORT&&(Q=t.RGB16I),U===t.INT&&(Q=t.RGB32I)),S===t.RGBA_INTEGER&&(U===t.UNSIGNED_BYTE&&(Q=t.RGBA8UI),U===t.UNSIGNED_SHORT&&(Q=t.RGBA16UI),U===t.UNSIGNED_INT&&(Q=t.RGBA32UI),U===t.BYTE&&(Q=t.RGBA8I),U===t.SHORT&&(Q=t.RGBA16I),U===t.INT&&(Q=t.RGBA32I)),S===t.RGB&&U===t.UNSIGNED_INT_5_9_9_9_REV&&(Q=t.RGB9_E5),S===t.RGBA){const Se=j?lc:ct.getTransfer(V);U===t.FLOAT&&(Q=t.RGBA32F),U===t.HALF_FLOAT&&(Q=t.RGBA16F),U===t.UNSIGNED_BYTE&&(Q=Se===_t?t.SRGB8_ALPHA8:t.RGBA8),U===t.UNSIGNED_SHORT_4_4_4_4&&(Q=t.RGBA4),U===t.UNSIGNED_SHORT_5_5_5_1&&(Q=t.RGB5_A1)}return(Q===t.R16F||Q===t.R32F||Q===t.RG16F||Q===t.RG32F||Q===t.RGBA16F||Q===t.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function M(b,S){let U;return b?S===null||S===fr||S===_o?U=t.DEPTH24_STENCIL8:S===Fi?U=t.DEPTH32F_STENCIL8:S===Sa&&(U=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===fr||S===_o?U=t.DEPTH_COMPONENT24:S===Fi?U=t.DEPTH_COMPONENT32F:S===Sa&&(U=t.DEPTH_COMPONENT16),U}function P(b,S){return _(b)===!0||b.isFramebufferTexture&&b.minFilter!==ai&&b.minFilter!==di?Math.log2(Math.max(S.width,S.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?S.mipmaps.length:1}function N(b){const S=b.target;S.removeEventListener("dispose",N),A(S),S.isVideoTexture&&u.delete(S)}function T(b){const S=b.target;S.removeEventListener("dispose",T),v(S)}function A(b){const S=i.get(b);if(S.__webglInit===void 0)return;const U=b.source,V=h.get(U);if(V){const j=V[S.__cacheKey];j.usedTimes--,j.usedTimes===0&&m(b),Object.keys(V).length===0&&h.delete(U)}i.remove(b)}function m(b){const S=i.get(b);t.deleteTexture(S.__webglTexture);const U=b.source,V=h.get(U);delete V[S.__cacheKey],o.memory.textures--}function v(b){const S=i.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),i.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let V=0;V<6;V++){if(Array.isArray(S.__webglFramebuffer[V]))for(let j=0;j<S.__webglFramebuffer[V].length;j++)t.deleteFramebuffer(S.__webglFramebuffer[V][j]);else t.deleteFramebuffer(S.__webglFramebuffer[V]);S.__webglDepthbuffer&&t.deleteRenderbuffer(S.__webglDepthbuffer[V])}else{if(Array.isArray(S.__webglFramebuffer))for(let V=0;V<S.__webglFramebuffer.length;V++)t.deleteFramebuffer(S.__webglFramebuffer[V]);else t.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&t.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&t.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let V=0;V<S.__webglColorRenderbuffer.length;V++)S.__webglColorRenderbuffer[V]&&t.deleteRenderbuffer(S.__webglColorRenderbuffer[V]);S.__webglDepthRenderbuffer&&t.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const U=b.textures;for(let V=0,j=U.length;V<j;V++){const Q=i.get(U[V]);Q.__webglTexture&&(t.deleteTexture(Q.__webglTexture),o.memory.textures--),i.remove(U[V])}i.remove(b)}let C=0;function I(){C=0}function L(){const b=C;return b>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+s.maxTextures),C+=1,b}function k(b){const S=[];return S.push(b.wrapS),S.push(b.wrapT),S.push(b.wrapR||0),S.push(b.magFilter),S.push(b.minFilter),S.push(b.anisotropy),S.push(b.internalFormat),S.push(b.format),S.push(b.type),S.push(b.generateMipmaps),S.push(b.premultiplyAlpha),S.push(b.flipY),S.push(b.unpackAlignment),S.push(b.colorSpace),S.join()}function G(b,S){const U=i.get(b);if(b.isVideoTexture&&z(b),b.isRenderTargetTexture===!1&&b.version>0&&U.__version!==b.version){const V=b.image;if(V===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(V.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ee(U,b,S);return}}n.bindTexture(t.TEXTURE_2D,U.__webglTexture,t.TEXTURE0+S)}function O(b,S){const U=i.get(b);if(b.version>0&&U.__version!==b.version){ee(U,b,S);return}n.bindTexture(t.TEXTURE_2D_ARRAY,U.__webglTexture,t.TEXTURE0+S)}function W(b,S){const U=i.get(b);if(b.version>0&&U.__version!==b.version){ee(U,b,S);return}n.bindTexture(t.TEXTURE_3D,U.__webglTexture,t.TEXTURE0+S)}function F(b,S){const U=i.get(b);if(b.version>0&&U.__version!==b.version){ae(U,b,S);return}n.bindTexture(t.TEXTURE_CUBE_MAP,U.__webglTexture,t.TEXTURE0+S)}const le={[Bf]:t.REPEAT,[qs]:t.CLAMP_TO_EDGE,[Vf]:t.MIRRORED_REPEAT},he={[ai]:t.NEAREST,[OC]:t.NEAREST_MIPMAP_NEAREST,[tl]:t.NEAREST_MIPMAP_LINEAR,[di]:t.LINEAR,[yu]:t.LINEAR_MIPMAP_NEAREST,[Ys]:t.LINEAR_MIPMAP_LINEAR},de={[VC]:t.NEVER,[$C]:t.ALWAYS,[HC]:t.LESS,[yE]:t.LEQUAL,[zC]:t.EQUAL,[XC]:t.GEQUAL,[GC]:t.GREATER,[WC]:t.NOTEQUAL};function ye(b,S){if(S.type===Fi&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===di||S.magFilter===yu||S.magFilter===tl||S.magFilter===Ys||S.minFilter===di||S.minFilter===yu||S.minFilter===tl||S.minFilter===Ys)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(b,t.TEXTURE_WRAP_S,le[S.wrapS]),t.texParameteri(b,t.TEXTURE_WRAP_T,le[S.wrapT]),(b===t.TEXTURE_3D||b===t.TEXTURE_2D_ARRAY)&&t.texParameteri(b,t.TEXTURE_WRAP_R,le[S.wrapR]),t.texParameteri(b,t.TEXTURE_MAG_FILTER,he[S.magFilter]),t.texParameteri(b,t.TEXTURE_MIN_FILTER,he[S.minFilter]),S.compareFunction&&(t.texParameteri(b,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(b,t.TEXTURE_COMPARE_FUNC,de[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===ai||S.minFilter!==tl&&S.minFilter!==Ys||S.type===Fi&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){const U=e.get("EXT_texture_filter_anisotropic");t.texParameterf(b,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function Le(b,S){let U=!1;b.__webglInit===void 0&&(b.__webglInit=!0,S.addEventListener("dispose",N));const V=S.source;let j=h.get(V);j===void 0&&(j={},h.set(V,j));const Q=k(S);if(Q!==b.__cacheKey){j[Q]===void 0&&(j[Q]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,U=!0),j[Q].usedTimes++;const Se=j[b.__cacheKey];Se!==void 0&&(j[b.__cacheKey].usedTimes--,Se.usedTimes===0&&m(S)),b.__cacheKey=Q,b.__webglTexture=j[Q].texture}return U}function ee(b,S,U){let V=t.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(V=t.TEXTURE_2D_ARRAY),S.isData3DTexture&&(V=t.TEXTURE_3D);const j=Le(b,S),Q=S.source;n.bindTexture(V,b.__webglTexture,t.TEXTURE0+U);const Se=i.get(Q);if(Q.version!==Se.__version||j===!0){n.activeTexture(t.TEXTURE0+U);const ve=ct.getPrimaries(ct.workingColorSpace),_e=S.colorSpace===ds?null:ct.getPrimaries(S.colorSpace),We=S.colorSpace===ds||ve===_e?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,We);let ue=E(S.image,!1,s.maxTextureSize);ue=Z(S,ue);const Te=r.convert(S.format,S.colorSpace),Oe=r.convert(S.type);let ke=x(S.internalFormat,Te,Oe,S.colorSpace,S.isVideoTexture);ye(V,S);let Ne;const Ge=S.mipmaps,Ve=S.isVideoTexture!==!0,pt=Se.__version===void 0||j===!0,X=Q.dataReady,Ce=P(S,ue);if(S.isDepthTexture)ke=M(S.format===go,S.type),pt&&(Ve?n.texStorage2D(t.TEXTURE_2D,1,ke,ue.width,ue.height):n.texImage2D(t.TEXTURE_2D,0,ke,ue.width,ue.height,0,Te,Oe,null));else if(S.isDataTexture)if(Ge.length>0){Ve&&pt&&n.texStorage2D(t.TEXTURE_2D,Ce,ke,Ge[0].width,Ge[0].height);for(let ce=0,me=Ge.length;ce<me;ce++)Ne=Ge[ce],Ve?X&&n.texSubImage2D(t.TEXTURE_2D,ce,0,0,Ne.width,Ne.height,Te,Oe,Ne.data):n.texImage2D(t.TEXTURE_2D,ce,ke,Ne.width,Ne.height,0,Te,Oe,Ne.data);S.generateMipmaps=!1}else Ve?(pt&&n.texStorage2D(t.TEXTURE_2D,Ce,ke,ue.width,ue.height),X&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ue.width,ue.height,Te,Oe,ue.data)):n.texImage2D(t.TEXTURE_2D,0,ke,ue.width,ue.height,0,Te,Oe,ue.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Ve&&pt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Ce,ke,Ge[0].width,Ge[0].height,ue.depth);for(let ce=0,me=Ge.length;ce<me;ce++)if(Ne=Ge[ce],S.format!==si)if(Te!==null)if(Ve){if(X)if(S.layerUpdates.size>0){const De=Vm(Ne.width,Ne.height,S.format,S.type);for(const Ie of S.layerUpdates){const Ke=Ne.data.subarray(Ie*De/Ne.data.BYTES_PER_ELEMENT,(Ie+1)*De/Ne.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ce,0,0,Ie,Ne.width,Ne.height,1,Te,Ke)}S.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ce,0,0,0,Ne.width,Ne.height,ue.depth,Te,Ne.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,ce,ke,Ne.width,Ne.height,ue.depth,0,Ne.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ve?X&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,ce,0,0,0,Ne.width,Ne.height,ue.depth,Te,Oe,Ne.data):n.texImage3D(t.TEXTURE_2D_ARRAY,ce,ke,Ne.width,Ne.height,ue.depth,0,Te,Oe,Ne.data)}else{Ve&&pt&&n.texStorage2D(t.TEXTURE_2D,Ce,ke,Ge[0].width,Ge[0].height);for(let ce=0,me=Ge.length;ce<me;ce++)Ne=Ge[ce],S.format!==si?Te!==null?Ve?X&&n.compressedTexSubImage2D(t.TEXTURE_2D,ce,0,0,Ne.width,Ne.height,Te,Ne.data):n.compressedTexImage2D(t.TEXTURE_2D,ce,ke,Ne.width,Ne.height,0,Ne.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ve?X&&n.texSubImage2D(t.TEXTURE_2D,ce,0,0,Ne.width,Ne.height,Te,Oe,Ne.data):n.texImage2D(t.TEXTURE_2D,ce,ke,Ne.width,Ne.height,0,Te,Oe,Ne.data)}else if(S.isDataArrayTexture)if(Ve){if(pt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Ce,ke,ue.width,ue.height,ue.depth),X)if(S.layerUpdates.size>0){const ce=Vm(ue.width,ue.height,S.format,S.type);for(const me of S.layerUpdates){const De=ue.data.subarray(me*ce/ue.data.BYTES_PER_ELEMENT,(me+1)*ce/ue.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,me,ue.width,ue.height,1,Te,Oe,De)}S.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ue.width,ue.height,ue.depth,Te,Oe,ue.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,ke,ue.width,ue.height,ue.depth,0,Te,Oe,ue.data);else if(S.isData3DTexture)Ve?(pt&&n.texStorage3D(t.TEXTURE_3D,Ce,ke,ue.width,ue.height,ue.depth),X&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ue.width,ue.height,ue.depth,Te,Oe,ue.data)):n.texImage3D(t.TEXTURE_3D,0,ke,ue.width,ue.height,ue.depth,0,Te,Oe,ue.data);else if(S.isFramebufferTexture){if(pt)if(Ve)n.texStorage2D(t.TEXTURE_2D,Ce,ke,ue.width,ue.height);else{let ce=ue.width,me=ue.height;for(let De=0;De<Ce;De++)n.texImage2D(t.TEXTURE_2D,De,ke,ce,me,0,Te,Oe,null),ce>>=1,me>>=1}}else if(Ge.length>0){if(Ve&&pt){const ce=q(Ge[0]);n.texStorage2D(t.TEXTURE_2D,Ce,ke,ce.width,ce.height)}for(let ce=0,me=Ge.length;ce<me;ce++)Ne=Ge[ce],Ve?X&&n.texSubImage2D(t.TEXTURE_2D,ce,0,0,Te,Oe,Ne):n.texImage2D(t.TEXTURE_2D,ce,ke,Te,Oe,Ne);S.generateMipmaps=!1}else if(Ve){if(pt){const ce=q(ue);n.texStorage2D(t.TEXTURE_2D,Ce,ke,ce.width,ce.height)}X&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,Te,Oe,ue)}else n.texImage2D(t.TEXTURE_2D,0,ke,Te,Oe,ue);_(S)&&p(V),Se.__version=Q.version,S.onUpdate&&S.onUpdate(S)}b.__version=S.version}function ae(b,S,U){if(S.image.length!==6)return;const V=Le(b,S),j=S.source;n.bindTexture(t.TEXTURE_CUBE_MAP,b.__webglTexture,t.TEXTURE0+U);const Q=i.get(j);if(j.version!==Q.__version||V===!0){n.activeTexture(t.TEXTURE0+U);const Se=ct.getPrimaries(ct.workingColorSpace),ve=S.colorSpace===ds?null:ct.getPrimaries(S.colorSpace),_e=S.colorSpace===ds||Se===ve?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);const We=S.isCompressedTexture||S.image[0].isCompressedTexture,ue=S.image[0]&&S.image[0].isDataTexture,Te=[];for(let me=0;me<6;me++)!We&&!ue?Te[me]=E(S.image[me],!0,s.maxCubemapSize):Te[me]=ue?S.image[me].image:S.image[me],Te[me]=Z(S,Te[me]);const Oe=Te[0],ke=r.convert(S.format,S.colorSpace),Ne=r.convert(S.type),Ge=x(S.internalFormat,ke,Ne,S.colorSpace),Ve=S.isVideoTexture!==!0,pt=Q.__version===void 0||V===!0,X=j.dataReady;let Ce=P(S,Oe);ye(t.TEXTURE_CUBE_MAP,S);let ce;if(We){Ve&&pt&&n.texStorage2D(t.TEXTURE_CUBE_MAP,Ce,Ge,Oe.width,Oe.height);for(let me=0;me<6;me++){ce=Te[me].mipmaps;for(let De=0;De<ce.length;De++){const Ie=ce[De];S.format!==si?ke!==null?Ve?X&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+me,De,0,0,Ie.width,Ie.height,ke,Ie.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+me,De,Ge,Ie.width,Ie.height,0,Ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ve?X&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+me,De,0,0,Ie.width,Ie.height,ke,Ne,Ie.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+me,De,Ge,Ie.width,Ie.height,0,ke,Ne,Ie.data)}}}else{if(ce=S.mipmaps,Ve&&pt){ce.length>0&&Ce++;const me=q(Te[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,Ce,Ge,me.width,me.height)}for(let me=0;me<6;me++)if(ue){Ve?X&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,Te[me].width,Te[me].height,ke,Ne,Te[me].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,Ge,Te[me].width,Te[me].height,0,ke,Ne,Te[me].data);for(let De=0;De<ce.length;De++){const Ke=ce[De].image[me].image;Ve?X&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+me,De+1,0,0,Ke.width,Ke.height,ke,Ne,Ke.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+me,De+1,Ge,Ke.width,Ke.height,0,ke,Ne,Ke.data)}}else{Ve?X&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,ke,Ne,Te[me]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,Ge,ke,Ne,Te[me]);for(let De=0;De<ce.length;De++){const Ie=ce[De];Ve?X&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+me,De+1,0,0,ke,Ne,Ie.image[me]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+me,De+1,Ge,ke,Ne,Ie.image[me])}}}_(S)&&p(t.TEXTURE_CUBE_MAP),Q.__version=j.version,S.onUpdate&&S.onUpdate(S)}b.__version=S.version}function fe(b,S,U,V,j,Q){const Se=r.convert(U.format,U.colorSpace),ve=r.convert(U.type),_e=x(U.internalFormat,Se,ve,U.colorSpace),We=i.get(S),ue=i.get(U);if(ue.__renderTarget=S,!We.__hasExternalTextures){const Te=Math.max(1,S.width>>Q),Oe=Math.max(1,S.height>>Q);j===t.TEXTURE_3D||j===t.TEXTURE_2D_ARRAY?n.texImage3D(j,Q,_e,Te,Oe,S.depth,0,Se,ve,null):n.texImage2D(j,Q,_e,Te,Oe,0,Se,ve,null)}n.bindFramebuffer(t.FRAMEBUFFER,b),H(S)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,V,j,ue.__webglTexture,0,$(S)):(j===t.TEXTURE_2D||j>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,V,j,ue.__webglTexture,Q),n.bindFramebuffer(t.FRAMEBUFFER,null)}function B(b,S,U){if(t.bindRenderbuffer(t.RENDERBUFFER,b),S.depthBuffer){const V=S.depthTexture,j=V&&V.isDepthTexture?V.type:null,Q=M(S.stencilBuffer,j),Se=S.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ve=$(S);H(S)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ve,Q,S.width,S.height):U?t.renderbufferStorageMultisample(t.RENDERBUFFER,ve,Q,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,Q,S.width,S.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Se,t.RENDERBUFFER,b)}else{const V=S.textures;for(let j=0;j<V.length;j++){const Q=V[j],Se=r.convert(Q.format,Q.colorSpace),ve=r.convert(Q.type),_e=x(Q.internalFormat,Se,ve,Q.colorSpace),We=$(S);U&&H(S)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,We,_e,S.width,S.height):H(S)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,We,_e,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,_e,S.width,S.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function ie(b,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,b),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const V=i.get(S.depthTexture);V.__renderTarget=S,(!V.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),G(S.depthTexture,0);const j=V.__webglTexture,Q=$(S);if(S.depthTexture.format===Jr)H(S)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,j,0,Q):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,j,0);else if(S.depthTexture.format===go)H(S)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,j,0,Q):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function se(b){const S=i.get(b),U=b.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==b.depthTexture){const V=b.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),V){const j=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,V.removeEventListener("dispose",j)};V.addEventListener("dispose",j),S.__depthDisposeCallback=j}S.__boundDepthTexture=V}if(b.depthTexture&&!S.__autoAllocateDepthBuffer){if(U)throw new Error("target.depthTexture not supported in Cube render targets");ie(S.__webglFramebuffer,b)}else if(U){S.__webglDepthbuffer=[];for(let V=0;V<6;V++)if(n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer[V]),S.__webglDepthbuffer[V]===void 0)S.__webglDepthbuffer[V]=t.createRenderbuffer(),B(S.__webglDepthbuffer[V],b,!1);else{const j=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Q=S.__webglDepthbuffer[V];t.bindRenderbuffer(t.RENDERBUFFER,Q),t.framebufferRenderbuffer(t.FRAMEBUFFER,j,t.RENDERBUFFER,Q)}}else if(n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=t.createRenderbuffer(),B(S.__webglDepthbuffer,b,!1);else{const V=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,j=S.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,j),t.framebufferRenderbuffer(t.FRAMEBUFFER,V,t.RENDERBUFFER,j)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function te(b,S,U){const V=i.get(b);S!==void 0&&fe(V.__webglFramebuffer,b,b.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),U!==void 0&&se(b)}function Ee(b){const S=b.texture,U=i.get(b),V=i.get(S);b.addEventListener("dispose",T);const j=b.textures,Q=b.isWebGLCubeRenderTarget===!0,Se=j.length>1;if(Se||(V.__webglTexture===void 0&&(V.__webglTexture=t.createTexture()),V.__version=S.version,o.memory.textures++),Q){U.__webglFramebuffer=[];for(let ve=0;ve<6;ve++)if(S.mipmaps&&S.mipmaps.length>0){U.__webglFramebuffer[ve]=[];for(let _e=0;_e<S.mipmaps.length;_e++)U.__webglFramebuffer[ve][_e]=t.createFramebuffer()}else U.__webglFramebuffer[ve]=t.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){U.__webglFramebuffer=[];for(let ve=0;ve<S.mipmaps.length;ve++)U.__webglFramebuffer[ve]=t.createFramebuffer()}else U.__webglFramebuffer=t.createFramebuffer();if(Se)for(let ve=0,_e=j.length;ve<_e;ve++){const We=i.get(j[ve]);We.__webglTexture===void 0&&(We.__webglTexture=t.createTexture(),o.memory.textures++)}if(b.samples>0&&H(b)===!1){U.__webglMultisampledFramebuffer=t.createFramebuffer(),U.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let ve=0;ve<j.length;ve++){const _e=j[ve];U.__webglColorRenderbuffer[ve]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,U.__webglColorRenderbuffer[ve]);const We=r.convert(_e.format,_e.colorSpace),ue=r.convert(_e.type),Te=x(_e.internalFormat,We,ue,_e.colorSpace,b.isXRRenderTarget===!0),Oe=$(b);t.renderbufferStorageMultisample(t.RENDERBUFFER,Oe,Te,b.width,b.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ve,t.RENDERBUFFER,U.__webglColorRenderbuffer[ve])}t.bindRenderbuffer(t.RENDERBUFFER,null),b.depthBuffer&&(U.__webglDepthRenderbuffer=t.createRenderbuffer(),B(U.__webglDepthRenderbuffer,b,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(Q){n.bindTexture(t.TEXTURE_CUBE_MAP,V.__webglTexture),ye(t.TEXTURE_CUBE_MAP,S);for(let ve=0;ve<6;ve++)if(S.mipmaps&&S.mipmaps.length>0)for(let _e=0;_e<S.mipmaps.length;_e++)fe(U.__webglFramebuffer[ve][_e],b,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ve,_e);else fe(U.__webglFramebuffer[ve],b,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0);_(S)&&p(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Se){for(let ve=0,_e=j.length;ve<_e;ve++){const We=j[ve],ue=i.get(We);n.bindTexture(t.TEXTURE_2D,ue.__webglTexture),ye(t.TEXTURE_2D,We),fe(U.__webglFramebuffer,b,We,t.COLOR_ATTACHMENT0+ve,t.TEXTURE_2D,0),_(We)&&p(t.TEXTURE_2D)}n.unbindTexture()}else{let ve=t.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(ve=b.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ve,V.__webglTexture),ye(ve,S),S.mipmaps&&S.mipmaps.length>0)for(let _e=0;_e<S.mipmaps.length;_e++)fe(U.__webglFramebuffer[_e],b,S,t.COLOR_ATTACHMENT0,ve,_e);else fe(U.__webglFramebuffer,b,S,t.COLOR_ATTACHMENT0,ve,0);_(S)&&p(ve),n.unbindTexture()}b.depthBuffer&&se(b)}function Me(b){const S=b.textures;for(let U=0,V=S.length;U<V;U++){const j=S[U];if(_(j)){const Q=R(b),Se=i.get(j).__webglTexture;n.bindTexture(Q,Se),p(Q),n.unbindTexture()}}}const D=[],y=[];function K(b){if(b.samples>0){if(H(b)===!1){const S=b.textures,U=b.width,V=b.height;let j=t.COLOR_BUFFER_BIT;const Q=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Se=i.get(b),ve=S.length>1;if(ve)for(let _e=0;_e<S.length;_e++)n.bindFramebuffer(t.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+_e,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Se.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+_e,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Se.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Se.__webglFramebuffer);for(let _e=0;_e<S.length;_e++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(j|=t.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(j|=t.STENCIL_BUFFER_BIT)),ve){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Se.__webglColorRenderbuffer[_e]);const We=i.get(S[_e]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,We,0)}t.blitFramebuffer(0,0,U,V,0,0,U,V,j,t.NEAREST),l===!0&&(D.length=0,y.length=0,D.push(t.COLOR_ATTACHMENT0+_e),b.depthBuffer&&b.resolveDepthBuffer===!1&&(D.push(Q),y.push(Q),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,y)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,D))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ve)for(let _e=0;_e<S.length;_e++){n.bindFramebuffer(t.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+_e,t.RENDERBUFFER,Se.__webglColorRenderbuffer[_e]);const We=i.get(S[_e]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Se.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+_e,t.TEXTURE_2D,We,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Se.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&l){const S=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[S])}}}function $(b){return Math.min(s.maxSamples,b.samples)}function H(b){const S=i.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function z(b){const S=o.render.frame;u.get(b)!==S&&(u.set(b,S),b.update())}function Z(b,S){const U=b.colorSpace,V=b.format,j=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||U!==vo&&U!==ds&&(ct.getTransfer(U)===_t?(V!==si||j!==$i)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",U)),S}function q(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(c.width=b.naturalWidth||b.width,c.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(c.width=b.displayWidth,c.height=b.displayHeight):(c.width=b.width,c.height=b.height),c}this.allocateTextureUnit=L,this.resetTextureUnits=I,this.setTexture2D=G,this.setTexture2DArray=O,this.setTexture3D=W,this.setTextureCube=F,this.rebindTextures=te,this.setupRenderTarget=Ee,this.updateRenderTargetMipmap=Me,this.updateMultisampleRenderTarget=K,this.setupDepthRenderbuffer=se,this.setupFrameBufferTexture=fe,this.useMultisampledRTT=H}function gD(t,e){function n(i,s=ds){let r;const o=ct.getTransfer(s);if(i===$i)return t.UNSIGNED_BYTE;if(i===Cd)return t.UNSIGNED_SHORT_4_4_4_4;if(i===wd)return t.UNSIGNED_SHORT_5_5_5_1;if(i===pE)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===hE)return t.BYTE;if(i===dE)return t.SHORT;if(i===Sa)return t.UNSIGNED_SHORT;if(i===Rd)return t.INT;if(i===fr)return t.UNSIGNED_INT;if(i===Fi)return t.FLOAT;if(i===Oa)return t.HALF_FLOAT;if(i===mE)return t.ALPHA;if(i===_E)return t.RGB;if(i===si)return t.RGBA;if(i===gE)return t.LUMINANCE;if(i===vE)return t.LUMINANCE_ALPHA;if(i===Jr)return t.DEPTH_COMPONENT;if(i===go)return t.DEPTH_STENCIL;if(i===EE)return t.RED;if(i===Pd)return t.RED_INTEGER;if(i===SE)return t.RG;if(i===Id)return t.RG_INTEGER;if(i===Nd)return t.RGBA_INTEGER;if(i===Ll||i===Ol||i===Ul||i===Fl)if(o===_t)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Ll)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ol)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ul)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Fl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Ll)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ol)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ul)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Fl)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Hf||i===zf||i===Gf||i===Wf)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Hf)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===zf)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Gf)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Wf)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Xf||i===$f||i===qf)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Xf||i===$f)return o===_t?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===qf)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Yf||i===jf||i===Kf||i===Zf||i===Jf||i===Qf||i===eh||i===th||i===nh||i===ih||i===sh||i===rh||i===oh||i===ah)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Yf)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===jf)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Kf)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Zf)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Jf)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Qf)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===eh)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===th)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===nh)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===ih)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===sh)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===rh)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===oh)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===ah)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===kl||i===lh||i===ch)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===kl)return o===_t?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===lh)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===ch)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===xE||i===uh||i===fh||i===hh)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===kl)return r.COMPRESSED_RED_RGTC1_EXT;if(i===uh)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===fh)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===hh)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===_o?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const vD={type:"move"};class ju{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new El,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new El,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ne,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ne),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new El,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ne,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ne),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const E of e.hand.values()){const _=n.getJointPose(E,i),p=this._getHandJoint(c,E);_!==null&&(p.matrix.fromArray(_.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=_.radius),p.visible=_!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,g=.005;c.inputState.pinching&&h>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=n.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=n.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(vD)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new El;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const ED=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,SD=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class xD{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const s=new Pn,r=e.properties.get(s);r.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new bs({vertexShader:ED,fragmentShader:SD,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new pi(new Kc(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class yD extends gr{constructor(e,n){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,h=null,d=null,g=null;const E=new xD,_=n.getContextAttributes();let p=null,R=null;const x=[],M=[],P=new Qe;let N=null;const T=new Wn;T.viewport=new Lt;const A=new Wn;A.viewport=new Lt;const m=[T,A],v=new zw;let C=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ee){let ae=x[ee];return ae===void 0&&(ae=new ju,x[ee]=ae),ae.getTargetRaySpace()},this.getControllerGrip=function(ee){let ae=x[ee];return ae===void 0&&(ae=new ju,x[ee]=ae),ae.getGripSpace()},this.getHand=function(ee){let ae=x[ee];return ae===void 0&&(ae=new ju,x[ee]=ae),ae.getHandSpace()};function L(ee){const ae=M.indexOf(ee.inputSource);if(ae===-1)return;const fe=x[ae];fe!==void 0&&(fe.update(ee.inputSource,ee.frame,c||o),fe.dispatchEvent({type:ee.type,data:ee.inputSource}))}function k(){s.removeEventListener("select",L),s.removeEventListener("selectstart",L),s.removeEventListener("selectend",L),s.removeEventListener("squeeze",L),s.removeEventListener("squeezestart",L),s.removeEventListener("squeezeend",L),s.removeEventListener("end",k),s.removeEventListener("inputsourceschange",G);for(let ee=0;ee<x.length;ee++){const ae=M[ee];ae!==null&&(M[ee]=null,x[ee].disconnect(ae))}C=null,I=null,E.reset(),e.setRenderTarget(p),d=null,h=null,f=null,s=null,R=null,Le.stop(),i.isPresenting=!1,e.setPixelRatio(N),e.setSize(P.width,P.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ee){r=ee,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ee){a=ee,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(ee){c=ee},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(ee){if(s=ee,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",L),s.addEventListener("selectstart",L),s.addEventListener("selectend",L),s.addEventListener("squeeze",L),s.addEventListener("squeezestart",L),s.addEventListener("squeezeend",L),s.addEventListener("end",k),s.addEventListener("inputsourceschange",G),_.xrCompatible!==!0&&await n.makeXRCompatible(),N=e.getPixelRatio(),e.getSize(P),s.renderState.layers===void 0){const ae={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,n,ae),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),R=new hr(d.framebufferWidth,d.framebufferHeight,{format:si,type:$i,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let ae=null,fe=null,B=null;_.depth&&(B=_.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ae=_.stencil?go:Jr,fe=_.stencil?_o:fr);const ie={colorFormat:n.RGBA8,depthFormat:B,scaleFactor:r};f=new XRWebGLBinding(s,n),h=f.createProjectionLayer(ie),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),R=new hr(h.textureWidth,h.textureHeight,{format:si,type:$i,depthTexture:new OE(h.textureWidth,h.textureHeight,fe,void 0,void 0,void 0,void 0,void 0,void 0,ae),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}R.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Le.setContext(s),Le.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return E.getDepthTexture()};function G(ee){for(let ae=0;ae<ee.removed.length;ae++){const fe=ee.removed[ae],B=M.indexOf(fe);B>=0&&(M[B]=null,x[B].disconnect(fe))}for(let ae=0;ae<ee.added.length;ae++){const fe=ee.added[ae];let B=M.indexOf(fe);if(B===-1){for(let se=0;se<x.length;se++)if(se>=M.length){M.push(fe),B=se;break}else if(M[se]===null){M[se]=fe,B=se;break}if(B===-1)break}const ie=x[B];ie&&ie.connect(fe)}}const O=new ne,W=new ne;function F(ee,ae,fe){O.setFromMatrixPosition(ae.matrixWorld),W.setFromMatrixPosition(fe.matrixWorld);const B=O.distanceTo(W),ie=ae.projectionMatrix.elements,se=fe.projectionMatrix.elements,te=ie[14]/(ie[10]-1),Ee=ie[14]/(ie[10]+1),Me=(ie[9]+1)/ie[5],D=(ie[9]-1)/ie[5],y=(ie[8]-1)/ie[0],K=(se[8]+1)/se[0],$=te*y,H=te*K,z=B/(-y+K),Z=z*-y;if(ae.matrixWorld.decompose(ee.position,ee.quaternion,ee.scale),ee.translateX(Z),ee.translateZ(z),ee.matrixWorld.compose(ee.position,ee.quaternion,ee.scale),ee.matrixWorldInverse.copy(ee.matrixWorld).invert(),ie[10]===-1)ee.projectionMatrix.copy(ae.projectionMatrix),ee.projectionMatrixInverse.copy(ae.projectionMatrixInverse);else{const q=te+z,b=Ee+z,S=$-Z,U=H+(B-Z),V=Me*Ee/b*q,j=D*Ee/b*q;ee.projectionMatrix.makePerspective(S,U,V,j,q,b),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert()}}function le(ee,ae){ae===null?ee.matrixWorld.copy(ee.matrix):ee.matrixWorld.multiplyMatrices(ae.matrixWorld,ee.matrix),ee.matrixWorldInverse.copy(ee.matrixWorld).invert()}this.updateCamera=function(ee){if(s===null)return;let ae=ee.near,fe=ee.far;E.texture!==null&&(E.depthNear>0&&(ae=E.depthNear),E.depthFar>0&&(fe=E.depthFar)),v.near=A.near=T.near=ae,v.far=A.far=T.far=fe,(C!==v.near||I!==v.far)&&(s.updateRenderState({depthNear:v.near,depthFar:v.far}),C=v.near,I=v.far),T.layers.mask=ee.layers.mask|2,A.layers.mask=ee.layers.mask|4,v.layers.mask=T.layers.mask|A.layers.mask;const B=ee.parent,ie=v.cameras;le(v,B);for(let se=0;se<ie.length;se++)le(ie[se],B);ie.length===2?F(v,T,A):v.projectionMatrix.copy(T.projectionMatrix),he(ee,v,B)};function he(ee,ae,fe){fe===null?ee.matrix.copy(ae.matrixWorld):(ee.matrix.copy(fe.matrixWorld),ee.matrix.invert(),ee.matrix.multiply(ae.matrixWorld)),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.updateMatrixWorld(!0),ee.projectionMatrix.copy(ae.projectionMatrix),ee.projectionMatrixInverse.copy(ae.projectionMatrixInverse),ee.isPerspectiveCamera&&(ee.fov=xa*2*Math.atan(1/ee.projectionMatrix.elements[5]),ee.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(h===null&&d===null))return l},this.setFoveation=function(ee){l=ee,h!==null&&(h.fixedFoveation=ee),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=ee)},this.hasDepthSensing=function(){return E.texture!==null},this.getDepthSensingMesh=function(){return E.getMesh(v)};let de=null;function ye(ee,ae){if(u=ae.getViewerPose(c||o),g=ae,u!==null){const fe=u.views;d!==null&&(e.setRenderTargetFramebuffer(R,d.framebuffer),e.setRenderTarget(R));let B=!1;fe.length!==v.cameras.length&&(v.cameras.length=0,B=!0);for(let se=0;se<fe.length;se++){const te=fe[se];let Ee=null;if(d!==null)Ee=d.getViewport(te);else{const D=f.getViewSubImage(h,te);Ee=D.viewport,se===0&&(e.setRenderTargetTextures(R,D.colorTexture,h.ignoreDepthValues?void 0:D.depthStencilTexture),e.setRenderTarget(R))}let Me=m[se];Me===void 0&&(Me=new Wn,Me.layers.enable(se),Me.viewport=new Lt,m[se]=Me),Me.matrix.fromArray(te.transform.matrix),Me.matrix.decompose(Me.position,Me.quaternion,Me.scale),Me.projectionMatrix.fromArray(te.projectionMatrix),Me.projectionMatrixInverse.copy(Me.projectionMatrix).invert(),Me.viewport.set(Ee.x,Ee.y,Ee.width,Ee.height),se===0&&(v.matrix.copy(Me.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),B===!0&&v.cameras.push(Me)}const ie=s.enabledFeatures;if(ie&&ie.includes("depth-sensing")){const se=f.getDepthInformation(fe[0]);se&&se.isValid&&se.texture&&E.init(e,se,s.renderState)}}for(let fe=0;fe<x.length;fe++){const B=M[fe],ie=x[fe];B!==null&&ie!==void 0&&ie.update(B,ae,c||o)}de&&de(ee,ae),ae.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ae}),g=null}const Le=new UE;Le.setAnimationLoop(ye),this.setAnimationLoop=function(ee){de=ee},this.dispose=function(){}}}const Hs=new qi,MD=new Vt;function TD(t,e){function n(_,p){_.matrixAutoUpdate===!0&&_.updateMatrix(),p.value.copy(_.matrix)}function i(_,p){p.color.getRGB(_.fogColor.value,IE(t)),p.isFog?(_.fogNear.value=p.near,_.fogFar.value=p.far):p.isFogExp2&&(_.fogDensity.value=p.density)}function s(_,p,R,x,M){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(_,p):p.isMeshToonMaterial?(r(_,p),f(_,p)):p.isMeshPhongMaterial?(r(_,p),u(_,p)):p.isMeshStandardMaterial?(r(_,p),h(_,p),p.isMeshPhysicalMaterial&&d(_,p,M)):p.isMeshMatcapMaterial?(r(_,p),g(_,p)):p.isMeshDepthMaterial?r(_,p):p.isMeshDistanceMaterial?(r(_,p),E(_,p)):p.isMeshNormalMaterial?r(_,p):p.isLineBasicMaterial?(o(_,p),p.isLineDashedMaterial&&a(_,p)):p.isPointsMaterial?l(_,p,R,x):p.isSpriteMaterial?c(_,p):p.isShadowMaterial?(_.color.value.copy(p.color),_.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(_,p){_.opacity.value=p.opacity,p.color&&_.diffuse.value.copy(p.color),p.emissive&&_.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(_.map.value=p.map,n(p.map,_.mapTransform)),p.alphaMap&&(_.alphaMap.value=p.alphaMap,n(p.alphaMap,_.alphaMapTransform)),p.bumpMap&&(_.bumpMap.value=p.bumpMap,n(p.bumpMap,_.bumpMapTransform),_.bumpScale.value=p.bumpScale,p.side===wn&&(_.bumpScale.value*=-1)),p.normalMap&&(_.normalMap.value=p.normalMap,n(p.normalMap,_.normalMapTransform),_.normalScale.value.copy(p.normalScale),p.side===wn&&_.normalScale.value.negate()),p.displacementMap&&(_.displacementMap.value=p.displacementMap,n(p.displacementMap,_.displacementMapTransform),_.displacementScale.value=p.displacementScale,_.displacementBias.value=p.displacementBias),p.emissiveMap&&(_.emissiveMap.value=p.emissiveMap,n(p.emissiveMap,_.emissiveMapTransform)),p.specularMap&&(_.specularMap.value=p.specularMap,n(p.specularMap,_.specularMapTransform)),p.alphaTest>0&&(_.alphaTest.value=p.alphaTest);const R=e.get(p),x=R.envMap,M=R.envMapRotation;x&&(_.envMap.value=x,Hs.copy(M),Hs.x*=-1,Hs.y*=-1,Hs.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Hs.y*=-1,Hs.z*=-1),_.envMapRotation.value.setFromMatrix4(MD.makeRotationFromEuler(Hs)),_.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,_.reflectivity.value=p.reflectivity,_.ior.value=p.ior,_.refractionRatio.value=p.refractionRatio),p.lightMap&&(_.lightMap.value=p.lightMap,_.lightMapIntensity.value=p.lightMapIntensity,n(p.lightMap,_.lightMapTransform)),p.aoMap&&(_.aoMap.value=p.aoMap,_.aoMapIntensity.value=p.aoMapIntensity,n(p.aoMap,_.aoMapTransform))}function o(_,p){_.diffuse.value.copy(p.color),_.opacity.value=p.opacity,p.map&&(_.map.value=p.map,n(p.map,_.mapTransform))}function a(_,p){_.dashSize.value=p.dashSize,_.totalSize.value=p.dashSize+p.gapSize,_.scale.value=p.scale}function l(_,p,R,x){_.diffuse.value.copy(p.color),_.opacity.value=p.opacity,_.size.value=p.size*R,_.scale.value=x*.5,p.map&&(_.map.value=p.map,n(p.map,_.uvTransform)),p.alphaMap&&(_.alphaMap.value=p.alphaMap,n(p.alphaMap,_.alphaMapTransform)),p.alphaTest>0&&(_.alphaTest.value=p.alphaTest)}function c(_,p){_.diffuse.value.copy(p.color),_.opacity.value=p.opacity,_.rotation.value=p.rotation,p.map&&(_.map.value=p.map,n(p.map,_.mapTransform)),p.alphaMap&&(_.alphaMap.value=p.alphaMap,n(p.alphaMap,_.alphaMapTransform)),p.alphaTest>0&&(_.alphaTest.value=p.alphaTest)}function u(_,p){_.specular.value.copy(p.specular),_.shininess.value=Math.max(p.shininess,1e-4)}function f(_,p){p.gradientMap&&(_.gradientMap.value=p.gradientMap)}function h(_,p){_.metalness.value=p.metalness,p.metalnessMap&&(_.metalnessMap.value=p.metalnessMap,n(p.metalnessMap,_.metalnessMapTransform)),_.roughness.value=p.roughness,p.roughnessMap&&(_.roughnessMap.value=p.roughnessMap,n(p.roughnessMap,_.roughnessMapTransform)),p.envMap&&(_.envMapIntensity.value=p.envMapIntensity)}function d(_,p,R){_.ior.value=p.ior,p.sheen>0&&(_.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),_.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(_.sheenColorMap.value=p.sheenColorMap,n(p.sheenColorMap,_.sheenColorMapTransform)),p.sheenRoughnessMap&&(_.sheenRoughnessMap.value=p.sheenRoughnessMap,n(p.sheenRoughnessMap,_.sheenRoughnessMapTransform))),p.clearcoat>0&&(_.clearcoat.value=p.clearcoat,_.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(_.clearcoatMap.value=p.clearcoatMap,n(p.clearcoatMap,_.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,n(p.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(_.clearcoatNormalMap.value=p.clearcoatNormalMap,n(p.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===wn&&_.clearcoatNormalScale.value.negate())),p.dispersion>0&&(_.dispersion.value=p.dispersion),p.iridescence>0&&(_.iridescence.value=p.iridescence,_.iridescenceIOR.value=p.iridescenceIOR,_.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(_.iridescenceMap.value=p.iridescenceMap,n(p.iridescenceMap,_.iridescenceMapTransform)),p.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=p.iridescenceThicknessMap,n(p.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),p.transmission>0&&(_.transmission.value=p.transmission,_.transmissionSamplerMap.value=R.texture,_.transmissionSamplerSize.value.set(R.width,R.height),p.transmissionMap&&(_.transmissionMap.value=p.transmissionMap,n(p.transmissionMap,_.transmissionMapTransform)),_.thickness.value=p.thickness,p.thicknessMap&&(_.thicknessMap.value=p.thicknessMap,n(p.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=p.attenuationDistance,_.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(_.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(_.anisotropyMap.value=p.anisotropyMap,n(p.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=p.specularIntensity,_.specularColor.value.copy(p.specularColor),p.specularColorMap&&(_.specularColorMap.value=p.specularColorMap,n(p.specularColorMap,_.specularColorMapTransform)),p.specularIntensityMap&&(_.specularIntensityMap.value=p.specularIntensityMap,n(p.specularIntensityMap,_.specularIntensityMapTransform))}function g(_,p){p.matcap&&(_.matcap.value=p.matcap)}function E(_,p){const R=e.get(p).light;_.referencePosition.value.setFromMatrixPosition(R.matrixWorld),_.nearDistance.value=R.shadow.camera.near,_.farDistance.value=R.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function bD(t,e,n,i){let s={},r={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(R,x){const M=x.program;i.uniformBlockBinding(R,M)}function c(R,x){let M=s[R.id];M===void 0&&(g(R),M=u(R),s[R.id]=M,R.addEventListener("dispose",_));const P=x.program;i.updateUBOMapping(R,P);const N=e.render.frame;r[R.id]!==N&&(h(R),r[R.id]=N)}function u(R){const x=f();R.__bindingPointIndex=x;const M=t.createBuffer(),P=R.__size,N=R.usage;return t.bindBuffer(t.UNIFORM_BUFFER,M),t.bufferData(t.UNIFORM_BUFFER,P,N),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,x,M),M}function f(){for(let R=0;R<a;R++)if(o.indexOf(R)===-1)return o.push(R),R;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(R){const x=s[R.id],M=R.uniforms,P=R.__cache;t.bindBuffer(t.UNIFORM_BUFFER,x);for(let N=0,T=M.length;N<T;N++){const A=Array.isArray(M[N])?M[N]:[M[N]];for(let m=0,v=A.length;m<v;m++){const C=A[m];if(d(C,N,m,P)===!0){const I=C.__offset,L=Array.isArray(C.value)?C.value:[C.value];let k=0;for(let G=0;G<L.length;G++){const O=L[G],W=E(O);typeof O=="number"||typeof O=="boolean"?(C.__data[0]=O,t.bufferSubData(t.UNIFORM_BUFFER,I+k,C.__data)):O.isMatrix3?(C.__data[0]=O.elements[0],C.__data[1]=O.elements[1],C.__data[2]=O.elements[2],C.__data[3]=0,C.__data[4]=O.elements[3],C.__data[5]=O.elements[4],C.__data[6]=O.elements[5],C.__data[7]=0,C.__data[8]=O.elements[6],C.__data[9]=O.elements[7],C.__data[10]=O.elements[8],C.__data[11]=0):(O.toArray(C.__data,k),k+=W.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,I,C.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function d(R,x,M,P){const N=R.value,T=x+"_"+M;if(P[T]===void 0)return typeof N=="number"||typeof N=="boolean"?P[T]=N:P[T]=N.clone(),!0;{const A=P[T];if(typeof N=="number"||typeof N=="boolean"){if(A!==N)return P[T]=N,!0}else if(A.equals(N)===!1)return A.copy(N),!0}return!1}function g(R){const x=R.uniforms;let M=0;const P=16;for(let T=0,A=x.length;T<A;T++){const m=Array.isArray(x[T])?x[T]:[x[T]];for(let v=0,C=m.length;v<C;v++){const I=m[v],L=Array.isArray(I.value)?I.value:[I.value];for(let k=0,G=L.length;k<G;k++){const O=L[k],W=E(O),F=M%P,le=F%W.boundary,he=F+le;M+=le,he!==0&&P-he<W.storage&&(M+=P-he),I.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=M,M+=W.storage}}}const N=M%P;return N>0&&(M+=P-N),R.__size=M,R.__cache={},this}function E(R){const x={boundary:0,storage:0};return typeof R=="number"||typeof R=="boolean"?(x.boundary=4,x.storage=4):R.isVector2?(x.boundary=8,x.storage=8):R.isVector3||R.isColor?(x.boundary=16,x.storage=12):R.isVector4?(x.boundary=16,x.storage=16):R.isMatrix3?(x.boundary=48,x.storage=48):R.isMatrix4?(x.boundary=64,x.storage=64):R.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",R),x}function _(R){const x=R.target;x.removeEventListener("dispose",_);const M=o.indexOf(x.__bindingPointIndex);o.splice(M,1),t.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function p(){for(const R in s)t.deleteBuffer(s[R]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}class AD{constructor(e={}){const{canvas:n=uw(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=o;const g=new Uint32Array(4),E=new Int32Array(4);let _=null,p=null;const R=[],x=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Gn,this.toneMapping=Ss,this.toneMappingExposure=1;const M=this;let P=!1,N=0,T=0,A=null,m=-1,v=null;const C=new Lt,I=new Lt;let L=null;const k=new vt(0);let G=0,O=n.width,W=n.height,F=1,le=null,he=null;const de=new Lt(0,0,O,W),ye=new Lt(0,0,O,W);let Le=!1;const ee=new LE;let ae=!1,fe=!1;const B=new Vt,ie=new Vt,se=new ne,te=new Lt,Ee={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Me=!1;function D(){return A===null?F:1}let y=i;function K(w,Y){return n.getContext(w,Y)}try{const w={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Ad}`),n.addEventListener("webglcontextlost",me,!1),n.addEventListener("webglcontextrestored",De,!1),n.addEventListener("webglcontextcreationerror",Ie,!1),y===null){const Y="webgl2";if(y=K(Y,w),y===null)throw K(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let $,H,z,Z,q,b,S,U,V,j,Q,Se,ve,_e,We,ue,Te,Oe,ke,Ne,Ge,Ve,pt,X;function Ce(){$=new OI(y),$.init(),Ve=new gD(y,$),H=new wI(y,$,e,Ve),z=new mD(y,$),H.reverseDepthBuffer&&h&&z.buffers.depth.setReversed(!0),Z=new kI(y),q=new nD,b=new _D(y,$,z,q,H,Ve,Z),S=new II(M),U=new LI(M),V=new Xw(y),pt=new RI(y,V),j=new UI(y,V,Z,pt),Q=new VI(y,j,V,Z),ke=new BI(y,H,b),ue=new PI(q),Se=new tD(M,S,U,$,H,pt,ue),ve=new TD(M,q),_e=new sD,We=new uD($),Oe=new AI(M,S,U,z,Q,d,l),Te=new dD(M,Q,H),X=new bD(y,Z,H,z),Ne=new CI(y,$,Z),Ge=new FI(y,$,Z),Z.programs=Se.programs,M.capabilities=H,M.extensions=$,M.properties=q,M.renderLists=_e,M.shadowMap=Te,M.state=z,M.info=Z}Ce();const ce=new yD(M,y);this.xr=ce,this.getContext=function(){return y},this.getContextAttributes=function(){return y.getContextAttributes()},this.forceContextLoss=function(){const w=$.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=$.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return F},this.setPixelRatio=function(w){w!==void 0&&(F=w,this.setSize(O,W,!1))},this.getSize=function(w){return w.set(O,W)},this.setSize=function(w,Y,re=!0){if(ce.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=w,W=Y,n.width=Math.floor(w*F),n.height=Math.floor(Y*F),re===!0&&(n.style.width=w+"px",n.style.height=Y+"px"),this.setViewport(0,0,w,Y)},this.getDrawingBufferSize=function(w){return w.set(O*F,W*F).floor()},this.setDrawingBufferSize=function(w,Y,re){O=w,W=Y,F=re,n.width=Math.floor(w*re),n.height=Math.floor(Y*re),this.setViewport(0,0,w,Y)},this.getCurrentViewport=function(w){return w.copy(C)},this.getViewport=function(w){return w.copy(de)},this.setViewport=function(w,Y,re,oe){w.isVector4?de.set(w.x,w.y,w.z,w.w):de.set(w,Y,re,oe),z.viewport(C.copy(de).multiplyScalar(F).round())},this.getScissor=function(w){return w.copy(ye)},this.setScissor=function(w,Y,re,oe){w.isVector4?ye.set(w.x,w.y,w.z,w.w):ye.set(w,Y,re,oe),z.scissor(I.copy(ye).multiplyScalar(F).round())},this.getScissorTest=function(){return Le},this.setScissorTest=function(w){z.setScissorTest(Le=w)},this.setOpaqueSort=function(w){le=w},this.setTransparentSort=function(w){he=w},this.getClearColor=function(w){return w.copy(Oe.getClearColor())},this.setClearColor=function(){Oe.setClearColor.apply(Oe,arguments)},this.getClearAlpha=function(){return Oe.getClearAlpha()},this.setClearAlpha=function(){Oe.setClearAlpha.apply(Oe,arguments)},this.clear=function(w=!0,Y=!0,re=!0){let oe=0;if(w){let J=!1;if(A!==null){const xe=A.texture.format;J=xe===Nd||xe===Id||xe===Pd}if(J){const xe=A.texture.type,we=xe===$i||xe===fr||xe===Sa||xe===_o||xe===Cd||xe===wd,Ue=Oe.getClearColor(),Fe=Oe.getClearAlpha(),$e=Ue.r,qe=Ue.g,Be=Ue.b;we?(g[0]=$e,g[1]=qe,g[2]=Be,g[3]=Fe,y.clearBufferuiv(y.COLOR,0,g)):(E[0]=$e,E[1]=qe,E[2]=Be,E[3]=Fe,y.clearBufferiv(y.COLOR,0,E))}else oe|=y.COLOR_BUFFER_BIT}Y&&(oe|=y.DEPTH_BUFFER_BIT),re&&(oe|=y.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),y.clear(oe)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",me,!1),n.removeEventListener("webglcontextrestored",De,!1),n.removeEventListener("webglcontextcreationerror",Ie,!1),Oe.dispose(),_e.dispose(),We.dispose(),q.dispose(),S.dispose(),U.dispose(),Q.dispose(),pt.dispose(),X.dispose(),Se.dispose(),ce.dispose(),ce.removeEventListener("sessionstart",kd),ce.removeEventListener("sessionend",Bd),Ns.stop()};function me(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function De(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;const w=Z.autoReset,Y=Te.enabled,re=Te.autoUpdate,oe=Te.needsUpdate,J=Te.type;Ce(),Z.autoReset=w,Te.enabled=Y,Te.autoUpdate=re,Te.needsUpdate=oe,Te.type=J}function Ie(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Ke(w){const Y=w.target;Y.removeEventListener("dispose",Ke),Ct(Y)}function Ct(w){Qt(w),q.remove(w)}function Qt(w){const Y=q.get(w).programs;Y!==void 0&&(Y.forEach(function(re){Se.releaseProgram(re)}),w.isShaderMaterial&&Se.releaseShaderCache(w))}this.renderBufferDirect=function(w,Y,re,oe,J,xe){Y===null&&(Y=Ee);const we=J.isMesh&&J.matrixWorld.determinant()<0,Ue=GE(w,Y,re,oe,J);z.setMaterial(oe,we);let Fe=re.index,$e=1;if(oe.wireframe===!0){if(Fe=j.getWireframeAttribute(re),Fe===void 0)return;$e=2}const qe=re.drawRange,Be=re.attributes.position;let ot=qe.start*$e,ht=(qe.start+qe.count)*$e;xe!==null&&(ot=Math.max(ot,xe.start*$e),ht=Math.min(ht,(xe.start+xe.count)*$e)),Fe!==null?(ot=Math.max(ot,0),ht=Math.min(ht,Fe.count)):Be!=null&&(ot=Math.max(ot,0),ht=Math.min(ht,Be.count));const Ut=ht-ot;if(Ut<0||Ut===1/0)return;pt.setup(J,oe,Ue,re,Fe);let wt,at=Ne;if(Fe!==null&&(wt=V.get(Fe),at=Ge,at.setIndex(wt)),J.isMesh)oe.wireframe===!0?(z.setLineWidth(oe.wireframeLinewidth*D()),at.setMode(y.LINES)):at.setMode(y.TRIANGLES);else if(J.isLine){let He=oe.linewidth;He===void 0&&(He=1),z.setLineWidth(He*D()),J.isLineSegments?at.setMode(y.LINES):J.isLineLoop?at.setMode(y.LINE_LOOP):at.setMode(y.LINE_STRIP)}else J.isPoints?at.setMode(y.POINTS):J.isSprite&&at.setMode(y.TRIANGLES);if(J.isBatchedMesh)if(J._multiDrawInstances!==null)at.renderMultiDrawInstances(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount,J._multiDrawInstances);else if($.get("WEBGL_multi_draw"))at.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else{const He=J._multiDrawStarts,Zt=J._multiDrawCounts,dt=J._multiDrawCount,Zn=Fe?V.get(Fe).bytesPerElement:1,Er=q.get(oe).currentProgram.getUniforms();for(let In=0;In<dt;In++)Er.setValue(y,"_gl_DrawID",In),at.render(He[In]/Zn,Zt[In])}else if(J.isInstancedMesh)at.renderInstances(ot,Ut,J.count);else if(re.isInstancedBufferGeometry){const He=re._maxInstanceCount!==void 0?re._maxInstanceCount:1/0,Zt=Math.min(re.instanceCount,He);at.renderInstances(ot,Ut,Zt)}else at.render(ot,Ut)};function mt(w,Y,re){w.transparent===!0&&w.side===Ui&&w.forceSinglePass===!1?(w.side=wn,w.needsUpdate=!0,Ba(w,Y,re),w.side=Ts,w.needsUpdate=!0,Ba(w,Y,re),w.side=Ui):Ba(w,Y,re)}this.compile=function(w,Y,re=null){re===null&&(re=w),p=We.get(re),p.init(Y),x.push(p),re.traverseVisible(function(J){J.isLight&&J.layers.test(Y.layers)&&(p.pushLight(J),J.castShadow&&p.pushShadow(J))}),w!==re&&w.traverseVisible(function(J){J.isLight&&J.layers.test(Y.layers)&&(p.pushLight(J),J.castShadow&&p.pushShadow(J))}),p.setupLights();const oe=new Set;return w.traverse(function(J){if(!(J.isMesh||J.isPoints||J.isLine||J.isSprite))return;const xe=J.material;if(xe)if(Array.isArray(xe))for(let we=0;we<xe.length;we++){const Ue=xe[we];mt(Ue,re,J),oe.add(Ue)}else mt(xe,re,J),oe.add(xe)}),x.pop(),p=null,oe},this.compileAsync=function(w,Y,re=null){const oe=this.compile(w,Y,re);return new Promise(J=>{function xe(){if(oe.forEach(function(we){q.get(we).currentProgram.isReady()&&oe.delete(we)}),oe.size===0){J(w);return}setTimeout(xe,10)}$.get("KHR_parallel_shader_compile")!==null?xe():setTimeout(xe,10)})};let Kn=null;function Si(w){Kn&&Kn(w)}function kd(){Ns.stop()}function Bd(){Ns.start()}const Ns=new UE;Ns.setAnimationLoop(Si),typeof self<"u"&&Ns.setContext(self),this.setAnimationLoop=function(w){Kn=w,ce.setAnimationLoop(w),w===null?Ns.stop():Ns.start()},ce.addEventListener("sessionstart",kd),ce.addEventListener("sessionend",Bd),this.render=function(w,Y){if(Y!==void 0&&Y.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),ce.enabled===!0&&ce.isPresenting===!0&&(ce.cameraAutoUpdate===!0&&ce.updateCamera(Y),Y=ce.getCamera()),w.isScene===!0&&w.onBeforeRender(M,w,Y,A),p=We.get(w,x.length),p.init(Y),x.push(p),ie.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),ee.setFromProjectionMatrix(ie),fe=this.localClippingEnabled,ae=ue.init(this.clippingPlanes,fe),_=_e.get(w,R.length),_.init(),R.push(_),ce.enabled===!0&&ce.isPresenting===!0){const xe=M.xr.getDepthSensingMesh();xe!==null&&Qc(xe,Y,-1/0,M.sortObjects)}Qc(w,Y,0,M.sortObjects),_.finish(),M.sortObjects===!0&&_.sort(le,he),Me=ce.enabled===!1||ce.isPresenting===!1||ce.hasDepthSensing()===!1,Me&&Oe.addToRenderList(_,w),this.info.render.frame++,ae===!0&&ue.beginShadows();const re=p.state.shadowsArray;Te.render(re,w,Y),ae===!0&&ue.endShadows(),this.info.autoReset===!0&&this.info.reset();const oe=_.opaque,J=_.transmissive;if(p.setupLights(),Y.isArrayCamera){const xe=Y.cameras;if(J.length>0)for(let we=0,Ue=xe.length;we<Ue;we++){const Fe=xe[we];Hd(oe,J,w,Fe)}Me&&Oe.render(w);for(let we=0,Ue=xe.length;we<Ue;we++){const Fe=xe[we];Vd(_,w,Fe,Fe.viewport)}}else J.length>0&&Hd(oe,J,w,Y),Me&&Oe.render(w),Vd(_,w,Y);A!==null&&(b.updateMultisampleRenderTarget(A),b.updateRenderTargetMipmap(A)),w.isScene===!0&&w.onAfterRender(M,w,Y),pt.resetDefaultState(),m=-1,v=null,x.pop(),x.length>0?(p=x[x.length-1],ae===!0&&ue.setGlobalState(M.clippingPlanes,p.state.camera)):p=null,R.pop(),R.length>0?_=R[R.length-1]:_=null};function Qc(w,Y,re,oe){if(w.visible===!1)return;if(w.layers.test(Y.layers)){if(w.isGroup)re=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(Y);else if(w.isLight)p.pushLight(w),w.castShadow&&p.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||ee.intersectsSprite(w)){oe&&te.setFromMatrixPosition(w.matrixWorld).applyMatrix4(ie);const we=Q.update(w),Ue=w.material;Ue.visible&&_.push(w,we,Ue,re,te.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||ee.intersectsObject(w))){const we=Q.update(w),Ue=w.material;if(oe&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),te.copy(w.boundingSphere.center)):(we.boundingSphere===null&&we.computeBoundingSphere(),te.copy(we.boundingSphere.center)),te.applyMatrix4(w.matrixWorld).applyMatrix4(ie)),Array.isArray(Ue)){const Fe=we.groups;for(let $e=0,qe=Fe.length;$e<qe;$e++){const Be=Fe[$e],ot=Ue[Be.materialIndex];ot&&ot.visible&&_.push(w,we,ot,re,te.z,Be)}}else Ue.visible&&_.push(w,we,Ue,re,te.z,null)}}const xe=w.children;for(let we=0,Ue=xe.length;we<Ue;we++)Qc(xe[we],Y,re,oe)}function Vd(w,Y,re,oe){const J=w.opaque,xe=w.transmissive,we=w.transparent;p.setupLightsView(re),ae===!0&&ue.setGlobalState(M.clippingPlanes,re),oe&&z.viewport(C.copy(oe)),J.length>0&&ka(J,Y,re),xe.length>0&&ka(xe,Y,re),we.length>0&&ka(we,Y,re),z.buffers.depth.setTest(!0),z.buffers.depth.setMask(!0),z.buffers.color.setMask(!0),z.setPolygonOffset(!1)}function Hd(w,Y,re,oe){if((re.isScene===!0?re.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[oe.id]===void 0&&(p.state.transmissionRenderTarget[oe.id]=new hr(1,1,{generateMipmaps:!0,type:$.has("EXT_color_buffer_half_float")||$.has("EXT_color_buffer_float")?Oa:$i,minFilter:Ys,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ct.workingColorSpace}));const xe=p.state.transmissionRenderTarget[oe.id],we=oe.viewport||C;xe.setSize(we.z,we.w);const Ue=M.getRenderTarget();M.setRenderTarget(xe),M.getClearColor(k),G=M.getClearAlpha(),G<1&&M.setClearColor(16777215,.5),M.clear(),Me&&Oe.render(re);const Fe=M.toneMapping;M.toneMapping=Ss;const $e=oe.viewport;if(oe.viewport!==void 0&&(oe.viewport=void 0),p.setupLightsView(oe),ae===!0&&ue.setGlobalState(M.clippingPlanes,oe),ka(w,re,oe),b.updateMultisampleRenderTarget(xe),b.updateRenderTargetMipmap(xe),$.has("WEBGL_multisampled_render_to_texture")===!1){let qe=!1;for(let Be=0,ot=Y.length;Be<ot;Be++){const ht=Y[Be],Ut=ht.object,wt=ht.geometry,at=ht.material,He=ht.group;if(at.side===Ui&&Ut.layers.test(oe.layers)){const Zt=at.side;at.side=wn,at.needsUpdate=!0,zd(Ut,re,oe,wt,at,He),at.side=Zt,at.needsUpdate=!0,qe=!0}}qe===!0&&(b.updateMultisampleRenderTarget(xe),b.updateRenderTargetMipmap(xe))}M.setRenderTarget(Ue),M.setClearColor(k,G),$e!==void 0&&(oe.viewport=$e),M.toneMapping=Fe}function ka(w,Y,re){const oe=Y.isScene===!0?Y.overrideMaterial:null;for(let J=0,xe=w.length;J<xe;J++){const we=w[J],Ue=we.object,Fe=we.geometry,$e=oe===null?we.material:oe,qe=we.group;Ue.layers.test(re.layers)&&zd(Ue,Y,re,Fe,$e,qe)}}function zd(w,Y,re,oe,J,xe){w.onBeforeRender(M,Y,re,oe,J,xe),w.modelViewMatrix.multiplyMatrices(re.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),J.onBeforeRender(M,Y,re,oe,w,xe),J.transparent===!0&&J.side===Ui&&J.forceSinglePass===!1?(J.side=wn,J.needsUpdate=!0,M.renderBufferDirect(re,Y,oe,J,w,xe),J.side=Ts,J.needsUpdate=!0,M.renderBufferDirect(re,Y,oe,J,w,xe),J.side=Ui):M.renderBufferDirect(re,Y,oe,J,w,xe),w.onAfterRender(M,Y,re,oe,J,xe)}function Ba(w,Y,re){Y.isScene!==!0&&(Y=Ee);const oe=q.get(w),J=p.state.lights,xe=p.state.shadowsArray,we=J.state.version,Ue=Se.getParameters(w,J.state,xe,Y,re),Fe=Se.getProgramCacheKey(Ue);let $e=oe.programs;oe.environment=w.isMeshStandardMaterial?Y.environment:null,oe.fog=Y.fog,oe.envMap=(w.isMeshStandardMaterial?U:S).get(w.envMap||oe.environment),oe.envMapRotation=oe.environment!==null&&w.envMap===null?Y.environmentRotation:w.envMapRotation,$e===void 0&&(w.addEventListener("dispose",Ke),$e=new Map,oe.programs=$e);let qe=$e.get(Fe);if(qe!==void 0){if(oe.currentProgram===qe&&oe.lightsStateVersion===we)return Wd(w,Ue),qe}else Ue.uniforms=Se.getUniforms(w),w.onBeforeCompile(Ue,M),qe=Se.acquireProgram(Ue,Fe),$e.set(Fe,qe),oe.uniforms=Ue.uniforms;const Be=oe.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Be.clippingPlanes=ue.uniform),Wd(w,Ue),oe.needsLights=XE(w),oe.lightsStateVersion=we,oe.needsLights&&(Be.ambientLightColor.value=J.state.ambient,Be.lightProbe.value=J.state.probe,Be.directionalLights.value=J.state.directional,Be.directionalLightShadows.value=J.state.directionalShadow,Be.spotLights.value=J.state.spot,Be.spotLightShadows.value=J.state.spotShadow,Be.rectAreaLights.value=J.state.rectArea,Be.ltc_1.value=J.state.rectAreaLTC1,Be.ltc_2.value=J.state.rectAreaLTC2,Be.pointLights.value=J.state.point,Be.pointLightShadows.value=J.state.pointShadow,Be.hemisphereLights.value=J.state.hemi,Be.directionalShadowMap.value=J.state.directionalShadowMap,Be.directionalShadowMatrix.value=J.state.directionalShadowMatrix,Be.spotShadowMap.value=J.state.spotShadowMap,Be.spotLightMatrix.value=J.state.spotLightMatrix,Be.spotLightMap.value=J.state.spotLightMap,Be.pointShadowMap.value=J.state.pointShadowMap,Be.pointShadowMatrix.value=J.state.pointShadowMatrix),oe.currentProgram=qe,oe.uniformsList=null,qe}function Gd(w){if(w.uniformsList===null){const Y=w.currentProgram.getUniforms();w.uniformsList=Bl.seqWithValue(Y.seq,w.uniforms)}return w.uniformsList}function Wd(w,Y){const re=q.get(w);re.outputColorSpace=Y.outputColorSpace,re.batching=Y.batching,re.batchingColor=Y.batchingColor,re.instancing=Y.instancing,re.instancingColor=Y.instancingColor,re.instancingMorph=Y.instancingMorph,re.skinning=Y.skinning,re.morphTargets=Y.morphTargets,re.morphNormals=Y.morphNormals,re.morphColors=Y.morphColors,re.morphTargetsCount=Y.morphTargetsCount,re.numClippingPlanes=Y.numClippingPlanes,re.numIntersection=Y.numClipIntersection,re.vertexAlphas=Y.vertexAlphas,re.vertexTangents=Y.vertexTangents,re.toneMapping=Y.toneMapping}function GE(w,Y,re,oe,J){Y.isScene!==!0&&(Y=Ee),b.resetTextureUnits();const xe=Y.fog,we=oe.isMeshStandardMaterial?Y.environment:null,Ue=A===null?M.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:vo,Fe=(oe.isMeshStandardMaterial?U:S).get(oe.envMap||we),$e=oe.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,qe=!!re.attributes.tangent&&(!!oe.normalMap||oe.anisotropy>0),Be=!!re.morphAttributes.position,ot=!!re.morphAttributes.normal,ht=!!re.morphAttributes.color;let Ut=Ss;oe.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(Ut=M.toneMapping);const wt=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,at=wt!==void 0?wt.length:0,He=q.get(oe),Zt=p.state.lights;if(ae===!0&&(fe===!0||w!==v)){const fn=w===v&&oe.id===m;ue.setState(oe,w,fn)}let dt=!1;oe.version===He.__version?(He.needsLights&&He.lightsStateVersion!==Zt.state.version||He.outputColorSpace!==Ue||J.isBatchedMesh&&He.batching===!1||!J.isBatchedMesh&&He.batching===!0||J.isBatchedMesh&&He.batchingColor===!0&&J.colorTexture===null||J.isBatchedMesh&&He.batchingColor===!1&&J.colorTexture!==null||J.isInstancedMesh&&He.instancing===!1||!J.isInstancedMesh&&He.instancing===!0||J.isSkinnedMesh&&He.skinning===!1||!J.isSkinnedMesh&&He.skinning===!0||J.isInstancedMesh&&He.instancingColor===!0&&J.instanceColor===null||J.isInstancedMesh&&He.instancingColor===!1&&J.instanceColor!==null||J.isInstancedMesh&&He.instancingMorph===!0&&J.morphTexture===null||J.isInstancedMesh&&He.instancingMorph===!1&&J.morphTexture!==null||He.envMap!==Fe||oe.fog===!0&&He.fog!==xe||He.numClippingPlanes!==void 0&&(He.numClippingPlanes!==ue.numPlanes||He.numIntersection!==ue.numIntersection)||He.vertexAlphas!==$e||He.vertexTangents!==qe||He.morphTargets!==Be||He.morphNormals!==ot||He.morphColors!==ht||He.toneMapping!==Ut||He.morphTargetsCount!==at)&&(dt=!0):(dt=!0,He.__version=oe.version);let Zn=He.currentProgram;dt===!0&&(Zn=Ba(oe,Y,J));let Er=!1,In=!1,No=!1;const Tt=Zn.getUniforms(),Bn=He.uniforms;if(z.useProgram(Zn.program)&&(Er=!0,In=!0,No=!0),oe.id!==m&&(m=oe.id,In=!0),Er||v!==w){z.buffers.depth.getReversed()?(B.copy(w.projectionMatrix),hw(B),dw(B),Tt.setValue(y,"projectionMatrix",B)):Tt.setValue(y,"projectionMatrix",w.projectionMatrix),Tt.setValue(y,"viewMatrix",w.matrixWorldInverse);const Mn=Tt.map.cameraPosition;Mn!==void 0&&Mn.setValue(y,se.setFromMatrixPosition(w.matrixWorld)),H.logarithmicDepthBuffer&&Tt.setValue(y,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(oe.isMeshPhongMaterial||oe.isMeshToonMaterial||oe.isMeshLambertMaterial||oe.isMeshBasicMaterial||oe.isMeshStandardMaterial||oe.isShaderMaterial)&&Tt.setValue(y,"isOrthographic",w.isOrthographicCamera===!0),v!==w&&(v=w,In=!0,No=!0)}if(J.isSkinnedMesh){Tt.setOptional(y,J,"bindMatrix"),Tt.setOptional(y,J,"bindMatrixInverse");const fn=J.skeleton;fn&&(fn.boneTexture===null&&fn.computeBoneTexture(),Tt.setValue(y,"boneTexture",fn.boneTexture,b))}J.isBatchedMesh&&(Tt.setOptional(y,J,"batchingTexture"),Tt.setValue(y,"batchingTexture",J._matricesTexture,b),Tt.setOptional(y,J,"batchingIdTexture"),Tt.setValue(y,"batchingIdTexture",J._indirectTexture,b),Tt.setOptional(y,J,"batchingColorTexture"),J._colorsTexture!==null&&Tt.setValue(y,"batchingColorTexture",J._colorsTexture,b));const Vn=re.morphAttributes;if((Vn.position!==void 0||Vn.normal!==void 0||Vn.color!==void 0)&&ke.update(J,re,Zn),(In||He.receiveShadow!==J.receiveShadow)&&(He.receiveShadow=J.receiveShadow,Tt.setValue(y,"receiveShadow",J.receiveShadow)),oe.isMeshGouraudMaterial&&oe.envMap!==null&&(Bn.envMap.value=Fe,Bn.flipEnvMap.value=Fe.isCubeTexture&&Fe.isRenderTargetTexture===!1?-1:1),oe.isMeshStandardMaterial&&oe.envMap===null&&Y.environment!==null&&(Bn.envMapIntensity.value=Y.environmentIntensity),In&&(Tt.setValue(y,"toneMappingExposure",M.toneMappingExposure),He.needsLights&&WE(Bn,No),xe&&oe.fog===!0&&ve.refreshFogUniforms(Bn,xe),ve.refreshMaterialUniforms(Bn,oe,F,W,p.state.transmissionRenderTarget[w.id]),Bl.upload(y,Gd(He),Bn,b)),oe.isShaderMaterial&&oe.uniformsNeedUpdate===!0&&(Bl.upload(y,Gd(He),Bn,b),oe.uniformsNeedUpdate=!1),oe.isSpriteMaterial&&Tt.setValue(y,"center",J.center),Tt.setValue(y,"modelViewMatrix",J.modelViewMatrix),Tt.setValue(y,"normalMatrix",J.normalMatrix),Tt.setValue(y,"modelMatrix",J.matrixWorld),oe.isShaderMaterial||oe.isRawShaderMaterial){const fn=oe.uniformsGroups;for(let Mn=0,eu=fn.length;Mn<eu;Mn++){const Ds=fn[Mn];X.update(Ds,Zn),X.bind(Ds,Zn)}}return Zn}function WE(w,Y){w.ambientLightColor.needsUpdate=Y,w.lightProbe.needsUpdate=Y,w.directionalLights.needsUpdate=Y,w.directionalLightShadows.needsUpdate=Y,w.pointLights.needsUpdate=Y,w.pointLightShadows.needsUpdate=Y,w.spotLights.needsUpdate=Y,w.spotLightShadows.needsUpdate=Y,w.rectAreaLights.needsUpdate=Y,w.hemisphereLights.needsUpdate=Y}function XE(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return N},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(w,Y,re){q.get(w.texture).__webglTexture=Y,q.get(w.depthTexture).__webglTexture=re;const oe=q.get(w);oe.__hasExternalTextures=!0,oe.__autoAllocateDepthBuffer=re===void 0,oe.__autoAllocateDepthBuffer||$.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),oe.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,Y){const re=q.get(w);re.__webglFramebuffer=Y,re.__useDefaultFramebuffer=Y===void 0},this.setRenderTarget=function(w,Y=0,re=0){A=w,N=Y,T=re;let oe=!0,J=null,xe=!1,we=!1;if(w){const Fe=q.get(w);if(Fe.__useDefaultFramebuffer!==void 0)z.bindFramebuffer(y.FRAMEBUFFER,null),oe=!1;else if(Fe.__webglFramebuffer===void 0)b.setupRenderTarget(w);else if(Fe.__hasExternalTextures)b.rebindTextures(w,q.get(w.texture).__webglTexture,q.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Be=w.depthTexture;if(Fe.__boundDepthTexture!==Be){if(Be!==null&&q.has(Be)&&(w.width!==Be.image.width||w.height!==Be.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");b.setupDepthRenderbuffer(w)}}const $e=w.texture;($e.isData3DTexture||$e.isDataArrayTexture||$e.isCompressedArrayTexture)&&(we=!0);const qe=q.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(qe[Y])?J=qe[Y][re]:J=qe[Y],xe=!0):w.samples>0&&b.useMultisampledRTT(w)===!1?J=q.get(w).__webglMultisampledFramebuffer:Array.isArray(qe)?J=qe[re]:J=qe,C.copy(w.viewport),I.copy(w.scissor),L=w.scissorTest}else C.copy(de).multiplyScalar(F).floor(),I.copy(ye).multiplyScalar(F).floor(),L=Le;if(z.bindFramebuffer(y.FRAMEBUFFER,J)&&oe&&z.drawBuffers(w,J),z.viewport(C),z.scissor(I),z.setScissorTest(L),xe){const Fe=q.get(w.texture);y.framebufferTexture2D(y.FRAMEBUFFER,y.COLOR_ATTACHMENT0,y.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Fe.__webglTexture,re)}else if(we){const Fe=q.get(w.texture),$e=Y||0;y.framebufferTextureLayer(y.FRAMEBUFFER,y.COLOR_ATTACHMENT0,Fe.__webglTexture,re||0,$e)}m=-1},this.readRenderTargetPixels=function(w,Y,re,oe,J,xe,we){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ue=q.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&we!==void 0&&(Ue=Ue[we]),Ue){z.bindFramebuffer(y.FRAMEBUFFER,Ue);try{const Fe=w.texture,$e=Fe.format,qe=Fe.type;if(!H.textureFormatReadable($e)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!H.textureTypeReadable(qe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=w.width-oe&&re>=0&&re<=w.height-J&&y.readPixels(Y,re,oe,J,Ve.convert($e),Ve.convert(qe),xe)}finally{const Fe=A!==null?q.get(A).__webglFramebuffer:null;z.bindFramebuffer(y.FRAMEBUFFER,Fe)}}},this.readRenderTargetPixelsAsync=async function(w,Y,re,oe,J,xe,we){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ue=q.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&we!==void 0&&(Ue=Ue[we]),Ue){const Fe=w.texture,$e=Fe.format,qe=Fe.type;if(!H.textureFormatReadable($e))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!H.textureTypeReadable(qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(Y>=0&&Y<=w.width-oe&&re>=0&&re<=w.height-J){z.bindFramebuffer(y.FRAMEBUFFER,Ue);const Be=y.createBuffer();y.bindBuffer(y.PIXEL_PACK_BUFFER,Be),y.bufferData(y.PIXEL_PACK_BUFFER,xe.byteLength,y.STREAM_READ),y.readPixels(Y,re,oe,J,Ve.convert($e),Ve.convert(qe),0);const ot=A!==null?q.get(A).__webglFramebuffer:null;z.bindFramebuffer(y.FRAMEBUFFER,ot);const ht=y.fenceSync(y.SYNC_GPU_COMMANDS_COMPLETE,0);return y.flush(),await fw(y,ht,4),y.bindBuffer(y.PIXEL_PACK_BUFFER,Be),y.getBufferSubData(y.PIXEL_PACK_BUFFER,0,xe),y.deleteBuffer(Be),y.deleteSync(ht),xe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,Y=null,re=0){w.isTexture!==!0&&(zr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),Y=arguments[0]||null,w=arguments[1]);const oe=Math.pow(2,-re),J=Math.floor(w.image.width*oe),xe=Math.floor(w.image.height*oe),we=Y!==null?Y.x:0,Ue=Y!==null?Y.y:0;b.setTexture2D(w,0),y.copyTexSubImage2D(y.TEXTURE_2D,re,0,0,we,Ue,J,xe),z.unbindTexture()};const $E=y.createFramebuffer(),qE=y.createFramebuffer();this.copyTextureToTexture=function(w,Y,re=null,oe=null,J=0,xe=null){w.isTexture!==!0&&(zr("WebGLRenderer: copyTextureToTexture function signature has changed."),oe=arguments[0]||null,w=arguments[1],Y=arguments[2],xe=arguments[3]||0,re=null),xe===null&&(J!==0?(zr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),xe=J,J=0):xe=0);let we,Ue,Fe,$e,qe,Be,ot,ht,Ut;const wt=w.isCompressedTexture?w.mipmaps[xe]:w.image;if(re!==null)we=re.max.x-re.min.x,Ue=re.max.y-re.min.y,Fe=re.isBox3?re.max.z-re.min.z:1,$e=re.min.x,qe=re.min.y,Be=re.isBox3?re.min.z:0;else{const Vn=Math.pow(2,-J);we=Math.floor(wt.width*Vn),Ue=Math.floor(wt.height*Vn),w.isDataArrayTexture?Fe=wt.depth:w.isData3DTexture?Fe=Math.floor(wt.depth*Vn):Fe=1,$e=0,qe=0,Be=0}oe!==null?(ot=oe.x,ht=oe.y,Ut=oe.z):(ot=0,ht=0,Ut=0);const at=Ve.convert(Y.format),He=Ve.convert(Y.type);let Zt;Y.isData3DTexture?(b.setTexture3D(Y,0),Zt=y.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(b.setTexture2DArray(Y,0),Zt=y.TEXTURE_2D_ARRAY):(b.setTexture2D(Y,0),Zt=y.TEXTURE_2D),y.pixelStorei(y.UNPACK_FLIP_Y_WEBGL,Y.flipY),y.pixelStorei(y.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),y.pixelStorei(y.UNPACK_ALIGNMENT,Y.unpackAlignment);const dt=y.getParameter(y.UNPACK_ROW_LENGTH),Zn=y.getParameter(y.UNPACK_IMAGE_HEIGHT),Er=y.getParameter(y.UNPACK_SKIP_PIXELS),In=y.getParameter(y.UNPACK_SKIP_ROWS),No=y.getParameter(y.UNPACK_SKIP_IMAGES);y.pixelStorei(y.UNPACK_ROW_LENGTH,wt.width),y.pixelStorei(y.UNPACK_IMAGE_HEIGHT,wt.height),y.pixelStorei(y.UNPACK_SKIP_PIXELS,$e),y.pixelStorei(y.UNPACK_SKIP_ROWS,qe),y.pixelStorei(y.UNPACK_SKIP_IMAGES,Be);const Tt=w.isDataArrayTexture||w.isData3DTexture,Bn=Y.isDataArrayTexture||Y.isData3DTexture;if(w.isDepthTexture){const Vn=q.get(w),fn=q.get(Y),Mn=q.get(Vn.__renderTarget),eu=q.get(fn.__renderTarget);z.bindFramebuffer(y.READ_FRAMEBUFFER,Mn.__webglFramebuffer),z.bindFramebuffer(y.DRAW_FRAMEBUFFER,eu.__webglFramebuffer);for(let Ds=0;Ds<Fe;Ds++)Tt&&(y.framebufferTextureLayer(y.READ_FRAMEBUFFER,y.COLOR_ATTACHMENT0,q.get(w).__webglTexture,J,Be+Ds),y.framebufferTextureLayer(y.DRAW_FRAMEBUFFER,y.COLOR_ATTACHMENT0,q.get(Y).__webglTexture,xe,Ut+Ds)),y.blitFramebuffer($e,qe,we,Ue,ot,ht,we,Ue,y.DEPTH_BUFFER_BIT,y.NEAREST);z.bindFramebuffer(y.READ_FRAMEBUFFER,null),z.bindFramebuffer(y.DRAW_FRAMEBUFFER,null)}else if(J!==0||w.isRenderTargetTexture||q.has(w)){const Vn=q.get(w),fn=q.get(Y);z.bindFramebuffer(y.READ_FRAMEBUFFER,$E),z.bindFramebuffer(y.DRAW_FRAMEBUFFER,qE);for(let Mn=0;Mn<Fe;Mn++)Tt?y.framebufferTextureLayer(y.READ_FRAMEBUFFER,y.COLOR_ATTACHMENT0,Vn.__webglTexture,J,Be+Mn):y.framebufferTexture2D(y.READ_FRAMEBUFFER,y.COLOR_ATTACHMENT0,y.TEXTURE_2D,Vn.__webglTexture,J),Bn?y.framebufferTextureLayer(y.DRAW_FRAMEBUFFER,y.COLOR_ATTACHMENT0,fn.__webglTexture,xe,Ut+Mn):y.framebufferTexture2D(y.DRAW_FRAMEBUFFER,y.COLOR_ATTACHMENT0,y.TEXTURE_2D,fn.__webglTexture,xe),J!==0?y.blitFramebuffer($e,qe,we,Ue,ot,ht,we,Ue,y.COLOR_BUFFER_BIT,y.NEAREST):Bn?y.copyTexSubImage3D(Zt,xe,ot,ht,Ut+Mn,$e,qe,we,Ue):y.copyTexSubImage2D(Zt,xe,ot,ht,$e,qe,we,Ue);z.bindFramebuffer(y.READ_FRAMEBUFFER,null),z.bindFramebuffer(y.DRAW_FRAMEBUFFER,null)}else Bn?w.isDataTexture||w.isData3DTexture?y.texSubImage3D(Zt,xe,ot,ht,Ut,we,Ue,Fe,at,He,wt.data):Y.isCompressedArrayTexture?y.compressedTexSubImage3D(Zt,xe,ot,ht,Ut,we,Ue,Fe,at,wt.data):y.texSubImage3D(Zt,xe,ot,ht,Ut,we,Ue,Fe,at,He,wt):w.isDataTexture?y.texSubImage2D(y.TEXTURE_2D,xe,ot,ht,we,Ue,at,He,wt.data):w.isCompressedTexture?y.compressedTexSubImage2D(y.TEXTURE_2D,xe,ot,ht,wt.width,wt.height,at,wt.data):y.texSubImage2D(y.TEXTURE_2D,xe,ot,ht,we,Ue,at,He,wt);y.pixelStorei(y.UNPACK_ROW_LENGTH,dt),y.pixelStorei(y.UNPACK_IMAGE_HEIGHT,Zn),y.pixelStorei(y.UNPACK_SKIP_PIXELS,Er),y.pixelStorei(y.UNPACK_SKIP_ROWS,In),y.pixelStorei(y.UNPACK_SKIP_IMAGES,No),xe===0&&Y.generateMipmaps&&y.generateMipmap(Zt),z.unbindTexture()},this.copyTextureToTexture3D=function(w,Y,re=null,oe=null,J=0){return w.isTexture!==!0&&(zr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),re=arguments[0]||null,oe=arguments[1]||null,w=arguments[2],Y=arguments[3],J=arguments[4]||0),zr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,Y,re,oe,J)},this.initRenderTarget=function(w){q.get(w).__webglFramebuffer===void 0&&b.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?b.setTextureCube(w,0):w.isData3DTexture?b.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?b.setTexture2DArray(w,0):b.setTexture2D(w,0),z.unbindTexture()},this.resetState=function(){N=0,T=0,A=null,z.reset(),pt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ki}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorspace=ct._getDrawingBufferColorSpace(e),n.unpackColorSpace=ct._getUnpackColorSpace()}}const f_={type:"change"},Fd={type:"start"},HE={type:"end"},Ml=new AE,h_=new hs,RD=Math.cos(70*cw.DEG2RAD),Ht=new ne,Tn=2*Math.PI,gt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Ku=1e-6;class CD extends Gw{constructor(e,n=null){super(e,n),this.state=gt.NONE,this.enabled=!0,this.target=new ne,this.cursor=new ne,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Kr.ROTATE,MIDDLE:Kr.DOLLY,RIGHT:Kr.PAN},this.touches={ONE:Xr.ROTATE,TWO:Xr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new ne,this._lastQuaternion=new dr,this._lastTargetPosition=new ne,this._quat=new dr().setFromUnitVectors(e.up,new ne(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Bm,this._sphericalDelta=new Bm,this._scale=1,this._panOffset=new ne,this._rotateStart=new Qe,this._rotateEnd=new Qe,this._rotateDelta=new Qe,this._panStart=new Qe,this._panEnd=new Qe,this._panDelta=new Qe,this._dollyStart=new Qe,this._dollyEnd=new Qe,this._dollyDelta=new Qe,this._dollyDirection=new ne,this._mouse=new Qe,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=PD.bind(this),this._onPointerDown=wD.bind(this),this._onPointerUp=ID.bind(this),this._onContextMenu=kD.bind(this),this._onMouseWheel=LD.bind(this),this._onKeyDown=OD.bind(this),this._onTouchStart=UD.bind(this),this._onTouchMove=FD.bind(this),this._onMouseDown=ND.bind(this),this._onMouseMove=DD.bind(this),this._interceptControlDown=BD.bind(this),this._interceptControlUp=VD.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(f_),this.update(),this.state=gt.NONE}update(e=null){const n=this.object.position;Ht.copy(n).sub(this.target),Ht.applyQuaternion(this._quat),this._spherical.setFromVector3(Ht),this.autoRotate&&this.state===gt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=Tn:i>Math.PI&&(i-=Tn),s<-Math.PI?s+=Tn:s>Math.PI&&(s-=Tn),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Ht.setFromSpherical(this._spherical),Ht.applyQuaternion(this._quatInverse),n.copy(this.target).add(Ht),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Ht.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const a=new ne(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new ne(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Ht.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Ml.origin.copy(this.object.position),Ml.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Ml.direction))<RD?this.object.lookAt(this.target):(h_.setFromNormalAndCoplanarPoint(this.object.up,this.target),Ml.intersectPlane(h_,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Ku||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Ku||this._lastTargetPosition.distanceToSquared(this.target)>Ku?(this.dispatchEvent(f_),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Tn/60*this.autoRotateSpeed*e:Tn/60/60*this.autoRotateSpeed}_getZoomScale(e){const n=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*n)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,n){Ht.setFromMatrixColumn(n,0),Ht.multiplyScalar(-e),this._panOffset.add(Ht)}_panUp(e,n){this.screenSpacePanning===!0?Ht.setFromMatrixColumn(n,1):(Ht.setFromMatrixColumn(n,0),Ht.crossVectors(this.object.up,Ht)),Ht.multiplyScalar(e),this._panOffset.add(Ht)}_pan(e,n){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Ht.copy(s).sub(this.target);let r=Ht.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/i.clientHeight,this.object.matrix),this._panUp(2*n*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(n*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,n){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=e-i.left,r=n-i.top,o=i.width,a=i.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(Tn*this._rotateDelta.x/n.clientHeight),this._rotateUp(Tn*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let n=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Tn*this.rotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),n=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Tn*this.rotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),n=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Tn*this.rotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),n=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Tn*this.rotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),n=!0;break}n&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),s=.5*(e.pageY+n.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),s=.5*(e.pageY+n.y);this._panStart.set(i,s)}}_handleTouchStartDolly(e){const n=this._getSecondPointerPosition(e),i=e.pageX-n.x,s=e.pageY-n.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),r=.5*(e.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(Tn*this._rotateDelta.x/n.clientHeight),this._rotateUp(Tn*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),s=.5*(e.pageY+n.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const n=this._getSecondPointerPosition(e),i=e.pageX-n.x,s=e.pageY-n.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+n.x)*.5,a=(e.pageY+n.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId){this._pointers.splice(n,1);return}}_isTrackingPointer(e){for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId)return!0;return!1}_trackPointer(e){let n=this._pointerPositions[e.pointerId];n===void 0&&(n=new Qe,this._pointerPositions[e.pointerId]=n),n.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const n=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[n]}_customWheelEvent(e){const n=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(n){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function wD(t){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(t.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(t)&&(this._addPointer(t),t.pointerType==="touch"?this._onTouchStart(t):this._onMouseDown(t)))}function PD(t){this.enabled!==!1&&(t.pointerType==="touch"?this._onTouchMove(t):this._onMouseMove(t))}function ID(t){switch(this._removePointer(t),this._pointers.length){case 0:this.domElement.releasePointerCapture(t.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(HE),this.state=gt.NONE;break;case 1:const e=this._pointers[0],n=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:n.x,pageY:n.y});break}}function ND(t){let e;switch(t.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Kr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(t),this.state=gt.DOLLY;break;case Kr.ROTATE:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=gt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=gt.ROTATE}break;case Kr.PAN:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=gt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=gt.PAN}break;default:this.state=gt.NONE}this.state!==gt.NONE&&this.dispatchEvent(Fd)}function DD(t){switch(this.state){case gt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(t);break;case gt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(t);break;case gt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(t);break}}function LD(t){this.enabled===!1||this.enableZoom===!1||this.state!==gt.NONE||(t.preventDefault(),this.dispatchEvent(Fd),this._handleMouseWheel(this._customWheelEvent(t)),this.dispatchEvent(HE))}function OD(t){this.enabled!==!1&&this._handleKeyDown(t)}function UD(t){switch(this._trackPointer(t),this._pointers.length){case 1:switch(this.touches.ONE){case Xr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(t),this.state=gt.TOUCH_ROTATE;break;case Xr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(t),this.state=gt.TOUCH_PAN;break;default:this.state=gt.NONE}break;case 2:switch(this.touches.TWO){case Xr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(t),this.state=gt.TOUCH_DOLLY_PAN;break;case Xr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(t),this.state=gt.TOUCH_DOLLY_ROTATE;break;default:this.state=gt.NONE}break;default:this.state=gt.NONE}this.state!==gt.NONE&&this.dispatchEvent(Fd)}function FD(t){switch(this._trackPointer(t),this.state){case gt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(t),this.update();break;case gt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(t),this.update();break;case gt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(t),this.update();break;case gt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(t),this.update();break;default:this.state=gt.NONE}}function kD(t){this.enabled!==!1&&t.preventDefault()}function BD(t){t.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function VD(t){t.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const HD={__name:"scene-desktop",setup(t){const e=_i();let n,i,s,r,o;const a=()=>{n=new Uw,console.log("canvasContainer.offsetHeight",e.value.offsetHeight),console.log("canvasContainer.offsetWidth",e.value.offsetWidth),i=new Wn(75,e.value.offsetWidth/e.value.offsetHeight,.1,1e3),i.position.set(0,0,5),s=new AD({antialias:!0}),s.setSize(e.value.offsetWidth,e.value.offsetHeight),e.value.appendChild(s.domElement);const l=new Po(2,2,2),c=new Od({color:65280});o=new pi(l,c),n.add(o),r=new CD(i,s.domElement),r.enableDamping=!0,r.dampingFactor=.25,r.screenSpacePanning=!1};return _r(()=>{a()}),(l,c)=>(be(),je("div",{class:"scene",ref_key:"canvasContainer",ref:e},null,512))}},zD=Ot(HD,[["__scopeId","data-v-10fb785a"]]),GD={};function WD(t,e){return null}const XD=Ot(GD,[["render",WD],["__scopeId","data-v-08a20930"]]),$D={__name:"scene",setup(t){const e=yn();return(n,i)=>Re(e).isMobile?(be(),rt(XD,{key:0})):(be(),rt(zD,{key:1}))}},qD={class:"page-container"},YD={class:"home-view"},jD={__name:"home-view-desktop",setup(t){return(e,n)=>(be(),je("div",qD,[pe("div",YD,[ge(jn,{class:"home-view__navigation"}),ge(q0,{class:"home-view__logo"}),ge(ev,{class:"home-view__name"}),ge($D,{class:"home-view__scene"}),ge(iE,{class:"home-view__tech"}),ge(X0,{class:"home-view__contacts"}),ge($0,{class:"home-view__gif"}),ge(rE,{class:"home-view__reviews"}),ge(aE,{class:"home-view__last-post"}),ge(lE,{class:"home-view__donate"}),n[0]||(n[0]=pe("a",{class:"home-view__contacts-bottom",href:"https://www.twitch.tv/yusheero"},"Watch Stream",-1))])]))}},KD=Ot(jD,[["__scopeId","data-v-a4256af4"]]),ZD={__name:"home-view",setup(t){const e=yn();return(n,i)=>(be(),je(Et,null,[Re(e).isMobile?(be(),rt(sC,{key:0})):xn("",!0),Re(e).isMobile?xn("",!0):(be(),rt(KD,{key:1}))],64))}},JD={},QD={class:"views-template-mobile"};function eL(t,e){return be(),je("div",QD,[kh(t.$slots,"default")])}const Fa=Ot(JD,[["render",eL]]),tL={class:"experience-view-mobile"},nL={class:"experience-view-mobile__header"},iL={__name:"experience-view-mobile",setup(t){return(e,n)=>(be(),rt(Fa,null,{default:At(()=>[pe("div",tL,[pe("div",nL,[ge(jn),ge(Co)]),n[0]||(n[0]=pe("div",{class:"experience-view-mobile__title"},"Experience Page",-1)),n[1]||(n[1]=pe("div",{class:"experience-view-mobile__content"},"Content",-1))])]),_:1}))}},sL={class:"page-container"},rL={class:"experience-view-desktop"},oL={__name:"experience-view-desktop",setup(t){return(e,n)=>(be(),je("div",sL,[pe("div",rL,[ge(jn,{class:"experience-view-desktop__navigation"}),n[0]||(n[0]=pe("div",{class:"experience-view-desktop__title"},"Experience Page",-1)),n[1]||(n[1]=pe("div",{class:"experience-view-desktop__content"},"Content",-1))])]))}},aL={__name:"experience-view",setup(t){const e=yn();return(n,i)=>(be(),je(Et,null,[Re(e).isMobile?(be(),rt(iL,{key:0})):xn("",!0),Re(e).isMobile?xn("",!0):(be(),rt(oL,{key:1}))],64))}},lL={class:"projects-view-mobile"},cL={class:"projects-view-mobile__header"},uL={__name:"projects-view-mobile",setup(t){return(e,n)=>(be(),rt(Fa,null,{default:At(()=>[pe("div",lL,[pe("div",cL,[ge(jn),ge(Co)]),n[0]||(n[0]=pe("div",{class:"projects-view-mobile__title"},"Projects Page",-1)),n[1]||(n[1]=pe("div",{class:"projects-view-mobile__content"},"Content",-1))])]),_:1}))}},fL={},hL={class:"page-container"},dL={class:"views-template-desktop"};function pL(t,e){return be(),je("div",hL,[pe("div",dL,[kh(t.$slots,"default")])])}const Jc=Ot(fL,[["render",pL]]),mL={class:"projects-view-desktop"},_L={__name:"projects-view-desktop",setup(t){return(e,n)=>(be(),rt(Jc,null,{default:At(()=>[pe("div",mL,[ge(jn,{class:"projects-view-desktop__navigation"}),n[0]||(n[0]=pe("div",{class:"projects-view-desktop__title"},"Projects Page",-1)),n[1]||(n[1]=pe("div",{class:"projects-view-desktop__content"}," Content ",-1))])]),_:1}))}},gL={__name:"projects-view",setup(t){const e=yn();return(n,i)=>(be(),je(Et,null,[Re(e).isMobile?(be(),rt(uL,{key:0})):xn("",!0),Re(e).isMobile?xn("",!0):(be(),rt(_L,{key:1}))],64))}},vL={class:"blog-view-mobile"},EL={class:"blog-view-mobile__header"},SL={__name:"blog-view-mobile",setup(t){return(e,n)=>(be(),rt(Fa,null,{default:At(()=>[pe("div",vL,[pe("div",EL,[ge(jn),ge(Co)]),n[0]||(n[0]=pe("div",{class:"blog-view-mobile__title"},"Blog Page",-1)),n[1]||(n[1]=pe("div",{class:"blog-view-mobile__content"}," Content ",-1))])]),_:1}))}},xL={class:"blog-item"},yL={class:"blog-item__title"},ML={class:"blog-item__text"},TL={class:"blog-item__date"},bL={__name:"blog-item",props:{blogData:Object},setup(t){return yn(),(e,n)=>(be(),je("div",xL,[pe("h2",yL,En(t.blogData.title),1),pe("p",ML,En(t.blogData.text),1),pe("p",TL,En(t.blogData.date),1)]))}},AL={class:"blog-view-desktop"},RL={class:"blog-view-desktop__content"},CL={__name:"blog-view-desktop",setup(t){const e=oE.data,[n,i]=bd.useKeenSlider({initial:0,slides:{perView:3,spacing:4}});return(s,r)=>(be(),rt(Jc,null,{default:At(()=>[pe("div",AL,[ge(jn,{class:"blog-view-desktop__navigation"}),r[0]||(r[0]=pe("div",{class:"blog-view-desktop__title"},"Blog Page",-1)),pe("div",RL,[pe("div",{ref_key:"container",ref:n,class:"keen-slider"},[(be(!0),je(Et,null,Fh(Re(e),o=>(be(),rt(bL,{blogData:o,class:"keen-slider__slide"},null,8,["blogData"]))),256))],512)])])]),_:1}))}},wL={__name:"blog-view",setup(t){const e=yn();return(n,i)=>(be(),je(Et,null,[Re(e).isMobile?(be(),rt(SL,{key:0})):xn("",!0),Re(e).isMobile?xn("",!0):(be(),rt(CL,{key:1}))],64))}},PL={class:"reviews-item"},IL={class:"reviews-item__name"},NL={class:"reviews-item__title"},DL={class:"reviews-item__text"},zE={__name:"reviews-item",setup(t){const e=sE.data;return(n,i)=>(be(!0),je(Et,null,Fh(Re(e),s=>(be(),je("div",PL,[pe("p",IL,En(s.name),1),pe("h2",NL,En(s.title),1),pe("p",DL,En(s.text),1)]))),256))}},LL={class:"rewievs-view-mobile"},OL={class:"rewievs-view-mobile__header"},UL={class:"rewievs-view-mobile__content"},FL={__name:"reviews-view-mobile",setup(t){return(e,n)=>(be(),rt(Fa,null,{default:At(()=>[pe("div",LL,[pe("div",OL,[ge(jn),ge(Co)]),n[0]||(n[0]=pe("div",{class:"rewievs-view-mobile__title"},"Blog Page",-1)),pe("div",UL,[ge(zE)])])]),_:1}))}},kL={class:"review-view-desktop"},BL={class:"review-view-desktop__content"},VL={__name:"reviews-view-desktop",setup(t){return(e,n)=>(be(),rt(Jc,null,{default:At(()=>[pe("div",kL,[ge(jn,{class:"review-view-desktop__navigation"}),n[0]||(n[0]=pe("div",{class:"review-view-desktop__title"},"Reviews Page",-1)),pe("div",BL,[ge(zE)])])]),_:1}))}},HL={__name:"reviews-view",setup(t){const e=yn();return(n,i)=>(be(),je(Et,null,[Re(e).isMobile?(be(),rt(FL,{key:0})):xn("",!0),Re(e).isMobile?xn("",!0):(be(),rt(VL,{key:1}))],64))}},zL={class:"game-view-desktop"},GL={__name:"library-view-desktop",setup(t){return(e,n)=>(be(),rt(Jc,null,{default:At(()=>[pe("div",zL,[ge(jn,{class:"game-view-desktop__navigation"}),n[0]||(n[0]=pe("div",{class:"game-view-desktop__title"},"Library Page",-1)),n[1]||(n[1]=pe("div",{class:"game-view-desktop__content content"},[pe("div",{class:"content__sections"},[pe("div",{class:"content__sections-item"},"Games"),pe("div",{class:"content__sections-item"},"Movies"),pe("div",{class:"content__sections-item"},"Music"),pe("div",{class:"content__sections-item"},"Other")])],-1))])]),_:1}))}},WL={class:"game-view-mobile"},XL={class:"game-view-mobile__header"},$L={__name:"library-view-mobile",setup(t){return(e,n)=>(be(),rt(Fa,null,{default:At(()=>[pe("div",WL,[pe("div",XL,[ge(jn),ge(Co)]),n[0]||(n[0]=pe("div",{class:"game-view-mobile__title"},"Blog Page",-1)),n[1]||(n[1]=pe("div",{class:"game-view-mobile__content"}," BLOG ",-1))])]),_:1}))}},qL={__name:"library-view",setup(t){const e=yn();return(n,i)=>(be(),je(Et,null,[Re(e).isMobile?(be(),rt($L,{key:0})):xn("",!0),Re(e).isMobile?xn("",!0):(be(),rt(GL,{key:1}))],64))}},YL=[{path:"/",component:ZD,name:"Home"},{path:"/experience",component:aL,name:"Experience"},{path:"/projects",component:gL,name:"Projects"},{path:"/blog",component:wL,name:"Blog"},{path:"/reviews",component:HL,name:"Reviews"},{path:"/library",component:qL,name:"Library"}],jL=sb({history:DT(),routes:YL}),KL=jM();Ql(sT).use(KL).use(jL).mount("#app");
