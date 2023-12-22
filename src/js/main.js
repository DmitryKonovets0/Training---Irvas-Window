import './slider'
import modal from "./modules/modal";
import tabs from "./modules/tabs";
import forms from "./modules/form";
window.addEventListener('DOMContentLoaded', () => {
    modal()
    tabs('.glazing_slider ', '.glazing_block', '.glazing_content', 'active');
    tabs('.decoration_slider', '.no_click', '.decoration_content > div > div', 'after_click');
    forms()
})