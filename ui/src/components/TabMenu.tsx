import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import JobsInTimeChart from './JobsInTimeChart';
import 'react-tabs/style/react-tabs.css';

function TabMenu(): JSX.Element {
  return (
    <Tabs>
      <TabList>
        <Tab>Demanda y Operarios en el tiempo</Tab>
        <Tab>Demanda vs Operarios</Tab>
        <Tab>Calificacion por Operario</Tab>
        <Tab>Remuneracion mensual</Tab>
      </TabList>
      <TabPanel>
        <div>
          <h2>Demanda y Operarios en el tiempo</h2>
          <JobsInTimeChart />
        </div>
      </TabPanel>
      <TabPanel>
        <div>
          <h2>Demanda vs Operarios</h2>
        </div>
      </TabPanel>
      <TabPanel>
        <h2>Calificacion por Operario</h2>
      </TabPanel>
      <TabPanel>
        <h2>Remuneracion mensual</h2>
      </TabPanel>
    </Tabs>
  );
}

export default TabMenu;
