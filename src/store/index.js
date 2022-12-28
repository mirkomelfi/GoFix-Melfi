import CursoReducer from "./reducers/cursos.reducer";
import CategoryReducer from "./reducers/category.reducer";
import CartReducer from "./reducers/cart.reducer";
import {createStore,combineReducers} from "redux";
import thunk from "redux-thunk";
import { applyMiddleware } from "redux";
import OrderReducer from "./reducers/order.reducer";

const RootReducer =combineReducers({
    categories: CategoryReducer,
    cursos:CursoReducer,
    cart:CartReducer,
    orders:OrderReducer
})

export default createStore(RootReducer);
/*

/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

*/