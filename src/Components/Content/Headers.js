import React from "react"
import PropTypes from "prop-types"

const Header = (props) => {
  return (
      <div>
        <div className="header">
        <h1> {props.headerText} </h1>
        </div>
      </div>
  )
}

Header.propTypes = {
    headerText: PropTypes.string
}

export default Header