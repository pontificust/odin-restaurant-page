import "./menuTab.css";
import { createElement } from "../createElement/createElement.js";
import { menuElements } from "./menuElements.js";

export const menuTab = () => {
    const contentContainer = document.querySelector('#content');
    contentContainer.innerHTML = '';

    for (let i = 0; i < menuElements.length; i += 1) {
        const newElem = createElement(menuElements[i]);
        contentContainer.appendChild(newElem);
    }
}