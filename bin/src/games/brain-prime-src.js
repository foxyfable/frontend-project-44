import {
  greetPlayer,
  getRandomNumber,
  askQuestion,
  checkAnswer,
} from '../index.js';

const playBrainPrime = () => {
  const playerName = greetPlayer();

  console.log('Answer "yes" if given number is prime. Otherwise answer "no".'); // rules

  let counter = 0;

  do {
    const number = getRandomNumber(100);
    let correctAnswer = '';

    const answer = askQuestion(number);

    const isPrime = (n) => {
      for (let i = 2, x = Math.sqrt(n); i <= x; i += 1) {
        if (n % i === 0) return false;
      }
      return n !== 1 && n !== 0;
    };

    if (isPrime(number) === true) {
      correctAnswer = 'yes';
    } else if (isPrime(number) === false) {
      correctAnswer = 'no';
    }

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

export default playBrainPrime;
