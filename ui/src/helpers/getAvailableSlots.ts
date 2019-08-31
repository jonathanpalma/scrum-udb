import moment from 'moment';
import Operator from 'interfaces/Operator';
import getWorkLogsByDayOperator from 'helpers/getWorkLogsByDayOperator';
import WorkLog from 'interfaces/WorkLog';

/*- function getAvailableSlots(day, operator)
  - params:
    - day: moment.Moment
    - operator: Operator
  - returns:
    - availableSlots: number // 0*/

const getAvailableSlots = (day: moment.Moment, operator: Operator): number => {
    
    
    var workLog: Array<WorkLog> = getWorkLogsByDayOperator(day,operator);




  
    return 0;
};
