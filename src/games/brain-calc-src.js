import getNumber from '../utilis.js';

export const printRules = 'What is the result of the expression?';

const equationSigns = ['*', '+', '-'];

const evaluate = (sign, a, b) => {
  let result = 0;

  switch (sign) {
    case '+':
      result = a + b;
      break;
    case '-':
      result = a - b;
      break;
    case '*':
      result = a * b;
      break;
    default:
      break;
  }
  return result;
};

export const formData = () => {
  const sign = equationSigns[getNumber(equationSigns.length)];
  const firstNum = getNumber(1000);
  const secondNum = getNumber(1000);
  const equation = `${firstNum} ${sign} ${secondNum}`;

  const correctAnswer = evaluate(sign, firstNum, secondNum).toString();

  return [equation, correctAnswer];
};
