import { useEffect } from "react";
import { ADD_ITEM } from "../actions/cart.action";
import { REMOVE_ITEM } from "../actions/cart.action";
import { CONFIRM_CART } from "../actions/cart.action";
import { LOAD_ITEM } from "../actions/cart.action";
import { EDIT_ITEM } from "../actions/cart.action";

const initialState = {
    items: [],
    total: 0,
  };
  

  const sumTotal = (list) =>
    list.map((item) => item.quantity * item.price).reduce((a, b) => a + b, 0);
  
  const CartReducer = (state = initialState, action) => {

    switch (action.type) {
      case REMOVE_ITEM:
        const cleanCart = [...state.items].filter(
          (item) => item.id !== action.itemID
        );
        return { ...state, items: cleanCart, total: sumTotal(cleanCart) };
    /*case ADD_ITEM:
      const indexItem = state.items.findIndex(
        (item) => item.id === action.item.id
      );
      if (indexItem === -1) {
        const item = { ...action.item, quantity: 1 };
        const updateCart = [...state.items, item];
        console.log(updateCart);
        return { ...state, items: updateCart, total: sumTotal(updateCart) };
      }
      const items = [...state.items].map((item) => {
        if (item.id === action.item.id) item.quantity++;

        return item;
      });
      return { ...state, items, total: sumTotal(items) }; 
      asi era sin el EDIT ITEM. funcionaba todo ok pero al recargar la app, no me renderizaba con la cantidad correcta. 
      es decir un producto con 3 unidades, me aparecia como si fueran 3 distintos de solo 1 unidada
      */
      case ADD_ITEM:
        const item = { ...action.item, quantity: 1 };
        const updateCart = [...state.items, item];
        console.log(updateCart);
        return { ...state, items: updateCart, total: sumTotal(updateCart) };
          
      case EDIT_ITEM: 
        const items = [...state.items].map((item) => {
          if (item.id === action.item.id) item.quantity++;
          return item;
        });
        return { ...state, items, total: sumTotal(items) };
      case LOAD_ITEM:
        return { ...state, items:action.items };  
      case CONFIRM_CART:
        return { ...state, items: [], total: 0 };
      default:
        return state;
    }
  };

export default CartReducer