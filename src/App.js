import React from "react";
import "./GlobalStyle.css";
import apiWeather from "./services/api";
import Search from "./components/search";
import ShowLocation from "./components/showLocation";
import ShowCurrent from "./components/showCurrent";
import LoadingGif1 from "./images/LD.gif";

function App() {
  const apiKey = "AYdl5aagM6A8r4ZrVoIAJfff0MSTJFmI";
  const [cityName, setCityName] = React.useState("");
  const [location, setLocation] = React.useState([]);
  const [current, setCurrent] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

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
              icon: value.WeatherIcon,
            },
          ]);
        })
        .catch((err) => console.log(err))
        .finally(() => {
          setLoading(false);
        });
    }
    // console.log(current);
  }, [location]);

  return (
    <div className="container">
      <h1>Aplicativo Weather</h1>
      <Search
        cityName={cityName}
        setCityName={setCityName}
        setData={setLocation}
        setLoading={setLoading}
      />
      {loading ? (
        <img src={LoadingGif1} alt="loading gif" className="loading-gif" />
      ) : (
        <div className="infoWeather">
          <ShowLocation data={location} />
          <ShowCurrent data={current} />
        </div>
      )}
    </div>
  );
}

export default App;
