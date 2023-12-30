import readlineSync from 'readline-sync';

export const greetPlayer = () => {
  console.log('Welcome to the Brain Games!');
  const playerName = readlineSync.question('May I have your name? '); // get name
  console.log(`Hello, ${playerName}!`);
  return playerName;
};

export const askQuestion = (question) => {
  console.log(`Question: ${question}`);
  const answer = readlineSync.question('Your answer: '); // get answer
  return answer;
};

export const checkAnswer = (answer, correctAnswer, counter, worngAnswerMessage) => {
  if (answer === correctAnswer) {
    console.log('Correct!');
    const activeCounter = counter + 1;
    return activeCounter;
  }
  console.log(`${worngAnswerMessage}`);
  return null;
};
