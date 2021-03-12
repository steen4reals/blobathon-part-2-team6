import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

import { Button, TimePicker } from "blob-components";

const DOG_API = "https://dog.ceo/api/breeds/image/random";
function App() {
  const [dogUrl, setDogUrl] = useState("");

  async function FetchTheApi() {
    let result = await fetch(DOG_API);
    let data = await result.json();
    setDogUrl(data.message);
    //console.log(data.message);
    //console.log(data);
  }

  useEffect(() => {
    FetchTheApi();
  }, []);

  return (
    <div className="App">
      <Button />
      {/* <TimePicker /> */}
      <img src={dogUrl} alt="cute dog" />
    </div>
  );
}

export default App;
