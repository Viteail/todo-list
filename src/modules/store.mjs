import { pages } from './pages.mjs';

export const storeToPages = (id, name) => {
  pages.push({ id, name, list: [] });
  console.log(pages);
};

export const storeTaskToPage = (page, checklist, task) => {
  const list = page.list;
  list.push({
    checklist,
    text: task,
  });
  console.log(list)
};

export const updateTask = (task, checklistBtnValue, text) => {
  task.checklist = checklistBtnValue;
  task.text = text;
  console.log(task);
};

export let currPage = [];