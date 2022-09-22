import { createProjectCreator } from './projectcreator.mjs';

export const removeProjectCreatorDiv = (projectCreator, div) => {
  createProjectCreator(div.parentElement);
  div.remove();
};
