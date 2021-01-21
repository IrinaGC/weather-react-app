import React from "react";

import Form from "./Form";
import "./CardBody.css";
import LocationCity from "./LocationCity";
import Weather from "./Weather";
import ControlledTabs from "./ControlledTabs"

export default function CardBody() {
    return ( 
    <div className = "card-body CardBody" >
        <Form />
        <LocationCity />
        <Weather />
        <ControlledTabs />
    </div>
    );
}