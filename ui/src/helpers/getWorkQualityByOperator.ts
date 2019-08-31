import Operator from 'interfaces/Operator';
import DayLog from 'interfaces/DayLog';
import WorkQuality from 'interfaces/WorkQuality';

const getWorkQualityByOperator = (
  operator: Operator,
  logsByDay: Array<DayLog>
): Array<WorkQuality> => {
  let workQuality: Array<WorkQuality> = [];
  logsByDay.find(dailyLog => {
    workQuality = dailyLog.workQualities.filter(
      workQuality => operator.id === workQuality.workLog.idOperator
    );
  });

  return workQuality;
};

export default getWorkQualityByOperator;
