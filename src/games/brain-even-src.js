import getNumber from '../utilis.js';

export const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => ((num % 2) === 0 ? 'yes' : 'no');

export const formData = () => {
  const number = getNumber(1000);
  const correctAnswer = isEven(number);

  return [number, correctAnswer];
};
