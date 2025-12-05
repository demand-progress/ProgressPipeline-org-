import React, { Component } from "react";
import "./Jobs.scss"
import { getPage } from "../../utils";

export default class PrivacyPolicy extends Component  {
  state = {}
  componentDidMount() {
    getPage(1361)
      .then(page => {
        this.setState({ page })
      })
  }
  render() {
    const { page } = this.state
    if (!page) return null
    return <div className="privacy-policy">
      <div className="container">
        <div className="content" dangerouslySetInnerHTML={{ __html: page.content.rendered }} />
      </div>
    </div>
  }
}
