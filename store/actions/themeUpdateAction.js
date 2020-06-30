import {THEME_UPDATE, INIT_APP_THEME} from './types';
import AsyncStorage from '@react-native-community/async-storage';
import store from '../store';

export const updateTheme = (themeName) => {
  return {type: THEME_UPDATE, payload: themeName};
};

export const initAppTheme = () => {
  return (dispatch) => {
    getAsyncStorageThemeKey().then((key) => {
      return dispatch({type: INIT_APP_THEME, payload: key});
    });
  };
};

async function getAsyncStorageThemeKey() {
  key = await AsyncStorage.getItem('selectedThemeKey');
  if (key !== null) {
    return key;
  } else {
    await AsyncStorage.setItem('selectedThemeKey', 'defaultTheme');
    return 'defaultTheme';
  }
}

store.dispatch(initAppTheme());
