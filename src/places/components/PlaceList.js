import React from 'react';
import './PlaceList.css';
import Card from '../../shared/components/UIElements/Card';
import PlaceItem from './PlaceItem';

const PlaceList = ({ places }) => {
    if (!places) {
        return (
            <div className='place-list center'>
                <Card>
                    <h2>No places found. Please create one.</h2>
                    <button>Share Place</button>
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
