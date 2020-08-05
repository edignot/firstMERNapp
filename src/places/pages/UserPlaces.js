import React from 'react';
import PlaceList from '../components/PlaceList';

const DUMMY_PLACES = [
    {
        id: 'ID1',
        image:
            'https://images.unsplash.com/photo-1477346611705-65d1883cee1e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
        title: 'TITLE1',
        description: 'DESCRIPTION1',
        address: 'ADDRESS1',
        creatorId: 'CREATOR1',
        coordinates: {
            lat: 39.73915,
            lng: -104.9847,
        },
    },
    {
        id: 'ID2',
        image:
            'https://images.unsplash.com/photo-1477346611705-65d1883cee1e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
        title: 'TITLE2',
        description: 'DESCRIPTION2',
        address: 'ADDRESS2',
        creatorId: 'CREATOR2',
        coordinates: {
            lat: 39.73915,
            lng: -104.9847,
        },
    },
];

const UserPlaces = () => {
    return <PlaceList places={DUMMY_PLACES} />;
};

export default UserPlaces;
