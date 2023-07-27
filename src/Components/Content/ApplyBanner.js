import React, { Component } from "react"
import "./ApplyBanner.scss"
import { APPLY_URL } from "../../utils"

export default class ApplyBanner extends Component {
  render(){
    return <div className="apply-banner footer">
      <div className="item">
        {this.props.children} <a href={APPLY_URL} target="_blank">Apply now&nbsp;></a>
      </div>
      <div className="item">
        Want to stay in the loop? <a href="https://docs.google.com/forms/d/e/1FAIpQLScG65Bm4fj7pR0s0wED9MhVXTp7tOcArYeuDFVVgXOZaEptkQ/viewform" target="_blank">Sign up here&nbsp;></a>
      </div>
    </div>
  }
}