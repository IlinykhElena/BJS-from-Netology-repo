function compareArrays(arr1, arr2) {
  let result;
  if(arr1.length === arr2.length && arr1.every((item, i) => item === arr2[i])) {
    result = true;
  } else {
    result = false;
  }
  return result; // boolean
}

function compareArraysBetterVersion(arr1, arr2) {
  let result;
  (arr1.length === arr2.length && arr1.every((item, i) => item === arr2[i])) ? result = true : result = false;
  
  return result; // boolean
}


function advancedFilter(arr) {
  let resultArr = arr.filter(number => number > 0).filter(number => number % 3 ===0).map(number => number * 10);

    return resultArr; // array
}
