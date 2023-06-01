import React, {useState} from 'react';

export default function TextForm(props) {
  const displayWords = () => {
    if (text.length===0) {
      return 0;
    }
    else {
      return text.split(/\s+/).filter((element) => {return (element.length!==0)}).length;
    }
  }

  const linesCount = () => {
    if (text.length===0) {
      return 0;
    }
    else {
      let lines = text.split("\n");
      return lines.length;
    }
  }

  const handleOnChange = (event) => {
    setText(event.target.value);
  }

  const handleUpperCase = () => {
    let newText = text.toUpperCase();
    setText(newText);
  }

  const handleLowerCase = () => {
    let newText = text.toLowerCase();
    setText(newText);
  }

  const handleToggleCase = () => {
    let newText = "";
    for (let i=0; i<text.length; i++) {
      if (text.charAt(i)===text.charAt(i).toLowerCase()) {
        newText += text.charAt(i).toUpperCase();
      }
      else if (text.charAt(i)===text.charAt(i).toUpperCase()) {
        newText += text.charAt(i).toLowerCase();
      }
      else {
        newText += text.charAt(i);
      }
    }
    setText(newText);
  }

  const handleAlternateCase = () => {
    let newText = "";
    for (let i=0; i<text.length; i++) {
      if (i%2===0) {
        newText += text.charAt(i).toLowerCase();
      }
      else {
        newText += text.charAt(i).toUpperCase();
      }
    }
    setText(newText);
  }

  const handleCapitalize = () => {
    if (text.length!==0) {
      let lines = text.split("\n");
      for (let i = 0; i < lines.length; i++) {
        let words = lines[i].toLowerCase().split(" ");
        for (let j = 0; j < words.length; j++) {
          let word = words[j];
          words[j] = word.charAt(0).toUpperCase() + word.slice(1);
        }
        lines[i] = words.join(" ");
      }
      let newText = lines.join("\n");
      setText(newText);
  }
}

  const handleExtraSpaces = () => {
    let newTextArray = text.split(/[ ]+/);
    let newText = newTextArray.join(" ").trim();
    setText(newText);
  }

  const handleExtraLines = () => {
    let lines = text.split("\n").filter((e) => {return e.length!==0});
    let newText = lines.join("\n");
    setText(newText);
  }

  const handleCopyText = () => {
    let copyText = document.getElementById("myTextBox");
    copyText.select();
    navigator.clipboard.writeText(copyText.value);
    document.getSelection().removeAllRanges();
  }

  const handleClearText = () => {
    let newText = "";
    setText(newText);
  }
  
  const [text, setText] = useState("");
  return (
    <>
    <div className="container">
      <h1 className="mb-3 heading" style={{color: props.mode==='light'?'black':'white'}}>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control shadow-none" style={{backgroundColor: props.mode==='light'?'white':'#343a40', color: props.mode==='light'?'black':'white'}} id="myTextBox" rows="8" placeholder='Type or paste your text' value={text} onChange={handleOnChange}></textarea>
      </div>
    </div>
    <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleUpperCase}>Convert To Uppercase</button>
    <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleLowerCase}>Convert To Lowercase</button>
    <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleToggleCase}>Toggle Case</button>
    <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleAlternateCase}>Alternate Case</button>
    <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleCapitalize}>Capitalize</button>
    <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleExtraLines}>Remove Extra Lines</button>
    <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleCopyText}>Copy Text</button>
    <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleClearText}>Clear Text</button>
    <div className="container mt-5" style={{color: props.mode==='light'?'black':'white'}}>
      <h4>Your Text Summary</h4>
      <p><strong>Words Count:</strong> {displayWords()} <br/> <strong>Characters Count:</strong> {text.length} <br/> <strong>Lines Count:</strong> {linesCount()} <br/> <strong>Reading Time:</strong> {(0.008*displayWords()).toFixed(2)} Minutes</p>
      <h4>Preview</h4>
      <pre className='form-control' style={{backgroundColor: props.mode==='light'?'white':'#343a40', color: props.mode==='light'?'black':'white'}}>{text.length>0?text:"Nothing to preview"}</pre>
    </div>
    </>
  )
}
