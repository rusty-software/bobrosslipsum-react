import React from "react";

function Sidebar({
  numParagraphs,
  setNumParagraphs,
  numSentences,
  setNumSentences,
  onRegenerate,
}) {
  return (
    <nav className="sidebar">
      <h2>Happy Lipsum!</h2>
      <hr />

      <label>
        Number of Paragraphs
        <input
          type="number"
          value={numParagraphs}
          onChange={(e) => setNumParagraphs(e.target.value)}
        />
      </label>

      <label>
        Number of Sentences
        <input
          type="number"
          value={numSentences}
          onChange={(e) => setNumSentences(e.target.value)}
        />
      </label>

      <button className="happy-button" onClick={onRegenerate}>
        Let's Get Crazy
      </button>

      <div style={{ marginTop: "2rem" }}>
        <a href="#home-top">Home</a>
        <a href="#instructions">Instructions</a>
        <a href="#sample">Sample</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}

export default Sidebar;
