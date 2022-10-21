import { pages } from './pages.mjs';

export const storeToPages = (id, name) => {
  pages.push({ id, name, list: [] });
  storeToLocalStorage();
};

export const storeTaskToPage = (page, checklist, task) => {
  const list = page.list;
  list.push({
    checklist,
    text: task,
  });
  storeToLocalStorage();
};

export const updateTask = (task, checklistBtnValue, text) => {
  task.checklist = checklistBtnValue;
  task.text = text;
  storeToLocalStorage();
};

export let currPage = [];

export const storeToLocalStorage = () => {
  localStorage.setItem('pages', JSON.stringify(pages));
};
