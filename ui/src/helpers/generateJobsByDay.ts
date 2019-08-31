import moment from 'moment';
import Job from '../interfaces/Job';
const uuidv4 = require('uuid/v4');


const rand = (min: number, max: number) => {
    return Math.random() * (max - min) + min;
  };

const getRandomJobs = (month: number): number => {

    const days = [15, 18, 20, 22, 25];

    var weight = [];
    switch(month) {
        case 9: case 10: case 11: case 0:
            weight = [0.05, 0.07, 0.08, 0.4, 0.45];
            break;
        case 1: case 2: case 3: case 4:
            weight = [0.45, 0.4, 0.08, 0.07, 0.05];
            break;
        case 5: case 6: case 7: case 8:
            weight = [0.2, 0.2, 0.2, 0.2, 0.2];
            break;
        default:
            weight = [0.2, 0.2, 0.2, 0.2, 0.2];
    }

    const totalWeight = weight.reduce((prev, current) => prev + current);
    const randomNum = rand(0, totalWeight);
    let weightSum = 0;
  
    for (let i = 0; i < days.length; i++) {
      weightSum += weight[i];
      weightSum = +weightSum.toFixed(2);
  
      if (randomNum <= weightSum) {
        return days[i];
      }
    }

    return 15;

}





const generateJobsByDay = (day: moment.Moment): Array<Job> => {


    var jobsNumber: number = getRandomJobs(day.month());
    var jobs : Array<Job> = [];

    for(var i = 1; i<=jobsNumber; i++) {
        const job : Job =  { id: uuidv4()};
        jobs.push(job);
    }
    
    return jobs;
}

export default generateJobsByDay;