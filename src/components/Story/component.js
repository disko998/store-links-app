import React from 'react'

import {
    BorderButton,
    StoryImage,
    PlusIcon,
    AddText,
    StoryWrapper,
} from './styles'

export default function Story({ image, onPress }) {
    return (
        <StoryWrapper>
            <BorderButton onPress={onPress} image={image}>
                {image ? (
                    <StoryImage source={image} />
                ) : (
                    <PlusIcon name="plus" size={30} />
                )}
            </BorderButton>
            {!image && <AddText>Add</AddText>}
        </StoryWrapper>
    )
}
