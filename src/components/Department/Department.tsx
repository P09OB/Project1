import * as React from "react";
import './Department.css'
import { Link, useHistory } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';


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

  const handleView: React.MouseEventHandler<HTMLDivElement>  = () => {
    history.push(`/details/${id}`);
  }

  return (
    /*<div className='container_depart' style={{
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

    </div>*/
    <div>
    <div className="depar_contenedor" style={{ backgroundImage: `url("${img}")`}} onClick={handleView} >
      {type === 'edit' && <div>
        {onDelate && <IconButton aria-label="delete" color="primary" onClick={handleDelete}>
        <DeleteIcon />
      </IconButton>}
        {onEdit && <IconButton aria-label="delete" color="primary" onClick={handleEdit}>
        <EditIcon />
      </IconButton>}
      </div>
}
      <img src={mapImg}></img>
      <h2 className="depar_contenedor--text">{title}</h2>
    </div>
    </div>
  )
}

export default DeparElem


