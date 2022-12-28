import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CartItem from '../components/CartItem'
import { TouchableOpacity } from 'react-native'
import { useSelector } from 'react-redux'
import { removeItem } from '../store/actions/cart.action'
import { confirmCart } from '../store/actions/cart.action'
import { useDispatch } from 'react-redux'


const CartScreen = () => {
    const dispatch=useDispatch();
    const items=useSelector(state=>state.cart.items)
    const total=useSelector(state=>state.cart.total)
    const handlerConfirmCart=()=>{
        dispatch(confirmCart(items,total))
    };
    const handlerDeleteItem=(id)=>{
        dispatch(removeItem(id))
    };
    const renderItem=({item})=>{
        return <CartItem item={item} onDelete={handlerDeleteItem} />
    };


  return (
    <View  style={styles.container}>
        <View  style={styles.list}>
            <FlatList 
                data={items}
                keyExtractor={item=>item.id}
                renderItem={renderItem}
            />
        </View>
        <View  style={styles.footer}>
            <TouchableOpacity onPress={handlerConfirmCart}>
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