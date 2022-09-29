import { pages } from './pages.mjs';

export const storeToPages = (id, name) => {
  let firstClass = id.split(' ')[0];
  pages.push({ id: firstClass, name });
  console.log(pages);
};
