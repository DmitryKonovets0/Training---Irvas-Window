
const modals = (state) => {


    function bindModal(triggerSelector, modalSelector, closeSelector, closeClickOverlay = true) {
        const trigger = document.querySelectorAll(triggerSelector),
            modal = document.querySelector(modalSelector),
            close = document.querySelector(closeSelector),
            windows = document.querySelectorAll('[data-modal]');

        trigger.forEach(item => {
            item.addEventListener('click', (e) => {
                if (e.target) {
                    e.preventDefault();
                }

                windows.forEach(item => {
                    item.style.display = 'none';
                });

                modal.style.display = "block";
                document.body.style.overflow = "hidden";
                // document.body.classList.add('modal-open');
            });
        });

        close.addEventListener('click', () => {
            windows.forEach(item => {
                item.style.display = 'none';
            });

            modal.style.display = "none";
            document.body.style.overflow = "";
            // document.body.classList.remove('modal-open');
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal && closeClickOverlay) {
                windows.forEach(item => {
                    item.style.display = 'none';
                });

                modal.style.display = "none";
                document.body.style.overflow = "";
                // document.body.classList.remove('modal-open');
            }
        });
    }

    function showModalByTime(selector, time) {
        setTimeout(function() {
            document.querySelector(selector).style.display = 'block';
            document.body.style.overflow = "hidden";
        }, time);
    }

    console.log(state)
    const width = document.querySelector('#width'),
          height = document.querySelector('#height'),
          profiles = document.querySelectorAll('.checkbox'),
          calcBtn = document.querySelector('button.popup_calc_button'),
          profileBtn = document.querySelector('button.popup_calc_profile_button')


    calcBtn.setAttribute('disabled', 'true')
    profileBtn.setAttribute('disabled', 'true')
    let i = 0, k = 0
    width.addEventListener('input', () => {
        ++i
        if(i > 0) {
            calcBtn.removeAttribute('disabled', 'true')

        }
    })
    height.addEventListener('input', () => {
        ++i;
    })
    profiles.forEach(profile => {
        profile.addEventListener('change', () => {
            k++
            if(k > 0) {
                profileBtn.removeAttribute('disabled', 'true')
            }
            console.log(k)

        })
    })

    console.log(i)



    bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
    bindModal('.phone_link', '.popup', '.popup .popup_close');
    bindModal('.popup_calc_btn', '.popup_calc', '.popup_calc_close', false);
    bindModal('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close', false);
    bindModal('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close', false);
    // showModalByTime('.popup', 60000);


};

export default modals;