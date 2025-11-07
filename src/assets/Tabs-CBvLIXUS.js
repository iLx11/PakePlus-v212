import{a as e,i as t,n,r,t as i}from"./Add-CuQb5_qu.js";import{a,i as o,o as s}from"./resolve-slot-qpr4X5g9.js";import{A as c,At as l,C as u,D as d,Dt as f,E as p,Et as m,G as h,Gt as g,J as _,K as v,Lt as y,Nt as b,O as x,Qt as S,S as C,U as w,V as T,W as E,Wt as D,_t as O,b as k,d as A,en as j,ft as M,gt as N,h as P,j as F,k as I,kt as L,mt as R,n as ee,p as z,q as B,qt as V,ut as H,w as te,wt as U,x as ne,z as re}from"./index-CxDn-bDx.js";function ie(e,t){return O(()=>{for(let n of t)if(e[n]!==void 0)return e[n];return e[t[t.length-1]]})}var ae=r(`.v-x-scroll`,{overflow:`auto`,scrollbarWidth:`none`},[r(`&::-webkit-scrollbar`,{width:0,height:0})]),oe=U({name:`XScroll`,props:{disabled:Boolean,onScroll:Function},setup(){let e=S(null);function n(e){!(e.currentTarget.offsetWidth<e.currentTarget.scrollWidth)||e.deltaY===0||(e.currentTarget.scrollLeft+=e.deltaY+e.deltaX,e.preventDefault())}let r=c();return ae.mount({id:`vueuc/x-scroll`,head:!0,anchorMetaName:t,ssr:r}),Object.assign({selfRef:e,handleWheel:n},{scrollTo(...t){var n;(n=e.value)==null||n.scrollTo(...t)}})},render(){return m(`div`,{ref:`selfRef`,onScroll:this.onScroll,onWheel:this.disabled?void 0:this.handleWheel,class:`v-x-scroll`},this.$slots)}}),W=/\s/;function G(e){for(var t=e.length;t--&&W.test(e.charAt(t)););return t}var se=G,ce=/^\s+/;function le(e){return e&&e.slice(0,se(e)+1).replace(ce,``)}var K=le,q=NaN,J=/^[-+]0x[0-9a-f]+$/i,Y=/^0b[01]+$/i,X=/^0o[0-7]+$/i,ue=parseInt;function de(e){if(typeof e==`number`)return e;if(ne(e))return q;if(k(e)){var t=typeof e.valueOf==`function`?e.valueOf():e;e=k(t)?t+``:t}if(typeof e!=`string`)return e===0?e:+e;e=K(e);var n=Y.test(e);return n||X.test(e)?ue(e.slice(2),n?2:8):J.test(e)?q:+e}var Z=de,Q=function(){return C.Date.now()},fe=`Expected a function`,pe=Math.max,$=Math.min;function me(e,t,n){var r,i,a,o,s,c,l=0,u=!1,d=!1,f=!0;if(typeof e!=`function`)throw TypeError(fe);t=Z(t)||0,k(n)&&(u=!!n.leading,d=`maxWait`in n,a=d?pe(Z(n.maxWait)||0,t):a,f=`trailing`in n?!!n.trailing:f);function p(t){var n=r,a=i;return r=i=void 0,l=t,o=e.apply(a,n),o}function m(e){return l=e,s=setTimeout(_,t),u?p(e):o}function h(e){var n=e-c,r=e-l,i=t-n;return d?$(i,a-r):i}function g(e){var n=e-c,r=e-l;return c===void 0||n>=t||n<0||d&&r>=a}function _(){var e=Q();if(g(e))return v(e);s=setTimeout(_,h(e))}function v(e){return s=void 0,f&&r?p(e):(r=i=void 0,o)}function y(){s!==void 0&&clearTimeout(s),l=0,r=c=i=s=void 0}function b(){return s===void 0?o:v(Q())}function x(){var e=Q(),n=g(e);if(r=arguments,i=this,c=e,n){if(s===void 0)return m(c);if(d)return clearTimeout(s),s=setTimeout(_,t),p(c)}return s===void 0&&(s=setTimeout(_,t)),o}return x.cancel=y,x.flush=b,x}var he=me,ge=`Expected a function`;function _e(e,t,n){var r=!0,i=!0;if(typeof e!=`function`)throw TypeError(ge);return k(n)&&(r=`leading`in n?!!n.leading:r,i=`trailing`in n?!!n.trailing:i),he(e,t,{leading:r,maxWait:t,trailing:i})}var ve=_e;const ye=F(`n-tabs`),be={tab:[String,Number,Object,Function],name:{type:[String,Number],required:!0},disabled:Boolean,displayDirective:{type:String,default:`if`},closable:{type:Boolean,default:void 0},tabProps:Object,label:[String,Number,Object,Function]};var xe=U({__TAB_PANE__:!0,name:`TabPane`,alias:[`TabPanel`],props:be,slots:Object,setup(e){let t=f(ye,null);return t||x(`tab-pane`,"`n-tab-pane` must be placed inside `n-tabs`."),{style:t.paneStyleRef,class:t.paneClassRef,mergedClsPrefix:t.mergedClsPrefixRef}},render(){return m(`div`,{class:[`${this.mergedClsPrefix}-tab-pane`,this.class],style:this.style},this.$slots)}});const Se=Object.assign({internalLeftPadded:Boolean,internalAddable:Boolean,internalCreatedByPane:Boolean},d(be,[`displayDirective`]));var Ce=U({__TAB__:!0,inheritAttrs:!1,name:`Tab`,props:Se,setup(e){let{mergedClsPrefixRef:t,valueRef:n,typeRef:r,closableRef:i,tabStyleRef:a,addTabStyleRef:o,tabClassRef:s,addTabClassRef:c,tabChangeIdRef:l,onBeforeLeaveRef:u,triggerRef:d,handleAdd:p,activateTab:m,handleClose:h}=f(ye);return{trigger:d,mergedClosable:O(()=>{if(e.internalAddable)return!1;let{closable:t}=e;return t===void 0?i.value:t}),style:a,addStyle:o,tabClass:s,addTabClass:c,clsPrefix:t,value:n,type:r,handleClose(t){t.stopPropagation(),!e.disabled&&h(e.name)},activateTab(){if(e.disabled)return;if(e.internalAddable){p();return}let{name:t}=e,r=++l.id;if(t!==n.value){let{value:i}=u;i?Promise.resolve(i(e.name,n.value)).then(e=>{e&&l.id===r&&m(t)}):m(t)}}}},render(){let{internalAddable:e,clsPrefix:t,name:n,disabled:r,label:a,tab:o,value:s,mergedClosable:c,trigger:l,$slots:{default:u}}=this,d=a??o;return m(`div`,{class:`${t}-tabs-tab-wrapper`},this.internalLeftPadded?m(`div`,{class:`${t}-tabs-tab-pad`}):null,m(`div`,Object.assign({key:n,"data-name":n,"data-disabled":r?!0:void 0},L({class:[`${t}-tabs-tab`,s===n&&`${t}-tabs-tab--active`,r&&`${t}-tabs-tab--disabled`,c&&`${t}-tabs-tab--closable`,e&&`${t}-tabs-tab--addable`,e?this.addTabClass:this.tabClass],onClick:l===`click`?this.activateTab:void 0,onMouseenter:l===`hover`?this.activateTab:void 0,style:e?this.addStyle:this.style},this.internalCreatedByPane?this.tabProps||{}:this.$attrs)),m(`span`,{class:`${t}-tabs-tab__label`},e?m(R,null,m(`div`,{class:`${t}-tabs-tab__height-placeholder`},`\xA0`),m(z,{clsPrefix:t},{default:()=>m(i,null)})):u?u():typeof d==`object`?d:p(d??n)),c&&this.type===`card`?m(A,{clsPrefix:t,class:`${t}-tabs-tab__close`,onClick:this.handleClose,disabled:r}):null))}}),we=E(`tabs`,`
 box-sizing: border-box;
 width: 100%;
 display: flex;
 flex-direction: column;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
`,[v(`segment-type`,[E(`tabs-rail`,[w(`&.transition-disabled`,[E(`tabs-capsule`,`
 transition: none;
 `)])])]),v(`top`,[E(`tab-pane`,`
 padding: var(--n-pane-padding-top) var(--n-pane-padding-right) var(--n-pane-padding-bottom) var(--n-pane-padding-left);
 `)]),v(`left`,[E(`tab-pane`,`
 padding: var(--n-pane-padding-right) var(--n-pane-padding-bottom) var(--n-pane-padding-left) var(--n-pane-padding-top);
 `)]),v(`left, right`,`
 flex-direction: row;
 `,[E(`tabs-bar`,`
 width: 2px;
 right: 0;
 transition:
 top .2s var(--n-bezier),
 max-height .2s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `),E(`tabs-tab`,`
 padding: var(--n-tab-padding-vertical); 
 `)]),v(`right`,`
 flex-direction: row-reverse;
 `,[E(`tab-pane`,`
 padding: var(--n-pane-padding-left) var(--n-pane-padding-top) var(--n-pane-padding-right) var(--n-pane-padding-bottom);
 `),E(`tabs-bar`,`
 left: 0;
 `)]),v(`bottom`,`
 flex-direction: column-reverse;
 justify-content: flex-end;
 `,[E(`tab-pane`,`
 padding: var(--n-pane-padding-bottom) var(--n-pane-padding-right) var(--n-pane-padding-top) var(--n-pane-padding-left);
 `),E(`tabs-bar`,`
 top: 0;
 `)]),E(`tabs-rail`,`
 position: relative;
 padding: 3px;
 border-radius: var(--n-tab-border-radius);
 width: 100%;
 background-color: var(--n-color-segment);
 transition: background-color .3s var(--n-bezier);
 display: flex;
 align-items: center;
 `,[E(`tabs-capsule`,`
 border-radius: var(--n-tab-border-radius);
 position: absolute;
 pointer-events: none;
 background-color: var(--n-tab-color-segment);
 box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .08);
 transition: transform 0.3s var(--n-bezier);
 `),E(`tabs-tab-wrapper`,`
 flex-basis: 0;
 flex-grow: 1;
 display: flex;
 align-items: center;
 justify-content: center;
 `,[E(`tabs-tab`,`
 overflow: hidden;
 border-radius: var(--n-tab-border-radius);
 width: 100%;
 display: flex;
 align-items: center;
 justify-content: center;
 `,[v(`active`,`
 font-weight: var(--n-font-weight-strong);
 color: var(--n-tab-text-color-active);
 `),w(`&:hover`,`
 color: var(--n-tab-text-color-hover);
 `)])])]),v(`flex`,[E(`tabs-nav`,`
 width: 100%;
 position: relative;
 `,[E(`tabs-wrapper`,`
 width: 100%;
 `,[E(`tabs-tab`,`
 margin-right: 0;
 `)])])]),E(`tabs-nav`,`
 box-sizing: border-box;
 line-height: 1.5;
 display: flex;
 transition: border-color .3s var(--n-bezier);
 `,[h(`prefix, suffix`,`
 display: flex;
 align-items: center;
 `),h(`prefix`,`padding-right: 16px;`),h(`suffix`,`padding-left: 16px;`)]),v(`top, bottom`,[w(`>`,[E(`tabs-nav`,[E(`tabs-nav-scroll-wrapper`,[w(`&::before`,`
 top: 0;
 bottom: 0;
 left: 0;
 width: 20px;
 `),w(`&::after`,`
 top: 0;
 bottom: 0;
 right: 0;
 width: 20px;
 `),v(`shadow-start`,[w(`&::before`,`
 box-shadow: inset 10px 0 8px -8px rgba(0, 0, 0, .12);
 `)]),v(`shadow-end`,[w(`&::after`,`
 box-shadow: inset -10px 0 8px -8px rgba(0, 0, 0, .12);
 `)])])])])]),v(`left, right`,[E(`tabs-nav-scroll-content`,`
 flex-direction: column;
 `),w(`>`,[E(`tabs-nav`,[E(`tabs-nav-scroll-wrapper`,[w(`&::before`,`
 top: 0;
 left: 0;
 right: 0;
 height: 20px;
 `),w(`&::after`,`
 bottom: 0;
 left: 0;
 right: 0;
 height: 20px;
 `),v(`shadow-start`,[w(`&::before`,`
 box-shadow: inset 0 10px 8px -8px rgba(0, 0, 0, .12);
 `)]),v(`shadow-end`,[w(`&::after`,`
 box-shadow: inset 0 -10px 8px -8px rgba(0, 0, 0, .12);
 `)])])])])]),E(`tabs-nav-scroll-wrapper`,`
 flex: 1;
 position: relative;
 overflow: hidden;
 `,[E(`tabs-nav-y-scroll`,`
 height: 100%;
 width: 100%;
 overflow-y: auto; 
 scrollbar-width: none;
 `,[w(`&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb`,`
 width: 0;
 height: 0;
 display: none;
 `)]),w(`&::before, &::after`,`
 transition: box-shadow .3s var(--n-bezier);
 pointer-events: none;
 content: "";
 position: absolute;
 z-index: 1;
 `)]),E(`tabs-nav-scroll-content`,`
 display: flex;
 position: relative;
 min-width: 100%;
 min-height: 100%;
 width: fit-content;
 box-sizing: border-box;
 `),E(`tabs-wrapper`,`
 display: inline-flex;
 flex-wrap: nowrap;
 position: relative;
 `),E(`tabs-tab-wrapper`,`
 display: flex;
 flex-wrap: nowrap;
 flex-shrink: 0;
 flex-grow: 0;
 `),E(`tabs-tab`,`
 cursor: pointer;
 white-space: nowrap;
 flex-wrap: nowrap;
 display: inline-flex;
 align-items: center;
 color: var(--n-tab-text-color);
 font-size: var(--n-tab-font-size);
 background-clip: padding-box;
 padding: var(--n-tab-padding);
 transition:
 box-shadow .3s var(--n-bezier),
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[v(`disabled`,{cursor:`not-allowed`}),h(`close`,`
 margin-left: 6px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `),h(`label`,`
 display: flex;
 align-items: center;
 z-index: 1;
 `)]),E(`tabs-bar`,`
 position: absolute;
 bottom: 0;
 height: 2px;
 border-radius: 1px;
 background-color: var(--n-bar-color);
 transition:
 left .2s var(--n-bezier),
 max-width .2s var(--n-bezier),
 opacity .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `,[w(`&.transition-disabled`,`
 transition: none;
 `),v(`disabled`,`
 background-color: var(--n-tab-text-color-disabled)
 `)]),E(`tabs-pane-wrapper`,`
 position: relative;
 overflow: hidden;
 transition: max-height .2s var(--n-bezier);
 `),E(`tab-pane`,`
 color: var(--n-pane-text-color);
 width: 100%;
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 opacity .2s var(--n-bezier);
 left: 0;
 right: 0;
 top: 0;
 `,[w(`&.next-transition-leave-active, &.prev-transition-leave-active, &.next-transition-enter-active, &.prev-transition-enter-active`,`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 transform .2s var(--n-bezier),
 opacity .2s var(--n-bezier);
 `),w(`&.next-transition-leave-active, &.prev-transition-leave-active`,`
 position: absolute;
 `),w(`&.next-transition-enter-from, &.prev-transition-leave-to`,`
 transform: translateX(32px);
 opacity: 0;
 `),w(`&.next-transition-leave-to, &.prev-transition-enter-from`,`
 transform: translateX(-32px);
 opacity: 0;
 `),w(`&.next-transition-leave-from, &.next-transition-enter-to, &.prev-transition-leave-from, &.prev-transition-enter-to`,`
 transform: translateX(0);
 opacity: 1;
 `)]),E(`tabs-tab-pad`,`
 box-sizing: border-box;
 width: var(--n-tab-gap);
 flex-grow: 0;
 flex-shrink: 0;
 `),v(`line-type, bar-type`,[E(`tabs-tab`,`
 font-weight: var(--n-tab-font-weight);
 box-sizing: border-box;
 vertical-align: bottom;
 `,[w(`&:hover`,{color:`var(--n-tab-text-color-hover)`}),v(`active`,`
 color: var(--n-tab-text-color-active);
 font-weight: var(--n-tab-font-weight-active);
 `),v(`disabled`,{color:`var(--n-tab-text-color-disabled)`})])]),E(`tabs-nav`,[v(`line-type`,[v(`top`,[h(`prefix, suffix`,`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),E(`tabs-nav-scroll-content`,`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),E(`tabs-bar`,`
 bottom: -1px;
 `)]),v(`left`,[h(`prefix, suffix`,`
 border-right: 1px solid var(--n-tab-border-color);
 `),E(`tabs-nav-scroll-content`,`
 border-right: 1px solid var(--n-tab-border-color);
 `),E(`tabs-bar`,`
 right: -1px;
 `)]),v(`right`,[h(`prefix, suffix`,`
 border-left: 1px solid var(--n-tab-border-color);
 `),E(`tabs-nav-scroll-content`,`
 border-left: 1px solid var(--n-tab-border-color);
 `),E(`tabs-bar`,`
 left: -1px;
 `)]),v(`bottom`,[h(`prefix, suffix`,`
 border-top: 1px solid var(--n-tab-border-color);
 `),E(`tabs-nav-scroll-content`,`
 border-top: 1px solid var(--n-tab-border-color);
 `),E(`tabs-bar`,`
 top: -1px;
 `)]),h(`prefix, suffix`,`
 transition: border-color .3s var(--n-bezier);
 `),E(`tabs-nav-scroll-content`,`
 transition: border-color .3s var(--n-bezier);
 `),E(`tabs-bar`,`
 border-radius: 0;
 `)]),v(`card-type`,[h(`prefix, suffix`,`
 transition: border-color .3s var(--n-bezier);
 `),E(`tabs-pad`,`
 flex-grow: 1;
 transition: border-color .3s var(--n-bezier);
 `),E(`tabs-tab-pad`,`
 transition: border-color .3s var(--n-bezier);
 `),E(`tabs-tab`,`
 font-weight: var(--n-tab-font-weight);
 border: 1px solid var(--n-tab-border-color);
 background-color: var(--n-tab-color);
 box-sizing: border-box;
 position: relative;
 vertical-align: bottom;
 display: flex;
 justify-content: space-between;
 font-size: var(--n-tab-font-size);
 color: var(--n-tab-text-color);
 `,[v(`addable`,`
 padding-left: 8px;
 padding-right: 8px;
 font-size: 16px;
 justify-content: center;
 `,[h(`height-placeholder`,`
 width: 0;
 font-size: var(--n-tab-font-size);
 `),B(`disabled`,[w(`&:hover`,`
 color: var(--n-tab-text-color-hover);
 `)])]),v(`closable`,`padding-right: 8px;`),v(`active`,`
 background-color: #0000;
 font-weight: var(--n-tab-font-weight-active);
 color: var(--n-tab-text-color-active);
 `),v(`disabled`,`color: var(--n-tab-text-color-disabled);`)])]),v(`left, right`,`
 flex-direction: column; 
 `,[h(`prefix, suffix`,`
 padding: var(--n-tab-padding-vertical);
 `),E(`tabs-wrapper`,`
 flex-direction: column;
 `),E(`tabs-tab-wrapper`,`
 flex-direction: column;
 `,[E(`tabs-tab-pad`,`
 height: var(--n-tab-gap-vertical);
 width: 100%;
 `)])]),v(`top`,[v(`card-type`,[E(`tabs-scroll-padding`,`border-bottom: 1px solid var(--n-tab-border-color);`),h(`prefix, suffix`,`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),E(`tabs-tab`,`
 border-top-left-radius: var(--n-tab-border-radius);
 border-top-right-radius: var(--n-tab-border-radius);
 `,[v(`active`,`
 border-bottom: 1px solid #0000;
 `)]),E(`tabs-tab-pad`,`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),E(`tabs-pad`,`
 border-bottom: 1px solid var(--n-tab-border-color);
 `)])]),v(`left`,[v(`card-type`,[E(`tabs-scroll-padding`,`border-right: 1px solid var(--n-tab-border-color);`),h(`prefix, suffix`,`
 border-right: 1px solid var(--n-tab-border-color);
 `),E(`tabs-tab`,`
 border-top-left-radius: var(--n-tab-border-radius);
 border-bottom-left-radius: var(--n-tab-border-radius);
 `,[v(`active`,`
 border-right: 1px solid #0000;
 `)]),E(`tabs-tab-pad`,`
 border-right: 1px solid var(--n-tab-border-color);
 `),E(`tabs-pad`,`
 border-right: 1px solid var(--n-tab-border-color);
 `)])]),v(`right`,[v(`card-type`,[E(`tabs-scroll-padding`,`border-left: 1px solid var(--n-tab-border-color);`),h(`prefix, suffix`,`
 border-left: 1px solid var(--n-tab-border-color);
 `),E(`tabs-tab`,`
 border-top-right-radius: var(--n-tab-border-radius);
 border-bottom-right-radius: var(--n-tab-border-radius);
 `,[v(`active`,`
 border-left: 1px solid #0000;
 `)]),E(`tabs-tab-pad`,`
 border-left: 1px solid var(--n-tab-border-color);
 `),E(`tabs-pad`,`
 border-left: 1px solid var(--n-tab-border-color);
 `)])]),v(`bottom`,[v(`card-type`,[E(`tabs-scroll-padding`,`border-top: 1px solid var(--n-tab-border-color);`),h(`prefix, suffix`,`
 border-top: 1px solid var(--n-tab-border-color);
 `),E(`tabs-tab`,`
 border-bottom-left-radius: var(--n-tab-border-radius);
 border-bottom-right-radius: var(--n-tab-border-radius);
 `,[v(`active`,`
 border-top: 1px solid #0000;
 `)]),E(`tabs-tab-pad`,`
 border-top: 1px solid var(--n-tab-border-color);
 `),E(`tabs-pad`,`
 border-top: 1px solid var(--n-tab-border-color);
 `)])])])]),Te=ve;const Ee=Object.assign(Object.assign({},P.props),{value:[String,Number],defaultValue:[String,Number],trigger:{type:String,default:`click`},type:{type:String,default:`bar`},closable:Boolean,justifyContent:String,size:{type:String,default:`medium`},placement:{type:String,default:`top`},tabStyle:[String,Object],tabClass:String,addTabStyle:[String,Object],addTabClass:String,barWidth:Number,paneClass:String,paneStyle:[String,Object],paneWrapperClass:String,paneWrapperStyle:[String,Object],addable:[Boolean,Object],tabsPadding:{type:Number,default:0},animated:Boolean,onBeforeLeave:Function,onAdd:Function,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onClose:[Function,Array],labelSize:String,activeName:[String,Number],onActiveNameChange:[Function,Array]});var De=U({name:`Tabs`,props:Ee,slots:Object,setup(t,{slots:r}){let{mergedClsPrefixRef:i,inlineThemeDisabled:o}=te(t),c=P(`Tabs`,`-tabs`,we,ee,t,i),d=S(null),f=S(null),p=S(null),m=S(null),h=S(null),v=S(null),x=S(!0),C=S(!0),w=ie(t,[`labelSize`,`size`]),E=ie(t,[`activeName`,`value`]),k=S(E.value??t.defaultValue??(r.default?n(r.default())[0]?.props?.name:null)),A=s(E,k),M={id:0},N=O(()=>{if(!(!t.justifyContent||t.type===`card`))return{display:`flex`,justifyContent:t.justifyContent}});D(A,()=>{M.id=0,z(),B()});function F(){let{value:e}=A;return e===null?null:d.value?.querySelector(`[data-name="${e}"]`)}function I(e){if(t.type===`card`)return;let{value:n}=f;if(!n)return;let r=n.style.opacity===`0`;if(e){let a=`${i.value}-tabs-bar--disabled`,{barWidth:o,placement:s}=t;if(e.dataset.disabled===`true`?n.classList.add(a):n.classList.remove(a),[`top`,`bottom`].includes(s)){if(R([`top`,`maxHeight`,`height`]),typeof o==`number`&&e.offsetWidth>=o){let t=Math.floor((e.offsetWidth-o)/2)+e.offsetLeft;n.style.left=`${t}px`,n.style.maxWidth=`${o}px`}else n.style.left=`${e.offsetLeft}px`,n.style.maxWidth=`${e.offsetWidth}px`;n.style.width=`8192px`,r&&(n.style.transition=`none`),n.offsetWidth,r&&(n.style.transition=``,n.style.opacity=`1`)}else{if(R([`left`,`maxWidth`,`width`]),typeof o==`number`&&e.offsetHeight>=o){let t=Math.floor((e.offsetHeight-o)/2)+e.offsetTop;n.style.top=`${t}px`,n.style.maxHeight=`${o}px`}else n.style.top=`${e.offsetTop}px`,n.style.maxHeight=`${e.offsetHeight}px`;n.style.height=`8192px`,r&&(n.style.transition=`none`),n.offsetHeight,r&&(n.style.transition=``,n.style.opacity=`1`)}}}function L(){if(t.type===`card`)return;let{value:e}=f;e&&(e.style.opacity=`0`)}function R(e){let{value:t}=f;if(t)for(let n of e)t.style[n]=``}function z(){if(t.type===`card`)return;let e=F();e?I(e):L()}function B(){let e=h.value?.$el;if(!e)return;let t=F();if(!t)return;let{scrollLeft:n,offsetWidth:r}=e,{offsetLeft:i,offsetWidth:a}=t;n>i?e.scrollTo({top:0,left:i,behavior:`smooth`}):i+a>n+r&&e.scrollTo({top:0,left:i+a-r,behavior:`smooth`})}let V=S(null),H=0,U=null;function ne(e){let t=V.value;if(t){H=e.getBoundingClientRect().height;let n=`${H}px`,r=()=>{t.style.height=n,t.style.maxHeight=n};U?(r(),U(),U=null):U=r}}function ae(e){let t=V.value;if(t){let n=e.getBoundingClientRect().height,r=()=>{document.body.offsetHeight,t.style.maxHeight=`${n}px`,t.style.height=`${Math.max(H,n)}px`};U?(U(),U=null,r()):U=r}}function oe(){let e=V.value;if(e){e.style.maxHeight=``,e.style.height=``;let{paneWrapperStyle:n}=t;if(typeof n==`string`)e.style.cssText=n;else if(n){let{maxHeight:t,height:r}=n;t!==void 0&&(e.style.maxHeight=t),r!==void 0&&(e.style.height=r)}}}let W={value:[]},G=S(`next`);function se(e){let t=A.value,n=`next`;for(let r of W.value){if(r===t)break;if(r===e){n=`prev`;break}}G.value=n,ce(e)}function ce(e){let{onActiveNameChange:n,onUpdateValue:r,"onUpdate:value":i}=t;n&&a(n,e),r&&a(r,e),i&&a(i,e),k.value=e}function le(e){let{onClose:n}=t;n&&a(n,e)}let K=!0;function q(){let{value:e}=f;if(!e)return;K||=!1;let t=`transition-disabled`;e.classList.add(t),z(),e.classList.remove(t)}let J=S(null);function Y({transitionDisabled:e}){let t=d.value;if(!t)return;e&&t.classList.add(`transition-disabled`);let n=F();n&&J.value&&(J.value.style.width=`${n.offsetWidth}px`,J.value.style.height=`${n.offsetHeight}px`,J.value.style.transform=`translateX(${n.offsetLeft-re(getComputedStyle(t).paddingLeft)}px)`,e&&J.value.offsetWidth),e&&t.classList.remove(`transition-disabled`)}D([A],()=>{t.type===`segment`&&l(()=>{Y({transitionDisabled:!1})})}),b(()=>{t.type===`segment`&&Y({transitionDisabled:!0})});let X=0;function ue(e){if(e.contentRect.width===0&&e.contentRect.height===0||X===e.contentRect.width)return;X=e.contentRect.width;let{type:n}=t;if((n===`line`||n===`bar`)&&(K||t.justifyContent?.startsWith(`space`))&&q(),n!==`segment`){let{placement:e}=t;$((e===`top`||e===`bottom`?h.value?.$el:v.value)||null)}}let de=Te(ue,64);D([()=>t.justifyContent,()=>t.size],()=>{l(()=>{let{type:e}=t;(e===`line`||e===`bar`)&&q()})});let Z=S(!1);function Q(e){let{target:n,contentRect:{width:r,height:i}}=e,a=n.parentElement.parentElement.offsetWidth,o=n.parentElement.parentElement.offsetHeight,{placement:s}=t;if(!Z.value)s===`top`||s===`bottom`?a<r&&(Z.value=!0):o<i&&(Z.value=!0);else{let{value:e}=m;if(!e)return;s===`top`||s===`bottom`?a-r>e.$el.offsetWidth&&(Z.value=!1):o-i>e.$el.offsetHeight&&(Z.value=!1)}$(h.value?.$el||null)}let fe=Te(Q,64);function pe(){let{onAdd:e}=t;e&&e(),l(()=>{let e=F(),{value:t}=h;!e||!t||t.scrollTo({left:e.offsetLeft,top:0,behavior:`smooth`})})}function $(e){if(!e)return;let{placement:n}=t;if(n===`top`||n===`bottom`){let{scrollLeft:t,scrollWidth:n,offsetWidth:r}=e;x.value=t<=0,C.value=t+r>=n}else{let{scrollTop:t,scrollHeight:n,offsetHeight:r}=e;x.value=t<=0,C.value=t+r>=n}}let me=Te(e=>{$(e.target)},64);y(ye,{triggerRef:j(t,`trigger`),tabStyleRef:j(t,`tabStyle`),tabClassRef:j(t,`tabClass`),addTabStyleRef:j(t,`addTabStyle`),addTabClassRef:j(t,`addTabClass`),paneClassRef:j(t,`paneClass`),paneStyleRef:j(t,`paneStyle`),mergedClsPrefixRef:i,typeRef:j(t,`type`),closableRef:j(t,`closable`),valueRef:A,tabChangeIdRef:M,onBeforeLeaveRef:j(t,`onBeforeLeave`),activateTab:se,handleClose:le,handleAdd:pe}),e(()=>{z(),B()}),g(()=>{let{value:e}=p;if(!e)return;let{value:t}=i,n=`${t}-tabs-nav-scroll-wrapper--shadow-start`,r=`${t}-tabs-nav-scroll-wrapper--shadow-end`;x.value?e.classList.remove(n):e.classList.add(n),C.value?e.classList.remove(r):e.classList.add(r)});let he={syncBarPosition:()=>{z()}},ge=()=>{Y({transitionDisabled:!0})},_e=O(()=>{let{value:e}=w,{type:n}=t,r={card:`Card`,bar:`Bar`,line:`Line`,segment:`Segment`}[n],i=`${e}${r}`,{self:{barColor:a,closeIconColor:o,closeIconColorHover:s,closeIconColorPressed:l,tabColor:u,tabBorderColor:d,paneTextColor:f,tabFontWeight:p,tabBorderRadius:m,tabFontWeightActive:h,colorSegment:g,fontWeightStrong:v,tabColorSegment:y,closeSize:b,closeIconSize:x,closeColorHover:S,closeColorPressed:C,closeBorderRadius:E,[_(`panePadding`,e)]:D,[_(`tabPadding`,i)]:O,[_(`tabPaddingVertical`,i)]:k,[_(`tabGap`,i)]:A,[_(`tabGap`,`${i}Vertical`)]:j,[_(`tabTextColor`,n)]:M,[_(`tabTextColorActive`,n)]:N,[_(`tabTextColorHover`,n)]:P,[_(`tabTextColorDisabled`,n)]:F,[_(`tabFontSize`,e)]:I},common:{cubicBezierEaseInOut:L}}=c.value;return{"--n-bezier":L,"--n-color-segment":g,"--n-bar-color":a,"--n-tab-font-size":I,"--n-tab-text-color":M,"--n-tab-text-color-active":N,"--n-tab-text-color-disabled":F,"--n-tab-text-color-hover":P,"--n-pane-text-color":f,"--n-tab-border-color":d,"--n-tab-border-radius":m,"--n-close-size":b,"--n-close-icon-size":x,"--n-close-color-hover":S,"--n-close-color-pressed":C,"--n-close-border-radius":E,"--n-close-icon-color":o,"--n-close-icon-color-hover":s,"--n-close-icon-color-pressed":l,"--n-tab-color":u,"--n-tab-font-weight":p,"--n-tab-font-weight-active":h,"--n-tab-padding":O,"--n-tab-padding-vertical":k,"--n-tab-gap":A,"--n-tab-gap-vertical":j,"--n-pane-padding-left":T(D,`left`),"--n-pane-padding-right":T(D,`right`),"--n-pane-padding-top":T(D,`top`),"--n-pane-padding-bottom":T(D,`bottom`),"--n-font-weight-strong":v,"--n-tab-color-segment":y}}),ve=o?u(`tabs`,O(()=>`${w.value[0]}${t.type[0]}`),_e,t):void 0;return Object.assign({mergedClsPrefix:i,mergedValue:A,renderedNames:new Set,segmentCapsuleElRef:J,tabsPaneWrapperRef:V,tabsElRef:d,barElRef:f,addTabInstRef:m,xScrollInstRef:h,scrollWrapperElRef:p,addTabFixed:Z,tabWrapperStyle:N,handleNavResize:de,mergedSize:w,handleScroll:me,handleTabsResize:fe,cssVars:o?void 0:_e,themeClass:ve?.themeClass,animationDirection:G,renderNameListRef:W,yScrollElRef:v,handleSegmentResize:ge,onAnimationBeforeLeave:ne,onAnimationEnter:ae,onAnimationAfterEnter:oe,onRender:ve?.onRender},he)},render(){let{mergedClsPrefix:e,type:t,placement:r,addTabFixed:i,addable:a,mergedSize:s,renderNameListRef:c,onRender:l,paneWrapperClass:u,paneWrapperStyle:d,$slots:{default:f,prefix:p,suffix:h}}=this;l?.();let g=f?n(f()).filter(e=>e.type.__TAB_PANE__===!0):[],_=f?n(f()).filter(e=>e.type.__TAB__===!0):[],v=!_.length,y=t===`card`,b=t===`segment`,x=!y&&!b&&this.justifyContent;c.value=[];let S=()=>{let t=m(`div`,{style:this.tabWrapperStyle,class:`${e}-tabs-wrapper`},x?null:m(`div`,{class:`${e}-tabs-scroll-padding`,style:r===`top`||r===`bottom`?{width:`${this.tabsPadding}px`}:{height:`${this.tabsPadding}px`}}),v?g.map((e,t)=>(c.value.push(e.props.name),je(m(Ce,Object.assign({},e.props,{internalCreatedByPane:!0,internalLeftPadded:t!==0&&(!x||x===`center`||x===`start`||x===`end`)}),e.children?{default:e.children.tab}:void 0)))):_.map((e,t)=>(c.value.push(e.props.name),je(t!==0&&!x?Ae(e):e))),!i&&a&&y?ke(a,(v?g.length:_.length)!==0):null,x?null:m(`div`,{class:`${e}-tabs-scroll-padding`,style:{width:`${this.tabsPadding}px`}}));return m(`div`,{ref:`tabsElRef`,class:`${e}-tabs-nav-scroll-content`},y&&a?m(I,{onResize:this.handleTabsResize},{default:()=>t}):t,y?m(`div`,{class:`${e}-tabs-pad`}):null,y?null:m(`div`,{ref:`barElRef`,class:`${e}-tabs-bar`}))},C=b?`top`:r;return m(`div`,{class:[`${e}-tabs`,this.themeClass,`${e}-tabs--${t}-type`,`${e}-tabs--${s}-size`,x&&`${e}-tabs--flex`,`${e}-tabs--${C}`],style:this.cssVars},m(`div`,{class:[`${e}-tabs-nav--${t}-type`,`${e}-tabs-nav--${C}`,`${e}-tabs-nav`]},o(p,t=>t&&m(`div`,{class:`${e}-tabs-nav__prefix`},t)),b?m(I,{onResize:this.handleSegmentResize},{default:()=>m(`div`,{class:`${e}-tabs-rail`,ref:`tabsElRef`},m(`div`,{class:`${e}-tabs-capsule`,ref:`segmentCapsuleElRef`},m(`div`,{class:`${e}-tabs-wrapper`},m(`div`,{class:`${e}-tabs-tab`}))),v?g.map((e,t)=>(c.value.push(e.props.name),m(Ce,Object.assign({},e.props,{internalCreatedByPane:!0,internalLeftPadded:t!==0}),e.children?{default:e.children.tab}:void 0))):_.map((e,t)=>(c.value.push(e.props.name),t===0?e:Ae(e))))}):m(I,{onResize:this.handleNavResize},{default:()=>m(`div`,{class:`${e}-tabs-nav-scroll-wrapper`,ref:`scrollWrapperElRef`},[`top`,`bottom`].includes(C)?m(oe,{ref:`xScrollInstRef`,onScroll:this.handleScroll},{default:S}):m(`div`,{class:`${e}-tabs-nav-y-scroll`,onScroll:this.handleScroll,ref:`yScrollElRef`},S()))}),i&&a&&y?ke(a,!0):null,o(h,t=>t&&m(`div`,{class:`${e}-tabs-nav__suffix`},t))),v&&(this.animated&&(C===`top`||C===`bottom`)?m(`div`,{ref:`tabsPaneWrapperRef`,style:d,class:[`${e}-tabs-pane-wrapper`,u]},Oe(g,this.mergedValue,this.renderedNames,this.onAnimationBeforeLeave,this.onAnimationEnter,this.onAnimationAfterEnter,this.animationDirection)):Oe(g,this.mergedValue,this.renderedNames)))}});function Oe(e,t,n,r,i,a,o){let s=[];return e.forEach(e=>{let{name:r,displayDirective:i,"display-directive":a}=e.props,o=e=>i===e||a===e,c=t===r;if(e.key!==void 0&&(e.key=r),c||o(`show`)||o(`show:lazy`)&&n.has(r)){n.has(r)||n.add(r);let t=!o(`if`);s.push(t?V(e,[[M,c]]):e)}}),o?m(H,{name:`${o}-transition`,onBeforeLeave:r,onEnter:i,onAfterEnter:a},{default:()=>s}):s}function ke(e,t){return m(Ce,{ref:`addTabInstRef`,key:`__addable`,name:`__addable`,internalCreatedByPane:!0,internalAddable:!0,internalLeftPadded:t,disabled:typeof e==`object`&&e.disabled})}function Ae(e){let t=N(e);return t.props?t.props.internalLeftPadded=!0:t.props={internalLeftPadded:!0},t}function je(e){return Array.isArray(e.dynamicProps)?e.dynamicProps.includes(`internalLeftPadded`)||e.dynamicProps.push(`internalLeftPadded`):e.dynamicProps=[`internalLeftPadded`],e}export{xe as n,De as t};