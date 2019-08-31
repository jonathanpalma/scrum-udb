import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

function TabMenu(): JSX.Element {
  return (
    <Tabs>
      <TabList>
        <Tab>Option 1</Tab>
        <Tab>Option 2</Tab>
      </TabList>
      <TabPanel>
        <p>Panel 1</p>
      </TabPanel>
      <TabPanel>
        <p>Panel 2</p>
      </TabPanel>
    </Tabs>
  );
}

export default TabMenu;
