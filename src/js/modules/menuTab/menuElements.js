import { Element } from "../Element/Element.js";
import steakIcon from "./images/steak.png";
import bombsIcon from "./images/bombs.png";
import bugIcon from "./images/bug.png";
import colaIcon from "./images/cola.png";
import iguanaIcon from "./images/iguana.png";
import noodlesIcon from "./images/noodles.png";
import spamIcon from "./images/spam.png";
import stickIcon from "./images/stick.png";

export const menuElements = [
    new Element('ul', [
        new Element('li', [
            new Element('img', '', { className: 'menu__img', src: steakIcon, width: '100', height: '100' }),
            new Element('div', [
                new Element('h3', 'Deathclaw Steak', { className: 'menu__desc-name' }),
                new Element('p', 'Seared to perfection', { className: 'menu__desc-info' }),
                new Element('p', '45 Caps', { className: 'menu__desc-price' }),
            ], { className: 'menu__desc' }),
        ], { className: 'menu__card' }),
        new Element('li', [
            new Element('img', '', { className: 'menu__img', src: iguanaIcon, width: '100', height: '100' }),
            new Element('div', [
                new Element('h3', 'Iguana Bits', { className: 'menu__desc-name' }),
                new Element('p', 'Dried & crunchy snack', { className: 'menu__desc-info' }),
                new Element('p', '20 Caps', { className: 'menu__desc-price' }),
            ], { className: 'menu__desc' }),
        ], { className: 'menu__card' }),
        new Element('li', [
            new Element('img', '', { className: 'menu__img', src: colaIcon, width: '100', height: '100' }),
            new Element('div', [
                new Element('h3', 'Nuka Cola Quantum', { className: 'menu__desc-name' }),
                new Element('p', 'Radioactive spirit', { className: 'menu__desc-info' }),
                new Element('p', '20 Caps', { className: 'menu__desc-price' }),
            ], { className: 'menu__desc' }),
        ], { className: 'menu__card' }),
        new Element('li', [
            new Element('img', '', { className: 'menu__img', src: bugIcon, width: '100', height: '100' }),
            new Element('div', [
                new Element('h3', 'Mutant Fruit Pie', { className: 'menu__desc-name' }),
                new Element('p', 'Sweet & glowing dessert', { className: 'menu__desc-info' }),
                new Element('p', '12 Caps', { className: 'menu__desc-price' }),
            ], { className: 'menu__desc' }),
        ], { className: 'menu__card' }),
        new Element('li', [
            new Element('img', '', { className: 'menu__img', src: stickIcon, width: '100', height: '100' }),
            new Element('div', [
                new Element('h3', 'Radroach Skewsers', { className: 'menu__desc-name' }),
                new Element('p', 'Roasted creature', { className: 'menu__desc-info' }),
                new Element('p', '12 Caps', { className: 'menu__desc-price' }),
            ], { className: 'menu__desc' }),
        ], { className: 'menu__card' }),
        new Element('li', [
            new Element('img', '', { className: 'menu__img', src: spamIcon, width: '100', height: '100' }),
            new Element('div', [
                new Element('h3', 'Cram Sandwich', { className: 'menu__desc-name' }),
                new Element('p', 'Mystery meat paste', { className: 'menu__desc-info' }),
                new Element('p', '8 Caps', { className: 'menu__desc-price' }),
            ], { className: 'menu__desc' }),
        ], { className: 'menu__card' }),
        new Element('li', [
            new Element('img', '', { className: 'menu__img', src: steakIcon, width: '100', height: '100' }),
            new Element('div', [
                new Element('h3', 'Pre-War steak', { className: 'menu__desc-name' }),
                new Element('p', 'Good old meat', { className: 'menu__desc-info' }),
                new Element('p', '50 Caps', { className: 'menu__desc-price' }),
            ], { className: 'menu__desc' }),
        ], { className: 'menu__card' }),
        new Element('li', [
            new Element('img', '', { className: 'menu__img', src: bombsIcon, width: '100', height: '100' }),
            new Element('div', [
                new Element('h3', 'Sugar Bombs', { className: 'menu__desc-name' }),
                new Element('p', 'Explosive great taste', { className: 'menu__desc-info' }),
                new Element('p', '8 Caps', { className: 'menu__desc-price' }),
            ], { className: 'menu__desc' }),
        ], { className: 'menu__card' }),
        new Element('li', [
            new Element('img', '', { className: 'menu__img', src: noodlesIcon, width: '100', height: '100' }),
            new Element('div', [
                new Element('h3', 'Noodles', { className: 'menu__desc-name' }),
                new Element('p', 'Simple noodles', { className: 'menu__desc-info' }),
                new Element('p', '5 Caps', { className: 'menu__desc-price' }),
            ], { className: 'menu__desc' }),
        ], { className: 'menu__card' }),
    ], { className: 'menu__cards' }),
];