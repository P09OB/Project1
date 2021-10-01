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



    const handleSubmit: React.FormEventHandler<HTMLFormElement> =(event: any) =>{
        event.preventDefault();
        setFormSubmitted(true);

        onCreate({
            img: '',
            title: name,
            description: '',

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
            <input name="Image" type="text"></input>
        </label>

        <label>Descripción
            <input name="Description" type="text"></input>
        </label>

        <button>
            create
        </button>


    </form>);
}

export default DeparElemForm;