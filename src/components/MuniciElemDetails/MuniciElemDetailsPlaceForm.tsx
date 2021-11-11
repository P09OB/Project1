import * as React from "react";
import { Button, TextField } from "@mui/material";
import { PlaceElemObj } from "../types/PlaceElemObj";
import { makeStyles } from "@mui/styles";

export interface DeparElemDetailsPlaceFormProps {
    id:number;
    idDepar:number;
    onCreate: (newMuniciElem: PlaceElemObj) => void
    onEdit: (id: number, editMuniciElem: PlaceElemObj) => void;
    type: 'create'

}

const DeparElemDetailsPlaceForm: React.FC<DeparElemDetailsPlaceFormProps> = ({onCreate, id,idDepar, onEdit, type}) => {

    const [formSubmitted, setFormSubmitted] = React.useState(false);

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
    const [img, setImg] = React.useState('')
    const handleImgChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        setImg(event.target.value);
    }

    const isUrlValid = img.length >= 10;
    const isTitleValid = namePlace.length >= 2;
    const isDescriValid = des.length >= 20;
    const isLocationValid = location.length >= 10;

    const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault();
        setFormSubmitted(true);

        const newMuniciElem: PlaceElemObj = {
            id: Math.random(),
            idDepar: idDepar,
            idMunici: id,
            name: namePlace,
            coordinates: location,
            score: 0,
            descriptionPlace: des,
            img:img,
        }


        if(isUrlValid&&isTitleValid&&isDescriValid&&isLocationValid){
            onCreate(newMuniciElem);
            setNamePlace('');
            setLocation('');
            setDes('');
            setImg('');
            setFormSubmitted(false)

        }

        const useStyles = makeStyles({
            root: {
    
                margin: '10px 0 0 0',
            },
        });

        
    

    }
    

    return(<form className="DeparElemForm"
        onSubmit={handleSubmit}
        > 

        <h2> {type === 'create' ? 'Agregar' : 'Editar'} un nuevo lugar</h2>


        <TextField
            name="title"
            label="Nombre del lugar"
            variant="outlined"
            className="input"
            type="text"
            color= 'secondary'
            onChange={handleNamePlaceChange}
            value={namePlace}
            error={(!isTitleValid && formSubmitted)}
            helperText={(!isTitleValid && formSubmitted) ? "El titulo contiene menos de 10 caracteres" : ''} >
        </TextField>
        <TextField
            name="Description"
            label="Descripción"
            variant="outlined"
            className="input"
            type="text"
            color= 'secondary'
            onChange={handleDesChange}
            value={des}
            error={(!isDescriValid && formSubmitted)}
            helperText={(!isDescriValid && formSubmitted) ? 'La URL contiene menos de 10 caracteres' : ''}
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
            error={(formSubmitted && !isLocationValid)}
            helperText={(formSubmitted && !isLocationValid) ? 'La location contiene menos de 10 caracteres' : ''}
        ></TextField>
        <TextField
            name="img"
            label="URL Imagen"
            variant="outlined"
            className="input"
            type="text"
            color= 'secondary'
            onChange={handleImgChange}
            value={img}
            error={(formSubmitted && !isUrlValid)}
            helperText={(formSubmitted && !isUrlValid) ? 'La URL contiene menos de 10 caracteres' : ''}

        ></TextField>
        <Button type="submit" variant="contained">Agregar</Button>



    </form>

    );
}

export default DeparElemDetailsPlaceForm;



