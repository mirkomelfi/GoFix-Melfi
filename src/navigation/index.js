import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";

import BottomTabNavigator from "./BottomTabNavigator";

export default () =>  (
    <NavigationContainer>
      <BottomTabNavigator /> 
    </NavigationContainer>
  );

