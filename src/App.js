import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

import { Button, StarRating, NumberInput} from "blob-components";

const DOG_API = "https://dog.ceo/api/breeds/image/random";

function App() {
  const [dogUrl, setDogUrl] = useState([]);
  const [input, setInput] = useState(1);

  async function FetchTheApi(input) {
    let result = await fetch(`${DOG_API}/${input}`);
    let data = await result.json();
    console.log("sdgfsgs");
    console.log(input);
    setDogUrl(data.message);
    //console.log(data.message);
    //console.log(data);
  }

  useEffect(() => {
    FetchTheApi(input);
  }, [input]);

  function handleInput(event){
    setInput(event.target.value);
  }

  return (
    <div className="App">
      <Button children ={"click for more cuteness"} onClick ={FetchTheApi}/>
      <NumberInput max={5} min={1} variant={"small"} onInput={handleInput}/>
      {dogUrl.map((dog)=>{
        return(
          <li>
           <img src={dog} alt="cute dog"/>
          </li>
          )
      })}
      <h1>Rate the Cuteness</h1>
      <StarRating/>
    </div>
  );
}

export default App;
