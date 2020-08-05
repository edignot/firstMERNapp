import React, { useReducer, useEffect } from 'react';
import { validate } from '../util/validators';
import './Input.css';

const inputReducer = (state, action) => {
    switch (action.type) {
        case 'CHANGE':
            return {
                ...state,
                value: action.value,
                isValid: validate(action.value, action.validators),
            };
        case 'TOUCH':
            return {
                ...state,
                isTouched: true,
            };
        default:
            return state;
    }
};

const Input = (props) => {
    const {
        element,
        id,
        type,
        placeholder,
        label,
        rows,
        errorText,
        validators,
        onInput,
    } = props;

    const [inputState, dispatch] = useReducer(inputReducer, {
        value: '',
        inValid: false,
        isTouched: false,
    });

    useEffect(() => {
        onInput(id, inputState.value, inputState.isValid);
    }, [id, inputState.value, inputState.isValid, onInput]);

    const changeHandler = (e) => {
        dispatch({
            type: 'CHANGE',
            value: e.target.value,
            validators: validators,
        });
    };

    const touchHandler = () => {
        dispatch({
            type: 'TOUCH',
        });
    };

    const tag =
        element === 'input' ? (
            <input
                id={id}
                type={type}
                placeholder={placeholder}
                onChange={changeHandler}
                onBlur={touchHandler}
                value={inputState.value}
            />
        ) : (
            <textarea
                id={id}
                rows={rows || 3}
                onChange={changeHandler}
                onBlur={touchHandler}
                value={inputState.value}
            />
        );

    return (
        <div
            className={`form-control ${
                !inputState.isValid &&
                inputState.isTouched &&
                'form-control--invalid'
            }`}
        >
            <label htmlFor={id}>{label}</label>
            {tag}
            {!inputState.isValid && inputState.isTouched && <p>{errorText}</p>}
        </div>
    );
};

export default Input;
