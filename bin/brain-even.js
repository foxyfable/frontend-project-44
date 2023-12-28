#!/usr/bin/env node
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');

const name = readlineSync.question('May I have your name? '); // get name
console.log(`Hello, ${name}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no".'); // rules

// checking if answer is correct
let correctCounter = 0;

do {
  const Number = Math.floor(Math.random() * 1000);
  console.log(`Question: ${Number}`); // question
  const answer = readlineSync.question('Your answer: '); // get answer
  if ((Number % 2) === 0) {
    if (answer === 'yes') {
      console.log('Correct!');
      correctCounter += 1;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was 'yes'.
Let's try again, ${name}!`);
      break;
    }
  } else if ((Number % 2) !== 0) {
    if (answer === 'no') {
      console.log('Correct!');
      correctCounter += 1;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was 'no'.
Let's try again, ${name}!`);
      break;
    }
  }
} while (correctCounter < 3);

if (correctCounter === 3) {
  console.log(`Congratulations, ${name}!`);
}
