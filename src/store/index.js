import CursoReducer from "./reducers/cursos.reducer";
import CategoryReducer from "./reducers/category.reducer";
import {createStore,combineReducers} from "redux";

const RootReducer =combineReducers({
    categories: CategoryReducer,
    cursos:CursoReducer,
})

export default createStore(RootReducer);
