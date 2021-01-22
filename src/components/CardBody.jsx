import React from "react";

import Form from "./Form";
import "./CardBody.css";
import Weather from "./Weather";
import ControlledTabs from "./ControlledTabs"

export default function CardBody() {
    return ( 
    <div className = "card-body CardBody" >
        <Form defaultCity="London" />
        <Weather />
        <ControlledTabs />
    </div>
    );
}