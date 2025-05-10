import React from "react";

function ClipboardButton() {
  const copyToClipboard = () => {
    const lipsumElement = document.getElementById("lipsum-text");
    if (!lipsumElement) return;

    const text = lipsumElement.innerText;
    navigator.clipboard
      .writeText(text)
      .then(() => alert("Copied to clipboard!"))
      .catch((err) => console.error("Failed to copy: ", err));
  };

  return (
    <button className="w3-button w3-green" onClick={copyToClipboard}>
      Copy Bob Ross Ipsum
    </button>
  );
}

export default ClipboardButton;
