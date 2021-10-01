import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import IndexScreen from "./src/screens/IndexScreen";
import { Provider as BlogProvider } from "./src/context/BlogContext";

const navigator = createStackNavigator(
  {
    Index: IndexScreen,
  },
  {
    initialRouteName: "Index",
    defaultNavigationOptions: {
      title: "Blog",
    },
  }
);

const App = createAppContainer(navigator);

// Blog post provider setup == to manage global state
export default () => {
  return (
    <BlogProvider>
      <App />
    </BlogProvider>
  );
};
