import { StyleSheet,Text,View, Image} from "react-native";
import { globalStyles } from "../styles/global";

export default function Header({navigation,title}){
    
    return(
        <View style={globalStyles.header}>
            <View>
                <Image source={require('../assets/mtalogo.jpg')}/>
            </View>    
        </View>
    )
}
