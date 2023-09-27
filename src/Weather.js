import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="row">
        <div className="col-9">
          <form id="search-form">
            <input
              type="search"
              placeholder="Enter a city.."
              class="form-control search-input"
              id="city-input"
            />
          </form>
        </div>
        <div className="col-3">
          <input type="submit" class="btn btn-primary w-100" value="Search" />
        </div>
      </div>

      <h2>Diever</h2>
      <ul>
        <li>Last updated: Wednesday 11:21</li>
        <li>Sunny</li>
      </ul>

      <div className="row">
        <div className="col-6">
          <img src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/broken-clouds-day.png" />
          <strong>20°C</strong>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: 60%</li>
            <li>Wind: 2 km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
