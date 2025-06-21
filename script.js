// Remember, we're gonna use strict mode in all scripts now!
"use strict";

// MAX VALUE

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    if (temps[i] > max) {
      max = temps[i];
    }
    if (temps[0] < min) {
      min = temps[0];
    }
  }
  console.log(max);
  console.log(min);
};
calcTempAmplitude([1, 3, 7, 4, 23]);
