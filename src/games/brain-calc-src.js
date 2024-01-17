import getNumber from '../utilis.js';

export const rules = 'What is the result of the expression?';

const equationSigns = ['*', '+', '-'];

const evaluate = (sign, a, b) => {

  switch (sign) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    default:
      throw new Error('Error!');
  }
};

export const formData = () => {
  const sign = equationSigns[getNumber(equationSigns.length)];
  const firstNum = getNumber(1000);
  const secondNum = getNumber(1000);
  const equation = `${firstNum} ${sign} ${secondNum}`;

  const correctAnswer = evaluate(sign, firstNum, secondNum).toString();

  return [equation, correctAnswer];
};
