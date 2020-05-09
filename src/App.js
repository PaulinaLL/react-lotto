import React from "react";
import "./App.css";
import LuckyNumbers from "./Components/LottoNumbers";

function App() {
  return (
    <div className="App">
      <main className="App-main">
        <h2>Get the lucky numbers!</h2>
        <LuckyNumbers />
      </main>
    </div>
  );
}

export default App;
