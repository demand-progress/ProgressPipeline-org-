import React, { Component } from "react";

class Form extends Component  {
    constructor(props){
        super(props)
    }

    render(){
        return(
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
                    <button><a href="#" target="_blank">Fill Out Form</a></button>
                </div>
              
            </div>
        )
    }
}

export default Form