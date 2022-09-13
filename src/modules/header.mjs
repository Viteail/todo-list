export const createHeader = (wrapper) => {
  const header = document.createElement('div');
  header.classList.add('header');
  header.textContent = 'TODO LIST';
  wrapper.appendChild(header);
};
