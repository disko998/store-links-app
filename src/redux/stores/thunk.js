import AsyncStorage from '@react-native-community/async-storage'

import {
    fetchStoresStart,
    fetchStoresSuccess,
    setFavoriteStores,
    submitStoreStart,
    toggleModal,
    submitStoreFailure,
} from './actions'
import { getCollectionDocs, addDoc } from '../../firebase/utils'

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
            const json = await AsyncStorage.getItem('favorite_stores')

            const favorites = json ? JSON.parse(json) : []

            const index = favorites.indexOf(store.id)

            index !== -1 ? favorites.splice(index, 1) : favorites.push(store.id)

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

export const submitNewStoreAsync = newStore => {
    return async (dispatch, getState) => {
        try {
            dispatch(submitStoreStart())
            __DEV__ && console.log(newStore)

            //TODO: get logo url form firebase

            // add new store request to firebase
            await addDoc('requests', newStore)

            dispatch(toggleModal())
        } catch (error) {
            dispatch(submitStoreFailure(error.message))
            __DEV__ && console.log(error)
            alert('Submit store failed')
        }
    }
}
