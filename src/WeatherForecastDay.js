import React from "react";
import "./WeatherForecast.css";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }
  function forecastIcon() {
    let icon =
      `http://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`();
    return `${icon}`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }

  return (
    <div>
      <div className="WeatherForecast-day">{day()}</div>{" "}
      <div className="WeatherForecast-icon">
        <img src={forecastIcon.icon} alt="" width="55" height="60"></img>
      </div>
      <div className="WeatherForecast-temp">
        <span className="Forecast-max"> {maxTemperature()}</span>
        <span className="Forecast-min"> {minTemperature()}</span>
      </div>
    </div>
  );
}
