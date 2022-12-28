import { connect,useDispatch ,useSelector } from "react-redux";
import { FlatList, View } from "react-native";
import { useEffect } from "react";
import { getOrders } from "../store/actions/order.action";
import OrderItem from "../components/OrderItem";

const OrdersScreen=()=>{
    const dispatch=useDispatch();
    const orders=useSelector((state)=>state.orders.list);
    useEffect(()=>{
        dispatch(getOrders());
    },[]);

    
    const handleDeleteItem=()=>{
        console.log("je")
    }

    const renderItems=({item})=>(
        <OrderItem item={item} onDelete={handleDeleteItem}/>)
    
    return (
        <View>
            <FlatList
                data={orders}
                keyExtractor={(item)=>item.id.toString()}
                renderItem={renderItems}
            />
        </View>
    )

}

export default connect()(OrdersScreen)