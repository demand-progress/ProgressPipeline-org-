import React from "react"
import PropTypes from "prop-types"
import "./content.css"

const Header = (props) => {
  return (
      <div>
        <div className="header">
        <h1> {props.headerText} </h1>
        </div>
       <div className="break"></div>
      </div>
  )
}

Header.propTypes = {
    headerText: PropTypes.string
}

export default Header