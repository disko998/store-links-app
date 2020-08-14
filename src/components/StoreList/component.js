import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useSelector, useDispatch } from 'react-redux'

import { ListWrapper } from './styles'
import { StoreButton } from '../StoreButton'
import routes from '../../navigation/routes'
import {
    fetchStoresAsync,
    selectStores,
    selectFavorites,
} from '../../redux/stores'

export default function StoreList() {
    // hooks
    const stores = useSelector(selectStores)
    const favorites = useSelector(selectFavorites)
    const dispatch = useDispatch()
    const navigation = useNavigation()

    useEffect(() => {
        dispatch(fetchStoresAsync())
    }, [dispatch])

    // handlers
    const onStorePress = React.useCallback(
        store => navigation.navigate(routes.STORE, JSON.stringify(store)),
        [navigation],
    )

    return (
        <ListWrapper>
            {stores.map(store => (
                <StoreButton
                    key={store.id}
                    image={{ uri: store.logo }}
                    unique={store.unique}
                    favorite={favorites.includes(store.id)}
                    onPress={() => onStorePress(store)}
                />
            ))}
        </ListWrapper>
    )
}
