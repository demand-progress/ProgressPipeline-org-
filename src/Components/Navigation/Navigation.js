import React, { Component } from "react";
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap'
import "./Navigation.css"

class Navigation extends Component  {
    constructor(props){
        super(props)
    }

    render() {
        const { navigatePage } = this.props

        return (
            <div id="navHeader">
                <Navbar fixedTop collapseOnSelect >
                    <Navbar.Header>
                        <Navbar.Brand >
                        <a href="#home" onClick={ navigatePage }>Progressive Talent Pipeline</a>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav> 
                        </Nav>
                        <Nav pullRight onSelect={navigatePage}>
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
                        <NavDropdown eventKey={5} title="More" id="basic-nav-dropdown">
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