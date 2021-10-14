import React from "react";
import { DeparElemProps } from "../Department/Department";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { makeStyles } from '@mui/styles';

import './DeparElemForm.css'

interface DeparElemFormProps {
    editId: number | null;
    type: 'create' | 'edit';
    onCreate: (newDeparElem:{img: string, title: string, mapImg:string, description:string})=> void
    onEdit: (id: number, editDeparElem:{img: string, description:string})=> void
}

const DeparElemForm: React.FC<DeparElemFormProps> = ({ editId, type, onCreate, onEdit}) => {

    const [formSubmitted, setFormSubmitted] = React.useState(false);

    const [name, setName] = React.useState('');
    const handleNameChange: React.ChangeEventHandler<HTMLInputElement> = (event) =>{
        setName(event.target.value);
    }

    const [url, setUrl] = React.useState('');
    const handleUrlChange: React.ChangeEventHandler<HTMLInputElement> = (event) =>{
        setUrl(event.target.value);
    }

    const [des,setDes] = React.useState('')
    const handleDesChange: React.ChangeEventHandler<HTMLInputElement> = (event) =>{
        setDes(event.target.value);
    }

    const[urlMap, setUrlMap] = React.useState('');
    const handleUrlMapChange: React.ChangeEventHandler<HTMLInputElement> = (event) =>{
        setUrlMap(event.target.value);
    }

    const isUrlValid = url.length >= 10;
    const isTitleValid= name.length >= 2;
    const isDescriValid= des.length >= 20;

    //Style

    const useStyles = makeStyles({
        root: {
          
          margin: '10px 0 0 0',
        },
      });




    const handleSubmit: React.FormEventHandler<HTMLFormElement> =(event: any) =>{
        event.preventDefault();
        setFormSubmitted(true);


        if(type==='create'&&isDescriValid&&isTitleValid&&isUrlValid){

            onCreate({
                img: url,
                title: name,
                mapImg: urlMap,
                description: des,
    
            });
            setName('');
            setUrl('');
            setDes('');
            setUrlMap('');
            setFormSubmitted(false)

        } else if(type==='edit'&&isDescriValid&&isUrlValid){

            onEdit( editId!,{
                img: url,
                description: des,
            });
            
        } else{
            console.log('invalid')
        }
    }



    return (<form className="DeparElemForm"
            onSubmit={handleSubmit}>

        <h2> {type === 'create' ? 'Agregar': 'Editar'} Elemento</h2>
        
        {type === 'create' &&
            <TextField      
            name="title" 
            label="Departamento" 
            variant="outlined" 
            className="input" 
            type="text"
            onChange={handleNameChange}
            value= {name}
            error={(!isTitleValid&&formSubmitted)} 
            helperText={(!isTitleValid&&formSubmitted) ? "El titulo contiene menos de 10 caracteres" : ''} >
            </TextField>
            
        } 

            <TextField 
            name="Image" 
            type="text"
            label="URL Imagen" 
            variant="outlined" 
            className={useStyles().root}
            onChange={handleUrlChange}
            value={url}
            error={(formSubmitted && !isUrlValid)} 
            helperText={(formSubmitted && !isUrlValid) ? 'La URL contiene menos de 10 caracteres' : ''} >

            </TextField>
            
            <TextField 
            name="Logo" 
            type="text"
            label="URL Croquis" 
            className={useStyles().root}
            variant="outlined" 
            onChange={handleUrlMapChange}
            value={urlMap}
            error={(formSubmitted && !isUrlValid)} 
            helperText={(formSubmitted && !isUrlValid) ? 'La URL contiene menos de 10 caracteres' : ''}
            ></TextField>
            
                    <TextField 
            name="Description" 
            type="text"
            label="Descripción" 
            variant="outlined"
            className={useStyles().root}
            onChange={handleDesChange}
            value={des}
            error={(!isDescriValid&&formSubmitted)} 
            helperText={(!isDescriValid&&formSubmitted) ? 'La URL contiene menos de 10 caracteres' : ''}
            ></TextField>
           
        <Button type="submit" variant="contained" className={useStyles().root}>
            {type === 'create' ? 'Agregar nuevo elemento': 'Guardar cambios'}
        </Button>


    </form>);
}

export default DeparElemForm;