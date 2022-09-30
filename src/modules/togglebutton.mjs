import { getCurrentActiveButton } from './getcurrentactivebtn.mjs';
import { removeContent } from './removecontent.mjs';

export const toggleButton = (sidebar, defaultActiveButton, main) => {
  defaultActiveButton.classList.add('active');
  let currentButton = defaultActiveButton;
  getCurrentActiveButton(currentButton, main);

  sidebar.addEventListener('click', (e) => {
    if (
      e.target.classList.contains('project') &&
      e.target.classList.contains('active') === false
    ) {
      removeClassActiveFromBtns(sidebar);
      e.target.classList.add('active');
      currentButton = e.target;
      removeContent(main);
      getCurrentActiveButton(currentButton, main);
    }
  });
};

const removeClassActiveFromBtns = (sidebar) => {
  const everyChildElements = sidebar.childNodes;
  everyChildElements.forEach((element) => element.classList.remove('active'));
};
