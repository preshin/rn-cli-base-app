import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as React from "react";

import FeedStackNavigator from "./FeedStackNavigator";
import SpendStackNavigator from "./SpendStackNavigator";
import TabBarIcon from "../components/TabBarIcon";
import { useContext } from "react";
import { ThemeContext, Icon } from "react-native-elements";

const HomeBottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = "Home";

export default function HomeBottomTabNavigator(props) {
  const { theme } = useContext(ThemeContext);

  props.navigation.setOptions({ headerTitle: getHeaderTitle(props.route) });

  return (
    <HomeBottomTab.Navigator
      initialRouteName="FeedStackNav"
      tabBarOptions={{
        activeTintColor: theme.colors.secondary,
        // inactiveTintColor: theme.colors.disabled,
        labelStyle: {
          fontSize: 15,
          // padding: 5,
          // backgroundColor: "red",
        },
        tabStyle: {
          // padding: 10,
          // backgroundColor: "green",
          // marginVertical: 50,
        },
        style: {
          backgroundColor: theme.colors.primary,
          // paddingTop: 5,
          // height: 100,
          // padding: 15,
          // marginVertical: 10,
        },
      }}
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
      <HomeBottomTab.Screen
        name="FeedStackNav"
        component={FeedStackNavigator}
        options={{
          title: "Feed",
          tabBarIcon: ({ focused, color }) => (
            <Icon
              focused={focused}
              name="md-home"
              type="ionicon"
              color={color}
            />
          ),
        }}
      />
      <HomeBottomTab.Screen
        name="SpendStackNav"
        component={SpendStackNavigator}
        {...props}
        options={{
          title: "Spend",
          tabBarIcon: ({ focused, color }) => (
            <Icon
              focused={focused}
              name="ios-card"
              type="ionicon"
              color={color}
            />
          ),
        }}
      />
    </HomeBottomTab.Navigator>
  );
}

function getHeaderTitle(route) {
  const routeName =
    route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case "FeedStackNav":
      return "Feed";
    case "SpendStackNav":
      return "Spend";
  }
}
