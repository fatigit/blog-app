import React, { useContext } from "react";
import { Text, View, StyleSheet } from 'react-native';
import { Context } from "../context/BlogContext";


const ShowScreen = ({navigation, route}) => {
    const { state } = useContext(Context);


    const blogPost = state.find((blogPost) => blogPost.id === route.params.id);

    console.log(route.params.id);
    return (
        <View>
            <Text>{blogPost.title}</Text>
            <Text>{blogPost.content}</Text>
        </View>
    );
};

const styles = StyleSheet.create({});

export default ShowScreen;