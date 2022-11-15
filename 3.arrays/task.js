function compareArraysWithIf(arr1, arr2) {
  let result;
  if(arr1.length === arr2.length && arr1.every((item, i) => item === arr2[i])) {
    result = true;
  } else {
    result = false;
  }
  return result; // boolean
}

function compareArrays(arr1, arr2) {
  let result;
  
  return result = (arr1.length === arr2.length && arr1.every((item, i) => item === arr2[i])); // boolean
}

function compareArraysVersion2(arr1, arr2) {
  let result;
  (arr1.length === arr2.length && arr1.every((item, i) => item === arr2[i])) ? result = true : result = false;
  
  return result; // boolean
}


function advancedFilter(arr) {
  let resultArr = arr.filter(number => number > 0).filter(number => number % 3 ===0).map(number => number * 10);

    return resultArr; // array
}
