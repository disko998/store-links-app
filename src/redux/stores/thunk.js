import AsyncStorage from '@react-native-community/async-storage'

import {
    fetchStoresStart,
    fetchStoresSuccess,
    setFavoriteStores,
} from './actions'
import { getCollectionDocs } from '../../firebase/utils'

export const fetchStoresAsync = () => {
    return async (dispatch, getState) => {
        try {
            dispatch(fetchStoresStart())

            const stores = await getCollectionDocs('stores')

            dispatch(fetchStoresSuccess(stores))
        } catch (error) {
            dispatch(fetchStoresSuccess(error.message))
        }
    }
}

export const toggleFavoriteStoreAsync = store => {
    return async (dispatch, getState) => {
        try {
            const favorites = JSON.parse(
                await AsyncStorage.getItem('favorite_stores'),
            )

            if (favorites) {
                const index = favorites.indexOf(store.id)

                index !== -1
                    ? favorites.splice(index, 1)
                    : favorites.push(store.id)
            }

            await AsyncStorage.setItem(
                'favorite_stores',
                JSON.stringify(favorites),
            )

            dispatch(setFavoriteStores(favorites))
        } catch (error) {
            console.log(error)
        }
    }
}

export const getFavoriteStoresAsync = () => {
    return async (dispatch, getState) => {
        try {
            const favorites = JSON.parse(
                await AsyncStorage.getItem('favorite_stores'),
            )

            dispatch(setFavoriteStores(favorites || []))
        } catch (error) {
            console.log(error)
        }
    }
}
