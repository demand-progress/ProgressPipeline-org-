import React, { Component } from "react"
import Markdown from 'react-markdown'


const Page = (props) =>  {
   
    return ( 
        <div>
            <Markdown source= {props.text} />
        </div>
    );
  };

export default Page;