import getNumber from '../utilis.js';

export const printRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (n) => {
  let result = '';
  let prime = false;

  for (let i = 2, x = Math.sqrt(n); i <= x; i += 1) {
    if (n % i === 0) return 'no';
  }
  prime = n !== 1 && n !== 0;

  if (prime === true) {
    result = 'yes';
  } else {
    result = 'no';
  }
return result;
};

export const formData = () => {
  const number = getNumber(1000);
  const correctAnswer = isPrime(number);

  return [number, correctAnswer];
};
