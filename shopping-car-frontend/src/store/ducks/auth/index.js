import { createAction, createReducer } from "@reduxjs/toolkit";

const INITIAL_STATE = {
    isAuthenticate: true
}

export const login = createAction('LOGIN')
export const logout = createAction('LOGOUT')

export default createReducer(INITIAL_STATE, {
    [login]: (state, action) => ({...state, isAuthenticate: true}),
    [logout]: (state, action) => ({...state, isAuthenticate: false})
})