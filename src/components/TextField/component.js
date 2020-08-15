import React from 'react'

import { StyledTextInput, ErrorMessage, InputWrapper } from './styles'
import { Colors } from '../../styles/colors'

export default function TextField({ error, ...props }) {
    return (
        <>
            {error && <ErrorMessage>{error}</ErrorMessage>}
            <InputWrapper>
                <StyledTextInput
                    placeholderTextColor={Colors.gray}
                    {...props}
                />
            </InputWrapper>
        </>
    )
}
