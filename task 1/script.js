function updateTime() {
    const hours = document.querySelector('#hours');
    const minutes = document.querySelector('#minutes');
    const seconds = document.querySelector('#seconds');

    let time = Number(hours.value) * 60 * 60 + Number(minutes.value) * 60 + Number(seconds.value);
    if (time <= 0) {
        clearInterval(timer);
    } else {
        --time;
        hours.value = Math.floor(time / (60 * 60));
        minutes.value = Math.floor(time / 60);
        seconds.value = time % 60;
    }
}

// запуск и остановка таймера по клику на соответствующую кнопку
const start = document.querySelector('.start');
const stop = document.querySelector('.stop');
let timer = false;
start.addEventListener('click', () => {
    if (!timer) {
        timer = setInterval(updateTime, 1000);
    }
});
stop.addEventListener('click', () => {
    clearInterval(timer);
    timer = false;
});

// разрешение вводить в инпуты только цифры
function numbers() {
    if (event.keyCode < 48 || event.keyCode > 57)
    event.preventDefault();
}
