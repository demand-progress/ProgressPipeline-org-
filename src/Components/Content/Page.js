import React, { Component } from "react"
import Markdown from 'react-markdown'


class Page extends Component {
    constructor(props){
        super(props)
    }
   
    render(){
        const { navigatePage, text } = this.props
    return ( 
        <div>
            <Markdown source= {text} />
        <div>

        </div>
    </div>
        );
    };
  };

export default Page;