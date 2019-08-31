import moment from 'moment';
import Job from 'interfaces/Job';
import Operator from 'interfaces/Operator';
import WorkLog from 'interfaces/WorkLog';
const uuidv4 = require('uuid/v4');

/*- function assign(day, job, operator)
  - params:
    - day: moment.Moment
    - job: Job
    - operator: Operator
  - returns:
    - workLog: WorkLog*/

const assign = (day: moment.Moment, job: Job, operator: Operator): WorkLog => {
  var workLog: WorkLog = {
    id: uuidv4(),
    idJob: job.id,
    idOperator: operator.id,
    date: day,
  };

  return workLog;
};

export default assign;
