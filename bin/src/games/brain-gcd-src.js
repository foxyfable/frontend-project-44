import { greetPlayer, askQuestion, checkAnswer } from '../index.js';

const playBrainGcd = () => {
  const playerName = greetPlayer();

  console.log('Find the greatest common divisor of given numbers.'); // rules

  let counter = 0;

  do {
    const firstNum = Math.floor(Math.random() * 1000);
    const secondNum = Math.floor(Math.random() * 1000);
    const equation = `${firstNum} ${secondNum}`;
    const answer = askQuestion(equation);

    // assigning correct answer
    let correctAnswer = 0;

    const gcd = (x, y) => {
      if (y !== 0) {
        const remainder = x % y;
        return gcd(y, remainder);
      }
      return x;
    };

    correctAnswer = `${gcd(firstNum, secondNum)}`;

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
