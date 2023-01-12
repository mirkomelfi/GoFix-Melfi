import { StyleSheet, Text, View, Button, Image,Alert} from "react-native";
import * as ImagePicker from "expo-image-picker"
import { useState } from "react";
import { COLORS } from "../constants/colors";

const ImageSelector=()=>{
    const [pickedUri,setPickedUri]=useState();
    const verifyPermissions=async()=>{
        const {status}=await ImagePicker.requestCameraPermissionsAsync()
        if (status!=="granted"){
            Alert.alert(
                "Permisos insuficientes, se necesita la camara para continuar"
                [{text:"Ok"}]
            )
            return false
        }
        return true
    };
    const handlerTakeImage=async()=>{
        const isCameraOk=await verifyPermissions();
        if (!isCameraOk)return;
        const image=await ImagePicker.launchCameraAsync({
            allowsEditing:true,
            aspect:[16,9],
            quality:0.8
        });
        setPickedUri(image.uri);
        props.onImage(image.uri);
    };
    return (
        <View style={styles.container} >
             <View style={styles.containerImage}>
                {!pickedUri?
                (<Text style={styles.text} >Agregue una foto de su perro para obtener un descuento en la próxima compra (OPCIONAL)</Text>)
                :
                (<Image style={styles.image} source={{uri:pickedUri}}/>
                )}
            </View>
            <Button title="Tomar foto" onPress={handlerTakeImage}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        marginBottom:20
    },
    containerImage:{
        width:"100%",
        height:200,
        marginBottom:10,
        justifyContent:"center",
        alignItems:"center",
        borderColor:COLORS.primary,
        borderWidth:1,
    },
    image:{
        width:"100%",
        height:"100%",
    },
    text:{
        color: "red",
        textAlign:"center",
        fontFamily:"Montserrat"

    },

})


export default ImageSelector