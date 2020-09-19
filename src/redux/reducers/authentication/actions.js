import {createActionName} from "../../utility"

export const reducerName = "authentication"

// Actions
export const SET_REDIRECT = createActionName(reducerName, "SET_REDIRECT")
export const LOGIN = createActionName(reducerName, "LOGIN")
export const LOGOUT = createActionName(reducerName, "LOGOUT")
