import React, { Component } from "react";
import "./About.scss"
import { getPage } from "../../utils";

export default class About extends Component  {
  state = {

  }
  componentDidMount() {
    getPage(352)
      .then(page => {
        this.setState({ page })
      })
  }
  render() {
    const { page } = this.state
    if (!page) return null
    console.log(page);
    return <div className="about">
      About
    </div>
  }
}