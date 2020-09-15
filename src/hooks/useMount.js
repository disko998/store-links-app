import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'
import inAppMessaging from '@react-native-firebase/in-app-messaging'
import SplashScreen from 'react-native-splash-screen'

import {
    fetchCategoriesAsync,
    fetchStoresAsync,
    getFavoriteStoresAsync,
} from '../redux/stores/thunk'
import { fetchStoriesAsync } from '../redux/story'
import { fetchCountriesAsync, getCountryAsync } from '../redux/settings'
import { signInAnonymouslyAsync, unsubscribeUser } from '../redux/users'

export const useMount = () => {
    const dispatch = useDispatch()
    const { i18n } = useTranslation()

    useEffect(() => {
        // initial actions
        dispatch(signInAnonymouslyAsync())
        dispatch(fetchStoresAsync())
        dispatch(fetchStoriesAsync())
        dispatch(fetchCategoriesAsync())
        dispatch(getFavoriteStoresAsync())
        dispatch(fetchCountriesAsync())
        dispatch(getCountryAsync())

        return unsubscribeUser
    }, [dispatch])

    useEffect(() => {
        if (i18n.isInitialized) {
            SplashScreen.hide()
            inAppMessaging().setMessagesDisplaySuppressed(false)
        } else {
            inAppMessaging().setMessagesDisplaySuppressed(true)
        }
    }, [i18n.isInitialized])

    return i18n.isInitialized
}
