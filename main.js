(()=>{"use strict";const e=e=>{v(e.parentElement),e.remove()},t=[],n=(e,n,s)=>{const c=e.className.split(" ")[0],d=t.find((e=>e.id===c)),a=d.list,l=a.findIndex((e=>e.text===s));a.splice(l,1),console.log(d)},s=(e,n)=>{let s=e.split(" ")[0];t.push({id:s,name:n,list:[]}),console.log(t)},c=(e,t,n)=>{var s,c;s=n.list.find((e=>e.text===t)),c=e.value,s.checklist=c,console.log(s)},d=(t,n)=>{const s=document.createElement("div");s.classList.add("task"),t.appendChild(s),a(s),l(s,n),i(s),o(s,n),r(t,n,s),t.childNodes.forEach((t=>{t.classList.contains("wrapper-taskcreator")&&e(t)}))},a=e=>{const t=document.createElement("button");t.classList.add("btn-checklist"),e.appendChild(t)},l=(e,t)=>{const n=document.createElement("div");n.classList.add("task-text"),n.textContent=t,e.appendChild(n)},i=e=>{const t=document.createElement("img");t.src="/dist/style/images/pencil.svg";const n=document.createElement("button");n.classList.add("btn-edit-task"),e.appendChild(n),n.appendChild(t)},o=(e,t)=>{const s=document.createElement("img");s.src="/dist/style/images/remove.svg";const c=document.createElement("button");c.classList.add("btn-remove-task"),e.appendChild(c),c.appendChild(s),c.addEventListener("click",(()=>((e,t)=>{((e,t)=>{e.parentElement.parentElement.parentElement.firstChild.childNodes.forEach((s=>{s.classList.contains("active")&&n(s,e,t)}))})(e,t),e.remove()})(e,t)))},r=(e,t,n)=>{e.parentElement.parentElement.firstChild.childNodes.forEach((e=>{e.classList.contains("active")&&p(e,t,n)}))},p=(e,n,s)=>{const d=e.className.split(" ")[0],a=t.find((e=>e.id===d));void 0===a.list.find((e=>e.text===n))&&((e,t,n)=>{const s=e.list;s.push({checklist:"notchecked",text:n}),console.log(s)})(a,0,n),((e,t,n)=>{const s=document.createElement("img");s.src="/dist/style/images/check.svg",(e=>{const{page:t,value:n,icon:s,checklistBtn:c}=e;"checked"===t.list.find((e=>e.text===n)).checklist&&c.appendChild(s)})({page:n,value:t,icon:s,checklistBtn:e}),e.addEventListener("click",(()=>{null===e.firstChild?(e.appendChild(s),e.value="checked",c(e,t,n)):(e.removeChild(e.firstChild),e.value="notchecked",c(e,t,n))}))})(s.firstChild,n,a)},m=e=>{const t=document.createElement("input");t.classList.add("input-taskcreator"),t.placeholder="Task...",e.appendChild(t)},h=(e,t,n)=>{const s=document.createElement("div");s.classList.add("wrapper-btns-taskcreator"),e.appendChild(s),C(s,e,t,n),u(s,e)},C=(e,t,n,s)=>{const c=document.createElement("button");c.classList.add("btn-adder-taskcreator"),c.textContent="Add",e.appendChild(c),c.addEventListener("click",(()=>{let e=t.firstChild.value,c=s.list.find((t=>t.text===e));0!==e.length&&void 0===c?d(n,e):alert("already exist name")}))},u=(t,n)=>{const s=document.createElement("button");s.classList.add("btn-closer-taskcreator"),s.textContent="Close",t.appendChild(s),s.addEventListener("click",(()=>{e(n)}))},v=e=>{const t=document.createElement("img");t.src="../../dist/style/images/plus.svg";const n=document.createElement("button");n.classList.add("btn-taskcreator"),n.textContent="Add Task",e.appendChild(n),n.appendChild(t),E(n,e)},E=(e,t)=>{t.parentElement.parentElement.firstChild.childNodes.forEach((n=>{n.classList.contains("active")&&L(n,e,t)}))},L=(e,n,s)=>{const c=e.className.split(" ")[0];((e,t,n)=>{e.addEventListener("click",(()=>{e.remove(),((e,t)=>{const n=document.createElement("div");n.classList.add("wrapper-taskcreator"),e.appendChild(n),m(n),h(n,e,t)})(t,n)}))})(n,s,t.find((e=>e.id===c)))},g=(e,t)=>{let n=t.name;const s=document.createElement("p");s.textContent=n,s.classList.add("bigtext"),e.appendChild(s)},k=(e,t)=>{const n=e.lastChild,s=n.firstChild;t.list.forEach((e=>d(n,e.text))),s.remove(),v(n)},x=(e,n)=>{((e,n)=>{const s=document.createElement("div");s.classList.add("content"),n.appendChild(s);const c=e.className.split(" ")[0],d=t.find((e=>e.id===c));g(s,d),(e=>{const t=document.createElement("div");t.classList.add("tasklist"),e.appendChild(t),v(t)})(s),k(s,d)})(e,n)},b=e=>{e.removeChild(e.lastChild)},f=(e,t)=>{T(t.parentElement),t.remove()},y=e=>{const n=document.createElement("img");n.src="/dist/style/images/remove.svg";const s=document.createElement("button");s.classList.add("btn-remove-project"),e.appendChild(s),s.appendChild(n),s.addEventListener("click",(()=>(e=>{(e=>{const t=e.parentElement,n=t.parentElement,s=t.firstChild;e.classList.contains("active")&&(s.classList.add("active"),b(n),x(s,n))})(e),e.remove();const n=t.findIndex((t=>t.id===`${e.className.split(" ")[0]}`));t.splice(n,1)})(e)))},j=e=>{const t=document.createElement("input");t.classList.add("input-projectcreator"),t.maxLength="15",t.placeholder="Project name...",e.appendChild(t)},N=(e,t,n)=>{const s=document.createElement("div");s.classList.add("wrapper-btns-projectcreator"),e.appendChild(s),w(s,e,t,n),A(s,e,t)},w=(e,n,c,d)=>{const a=document.createElement("button");a.classList.add("btn-adder-projectcreator"),a.textContent="Add",e.appendChild(a),a.addEventListener("click",(()=>{let e=n.firstChild.value,c=t.find((t=>t.name===e));0!==e.length&&void 0===c?((e,t,n,c)=>{const d=document.createElement("button");d.style.flexDirection="row",d.classList.add(`${t.replace(/\s+/g,"")}`,"project"),d.textContent=`${t}`,e.appendChild(d),y(d),f(0,n),s(d.className,d.textContent)})(d,e,n):alert("Already exist name")}))},A=(e,t,n)=>{const s=document.createElement("button");s.classList.add("btn-closer-projectcreator"),s.textContent="Close",e.appendChild(s),s.addEventListener("click",(()=>f(0,t)))},T=e=>{const t=document.createElement("img");t.src="../../dist/style/images/plus.svg";const n=document.createElement("button");n.classList.add("btn-addproject"),n.textContent="Add Project",n.appendChild(t),e.appendChild(n),((e,t)=>{e.addEventListener("click",(()=>{e.remove(),((e,t)=>{const n=document.createElement("div");n.classList.add("wrapper-projectcreator"),e.appendChild(n),j(n),N(n,t,e)})(t,e)}))})(n,e)},I=e=>{const t=document.createElement("p");t.classList.add("bigtext"),t.textContent="Projects",e.appendChild(t)},P=document.querySelector("#wrapper"),$=document.createElement("div");(e=>{const t=document.createElement("div");t.classList.add("header"),t.textContent="TODO LIST",e.appendChild(t)})(P),((e,t)=>{t.classList.add("main"),e.appendChild(t)})(P,$),(e=>{const t=document.createElement("div");t.classList.add("sidebar"),e.appendChild(t),((e,t)=>{const n=document.createElement("img");n.src="../../dist/style/images/calendar-today.svg";const c=document.createElement("button");c.classList.add("btn-today","project"),c.textContent="Today",c.appendChild(n);const d=document.createElement("img");d.src="../../dist/style/images/calendar-week.svg";const a=document.createElement("button");a.classList.add("btn-week","project"),a.textContent="Week",a.appendChild(d),e.appendChild(c),s(c.className,c.textContent),e.appendChild(a),s(a.className,a.textContent),I(e),T(e),((e,t,n)=>{t.classList.add("active");let s=t;x(s,n),e.addEventListener("click",(t=>{t.target.classList.contains("project")&&!1===t.target.classList.contains("active")&&((e=>{e.childNodes.forEach((e=>e.classList.remove("active")))})(e),t.target.classList.add("active"),s=t.target,b(n),x(s,n))}))})(e,c,t)})(t,e)})($)})();