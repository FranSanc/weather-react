import React from "react";
import "./WeatherForecast.css";

export default function WeatherForecast() {
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
