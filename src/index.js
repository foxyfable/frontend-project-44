import readlineSync from 'readline-sync';

const playGame = (formData, printRules) => {
  console.log('Welcome to the Brain Games!');
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!`);

  printRules();

  let counter = 0;

  do {
    const [question, correctAnswer] = formData();

    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');

    const worngAnswerMessage = `'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.
Let's try again, ${playerName}!`;

    if (answer === correctAnswer) {
      console.log('Correct!');
      counter += 1;
    } else {
      console.log(`${worngAnswerMessage}`);
      return;
    }
  } while (counter < 3);

  console.log(`Congratulations, ${playerName}!`);
};

export default playGame;
