import "./mainTab.css";
import { createElement } from "../createElement/createElement.js";
import { main } from "./mainElements.js";

export const mainTab = () => {
    const contentContainer = document.querySelector('#content');

    contentContainer.innerHTML = '';

    for(let i = 0; i < main.length; i += 1) {
        const newElem = createElement(main[i]);
        contentContainer.appendChild(newElem);
    }
    
};