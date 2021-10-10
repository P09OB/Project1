import React from "react";
import './Department.css'

export interface DeparElemProps {
  id: number;
  img: string;
  title: string;
  description: string;
  onDelate:(id:number) => void;
  onEdit: (id:number) => void;
}

const DeparElem: React.FC<DeparElemProps> = ({ id, img, title, description, onDelate, onEdit }) => {

  const handleDelete:React.MouseEventHandler<HTMLButtonElement>  =() =>{
    onDelate(id);
  }

  const handleEdit:React.MouseEventHandler<HTMLButtonElement> =()=>{
    onEdit(id);
  }

  return (
    <div className='container_depart' style={{
      backgroundImage: `url("${img}")`
    }} >
      <button onClick={handleDelete}>X</button>
      <button onClick={handleEdit}>Editar</button>
      <h2 className='container_depart--title'>{title}</h2>
      <p className='container_depart--des'>{description}</p>
      <a href="${}" >Conocer más...</a>


    </div>
  )
}

export default DeparElem


