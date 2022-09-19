import { createHeader } from './modules/header.mjs';
import { createMain } from './modules/main.mjs';
import { createSidebar } from './modules/sidebar.mjs';

const wrapper = document.querySelector('#wrapper');

const main = document.createElement('div');

createHeader(wrapper);

createMain(wrapper, main);

createSidebar(main);
