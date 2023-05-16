import React from 'react'

export default function Privacy(props) {
  return (
    <div className={`container text-${props.mode==='light'?'dark':'light'}`}>
      <h4 className='my-4'>Privacy Policy</h4>
      <p>This page explains how we collect, use, and protect the personal information that you provide to us.</p>
      <ol>
        <li style={{fontWeight: 'bold'}}>Information Collection: 
        <p style={{fontWeight: 'normal'}}>We do not collect any personal information from you when you use our website. We do not use cookies or any other tracking technologies.</p></li>

        <li style={{fontWeight: 'bold'}}>Information Usage:
        <p style={{fontWeight: 'normal'}}>As we do not collect any personal information from you, we do not use your information in any way.</p></li>

        <li style={{fontWeight: 'bold'}}>Information Sharing:
        <p style={{fontWeight: 'normal'}}>We do not share any personal information with third parties as we do not collect any information from you.</p></li>

        <li style={{fontWeight: 'bold'}}>Data Security:
        <p style={{fontWeight: 'normal'}}>We use industry-standard security measures to protect your personal information. However, we do not collect any personal information from you, so there is no information for us to secure.</p></li>

        <li style={{fontWeight: 'bold'}}>Changes to Privacy Policy:
        <p style={{fontWeight: 'normal'}}>We reserve the right to change this privacy policy at any time without notice. By using our website, you agree to be bound by the current version of this privacy policy.</p></li>
      </ol>
      <p>If you have any questions or concerns about our privacy policy, please contact us.</p>
      <p>Please note that this privacy policy is subject to change and was last updated on May 12, 2023.</p>
    </div>
  )
}
