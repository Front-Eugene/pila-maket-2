const countdownElement = document.getElementById('timer');

function startCountdown() {
    let currentDate = new Date();
    let endOfDay = new Date(currentDate);
    endOfDay.setHours(23, 59, 59, 999); // Устанавливаем конец текущего дня

    let timeDiff = endOfDay.getTime() - currentDate.getTime();
    let hours, minutes, seconds;

    setInterval(() => {
        timeDiff -= 1000; // Уменьшаем на одну секунду

        hours = Math.floor(timeDiff / (1000 * 60 * 60));
        minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
        seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

        let countdownElement = document.getElementById('timer');
        countdownElement.textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

    }, 1000);
}

startCountdown(); // Запускаем таймер до конца текущего дня