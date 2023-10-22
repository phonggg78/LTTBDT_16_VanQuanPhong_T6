import React,{Component} from "react";
import { StyleSheet, Text, View, SafeAreaView, SectionList, StatusBar, TouchableOpacity,Image, Button} from 'react-native';
export default Screen4aComponet
function Screen4aComponet(props){
    const {option} = props;
    return (
        <TouchableOpacity style = {styles.container}>
              <Image style = {styles.img} source={option.img}></Image>
                    <View style = {styles.txt}>
                        <Text style = {styles.txt2}>{option.title}</Text>
                        <Text style = {styles.txt3}>Shop {option.shopname}</Text>
                    </View>
                    <TouchableOpacity style = {styles.cbtnchat}>
                        <Text style = {styles.ctxtbtnchat}>Chat</Text>
                    </TouchableOpacity>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({ 
    container: {
        flexDirection: 'row',
        width: 390,
        height: 90,
        borderBottomWidth: 2,
        borderColor: '#C4C4C4',
        alignItems: 'center',
      },
      img: {
        height: 88,
        width: 88,
        resizeMode: 'contain',
      },
      txt: {
        fontFamily: 'Roboto',
        flex: 1,
        paddingLeft: 7,
        top: -20,
      },
      txt2: {
        fontSize: 15,
        fontFamily: 'Roboto',
      },
      txt3: {
        fontFamily: 'Roboto',
        color: 'black',
        fontSize: 15,
        top: 10,
      },
      cbtnchat: {
        width: 98,
        height: 45,
        backgroundColor:'#F31111',
        justifyContent: 'center',
        right: 20,
      },
      ctxtbtnchat: {
        textAlign: 'center',
        color: 'white',
        fontSize: 20,
      },
    
})