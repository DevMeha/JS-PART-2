// Remember, we're gonna use strict mode in all scripts now!
"use strict";

// MAX VALUE

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  for (let i = 0; i < temps.length; i++) {
    if (temps[i] > max) {
      max = temps[i];
    }
  }
  console.log(max);
};
calcTempAmplitude([3, 7, 4]);
