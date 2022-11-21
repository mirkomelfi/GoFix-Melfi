import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryPhonesScreen from "../screens/CategoryPhonesScreen";
import Iphone13Screen from "../screens/Iphone13Screen";

const Stack=createNativeStackNavigator();

export default ShopNavigator = () =>{
    return(

        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Categories" component={CategoriesScreen} />
                <Stack.Screen name="Phones" component={CategoryPhonesScreen} />
                <Stack.Screen name="Iphone13" component={Iphone13Screen} />
            </Stack.Navigator>
        </NavigationContainer>

    );
};