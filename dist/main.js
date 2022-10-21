(()=>{"use strict";const e=e=>{k(e.parentElement),e.remove()};let t=[];const n=(e,n,d)=>{const s=t.find((t=>t.id===e.textContent)).list,a=s.findIndex((e=>e.text===d));s.splice(a,1)},d=(e,n)=>{t.push({id:e,name:n,list:[]}),a()},s=(e,t,n)=>{e.checklist=t,e.text=n,a()},a=()=>{localStorage.setItem("pages",JSON.stringify(t))},c=(e,t,n)=>{const d=n.list.find((e=>e.text===t));s(d,e.value,t)},l=e=>{const{btnWrapper:t,task:n,everyChildElements:d,currPage:a}=e,c=document.createElement("button");let l;c.classList.add("btn-edit"),c.textContent="Edit",t.appendChild(c);const i=d[4],r=d[1],p=d[0];c.addEventListener("click",(()=>{l=i.value,0!==l.length&&void 0===a.list.find((e=>e.text===l))?(s(a.list.find((e=>e.text===r.textContent)),p.value,l),r.textContent=l,o(d,n)):0===l.length?alert("Enter a name"):alert("Already exist name")}))},i=(e,t,n)=>{const d=document.createElement("button");d.classList.add("btn-cancel"),d.textContent="Cancel",e.appendChild(d),d.addEventListener("click",(()=>{o(n,t)}))},o=(e,t)=>{const n=e[4],d=t.lastChild;n.remove(),d.remove(),t.style.flexDirection="row",e.forEach((e=>{e.style.display="flex"}))},r=(t,n)=>{const d=document.createElement("div");d.classList.add("task"),t.appendChild(d),p(d),m(d,n),h(d),C(d,n),u(t,n,d),t.childNodes.forEach((t=>{t.classList.contains("wrapper-taskcreator")&&e(t)}))},p=e=>{const t=document.createElement("button");t.classList.add("btn-checklist"),e.appendChild(t)},m=(e,t)=>{const n=document.createElement("div");n.classList.add("task-text"),n.textContent=t,e.appendChild(n)},h=e=>{const t=document.createElement("img");t.src="/dist/style/images/pencil.svg";const n=document.createElement("button");n.classList.add("btn-edit-task"),e.appendChild(n),n.appendChild(t)},C=(e,t)=>{const d=document.createElement("img");d.src="/dist/style/images/remove.svg";const s=document.createElement("button");s.classList.add("btn-remove-task"),e.appendChild(s),s.appendChild(d),s.addEventListener("click",(()=>((e,t)=>{((e,t)=>{e.parentElement.parentElement.parentElement.firstChild.childNodes.forEach((d=>{d.classList.contains("active")&&n(d,e,t)}))})(e,t),e.remove()})(e,t)))},u=(e,t,n)=>{e.parentElement.parentElement.firstChild.childNodes.forEach((e=>{e.classList.contains("active")&&E(e,t,n)}))},E=(e,n,d)=>{const s=t.find((t=>t.id===e.textContent));void 0===s.list.find((e=>e.text===n))&&((e,t,n)=>{e.list.push({checklist:"notchecked",text:n}),a()})(s,0,n),((e,t,n)=>{const d=document.createElement("img");d.src="/dist/style/images/check.svg";let s=t.childNodes[1].textContent;(e=>{const{page:t,value:n,icon:d,checklistBtn:s}=e;"checked"===t.list.find((e=>e.text===n)).checklist?(s.value="checked",s.appendChild(d)):s.value="notchecked"})({page:n,value:s,icon:d,checklistBtn:e}),e.addEventListener("click",(()=>{if(null===e.firstChild){e.appendChild(d),e.value="checked";let s=t.childNodes[1].textContent;c(e,s,n)}else{e.removeChild(e.firstChild),e.value="notchecked";let d=t.childNodes[1].textContent;c(e,d,n)}}))})(d.firstChild,d,s),((e,t,n)=>{const d=t.parentElement;e.addEventListener("click",(()=>{let e;d.childNodes.forEach((t=>{"column"===t.style.flexDirection&&(e=t)}));void 0===e||o(e.childNodes,e),((e,t)=>{const n=e.childNodes;n.forEach((e=>e.style.display="none")),e.style.flexDirection="column",(e=>{const t=document.createElement("input");t.classList.add("input-edit"),t.placeholder="Edit task...",e.appendChild(t)})(e),((e,t,n)=>{const d=document.createElement("div");d.classList.add("wrapper-btns-edit"),e.appendChild(d),l({btnWrapper:d,task:e,everyChildElements:t,currPage:n}),i(d,e,t)})(e,n,t)})(t,n)}))})(d.childNodes[2],d,s)},v=e=>{const t=document.createElement("input");t.classList.add("input-taskcreator"),t.placeholder="Task...",e.appendChild(t)},L=(e,t,n)=>{const d=document.createElement("div");d.classList.add("wrapper-btns-taskcreator"),e.appendChild(d),x(d,e,t,n),g(d,e)},x=(e,t,n,d)=>{const s=document.createElement("button");s.classList.add("btn-adder-taskcreator"),s.textContent="Add",e.appendChild(s),s.addEventListener("click",(()=>{let e=t.firstChild.value,s=d.list.find((t=>t.text===e));0!==e.length&&void 0===s?r(n,e):0===e.length?alert("Enter a name"):alert("already exist name")}))},g=(t,n)=>{const d=document.createElement("button");d.classList.add("btn-closer-taskcreator"),d.textContent="Close",t.appendChild(d),d.addEventListener("click",(()=>{e(n)}))},k=e=>{const t=document.createElement("img");t.src="../../dist/style/images/plus.svg";const n=document.createElement("button");n.classList.add("btn-taskcreator"),n.textContent="Add Task",e.appendChild(n),n.appendChild(t),f(n,e)},f=(e,t)=>{t.parentElement.parentElement.firstChild.childNodes.forEach((n=>{n.classList.contains("active")&&b(n,e,t)}))},b=(e,n,d)=>{((e,t,n)=>{e.addEventListener("click",(()=>{e.remove(),((e,t)=>{const n=document.createElement("div");n.classList.add("wrapper-taskcreator"),e.appendChild(n),v(n),L(n,e,t)})(t,n)}))})(n,d,t.find((t=>t.id===e.textContent)))},y=(e,t)=>{let n=t.name;const d=document.createElement("p");d.textContent=n,d.classList.add("bigtext"),e.appendChild(d)},j=(e,t)=>{if(0!==t.list.length){const n=e.lastChild,d=n.firstChild;t.list.forEach((e=>r(n,e.text))),d.remove(),k(n)}},N=(e,n)=>{((e,n)=>{const d=document.createElement("div");d.classList.add("content"),n.appendChild(d);const s=t.find((t=>t.id===e.textContent));y(d,s),(e=>{const t=document.createElement("div");t.classList.add("tasklist"),e.appendChild(t),k(t)})(d),j(d,s)})(e,n)},w=e=>{e.removeChild(e.lastChild)},S=e=>{W(e.parentElement),e.remove()},A=(e,n,s)=>{const a=document.createElement("button");a.style.flexDirection="row",a.classList.add("project"),a.textContent=`${n}`,e.appendChild(a),T(a),S(s),void 0===t.find((e=>e.id===a.textContent))&&d(a.textContent,a.textContent)},T=e=>{const n=document.createElement("img");n.src="/dist/style/images/remove.svg";const d=document.createElement("button");d.classList.add("btn-remove-project"),e.appendChild(d),d.appendChild(n),d.addEventListener("click",(()=>(e=>{(e=>{const t=e.parentElement,n=t.parentElement,d=t.firstChild;e.classList.contains("active")&&(e.classList.remove("active"),d.classList.add("active"),w(n),N(d,n))})(e),e.remove();const n=t.findIndex((t=>t.id===e.textContent));t.splice(n,1),a()})(e)))},D=e=>{const t=document.createElement("input");t.classList.add("input-projectcreator"),t.maxLength="15",t.placeholder="Project name...",e.appendChild(t)},I=(e,t)=>{const n=document.createElement("div");n.classList.add("wrapper-btns-projectcreator"),e.appendChild(n),P(n,e,t),O(n,e)},P=(e,n,d)=>{const s=document.createElement("button");s.classList.add("btn-adder-projectcreator"),s.textContent="Add",e.appendChild(s),s.addEventListener("click",(()=>{let e=n.firstChild.value,s=t.find((t=>t.name===e));0!==e.length&&void 0===s?A(d,e,n):0===e.length?alert("Enter a name"):alert("Already exist name")}))},O=(e,t)=>{const n=document.createElement("button");n.classList.add("btn-closer-projectcreator"),n.textContent="Close",e.appendChild(n),n.addEventListener("click",(()=>S(t)))},W=e=>{const t=document.createElement("img");t.src="../../dist/style/images/plus.svg";const n=document.createElement("button");n.classList.add("btn-addproject"),n.textContent="Add Project",n.appendChild(t),e.appendChild(n),((e,t)=>{e.addEventListener("click",(()=>{e.remove(),(e=>{const t=document.createElement("div");t.classList.add("wrapper-projectcreator"),e.appendChild(t),D(t),I(t,e)})(t)}))})(n,e)},B=e=>{const t=document.createElement("p");t.classList.add("bigtext"),t.textContent="Projects",e.appendChild(t)},J=(e,t)=>{const n=e.lastChild;A(e,t.name,n)},q=document.querySelector("#wrapper"),$=document.createElement("div");(e=>{const t=document.createElement("div");t.classList.add("header"),t.textContent="TODO LIST",e.appendChild(t)})(q),((e,t)=>{t.classList.add("main"),e.appendChild(t)})(q,$),(e=>{const n=document.createElement("div");n.classList.add("sidebar"),e.appendChild(n),((e,n)=>{const s=document.createElement("img");s.src="../../dist/style/images/calendar-today.svg";const a=document.createElement("button");a.classList.add("btn-today","project"),a.textContent="Today",a.appendChild(s);const c=document.createElement("img");c.src="../../dist/style/images/calendar-week.svg";const l=document.createElement("button");l.classList.add("btn-week","project"),l.textContent="Week",l.appendChild(c),e.appendChild(a),e.appendChild(l),B(e),W(e),0!==localStorage.length&&(t=JSON.parse(localStorage.getItem("pages")),console.log(t),t.forEach((t=>{"Today"!==t.id&&"Week"!==t.id&&J(e,t)}))),0===t.length&&(d(a.textContent,a.textContent),d(l.textContent,l.textContent)),((e,t,n)=>{t.classList.add("active");let d=t;N(d,n),e.addEventListener("click",(t=>{t.target.classList.contains("project")&&!1===t.target.classList.contains("active")&&((e=>{e.childNodes.forEach((e=>e.classList.remove("active")))})(e),t.target.classList.add("active"),d=t.target,w(n),N(d,n))}))})(e,a,n)})(n,e)})($)})();