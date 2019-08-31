import moment from 'moment';
import Job from 'interfaces/Job';
import Operator from 'interfaces/Operator';
import WorkQuality from 'interfaces/WorkQuality';
import getAvailableSlots from './getAvailableSlots';
import DayLog from 'interfaces/DayLog';
import assign from './assign';
import evaluate from './evaluate';
import WorkLog from 'interfaces/WorkLog';
import getOperatorQualityAverage from 'helpers/getOperatorQualityAverage';
import generateOperator from './generateOperator';

let lastOperatorIndex = -1;

const executeWorkDay = (
  day: moment.Moment,
  jobs: Array<Job>,
  operators: Array<Operator>,
  dayLogs: Array<DayLog>
): DayLog => {

var dayLog: DayLog = {
    day: day,
    jobs: jobs,
    operators: [],
    workQualities: [],
}


jobs.forEach(function(job){

    var isJobAssigned = false;
    do {
        if(lastOperatorIndex != operators.length - 1) {
            lastOperatorIndex++;
        }else {
            lastOperatorIndex = 0;
        }

        var operator = operators[lastOperatorIndex];

        if (operator.isActive && !operator.isPunished && getAvailableSlots(day,operator,dayLogs) > 0) {
            isJobAssigned = true;
            var workLog: WorkLog = assign(day,job,operator);
            var workQuality: WorkQuality = evaluate(workLog);
            dayLog.workQualities.push(workQuality);
            

            if(workQuality.score === 1){
                if (getOperatorQualityAverage(operator) <= 3) {
                    operator.isActive = false;
                    operator.firedDate = day;
                    operators.push(generateOperator(day));
                }else {
                    operator.isPunished = true;
                }
            }

        }else {
            if (operator.isPunished && operator.punishmentNumber == 1) {
                operator.isPunished = false;
            }else {
                operator.punishmentNumber--;
            }
        }
        
       

    }while(!isJobAssigned)


});

dayLog.operators = operators;


return dayLog;

};
