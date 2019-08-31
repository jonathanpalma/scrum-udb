export default interface WorkQuality {
  id: string; // uuid
  idWorkLog: string; // uuid
  idEvaluator: string; // uuid
  score: number; // values from 1 ~ 5
}
