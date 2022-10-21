import { addProject } from './addproject.mjs';
import { removeProjectCreatorDiv } from './removeprojectcreatordiv.mjs';
import { pages } from './pages.mjs';

export const createProjectCreatorDiv = (projectCreator, sidebar) => {
  projectCreator.addEventListener('click', () => {
    projectCreator.remove();
    createDiv(sidebar);
  });
};

const createDiv = (sidebar) => {
  const div = document.createElement('div');
  div.classList.add('wrapper-projectcreator');
  sidebar.appendChild(div);
  createInput(div);
  createWrapper(div, sidebar);
};

const createInput = (div) => {
  const input = document.createElement('input');
  input.classList.add('input-projectcreator');
  input.maxLength = '15';
  input.placeholder = 'Project name...';
  div.appendChild(input);
};

const createWrapper = (div, sidebar) => {
  const wrapper = document.createElement('div');
  wrapper.classList.add('wrapper-btns-projectcreator');
  div.appendChild(wrapper);
  createAddButton(wrapper, div, sidebar);
  createCloseButton(wrapper, div);
};

const createAddButton = (wrapper, div, sidebar) => {
  const buttonAdder = document.createElement('button');
  buttonAdder.classList.add('btn-adder-projectcreator');
  buttonAdder.textContent = 'Add';
  wrapper.appendChild(buttonAdder);

  buttonAdder.addEventListener('click', () => {
    let inputValue = div.firstChild.value;
    let availableName = pages.find((page) => page.name === inputValue);

    if (inputValue.length !== 0 && availableName === undefined) {
      addProject(sidebar, inputValue, div);
    } else if (inputValue.length === 0) {
      alert('Enter a name');
    } else {
      alert('Already exist name');
    }
  });
};

const createCloseButton = (wrapper, div) => {
  const buttonCloser = document.createElement('button');
  buttonCloser.classList.add('btn-closer-projectcreator');
  buttonCloser.textContent = 'Close';
  wrapper.appendChild(buttonCloser);

  buttonCloser.addEventListener('click', () => removeProjectCreatorDiv(div));
};
