import React from "react";
import {useHistory } from 'react-router-dom';

export interface MuniciElemProps {
    id: number;
    title:string;
    weather: string;
    description: string;

}



const MuniciElem: React.FC<MuniciElemProps> = ({ id,title, description}) => {
    const history = useHistory();

    const handleView: React.MouseEventHandler<HTMLButtonElement> = () => {
        console.log(id);
        history.push(`/municipio/${id}`);
    }

    return (
        <div>
            <h1>{title}</h1>
            <button onClick={handleView} >IR A</button>

        </div>
    );

}

export default MuniciElem
