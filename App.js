import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
// import * as Font from 'expo-font';
// import { Ionicons } from '@expo/vector-icons';
// import { SplashScreen } from 'expo';
import IntroSlider from './screens/IntroSlider';
import {Provider} from 'react-redux';
import store from './store/store';
import Main from './Main';

export default function App(props) {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);
  const [isIntroDone, setIsIntroDone] = React.useState(false);

  // Load any resources or data that we need prior to rendering the app
  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        // SplashScreen.preventAutoHide();
        // Load our initial navigation state
        // setInitialNavigationState(await getInitialState());
        // Load fonts
        // await Font.loadAsync({
        //   ...Ionicons.font,
        //   // "space-mono": require("./assets/fonts/SpaceMono-Regular.ttf"),
        //   "nunito-regular": require("./assets/fonts/Nunito-Regular.ttf"),
        // });
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        // SplashScreen.hide();
        _retrieveData();
      }
    }

    const _retrieveData = async () => {
      try {
        const value = await AsyncStorage.getItem('isUserFirstTime');
        // setIsIntroDone(value);
        if (value !== null) {
          // We have data!!
          if (value === 'true') {
            setIsIntroDone(true);
          }
        }
      } catch (error) {
        // Error retrieving data
        console.log('error', error);
      }
    };

    loadResourcesAndDataAsync();
  }, []);

  const _storeData = async () => {
    // setIsIntroDone(true);
    try {
      await AsyncStorage.setItem('isUserFirstTime', 'true');
      setIsIntroDone(true);
    } catch (error) {
      // Error saving data
    }
  };

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return null;
  } else if (!isIntroDone) {
    return <IntroSlider onDone={_storeData} key={123} />;
  } else {
    return (
      <Provider store={store}>
        <Main />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
