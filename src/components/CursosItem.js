import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const CursosItem = ({item,onSelected}) => {
  return (
    <TouchableOpacity
        onPress={()=>onSelected(item)}
    >
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>{item.name} </Text>
            </View>
            <View>
                <Text style={styles.info}>{item.price} </Text>
                <Text style={styles.info}>{item.description} </Text>
            </View>
        </View>
    </TouchableOpacity>
  )
}

export default CursosItem

const styles = StyleSheet.create({
    container:{
        
    },
    title:{
        
    },
    info:{
        
    },


})