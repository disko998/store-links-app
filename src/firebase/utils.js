import { db } from './index'
import AsyncStorage from '@react-native-community/async-storage'
import _ from 'lodash'

export const addDoc = (collection, doc) => {
    return db.collection(collection).add(doc)
}

export const seedCollection = (collection, data) => {
    data.map(doc => {
        addDoc(collection, doc).then(() => {
            console.log(`document added to ${collection}!`)
        })
    })
}

export const getCollectionDocs = async collection => {
    const querySnapshot = await db.collection(collection).get()

    let data = []
    querySnapshot.forEach(function (doc) {
        // __DEV__ && console.log(doc.id, ' => ', doc.data())
        data = [...data, { id: doc.id, ...doc.data() }]
    })

    return data
}

export const getDataFromSnapshot = querySnapshot => {
    let data = []
    querySnapshot.forEach(function (doc) {
        data = [...data, { id: doc.id, ...doc.data() }]
    })

    return data
}

export const fetchMyList = async () => {
    const favorite_stores = JSON.parse(
        await AsyncStorage.getItem('favorite_stores'),
    )

    const storesRef = db.collection('stores')
    let userStores = []

    if (favorite_stores && favorite_stores.length) {
        const docs = await Promise.all(
            favorite_stores.map(id => storesRef.doc(id).get()),
        )

        userStores = docs.map(doc => {
            if (doc.exists) {
                return { ...doc.data(), id: doc.id }
            }
        })
    }

    // fetch pinned stores
    const pinnedSnapshot = await storesRef.where('pinned', '==', true).get()
    const pinned = getDataFromSnapshot(pinnedSnapshot)

    const myStores = _.uniqBy([...userStores, ...pinned], 'id')

    return myStores
}
