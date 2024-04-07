const start = document.getElementById("start");
const stop = document.getElementById("stop");
const restart = document.getElementById("restart")
const timer = document.getElementById("timer");

// setTimeout(testas, 3000);  - iškviečia vieną kartą
// timerId=setInterval(testas, 1000);  - iškviečia nuolatos iki tuomet kai bus sustabdytas


let i = 0;
let timerId;
//Šią funkciją iškviesime kas 10 dalį sekundės
let kasSekundesDali = () => {
    [min, sec] = timer.value.split(":");
    total = Number(min) * 60 + Number(sec);
    total++;
    min = Math.floor(total / 60);
    sec = total % 60;
    timer.value = `${min}:${String(sec).padStart(2, '0')}`;
    if (total == 0) {
        clearInterval(timerId);
    }
}


let startTimer = () => {
    restartTimer();
    timerId = setInterval(kasSekundesDali, 100);
}

let stopTimer = () => {
    clearInterval(timerId);
}

let restartTimer = () => {
    clearInterval(timerId);
    timer.value = "00:00";
}



start.onclick = startTimer;
stop.onclick = stopTimer;
restart.onclick = restartTimer;