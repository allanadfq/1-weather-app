import React from "react";

const ShowCurrent = ({ data, setContainerStyle, setMasterContainerColor }) => {
  React.useEffect(() => {
    if (data[0].time === false) {
      setContainerStyle("container attBgContainer-night");
      setMasterContainerColor("master-container-night");
    } else {
      setContainerStyle("container attBgContainer-day");
      setMasterContainerColor("master-container-day");
    }
  }, [data, setContainerStyle, setMasterContainerColor]);
  return (
    <>
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
