import moment from 'moment';
import Operator from 'interfaces/Operator';
import getWorkLogsByDayOperator from 'helpers/getWorkLogsByDayOperator';
import WorkLog from 'interfaces/WorkLog';
import getOperatorAvailabilityByDay from './getOperatorAvailability';
import DayLog from 'interfaces/DayLog';

const getAvailableSlots = (day: moment.Moment, operator: Operator, dayLogs: Array<DayLog>): number => {
  var workLogs: Array<WorkLog> = getWorkLogsByDayOperator(day, operator,dayLogs);
  var operatorAvailability = getOperatorAvailabilityByDay(operator);

  if (workLogs.length >= operatorAvailability.availability) {
    return workLogs.length - operatorAvailability.availability;
  }

  return 0;
};

export default getAvailableSlots;
