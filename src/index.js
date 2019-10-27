import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import { BrowserRouter as Router } from 'react-router-dom';
import BestState from './context/best/BestState';
import CoffeeState from './context/coffee/CoffeeState';
import MessageState from './context/message/message-state';

import './assets/sass/style.sass';

ReactDOM.render(
    <MessageState>
        <CoffeeState>
            <BestState>
                <Router>
                    <App />
                </Router>
            </BestState>
        </CoffeeState>
    </MessageState>,
    document.getElementById('root')
);
