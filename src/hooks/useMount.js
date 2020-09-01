import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import {
    fetchCategoriesAsync,
    fetchStoresAsync,
    getFavoriteStoresAsync,
} from '../redux/stores/thunk'
import { fetchStoriesAsync } from '../redux/story'
import { fetchCountriesAsync, getCountryAsync } from '../redux/settings'

export const useMount = () => {
    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch()

    useEffect(() => {
        // initial actions
        dispatch(fetchStoresAsync())
        dispatch(fetchStoriesAsync())
        dispatch(fetchCategoriesAsync())
        dispatch(getFavoriteStoresAsync())
        dispatch(fetchCountriesAsync())
        dispatch(getCountryAsync())
    }, [dispatch])

    return loading
}
