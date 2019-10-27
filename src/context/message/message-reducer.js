import {
    POST_TEXT_REQUEST,
    POST_TEXT_SUCCESS,
    POST_TEXT_FAILURE,
} from '../types';

export const messageReducer = (state, action) => {
    switch (action.type) {
        case POST_TEXT_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case POST_TEXT_SUCCESS:
            return {
                ...state,
                error: false,
                loading: false,
                send: true,
            };

        case POST_TEXT_FAILURE:
            return {
                ...state,
                error: true,
            };
        default:
            return state;
    }
};
