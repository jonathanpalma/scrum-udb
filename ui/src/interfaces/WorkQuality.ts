import WorkLog from './WorkLog';

export default interface WorkQuality {
  id: string; // uuid
  idEvaluator: string; // uuid
  score: number; // values from 1 ~ 5
  workLog: WorkLog;
}
