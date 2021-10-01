import React, { useReducer } from "react";

const BlogContext = React.createContext();

const blogReducer = (state, action) => {
  switch (action.type) {
    case "add_post":
      return [...state, { title: action.payload }];
    default:
      return state;
  }
};

export const BlogProvider = ({ children }) => {
  // useState code
  // const [blogPosts, setBlogPosts] = useReducer([]);
  // const addBlogPost = (name) => {
  //   setBlogPosts([...blogPosts, { title: name }]);
  // };

  const [blogPosts, dispatch] = useReducer(blogReducer, []);

  return (
    <BlogContext.Provider value={{ data: blogPosts, dispatch }}>
      {children}
    </BlogContext.Provider>
  );
};

export default BlogContext;
