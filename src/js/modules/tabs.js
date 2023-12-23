const tabs = (headerSelector, tabsSelector, contentSelector, activeClass, display = 'block') => {
    const header = document.querySelector(headerSelector),
          content = document.querySelectorAll(contentSelector),
          tabs = document.querySelectorAll(tabsSelector);

function hideTabContent() {
        content.forEach(item => {
            item.style.display = 'none'
        });
        tabs.forEach(item => {
            item.classList.remove(activeClass)
        });
    }

    function showTabContent(i = 0) {
        content[i].style.display = display;
        tabs[i].classList.add(activeClass);
    }

    hideTabContent();
    showTabContent();
    header.addEventListener('click', (e) => {
        const target = e.target;
        if(target && (
            target.classList.contains(tabsSelector.replace(/\./, '')) ||
            target.parentNode.classList.contains(tabsSelector.replace(/\./, ''))
        )) {
            tabs.forEach((item, i) => {
                if(target === item || target.parentNode === item) {
                    hideTabContent()
                    showTabContent(i)
                }

            })
        }
    })
}
export default tabs