import Operator from "interfaces/Operator";
import moment from 'moment';

const fireOperator = (operator: Operator): Operator => {

    operator.firedDate = moment();
    operator.isActive = false;

    return operator;
}

export default fireOperator;