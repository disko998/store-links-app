import React from 'react'
import { View } from 'react-native'

import { Header, Map } from '../../components'
import { Colors } from '../../styles'

export default function StoreLocation({ navigation, route }) {
    const { store } = route.params

    return (
        <View>
            <Map locations={store.locations} store={store} />
            <Header onBack={navigation.goBack} bg={Colors.mainBlue} absolute />
        </View>
    )
}
