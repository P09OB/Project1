import React from "react";
export interface PlaceElemProps {
    id: number;
    name: string;
    coordinates: string;
    score: number;
    description: string

}

const PlaceElem: React.FC<PlaceElemProps> = ({ id,name, description}) => {

    return(
        <div>Name</div>

    );


}

export default PlaceElem
