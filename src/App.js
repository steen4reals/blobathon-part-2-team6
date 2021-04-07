import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

import { Button, StarRating, NumberInput } from "blob-components";

import corgi from './corgiImage.jpeg'

function App() {
  const [dogUrl, setDogUrl] = useState([]);
  const [input, setInput] = useState(1);

  async function FetchTheApi(input) {
    let result = await fetch(`${process.env.REACT_APP_URL}/${input}`);
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

  function handleInput(event) {
    setInput(event.target.value);
  }

  return (
    <div className="App">
      <div className="App-header">
        <div className = 'container'>
          <h1>Welcome to Cuteness Overload</h1>
        <img src = {corgi} className ='corgi'/>
        </div>
        <NumberInput label = 'How much cuteness can you handle?' max={5} min={1} variant={"small"} onInput={handleInput} />
        <br />
        <Button children={"click for more cuteness"} onClick={FetchTheApi} />
        <br />
        <ul className="row-dogs">
          {dogUrl.map((dog) => {
            return (
              <li>
                <img src={dog} alt="cute dog" />
              </li>
            );
          })}
        </ul>
        <h2>Rate the Cuteness</h2>
        <StarRating className="Rating" />
      </div>
    </div>
  );
}

export default App;
