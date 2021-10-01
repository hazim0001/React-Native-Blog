import createDataContext from "./createDataContext";

const blogReducer = (state, action) => {
  switch (action.type) {
    case "add_post":
      return [...state, { title: action.payload }];
    default:
      return state;
  }
};

export const { Context, Provider } = createDataContext(blogReducer, []);
