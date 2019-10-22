import {
    FETCH_COFFEE_REQUEST,
    FETCH_COFFEE_SUCCESS,
    FETCH_COFFEE_FAILURE,
} from '../types';

export const coffeeReducer = (state, action) => {
    switch (action.type) {
        case FETCH_COFFEE_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case FETCH_COFFEE_SUCCESS:
            return {
                ...state,
                coffee: action.payload,
                loading: false,
            };

        case FETCH_COFFEE_FAILURE:
            return {
                ...state,
                error: true,
            };

        default:
            return state;
    }
};
