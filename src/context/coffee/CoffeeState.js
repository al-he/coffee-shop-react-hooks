import React, { useReducer } from 'react';
import axios from 'axios';
import { CoffeeContext } from './coffeeContext';
import { coffeeReducer } from './coffeeReducer';
import { _apiUrl } from '../../services';
import {
    FETCH_COFFEE_REQUEST,
    FETCH_COFFEE_SUCCESS,
    FETCH_COFFEE_FAILURE,
    PRODUCTS_FILTERING,
    PRODUCTS_SEARCH,
} from '../types';

const CoffeeState = ({ children }) => {
    const initialState = {
        coffee: [],
        loading: false,
        error: false,
        filter: [],
    };

    const [state, dispatch] = useReducer(coffeeReducer, initialState);

    const getCoffee = async url => {
        fetchCoffeeRequest();
        try {
            const response = await axios.get(`${_apiUrl}${url}.json`);
            dispatch({ type: FETCH_COFFEE_SUCCESS, payload: response.data });
        } catch (error) {
            fetchCoffeeFailure();
        }
    };

    const clickFilter = text => {
        dispatch({ type: PRODUCTS_FILTERING, payload: text });
    };

    const changeInput = text => {
        dispatch({ type: PRODUCTS_SEARCH, payload: text });
    };

    const fetchCoffeeRequest = () => dispatch({ type: FETCH_COFFEE_REQUEST });

    const fetchCoffeeFailure = () => dispatch({ type: FETCH_COFFEE_FAILURE });

    const { coffee, loading, error, filter } = state;

    return (
        <CoffeeContext.Provider
            value={{
                coffee,
                loading,
                error,
                getCoffee,
                clickFilter,
                filter,
                changeInput,
            }}>
            {children}
        </CoffeeContext.Provider>
    );
};

export default CoffeeState;
