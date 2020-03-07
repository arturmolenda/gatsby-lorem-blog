import React from "react"
import "./headerText.scss"

const HeaderText = props => {
  return (
    <div className="header">
      <h1>{props.sectionTitle}</h1>
      {props.children && props.children}
    </div>
  )
}

export default HeaderText
