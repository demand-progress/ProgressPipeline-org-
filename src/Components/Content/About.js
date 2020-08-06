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
      </div>
      {/* <div className="logos">
        {page.acf.logo_images.map((img, i) => <img src={img.image.sizes.medium} key={`image-${i}`} /> )}
      </div> */}
      <div className="container">
        <div dangerouslySetInnerHTML={{ __html: page.content.rendered }} className="body"></div>
      </div>
      {/* <div className="bg">
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
      </div> */}
      <div className="green-split">
        <div className="staff container">
          <div className="green">
            <h2>Questions?<br/>Comments?<br/>Recommendations?</h2>
            <a className="btn" href="mailto:info@progressivetalentpipeline.org">Email Us</a>
          </div>
          <div className="staffs">
            {page.acf.staff.map((s, i) => <div className="staff-member" key={`staff-${i}`}>
              <img src={s.image.sizes.medium} />
              <div className="info">
                <b>{s.name}</b>
                <div className="line">
                  <div>{s.position}</div>
                  <div>
                    <a className="email" href={`mailto:${s.email}`}/>
                    <a className="twitter" href={s.twitter} />
                  </div>
                </div>
              </div>
            </div>)}
          </div>
        </div>
      </div>
    </div>
  }
}