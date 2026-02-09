import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <div className="row mt-3 d-flex align-items-center">
        <div className="col-8">
          <div className="d-flex justify-content-space-between align-items-center">
            <img src={props.data.iconUrl} alt={props.data.description} />
            <WeatherTemperature celsius={props.data.temperature} />
          </div>
        </div>
        <div className="col-4">
          <ul>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind}km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
