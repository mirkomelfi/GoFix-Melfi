import AuthNavigation from "./AuthNavigation";
import BottomTabNavigator from "./BottomTabNavigator";
import { NavigationContainer } from "@react-navigation/native";
import { useState } from "react";

export default ()=>{
    const [user,setUser]=useState(null)
    return(
        <NavigationContainer>
            {user?<BottomTabNavigator/>:<AuthNavigation/>}
        </NavigationContainer>
    );
};