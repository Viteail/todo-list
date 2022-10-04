import { createTaskListDiv } from './tasklistdiv.mjs';
import { pages } from './pages.mjs';

export const createContent = (currentActiveButton, main) => {
  const content = document.createElement('div');
  content.classList.add('content');
  main.appendChild(content);

  const firstClassOfCurrBtn = currentActiveButton.className.split(' ')[0];
  const currPage = pages.find((page) => page.id === firstClassOfCurrBtn);

  createParaProjectName(content, currPage);
  createTaskListDiv(content);
};

const createParaProjectName = (content, currPage) => {
  let projectName = currPage.name;

  const paraProjectName = document.createElement('p');
  paraProjectName.textContent = projectName;
  paraProjectName.classList.add('bigtext');
  content.appendChild(paraProjectName);
};
