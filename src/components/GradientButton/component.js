import React from 'react'
import { View } from 'react-native'

import { StyledTouchable, Title, Gradient, Shadow } from './styles'

export default function GradientButton({ title, disabled, colors, ...props }) {
    return (
        <StyledTouchable {...props} disabled={disabled}>
            <Gradient colors={colors} useAngle={true} angle={45}>
                <Title disabled={disabled}>{title}</Title>
            </Gradient>
        </StyledTouchable>
    )
}
