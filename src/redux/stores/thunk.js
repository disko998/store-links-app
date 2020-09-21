import AsyncStorage from '@react-native-community/async-storage'

import { db, fbAnalytics, fileStorage } from '../../firebase'
import {
    fetchStoresStart,
    fetchStoresSuccess,
    setFavoriteStores,
    submitStoreStart,
    toggleModal,
    fetchCategoriesStart,
    fetchCategoriesSuccess,
    fetchCategoriesFailure,
    fetchStoresFailure,
} from './actions'
import {
    getCollectionDocs,
    addDoc,
    getDataFromSnapshot,
    fetchMyList,
} from '../../firebase/utils'
import { STORES_LIMIT } from './const'

export const fetchStoresAsync = category => {
    return async (dispatch, getState) => {
        try {
            dispatch(fetchStoresStart(category))
            const country = await AsyncStorage.getItem('@country')

            let stores = []

            if (category) {
                let query

                if (country) {
                    query = db
                        .collection('stores')
                        .where('categories', 'array-contains', category)
                        .where('hidden', '==', false)
                        .where('country', '==', country)
                        .limit(STORES_LIMIT)
                } else {
                    query = db
                        .collection('stores')
                        .where('categories', 'array-contains', category)
                        .where('hidden', '==', false)
                        .limit(STORES_LIMIT)
                }

                const snapshot = await query.get()

                stores = getDataFromSnapshot(snapshot)
            } else {
                stores = await fetchMyList(country)
            }

            dispatch(fetchStoresSuccess(stores || []))
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

            if (index !== -1) {
                fbAnalytics.logEvent('add_favorite', {
                    store_id: store.id,
                    store_name: store.name,
                })
            }

            dispatch(setFavoriteStores(favorites))

            const {
                store: { currentCategory },
            } = getState()

            dispatch(
                fetchStoresAsync(
                    currentCategory === 'my list' ? '' : currentCategory,
                ),
            )
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

            // get logo url form firebase
            let logo = ''
            if (newStore.isOwner) {
                const ref = fileStorage.ref(`uploads/${newStore.logo.fileName}`)
                const snapshot = await ref.putFile(newStore.logo.path)

                logo = await fileStorage
                    .ref(snapshot.metadata.fullPath)
                    .getDownloadURL()
            }

            // add new store request to firebase
            await addDoc('requests', {
                ...newStore,
                logo,
                createdAt: new Date().toISOString(),
            })

            dispatch(toggleModal())
        } catch (error) {
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
