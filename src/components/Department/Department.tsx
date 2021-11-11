import * as React from "react";
import './Department.css'
import { useHistory } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';


export interface DeparElemProps {
  id: number;
  img: string;
  title: string;
  mapImg: string;
  type: 'detail' | 'edit';
  format: 'slide' | 'card';
  description: string;
  onDelate?: (id: number) => void;
  onEdit?: (id: number) => void;
}

const DeparElem: React.FC<DeparElemProps> = ({ id, img, title, description, mapImg, onDelate, onEdit, type, format }) => {

  const history = useHistory();
  let className;

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

  const handleView: React.MouseEventHandler<HTMLDivElement> = () => {
    history.push(`/details/${id}`);
  }

  if (format === 'slide') {
    className = "depar_contenedor--big"
  } else {
    className = "depar_contenedor";
  }

  return (

    <div className={className} style={{ backgroundImage: `url("${img}")` }}  >
      {type === 'edit' && <div>
        {onDelate && <IconButton aria-label="delete" color="primary" onClick={handleDelete}>
          <DeleteIcon />
        </IconButton>}
        {onEdit && <IconButton aria-label="delete" color="primary" onClick={handleEdit}>
          <EditIcon />
        </IconButton>}
      </div>
      }

      <div className="depar__elem" onClick={handleView}>
        <img className="depar__elem--img" src={mapImg}></img>
        {format === 'slide' && <p className="depar_contenedor--text">Quiero explorar</p>}
        <h2 className="depar_contenedor--text">{title}</h2>
      </div>

    </div>

  )
}

export default DeparElem


