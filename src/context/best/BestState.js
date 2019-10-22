import React, { useReducer } from 'react';
import axios from 'axios';
import { BestContext } from './bestContext';
import { bestReducer } from './bestReducer';
import { _apiUrl } from '../../services';
import {
    FETCH_BEST_REQUEST,
    FETCH_BEST_SUCCESS,
    FETCH_BEST_FAILURE,
} from '../types';

const BestState = ({ children }) => {
    const initialState = {
        bestsellers: [],
        loading: false,
        error: false,
    };

    const [state, dispatch] = useReducer(bestReducer, initialState);

    const getBest = async () => {
        fetchBestRequest();
        try {
            const response = await axios.get(`${_apiUrl}bestsellers.json`);
            dispatch({ type: FETCH_BEST_SUCCESS, payload: response.data });
        } catch (error) {
            fetchBestFailure();
        }
    };

    const fetchBestRequest = () => dispatch({ type: FETCH_BEST_REQUEST });

    const fetchBestFailure = () => dispatch({ type: FETCH_BEST_FAILURE });

    const { bestsellers, loading, error } = state;

    return (
        <BestContext.Provider
            value={{
                bestsellers,
                loading,
                error,
                getBest,
            }}>
            {children}
        </BestContext.Provider>
    );
};

export default BestState;
