import React from 'react';
import { useParams } from 'react-router-dom';
import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import {
    VALIDATOR_REQUIRE,
    VALIDATOR_MINLENGTH,
} from '../../shared/components/util/validators';
import './PlaceForm.css';

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
        creatorId: '2',
        coordinates: {
            lat: 39.73915,
            lng: -104.9847,
        },
    },
];

const UpdatePlace = () => {
    const placeId = useParams().placeId;
    const identifiedPlace = DUMMY_PLACES.find((place) => place.id === placeId);

    if (!identifiedPlace) {
        return (
            <div className='center'>
                <h2>Could not find place!</h2>
            </div>
        );
    }
    return (
        <form className='place-form'>
            <Input
                id='title'
                element='input'
                type='text'
                label='title'
                validators={[VALIDATOR_REQUIRE()]}
                errorText='Please enter a valid title'
                onInput={() => {}}
                value={identifiedPlace.title}
                valid={true}
            />
            <Input
                id='description'
                element='textarea'
                label='description'
                validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(10)]}
                errorText='Please enter a valid description (minimum 10 characters).'
                onInput={() => {}}
                value={identifiedPlace.description}
                valid={true}
            />
            <Button type='submit' disabled={true}>
                UPDATE PLACE
            </Button>
        </form>
    );
};

export default UpdatePlace;
