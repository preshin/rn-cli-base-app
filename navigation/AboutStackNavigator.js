import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import About from "../screens/About";
import { Button } from "react-native";
import HamMenuIcon from "../components/HamMenuIcon";
import { useContext } from "react";
import { ThemeContext } from "react-native-elements";

const AboutStack = createStackNavigator();
const AboutStackNavigator = (props) => {
  const { theme } = useContext(ThemeContext);

  return (
    <AboutStack.Navigator
      initialRouteName="About"
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
      <AboutStack.Screen
        name="About"
        component={About}
        // options={{
        //   // headerTitle: props => <LogoTitle {...props} />,
        //   headerRight: () => (
        //     <Button
        //       onPress={() => alert("This is a button!")}
        //       title="Info"
        //       color="#fff"
        //     />
        //   )
        // }}
        options={{
          title: "About",
          headerLeft: () => <HamMenuIcon {...props} />,
        }}
      />
    </AboutStack.Navigator>
  );
};

export default AboutStackNavigator;
