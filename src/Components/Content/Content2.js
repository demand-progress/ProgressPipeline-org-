import React, { Component } from "react";
import Header from "./Header.js";
import Navigation from "../Navigation/Navigation.js";
import "./content.scss";
import Page from "./Page.js";
import Form from "./Form.js";
import ApplyBanner from './ApplyBanner'
import About from './About'
import Home from './Home'
import Footer from "./Footer.js";
import axios from 'axios';

class Content2 extends Component {
    constructor(props){
        super(props);
        this.state = {
            loading: true,
            currentKey: window.location.hash.replace('#', ''),
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

        getData()

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
        this.setState({
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

      


        switch(currentKey) {
            case 'about':
                display = <About />
                break;
            case 'process':
                display = (
                    <div>
                        <Header headerText={whyApplyHeader} key={currentKey}/>
                        <Page navigatePage={this.navigatePage} text={whyApplyContent} cName={"page-content"}/>
                    </div>
                    );
                break;
            case 'why':
                display = (
                    <div>
                        <Header headerText={whoWeReLookingForHeader} key={currentKey}/>
                        <Page navigatePage={this.navigatePage} text={whoWeReLookingForContent} cName={"page-content"}/>
                    </div>
                    );
                break;
            default:
                display = <Home />
        }

        return (
            <div style={{display: this.state.loading ? 'none': 'block'}}>
                <header className="main-header">
                    <Navigation navigatePage={this.navigatePage}/>
                </header>
                {display}
                <ApplyBanner />
            </div>
          );
    }
}

  
export default Content2;