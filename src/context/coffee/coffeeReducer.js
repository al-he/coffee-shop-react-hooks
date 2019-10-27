import {
    FETCH_COFFEE_REQUEST,
    FETCH_COFFEE_SUCCESS,
    FETCH_COFFEE_FAILURE,
    PRODUCTS_FILTERING,
    PRODUCTS_SEARCH,
} from '../types';

export const coffeeReducer = (state, action) => {
    switch (action.type) {
        case FETCH_COFFEE_REQUEST:
            return {
                ...state,
                loading: true,
                filter: [],
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
        case PRODUCTS_FILTERING:
            const filter = [...state.coffee].filter(
                item => item.country.toLowerCase() === action.payload
            );
            return {
                ...state,
                filter,
            };
        case PRODUCTS_SEARCH:
            const search = [...state.coffee].filter(
                item => ~item.name.toLowerCase().indexOf(action.payload)
            );
            return {
                ...state,
                filter: [...search],
            };
        default:
            return state;
    }
};
