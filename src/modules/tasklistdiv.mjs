import { createTaskCreator } from "./taskcreator.mjs";

export const createTaskListDiv = (content) => {
    const taskListDiv = document.createElement('div');
    taskListDiv.classList.add('tasklist');
    content.appendChild(taskListDiv);
  
    createTaskCreator(taskListDiv);
  };
  