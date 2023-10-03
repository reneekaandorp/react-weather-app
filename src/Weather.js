import React, { useState } from "react";
import FormattedDate from "./FormattedDate";
import "./Weather.css";
import axios from "axios";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    console.log(response);
    setWeatherData({
      ready: true,
      city: response.data.city,
      time: new Date(response.data.time * 1000),
      temperature: response.data.temperature.current,
      description: response.data.condition.description,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      iconUrl: response.data.condition.icon_url,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="row">
          <div className="col-9">
            <form id="search-form">
              <input
                type="search"
                placeholder="Enter a city.."
                className="form-control search-input"
                autoFocus="on"
              />
            </form>
          </div>
          <div className="col-3">
            <input
              type="submit"
              className="btn btn-primary w-100"
              value="Search"
            />
          </div>
        </div>

        <h1>{weatherData.city}</h1>
        <ul>
          <li>
            Last updated: <FormattedDate date={weatherData.time} />
          </li>
          <li className="description">{weatherData.description}</li>
        </ul>

        <div className="row mt-4">
          <div className="col-6 d-flex">
            <img
              src={weatherData.iconUrl}
              className="icon"
              alt={weatherData.description}
            />
            <span className="temperature">
              {Math.round(weatherData.temperature)}
            </span>
            <span className="unit">°C</span>
          </div>
          <div className="col-6">
            <ul>
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind: {Math.round(weatherData.wind)} km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "79t19ca06b3618febf143dc04f0o86be";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
