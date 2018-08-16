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
            currentKey: null,
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
                whoContent: null,
                headerText: null
            }
        }
        this.navigatePage = this.navigatePage.bind(this)
    }

    componentDidMount(){
        window.scrollTo(0, 0);
        const { tipeAuth, tipeId } = keys;

        const getData = () => axios({
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

        this.setState({
            location: window.location.hash
        }, () =>  getData())
    }

    navigatePage(selectedKey){
        const location = {
            '1': '#apply',
            '2': '#about',
            '3': '#capitol',
            '4': '#pipeline',
            '5': '#who',
            '6': '#home'
        }
        
        this.setState({
            location: location[selectedKey],
            currentKey: selectedKey
        })
    }

    render(){
        const { headerText, homeHeader, homeContent, applyHeader, aboutHeader, aboutContent,
            whyHeader, whyContent, pipelineHeader, pipelineContent, whoHeader, whoContent} = this.state.textContent
        const {currentKey} = this.state;
        let display = null

      

        const links = (
            <div className="links">
                <p>
                    <a href="#about" onClick={ () => this.navigatePage(2) }><strong>{aboutHeader}</strong></a>
                </p>
                <p>
                    <a href="#capitol" onClick={ () => this.navigatePage(3) }><strong>{whyHeader}</strong></a>
                </p>
                <p>
                    <a href="#pipeline" onClick={ () => this.navigatePage(4)}><strong>Why Apply for the Progressive Talent Pipeline</strong></a>
                </p>
                <p>
                    <a href="#who" onClick={ () => this.navigatePage(5) }><strong>{whoHeader}</strong></a>
                </p>
                <p>
                    <a href="#apply" onClick={ () => this.navigatePage(1) }><strong>{applyHeader}</strong></a>
                </p>
            </div>
        )

        switch(this.state.location) {
            case '#home':
                display = (
                    <div>
                        <Header headerText={homeHeader} key={currentKey}/>
                        <Page navigatePage={this.navigatePage} text={homeContent} cName={"page-content home"}/>
                        {links}
                    </div>
                    )
                break;
            case '#about':
                display = (
                    <div>
                        <Header headerText={aboutHeader} key={currentKey}/>
                        <Page navigatePage={this.navigatePage} text={aboutContent} cName={"page-content about"}/>
                    </div>
                    )
                break;
            case '#capitol':
                display = (
                    <div>
                        <Header headerText={whyHeader} key={currentKey}/>
                        <Page navigatePage={this.navigatePage} text={whyContent} cName={"page-content"}/>
                    </div>
                    )
                break;
            case '#pipeline':
                display = (
                    <div>
                        <Header headerText={pipelineHeader} key={currentKey}/>
                        <Page navigatePage={this.navigatePage} text={pipelineContent} cName={"page-content"}/>
                    </div>
                    )
                break;
            case '#who':
                display = (
                    <div>
                        <Header headerText={whoHeader} key={currentKey}/>
                        <Page navigatePage={this.navigatePage} text={whoContent} cName={"page-content"}/>
                    </div>
                    )
                break;
            case '#apply':
                display = (
                    <div>
                        <Header headerText={applyHeader} addClass='apply' key={currentKey}/>
                        <Page navigatePage={this.navigatePage} cName={"page-content"}/>
                        <Form/>
                    </div>
                )
                break;
            default:
                display = (
                    <div>
                        <Header headerText={homeHeader} key={currentKey}/>
                        <Page navigatePage={this.navigatePage} text={homeContent} cName={"page-content"}/>
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