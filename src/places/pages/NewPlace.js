import React, { useCallback, useReducer } from 'react';
import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import './NewPlace.css';
import {
    VALIDATOR_REQUIRE,
    VALIDATOR_MINLENGTH,
} from '../../shared/components/util/validators';

const formReducer = (state, action) => {
    switch (action.type) {
        case 'INPUT_CHANGE':
            let formIsValid = true;
            for (const inputId in state.inputs) {
                if (inputId === action.inputId) {
                    formIsValid = formIsValid && action.isValid;
                } else {
                    formIsValid = formIsValid && state.inputs[inputId].isValid;
                }
            }
            return {
                ...state,
                inputs: {
                    ...state.inputs,
                    [action.inputId]: {
                        value: action.value,
                        isValid: action.isValid,
                    },
                },
                isValid: formIsValid,
            };

        default:
            return state;
    }
};

const NewPlace = () => {
    const [formState, dispatch] = useReducer(formReducer, {
        inputs: {
            title: {
                value: '',
                isValid: false,
            },
            description: {
                value: '',
                isValid: false,
            },
        },
        isValid: false,
    });

    const inputHandler = useCallback((id, value, isValid) => {
        dispatch({ type: 'INPUT_CHANGE', value, isValid, inputId: id });
    }, []);

    return (
        <form className='place-form'>
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
            <Button type='submit' disabled={!formState.isValid}>
                SUBMIT
            </Button>
        </form>
    );
};

export default NewPlace;
