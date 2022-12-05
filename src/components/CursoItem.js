import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const CursoItem = ({item,onSelected}) => {
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

export default CursoItem

const styles = StyleSheet.create({
    container:{
        padding:20,
        margin:10,
        borderRadius:5,
        backgroundColor:"#ccc"
    },
    title:{
        fontSize:20
    },
    info:{
        fontSize:18
    },


})