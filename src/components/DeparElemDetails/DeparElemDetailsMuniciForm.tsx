import { Autocomplete, Button, makeStyles, TextField } from "@mui/material";
import * as React from "react";
import { MuniciElemObjt } from "../types/MuniciElemObj";

import '../DeparElemForm/DeparElemForm.css'
import { useParams } from "react-router-dom";
import { TagOption } from "../types/TagOption";


export interface DeparElemDetailsMuniciFormProps {
    onCreate: (newMuniciElem: MuniciElemObjt) => void
    onEdit: (id: number, editMuniciElem: MuniciElemObjt) => void;
}

const DeparElemDetailsMuniciForm: React.FC<DeparElemDetailsMuniciFormProps> = ({ onCreate}) => {
    const { id: idString } = useParams<{ id: string }>();
    const id = parseFloat(idString);

    const [formSubmitted, setFormSubmitted] = React.useState(false);

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

    //Estado para guardar tags

    const initialTags = ([]).map(tagString => {
        return {
          label: tagString
        }
      })

    

    const isTitleValid = name.length >= 2;
    const isUrlValid = img.length >= 10;
    const isDescriValid = des.length >= 20;
    const isWeatherValid = weather.length >= 3;






    const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault();
        setFormSubmitted(true);


        const newMuniciElem: MuniciElemObjt = {
            id: Math.random(),
            idDepar: id,
            title: name,
            weather: weather,
            description: des,
            img: img,
        }

        if (isTitleValid && isUrlValid && isDescriValid && isWeatherValid) {
            onCreate(newMuniciElem);
            setName('');
            setDes('');
            weatherDes('');
            imgDes('');
            setFormSubmitted(false)

        }


    }



    return (<form className="DeparElemForm"
        onSubmit={handleSubmit}>

        <TextField
            name="title"
            label="Departamento"
            variant="outlined"
            className="input"
            type="text"
            color='secondary'
            onChange={handleNameChange}
            value={name}
            error={(!isTitleValid && formSubmitted)}
            helperText={(!isTitleValid && formSubmitted) ? "El titulo contiene menos de 10 caracteres" : ''}
        ></TextField>

        <TextField
            name="weather"
            label="Temperatura promedio"
            variant="outlined"
            className="input"
            type="text"
            color='secondary'
            onChange={handleWeatherChange}
            value={weather}
            error={(!isWeatherValid && formSubmitted)}
            helperText={(!isWeatherValid && formSubmitted) ? "La temperatura no puede contener mas de 3 caracteres" : ''}


        ></TextField>

        <TextField
            name="image"
            label="URL Imagen"
            variant="outlined"
            className="input"
            type="text"
            color='secondary'
            onChange={handleImgChange}
            value={img}
            error={(formSubmitted && !isUrlValid)}
            helperText={(formSubmitted && !isUrlValid) ? 'La URL contiene menos de 10 caracteres' : ''}
        ></TextField>


        <TextField
            name="Description"
            type="text"
            label="Descripción"
            variant="outlined"
            color='secondary'
            //className={useStyles().root}
            onChange={handleDesChange}
            value={des}
            error={(!isDescriValid && formSubmitted)}
            helperText={(!isDescriValid && formSubmitted) ? 'La URL contiene menos de 10 caracteres' : ''}

        ></TextField>

        

        <Button type="submit" variant="contained">Agregar</Button>
    </form>);
}

export default DeparElemDetailsMuniciForm;