import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import Spend from "../screens/spend/Spend";
import { StyleSheet } from "react-native";
import { useContext } from "react";
import { ThemeContext, Icon } from "react-native-elements";
import HamMenuIcon from "../components/HamMenuIcon";

const SpendStack = createStackNavigator();
const SpendStackNavigator = (props) => {
  const { theme } = useContext(ThemeContext);

  return (
    <SpendStack.Navigator
      initialRouteName="Spend"
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
      <SpendStack.Screen
        name="Spend"
        component={Spend}
        options={{
          title: "Spends",
          headerLeft: () => <HamMenuIcon {...props} />,
        }}
      />
    </SpendStack.Navigator>
  );
};

export default SpendStackNavigator;

const styles = StyleSheet.create({});
