import React, { Component } from "react";
import { Navbar, Nav, NavItem } from 'react-bootstrap'

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
                        <a href="#home" onClick={() => navigatePage(6) }>Progressive Talent Pipeline</a>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav> 
                        </Nav>
                        <Nav pullRight onSelect={navigatePage}>
                        <NavItem eventKey={1} href="#apply">
                            Apply
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
                        <NavItem eventKey={5} href="#who">
                            Who we are looking for
                        </NavItem>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>    
            </div>
        )
    }
}

export default Navigation;