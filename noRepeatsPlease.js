/* 
Return the number of total permutations of the provided string that don't have repeated consecutive letters. Assume that all characters in the provided string are each unique.

For example, aab should return 2 because it has 6 total permutations (aab, aab, aba, aba, baa, baa), but only 2 of them (aba and aba) don't have the same letter (in this case a) repeating.
 */

 // My original code solution.
function repeats(str) {
  let repeatRegEx = /([a-z])\1+/;
  return repeatRegEx.test(str);
}

function permutations(str) {
    if (str.length === 1) {
        return [str];
    }
    if (str.length === 2) {
        return [str, str[1] + str[0]];
    }
    let perm = [];
    let strArray = str.split('');
    strArray.forEach((char, index) => {
        let restOf = str.slice(0, index) + str.slice(index + 1);
        let permRestOf = permutations(restOf);
        let permWithChar = permRestOf.map(permStr => char + permStr);
        perm = perm.concat(permWithChar);
    });
    return perm;

}

function permAlone(str) {
    let permArr = permutations(str);
    return permArr.filter(perm => !repeats(perm)).length;
}

// Different way to write the permutations function.
function permutations(str) {
    if (str.length === 1) {
        return [str];
    }
    if (str.length === 2) {
        return [str, str[1] + str[0]];
    }
    let perms = [];
  
    for (let i = 0; i < str.length; i++) {
        let strArray = str.split('');
        let allButLast = str.slice(0, str.length - 1);
        let permsAllButLast = permutations(allButLast);
        let permsAllButLastWithChar = permsAllButLast.map(perm => perm + str[str.length - 1]);
        perms = perms.concat(permsAllButLastWithChar);
        if (strArray.length % 2 === 0) {
            let temp = strArray[i];
            strArray[i] = strArray[strArray.length - 1]
            strArray[strArray.length - 1] = temp;
        } else {
            let temp = strArray[0];
            strArray[0] = strArray[strArray.length - 1]
            strArray[strArray.length - 1] = temp;
        }
        str = strArray.join('');
    }
    return perms;
}

// Different way to solve permAlone altogether, from FCC
function permAlone(str) {
  let repeatRegEx = /([a-z])\1+/;
  let strArray = str.split('');
  let permutations = [];

  function swap(index1, index2) {
      let temp = strArray[index1];
      strArray[index1] = strArray[index2];
      strArray[index2] = temp;
  }

  function generate(n) {
      if (n === 1) {
          permutations.push(strArray.join(''));
      } else {
          for (let i = 0; i < n; i++) {
              generate(n - 1);
              swap(n % 2 ? 0 : i, n - 1);
          }
      }
  }

  generate(strArray.length);
  return permutations.filter(perm => !repeats(perm))

}