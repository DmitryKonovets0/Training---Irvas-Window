const timer = (selector, deadline) => {
    function getZero(num) {
        if(num <= 9 ) {
            return '0' + num
        } else {
            return num
        }
    }
    function getTimeRemaining(deadline) {
        const t = Date.parse(deadline) - Date.parse(new Date()),
              days = Math.floor(t / (1000 * 60 * 60 * 24)),
              hours = Math.floor((t / (1000 * 60 * 60)) % 24),
              minutes = Math.floor((t / (1000 * 60)) % 60),
              seconds = Math.floor((t / 1000) % 60);
        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        }
    }
    function setClock(selector, deadline) {
        const timer = document.querySelector(selector),
              days = timer.querySelector("#days"),
              hours = timer.querySelector("#hours"),
              minutes = timer.querySelector("#minutes"),
              seconds = timer.querySelector("#seconds"),
              timeInterval = setInterval(updateClock, 1000);
        updateClock()
        function updateClock() {
            const t = getTimeRemaining(deadline);
            days.textContent = getZero(t.days);
            hours.textContent = getZero(t.hours);
            minutes.textContent = getZero(t.minutes);
            seconds.textContent = getZero(t.seconds)

            if(t.total <= 0) {
                days.textContent = '00'
                hours.textContent = '00'
                minutes.textContent = '00'
                seconds.textContent = '00'
                clearInterval(timeInterval)
            }
        }
    }
    setClock(selector, deadline)
}
export default timer