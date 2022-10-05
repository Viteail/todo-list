import { pages } from './pages.mjs';

export const removeTask = (task, inputValue) => {
  getCurrentActiveButton(task, inputValue);

  task.remove();
};

const getCurrentActiveButton = (task, inputValue) => {
  const taskListDiv = task.parentElement;
  const content = taskListDiv.parentElement;
  const main = content.parentElement;
  const sidebar = main.firstChild;
  const everyChildElements = sidebar.childNodes;

  everyChildElements.forEach((element) => {
    if (element.classList.contains('active')) {
      getCurrentPage(element, task, inputValue);
    }
  });
};

const getCurrentPage = (currentActiveButton, task, inputValue) => {
  const firstClassOfCurrBtn = currentActiveButton.className.split(' ')[0];
  const currPage = pages.find((page) => page.id === firstClassOfCurrBtn);
  const list = currPage.list;

  const indexOfObject = list.findIndex((task) => task.text === inputValue);

  list.splice(indexOfObject, 1);
  console.log(currPage);
};
