import React, { Component } from "react";
import "./About.scss"
import { getPage } from "../../utils";

export default class About extends Component  {
  state = {

  }
  componentDidMount() {
    getPage(346)
      .then(page => {
        this.setState({ page })
      })
  }
  render() {
    const { page } = this.state
    if (!page) return null
    console.log(page);
    return <div className="about">
      <div className="banner">
        <h2>
          Progress happens when we work together
        </h2>
      </div>
      <div className="logos">
        {page.acf.logo_images.map((img, i) => <img src={img.image.sizes.medium} key={`image-${i}`} /> )}
      </div>
      <div className="container">
        <div dangerouslySetInnerHTML={{ __html: page.content.rendered }} className="body"></div>
      </div>
      <div className="bg">
        <div className="container">
          <h2>Advisory Board</h2>
          <div className="advisors">
            {page.acf.advisors.map((adv, i) => <div className="advisor" key={`adv-${i}`}>
              <div className="image" style={{ backgroundImage: `url(${adv.image.sizes.medium})`}} />
              <h5>{adv.name}</h5>
              <p className="subtitle">{adv.title}</p>
            </div>)}
          </div>
        </div>
      </div>
      <div className="container staff">
        <h2>Progressive Talent Pipeline Staff</h2>
        <div className="staffs">
          {page.acf.staff.map((s, i) => <div className="staff-member" key={`staff-${i}`}>
            <span>{s.name}</span>
            <a href={`mailto:${s.email}`}>{s.email}</a>
          </div>)}
        </div>
      </div>
    </div>
  }
}