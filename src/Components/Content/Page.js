import React from "react"
import Markdown from 'react-markdown'


const Page = (props) =>  {
    return ( 
        <div className={props.cName}>
            <Markdown source= {props.text} />
        </div>
    );
  };

export default Page;