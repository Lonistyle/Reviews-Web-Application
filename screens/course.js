import {Text, View,Button, RecyclerViewBackedScrollViewBase} from 'react-native';
import Card from '../shared/card';
import { globalStyles } from '../styles/global';
import React from 'react';
import Comment from '../shared/comment';
import { useState } from 'react';
import { TextInput,FlatList } from 'react-native-gesture-handler';
import { db } from '../firebase';
import { addDoc } from 'firebase/firestore';
import { collection } from 'firebase/firestore';
import { auth } from '../firebase';
import { useEffect } from 'react';
import { getDocs } from 'firebase/firestore';

export default function Course({navigation}){
    const [review,setReview]=useState([])
    const [reviews,setReviews]=useState([])
    const coursesRef=collection(db,"courses",navigation.getParam('name'),"reviews")

    const func=()=>
    {
        let unsubscribed = false;
          getDocs(coursesRef)
          .then((querySnapshot) => {
            if (unsubscribed) return; 
            const data = querySnapshot.docs
            .map((doc) => ({ ...doc.data(), id: doc.id }));
            setReviews(data);
          }).catch((err) => {
            if (unsubscribed) return;
            console.error("Failed to retrieve data", err);
          });
        return () => unsubscribed  = true;
    }
    
    useEffect(() => {func();}, []);

    const handleSetReview= async ()=>{
        const data = {name:auth.currentUser?.email,title:navigation.getParam('name'),body: review,rating:3.5};
        const course=navigation.getParam('name');
        await addDoc(collection(db,"courses",course,"reviews"),data)
        .then(alert("Courses added successfully."))
        .catch(function(err){
            alert("Cannot add data.")
        })
        func();
    }

    return(
        <View style={globalStyles.container}>
            <Card>
            <Text>שם קורס: {navigation.getParam('name')}</Text>
            <Text>שם מרצה: {navigation.getParam('lecturer')}</Text>
            <Text>דירוג:  {navigation.getParam('rating')}</Text>
            </Card>
            <TextInput 
            placeholder='חוות דעת'
            onChangeText={text=>setReview(text)}
            style={globalStyles.input}
            />
             <FlatList 
            data={reviews}
            renderItem={({item})=>
            (
                    <Card>
                    <Text style={globalStyles.titleText}>{item.body}</Text>
                    </Card>
            )} />

            <Button onPress={handleSetReview} title='דרג את הקורס'></Button>
            <Text  style={globalStyles.titleText}>חוות דעת</Text>
            
            

        </View>
    )
}

