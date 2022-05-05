import { StyleSheet } from "react-native";

export const globalStyles=StyleSheet.create({
    titleText:{
        fontFamily:'nunito-bold',
        fontSize:18,
        color:'#333'
    },
    paragraph:{
        marginVertical:8,
        lineHeight:20,
    },
    card:{
        borderRadius:6,
        elevation:3,
        backgroundColor:'#fff',
        shadowOffset:{width:1,height:1},
        shadowColor:'#333',
        shadowOpacity:0.3,
        shadowRadius:2,
        marginHorizontal:4,
        marginVertical:6
    },
    cardContent:{
        marginHorizontal:18,
        marginVertical:10
    },
    header:{
        width:'100%',
        height:'100%',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
    },
    headerImage:{
        width:26,
        height:26,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      inputContainer: {
        width: '80%',
        alignItems:'center',
        justifyContent:'center'
      },
      input: {
        alignSelf:'center',
        width:315,
        height:70,
        justifyContent:'center',
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 10,
        fontSize:20
      },
      buttonContainer: {
        alignSelf:'center',
        position:'relative',
        width: 315,
        height:70,
        justifyContent: 'center',
        marginTop: 75,
      },
      button: { 
        margin:5,
        backgroundColor: '#0782F9',
        width: '100%',
        padding: 15,
        borderRadius: 5,
        alignItems: 'center'
      },
      buttonOutlineText: {
        alignContent:'center',
        backgroundColor: 'white',
        marginTop: 5,
        borderColor: '#0782F9',
        borderWidth: 2,
        fontSize:20
      }

})