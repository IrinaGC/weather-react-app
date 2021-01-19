import React, { useState } from "react"; 
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import "./ControlledTabs.css"
import "bootstrap/dist/css/bootstrap.min.css";

export default function ControlledTabs() {
  const [key, setKey] = useState('home');

  return (
    <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="Tabs"
    >
      <Tab eventKey="hourly" title="Hourly" area-selected="true" className="Tab nav-item nav-link">
     <h1>Hello</h1>
      </Tab>
      <Tab eventKey="daily" title="Daily" className="Tab nav-item nav-link">
        
      </Tab>
    </Tabs>
  );
}
