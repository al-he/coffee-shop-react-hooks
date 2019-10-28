import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import { BrowserRouter as Router } from 'react-router-dom';
import BestState from './context/best/BestState';
import CoffeeState from './context/coffee/CoffeeState';
import MessageState from './context/message/message-state';
import ErrorBoundary from './components/hoc';

import './assets/sass/style.sass';

ReactDOM.render(
    <MessageState>
        <CoffeeState>
            <BestState>
                <ErrorBoundary>
                    <Router>
                        <App />
                    </Router>
                </ErrorBoundary>
            </BestState>
        </CoffeeState>
    </MessageState>,
    document.getElementById('root')
);
