import React from "react";
import "./Form.css";


export default function Form() {
    return (
    <div className = "Form">
        <form className = "row">

            <div className = "col-6">
                <input type = "text"
                className = "form-control"
                autoComplete = "off"
                placeholder = "Weather in..." />
            </div>

            <div className = "col-1">
                <button type = "submit" className = "btn btn-outline-secondary mb-2">
                    <span role = "img" aria-label = "search">
                        🔍
                    </span> 
                </button> 
            </div>

            <div className = "col-5">
                <button type = "submit" className = "btn btn-outline-secondary mb-2">Current Location
                </button>
            </div>
        </form>
    </div>
    );
}