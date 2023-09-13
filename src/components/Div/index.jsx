import React from 'react'

export default function Div(props) {
  return (
    <div {...props}>{props.children}</div>
  )
}
