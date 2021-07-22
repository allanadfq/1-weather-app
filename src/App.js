import React from "react";
import "./GlobalStyle.css";
import Search from "./components/search";
import ShowResult from "./components/showResult";

function App() {
  const [cityName, setCityName] = React.useState("");
  const [data, setData] = React.useState([]);
  return (
    <div className="container">
      <h1>Aplicativo Weather</h1>
      <Search
        cityName={cityName}
        setCityName={setCityName}
        data={data}
        setData={setData}
      />
      <ShowResult data={data} />
    </div>
  );
}

export default App;
