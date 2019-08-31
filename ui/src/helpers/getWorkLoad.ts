import Job from 'interfaces/Job';
import Operator from 'interfaces/Operator';
import getOperatorAvailability from 'helpers/getOperatorAvailability';


const getWorkLoad = (jobs: Array<Job>, operators: Array<Operator>): number => {

    var operatorAvailabilitys = operators.map(operator => getOperatorAvailability);
    var availability = 0;


    return ;
}


