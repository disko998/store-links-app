import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { ActivityIndicator, Animated } from 'react-native'

import { StoresList, EmptyWrapper, EmptyText } from './styles'
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
import { FlatList } from 'react-native-gesture-handler'

const AnimatedFlatList = Animated.createAnimatedComponent(StoresList)

export default function StoreList({ ...scrollProps }) {
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
        <AnimatedFlatList
            {...scrollProps}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={<CategoryList />}
            stickyHeaderIndices={[0]}
            data={stores}
            numColumns={2}
            keyExtractor={item => item.id}
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
    )
}
