import React from "react";
import './Department.css'

export interface DeparElemProps {
    img: string;
    title: string;
    description: string;
  }

  const DeparElem: React.FC<DeparElemProps> = ({img,title,description}) =>{


    return(
        <div>
            <h2>{title}</h2>
            <img src={img}></img>
            <p>{description}</p>

        </div>
    )
  }

  export default DeparElem