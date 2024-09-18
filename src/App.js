import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>{count}</h1>
      <br />

      <button
        style={{ fontWeight: "bold", fontSize: "16px" }}
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increase
      </button>
      <button
        style={{ fontWeight: "bold", fontSize: "16px" }}
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Decrease
      </button>
      <button
        style={{ fontWeight: "bold", fontSize: "16px" }}
        onClick={() => {
          setCount(0);
        }}
      >
        Zero
      </button>
    </div>
  );
}

export default App;
