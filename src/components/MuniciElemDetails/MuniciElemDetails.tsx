import React from "react";
import { DeparElemObj } from "../types/DeparElemObj";
import { MuniciElemObjt } from "../types/MuniciElemObj";
import { Redirect, useParams } from "react-router";
import DeparElemDetailsPlaceForm from "./MuniciElemDetailsPlaceForm";
import { PlaceElemObj } from "../types/PlaceElemObj";
import { idText } from "typescript";
import PlaceElemDetails from "../PlaceElem/PlaceElemDetails";
import PlaceElem from "../PlaceElem/PlaceElem";


interface MuniciElemDetailsProps {
    list: MuniciElemObjt[];
    listPlace: PlaceElemObj[];
    onCreatePlace: (municiElemId: number, newPlaceElem: PlaceElemObj) => void


}


const MuniciElemDetails: React.FC<MuniciElemDetailsProps> = ({ list, listPlace, onCreatePlace }) => {
    const { id: idString } = useParams<{ id: string }>();
    const id = parseFloat(idString);

    const elem = list.find((elem) => {
        return elem.id === id;
    });
    if (!elem) {
        return <Redirect to="/404" />
    }

    const { idDepar, title, weather, description, img } = elem;

    const elemPlace = listPlace.filter((e) => {
        return e.idMunici === id;
    });

    const handleCreatePlaceElemObj = (newPlaceElem: PlaceElemObj) => {
        onCreatePlace(idDepar, newPlaceElem);
    }

    return (
        <>
            <img src={img}></img>
            <p>{title}</p>
            <p>{description}</p>
            <p>{weather}</p>

            {elemPlace.map(elem => {

               return <PlaceElem 
                    id={elem.id} 
                    name={elem.name} 
                    coordinates={elem.coordinates} 
                    score={elem.score} 
                    description={elem.descriptionPlace} />
            })}

            <DeparElemDetailsPlaceForm
                id={id}
                idDepar={idDepar}
                onCreate={handleCreatePlaceElemObj}

            />








        </>

    );
}

export default MuniciElemDetails;

