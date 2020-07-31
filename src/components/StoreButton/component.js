import React from 'react'

import { StyledTouchable, StoreLogo } from './styles'

export default function StoreButton({ onPress, image }) {
    return (
        <StyledTouchable onPress={onPress}>
            <StoreLogo source={image} />
        </StyledTouchable>
    )
}
