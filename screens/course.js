import {Text, View,Button} from 'react-native';
import Card from '../shared/card';
import { globalStyles } from '../styles/global';
import React from 'react';
import Comment from '../shared/comment';
import { useState } from 'react';
import { TextInput } from 'react-native-gesture-handler';


export default function Course({navigation}){
    const [review,setReview]=useState('')

    /*const handleAddReview= async ()=>{
        const data = {title:course,body: lecturer,rating: 0};
        await addDoc(collection(db,"courses"),data)
        .then(alert("Courses added successfully."))
        .catch(function(err){
            alert("Cannot add data.")
        })
    }*/

    return(
        <View style={globalStyles.container}>
            <Card>
            <Text>שם קורס: {navigation.getParam('title')}</Text>
            <Text>שם מרצה:{navigation.getParam('body')}</Text>
            <Text>דירוג:  {navigation.getParam('rating')}</Text>
            </Card>
            <TextInput 
            placeholder='חוות דעת'
            onChangeText={text=>setReview(text)}
            style={globalStyles.input}
            />
            <Button title='דרג את הקורס'></Button>
            <Text  style={globalStyles.titleText}>חוות דעת</Text>
            
            

        </View>
    )
}

