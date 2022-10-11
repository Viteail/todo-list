import { updateTask } from './store.mjs';

export const checklistTask = (checklistBtn, inputValue, currPage) => {
  const iconCheck = document.createElement('img');
  iconCheck.src = '/dist/style/images/check.svg';

  // addCheckIcon(currPage, inputValue, iconCheck, checklistBtn);
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
      getTask(checklistBtn, inputValue, currPage);
    } else {
      checklistBtn.removeChild(checklistBtn.firstChild);
      checklistBtn.value = 'notchecked';
      getTask(checklistBtn, inputValue, currPage);
    }
  });
};

const addCheckIcon = (args) => {
  const { page, value, icon, checklistBtn } = args;

  const task = page.list.find((task) => task.text === value);

  if (task.checklist === 'checked') {
    checklistBtn.appendChild(icon);
  }
};

const getTask = (checklistBtn, inputValue, currPage) => {
  const task = currPage.list.find((task) => task.text === inputValue);
  updateTask(task, checklistBtn.value);
};
