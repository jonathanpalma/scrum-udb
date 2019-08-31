import Job from 'interfaces/Job';
import Operator from 'interfaces/Operator';
import getOperatorAvailability from 'helpers/getOperatorAvailability';

const getWorkLoad = (jobs: Array<Job>, operators: Array<Operator>): number => {
  var operatorAvailabilitys = operators.map(function(operator) {
    return getOperatorAvailability(operator);
  });

  var jobQuantity = jobs.length;
  var totalAvailability = operatorAvailabilitys.map(function(
    OperatorAvailability
  ) {
    return OperatorAvailability.availability;
  });
  var availability = totalAvailability.reduce((a, b) => a + b);
  var fitWorkInAvailability = availability - jobQuantity;

  return fitWorkInAvailability;
};

export default getWorkLoad;
