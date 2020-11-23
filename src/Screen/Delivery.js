import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  FlatList,
  ScrollView,
  TouchableOpacity,
  Button,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Swiper from 'react-native-swiper';
import Icon from 'react-native-vector-icons/Feather';
import Iconfas from 'react-native-vector-icons/FontAwesome';
import {DATA, DATA_2, DATA_3, DATA_4} from '../Data/Data';

export default function Delivery() {
  const [tab, setTab] = React.useState(0);
  const people = [
    {name: 'https://i.imgur.com/iiX4Uh5.jpg', id: '1'},
    {name: 'https://i.imgur.com/8yUlPa0.jpg', id: '2'},
    {name: 'https://i.imgur.com/cL1jwt7.jpg', id: '3'},
    {name: 'https://i.imgur.com/jf4g9fP.jpg', id: '4'},
    {name: 'https://i.imgur.com/ru1NMcX.jpg', id: '5'},
    {name: 'https://i.imgur.com/kyUhloA.jpg', id: '6'},
    {name: 'https://i.imgur.com/HLlcJP0.jpg', id: '7'},
  ];
  const food = [
    {image: 'https://i.imgur.com/Jt5gh9I.png', id: '1', text: 'Tất cả'},
    {image: 'https://i.imgur.com/aud9xll.png', id: '2', text: 'Đồ ăn'},
    {image: 'https://i.imgur.com/bxcRs68.png', id: '3', text: 'Đồ uống'},
    {image: 'https://i.imgur.com/0qtS6uT.png', id: '4', text: 'Đồ chay'},
    {image: 'https://i.imgur.com/evemG2C.png', id: '5', text: 'Bánh kem'},
    {image: 'https://i.imgur.com/UQsxplI.png', id: '6', text: 'Món gà'},
    {image: 'https://i.imgur.com/WeS96Rl.png', id: '7', text: 'Đồ hộp'},
    {image: 'https://i.imgur.com/TR05d4e.png', id: '8', text: 'Bánh canh'},
    {image: 'https://i.imgur.com/d3atpfy.png', id: '9', text: 'Mỳ sợi'},
    {image: 'https://i.imgur.com/xKP89PS.png', id: '10', text: 'Món chay'},
  ];
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}>
      <View style={styles.header}>
        <View style={styles.header_top}>
          <Iconfas
            name="angle-left"
            style={{
              color: 'white',
              fontSize: 30,
            }}
          />
          <View style={styles.header_top_right}>
            <TextInput
              placeholder="Giảm 50% món ngày 20-11"
              style={styles.right_input}
            />
            <View style={styles.right_select}>
              <Text style={styles.right_select_text}>TP.Đà Nẵng</Text>
              <Iconfas name="chevron-down" style={{fontSize: 14}} />
            </View>
          </View>
        </View>
        <View style={styles.header_bottom}>
          <Text style={styles.header_bottom_left}>Đến</Text>
          <Text style={styles.header_bottom_mid}>
            48 Cao Thắng, Hải Châu, Đà Nẵng
          </Text>
          <Icon
            name="arrow-right-circle"
            style={{
              color: 'white',
              fontSize: 15,
            }}
          />
        </View>
      </View>
      <View>
        <View style={styles.wrapper}>
          <Swiper
            showsButtons={false}
            activeDotColor={'#fff'}
            autoplay={true}
            autoplayTimeout={5}
            paginationStyle={{bottom: 5}}>
            <View style={styles.slide}>
              <Image
                style={{width: '100%', height: '100%'}}
                source={{uri: 'https://i.imgur.com/w414nt6.jpg'}}
              />
            </View>
            <View style={styles.slide}>
              <Image
                style={{width: '100%', height: '100%'}}
                source={{uri: 'https://i.imgur.com/gmFkIOm.jpg'}}
              />
            </View>
            <View style={styles.slide}>
              <Image
                style={{width: '100%', height: '100%'}}
                source={{uri: 'https://i.imgur.com/cnbrNqq.jpg'}}
              />
            </View>
            <View style={styles.slide}>
              <Image
                style={{width: '100%', height: '100%'}}
                source={{uri: 'https://i.imgur.com/PVA7qyJ.jpg'}}
              />
            </View>
            <View style={styles.slide}>
              <Image
                style={{width: '100%', height: '100%'}}
                source={{uri: 'https://i.imgur.com/9hpGxnk.jpg'}}
              />
            </View>
          </Swiper>
        </View>
        <View style={{flexDirection: 'row', padding: 10}}>
          <Text
            style={{
              flex: 1,
              fontSize: 16,
              color: 'black',
              fontWeight: 'bold',
            }}>
            Bộ sưu tập
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: 16,
                color: '#666666',
                marginRight: 5,
              }}>
              Xem thêm
            </Text>
            <Iconfas name="angle-right" style={{fontSize: 20}} />
          </View>
        </View>
        <View>
          <FlatList
            horizontal
            keyExtractor={(item) => item.id}
            data={people}
            renderItem={({item}) => (
              <Image
                source={{uri: item.name}}
                style={{
                  width: 160,
                  height: 100,
                  resizeMode: 'cover',
                  borderRadius: 5,
                  marginHorizontal: 10,
                }}
              />
            )}
          />
        </View>
        <View style={{marginTop: 20}}>
          <FlatList
            horizontal
            keyExtractor={(item) => item.id}
            data={food}
            renderItem={({item}) => (
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginHorizontal: 10,
                }}>
                <Image
                  source={{uri: item.image}}
                  style={{
                    width: 50,
                    height: 50,
                    resizeMode: 'contain',
                    borderRadius: 5,
                  }}
                />
                <Text>{item.text}</Text>
              </View>
            )}
          />
        </View>
        {/* <View style={{marginTop: 20}}>
            {/* <FlatList
              keyExtractor={(item) => item.id}
              data={food}
              renderItem={({item}) => (
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginVertical: 10,
                    marginHorizontal: 10,
                  }}>
                  <Image
                    source={{uri: item.image}}
                    style={{
                      width: 50,
                      height: 50,
                      resizeMode: 'contain',
                      borderRadius: 5,
                    }}
                  />
                  <Text
                    style={{flex: 1, marginHorizontal: 10, fontWeight: '700'}}>
                    {item.text}
                  </Text>
                </View>
              )}
            /> */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 10,
          }}>
          <View style={{flex: 1, justifyContent: 'center'}}>
            <TouchableOpacity
              activeOpacity={0.7}
              style={[
                {paddingHorizontal: 5, paddingVertical: 5},
                tab === 0 && {fontWeight: 'bold', borderBottomWidth: 2},
              ]}
              onPress={() => {
                setTab(0);
              }}>
              <Text
                style={[
                  {textAlign: 'center'},
                  tab === 0 && {fontWeight: 'bold', fontSize: 16},
                ]}>
                Gần tôi
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{flex: 1, justifyContent: 'center'}}>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => {
                setTab(1);
              }}
              style={[
                {paddingHorizontal: 5, paddingVertical: 5},
                tab === 1 && {fontWeight: 'bold', borderBottomWidth: 2},
              ]}>
              <Text
                style={[
                  {textAlign: 'center'},
                  tab === 1 && {
                    fontWeight: 'bold',
                    fontSize: 16,
                    textAlign: 'center',
                  },
                ]}>
                Bán chạy
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{flex: 1, justifyContent: 'center'}}>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => {
                setTab(2);
              }}
              style={[
                {paddingHorizontal: 5, paddingVertical: 5},
                tab === 2 && {fontWeight: 'bold', borderBottomWidth: 2},
              ]}>
              <Text
                style={[
                  {textAlign: 'center'},
                  tab === 2 && {
                    fontWeight: 'bold',
                    fontSize: 16,
                    textAlign: 'center',
                  },
                ]}>
                Đánh giá
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{flex: 1, justifyContent: 'center'}}>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => {
                setTab(3);
              }}
              style={[
                {paddingHorizontal: 5, paddingVertical: 5},
                tab === 3 && {fontWeight: 'bold', borderBottomWidth: 2},
              ]}>
              <Text
                style={[
                  {textAlign: 'center'},
                  tab === 3 && {
                    fontWeight: 'bold',
                    fontSize: 16,
                    textAlign: 'center',
                  },
                ]}>
                Giao nhanh
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <ScrollView >
          <View style={{marginHorizontal: 10, marginTop: 10}}>
            {tab === 0 && (
              <ScrollView>
                <View>
                  {DATA.map((item) => (
                    <View key={item.id}>
                      <View style={{flexDirection: 'row', marginBottom: 10}}>
                        <View style={{width: 100, height: 100}}>
                          <Image
                            source={{uri: item.image}}
                            style={{
                              width: '100%',
                              height: '100%',
                              borderRadius: 5,
                            }}
                          />
                        </View>
                        <View
                          style={{
                            flex: 1,
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            marginHorizontal: 10,
                          }}>
                          <Text style={{fontWeight: 'bold', fontSize: 16}}>
                            {item.name}
                          </Text>
                          <Text>{item.price}</Text>
                          <Text>{item.sale}</Text>
                        </View>
                        <View
                          style={{
                            flexDirection: 'column',
                            justifyContent: 'center',
                          }}>
                          <Text style={{fontWeight: 'bold', fontSize: 14}}>
                            {item.km}{' '}
                          </Text>
                        </View>
                      </View>
                    </View>
                  ))}
                </View>
              </ScrollView>
            )}
            {tab === 1 && (
              <ScrollView>
                <View>
                  {DATA_2.map((item) => (
                    <View key={item.id}>
                      <View style={{flexDirection: 'row', marginBottom: 10}}>
                        <View style={{width: 100, height: 100}}>
                          <Image
                            source={{uri: item.image}}
                            style={{
                              width: '100%',
                              height: '100%',
                              borderRadius: 5,
                            }}
                          />
                        </View>
                        <View
                          style={{
                            flex: 1,
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            marginHorizontal: 10,
                          }}>
                          <Text style={{fontWeight: 'bold', fontSize: 16}}>
                            {item.name}
                          </Text>
                          <Text>{item.price}</Text>
                          <Text>{item.sale}</Text>
                        </View>
                        <View
                          style={{
                            flexDirection: 'column',
                            justifyContent: 'center',
                          }}>
                          <Text style={{fontWeight: 'bold', fontSize: 14}}>
                            {item.km}{' '}
                          </Text>
                        </View>
                      </View>
                    </View>
                  ))}
                </View>
              </ScrollView>
            )}
            {tab === 2 && (
              <ScrollView>
                <View>
                  {DATA_3.map((item) => (
                    <View key={item.id}>
                      <View style={{flexDirection: 'row', marginBottom: 10}}>
                        <View style={{width: 100, height: 100}}>
                          <Image
                            source={{uri: item.image}}
                            style={{
                              width: '100%',
                              height: '100%',
                              borderRadius: 5,
                            }}
                          />
                        </View>
                        <View
                          style={{
                            flex: 1,
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            marginHorizontal: 10,
                          }}>
                          <Text style={{fontWeight: 'bold', fontSize: 16}}>
                            {item.name}
                          </Text>
                          <Text>{item.price}</Text>
                          <Text>{item.sale}</Text>
                        </View>
                        <View
                          style={{
                            flexDirection: 'column',
                            justifyContent: 'center',
                          }}>
                          <Text style={{fontWeight: 'bold', fontSize: 14}}>
                            {item.km}{' '}
                          </Text>
                        </View>
                      </View>
                    </View>
                  ))}
                </View>
              </ScrollView>
            )}
            {tab === 3 && (
              <ScrollView>
                <View>
                  {DATA_4.map((item) => (
                    <View key={item.id}>
                      <View style={{flexDirection: 'row', marginBottom: 10}}>
                        <View style={{width: 100, height: 100}}>
                          <Image
                            source={{uri: item.image}}
                            style={{
                              width: '100%',
                              height: '100%',
                              borderRadius: 5,
                            }}
                          />
                        </View>
                        <View
                          style={{
                            flex: 1,
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            marginHorizontal: 10,
                          }}>
                          <Text style={{fontWeight: 'bold', fontSize: 16}}>
                            {item.name}
                          </Text>
                          <Text>{item.price}</Text>
                          <Text>{item.sale}</Text>
                        </View>
                        <View
                          style={{
                            flexDirection: 'column',
                            justifyContent: 'center',
                          }}>
                          <Text style={{fontWeight: 'bold', fontSize: 14}}>
                            {item.km}{' '}
                          </Text>
                        </View>
                      </View>
                    </View>
                  ))}
                </View>
              </ScrollView>
            )}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    margin: 0,
    padding: 0,
    backgroundColor: '#ff324d',
    height: 90,
  },
  header_top: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
    marginHorizontal: 10,
  },
  header_top_right: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
  },
  right_input: {
    flex: 1,
    paddingHorizontal: 5,
    paddingVertical: 5,
    fontSize: 14,
    fontWeight: 'bold',
  },
  right_select: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginRight: 5,
  },
  right_select_text: {
    fontSize: 14,
    color: '#666666',
    marginRight: 5,
    fontWeight: 'bold',
  },
  header_bottom: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
    marginHorizontal: 10,
  },
  header_bottom_left: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#fff',
    marginRight: 10,
  },
  header_bottom_mid: {
    flex: 1,
    fontSize: 14,
    color: '#fff',
  },
  wrapper: {
    padding: 10,
    width: '100%',
    height: 150,
  },
  slide: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
});
