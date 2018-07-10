import React, { Component } from "react";
import "../../../css/materialize.css";

class Navigation extends Component  {
    constructor(props){
        super(props)
    }

    render() {

        return (
            <div>
                <nav class="white" role="navigation">
                    <div className="nav-wrapper container">
                    <a id="logo-container" href="#home" className="brand-logo">Progressive Talent Pipeline</a>
                        <ul className="right hide-on-med-and-down">
                            <li><a href="#home">Home</a></li>
                            <li><a href="#about">About the Program</a></li>
                            <li><a href="#work">Why Work on Capitol Hill</a></li>
                            <li><a href="#apply">Why Apply for the Pipeline?</a></li>
                            <li><a className="dropdown-trigger" href="#!" data-target="dropdown1">More<i className="material-icons right">arrow_drop_down</i></a></li>
                            <li><a href="sass.html"><i className="material-icons left">search</i></a></li> 
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}


export default Navigation;