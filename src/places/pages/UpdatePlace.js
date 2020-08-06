import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import {
    VALIDATOR_REQUIRE,
    VALIDATOR_MINLENGTH,
} from '../../shared/components/util/validators';
import { useForm } from '../../shared/hooks/form-hook';
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
    const [isLoading, setIsLoading] = useState(true);

    const [formState, inputHandler, setFormData] = useForm(
        {
            title: {
                value: '',
                isValid: false,
            },
            description: {
                value: '',
                isValid: false,
            },
        },
        true
    );

    const identifiedPlace = DUMMY_PLACES.find((place) => place.id === placeId);

    useEffect(() => {
        setFormData(
            {
                title: {
                    value: identifiedPlace.title,
                    isValid: true,
                },
                description: {
                    value: identifiedPlace.description,
                    isValid: true,
                },
            },
            true
        );
        setIsLoading(false);
    }, [setFormData, identifiedPlace]);

    const placeUpdateSubmitHandler = (e) => {
        e.preventDefault();
        console.log(formState.inputs);
    };

    if (!identifiedPlace) {
        return (
            <div className='center'>
                <h2>Could not find place!</h2>
            </div>
        );
    }

    if (isLoading) {
        return (
            <div className='center'>
                <h2>Loading...</h2>
            </div>
        );
    }
    return (
        <form className='place-form' onSubmit={placeUpdateSubmitHandler}>
            <Input
                id='title'
                element='input'
                type='text'
                label='title'
                validators={[VALIDATOR_REQUIRE()]}
                errorText='Please enter a valid title'
                onInput={inputHandler}
                onChange={inputHandler}
                initialValue={formState.inputs.title.value}
                initialValid={formState.inputs.title.isValid}
            />
            <Input
                id='description'
                element='textarea'
                label='description'
                validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(10)]}
                errorText='Please enter a valid description (minimum 10 characters).'
                onInput={inputHandler}
                initialValue={formState.inputs.description.value}
                initialValid={formState.inputs.description.isValid}
            />
            <Button type='submit' disabled={!formState.isValid}>
                UPDATE PLACE
            </Button>
        </form>
    );
};

export default UpdatePlace;
