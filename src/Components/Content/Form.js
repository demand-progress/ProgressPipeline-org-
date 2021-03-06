import React, { Component } from "react";
import ReactDOM from "react-dom";

class Form extends Component  {
    constructor(props){
        super(props);
        this.state = {
            pageLoaded: false,
            pageRedirect: false
        };

        this.pageRedirect = this.pageRedirect.bind(this);
    }

    componentDidMount(){
        const iframeRef = this.refs.iframe;
        setTimeout(
            function() {
                this.setState({pageLoaded: true}, () => {
                    
                    if(!iframeRef){
                        console.log(iframeRef)
                      this.pageRedirect();
                    }
                });
            }
            .bind(this),
            1500
        );
    }

    pageRedirect(){
        this.setState({
            pageRedirect: true
        })
    }
    
    render(){
        return(
            <div>
                <div className="loading" style={{display: this.state.pageLoaded ? 'none': 'block' }}>Loading Form ...</div> 
                <div className="loading" style={{display: this.state.pageRedirect ? 'block': 'none' }}><p>Error loading apply form</p><p>please contact us or if you have a gmail account <a href="https://docs.google.com/forms/d/e/1FAIpQLSeN7aNCx-KxqE1CwEgFnbGM7yQUXf-aPEEoSTPY7wMCSvSpXw/viewform" target="_blank">apply here</a> </p><p>Thanks!</p></div>
                <iframe ref="iframe" style={{display: this.state.pageLoaded ? 'block': 'none'}}  src="https://script.google.com/macros/s/AKfycbxj-3SLm569HNfuBotbdwCpBwFIrf5E4iD6JttCk7YWAVeQV58m/exec" frameBorder="0" scrolling="no"></iframe>
            </div> 
        );
    }
}

export default Form;