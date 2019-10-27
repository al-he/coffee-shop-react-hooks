import React, { useReducer } from 'react';
import axios from 'axios';
import { MessageContext } from './message-context';
import { messageReducer } from './message-reducer';
import { _apiUrl } from '../../services';
import {
    POST_TEXT_REQUEST,
    POST_TEXT_SUCCESS,
    POST_TEXT_FAILURE,
} from '../types';

const MessageState = ({ children }) => {
    const initialState = {
        loading: false,
        error: false,
        send: false,
    };

    const [state, dispatch] = useReducer(messageReducer, initialState);

    const sendMessage = async data => {
        sendRequest();
        try {
            await axios.post(`${_apiUrl}message.json`, data);
            dispatch({ type: POST_TEXT_SUCCESS });
        } catch (error) {
            sendFailure();
        }
    };

    const sendRequest = () => dispatch({ type: POST_TEXT_REQUEST });

    const sendFailure = () => dispatch({ type: POST_TEXT_FAILURE });

    const { loading, error, send } = state;

    return (
        <MessageContext.Provider
            value={{
                sendMessage,
                loading,
                error,
                send,
            }}>
            {children}
        </MessageContext.Provider>
    );
};

export default MessageState;
