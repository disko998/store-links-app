import React, { Component, createContext } from 'react'
import { Text, View } from 'react-native'

import { stores, seed } from '../screens/main/_data'
import { seedCollection, getCollectionDocs } from '../firebase/utils'

export const AppContext = createContext()
export const Provider = AppContext.Provider

export default class AppProvider extends Component {
    state = {
        stores: stores,
    }

    componentDidMount() {
        /********* Seed mock data **********/
        // seedCollection('stores', seed)
    }

    fetchStores = async () => {
        const stores = await getCollectionDocs('stores')

        this.setState({ ...this.state, stores })
    }

    render() {
        const { state, fetchStores } = this

        __DEV__ && console.log(state)

        return (
            <Provider value={{ state, actions: { fetchStores } }}>
                {this.props.children}
            </Provider>
        )
    }
}
