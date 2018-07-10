import React, { Component } from "react";
import Dropdown from "../Dropdown/Dropdown.js";
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap'
// import "../../../css/materialize.css";
// import "../../../materialize_js/materialize.js";
import "./Navigation.css"

class Navigation extends Component  {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <div>
                <Navbar collapseOnSelect>
                    <Navbar.Header>
                        <Navbar.Brand>
                        <a href="#brand">Progressive Talent Pipeline</a>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav> 
                        </Nav>
                        <Nav pullRight>
                        <NavItem eventKey={1} href="#home">
                            Home
                        </NavItem>
                        <NavItem eventKey={2} href="#about">
                            About the Program
                        </NavItem>
                        <NavItem eventKey={3} href="#capitol">
                            Why Work on Capitol Hill
                        </NavItem>
                        <NavItem eventKey={4} href="#pipeline">
                            Why Apply for the Pipeline?
                        </NavItem>
                        <NavDropdown eventKey={5} title="Dropdown" id="basic-nav-dropdown">
                            <MenuItem eventKey={5.1} href="#who">Who we are looking for</MenuItem>
                            <MenuItem eventKey={5.2} href="#apply">Apply</MenuItem>
                        </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>    
            </div>
        )
    }
}

export default Navigation;