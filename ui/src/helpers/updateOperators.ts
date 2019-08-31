import Operator from 'interfaces/Operator';

const updateOperators = (
  allOperators: Array<Operator>,
  operator: Operator
): Array<Operator> => {
  const index = allOperators.findIndex(item => item.id === operator.id);

  return index > -1
    ? allOperators
        .slice(0, index)
        .concat(operator)
        .concat(allOperators.slice(index + 1))
    : allOperators.concat(operator);
};

export default updateOperators;
