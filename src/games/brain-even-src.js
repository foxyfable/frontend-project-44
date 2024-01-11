export const printRules = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
};

export const formData = () => {
  const number = Math.floor(Math.random() * 1000);

  let correctAnswer = '';

  if ((number % 2) === 0) {
    correctAnswer = 'yes';
  } else {
    correctAnswer = 'no';
  }

  return [number, correctAnswer];
};
