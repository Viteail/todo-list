(()=>{"use strict";const e=e=>{c(e.parentElement),e.remove()},t=e=>{const t=document.createElement("input");t.classList.add("input-taskcreator"),t.placeholder="Task...",e.appendChild(t)},n=(e,t)=>{const n=document.createElement("div");n.classList.add("wrapper-btns-taskcreator"),e.appendChild(n),d(n,e,t),s(n,e)},d=(t,n,d)=>{const s=document.createElement("button");s.classList.add("btn-adder-taskcreator"),s.textContent="Add",t.appendChild(s),s.addEventListener("click",(()=>{let t=n.firstChild.value;0!==t.length&&((t,n,d)=>{const s=document.createElement("div");s.classList.add("task"),t.appendChild(s),(e=>{const t=document.createElement("button");t.classList.add("btn-checklist"),e.appendChild(t),(e=>{const t=document.createElement("img");t.src="/dist/style/images/check.svg",e.addEventListener("click",(()=>{null===e.firstChild?e.appendChild(t):e.removeChild(e.firstChild)}))})(t)})(s),((e,t)=>{const n=document.createElement("div");n.classList.add("task-text"),n.textContent=t,e.appendChild(n)})(s,d),(e=>{const t=document.createElement("img");t.src="/dist/style/images/remove.svg";const n=document.createElement("button");n.classList.add("btn-remove-task"),e.appendChild(n),n.appendChild(t),n.addEventListener("click",(()=>(e=>{e.remove()})(e)))})(s),e(n)})(d,n,t)}))},s=(t,n)=>{const d=document.createElement("button");d.classList.add("btn-closer-taskcreator"),d.textContent="Close",t.appendChild(d),d.addEventListener("click",(()=>{e(n)}))},c=e=>{const d=document.createElement("img");d.src="../../dist/style/images/plus.svg";const s=document.createElement("button");s.classList.add("btn-taskcreator"),s.textContent="Add Task",e.appendChild(s),s.appendChild(d),((e,d)=>{e.addEventListener("click",(()=>{e.remove(),(e=>{const d=document.createElement("div");d.classList.add("wrapper-taskcreator"),e.appendChild(d),t(d),n(d,e)})(d)}))})(s,e)},a=(e,t)=>{t.textContent;const n=document.createElement("p");n.textContent=t.textContent,n.classList.add("bigtext"),e.appendChild(n)},l=(e,t)=>{((e,t)=>{const n=document.createElement("div");n.classList.add("content"),t.appendChild(n),a(n,e),(e=>{const t=document.createElement("div");t.classList.add("tasklist"),e.appendChild(t),c(t)})(n)})(e,t)},o=(e,t)=>{u(t.parentElement),t.remove()},i=e=>{const t=document.createElement("input");t.classList.add("input-projectcreator"),t.maxLength="15",t.placeholder="Project name...",e.appendChild(t)},r=(e,t,n)=>{const d=document.createElement("div");d.classList.add("wrapper-btns-projectcreator"),e.appendChild(d),p(d,e,t,n),m(d,e,t)},p=(e,t,n,d)=>{const s=document.createElement("button");s.classList.add("btn-adder-projectcreator"),s.textContent="Add",e.appendChild(s),s.addEventListener("click",(()=>{let e=t.firstChild.value;0!==e.length&&((e,t,n,d)=>{const s=document.createElement("button");s.style.flexDirection="row",s.classList.add(`${t.replace(/\s+/g,"")}`,"project"),s.textContent=`${t}`,e.appendChild(s),(e=>{const t=document.createElement("img");t.src="/dist/style/images/remove.svg";const n=document.createElement("button");n.classList.add("btn-remove-project"),e.appendChild(n),n.appendChild(t),n.addEventListener("click",(()=>{e.remove()}))})(s),o(0,n)})(d,e,t)}))},m=(e,t,n)=>{const d=document.createElement("button");d.classList.add("btn-closer-projectcreator"),d.textContent="Close",e.appendChild(d),d.addEventListener("click",(()=>o(0,t)))},u=e=>{const t=document.createElement("img");t.src="../../dist/style/images/plus.svg";const n=document.createElement("button");n.classList.add("btn-addproject"),n.textContent="Add Project",n.appendChild(t),e.appendChild(n),((e,t)=>{e.addEventListener("click",(()=>{e.remove(),((e,t)=>{const n=document.createElement("div");n.classList.add("wrapper-projectcreator"),e.appendChild(n),i(n),r(n,t,e)})(t,e)}))})(n,e)},C=e=>{const t=document.createElement("p");t.classList.add("bigtext"),t.textContent="Projects",e.appendChild(t)},h=document.querySelector("#wrapper"),v=document.createElement("div");(e=>{const t=document.createElement("div");t.classList.add("header"),t.textContent="TODO LIST",e.appendChild(t)})(h),((e,t)=>{t.classList.add("main"),e.appendChild(t)})(h,v),(e=>{const t=document.createElement("div");t.classList.add("sidebar"),e.appendChild(t),((e,t)=>{const n=document.createElement("img");n.src="../../dist/style/images/calendar-today.svg";const d=document.createElement("button");d.classList.add("btn-today","project"),d.textContent="Today",d.appendChild(n);const s=document.createElement("img");s.src="../../dist/style/images/calendar-week.svg";const c=document.createElement("button");c.classList.add("btn-week","project"),c.textContent="Week",c.appendChild(s),e.appendChild(d),e.appendChild(c),C(e),u(e),((e,t,n)=>{t.classList.add("active");let d=t;l(d,n),e.addEventListener("click",(e=>{e.target.classList.contains("project")&&d!==e.target&&(d.classList.remove("active"),e.target.classList.add("active"),d=e.target,(e=>{e.removeChild(e.lastChild)})(n),l(d,n))}))})(e,d,t)})(t,e)})(v)})();