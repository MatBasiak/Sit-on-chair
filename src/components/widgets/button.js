import React from 'react'

const Button = (props) => {
  return (
    <div className={props.class}>
      {props.text}
    </div>
  )
}

export default Button
