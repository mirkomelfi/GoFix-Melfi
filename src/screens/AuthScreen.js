import {StyleSheet, Text, View ,KeyboardAvoidingView, TextInput,Button, Alert} from "react-native";
import React, { useCallback, useEffect, useReducer, useState } from 'react'
import { COLORS } from "../constants/colors";
import { useDispatch } from "react-redux";
import Input from "../components/Input";
import { signUp } from "../store/actions/auth.actions";

const FORM_INPUT_UPDATE="FORM_INPUT_UPDATE"
const formReducer= (state,action) => {
    if (action.type===FORM_INPUT_UPDATE){
        const updateValues={
            ...state.inputValues,
            [action.input]:action.isValid
        };
        const updatedValidities={
            ...state.inputValidities,
            [action.input]:action.isValid
        };
        let updatedFormIsValid=true
        for (const key in updatedValidities){
            updatedFormIsValid=updatedFormIsValid&&updateValidities[key]
        }
        return{
            formIsValid:updatedFormIsValid,
            inputValidities:updatedValidities,
            inputValues:updateValues
        };
    }
    return state;
};

const AuthScreen = () => {
    const dispatch=useDispatch();
    const handleSignUp=()=>{
        dispatch(signUp(email,password))
    }
    const [formState,formDispatch]=useReducer(formReducer,{
        inputValues:{
            email:"",
            password:"",
        },
        inputValidities:{
            email:false,
            password:false
        },
        formIsValid:false,
    });

    useEffect(()=> {
        if (error){
            Alert.alert("Ha ocurrido un error",error,[{text:"Ok"}])
        }
    },[error])

    const onInputChangeHandler=useCallback(
        (inputIdentifier,inputValue,inputValidity)=> {
            formDispatch({
                type:FORM_INPUT_UPDATE,
                value:inputValue,
                isValid:inputValidity,
                input:inputIdentifier
            });
        },[formDispatch]
    );

    return (
        <KeyboardAvoidingView style={styles.screen} behavior="padding" keyboardVerticalOffset={50}>
            <View style={styles.container}>
                <Text style={styles.title}>Tu perro: login</Text>
                <View>
                    <Input
                        id="email"
                        required
                        email
                        errorText="Ingrese email válido"
                        label="email"
                        placeholder="email"
                        keyboardType="email_adress"
                        autoCapitalize="none"
                        onInputChange={onInputChangeHandler}
                        initialValue=""
                    />
                    <Input
                        id="password"
                        //required
                        //password
                        //errorText="Ingrese contraseña válida"
                        label="password"
                        placeholder="password"
                        keyboardType="default"
                        autoCapitalize="none"
                        //onChangeText={setPassword}
                        secureTextEntry
                        minlength={6}
                        initialValue=""
                    />
                </View>
                <View>
                    <Button title="Registrarme" color={COLORS.primary} onPress={()=> {handleSignUp}} />
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
