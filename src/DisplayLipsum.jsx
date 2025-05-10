
import React, { useState, useEffect } from "react";

const quotes = [
  "Let's build a happy little cloud.",
  "Maybe there's a happy little tree that lives here.",
  "We don't make mistakes, just happy little accidents.",
  "You can do anything you want. This is your world.",
  "There's nothing wrong with having a tree as a friend.",
  "We'll make some big ol' huge mountains!",
  "Just sorta make these things up in your mind.",
  "Everybody should have a friend.",
  "That's the fun part of this whole technique.",
  "Don't overdo it -- be careful.",
  "Begin laying in just some beautiful little highlights.",
  "Always keep the brush moving.",
  "Follow these angles.",
  "There's nothing worse than an angry tree.",
  "We can stir this up a little bit.",
];

function shuffle(array) {
  return array
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
}

function DisplayLipsum({ numParagraphs, numSentences, refreshCount }) {
  const [paragraphs, setParagraphs] = useState([]);

  useEffect(() => {
    const shuffledQuotes = shuffle([...new Set(quotes)]);
    const newParagraphs = [];

    let index = 0;

    for (let i = 0; i < numParagraphs; i++) {
      const paragraph = [];

      while (paragraph.length < numSentences && index < shuffledQuotes.length) {
        paragraph.push(shuffledQuotes[index]);
        index++;
      }

      newParagraphs.push(paragraph);
    }

    setParagraphs(newParagraphs);
  }, [numParagraphs, numSentences, refreshCount]);

  return (
    <div id="lipsum-text">
      {paragraphs.map((sentences, index) => (
        <p key={`paragraph-${index}`}>{sentences.join(" ")}</p>
      ))}
    </div>
  );
}

export default DisplayLipsum;
