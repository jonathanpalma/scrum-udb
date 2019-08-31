import React, { useReducer } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import Row from 'react-bootstrap/Row';
import isEmpty from 'lodash/isEmpty';
import moment from 'moment';
import generateWorkableDays from 'helpers/generateWorkableDays';
import SimulatorForm, { SimulatorFormData } from './SimulatorForm';
import TabMenu from './TabMenu';

interface State {
  isSimulating: boolean;
  workableDays: Array<moment.Moment>;
}

interface NewState {
  isSimulating?: boolean;
  workableDays?: Array<moment.Moment>;
}

function HomePage() {
  const [state, setState] = useReducer(
    (state: State, newState: NewState): State => ({ ...state, ...newState }),
    {
      isSimulating: false,
      workableDays: [],
    }
  );

  const simulate = (
    operatorsQty: number,
    hoursPerJob: number,
    effectiveness: number
  ): void => {
    setState({ isSimulating: true });

    const workableDays = generateWorkableDays(36);
    console.log(workableDays);

    setTimeout(() => {
      setState({ isSimulating: false, workableDays });
    }, 1000);
  };

  const onSubmit = ({
    operatorsQty,
    hoursPerJob,
    effectiveness,
  }: SimulatorFormData): void => {
    simulate(operatorsQty, hoursPerJob, effectiveness);
  };

  const { isSimulating, workableDays } = state;
  return (
    <div className="container">
      <SimulatorForm onSubmit={onSubmit} isLoading={isSimulating} />
      {isSimulating ? (
        <Row className="justify-content-md-center">
          <Spinner animation="grow" variant="primary" />
        </Row>
      ) : (
        isEmpty(workableDays) || <TabMenu />
      )}
    </div>
  );
}

export default HomePage;
