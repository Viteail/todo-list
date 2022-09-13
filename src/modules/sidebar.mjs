export const createSidebar = (main) => {
  const sidebar = document.createElement('div');
  sidebar.classList.add('sidebar');
  main.appendChild(sidebar);

  createSidebarButtons(sidebar);
};
const createSidebarButtons = (sidebar) => {
  const iconCalendarToday = document.createElement('img');
  iconCalendarToday.src = '../../dist/style/images/calendar-today.svg';

  const buttonToday = document.createElement('button');
  buttonToday.classList.add('btn-today');
  buttonToday.textContent = 'Today';
  buttonToday.appendChild(iconCalendarToday);

  const iconCalendarWeek = document.createElement('img');
  iconCalendarWeek.src = '../../dist/style/images/calendar-week.svg';

  const buttonWeek = document.createElement('button');
  buttonWeek.classList.add('btn-week');
  buttonWeek.textContent = 'Week';
  buttonWeek.appendChild(iconCalendarWeek);

  sidebar.appendChild(buttonToday);
  sidebar.appendChild(buttonWeek);

  createParaProject(sidebar);
  createProjectCreator(sidebar);
};

const createParaProject = (sidebar) => {
  const paraProject = document.createElement('p');
  paraProject.classList.add('bigText');
  paraProject.textContent = 'Projects';

  sidebar.appendChild(paraProject);
};

const createProjectCreator = (sidebar) => {
  const iconPlus = document.createElement('img');
  iconPlus.src = '../../dist/style/images/plus.svg';

  const projectCreator = document.createElement('button');
  projectCreator.classList.add('btn-addproject');
  projectCreator.textContent = 'Add Project';
  projectCreator.appendChild(iconPlus);

  sidebar.appendChild(projectCreator);
};
