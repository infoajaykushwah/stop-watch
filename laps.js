window.onload = function() {
    const minutes = document.getElementById("minutes");
    const tens = document.getElementById("tens");
    const seconds = document.getElementById("seconds");

    const startBtn = document.getElementById("start-btn");
    const stopBtn = document.getElementById("stop-btn");
    const resetBtn = document.getElementById("reset-btn");

    let minutesSet = 00;
    let tensSet = 00;
    let secondsSet = 00;
    let Interval;

    startBtn.onclick=function(){
        Interval = setInterval(startTimer, 10);
        dimEffect();
    };

    stopBtn.onclick=function(){
        clearInterval(Interval);

        const laps = document.getElementById("laps");
        const li = document.createElement("li");
        li.innerHTML = `laps: <span>${minutes.innerHTML}:${seconds.innerHTML},${seconds.innerHTML}</span>`;
        laps.appendChild(li);
        dimEffect();
    };

    //reset button
    resetBtn.onclick=function() {
        clearInterval(Interval);
        minutesSet = "00";
        secondsSet = "00";
        tensSet = "00";
        tens.innerHTML = tensSet;
        seconds.innerHTML = secondsSet;
        minutes.innerHTML = minutesSet;

        document.getElementById("laps").innerHTML = "";
    };

    //create start timer function
    function startTimer() {
        tensSet++;

        if (tensSet<9) {
            tens.innerHTML = "0" + tensSet;
        }
        if (tensSet>9) {
            tens.innerHTML = tensSet;
        }
        if (tensSet>99) {
            tensSet = 0;
            tens.innerHTML=tensSet;
            secondsSet++;
            seconds.innerHTML= "0" + secondsSet;
        }
        if (secondsSet>9) {
            seconds.innerHTML = secondsSet;
        }
        if (secondsSet==60) {
            secondsSet = 0;
            seconds.innerHTML = secondsSet;
            minutesSet++;
            minutes.innerHTML = "0" + minutesSet;
        }
        if (minutesSet>9){
            minutes.innerHTML= minutesSet;
        }
    };

    function dimEffect(){
        const lapTime=document.querySelector(".lap-time");
        lapTime.classList.toggle("dimming-effect");
    }
};