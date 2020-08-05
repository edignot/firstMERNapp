import React from 'react';
import './PlaceItem.css';
import Card from '../../shared/components/UIElements/Card';
import Button from '../../shared/components/FormElements/Button';

const PlaceItem = ({ place }) => {
    const {
        id,
        image,
        title,
        description,
        address,
        creatorId,
        coordinates,
    } = place;
    return (
        <li className='place-item'>
            <Card className='place-item__content'>
                <div className='place-item__image'>
                    <img src={image} alt={title} />
                </div>
                <div className='place-item__info'>
                    <h2>{title}</h2>
                    <h3>{address}</h3>
                    <p>{description}</p>
                </div>
                <div className='place-item__actions'>
                    <Button inverse>VIEW ON MAP</Button>
                    <Button to={`/places/${id}`}>EDIT</Button>
                    <Button danger>DELETE</Button>
                </div>
            </Card>
        </li>
    );
};

export default PlaceItem;
