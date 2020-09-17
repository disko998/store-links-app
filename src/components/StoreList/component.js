import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { ActivityIndicator } from 'react-native'

import { ListWrapper, EmptyWrapper, EmptyText } from './styles'
import { StoreButton } from '../StoreButton'
import routes from '../../navigation/routes'
import {
    selectStores,
    selectFavorites,
    selectStoresLoading,
    toggleFavoriteStoreAsync,
} from '../../redux/stores'
import { Colors } from '../../styles'

export default function StoreList() {
    // hooks
    const loading = useSelector(selectStoresLoading)
    const stores = useSelector(selectStores)
    const favorites = useSelector(selectFavorites)

    const dispatch = useDispatch()
    const navigation = useNavigation()

    // handlers
    const goToStore = React.useCallback(
        store => navigation.navigate(routes.STORE, JSON.stringify(store)),
        [navigation],
    )

    const toggleFavorite = React.useCallback(
        store => {
            dispatch(toggleFavoriteStoreAsync(store))
        },
        [dispatch],
    )

    // render
    if (loading) {
        return (
            <EmptyWrapper>
                <ActivityIndicator color={Colors.black} size="large" />
            </EmptyWrapper>
        )
    }

    if (!stores.length) {
        return (
            <EmptyWrapper>
                <EmptyText>No stores found!</EmptyText>
            </EmptyWrapper>
        )
    }

    return (
        <ListWrapper>
            {stores.map(store => (
                <StoreButton
                    key={store.id}
                    image={{ uri: store.logo }}
                    unique={store.unique}
                    favorite={favorites.includes(store.id)}
                    onPress={() => goToStore(store)}
                    onLongPress={() => toggleFavorite(store)}
                />
            ))}
        </ListWrapper>
    )
}
