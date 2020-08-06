import React from 'react';
import './PlaceList.css';
import Card from '../../shared/components/UIElements/Card';
import PlaceItem from './PlaceItem';
import Button from '../../shared/components/FormElements/Button';

const PlaceList = ({ places }) => {
    if (!places.length) {
        return (
            <div className='place-list center'>
                <Card>
                    <h2>No places found. Please create one.</h2>
                    <Button to='/places/new'>SHARE PLACE</Button>
                </Card>
            </div>
        );
    }
    return (
        <ul className='place-list'>
            {places.map((place) => (
                <PlaceItem key={place.id} place={place} />
            ))}
        </ul>
    );
};

export default PlaceList;
