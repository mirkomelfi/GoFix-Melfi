import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Iphone13Screen = () => {
  return (
    <View style={styles.container}>
      <Text>Iphone13</Text>
    </View>
  )
}

export default Iphone13Screen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});