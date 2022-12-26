import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { CART } from '../data/cart'
import CartItem from '../components/CartItem'
import { TouchableOpacity } from 'react-native'

const CartScreen = () => {
    const total=50000;
    const handlerConfirmCart=()=>{
        console.log("handlerConfirmCart")
    };
    const handlerDeleteItem=()=>{
        console.log("handlerDeleteItem")
    };
    const renderItem=({item})=>{
        return <CartItem item={item} onDelete={handlerDeleteItem} />
    };


  return (
    <View  style={styles.container}>
        <View  style={styles.list}>
            <FlatList 
                data={CART}
                keyExtractor={item=>item.id}
                renderItem={renderItem}
            />
        </View>
        <View  style={styles.footer}>
            <TouchableOpacity>
               <Text style={styles.confirm}>Confirmar</Text>
               <View style={styles.total}>
                    <Text  style={styles.text}>Total</Text>
                    <Text  style={styles.text}>{total} </Text>

               </View>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default CartScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:16,
        backgroundColor: "#fff",
        paddingBottom:120
    },
    list:{
        flex:1
    },
    footer:{
        padding:12,
        borderTopColor:"#ccc",
        borderTopWidth:1,
    },
    confirm:{
        backgroundColor:"#ccc",
        borderRadius:10,
        padding:10,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between"
    },
    total:{
        flexDirection:"row"
    },
    text:{
        padding:8,
        fontSize:18,
    }

})