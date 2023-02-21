import React, { useContext } from "react";
import { StyleSheet, TextInput, Button } from 'react-native';
import BlogPostForm from "../components/BlogPostForm";
import { Context } from "../context/BlogContext";

const EditScreen = ({ navigation, route }) => {
    const id = route.params.id;
    const { state, editBlogPost } = useContext(Context);

    const blogPost = state.find(blogPost => blogPost.id === id)

    return <BlogPostForm 
        initialValues={{ title: blogPost.title, content: blogPost.content }}
        onSubmit={(title, content) => {
        editBlogPost(id, title, content, () => navigation.pop());
    }}/>
};

const styles = StyleSheet.create({});

export default EditScreen;