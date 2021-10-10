import React from "react";
import { NavLink } from "react-router-dom";
import './Link.css'

interface LinkProps {
    text:string;
    url:string;
}

export const Link: React.FC<LinkProps> =(props)=>{
    return <NavLink className={"link"} activeClassName="link--active" to={props.url}>
      {props.text}
    </NavLink>;
  }