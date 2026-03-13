import { Element } from "../Element/Element.js";
import contactIcon from "./contact.png";

export const contactElements = [
    new Element('div', [
        new Element('section', [
            new Element('div', [
                new Element('ul', [
                    new Element('li', 'LOCATION: New Vegas Strip', { className: 'contact__desc-item' }),
                    new Element('li', 'FREQ: 101.5 MHz', { className: 'contact__desc-item' }),
                    new Element('li', 'OPERATING HOURS: 6 - 22', { className: 'contact__desc-item' }),
                ], { className: 'contact__desc-items' }),
                new Element('img', '', { className: 'contact__image', src: contactIcon }),
            ], { className: 'contact__desc' }),
            new Element('form', [
                new Element('h2', 'COMMUNICATIONS LOG', { className: 'contact__form-title' }),
                new Element('div', [
                    new Element('label', 'SENDER ID', { className: 'contact__form-label', for: 'name' }),
                    new Element('input', '', { className: 'contact__form-field', name: 'name', type: 'name', id: 'name' }),
                ], { className: 'contact__form-fields' }),
                new Element('div', [
                    new Element('label', 'ORIGIN FREQUENCY', { className: 'contact__form-label', for: 'email' }),
                    new Element('input', '', { className: 'contact__form-field', name: 'email', type: 'email', id: 'email' }),
                ], { className: 'contact__form-fields' }),
                new Element('div', [
                    new Element('label', 'TRANSMISSION DATA', { className: 'contact__form-label', for: 'message' }),
                    new Element('textarea', '', { className: 'contact__form-field', name: 'message', id: 'message' }),
                ], { className: 'contact__form-fields' }),
                new Element('button', 'SEND SIGNAL', { className: 'contact__form-submit'}),
            ], { className: 'contact__form' }),
        ], { className: 'contact' }),
    ], { className: 'contact__wrapper' }),
];