import './contactTab.css';
import { createElement } from '../createElement/createElement.js';
import { contactElements } from './contactElements.js';

export const contactTab = () => {
    const contentContainer = document.querySelector('#content');
    contentContainer.innerHTML = '';

    for (let i = 0; i < contactElements.length; i += 1) {
        const newElem = createElement(contactElements[i]);
        contentContainer.appendChild(newElem);
    }
}