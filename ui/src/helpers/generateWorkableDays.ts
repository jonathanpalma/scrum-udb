import moment from 'moment';

const addBusinessDays = (date: moment.Moment, days: number): moment.Moment => {
  let d = moment(date).add(Math.floor(days / 5) * 7, 'day');
  let remaining = days % 5;
  while (remaining) {
    d.add(1, 'd');
    if (d.day() !== 0 && d.day() !== 6) remaining--;
  }
  return d;
};

const getWeekDates = (
  startDate: moment.Moment,
  endDate: moment.Moment
): Array<moment.Moment> => {
  let currentDate = startDate;
  let dates: Array<moment.Moment> = [];

  while (moment(currentDate).isBefore(endDate)) {
    currentDate = addBusinessDays(currentDate, 1);
    dates = dates.concat(currentDate);
  }

  return dates;
};

const generateWorkableDays = (monthQuantity: number): Array<moment.Moment> => {
  const today = moment().startOf('day');
  const endDate = moment(today).add(monthQuantity, 'month');

  const workableDays: Array<moment.Moment> = getWeekDates(today, endDate);
  return workableDays;
};

export default generateWorkableDays;
