import React, {useState, createContext, useContext } from 'react'
import {Route, Redirect, BrowserRouter} from 'react-router-dom'

export const GuardContext = createContext()

export const GuardProvider = (props) => {
    const [roles, setRoles] = useState([])
    const [permissions, setPermissions] = useState([])
    const [unAuthorizationPath, setUnAuthorizationPath] = useState('' )

    return (
        <GuardContext.Provider value={{roles, setRoles, permissions, setPermissions, unAuthorizationPath, setUnAuthorizationPath}}>
            {props.children}
        </GuardContext.Provider>
    )
}

// export const RouteGuard = ({children, ...rest}) => {
export const RouteGuard = (props) => {
    const {permissions, unAuthorizationPath} = useContext(GuardContext)
    const checkPermission = () => {
        if(permissions.includes(props.can)){
            return true
        } else {
            return false
        }
    }

    return (
        checkPermission() ?
            <Route {...props}/>
            :
            <Redirect to={unAuthorizationPath} />
    )
}

export const HasRole = (role) => {
    const {roles} = useContext(GuardContext)
    if(roles.includes(role)){
        return true
    } else {
        return false
    }
}

export const HasPermission = (permission) => {
    const { permissions } = useContext(GuardContext)
    if(permissions.includes(permission)){
        return true
    } else {
        return false
    }
}
