import { removeProjectCreatorDiv } from './removeprojectcreatordiv.mjs';
import { removeProject } from './removeproject.mjs';
import { storeToPages } from './store.mjs';

export const addProject = (sidebar, inputValue, div, projectCreator) => {
  const newProject = document.createElement('button');
  newProject.style.flexDirection = 'row';
  newProject.classList.add(`${inputValue.replace(/\s+/g, '')}`, 'project');
  newProject.textContent = `${inputValue}`;
  sidebar.appendChild(newProject);

  createRemoveButton(newProject);

  removeProjectCreatorDiv(projectCreator, div);

  storeToPages(newProject.className, newProject.textContent)
};

const createRemoveButton = (newProject) => {
  const iconRemove = document.createElement('img');
  iconRemove.src = '/dist/style/images/remove.svg';

  const removeBtn = document.createElement('button');
  removeBtn.classList.add('btn-remove-project');
  newProject.appendChild(removeBtn);

  removeBtn.appendChild(iconRemove);

  removeBtn.addEventListener('click', () => removeProject(newProject));
};
