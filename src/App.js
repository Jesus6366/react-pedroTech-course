import { useState } from "react";
import "./App.css";

function App() {
  const [showText, setShowText] = useState(true);

  return (
    <div className="App">
      <button onClick={() => setShowText(!showText)}>Show/Hide</button>
      {showText && <h1>Hi My name is jesus </h1>}
    </div>
  );
}

export default App;
