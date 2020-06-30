import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import Login from "../screens/login/Login";
import SignUp from "../screens/login/SignUp";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import ForgotPassword from "../screens/login/ForgotPassword";
import { useContext } from "react";
import { ThemeContext } from "react-native-elements";

const LoginStack = createStackNavigator();
const LoginStackNavigator = (props) => {
  const { theme } = useContext(ThemeContext);
  console.log("====================================");
  console.log("home nav props", props.route);
  console.log("====================================");
  return (
    <NavigationContainer>
      <LoginStack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerStyle: {
            backgroundColor: theme.appTheme.colors.primary,
          },
          headerTintColor: theme.appTheme.colors.secondary,
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        <LoginStack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <LoginStack.Screen
          name="ForgotPassword"
          component={ForgotPassword}
          options={{
            // headerShown: false,
            title: "Forgot Password",
          }}
        />
        <LoginStack.Screen
          name="Signup"
          component={SignUp}
          options={{ title: "Sign Up" }}
        />
      </LoginStack.Navigator>
    </NavigationContainer>
  );
};

export default LoginStackNavigator;
