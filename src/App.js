import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Delivery from './Screen/Delivery';
import Test from './Screen/Test';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Detail from './Screen/Detail';
const Stack = createStackNavigator();
const App = () => {
  return (
    // <Delivery />
    <Detail />
  );
};

const styles = StyleSheet.create({});
export default App;
