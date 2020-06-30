import * as RNLocalize from 'react-native-localize';
import i18n from 'i18n-js';
import _ from 'lodash';

// const translationGetters = {
//   en: () => require('./translations/en.json'),
//   nl: () => require('./translations/nl.json'),
// };
// const translate = _.memoize(
//   (key, config) => i18n.t(key, config),
//   (key, config) => (config ? key + JSON.stringify(config) : key),
// );
// const setI18nConfig = () => {
//   const fallback = {languageTag: 'en'};
//   const {languageTag} =
//     RNLocalize.findBestAvailableLanguage(Object.keys(translationGetters)) ||
//     fallback;

//   translate.cache.clear();

//   i18n.translations = {[languageTag]: translationGetters[languageTag]()};
//   i18n.locale = languageTag;
//   console.log('languageTag', languageTag);
// };

class Translate {
  constructor() {
    this.setI18nConfig();
    RNLocalize.addEventListener('change', this.handleLocalizationChange);
  }
  translationGetters = {
    en: () => require('./en.json'),
    nl: () => require('./nl.json'),
  };
  translate = _.memoize(
    (key, config) => i18n.t(key, config),
    (key, config) => (config ? key + JSON.stringify(config) : key),
  );
  setI18nConfig = () => {
    const fallback = {languageTag: 'en'};
    const {languageTag} =
      RNLocalize.findBestAvailableLanguage(
        Object.keys(this.translationGetters),
      ) || fallback;

    this.translate.cache.clear();

    i18n.defaultLocale = 'en';
    i18n.translations = {[languageTag]: this.translationGetters[languageTag]()};
    i18n.locale = languageTag;
    i18n.fallbacks = true;
    i18n.missingBehaviour = 'guess';
    console.log('languageTag', languageTag);
  };
  handleLocalizationChange = () => {
    this.setI18nConfig()
      .then(() => this.forceUpdate())
      .catch((error) => {
        console.error(error);
      });
  };
}

const t = new Translate();
export default t.translate;
