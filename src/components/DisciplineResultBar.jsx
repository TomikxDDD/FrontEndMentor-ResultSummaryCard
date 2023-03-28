import React from "react";

export default function DisciplineResultBar(props) {
  const { r, g, b, a } = props.backgroundColor || {
    r: 255,
    g: 255,
    b: 105,
    a: 1,
  };
  let bgColor = `rgba(${r}, ${g}, ${b}, ${a})`;
  let color = `rgba(${(3 * r) / 4}, ${(3 * g) / 4}, ${(3 * b) / 4})`;

  return (
    <div className="discipline-result-bar" style={{ backgroundColor: bgColor, color: color }}>
      <div className="logo-and-name__section">
        <img className="discipline-logo" src={props.logoPath} alt={props.logoAlt} />
        <p className="discipline-name">{props.name}</p>
      </div>
      <div className="score__section">
        <span className="discipline-score">{props.score}</span>
        <span className="slash-sign">/</span>
        <span className="discipline-score-max">{props.maxScorePossible}</span>
      </div>
    </div>
  );
}
