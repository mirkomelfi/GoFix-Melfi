import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const GridItem = ({item,onSelected}) => {
  return (
    <View style={styles.gridItem}>
        <TouchableOpacity 
            style={{...styles.container,backgroundColor:item.color}}
            onPress={()=>onSelected(item)}
        >
            <View style={styles.container}>
                <Text>{item.title} </Text>
            </View>
        </TouchableOpacity>
    </View>
  )
}

export default GridItem

const styles = StyleSheet.create({
    gridItem:{
        
    },
    container:{

    },

})
