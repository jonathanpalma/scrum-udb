import Evaluator from "interfaces/Evaluator";
const uuidv4 = require('uuid/v4');



const getRandomEvaluator = (): Evaluator => {
    var evaluator: Evaluator = {id: uuidv4(), name: uuidv4()}
    return evaluator;
}

export default getRandomEvaluator;