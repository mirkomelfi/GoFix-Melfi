import AuthNavigation from "./AuthNavigation";
import BottomTabNavigator from "./BottomTabNavigator";
import { NavigationContainer } from "@react-navigation/native";
import { useState } from "react";
import { useSelector } from "react-redux";


export default ()=>{
    const userId=useSelector(state=>state.auth.userId)
    return(
        <NavigationContainer>
            {user?<BottomTabNavigator/>:<AuthNavigation/>}
        </NavigationContainer>
    );
};