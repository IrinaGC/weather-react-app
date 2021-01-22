import React, {useState} from "react";
import "./LocationCity.css";



export default function LocationCity(props) {
  const [weatherData, setWeatherData]= useState({});
  function handleResponse(response){
    console.log(response.data)
    setWeatherData = {
      city: "London",
      country: "UK",
      day: "Monday",
      date: "07 Dec",
      time: "21:25"
  }
  
  };

  return ( 
<div className = "LocationCity">

    <h1 className = "card-title current-location">
        {locationData.city}, {locationData.country} 
    </h1>

    <h6 className = "card-title">
        {locationData.day}・ {locationData.date}・ {locationData.time} 
    </h6> 

</div>
  );
}