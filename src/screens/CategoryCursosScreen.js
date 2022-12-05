import { StyleSheet, Text, View, Button } from 'react-native';
import React from 'react'
import { CURSOS } from '../data/cursos';
import CursoItem from '../components/CursoItem';
import { FlatList } from 'react-native';

const CategoryPhonesScreen = ({navigation,route}) => {
  const cursos=CURSOS.filter((curso)=>curso.category===route.params.categoryId);

  const handlerSelectedCategory = (item)=>{
    navigation.navigate("Details",{
      productId:item.id,name:item.name,
    });
  }
  const renderCursoItem =({item})=>(
    <CursoItem item={item} onSelected={handlerSelectedCategory}/>
  )


  return (
    <FlatList
        data={cursos}
        keyExtractor={(item)=>item.id}
        renderItem={renderCursoItem}
        />
  )
}

export default CategoryPhonesScreen

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