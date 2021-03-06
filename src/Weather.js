import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import FormattedDate from "./formattedDate";
import WeatherTemperature from "./WeatherTemperature";
import WeatherForecast from "./WeatherForecast";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      city: response.data.name,
      iconUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
      date: new Date(response.data.dt * 1000),
    });
  }

  function search() {
    const apiKey = "14ae7857ff700daefb749e38ecc205df";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="container">
        <div className="weather-app">
          <form id="search-form" className="mb-3" onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-9">
                <input
                  type="search"
                  placeholder="Type a city.."
                  className="form-control search-input"
                  autoComplete="off"
                  onChange={handleCityChange}
                />
              </div>
              <div className="col-3">
                <input
                  type="submit"
                  value="Search"
                  className="btn btn-primary w-100"
                />
              </div>
            </div>
          </form>

          <div className="row">
            <div className="col-6">
              <h1>
                {" "}
                <strong id="city">{weatherData.city}</strong>
              </h1>
              <ul>
                <li id="date">
                  {" "}
                  <FormattedDate date={weatherData.date} />
                </li>
                <li className="text-capitalize" id="description">
                  {" "}
                  {weatherData.description}
                </li>
                <li>
                  Humidity:
                  <strong id="humidity"> {weatherData.humidity} %</strong>,
                </li>
                <li>
                  {" "}
                  Wind:<strong id="wind"> {weatherData.wind}</strong>
                  <strong>km/h</strong>
                </li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-9">
              <div className="float-right">
                <div className="temperature-container">
                  <img
                    src={weatherData.iconUrl}
                    alt={weatherData.description}
                    id="icon"
                  />
                </div>
                <div className="temperature">
                  <WeatherTemperature celsius={weatherData.temperature} />{" "}
                </div>
              </div>
            </div>
          </div>
          <WeatherForecast coordinates={weatherData.coordinates} />
        </div>
        <small>
          <a href="https://github.com/FranSanc/weather-react">
            {" "}
            Open source code{" "}
          </a>
          by Francesca Sancarlo and hosted on
          <a href="https://eager-minsky-250a22.netlify.app/"> Netlify </a>
        </small>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
