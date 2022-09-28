import { createTaskCreatorDiv } from './taskcreatordiv.mjs';

export const createTaskCreator = (taskListDiv) => {
  const iconPlus = document.createElement('img');
  iconPlus.src = '../../dist/style/images/plus.svg';

  const taskCreator = document.createElement('button');
  taskCreator.classList.add('btn-taskcreator');
  taskCreator.textContent = 'Add Task';

  taskListDiv.appendChild(taskCreator);

  taskCreator.appendChild(iconPlus);

  createTaskCreatorDiv(taskCreator, taskListDiv);
};
