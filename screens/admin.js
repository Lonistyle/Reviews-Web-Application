import { TextInput, Text, View,TouchableOpacity } from 'react-native';
import { globalStyles } from '../styles/global';
import React from 'react';
import { useState } from 'react';
import {db} from '../firebase'
import { setDoc, collection } from 'firebase/firestore';
import { doc } from 'firebase/firestore';

export default function Admin({navigation}){
    const [course,setCourse]=useState('')
    const [lecturer,setLecturer]=useState('')

    const handleSetCourse= async ()=>{
        const data = {name:course,lecturer: lecturer,rating: 0,Reviewers:0};
        await setDoc(doc(db,"courses",course),data)
        .then(alert("Courses added successfully."))
        .catch(function(err){
            alert("Cannot add data.")
        })
    }


    return(
        <View>
        <View styles={globalStyles.inputContainer}>
            <TextInput 
            placeholder='שם קורס'
            onChangeText={text=>setCourse(text)}
            style={globalStyles.input}
            />
            <TextInput 
            placeholder='שם מרצה'
            onChangeText={text=>setLecturer(text)}
            style={globalStyles.input}
            />
        </View>
        
        <View style={globalStyles.buttonContainer}>

            <TouchableOpacity onPress={handleSetCourse} style={globalStyles.button}>
                <Text style={globalStyles.buttonOutLineText}>Add Course</Text>
            </TouchableOpacity>

        </View>
    </View>
    )
}

