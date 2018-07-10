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
                <div>
                    <p>
                    A “blue wave” this November could bring transformative change to Washington. But, to realize the potential, it’s not only necessary to win elections. It’s also necessary to plan for what happens after a Democratic takeover in one or both houses on Capitol Hill.
                    </p>
                    <p>
                    A “blue wave” this November could bring transformative change to Washington. But, to realize the potential, it’s not only necessary to win elections. It’s also necessary to plan for what happens after a Democratic takeover in one or both houses on Capitol Hill.
                    </p>

                </div>
            </div>
          );
    }
}

  
export default Content;