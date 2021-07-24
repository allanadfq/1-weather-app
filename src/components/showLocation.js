import React from "react";

export default function ShowLocation({ data }) {
  return (
    <>
      {data.length ? (
        <>
          {data.map((item) => (
            <div key={item.key} className="weather-city">
              <span>
                {item.city}, {item.state}
              </span>
              <br />
              <span>{item.country}</span>
            </div>
          ))}
        </>
      ) : null}
    </>
  );
}
