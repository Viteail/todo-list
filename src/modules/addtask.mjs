import { removeTaskCreatorDiv } from './removetaskcreatordiv.mjs';
import { removeTask } from './removetask.mjs';
import { checkListTask } from './checklist.mjs';
import { pages } from './pages.mjs';
import { storeTaskToPage } from './store.mjs';
import { editTask } from './edittask.mjs';

export const addTask = (taskListDiv, taskCreatorDiv, inputValue) => {
  const newTask = document.createElement('div');
  newTask.classList.add('task');

  taskListDiv.appendChild(newTask);

  createCheckListButton(newTask);
  createTaskText(newTask, inputValue);
  createEditTaskBtn(newTask);
  createRemoveButton(newTask);

  removeTaskCreatorDiv(taskCreatorDiv);

  getCurrentActiveButton(taskListDiv, inputValue);
};

const createCheckListButton = (task) => {
  const checkListBtn = document.createElement('button');
  checkListBtn.classList.add('btn-checklist');

  task.appendChild(checkListBtn);

  checkListTask(checkListBtn);
};

const createTaskText = (task, inputValue) => {
  const taskText = document.createElement('div');
  taskText.classList.add('task-text');
  taskText.textContent = inputValue;

  task.appendChild(taskText);
};

const createEditTaskBtn = (task) => {
  const iconEdit = document.createElement('img');
  iconEdit.src = '/dist/style/images/pencil.svg';

  const editTaskBtn = document.createElement('button');
  editTaskBtn.classList.add('btn-edit-task');
  task.appendChild(editTaskBtn);

  editTaskBtn.appendChild(iconEdit);

  editTask(editTaskBtn, task);
};

const createRemoveButton = (task) => {
  const iconRemove = document.createElement('img');
  iconRemove.src = '/dist/style/images/remove.svg';

  const removeBtn = document.createElement('button');
  removeBtn.classList.add('btn-remove-task');

  task.appendChild(removeBtn);

  removeBtn.appendChild(iconRemove);

  removeBtn.addEventListener('click', () => removeTask(task));
};

const getCurrentActiveButton = (taskListDiv, inputValue) => {
  const content = taskListDiv.parentElement;
  const main = content.parentElement;
  const sidebar = main.firstChild;
  const everyChildElements = sidebar.childNodes;
  everyChildElements.forEach((element) => {
    if (element.classList.contains('active')) {
      getCurrentPage(element, inputValue);
    }
  });
};

const getCurrentPage = (currentActiveButton, inputValue) => {
  const firstClassOfCurrBtn = currentActiveButton.className.split(' ')[0];
  const currPage = pages.find((page) => page.id === firstClassOfCurrBtn);
  
  storeTaskToPage(currPage, false, inputValue);
};
