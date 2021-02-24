// import {useEffect} from "react";
import './App.css';
import Router from "./route/route";
import {HasRole, HasPermission} from './RolePermissionGuard/index'
// import {guardStore} from './RolePermissionGuard/index'
function App() {
    return (
        <div className="App">
            {
                HasRole('admin') ?
                    <Router />
                    :
                    'No rule found'
            }
        </div>
    );
}

export default App;
