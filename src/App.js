import React, { useState } from "react";
import Body from "./components/body/Body";
import Navbar from "./components/Navbar";

const App = () => {
  const [data, setData] = useState([]);
  const getData = (e) => {
    setData(e);
  };
  return (
    <div>
      <Navbar data={data} />
      <Body getData={getData} />
    </div>
  );
};

export default App;
