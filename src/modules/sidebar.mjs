export const createSideBar = (main) => {
    const sideBar = document.createElement('div');
    sideBar.classList.add('sidebar');
    main.appendChild(sideBar);
}