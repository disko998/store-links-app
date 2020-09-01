import AsyncStorage from '@react-native-community/async-storage'

import {
    fetchStoresStart,
    fetchStoresSuccess,
    setFavoriteStores,
    submitStoreStart,
    toggleModal,
    submitStoreFailure,
    fetchCategoriesStart,
    fetchCategoriesSuccess,
    fetchCategoriesFailure,
    fetchStoresFailure,
} from './actions'
import {
    getCollectionDocs,
    addDoc,
    getDataFromSnapshot,
} from '../../firebase/utils'
import { db } from '../../firebase'

export const fetchStoresAsync = category => {
    return async (dispatch, getState) => {
        try {
            dispatch(fetchStoresStart(category))

            let ref

            if (category) {
                ref = db
                    .collection('stores')
                    .where('categories', 'array-contains', category)
                    .limit(20)
            } else {
                ref = db.collection('stores').orderBy('name', 'asc').limit(20)
            }

            const snapshot = await ref.get()

            const stores = getDataFromSnapshot(snapshot)

            dispatch(fetchStoresSuccess(stores))
        } catch (error) {
            dispatch(fetchStoresFailure(error.message))
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

export const fetchCategoriesAsync = () => {
    return async (dispatch, getState) => {
        try {
            dispatch(fetchCategoriesStart())

            const categories = await getCollectionDocs('categories')

            dispatch(fetchCategoriesSuccess(categories))
        } catch (error) {
            dispatch(fetchCategoriesFailure(error.message))
        }
    }
}

export const filterStores = name => {
    return async (dispatch, getState) => {
        try {
            const snapshot = await db
                .collection('stores')
                .where('name', '==', name)
                .get()

            const stores = getDataFromSnapshot(snapshot)

            dispatch(fetchStoresSuccess(stores))
        } catch (error) {
            dispatch(fetchStoresFailure(error.message))
        }
    }
}
