import React from "react";
import Logo from "../images/icons/35.svg";

const ShowCurrent = ({ data }) => {
  const [icon, setIcon] = React.useState("");
  return (
    <>
      {data.map((item) => (
        <div key={item.temperature}>
          <img src={Logo} width={70} alt="icon" />
          <h3>{item.temperature}°C</h3>
          <br />
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
