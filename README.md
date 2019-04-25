# Algorithm challenge // your order, please

- [1. Getting started](#1-getting-started)
- [2. Challenge](#2-challenge)
  - [2.1. Examples](#21-examples)
  - [2.2. Testing your solution](#22-testing-your-solution)
  - [2.3. Submitting your solution](#23-submitting-your-solution)


## 1. Getting Started

`https://github.com/shanshanc/order-please`

Fork this repo and then `git clone` your forked repo to your computer. Once happy with your solution, `git push` and submit a pull request at `https://github.com/shanshanc/order-please` or send an email to `shanshanc.chen@gmail.com`

## 2. Challenge

Write a function called `urOrderPls` that sorts the words in a string
based on the number within each word and returns a new string with sorted words.

Your input will be a `string` with few words. Each word in the string contains a single positive integer. This integer indicates the position that the word should have in the result string.

This integer can be from 1 to 9. So 1 will be the first word (not 0). If the input string is empty, return an empty string. 

### 2.1. Examples

Input  | Output
------ | ------
'word2here imword1' | 'imword1 word2here'
'is2 Thi1s T4est 3a' | 'Thi1s is2 3a T4est'
'4of Fo1r pe6ople g3ood th5e the2' | 'Fo1r the2 g3ood 4of th5e pe6ople'
'' | ''

### 2.2. Testing your solution

To test your solution, run `npm install` in the root directory
and then run `npm test` to run the automated tests.

### 2.3. Submitting your solution

When done, make sure you're working on a forked repo, push your
changes to your forked repo and submit a pull request.
Alternatively send an email with your solution to `shanshanc.chen@gmail.com`
