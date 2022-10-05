import { createTaskListDiv } from './tasklistdiv.mjs';
import { pages } from './pages.mjs';
import { addTask } from './addtask.mjs';
import { createTaskCreator } from './taskcreator.mjs';

export const createContent = (currentActiveButton, main) => {
  const content = document.createElement('div');
  content.classList.add('content');
  main.appendChild(content);

  const firstClassOfCurrBtn = currentActiveButton.className.split(' ')[0];
  const currPage = pages.find((page) => page.id === firstClassOfCurrBtn);

  createParaProjectName(content, currPage);
  createTaskListDiv(content);
  createTasks(content, currPage);
};

const createParaProjectName = (content, currPage) => {
  let projectName = currPage.name;

  const paraProjectName = document.createElement('p');
  paraProjectName.textContent = projectName;
  paraProjectName.classList.add('bigtext');
  content.appendChild(paraProjectName);
};

export const createTasks = (content, currPage) => {
  const taskListDiv = content.lastChild;
  const projectCreator = taskListDiv.firstChild;
  currPage.list.forEach((task) => addTask(taskListDiv, task.text));
  projectCreator.remove();
  createTaskCreator(taskListDiv);
};
