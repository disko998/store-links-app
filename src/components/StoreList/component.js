import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { ActivityIndicator } from 'react-native'

import { ListWrapper, LoadingWrapper, EmptyText } from './styles'
import { StoreButton } from '../StoreButton'
import routes from '../../navigation/routes'
import {
    selectStores,
    selectFavorites,
    selectStoresLoading,
    selectFilter,
    toggleFavoriteStoreAsync,
} from '../../redux/stores'
import { Colors } from '../../styles'

export default function StoreList() {
    // hooks
    const loading = useSelector(selectStoresLoading)
    const stores = useSelector(selectStores)
    const favorites = useSelector(selectFavorites)
    const filter = useSelector(selectFilter)

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

    const match = React.useCallback(
        store => {
            return store.name.toLowerCase().indexOf(filter.toLowerCase()) !== -1
        },
        [filter],
    )

    if (loading) {
        return (
            <LoadingWrapper>
                <ActivityIndicator color={Colors.black} size="large" />
            </LoadingWrapper>
        )
    }

    if (!stores.length) {
        return (
            <LoadingWrapper>
                <EmptyText>No stores!</EmptyText>
            </LoadingWrapper>
        )
    }

    return (
        <ListWrapper>
            {stores.filter(match).map(store => (
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
