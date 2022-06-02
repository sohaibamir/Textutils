import React, { useState } from "react";

export default function TextForm(props) {
  const handleUppercase = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase!", "success");
  };

  const handleLowercase = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase!", "success");
  };

  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text Cleared!", "success");
  };

  const handleCopyClick = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Text Copied!", "success");
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed!", "success");
  };

  const handleSearchWord = () => {
    let val = prompt("Enter word to Find");
    if (
      text.toUpperCase().includes(val) ||
      text.toLowerCase().includes(val) ||
      text.includes(val)
    ) {
      props.showAlert("Word found in the text!", "success");
    } else {
      props.showAlert("Word not found in the text!", "success");
    }
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("");
  // text = "abf";   //wrong way to change the state
  // setText("abf"); //correct way to change the state
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "#042743" : "white",
              color: props.mode === "dark" ? "white" : "#042743",
            }}
            rows="8"
          ></textarea>
        </div>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-1"
          onClick={handleUppercase}
        >
          Convert to Uppercase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-success mx-2 my-1"
          onClick={handleLowercase}
        >
          Convert to Lowercase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-danger mx-2 my-1"
          onClick={handleClearClick}
        >
          Clear Text
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-warning mx-2 my-1"
          onClick={handleCopyClick}
        >
          Copy Text
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-info mx-2 my-1"
          onClick={handleExtraSpaces}
        >
          Remove Extra Spaces
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-dark mx-2 my-1"
          onClick={handleSearchWord}
        >
          Search Word
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h2>Your text summary</h2>
        <p>
          {
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words and {text.length} characters
        </p>
        <p>
          {0.008 *
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length}{" "}
          Minutes read
        </p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Nothing to preview!"}</p>
      </div>
    </>
  );
}
