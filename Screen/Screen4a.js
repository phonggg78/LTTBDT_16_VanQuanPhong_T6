import React,{Component} from "react";
import { StyleSheet, Text, View, SafeAreaView, SectionList, StatusBar, TouchableOpacity,Image} from 'react-native';
import { FlatList } from "react-native-web";
import Screen4aComponet from "../Component/Screen4aComponent";
function   Cau4a(){
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Image style={[styles.img,{'left':'17px'}]} source={require('../assets/arrow.png')} />
                <Text style={styles.textheader}>Chat</Text>
                <Image style={[styles.img,{'left':'350px'}]} source={require('../assets/bicart.png')} />
            </View>  
            <Text style={{fontSize:16,marginTop:15,left:20,width:'360px'}}>Bạn có thắc mắc với sản phẩm vừa xem đừng ngại chát với shop!</Text>
            <View style={styles.body}> 
                <View style={styles.options}>
                    <FlatList style={styles.flatList}
                    data = {data4a}
                    renderItem={({item}) => <Screen4aComponet option={item}/>}
                    scrollEnabled={false}
                    />
                </View>
            </View>
        </View>
    )
 }
 export default Cau4a;
 const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'gray',
    },
    header:{
            width : '100%',
            height : 42,
            backgroundColor:'#1BA9FF',
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 10,
        marginVertical: 8,
        marginHorizontal: 10,
      },
      title: {
        fontSize: 32,
      },
    img:{
            width: 24,
            height: 24,
            position:'absolute',
            marginTop:8,
    },
    textheader:{
        width:'45px',
        height:'12px',
        top:'8px',
        left:'160px',
        fontSize:'20px',
        color:'#FFFFFF'
    },
    body: {
        marginTop: 15,
        justifyContent: 'center',
        alignItems: 'center',
        width: '420',
        height: '380',
        backgroundColor: '#F7F7F7',
    },
    options: {
        width: '90%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    flatList: {
        position: 'sticky'
    },
    listorder:{
        width: '95%',
        height: 220,
        borderRadius: 20,
        margin: 10,
        backgroundColor: 'white',
    },
 });
var data4a= [
    {
        img: require('../assets/ca_nau_lau.png'),
        title: 'Ca nấu lẩu, nấu mì mini...',
        shopname: 'Devang',
    },
    {
        img: require('../assets/ga_bo_toi.png'),
        title: '1KG Khổ gà bơ tỏi',
        shopname: 'LTD Food',
    },
    {
        img: require('../assets/xa_can_cau.png'),
        title: 'Xe cần cẩu đa năng',
        shopname: 'Thế giới đồ chơi',
    },
    {
        img: require('../assets/do_choi_dang_mo_hinh.png'),
        title: 'Đồ chơi dạng mô hình',
        shopname: 'Thế giới đồ chơi',
    },
    {
        img: require('../assets/lanh_dao_gian_don.png'),
        title: 'Lãnh đạo giản đơn',
        shopname: 'Minh Long Book',
    },
    {
        img: require('../assets/ca_nau_lau.png'),
        title: 'Bông lan trứng muối',
        shopname: 'Shop ABC',
    },
    {
        img: require('../assets/hieu_long_con_tre.png'),
        title: 'Hiểu lòng con trẻ',
        shopname: 'Minh Long Book',
    },
    {
        img: require('../assets/trump 1.png'),
        title: 'Donal Trump Thiên tài lãnh đạo',
        shopname: 'Minh Long Book',
    },
]
