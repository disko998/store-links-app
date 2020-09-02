import React from 'react'
import { useTranslation } from 'react-i18next'

import {
    BorderButton,
    StoryImage,
    PlusIcon,
    AddText,
    StoryWrapper,
} from './styles'

export default function Story({ image, onPress }) {
    const { t } = useTranslation()

    return (
        <StoryWrapper>
            <BorderButton onPress={onPress} image={image}>
                {image ? (
                    <StoryImage source={image} />
                ) : (
                    <PlusIcon name="plus" size={30} />
                )}
            </BorderButton>
            {!image && <AddText>{t('add')}</AddText>}
        </StoryWrapper>
    )
}
