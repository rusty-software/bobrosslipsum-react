
import React from "react";
import toast from "react-hot-toast";

function ClipboardButton() {
  const handleCopy = () => {
    const text = document.getElementById("lipsum-text")?.innerText;
    if (text) {
      navigator.clipboard.writeText(text).then(() => {
        toast.success("Copied to clipboard!");
      }).catch(() => {
        toast.error("Failed to copy.");
      });
    } else {
      toast("Nothing to copy!", { icon: "🤔" });
    }
  };

  return (
    <button className="happy-button" onClick={handleCopy}>
      Copy Bob Ross Ipsum
    </button>
  );
}

export default ClipboardButton;
