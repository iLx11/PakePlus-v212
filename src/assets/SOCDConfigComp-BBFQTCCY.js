import{a as e,i as t,o as n}from"./resolve-slot-qpr4X5g9.js";import{t as r}from"./use-form-item-uYND6u3-.js";import{n as i,t as a}from"./icon-switch.cssr-BKq8xUbV.js";import{C as o,Ct as s,Dt as c,Et as l,F as u,Ft as d,G as f,J as p,K as m,Kt as h,Lt as g,M as _,Nt as v,P as y,Q as b,Qt as x,U as S,W as C,Wt as w,X as T,Y as E,_t as D,ct as O,en as k,h as A,in as j,j as M,mt as N,nn as P,nt as F,o as ee,ot as I,st as L,t as R,tn as z,v as B,vt as V,w as H,wt as U,xt as W,zt as G}from"./index-CxDn-bDx.js";const K=M(`n-checkbox-group`),q={min:Number,max:Number,size:String,value:Array,defaultValue:{type:Array,default:null},disabled:{type:Boolean,default:void 0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onChange:[Function,Array]};var J=U({name:`CheckboxGroup`,props:q,setup(t){let{mergedClsPrefixRef:i}=H(t),a=r(t),{mergedSizeRef:o,mergedDisabledRef:s}=a,c=x(t.defaultValue),l=D(()=>t.value),u=n(l,c),d=D(()=>u.value?.length||0),f=D(()=>Array.isArray(u.value)?new Set(u.value):new Set);function p(n,r){let{nTriggerFormInput:i,nTriggerFormChange:o}=a,{onChange:s,"onUpdate:value":l,onUpdateValue:d}=t;if(Array.isArray(u.value)){let t=Array.from(u.value),a=t.findIndex(e=>e===r);n?~a||(t.push(r),d&&e(d,t,{actionType:`check`,value:r}),l&&e(l,t,{actionType:`check`,value:r}),i(),o(),c.value=t,s&&e(s,t)):~a&&(t.splice(a,1),d&&e(d,t,{actionType:`uncheck`,value:r}),l&&e(l,t,{actionType:`uncheck`,value:r}),s&&e(s,t),c.value=t,i(),o())}else n?(d&&e(d,[r],{actionType:`check`,value:r}),l&&e(l,[r],{actionType:`check`,value:r}),s&&e(s,[r]),c.value=[r],i(),o()):(d&&e(d,[],{actionType:`uncheck`,value:r}),l&&e(l,[],{actionType:`uncheck`,value:r}),s&&e(s,[]),c.value=[],i(),o())}return g(K,{checkedCountRef:d,maxRef:k(t,`max`),minRef:k(t,`min`),valueSetRef:f,disabledRef:s,mergedSizeRef:o,toggleCheckbox:p}),{mergedClsPrefix:i}},render(){return l(`div`,{class:`${this.mergedClsPrefix}-checkbox-group`,role:`group`},this.$slots)}}),Y=()=>l(`svg`,{viewBox:`0 0 64 64`,class:`check-icon`},l(`path`,{d:`M50.42,16.76L22.34,39.45l-8.1-11.46c-1.12-1.58-3.3-1.96-4.88-0.84c-1.58,1.12-1.95,3.3-0.84,4.88l10.26,14.51  c0.56,0.79,1.42,1.31,2.38,1.45c0.16,0.02,0.32,0.03,0.48,0.03c0.8,0,1.57-0.27,2.2-0.78l30.99-25.03c1.5-1.21,1.74-3.42,0.52-4.92  C54.13,15.78,51.93,15.55,50.42,16.76z`})),X=()=>l(`svg`,{viewBox:`0 0 100 100`,class:`line-icon`},l(`path`,{d:`M80.2,55.5H21.4c-2.8,0-5.1-2.5-5.1-5.5l0,0c0-3,2.3-5.5,5.1-5.5h58.7c2.8,0,5.1,2.5,5.1,5.5l0,0C85.2,53.1,82.9,55.5,80.2,55.5z`})),Z=S([C(`checkbox`,`
 font-size: var(--n-font-size);
 outline: none;
 cursor: pointer;
 display: inline-flex;
 flex-wrap: nowrap;
 align-items: flex-start;
 word-break: break-word;
 line-height: var(--n-size);
 --n-merged-color-table: var(--n-color-table);
 `,[m(`show-label`,`line-height: var(--n-label-line-height);`),S(`&:hover`,[C(`checkbox-box`,[f(`border`,`border: var(--n-border-checked);`)])]),S(`&:focus:not(:active)`,[C(`checkbox-box`,[f(`border`,`
 border: var(--n-border-focus);
 box-shadow: var(--n-box-shadow-focus);
 `)])]),m(`inside-table`,[C(`checkbox-box`,`
 background-color: var(--n-merged-color-table);
 `)]),m(`checked`,[C(`checkbox-box`,`
 background-color: var(--n-color-checked);
 `,[C(`checkbox-icon`,[S(`.check-icon`,`
 opacity: 1;
 transform: scale(1);
 `)])])]),m(`indeterminate`,[C(`checkbox-box`,[C(`checkbox-icon`,[S(`.check-icon`,`
 opacity: 0;
 transform: scale(.5);
 `),S(`.line-icon`,`
 opacity: 1;
 transform: scale(1);
 `)])])]),m(`checked, indeterminate`,[S(`&:focus:not(:active)`,[C(`checkbox-box`,[f(`border`,`
 border: var(--n-border-checked);
 box-shadow: var(--n-box-shadow-focus);
 `)])]),C(`checkbox-box`,`
 background-color: var(--n-color-checked);
 border-left: 0;
 border-top: 0;
 `,[f(`border`,{border:`var(--n-border-checked)`})])]),m(`disabled`,{cursor:`not-allowed`},[m(`checked`,[C(`checkbox-box`,`
 background-color: var(--n-color-disabled-checked);
 `,[f(`border`,{border:`var(--n-border-disabled-checked)`}),C(`checkbox-icon`,[S(`.check-icon, .line-icon`,{fill:`var(--n-check-mark-color-disabled-checked)`})])])]),C(`checkbox-box`,`
 background-color: var(--n-color-disabled);
 `,[f(`border`,`
 border: var(--n-border-disabled);
 `),C(`checkbox-icon`,[S(`.check-icon, .line-icon`,`
 fill: var(--n-check-mark-color-disabled);
 `)])]),f(`label`,`
 color: var(--n-text-color-disabled);
 `)]),C(`checkbox-box-wrapper`,`
 position: relative;
 width: var(--n-size);
 flex-shrink: 0;
 flex-grow: 0;
 user-select: none;
 -webkit-user-select: none;
 `),C(`checkbox-box`,`
 position: absolute;
 left: 0;
 top: 50%;
 transform: translateY(-50%);
 height: var(--n-size);
 width: var(--n-size);
 display: inline-block;
 box-sizing: border-box;
 border-radius: var(--n-border-radius);
 background-color: var(--n-color);
 transition: background-color 0.3s var(--n-bezier);
 `,[f(`border`,`
 transition:
 border-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 border-radius: inherit;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border: var(--n-border);
 `),C(`checkbox-icon`,`
 display: flex;
 align-items: center;
 justify-content: center;
 position: absolute;
 left: 1px;
 right: 1px;
 top: 1px;
 bottom: 1px;
 `,[S(`.check-icon, .line-icon`,`
 width: 100%;
 fill: var(--n-check-mark-color);
 opacity: 0;
 transform: scale(0.5);
 transform-origin: center;
 transition:
 fill 0.3s var(--n-bezier),
 transform 0.3s var(--n-bezier),
 opacity 0.3s var(--n-bezier),
 border-color 0.3s var(--n-bezier);
 `),a({left:`1px`,top:`1px`})])]),f(`label`,`
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 user-select: none;
 -webkit-user-select: none;
 padding: var(--n-label-padding);
 font-weight: var(--n-label-font-weight);
 `,[S(`&:empty`,{display:`none`})])]),E(C(`checkbox`,`
 --n-merged-color-table: var(--n-color-table-modal);
 `)),T(C(`checkbox`,`
 --n-merged-color-table: var(--n-color-table-popover);
 `))]);const Q=Object.assign(Object.assign({},A.props),{size:String,checked:{type:[Boolean,String,Number],default:void 0},defaultChecked:{type:[Boolean,String,Number],default:!1},value:[String,Number],disabled:{type:Boolean,default:void 0},indeterminate:Boolean,label:String,focusable:{type:Boolean,default:!0},checkedValue:{type:[Boolean,String,Number],default:!0},uncheckedValue:{type:[Boolean,String,Number],default:!1},"onUpdate:checked":[Function,Array],onUpdateChecked:[Function,Array],privateInsideTable:Boolean,onChange:[Function,Array]});var $=U({name:`Checkbox`,props:Q,setup(t){let i=c(K,null),a=x(null),{mergedClsPrefixRef:s,inlineThemeDisabled:l,mergedRtlRef:d}=H(t),f=x(t.defaultChecked),m=k(t,`checked`),h=n(m,f),g=_(()=>{if(i){let e=i.valueSetRef.value;return e&&t.value!==void 0?e.has(t.value):!1}else return h.value===t.checkedValue}),v=r(t,{mergedSize(e){let{size:n}=t;if(n!==void 0)return n;if(i){let{value:e}=i.mergedSizeRef;if(e!==void 0)return e}if(e){let{mergedSize:t}=e;if(t!==void 0)return t.value}return`medium`},mergedDisabled(e){let{disabled:n}=t;if(n!==void 0)return n;if(i){if(i.disabledRef.value)return!0;let{maxRef:{value:e},checkedCountRef:t}=i;if(e!==void 0&&t.value>=e&&!g.value)return!0;let{minRef:{value:n}}=i;if(n!==void 0&&t.value<=n&&g.value)return!0}return e?e.disabled.value:!1}}),{mergedDisabledRef:y,mergedSizeRef:b}=v,S=A(`Checkbox`,`-checkbox`,Z,ee,t,s);function C(n){if(i&&t.value!==void 0)i.toggleCheckbox(!g.value,t.value);else{let{onChange:r,"onUpdate:checked":i,onUpdateChecked:a}=t,{nTriggerFormInput:o,nTriggerFormChange:s}=v,c=g.value?t.uncheckedValue:t.checkedValue;i&&e(i,c,n),a&&e(a,c,n),r&&e(r,c,n),o(),s(),f.value=c}}function w(e){y.value||C(e)}function T(e){if(!y.value)switch(e.key){case` `:case`Enter`:C(e)}}function E(e){switch(e.key){case` `:e.preventDefault()}}let O={focus:()=>{var e;(e=a.value)==null||e.focus()},blur:()=>{var e;(e=a.value)==null||e.blur()}},j=B(`Checkbox`,d,s),M=D(()=>{let{value:e}=b,{common:{cubicBezierEaseInOut:t},self:{borderRadius:n,color:r,colorChecked:i,colorDisabled:a,colorTableHeader:o,colorTableHeaderModal:s,colorTableHeaderPopover:c,checkMarkColor:l,checkMarkColorDisabled:u,border:d,borderFocus:f,borderDisabled:m,borderChecked:h,boxShadowFocus:g,textColor:_,textColorDisabled:v,checkMarkColorDisabledChecked:y,colorDisabledChecked:x,borderDisabledChecked:C,labelPadding:w,labelLineHeight:T,labelFontWeight:E,[p(`fontSize`,e)]:D,[p(`size`,e)]:O}}=S.value;return{"--n-label-line-height":T,"--n-label-font-weight":E,"--n-size":O,"--n-bezier":t,"--n-border-radius":n,"--n-border":d,"--n-border-checked":h,"--n-border-focus":f,"--n-border-disabled":m,"--n-border-disabled-checked":C,"--n-box-shadow-focus":g,"--n-color":r,"--n-color-checked":i,"--n-color-table":o,"--n-color-table-modal":s,"--n-color-table-popover":c,"--n-color-disabled":a,"--n-color-disabled-checked":x,"--n-text-color":_,"--n-text-color-disabled":v,"--n-check-mark-color":l,"--n-check-mark-color-disabled":u,"--n-check-mark-color-disabled-checked":y,"--n-font-size":D,"--n-label-padding":w}}),N=l?o(`checkbox`,D(()=>b.value[0]),M,t):void 0;return Object.assign(v,O,{rtlEnabled:j,selfRef:a,mergedClsPrefix:s,mergedDisabled:y,renderedChecked:g,mergedTheme:S,labelId:u(),handleClick:w,handleKeyUp:T,handleKeyDown:E,cssVars:l?void 0:M,themeClass:N?.themeClass,onRender:N?.onRender})},render(){var e;let{$slots:n,renderedChecked:r,mergedDisabled:a,indeterminate:o,privateInsideTable:s,cssVars:c,labelId:u,label:d,mergedClsPrefix:f,focusable:p,handleKeyUp:m,handleKeyDown:h,handleClick:g}=this;(e=this.onRender)==null||e.call(this);let _=t(n.default,e=>d||e?l(`span`,{class:`${f}-checkbox__label`,id:u},d||e):null);return l(`div`,{ref:`selfRef`,class:[`${f}-checkbox`,this.themeClass,this.rtlEnabled&&`${f}-checkbox--rtl`,r&&`${f}-checkbox--checked`,a&&`${f}-checkbox--disabled`,o&&`${f}-checkbox--indeterminate`,s&&`${f}-checkbox--inside-table`,_&&`${f}-checkbox--show-label`],tabindex:a||!p?void 0:0,role:`checkbox`,"aria-checked":o?`mixed`:r,"aria-labelledby":u,style:c,onKeyup:m,onKeydown:h,onClick:g,onMousedown:()=>{y(`selectstart`,window,e=>{e.preventDefault()},{once:!0})}},l(`div`,{class:`${f}-checkbox-box-wrapper`},`\xA0`,l(`div`,{class:`${f}-checkbox-box`},l(i,null,{default:()=>this.indeterminate?l(`div`,{key:`indeterminate`,class:`${f}-checkbox-icon`},X()):l(`div`,{key:`check`,class:`${f}-checkbox-icon`},Y())}),l(`div`,{class:`${f}-checkbox-box__border`}))),_)}}),te={class:`advanced-key-config`},ne={class:`config-header`},re={class:`config-content`},ie={class:`config-section main-key-select`},ae={class:`key-selection`},oe=[`onClick`],se={class:`config-section`},ce=R(U({__name:`SOCDConfigComp`,setup(e){let t=b(),n=I(),r=L(),i=x(r.restoreData);v(()=>{n.setAllKeysPressed(!1),a()});let a=()=>{r.isRestoreData&&(console.info(`restore --------`),console.info(r.restoreData),o.value.forEach((e,t)=>{e.key=r.advanceKeyData.configuredDataArr[i.value].key[t],e.col=r.advanceKeyData.configuredDataArr[i.value].col[t],e.row=r.advanceKeyData.configuredDataArr[i.value].row[t],p.value=[...r.advanceKeyData.configuredDataArr[i.value].config],n.keyboardLayout[e.row][e.col].isSelect=!0}),o.value[0].isSelected=!0,r.advanceKeyData.configuredDataArr[i.value].col.forEach((e,t)=>{r.advanceKeyData.advanceKeyDataArr[r.advanceKeyData.configuredDataArr[i.value].row[t]][e].type=``}))},o=x([{label:`按键 1`,key:``,isSelected:!1,row:0,col:0},{label:`按键 2`,key:``,isSelected:!1,row:0,col:0}]),c=D(()=>o.value.some(e=>e.isSelected)),l=D(()=>o.value.findIndex(e=>e.isSelected)||0);w(()=>r.keyClickHandleData.item.isSelect,(e,t)=>{e?u():f()},{deep:!0});let u=()=>{if(o.value.some((e,t)=>e.row===r.keyClickHandleData.row&&e.col===r.keyClickHandleData.col)||r.advanceKeyData.advanceKeyDataArr[r.keyClickHandleData.row][r.keyClickHandleData.col].type!==``){r.popMes(`warning`,`该按键已被选择`);return}if(!c.value){r.popMes(`warning`,`请先选择按键`),r.keyClickHandleData.item.isSelect=!1;return}o.value.forEach((e,t)=>{o.value[t].key&&t!==l.value&&(n.keyboardLayout[e.row][e.col].isSelect=!0)}),o.value[l.value].key=r.keyClickHandleData.item.name,o.value[l.value].row=r.keyClickHandleData.row,o.value[l.value].col=r.keyClickHandleData.col},f=()=>{c.value&&o.value.forEach((e,t)=>{e.row===r.keyClickHandleData.row&&e.col===r.keyClickHandleData.col&&(o.value[l.value].key=``,o.value[l.value].row=0,o.value[l.value].col=0,o.value.forEach((e,t)=>{o.value[t].key&&t!==l.value&&(n.keyboardLayout[e.row][e.col].isSelect=!0)}))})},p=x([]),m=e=>{o.value.forEach((t,n)=>{t.isSelected=n===e}),o.value[e]&&o.value[e].key&&(n.keyboardLayout[o.value[e].row][o.value[e].col].isSelect=!0)},g=()=>{t.backToADConfig(),y()},_=()=>{t.backToADConfig(),y()},y=()=>{r.isRestoreData&&(r.isRestoreData=!1,r.advanceKeyData.configuredDataArr[i.value].col.forEach((e,t)=>{let n=r.advanceKeyData.configuredDataArr[i.value].row[t];r.advanceKeyData.advanceKeyDataArr[n][e].type=r.advanceKeyData.configuredDataArr[i.value].type}))},S=async()=>{if(!o.value.every(e=>e.key)){r.popMes(`warning`,`还有按键未选择`);return}if(!p.value.length){r.popMes(`warning`,`请选择行为模式`);return}o.value.forEach(e=>{r.advanceKeyData.advanceKeyDataArr[e.row][e.col].type=`socd`,r.advanceKeyData.advanceKeyDataArr[e.row][e.col].key.push(e.key)});let e={type:`socd`,key:[...o.value.map(e=>e.key)],col:[...o.value.map(e=>e.col)],row:[...o.value.map(e=>e.row)],config:[...p.value]};r.isRestoreData?(r.isRestoreData=!1,r.advanceKeyData.configuredDataArr.splice(i.value,1,e)):r.advanceKeyData.configuredDataArr.push(e),console.log(r.advanceKeyData.configuredDataArr),await F(),t.backToADConfig()};return(e,t)=>(d(),W(`div`,te,[V(`div`,ne,[V(`button`,{class:`back-btn`,onClick:g},[s(O,{"icon-class":`advance_func-arrow_left`})]),t[1]||=V(`div`,{class:`title-group`},[V(`div`,{class:`config-title`},[V(`h2`,null,`瞬时释放（SOCD）`),V(`p`,{class:`description`},` 同时按下两个按键时，根据预设快速触发指定按键 `)])],-1),V(`div`,{class:`config-actions`},[V(`div`,{class:`advance-cancel-btn`,onClick:_},` 取消 `),V(`div`,{class:`confirm-btn`,onClick:S},` 确认 `)])]),V(`div`,re,[V(`div`,ie,[t[2]||=V(`div`,{class:`config-title`},[V(`h3`,null,`1.选择按键`),V(`p`,{class:`section-desc`},`从上方预览图中选择按键`)],-1),V(`div`,ae,[(d(!0),W(N,null,G(o.value,(e,t)=>(d(),W(`div`,{class:P([`key-box`,{selected:e.isSelected,"is-config":e.key&&!e.isSelected}]),key:t,onClick:e=>m(t)},j(e?.key||e?.label),11,oe))),128))])]),V(`div`,se,[t[3]||=V(`div`,{class:`config-title`},[V(`h3`,null,`2.行为模式`),V(`p`,{class:`section-desc`},`选择两个按键同时触发时的行为`)],-1),s(z(J),{value:p.value,"onUpdate:value":t[0]||=e=>p.value=e,max:1},{default:h(()=>[s(z($),{value:0,size:`large`,indeterminate:!1,label:`最后输入优先`}),s(z($),{value:1,size:`large`,label:`绝对按键 1 优先`}),s(z($),{value:2,size:`large`,label:`绝对按键 2 优先`}),s(z($),{value:3,size:`large`,label:`抵消模式`})]),_:1},8,[`value`])])])]))}}),[[`__scopeId`,`data-v-85283a30`]]);export{ce as default};