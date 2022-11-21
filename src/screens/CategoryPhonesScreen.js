import { StyleSheet, Text, View, Button } from 'react-native';
import React from 'react'

const CategoryPhonesScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>CategoryPhonesScreen</Text>
      <Button style={styles.buton} title="Go to iPhone 13" onPress={()=>navigation.navigate("Iphone13")} />
    </View>
  )
}

export default CategoryPhonesScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    buton: {
        width:200,
        height:100,
        backgroundColor:"green",
    }
  });