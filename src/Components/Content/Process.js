
import React, { Component } from "react";
import "./Process.scss"
import { getPage } from "../../utils";

export default class Process extends Component  {
  state = {}
  componentDidMount() {
    getPage(350)
      .then(page => {
        console.log(page);
        this.setState({ page })
      })
  }
  render() {
    const { page } = this.state
    if (!page) return null
    return <div className="process">
      <div className="container">

        <div className="headline" >{page.acf.headline}</div>
        <div className="our-process" dangerouslySetInnerHTML={{ __html: page.content.rendered }} />
        <h3>{page.acf.stats_label}</h3>
        <div className="stats">
          {page.acf.stats.map((stat, i) => <div className="stat" key={'stat-' + i}>
            <h4>{stat.number}</h4>
            {stat.label}
          </div>)}
        </div>
      </div>
    </div>
  }
}