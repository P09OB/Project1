import { Button } from "@mui/material";
import React from "react";
import { useHistory } from "react-router-dom";
export interface PlaceElemProps {
    id: number;
    name: string;
    coordinates: string;
    score: number;
    description: string


}

const PlaceElem: React.FC<PlaceElemProps> = ({ id,name,coordinates,score, description}) => {
    const history = useHistory();

    const handleView: React.MouseEventHandler<HTMLButtonElement> = () => {
        history.push(`/place/${id}`);
        
    }


    return(
        <div >
            <h2>{name}</h2>
            <p>{coordinates}</p> 
            <Button onClick={handleView} variant="contained">Ir</Button>
            
        </div>

    );


}

export default PlaceElem
