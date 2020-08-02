import React from 'react'

import { StyledTouchable, Logo, Title, Wrapper } from './styles'

export default function ActionButton({ onPress, logo, title }) {
    return (
        <Wrapper>
            <StyledTouchable onPress={onPress}>
                <Logo name={logo} size={50} />
            </StyledTouchable>
            {title && <Title>{title}</Title>}
        </Wrapper>
    )
}
