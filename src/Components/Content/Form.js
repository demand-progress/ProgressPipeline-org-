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
            // <div>  
            //     <iframe src="https://script.google.com/macros/s/AKfycbzg2Zd7en3CsEqqvDMwp8WrbvCR7SrkZawg2ccWtg/exec" width="100%" height="1000px" frameBorder="0" scrolling="no"></iframe>  
            //     <div className="footer">
            //         <p>For any questions please contact <a href="mailto:progressivepipelineproject@gmail.com">progressivepipelineproject@gmail.com</a></p>
            //     </div>
            // </div> 
            <div>
            <div>
                <p>To apply for the program, please upload two documents, following the
                instructions below. Applications must be submitted by September 18,
                2018.</p>
                <div className="apply-one">
                    <p> 1. Your CV or Resume </p>
                    <p>2. A document with your answers to the following two questions:</p>
                    <div className="apply-two">
                        <p>a. Why do you want to work in Congress? (Up to 300 Words)</p>
                        <p>b. If you could wave a magic wand and pass three laws at the
                        federal level, what would they be and why would you choose each of
                        them? (Up to 500 Words)</p>
                    </div>
                    <a id="button" href="https://docs.google.com/forms/d/e/1FAIpQLSexEYcWb2Ria_J97skTMXF4a4w18Ue7XJIoIuWZssHmAyP1ZA/viewform" target="_blank">Fill Out Form</a>
                </div> 
            </div>
            <div className="footer">
                <p>For any questions please contact <a href="mailto:progressivepipelineproject@gmail.com">progressivepipelineproject@gmail.com</a></p>
            </div>
      </div>

        )
    }
}

export default Form