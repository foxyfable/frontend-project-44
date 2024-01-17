import getNumber from '../utilis.js';

export const rules = 'Find the greatest common divisor of given numbers.';

const getGcd = (x, y) => {
  if (y !== 0) {
    const remainder = x % y;
    return getGcd(y, remainder);
  }
  return x;
};

export const formData = () => {
  const firstNum = getNumber(1000);
  const secondNum = getNumber(1000);
  const equation = `${firstNum} ${secondNum}`;
  const correctAnswer = `${getGcd(firstNum, secondNum)}`;

  return [equation, correctAnswer];
};
