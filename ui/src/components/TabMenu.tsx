import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import BaseLineChart from './BaseLineChart';

function TabMenu(): JSX.Element {
  return (
    <Tabs>
      <TabList>
        <Tab>Option 1</Tab>
        <Tab>Option 2</Tab>
      </TabList>
      <TabPanel>
        <div>
          <h2>Panel 1</h2>
          <BaseLineChart />
        </div>
      </TabPanel>
      <TabPanel>
        <p>Panel 2</p>
      </TabPanel>
    </Tabs>
  );
}

export default TabMenu;
