import React from "react";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  const apiKey = "14ae7857ff700daefb749e38ecc205df";
  let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Thu</div>{" "}
          <div className="WeatherForecast-icon">
            <img
              src="http://openweathermap.org/img/wn/10d@2x.png"
              alt="Light Rain"
              width="55"
              height="60"
            ></img>
          </div>
          <div className="WeatherForecast-temp">
            <span className="Forecast-max"> 19</span>
            <span className="Forecast-min"> 10</span>
          </div>
        </div>
      </div>
    </div>
  );
}
