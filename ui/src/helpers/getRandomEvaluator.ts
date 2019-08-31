import Evaluator from 'interfaces/Evaluator';
const uuidv4 = require('uuid/v4');

const rand = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min) + min);
};

const evaluatorList: Array<Evaluator> = [
  { id: uuidv4(), name: uuidv4() },
  { id: uuidv4(), name: uuidv4() },
  { id: uuidv4(), name: uuidv4() },
  { id: uuidv4(), name: uuidv4() },
];

const getRandomEvaluator = (): Evaluator => {
  const randomNum = rand(0, 4);
  return evaluatorList[randomNum];
};

export default getRandomEvaluator;
