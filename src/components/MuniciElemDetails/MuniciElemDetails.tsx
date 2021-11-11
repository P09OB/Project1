import React from "react";
import { MuniciElemObjt } from "../types/MuniciElemObj";
import { Redirect, useParams } from "react-router";
import DeparElemDetailsPlaceForm from "./MuniciElemDetailsPlaceForm";
import { PlaceElemObj } from "../types/PlaceElemObj";
import PlaceElem from "../PlaceElem/PlaceElem";
import Carousel from 'react-elastic-carousel'

import './MuniciElemDetails.css'

interface MuniciElemDetailsProps {
    list: MuniciElemObjt[];
    listPlace: PlaceElemObj[];
    onCreatePlace: (municiElemId: number, newPlaceElem: PlaceElemObj) => void
    onDelate: (deparId: number, placeId: number) => void


}


const MuniciElemDetails: React.FC<MuniciElemDetailsProps> = ({ list, listPlace, onCreatePlace, onDelate }) => {
    const { id: idString } = useParams<{ id: string }>();
    const id = parseFloat(idString);
    const bool = false;

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

    const handleDelate = (placeId: number) => {
        onDelate(idDepar, placeId);
    }

    return (
        <>
            <div className='Munici__component--big' style={{ backgroundImage: `url("${img}")` }} >
                <div className='Munici__component--box'>
                    <div className='Munici__component--info'>
                        <p className='Munici__component--title'>{title}</p>
                        <p className='Munici__component--des'>{description}</p>
                        <p>{weather}</p>
                    </div>
                    <Carousel isRTL={bool} itemsToShow={3}>


                        {elemPlace.map(elem => {

                            return <PlaceElem
                                id={elem.id}
                                img={elem.img}
                                name={elem.name}
                                coordinates={elem.coordinates}
                                score={elem.score}
                                description={elem.descriptionPlace}
                                format='card'
                                onDelate={handleDelate}
                                type='edit'
                            />
                        })}

                    </Carousel>

                </div>
            </div>



            <DeparElemDetailsPlaceForm
                id={id}
                idDepar={idDepar}
                onCreate={handleCreatePlaceElemObj}

            />








        </>

    );
}

export default MuniciElemDetails;

