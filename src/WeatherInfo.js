import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          Last updated: <FormattedDate date={props.data.time} />
        </li>
        <li className="description">{props.data.description}</li>
      </ul>

      <div className="row mt-4">
        <div className="col-6 d-flex">
          <img
            src={props.data.iconUrl}
            className="icon"
            alt={props.data.description}
          />
          <WeatherTemperature celsius={props.data.temperature} />
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {Math.round(props.data.wind)} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
