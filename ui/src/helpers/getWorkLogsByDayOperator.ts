import moment from 'moment';
import WorkLog from 'interfaces/WorkLog';
import Operator from 'interfaces/Operator';
import DayLog from 'interfaces/DayLog';

const getWorkLogByDayOperator = (
  day: moment.Moment,
  operator: Operator,
  logsByDay: Array<DayLog>
): Array<WorkLog> => {
  let workLogs: Array<WorkLog> = [];
  const dayLog = logsByDay.find(dailyLog => dailyLog.day.isSame(day));
  if (dayLog) {
    let workLog: Array<WorkLog> = [];

    const workQualitiesByOperator = dayLog.workQualities.filter(
      workQuality => operator.id === workQuality.workLog.idOperator
    );
    const workLogsByOperator = workQualitiesByOperator.map(
      workQuality => workQuality.workLog
    );

    workLogs = workLogsByOperator ? workLogsByOperator : [];
  }

  return workLogs;
};
