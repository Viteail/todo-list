import { pages } from './pages.mjs';
import { getCurrentActiveButton } from './getcurrentactivebtn.mjs';
import { removeContent } from './removecontent.mjs';
import { storeToLocalStorage } from './store.mjs';

export const removeProject = (project) => {
  goToDefaultPage(project);
  project.remove();

  const indexOfObject = pages.findIndex(
    (page) => page.id === project.textContent
  );

  pages.splice(indexOfObject, 1);

  storeToLocalStorage();
};

const goToDefaultPage = (project) => {
  const sidebar = project.parentElement;
  const main = sidebar.parentElement;
  const todayBtn = sidebar.firstChild;
  if (project.classList.contains('active')) {
    project.classList.remove('active');
    todayBtn.classList.add('active');
    removeContent(main);
    getCurrentActiveButton(todayBtn, main);
  }
};
