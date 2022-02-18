import React from "react";
import "./Weather.css";

export default function App() {
  return (
    <div className="container">
      <div className="weather-app">
        <form id="search-form" className="mb-3">
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Type a city.."
                className="form-control search-input"
                autoComplete="off"
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
              <strong id="city">London</strong>
            </h1>
            <ul>
              <li id="date"> Sun 30th Jan,</li>
              <li id="description"> Partially Cloudy</li>
              <li>
                Humidity:<strong id="humidity"> 85%</strong>,
              </li>
              <li>
                {" "}
                Wind:<strong id="wind"> 2</strong>
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
                  src="http://openweathermap.org/img/wn/02d@2x.png"
                  alt="Rainy"
                  id="icon"
                />
              </div>
              <div className="temperature">
                {" "}
                5
                <span className="unit" id="celsius-link">
                  °C|°F
                </span>
              </div>
              <div className="weather-forecast" id="forecast"></div>
            </div>
          </div>
        </div>
      </div>
      <small>
        <a href="https://github.com/FranSanc/weather-react">
          {" "}
          Open source code{" "}
        </a>
        by Francesca Sancarlo
      </small>
    </div>
  );
}
