import {CURSOS} from "../../data/cursos"
import { SELECTED_CURSO } from "../actions/curso.action";
import { FILTERED_CURSO } from "../actions/curso.action";


const initialState={
    cursos:CURSOS,
    filteredCurso:[],
    selected:null,
};

const CursoReducer = (state=initialState,action)=>{
    switch(action.type){
        case SELECTED_CURSO:
            return {
                ...state,
                selected:state.cursos.find((curso)=>curso.id===action.cursoId),
            };
        case FILTERED_CURSO:

        console.log(FILTERED_CURSO, state.cursos.filter((curso)=>curso.category===action.categoryId))

            return {
                ...state,
                filteredCursos:state.cursos.filter((curso)=>curso.category===action.categoryId),
            };
        default:
            return state;
    }
}

export default CursoReducer