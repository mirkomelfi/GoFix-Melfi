import { Text, View } from "react-native";

const OrderItem=({item,onDelete})=>{
    const formatDay =(time)=>{
      const date=new Date(time)
      return date.toLocaleDateString();   
    }
    const sumTotal=(list)=>list.map((item)=>item.quantity*item.price).reduce((a,b)=>a+b,0);
    
    return (
        <View>
            <View>
                <Text>{formatDay(item.date)} </Text>
                <Text>${sumTotal(item.items)} </Text>

            </View>

        </View>
    )
}

export default OrderItem