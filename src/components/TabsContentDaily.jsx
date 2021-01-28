import React, {useState} from "react";
import ForecastDailyPreview from "./ForecastDailyPreview"
import axios from "axios";



export default function TabsContentDaily(props) {
    const [loaded, setLoaded]=useState(false);
    const [forecast, setForecast]=useState(null);

    function handleResponse(response) {
        console.log(response.data);
        setForecast(response.data);
        setLoaded(true);
        
    }

    if (loaded && props.lat === forecast.lat && props.lon === forecast.lon) {
        return (
            <div className="TabsContentHourly row">
                {forecast.daily.slice(0, 5).map(function (forecanstItem) {
                   return <ForecastDailyPreview data={forecanstItem} />;
                })}
            </div>
        );
    } else {
    const apiKey = "75cf8c7a314c4f9b630e483a84924871";
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.lat}&lon=${props.lon}&exclude=current,minutely,hourly,alerts&appid=${apiKey}&units=metric`
    axios.get(apiUrl).then(handleResponse);
    return(
        <div>   
            `Hello `

        </div>

    );
    }
}