import React, { useState } from "react"; 
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import TabsContentHourly from "./TabsContentHourly"
import TabsContentDaily from "./TabsContentDaily"
import "./ControlledTabs.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function ControlledTabs(props) {
  const [key, setKey] = useState('home');

  return (
    
    <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="Tabs"
    >
      <Tab eventKey="hourly" title="Hourly" className="Tab nav-item nav-link">
      <TabsContentHourly data={props.city} />
      </Tab>
      <Tab eventKey="daily" title="Daily" className="Tab nav-item nav-link">
      <TabsContentDaily lon={props.lon} lat={props.lat} />
      </Tab>
    </Tabs>
  );
}
