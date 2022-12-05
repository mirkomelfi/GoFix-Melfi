import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Ionicons from "@expo/vector-icons/Ionicons"

const CartItem = ({item,onDelete}) => {
  return (
    <View style={styles.item}>
        <View style={styles.header}>
            <Text>{item.name} </Text>
        </View>
        <View style={styles.info}>
            <View>
                <Text>Cantidad: {item.quantity}</Text>
                <Text>{item.price} </Text>
            </View>
            <TouchableOpacity onPress={()=>onDelete(item.id) }>
                <Ionicons name='trash' size={24} color="red"/>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default CartItem

const styles = StyleSheet.create({
    item:{
        flex:1,
        padding:8,
        borderBottomWidth:1,
        borderBottomColor:"#ccc"
    },
    header:{
        fontSize:18,
    },
    info:{
        flex:1,
        flexDirection:"row",
        flexWrap:"wrap",
        alignItems:"center",
        justifyContent:"space-between"
    },

})