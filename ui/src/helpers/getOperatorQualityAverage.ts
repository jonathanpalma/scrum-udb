import Operator from 'interfaces/Operator';
import DayLog from 'interfaces/DayLog';
import getWorkQualityByOperator from 'helpers/getWorkQualityByOperator';

const getOperatorQualityAverage = (
  operator: Operator,
  logsByDay: Array<DayLog>
): number => {
  var operatorReviews = getWorkQualityByOperator(operator, logsByDay);
  var totalWorkQuality = operatorReviews.map(function(WorkQuality) {
    return WorkQuality.score;
  });
  var totalQuality = totalWorkQuality.reduce((a, b) => a + b);
  var averageQuality = totalQuality / totalWorkQuality.length;
  return averageQuality;
};

export default getOperatorQualityAverage;
