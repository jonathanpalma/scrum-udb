<<<<<<< HEAD
import React, { useState } from 'react';
import generateWorkableDays from 'helpers/generateWorkableDays';
import SimulatorForm, { SimulatorFormData } from './SimulatorForm';
=======
import React from 'react';
import generateJobsByDay from 'helpers/generateJobsByDay';
import moment from 'moment';

>>>>>>> generateJobsByDay

function HomePage() {
  const [isSimulating, setIsSimulating] = useState(false);
  const onSubmit = (form: SimulatorFormData): void => {
    setIsSimulating(true);
    const workableDays = generateWorkableDays(36);
    console.log(form, workableDays);

    setTimeout(() => {
      setIsSimulating(false);
    }, 2000);
  };

  return (
    <div className="container">
      <SimulatorForm onSubmit={onSubmit} isLoading={isSimulating} />
    </div>
  );
}

export default HomePage;
