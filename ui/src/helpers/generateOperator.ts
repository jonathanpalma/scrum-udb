import moment from 'moment';
import Operator from 'interfaces/Operator';
import uuidv4 from 'uuid/v4';

const generateOperator = (hiredDate: moment.Moment): Operator => {
  const uuid = uuidv4();

  const operator: Operator = {
    id: uuid,
    name: `Operator ${uuid}`,
    category: 0,
    isPunished: false,
    isActive: true,
    hiredDate,
    punishmentNumber: 0,
  };

  return operator;
};

export default generateOperator;
