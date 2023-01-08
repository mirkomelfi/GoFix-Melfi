import { URL_API } from "../../constants/database";
import { insertProduct,fetchProduct } from "../../db";

export const ADD_ITEM = "ADD_ITEM";
export const LOAD_ITEM = "LOAD_ITEM";
export const REMOVE_ITEM = "REMOVE_ITEM";
export const CONFIRM_CART = "CONFIRM_CART";
/*
export const addItem = (item) => ({
  type: ADD_ITEM,
  item,

}); ASI ESTABA SIN AGREGAR SQLITE*/

export const addItem = (item) => {    /* INTENTANDO AGREGAR SQLITE*/
  return async (dispatch) => {
    try {
      const result = await insertProduct(item.id,item.category,item.name,item.description,item.price); 
      console.log(result);
      dispatch({
        type:ADD_ITEM,
        item, 
      });
    } catch (err) {
      console.log("hola",err);
    }
  };
};

export const loadProduct = () => {
  return async (dispatch) => {
    try {
      const result = await fetchProduct();
      console.log("loadP",result);
      dispatch({
        type:LOAD_ITEM,
        items:result.rows._array, 
      });
     
    } catch (err) {
      console.log(err);
    }
  };
};

export const removeItem = (itemID) => ({
  type: REMOVE_ITEM,
  itemID,
});

export const confirmCart = (payload, user) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${URL_API}/ordenes.json`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ date: Date.now(), items: { ...payload }, user }),
      });

      const result = await response.json();
      console.log(result);
      dispatch({
        type: CONFIRM_CART,
        confirm: true,
      });

      

    } catch (err) {
      console.log(err);
    }
  };
};
