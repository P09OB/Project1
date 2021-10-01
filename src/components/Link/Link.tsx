import React from "react";
import './Link.css'

interface LinkProps {
    text:string;
    active?:boolean;
    url:string;
}

export const Link: React.FC<LinkProps> =(props)=>{
    
  
    return <a className="link" href={props.url}>
      {props.text}
    </a>;
  }