import { Button, FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import GridItem from '../components/GridItem'
import {useSelector,useDispatch,connect} from "react-redux"
import { selectedCategory } from '../store/actions/category.action'

const CategoriesScreen = ({navigation}) => {
  const dispatch=useDispatch();
  const categories=useSelector((state)=>state.categories.categories);

  const handlerSelectedCategory = (item)=>{
      dispatch(selectedCategory(item.id))
      navigation.navigate("Cursos",{
        categoryId:item.id,name:item.title, //no se si hace falta el categoryId
      });
  }
  const renderGridItem =({item})=>(
    <GridItem item={item} onSelected={handlerSelectedCategory}/>
  )


  return (
    <FlatList
        data={categories}
        keyExtractor={(item)=>item.id}
        renderItem={renderGridItem}
        numColumns={2}
        />
  )
}

export default connect()(CategoriesScreen);

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ff675f',
      alignItems: 'center',
      justifyContent: 'center',
    },
    buton: {
        width:200,
        height:100,
        backgroundColor:"green",
    }
  });