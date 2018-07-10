import React from "react"
import PropTypes from "prop-types"
import "./content.css"

const Header = (props) => {
  return (
      <div>
        <div className="header">
        <p> {props.headerText} </p>
        </div>
       <div className="break"></div>
      </div>
  )
}

Header.propTypes = {
    headerText: PropTypes.string
}

export default Header