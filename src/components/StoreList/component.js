import React from 'react'

import { ListWrapper, StoryWrapper } from './styles'
import { StoreButton } from '../StoreButton'

export default function StoryList({ stores }) {
    return (
        <ListWrapper>
            {stores.map(({ image }) => (
                <StoreButton image={{ uri: image }} onPress={() => {}} />
            ))}
        </ListWrapper>
    )
}
