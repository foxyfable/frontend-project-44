export const printRules = () => {
  console.log('What is the result of the expression?');
};

export const formData = () => {
  const equationSigns = ['*', '+', '-'];
  const sign = equationSigns[Math.floor(Math.random() * equationSigns.length)];
  const firstNum = Math.floor(Math.random() * 1000);
  const secondNum = Math.floor(Math.random() * 1000);
  const equation = `${firstNum} ${sign} ${secondNum}`;

  let correctAnswer = 0;

  switch (sign) {
    case '+':
      correctAnswer = firstNum + secondNum;
      break;
    case '-':
      correctAnswer = firstNum - secondNum;
      break;
    case '*':
      correctAnswer = firstNum * secondNum;
      break;
    default:
      break;
  }

  correctAnswer = correctAnswer.toString();

  return [equation, correctAnswer];
};
