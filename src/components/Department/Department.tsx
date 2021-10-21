import React from "react";
import './Department.css'
import { Link, useHistory } from 'react-router-dom';

export interface DeparElemProps {
  id: number;
  img: string;
  title: string;
  mapImg: string;
  type: 'detail' | 'edit';
  description: string;
  onDelate?: (id: number) => void;
  onEdit?: (id: number) => void;
}

const DeparElem: React.FC<DeparElemProps> = ({ id, img, title, description, mapImg, onDelate, onEdit, type }) => {

  const history = useHistory();

  const handleDelete: React.MouseEventHandler<HTMLButtonElement> = () => {
    if (onDelate) {
      onDelate(id);
    }
  }

  const handleEdit: React.MouseEventHandler<HTMLButtonElement> = () => {
    if (onEdit) {
      onEdit(id);
    }
  }

  const handleView: React.MouseEventHandler<HTMLButtonElement> = () => {
    history.push(`/details/${id}`);
  }

  return (
    <div className='container_depart' style={{
      backgroundImage: `url("${img}")`
    }} >
      {type === 'edit' && <div>
        {onDelate && <button onClick={handleDelete}>X</button>}
        {onEdit && <button onClick={handleEdit}>Editar</button>}
      </div>
      }
      <img src={mapImg}></img>
      <h2 className='container_depart--title'>{title}</h2>
      <p className='container_depart--des'>{description}</p>
      {type === 'edit' && <div>
      <button onClick={handleView}>Conoce más...</button>
      </div>
      }

    </div>
  )
}

export default DeparElem


