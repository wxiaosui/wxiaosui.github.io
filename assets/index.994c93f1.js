import{_ as b}from"./index.ce6afe3b.js";import{o as r,f as l,g,h as C,F as $,j as w,n as E,k as M,l as G,m as y,u as h,r as S,c as T,w as k,p as j,q as A,s as N,t as X,v as z,x as P,y as L,z as H,A as O,B as R,C as U,E as W,D as B,G as q}from"./vendor.a0fca97d.js";const J={},K={class:"container"},Q={class:"workspacr"},Z={class:"sidebar"};function ee(t,s){return r(),l("div",K,[g("div",Q,[C(t.$slots,"workspace",{},void 0,!0)]),g("div",Z,[C(t.$slots,"sidebar",{},void 0,!0)])])}var te=b(J,[["render",ee],["__scopeId","data-v-22c128f7"]]);const oe={name:"FlowGrid",props:{spaceSize:{type:Number,default:5e3},gridSize:{type:Number,default:20},visibility:{type:String,default:"visible"}},data(){return{}},computed:{gridTicks:function(){const t=[];for(let s=0;s<this.spaceSize;s+=+this.gridSize)t.push(s);return t}}},se=["x2","y1","y2"],ne=["x1","x2","y2"];function ae(t,s,i,f,p,n){return r(),l("g",{class:"grid",style:E({visibility:i.visibility})},[(r(!0),l($,null,w(n.gridTicks,o=>(r(),l("line",{key:`flow-grid-horizontal-${o}`,class:"horizontal",x1:"0",x2:i.spaceSize,y1:o,y2:o,fill:"node","shape-rendering":"crispEdges",stroke:"#eee","stroke-width":"1px"},null,8,se))),128)),(r(!0),l($,null,w(n.gridTicks,o=>(r(),l("line",{key:`flow-grid-vertical-${o}`,class:"vertical",x1:o,x2:o,y1:"0",y2:i.spaceSize,fill:"node","shape-rendering":"crispEdges",stroke:"#eee","stroke-width":"1px"},null,8,ne))),128))],4)}var re=b(oe,[["render",ae]]);const ce=["id","cx","cy"],le={props:{activeItem:Array},emits:["boxstart","boxmove","boxend"],setup(t,{emit:s}){M(()=>{});const i=function(n){s("boxstart",n),n.stopPropagation()},f=function(n){s("boxmove",n),n.preventDefault(),n.stopPropagation()},p=function(n){s("boxend",n),n.stopPropagation()};return(n,o)=>(r(),l("g",null,[(r(!0),l($,null,w(t.activeItem,(a,d)=>(r(),l("circle",{key:a.id,id:a.id,cx:a.x,cy:a.y,r:"10",class:"port",onTouchstart:i,onTouchmove:f,onTouchend:p},null,40,ce))),128))]))}};var ie=b(le,[["__scopeId","data-v-4c0d7a60"]]);const de=["transform"],ue=["x1","y1","x2","y2","id","transform"],_e={props:{group:Array,scale:Number},setup(t){const s=t,i=G(()=>{let a=s.group.filter(d=>d.checked)[0];return a?{arr:[{x:a.x1,y:a.y1,id:"l"},{x:a.x2,y:a.y2,id:"r"}],trs:{x:a.x,y:a.y}}:{arr:[],trs:{x:0,y:0}}}),f=function(a){a.stopPropagation()},p=function(a){},n=function(a){let d=s.group.filter(x=>x.checked),e=a.touches[0],m=a.target.id;d&&(m==="r"?(d[0].x2=e.pageX-e.pageX*(s.scale-1)-d[0].x,d[0].y2=e.pageY-e.pageY*(s.scale-1)-35-d[0].y):m==="l"&&(d[0].x1=e.pageX-e.pageX*(s.scale-1)-d[0].x,d[0].y1=e.pageY-e.pageY*(s.scale-1)-35-d[0].y))},o=function(a){};return(a,d)=>(r(),l("g",null,[(r(!0),l($,null,w(t.group,(e,m)=>(r(),l("g",{key:e.id,transform:`translate(${e.x},${e.y})`},[g("line",{stroke:"#000000",class:"line","stroke-dasharray":"null","stroke-linejoin":"null","stroke-linecap":"null",x1:e.x1,y1:e.y1,x2:e.x2,y2:e.y2,id:e.id,"fill-opacity":"0.5","stroke-opacity":"1",transform:`rotate(${e.rotate})`,onClick:f},null,8,ue)],8,de))),128)),y(ie,{activeItem:h(i).arr,transform:`translate(${h(i).trs.x},${h(i).trs.y})`,onBoxstart:p,onBoxmove:n,onBoxend:o},null,8,["activeItem","transform"])]))}};var pe=b(_e,[["__scopeId","data-v-64d728c6"]]);const fe=t=>(A("data-v-5df152c5"),t=t(),N(),t),ve={class:"edit-header"},he={class:"header-l"},ye=fe(()=>g("div",{class:"divider"},null,-1)),ge={class:"header-r"},xe=X("\u4FDD\u5B58"),me={props:{itemGroups:{type:Array,default:function(){return[{name:"edit",items:[{label:"\u5220\u9664",name:"delete"}]}]}},actives:{type:Object,default:function(){return{copy:!1,paste:!1,delete:!1,addGroup:!1,ungroup:!1}}}},emits:["tarbar-action","submit"],setup(t,{emit:s}){const i=t;function f(o){return!i.actives[o]}const p=function(o){s("tarbar-action",o)},n=function(){s("submit")};return(o,a)=>{const d=S("el-icon"),e=S("el-button"),m=S("el-tooltip");return r(),l("div",ve,[g("div",he,[(r(!0),l($,null,w(t.itemGroups,x=>(r(),l("div",{key:x.name,class:"group"},[(r(!0),l($,null,w(x.items,I=>(r(),T(m,{key:I.name,class:"item",effect:"dark",content:I.label,placement:"bottom"},{default:k(()=>[y(e,{disabled:f(I.name),class:"command",onClick:D=>p(I.name)},{default:k(()=>[y(d,null,{default:k(()=>[(r(),T(j(I.name)))]),_:2},1024)]),_:2},1032,["disabled","onClick"])]),_:2},1032,["content"]))),128)),ye]))),128))]),g("div",ge,[y(e,{onClick:n},{default:k(()=>[xe]),_:1})])])}}};var be=b(me,[["__scopeId","data-v-5df152c5"]]);const ke=["id"],$e={props:{data:{type:Object,default:{id:0,style:"",name:""}}},emits:["addsopes"],setup(t,{emit:s}){const i=t,f=function(){s("addsopes")},p=function(o){o.dataTransfer.setData("node_id",i.data.id),o.dataTransfer.setData("node_touch_x",o.offsetX),o.dataTransfer.setData("node_touch_y",o.offsetY)},n=function(o){o.dataTransfer.clearData()};return(o,a)=>(r(),l("div",{class:"sopes",id:t.data.id,style:E(t.data.style),draggable:"true",onDragstart:p,onDragend:n,onTouchend:f},"line",44,ke))}};var we=b($e,[["__scopeId","data-v-3cdb6247"]]);const Ie=t=>(A("data-v-0bfbe0c5"),t=t(),N(),t),Se={class:"work-space"},ze=["width","height"],Te=["transform"],De=["width","height"],Ce=Ie(()=>g("div",null," edit ",-1)),Be={class:"footer-buttons"},Ee=X(" \xA0 "),Ge={props:{group:Array},setup(t){const s=t,i=z(1e3),f=z(1e3),p=z(20),n=z(1),o=P({delete:!1}),a=z(null),d=L(),e=s.group,m=function(u){console.log(u),e.push({x1:300,y1:300,x2:400,y2:300,x:0,y:0,id:`svg_${e.length+1}`,rotate:0,checked:!1})};let x={};const I=function(u){let c=u.touches[0];x={x:c.clientX,y:c.clientY};let _=e.filter(v=>v.checked);_.length>=1&&(x.ox=_[0].x,x.oy=_[0].y),u.stopPropagation()};function D(u){if(u==="delete"){let c=e.findIndex(_=>_.checked);c!=-1&&W.confirm("\u786E\u8BA4\u5220\u9664\u6B64\u8282\u70B9?","Warning",{confirmButtonText:"\u786E\u8BA4",cancelButtonText:"\u53D6\u6D88",type:"warning"}).then(()=>{e.splice(c,1),o.delete=!1,B({type:"success",message:"\u5220\u9664\u6210\u529F"})}).catch(()=>{B({type:"info",message:"\u5DF2\u53D6\u6D88"})})}}const Y=function(u){u.stopPropagation();let c=e.filter(v=>v.checked),_=u.touches[0];c.length>=1&&(u.preventDefault(),c[0].x=_.clientX-x.x+x.ox,c[0].y=_.clientY-x.y+x.oy)},V=function(u){let c=u.target.id,_=u.target.localName;c?_==="line"&&e.forEach(v=>{v.id!==c?v.checked=!1:(v.checked=!0,o.delete=!0)}):e.forEach(v=>{v.checked=!1,o.delete=!1}),u.stopPropagation()},F=function(){let u=a.value,c=new XMLSerializer,_=`<?xml version="1.0" standalone="no"?>\r
`+c.serializeToString(u);const v="data:image/svg+xml;charset=utf-8,"+encodeURIComponent(_);d.push({name:"sampeol",params:{src:v}})};return(u,c)=>{const _=S("el-button");return r(),l("div",Se,[y(h(be),{actives:h(o),onTarbarAction:D,onSubmit:F},null,8,["actives"]),g("div",{class:"cart",onDrop:m,onDragover:c[0]||(c[0]=H(()=>{},["prevent"]))},[(r(),l("svg",{ref_key:"svgContent",ref:a,width:i.value,height:f.value,"pointer-events":"all",style:{cursor:"crosshair"}},[g("g",null,[g("g",{transform:`scale(${n.value})`,onTouchstart:I,onTouchmove:Y,onTouchend:V},[g("rect",{class:"outer_background",width:i.value,height:f.value,fill:"#fff"},null,8,De),y(h(re),{spaceSize:i.value,gridSize:p.value},null,8,["spaceSize","gridSize"]),y(h(pe),{scale:n.value,group:h(e)},null,8,["scale","group"])],40,Te)])],8,ze))],32),g("footer",null,[Ce,g("div",Be,[y(_,{icon:h(O),onClick:c[1]||(c[1]=v=>n.value-=.1)},null,8,["icon"]),y(_,{icon:h(R),onClick:c[2]||(c[2]=v=>n.value=1)},null,8,["icon"]),y(_,{icon:h(U),onClick:c[3]||(c[3]=v=>n.value+=.1)},null,8,["icon"]),Ee])])])}}};var Ae=b(Ge,[["__scopeId","data-v-0bfbe0c5"]]);const Ne={class:"scroll"},Xe={props:{filterGroups:{type:Array,default:[{id:1,title:"\u56FE\u5E93",nodes:[{id:1,name:"line"}]}]}},emits:["updatesopes"],setup(t,{emit:s}){const i=t,f=function(){s("updatesopes")},p=G(()=>i.filterGroups.map(n=>n.id));return(n,o)=>{const a=S("el-collapse-item"),d=S("el-collapse");return r(),l("div",Ne,[y(d,{modelValue:h(p),"onUpdate:modelValue":o[0]||(o[0]=e=>q(p)?p.value=e:null)},{default:k(()=>[(r(!0),l($,null,w(t.filterGroups,e=>(r(),T(a,{key:e.id,title:e.title,name:e.id},{default:k(()=>[(r(!0),l($,null,w(e.nodes,m=>(r(),T(h(we),{onAddsopes:f,key:m.id,data:m},null,8,["data"]))),128))]),_:2},1032,["title","name"]))),128))]),_:1},8,["modelValue"])])}}};var Pe=b(Xe,[["__scopeId","data-v-75a290dc"]]);const Ye={class:"edit"},Ve={setup(t){const s=P([]),i=function(){s.push({x1:300,y1:300,x2:400,y2:300,x:0,y:0,id:`svg_${s.length+1}`,rotate:0,checked:!1}),console.log(s)};return(f,p)=>(r(),l("div",Ye,[y(te,null,{workspace:k(()=>[y(Ae,{group:h(s)},null,8,["group"])]),sidebar:k(()=>[y(Pe,{onUpdatesopes:i})]),_:1})]))}};var je=b(Ve,[["__scopeId","data-v-222fcb5a"]]);export{je as default};
