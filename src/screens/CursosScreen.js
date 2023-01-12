import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {useSelector,useDispatch} from "react-redux";
import { addItem,editItem } from '../store/actions/cart.action';
import { loadProduct } from '../store/actions/cart.action';
import { useEffect } from 'react';

const CursosScreen = () => {
  const items = useSelector((state) => state.cart.items);
  const curso=useSelector((state)=>state.cursos.selected);

  const dispatch=useDispatch();
  useEffect(() =>{
    dispatch(loadProduct());
  },[])
  
  const handlerAddItemCart = () => {
    const indexItem = items.findIndex(
      (item) => item.id === curso.id 
    );

    if (indexItem === -1) {
      dispatch(addItem(curso)) 
    }else{    
      dispatch(editItem(items[indexItem],items[indexItem].quantity+1)); 
    }
  }



  return (
    <View style={styles.container}>
      <View style={styles.screen}>
        <Text style={styles.name}>{curso.name}</Text>
        <Text style={styles.desc}>{curso.description}</Text>
        <Text style={styles.price}>{curso.price}</Text>
        <View style={styles.button}>
          <Button title='Agregar al carrito' onPress={handlerAddItemCart}/>
        </View>
      </View>
    </View>
   
    )
}

export default CursosScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:10,
  },
  screen:{
    flex: 0.9,
    justifyContent:"center",
    alignItems:"center",
  },
  title:{
    fontSize:25,
  },
  desc:{
    fontSize:20,
  },
  price:{
    fontSize:40,
  },
  button:{
    marginTop:15,
  }
});