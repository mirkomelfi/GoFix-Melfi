import CursoReducer from "./reducers/cursos.reducer";
import CategoryReducer from "./reducers/category.reducer";
import {createStore,combineReducers} from "redux";

const RootReducer =combineReducers({
    categories: CategoryReducer,
    cursos:CursoReducer,
})

export default createStore(RootReducer);
/*

/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

*/