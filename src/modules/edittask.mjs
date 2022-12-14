import { updateTask } from './store.mjs';

export const editTask = (editTaskBtn, task, currPage) => {
  const taskList = task.parentElement;

  editTaskBtn.addEventListener('click', () => {
    let taskEditState = undefined;

    taskList.childNodes.forEach((element) => {
      if (element.style.flexDirection === 'column') {
        taskEditState = element;
      }
    });

    const createEditContent = (task, currPage) => {
      const everyChildElements = task.childNodes;
      everyChildElements.forEach((element) => (element.style.display = 'none'));
      task.style.flexDirection = 'column';
      createInput(task);
      createBtnWrapper(task, everyChildElements, currPage);
    };

    if (taskEditState === undefined) {
      createEditContent(task, currPage);
    } else {
      displayTask(taskEditState.childNodes, taskEditState);
      createEditContent(task, currPage);
    }
  });
};

const createInput = (task) => {
  const input = document.createElement('input');
  input.classList.add('input-edit');
  input.placeholder = 'Edit task...';
  task.appendChild(input);
};

const createBtnWrapper = (task, everyChildElements, currPage) => {
  const btnWrapper = document.createElement('div');
  btnWrapper.classList.add('wrapper-btns-edit');
  task.appendChild(btnWrapper);

  createEditButton({
    btnWrapper,
    task,
    everyChildElements,
    currPage,
  });
  createCancelButton(btnWrapper, task, everyChildElements);
};

const createEditButton = (args) => {
  const { btnWrapper, task, everyChildElements, currPage } = args;

  const editButton = document.createElement('button');
  editButton.classList.add('btn-edit');
  editButton.textContent = 'Edit';
  btnWrapper.appendChild(editButton);

  let inputEditValue = undefined;
  const inputEdit = everyChildElements[4];
  const taskText = everyChildElements[1];
  const checklistBtn = everyChildElements[0];

  editButton.addEventListener('click', () => {
    inputEditValue = inputEdit.value;
    if (
      inputEditValue.length !== 0 &&
      currPage.list.find((task) => task.text === inputEditValue) === undefined
    ) {
      updateTask(
        currPage.list.find((task) => task.text === taskText.textContent),
        checklistBtn.value,
        inputEditValue
      );
      taskText.textContent = inputEditValue;
      displayTask(everyChildElements, task);
    } else if (inputEditValue.length === 0) {
      alert('Enter a name');
    } else {
      alert('Already exist name');
    }
  });
};

const createCancelButton = (btnWrapper, task, everyChildElements) => {
  const cancelButton = document.createElement('button');
  cancelButton.classList.add('btn-cancel');
  cancelButton.textContent = 'Cancel';
  btnWrapper.appendChild(cancelButton);

  cancelButton.addEventListener('click', () => {
    displayTask(everyChildElements, task);
  });
};

const displayTask = (everyChildElements, task) => {
  const inputEdit = everyChildElements[4];
  const btnWrapper = task.lastChild;

  inputEdit.remove();
  btnWrapper.remove();

  task.style.flexDirection = 'row';
  everyChildElements.forEach((element) => {
    element.style.display = 'flex';
  });
};
