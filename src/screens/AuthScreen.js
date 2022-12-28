import {StyleSheet, Text, View ,KeyboardAvoidingView, TextInput,Button} from "react-native";
import React, { useState } from 'react'
import { COLORS } from "../constants/colors";
import { useDispatch } from "react-redux";


const AuthScreen = () => {
    const dispatch=useDispatch();
    const handleSignUp=()=>{
        dispatch(signUp(email,password))
    }
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    return (
        <KeyboardAvoidingView style={styles.screen} behavior="padding" keyboardVerticalOffset={50}>
            <View style={styles.container}>
                <Text style={styles.title}>Tu perro: login</Text>
                <View>
                    <TextInput
                        style={styles.input}
                        id="email"
                        placeholder="email"
                        keyboardType="email_adress"
                        autoCapitalize="none"
                        onChangeText={setEmail}
                        initialValue=""
                    />
                    <TextInput
                        id="password"
                        placeholder="password"
                        keyboardType="default"
                        autoCapitalize="none"
                        onChangeText={setPassword}
                        secureTextEntry
                        minlength={6}
                        initialValue=""
                    />
                </View>
                <View>
                    <Button title="registrarme" color={COLORS.primary} onPress={()=> {handleSignUp}} />
                </View>
            </View>
        </KeyboardAvoidingView>
    )
}

export default AuthScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width:"80%",
        maxWidth:400,
        backgroundColor: '#fff',
        height:"50%",
        padding:12,
    },
    screen: {
        flex:1,
        justifyContent:"center",
        alignItems:"center",
    },
    title: {
        fontSize:14,
        marginBottom:18,
    },
    input: {
        borderWidth:1,
        height:40,
        margin:12,
        padding:10
    }


})
