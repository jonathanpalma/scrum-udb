import moment from 'moment';

export default interface WorkLog {
  id: string; // uuid
  idJob: string; // uuid
  idOperator: string; // uuid
  date: moment.Moment;
}
