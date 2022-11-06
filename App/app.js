window.onload = function () {
  var seconds = 00;
  var fastcount = 00;
  var appendFastcount = document.getElementById("fastcount");
  var appendSeconds = document.getElementById("seconds");
  var start = document.getElementById("startButtton");
  var stop = document.getElementById("stopButtton");
  var reset = document.getElementById("resetButtton");
  var Interval;

  start.onclick = function () {
    clearInterval(Interval);
    Interval = setInterval(startTimer, 10);
  };

  stop.onclick = function () {
    clearInterval(Interval);
  };

  reset.onclick = function () {
    clearInterval(Interval);
    fastcount = "00";
    seconds = "00";
    appendFastcount.innerHTML = fastcount;
    appendSeconds.innerHTML = seconds;
  };

  function startTimer() {
    fastcount++;

    if (fastcount <= 9) {
      appendFastcount.innerHTML = "0" + fastcount;
    }

    if (fastcount > 9) {
      appendFastcount.innerHTML = fastcount;
    }

    if (fastcount > 99) {
      console.log("seconds");
      seconds++;
      appendSeconds.innerHTML = "0" + seconds;
      fastcount = 0;
      appendFastcount.innerHTML = "0" + 0;
    }

    if (seconds > 9) {
      appendSeconds.innerHTML = seconds;
    }
  }
};
