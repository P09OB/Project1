import React from "react";
import { DeparElemProps } from "../Department/Department";
import './DeparElemForm.css'

interface DeparElemFormProps {
    editId: number | null;
    type: 'create' | 'edit';
    onCreate: (newDeparElem:{img: string, title: string, description:string})=> void
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

    const isUrlValid = url.length >= 10;
    const isTitleValid= name.length >= 2;
    const isDescriValid= des.length >= 20;




    const handleSubmit: React.FormEventHandler<HTMLFormElement> =(event: any) =>{
        event.preventDefault();
        setFormSubmitted(true);


        if(type==='create'&&isDescriValid&&isTitleValid&&isUrlValid){

            onCreate({
                img: url,
                title: name,
                description: des,
    
            });
            setName('');
            setUrl('');
            setDes('');
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
        {type === 'create' &&<label>Nombre {name}
        {(!isTitleValid&&formSubmitted)&&
                <p className="DeparElemForm__error">El titulo contiene menos de 10 caracteres</p>
            }
            <input name="title" type="text"
            onChange={handleNameChange}
            value= {name}></input>
            
        </label>}

        <label>URL Imagen
        {(formSubmitted && !isUrlValid)&&
                <p className="DeparElemForm__error">La URL contiene menos de 10 caracteres</p>
            }
            <input name="Image" type="text"
            onChange={handleUrlChange}
            value={url}></input>

            
        </label>

        <label>Descripción
        {(!isDescriValid&&formSubmitted)&&
            <p className="DeparElemForm__error">La descripción contiene menos menos 20 caracteres</p>}
            <input name="Description" type="text"
            onChange={handleDesChange}
            value={des}></input>
           
        </label>

        <button>
            {type === 'create' ? 'Agregar nuevo elemento': 'Guardar cambios'}
        </button>


    </form>);
}

export default DeparElemForm;