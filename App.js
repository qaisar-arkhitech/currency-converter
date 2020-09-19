import "react-native-gesture-handler"
import React from "react"
import {NavigationContainer} from "@react-navigation/native"
import {createStackNavigator} from "@react-navigation/stack"

import Home from "./src/screens/Home"
import Options from "./src/screens/Options"
import Themes from "./src/screens/Themes"

function OptionsStack() {
  const Stack = createStackNavigator()
  return (
    <Stack.Navigator screenOptions={{headerShown: true}}>
      <Stack.Screen name="Options" component={Options} />
      <Stack.Screen name="Themes" component={Themes} />
    </Stack.Navigator>
  )
}

export default function App() {
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
