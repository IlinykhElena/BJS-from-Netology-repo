// Задание 1
function getArrayParams(arr) {
  let min = arr[0];
  let max = arr[0];
  let sum = 0;
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
    if (arr[i] > max) {
      max = arr[i];
    }
    sum += arr[i]; 
  }
  let avg = (sum / arr.length).toFixed(2);
  
  return { min: min, max: max, avg: Number(avg) };
}

// Задание 2
function worker(arr) {
  let sum = 0;
  for (let number of arr) {
    sum += number;
  }
  return sum;
}

function makeWork(arrOfArr, func) {
  let max = 0;
  for (let array of arrOfArr) {
    if (func(array) > max) {
      max = func(array);
    } 
  }
  return max;
}

// Задание 3
function worker2(arr) {
  let max = arr[0];
  let min = arr[0];
  for (let number of arr) {
    if (number < min) {
      min = number;
    }
    if (number > max) {
      max = number;
    }
  }
  return Math.abs(max - min);
}

