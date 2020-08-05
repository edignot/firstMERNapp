import React from 'react';
import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import './PlaceForm.css';
import {
    VALIDATOR_REQUIRE,
    VALIDATOR_MINLENGTH,
} from '../../shared/components/util/validators';
import { useForm } from '../../shared/hooks/form-hook';

const NewPlace = () => {
    const [formState, inputHandler] = useForm(
        {
            title: {
                value: '',
                isValid: false,
            },
            description: {
                value: '',
                isValid: false,
            },
            address: {
                value: '',
                isValid: false,
            },
        },
        false
    );

    const placeSubmitHandler = (e) => {
        e.preventDefault();
        console.log(formState.inputs);
    };

    return (
        <form className='place-form' onSubmit={placeSubmitHandler}>
            <Input
                type='text'
                label='title'
                validators={[VALIDATOR_REQUIRE()]}
                onChange={inputHandler}
                element='input'
                errorText='Please enter a valid title.'
                onInput={inputHandler}
                id='title'
            />
            <Input
                label='description'
                validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(10)]}
                onChange={inputHandler}
                element='textarea'
                errorText='Please enter a valid description (at least 10 characters).'
                onInput={inputHandler}
                id='description'
            />
            <Input
                label='address'
                validators={[VALIDATOR_REQUIRE()]}
                onChange={inputHandler}
                element='input'
                errorText='Please enter a valid address.'
                onInput={inputHandler}
                id='address'
            />
            <Button type='submit' disabled={!formState.isValid}>
                SUBMIT
            </Button>
        </form>
    );
};

export default NewPlace;
