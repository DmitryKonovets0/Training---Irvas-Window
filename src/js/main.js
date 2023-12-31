import './slider'
import modal from "./modules/modal";
import tabs from "./modules/tabs";
import forms from "./modules/form";
import changeModalState from "./modules/changeModalState";
import timer from "./modules/timer";
import images from "./modules/images";
window.addEventListener('DOMContentLoaded', () => {
    let modalState = {}
    changeModalState(modalState)
    modal(modalState)
    images()
    timer('#timer', '2024-01-01')
    tabs('.glazing_slider ', '.glazing_block', '.glazing_content', 'active');
    tabs('.decoration_slider', '.no_click', '.decoration_content > div > div', 'after_click');
    tabs('.balcon_icons', '.balcon_icons_img', '.big_img > img', 'do_image_more', 'inline-block' );
    forms( modalState)
})