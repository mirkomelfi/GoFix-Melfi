import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import foto1 from "../assets/iphone13.jpg"


const Iphone13Screen = () => {
  const fotooo=foto1;
  return (
    <View style={styles.container}>
      <Text>Iphone13</Text>
      <Image  style={styles.foto} source={foto1}/>
    </View>
  )
}

export default Iphone13Screen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff675f',
    alignItems: 'center',
    justifyContent: 'center',
  },
  foto:{
    margin:20,
  }
});