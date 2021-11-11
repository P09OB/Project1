import React from "react";
import { Redirect, useParams } from "react-router-dom";
import { PlaceElemObj } from "../types/PlaceElemObj";

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

    const {name,coordinates,score,descriptionPlace} = elem


    return( <>
    <p>{name}</p>
    <p>{coordinates}</p>
    <p>{score}</p>
    <p>{descriptionPlace}</p>

    </>

    )
}

export default PlaceElemDetails;

