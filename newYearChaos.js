/* 
It's New Year's Day and everyone's in line for the Wonderland rollercoaster ride! There are a number of people queued up, and each person wears a sticker indicating their initial position in the queue. Initial positions increment by  from  at the front of the line to  at the back.

Any person in the queue can bribe the person directly in front of them to swap positions. If two people swap positions, they still wear the same sticker denoting their original places in line. One person can bribe at most two others. For example, if n=8 and  Person 5 bribes Person 4, the queue will look like this: 1 2 3 5 4 6 7 8

Fascinated by this chaotic queue, you decide you must know the minimum number of bribes that took place to get the queue into its current state!

Function Description:

Complete the function minimumBribes in the editor below. It must print an integer representing the minimum number of bribes necessary, or "Too chaotic" if the line configuration is not possible.

minimumBribes has the following parameter(s):

q: an array of integers

Output: Print an integer denoting the minimum number of bribes needed to get the queue into its final state. Print "Too chaotic" if the state is invalid, i.e. it requires a person to have bribed more than  people.

*/

function minimumBribes(q) {
  let currentIndex = q.length - 1;
  let currentNumber = q.length;
  let currentNumberIndex;
  let numberBribes = 0;
  while (currentIndex > 0) {
     currentNumberIndex = q.indexOf(currentNumber, Math.max(currentIndex - 2, 0));
     if (currentNumberIndex === -1) {
       return 'Too Chaotic';
     }
     numberBribes += currentIndex - currentNumberIndex;
     currentIndex = currentNumberIndex - 1;
     currentNumber = currentNumberIndex;
  }
  return numberBribes;
}

console.log(minimumBribes([2, 1, 5, 3, 4])); // 3
console.log(minimumBribes([2, 5, 1, 3, 4])) // Too chaotic
console.log(minimumBribes([1, 2, 5, 3, 4, 7, 8, 6])) // 8

console.log([2, 1, 5, 3, 4].indexOf(5, -1));
console.log(Math.max(2, 3))
