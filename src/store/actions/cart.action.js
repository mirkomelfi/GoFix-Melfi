import { URL_API } from "../../constants/database";
import { insertProduct,fetchProduct,deleteProducts,deleteProduct,editProduct } from "../../db";

export const ADD_ITEM = "ADD_ITEM";
export const LOAD_ITEM = "LOAD_ITEM";
export const EDIT_ITEM = "EDIT_ITEM";
export const REMOVE_ITEM = "REMOVE_ITEM";
export const CONFIRM_CART = "CONFIRM_CART";

export const addItem = (item) => {    
  return async (dispatch) => {
    try {
      const result = await insertProduct(item.id,item.category,item.name,item.description,item.price,1); 
      console.log(result);
      dispatch({
        type:ADD_ITEM,
        item, 
      });
    } catch (err) {
      console.log("add",err);
    }
  };
};

export const editItem = (item) => {    
  return async (dispatch) => {
    try {
      console.log(item)
      console.log(item.id)
      console.log(item.category)
      console.log(item.name)
      console.log(item.description)
      console.log(item.price)
      console.log(item.quantity)

      const result = await editProduct(item.id,item.category,item.name,item.description,item.price,item.quantity); 
      console.log(result);
      dispatch({
        type:EDIT_ITEM,
        item, 
      });
    } catch (err) {
      console.log("edit",err);
    }
  };
};


export const loadProduct = () => {
  return async (dispatch) => {
    try {
      const result = await fetchProduct();
      console.log(result)
      dispatch({
        type:LOAD_ITEM,
        items:result.rows._array, 
      });
     
    } catch (err) {
      console.log(err);
    }
  };
};

export const removeItem = (itemID) => {
  return async (dispatch) => {
    try {
      const result = await deleteProduct(itemID); 
      console.log(result);
      dispatch({
        type:REMOVE_ITEM,
        itemID, 
      });
    } catch (err) {
      console.log("remove",err);
    }
  };
};

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
      const resultSQL = await deleteProducts(); 
      console.log(resultSQL);
    } catch (err) {
      console.log(err);
    }
  };
};
