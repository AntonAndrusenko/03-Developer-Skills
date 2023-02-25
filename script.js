// Remember, we're gonna use strict mode in all scripts now!
'use strict';

/* const temperatures1 = [3, -24, -6, -1, 'error', 9, 13, 23, 17, 15, 14, 9, 5];
const temperatures2 = [5, -21, -8, -4, 9, 13, 23, 17, 19, 15, 14, 9, 45, 5];

// amlitude is the difference between highest and lowest temperatures
// what's a sensor error and what to do with it?
// how to compute max and min

// how to ignor error
// find max value
// find min value
// subtract min from max and return it

const calcTempAmplittudeBug = function (temps1, temps2) {
  const temps3 = temps1.concat(temps2);

  console.log(temps3);

  let max = temps3[0];
  let min = temps3[0];

  for (let i = 0; i < temps3.length; i++) {
    const curTemp = temps3[i];
    if (typeof curTemp !== 'number') continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }

  const amplitude = max - min;

  console.log(max, min);

  return amplitude;
};

console.log(calcTempAmplittudeBug(temperatures1, temperatures2));

//How to merge two arrays?

//DEBAGGING LESSON 1

const measureKelvin = function () {
  const measurment = {
    type: 'temp',
    unit: 'cels',
    // value: Number(prompt('Degrees celsius:')),
    value: 10,
  };

  // console.table(measurment);
  // console.log(measurment.value);
  // console.warn(measurment.value);
  // console.error(measurment.value);

  const kelvin = measurment.value + 273;
  return kelvin;
};

console.log(measureKelvin());

// IDENTIFY THE BUG
// FIX THE BUG
*/

//////////////////////
// CODING CHALLENGE //
//////////////////////

const arr1 = [17, 21, 23];
const arr2 = [12, 5, -5, 0, 4];

const printForecast = function (temps1, temps2) {
  const temps3 = temps1.concat(temps2);
  let summary = '';

  for (let i = 0; i < temps3.length; i++) {
    const result = `${temps3[i]}°C in ${i + 1} days ...`;

    summary = summary.concat(result);
  }

  return console.log(`... ` + summary);
};

printForecast(arr1, arr2);
