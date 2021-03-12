import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

import { Button, StarRating} from "blob-components";

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
      <Button children ={"click for more cuteness"} onClick ={FetchTheApi}/>
      <img src={dogUrl} alt="cute dog" />
      <h1>Rate the Cuteness</h1>
      <StarRating/>
    </div>
  );
}

export default App;
