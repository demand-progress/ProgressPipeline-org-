import React, { Component } from "react";
import "./Jobs.scss"
import classNames from 'classnames'
import { getPage } from "../../utils";
import { TwitterTimelineEmbed } from 'react-twitter-embed'

export default class Faq extends Component  {
  state = {}
  componentDidMount() {
    getPage(1042)
      .then(page => {
        this.setState({ page })
      })
  }
  render() {
    const { page } = this.state
    if (!page) return null
    return <div className="faq">
      <div className="container">
        <div className="content" dangerouslySetInnerHTML={{ __html: page.content.rendered }} />
      </div>
    </div>
  }
}