import { createProjectCreator } from './projectcreator.mjs';

export const removeProjectCreatorDiv = (div) => {
  createProjectCreator(div.parentElement);
  div.remove();
};
