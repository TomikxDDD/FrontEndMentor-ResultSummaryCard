import React from "react";

import DisciplineResultBar from "../components/DisciplineResultBar";

export default function ResultSummaryCard(props) {
  // Render the given number of disciplines
  const disciplineResultBars = [];
  let newDisciplineResultBar;
  let discipline;

  for (let index = 0; index < props.numOfDisciplines; index++) {
    discipline = props.data[index];
    newDisciplineResultBar = (
      <DisciplineResultBar
        name={discipline.category}
        score={discipline.score}
        logoPath={discipline.icon}
        logoAlt={discipline.iconAlt}
        backgroundColor={discipline.backgroundColor}
        maxScorePossible={discipline.maxScorePossible}
      />
    );
    disciplineResultBars.push(newDisciplineResultBar);
  }
  ////////////////////////////////////////////////

  return (
    <div className="card row">
      <section className="overall column">
        <div className="text__container">
          <h2 className="overall__h2 faded">Your result</h2>
          <div className="overall__score-section">
            <div className="overall__score__container">
              <p className="score-gained">76</p>
              <p className="score-out-of faded">of 100</p>
            </div>
          </div>
          <h3 className="overall__h3">Great</h3>
          <p className="overall__p faded">You scored higher than 65% of the people who have taken these tests</p>
        </div>
      </section>
      <section className="discipline-summary column">
        <div className="text__container">
          <h2 className="discipline-summary__h2">Summary</h2>
          <div className="">{disciplineResultBars}</div>
          <div className="btn summary-result__btn">Continue</div>
        </div>
      </section>
    </div>
  );
}
