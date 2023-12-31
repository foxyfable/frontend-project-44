import { greetPlayer, getRandomNumber, askQuestion, checkAnswer } from '../index.js';

const playBrainProgression = () => {
  const playerName = greetPlayer();

  console.log('Find the greatest common divisor of given numbers.'); // rules

  let counter = 0;

  do {
    const firstNum = getRandomNumber(100);
    const progressionScale = getRandomNumber(10);
    const randomIndex = getRandomNumber(10);
    const progression = [firstNum];

    for (let i = 1; i < 10; i += 1) {
        const nextElement = progression[i - 1] + progressionScale;
        progression.push(nextElement);
    }

    const correctAnswer = `${progression[randomIndex]}`;
    progression[randomIndex] = '..';

    const answer = askQuestion(progression.join(' '));

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

export default playBrainProgression;
