import createDataContext from "./createDataContext";
import jsonServer from "../api/jsonServer";

const blogReducer = (state, action) => {
  const { payload, type } = action;
  switch (type) {
    case "fetch_posts":
      return payload;
    // case "add_post":
    //   return [
    //     ...state,
    //     { title: payload.title, id: payload.id, content: payload.content },
    //   ];
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

const fetchPosts = (dispatch) => {
  try {
    return async () => {
      const response = await jsonServer.get("/blogposts");

      dispatch({ type: "fetch_posts", payload: response.data });
    };
  } catch (error) {
    alert("Something went wrong we cant fetch your blog posts at the moment.");
  }
};

const createPost = (dispatch) => {
  try {
    return async (title, content, callBack) => {
      await jsonServer.post("/blogposts", { title, content });

      if (callBack) {
        callBack();
      }
    };
  } catch (error) {
    alert("error.message");
  }
};

const deletePost = (dispatch) => {
  try {
    return async (id) => {
      await jsonServer.delete(`/blogposts/${id}`);
      dispatch({ type: "delete_post", payload: { id: id } });
    };
  } catch (error) {
    alert("error.message");
  }
};

const editPost = (dispatch) => {
  try {
    return async (id, title, content, callBack) => {
      await jsonServer.put(`/blogposts/${id}`, { title, content });
      dispatch({
        type: "edit_post",
        payload: {
          title,
          content,
          id,
        },
      });

      if (callBack) {
        callBack();
      }
    };
  } catch (error) {}
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  { createPost, fetchPosts, deletePost, editPost },
  []
);
