import React from "react";
import axios from "axios";

export default function Weather() {
  function handleResponse(response) {
    alert(`The weather in London is ${response.data.main.temp} `);
  }

  let apiKey = "14ae7857ff700daefb749e38ecc205df";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${apiKey}&units=${units}`;

  axios.get(apiUrl).then(handleResponse);

  return <h2>Hello from Weather</h2>;
}
