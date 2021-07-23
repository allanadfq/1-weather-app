import React from "react";
import "./GlobalStyle.css";
import apiWeather from "./services/api";
import Search from "./components/search";
import ShowLocation from "./components/showLocation";
import ShowCurrent from "./components/showCurrent";

function App() {
  const apiKey = "AYdl5aagM6A8r4ZrVoIAJfff0MSTJFmI";
  const [cityName, setCityName] = React.useState("");
  const [location, setLocation] = React.useState([]);
  const [current, setCurrent] = React.useState([]);

  React.useEffect(() => {
    const locationKey = location.length ? location[0].key : null;

    if (locationKey) {
      apiWeather
        .get(
          `currentconditions/v1/${locationKey}?apikey=${apiKey}&language=pt-br&details=true`
        )
        .then((res) => {
          const value = res.data[0];
          setCurrent([
            {
              text: value.WeatherText,
              temperature: value.Temperature.Metric.Value,
              humidity: value.RelativeHumidity,
              wind: value.Wind.Speed.Metric.Value,
              time: value.IsDayTime,
            },
          ]);
        })
        .catch((err) => console.log(err));
    }
  }, [location]);

  return (
    <div className="container">
      <h1>Aplicativo Weather</h1>
      <Search
        cityName={cityName}
        setCityName={setCityName}
        data={location}
        setData={setLocation}
      />
      <ShowLocation data={location} />
      <ShowCurrent data={current} />
    </div>
  );
}

export default App;
