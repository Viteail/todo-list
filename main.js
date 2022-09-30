(()=>{"use strict";const e=e=>{a(e.parentElement),e.remove()},t=e=>{const t=document.createElement("input");t.classList.add("input-taskcreator"),t.placeholder="Task...",e.appendChild(t)},n=(e,t)=>{const n=document.createElement("div");n.classList.add("wrapper-btns-taskcreator"),e.appendChild(n),d(n,e,t),s(n,e)},d=(t,n,d)=>{const s=document.createElement("button");s.classList.add("btn-adder-taskcreator"),s.textContent="Add",t.appendChild(s),s.addEventListener("click",(()=>{let t=n.firstChild.value;0!==t.length&&((t,n,d)=>{const s=document.createElement("div");s.classList.add("task"),t.appendChild(s),(e=>{const t=document.createElement("button");t.classList.add("btn-checklist"),e.appendChild(t),(e=>{const t=document.createElement("img");t.src="/dist/style/images/check.svg",e.addEventListener("click",(()=>{null===e.firstChild?e.appendChild(t):e.removeChild(e.firstChild)}))})(t)})(s),((e,t)=>{const n=document.createElement("div");n.classList.add("task-text"),n.textContent=t,e.appendChild(n)})(s,d),(e=>{const t=document.createElement("img");t.src="/dist/style/images/remove.svg";const n=document.createElement("button");n.classList.add("btn-remove-task"),e.appendChild(n),n.appendChild(t),n.addEventListener("click",(()=>(e=>{e.remove()})(e)))})(s),e(n)})(d,n,t)}))},s=(t,n)=>{const d=document.createElement("button");d.classList.add("btn-closer-taskcreator"),d.textContent="Close",t.appendChild(d),d.addEventListener("click",(()=>{e(n)}))},a=e=>{const d=document.createElement("img");d.src="../../dist/style/images/plus.svg";const s=document.createElement("button");s.classList.add("btn-taskcreator"),s.textContent="Add Task",e.appendChild(s),s.appendChild(d),((e,d)=>{e.addEventListener("click",(()=>{e.remove(),(e=>{const d=document.createElement("div");d.classList.add("wrapper-taskcreator"),e.appendChild(d),t(d),n(d,e)})(d)}))})(s,e)},c=[],l=(e,t)=>{let n=t.className.split(" ")[0],d=c.find((e=>e.id===n)).name;const s=document.createElement("p");s.textContent=d,s.classList.add("bigtext"),e.appendChild(s)},i=(e,t)=>{((e,t)=>{const n=document.createElement("div");n.classList.add("content"),t.appendChild(n),l(n,e),(e=>{const t=document.createElement("div");t.classList.add("tasklist"),e.appendChild(t),a(t)})(n)})(e,t)},o=e=>{e.removeChild(e.lastChild)},r=(e,t)=>{E(t.parentElement),t.remove()},m=(e,t)=>{let n=e.split(" ")[0];c.push({id:n,name:t}),console.log(c)},p=e=>{const t=document.createElement("img");t.src="/dist/style/images/remove.svg";const n=document.createElement("button");n.classList.add("btn-remove-project"),e.appendChild(n),n.appendChild(t),n.addEventListener("click",(()=>(e=>{(e=>{const t=e.parentElement,n=t.parentElement,d=t.firstChild;e.classList.contains("active")&&(d.classList.add("active"),o(n),i(d,n))})(e),e.remove();const t=c.findIndex((t=>t.id===`${e.className.split(" ")[0]}`));c.splice(t,1),console.log(c)})(e)))},C=e=>{const t=document.createElement("input");t.classList.add("input-projectcreator"),t.maxLength="15",t.placeholder="Project name...",e.appendChild(t)},u=(e,t,n)=>{const d=document.createElement("div");d.classList.add("wrapper-btns-projectcreator"),e.appendChild(d),h(d,e,t,n),v(d,e,t)},h=(e,t,n,d)=>{const s=document.createElement("button");s.classList.add("btn-adder-projectcreator"),s.textContent="Add",e.appendChild(s),s.addEventListener("click",(()=>{let e=t.firstChild.value;0!==e.length&&((e,t,n,d)=>{const s=document.createElement("button");s.style.flexDirection="row",s.classList.add(`${t.replace(/\s+/g,"")}`,"project"),s.textContent=`${t}`,e.appendChild(s),p(s),r(0,n),m(s.className,s.textContent)})(d,e,t)}))},v=(e,t,n)=>{const d=document.createElement("button");d.classList.add("btn-closer-projectcreator"),d.textContent="Close",e.appendChild(d),d.addEventListener("click",(()=>r(0,t)))},E=e=>{const t=document.createElement("img");t.src="../../dist/style/images/plus.svg";const n=document.createElement("button");n.classList.add("btn-addproject"),n.textContent="Add Project",n.appendChild(t),e.appendChild(n),((e,t)=>{e.addEventListener("click",(()=>{e.remove(),((e,t)=>{const n=document.createElement("div");n.classList.add("wrapper-projectcreator"),e.appendChild(n),C(n),u(n,t,e)})(t,e)}))})(n,e)},L=e=>{const t=document.createElement("p");t.classList.add("bigtext"),t.textContent="Projects",e.appendChild(t)},g=document.querySelector("#wrapper"),b=document.createElement("div");(e=>{const t=document.createElement("div");t.classList.add("header"),t.textContent="TODO LIST",e.appendChild(t)})(g),((e,t)=>{t.classList.add("main"),e.appendChild(t)})(g,b),(e=>{const t=document.createElement("div");t.classList.add("sidebar"),e.appendChild(t),((e,t)=>{const n=document.createElement("img");n.src="../../dist/style/images/calendar-today.svg";const d=document.createElement("button");d.classList.add("btn-today","project"),d.textContent="Today",d.appendChild(n);const s=document.createElement("img");s.src="../../dist/style/images/calendar-week.svg";const a=document.createElement("button");a.classList.add("btn-week","project"),a.textContent="Week",a.appendChild(s),e.appendChild(d),m(d.className,d.textContent),e.appendChild(a),m(a.className,a.textContent),L(e),E(e),((e,t,n)=>{t.classList.add("active");let d=t;i(d,n),e.addEventListener("click",(t=>{t.target.classList.contains("project")&&!1===t.target.classList.contains("active")&&((e=>{e.childNodes.forEach((e=>e.classList.remove("active")))})(e),t.target.classList.add("active"),d=t.target,o(n),i(d,n))}))})(e,d,t)})(t,e)})(b)})();