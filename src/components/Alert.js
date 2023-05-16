import React from 'react'

export default function Alert(props) {
  const capitalize = (message) => {
    return message.charAt(0).toUpperCase() + message.slice(1);
  }

  return (
    <div style={{height: '40px'}}>
      { props.alert && <div className={`alert alert-${props.alert.type} p-2`} role="alert">
        <strong>{capitalize(props.alert.type)}: </strong> {props.alert.message} </div>
      }
    </div>
  )
}
