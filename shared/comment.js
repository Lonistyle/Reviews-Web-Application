import React from "react";
import { StyleSheet, View } from "react-native";
import { globalStyles } from "../styles/global";

export default function Comment(props){
    return(
        <View style={globalStyles.comment}>
            <View style={globalStyles.cardContent}>
                {props.children}
            </View>
        </View>    
    )
}
