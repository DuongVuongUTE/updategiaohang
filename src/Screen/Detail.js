import React from 'react'
import { StyleSheet, Text, View ,Image} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Feather';
import Iconfas from 'react-native-vector-icons/FontAwesome';
import { ceil } from 'react-native-reanimated';
import { ScrollView } from 'react-native-gesture-handler';
export default function Detail() {
    return (
        <ScrollView>
        <View style={{backgroundColor:'#ccc'}}>
            <View style={styles.header}>
                <Icon style={{marginHorizontal:10}} name="chevron-left"size={30} color="#fff" />
                <Text style={{flex:1,fontSize:18,fontWeight:"bold",color:'#fff'}}>Trà Sữa Mộc - Shop Online</Text>
                <Icon style={{marginHorizontal:10}} name="more-vertical"size={26} color="#fff" />
            </View>
            <View style={styles.nav_tool}>
                <View style={styles.nav_tool_item}>
                    <Icon name="camera"size={15} color="#fff" />
                    <Text style={{color:'#fff' ,fontSize:13}}>Tải ảnh</Text>
                </View>
                <View style={styles.nav_tool_item}>
                    <Icon name="map-pin"size={15} color="#fff" />
                    <Text style={{color:'#fff' ,fontSize:13}}>Check-in</Text>
                </View>
                <View style={styles.nav_tool_item}>
                    <Icon name="message-circle"size={15} color="#fff" />
                    <Text style={{color:'#fff' ,fontSize:13}}>Bình luận</Text>
                </View>
                <View style={styles.nav_tool_item}>
                    <Icon name="bookmark"size={15} color="#fff" />
                    <Text style={{color:'#fff' ,fontSize:13}}>Save</Text>
                </View>
                <View style={styles.nav_tool_item}>
                    <Icon name="share-2"size={15} color="#fff" />
                    <Text style={{color:'#fff' ,fontSize:13}}>Chia sẻ</Text>
                </View>
            </View>
            <View style={styles.banner}>
                <Image source={{uri:'https://i.imgur.com/alYvhAW.jpg'}} style={{width:'100%',height:'100%',resizeMode:"cover"}} />   
            </View>
            <View style={{flexDirection:"row",paddingHorizontal:5,paddingVertical:5,borderBottomColor:'red', backgroundColor:'#fff'}}>
                <Text style={{fontSize:18,fontWeight:"bold",color:'#000'}}>Trà Sữa Mộc - Shop Online</Text>
            </View>
            <View style={styles.interactive}>
                <View style={styles.interactive_item}>
                    <Text style={{fontSize:18,fontWeight:"bold"}}>69</Text>
                    <Text>Bình luận</Text>
                </View>
                <View style={styles.interactive_item}>
                    <Text style={{fontSize:18,fontWeight:"bold"}}>100</Text>
                    <Text>Hình ảnh</Text>
                </View>
                <View style={styles.interactive_item}>
                    <Text style={{fontSize:18,fontWeight:"bold"}}>50</Text>
                    <Text>Check-in</Text>
                </View>
                <View style={styles.interactive_item}>
                    <Text style={{fontSize:18,fontWeight:"bold"}}>1k</Text>
                    <Text>Lưu lại</Text>
                </View>
                <View style={styles.interactive_item}>
                    <Text style={{fontSize:16,fontWeight:"bold",color:'#fff',backgroundColor:'#4d9e52',padding:10,borderRadius:25}}>9.0</Text>
                </View>
            </View>
            <View style={styles.status}>
                <View style={{flexDirection:"column",justifyContent:"center"}}>
                    <Text style={{textTransform:"uppercase",color:'#4d9e52',fontSize:16,fontWeight:"bold"}}>Đang mở cửa</Text>
                    <Text>07:00 - 21:00</Text>
                </View> 
                <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center",padding:10,backgroundColor:'#ccc'}}>
                    <Icon name="phone-call"size={15} color="#000" />
                    <Text style={{marginLeft:5,fontSize:16,fontWeight:"bold"}}>Liên hệ</Text>
                </View>
            </View>
            <View style={styles.location}>
                <View style={{flexDirection:"column"}}>
                    <View style={{flexDirection:"row",alignItems:"center",marginVertical:5}}>
                        <Icon name="map-pin"size={12} color="#000" style={{padding:5,backgroundColor:'#ddd',borderRadius:15}} />
                        <Text style={{fontSize:12,marginLeft:5}}>48 Cao Thắng - Hải Châu - Đà Nẵng</Text>
                    </View>
                    <View style={{flexDirection:"row",alignItems:"center",marginVertical:5}}>
                        <Icon name="navigation"size={12} color="#000" style={{padding:5,backgroundColor:'#ddd',borderRadius:15}} />
                        <Text style={{fontSize:12,marginLeft:5,color:'#4d9e52',fontWeight:"bold"}}>4.7km</Text>
                    </View>
                    <View style={{flexDirection:"row",alignItems:"center",marginVertical:5}}>
                        <Icon name="star"size={12} color="#000" style={{padding:5,backgroundColor:'#ddd',borderRadius:15}} />
                        <Text style={{fontSize:12,marginLeft:5}}>Shop Online - Món Việt</Text>
                    </View>
                    <View style={{flexDirection:"row",alignItems:"center",marginVertical:5}}>
                        <Icon name="aperture"size={12} color="#000" style={{padding:5,backgroundColor:'#ddd',borderRadius:15}} />
                        <Text style={{fontSize:12,marginLeft:5}}>25.000đ - 40.000đ</Text>
                    </View>
                    
                </View>
                <View style={{flex:1}}>
                    <Image source={{uri:'https://i.imgur.com/QTnhtUc.jpg'}} style={{width:'100%',height:100,resizeMode:"contain"}} />
                </View>
            </View>
            <View style={{backgroundColor:'#fff',justifyContent:"space-between",alignItems:"center"}} >
                <Text style={{color:'#09bace',fontWeight:"bold",fontSize:16,padding:5}}>Xem tất cả thông tin</Text>
            </View>
            <View style={{marginTop:8,backgroundColor:'#Fff',flex:1}}>
                <Text style={{fontSize:16,fontWeight:"bold",marginHorizontal:10,marginTop:15,marginBottom:5}}>Được đặt nhiều</Text>
                <View style={{flexDirection:"row",justifyContent:"center",alignItems:"center",flex:1,padding:15,backgroundColor:'red'}}>
                    <Image source={{uri:'https://i.imgur.com/2MHv71C.png'}} style={{width:25,height:25}} />
                    <Text style={{color:'#fff',fontSize:16,marginLeft:10}}>Đặt giao hàng</Text>
                </View>
            </View>
        </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    header:{
        flexDirection:"row",
        backgroundColor: 'red',
        alignItems:"center",
        height:50
    },
    nav_tool:{
        flexDirection:"row",
        backgroundColor: '#333333',
        alignItems:"center",
        height:50
    },
    nav_tool_item:{
        flexDirection:"column",
        flex:1,
        justifyContent:"space-between",
        alignItems:"center"
    },
    banner:{
        width:'100%',
        height:200
    },
    interactive:{
        flexDirection:"row",
        alignItems:"center",
        backgroundColor:'#fff'
    },
    interactive_item:{
        flexDirection:"column",
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    status:{
        flexDirection:"row",
        alignItems:"center",
        padding:15,
        justifyContent:"space-between",
        backgroundColor:'#fff'
    },
    location:{
        marginTop:7,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:'#fff',
        padding:15
    }
})
