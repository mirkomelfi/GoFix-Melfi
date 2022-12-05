import { Button, FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import GridItem from '../components/GridItem'
import { CATEGORIES } from '../data/categories'

const CategoriesScreen = ({navigation}) => {
  const handlerSelectedCategory = (item)=>{
      navigation.navigate("Cursos",{
        categoryId:item.id,name:item.title,
      });
  }
  const renderGridItem =({item})=>(
    <GridItem item={item} onSelected={handlerSelectedCategory}/>
  )


  return (
    <FlatList
        data={CATEGORIES}
        keyExtractor={(item)=>item.id}
        renderItem={renderGridItem}
        numColumns={2}
        />
  )
}

export default CategoriesScreen

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