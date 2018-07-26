import React, { Component } from "react";

class Form extends Component  {
    constructor(props){
        super(props)

        this.clicked = this.clicked.bind(this)
    }

    clicked = () => {
        console.log('here')
    }

    render(){
        return(
            <div>  
                <iframe src="https://script.google.com/macros/s/AKfycbyBk0pVaexA-mycr5xX1zZM4P7cVu-FblAfhEc_KwMNqkOVWA/exec" width="100%" height="1000px" frameBorder="0" scrolling="no"></iframe>  
                <div className="footer">
                    <p>For any questions please contact <a href="mailto:progressivepipelineproject@gmail.com">progressivepipelineproject@gmail.com</a></p>
                </div>
            </div> 
        )
    }
}

export default Form