import getNumber from '../utilis.js';

export const printRules = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => {
  let result = '';

  if ((num % 2) === 0) {
    result = 'yes';
  } else {
    result = 'no';
  }
  return result;
};

export const formData = () => {
  const number = getNumber(1000);
  const correctAnswer = isEven(number);

  return [number, correctAnswer];
};
