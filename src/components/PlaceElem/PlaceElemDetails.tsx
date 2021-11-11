import React from "react";
import { Redirect, useParams } from "react-router-dom";
import { PlaceElemObj } from "../types/PlaceElemObj";
import location from '../../img/location.svg'


interface PlaceElemDetailsProps {
    listPlace : PlaceElemObj[];

}

const PlaceElemDetails: React.FC<PlaceElemDetailsProps> = ({listPlace}) => {
    const { id: idString } = useParams<{ id: string }>();
    const id = parseFloat(idString);

    const elem = listPlace.find((elem) => {
        return elem.id === id;
    });

    if (!elem) {
        return <Redirect to="/404" />
    }

    const {name,coordinates,score,descriptionPlace,img} = elem


    return( <>
    <div className='Munici__component--big' style={{ backgroundImage: `url("${img}")` }}>

    <div className='Munici__component--big'>
    <div className='Munici__component--bigEdit'
   ><p>{name}</p>
    <img src={location}></img>
        <a href={coordinates}>Cali, Colombia</a>
</div>
    </div></div>

    
    
    <p>{score}</p>
    <p>{descriptionPlace}</p>

    </>

    )
}

export default PlaceElemDetails;

