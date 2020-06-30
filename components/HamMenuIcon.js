import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Icon, ThemeContext } from "react-native-elements";
import { useContext } from "react";
import { DrawerActions } from "@react-navigation/native";

const HamMenuIcon = (props) => {
  const { theme } = useContext(ThemeContext);

  return (
    <Icon
      name="md-menu"
      size={38}
      type="ionicon"
      iconStyle={{ paddingLeft: 10, color: theme.colors.secondary }}
      onPress={() => props.navigation.dispatch(DrawerActions.toggleDrawer())}
    />
  );
};

export default HamMenuIcon;

const styles = StyleSheet.create({});
