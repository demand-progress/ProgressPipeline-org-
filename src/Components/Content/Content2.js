import React, { Component } from "react";
import classNames from 'classnames'
import Header from "./Header.js";
import Navigation from "../Navigation/Navigation.js";
import "./content.scss";
import Page from "./Page.js";
import Form from "./Form.js";
import ApplyBanner from './ApplyBanner'
import About from './About'
import Process from './Process'
import Home from './Home'
import Jobs from './Jobs'
import Why from './Why'
import Footer from "./Footer.js";
import axios from 'axios';

class Content2 extends Component {
    constructor(props){
        super(props);
        this.state = {
            currentKey: window.location.hash.replace('#', ''),
        }
        this.navigatePage = this.navigatePage.bind(this)
    }

    navigatePage(selectedKey){
        this.setState({
            currentKey: selectedKey
        });
    }

    render(){
        const { currentKey}  = this.state
        let display, banner

        switch(currentKey) {
            case 'about':
                display = <About />
                banner = <span>Do you want to make sure the voice of your community is heard?</span>
                break;
            case 'process':
                display = <Process />
                banner = <span>Do you want to help form or carry out progressive policy?</span>
                break;
            case 'why':
                display = <Why/>
                banner = <span>Do you want to make sure the voice of your community is heard?</span>
                break;
            case 'jobs':
                display = <Jobs/>
                banner = <span>Excited to work in roles like these?</span>
                break;
            default:
                banner = <span>Are you ready to contribute your ideas?</span>
                display = <Home />
        }

        return (
            <div className={classNames("content-2", currentKey + '-page')}>
                <header className="main-header">
                    <Navigation navigatePage={this.navigatePage}/>
                </header>
                <div className="page">
                    {display}
                </div>
                <ApplyBanner>{banner}</ApplyBanner>
            </div>
          )
    }
}

  
export default Content2;