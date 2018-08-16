import React, { Component } from "react";

class Form extends Component  {
    constructor(props){
        super(props)
        this.state = {
            pageLoaded: false
        }
    }

    componentDidMount(){
        setTimeout(
            function() {
                this.setState({pageLoaded: true})
            }
            .bind(this),
            1500
        );  
    }
    
    render(){
        return(
            <div>
                <div className="loading" style={{display: this.state.pageLoaded ? 'none': 'block' }}>Loading Form ...</div> 
                <iframe style={{display: this.state.pageLoaded ? 'block': 'none'}} src="https://script.google.com/macros/s/AKfycbxj-3SLm569HNfuBotbdwCpBwFIrf5E4iD6JttCk7YWAVeQV58m/exec" frameBorder="0" scrolling="no"></iframe> 
                <div className="footer">
                    <p>For any questions please contact <a href="mailto:progressivepipelineproject@gmail.com">progressivepipelineproject@gmail.com</a></p>
                </div>
            </div> 
        )
    }
}

export default Form