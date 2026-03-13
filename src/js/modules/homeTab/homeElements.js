import { Element } from "../Element/Element.js";
import burgerIcon from "./burger.png";

export const homeElements = [
    new Element('div', [
        new Element('section', [
            new Element('h2', 'WELCOM TO GLUTTON', { className: 'hero__title' }),
            new Element('img', '', { className: 'hero__icon', alt: 'logo image', src: burgerIcon }),
            new Element('h3', 'Serving the Mojave since the Great War. Mostly.', { className: 'hero__subtitle' }),
        ], { className: 'hero' }),
        new Element('section', [
            new Element('h3', '>> SYSTEM LOG: 2281', { className: 'about__title' }),
            new Element('ul', [
                new Element('li', 'Ration stocks: CRITICAL', { className: 'about__indicator' }),
                new Element('li', 'Clean water levels: NOMINAL', { className: 'about__indicator' }),
                new Element('li', 'Current Specials: Deathclaw Omelette (Seasoned with Mojave dust).', { className: 'about__indicator' }),
            ], { className: 'about__indicators' }),
            new Element('p', 'Serving the Mojave since the Great War. Mostly.', { className: 'hero__subtitle' }),
        ], { className: 'about' }),
        new Element('section', [
            new Element('ul', [
                new Element('li', 'RADIATION LEVELS: 0.05 RADS', { className: 'status__item' }),
                new Element('li', 'WE ACCEPT: BOTTLECAPS', { className: 'status__item' })
            ], { className: 'status__items' }),
        ], { className: 'status' }),
    ], { className: 'home' }),

];