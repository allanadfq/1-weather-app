import React from "react";

export default function ShowResult({ data }) {
  return (
    <>
      {data.length ? (
        <>
          <h2>A previsão de hoje é</h2>
          {data.map((item) => (
            <div key={item.key}>
              <span>{item.country}</span>
              <br />
              <span>
                {item.city}, {item.state}
              </span>
            </div>
          ))}
        </>
      ) : null}
    </>
  );
}
