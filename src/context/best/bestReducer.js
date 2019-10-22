import {
    FETCH_BEST_REQUEST,
    FETCH_BEST_SUCCESS,
    FETCH_BEST_FAILURE,
} from '../types';

export const bestReducer = (state, action) => {
    switch (action.type) {
        case FETCH_BEST_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case FETCH_BEST_SUCCESS:
            return {
                ...state,
                bestsellers: action.payload,
                loading: false,
            };

        case FETCH_BEST_FAILURE:
            return {
                ...state,
                error: true,
            };

        default:
            return state;
    }
};
