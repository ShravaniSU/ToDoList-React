import React from "react";

function App() {

    const [inputText, setInputText] = React.useState("");
    const [items, setItems] = React.useState([]);

    function handleChange(event){
        const newvalue = event.target.value;
        setInputText(newvalue);
    }
    function addItem(){
        setItems( (prevItems) => {
            return [...prevItems, inputText]
        });
        setInputText("");
    }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={inputText}/>
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {
            items.map((item) => {
                return <li>{item}</li>
            }) 
          }
        </ul>
      </div>
    </div>
  );
}

export default App;
