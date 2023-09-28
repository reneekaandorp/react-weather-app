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
              autoFocus="on"
            />
          </form>
        </div>
        <div className="col-3">
          <input type="submit" class="btn btn-primary w-100" value="Search" />
        </div>
      </div>

      <h1>Diever</h1>
      <ul>
        <li>Last updated: Wednesday 11:21</li>
        <li>Sunny</li>
      </ul>

      <div className="row mt-4">
        <div className="col-6 d-flex">
          <img
            src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/broken-clouds-day.png"
            className="icon"
          />
          <span className="temperature">20</span>
          <span className="unit">°C</span>
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
