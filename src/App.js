import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h2>React Weather App</h2>
        <Weather defaultCity="Diever" />
        <small>
          <a
            href="https://github.com/reneekaandorp/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            Open-source code
          </a>{" "}
          by{" "}
          <a
            href="https://silly-llama-8d5577.netlify.app"
            target="_blank"
            rel="noreferrer"
          >
            Renée Kaandorp
          </a>
        </small>
      </div>
    </div>
  );
}
