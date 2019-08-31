import Operator from "interfaces/Operator";
import OperatorAvailability from "interfaces/OperatorAvailabilty";

const getOperatorAvailabilityByDay =  (operator : Operator): OperatorAvailability => {
    var availability = 0;
    
    
    if (!operator.isActive){
        availability = 0;
    }

    if (operator.isPunished && operator.isActive){
        availability = 3;
        operator.isPunished = false;
    }

    if (operator.isActive && !operator.isPunished){
        availability = 4;
    }


    const operatorAvailability: OperatorAvailability = { operator: operator, availability: availability}
    

    return operatorAvailability;
}

export default getOperatorAvailabilityByDay;
