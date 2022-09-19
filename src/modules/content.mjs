export const createContent = (currentActiveButton, main) => {
  const content = document.createElement('div');
  content.classList.add('content');
  main.appendChild(content);

  createParaProjectName(content, currentActiveButton);
};

const createParaProjectName = (content, currentActiveButton) => {
  let projectName = currentActiveButton.textContent;

  const paraProjectName = document.createElement('p');
  paraProjectName.textContent = projectName;
  paraProjectName.classList.add('bigtext');
  content.appendChild(paraProjectName);
};
