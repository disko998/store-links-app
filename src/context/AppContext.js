import React, { Component, createContext } from 'react'
import { Text, View } from 'react-native'
import firestore from '@react-native-firebase/firestore'

import { stores } from '../screens/main/_data'

export const AppContext = createContext()
export const Provider = AppContext.Provider

export default class AppProvider extends Component {
    state = {
        stores: stores,
    }

    async fetchStores() {
        const usersCollection = firestore().collection('Users')
        console.log(usersCollection)
    }

    render() {
        const { state, fetchStores } = this

        return (
            <Provider value={{ state, actions: { fetchStores } }}>
                {this.props.children}
            </Provider>
        )
    }
}
