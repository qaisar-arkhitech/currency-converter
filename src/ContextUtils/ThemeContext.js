import React, {createContext} from "react"
import flow from "lodash/flow"

import connect from "./connect"

export const ThemeContext = createContext()

export const ThemeContextProvider = ({children, styleableTheme}) => (
  <ThemeContext.Provider value={{styleableTheme}}>
    {children}
  </ThemeContext.Provider>
)

export default flow([connect])(ThemeContextProvider)
