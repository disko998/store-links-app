import React from 'react'

import { ListWrapper } from './styles'
import { StoreButton } from '../StoreButton'

export default function StoreList({ stores, onItemPress }) {
    return (
        <ListWrapper>
            {stores.map(store => (
                <StoreButton
                    key={store.id}
                    image={{ uri: store.logo }}
                    unique={store.unique}
                    favorite={store.favorite}
                    onPress={() => onItemPress(store)}
                />
            ))}
        </ListWrapper>
    )
}
