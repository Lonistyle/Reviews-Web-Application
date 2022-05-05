import {Text, View } from 'react-native';
import { globalStyles } from '../styles/global';
import React,{useEffect, useState} from 'react';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import Card from '../shared/card';
import { auth } from '../firebase';
import {db} from '../firebase'
import { collection,getDocs } from 'firebase/firestore';


export default function Home({navigation}){

    const [courses,setCourses]=useState([]);
    const coursesRef=collection(db,"courses")

    useEffect(() => {
        console.log("x")
        console.log("y")
        let unsubscribed = false;
          getDocs(coursesRef)
          .then((querySnapshot) => {
            if (unsubscribed) return; //
            const data = querySnapshot.docs
            .map((doc) => ({ ...doc.data(), id: doc.id }));
              setCourses(data);
          }).catch((err) => {
            if (unsubscribed) return;
            console.error("Failed to retrieve data", err);
          });
        return () => unsubscribed  = true;
      }, []);
      


    const handleSignOut=()=>{
        auth
        .signOut()
        .then(()=>(navigation.replace('Login')))
        .catch(error=>alert(error.message));
    }
  
    return(
        <View style={globalStyles.container}>
            <Text>logged in as {auth.currentUser?.email}</Text>
            <FlatList 
            data={courses}
            renderItem={({item})=>
            (
                <TouchableOpacity onPress={()=> navigation.navigate('Course',item)}>
                    <Card>
                    <Text style={globalStyles.titleText}>{item.title}</Text>
                    </Card>
                </TouchableOpacity>
            )} />

            <TouchableOpacity onPress={()=> navigation.navigate('Admin')} style={globalStyles.button}>
                    <Text style={globalStyles.buttonOutLineText}>Admin Panel</Text>
                </TouchableOpacity>
             <TouchableOpacity onPress={handleSignOut} style={globalStyles.button}>
                    <Text style={globalStyles.buttonOutLineText}>   SignOut   </Text>
                </TouchableOpacity>
        </View>
    )
}

