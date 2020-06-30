import React, { useContext, useState, useEffect } from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { updateTheme } from "../../store/actions/themeUpdateAction";
import { Button, ThemeContext, withTheme, Avatar } from "react-native-elements";
import { useDispatch, useSelector } from "react-redux";
import theme from "../../utils/theme";
import globalStyles from "../../utils/globalStyles";
import _ from "lodash";

const ChangeTheme = (props) => {
  const appSelectedTheme = useContext(ThemeContext);
  const dispatch = useDispatch();
  console.log("keys", _.keys(theme), globalStyles.fonts[18]);

  const updateAppTheme = (key) => {
    console.log("inside update theme", key, theme[key]);
    props.updateTheme({ ...theme[key] });
    dispatch(updateTheme(key));
  };
  return (
    // <View style={{}}>
    //   <Text>ChangeTheme</Text>
    //   <Button
    //     onPress={() => updateAppTheme("defaultTheme")}
    //     title="Default Theme"
    //   />
    //   <Button onPress={() => updateAppTheme("darkTheme")} title="Dark Theme" />
    // </View>
    <SafeAreaView style={globalStyles.container}>
      <View style={styles.title}>
        <Text
          style={{
            ...globalStyles.fonts[18],
            color: appSelectedTheme.theme.colors.secondary,
          }}
        >
          Change Theme
        </Text>
      </View>
      <View style={styles.avatarContainer}>
        {_.keys(theme).map((key) => {
          console.log("############", key);
          return (
            <Avatar
              key={key}
              onPress={() => updateAppTheme(key)}
              rounded
              avatarStyle={{
                backgroundColor: theme[key].colors.primary,
              }}
              containerStyle={styles.avatar}
              overlayContainerStyle={{
                borderColor: theme[key].colors.secondary,
                borderWidth: 3,
              }}
            />
          );
        })}
      </View>
    </SafeAreaView>
  );
};

export default withTheme(ChangeTheme);

const styles = StyleSheet.create({
  avatarContainer: {
    flexDirection: "row",
  },
  avatar: {
    marginHorizontal: 5,
  },
  title: {
    alignItems: "center",
    marginVertical: 10,
    paddingBottom: 10,
  },
});
