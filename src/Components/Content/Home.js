import React, { Component, useRef } from "react";
import "./Home.scss"
import classNames from 'classnames'
import { getPage } from "../../utils";
import { Carousel } from 'react-responsive-carousel'
import IsVisible from "react-is-visible"

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
    console.log(page);
    return <div className="home">
      <div className="banner">
        <div className="container">
        <h2 dangerouslySetInnerHTML={{ __html: page.acf.headline }} />
        </div>
      </div>
      <div className="wrap">
        <div className="container">
          <div dangerouslySetInnerHTML={{ __html: page.content.rendered }} className="body"></div>
          <IsVisible>
            {isVisible => <div className="types">
              {page.acf.types.map((t, i) => <div className={classNames("type", { 'come-in': isVisible })} key={`type-${i}`}>
                <h4>{t.title}</h4>
                <p className="subtitle">{t.description}</p>
                <div dangerouslySetInnerHTML={{ __html: t.list }} className="list"></div>
                </div>)}
            </div>}
          </IsVisible>
        </div>
      </div>
      <div className="testimonials">
        <div className="container">
          <h2 className="blue">What people are saying</h2>
          <Carousel
            showStatus={false}
            showThumbs={false}
            dynamicHeight={true}
          >
            {page.acf.testimonials.map((t, i) => <div key={i} dangerouslySetInnerHTML={{ __html: t.testimonial }} className="testimonial"></div>)}
          </Carousel>
        </div>
      </div>
    </div>
  }
}