import Operator from 'interfaces/Operator';
import moment from 'moment';

const uuidv4 = require('uuid/v4');

const generateOperator = (): Operator => {
  var uuid = uuidv4();

  var operator: Operator = {
    id: uuid,
    name: 'Operator ' + uuid,
    category: 0,
    isPunished: false,
    isActive: true,
    hiredDate: moment(),
    punishmentNumber: 0
  };

  return operator;
};
