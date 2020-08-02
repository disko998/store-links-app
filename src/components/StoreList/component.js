import React from 'react'

import { ListWrapper, StoryWrapper } from './styles'
import { StoreButton } from '../StoreButton'

export default function StoreList({ stores, onItemPress }) {
    return (
        <ListWrapper>
            {stores.map(({ image }) => (
                <StoreButton
                    key={image}
                    image={{ uri: image }}
                    onPress={onItemPress}
                />
            ))}
        </ListWrapper>
    )
}
