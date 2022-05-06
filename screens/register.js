import { StyleSheet, Text, View} from 'react-native'
import React from 'react'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import { globalStyles } from '../styles/global'
import { useState } from 'react'
import { auth, db } from '../firebase'
import { getAuth, updateProfile } from "firebase/auth";


export default function Register({navigation})
{
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    const handleSignUp= async ()=>{

        auth
        .createUserWithEmailAndPassword(email,password)

        .then(userCredentials =>{
            const user=userCredentials.user;
            user.updateProfile({displayName: name})
            user.reload();
            navigation.navigate('Home',user);
        })
        .catch(error=>alert(error.message))
    }

    return(
        <View>
            <View styles={globalStyles.inputContainer}>
            <TextInput 
                placeholder='Name'
                onChangeText={text=>setName(text)}
                style={globalStyles.input}
                />
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

                <TouchableOpacity onPress={()=> navigation.navigate('Login')} style={globalStyles.button}>
                    <Text style={globalStyles.buttonOutLineText}>Already have an Account?</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={handleSignUp} style={globalStyles.button}>
                    <Text style={globalStyles.buttonOutLineText}>Register</Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}
