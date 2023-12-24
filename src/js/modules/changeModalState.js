import checkNumInput from "./checkNumInputs";
const changeModalState = (state) => {

    const windowWidth = document.querySelectorAll('#width'),
          windowHeight = document.querySelectorAll('#height'),
          windowForm = document.querySelectorAll('.balcon_icons_img'),
          windowType = document.querySelectorAll('#view_type'),
          windowProfile = document.querySelectorAll('.checkbox');

    checkNumInput('#width')
    checkNumInput('#height')


    function bindActionToElem(action, elem, prop) {
        elem.forEach((item, i) => {
            item.addEventListener(action, () => {
                switch (item.nodeName) {
                    case 'SPAN':
                        state[prop] = i;
                        break;
                    case 'INPUT':
                        if(item.getAttribute('type') === 'checkbox'){
                            i === 0 ? state[prop] = 'cold' : state[prop] = "warm"
                            elem.forEach((box, j) => {
                                box.checked = false;
                                if( i === j) {
                                    box.checked = true;
                                }
                            });
                        } else{
                            state[prop] = item.value
                        } break;
                    case 'SELECT':
                        state[prop] = item.value
                        break;
                }
                console.log(state)
            })
        })

    }
    bindActionToElem('click', windowForm, 'form')
    bindActionToElem('input', windowWidth, 'width')
    bindActionToElem('input', windowHeight, 'height')
    bindActionToElem('change', windowType, 'type')
    bindActionToElem('change', windowProfile, 'profile')

}

export default changeModalState