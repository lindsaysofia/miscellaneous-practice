// get the symmetric difference two arrays.
// symDiff([1, 2, 3], [5, 2, 1, 4]) should return [3, 4, 5].
function symDiff(arr1, arr2) {
  let arrSym = [];
  arr1.forEach(element => {
      if (arr2.indexOf(element) < 0 && arrSym.indexOf(element) < 0) {
          arrSym.push(element);
      }
  });
  arr2.forEach(element => {
      if (arr1.indexOf(element) < 0 && arrSym.indexOf(element) < 0) {
          arrSym.push(element);
      }
  });
  return arrSym;
}

// Gets the symmetric difference of a list of arrays
function sym(...args) {
  return args.reduce(symDiff);
}

// function sym(args) {
//     let result = [];
//     for (let i = 0; i < arguments.length; i++) {
//         result = symDiff(result, arguments[i]);
//     };
//     return result;
// }


