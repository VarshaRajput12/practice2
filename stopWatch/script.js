
// window.onload = function(){
//     let seconds = 00;
//     let tens = 00;
//     let appendTens = document.querySelector("#tens");
//     let appendSeconds = document.querySelector("#seconds");
//     let startBtn = document.querySelector("#start");
//     let stopBtn = document.querySelector("#stop");
//     let resetBtn = document.querySelector("#reset");

//     let interval;

//     buttonStart.onclick = function(){
//         cl
//     }
// }

window.onload = function () {
  var seconds = 00;

  var tens = 00;

  var appendTens = document.getElementById("tens");

  var appendSeconds = document.getElementById("seconds");

  var buttonStart = document.getElementById("start");

  var buttonStop = document.getElementById("stop");

  var buttonReset = document.getElementById("reset");

  var Interval;

  buttonStart.onclick = function () {
    clearInterval(Interval);

    Interval = setInterval(startTimer, 10);
  };

  buttonStop.onclick = function () {
    clearInterval(Interval);
  };

  buttonReset.onclick = function () {
    clearInterval(Interval);

    tens = "00";

    seconds = "00";

    appendTens.innerHTML = tens;

    appendSeconds.innerHTML = seconds;
  };

  function startTimer() {
    tens++;

    if (tens <= 9) {
      appendTens.innerHTML = "0" + tens;
    }

    if (tens > 9) {
      appendTens.innerHTML = tens;
    }

    if (tens > 99) {
      console.log("seconds");

      seconds++;

      appendSeconds.innerHTML = "0" + seconds;

      tens = 0;

      appendTens.innerHTML = "0" + 0;
    }

    if (seconds > 9) {
      appendSeconds.innerHTML = seconds;
    }
  }
};