import { createTaskCreatorDiv } from './taskcreatordiv.mjs';
import { pages } from './pages.mjs';

export const createTaskCreator = (taskListDiv) => {
  const iconPlus = document.createElement('img');
  iconPlus.src = '../../dist/style/images/plus.svg';

  const taskCreator = document.createElement('button');
  taskCreator.classList.add('btn-taskcreator');
  taskCreator.textContent = 'Add Task';

  taskListDiv.appendChild(taskCreator);

  taskCreator.appendChild(iconPlus);

  getCurrentActiveButton(taskCreator, taskListDiv);
};

const getCurrentActiveButton = (taskCreator, taskListDiv) => {
  const content = taskListDiv.parentElement;
  const main = content.parentElement;
  const sidebar = main.firstChild;
  const everyChildElements = sidebar.childNodes;
  everyChildElements.forEach((element) => {
    if (element.classList.contains('active')) {
      getCurrentPage(element, taskCreator, taskListDiv)
    }
  });
};

const getCurrentPage = (currentActiveButton, taskCreator, taskListDiv) => {
  const currPage = pages.find((page) => page.id === currentActiveButton.textContent);

  createTaskCreatorDiv(taskCreator, taskListDiv, currPage);
}
