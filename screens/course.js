import {Text, View,Button, RecyclerViewBackedScrollViewBase} from 'react-native';
import Card from '../shared/card';
import { globalStyles } from '../styles/global';
import React from 'react';
import Review from '../shared/review';
import { useState } from 'react';
import { TextInput,FlatList } from 'react-native-gesture-handler';
import { db } from '../firebase';
import { addDoc } from 'firebase/firestore';
import { collection } from 'firebase/firestore';
import { auth } from '../firebase';
import { useEffect } from 'react';
import { getDocs } from 'firebase/firestore';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Rating';

export default function Course({navigation}){
    const [rating,setRating]=useState(0)
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

    const handleSetReview= async ()=>
    {
      if(rating===0){alert("Make sure you rate the course!")}
        else{
            const data = {name:auth.currentUser?.displayName,title:navigation.getParam('name'),body: review,rating:rating};
            const course=navigation.getParam('name');
            await addDoc(collection(db,"courses",course,"reviews"),data)
            .then(alert("Courses added successfully."))
            .catch(function(err){
                alert("Cannot add data.")
            })
            func();
          }
        
    }
    

    return(
        <View style={globalStyles.container}>
            <Card>
            <Text>שם קורס: {navigation.getParam('name')}</Text>
            <Text>שם מרצה: {navigation.getParam('lecturer')}</Text>
            <Text>דירוג:  {navigation.getParam('rating')}</Text>
            </Card>

            <Typography onChange={(event, newValue) => {setRating(newValue);}} component="legend">Controlled</Typography>
            <TextInput placeholder='חוות דעת' onChangeText={text=>setReview(text)} style={globalStyles.reviewInput}/>
            <Button onPress={handleSetReview} title='דרג את הקורס'></Button>
            <Text  style={globalStyles.titleText}>חוות דעת</Text>

             <FlatList data={reviews} renderItem={({item})=>
            (<Review name={item.name} title={item.title} body={item.body}/>)} />


        </View>
    )
}

