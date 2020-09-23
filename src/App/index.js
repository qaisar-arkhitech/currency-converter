import React, {useContext, useEffect} from "react"

import {NavigationContainer} from "@react-navigation/native"
import {createStackNavigator} from "@react-navigation/stack"

import Home from "../screens/Home"
import Options from "../screens/Options"
import Themes from "../screens/Themes"
import CurrencyList from "../screens/CurrencyList"
import {ThemeContext} from "../ContextUtils/ThemeContext"

const OptionsStack = () => {
  const Stack = createStackNavigator()
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Options" component={Options} />
      <Stack.Screen name="Themes" component={Themes} />
      <Stack.Screen
        name="CurrencyList"
        component={CurrencyList}
        options={{
          title: "Currency List",
        }}
      />
    </Stack.Navigator>
  )
}

const App = () => {
  const {defaultTheme, changeTheme} = useContext(ThemeContext)

  useEffect(() => {
    if (defaultTheme) {
      changeTheme(defaultTheme)
    }
  }, [defaultTheme])

  const Stack = createStackNavigator()
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Options" component={OptionsStack} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
