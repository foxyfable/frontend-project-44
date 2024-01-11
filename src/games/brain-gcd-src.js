export const printRules = () => {
  console.log('Find the greatest common divisor of given numbers.');
};

export const formData = () => {
  const firstNum = Math.floor(Math.random() * 1000);
  const secondNum = Math.floor(Math.random() * 1000);
  const equation = `${firstNum} ${secondNum}`;

  let correctAnswer = 0;

  const gcd = (x, y) => {
    if (y !== 0) {
      const remainder = x % y;
      return gcd(y, remainder);
    }
    return x;
  };

  correctAnswer = `${gcd(firstNum, secondNum)}`;

  return [equation, correctAnswer];
};
