import createDataContext from "./createDataContext";

const blogReducer = (state, action) => {
  const { payload, type } = action;
  switch (type) {
    case "add_post":
      return [
        ...state,
        { title: payload.title, id: payload.id, content: payload.content },
      ];
    case "delete_post":
      return state.filter((blog) => blog.id !== payload.id);
    case "edit_post":
      return state.map((post) => {
        return post.id == payload.id ? payload : post;
      });
    default:
      return state;
  }
};

export const { Context, Provider } = createDataContext(blogReducer, []);

// function arrayRemove(arr, value) {
//   return arr.filter(function (ele) {
//     return ele != value;
//   });
// }
