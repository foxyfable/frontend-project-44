import getNumber from '../utilis.js';

export const printRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (n) => {
  for (let i = 2, x = Math.sqrt(n); i <= x; i += 1) {
    if (n % i === 0) return 'no';
  }
  return (n !== 1 && n !== 0) ? 'yes' : 'no';
};

export const formData = () => {
  const number = getNumber(1000);
  const correctAnswer = isPrime(number);

  return [number, correctAnswer];
};
