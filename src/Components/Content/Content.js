import React, { Component } from "react"
import Header from "./Header.js"
import Navigation from "../Navigation/Navigation.js"
import "./content.css"
import Page from "./Page.js"
import Form from "./Form.js"
import keys from '../../config/keys.js'
import axios from 'axios'

class Content extends Component {
    constructor(props){
        super(props)
        this.state = {
            location: '',
            loading: true,
            textContent: {
                homeHeader: null,
                homeContent: null,
                applyHeader: null,
                applyContent: null,
                aboutHeader: null,
                aboutContent: null,
                whyHeader: null,
                whyContent: null, 
                pipelineHeader: null,
                pipelineContent: null,
                whoHeader: null,
                whoContent: null
            }
        }
        this.navigatePage = this.navigatePage.bind(this)
    }

    componentDidMount(){
        window.scrollTo(0, 0);
        const { tipeAuth, tipeId } = keys;

        this.setState({
            location: window.location.hash
        })

        axios({
            method: "get",
            url: 'https://api.tipe.io/api/v1/document/5b4630ca1045420013ea11f3',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': tipeAuth,
              'Tipe-Id': tipeId
            }
          })
          .then(response => {
            const { data } = response
              this.setState({
              textContent:{
                homeHeader: data.blocks[0].value,
                homeContent: data.blocks[1].value,
                applyHeader: data.blocks[2].value,
                applyContent: data.blocks[3].value,
                aboutHeader: data.blocks[4].value,
                aboutContent: data.blocks[5].value, 
                whyHeader: data.blocks[6].value,
                whyContent: data.blocks[7].value,
                pipelineHeader: data.blocks[8].value,
                pipelineContent: data.blocks[9].value,
                whoHeader: data.blocks[10].value,
                whoContent: data.blocks[11].value
              },
              loading: false
            })
          })
          .catch(console.error);
    }

    navigatePage(){
        setTimeout(function() {
                this.setState({
                    location: window.location.hash
                })
            }.bind(this),5); 
    }

    render(){
        const { homeHeader, homeContent, applyHeader, applyContent, aboutHeader, aboutContent,
            whyHeader, whyContent, pipelineHeader, pipelineContent, whoHeader, whoContent} = this.state.textContent

        let display = null

        const links = (
            <div className="links">
                <p>
                    <a href="#about" onClick={ this.navigatePage }><strong>About the Program</strong></a>
                </p>
                <p>
                    <a href="#capitol" onClick={ this.navigatePage }><strong>Why Work on Capitol Hill</strong></a>
                </p>
                <p>
                    <a href="#pipeline" onClick={ this.navigatePage }><strong>Why Apply for the Progressive Talent Pipeline</strong></a>
                </p>
                <p>
                    <a href="#who" onClick={ this.navigatePage }><strong>Who We Are Looking For</strong></a>
                </p>
                <p>
                    <a href="#apply" onClick={ this.navigatePage }><strong>Apply</strong></a>
                </p>
            </div>
        )

        switch(this.state.location) {
            case '#home':
                display = (
                    <div>
                        <div>
                            <Header headerText={ homeHeader }/>
                        </div>
                        <div className="page-content home">
                            <Page navigatePage={this.navigatePage} text={homeContent}/>
                        </div>
                        {links}
                    </div>
                    )
                break;
            case '#about':
            display = (
                <div>
                    <div>
                        <Header headerText={ aboutHeader }/>
                    </div>
                    <div className="page-content">
                        <Page navigatePage={this.navigatePage} text={aboutContent}/>
                    </div>
                </div>
                )
            break;
            case '#capitol':
            display = (
                <div>
                    <div>
                        <Header headerText={ whyHeader }/>
                    </div>
                    <div className="page-content">
                        <Page navigatePage={this.navigatePage} text={whyContent}/>
                    </div>
                </div>
                )
            break;
            case '#pipeline':
            display = (
                <div>
                    <div>
                        <Header headerText={ pipelineHeader }/>
                    </div>
                    <div className="page-content">
                        <Page navigatePage={this.navigatePage} text={pipelineContent}/>
                    </div>
                </div>
                )
            break;
            case '#who':
            display = (
                <div>
                    <div>
                        <Header headerText={ whoHeader }/>
                    </div>
                    <div className="page-content">
                        <Page navigatePage={this.navigatePage} text={whoContent}/>
                    </div>
                </div>
                )
            break;
            case '#apply':
                display = (
                    <div>
                         <div className="apply-header">
                            <Header headerText={ applyHeader }/>
                        </div>
                        <div className="page-content">
                            <Page navigatePage={this.navigatePage} text=''/>
                            <Form/>
                        </div>
                    </div>
                )
                break;
            default:
                display = (
                    <div>
                        <div>
                            <Header headerText={ homeHeader }/>
                        </div>
                        <div className="break"></div>
                        <div className="page-content">
                            <Page navigatePage={this.navigatePage} text={homeContent}/>
                        </div>
                        {links}
                    </div>
                    )
        }

        return (
            <div style={{display: this.state.loading ? 'none': 'block'}}>
                <header className="main-header">
                    <Navigation navigatePage={this.navigatePage}/>
                </header>
                {display}
            </div>
          );
    }
}

  
export default Content;