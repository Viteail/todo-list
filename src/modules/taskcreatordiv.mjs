import { removeTaskCreatorDiv } from './removetaskcreatordiv.mjs';
import { addTask } from './addtask.mjs';

export const createTaskCreatorDiv = (taskCreator, taskListDiv) => {
  taskCreator.addEventListener('click', () => {
    taskCreator.remove();
    createDiv(taskListDiv);
  });
};

const createDiv = (taskListDiv) => {
  const div = document.createElement('div');
  div.classList.add('wrapper-taskcreator');
  taskListDiv.appendChild(div);

  createInput(div);
  createWrapper(div, taskListDiv);
};

const createInput = (div) => {
  const input = document.createElement('input');
  input.classList.add('input-taskcreator');
  input.placeholder = 'Task...';
  div.appendChild(input);
};

const createWrapper = (div, taskListDiv) => {
  const wrapper = document.createElement('div');
  wrapper.classList.add('wrapper-btns-taskcreator');
  div.appendChild(wrapper);

  createAddButton(wrapper, div, taskListDiv);
  createCloseButton(wrapper, div);
};

const createAddButton = (wrapper, div, taskListDiv) => {
  const buttonAdder = document.createElement('button');
  buttonAdder.classList.add('btn-adder-taskcreator');
  buttonAdder.textContent = 'Add';

  wrapper.appendChild(buttonAdder);

  buttonAdder.addEventListener('click', () => {
    let inputValue = div.firstChild.value;

    if (inputValue.length !== 0) {
      addTask(taskListDiv, inputValue);
      removeTaskCreatorDiv(div);
    }
  });
};

const createCloseButton = (wrapper, div) => {
  const buttonCloser = document.createElement('button');
  buttonCloser.classList.add('btn-closer-taskcreator');
  buttonCloser.textContent = 'Close';

  wrapper.appendChild(buttonCloser);

  buttonCloser.addEventListener('click', () => {
    removeTaskCreatorDiv(div);
  });
};
