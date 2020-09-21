import { createReducer } from "../../utility"
import { RATES } from "./actions"
import { ERROR, LOADED, LOADING } from "../../middleware/actions"

// conversion initial state
export const initialState = {
  rates: {
    data: null,
    loader: false,
    loadingError: null,
  },
}

// conversion Reducer
const reducers = {
  [RATES + LOADING](state) {
    return {
      ...state,
      rates: {
        ...state.rates,
        data: null,
        loadingError: null,
        loader: true,
      },
    }
  },

  [RATES + LOADED](state, payload) {
    return {
      ...state,
      rates: {
        ...state.rates,
        data: payload?.result,
        loader: false,
      },
    }
  },

  [RATES + ERROR](state, payload) {
    return {
      ...state,
      rates: {
        ...state.rates,
        data: null,
        loader: false,
        loadingError: payload?.result,
      },
    }
  },
}

export default createReducer(reducers, initialState)
