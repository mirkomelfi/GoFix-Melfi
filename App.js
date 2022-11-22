import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import ShopNavigator from './src/navigation/ShopNavigator';

export default function App() {
  const [fontsLoaded]=useFonts({
    Montserrat: require("./src/assets/fonts/Montserrat-Regular.ttf")
  })
  
  if (!fontsLoaded){return null;}

  return <ShopNavigator style={styles.container}/>;

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff675f',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
