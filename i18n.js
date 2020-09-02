import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import locale from 'react-native-locale-detector'
import AsyncStorage from '@react-native-community/async-storage'

import ar from './i18n/ar.json'
import en from './i18n/en.json'

export const STORAGE_KEY = '@APP:languageCode'

const languageDetector = {
    init: Function.prototype,
    type: 'languageDetector',
    async: true,
    detect: async callback => {
        const savedDataJSON = await AsyncStorage.getItem(STORAGE_KEY)
        const lng = savedDataJSON ? savedDataJSON : null
        const selectLanguage = lng || locale
        __DEV__ && console.log('detect - selectLanguage', selectLanguage)
        callback(selectLanguage)
    },
    cacheUserLanguage: lng => {},
}

i18n.use(languageDetector)
    .use(initReactI18next)
    .init(
        {
            resources: { en, ar },

            fallbackLng: 'en',
            ns: ['common'],
            defaultNS: 'common',

            debug: __DEV__,

            keySeparator: false, // we do not use keys in form messages.welcome

            interpolation: {
                escapeValue: false, // react already safes from xss
            },
            react: {
                bindI18n: 'languageChanged',
                bindI18nStore: '',
                useSuspense: false,
            },
        },
        (err, t) => {
            if (err && __DEV__)
                return console.log('something went wrong loading', err)
        },
    )

export default i18n
