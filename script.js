
const display = document.getElementById("display");
let timer = null;
let startTid = 0;
let Tidbrukt = 0;
let Virker = false;

function start() {
    if (!Virker) {
        startTid = Date.now() - Tidbrukt;
        timer = setInterval(update, 10);
        Virker = true;
    }

}

function stop() {
    if (Virker) {
        clearInterval(timer);
        Virker = false;
    }


}

function reset() {
    clearInterval(timer);
    display.textContent = "00:00:00";
    startTid = 0;
    Tidbrukt = 0;
    Virker = false;


}
function update() {
    const tidNå = Date.now();
    Tidbrukt = tidNå - startTid;
    let klokkeTimer = Math.floor(Tidbrukt / (1000 * 60 * 60));
    let minutter = Math.floor(Tidbrukt / (1000 * 60) % 60);
    let sekunder = Math.floor(Tidbrukt / 1000 % 60);
    let millisekunder = Math.floor(Tidbrukt % 1000 / 10);

    display.textContent = `${klokkeTimer}:${minutter}:${sekunder}:${millisekunder}`;


}
function showLap() {
    let lapTime = Tidbrukt;
    reset();
    const lapDisplay = document.getElementById("lapDisplay");
    let laptimeText = millitoText(lapTime);
    lapDisplay.innerHTML += laptimeText + "<br> </br>";





}
function millitoText(tid) {
    let klokkeTimer = Math.floor(tid / (1000 * 60 * 60));
    let minutter = Math.floor(tid / (1000 * 60) % 60);
    let sekunder = Math.floor(tid / 1000 % 60);
    let millisekunder = Math.floor(tid % 1000 / 10);
    return `${klokkeTimer}:${minutter}:${sekunder}:${millisekunder}`; 
}
