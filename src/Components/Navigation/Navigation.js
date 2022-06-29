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
                            <a href="#home" onClick={() => navigatePage('home') }></a>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav> 
                        </Nav>
                        <Nav pullRight onSelect={navigatePage}>
                            <NavItem eventKey={'process'} href="#process">
                                The Process
                            </NavItem>
                            <NavItem eventKey={'why'} href="#why">
                                Why?
                            </NavItem>
                            {/* <NavItem eventKey={'jobs'} href="#jobs">
                                Jobs
                            </NavItem> */}
                            <NavItem eventKey={'about'} href="#about">
                                About
                            </NavItem>
                            <NavItem eventKey={'faq'} href="#faq">
                                FAQ 
                            </NavItem>
                            <NavItem className="button" href="https://progressivetalentpipeline.applytojob.com/apply" target="_blank">
                                Apply Now
                            </NavItem>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>    
            </div>
        )
    }
}

export default Navigation;