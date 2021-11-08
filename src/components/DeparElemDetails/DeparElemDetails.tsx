import * as React from "react";
import { Redirect, useParams } from "react-router";
import DeparElem from "../Department/Department";
import MuniciElem from "../MuniciElem/MuniciElem";
import { DeparElemObj } from "../types/DeparElemObj";
import { MuniciElemObjt } from "../types/MuniciElemObj";
import DeparElemDetailsMuniciForm from "./DeparElemDetailsMuniciForm";
import Carousel from 'react-elastic-carousel'
import "./DeparElemDetails.css"

interface DeparElemDetailsProps {
    list: DeparElemObj[];
    onCreateMunicipi: (deparElemId: number, newMuniciElem: MuniciElemObjt) => void
}

const DeparElemDetails: React.FC<DeparElemDetailsProps> = ({ list, onCreateMunicipi }) => {
    const { id: idString } = useParams<{ id: string }>();
    const id = parseFloat(idString);
    const bool = false;


    const elem = list.find((elem) => {
        return elem.id === id;
    });
    if (!elem) {
        return <Redirect to="/404" />
    }
    const { title, img, description, mapImg, munici } = elem;
    const handleCreateMuniciElemObj = (newMuniciElem: MuniciElemObjt) => {
        onCreateMunicipi(id, newMuniciElem);
    }


    return (<>

        <DeparElem
            id={id}
            img={img}
            title={title}
            mapImg={mapImg}
            description={description}
            type='detail'
            format='slide'
        />

        <div className='container'>
            <div className='container--details'>
            <p className='container--details--text'>{description}</p>
            </div>

            <h1>{munici.length}</h1>

            <Carousel isRTL={bool} itemsToShow={2}>

            {munici.map(municielem => {

                return <MuniciElem

                    id={municielem.id}
                    idDepar={id}
                    title={municielem.title}
                    weather={municielem.weather}
                    description={municielem.description}
                    img={municielem.img}

                />

            })}

        
            </Carousel>

        </div>

        <h2 className='container--title' >Agregar Municipio</h2>


        <DeparElemDetailsMuniciForm
            onCreate={handleCreateMuniciElemObj}
        />



    </>
    );

}

export default DeparElemDetails;