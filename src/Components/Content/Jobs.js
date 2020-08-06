import React, { Component } from "react";
import "./Jobs.scss"
import classNames from 'classnames'
import { getPage } from "../../utils";

export default class Jobs extends Component  {
  state = {}
  componentDidMount() {
    getPage(540)
      .then(page => {
        console.log(page);
        this.setState({ page })
      })
  }
  render() {
    const { page } = this.state
    if (!page) return null
    return <div className="jobs">
      <div className="container">
        <div className="content" dangerouslySetInnerHTML={{ __html: page.content.rendered }} />
        <div className="twitter">
          <a className="twitter-timeline" href="https://twitter.com/opengovjobs?ref_src=twsrc%5Etfw">Tweets by opengovjobs</a> <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
        </div>
      </div>
    </div>
  }
}