import React, { useState } from "react";
import Sidebar from "./Sidebar";
import HomePage from "./HomePage";

function AppLayout() {
  const [numParagraphs, setNumParagraphs] = useState(1);
  const [numSentences, setNumSentences] = useState(1);
  const [refreshCount, setRefreshCount] = useState(0);

  return (
    <div id="app-inner">
      <Sidebar
        numParagraphs={numParagraphs}
        setNumParagraphs={setNumParagraphs}
        numSentences={numSentences}
        setNumSentences={setNumSentences}
        onRegenerate={() => setRefreshCount((prev) => prev + 1)}
      />
      <HomePage
        numParagraphs={numParagraphs}
        numSentences={numSentences}
        refreshCount={refreshCount}
      />
    </div>
  );
}

export default AppLayout;
