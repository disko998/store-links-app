import { db } from './index'

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
