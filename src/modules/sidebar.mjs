import { toggleButton } from './togglebutton.mjs';
import { createProjectCreator } from './projectcreator.mjs';
import { storeToPages } from './store.mjs';
import { pages } from './pages.mjs';
import { addProject } from './addproject.mjs';

export const createSidebar = (main) => {
  const sidebar = document.createElement('div');
  sidebar.classList.add('sidebar');
  main.appendChild(sidebar);

  createSidebarButtons(sidebar, main);
};
const createSidebarButtons = (sidebar, main) => {
  const iconCalendarToday = document.createElement('img');
  iconCalendarToday.src = '../../dist/style/images/calendar-today.svg';

  const buttonToday = document.createElement('button');
  buttonToday.classList.add('btn-today', 'project');
  buttonToday.textContent = 'Today';
  buttonToday.appendChild(iconCalendarToday);

  const iconCalendarWeek = document.createElement('img');
  iconCalendarWeek.src = '../../dist/style/images/calendar-week.svg';

  const buttonWeek = document.createElement('button');
  buttonWeek.classList.add('btn-week', 'project');
  buttonWeek.textContent = 'Week';
  buttonWeek.appendChild(iconCalendarWeek);

  sidebar.appendChild(buttonToday);
  sidebar.appendChild(buttonWeek);

  createParaProject(sidebar);
  createProjectCreator(sidebar);

  if (localStorage.length !== 0) {
    pages = JSON.parse(localStorage.getItem('pages'));
    console.log(pages);

    pages.forEach((page) => {
      if (page.id === 'Today' || page.id === 'Week') {
        return;
      } else {
        createPages(sidebar, page);
      }
    });
  }

  if (pages.length === 0) {
    storeToPages(buttonToday.textContent, buttonToday.textContent);
    storeToPages(buttonWeek.textContent, buttonWeek.textContent);
  }

  toggleButton(sidebar, buttonToday, main);
};

const createParaProject = (sidebar) => {
  const paraProject = document.createElement('p');
  paraProject.classList.add('bigtext');
  paraProject.textContent = 'Projects';

  sidebar.appendChild(paraProject);
};

const createPages = (sidebar, page) => {
  const taskCreatorDiv = sidebar.lastChild;

  addProject(sidebar, page.name, taskCreatorDiv);
};
