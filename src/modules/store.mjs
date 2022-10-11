import { pages } from './pages.mjs';

export const storeToPages = (id, name) => {
  let firstClass = id.split(' ')[0];
  pages.push({ id: firstClass, name, list: [] });
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

export const updateTask = (task, checklistBtnValue) => {
  task.checklist = checklistBtnValue;
  console.log(task);
};

export let currPage = [];