var e=Object.defineProperty,a=Object.defineProperties,o=Object.getOwnPropertyDescriptors,t=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,n=(a,o,t)=>o in a?e(a,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[o]=t,c=(e,a)=>{for(var o in a||(a={}))s.call(a,o)&&n(e,o,a[o]);if(t)for(var o of t(a))r.call(a,o)&&n(e,o,a[o]);return e},l=(e,t)=>a(e,o(t));import{p as i,a as d,o as u,c as m,r as p,b as g,w as k,k as f,d as y,t as v,F as h,e as b,f as w,g as j,h as P,u as C,i as _,_ as V,j as x,l as A,m as I,n as L,q as S,s as U,v as N,x as O}from"./vendor.fe2bc6d8.js";i("data-v-4b23e37a"),d();const R={},Q={class:"NinjaLogo",src:"/assets/logo.03d6d6da.png",alt:"logo"};R.render=function(e,a){return u(),m("img",Q)};const D={components:{Logo:R}},z=k("data-v-1f23ce5f");i("data-v-1f23ce5f");const q={class:"header"},$={class:"header-wrapper"},B={class:"flex items-center"},E=g("p",{class:"pl-3 select-none"},"Ninja",-1);d();const K=z(((e,a,o,t,s,r)=>{const n=p("Logo");return u(),m("div",q,[g("div",$,[g("div",B,[g(n,{class:"h-10 w-10"}),E])])])}));D.render=K,D.__scopeId="data-v-1f23ce5f";const T=f.create({prefixUrl:"/api",retry:{limit:0}});const Z={setup(){let e=ref("unknown");return y((async()=>{try{const a=await T.get("status").json();e=a.version||"unknown"}catch(a){console.error(a)}})),{backendVersion:e,frontendVersion:"1.0.0"}}},F={class:"absolute bottom-5 text-center w-full text-gray-600"},G=g("span",null," | ",-1);Z.render=function(e,a,o,t,s,r){return u(),m("div",F,[g("span",null,"Frontend: "+v(t.frontendVersion),1),G,g("span",null,"Backend: "+v(t.backendVersion),1)])};const H={class:"main"},J={setup:e=>(e,a)=>{const o=p("router-view");return u(),m(h,null,[g(D),g("div",H,[g(o)]),g(Z)],64)}};const W={setup(){const e=C();_();let a=b({nickName:void 0,timestamp:void 0,remark:void 0});const o=async()=>{try{const e=localStorage.getItem("eid");if(!e)return void t();const o=await function(e){const a=new URLSearchParams;return a.set("eid",e),T.get("userinfo",{searchParams:a}).json()}(e);if(!o)return V.error("获取用户信息失败，请重重新登录"),void t();a.nickName=o.data.nickName,a.timestamp=new Date(o.data.timestamp).toLocaleString(),a.remark=o.data.remark}catch(e){console.error(e)}};y(o);const t=()=>{localStorage.removeItem("eid"),e.push("/login")};return l(c({},w(a)),{activity:[{name:"玩一玩（可找到大多数活动）",address:"京东 APP 首页-频道-边玩边赚",href:"https://funearth.m.jd.com/babelDiy/Zeus/3BB1rymVZUo4XmicATEUSDUgHZND/index.html"},{name:"宠汪汪",address:"京东APP-首页/玩一玩/我的-宠汪汪"},{name:"东东萌宠",address:"京东APP-首页/玩一玩/我的-东东萌宠"},{name:"东东农场",address:"京东APP-首页/玩一玩/我的-东东农场"},{name:"东东工厂",address:"京东APP-首页/玩一玩/我的-东东工厂"},{name:"东东超市",address:"京东APP-首页/玩一玩/我的-东东超市"},{name:"领现金",address:"京东APP-首页/玩一玩/我的-领现金"},{name:"东东健康社区",address:"京东APP-首页/玩一玩/我的-东东健康社区"},{name:"京喜农场",address:"京喜APP-我的-京喜农场"},{name:"京喜牧场",address:"京喜APP-我的-京喜牧场"},{name:"京喜工厂",address:"京喜APP-我的-京喜工厂"},{name:"京喜财富岛",address:"京喜APP-我的-京喜财富岛"},{name:"京东极速版红包",address:"京东极速版APP-我的-红包"}],getInfo:o,logout:t,delAccount:async()=>{try{const e=localStorage.getItem("eid"),a=await function(e){return T.post("delaccount",{json:e}).json()}({eid:e});200!==a.code?V.error(a.message):(V.success(a.message),setTimeout((()=>{t()}),1e3))}catch(e){console.error(e)}},openUrlWithJD:e=>{const a=encodeURIComponent(`{"category":"jump","des":"m","action":"to","url":"${e}"}`);window.location.href=`openapp.jdmobile://virtual?params=${a}`,console.log(window.location.href)},uploadRemark:async()=>{try{if(!a.remark||""===a.remark.replace(/(^\s*)|(\s*$)/g,""))return;const o=localStorage.getItem("eid"),t=await(e={eid:o,remark:a.remark},T.post("update/remark",{json:e}).json());200!==t.code?V.error(t.message):V.success(t.message)}catch(o){console.error(o)}var e}})}},M={class:"content"},X={class:"card"},Y=g("div",{class:"card-header"},[g("p",{class:"card-title"},"个人中心")],-1),ee={class:"card-body"},ae={class:"card-footer"},oe=A("退出登录"),te=A("删除账号"),se={class:"card"},re=g("div",{class:"card-header"},[g("p",{class:"card-title"},"备注"),g("span",{class:"card-subtitle"}," 备注用于识别用户，查看通知，强烈建议配置。 ")],-1),ne={class:"card-body"},ce={class:"card-footer"},le=A("保存"),ie={class:"card"},de=g("div",{class:"card-header"},[g("p",{class:"card-title"},"常见活动位置"),g("span",{class:"card-subtitle"},"下面是一些常见活动的位置")],-1),ue={class:"card-body"},me={class:"pr-2"};W.render=function(e,a,o,t,s,r){const n=p("el-button"),c=p("el-input");return u(),m("div",M,[g("div",X,[Y,g("div",ee,[g("p",null,"昵称："+v(e.nickName),1),g("p",null,"更新时间："+v(e.timestamp),1)]),g("div",ae,[g(n,{size:"small",auto:"",onClick:t.logout},{default:j((()=>[oe])),_:1},8,["onClick"]),g(n,{type:"danger",size:"small",auto:"",onClick:t.delAccount},{default:j((()=>[te])),_:1},8,["onClick"])])]),g("div",se,[re,g("div",ne,[g(c,{modelValue:e.remark,"onUpdate:modelValue":a[1]||(a[1]=a=>e.remark=a),placeholder:"备注",size:"small",clearable:"",class:"my-4 w-full"},null,8,["modelValue"])]),g("div",ce,[g(n,{type:"success",size:"small",auto:"",onClick:t.uploadRemark},{default:j((()=>[le])),_:1},8,["onClick"])])]),g("div",ie,[de,g("div",ue,[g("ul",null,[(u(!0),m(h,null,P(t.activity,((e,a)=>(u(),m("li",{key:a,class:"leading-normal"},[g("span",null,v(e.name)+"：",1),g("span",me,v(e.address),1),e.href?(u(),m("a",{key:0,href:"#",onClick:a=>t.openUrlWithJD(e.href)},"直达链接",8,["onClick"])):x("",!0)])))),128))])])])])};const pe={setup(){const e=C();_();let a=b({marginCount:0,allowAdd:!0,cookie:"",QRCode:void 0,qrCodeVisibility:!1,token:void 0,okl_token:void 0,cookies:void 0,ua:void 0,timer:void 0,waitLogin:!1,dialogVisible:!0});const o=async()=>{try{const e=(await T.get("info").json()).data;a.marginCount=e.marginCount,a.allowAdd=e.allowAdd}catch(e){console.error(e)}},t=async()=>{try{const e=await T.get("qrcode").json();a.token=e.data.token,a.okl_token=e.data.okl_token,a.cookies=e.data.cookies,a.QRCode=e.data.QRCode,a.ua=e.data.ua,a.QRCode&&(a.waitLogin=!0,clearInterval(a.timer),a.timer=setInterval(s,3e3))}catch(e){console.error(e),V.error("生成二维码失败！请重试或放弃")}},s=async()=>{try{const o=await function(e){return T.post("check",{json:e}).json()}({token:a.token,okl_token:a.okl_token,cookies:a.cookies,ua:a.ua});switch(null==o?void 0:o.data.errcode){case 0:localStorage.setItem("eid",o.data.eid),V.success(o.message),clearInterval(a.timer),e.push("/");break;case 176:break;default:V.error(o.message),a.waitLogin=!1,clearInterval(a.timer)}}catch(o){clearInterval(a.timer),a.waitLogin=!1}};return y((()=>{o(),t()})),l(c({},w(a)),{getInfo:o,getQrcode:t,showQrcode:async()=>{a.qrCodeVisibility=!0},ckeckLogin:s,jumpLogin:async()=>{const e=`openapp.jdmobile://virtual/ad?params={"category":"jump","des":"ThirdPartyLogin","action":"to","onekeylogin":"return","url":"https://plogin.m.jd.com/cgi-bin/m/tmauth?appid=300&client_type=m&token=${a.token}","authlogin_returnurl":"weixin://","browserlogin_fromurl":"${window.location.host}"}`;window.location.href=e},CKLogin:async()=>{try{const e=a.cookie.match(/pt_key=(.*?);/)&&a.cookie.match(/pt_key=(.*?);/)[1],o=a.cookie.match(/pt_pin=(.*?);/)&&a.cookie.match(/pt_pin=(.*?);/)[1];if(e&&o){const a=await function(e){return T.post("cklogin",{json:e}).json()}({pt_key:e,pt_pin:o});200===a.code&&a.data.eid?(localStorage.setItem("eid",a.data.eid),V.success(a.message)):V.error(a.message||"cookie 解析失败，请检查后重试！")}else V.error("cookie 解析失败，请检查后重试！")}catch(e){console.error(e)}}})}},ge={class:"content"},ke={class:"card"},fe={class:"card-header"},ye={class:"flex items-center justify-between"},ve=g("p",{class:"card-title"},"扫码登录",-1),he={class:"ml-2 px-2 py-1 bg-gray-200 rounded-full font-normal text-xs"},be=g("span",{class:"card-subtitle"},[A(" 请点击下方按钮登录，点击按钮后回到本网站查看是否登录成功，京东的升级提示不用管。 "),g("br"),A(" 小程序无法使用跳转登录，请使用浏览器打开。 ")],-1),we={class:"card-body text-center"},je={key:0,class:"flex flex-col w-48 m-auto mt-4"},Pe=A("扫描二维码登录"),Ce=A("跳转到京东 App 登录"),_e=g("div",{class:"card-footer"},null,-1),Ve={class:"card hidden"},xe={class:"card-header"},Ae={class:"flex items-center justify-between"},Ie=g("p",{class:"card-title"},"CK 登录",-1),Le={class:"ml-2 px-2 py-1 bg-gray-200 rounded-full font-normal text-xs"},Se=g("span",{class:"card-subtitle"}," 请在下方输入您的 cookie 登录。 ",-1),Ue={class:"card-body text-center"},Ne=A("登录"),Oe=g("div",{class:"card-footet"},null,-1),Re=g("div",{class:"text-base leading-6"},[g("p",null,"扫码有风险，代挂需谨慎，付费代挂都是坑比。"),g("p",{class:"pt-2"},[A(" Ninja 是一个开源项目，目前仅在"),g("a",{href:"https://github.com/MoonBegonia/ninja",target:"_blank"}," Github "),A("和"),g("a",{href:"https://t.me/joinchat/sHKuteb_lfdjNmZl",target:"_blank"}," TG 频道 "),A("分发和更新。如果喜欢可以去点个 Star。 ")])],-1),Qe={class:"dialog-footer"},De=A("我已知晓");pe.render=function(e,a,o,t,s,r){const n=p("el-button"),c=p("el-input"),l=p("el-dialog");return u(),m("div",ge,[g("div",ke,[g("div",fe,[g("div",ye,[ve,g("span",he,"余量："+v(e.marginCount),1)]),be]),g("div",we,[e.qrCodeVisibility?(u(),m("img",{key:1,src:e.QRCode,width:256,class:"m-auto"},null,8,["src"])):(u(),m("div",je,[g(n,{type:"primary",round:"",onClick:t.showQrcode},{default:j((()=>[Pe])),_:1},8,["onClick"]),g(n,{class:"mt-4 ml-0",type:"primary",round:"",onClick:t.jumpLogin},{default:j((()=>[Ce])),_:1},8,["onClick"])]))]),_e]),g("div",Ve,[g("div",xe,[g("div",Ae,[Ie,g("span",Le,"余量："+v(e.marginCount),1)]),Se]),g("div",Ue,[g(c,{modelValue:e.cookie,"onUpdate:modelValue":a[1]||(a[1]=a=>e.cookie=a),size:"small",clearable:"",class:"my-4 w-full"},null,8,["modelValue"]),g(n,{type:"primary",size:"small",round:"",onClick:t.CKLogin},{default:j((()=>[Ne])),_:1},8,["onClick"])]),Oe]),g(l,{title:"Ninja 提醒您",modelValue:e.dialogVisible,"onUpdate:modelValue":a[3]||(a[3]=a=>e.dialogVisible=a),center:"","destroy-on-close":"","custom-class":"notice-dialog",top:"25vh"},{footer:j((()=>[g("span",Qe,[g(n,{type:"primary",round:"",onClick:a[2]||(a[2]=a=>e.dialogVisible=!1)},{default:j((()=>[De])),_:1})])])),default:j((()=>[Re])),_:1},8,["modelValue"])])};const ze=[{path:"/",component:W},{path:"/login",component:pe}],qe=I({history:L(),routes:ze}),$e=[U,N,V,O],Be=[V],Ee=S(J);$e.forEach((e=>{Ee.component(e.name,e)})),Be.forEach((e=>{Ee.use(e)})),Ee.use(qe),Ee.mount("#app");
