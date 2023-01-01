import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {useSelector,useDispatch} from "react-redux";
import { addItem } from '../store/actions/cart.action';


const CursosScreen = () => {

  const curso=useSelector((state)=>state.cursos.selected);

  const dispatch=useDispatch();

  const handlerAddItemCart = () => dispatch(addItem(curso));

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