import readlineSync from 'readline-sync';

export const greetPlayer = () => {
  console.log('Welcome to the Brain Games!');
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!`);
  return playerName;
};

export const getRandomNumber = (max) => {
  const randomNumber = Math.floor(Math.random() * max);
  return randomNumber;
};

export const askQuestion = (question) => {
  console.log(`Question: ${question}`);
  const answer = readlineSync.question('Your answer: ');
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
