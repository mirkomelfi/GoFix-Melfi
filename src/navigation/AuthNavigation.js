import AuthScreen from "../screens/AuthScreen";
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { COLORS } from '../constants/colors';



const Stack=createNativeStackNavigator();
export default  CartNavigation=()=> {
  return (

        <Stack.Navigator
         initialRouteName='Login'
         screenOptions={{
            headerStyle:{backgroundColor:COLORS.primary},
            headerTintColor:COLORS.secondary,
            headerTitleStyle:{fontWeight:"bold",},
        }}
        >
            <Stack.Screen name="Login" component={AuthScreen} />

        </Stack.Navigator>

  )
}
