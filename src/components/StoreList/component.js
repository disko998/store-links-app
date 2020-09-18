import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { ActivityIndicator } from 'react-native'

import { StoresList, EmptyWrapper, EmptyText, styles } from './styles'
import { StoreButton } from '../StoreButton'
import { CategoryList } from '../CategoryList'
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
        <>
            <CategoryList />
            <StoresList
                showsVerticalScrollIndicator={false}
                data={stores}
                numColumns={2}
                renderItem={({ item }) => (
                    <StoreButton
                        key={item.id}
                        image={{ uri: item.image }}
                        logo={{ uri: item.logo }}
                        storeName={item.name}
                        unique={item.unique}
                        favorite={favorites.includes(item.id)}
                        onPress={() => goToStore(item)}
                        onLongPress={() => toggleFavorite(item)}
                    />
                )}
            />
        </>
    )
}
