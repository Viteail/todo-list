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
    task,
  });
  console.log(page);
};
