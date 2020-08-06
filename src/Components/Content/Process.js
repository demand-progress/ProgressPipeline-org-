import React, { Component } from "react";
import "./Process.scss"
import classNames from 'classnames'
import { getPage } from "../../utils";
import { Carousel } from 'react-responsive-carousel'
import { flatten } from 'ramda'

export default class Process extends Component  {
  state = {
    currentSlide: 0
  }
  componentDidMount() {
    getPage(350)
      .then(page => {
        console.log(page);
        this.setState({ page })
      })
  }
  render() {
    const { page, currentSlide } = this.state
    if (!page) return null
    return <div className="process">
      <div className="container">
        <div className="headline" >{page.acf.headline}</div>
        <p>{page.acf.subheadline}</p>
        <h3 className="mt">Your Process:</h3>
        <div className="your-process">
          <div className="steps">
            {flatten(page.acf.process_steps.map((t, i) => [<a key={i} onClick={() => this.setState({ currentSlide: i })} className={classNames('step', { active: i === currentSlide })}>{t.title}</a>, <span className="space" key={'space-' + i} />]))}
          </div>
          <Carousel
            showStatus={false}
            showThumbs={false}
            selectedItem={currentSlide}
            dynamicHeight={true}
            onChange={i => {
              this.setState({ currentSlide: i })
            }}
          >
            {page.acf.process_steps.map((t, i) => <div key={i} dangerouslySetInnerHTML={{ __html: t.body }} className="step"></div>)}
          </Carousel>
        </div>
        <div className="our-process" dangerouslySetInnerHTML={{ __html: page.content.rendered }} />
        <h3>{page.acf.stats_label}</h3>
        <div className="stats">
          {page.acf.stats.map((stat, i) => <div className="stat" key={'stat-' + i}>
            <h4>{stat.number}</h4>
            {stat.label}
          </div>)}
        </div>
        <div className="gallery">
          <Carousel
            showStatus={false}
            showThumbs={false}
            showIndicators={false}
            autoPlay
            infiniteLoop
          >
            {page.acf.images.map((t, i) => <div key={i} className="image"><img src={t.image.sizes.large} /></div>)}
          </Carousel>
          <div className="caption">{page.acf.gallery_caption}</div>
        </div>
      </div>
    </div>
  }
}