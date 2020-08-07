import React, { useState } from 'react';
import './Auth.css';
import Card from '../../../shared/components/UIElements/Card';
import Input from '../../../shared/components/FormElements/Input';
import Button from '../../../shared/components/FormElements/Button';
import {
    VALIDATOR_EMAIL,
    VALIDATOR_MINLENGTH,
    VALIDATOR_REQUIRE,
} from '../../../shared/components/util/validators';
import { useForm } from '../../../shared/hooks/form-hook';

const Auth = () => {
    const [isLoginMode, setIsLoginMode] = useState(true);

    const switchModeHandler = () => {
        setIsLoginMode((prevMode) => !prevMode);
    };

    const [formState, inputHandler] = useForm(
        {
            email: {
                value: '',
                isValid: false,
            },
            password: {
                value: '',
                isValid: false,
            },
        },
        false
    );

    const authSubmitHandler = (e) => {
        e.preventDefault();
        console.log(formState);
    };

    return (
        <Card className='authentication'>
            <h2>Login</h2>
            <hr />
            <form onSubmit={authSubmitHandler}>
                {!isLoginMode && (
                    <Input
                        id='name'
                        element='input'
                        type='text'
                        label='name'
                        validators={[VALIDATOR_REQUIRE()]}
                        errorText='Please enter a valid email address'
                        onInput={inputHandler}
                    />
                )}
                <Input
                    id='email'
                    element='input'
                    type='email'
                    label='email'
                    validators={[VALIDATOR_EMAIL()]}
                    errorText='Please enter a valid email address'
                    onInput={inputHandler}
                />
                <Input
                    id='password'
                    element='input'
                    type='password'
                    label='password'
                    validators={[VALIDATOR_MINLENGTH(8)]}
                    errorText='Please enter a valid password, at least 8 characters'
                    onInput={inputHandler}
                />
                <Button type='submit' disabled={!formState.isValid}>
                    {isLoginMode ? 'LOGIN' : 'SIGNUP'}
                </Button>
            </form>
            <Button inverse onClick={switchModeHandler}>
                {isLoginMode ? 'SIGNUP' : 'LOGIN'}
            </Button>
        </Card>
    );
};

export default Auth;
