import { createTaskCreator } from './taskcreator.mjs';

export const removeTaskCreatorDiv = (div) => {
  createTaskCreator(div.parentElement);
  div.remove();
};
