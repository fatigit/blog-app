import createDataContext from './createDataContext';

const blogReducer = (state, action) => {
  switch (action.type) {
    case 'delete_blogpost':
      return state.filter(blogPost => blogPost.id !== action.payload);
    case 'add_blogpost':
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 99999),
          title: action.payload.title,
          content: action.payload.content
        },
      ];
    default:
      return state;
  }
};

const addBlogPost = dispatch => {
  return (title, content, callback) => {
    dispatch({type: 'add_blogpost', payload: {title, content}});
    callback();
  };
};

const deleteBlogPost = dispatch => {
  return id => {
    dispatch({type: 'delete_blogpost', payload: id});
  };
};

export const {Context, Provider} = createDataContext(
  blogReducer,
  {addBlogPost, deleteBlogPost},
  [],
);

// Below code includes useState instead of useReducer for same work.
/*
import React, { useState } from "react";

const BlogContext = React.createContext();

export const BlogProvider = ({ children }) => {

    const [blogPosts, setBlogPosts] = useState([]);

    const addBlogPost = () => {
        setBlogPosts([...blogPosts, { title: `Blog Post #${blogPosts.length + 1}` }]);
    }


    return (
        <BlogContext.Provider value={{ data: blogPosts, addBlogPost }}>
            {children}
        </BlogContext.Provider>
    );
};

export default BlogContext;
*/
