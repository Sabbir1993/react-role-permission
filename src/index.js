import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {GuardProvider} from 'react-role-permission'
// import {GuardProvider} from './RolePermissionGuard/index'

ReactDOM.render(
    <React.StrictMode>
        <GuardProvider>
            <App />
        </GuardProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
