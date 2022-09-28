export const checkListTask = (checkListBtn) => {
  const iconCheck = document.createElement('img');
  iconCheck.src = '/dist/style/images/check.svg';
  checkListBtn.addEventListener('click', () => {
    if (checkListBtn.firstChild === null) {
      checkListBtn.appendChild(iconCheck);
    } else {
      checkListBtn.removeChild(checkListBtn.firstChild);
    }
  });
};
