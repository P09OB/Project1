import React from "react";
import { MuniciElemObjt } from "../types/MuniciElemObj";
import { Redirect, useParams } from "react-router";
import DeparElemDetailsPlaceForm from "./MuniciElemDetailsPlaceForm";
import { PlaceElemObj } from "../types/PlaceElemObj";
import PlaceElem from "../PlaceElem/PlaceElem";
import Carousel from 'react-elastic-carousel'
import cloudy from '../../img/cloudy.svg'
import location from '../../img/location.svg'



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

    const handleEdit = ()=>{

    }

    return (
        <>
            <div className='Munici__component--big' style={{ backgroundImage: `url("${img}")` }} >
                <div className='Munici__component--big'>
                <div className='Munici__component--box'>
                    <div className='Munici__component--info'>
                        <p className='Munici__component--title'>{title}</p>
                        <p className='Munici__component--des'>{description}</p>
                        <div className='Munici__component--status'>
                        <img src={cloudy}></img>
                        <p className='Munici__component--text'>{weather} C°</p>
                        </div>
                        <div className='Munici__component--status'>
                        <img src={location}></img>
                        <p className='Munici__component--text' >{title}, Colombia</p>
                        </div>
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
                                onEdit = {handleEdit}
                                type='edit'
                            />
                        })}

                    </Carousel>

                </div>
                </div>
            </div>



            <DeparElemDetailsPlaceForm
                id={id}
                idDepar={idDepar}
                onCreate={handleCreatePlaceElemObj}
                onEdit={function (id: number, editMuniciElem: PlaceElemObj): void {
                    throw new Error("Function not implemented.");
                } } 
                type={"create"}            />








        </>

    );
}

export default MuniciElemDetails;

