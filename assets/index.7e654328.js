import{_ as k}from"./index.83ee884b.js";import{o as n,f as i,g as h,h as B,F as I,j as z,n as G,k as N,l as A,m as y,u as m,r as T,c as D,w,p as O,q as V,s as P,t as X,v as S,x as Y,y as R,z as W,A as q,B as J,C as K,D as Q,E as Z,G as E,H as ee}from"./vendor.bae2ac2b.js";const te={},oe={class:"container"},se={class:"workspacr"},ne={class:"sidebar"};function ae(e,a){return n(),i("div",oe,[h("div",se,[B(e.$slots,"workspace",{},void 0,!0)]),h("div",ne,[B(e.$slots,"sidebar",{},void 0,!0)])])}var re=k(te,[["render",ae],["__scopeId","data-v-22c128f7"]]);const le={name:"FlowGrid",props:{spaceSize:{type:Number,default:5e3},gridSize:{type:Number,default:20},visibility:{type:String,default:"visible"}},data(){return{}},computed:{gridTicks:function(){const e=[];for(let a=0;a<this.spaceSize;a+=+this.gridSize)e.push(a);return e}}},ce=["x2","y1","y2"],ie=["x1","x2","y2"];function de(e,a,d,x,u,o){return n(),i("g",{class:"grid",style:G({visibility:d.visibility})},[(n(!0),i(I,null,z(o.gridTicks,t=>(n(),i("line",{key:`flow-grid-horizontal-${t}`,class:"horizontal",x1:"0",x2:d.spaceSize,y1:t,y2:t,fill:"node","shape-rendering":"crispEdges",stroke:"#eee","stroke-width":"1px"},null,8,ce))),128)),(n(!0),i(I,null,z(o.gridTicks,t=>(n(),i("line",{key:`flow-grid-vertical-${t}`,class:"vertical",x1:t,x2:t,y1:"0",y2:d.spaceSize,fill:"node","shape-rendering":"crispEdges",stroke:"#eee","stroke-width":"1px"},null,8,ie))),128))],4)}var ue=k(le,[["render",de]]);const _e=["id","cx","cy"],pe={props:{activeItem:Array},emits:["boxstart","boxmove","boxend"],setup(e,{emit:a}){N(()=>{});const d=function(o){a("boxstart",o),o.stopPropagation()},x=function(o){a("boxmove",o),o.preventDefault(),o.stopPropagation()},u=function(o){a("boxend",o),o.stopPropagation()};return(o,t)=>(n(),i("g",null,[(n(!0),i(I,null,z(e.activeItem,(f,l)=>(n(),i("circle",{key:f.id,id:f.id,cx:f.x,cy:f.y,r:"10",class:"port",onTouchstart:d,onTouchmove:x,onTouchend:u},null,40,_e))),128))]))}};var fe=k(pe,[["__scopeId","data-v-4c0d7a60"]]);const ve=["transform"],he=["x1","y1","x2","y2","id","transform"],ye={props:{group:Array,scale:Number},setup(e){const a=e,d=A(()=>{let l=a.group.filter(s=>s.checked)[0];return l?{arr:[{x:l.x1,y:l.y1,id:"l"},{x:l.x2,y:l.y2,id:"r"}],trs:{x:l.x,y:l.y}}:{arr:[],trs:{x:0,y:0}}}),x=function(l){l.stopPropagation()};let u={};const o=function(l){let s=document.getElementsByClassName("cart")[0];u.x=s.scrollLeft,u.y=s.scrollTop,a.group.filter(_=>_.checked);let c=l.touches[0];c.clientX,c.clientY},t=function(l){let s=a.group.filter(b=>b.checked),c=l.touches[0],_=l.target.id;s&&(_==="r"?(s[0].x2=c.pageX-s[0].x+u.x,s[0].y2=c.pageY-35-s[0].y+u.y):_==="l"&&(s[0].x1=c.pageX-s[0].x+u.x,s[0].y1=c.pageY-35-s[0].y+u.y))},f=function(l){};return(l,s)=>(n(),i("g",null,[(n(!0),i(I,null,z(e.group,(c,_)=>(n(),i("g",{key:c.id,transform:`translate(${c.x},${c.y})`},[h("line",{stroke:"#000000",class:"line","stroke-dasharray":"null","stroke-linejoin":"null","stroke-linecap":"null",x1:c.x1,y1:c.y1,x2:c.x2,y2:c.y2,id:c.id,"fill-opacity":"0.5","stroke-opacity":"1",transform:`rotate(${c.rotate})`,onClick:x},null,8,he)],8,ve))),128)),y(fe,{activeItem:m(d).arr,transform:`translate(${m(d).trs.x},${m(d).trs.y})`,onBoxstart:o,onBoxmove:t,onBoxend:f},null,8,["activeItem","transform"])]))}};var xe=k(ye,[["__scopeId","data-v-870abaea"]]);const ge=e=>(V("data-v-5df152c5"),e=e(),P(),e),me={class:"edit-header"},be={class:"header-l"},ke=ge(()=>h("div",{class:"divider"},null,-1)),$e={class:"header-r"},we=X("\u4FDD\u5B58"),Ie={props:{itemGroups:{type:Array,default:function(){return[{name:"edit",items:[{label:"\u5220\u9664",name:"delete"}]}]}},actives:{type:Object,default:function(){return{copy:!1,paste:!1,delete:!1,addGroup:!1,ungroup:!1}}}},emits:["tarbar-action","submit"],setup(e,{emit:a}){const d=e;function x(t){return!d.actives[t]}const u=function(t){a("tarbar-action",t)},o=function(){a("submit")};return(t,f)=>{const l=T("el-icon"),s=T("el-button"),c=T("el-tooltip");return n(),i("div",me,[h("div",be,[(n(!0),i(I,null,z(e.itemGroups,_=>(n(),i("div",{key:_.name,class:"group"},[(n(!0),i(I,null,z(_.items,b=>(n(),D(c,{key:b.name,class:"item",effect:"dark",content:b.label,placement:"bottom"},{default:w(()=>[y(s,{disabled:x(b.name),class:"command",onClick:$=>u(b.name)},{default:w(()=>[y(l,null,{default:w(()=>[(n(),D(O(b.name)))]),_:2},1024)]),_:2},1032,["disabled","onClick"])]),_:2},1032,["content"]))),128)),ke]))),128))]),h("div",$e,[y(s,{onClick:o},{default:w(()=>[we]),_:1})])])}}};var ze=k(Ie,[["__scopeId","data-v-5df152c5"]]);const Se=["id"],Te={props:{data:{type:Object,default:{id:0,style:"",name:""}}},emits:["addsopes"],setup(e,{emit:a}){const d=e,x=function(){a("addsopes")},u=function(t){t.dataTransfer.setData("node_id",d.data.id),t.dataTransfer.setData("node_touch_x",t.offsetX),t.dataTransfer.setData("node_touch_y",t.offsetY)},o=function(t){t.dataTransfer.clearData()};return(t,f)=>(n(),i("div",{class:"sopes",id:e.data.id,style:G(e.data.style),draggable:"true",onDragstart:u,onDragend:o,onTouchend:x},"line",44,Se))}};var Ce=k(Te,[["__scopeId","data-v-3cdb6247"]]);const F=e=>(V("data-v-d74509ae"),e=e(),P(),e),De={class:"work-space"},Be=["width","height"],Ee=["transform"],Ge=["width","height"],Ne=F(()=>h("div",null," edit ",-1)),Ae={class:"footer-buttons"},Ve=F(()=>h("span",null,"\u753B\u5E03\u9501\u5B9A",-1)),Pe=X(" \xA0 "),Xe={props:{group:Array},setup(e){const a=e,d=S(1e3),x=S(1e3),u=S(20),o=S(1),t=S(!0),f=Y({delete:!1});N(()=>{});const l=S(null),s=S(null),c=R(),_=a.group,b=function(p){console.log(p),_.push({x1:300,y1:300,x2:400,y2:300,x:0,y:0,id:`svg_${_.length+1}`,rotate:0,checked:!1})};let $={};const H=function(p){let r=p.touches[0];$={x:r.clientX,y:r.clientY};let g=_.filter(v=>v.checked);g.length>=1&&($.ox=g[0].x,$.oy=g[0].y),p.stopPropagation()};function L(p){if(p==="delete"){let r=_.findIndex(g=>g.checked);r!=-1&&Z.confirm("\u786E\u8BA4\u5220\u9664\u6B64\u8282\u70B9?","Warning",{confirmButtonText:"\u786E\u8BA4",cancelButtonText:"\u53D6\u6D88",type:"warning"}).then(()=>{_.splice(r,1),f.delete=!1,E({type:"success",message:"\u5220\u9664\u6210\u529F"})}).catch(()=>{E({type:"info",message:"\u5DF2\u53D6\u6D88"})})}}const M=function(p){p.stopPropagation();let r=_.filter(v=>v.checked),g=p.touches[0];r.length>=1&&(p.preventDefault(),r[0].x=g.clientX-$.x+$.ox,r[0].y=g.clientY-$.y+$.oy)},j=function(p){let r=p.target.id,g=p.target.localName;r?g==="line"&&_.forEach(v=>{v.id!==r?v.checked=!1:(v.checked=!0,f.delete=!0)}):_.forEach(v=>{v.checked=!1,f.delete=!1}),p.stopPropagation()},U=function(){let p=l.value,r=new XMLSerializer,g=`<?xml version="1.0" standalone="no"?>\r
`+r.serializeToString(p);const v="data:image/svg+xml;charset=utf-8,"+encodeURIComponent(g);c.push({name:"sampeol",params:{src:v}})};return(p,r)=>{const g=T("el-switch"),v=T("el-button");return n(),i("div",De,[y(m(ze),{actives:m(f),onTarbarAction:L,onSubmit:U},null,8,["actives"]),h("div",{class:W([t.value?"cart-hidden":"cart-auto","cart"]),onDrop:b,onDragover:r[0]||(r[0]=q(()=>{},["prevent"]))},[h("div",{id:"svg-box",ref_key:"svgBox",ref:s},[(n(),i("svg",{ref_key:"svgContent",ref:l,width:d.value,height:x.value,"pointer-events":"all",style:{cursor:"crosshair"}},[h("g",null,[h("g",{transform:`scale(${o.value})`,onTouchstart:H,onTouchmove:M,onTouchend:j},[h("rect",{class:"outer_background",width:d.value,height:x.value,fill:"#fff"},null,8,Ge),y(m(ue),{spaceSize:d.value,gridSize:u.value},null,8,["spaceSize","gridSize"]),y(m(xe),{scale:o.value,group:m(_)},null,8,["scale","group"])],40,Ee)])],8,Be))],512)],34),h("footer",null,[Ne,h("div",Ae,[Ve,y(g,{modelValue:t.value,"onUpdate:modelValue":r[1]||(r[1]=C=>t.value=C),class:"cart-switch","inline-prompt":"","active-text":"\u5F00","inactive-text":"\u5173"},null,8,["modelValue"]),y(v,{icon:m(J),onClick:r[2]||(r[2]=C=>o.value-=.1)},null,8,["icon"]),y(v,{icon:m(K),onClick:r[3]||(r[3]=C=>o.value=1)},null,8,["icon"]),y(v,{icon:m(Q),onClick:r[4]||(r[4]=C=>o.value+=.1)},null,8,["icon"]),Pe])])])}}};var Ye=k(Xe,[["__scopeId","data-v-d74509ae"]]);const Fe={class:"scroll"},He={props:{filterGroups:{type:Array,default:[{id:1,title:"\u56FE\u5E93",nodes:[{id:1,name:"line"}]}]}},emits:["updatesopes"],setup(e,{emit:a}){const d=e,x=function(){a("updatesopes")},u=A(()=>d.filterGroups.map(o=>o.id));return(o,t)=>{const f=T("el-collapse-item"),l=T("el-collapse");return n(),i("div",Fe,[y(l,{modelValue:m(u),"onUpdate:modelValue":t[0]||(t[0]=s=>ee(u)?u.value=s:null)},{default:w(()=>[(n(!0),i(I,null,z(e.filterGroups,s=>(n(),D(f,{key:s.id,title:s.title,name:s.id},{default:w(()=>[(n(!0),i(I,null,z(s.nodes,c=>(n(),D(m(Ce),{onAddsopes:x,key:c.id,data:c},null,8,["data"]))),128))]),_:2},1032,["title","name"]))),128))]),_:1},8,["modelValue"])])}}};var Le=k(He,[["__scopeId","data-v-75a290dc"]]);const Me={class:"edit"},je={setup(e){const a=Y([]),d=function(){a.push({x1:300,y1:100,x2:400,y2:100,x:0,y:0,id:`svg_${a.length+1}`,rotate:0,checked:!1})};return(x,u)=>(n(),i("div",Me,[y(re,null,{workspace:w(()=>[y(Ye,{group:m(a)},null,8,["group"])]),sidebar:w(()=>[y(Le,{onUpdatesopes:d})]),_:1})]))}};var Re=k(je,[["__scopeId","data-v-60739d9a"]]);export{Re as default};
