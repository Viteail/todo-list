import { removeTask } from './removetask.mjs';
import { checklistTask } from './checklist.mjs';
import { removeTaskCreatorDiv } from './removetaskcreatordiv.mjs';
import { pages } from './pages.mjs';
import { storeTaskToPage, updateTask } from './store.mjs';
import { editTask } from './edittask.mjs';

export const addTask = (taskListDiv, inputValue) => {
  const newTask = document.createElement('div');
  newTask.classList.add('task');

  taskListDiv.appendChild(newTask);

  createChecklistButton(newTask);
  createTaskText(newTask, inputValue);
  createEditTaskBtn(newTask);
  createRemoveButton(newTask, inputValue);

  getCurrentActiveButton(taskListDiv, inputValue, newTask);

  const everyChildElements = taskListDiv.childNodes;
  everyChildElements.forEach((element) => {
    if (element.classList.contains('wrapper-taskcreator')) {
      removeTaskCreatorDiv(element);
    }
  });
};

const createChecklistButton = (task) => {
  const checklistBtn = document.createElement('button');
  checklistBtn.classList.add('btn-checklist');

  task.appendChild(checklistBtn);
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
};

const createRemoveButton = (task, inputValue) => {
  const iconRemove = document.createElement('img');
  iconRemove.src = '/dist/style/images/remove.svg';

  const removeBtn = document.createElement('button');
  removeBtn.classList.add('btn-remove-task');

  task.appendChild(removeBtn);

  removeBtn.appendChild(iconRemove);

  removeBtn.addEventListener('click', () => removeTask(task, inputValue));
};

const getCurrentActiveButton = (taskListDiv, inputValue, task) => {
  const content = taskListDiv.parentElement;
  const main = content.parentElement;
  const sidebar = main.firstChild;
  const everyChildElements = sidebar.childNodes;
  everyChildElements.forEach((element) => {
    if (element.classList.contains('active')) {
      getCurrentPage(element, inputValue, task);
    }
  });
};

const getCurrentPage = (currentActiveButton, inputValue, task) => {
  const currPage = pages.find((page) => page.id === currentActiveButton.textContent);

  if (currPage.list.find((task) => task.text === inputValue) === undefined) {
    storeTaskToPage(currPage, 'notchecked', inputValue);
  }
  const checklistBtn = task.firstChild;
  checklistTask(checklistBtn, task, currPage);

  const editTaskBtn = task.childNodes[2];
  editTask(editTaskBtn, task, currPage);
};
