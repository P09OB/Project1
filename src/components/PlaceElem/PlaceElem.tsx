import { Button, IconButton, Rating } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import React from "react";
import { useHistory } from "react-router-dom";
import './PlaceElem.css'
export interface PlaceElemProps {
    id: number;
    name: string;
    coordinates: string;
    score: number;
    description: string
    img: string
    format: 'slide' | 'card';
    type: 'detail' | 'edit';
    onDelate?: (id: number) => void;
    onEdit?: (id: number) => void;

}

const PlaceElem: React.FC<PlaceElemProps> = ({ id, name, coordinates, score, img, description, format, onDelate, type, onEdit }) => {
    const history = useHistory();

    const handleView: React.MouseEventHandler<HTMLDivElement> = () => {
        history.push(`/place/${id}`);

    }

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

    const [value, setValue] = React.useState(2);


    return (

        <>
            {format === 'card' && <div className="Place__component" style={{ backgroundImage: `url("${img}")` }} >
                {type === 'edit' && <div className="Place__component--edit">
                    {onDelate && <IconButton aria-label="delete" color="primary" onClick={handleDelete}>
                        <DeleteIcon />
                    </IconButton>}
                    {onEdit && <IconButton aria-label="edit" color="primary" onClick={handleEdit} >
                        <EditIcon />
                    </IconButton>}
                </div>}

                <div className="Place__component--info" onClick={handleView}>
                <h2>{name}</h2>
            <Rating name="no-value" value={score} readOnly />
                </div>
            </div>}

            {format === 'slide' && <div className="Place__component--slide">
                <div className="Place__component--img" style={{ backgroundImage: `url("${img}")` }}>
                    <h2>{name}</h2>
                </div>
                <p className="Place__component--des">{description}</p>
                <button className="Place--button">Conoce m??s</button>
            </div>}





        </>
    );


}

export default PlaceElem
