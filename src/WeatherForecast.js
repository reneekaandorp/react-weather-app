import React, { useState } from "react";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);
  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  function day() {
    let date = new Date(forecast[0].time * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          <div className="col">
            {forecast.map(function (dailyForecast, index)) {
                if (index < 6) {
                    return (
            
            <div className="WeatherForecast-day">{day()}</div>
            <div className="WeatherForcast-icon">
              <img src={forecast[0].condition.icon_url} alt="weather-icon" />
            </div>
            <div className="WeatherForecast-temperatures">
              <span className="WeatherForecast-temperature-max">
                {Math.round(forecast[0].temperature.maximum)}°
              </span>
              <span className="WeatherForecast-temperature-min">
                {" "}
                {Math.round(forecast[0].temperature.minimum)}°
              </span>
            </div>
    );
                    })}
          </div>
        </div>
      </div>
    );

  } else {
    let apiKey = "79t19ca06b3618febf143dc04f0o86be";
    let city = props.city;
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
