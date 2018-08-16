import React from "react"


const Header = (props) => {
  let head = (
    <div className="header">
      <p> {props.headerText} </p>
    </div>
    )

  if(props.addClass){
    const classWithProp = `header ${props.addClass}`
    head = (
      <div className={classWithProp}>
        <p> {props.headerText} </p>
      </div>
    )
  }

  return (
    <div>
      {head}
    </div>
  )
}

export default Header