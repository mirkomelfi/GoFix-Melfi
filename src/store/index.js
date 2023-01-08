import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import CategoryReducer from "./reducers/category.reducer";
import CursoReducer from "./reducers/cursos.reducer";
import CartReducer from "./reducers/cart.reducer";
import OrderReducer from "./reducers/order.reducer";

const RootReducer = combineReducers({
  categories: CategoryReducer,
  cursos: CursoReducer,
  cart: CartReducer,
  orders: OrderReducer,
});

export default createStore(RootReducer, applyMiddleware(thunk));
