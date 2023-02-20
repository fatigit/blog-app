import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList, Button } from 'react-native';

import { Context } from '../context/BlogContext';
import Icon from 'react-native-vector-icons/MaterialIcons';


const IndexScreen = () => {
  const { state, addBlogPost } = useContext(Context);

  return (
    <View>
      <Icon name='delete'/>
      <Button title="Add Post" onPress={addBlogPost} />
      <FlatList
        data={state}
        keyExtractor={blogPost => blogPost.title}
        renderItem={({ item }) => {
          return (
            <View> 
              <Text>{item.title}</Text>
            </View>
          )
        }}
      />
    </View>

  );
};

const styles = StyleSheet.create({});

export default IndexScreen;