import React from "react";
import { Text, View } from "react-native";
import { globalStyles } from "../styles/global";
import Card from "./card";
import {CardDescription, Comment} from "semantic-ui-react";

export default function Review(props){
    return(
        
        <View >
            <Card>
                    <Text style={globalStyles.titleText}>{props.name}</Text>
                    <Text style={globalStyles.Text}>{props.body}</Text> 
                </Card>  
        </View> 
        
    )
}
