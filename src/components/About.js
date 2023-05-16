import React from 'react';

export default function About(props) {
  return (
    <div className={`container text-${props.mode==='light'?'dark':'light'}`}>
      <h4 className='my-4'>About</h4>
      <p>
      Welcome to {props.title}, your one-stop destination for a range of useful text editing functions. Whether you are a student, writer, or just someone who frequently works with text, {props.title} has a variety of features that can make your work easier and more efficient.
      </p>
      <p>
      Our website includes basic functions such as word count, character count, and line count, which can help you to better understand the content and structure of your text. In addition, we have included a reading time count, which estimates how long it will take to read your text, making it easier to plan your presentations or speeches.
      </p>
      <p>
      For formatting your text, {props.title} offers several options, including converting your text to uppercase, lowercase, or title case, as well as toggling or alternating the case of your text. You can also remove extra spaces or lines from your text, which can be especially useful when working with large documents.
      </p>
      <p>
      {props.title} also includes convenient functions such as copying and clearing your text. With these features, you can easily transfer your text to other applications or start fresh with a new document.
      </p>
      <p>
      We at {props.title} hope that you find our website helpful and that it can save you time and effort in your work with text. Thank you for choosing {props.title} as your go-to text editing resource.
      </p>
      <p>
      Our team is made up of passionate developers who are dedicated to creating useful tools that make people's lives easier. We are constantly working to improve the functionality and performance of our website, and we welcome any feedback or suggestions you may have.
      </p>
      <p>
      At {props.title}, we believe in simplicity and efficiency. Our website is designed to be fast, reliable, and easy to use. We've eliminated all the clutter and unnecessary features that you might find in other text manipulation tools, so you can focus on what really matters: getting your text just the way you want it.
      </p>
      <p>
      We hope that our website will become your go-to tool for all your text manipulation needs. We're here to help you save time and get things done faster. Thank you for choosing {props.title}, and we look forward to serving you.
      </p>
    </div>
  )
}
