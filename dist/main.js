(()=>{"use strict";const e=e=>{k(e.parentElement),e.remove()},t=[],n=(e,n,s)=>{const d=e.className.split(" ")[0],a=t.find((e=>e.id===d)),c=a.list,l=c.findIndex((e=>e.text===s));c.splice(l,1),console.log(a)},s=(e,n)=>{let s=e.split(" ")[0];t.push({id:s,name:n,list:[]}),console.log(t)},d=(e,t,n)=>{e.checklist=t,e.text=n,console.log(e)},a=(e,t,n)=>{const s=n.list.find((e=>e.text===t));d(s,e.value,t)},c=e=>{const{btnWrapper:t,task:n,everyChildElements:s,currPage:a}=e,c=document.createElement("button");let l;c.classList.add("btn-edit"),c.textContent="Edit",t.appendChild(c);const o=s[4],r=s[1],p=s[0];c.addEventListener("click",(()=>{l=o.value,0!==l.length&&void 0===a.list.find((e=>e.text===l))?(o.remove(),t.remove(),console.log(p.value),d(a.list.find((e=>e.text===r.textContent)),p.value,l),r.textContent=l,i(s,n)):0===l.length?alert("Enter a name"):alert("Already exist name")}))},l=(e,t,n)=>{const s=document.createElement("button");s.classList.add("btn-cancel"),s.textContent="Cancel",e.appendChild(s);const d=n[4];s.addEventListener("click",(()=>{d.remove(),e.remove(),i(n,t)}))},i=(e,t)=>{t.style.flexDirection="row",e.forEach((e=>{e.style.display="flex"}))},o=(t,n)=>{const s=document.createElement("div");s.classList.add("task"),t.appendChild(s),r(s),p(s,n),m(s),h(s,n),u(t,n,s),t.childNodes.forEach((t=>{t.classList.contains("wrapper-taskcreator")&&e(t)}))},r=e=>{const t=document.createElement("button");t.classList.add("btn-checklist"),e.appendChild(t)},p=(e,t)=>{const n=document.createElement("div");n.classList.add("task-text"),n.textContent=t,e.appendChild(n)},m=e=>{const t=document.createElement("img");t.src="/dist/style/images/pencil.svg";const n=document.createElement("button");n.classList.add("btn-edit-task"),e.appendChild(n),n.appendChild(t)},h=(e,t)=>{const s=document.createElement("img");s.src="/dist/style/images/remove.svg";const d=document.createElement("button");d.classList.add("btn-remove-task"),e.appendChild(d),d.appendChild(s),d.addEventListener("click",(()=>((e,t)=>{((e,t)=>{e.parentElement.parentElement.parentElement.firstChild.childNodes.forEach((s=>{s.classList.contains("active")&&n(s,e,t)}))})(e,t),e.remove()})(e,t)))},u=(e,t,n)=>{e.parentElement.parentElement.firstChild.childNodes.forEach((e=>{e.classList.contains("active")&&C(e,t,n)}))},C=(e,n,s)=>{const d=e.className.split(" ")[0],i=t.find((e=>e.id===d));void 0===i.list.find((e=>e.text===n))&&((e,t,n)=>{const s=e.list;s.push({checklist:"notchecked",text:n}),console.log(s)})(i,0,n),((e,t,n)=>{const s=document.createElement("img");s.src="/dist/style/images/check.svg";let d=t.childNodes[1].textContent;(e=>{const{page:t,value:n,icon:s,checklistBtn:d}=e;"checked"===t.list.find((e=>e.text===n)).checklist?(d.value="checked",d.appendChild(s)):d.value="notchecked"})({page:n,value:d,icon:s,checklistBtn:e}),console.log(e.value),e.addEventListener("click",(()=>{if(null===e.firstChild){e.appendChild(s),e.value="checked";let d=t.childNodes[1].textContent;a(e,d,n)}else{e.removeChild(e.firstChild),e.value="notchecked";let s=t.childNodes[1].textContent;a(e,s,n)}}))})(s.firstChild,s,i),((e,t,n)=>{e.addEventListener("click",(()=>{const e=t.childNodes;e.forEach((e=>e.style.display="none")),t.style.flexDirection="column",(e=>{const t=document.createElement("input");t.classList.add("input-edit"),t.placeholder="Edit task...",e.appendChild(t)})(t),((e,t,n)=>{const s=document.createElement("div");s.classList.add("wrapper-btns-edit"),e.appendChild(s),c({btnWrapper:s,task:e,everyChildElements:t,currPage:n}),l(s,e,t)})(t,e,n)}))})(s.childNodes[2],s,i),console.log(t)},v=e=>{const t=document.createElement("input");t.classList.add("input-taskcreator"),t.placeholder="Task...",e.appendChild(t)},E=(e,t,n)=>{const s=document.createElement("div");s.classList.add("wrapper-btns-taskcreator"),e.appendChild(s),L(s,e,t,n),g(s,e)},L=(e,t,n,s)=>{const d=document.createElement("button");d.classList.add("btn-adder-taskcreator"),d.textContent="Add",e.appendChild(d),d.addEventListener("click",(()=>{let e=t.firstChild.value,d=s.list.find((t=>t.text===e));0!==e.length&&void 0===d?o(n,e):0===e.length?alert("Enter a name"):alert("already exist name")}))},g=(t,n)=>{const s=document.createElement("button");s.classList.add("btn-closer-taskcreator"),s.textContent="Close",t.appendChild(s),s.addEventListener("click",(()=>{e(n)}))},k=e=>{const t=document.createElement("img");t.src="../../dist/style/images/plus.svg";const n=document.createElement("button");n.classList.add("btn-taskcreator"),n.textContent="Add Task",e.appendChild(n),n.appendChild(t),x(n,e)},x=(e,t)=>{t.parentElement.parentElement.firstChild.childNodes.forEach((n=>{n.classList.contains("active")&&b(n,e,t)}))},b=(e,n,s)=>{const d=e.className.split(" ")[0];((e,t,n)=>{e.addEventListener("click",(()=>{e.remove(),((e,t)=>{const n=document.createElement("div");n.classList.add("wrapper-taskcreator"),e.appendChild(n),v(n),E(n,e,t)})(t,n)}))})(n,s,t.find((e=>e.id===d)))},f=(e,t)=>{let n=t.name;const s=document.createElement("p");s.textContent=n,s.classList.add("bigtext"),e.appendChild(s)},y=(e,t)=>{const n=e.lastChild,s=n.firstChild;t.list.forEach((e=>o(n,e.text))),s.remove(),k(n)},N=(e,n)=>{((e,n)=>{const s=document.createElement("div");s.classList.add("content"),n.appendChild(s);const d=e.className.split(" ")[0],a=t.find((e=>e.id===d));f(s,a),(e=>{const t=document.createElement("div");t.classList.add("tasklist"),e.appendChild(t),k(t)})(s),y(s,a)})(e,n)},j=e=>{e.removeChild(e.lastChild)},w=(e,t)=>{W(t.parentElement),t.remove()},A=e=>{const n=document.createElement("img");n.src="/dist/style/images/remove.svg";const s=document.createElement("button");s.classList.add("btn-remove-project"),e.appendChild(s),s.appendChild(n),s.addEventListener("click",(()=>(e=>{(e=>{const t=e.parentElement,n=t.parentElement,s=t.firstChild;e.classList.contains("active")&&(s.classList.add("active"),j(n),N(s,n))})(e),e.remove();const n=t.findIndex((t=>t.id===`${e.className.split(" ")[0]}`));t.splice(n,1)})(e)))},P=e=>{const t=document.createElement("input");t.classList.add("input-projectcreator"),t.maxLength="15",t.placeholder="Project name...",e.appendChild(t)},T=(e,t,n)=>{const s=document.createElement("div");s.classList.add("wrapper-btns-projectcreator"),e.appendChild(s),D(s,e,t,n),I(s,e,t)},D=(e,n,d,a)=>{const c=document.createElement("button");c.classList.add("btn-adder-projectcreator"),c.textContent="Add",e.appendChild(c),c.addEventListener("click",(()=>{let e=n.firstChild.value,d=t.find((t=>t.name===e));0!==e.length&&void 0===d?((e,t,n,d)=>{const a=document.createElement("button");a.style.flexDirection="row",a.classList.add(`${t.replace(/\s+/g,"")}`,"project"),a.textContent=`${t}`,e.appendChild(a),A(a),w(0,n),s(a.className,a.textContent)})(a,e,n):0===e.length?alert("Enter a name"):alert("Already exist name")}))},I=(e,t,n)=>{const s=document.createElement("button");s.classList.add("btn-closer-projectcreator"),s.textContent="Close",e.appendChild(s),s.addEventListener("click",(()=>w(0,t)))},W=e=>{const t=document.createElement("img");t.src="../../dist/style/images/plus.svg";const n=document.createElement("button");n.classList.add("btn-addproject"),n.textContent="Add Project",n.appendChild(t),e.appendChild(n),((e,t)=>{e.addEventListener("click",(()=>{e.remove(),((e,t)=>{const n=document.createElement("div");n.classList.add("wrapper-projectcreator"),e.appendChild(n),P(n),T(n,t,e)})(t,e)}))})(n,e)},$=e=>{const t=document.createElement("p");t.classList.add("bigtext"),t.textContent="Projects",e.appendChild(t)},B=document.querySelector("#wrapper"),O=document.createElement("div");(e=>{const t=document.createElement("div");t.classList.add("header"),t.textContent="TODO LIST",e.appendChild(t)})(B),((e,t)=>{t.classList.add("main"),e.appendChild(t)})(B,O),(e=>{const t=document.createElement("div");t.classList.add("sidebar"),e.appendChild(t),((e,t)=>{const n=document.createElement("img");n.src="../../dist/style/images/calendar-today.svg";const d=document.createElement("button");d.classList.add("btn-today","project"),d.textContent="Today",d.appendChild(n);const a=document.createElement("img");a.src="../../dist/style/images/calendar-week.svg";const c=document.createElement("button");c.classList.add("btn-week","project"),c.textContent="Week",c.appendChild(a),e.appendChild(d),s(d.className,d.textContent),e.appendChild(c),s(c.className,c.textContent),$(e),W(e),((e,t,n)=>{t.classList.add("active");let s=t;N(s,n),e.addEventListener("click",(t=>{t.target.classList.contains("project")&&!1===t.target.classList.contains("active")&&((e=>{e.childNodes.forEach((e=>e.classList.remove("active")))})(e),t.target.classList.add("active"),s=t.target,j(n),N(s,n))}))})(e,d,t)})(t,e)})(O)})();