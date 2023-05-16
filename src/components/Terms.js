import React from 'react';

export default function Terms(props) {
  return (
    <div className={`container text-${props.mode==='light'?'dark':'light'}`}>
      <h4 className='my-4'>Terms of Use</h4>
      <p>By using our website, you agree to be bound by the following terms and conditions:</p>
      <ol>
        <li style={{fontWeight: 'bold'}}>Acceptance of Terms: 
        <p style={{fontWeight: 'normal'}}>By using our website, you agree to be bound by these terms of use. If you do not agree to these terms, please do not use our website.</p></li>

        <li style={{fontWeight: 'bold'}}>Use of Website:
        <p style={{fontWeight: 'normal'}}>You may use our website for personal and non-commercial purposes only. You may not use our website for any illegal or unauthorized purpose.</p></li>

        <li style={{fontWeight: 'bold'}}>Intellectual Property:
        <p style={{fontWeight: 'normal'}}>All content on our website, including but not limited to text, graphics, logos, images, and software, is the property of {props.title} and is protected by copyright laws.</p></li>

        <li style={{fontWeight: 'bold'}}>Disclaimer of Warranties:
        <p style={{fontWeight: 'normal'}}>We make no warranty that our website will meet your requirements or that it will be error-free, uninterrupted, or secure. We are not responsible for any damages that may result from your use of our website.</p></li>

        <li style={{fontWeight: 'bold'}}>Limitation of Liability:
        <p style={{fontWeight: 'normal'}}>In no event shall {props.title} be liable for any direct, indirect, incidental, special, or consequential damages arising out of or in connection with your use of our website.</p></li>

        <li style={{fontWeight: 'bold'}}>Changes to Terms:
        <p style={{fontWeight: 'normal'}}>We may revise these terms of use at any time without notice. By using our website, you agree to be bound by the current version of these terms.</p></li>

        <li style={{fontWeight: 'bold'}}>Governing Law:
        <p style={{fontWeight: 'normal'}}>These terms of use shall be governed by and construed in accordance with the laws of the jurisdiction in which {props.title} is located.</p></li>
      </ol>
      <p>By using our website, you agree to be bound by these terms of use. If you have any questions or concerns about these terms, please contact us.</p>
    </div>
  )
}
