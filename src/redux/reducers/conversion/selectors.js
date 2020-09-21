import get from "lodash/get"
import {reducerName} from "./actions"

// conversion selectors
export const selectRatesData = (state) =>
  get(state, `${reducerName}.rates.data`)
export const selectRatesLoader = (state) =>
  get(state, `${reducerName}.rates.loader`)
export const selectRatesLoadingError = (state) =>
  get(state, `${reducerName}.rates.loadingError`)
