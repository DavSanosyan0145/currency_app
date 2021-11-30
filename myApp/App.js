import React from 'react';
import { StyleSheet, SafeAreaView, } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Entypo from 'react-native-vector-icons/Entypo';
import { NavigationContainer } from '@react-navigation/native';

import { HomeScreen } from './src/HomeScreen';
import { NewsScreen } from './src/NewsScreen';
import { Converter } from './src/Converter';
import { Header } from './src/Header';

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Converter"
          activeColor="white"
          inactiveColor="silver"
          barStyle={{
            height: '9%',
            padding: 4,
            backgroundColor: 'black',
            borderTopRightRadius: 15,
            borderTopLeftRadius: 15,
          }}
        >
          <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{
              tabBarLabel: 'Current currency',
              tabBarIcon: ({ color }) => (
                <Entypo name="bar-graph" color={color} size={25} />
              ),
            }}
          />
          <Tab.Screen
            name="Converter"
            component={Converter}
            options={{
              tabBarLabel: 'Convert',
              tabBarIcon: ({ color }) => (
                <Entypo name="cycle" color={color} size={25} />
              ),
            }}
          />
          <Tab.Screen
            name="News"
            component={NewsScreen}
            options={{
              tabBarLabel: 'News',
              tabBarIcon: ({ color }) => (
                <Entypo name="list" color={color} size={25} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>

    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: '#EEEEEE',

  },

});
