import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CategoriesScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Categories Screen</Text>
      <Button style={styles.buton} title="Go to Phones" onPress={()=>navigation.navigate("Phones")} />
    </View>
  )
}

export default CategoriesScreen

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