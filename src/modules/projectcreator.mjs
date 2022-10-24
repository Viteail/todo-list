import { createProjectCreatorDiv } from './projectcreatordiv.mjs';

export const createProjectCreator = (sidebar) => {
  const iconPlus = document.createElement('img');
  iconPlus.src = 'style/images/plus.svg';

  const projectCreator = document.createElement('button');
  projectCreator.classList.add('btn-addproject');
  projectCreator.textContent = 'Add Project';
  projectCreator.appendChild(iconPlus);

  sidebar.appendChild(projectCreator);
  createProjectCreatorDiv(projectCreator, sidebar);
};
