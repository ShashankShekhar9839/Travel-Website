import React, { useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import "../css_styles/weather.css";

const Weather = () => {
  const [data, setData] = useState({});
  const [city, setCity] = useState("Delhi");

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=4cb8b9fc3c80f8241e3e2ca1bbf69c52`

  const searchCity = (event) => {

    if (event.key === "Enter") {
      axios.get(url).then((response) => {
        setData(response.data);
        console.log(response.data);
      });
      setCity("");
    }
  };

  return (
    <div className="weather">
      <Navbar />
      <div className="container">
        <h4>Want to know the weather of your next destination ?</h4>
        <div className="search">
          <input
            value={city}
            onChange={(event) => setCity(event.target.value)}
            onKeyPress={searchCity}
            placeholder="Search City"
          ></input>
        </div>

        <div className="div1">
          <p>{data.name}</p>
          {
            data.main? 
             <h1>{data.main.temp}{'\u00b0'}C</h1> : null
          }
          {
            data.weather ?  <p>{data.weather[0].main}</p> : null
          }
         
        </div>

        <div className="div2">
          {data.main ? <p>Feels {data.main.feels_like}{'\u00b0'}C</p>  : null}
          
          {
            data.main ?  <p>Humidity {data.main.humidity}%</p> : null
          }
         
         {
          data.wind ?    <p>Wind {data.wind.speed}MPH</p> : null
         }
       
        </div>
      </div>
    </div>
  );
};

export default Weather;
