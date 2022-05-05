import { StyleSheet, Text, View} from 'react-native'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import { globalStyles } from '../styles/global'
import React,{ useState,useEffect } from 'react'
import { auth } from '../firebase'


export default function Login({navigation}){
    
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    useEffect(()=>{
        const unsubscribe=auth.onAuthStateChanged(user=>{
            if (user){navigation.replace('Home')}
        })
    })

    const handleLogin=()=>{
        auth
        .signInWithEmailAndPassword(email,password)
        .then(userCredentials =>{
            const user=userCredentials.user;
            console.log('Logged in with:', user.email);})
            .catch(error=>alert(error.message))
    }


    return(
        <View>
            <View styles={globalStyles.inputContainer}>
                <TextInput 
                placeholder='Email'
                onChangeText={text=>setEmail(text)}
                style={globalStyles.input}
                />
                <TextInput 
                placeholder='Password'
                onChangeText={text=>setPassword(text)}
                style={globalStyles.input}
                secureTextEntry
                />
            </View>
            
            <View style={globalStyles.buttonContainer}>

                <TouchableOpacity onPress={handleLogin} style={globalStyles.button}>
                    <Text style={globalStyles.buttonOutLineText}>Login</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=> navigation.navigate('Register')} style={globalStyles.button}>
                    <Text style={globalStyles.buttonOutLineText}>Register</Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}
