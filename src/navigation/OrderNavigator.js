import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryCursosScreen from "../screens/CategoryCursosScreen";
import CursosScreen from "../screens/CursosScreen";
import { COLORS } from "../constants/colors";
import { Text } from "react-native";
import OrdersScreen from "../screens/OrdersScreen";

const Stack=createNativeStackNavigator();

export default OrdersScreen = ({route}) =>{
    return(
        <Stack.Navigator
        initialRouteName="Orders"
        screenOptions={{
            headerStyle:{backgroundColor:COLORS.primary},
            headerTintColor:COLORS.secondary,
            headerTitleStyle:{fontWeight:"bold",},
        }}>
            <Stack.Screen 
                name="Orders" 
                component={OrdersScreen}
                options={{title:"Ordenes"}}
            />

        </Stack.Navigator>


    );
};