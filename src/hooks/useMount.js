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

export const useMount = () => {
    const dispatch = useDispatch()
    const { i18n } = useTranslation()

    useEffect(() => {
        // initial actions
        dispatch(fetchStoresAsync())
        dispatch(fetchStoriesAsync())
        dispatch(fetchCategoriesAsync())
        dispatch(getFavoriteStoresAsync())
        dispatch(fetchCountriesAsync())
        dispatch(getCountryAsync())
    }, [dispatch])

    return i18n.isInitialized
}
