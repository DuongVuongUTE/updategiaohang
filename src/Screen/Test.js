import React from 'react'
import {
    TextInput,
    View,
    Text,
    StyleSheet,
    Image,
    Dimensions,
    ScrollView,
    TouchableOpacity,
    Animated
} from 'react-native'
import { DATA,DATA_2 ,DATA_3,DATA_4} from '../Data/Data'
export default function Test() {
    const [tab, setTab] = React.useState(0);
  return (
    <View style={{flex:1}}>
      <View style={{flexDirection:"row",justifyContent:"center",alignItems:"center",marginTop:10}}>
        <View style={{flex:1,justifyContent:"center"}}>
        <TouchableOpacity
            activeOpacity={0.7}
            style={[
                {paddingHorizontal:5,paddingVertical:5},
            tab === 0 && {fontWeight: 'bold', borderBottomWidth: 2},
            ]}
            onPress={() => {
            setTab(0);
            }}>
            <Text
            style={[{textAlign: 'center'}, tab === 0 && {fontWeight: 'bold',fontSize:16}]}>
            Gần tôi
            </Text>
        </TouchableOpacity>
        </View>
        <View style={{flex:1,justifyContent:"center"}}>
        <TouchableOpacity 
            activeOpacity={0.7}
            onPress={() => {
            setTab(1);
            }}
            style={[
                {paddingHorizontal:5,paddingVertical:5},
            tab === 1 && {fontWeight: 'bold', borderBottomWidth: 2},
            ]}>
            <Text style={[{textAlign: 'center'},tab === 1 && {fontWeight: 'bold',fontSize:16,textAlign:"center"}]}>Bán chạy</Text>
        </TouchableOpacity>
        </View>
        <View style={{flex:1,justifyContent:"center"}}>
        <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => {
            setTab(2);
            }}
            style={[
            {paddingHorizontal:5,paddingVertical:5},
            tab === 2 && {fontWeight: 'bold', borderBottomWidth: 2},
            ]}>
            <Text  style={[{textAlign: 'center'},tab === 2 && {fontWeight: 'bold',fontSize:16,textAlign:"center"}]}>Đánh giá</Text>
        </TouchableOpacity>
        </View>
        <View style={{flex:1,justifyContent:"center"}}>
        <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => {
            setTab(3);
            }}
            style={[
                {paddingHorizontal:5,paddingVertical:5},
            tab === 3 && {fontWeight: 'bold', borderBottomWidth: 2},
            ]}>
            <Text style={[{textAlign: 'center'},tab === 3 && {fontWeight: 'bold',fontSize:16,textAlign:"center"}]}>Giao nhanh</Text>
        </TouchableOpacity>
        </View>
      </View>
      <View style={{flex:1,marginTop:10}}>
        <ScrollView style={{marginHorizontal: 10}}>
            {tab === 0 && (
            <View>
                {DATA.map((item) => (
                <View key={item.id}>
                    <View style={{flexDirection:"row",marginBottom:10}}>
                        <View style={{width:100,height: 100}}>
                            <Image source={{uri: item.image}} style={{width:'100%',height:'100%'}} />
                        </View>
                        <View style={{flex:1,flexDirection:"column",justifyContent:"space-between",marginHorizontal:10}}>
                            <Text style={{fontWeight: 'bold',fontSize:16}}>
                            {item.name}
                            </Text>
                            <Text >{item.price}</Text>
                            <Text >{item.sale}</Text>
                        </View>
                        <View style={{flexDirection:"column",justifyContent:"center"}}>
                            <Text style={{fontWeight: 'bold',fontSize:14}}>
                            {item.km} </Text>
                        </View>
                    </View>
                </View>
                ))}
            </View>
            )}
            {tab === 1 && (
            <View>
                {DATA_2.map((item) => (
                    <View key={item.id}>
                    <View style={{flexDirection:"row",marginBottom:10}}>
                        <View style={{width:100,height: 100}}>
                            <Image source={{uri: item.image}} style={{width:'100%',height:'100%'}} />
                        </View>
                        <View style={{flex:1,flexDirection:"column",justifyContent:"space-between",marginHorizontal:10}}>
                            <Text style={{fontWeight: 'bold',fontSize:16}}>
                            {item.name}
                            </Text>
                            <Text >{item.price}</Text>
                            <Text >{item.sale}</Text>
                        </View>
                        <View style={{flexDirection:"column",justifyContent:"center"}}>
                            <Text style={{fontWeight: 'bold',fontSize:14}}>
                            {item.km} </Text>
                        </View>
                    </View>
                </View>
                ))}
            </View>
            )}
            {tab === 2 && (
            <View>
                {DATA_3.map((item) => (
                    <View key={item.id}>
                    <View style={{flexDirection:"row",marginBottom:10}}>
                        <View style={{width:100,height: 100}}>
                            <Image source={{uri: item.image}} style={{width:'100%',height:'100%'}} />
                        </View>
                        <View style={{flex:1,flexDirection:"column",justifyContent:"space-between",marginHorizontal:10}}>
                            <Text style={{fontWeight: 'bold',fontSize:16}}>
                            {item.name}
                            </Text>
                            <Text >{item.price}</Text>
                            <Text >{item.sale}</Text>
                        </View>
                        <View style={{flexDirection:"column",justifyContent:"center"}}>
                            <Text style={{fontWeight: 'bold',fontSize:14}}>
                            {item.km} </Text>
                        </View>
                    </View>
                </View>
                ))}
            </View>
            )}
            {tab === 3 && (
            <View>
                {DATA_4.map((item) => (
                    <View key={item.id}>
                    <View style={{flexDirection:"row",marginBottom:10}}>
                        <View style={{width:100,height: 100}}>
                            <Image source={{uri: item.image}} style={{width:'100%',height:'100%'}} />
                        </View>
                        <View style={{flex:1,flexDirection:"column",justifyContent:"space-between",marginHorizontal:10}}>
                            <Text style={{fontWeight: 'bold',fontSize:16}}>
                            {item.name}
                            </Text>
                            <Text >{item.price}</Text>
                            <Text >{item.sale}</Text>
                        </View>
                        <View style={{flexDirection:"column",justifyContent:"center"}}>
                            <Text style={{fontWeight: 'bold',fontSize:14}}>
                            {item.km} </Text>
                        </View>
                    </View>
                </View>
                ))}
            </View>
            )}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
