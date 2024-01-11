export const printRules = () => {
  console.log('What number is missing?');
};

export const formData = () => {
  const firstNum = Math.floor(Math.random() * 100);
  const progressionScale = Math.floor(Math.random() * 10);
  const randomIndex = Math.floor(Math.random() * 10);
  const progression = [firstNum];

  for (let i = 1; i < 10; i += 1) {
    const nextElement = progression[i - 1] + progressionScale;
    progression.push(nextElement);
  }

  const correctAnswer = `${progression[randomIndex]}`;
  progression[randomIndex] = '..';

  const question = progression.join(' ');

  return [question, correctAnswer];
};
