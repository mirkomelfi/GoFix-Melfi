import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import ShopNavigator from './ShopNavigator'
import CartNavigation from './CartNavigation'
import Ionicons from "@expo/vector-icons/Ionicons"
import { View } from 'react-native'
import { StyleSheet } from 'react-native'
import { Text } from "react-native";

const BottomTabs=createBottomTabNavigator();

export default BottomTabNavigator=()=> {
  return (
    <NavigationContainer>
        <BottomTabs.Navigator 
            screenOptions={{
                headerShown:false,
                tabBarShowLabel:false,
                tabBarStyle:styles.tabBar}}
                /*no se si esta bien escrito */> 
            <BottomTabs.Screen
                name='ShopTab' component={ShopNavigator} options={{tabBarIcon:({focus})=>(
                    <View style={styles.item}>
                        <Ionicons name='home' size={20} color= "black"/>
                        <Text>Tienda</Text>
                    </View>
                )}}
            
            />
            <BottomTabs.Screen
                name='CartTab' component={CartNavigation} options={{tabBarIcon:({focus})=>(
                    <View style={styles.item}>
                        <Ionicons name='cart' size={20} color= "black" 
        
                        
                        /> 
                        <Text>Carrito</Text>
                    </View>
                )}}
            
            />
        </BottomTabs.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
    tabBar:{
        shadowColor:"#7f5df0",
        shadowOffset:{width:0,height:0},
        shadowOpacity:0.5,
        shadowRadius:0.5,
        elevation:5,
        position:"absolute",
        bottom:25,
        left:20,
        right:20,
        borderRadius:15,
        height:90,
    },
    item:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
    },


})