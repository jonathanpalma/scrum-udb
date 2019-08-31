import moment from 'moment';

export default interface Operator {
  id: string; // uuid
  name: string;
  category: number, // values from 1 ~ 5
  isPunished: boolean;
  isActive: boolean;
  hiredDate: moment.Moment;
  firedDate?: moment.Moment;
}
