import { toggleButton } from './togglebutton.mjs';
import { createProjectCreator } from './projectcreator.mjs';
import { storeToPages } from './store.mjs';

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
  storeToPages(buttonToday.className, buttonToday.textContent);
  sidebar.appendChild(buttonWeek);
  storeToPages(buttonWeek.className, buttonWeek.textContent);

  createParaProject(sidebar);
  createProjectCreator(sidebar);
  toggleButton(sidebar, buttonToday, main);
};

const createParaProject = (sidebar) => {
  const paraProject = document.createElement('p');
  paraProject.classList.add('bigtext');
  paraProject.textContent = 'Projects';

  sidebar.appendChild(paraProject);
};