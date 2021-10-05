import React from "react";
import { DeparElemProps } from "../Department/Department";
import './DeparElemForm.css'

interface DeparElemFormProps {

    onCreate: (newDeparElem:DeparElemProps)=> void

}

const DeparElemForm: React.FC<DeparElemFormProps> = ({ onCreate}) => {

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

    const handleSubmit: React.FormEventHandler<HTMLFormElement> =(event: any) =>{
        event.preventDefault();
        setFormSubmitted(true);

        onCreate({
            img: url,
            title: name,
            description: des,

        });

        

    }



    return (<form className="DeparElemForm"
            onSubmit={handleSubmit}>

        <h2>Crear Elemento</h2>
        <label>Nombre {name}
            <input name="title" type="text"
            onChange={handleNameChange}
            value= {name}></input>
        </label>

        <label>URL Imagen
            <input name="Image" type="text"
            onChange={handleUrlChange}
            value={url}></input>
        </label>

        <label>Descripción
            <input name="Description" type="text"
            onChange={handleDesChange}
            value={des}></input>
        </label>

        <button>
            create
        </button>


    </form>);
}

export default DeparElemForm;