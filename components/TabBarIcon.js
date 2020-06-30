import * as React from "react";
import Colors from "../utils/Colors";
import { useContext } from "react";
import { ThemeContext, Icon } from "react-native-elements";

export default function TabBarIcon(props) {
  const { theme } = useContext(ThemeContext);
  const { color } = props;
  return (
    <Icon
      name={props.name}
      type="ionicon"
      size={30}
      style={{ marginBottom: -3 }}
      // color={props.focused ? theme.colors.secondary : theme.colors.greyOutline}
      color={
        color
          ? color
          : props.focused
          ? theme.colors.secondary
          : theme.colors.disabled
      }
    />
  );
}
