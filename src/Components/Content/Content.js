import React, { Component } from "react"
import Headers from "./Headers.js"
import Navigation from "../Navigation/Navigation.js"
import "./content.css"
import Home from "./Home.js"
import Apply from "./Apply.js"

class Content extends Component {
    constructor(props){
        super(props)
        this.state = {
            location: ''
        }
        this.navigatePage = this.navigatePage.bind(this)
    }

    componentDidMount(){
        this.setState({
            location: window.location.hash
        })
    }

    navigatePage(){
        setTimeout(function() {
                this.setState({
                    location: window.location.hash
                })
            }.bind(this),5); 
    }

    render(){
        let display = null
        switch(this.state.location) {
            case '#home':
                display = (
                    <Home navigatePage={this.navigatePage}/>
                    )
                break;
            case '#apply':
                display = (
                    <Apply />
                )
                break;
            default:
                display = (
                    <Home navigatePage={this.navigatePage}/>
                    )
        }

        return (
            <div>
                 <header className="main-header">
                <Navigation navigatePage={this.navigatePage}/>
                </header>
                <div>
                    <Headers headerText="Progressive Talent Pipeline"/>
                </div>
                <div className="break"></div>
                {display}
            </div>
          );
    }
}

  
export default Content;