document.getElementById("refresh").innerHTML = document.getElementsByTagName("META")[3].content;

      let item = document.getElementsByTagName("h2")[0];
      let start = document.getElementById("strt"),
        stop = document.getElementById("stp"),
        reset = document.getElementById("rst");
      let sec = 0, min = 0, hrs = 0, t;

      function tick() {
        sec++;
        if (sec >= 60) {
          sec = 0;
          min++;
          if (min >= 60) {
            min = 0;
            hrs++;
          }
        }
      }

      function add() {
        tick();
        item.textContent =
          (hrs > 9 ? hrs : "0" + hrs) +
          ":" +
          (min > 9 ? min : "0" + min) +
          ":" +
          (sec > 9 ? sec : "0" + sec);
        timer();
      }

      function timer() {
        t = setTimeout(add, 1000);
      }

      timer();