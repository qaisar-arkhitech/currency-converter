import {LOGIN, LOGOUT, SET_REDIRECT} from "./actions"
import {selectAuthToken} from "./selectors"

// Action creators
export function createRedirectUrlAction(url) {
  return {type: SET_REDIRECT, payload: url}
}

export function createLoginAction(authentication) {
  return {type: LOGIN, payload: authentication}
}

export function login() {
  return {
    type: LOGIN,
    request: {
      method: "get",
      url: "/public-api/users/1234",
    },
  }
}

export function logout() {
  return (dispatch, state) => {
    const currentToken = selectAuthToken(state())
    return dispatch({
      type: LOGOUT,
      request: {
        method: "delete",
        url: "account/logout",
        data: {
          authentication_token: currentToken,
        },
      },
    })
  }
}
