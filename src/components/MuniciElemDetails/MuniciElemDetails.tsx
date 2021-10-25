import React from "react";
import { PlaceElemObj } from "../types/PlaceElemObj";

interface MuniciElemDetailsProps {
    list: PlaceElemObj[];

}


const MuniciElemDetails: React.FC<MuniciElemDetailsProps> = ({ list }) => {

    return(

        <div>Detalles de municipio</div>

    );
}

export default MuniciElemDetails;