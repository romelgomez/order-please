# Algorithm challenge // your order, please

* 1. Getting Started
* 2. Challenge
  * 2.1. Examples
  * 2.2. Testing your solution
  * 2.3. Submitting your solution


## 1. Getting Started

https://github.com/shanshanc/order-please

Fork this repo and then git clone your forked repo to your computer. Once happy with your solution, git push and submit a pull request at github.com/felixweinberger/valid-parens or send an email to shanshanc.chen@gmail.com

## 2. Challenge

Write a function called urOrderPls that sorts the words in a string
based on the number within each word.

You're given a string with few words. Each word in the string will contain a single number. 
This number is the position the word should have in the result.
Numbers can be from 1 to 9. So 1 will be the first word (not 0).
If the input string is empty, return an empty string. 
The words in the input string will only contain valid consecutive numbers.

### 2.1. Examples

Input  | Output
------ | ------
'is2 Thi1s T4est 3a' | 'Thi1s is2 3a T4est'
'4of Fo1r pe6ople g3ood th5e the2' | 'Fo1r the2 g3ood 4of th5e pe6ople'

### 2.2. Testing your solution

To test your solution, run 'npm install' in the root directory
and then run 'npm test' to run the automated tests.

### 2.3. Submitting your solution

When done, make sure you're working on a forked repo, push your
changes to your forked repo and submit a pull request.
Alternatively send an email with your solution to shanshanc.chen@gmail.com
