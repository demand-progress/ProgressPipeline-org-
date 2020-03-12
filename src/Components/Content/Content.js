import React, { Component } from "react";
import Header from "./Header.js";
import Navigation from "../Navigation/Navigation.js";
import "./content.css";
import Page from "./Page.js";
import Form from "./Form.js";
import Footer from "./Footer.js";
import axios from 'axios';

class Content extends Component {
    constructor(props){
        super(props);
        this.state = {
            location: '',
            loading: true,
            currentKey: null,
            textContent: {
                aboutHeader: null,
                aboutMainContent: null,
                applyHeader: null,
                home: null,
                homeHeader: null,
                homeMainContent: null,
                whoWeReLookingForHeader: null,
                whoWeReLookingForContent: null,
                whyApplyHeader: null,
                whyApplyContent: null,
                whyWorkMainContent: null, 
            }
        };
        this.navigatePage = this.navigatePage.bind(this);
    }

    componentDidMount(){
        window.scrollTo(0, 0);

        const getData = () => axios({
            method: "get",
            url: '/public/content.json',
            headers: {
              'Content-Type': 'application/json',
            }
          })
          .then(response => {
            const { data } = response;
            
            const textData = {};

            data['blocks'].forEach((textObject) => {
                const {apiId, value} = textObject;
                textData[apiId] = value; 
            })
            
              this.setState({
              textContent:textData,
              loading: false
            });
          })
          .catch(console.error);

        this.setState({
            location: window.location.hash
        }, () =>  getData());

        const ids = [346, 352, 350, 348]
        axios({
            method: 'get',
            url: '//api.demandprogressaction.org/wp-json/wp/v2/pages/346',
            headers: {
              'Content-Type': 'application/json',
            }
        })
        .then(res => {
            console.log(res);
        })
    }

    navigatePage(selectedKey){
        const location = {
            '1': '#apply',
            '2': '#about',
            '3': '#capitol',
            '4': '#pipeline',
            '5': '#who',
            '6': '#home'
        };
        
        this.setState({
            location: location[selectedKey],
            currentKey: selectedKey
        });
    }

    render(){
        const { aboutHeader,
                aboutMainContent,
                applyHeader,
                home,
                homeHeader,
                homeMainContent,
                whoWeReLookingForHeader,
                whoWeReLookingForContent,
                whyApplyHeader,
                whyApplyContent,
                whyWorkMainContent, 
                } = this.state.textContent;

                

        const {currentKey} = this.state;
        let display = null;

        const pageFooter = (<Footer footerText="This site is under construction. Check back soon for application information for the 2020 Progressive Talent Pipeline Cohort." footerAnchorLink="http://www.progressivecongress.org/" footerLinkText="" target="_blank"/>)
      

        switch(this.state.location) {
            case '#home':
                display = (
                    <div>
                        <Header headerText={homeHeader} key={currentKey}/>
                        <Page navigatePage={this.navigatePage} text={homeMainContent} cName={"page-content home"}/>
                        {pageFooter}
                    </div>
                    );
                break;
            case '#about':
                display = (
                    <div>
                        <Header headerText={aboutHeader} key={currentKey}/>
                        <Page navigatePage={this.navigatePage} text={aboutMainContent} cName={"page-content about"}/>
                        {pageFooter}
                    </div>
                    );
                break;
            case '#capitol':
                display = (
                    <div>
                        <Header headerText={home} key={currentKey}/>
                        <Page navigatePage={this.navigatePage} text={whyWorkMainContent} cName={"page-content"}/>
                        {pageFooter}
                    </div>
                    );
                break;
            case '#pipeline':
                display = (
                    <div>
                        <Header headerText={whyApplyHeader} key={currentKey}/>
                        <Page navigatePage={this.navigatePage} text={whyApplyContent} cName={"page-content"}/>
                        {pageFooter}
                    </div>
                    );
                break;
            case '#who':
                display = (
                    <div>
                        <Header headerText={whoWeReLookingForHeader} key={currentKey}/>
                        <Page navigatePage={this.navigatePage} text={whoWeReLookingForContent} cName={"page-content"}/>
                        {pageFooter}
                    </div>
                    );
                break;
            case '#apply':
                display = (
                    <div>
                        <Header headerText={applyHeader} addClass='apply' key={currentKey}/>
                        <Form/>
                        <Footer footerText="For any questions please contact" footerAnchorLink="mailto:progressivepipelineproject@gmail.com" footerLinkText=" progressivepipelineproject@gmail.com" target="_self"/>
                    </div>
                );
                break;
            default:
                display = (
                    <div>
                        <Header headerText={homeHeader} key={currentKey}/>
                        <Page navigatePage={this.navigatePage} text={homeMainContent} cName={"page-content home"}/>
                        {pageFooter}
                    </div>
                    );
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