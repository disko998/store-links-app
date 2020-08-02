import React from 'react'

import { StyledTouchable, Title } from './styles'

export default function PrimaryButton({ title, disabled, ...props }) {
    return (
        <StyledTouchable {...props} disabled={disabled}>
            <Title disabled={disabled}>{title}</Title>
        </StyledTouchable>
    )
}
