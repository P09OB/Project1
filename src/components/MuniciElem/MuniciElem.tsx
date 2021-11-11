import React from "react";
import { useHistory } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import './MuniciElem.css'

export interface MuniciElemProps {
    id: number;
    idDepar: number;
    title: string;
    weather: string;
    description: string;
    img: string;
    type: 'detail' | 'edit';
    onDelate?: (id: number) => void;
    onEdit?: (id: number) => void;

}

const MuniciElem: React.FC<MuniciElemProps> = ({ id, idDepar, title, description, img, onDelate, onEdit,type }) => {
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
        history.push(`/municipio/${id}`);

    }

    return (
        <>

            <div className='Munici__component' style={{ backgroundImage: `url("${img}")` }}>
                <div className='Munici__component'>

                    {type === 'edit' && <div>
                    {onDelate && <IconButton aria-label="delete" color="primary" onClick={handleDelete}>
                            <DeleteIcon />
                        </IconButton>}
                    {onEdit && <IconButton aria-label="edit" color="primary" onClick={handleEdit}>
                            <EditIcon />
                        </IconButton>}

                    </div>}

                    <div className='Munici__place'>
                        <h1 className='Munici--title'>{title}</h1>
                        <p className='Munici--desc'>{description}</p>
                        <button className='Munici--button' onClick={handleView}>Conoce más</button>
                    </div>

                </div>
            </div>

        </>
    );

}

export default MuniciElem
