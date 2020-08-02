import React from 'react'

import { Wrapper, StyledTextInput } from './styles'
import { Colors } from '../../styles/colors'

export default function TextField({ ...props }) {
    return (
        <Wrapper>
            <StyledTextInput placeholderTextColor={Colors.gray} {...props} />
        </Wrapper>
    )
}
