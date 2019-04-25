// Strig order (20 mins)

// CHALLENGE

// Write a function called `urOrderPls` that sorts the words in a string
// based on the number within each word and returns a new string with sorted words.

// Your input will be a string with few words. Each word in the string contains a 
// single positive integer. This integer indicates the position that the word should have
//  in the result string.

// This integer can be from 1 to 9. So 1 will be the first word (not 0).
//  If the input string is empty, return an empty string. 


// EXAMPLES

// 'word2here imword1' --> 'imword1 word2here'
// 'is2 Thi1s T4est 3a'  -->  'Thi1s is2 3a T4est'
// '4of Fo1r pe6ople g3ood th5e the2'  -->  'Fo1r the2 g3ood 4of th5e pe6ople'
// ''  --> ''

// TEST YOUR SOLUTION

// To test your solution, run 'npm install' in the root directory
// and then run 'npm test' to run the automated tests.

// SUBMIT YOUR SOLUTION

// When done, make sure you're working on a forked repo, push your
// changes to your forked repo and submit a pull request.
// Alternatively send an email with your solution to shanshanc.chen@gmail.com

function urOrderPls(inputStr) {
  // your code here

  var fewWordsList =  inputStr.split(' ');
  
  let one	= [];
  let two	= [];
  let three	= [];
  let four	= [];
  let five	= [];
  let six	= [];
  let seven	= [];
  let eight	= [];
  let nine	= [];

  for (let i=0; i<fewWordsList.length; i++) {
    if(fewWordsList[i].indexOf('1') >= 0){
      one.push(fewWordsList[i]);
    } else if (fewWordsList[i].indexOf('2') >= 0) {
      two.push(fewWordsList[i]);
    } else if (fewWordsList[i].indexOf('3') >= 0) {
      three.push(fewWordsList[i]); 
    } else if (fewWordsList[i].indexOf('4') >= 0) {
      four.push(fewWordsList[i]);
    } else if (fewWordsList[i].indexOf('5') >= 0) {
      five.push(fewWordsList[i]);
    } else if (fewWordsList[i].indexOf('6') >= 0)  {
      six.push(fewWordsList[i]);
    } else if (fewWordsList[i].indexOf('7') >= 0) {
      seven.push(fewWordsList[i])
    } else if (fewWordsList[i].indexOf('8') >= 0) {
      eight.push(fewWordsList[i]); 
    } else if (fewWordsList[i].indexOf('9') >= 0) {
      nine.push(fewWordsList[i]) 
    }
  }

  return one.concat(two, three, four, five, six, seven, eight, nine).join(' ');
  

}

module.exports = urOrderPls;

