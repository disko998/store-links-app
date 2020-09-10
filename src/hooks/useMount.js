import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'

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

    return i18n.isInitialized
}
