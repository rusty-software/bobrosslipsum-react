import React from "react";

function Instructions() {
  return (
    <div id="instructions" className="w3-container">
      <h2>Instructions</h2>
      <p>
        On loading or refreshing this page, you are shown a single sentence that
        is a direct quote from a Bob Ross episode. Enter the number of
        paragraphs of lipsum you want in the first textbox, and the number of
        sentences per paragraph in the second. Note that the number of sentences
        is not guaranteed to be exact, as some quotes are multiple sentences in
        themselves and the generator treats them as a single sentence.
      </p>
      <p>
        The generator will do its best to display unique sentences, but there
        are two things to consider:
        <ul>
          <li>There are a limited number of quotes in the database.</li>
          <li>
            Bob Ross said similar things or repeated himself quite a bit from
            episode to episode.
          </li>
        </ul>
        The result of this is that some sentences are bound to sound alike if
        you request enough text, and you aren't guaranteed to get the full
        amount of text if you specify more than exists in the database.
      </p>
      <p>
        If you would like a fresh set of lipsum, clicking the Let's Get Crazy
        button will generate new content given the specified number of
        paragraphs and sentences in the inputs. The Clipboard It button copies
        the generated content to your system's global clipboard for easy pasting
        into whatever endeavor needs a good shot of Bob Ross Lipsum.
      </p>
    </div>
  );
}

export default Instructions;
