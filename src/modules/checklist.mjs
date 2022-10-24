import { updateTask } from './store.mjs';

export const checklistTask = (checklistBtn, task, currPage) => {
  const iconCheck = document.createElement('img');
  iconCheck.src = 'style/images/check.svg';

  let inputValue = task.childNodes[1].textContent;

  addCheckIcon({
    page: currPage,
    value: inputValue,
    icon: iconCheck,
    checklistBtn,
  });

  checklistBtn.addEventListener('click', () => {
    if (checklistBtn.firstChild === null) {
      checklistBtn.appendChild(iconCheck);
      checklistBtn.value = 'checked';
      let inputValue = task.childNodes[1].textContent;
      getTask(checklistBtn, inputValue, currPage);
    } else {
      checklistBtn.removeChild(checklistBtn.firstChild);
      checklistBtn.value = 'notchecked';
      let inputValue = task.childNodes[1].textContent;
      getTask(checklistBtn, inputValue, currPage);
    }
  });
};

const addCheckIcon = (args) => {
  const { page, value, icon, checklistBtn } = args;

  const task = page.list.find((task) => task.text === value);

  if (task.checklist === 'checked') {
    checklistBtn.value = 'checked';
    checklistBtn.appendChild(icon);
  } else {
    checklistBtn.value = 'notchecked';
  }
};

const getTask = (checklistBtn, inputValue, currPage) => {
  const task = currPage.list.find((task) => task.text === inputValue);
  updateTask(task, checklistBtn.value, inputValue);
};
