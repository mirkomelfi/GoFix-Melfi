import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryCursosScreen from "../screens/CategoryCursosScreen";
import CursosScreen from "../screens/CursosScreen";
import { COLORS } from "../constants/colors";
import { Text } from "react-native";

const Stack=createNativeStackNavigator();

export default ShopNavigator = ({route}) =>{
    return(


            <Stack.Navigator
            initialRouteName="Categories"
            screenOptions={{
                headerStyle:{backgroundColor:COLORS.primary},
                headerTintColor:COLORS.secondary,
                headerTitleStyle:{fontWeight:"bold",},
            }}>
                <Stack.Screen 
                    name="Categories" 
                    component={CategoriesScreen}
                    options={{title:"Escuela Adiestramiento"}}
                />
                <Stack.Screen 
                    name="Cursos" 
                    component={CategoryCursosScreen}
                    options={({route})=>({title:route.params.name})} // anda hasta q toco go y cambio de screen 
                />
                <Stack.Screen 
                    name="Details" 
                    component={CursosScreen}
                    options={({route})=>({title:route.params.name})}
                />
            </Stack.Navigator>


    );
};