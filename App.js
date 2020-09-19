import "react-native-gesture-handler"
import React from "react"
import {NavigationContainer} from "@react-navigation/native"
import {createStackNavigator} from "@react-navigation/stack"

import Home from "./src/screens/Home"
import Options from "./src/screens/Options"

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Options" component={Options} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
