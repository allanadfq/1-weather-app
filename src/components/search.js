import React from "react";
import apiWeather from "../services/api";

export default function Search({ cityName, setCityName, setData, setLoading }) {
  const apiKey = "AYdl5aagM6A8r4ZrVoIAJfff0MSTJFmI";

  const handleChangeNameCity = (e) => {
    const { value } = e.target;
    setCityName(value);
  };

  const handleSearch = (e) => {
    e.preventDefault();

    if (cityName) {
      //fetching the location key from locations API
      setLoading(true);
      apiWeather
        .get(
          `locations/v1/cities/search?apikey=${apiKey}&q=${cityName}&language=pt-br`
        )
        .then((response) => {
          setData([
            {
              key: response.data[0].Key,
              country: response.data[0].Country.LocalizedName,
              city: response.data[0].LocalizedName,
              state: response.data[0].AdministrativeArea.ID,
            },
          ]);
        })
        .catch((err) => {
          console.log(err);
          alert("ERROR IN SEARCH| Please, contact the admin " + err);
          setLoading(false);
        })
        .finally(() => {
          setCityName("");
        });
    } else alert("the field cannot be empty, insert a city");
  };
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
