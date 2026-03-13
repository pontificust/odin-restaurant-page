import "../assets/css/global.css";
import { homeTab, contactTab, menuTab, EventHandler } from "./modules/modules.js";

window.addEventListener('DOMContentLoaded', () => {
    homeTab();
    const eventHandler = new EventHandler(homeTab, menuTab, contactTab);
    document.addEventListener('click', (e) => {
        const clickId = e.target.dataset.id;
        if(clickId) {
            const activeTab = document.querySelector('.active');
            activeTab.classList.remove('active');
            e.target.classList.add('active');
            eventHandler.click[e.target.dataset.id]();
        }
    })
});