import React from 'react';
import {Text, StyleSheet, SafeAreaView, View} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import IndexScreen from './src/screens/IndexScreen';


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


export default App;