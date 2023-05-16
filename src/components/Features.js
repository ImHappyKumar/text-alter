import React from 'react';
import '../App.css';

export default function Features(props) {
  return (
    <div className={`container text-${props.mode==='light'?'dark':'light'}`}>
      <h4 className='my-4'>Features</h4>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="col">
          <div className={`card h-100 custom-card-${props.mode==='light'?'light':'dark'}`}>
            {/* <img src="..." className="card-img-top" alt="..."> */}
            <div className="card-body">
              <h5 className="card-title">Word Count</h5>
              <p className="card-text">Our Word Count feature allows you to quickly and easily determine the number of words in your text, which can be helpful when you need to meet specific word count requirements.</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className={`card h-100 custom-card-${props.mode==='light'?'light':'dark'}`}>
            {/* <img src="..." className="card-img-top" alt="..."> */}
            <div className="card-body">
              <h5 className="card-title">Character Count</h5>
              <p className="card-text">The Character Count feature counts the number of characters in your text, which can be helpful when you are working with limited space or need to keep your text within a certain character limit.</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className={`card h-100 custom-card-${props.mode==='light'?'light':'dark'}`}>
            {/* <img src="..." className="card-img-top" alt="..."> */}
            <div className="card-body">
              <h5 className="card-title">Line Count</h5>
              <p className="card-text">Our Line Count feature counts the number of lines in your text, which can be helpful for formatting purposes or when you need to know how much space your text will take up.</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className={`card h-100 custom-card-${props.mode==='light'?'light':'dark'}`}>
            {/* <img src="..." className="card-img-top" alt="..."> */}
            <div className="card-body">
              <h5 className="card-title">Reading Time Count</h5>
              <p className="card-text">The Reading Time Count feature estimates how long it will take to read your text, which can be useful when preparing speeches or presentations.</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className={`card h-100 custom-card-${props.mode==='light'?'light':'dark'}`}>
            {/* <img src="..." className="card-img-top" alt="..."> */}
            <div className="card-body">
              <h5 className="card-title">Convert to Uppercase</h5>
              <p className="card-text">With our Convert to Uppercase feature, you can quickly change the case of your text to all uppercase letters.</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className={`card h-100 custom-card-${props.mode==='light'?'light':'dark'}`}>
            {/* <img src="..." className="card-img-top" alt="..."> */}
            <div className="card-body">
              <h5 className="card-title">Convert to Lowercase</h5>
              <p className="card-text">Our Convert to Lowercase feature allows you to change the case of your text to all lowercase letters with just one click.</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className={`card h-100 custom-card-${props.mode==='light'?'light':'dark'}`}>
            {/* <img src="..." className="card-img-top" alt="..."> */}
            <div className="card-body">
              <h5 className="card-title">Toggle Case</h5>
              <p className="card-text">The Toggle Case feature alternates the case of each letter in your text, which can be a fun way to stylize your text.</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className={`card h-100 custom-card-${props.mode==='light'?'light':'dark'}`}>
            {/* <img src="..." className="card-img-top" alt="..."> */}
            <div className="card-body">
              <h5 className="card-title">Alternate Case</h5>
              <p className="card-text">With our Alternate Case feature, every other letter in your text is capitalized, making it easy to create eye-catching headlines or titles.</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className={`card h-100 custom-card-${props.mode==='light'?'light':'dark'}`}>
            {/* <img src="..." className="card-img-top" alt="..."> */}
            <div className="card-body">
              <h5 className="card-title">Capitalize Text</h5>
              <p className="card-text">Our Capitalize Text feature allows you to capitalize the first letter of every word in your text, which can be useful when writing titles or headlines.</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className={`card h-100 custom-card-${props.mode==='light'?'light':'dark'}`}>
            {/* <img src="..." className="card-img-top" alt="..."> */}
            <div className="card-body">
              <h5 className="card-title">Remove Extra Spaces</h5>
              <p className="card-text">The Remove Extra Spaces feature removes any extra spaces in your text, making it easier to read and format.</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className={`card h-100 custom-card-${props.mode==='light'?'light':'dark'}`}>
            {/* <img src="..." className="card-img-top" alt="..."> */}
            <div className="card-body">
              <h5 className="card-title">Remove Extra Lines</h5>
              <p className="card-text">The Remove Extra Lines feature removes any extra lines in your text, making it easier to read and format.</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className={`card h-100 custom-card-${props.mode==='light'?'light':'dark'}`}>
            {/* <img src="..." className="card-img-top" alt="..."> */}
            <div className="card-body">
              <h5 className="card-title">Copy Text</h5>
              <p className="card-text">With our Copy Text feature, you can quickly copy your text to the clipboard and paste it into other applications.</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className={`card h-100 custom-card-${props.mode==='light'?'light':'dark'}`}>
            {/* <img src="..." className="card-img-top" alt="..."> */}
            <div className="card-body">
              <h5 className="card-title">Clear Text</h5>
              <p className="card-text">Our Clear Text feature allows you to start fresh with a new document by clearing all the text in the editor.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
