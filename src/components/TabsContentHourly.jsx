import React, {useState} from "react";
import ForecastHourlyPreview from "./ForecastHourlyPreview"
import axios from "axios";
import "./TabsContentHourly.css"



export default function TabsContentHourly(props) {
    const [loaded, setLoaded]=useState(false);
    const [forecast, setForecast]=useState(null);

    function handleResponse(response) {
        setForecast(response.data);
        setLoaded(true);
    }

    if (loaded && props.data === forecast.city.name) {
        return (
            <div className="TabsContentHourly row">
                {forecast.list.slice(0, 5).map(function (forecanstItem) {
                   return <ForecastHourlyPreview data={forecanstItem} />;
                })}
            </div>
        );
    } else {
    const apiKey = "75cf8c7a314c4f9b630e483a84924871";
    let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${props.data}&appid=${apiKey}&units=metric`
    axios.get(apiUrl).then(handleResponse);
    return(
        <div>   
            'Loading...'

        </div>

    );
    }
}