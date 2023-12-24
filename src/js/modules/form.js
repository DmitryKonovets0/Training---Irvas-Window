import checkNumInput from "./checkNumInputs";
const forms = (state) => {
    const forms = document.querySelectorAll('form'),
        inputs = document.querySelectorAll('input');

    checkNumInput('input[name="user_phone"]');

    const message = {
        loading: 'Загрузка...',
        success: 'Спасибо! Скоро мы с вами свяжемся',
        failure: 'Что-то пошло не так...'
    };

    const postData = async (url, data) => {
        document.querySelector('.status').textContent = message.loading;
        let res = await fetch(url, {
            method: "POST",
            body: data
        });

        return await res.text();
    };

    const clearInputs = () => {
        inputs.forEach(item => {
            item.value = '';
        });
    };

    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            let statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            form.appendChild(statusMessage);
            const formData = new FormData(form);

            postData('assets/server.php', formData)
                .then(res => {
                    console.log(res);
                    statusMessage.textContent = message.success;
                })
                .catch(() => statusMessage.textContent = message.failure)
                .finally(() => {
                    clearInputs();
                    setTimeout(() => {
                        statusMessage.remove();
                        hideModal()
                        clearState()
                    }, 2000);
                    console.log(state)
                });

        });

    });

    const hideModal = () => {
        const modalEnd =  document.querySelector('.popup_calc_end');
        modalEnd.style.display = 'none';
    }
    const clearState = () => {
        for (const key in state) {
            switch (key) {
                case 'form' :
                    state.form = 0
                    break;
                case 'width':
                    state.width = null
                    break;
                case 'height':
                    state.height = null
                    break;
                case 'type':
                    state.type = 'tree'
                    break;
                case 'profile':
                    delete state.profile;

            }
        }
    }
    }
export default forms;
