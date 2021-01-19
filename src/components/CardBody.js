import React from "react";

import Form from "./Form";
import "./CardBody.css";
import LocationCity from "./LocationCity";
import Weather from "./Weather";

export default function CardBody() {
    return ( 
    <div className = "card-body CardBody" >
        <Form />
        <LocationCity />
        <Weather />
    </div>
    );
}