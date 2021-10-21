import * as React from "react";
import { Redirect, useParams } from "react-router";
import { idText } from "typescript";
import DeparElem from "../Department/Department";
import { DeparElemObj } from "../types/DeparElemObj";
import { MuniciElemObjt } from "../types/MuniciElemObj";
import DeparElemDetailsMuniciForm from "./DeparElemDetailsMuniciForm";
import DeparElemDetailsMunciForm from "./DeparElemDetailsMuniciForm";

interface DeparElemDetailsProps {
    list: DeparElemObj[];
    onCreateMunicipi:(deparElemId: number, newMuniciElem: MuniciElemObjt) => void
}

const DeparElemDetails: React.FC<DeparElemDetailsProps> = ({ list, onCreateMunicipi }) => {
    const { id: idString } = useParams<{ id: string }>();
    const id = parseInt(idString);

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

    return (<div>

        <DeparElem
            id={id}
            img={img}
            title={title}
            mapImg={mapImg}
            description={description}
            type='detail'
        />
        <h1>Municipios: {munici.length}</h1>

        <DeparElemDetailsMuniciForm
            onCreate={handleCreateMuniciElemObj}
        />

    </div>
    );

}

export default DeparElemDetails;