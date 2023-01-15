import React, { useEffect } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import CartItem from "../components/CartItem";
import { useSelector, useDispatch } from "react-redux";
import { removeItem, confirmCart } from "../store/actions/cart.action";
import ImageSelector from "../components/ImageSelector";
import { loadProduct } from "../store/actions/cart.action";

const CartScreen = () => {

  const dispatch = useDispatch();

  useEffect(() =>{
    dispatch(loadProduct());
  },[])

  const items = useSelector((state) => state.cart.items);
  let total = useSelector((state) => state.cart.total);

  const sumTotal = (list) => list.map((item) => item.quantity * item.price).reduce((a, b) => a + b, 0)
  total=(sumTotal(items))

  const handleConfirmCart = () => {
    if (total!==0){
      dispatch(confirmCart(items, total));
    }
    
  };

  const handleDeleteItem = (id) => {
    dispatch(removeItem(id));
  };

  const renderItem = ({ item }) => (
    <CartItem item={item} onDelete={handleDeleteItem} />
  );

  return (
    <View style={styles.container}>
      <View style={styles.list}>
        <FlatList
          data={items}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
        />
        <View >
          <ImageSelector onImage={(image)=>console.log(image)} />
        </View>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.confirm} onPress={handleConfirmCart}>
          <Text>Confirmar</Text>
          <View style={styles.total}>
            <Text style={styles.text}>Total</Text>
            <Text style={styles.text}>{total}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    backgroundColor: "#fff",
    paddingBottom: 120,
  },
  list: {
    flex: 1,
  },
  footer: {
    padding: 12,
    borderTopColor: "#ccc",
    borderTopWidth: 1,
  },
  confirm: {
    backgroundColor: "#ccc",
    borderRadius: 10,
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  total: {
    flexDirection: "row",
  },
  text: {
    fontSize: 18,
    padding: 8,
  },
});
