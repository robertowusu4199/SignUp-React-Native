import React, {useState} from "react";
import {View, TextInput, Text, TouchableOpacity, ScrollView, StyleSheet, Touchable} from "react-native";

export default function Signup() {
    const [state, setstate] = useState({
        username: "",
        email: "",
        password: "",
    })

    function handleOnChange(name, text){
        setstate({...state,[name]: text})
    }

    function handleSubmit(){

    }

    return(
        <ScrollView style={styles.container}>
            <Text style={styles.text}>Sign up</Text>

            <TextInput placeholder = "Username" style={styles.firstInput} OnChangeText={(text) => 
                {handleOnChange("username", text)}} />

            <TextInput placeholder = "Email" style={styles.secondInput} OnChangeText={(text) => 
                {handleOnChange("username", text)}} />

            <TextInput placeholder = "Password" style={styles.lastInput}
            secureTextEntry={true}
            autoCorrect={false}
            onChangeText={(text) => 
            {handleOnChange("password", text)}} />

            <TextInput placeholder = "Password again" style={styles.lastInput}
            secureTextEntry={true}
            autoCorrect={false}
            onChangeText={(text) => 
            {handleOnChange("password", text)}} />

            <TouchableOpacity style={styles.button}>
                <Text style={styles.textButton}>Sign Up</Text>
            </TouchableOpacity>

            <Text style={styles.lastText}>You already have account?
                <TouchableOpacity>
                    <Text style={styles.footer}>Log In</Text>
                </TouchableOpacity>
            </Text>

        </ScrollView>
    )
}


const styles = StyleSheet.create ({
    container: {
        marginTop: 50,
        marginHorizontal: 50
    },


    text: {
        fontSize: 50,
        color: '#711be4',
    },

    firstInput: {
        marginTop: 40,
        fontSize: 21,
        borderBottomWidth: 3,
        borderBottomColor: '#711be4',
        color:'#05010A',
        paddingBottom: 10,
    },
    
    secondInput: {
        marginTop: 40,
        fontSize: 21,
        borderBottomWidth: 3,
        borderBottomColor: '#711be4',
        color:'#05010A',
        paddingBottom: 10,
    },

    lastInput: {
        marginTop: 38,
        fontSize: 21,
        borderBottomWidth: 3,
        borderBottomColor: '#711be4',
        color:'#05010A',
        paddingBottom: 10,
    },
    
    button: {
        width: 255,
        height: 55,
        backgroundColor: '#711be4',
        borderRadius: 12,
        marginTop: 40,
        alignItems: "center",
        justifyContent: "center"
    },

    textButton: {
        color: '#ffffff',
        fontSize: 22,
        textTransform: "none",
    },

    lastText: {
        marginTop: 40,
        alignSelf: 'center',
        fontSize: 13,
    },

    footer: {
        marginLeft: 10,
        color: '#711be4',
        fontSize: 13,
      },
    
})