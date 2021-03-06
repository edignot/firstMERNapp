import React, { useState, useContext } from 'react';
import Card from '../../../shared/components/UIElements/Card';
import Input from '../../../shared/components/FormElements/Input';
import Button from '../../../shared/components/FormElements/Button';
import {
    VALIDATOR_EMAIL,
    VALIDATOR_MINLENGTH,
    VALIDATOR_REQUIRE,
} from '../../../shared/components/util/validators';
import { useForm } from '../../../shared/hooks/form-hook';
import './Auth.css';
import { AuthContext } from '../../../shared/context/auth-context';
import LoadingSpinner from '../../../shared/components/UIElements/LoadingSprinner';
import ErrorModal from '../../../shared/components/UIElements/ErrorModal';

const Auth = () => {
    const auth = useContext(AuthContext);

    const [isLoginMode, setIsLoginMode] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();

    const [formState, inputHandler, setFormData] = useForm(
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

    const switchModeHandler = () => {
        if (!isLoginMode) {
            setFormData(
                {
                    ...formState.inputs,
                    name: undefined,
                },
                formState.inputs.email.isValid &&
                    formState.inputs.password.isValid
            );
        } else {
            setFormData(
                {
                    ...formState.inputs,
                    name: {
                        value: '',
                        isValid: false,
                    },
                },
                false
            );
        }
        setIsLoginMode((prevMode) => !prevMode);
    };

    const authSubmitHandler = async (e) => {
        e.preventDefault();

        if (isLoginMode) {
        } else {
            try {
                setIsLoading(true);
                const response = await fetch(
                    'http://localhost:5000/api/users/signup',
                    {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            name: formState.inputs.name.value,
                            email: formState.inputs.email.value,
                            password: formState.inputs.email.value,
                        }),
                    }
                );

                const responseData = await response.json();
                if (!response.ok) {
                    throw new Error(responseData.message);
                }
                setIsLoading(false);
                auth.login();
            } catch (err) {
                console.log(err);
                setIsLoading(false);
                setError(err.message || 'Something went wrong...');
            }
        }
    };

    const errorHandler = () => {
        setError(null);
    };

    return (
        <>
            <ErrorModal error={error} onClear={errorHandler} />
            <Card className='authentication'>
                {isLoading && <LoadingSpinner asOverlay />}
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
                            errorText='Please enter your name'
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
                    {isLoginMode ? 'SWITCH TO SIGNUP' : 'SWITCH TO LOGIN'}
                </Button>
            </Card>
        </>
    );
};

export default Auth;
