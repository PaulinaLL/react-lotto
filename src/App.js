import React from "react";
import "./App.css";
import LuckyNumbers from "./Components/LottoNumbers";

function App() {
  return (
    <div className="App">
      <main className="App-main">
        <h1>Lotto 6/49</h1>
        <h3>Lucky numbers generator</h3>
        <LuckyNumbers />
      </main>
    </div>
  );
}

export default App;
