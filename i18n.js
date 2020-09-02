import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import locale from 'react-native-locale-detector'

import ar from './i18n/ar.json'
import en from './i18n/en.json'

const STORAGE_KEY = '@APP:languageCode'

i18n.use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources: { en, ar },
        lng: 'en',

        fallbackLng: 'en',
        ns: ['common'],
        defaultNS: 'common',

        debug: true,

        keySeparator: false, // we do not use keys in form messages.welcome

        interpolation: {
            escapeValue: false, // react already safes from xss
        },
    })

export default i18n
