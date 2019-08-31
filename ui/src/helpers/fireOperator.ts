import Operator from "interfaces/Operator";
import moment from 'moment';

const fireOperator = (day: moment.Moment, operator: Operator): Operator => {

    operator.firedDate = day;
    operator.isActive = false;

    return operator;
}

export default fireOperator;