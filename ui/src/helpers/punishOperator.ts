import Operator from "interfaces/Operator";

const punishOperator = (operator: Operator): Operator => {

    operator.punishmentNumber++;
    operator.isPunished = true;

    return operator;
}

export default punishOperator;