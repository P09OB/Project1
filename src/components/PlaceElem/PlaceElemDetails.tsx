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

         <div className='Munici__component--bigEdit'>
            <p className='Place__component--bigEdit'>{name}</p>
                     <div className='Place__component--boxPlace'>
            <img src={location}></img>
            <a className='Place__component--location' href={coordinates}>  {name}, Colombia</a>
            </div>
            </div>
        </div>
    </div>

    <section className='Place__component-info'>
    <img className='Place__component--imagen' src={img}></img>
    <p className='Place__component--text'>{descriptionPlace}</p>
    </section>

    




    </>

    )
}

export default PlaceElemDetails;

