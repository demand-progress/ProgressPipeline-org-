import React, { Component } from "react";
import "./Home.scss"
import { getPage } from "../../utils";

export default class Home extends Component  {
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
    return <div className="home">
      <div className="banner">
        <h2>We want Congress to be staffed with progreessives that represent America</h2>
      </div>
      <h2>{page.title.rendered}</h2>
      <div dangerouslySetInnerHTML={{ __html: page.content.rendered }} className="body"></div>
    </div>
  }
}