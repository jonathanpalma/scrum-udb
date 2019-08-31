import moment from 'moment';
import WorkQuality from './WorkQuality';

export default interface DayLog {
  day: moment.Moment;
  workQualities: Array<WorkQuality>;
}
