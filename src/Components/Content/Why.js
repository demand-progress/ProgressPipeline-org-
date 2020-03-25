
import React, { Component } from "react";
import "./Why.scss"
import { getPage } from "../../utils";

export default class Why extends Component  {
  state = {}
  componentDidMount() {
    getPage(348)
      .then(page => {
        this.setState({ page })
      })
  }
  render() {
    const { page } = this.state
    if (!page) return null
    return <div className="why">
      <div className="container" dangerouslySetInnerHTML={{ __html: page.content.rendered }} />
    </div>
  }
}