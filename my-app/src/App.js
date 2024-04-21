import logo from './logo.svg';
import './App.css';
import { useState } from "react"

function App() {
  // const item = ["item 1", "item 2", "item 3", "item 4", "item 5"]
  const [items, setItems] = useState([
    "Item 1",
    "Item 2",
    "Item 3",
    "Item 4",
    "Item 5",
  ]);
  const [value, setValue] = useState("")  // value to update from user & setvalue use to update html

  function onvaluechange(e) {
  //  console.log(e.target.value)
    setValue(e.target.value)
  }
  function onAdd() {
    console.log(value);

    const newItems=[...items,value];
    setItems(newItems);
    setValue("");

  }
  return (

    <div className="App">
      <header className="App-header">
        <h1>ToDo list </h1>


        <p> hello world</p>

        <input type="text" placeholder="enter todo item :"
          value={value}
          onChange={onvaluechange}
        />
        <button onClick={onAdd}>Add</button>


        <ol>
          {items.map((item) => (
            <li style={{
              color: "red",
            }}
            >
              {item} </li>
          ))}
        </ol>
      </header>
    </div>



  );




}

export default App;
  