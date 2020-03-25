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
        let display

        switch(currentKey) {
            case 'about':
                display = <About />
                break;
            case 'process':
                display = <Process />
                break;
            case 'why':
                display = <Why/>
                break;
            default:
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
                <ApplyBanner />
            </div>
          )
    }
}

  
export default Content2;