// Remember, we're gonna use strict mode in all scripts now!
"use strict";

// MAX VALUE
// const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

// const calcTempAmplitude = function (temps) {
//   let max = temps[0];
//   let min = temps[0];
//   for (let i = 0; i < temps.length; i++) {
//     const curtemp = temps[i];
//     if (typeof curtemp !== "number") continue;
//     if (curtemp > max) {
//       max = temps[i];
//     }
//     if (curtemp < min) {
//       min = temps[i];
//     }
//   }
//   console.log(` MAX: ${max}`);
//   console.log(` MIN:${min}`);
//   return max - min;
// };
// const amplitude = calcTempAmplitude(temperatures);
// console.log(amplitude);

const measureKelvin = function () {
  const mesurement = {
    type: "temp",
    unit: "celsitus",
    value: Number(prompt("Degrees celsitus")),
  };
  const kelvin = mesurement.value + 273;
  return kelvin;
};
console.log(measureKelvin());
