import React, { useState } from "react";
import Sidebar from "./Sidebar";
import DisplayLipsum from "./DisplayLipsum";
import ClipboardButton from "./ClipboardButton";
import Instructions from "./Instructions";
import Sample from "./Sample";
import About from "./About";
import Contact from "./Contact";

function HomePage() {
  const [numParagraphs, setNumParagraphs] = useState(1);
  const [numSentences, setNumSentences] = useState(1);
  const [refreshCount, setRefreshCount] = useState(0);

  return (
    <div className="layout">
      <Sidebar
        numParagraphs={numParagraphs}
        setNumParagraphs={setNumParagraphs}
        numSentences={numSentences}
        setNumSentences={setNumSentences}
        onRegenerate={() => setRefreshCount((prev) => prev + 1)}
      />
      <div className="main">
        <div id="home-top" className="section">
          <h2>Bob says...</h2>
          <DisplayLipsum
            numParagraphs={numParagraphs}
            numSentences={numSentences}
            refreshCount={refreshCount}
          />
          <ClipboardButton />
        </div>
        <hr />
        <Instructions />
        <hr />
        <Sample />
        <hr />
        <About />
        <hr />
        <Contact />
      </div>
    </div>
  );
}

export default HomePage;
