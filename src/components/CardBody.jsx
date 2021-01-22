import React from "react";

import Form from "./Form";
import "./CardBody.css";
import ControlledTabs from "./ControlledTabs"

export default function CardBody() {
    return ( 
    <div className = "card-body CardBody" >
        <Form defaultCity="London" />
        <ControlledTabs />
    </div>
    );
}