import React, {useEffect} from "react"
import flow from "lodash/flow"

import {NavigationContainer} from "@react-navigation/native"
import {createStackNavigator} from "@react-navigation/stack"

import Home from "../screens/Home"
import Options from "../screens/Options"
import Themes from "../screens/Themes"
import CurrencyList from "../screens/CurrencyList"

import connect from "./connect"

const OptionsStack = () => {
  const Stack = createStackNavigator()
  return (
    <Stack.Navigator screenOptions={{headerShown: true}}>
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

const App = ({defaultTheme, changeTheme}) => {
  useEffect(() => {
    if (defaultTheme) {
      changeTheme(defaultTheme)
    }
  }, [defaultTheme])

  const Stack = createStackNavigator()
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Options"
          component={OptionsStack}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default flow([connect])(App)
