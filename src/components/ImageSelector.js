import { StyleSheet, Text, View, Button, Image,Alert} from "react-native";
import * as ImagePicker from "expo-image-picker"
//import * as Permissions from "expo-permissions"
import { useState } from "react";

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
        <View>
             <View>
                {!pickedUri?
                (<Text>No hay imagen seleccionada</Text>)
                :
                (<Image source={{uri:pickedUri}}/>
                )}
            </View>
            <Button title="Tomar foto" onPress={handlerTakeImage}/>
        </View>
    )


}
export default ImageSelector