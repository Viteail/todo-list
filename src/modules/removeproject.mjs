import { pages } from './pages.mjs';
import { getCurrentActiveButton } from './getcurrentactivebtn.mjs';
import { removeContent } from './removecontent.mjs';

export const removeProject = (project) => {
  goToDefaultPage(project);
  project.remove();

  const indexOfObject = pages.findIndex(
    (page) => page.id === `${project.className.split(' ')[0]}`
  );

  pages.splice(indexOfObject, 1);
  console.log(pages);
};

const goToDefaultPage = (project) => {
  const sidebar = project.parentElement;
  const main = sidebar.parentElement;
  const todayBtn = sidebar.firstChild;
  if (project.classList.contains('active')) {
    todayBtn.classList.add('active');
    removeContent(main);
    getCurrentActiveButton(todayBtn, main);
  }
};
