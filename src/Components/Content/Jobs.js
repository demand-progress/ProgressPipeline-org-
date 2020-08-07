import React, { Component } from "react";
import "./Jobs.scss"
import classNames from 'classnames'
import { getPage } from "../../utils";
import { TwitterTimelineEmbed } from 'react-twitter-embed'

export default class Jobs extends Component  {
  state = {}
  componentDidMount() {
    getPage(540)
      .then(page => {
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
          <TwitterTimelineEmbed
            sourceType="profile"
            screenName="opengovjobs"
            options={{height: 1200}}
          />
        </div>
      </div>
    </div>
  }
}