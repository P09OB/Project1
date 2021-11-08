import React from "react";
import {useHistory } from 'react-router-dom';
import './MuniciElem.css'

export interface MuniciElemProps {
    id: number;
    idDepar: number;
    title:string;
    weather: string;
    description: string;
    img: string;

}

const MuniciElem: React.FC<MuniciElemProps> = ({ id,idDepar,title, description,img}) => {
    const history = useHistory();

    const handleView: React.MouseEventHandler<HTMLButtonElement> = () => {
        history.push(`/municipio/${id}`);
        
    }

    return (
        <>
        <div className = 'Munici__component' style={{ backgroundImage: `url("${img}")`}}>
            <div className = 'Munici__place'>
                <h1 className = 'Munici--title'>{title}</h1>
                 <p className = 'Munici--desc'>{description}</p>
                <button className = 'Munici--button' onClick={handleView}>IR A</button>
            </div>

        </div>

    
</>
    );

}

export default MuniciElem
