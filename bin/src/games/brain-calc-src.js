import { greetPlayer, askQuestion, checkAnswer } from '../index.js';

const playBrainCalc = () => {
  const playerName = greetPlayer();

  console.log('What is the result of the expression?'); // rules

  let counter = 0;
  const equationSigns = ['*', '+', '-'];

  do {
    const sign = equationSigns[Math.floor(Math.random() * equationSigns.length)];
    const firstNum = Math.floor(Math.random() * 1000);
    const secondNum = Math.floor(Math.random() * 1000);
    const equation = `${firstNum} ${sign} ${secondNum}`;
    const answer = askQuestion(equation);

    // assigning correct answer
    const correctAnswer = `${eval(equation)}`;

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

export default playBrainCalc;
