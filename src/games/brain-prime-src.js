export const printRules = () => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
};

export const formData = () => {
  const number = Math.floor(Math.random() * 1000);

  let correctAnswer = '';

  const isPrime = (n) => {
    for (let i = 2, x = Math.sqrt(n); i <= x; i += 1) {
      if (n % i === 0) return false;
    }
    return n !== 1 && n !== 0;
  };

  if (isPrime(number) === true) {
    correctAnswer = 'yes';
  } else if (isPrime(number) === false) {
    correctAnswer = 'no';
  }

  return [number, correctAnswer];
};
