import React, {Fragment} from 'react';
import {
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
  SafeAreaView,
  Image,
} from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import HomeBottomTabNavigator from './HomeBottomTabNavigator';
import AboutStackNavigator from './AboutStackNavigator';
import {useContext} from 'react';
import {ThemeContext} from 'react-native-elements';
import ChangeTheme from '../screens/settings/ChangeTheme';
import TabBarIcon from '../components/TabBarIcon';

const AppDrawer = createDrawerNavigator();

function CustomDrawerContent(props) {
  const {theme} = useContext(ThemeContext);

  return (
    <Fragment>
      <SafeAreaView>
        <View
          style={{
            // display: "flex",
            justifyContent: 'center',
            alignItems: 'center',
            marginVertical: 30,
          }}>
          <Text style={{color: theme.colors.secondary, fontSize: 40}}>
            rn-cli-base-app
          </Text>
          {/* <Image
            source={require("../assets/icon.jpg")}
            style={{ width: "70%" }}
            resizeMode="contain"
          /> */}
        </View>
      </SafeAreaView>
      <DrawerContentScrollView {...props}>
        {/* <DrawerItem label="Help" onPress={() => alert("Link to help")} /> */}
        <DrawerItemList {...props} />
        <ChangeTheme />
      </DrawerContentScrollView>
    </Fragment>
  );
}

export default function AppDrawerNavigator() {
  const {theme} = useContext(ThemeContext);
  const dimensions = useWindowDimensions();
  return (
    <NavigationContainer>
      <AppDrawer.Navigator
        drawerContent={(props) => <CustomDrawerContent {...props} />}
        initialRouteName="HomeBottomNav"
        // drawerType={dimensions.width > 900 ? "permanent" : "front"}
        drawerStyle={{
          backgroundColor: theme.colors.primary,
        }}
        drawerContentOptions={{
          activeTintColor: theme.colors.secondary,
          inactiveTintColor: theme.colors.grey2,
          itemStyle: {
            // flex: 1,
            // width: "100%",
            // marginVertical: 10,
            // backgroundColor: "red",
          },
          labelStyle: {
            // flex: 1,
            // width: "100%",
            width: 200,
            fontSize: 15,
            marginLeft: 0,
            // backgroundColor: "red",
          },
          contentContainerStyle: {
            // backgroundColor: "red",
            // width: 30,
          },
        }}>
        <AppDrawer.Screen
          name="HomeBottomNav"
          component={HomeBottomTabNavigator}
          options={{
            title: 'Home',
            drawerIcon: ({size, color, focused}) => (
              // <MaterialIcons size={size} color={color} name="folder" />
              <TabBarIcon focused={focused} name="md-home" color={color} />
            ),
          }}
        />
        <AppDrawer.Screen
          name="AboutStackNav"
          component={AboutStackNavigator}
          options={{
            title: 'About',
            drawerIcon: ({size, color, focused}) => (
              // <MaterialIcons size={size} color={color} name="folder" />
              <TabBarIcon focused={focused} name="md-book" color={color} />
            ),
          }}
        />
        {/* <AppDrawer.Screen
          name="ChangeThemeStackNav"
          component={ChangeTheme}
          options={{
            title: "Change Theme",
            drawerIcon: ({ size, color, focused }) => (
              // <MaterialIcons size={size} color={color} name="folder" />
              <TabBarIcon focused={focused} name="md-tv" color={color} />
            ),
          }}
        /> */}
      </AppDrawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
