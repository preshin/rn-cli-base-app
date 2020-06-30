import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

// import * as Font from 'expo-font';
// import {Ionicons} from '@expo/vector-icons';
// import {SplashScreen} from 'expo';
import IntroSlider from './screens/IntroSlider';
import {Provider} from 'react-redux';
import store from './store/store';
import Main from './Main';
import * as RNLocalize from 'react-native-localize';
import i18n from 'i18n-js';
import _ from 'lodash';
import t from './translations/Translate';

const translationGetters = {
  en: () => require('./translations/en.json'),
  nl: () => require('./translations/nl.json'),
};
const translate = _.memoize(
  (key, config) => i18n.t(key, config),
  (key, config) => (config ? key + JSON.stringify(config) : key),
);
const setI18nConfig = () => {
  const fallback = {languageTag: 'en'};
  const {languageTag} =
    RNLocalize.findBestAvailableLanguage(Object.keys(translationGetters)) ||
    fallback;

  translate.cache.clear();

  i18n.translations = {[languageTag]: translationGetters[languageTag]()};
  i18n.locale = languageTag;
  console.log('languageTag', languageTag);
};

class AppCopy extends Component {
  state = {
    isLoadingComplete: false,
    isIntroDone: false,
  };

  constructor(props) {
    super(props);
    setI18nConfig();
  }

  componentDidMount() {
    this.loadResourcesAndDataAsync();

    RNLocalize.addEventListener('change', this.handleLocalizationChange);
  }

  componentWillUnmount() {
    RNLocalize.removeEventListener('change', this.handleLocalizationChange);
  }

  handleLocalizationChange = () => {
    setI18nConfig()
      .then(() => this.forceUpdate())
      .catch((error) => {
        console.error(error);
      });
  };

  async loadResourcesAndDataAsync() {
    try {
      //   SplashScreen.preventAutoHide();
      // Load our initial navigation state
      // setInitialNavigationState(await getInitialState());
      // Load fonts
      //   await Font.loadAsync({
      // ...Ionicons.font,
      // "space-mono": require("./assets/fonts/SpaceMono-Regular.ttf"),
      // 'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
      //   });
    } catch (e) {
      // We might want to provide this error information to an error reporting service
      console.warn(e);
    } finally {
      this.setState(
        {
          isLoadingComplete: true,
        },
        () => {
          //   SplashScreen.hide();
          this._retrieveData();
        },
      );
    }
  }

  _retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem('isUserFirstTime');
      // setIsIntroDone(value);
      if (value !== null) {
        // We have data!!
        if (value === 'true') {
          this.setState({isIntroDone: true});
        }
      }
    } catch (error) {
      // Error retrieving data
      console.log('error', error);
    }
  };

  _storeData = async () => {
    // setIsIntroDone(true);
    try {
      await AsyncStorage.setItem('isUserFirstTime', 'true');
      this.setState({isIntroDone: true});
    } catch (error) {
      // Error saving data
    }
  };

  render() {
    // if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
    //   return null;
    // } else if (!this.state.isIntroDone) {
    //   return <IntroSlider onDone={this._storeData} key={123} />;
    // } else {
    //   return (
    //     <Provider store={store}>
    //       <Main />
    //     </Provider>
    //   );
    // }

    return <Text>{t('hellosss')}</Text>;
  }
}

export default AppCopy;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
