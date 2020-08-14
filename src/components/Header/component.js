import React from 'react'

import { Colors } from '../../styles/colors'
import {
    HeaderWrapper,
    Title,
    BookmarkIcon,
    BackIcon,
    HeaderButton,
} from './styles'

export default function Header({
    title,
    onBack,
    onFavorite,
    bg,
    isFavorite,
    ...props
}) {
    return (
        <HeaderWrapper bg={bg} {...props}>
            {onBack && (
                <HeaderButton onPress={onBack}>
                    <BackIcon size={20} name="arrowdown" />
                </HeaderButton>
            )}
            {title && <Title>{title}</Title>}
            {onFavorite && (
                <HeaderButton onPress={onFavorite}>
                    <BookmarkIcon
                        size={20}
                        name="bookmark"
                        color={isFavorite ? Colors.orange : Colors.white}
                    />
                </HeaderButton>
            )}
        </HeaderWrapper>
    )
}
