import{r as u,d,o as c,c as m,b as p,w as _,e as i,t as y,p as b,F as w}from"./index.19f23562.js";const x={key:0},C=i("i",{class:"fal fa-plus"},null,-1),L={class:"ant-upload-text"},N=["src"],V={__name:"UploadImage",props:{imageList:{type:Array,default:()=>[]},title:{type:String},limit:{type:Number,default:()=>1}},emits:["update:imageList"],setup(l,{emit:g}){const o=u(!1),r=u(""),v=async e=>{r.value=e.url||e.thumbUrl,o.value=!0},f=({fileList:e})=>{const t=[...e].map(a=>{const{response:s=null,...n}=a;if(s){const{ossUrl:h}=s.data||{};return{...n,url:h}}else return a});g("update:imageList",t)};return(e,t)=>{const a=d("a-upload"),s=d("a-modal");return c(),m(w,null,[p(a,{"list-type":"picture-card",onChange:f,onPreview:v,"before-upload":!0},{default:_(()=>[l.imageList.length<l.limit?(c(),m("div",x,[C,i("div",L,y(l.title),1)])):b("",!0)]),_:1}),p(s,{centered:"",visible:o.value,"onUpdate:visible":t[0]||(t[0]=n=>o.value=n),closable:!1,footer:null,bodyStyle:{padding:0}},{default:_(()=>[i("img",{alt:"example",style:{width:"100%"},src:r.value},null,8,N)]),_:1},8,["visible"])],64)}}};export{V as _};