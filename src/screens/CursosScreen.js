import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {useSelector} from "react-redux";


const CursosScreen = () => {
  const curso=useSelector((state)=>state.curso.selected)
  return (
    <View>
      <Text>Details</Text>
    </View>
   
    )
}

export default CursosScreen

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