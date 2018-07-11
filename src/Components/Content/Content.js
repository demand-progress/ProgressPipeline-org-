import React, { Component } from "react"
import Headers from "./Headers.js"
import Navigation from "../Navigation/Navigation.js"
import "./content.css"
import Home from "./Home.js"
import Apply from "./Apply.js"
import keys from '../../config/keys.js'
import axios from 'axios'

class Content extends Component {
    constructor(props){
        super(props)
        this.state = {
            location: ''
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
            url: 'https://api.tipe.io/api/v1/document/5af33e3968f0a10013429fdc',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': tipeAuth,
              'Tipe-Id': tipeId
            }
          })
          .then(response => {
            const { data } = response
            console.log(data)
            // this.setState({
            //   textContent:{
            //     header: data.blocks[0].value,
            //     subHeader: data.blocks[1].value,
            //     congressLanguage: data.blocks[2].value,
            //     main: data.blocks[3].value,
            //     disclaimer: data.blocks[4].value,
            //     formButton: data.blocks[5].value,
            //     modalHeader: data.blocks[6].value,
            //     modalText: data.blocks[7].value,
            //     tweet: data.blocks[8].value
            //   },
            //   loading: false
            // })
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