import React from "react"
import PropTypes from "prop-types"

const Header = (props) => {
  return (
      <div className="header">
        <p> {props.headerText} </p>
      </div>
  )
}

Header.propTypes = {
    headerText: PropTypes.string
}

export default Header