import React from "react";
import apiWeather from "../services/api";

export default function Search({ cityName, setCityName, data, setData }) {
  const apiKey = "AYdl5aagM6A8r4ZrVoIAJfff0MSTJFmI";

  const handleChangeNameCity = (e) => {
    const { value } = e.target;
    setCityName(value);
  };

  const handleSearch = (e) => {
    e.preventDefault();

    if (cityName) {
      //fetching the location key from locations API
      apiWeather
        .get(
          `locations/v1/cities/search?apikey=${apiKey}&q=${cityName}&language=pt-br`
        )
        .then((response) => {
          setData([
            {
              ...data,
              key: response.data[0].Key,
              country: response.data[0].Country.LocalizedName,
              city: response.data[0].LocalizedName,
              state: response.data[0].AdministrativeArea.ID,
            },
          ]);
          handleRetrieveWeather(response.data[0].Key);
        })
        .catch((err) => alert("ERROR IN SEARCH| Please, contact the admin "))
        .finally(() => {
          setCityName("");
        });
    } else alert("the field cannot be empty, insert a city");
  };

  // function buscarHora() {
  //   const horaAgora = new Date().getHours();
  //   console.log(horaAgora);
  // }
  // buscarHora();

  //fetching weather data from forecast API
  const handleRetrieveWeather = (lk) => {
    apiWeather
      .get(
        `forecasts/v1/daily/1day/${lk}?apikey=${apiKey}&language=pt-br&details=true&metric=true`
      )
      .then((response) => console.log(response.data))
      .catch((err) => alert("ERROR IN RETRIEVE| Please, contact the admin "));
  };

  // response.data
  // .DailyForescasts[0]
  // 	.Temperature.Minimum.Value
  // 	.Temperature.Minimum.Unit
  // 	.Temperature.Maximum.Value
  // 	.Temperature.Maximum.Unit
  // 	.Day.IconPhrase
  // 	.Day.RainProbability
  // 	.Day.Wind.Speed.Value
  // 	.Night.IconPhrase
  // 	.Night.RainProbability
  // 	.Night.Wind.Speed.Value

  return (
    <>
      <form>
        <input
          type="text"
          placeholder="Insert a city name"
          className="input-search"
          value={cityName}
          onChange={handleChangeNameCity}
        />
        <button onClick={handleSearch}>Buscar</button>
      </form>
    </>
  );
}
