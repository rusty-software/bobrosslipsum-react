import React from "react";

function Sidebar({
  numParagraphs,
  setNumParagraphs,
  numSentences,
  setNumSentences,
  onRegenerate,
}) {
  return (
    <nav className="sidebar" id="inputs" style={{ zIndex: 3, width: "260px" }}>
      <div className="w3-container w3-display-container w3-padding-16">
        <h3>Happy Lipsum!</h3>
        <hr />
        <p>
          <label>Number of Paragraphs</label>
          <input
            type="number"
            value={numParagraphs}
            onChange={(e) => setNumParagraphs(parseInt(e.target.value) || 0)}
            className="w3-input"
          />
        </p>
        <p>
          <label>Number of Sentences</label>
          <input
            type="number"
            value={numSentences}
            onChange={(e) => setNumSentences(parseInt(e.target.value) || 0)}
            className="w3-input"
          />
        </p>
        <p>
          <button
            className="w3-button w3-block w3-green"
            onClick={onRegenerate}
          >
            Let's Get Crazy
          </button>
        </p>
      </div>

      <div className="w3-bar-block">
        <a className="w3-bar-item w3-button w3-padding-16" href="#home-top">
          <i className="fa fa-home"></i> Home
        </a>
        <a className="w3-bar-item w3-button w3-padding-16" href="#instructions">
          <i className="fa fa-info-circle"></i> Instructions
        </a>
        <a className="w3-bar-item w3-button w3-padding-16" href="#sample">
          <i className="fa fa-paint-brush"></i> Sample
        </a>
        <a className="w3-bar-item w3-button w3-padding-16" href="#about">
          <i className="fa fa-user"></i> About
        </a>
        <a className="w3-bar-item w3-button w3-padding-16" href="#contact">
          <i className="fa fa-envelope"></i> Contact
        </a>
      </div>
    </nav>
  );
}

export default Sidebar;
