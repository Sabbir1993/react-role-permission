import React, {useEffect, useContext} from "react";
import './App.css';
import {RouteGuard, HasRole, HasPermission, GuardContext} from 'react-role-permission'
// import { RouteGuard, HasRole, HasPermission, GuardContext} from './RolePermissionGuard/index'
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Dashboard from "./Components/Dashboard";
import Login from "./Components/Login";
import Default from "./Components/Default";

function App() {
    const{setRoles, setPermissions, setUnAuthorizationPath} = useContext(GuardContext)
    useEffect(() => {
        setRoles(['admin'])
        setPermissions(['dashboard','login'])
    },[])
    return (
        <div className="App">
            {
                HasRole('admin')?
                    'admin ':
                    'not admin '
            }
            <br/>
            {
                HasPermission('dashboard')?
                    'dashboard ':
                    'not dashboard '
            }
            <br/>
            <BrowserRouter>
                <Switch>
                    <RouteGuard exact path="/dashboard" can={'dashboard'} component={Dashboard}/>
                    <RouteGuard exact path="/login" can={'login'} component={Login} />
                    <Route path="*" component={Default}/>
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
