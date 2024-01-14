import getNumber from '../utilis.js';

export const printRules = 'What number is missing in the progression?';

const formProgression = (firstNum, scale, index) => {
  const progression = [firstNum];

  for (let i = 1; i < 10; i += 1) {
    const nextElement = progression[i - 1] + scale;
    progression.push(nextElement);
  }

  const result = `${progression[index]}`;
  progression[index] = '..';

  return [progression.join(' '), result];
};

export const formData = () => {
  const firstNum = getNumber(100);
  const progressionScale = getNumber(10);
  const randomIndex = getNumber(10);
  const progression = formProgression(firstNum, progressionScale, randomIndex);
  const question = progression[0];
  const correctAnswer = progression[1];

  return [question, correctAnswer];
};
