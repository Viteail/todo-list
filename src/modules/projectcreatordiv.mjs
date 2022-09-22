import { addProject } from './addproject.mjs';
import { removeProjectCreatorDiv } from './removeprojectcreatordiv.mjs';

export const createProjectCreatorDiv = (projectCreator, sidebar) => {
  projectCreator.addEventListener('click', () => {
    projectCreator.remove();
    createDiv(sidebar, projectCreator);
  });
};

const createDiv = (sidebar, projectCreator) => {
  const div = document.createElement('div');
  div.classList.add('wrapper-projectcreator');
  sidebar.appendChild(div);
  createInput(div);
  createWrapper(div, projectCreator, sidebar);
};

const createInput = (div) => {
  const input = document.createElement('input');
  input.maxLength = '15';
  input.classList.add('input-projectcreator');
  div.appendChild(input);
};

const createWrapper = (div, projectCreator, sidebar) => {
  const wrapper = document.createElement('div');
  wrapper.classList.add('wrapper-btns-projectcreator');
  div.appendChild(wrapper);
  createAddButton(wrapper, div, projectCreator, sidebar);
  createCloseButton(wrapper, div, projectCreator);
};

const createAddButton = (wrapper, div, projectCreator, sidebar) => {
  const buttonAdder = document.createElement('button');
  buttonAdder.classList.add('btn-adder');
  buttonAdder.textContent = 'Add';
  wrapper.appendChild(buttonAdder);

  buttonAdder.addEventListener('click', () => {
    let inputValue = div.firstChild.value;

    if (inputValue.length !== 0) {
      addProject(sidebar, inputValue, div, projectCreator);
    }
  });
};

const createCloseButton = (wrapper, div, projectCreator) => {
  const buttonCloser = document.createElement('button');
  buttonCloser.classList.add('btn-closer');
  buttonCloser.textContent = 'Close';
  wrapper.appendChild(buttonCloser);

  buttonCloser.addEventListener('click', () =>
    removeProjectCreatorDiv(projectCreator, div)
  );
};
