import React, { useEffect } from "react";
import { FlatList } from "react-native";
import CursoItem from "../components/CursoItem";
import { CURSOS } from "../data/cursos";

import { useSelector, useDispatch, connect } from "react-redux";
import { filteredCurso,selectCurso } from "../store/actions/curso.action";

const CategoryCursoScreen = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const categoryCursos = useSelector((state) => state.cursos.filteredCurso);
  const category = useSelector((state) => state.categories.selected);

  useEffect(() => {
    dispatch(filteredCurso(category.id));
  }, []);
  
  const handleSelectedCategory = (item) => {
    dispatch(selectCurso(item.id));
    navigation.navigate("Details", {
      name: item.name,
    });
  };
  
  /* const cursos = CURSOS.filter(
    (curso) => curso.category === route.params.categoryID
  ); */

  const renderCursoItem = ({ item }) => (
    <CursoItem item={item} onSelected={handleSelectedCategory} />
  );

  return (
    <FlatList
      data={categoryCursos}
      keyExtractor={(item) => item.id}
      renderItem={renderCursoItem}
    />
  );
};

export default connect()(CategoryCursoScreen);
