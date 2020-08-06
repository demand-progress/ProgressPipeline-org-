import React, { Component } from "react"
import "./ApplyBanner.scss"

export default class ApplyBanner extends Component {
  render(){
    return <div className="apply-banner footer">
      {this.props.children}<br/><a href="https://progressivetalentpipeline.applytojob.com/apply" target="_blank">Apply Now&nbsp;></a>
    </div>
  }
}