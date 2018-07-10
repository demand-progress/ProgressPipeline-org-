import React, { Component } from "react"
import Headers from "./Headers.js"
import "./content.css";
import Navigation from "../Navigation/Navigation.js"

class Content extends Component {
    constructor(props){
        super(props)
     
    }

    componentDidMount(){

    }

    render(){
        return (
            <div>
                <header className="main-header">
                    <Navigation />
                </header>
                <div>
                    <Headers headerText="Progressive Talent Pipeline"/>
                </div>
            </div>
          );
    }
}

  
export default Content;