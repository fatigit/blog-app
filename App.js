import React from 'react';
import {Text, StyleSheet, SafeAreaView, View} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import IndexScreen from './src/screens/IndexScreen';
import { BlogProvider } from './src/context/BlogContext';


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Index"
          component={IndexScreen}
          options={{title: 'Blog'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default () => {
  return (
    <BlogProvider>
      <App />
    </BlogProvider>
  )
};