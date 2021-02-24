import React from 'react'
import {Route, Redirect, useHistory } from 'react-router-dom'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import logger from "redux-logger";

const initialState = {
    roles: ['admin','test'],
    permissions: ['dashboard','login','logout'],
    unAuthorizationPath: 'back'
}

export const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_PERMISSION':
            return {
                ...state,
                permissions:action.payload
            };
        case 'SET_ROLE':
            return {
                ...state,
                roles:action.payload
            };
        case 'SET_UN_AUTH_ROUTE':
            return {
                ...state,
                unAuthorizationPath:action.payload
            };
        default:
            return state;
    }
}

export const guardStore =
    process.env.NODE_ENV === "development"
        ? createStore(mainReducer,applyMiddleware(logger, thunk))
        : createStore(mainReducer,applyMiddleware(thunk));

export const SET_PERMISSION = (data) => ({
    type: 'SET_PERMISSION',
    payload: data
});
export const SET_ROLE = (data) => ({
    type: 'SET_ROLE',
    payload: data
});
export const SET_UN_AUTH_ROUTE = (data) => ({
    type: 'SET_UN_AUTH_ROUTE',
    payload: data
});

const state = guardStore.getState()

export const Guard = (props) => {
    let history = useHistory()
    const checkPermission = () => {
        if(state.permissions.includes(props.can)){
            return true
        } else {
            return false
        }
    }

    return (
        checkPermission() ?
            <Route {...props}/>
            :
            state.unAuthorizationPath && !state.unAuthorizationPath === 'back' ?
                <Redirect to={state.unAuthorizationPath} />
                :
                history.goBack()
    )
}

export const HasRole = (role) => {
    if(state.roles.includes(role)){
        return true
    } else {
        return false
    }
}

export const HasPermission = (permission) => {
    if(state.permissions.includes(permission)){
        return true
    } else {
        return false
    }
}
