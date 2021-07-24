import React from "react";

const ShowCurrent = ({ data }) => {
  return (
    <>
      {/* <h2>Dados atuais da cidade</h2> */}
      {data.map((item) => (
        <div key={item.temperature}>
          {/* <hr /> */}
          <div className="weather-current">
            <img
              src={require(`../images/icons/${item.icon}.svg`).default}
              alt="icon"
            />
            <span>{item.temperature}°C</span>
          </div>
          <hr />
          <span>{item.text}</span>
          <br />
          <span>Umidade: {item.humidity}%</span>
          <br />
          <span>Velocidade do Vento: {item.wind}Km/h</span>
        </div>
      ))}
    </>
  );
};

export default ShowCurrent;
