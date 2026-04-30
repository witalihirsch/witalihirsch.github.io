import{t as e}from"./rolldown-runtime.Cn0fvqDa.mjs";import{C as t,E as n,F as r,L as i,c as a,j as o,k as s,l as c,o as l,s as u,v as d}from"./react.CkbBTWya.mjs";import{F as f,I as p,V as m,t as h}from"./motion.RItxFrjs.mjs";import{V as g,r as _,v,w as y}from"./framer.D5zf1qBy.mjs";function b({text:e,color:t,font:r,transform:l,balance:d,userSelect:h,tag:g,style:_,range:y,smoothing:b,boldness:w}){let T=C(),E=v.current()===v.canvas,D=`${T}-span`,O=g,k=r?.textAlign||`center`,A={damping:100,stiffness:x(b,0,100,2e3,50)},j=b!==0,M=f(0),N=f(0),P=m(M,A),F=m(N,A),I=n([]),L=n(!1),R=n([]);o(()=>{let e=e=>{M.set(e.clientX),N.set(e.clientY),L.current||=(P.jump(e.clientX),F.jump(e.clientY),!0)};return i.addEventListener(`mousemove`,e),()=>i.removeEventListener(`mousemove`,e)},[]);let z=s(()=>{let t=e.split(`
`),n=[];for(let e=0;e<t.length;e++){let r=t[e].split(/[ \t]+/);n.push(r)}return n},[e]),B=0,V=(e,t)=>t.map((n,r)=>c(u,{children:[a(`span`,{className:`${T}-word-wrapper`,children:n.split(``).map((t,n)=>{let i=B;return B++,a(`span`,{ref:e=>{e&&(I.current[i]=e)},className:D,children:t},`${e}-${r}-${n}`)})},`${e}-${r}`),r<t.length-1&&` `]})),H=(e,t)=>{let n=0,r=[],i=0,a=new Map,o=new Map,s=[],c=-1;for(let l=0;l<I.current.length;l++){let u=I.current[l];if(!u)continue;let d=u.getBoundingClientRect(),f=d.left+d.width/2,p=d.top+d.height/2,m=S(x(Math.sqrt((f-e)**2+(p-t)**2),y/2,0,0,1)),h=d.y+d.height/2;if(Math.abs(h-i)>2&&(c++,c>0&&(s[c-1]=n),n=0),i=h,a.set(u,c),m<=0)u.style[`-webkit-text-stroke-width`]=``,r[l]=n;else{let e=x(m,0,1,1,x(w,0,1,1,1.285)),t=x(m,0,1,1,x(w,0,1,1,.928)),i=x(m,0,1,0,w/10),a=R.current[l]*(e-1)/2;o.set(u,[e,t]),n+=a,r[l]=n,n+=a,u.style[`-webkit-text-stroke-width`]=`${i}em`}l===I.current.length-1&&(s[c]=n)}for(let e=0;e<I.current.length;e++){let t=I.current[e];if(!t)continue;let n=o.get(t),i=n?`scale(${n[0]}, ${n[1]})`:``,c=r[e],l=s[a.get(t)||0],u=c;switch(k){case`center`:u-=l/2;break;case`right`:u-=l;break}let d=Math.abs(u)>.1?`translateX(${u}px)`:``;t.style.transform=d&&i?`${d} ${i}`:d||i}};return p(j?P:M,`change`,e=>{N&&H(e,j?F.get():N.get())}),p(j?F:N,`change`,e=>{M&&H(j?P.get():M.get(),e)}),o(()=>{E||I.current.forEach((e,t)=>{e&&(R.current[t]=e.getBoundingClientRect().width)})},[E,e,r]),c(O,{style:{position:`relative`,cursor:`default`,margin:0,whiteSpace:_?.width?`pre`:`nowrap`,fontWeight:400,textAlign:k,userSelect:h?`auto`:`none`,textWrap:d?`balance`:void 0,textTransform:l,color:t,...r,..._},children:[a(`style`,{children:`
	.${T}-line {
		width: 100%;
		display: block;
		transform-style: preserve-3d;
	}
	.${T}-word-wrapper {
		display: inline-block;
		transform-style: preserve-3d;
		white-space: pre;
	}
	.${T}-span {
		display: inline-block;
		transform-style: preserve-3d;
		white-space: pre;
		will-change: transform, -webkit-text-stroke-width, padding-inline;
		transform-origin: 50% 50%};
		-webkit-text-stroke-color: currentColor;
	}
`}),z.length===1?V(0,z[0]):z.map((e,t)=>a(`span`,{className:`${T}-line`,children:V(t,e)},t))]})}function x(e,t,n,r,i){return t===n?r:r+(e-t)/(n-t)*(i-r)}function S(e){return Math.max(0,Math.min(e,1))}var C,w=e((()=>{r(),l(),h(),t(),g(),b.displayName=`Text Magnifier`,y(b,{text:{type:_.String,defaultValue:`Learn Framer With Framer University`,displayTextArea:!0},range:{type:_.Number,defaultValue:200},smoothing:{type:_.Number,defaultValue:50,min:0,max:100,step:1},boldness:{type:_.Number,defaultValue:.7,min:0,max:1,step:.1},font:{type:`font`,controls:`extended`,defaultFontType:`sans-serif`,defaultValue:{fontSize:32,lineHeight:1.2}},color:{type:_.Color,defaultValue:`#999999`},transform:{type:_.Enum,defaultValue:`none`,options:[`none`,`uppercase`,`lowercase`],optionTitles:[`None`,`Uppercase`,`Lowercase`]},balance:{type:_.Boolean,defaultValue:!1},userSelect:{type:_.Boolean,defaultValue:!1},tag:{type:_.Enum,defaultValue:`p`,displaySegmentedControl:!0,options:[`h1`,`h2`,`h3`,`p`],optionTitles:[`H1`,`H2`,`H3`,`P`],description:`More components at [Framer University](https://frameruni.link/cc).`}}),C=()=>`frameruni-${d().replace(/:/g,``)}`}));export{w as n,b as t};
//# sourceMappingURL=TextMagnifier_Prod.7sPX9i4E.mjs.map