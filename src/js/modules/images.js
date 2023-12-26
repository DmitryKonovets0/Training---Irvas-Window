const images = () => {

    const imgPopup = document.createElement('div'),
          worksSection = document.querySelector('.works'),
          bigImg = document.createElement('img');

    worksSection.appendChild(imgPopup);
    imgPopup.classList.add('popup');
    imgPopup.appendChild(bigImg);

    imgPopup.style.justifyContent = 'center';
    imgPopup.style.alignItems = 'center';
    imgPopup.style.display = 'none';

    worksSection.addEventListener('click', (e) => {
        e.preventDefault();

        const target = e.target;

        if(target && target.classList.contains("preview")) {

            imgPopup.style.display = 'flex';
            const path = target.parentNode.getAttribute('href');
            bigImg.setAttribute('src', path);
            bigImg.style.width = '45%'
            bigImg.style.height = '85%'
        }
        if(target && target.matches('div.popup')) {
            imgPopup.style.display = 'none';
        }
    })
}
export default images