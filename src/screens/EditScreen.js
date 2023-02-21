import React, { useState, useContext } from "react";
import { Text, View, StyleSheet, TextInput, Button } from 'react-native';
import { Context } from "../context/BlogContext";

const EditScreen = ({ navigation, route }) => {
    const { state } = useContext(Context);

    const blogPost = state.find((blogPost) => blogPost.id === route.params.id);

    const [title, setTitle] = useState(blogPost.title);
    const [content, setContent] = useState(blogPost.content);

    return (
        <View>
            <Text style={styles.label}>Edit Title:</Text>
            <TextInput value={title} onChangeText={(newTitle) => setTitle(newTitle)} style={styles.input}/>
            <Text style={styles.label}>Edit Content:</Text>
            <TextInput style={styles.input} value={content}/>
            <Button title="Edit Blog Post" />
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
      fontSize: 18,
      borderWidth: 1,
      borderColor: 'black',
      marginBottom: 15,
      padding: 5,
      margin: 5,
    },
    label: {
      fontSize: 20,
      marginBottom: 10,
      marginLeft: 5,
    },
});

export default EditScreen;