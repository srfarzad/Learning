/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

const Tab = createBottomTabNavigator();

import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';
import CategoryScreen from './screens/CategoryScreen';
import ArticleScreen from './screens/ArticleScreen'
import CategoryArticles from './screens/CategoryArticles'
const HomeStack = createStackNavigator();
import Ionicons from 'react-native-vector-icons/Ionicons';



const HomeStackScreens = ({navigation,route})=>(

  <HomeStack.Navigator>
  <HomeStack.Screen name="Home" component={HomeScreen} options={{title:"Navin Learn",
  headerStyle: {
    backgroundColor: '#3f51b5',
  }, headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold', alignSelf: 'center'
  },
}}></HomeStack.Screen>
  <HomeStack.Screen name="ArticleScreen" component={ArticleScreen} 

options={({ route }) => ({
  
  title: route.params.title })}

  
  ></HomeStack.Screen>
  </HomeStack.Navigator>
)

const CategoryStackScreens = ({navigation})=>(

  <HomeStack.Navigator >
  <HomeStack.Screen name="CategoryScreen" component={CategoryScreen}></HomeStack.Screen>
  <HomeStack.Screen name="CategoryArticles" component={CategoryArticles}
  
  
  
options={({ route }) => ({
  
  title: route.params.titles })}

  
  
  ></HomeStack.Screen>
  </HomeStack.Navigator>
)



const AboutStackScreens = ({navigation})=>(

  <HomeStack.Navigator>
  <HomeStack.Screen name="AboutScreen" component={AboutScreen}></HomeStack.Screen>
  </HomeStack.Navigator>
)




export default function App (){
  return (
   
   
    <NavigationContainer>
    <Tab.Navigator
    
    screenOptions={({ route }) => ({
      tabBarIcon: ({ color, size }) => {
        let iconName;
        if (route.name == "Home") {
          iconName = "ios-home";
        } else if (route.name == "Category") {
          iconName = "logo-rss";
        } else if (route.name == "Setting") {
          iconName = "ios-settings";
        }
        return <Ionicons name={iconName} size={size} color={color} />;
      }
    })}
    
    
    >
    <Tab.Screen name="Home" component={HomeStackScreens} />
    <Tab.Screen name="Category" component={CategoryStackScreens} />
    <Tab.Screen name="About" component={AboutStackScreens} />

    </Tab.Navigator>
  </NavigationContainer>

  );
};
