import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>React Weather App</h1>
        <Weather />
        <footer>
          This project was coded by{" "}
          <a
            href="https://silly-llama-8d5577.netlify.app"
            target="_blank"
            rel="noreferrer"
          >
            Renée Kaandorp
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/reneekaandorp/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
