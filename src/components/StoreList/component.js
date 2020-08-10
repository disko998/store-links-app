import React from 'react'
import { useNavigation } from '@react-navigation/native'

import { ListWrapper } from './styles'
import { StoreButton } from '../StoreButton'
import { AppContext } from '../../context/AppContext'
import routes from '../../navigation/routes'

export default function StoreList() {
    // hooks
    const navigation = useNavigation()
    const {
        state: { stores },
        actions: { fetchStores },
    } = React.useContext(AppContext)

    React.useEffect(() => {
        fetchStores()
    }, [fetchStores])

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
                    favorite={store.favorite}
                    onPress={() => onStorePress(store)}
                />
            ))}
        </ListWrapper>
    )
}
