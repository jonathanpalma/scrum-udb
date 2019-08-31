import moment from 'moment';
import Job from './Job';
import Operator from './Operator';
import WorkQuality from './WorkQuality';

export default interface DayLog {
  day: moment.Moment;
  jobs: Array<Job>;
  operators: Array<Operator>;
  workQualities: Array<WorkQuality>;
}
