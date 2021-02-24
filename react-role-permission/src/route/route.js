import React from 'react'
import { Switch, BrowserRouter } from 'react-router-dom';
import {Guard} from '../RolePermissionGuard/index'
import Login from "../Components/Login";
import Dashboard from "../Components/Dashboard";
export default function Router(){
    return (
        <BrowserRouter>
            <Switch>
                <Guard exact path="/" can={'dashboards'} component={Dashboard} />
                <Guard exact path="/login" can={'login'} component={Login}/>
            </Switch>
        </BrowserRouter>
    )
}
