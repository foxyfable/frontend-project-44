import readlineSync from 'readline-sync';
import { greetPlayer, askQuestion, checkAnswer } from '../index.js';

const playBrainGcd = () => {
  const playerName = greetPlayer();

  console.log('Find the greatest common divisor of given numbers.'); // rules

  let counter = 0;

  do {
    const num_1 = Math.floor(Math.random() * 1000);
    const num_2 = Math.floor(Math.random() * 1000);
    const equation = `${num_1} ${num_2}`;
    const answer = askQuestion(equation);

    // assigning correct answer
    let correctAnswer = 0;
    
    const gcd = (num_1, num_2) => {
      if (num_2 !== 0) {
        const remainder = num_1 % num_2;
        return gcd(num_2, remainder);
      }
      return num_1;
    };

    correctAnswer = `${gcd(num_1, num_2)}`;

    const worngAnswerMessage = `'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.
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

export default playBrainGcd;