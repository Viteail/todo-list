import { removeTaskCreatorDiv } from './removetaskcreatordiv.mjs';
import { removeTask } from './removetask.mjs';
import { checkListTask } from './checklist.mjs';

export const addTask = (taskListDiv, taskCreatorDiv, inputValue) => {
  const newTask = document.createElement('div');
  newTask.classList.add('task');

  taskListDiv.appendChild(newTask);

  createCheckListButton(newTask);
  createTaskText(newTask, inputValue);
  createRemoveButton(newTask);

  removeTaskCreatorDiv(taskCreatorDiv);
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

const createRemoveButton = (task) => {
  const iconRemove = document.createElement('img');
  iconRemove.src = '/dist/style/images/remove.svg';

  const removeBtn = document.createElement('button');
  removeBtn.classList.add('btn-remove-task');

  task.appendChild(removeBtn);

  removeBtn.appendChild(iconRemove);

  removeBtn.addEventListener('click', () => removeTask(task));
};
