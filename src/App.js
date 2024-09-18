import { useState, useEffect } from "react";
import "./App.css";
import Axios from "axios";

function App() {
  // fetch("https://catfact.ninja/fact")
  //   .then((res) => res.json())
  //   .then((data) => {
  //     console.log(data);
  //   });

  const [catFact, setCatFact] = useState("");

  const fetchData = () => {
    Axios.get("https://catfact.ninja/fact").then((res) => {
      setCatFact(res.data.fact);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <button
        onClick={() => {
          fetchData();
        }}
      >
        Generate Cat Facts
      </button>
      <p>{catFact}</p>
    </div>
  );
}

export default App;
