import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/home/Home";
import { useContext } from "react";
import { ThemeContext } from "react-native-elements";
import { Icon } from "react-native-elements";
import { DrawerActions } from "@react-navigation/native";
import HamMenuIcon from "../components/HamMenuIcon";

const FeedStack = createStackNavigator();
const FeedStackNavigator = (props) => {
  const { theme } = useContext(ThemeContext);

  return (
    <FeedStack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.colors.primary,
        },
        headerTintColor: theme.colors.secondary,
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <FeedStack.Screen
        name="HomeScreen"
        component={Home}
        options={{
          title: "Feed",
          headerLeft: () => <HamMenuIcon {...props} />,
        }}
      />
      {/* <FeedStack.Screen
        name="InSideFeedScreen"
        component={InSideFeed}
        title="Inside Feed"
        options={{
          headerLeft: null,
          gestureEnabled: false
        }}
      /> */}
    </FeedStack.Navigator>
  );
};

export default FeedStackNavigator;
