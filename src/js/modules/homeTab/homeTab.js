import "./homeTab.css";
import { createElement } from "../createElement/createElement.js";
import { homeElements } from "./homeElements.js";

export const homeTab = () => {
    const contentContainer = document.querySelector('#content');

    contentContainer.innerHTML = '';

    for(let i = 0; i < homeElements.length; i += 1) {
        const newElem = createElement(homeElements[i]);
        contentContainer.appendChild(newElem);
    }
    
};