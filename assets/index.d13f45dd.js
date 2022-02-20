import{d as $,i as O,r as f,o as d,c as p,a as n,b as r,w as s,e as C,p as F,f as A,g as u,F as E,h as V,j as I,k as D,n as y,l as v,m as g,q as z,s as T,t as j,u as U,v as L,T as tt,x as q,y as N,z as et,A as nt,B as ot,C as ut}from"./vendor.b8bfa143.js";const st=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))l(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const e of a.addedNodes)e.tagName==="LINK"&&e.rel==="modulepreload"&&l(e)}).observe(document,{childList:!0,subtree:!0});function c(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerpolicy&&(a.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?a.credentials="include":i.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function l(i){if(i.ep)return;i.ep=!0;const a=c(i);fetch(i.href,a)}};st();var m=(t,o)=>{const c=t.__vccOpts||t;for(const[l,i]of o)c[l]=i;return c};const rt=$({props:{toggleMenuButtonVisible:{type:Boolean,default:!1}},setup(){const t=O("asideVisible");return{toggleAside:()=>{t.value=!t.value}}}}),H=t=>(F("data-v-aee42a6a"),t=t(),A(),t),lt={class:"topnav"},it={class:"logo"},ct=H(()=>n("svg",{class:"icon","aria-hidden":"true"},[n("use",{"xlink:href":"#icon-logo"})],-1)),at={class:"menu"},dt=u("\u9996\u9875"),_t=H(()=>n("use",{"xlink:href":"#icon-menu"},null,-1)),pt=[_t];function mt(t,o,c,l,i,a){const e=f("router-link");return d(),p("div",lt,[n("div",it,[r(e,{to:"/"},{default:s(()=>[ct]),_:1})]),n("ul",at,[n("li",null,[r(e,{to:"/"},{default:s(()=>[dt]),_:1})])]),t.toggleMenuButtonVisible?(d(),p("svg",{key:0,class:"toggleAside",onClick:o[0]||(o[0]=(..._)=>t.toggleAside&&t.toggleAside(..._))},pt)):C("",!0)])}var M=m(rt,[["render",mt],["__scopeId","data-v-aee42a6a"]]);const ft={components:{Topnav:M}},w=t=>(F("data-v-3e9bfeb2"),t=t(),A(),t),ht={class:"topnavAndBanner"},vt={class:"banner"},$t=w(()=>n("h1",null,"\u6728UI",-1)),Bt=w(()=>n("h2",null,"\u81EA\u5236 UI \u6846\u67B6",-1)),gt={class:"actions"},bt=w(()=>n("a",{href:"https://github.com/sf-think/mu-ui"},"GitHub",-1)),Et=u("\u5F00\u59CB"),Dt=V('<div class="features" data-v-3e9bfeb2><ul data-v-3e9bfeb2><li data-v-3e9bfeb2><svg data-v-3e9bfeb2><use xlink:href="#icon-vue" data-v-3e9bfeb2></use></svg><h3 data-v-3e9bfeb2>\u57FA\u4E8E Vue 3</h3><p data-v-3e9bfeb2>\u6E90\u4EE3\u7801\u91C7\u7528 Vue 3 \u7EC4\u5408\u5F0F API</p></li><li data-v-3e9bfeb2><svg data-v-3e9bfeb2><use xlink:href="#icon-ts" data-v-3e9bfeb2></use></svg><h3 data-v-3e9bfeb2>\u57FA\u4E8E TypeScript</h3><p data-v-3e9bfeb2>\u6E90\u4EE3\u7801\u91C7\u7528 TypeScript \u4E66\u5199</p></li><li data-v-3e9bfeb2><svg data-v-3e9bfeb2><use xlink:href="#icon-light" data-v-3e9bfeb2></use></svg><h3 data-v-3e9bfeb2>\u4EE3\u7801\u6613\u8BFB</h3><p data-v-3e9bfeb2>\u7EC4\u4EF6\u6E90\u4EE3\u7801\u975E\u5E38\u7B80\u6D01</p></li></ul></div>',1);function Ct(t,o,c,l,i,a){const e=f("Topnav"),_=f("router-link");return d(),p(E,null,[n("div",ht,[r(e),n("div",vt,[$t,Bt,n("p",gt,[bt,r(_,{to:"/doc"},{default:s(()=>[Et]),_:1})])])]),Dt],64)}var kt=m(ft,[["render",Ct],["__scopeId","data-v-3e9bfeb2"]]);const Ft={components:{Topnav:M},setup(){return{asideVisible:O("asideVisible")}}},R=t=>(F("data-v-50e34f55"),t=t(),A(),t),At={class:"layout"},yt={class:"content"},wt={key:0},xt=R(()=>n("h2",null,"\u6587\u6863",-1)),St=u("\u4ECB\u7ECD"),Tt=u("\u5B89\u88C5"),Ot=u("\u5F00\u59CB\u4F7F\u7528"),Vt=R(()=>n("h2",null,"\u7EC4\u4EF6\u5217\u8868",-1)),It=u("Switch \u7EC4\u4EF6"),zt=u("Button \u7EC4\u4EF6"),jt=u("Dialog \u7EC4\u4EF6"),Ut=u("Tabs \u7EC4\u4EF6");function Lt(t,o,c,l,i,a){const e=f("Topnav"),_=f("router-link"),h=f("router-view");return d(),p("div",null,[n("div",At,[r(e,{toggleMenuButtonVisible:"",class:"nav"}),n("div",yt,[l.asideVisible?(d(),p("aside",wt,[xt,n("ol",null,[n("li",null,[r(_,{to:"/doc/intro"},{default:s(()=>[St]),_:1})]),n("li",null,[r(_,{to:"/doc/install"},{default:s(()=>[Tt]),_:1})]),n("li",null,[r(_,{to:"/doc/get-started"},{default:s(()=>[Ot]),_:1})])]),Vt,n("ol",null,[n("li",null,[r(_,{to:"/doc/switch"},{default:s(()=>[It]),_:1})]),n("li",null,[r(_,{to:"/doc/button"},{default:s(()=>[zt]),_:1})]),n("li",null,[r(_,{to:"/doc/dialog"},{default:s(()=>[jt]),_:1})]),n("li",null,[r(_,{to:"/doc/tabs"},{default:s(()=>[Ut]),_:1})])])])):C("",!0),n("main",null,[r(h)])])])])}var qt=m(Ft,[["render",Lt],["__scopeId","data-v-50e34f55"]]);const Nt=$({props:{theme:{type:String,default:"button"},size:{type:String,default:"normal"},level:{type:String,default:"normal"},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1}},setup(t){const{theme:o,size:c,level:l}=t;return{classes:I(()=>({[`mu-theme-${o}`]:o,[`mu-size-${c}`]:c,[`mu-level-${l}`]:l}))}}}),Ht=["disabled"],Mt={key:0,class:"mu-loadingIndicator"};function Rt(t,o,c,l,i,a){return d(),p("button",{class:y(["mu-button",t.classes]),disabled:t.disabled},[t.loading?(d(),p("span",Mt)):C("",!0),D(t.$slots,"default")],10,Ht)}var B=m(Nt,[["render",Rt]]);const Pt=$({props:{value:Boolean},setup(t,o){return{toggle:()=>{o.emit("update:value",!t.value)}}}}),Gt=n("span",null,null,-1),Kt=[Gt];function Wt(t,o,c,l,i,a){return d(),p("button",{class:y(["mu-Switch",{"mu-checked":t.value}]),onClick:o[0]||(o[0]=(...e)=>t.toggle&&t.toggle(...e))},Kt,2)}var P=m(Pt,[["render",Wt]]);const Jt={components:{Switch:P},setup(){return{bool:v(!1)}}};function Qt(t,o,c,l,i,a){const e=f("Switch");return d(),g(e,{value:l.bool,"onUpdate:value":o[0]||(o[0]=_=>l.bool=_)},null,8,["value"])}var Xt=m(Jt,[["render",Qt]]);const Yt={components:{Switch:P},setup(){return{bool:v(!1)}}};function Zt(t,o,c,l,i,a){const e=f("Switch");return d(),g(e,{value:l.bool,"onUpdate:value":o[0]||(o[0]=_=>l.bool=_),disabled:""},null,8,["value"])}var te=m(Yt,[["render",Zt]]);const ee=$({components:{Button:B},props:{component:Object,title:String},setup(){const t=v(!0);z(()=>{T.initHighlightingOnLoad()}),j(()=>{T.initHighlightingOnLoad()});const o=()=>l.value=!0,c=()=>l.value=!1,l=v(!1);return{bool:t,codeVisible:l,showCode:o,hideCode:c}}}),ne={class:"demo"},oe={class:"demo-component"},ue={class:"demo-actions"},se=u("\u9690\u85CF\u4EE3\u7801"),re=u("\u67E5\u770B\u4EE3\u7801"),le={key:0,class:"demo-code"};function ie(t,o,c,l,i,a){const e=f("Button");return d(),p("div",ne,[n("h2",null,U(t.title),1),n("div",oe,[(d(),g(L(t.component)))]),n("div",ue,[t.codeVisible?(d(),g(e,{key:0,onClick:t.hideCode},{default:s(()=>[se]),_:1},8,["onClick"])):(d(),g(e,{key:1,onClick:t.showCode},{default:s(()=>[re]),_:1},8,["onClick"]))]),t.codeVisible?(d(),p("div",le,[n("article",null,[D(t.$slots,"default",{},void 0,!0)])])):C("",!0)])}var k=m(ee,[["render",ie],["__scopeId","data-v-33920ad1"]]);const ce=$({components:{Button:B,Demo:k},setup(){return{Switch1Demo:Xt,Switch2Demo:te}}}),ae=n("h1",null,"Switch \u7EC4\u4EF6\u793A\u4F8B",-1),de=n("pre",{class:"hljs"},[u("                        "),n("code",null,`\r
<template>\r
    <Switch v-model:value="bool" />\r
</template>\r
\r
<script lang="ts">\r
import Switch from '../lib/Switch.vue'\r
import {\r
    ref\r
} from 'vue'\r
export default {\r
    components: {\r
        Switch,\r
    },\r
    setup() {\r
        const bool = ref(false)\r
        return {\r
            bool\r
        }\r
    }\r
}\r
<\/script>\r
                        `),u(`\r
                    `)],-1),_e=n("pre",{class:"hljs"},[u("                        "),n("code",null,`\r
<template>\r
    <Switch v-model:value="bool" disabled/>\r
</template>\r
\r
<script lang="ts">\r
import Switch from '../lib/Switch.vue'\r
import {\r
    ref\r
} from 'vue'\r
export default {\r
    components: {\r
        Switch,\r
    },\r
    setup() {\r
        const bool = ref(false)\r
        return {\r
            bool\r
        }\r
    }\r
}\r
<\/script>\r
                        `),u(`\r
                    `)],-1);function pe(t,o,c,l,i,a){const e=f("Demo");return d(),p("div",null,[ae,r(e,{title:"\u5E38\u89C4\u7528\u6CD5",component:t.Switch1Demo},{default:s(()=>[de]),_:1},8,["component"]),r(e,{title:"disabled \u7528\u6CD5",component:t.Switch2Demo},{default:s(()=>[_e]),_:1},8,["component"])])}var me=m(ce,[["render",pe]]);const fe={components:{Button:B}},he=u("\u4F60\u597D"),ve=u("\u4F60\u597D"),$e=u("\u4F60\u597D");function Be(t,o,c,l,i,a){const e=f("Button");return d(),p("div",null,[r(e,null,{default:s(()=>[he]),_:1}),r(e,{theme:"link"},{default:s(()=>[ve]),_:1}),r(e,{theme:"text"},{default:s(()=>[$e]),_:1})])}var ge=m(fe,[["render",Be]]);const be={components:{Button:B}},Ee=u("\u5927\u5927\u5927"),De=u("\u666E\u666E\u901A"),Ce=u("\u5C0F\u5C0F\u5C0F"),ke=u("\u5927\u5927\u5927"),Fe=u("\u666E\u666E\u901A"),Ae=u("\u5C0F\u5C0F\u5C0F"),ye=u("\u5927\u5927\u5927"),we=u("\u666E\u666E\u901A"),xe=u("\u5C0F\u5C0F\u5C0F");function Se(t,o,c,l,i,a){const e=f("Button");return d(),p("div",null,[n("div",null,[r(e,{size:"big"},{default:s(()=>[Ee]),_:1}),r(e,null,{default:s(()=>[De]),_:1}),r(e,{size:"small"},{default:s(()=>[Ce]),_:1})]),n("div",null,[r(e,{theme:"link",size:"big"},{default:s(()=>[ke]),_:1}),r(e,{theme:"link"},{default:s(()=>[Fe]),_:1}),r(e,{size:"small",theme:"link"},{default:s(()=>[Ae]),_:1})]),n("div",null,[r(e,{size:"big",theme:"text"},{default:s(()=>[ye]),_:1}),r(e,{theme:"text"},{default:s(()=>[we]),_:1}),r(e,{size:"small",theme:"text"},{default:s(()=>[xe]),_:1})])])}var Te=m(be,[["render",Se]]);const Oe={components:{Button:B}},Ve=u("\u4E3B\u8981\u6309\u94AE"),Ie=u("\u666E\u901A\u6309\u94AE"),ze=u("\u5371\u9669\u6309\u94AE"),je=u("\u4E3B\u8981\u94FE\u63A5\u6309\u94AE"),Ue=u("\u666E\u901A\u94FE\u63A5\u6309\u94AE"),Le=u("\u5371\u9669\u94FE\u63A5\u6309\u94AE"),qe=u("\u4E3B\u8981\u6587\u5B57\u6309\u94AE"),Ne=u("\u666E\u901A\u6587\u5B57\u6309\u94AE"),He=u("\u5371\u9669\u6587\u5B57\u6309\u94AE");function Me(t,o,c,l,i,a){const e=f("Button");return d(),p("div",null,[n("div",null,[r(e,{level:"main"},{default:s(()=>[Ve]),_:1}),r(e,null,{default:s(()=>[Ie]),_:1}),r(e,{level:"danger"},{default:s(()=>[ze]),_:1})]),n("div",null,[r(e,{theme:"link",level:"main"},{default:s(()=>[je]),_:1}),r(e,{theme:"link"},{default:s(()=>[Ue]),_:1}),r(e,{theme:"link",level:"danger"},{default:s(()=>[Le]),_:1})]),n("div",null,[r(e,{theme:"text",level:"main"},{default:s(()=>[qe]),_:1}),r(e,{theme:"text"},{default:s(()=>[Ne]),_:1}),r(e,{theme:"text",level:"danger"},{default:s(()=>[He]),_:1})])])}var Re=m(Oe,[["render",Me]]);const Pe={components:{Button:B}},Ge=u("\u7981\u7528\u6309\u94AE"),Ke=u("\u7981\u7528\u94FE\u63A5\u6309\u94AE"),We=u("\u7981\u7528\u6309\u94AE");function Je(t,o,c,l,i,a){const e=f("Button");return d(),p(E,null,[r(e,{disabled:""},{default:s(()=>[Ge]),_:1}),r(e,{theme:"link",disabled:""},{default:s(()=>[Ke]),_:1}),r(e,{theme:"text",disabled:""},{default:s(()=>[We]),_:1})],64)}var Qe=m(Pe,[["render",Je]]);const Xe={components:{Button:B}},Ye=u("\u52A0\u8F7D\u4E2D"),Ze=u("\u52A0\u8F7D\u5B8C\u6BD5");function tn(t,o,c,l,i,a){const e=f("Button");return d(),p("div",null,[r(e,{loading:""},{default:s(()=>[Ye]),_:1}),r(e,null,{default:s(()=>[Ze]),_:1})])}var en=m(Xe,[["render",tn]]);const nn=$({components:{Demo:k},setup(){return{Button1Demo:ge,Button2Demo:Te,Button3Demo:Re,Button4Demo:Qe,Button5Demo:en}}}),on=n("h1",null,"Button \u7EC4\u4EF6\u793A\u4F8B",-1),un=n("pre",{class:"hljs"},[u("                        "),n("code",null,`\r
<template>\r
    <div>\r
        <Button>\u4F60\u597D</Button>\r
        <Button theme="link">\u4F60\u597D</Button>\r
        <Button theme="text">\u4F60\u597D</Button>\r
    </div>\r
</template>\r
\r
<script lang="ts">\r
import Button from "../lib/Button.vue";\r
export default {\r
    components: {\r
        Button\r
    }\r
}\r
<\/script>\r
                        `),u(`\r
                    `)],-1),sn=n("pre",{class:"hljs"},[u("                        "),n("code",null,`\r
<template>\r
<div>\r
  <div>\r
    <Button size="big">\u5927\u5927\u5927</Button>\r
    <Button>\u666E\u666E\u901A</Button>\r
    <Button size="small">\u5C0F\u5C0F\u5C0F</Button>\r
  </div>\r
  <div>\r
    <Button theme="link" size="big">\u5927\u5927\u5927</Button>\r
    <Button theme="link">\u666E\u666E\u901A</Button>\r
    <Button size="small" theme="link">\u5C0F\u5C0F\u5C0F</Button>\r
  </div>\r
  <div>\r
    <Button size="big" theme="text">\u5927\u5927\u5927</Button>\r
    <Button theme="text">\u666E\u666E\u901A</Button>\r
    <Button size="small" theme="text">\u5C0F\u5C0F\u5C0F</Button>\r
  </div>\r
</div>\r
</template>\r
                        `),u(`\r
                    `)],-1),rn=n("pre",{class:"hljs"},[u("                        "),n("code",null,`\r
<template>\r
<div>\r
  <div>\r
    <Button level="main">\u4E3B\u8981\u6309\u94AE</Button>\r
    <Button>\u666E\u901A\u6309\u94AE</Button>\r
    <Button level="danger">\u5371\u9669\u6309\u94AE</Button>\r
  </div>\r
  <div>\r
    <Button theme="link" level="main">\u4E3B\u8981\u94FE\u63A5\u6309\u94AE</Button>\r
    <Button theme="link">\u666E\u901A\u94FE\u63A5\u6309\u94AE</Button>\r
    <Button theme="link" level="danger">\u5371\u9669\u94FE\u63A5\u6309\u94AE</Button>\r
  </div>\r
  <div>\r
    <Button theme="text" level="main">\u4E3B\u8981\u6587\u5B57\u6309\u94AE</Button>\r
    <Button theme="text">\u666E\u901A\u6587\u5B57\u6309\u94AE</Button>\r
    <Button theme="text" level="danger">\u5371\u9669\u6587\u5B57\u6309\u94AE</Button>\r
  </div>\r
</div>\r
</template>\r
\r
<script lang="ts">\r
import Button from "../lib/Button.vue";\r
export default {\r
  components: {\r
    Button\r
  }\r
}\r
<\/script>\r
                        `),u(`\r
                    `)],-1),ln=n("pre",{class:"hljs"},[u("                        "),n("code",null,`\r
<template>\r
<Button disabled>\u7981\u7528\u6309\u94AE</Button>\r
<Button theme="link" disabled>\u7981\u7528\u94FE\u63A5\u6309\u94AE</Button>\r
<Button theme="text" disabled>\u7981\u7528\u6309\u94AE</Button>\r
</template>\r
\r
<script lang="ts">\r
import Button from "../lib/Button.vue";\r
export default {\r
  components: {\r
    Button\r
  }\r
}\r
<\/script>\r
                        `),u(`\r
                    `)],-1),cn=n("pre",{class:"hljs"},[u("                        "),n("code",null,`\r
<template>\r
<div>\r
  <Button loading>\u52A0\u8F7D\u4E2D</Button>\r
  <Button>\u52A0\u8F7D\u5B8C\u6BD5</Button>\r
</div>\r
</template>\r
\r
<script lang="ts">\r
import Button from "../lib/Button.vue";\r
export default {\r
  components: {\r
    Button\r
  }\r
}\r
<\/script>\r
                        `),u(`\r
                    `)],-1);function an(t,o,c,l,i,a){const e=f("Demo");return d(),p(E,null,[on,r(e,{title:"\u5E38\u89C4\u7528\u6CD5",component:t.Button1Demo},{default:s(()=>[un]),_:1},8,["component"]),r(e,{title:"\u652F\u6301 size",component:t.Button2Demo},{default:s(()=>[sn]),_:1},8,["component"]),r(e,{title:"\u652F\u6301 level",component:t.Button3Demo},{default:s(()=>[rn]),_:1},8,["component"]),r(e,{title:"\u652F\u6301 disabled",component:t.Button4Demo},{default:s(()=>[ln]),_:1},8,["component"]),r(e,{title:"\u652F\u6301\u663E\u793A\u52A0\u8F7D\u4E2D",component:t.Button5Demo},{default:s(()=>[cn]),_:1},8,["component"])],64)}var dn=m(nn,[["render",an]]);const _n=$({props:{visible:{type:Boolean,default:!1},closeOnClickOverlay:{type:Boolean,default:!0},ok:{type:Function},cancel:{type:Function}},components:{Button:B},setup(t,o){const c=()=>{o.emit("update:visible",!1)};return{close:c,OnClickOverlay:()=>{t.closeOnClickOverlay&&c()},ok:()=>{var e;((e=t.ok)==null?void 0:e.call(t))!==!1&&c()},cancel:()=>{var e;((e=t.cancel)==null?void 0:e.call(t))!==!1&&c()}}}}),pn={class:"mu-dialog-wrapper"},mn={class:"mu-dialog"},fn=u("OK"),hn=u("Cancel");function vn(t,o,c,l,i,a){const e=f("Button");return t.visible?(d(),g(tt,{key:0,to:"body"},[n("div",{class:"mu-dialog-overlay",onClick:o[0]||(o[0]=(..._)=>t.OnClickOverlay&&t.OnClickOverlay(..._))}),n("div",pn,[n("div",mn,[n("header",null,[D(t.$slots,"title"),n("span",{class:"mu-dialog-close",onClick:o[1]||(o[1]=(..._)=>t.close&&t.close(..._))})]),n("main",null,[D(t.$slots,"content")]),n("footer",null,[r(e,{level:"main",onClick:t.ok},{default:s(()=>[fn]),_:1},8,["onClick"]),r(e,{onClick:t.cancel},{default:s(()=>[hn]),_:1},8,["onClick"])])])])])):C("",!0)}var G=m(_n,[["render",vn]]);const $n={components:{Dialog:G,Button:B},setup(){const t=v(!1);return{x:t,toggle:()=>{t.value=!t.value},f1:()=>!1,f2:()=>{}}}},Bn=u("\u6253\u5F00\u5BF9\u8BDD\u6846"),gn=n("strong",null,"\u6211\u662F\u5F39\u7A97",-1),bn=n("strong",null,"\u52A0\u7C97\u7684\u6807\u9898",-1);function En(t,o,c,l,i,a){const e=f("Button"),_=f("Dialog");return d(),p("div",null,[r(e,{onClick:l.toggle},{default:s(()=>[Bn]),_:1},8,["onClick"]),r(_,{visible:l.x,"onUpdate:visible":o[0]||(o[0]=h=>l.x=h),closeOnClickOverlay:!1,ok:l.f1,cancel:l.f2},{content:s(()=>[gn]),title:s(()=>[bn]),_:1},8,["visible","ok","cancel"])])}var Dn=m($n,[["render",En]]);const Cn=t=>{const{title:o,content:c,ok:l,cancel:i}=t,a=document.createElement("div");document.body.appendChild(a);const e=()=>{_.unmount(),a.remove()},_=q({render(){return N(G,{visible:!0,"onUpdate:visible":h=>{h===!1&&e()},ok:l,cancel:i,closeOnClickOverlay:""},{title:o,content:c})}});_.mount(a)},kn={components:{Button:B},setup(){return{showDialog:()=>{Cn({title:N("strong",{},"\u6807\u9898"),content:"\u4F60\u597D",ok(){console.log("ok")},cancel(){console.log("cancel")}})}}}},Fn=u("\u6253\u5F00\u5BF9\u8BDD\u6846");function An(t,o,c,l,i,a){const e=f("Button");return d(),p("div",null,[r(e,{onClick:l.showDialog},{default:s(()=>[Fn]),_:1},8,["onClick"])])}var yn=m(kn,[["render",An]]);const wn=$({components:{Demo:k},setup(){return{Dialog1Demo:Dn,Dialog2Demo:yn}}}),xn=n("h1",null,"Dialog \u7EC4\u4EF6\u793A\u4F8B",-1),Sn=n("pre",{class:"hljs"},[u("                        "),n("code",null,`\r
<template>\r
<div>\r
  <Button @click="toggle">\u6253\u5F00\u5BF9\u8BDD\u6846</Button>\r
  <Dialog v-model:visible="x" :closeOnClickOverlay="false" :ok="f1" :cancel="f2">\r
    <template v-slot:content>\r
      <strong>hi</strong>\r
      <div>hi2</div>\r
    </template>\r
    <template v-slot:title>\r
      <strong>\u52A0\u7C97\u7684\u6807\u9898</strong>\r
    </template>\r
  </Dialog>\r
</div>\r
</template>\r
\r
<script lang="ts">\r
import Dialog from '../lib/Dialog.vue'\r
import Button from '../lib/Button.vue'\r
import {\r
  ref\r
} from 'vue'\r
export default {\r
  components: {\r
    Dialog,\r
    Button\r
  },\r
  setup() {\r
    const x = ref(false)\r
    const toggle = () => {\r
      x.value = !x.value\r
    }\r
    const f1 = () => {\r
      return false\r
    }\r
    const f2 = () => {}\r
    return {\r
      x,\r
      toggle,\r
      f1,\r
      f2\r
    }\r
  }\r
}\r
<\/script>\r
                        `),u(`\r
                    `)],-1),Tn=n("pre",{class:"hljs"},[u("                        "),n("code",null,`\r
<template>\r
<div>\r
  <Button @click="showDialog">\u6253\u5F00\u5BF9\u8BDD\u6846</Button>\r
</div>\r
</template>\r
\r
<script lang="ts">\r
import Button from '../lib/Button.vue'\r
import {\r
  ref,\r
  h\r
} from 'vue'\r
import {\r
  openDialog\r
} from '../lib/openDialog'\r
export default {\r
  components: {\r
    Button\r
  },\r
  setup() {\r
    const showDialog = () => {\r
      openDialog({\r
        title: h('strong', {}, '\u6807\u9898'),\r
        content: '\u4F60\u597D',\r
        ok() {\r
          console.log('ok')\r
        },\r
        cancel() {\r
          console.log('cancel')\r
        }\r
      })\r
    }\r
    return {\r
      showDialog\r
    }\r
  }\r
}\r
<\/script>\r
                        `),u(`\r
                    `)],-1);function On(t,o,c,l,i,a){const e=f("Demo");return d(),p(E,null,[xn,r(e,{title:"\u5E38\u89C4\u4F7F\u7528",component:t.Dialog1Demo},{default:s(()=>[Sn]),_:1},8,["component"]),r(e,{title:"\u4E00\u952E\u6253\u5F00 Dialog",component:t.Dialog2Demo},{default:s(()=>[Tn]),_:1},8,["component"])],64)}var Vn=m(wn,[["render",On]]);const In={};function zn(t,o){return d(),p("div",null,[D(t.$slots,"default")])}var K=m(In,[["render",zn]]);const jn=$({props:{selected:{type:String}},setup(t,o){const c=v([]),l=v(null),i=v(null),a=()=>{const S=c.value.filter(Z=>Z.classList.contains("selected"))[0],{width:J}=S.getBoundingClientRect();l.value.style.width=J+"px";const{left:Q}=i.value.getBoundingClientRect(),{left:X}=S.getBoundingClientRect(),Y=X-Q;l.value.style.left=Y+"px"};z(a),j(a);const e=o.slots.default();e.forEach(b=>{if(b.type!==K)throw new Error("Tabs \u5B50\u7EC4\u4EF6\u5FC5\u987B\u4E3A Tab")});const _=I(()=>e.find(b=>b.props.title===t.selected)),h=e.map(b=>b.props.title);return{defaults:e,current:_,titles:h,select:b=>{o.emit("update:selected",b)},navItems:c,indicator:l,container:i}}}),Un={class:"mu-tabs"},Ln={class:"mu-tabs-nav",ref:"container"},qn=["onClick"],Nn={class:"mu-tabs-nav-indicator",ref:"indicator"},Hn={class:"mu-tabs-content"};function Mn(t,o,c,l,i,a){return d(),p("div",Un,[n("div",Ln,[(d(!0),p(E,null,et(t.titles,(e,_)=>(d(),p("div",{class:y(["mu-tabs-nav-item",{selected:e===t.selected}]),key:_,ref_for:!0,ref:h=>{h&&(t.navItems[_]=h)},onClick:h=>t.select(e)},U(e),11,qn))),128)),n("div",Nn,null,512)],512),n("div",Hn,[(d(),g(L(t.current),{key:t.current.props.title}))])])}var Rn=m(jn,[["render",Mn]]);const Pn={components:{Tabs:Rn,Tab:K},setup(){return{x:v("\u5BFC\u822A2")}}},Gn=u("\u5185\u5BB91"),Kn=u("\u5185\u5BB92");function Wn(t,o,c,l,i,a){const e=f("Tab"),_=f("Tabs");return d(),g(_,{selected:l.x,"onUpdate:selected":o[0]||(o[0]=h=>l.x=h)},{default:s(()=>[r(e,{title:"\u5BFC\u822A1"},{default:s(()=>[Gn]),_:1}),r(e,{title:"\u5BFC\u822A2"},{default:s(()=>[Kn]),_:1})]),_:1},8,["selected"])}var Jn=m(Pn,[["render",Wn]]);const Qn=$({components:{Demo:k},setup(){return{Tabs1Demo:Jn}}}),Xn=n("h1",null,"Tabs \u7EC4\u4EF6\u793A\u4F8B",-1),Yn=n("pre",{class:"hljs"},[u("                        "),n("code",null,`\r
<template>\r
    <Tabs v-model:selected="x">\r
        <Tab title="\u5BFC\u822A1">\u5185\u5BB91</Tab>\r
        <Tab title="\u5BFC\u822A2">\u5185\u5BB92</Tab>\r
    </Tabs>\r
</template>\r
\r
<script lang="ts">\r
import Tabs from '../lib/Tabs.vue'\r
import Tab from '../lib/Tab.vue'\r
import {\r
    ref\r
} from 'vue'\r
export default {\r
    components: {\r
        Tabs,\r
        Tab\r
    },\r
    setup() {\r
        const x = ref('\u5BFC\u822A2')\r
        return {\r
            x\r
        }\r
    }\r
}\r
<\/script>\r
                        `),u(`\r
                    `)],-1);function Zn(t,o,c,l,i,a){const e=f("Demo");return d(),p(E,null,[Xn,r(e,{component:t.Tabs1Demo},{default:s(()=>[Yn]),_:1},8,["component"])],64)}var to=m(Qn,[["render",Zn]]);const eo={},no={class:"markdown-body"},oo=n("h1",null,"\u4ECB\u7ECD",-1),uo=n("p",null,"MU UI \u662F\u4E00\u6B3E\u57FA\u4E8E Vue 3 \u548C TypeScript \u7684 UI \u7EC4\u4EF6\u5E93\u3002",-1),so=n("a",{href:"#/doc/install"},"\u5B89\u88C5",-1),ro=[oo,uo,so];function lo(t,o){return d(),p("article",no,ro)}var io=m(eo,[["render",lo]]);const co={},ao={class:"markdown-body"},_o=V(`<h1>\u5F00\u59CB\u4F7F\u7528</h1><p> \u8BF7\u5148 <a href="#/doc/install">\u5B89\u88C5 </a>\u672C\u7EC4\u4EF6\u5E93\u3002 </p><p>\u7136\u540E\u5199\u5165\u4EE5\u4E0B\u4EE3\u7801</p><pre><code>import {Button, Tabs, Switch, Dialog} from &quot;mu-ui&quot;</code></pre>\u5C31\u53EF\u4EE5\u4F7F\u7528\u6211\u63D0\u4F9B\u7684\u7EC4\u4EF6\u4E86\u3002 <h2>Vue \u5355\u6587\u4EF6\u7EC4\u4EF6</h2><p>\u4EE3\u7801\u793A\u4F8B\uFF1A</p><pre><code>&lt;template&gt;
  &lt;div&gt;&lt;Button&gt;\u6309\u94AE&lt;/Button&gt;&lt;/div&gt;
&lt;/template&gt;
&lt;script&gt;
  import {Button, Tabs, Switch, Dialog} from &quot;mu-ui&quot;
  export default {
    components: {Button}
  }
&lt;/script&gt;</code>
 </pre>`,8),po=u("\u4E0B\u4E00\u8282");function mo(t,o){const c=f("router-link");return d(),p("article",ao,[_o,r(c,{to:"/doc/switch"},{default:s(()=>[po]),_:1})])}var fo=m(co,[["render",mo]]);const ho={},vo={class:"markdown-body"},$o=n("h1",null,"\u5B89\u88C5",-1),Bo=n("p",null,"\u6253\u5F00\u7EC8\u7AEF\u8FD0\u884C\u4E0B\u5217\u547D\u4EE4\uFF1A",-1),go=n("pre",null,[n("code",null,"npm install mu-ui")],-1),bo=n("p",null,"\u6216",-1),Eo=n("pre",null,[n("code",null,"yarn add mu-ui")],-1),Do=n("p",null,[u(" \u4E0B\u4E00\u8282\uFF1A "),n("a",{href:"#/doc/get-started"},"\u5F00\u59CB\u4F7F\u7528")],-1),Co=[$o,Bo,go,bo,Eo,Do];function ko(t,o){return d(),p("article",vo,Co)}var Fo=m(ho,[["render",ko]]);const Ao=nt(),x=ot({history:Ao,routes:[{path:"/",component:kt},{path:"/doc",component:qt,children:[{path:"",redirect:"/doc/intro"},{path:"intro",component:io},{path:"get-started",component:fo},{path:"install",component:Fo},{path:"switch",component:me},{path:"button",component:dn},{path:"dialog",component:Vn},{path:"tabs",component:to}]}]});x.afterEach(()=>{console.log("\u8DEF\u7531\u5207\u6362\u4E86")});const yo={name:"App",setup(){const t=document.documentElement.clientWidth,o=v(!(t<=500));ut("asideVisible",o),x.afterEach(()=>{t<=500&&(o.value=!1)})}};function wo(t,o,c,l,i,a){const e=f("router-view");return d(),g(e)}var xo=m(yo,[["render",wo]]);const W=q(xo);W.use(x);W.mount("#app");
