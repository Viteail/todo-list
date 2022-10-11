import { removeTaskCreatorDiv } from './removetaskcreatordiv.mjs';
import { addTask } from './addtask.mjs';

export const createTaskCreatorDiv = (taskCreator, taskListDiv, currentPage) => {
  taskCreator.addEventListener('click', () => {
    taskCreator.remove();
    createDiv(taskListDiv, currentPage);
  });
};

const createDiv = (taskListDiv, currentPage) => {
  const div = document.createElement('div');
  div.classList.add('wrapper-taskcreator');
  taskListDiv.appendChild(div);

  createInput(div);
  createWrapper(div, taskListDiv, currentPage);
};

const createInput = (div) => {
  const input = document.createElement('input');
  input.classList.add('input-taskcreator');
  input.placeholder = 'Task...';
  div.appendChild(input);
};

const createWrapper = (div, taskListDiv, currentPage) => {
  const wrapper = document.createElement('div');
  wrapper.classList.add('wrapper-btns-taskcreator');
  div.appendChild(wrapper);

  createAddButton(wrapper, div, taskListDiv, currentPage);
  createCloseButton(wrapper, div);
};

const createAddButton = (wrapper, div, taskListDiv, currentPage) => {
  const buttonAdder = document.createElement('button');
  buttonAdder.classList.add('btn-adder-taskcreator');
  buttonAdder.textContent = 'Add';

  wrapper.appendChild(buttonAdder);

  buttonAdder.addEventListener('click', () => {
    let inputValue = div.firstChild.value;
    let availableName = currentPage.list.find(
      (task) => task.text === inputValue
    );

    if (inputValue.length !== 0 && availableName === undefined) {
      addTask(taskListDiv, inputValue);
    } else if (inputValue.length === 0) {
      alert('Enter a name');
    } else {
      alert('already exist name');
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
