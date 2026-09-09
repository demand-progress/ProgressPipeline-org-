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
    return <div className="home">
      <div className="banner">
        <div className="container">
          <h2 dangerouslySetInnerHTML={{ __html: page.acf.headline }} />
        </div>
        <div className='people'></div>
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
          <p className='disclaimer'>All data regarding job requirements and salaries is provided for informational purposes only; the precise requirements and salary of all positions are set by the specific employer and may vary accordingly. Read more: <a href="https://www.congress.gov/crs-product/IF13073" target="_blank" rel="noopener noreferrer">House</a>, <a href="https://www.congress.gov/crs-product/IF13074" target="_blank" rel="noopener noreferrer">Senate</a>, and <a href="https://help.usajobs.gov/working-in-government/pay" target="_blank" rel="noopener noreferrer">executive branch</a>.</p>
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