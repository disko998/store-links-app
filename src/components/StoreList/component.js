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
import { Colors, STORE_BUTTON_HEIGHT } from '../../styles'

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

    return (
        <AnimatedFlatList
            {...scrollProps}
            refreshing={loading}
            showsVerticalScrollIndicator={false}
            stickyHeaderIndices={[0]}
            data={stores}
            numColumns={2}
            keyExtractor={item => item.id}
            ListHeaderComponent={<CategoryList />}
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
            ListEmptyComponent={
                <EmptyWrapper>
                    {!loading && <EmptyText>No stores found!</EmptyText>}
                </EmptyWrapper>
            }
            ListFooterComponent={
                loading && (
                    <ActivityIndicator color={Colors.black} size="large" />
                )
            }
            getItemLayout={(data, index) => ({
                length: STORE_BUTTON_HEIGHT + 10,
                offset: STORE_BUTTON_HEIGHT + 10 * index,
                index,
            })}
        />
    )
}
