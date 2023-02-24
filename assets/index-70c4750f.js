(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))n(l);new MutationObserver(l=>{for(const r of l)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function i(l){const r={};return l.integrity&&(r.integrity=l.integrity),l.referrerPolicy&&(r.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?r.credentials="include":l.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(l){if(l.ep)return;l.ep=!0;const r=i(l);fetch(l.href,r)}})();const m=JSON.parse(localStorage.getItem("notes")||"[]"),I=document.querySelector(".editordate");document.querySelector(".delete");console.log(I);var u;const o=document.getElementById("title"),s=document.getElementById("desc");o.addEventListener("input",t=>{o.style.height="6rem";let e=o.scrollHeight;o.style.height=`${e}px`});s.addEventListener("input",t=>{s.style.height="60%";let e=s.scrollHeight;s.style.height=`${e}px`});const k=document.querySelector(".addbtn"),T=document.querySelector(".back"),d=document.querySelector(".editor"),y=document.querySelector(".home");document.querySelectorAll(".grid-item");const E=document.querySelector(".helper");let q="bg-red-300",c="text-red-300";k.addEventListener("click",()=>{o.style.height="6rem",s.style.height="60%",o.value="",s.value="",q="bg-red-300",c="text-red-300",o.classList.add(c),s.classList.add(c),f.forEach(t=>{t.classList.remove("active")}),f[0].classList.add("active"),A.innerHTML="save",d.classList.toggle("show"),d.setAttribute("style","height: auto; overflow: auto;"),y.classList.toggle("hide")});T.addEventListener("click",()=>{v=!1;const t=document.querySelector(".editordate"),e=document.querySelector(".delete");setTimeout(()=>{o.className="w-full h-24 text-4xl font-medium pt-6 bg-[#292929] resize-none outline-none"},450),setTimeout(()=>{s.className="w-full h-[60%] text-lg pt-3 bg-[#292929] resize-none outline-none overflow-hidden"},450),t&&setTimeout(()=>{t.remove()},500),e&&setTimeout(()=>{e.remove()},500),d.classList.toggle("show"),d.setAttribute("style","height: 100%; overflow: hidden;"),setTimeout(()=>{y.classList.toggle("hide")},500)});let v=!1,$;window.updatenote=function(t,e,i,n,l,r){let a=i.replaceAll("<br/>",`\r
`).replaceAll("&apos","'").replaceAll("&quot",'"'),b=e.replaceAll("<br/>",`\r
`).replaceAll("&apos","'").replaceAll("&quot",'"');v=!0,$=t,o.value=b,s.value=a,A.innerHTML="edit",o.style.height="6rem",s.style.height="60%",p.value="",M(),o.classList.remove(c),s.classList.remove(c),o.classList.add(l),s.classList.add(l);let x=o.scrollHeight;o.style.height=`${x}px`;let S=s.scrollHeight;s.style.height=`${S}px`;let h=`<button class="delete bg-[#3d3d3d] px-4 py-[11.5px] rounded-xl " onclick="deletenote(${t})"><i class="fa-solid fa-trash text-red-500"></i></button>`;T.insertAdjacentHTML("afterend",h);let O=`<div class="editordate text-neutral-500 text-sm ">${r}</div>`;o.insertAdjacentHTML("afterend",O),d.classList.toggle("show"),d.setAttribute("style","height: auto; overflow: auto;"),y.classList.toggle("hide"),f.forEach(w=>{w.classList.remove("active"),w.getAttribute("data-color")===n&&w.classList.add("active")})};window.deletenote=function(t){m.splice(t,1),localStorage.setItem("notes",JSON.stringify(m));const e=document.querySelector(".editordate"),i=document.querySelector(".delete");e&&setTimeout(()=>{e.remove()},500),i&&setTimeout(()=>{i.remove()},500),d.classList.toggle("show"),setTimeout(()=>{y.classList.toggle("hide")},500),setTimeout(()=>{o.className="w-full h-24 text-4xl font-medium pt-6 bg-[#292929] resize-none outline-none"},450),setTimeout(()=>{s.className="w-full h-[60%] text-lg pt-3 bg-[#292929] resize-none outline-none overflow-hidden"},450),L()};const A=document.querySelector(".save"),f=document.querySelectorAll(".color"),z=["January","February","March","April","May","June","July","August","September","October","November","December"];f.forEach(t=>{t.addEventListener("click",()=>{q=t.getAttribute("data-color"),o.classList.remove(c),s.classList.remove(c),c=t.getAttribute("data-text"),o.classList.add(c),s.classList.add(c),f.forEach(e=>{e.classList.remove("active")}),t.classList.add("active")})});A.addEventListener("click",()=>{const t=document.querySelector(".editordate"),e=document.querySelector(".delete");t&&setTimeout(()=>{t.remove()},500),e&&setTimeout(()=>{e.remove()},500);let i=o.value,n=s.value,l=q,r=c;if(i||n){const a=new Date,b=z[a.getMonth()],x=a.getDate(),S=a.getFullYear(),h={title:i,desc:n,color:l,txtcolor:r,date:`${b} ${x}, ${S}`};console.log(h),v?(v=!1,m[$]=h):m.push(h),localStorage.setItem("notes",JSON.stringify(m)),d.classList.toggle("show"),setTimeout(()=>{y.classList.toggle("hide")},500),setTimeout(()=>{o.className="w-full h-24 text-4xl font-medium pt-6 bg-[#292929] resize-none outline-none"},450),setTimeout(()=>{s.className="w-full h-[60%] text-lg pt-3 bg-[#292929] resize-none outline-none overflow-hidden"},450),L()}});const g=document.querySelector(".grid");function L(){document.querySelectorAll(".grid-item").forEach(e=>e.remove()),m.forEach((e,i)=>{let n=e.desc.replaceAll(`
`,"<br/>").replaceAll("'","&apos").replaceAll('"',"&quot"),l=e.title.replaceAll(`
`,"<br/>").replaceAll("'","&apos").replaceAll('"',"&quot"),r=`<div class="grid-item width ${e.color} rounded-xl p-5 mb-[10px]" onclick="updatenote(${i},'${l}','${n}','${e.color}','${e.txtcolor}','${e.date}')">
                            <div class="title">
                                ${e.title}
                            </div>
                        <div class="date text-neutral-500 text-sm pt-5">${e.date}</div>
                    </div>`;g.insertAdjacentHTML("afterbegin",r)});var t=document.querySelector(".grid");u=new Masonry(t,{itemSelector:".grid-item",gutter:10,columnWidth:".width",percentPosition:!0}),g.childElementCount!==0&&E.classList.add("hidden"),g.childElementCount===0&&E.classList.remove("hidden"),g.clientHeight}L();const N=document.querySelector(".searchbox"),H=document.querySelector(".searchbtn"),p=document.querySelector(".searchinput"),J=g.getElementsByClassName("grid-item");H.addEventListener("click",()=>{N.classList.add("flex-grow-[0.8]"),p.focus()});document.addEventListener("click",t=>{t.target!==H&&t.target!==p&&N.classList.remove("flex-grow-[0.8]")});p.addEventListener("keyup",M);function M(){const t=p.value.toLowerCase();Array.from(J).forEach(e=>{const i=e.querySelector(".title");e.querySelector(".date"),i.innerHTML.toLowerCase().indexOf(t)>-1?(e.style.display="block",u.reloadItems(),u.layout()):(e.style.display="none",u.reloadItems(),u.layout()),t==""&&(L(),e.style.display="block",u.reloadItems(),u.layout())})}
