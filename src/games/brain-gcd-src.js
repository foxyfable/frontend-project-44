import getNumber from '../utilis.js';

export const printRules = 'Find the greatest common divisor of given numbers.';

const gcd = (x, y) => {
  if (y !== 0) {
    const remainder = x % y;
    return gcd(y, remainder);
  }
  return x;
}; 

export const formData = () => {
  const firstNum = getNumber(1000);
  const secondNum = getNumber(1000);
  const equation = `${firstNum} ${secondNum}`;
  const correctAnswer = `${gcd(firstNum, secondNum)}`;

  return [equation, correctAnswer];
};
