function timer() {
    let seconds = $("#seconds");
    let minutes = $("#minutes");
    let hours = $("#hours");
    let startBtn = $("#start-timer");
    let stopBtn = $("#stop-timer");

    let interval = undefined;


    startBtn.click(function () {
        if (!interval) {
            interval = setInterval(step, 1000);
        }
    });

    stopBtn.click(function () {
        clearInterval(interval);
        interval = undefined;
    });

    let totalSeconds = 0;
    function step() {
        totalSeconds++;
        seconds.text(formatTime(totalSeconds % 60));
        let mins = totalSeconds / 60;
        minutes.text(formatTime(mins % 60));
        let ho = totalSeconds / 3600;
        hours.text(formatTime(ho));
    };

    function formatTime(num) {
        return pad(Math.floor(num))
    }

    function pad(num) {
        if (num <= 9) {
            num = `0${num}`;
        }
        return num;

    }
}
