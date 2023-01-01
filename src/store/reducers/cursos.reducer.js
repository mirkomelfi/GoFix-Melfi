import {CURSOS} from "../../data/cursos"
import { SELECTED_CURSO } from "../actions/curso.action";
import { FILTERED_CURSO } from "../actions/curso.action";


const initialState={
    cursos:CURSOS,
    filteredCurso:[],
    selected:null,
};

const CursoReducer = (state=initialState,action)=>{
    switch (action.type) {
        case SELECTED_CURSO:
          return {
            ...state,
            selected: state.cursos.find((curso) => curso.id === action.cursoID),
          };
        case FILTERED_CURSO:
          return {
            ...state,
            filteredCurso: state.cursos.filter(
              (curso) => curso.category === action.categoryID
            ),
          };
        default:
          return state;
      }
    };

export default CursoReducer