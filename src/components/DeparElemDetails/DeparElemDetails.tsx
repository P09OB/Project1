import * as React from "react";
import { Redirect, useParams } from "react-router";
import DeparElem from "../Department/Department";
import MuniciElem from "../MuniciElem/MuniciElem";
import { DeparElemObj } from "../types/DeparElemObj";
import { MuniciElemObjt } from "../types/MuniciElemObj";
import DeparElemDetailsMuniciForm from "./DeparElemDetailsMuniciForm";
import Carousel from 'react-elastic-carousel'
import "./DeparElemDetails.css"
import { TagOption } from "../types/TagOption";

interface DeparElemDetailsProps {
    list: DeparElemObj[];
    onCreateMunicipi: (deparElemId: number, newMuniciElem: MuniciElemObjt) => void
    onDelate: (deparId:number, municiId:number)=> void
    onEdit: (deparId:number, municiId:number, editMuniciElem: MuniciElemObjt) => void
}


export const DeparElemDetails: React.FC<DeparElemDetailsProps> = ({ list, onCreateMunicipi,onDelate,onEdit }) => {
    const { id: idString } = useParams<{ id: string }>();
    const id = parseFloat(idString);
    const bool = false;

    const elem = list.find((elem) => {
        return elem.id === id;
    });
    if (!elem) {
        return <Redirect to="/404" />
    }
    const handleCreateMuniciElemObj = (newMuniciElem: MuniciElemObjt) => {
        onCreateMunicipi(id, newMuniciElem);
    }
    
    const { title, img, description, mapImg, munici } = elem;

    const municiCopy = munici

    const handleDelate = (municiId:number) =>{
        onDelate(id, municiId); 
    }

    /*const [formMuniciType, setFormMuniciType] = React.useState<'create' | 'edit' | 'none'>('create');
    const [editIdMunici, setEditIdMunici] = React.useState<number | null>(null);
    const handleMuniciTypeChange: React.MouseEventHandler<HTMLButtonElement> = (event) => {
        setFormMuniciType("create")
    }
*/
    const handleBeginEditMunici= (editId: number) => {
        //setEditIdMunici(editId);
        //setFormMuniciType("edit");
        
      }
    
    const handleEditMunici = (municiId:number,editMuniciElem: MuniciElemObjt)=>{
        onEdit(id, municiId, editMuniciElem); 
        //setFormMuniciType("none");
        //setEditIdMunici(null);
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
            <Carousel isRTL={bool} itemsToShow={2}>

            {municiCopy.map(municielem => {

                return <MuniciElem

                    id={municielem.id}
                    idDepar={id}
                    title={municielem.title}
                    weather={municielem.weather}
                    description={municielem.description}
                    img={municielem.img}
                    onDelate = {handleDelate}
                    onEdit = {handleBeginEditMunici}
                    type='edit'

                />

            })}

        
            </Carousel>

        </div>

        <h2 className='container--title' >Agregar Municipio</h2>


        <DeparElemDetailsMuniciForm
            onCreate={handleCreateMuniciElemObj} 
            onEdit ={handleEditMunici}
                       
        />



    </>
    );

}

export default DeparElemDetails;