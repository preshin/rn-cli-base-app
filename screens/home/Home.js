/* eslint-disable react-native/no-inline-styles */
import React, {useContext, useEffect} from 'react';
import {StyleSheet, View, SafeAreaView, ScrollView} from 'react-native';
import {ThemeContext, Card, Text, ListItem} from 'react-native-elements';
import globalStyles from '../../utils/globalStyles';
// import i18n from "../../translations/i18n";
import t from '../../translations/Translate';
const Home = () => {
  const {theme} = useContext(ThemeContext);
  useEffect(() => {
    // effect
    // return () => {
    //   cleanup
    // }
  }, []);
  return (
    <SafeAreaView
      style={{
        ...globalStyles.container,
        backgroundColor: theme.colors.primary,
      }}>
      <ScrollView>
        <Text>{t('hello')}</Text>
        <Card
          title="Account Summary"
          containerStyle={{...globalStyles.shadow, ...globalStyles.card}}>
          <View style={{flexDirection: 'row'}}>
            <View style={{flex: 0.5, padding: 10}}>
              <Text style={globalStyles.fonts[18]}>540/-</Text>
              <Text>Money to Spend</Text>
            </View>
            <View style={{flex: 0.5, padding: 10}}>
              <Text>1234/-</Text>
              <Text>Total Savings</Text>
            </View>
          </View>
          <View style={{alignItems: 'center', padding: 10}}>
            <View>
              <Text>Total Money 123456</Text>
            </View>
          </View>
        </Card>
        {/* <ListItem
          // component={TouchableScale}
          friction={90}
          tension={100}
          activeScale={0.95}
          // avatarStyle={{
          //   backgroundColor: "red",
          // }}
          leftAvatar={{
            rounded: true,
            icon: {
              name: "ios-notifications-outline",
              color: theme.colors.primary,
              type: "ionicon",
            },
            iconStyle: { backgroundColor: theme.colors.secondary },
            // avatarStyle: {
            //   backgroundColor: "transparent",
            // },
            // source: {
            //   uri:
            //     "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
            // },
            // showEditButton: true,
          }}
          // key={i}
          linearGradientProps={{
            colors: ["#FF9800", "#F44336"],
            // colors: [theme.colors.secondary, theme.colors.pri],
            start: [1, 0],
            end: [0.2, 0],
          }}
          // ViewComponent={LinearGradient}
          title={"User"}
          titleStyle={{ color: "white", fontWeight: "bold" }}
          subtitleStyle={{ color: "white" }}
          subtitle={"This is a subtile"}
          chevronColor={theme.colors.secondary}
          chevron
          containerStyle={{
            // marginHorizontal: 16,
            // marginVertical: 8,
            // borderRadius: 8,
            ...globalStyles.card,
            ...globalStyles.shadow,
          }}
        /> */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
