import {RATES} from "./actions"

// conversion actions
export function createLoadAction() {
  return {
    type: RATES,
    request: {
      type: "get",
      url: "/latest?base=USD",
    },
  }
}
