import * as React from "react";
import { Button, TextField } from "@mui/material";
import { PlaceElemObj } from "../types/PlaceElemObj";

export interface DeparElemDetailsPlaceFormProps {
    id:number;
    idDepar:number;
    onCreate: (newMuniciElem: PlaceElemObj) => void
}

const DeparElemDetailsPlaceForm: React.FC<DeparElemDetailsPlaceFormProps> = ({onCreate, id,idDepar}) => {

    const [namePlace, setNamePlace] = React.useState('');
    const handleNamePlaceChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        setNamePlace(event.target.value);
    }
    const [des, setDes] = React.useState('')
    const handleDesChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        setDes(event.target.value);
    }
    const [location, setLocation] = React.useState('')
    const handleLocationChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        setLocation(event.target.value);
    }

    const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault();
        const newMuniciElem: PlaceElemObj = {
            id: Math.random(),
            idDepar: idDepar,
            idMunici: id,
            name: namePlace,
            coordinates: location,
            score: 0,
            descriptionPlace: des,
        }

        onCreate(newMuniciElem);

    }

    return(<form
        onSubmit={handleSubmit}
        > 

        <TextField
            name="title"
            label="Nombre del lugar"
            variant="outlined"
            className="input"
            type="text"
            color= 'secondary'
            onChange={handleNamePlaceChange}
            value={namePlace}
        ></TextField>
        <TextField
            name="Description"
            label="Descripción"
            variant="outlined"
            className="input"
            type="text"
            color= 'secondary'
            onChange={handleDesChange}
            value={des}
        ></TextField>
        <TextField
            name="location"
            label="ubicación"
            variant="outlined"
            className="input"
            type="text"
            color= 'secondary'
            onChange={handleLocationChange}
            value={location}

        ></TextField>
        <Button type="submit" variant="contained">Agregar</Button>



    </form>

    );
}

export default DeparElemDetailsPlaceForm;

