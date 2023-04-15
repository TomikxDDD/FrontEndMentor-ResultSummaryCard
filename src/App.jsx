import "./App.css";
import ResultSummaryCard from "./components/ResultSummaryCard";

import data from "../data.json";
import { useState } from "react";

function App() {
  const [numOfDisciplines, setNumOfDisciplines] = useState(4);

  function changeNumOfDisciplines(event) {
    setNumOfDisciplines(event.target.value);
  }

  return (
    <>
      <main>
        <form action="" className="form-disciplines-number">
          <label htmlFor="numOfDisciplines">Number of disciplines: </label>
          <input type="number" min={1} max={6} onChange={changeNumOfDisciplines} />
        </form>
        <ResultSummaryCard data={data} numOfDisciplines={numOfDisciplines} />
      </main>
      <footer class="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. Coded by <a href="#">Tomas Kanka</a>.
      </footer>  
    </>
    );
}

export default App;
