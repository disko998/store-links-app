import React from 'react'

import { StyledTouchable, StoreLogo } from './styles'
import { FavoriteMark, UniqueMark } from '../withMark'

export default function StoreButton({ onPress, favorite, unique, image }) {
    return (
        <StyledTouchable onPress={onPress}>
            <FavoriteMark show={favorite}>
                <UniqueMark show={unique} onPress={() => {}}>
                    <StoreLogo source={image} />
                </UniqueMark>
            </FavoriteMark>
        </StyledTouchable>
    )
}
