const rand = function(min: number, max: number) {
  return Math.random() * (max - min) + min;
};

const getRandomScore = function() {
  const scoreList = [1,2,3,4,5];
  const weight = [0.02, 0.04, 0.04, 0.45, 0.45]
  
  const totalWeight = weight.reduce((prev, current) => prev + current);
  const randomNum = rand(0, totalWeight);
  let weightSum = 0;

  for (let i = 0; i < scoreList.length; i++) {
    weightSum += weight[i];
    weightSum = +weightSum.toFixed(2);

    if (randomNum <= weightSum) {
      return scoreList[i];
    }
  }

};

export default getRandomScore;
