import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import BottomTabNavigator from './src/navigation/BottomTabNavigator';
import { Provider } from 'react-redux';
import store from "./src/store"
import MainNavigator from "./src/navigation"


export default function App() {
  const [fontsLoaded]=useFonts({
    Montserrat: require("./src/assets/fonts/Montserrat-Regular.ttf")
  })
  
  if (!fontsLoaded){return null;}

  return (
      <Provider store={store}>
          <MainNavigator/>
      </Provider>
    );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff675f',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
