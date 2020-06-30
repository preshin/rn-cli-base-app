import React, {Fragment, useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import LoginStackNavigator from './navigation/LoginStackNavigator';
import Spinner from 'react-native-loading-spinner-overlay';
import {ThemeProvider} from 'react-native-elements';
import AppDrawerNavigator from './navigation/AppDrawerNavigator';

const Main = (props) => {
  const {isAuthenticated, isLoading} = useSelector(({login, loading}) => ({
    isAuthenticated: login.isAuthenticated,
    isLoading: loading.isLoading,
  }));
  const appTheme = useSelector(({theme}) => theme.theme);

  console.log('====================================');
  console.log(appTheme);
  console.log('====================================');

  return (
    <ThemeProvider theme={appTheme}>
      <Fragment>
        {/* {isLoading && (
          <Spinner
            visible={isLoading}
            textContent={"Loading..."}
            textStyle={styles.spinnerTextStyle}
          />
        )}
        {!isAuthenticated && !isLoading && <LoginStackNavigator />}
        {isAuthenticated && !isLoading && <AppDrawerNavigator />} */}
        <Spinner
          visible={isLoading}
          // textContent={"Loading..."}
          textStyle={styles.spinnerTextStyle}
        />
        {isAuthenticated && <LoginStackNavigator />}
        {!isAuthenticated && <AppDrawerNavigator />}
      </Fragment>
    </ThemeProvider>
  );
};

export default Main;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#fff",
    alignItems: 'center',
    justifyContent: 'center',
  },
  spinnerTextStyle: {
    color: '#FFF',
  },
});
