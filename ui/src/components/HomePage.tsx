import React, { useReducer } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import Row from 'react-bootstrap/Row';
import isEmpty from 'lodash/isEmpty';
import moment from 'moment';
import generateWorkableDays from 'helpers/generateWorkableDays';
import Job from 'interfaces/Job';
import Operator from 'interfaces/Operator';
import WorkQuality from 'interfaces/WorkQuality';
import DayLog from 'interfaces/DayLog';
import generateJobsByDay from 'helpers/generateJobsByDay';
import generateOperator from 'helpers/generateOperator';
import updateOperators from 'helpers/updateOperators';
import SimulatorForm, { SimulatorFormData } from './SimulatorForm';
import TabMenu from './TabMenu';

interface State {
  isSimulating: boolean;
  jobs: Array<Job>;
  operators: Array<Operator>;
  logsByDay: Array<DayLog>;
}

interface OptionalState {
  isSimulating?: boolean;
  jobs?: Array<Job>;
  operators?: Array<Operator>;
  logsByDay?: Array<DayLog>;
}

export const LogContext = React.createContext<Array<DayLog>>([]);

function HomePage() {
  const [state, setState] = useReducer(
    (prevState: State, newState: OptionalState): State => ({
      ...prevState,
      ...newState,
    }),
    {
      isSimulating: false,
      jobs: [],
      operators: [],
      logsByDay: [],
    }
  );

  const simulate = (
    operatorsQty: number,
    hoursPerJob: number,
    effectiveness: number
  ): void => {
    setState({ isSimulating: true });

    setTimeout(() => {
      const workableDays = generateWorkableDays(1);

      let allJobs: Array<Job> = [];
      let allOperators: Array<Operator> = Array.from(Array(operatorsQty), () =>
        generateOperator(workableDays[0])
      );
      const logsByDay: Array<DayLog> = workableDays.map(
        (day: moment.Moment): DayLog => {
          const jobs: Array<Job> = generateJobsByDay(day);
          const operators: Array<Operator> = [...allOperators];

          allJobs = allJobs.concat(jobs);
          operators.forEach(operator => {
            allOperators = updateOperators(allOperators, operator);
          });

          const workQualities: Array<WorkQuality> = [];
          return { day, jobs, operators, workQualities };
        }
      );

      setState({
        isSimulating: false,
        jobs: allJobs,
        operators: allOperators,
        logsByDay,
      });
    }, 150);
  };

  const onSubmit = ({
    operatorsQty,
    hoursPerJob,
    effectiveness,
  }: SimulatorFormData): void => {
    simulate(operatorsQty, hoursPerJob, effectiveness);
  };

  const { isSimulating, logsByDay } = state;
  return (
    <div className="container">
      <SimulatorForm onSubmit={onSubmit} isLoading={isSimulating} />
      {isSimulating ? (
        <Row className="justify-content-md-center">
          <Spinner animation="grow" variant="primary" />
        </Row>
      ) : (
        isEmpty(logsByDay) || (
          <LogContext.Provider value={logsByDay}>
            <TabMenu />
          </LogContext.Provider>
        )
      )}
    </div>
  );
}

export default HomePage;
