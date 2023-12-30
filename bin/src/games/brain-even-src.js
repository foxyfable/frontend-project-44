import readlineSync from 'readline-sync';
import { greetPlayer, askQuestion, checkAnswer } from '../index.js';

const playBrainEven = () => {
  const playerName = greetPlayer();

  console.log('Answer "yes" if the number is even, otherwise answer "no".'); // rules

  let counter = 0;

  do {
    const number = Math.floor(Math.random() * 1000);
    const answer = askQuestion(number);

    // assigning correct answer
    let correctAnswer = '';

    if ((number % 2) === 0) {
      correctAnswer = 'yes';
    } else {
      correctAnswer = 'no';
    }

    const worngAnswerMessage = `'${answer}' is wrong answer ;(. Correct answer was 'no'.
Let's try again, ${playerName}!`;

    const currentCounter = checkAnswer(answer, correctAnswer, counter, worngAnswerMessage);

    if (currentCounter === null) {
      return;
    }

    counter = currentCounter;
  } while (counter < 3);

  if (counter === 3) {
    console.log(`Congratulations, ${playerName}!`);
  }
};

export default playBrainEven;
