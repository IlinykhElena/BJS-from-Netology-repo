// Задание 1
function getArrayParams(arr) {
  let min, max, sum, avg;
  min = Infinity;
  max = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < arr[i+1]) {
      min = arr[i];
    }
    if (arr[i] > arr[i+1]) {
      max = arr[i];
    }
    sum += arr[i]; 
    avg = (sum / arr.length).toFixed(2);    
  }
  
  return { min: min, max: max, avg: Number(avg) };
}

// Задание 2
function worker(arr) {
  let sum;
  for (let i = 0; i < arr.lenght; i++) {
    sum += arr[i];
  }

  return sum;
}

function makeWork(arrOfArr, func) {
  let max;
  for (let i = 0; i < arrOfArr.lenght; i++) {
    if (this.worker(arr[i]) > this.worker(arr[i+1])) {
      max = this.worker(arr[i]);
    } 
  }
 
  return max;
}

// Задание 3
function worker2(arr) {
  let max, min;
  for (let i = 0; i < arr.lenght; i++) {
    if (arr[i] < arr [i+1]) {
      min = arr[i];
    }
    if (arr[i] > arr[i+1]) {
      max = arr[i];
    }
  }
  return Math.abs(max - min);
}

