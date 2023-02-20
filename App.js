import React from 'react';
import {Text, StyleSheet, SafeAreaView, View} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import IndexScreen from './src/screens/IndexScreen';
import { Provider } from './src/context/BlogContext';
import ShowScreen from './src/screens/ShowScreen';


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
        <Stack.Screen 
          name="Show"
          component={ShowScreen}
          options={{title: 'Show Screen'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default () => {
  return (
    <Provider>
      <App />
    </Provider>
  )
};