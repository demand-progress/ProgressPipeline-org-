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
        <div className="container">
          <h2>We want Congress to be staffed with<br/>progressives that represent America.</h2>
        </div>
      </div>
      <div className="wrap">
        <div className="container">
          <h2>{page.title.rendered}</h2>
          <div dangerouslySetInnerHTML={{ __html: page.content.rendered }} className="body"></div>
          <div className="types">
            {page.acf.types.map((t, i) => <div className="type" key={`type-${i}`}>
              <h4>{t.title}</h4>
              <p className="subtitle">{t.description}</p>
              <div dangerouslySetInnerHTML={{ __html: t.list }} className="list"></div>
              </div>)}
          </div>
        </div>
      </div>
    </div>
  }
}