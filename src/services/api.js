import axios from "axios";

const apiWeather = axios.create({
  baseURL: "https://dataservice.accuweather.com/",
});

export default apiWeather;
