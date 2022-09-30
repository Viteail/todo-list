import { pages } from './pages.mjs';

export const removeProject = (project) => {
  project.remove();

  const indexOfObject = pages.findIndex(
    (page) => page.id === `${project.className.split(' ')[0]}`
  );

  pages.splice(indexOfObject, 1);
  console.log(pages);
};
