
import React, { Component } from "react";
import "./Why.scss"
import { getPage } from "../../utils";
import { Carousel } from 'react-responsive-carousel'

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
      {page.acf.testimonials && 
        <div className="testimonials">
          <div className="container">
            <Carousel
              showStatus={false}
              showThumbs={false}
              dynamicHeight={true}
            >
              {page.acf.testimonials.map((t, i) => <div key={i} dangerouslySetInnerHTML={{ __html: t.testimonial }} className="testimonial"></div>)}
            </Carousel>
          </div>
        </div>
      }
    </div>
  }
}