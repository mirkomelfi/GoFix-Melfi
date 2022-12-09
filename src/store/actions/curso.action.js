export const SELECTED_CURSO="SELEC_CURSO";
export const FILTERED_CURSO="FILTERED_CURSO"

export const selectCurso=(id)=>({
    type: SELECTED_CURSO,
    cursoId:id,
});

export const filteredCurso=(id)=>({
    type: FILTERED_CURSO,
    categoryId:id,
});
