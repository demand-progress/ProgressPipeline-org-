import React, { Component } from "react"
import Header from "./Header.js"
import Navigation from "../Navigation/Navigation.js"
import "./content.css"
import Page from "./Page.js"
import keys from '../../config/keys.js'
import axios from 'axios'

class Content extends Component {
    constructor(props){
        super(props)
        this.state = {
            location: '',
            loading: true,
            textContent: {
                homeHeader: null,
                homeContent: null,
                applyHeader: null,
                applyContent: null
            }
        }
        this.navigatePage = this.navigatePage.bind(this)
    }

    componentDidMount(){
        const { tipeAuth, tipeId } = keys;

        this.setState({
            location: window.location.hash
        })

        axios({
            method: "get",
            url: 'https://api.tipe.io/api/v1/document/5b4630ca1045420013ea11f3',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': tipeAuth,
              'Tipe-Id': tipeId
            }
          })
          .then(response => {
            const { data } = response
            console.log(data)
              this.setState({
              textContent:{
                homeHeader: data.blocks[0].value,
                homeContent: data.blocks[1].value,
                applyHeader: data.blocks[2].value,
                applyContent: data.blocks[3].value
              },
              loading: false
            })
          })
          .catch(console.error);
    }

    navigatePage(){
        setTimeout(function() {
                this.setState({
                    location: window.location.hash
                })
            }.bind(this),5); 
    }

    render(){
        const { homeHeader, homeContent, applyHeader, applyContent } = this.state.textContent

        let display = null

        const links = (
            <div className="links">
                <p>
                    <a href="#about" onClick={ this.navigatePage }><strong>About the Program</strong></a>
                </p>
                <p>
                    <a href="#capitol" onClick={ this.navigatePage }><strong>Why Work on Capitol Hill</strong></a>
                </p>
                <p>
                    <a href="#pipeline" onClick={ this.navigatePage }><strong>Why Apply for the Progressive Talent Pipeline</strong></a>
                </p>
                <p>
                    <a href="#who" onClick={ this.navigatePage }><strong>Who We Are Looking For</strong></a>
                </p>
                <p>
                    <a href="#apply" onClick={ this.navigatePage }><strong>Apply</strong></a>
                </p>
            </div>
        )

        switch(this.state.location) {
            case '#home':
                display = (
                    <div>
                        <div>
                            <Header headerText={ homeHeader }/>
                        </div>
                        <div className="break"></div>
                        <Page navigatePage={this.navigatePage} text={homeContent}/>
                        {links}
                    </div>
                    )
                break;
            case '#apply':
                display = (
                    <div>
                         <div>
                            <Header headerText={ applyHeader }/>
                        </div>
                        <Page navigatePage={this.navigatePage} text={applyContent}/>
                        <div>
                            <p>
                                <a href="https://docs.google.com/forms/d/e/1FAIpQLSdFliu2CAVouMrOf0fTuzlJSnwyG5jfU7ceBdLguWabFDdXdQ/viewform?oldembedui=true">Open link to Apply</a>
                            </p>
                        </div>
                    </div>
                )
                break;
            default:
                display = (
                    <div>
                        <div>
                            <Header headerText={ homeHeader }/>
                        </div>
                        <div className="break"></div>
                        <Page navigatePage={this.navigatePage} text={homeContent}/>
                        {links}
                    </div>
                    )
        }

        return (
            <div style={{display: this.state.loading ? 'none': 'block'}}>
                <header className="main-header">
                    <Navigation navigatePage={this.navigatePage}/>
                </header>
                {display}
            </div>
          );
    }
}

  
export default Content;