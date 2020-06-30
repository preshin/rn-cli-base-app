import {THEME_UPDATE, INIT_APP_THEME} from '../actions/types';
import theme from '../../utils/theme';
import AsyncStorage from '@react-native-community/async-storage';

const INITIAL_STATE = {
  theme: theme.defaultTheme,
  themeKey: 'defaultTheme',
};
const updatThemeKey = async (key) => {
  try {
    await AsyncStorage.setItem('selectedThemeKey', key);
  } catch (error) {
    console.log(error);
  }
};

const themeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case INIT_APP_THEME:
      return {
        ...state,
        theme: theme[action.payload],
        themeKey: action.payload,
      };
    case THEME_UPDATE:
      console.log('update', action.payload);
      updatThemeKey(action.payload);
      return {
        ...state,
        theme: theme[action.payload],
        themeKey: action.payload,
      };
    default:
      return state;
  }
};

export default themeReducer;
