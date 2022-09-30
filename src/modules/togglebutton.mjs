import { getCurrentActiveButton } from './getcurrentactivebtn.mjs';
import { removeContent } from './removecontent.mjs';
import { storeToPages } from './store.mjs';
import { pages } from './pages.mjs';

export const toggleButton = (sidebar, defaultActiveButton, main) => {
  defaultActiveButton.classList.add('active');
  let currentButton = defaultActiveButton;
  getCurrentActiveButton(currentButton, main);

  sidebar.addEventListener('click', (e) => {
    if (e.target.classList.contains('project') && currentButton !== e.target) {
      removeClassActive(currentButton);
      e.target.classList.add('active');
      currentButton = e.target;
      removeContent(main);
      getCurrentActiveButton(currentButton, main);
    }
  });
};

const removeClassActive = (prevButton) => {
  prevButton.classList.remove('active');
};