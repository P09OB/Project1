import { Button, TextField } from "@mui/material";
import { title } from "process";
import * as React from "react";
import { MuniciElemObjt } from "../types/MuniciElemObj";

import '../DeparElemForm/DeparElemForm.css'
import { useParams } from "react-router-dom";


export interface DeparElemDetailsMuniciFormProps {
    onCreate: (newMuniciElem: MuniciElemObjt) => void
}

const DeparElemDetailsMuniciForm: React.FC<DeparElemDetailsMuniciFormProps> = ({onCreate }) => {
    const { id: idString } = useParams<{ id: string }>();
    const id = parseFloat(idString);

    const [name, setName] = React.useState('');
    const handleNameChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        setName(event.target.value);
    }
    const [des, setDes] = React.useState('')
    const handleDesChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        setDes(event.target.value);
    }
    const [weather, weatherDes] = React.useState('')
    const handleWeatherChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        weatherDes(event.target.value);
    }

    const [img, imgDes] = React.useState('')
    const handleImgChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        imgDes(event.target.value);
    }

    const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault();
        const newMuniciElem: MuniciElemObjt = {
            id: Math.random(),
            idDepar: id,
            title: name,
            weather: weather,
            description: des,
            img: img,
        }

        onCreate(newMuniciElem);

    }

    

    return (<form className="DeparElemForm"
    onSubmit={handleSubmit}>
        
        <TextField
            name="title"
            label="Departamento"
            variant="outlined"
            className="input"
            type="text"
            color= 'secondary'
            onChange={handleNameChange}
            value={name}
        ></TextField>

        <TextField
            name="weather"
            label="Clima"
            variant="outlined"
            className="input"
            type="text"
            color= 'secondary'
            onChange={handleWeatherChange}
            value={weather}
        ></TextField>

        <TextField
            name="Imagen"
            label="URL"
            variant="outlined"
            className="input"
            type="text"
            color= 'secondary'
            onChange={handleImgChange}
            value={img}
        ></TextField>


        <TextField
            name="Description"
            type="text"
            label="Descripción"
            variant="outlined"
            color= 'secondary'
            //className={useStyles().root}
            onChange={handleDesChange}
            value={des}
        //error={(!isDescriValid && formSubmitted)}
        //helperText={(!isDescriValid && formSubmitted) ? 'La URL contiene menos de 10 caracteres' : ''}
        ></TextField>

        <Button type="submit" variant="contained">Agregar</Button>
    </form>);
}

export default DeparElemDetailsMuniciForm;