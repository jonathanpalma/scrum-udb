import React, { useState } from 'react';
import generateWorkableDays from 'helpers/generateWorkableDays';
import SimulatorForm, { SimulatorFormData } from './SimulatorForm';
import TabMenu from './TabMenu';

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
      <TabMenu />
    </div>
  );
}

export default HomePage;
