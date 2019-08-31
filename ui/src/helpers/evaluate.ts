import WorkLog from 'interfaces/WorkLog';
import WorkQuality from 'interfaces/WorkQuality';
const uuidv4 = require('uuid/v4');
import getRandomScore from 'helpers/getRandomScore';
import getRandomEvaluator from 'helpers/getRandomEvaluator';

const evaluate = (workLog: WorkLog): WorkQuality => {
  var workQuality: WorkQuality = {
    id: uuidv4(),
    idEvaluator: getRandomEvaluator().id,
    idWorkLog: workLog.id,
    score: getRandomScore(),
  };

  return workQuality;
};

export default evaluate;
