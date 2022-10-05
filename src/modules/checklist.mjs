import { updateTask } from './store.mjs';

export const checklistTask = (checklistBtn, inputValue, currPage) => {
  const iconCheck = document.createElement('img');
  iconCheck.src = '/dist/style/images/check.svg';

  checklistBtn.addEventListener('click', () => {
    if (checklistBtn.firstChild === null) {
      checklistBtn.appendChild(iconCheck);
      checklistBtn.value = true;
      getTask(checklistBtn, inputValue, currPage);
    } else {
      checklistBtn.removeChild(checklistBtn.firstChild);
      checklistBtn.value = false;
      getTask(checklistBtn, inputValue, currPage);
    }
  });
};

const getTask = (checklistBtn, inputValue, currPage) => {
  const task = currPage.list.find((task) => task.text === inputValue);
  updateTask(task, checklistBtn.value);
};
