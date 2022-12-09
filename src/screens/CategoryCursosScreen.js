import { StyleSheet, Text, View, Button } from 'react-native';
import React from 'react'
import CursoItem from '../components/CursoItem';
import { FlatList } from 'react-native';
import {useSelector,useDispatch,connect} from "react-redux"
import { useEffect } from 'react';
import { selectCurso, filteredCurso } from '../store/actions/curso.action';

const CategoryPhonesScreen = ({navigation,route}) => {
  const dispatch=useDispatch();
  const categoryCursos=useSelector((state)=>state.cursos.filteredCursos);
  const category=useSelector((state)=>state.categories.selected);


  useEffect(()=>{
    dispatch(filteredCurso(category.id))
  },[]);

  const handlerSelectedCategory = (item)=>{
    dispatch(selectCurso(item.id))
    navigation.navigate("Details",{
        name:item.name,
    });
  }
  const renderCursoItem =({item})=>(
    <CursoItem item={item} onSelected={handlerSelectedCategory}/>
  )


  return (
    <FlatList
        data={categoryCursos}
        keyExtractor={(item)=>item.id}
        renderItem={renderCursoItem}
        />
  )
}

export default connect()(CategoryPhonesScreen);

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