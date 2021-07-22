import axios from "axios";

const apiWeather = axios.create({
  baseURL: "http://dataservice.accuweather.com/",
});

export default apiWeather;
