import { Button, TextField } from "@mui/material";
import { title } from "process";
import * as React from "react";
import { MuniciElemObjt } from "../types/MuniciElemObj";

export interface DeparElemDetailsMuniciFormProps {
    onCreate: (newMuniciElem: MuniciElemObjt) => void
}

const DeparElemDetailsMuniciForm: React.FC<DeparElemDetailsMuniciFormProps> = ({onCreate }) => {

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

    const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault();
        const newMuniciElem: MuniciElemObjt = {
            id: Math.random(),
            title: name,
            weather: weather,
            description: des,
        }

        onCreate(newMuniciElem);

    }

    

    return (<form 
    onSubmit={handleSubmit}>
        
        <TextField
            name="title"
            label="Departamento"
            variant="outlined"
            className="input"
            type="text"
            onChange={handleNameChange}
            value={name}
        ></TextField>

        <TextField
            name="weather"
            label="Clima"
            variant="outlined"
            className="input"
            type="text"
            onChange={handleWeatherChange}
            value={weather}
        ></TextField>

        <TextField
            name="Description"
            type="text"
            label="Descripción"
            variant="outlined"
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