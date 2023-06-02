"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[716,35,974],{8974:function(e,r,t){t.r(r),t.d(r,{default:function(){return u}});var n=t(7258),a=t(7294),i=t(2804),o=t(4855),l=function(e){var r=i.sJ(o.dA);return{imgMag:e?r:1}},c=t(1286),s=function(e){var r=l(e.virtual);return(0,n.tZ)("div",{css:d(e.size,r.imgMag,e.virtual)},(0,n.tZ)("img",{src:e.src,alt:e.alt}))},u=a.memo(s),d=function(e,r,t){return(0,n.iv)("width:",e[0]*r,"px;height:",e[0]*r,"px;>img{width:100%;height:100%;clip-path:circle(\n      ",e[0]*r/2,"px at ",e[0]*r/2,"px\n        ",e[0]*r/2,"px\n    );}@media screen and (max-width: ",c.r.layout.minimumBreakpointWidth,"px){","undefined"!==typeof e[1]&&!t&&(0,n.iv)("width:",e[1]*r,"px;height:",e[1]*r,"px;>img{clip-path:circle(\n          ",e[1]/2*r,"px at ",e[1]/2*r,"px\n            ",e[1]/2*r,"px\n        );}","",""),";}","","")}},2035:function(e,r,t){t.r(r);var n=t(7294),a=t(7258),i=n.memo((function(e){return(0,a.tZ)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 64 64",width:e.width,height:e.height},(0,a.tZ)("path",{d:"M58.5 8.2a18.7 18.7 0 00-26.5 0 18.7 18.7 0 00-26.5 0 18.7 18.7 0 000 26.5L32 61.3l26.5-26.6a18.7 18.7 0 000-26.5z",fill:e.fill}))}));r.default=i},8716:function(e,r,t){t.r(r),t.d(r,{default:function(){return de}});var n=t(7258),a=t(7294),i=t(6835),o=t(2804),l=t(4855),c=t(2231),s=t(1286),u=function(){var e=o.sJ(l.GL),r=o.FV(l.U9),t=(0,i.Z)(r,2),n=t[0],u=t[1],d=o.sJ(l.dA),m=o.sJ(l._D),g=o.sJ(l.oK),p=o.Zl(l.Bl),f=Object.keys(g).length>0,h=(0,c.vN)("please_select_a_character"),x=a.useRef(null),v=a.useRef(null),b=new MutationObserver((function(e){e&&x.current&&(x.current.style.backgroundColor="".concat(s.r.color.chat)),e&&v.current&&(v.current.style.backgroundColor="".concat(s.r.color.chat))}));return a.useEffect((function(){return v.current&&p(v.current),x.current&&b.observe(x.current,{attributes:!0,attributeFilter:["class","style"]}),v.current&&b.observe(v.current,{attributes:!0,attributeFilter:["class","style"]}),function(){(x.current||v.current)&&b.disconnect()}}),[]),a.useEffect((function(){if(null!==x.current){var e=x.current,r=e.scrollHeight;e.scroll({top:r,behavior:"smooth"}),u(!1)}}),[n,e]),{messages:e,deleteMode:m,imgMag:d,characterSelected:f,text_please_select_a_character:h,scrollRef:x,renderRef:v}},d=t(789),m=function(e,r){var t=o.sJ(l.dA),n=o.Zl(l.dq);return{imgMag:e?t:1,avatarClickHandler:function(){n(r)}}},g=t(8974),p=t(6864),f=t(4730),h=function(e,r){var t=o.Zl(l.U9),n=o.sJ(l.dA),i=o.sJ(l._D),c=o.Zl(l.c_),s=a.useRef(null),u=r?n:1,d=function(){r||t(!0)};return a.useEffect((function(){if(null!==s.current)return s.current.addEventListener("load",d),function(){null!==s.current&&s.current.removeEventListener("load",d)}}),[]),{imageRef:s,imgMag:u,deleteMode:i,messageClickHandler:function(){i&&c(e)}}},x=["index","virtual","imageType"];var v=function(e){var r=e.index,t=e.virtual,a=e.imageType,i=(0,f.Z)(e,x),o=h(r,t);return(0,n.tZ)("div",{css:w(o.imgMag,a,o.deleteMode),onClick:o.messageClickHandler},(0,n.tZ)("img",(0,p.Z)({ref:o.imageRef},i)))},b=a.memo(v),y={name:"e0dnmk",styles:"cursor:pointer"},k={name:"121z217",styles:"width:40%"},w=function(e,r,t){return(0,n.iv)("grid-column:2;width:75%;",r===d.C7.STAMP&&k," height:100%;background-color:",s.r.color.base,";border:",1*e,"px solid ",s.r.color.border,";border-radius:",10*e,"px;padding:",s.r.layout.margin/2*e,"px;",t&&y,">img{width:100%;height:auto;}","","")},Z=t(5871);function C(e,r){var t="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=function(e,r){if(!e)return;if("string"===typeof e)return M(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return M(e,r)}(e))||r&&e&&"number"===typeof e.length){t&&(e=t);var n=0,a=function(){};return{s:a,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,o=!0,l=!1;return{s:function(){t=t.call(e)},n:function(){var e=t.next();return o=e.done,e},e:function(e){l=!0,i=e},f:function(){try{o||null==t.return||t.return()}finally{if(l)throw i}}}}function M(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}var z=function(e,r){var t=o.sJ(l.dA),n=o.sJ(l._D),a=o.Zl(l.c_),i=o.Zl(l.GL);return{imgMag:r?t:1,deleteMode:n,messageClickHandler:function(){n&&a(e)},messageChangeHandler:function(r){(0,Z.J9)(e,r.currentTarget.value,i)},lineBreak:_}},_=function(e,r,t){if(!t)return e;var n,a=[],i=C(e);try{for(i.s();!(n=i.n()).done;){var o=n.value;a.push(o)}}catch(x){i.e(x)}finally{i.f()}r*=2;for(var l=[",",")","]","\uff5d","\u3001","\u3015","\u3009","\u300b","\u300d","\u300f","\u3011","\u3019","\u3017","\u301f","\u2019","\u201d","\uff60","\xbb","\u309d","\u309e","\u30fc","\u30a1","\u30a3","\u30a5","\u30a7","\u30a9","\u30c3","\u30e3","\u30e5","\u30e7","\u30ee","\u30f5","\u30f6","\u3041","\u3043","\u3045","\u3047","\u3049","\u3063","\u3083","\u3085","\u3087","\u308e","\u3095","\u3096","\u31f0","\u31f1","\u31f2","\u31f3","\u31f4","\u31f5","\u31f6","\u31f7","\u31f8","\u31f9","\u31f7","\u309a","\u31fa","\u31fb","\u31fc","\u31fd","\u31fe","\u31ff","\u3005","\u303b","\u2010","\u30a0","\u2013","\u301c","\uff5e","?","!","\u203c","\u2047","\u2048","\u2049","\u30fb",":",";","/","\u3002","."],c=["(","[","\uff5b","\u3014","\u3008","\u300a","\u300c","\u300e","\u3010","\u3018","\u3016","\u301d","\u2018","\u201c","\uff5f","\xab"],s=["\u2014","\u2026","\u2025","\u3033","\u3034","\u3035"],u="",d=0,m=!1,g=0;g<Array.from(a).length;g++){var p=T(a[g]);if(d+=p," "===a[g]&&(m=!1)," "!==a[g]&&1===p&&(m=!0),0!==d&&d%r===0&&c.includes(a[g]))u+="\n".concat(a[g]),d=0;else if(0!==d&&d%r===0&&s.includes(a[g])&&s.includes(a[g+1]))u+="\n".concat(a[g]),d=0;else if(0!==d&&d%r===0&&l.includes(a[g+1]))u+="\n".concat(a[g]),d=1;else if(0===d||d%r!==0)"\n"!==a[g]?u+=a[g]:(u+=a[g],d=0);else{if(m){for(var f=!1,h=g;h>0;h--)if(" "===a[h]){u="".concat(u.slice(0,h),"\n").concat(u.slice(h+1,u.length)),d-=h-g,f=!0;break}if(f)continue}if("\n"===a[g+1]){u+=a[g],d=0;continue}u+="".concat(a[g],"\n"),d=0}}return u},T=function(e){return e.match(/^[^\x01-\x7E\xA1-\xDF]+$/)?2:1},S=["text"];var E=function(e){var r=e.text,t=(0,f.Z)(e,S),a=z(e.index,e.virtual);return(0,n.tZ)("div",{css:H(t.color,t.backgroundColor,t.direction,t.tail,a.imgMag),onClick:a.messageClickHandler},(0,n.tZ)("div",{css:j(a.imgMag,r.length,a.deleteMode,e.virtual,e.direction),"aria-hidden":!0},e.virtual&&r,!e.virtual&&r+"\u200b",(0,n.tZ)("textarea",{className:"text",onChange:a.messageChangeHandler,autoCapitalize:"off",autoComplete:"off",spellCheck:"false",value:r})))},A=a.memo(E),H=function(e,r,t,a,i){return(0,n.iv)("grid-column:2;position:relative;font-size:",s.r.fontSize.large*i,"px;line-height:",s.r.size.xxSmall*i,"px;color:",e,";background-color:",r,";border-radius:",10*i,"px;max-width:100%;width:fit-content;padding:",s.r.layout.margin/2*i,"px;",a&&(0,n.iv)("left"===t&&(0,n.iv)('&:before{display:block;content:"";position:absolute;top:',10*i,"px;width:0;height:0;border-style:solid;left:",-5*i,"px;border-width:",5*i,"px ",5*i,"px ",5*i,"px 0;border-color:transparent ",r," transparent transparent;}","","")," ","right"===t&&(0,n.iv)('&:before{display:block;content:"";position:absolute;top:',10*i,"px;width:0;height:0;border-style:solid;right:",-5*i,"px;border-width:",5*i,"px 0 ",5*i,"px ",5*i,"px;border-color:transparent transparent transparent ",r,";}","",""),";","",""),";","","")},O={name:"e0dnmk",styles:"cursor:pointer"},D={name:"sxvk4b",styles:"max-width:18em"},j=function(e,r,t,a,i){return(0,n.iv)("position:relative;white-space:pre-wrap;overflow-wrap:break-word;line-break:loose;",a&&D," ",0===r&&(0,n.iv)("width:1em;height:",s.r.size.xxSmall*e,"px;","","")," textarea{position:absolute;top:0;left:0;color:",s.r.color.base,";font-size:",s.r.fontSize.large*e,"px;line-height:",s.r.size.xxSmall*e,"px;height:100%;width:100%;border:none;","left"===i&&(0,n.iv)("background-color:",s.r.color.accent,";","","")," ","right"===i&&(0,n.iv)("background-color:",s.r.color.blueDark,";","","")," resize:none;overflow:hidden;",0===r&&(0,n.iv)("width:1em;height:",s.r.size.xxSmall*e,"px;","","")," ",t&&O,";}","","")};var P=function(e){var r=m(e.virtual,e.index);return(0,n.tZ)("li",{css:J(e.message.avatar,r.imgMag,e.virtual)},(0,n.tZ)("div",{css:N,onClick:r.avatarClickHandler},e.message.avatar&&(0,n.tZ)(g.default,{size:[s.r.size.medium,s.r.size.small],src:"images/character/".concat(e.message.character.img[e.message.character.imgIndex],".png"),alt:e.message.character.first_name,virtual:e.virtual})),(0,n.tZ)("div",{css:I},e.message.avatar&&(0,n.tZ)("div",{css:L(r.imgMag)},(0,n.tZ)("span",{className:"text"},e.message.character.first_name)),e.message.messageType===d.C7.TEXT&&(0,n.tZ)(A,{color:s.r.color.base,backgroundColor:s.r.color.accent,text:e.message.body[0],direction:"left",tail:e.message.avatar,virtual:e.virtual,index:e.index}),(e.message.messageType===d.C7.IMAGE||e.message.messageType===d.C7.STAMP)&&(0,n.tZ)(b,{src:e.message.body[0],virtual:e.virtual,index:e.index,imageType:e.message.messageType})))},R=a.memo(P),J=function(e,r,t){return(0,n.iv)("display:grid;grid-template-columns:",s.r.size.medium*r,"px minmax(0, 1fr);grid-template-rows:1fr;grid-column-gap:",s.r.layout.margin*r,"px;padding:",s.r.layout.margin*r,"px;padding-bottom:0;padding-right:",1.5*s.r.layout.margin*r,"px;",!e&&(0,n.iv)("padding-top:",s.r.layout.margin/2*r,"px;","",""),"@media screen and (max-width: ",s.r.layout.minimumBreakpointWidth,"px){",!t&&(0,n.iv)("grid-template-columns:",s.r.size.small*r,"px minmax(0, 1fr);grid-column-gap:",s.r.layout.margin/2*r,"px;","",""),";}","","")},N={name:"sdi484",styles:"grid-column:1"},I={name:"1dkfm40",styles:"grid-column:2;display:flex;flex-direction:column;justify-content:space-between"},L=function(e){return(0,n.iv)("font-size:",s.r.fontSize.large*e,"px;font-weight:bold;margin-bottom:",s.r.layout.margin/4*e,"px;","","")},G=function(e){var r=o.sJ(l.dA);return{imgMag:e?r:1}},B=function(e,r){var t=o.sJ(l._D),n=o.Zl(l.c_);return{header_text:(0,c.vN)("kizuna_event"),btn_text:(0,c.vN)("to_kizuna_story").replace("$value$",e),deleteMode:t,deleteClickHandler:function(){t&&n(r)}}},Y=t(2035);var F=function(e){var r=B(e.characterName,e.index);return(0,n.tZ)("div",{css:$(e.imgMag,r.deleteMode),onClick:r.deleteClickHandler},(0,n.tZ)("header",null,(0,n.tZ)("span",{className:"text"},r.header_text)),(0,n.tZ)("div",{css:q},(0,n.tZ)(Y.default,{height:"100%",fill:s.r.color.heart})),(0,n.tZ)("footer",null,(0,n.tZ)("button",{type:"button"},(0,n.tZ)("span",{className:"text"},r.btn_text))))},U=a.memo(F),W={name:"e0dnmk",styles:"cursor:pointer"},$=function(e,r){return(0,n.iv)("grid-column:2;position:relative;width:100%;border:",1*e,"px solid ",s.r.color.borderDark,";border-radius:",10*e,"px;background-color:transparent;padding:",s.r.layout.margin*e,"px;z-index:1;overflow:hidden;",r&&W," header{border-bottom:",1*e,"px solid ",s.r.color.borderDark,";padding-bottom:",s.r.layout.margin*e/2,"px;span{color:",s.r.color.accent,";font-size:",s.r.fontSize.mediumPlus*e,"px;font-weight:bold;border-left:",2*e,"px solid ",s.r.color.pinkDark,";padding:0 ",s.r.layout.margin*e/2,"px;}}footer{margin-top:",s.r.layout.margin*e/2,"px;button{position:relative;width:100%;padding:",s.r.layout.margin*e/2,"px 0;border-radius:",5*e,"px;border:",1*e,"px solid ",s.r.color.pinkDark,";background-color:",s.r.color.pinkDark,';transition:transform 50ms ease;&:after{display:block;content:"";position:absolute;top:0;left:0;width:100%;height:calc(100% + ',4*e,"px);background-color:rgba(0, 0, 0, 0.5);border-radius:",5*e,"px;filter:blur(",2*e,"px);z-index:-1;}&:active{transform:scale(0.95);}span{color:",s.r.color.base,";font-size:",s.r.fontSize.medium*e,"px;}}}","","")},q=(0,n.iv)("position:absolute;top:-5%;left:-5%;width:110%;height:110%;background-color:",s.r.color.pink,";z-index:-1;text-align:right;","",""),K=function(e){var r=o.sJ(l._D),t=o.Zl(l.c_),n=o.Zl(l.GL);return{header_text:(0,c.vN)("reply"),deleteMode:r,deleteClickHandler:function(){r&&t(e)},replyChangeHandler:function(r,t){(0,Z.oJ)(e,t,r.currentTarget.value,n)},deleteReplyHandler:function(t,a){r&&(t.stopPropagation(),(0,Z.uH)(e,a,n))}}};var X=function(e){var r=K(e.index);return(0,n.tZ)("div",{css:ee(e.imgMag,r.deleteMode)},(0,n.tZ)("header",{onClick:r.deleteClickHandler},(0,n.tZ)("span",{className:"text"},r.header_text)),(0,n.tZ)("div",{css:te(e.imgMag,r.deleteMode)},e.body.map((function(e,t){return(0,n.tZ)("div",{key:t},e+"\u200b",(0,n.tZ)("textarea",{autoCapitalize:"off",autoComplete:"off",spellCheck:"false",onChange:function(e){r.replyChangeHandler(e,t)},value:e,onClick:function(e){r.deleteReplyHandler(e,t)}}))}))))},V=a.memo(X),Q={name:"e0dnmk",styles:"cursor:pointer"},ee=function(e,r){return(0,n.iv)("grid-column:2;position:relative;width:100%;border:",1*e,"px solid ",s.r.color.borderDark,";border-radius:",10*e,"px;background-color:",s.r.color.secondary,";padding:",s.r.layout.margin*e,"px;z-index:1;overflow:hidden;header{border-bottom:",1*e,"px solid ",s.r.color.borderDark,";padding-bottom:",s.r.layout.margin*e/2,"px;",r&&Q," span{color:",s.r.color.accent,";font-size:",s.r.fontSize.mediumPlus*e,"px;font-weight:bold;border-left:",2*e,"px solid ",s.r.color.blue,";padding:0 ",s.r.layout.margin*e/2,"px;}}","","")},re={name:"e0dnmk",styles:"cursor:pointer"},te=function(e,r){return(0,n.iv)("padding-top:",s.r.layout.margin*e/2,"px;font-size:",s.r.fontSize.mediumPlus*e,"px;line-height:",s.r.size.xxSmall*e,"px;>div{position:relative;width:100%;min-height:",s.r.size.xxSmall*e+s.r.layout.margin*e/2,"px;padding:",s.r.layout.margin*e/2,"px;border-radius:",5*e,"px;white-space:pre-wrap;word-wrap:break-word;overflow-wrap:break-word;color:",s.r.color.accent,";font-size:inherit;font-weight:bold;line-height:inherit;text-align:center;&:not(:last-of-type){margin-bottom:",s.r.layout.margin*e/2,'px;}&:after{display:block;content:"";position:absolute;top:0;left:0;width:100%;height:calc(100% + ',3*e,"px);background-color:rgba(0, 0, 0, 0.5);border-radius:",5*e,"px;filter:blur(",2*e,"px);z-index:-1;}>textarea{position:absolute;top:0;left:0;width:100%;height:100%;color:inherit;font-size:inherit;font-weight:inherit;line-height:inherit;background-color:",s.r.color.base,";border:",1*e,"px solid ",s.r.color.border,";border-radius:",5*e,"px;padding:0 ",s.r.layout.margin*e/2,"px;padding-top:",s.r.layout.margin*e/2,"px;text-align:inherit;resize:none;overflow:hidden;",r&&re,";}}","","")},ne=function(e){var r=G(e.virtual);return(0,n.tZ)("li",{css:ie(r.imgMag,e.virtual)},e.message.messageType===d.C7.KIZUNA&&(0,n.tZ)(U,{characterName:e.message.character.first_name,imgMag:r.imgMag,index:e.index}),e.message.messageType===d.C7.REPLY&&(0,n.tZ)(V,{body:e.message.body,imgMag:r.imgMag,index:e.index}))},ae=a.memo(ne),ie=function(e,r){return(0,n.iv)("display:grid;grid-template-columns:",s.r.size.medium*e,"px minmax(0, 1fr);grid-template-rows:1fr;grid-column-gap:",s.r.layout.margin*e,"px;padding:",s.r.layout.margin*e,"px;padding-bottom:0;padding-right:",1.5*s.r.layout.margin*e,"px;@media screen and (max-width: ",s.r.layout.minimumBreakpointWidth,"px){",!r&&(0,n.iv)("grid-template-columns:",s.r.size.small*e,"px minmax(0, 1fr);grid-column-gap:",s.r.layout.margin/2*e,"px;","",""),";}","","")},oe=function(e){var r=o.sJ(l.dA);return{imgMag:e?r:1}},le=function(e){var r=oe(e.virtual);return(0,n.tZ)("li",{css:se(r.imgMag)},e.message.messageType===d.C7.TEXT&&(0,n.tZ)(A,{color:s.r.color.base,backgroundColor:s.r.color.blueDark,text:e.message.body[0],direction:"right",tail:!0,virtual:e.virtual,index:e.index}),(e.message.messageType===d.C7.IMAGE||e.message.messageType===d.C7.STAMP)&&(0,n.tZ)(b,{src:e.message.body[0],virtual:e.virtual,index:e.index,imageType:e.message.messageType}))},ce=a.memo(le),se=function(e){return(0,n.iv)("display:grid;grid-template-columns:",s.r.size.medium*e,"px minmax(0, 1fr);grid-template-rows:1fr;grid-column-gap:",1.5*s.r.layout.margin*e,"px;justify-items:flex-end;padding:",s.r.layout.margin*e,"px;padding-bottom:0;@media screen and (max-width: ",s.r.layout.minimumBreakpointWidth,"px){grid-template-columns:",s.r.size.small*e,"px minmax(0, 1fr);grid-column-gap:",s.r.layout.margin/2*1.5*e,"px;}","","")},ue=a.memo((function(e){return(0,n.tZ)(a.Fragment,null,e.message.sender===d._n.CHARACTER&&(0,n.tZ)(R,e),e.message.sender===d._n.TEACHER&&(0,n.tZ)(ce,e),e.message.sender===d._n.SYSTEM&&(0,n.tZ)(ae,e))}));var de=a.memo((function(){var e=u();return(0,n.tZ)("div",{ref:e.scrollRef,css:ge(e.deleteMode),style:{backgroundColor:"".concat(s.r.color.chat)}},(0,n.tZ)("div",{css:fe(e.imgMag)},(0,n.tZ)("ul",{ref:e.renderRef},e.messages.map((function(e,r){return(0,n.tZ)(ue,{key:r,message:e,virtual:!0,index:r})})))),(0,n.tZ)("ul",{css:pe},e.messages.map((function(e,r){return(0,n.tZ)(ue,{key:r,message:e,virtual:!1,index:r})}))),!e.characterSelected&&(0,n.tZ)("div",{css:he},(0,n.tZ)("span",{className:"text"},e.text_please_select_a_character)))})),me={name:"513b0q",styles:"background-color:rgba(0, 0, 0, 0.25)"},ge=function(e){return(0,n.iv)("grid-area:chatList;position:relative;overflow-x:hidden;overflow-y:scroll;-ms-overflow-style:none;scrollbar-width:none;&::-webkit-scrollbar{display:none;}",e&&me,";","","")},pe=(0,n.iv)("padding-bottom:",s.r.layout.margin,"px;","",""),fe=function(e){return(0,n.iv)("width:",500*e,"px;height:0;overflow:hidden;>ul{padding-bottom:",s.r.layout.margin*e,"px;}","","")},he=(0,n.iv)("position:absolute;top:0;right:0;bottom:0;left:0;margin:auto;display:flex;justify-content:center;align-items:center;>span{color:",s.r.color.textGray,";font-size:",s.r.fontSize.mediumPlus,"px;}","","")},5871:function(e,r,t){t.d(r,{gM:function(){return s},pD:function(){return u},J9:function(){return d},oJ:function(){return m},uH:function(){return g},lA:function(){return h}});var n=t(7812),a=t(9499),i=t(6835),o=t(789);function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach((function(r){(0,a.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var s=function(e,r){var t=p(e.character,e.sender);r((function(r){if(r.length>0&&e.messageType===o.C7.REPLY&&r[r.length-1].messageType===o.C7.REPLY){var a=x(r,r.length-1),l=(0,i.Z)(a,3),s=l[0],u=l[1],d=l[2],m=u.body.concat(""),g=c(c({},u),{},{body:m});return(0,n.Z)(s.concat(g,d))}return f([].concat((0,n.Z)(r),[c(c({},e),{},{character:t})]),r.length)}))},u=function(e,r){r((function(r){var t=x(r,e),a=(0,i.Z)(t,3),o=a[0],l=(a[1],a[2]);return(0,n.Z)(f(o.concat(l),e))}))},d=function(e,r,t){t((function(t){var a=x(t,e),o=(0,i.Z)(a,3),l=o[0],s=o[1],u=o[2],d=c(c({},s),{},{body:[r]});return(0,n.Z)(l.concat(d,u))}))},m=function(e,r,t,a){a((function(a){var o=x(a,e),l=(0,i.Z)(o,3),s=l[0],u=l[1],d=l[2],m=x(u.body,r),g=(0,i.Z)(m,3),p=g[0],f=(g[1],g[2]),h=c(c({},u),{},{body:p.concat(t,f)});return(0,n.Z)(s.concat(h,d))}))},g=function(e,r,t){t((function(t){var a=x(t,e),o=(0,i.Z)(a,3),l=o[0],s=o[1],u=o[2],d=x(s.body,r),m=(0,i.Z)(d,3),g=m[0],p=(m[1],m[2]),f=c(c({},s),{},{body:g.concat(p)});return(0,n.Z)(l.concat(f,u))}))},p=function(e,r){return r===o._n.TEACHER?{}:e},f=function(e,r){var t=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return e.map((function(n,a){if(a!==r)return c({},n);if(0===Object.keys(n.character).length)return c(c({},n),{},{avatar:!1});if(n.sender===o._n.SYSTEM)return c(c({},n),{},{avatar:!1});if(0===a)return c(c({},n),{},{avatar:!0});if(n.messageType===o.C7.IMAGE)return c(c({},n),{},{avatar:!0});var i=e[a-1];return i.sender===o._n.TEACHER||i.sender===o._n.SYSTEM||i.character.id!==n.character.id||i.messageType===o.C7.IMAGE?c(c({},n),{},{avatar:!0}):t?c(c({},n),{},{avatar:!n.avatar}):i.character.imgIndex!==n.character.imgIndex?c(c({},n),{},{avatar:!0}):c(c({},n),{},{avatar:!1})}))},h=function(e,r){r((function(r){return(0,n.Z)(f(r,e,!0))}))},x=function(e,r){return[e.slice(0,r),e[r],e.slice(r+1,e.length)]}}}]);