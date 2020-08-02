import React from 'react'

import {
    HeaderWrapper,
    Title,
    BookmarkIcon,
    BackIcon,
    HeaderButton,
} from './styles'

export default function Header({ title, onBack, onFavorite, bg, ...props }) {
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
                    <BookmarkIcon size={20} name="bookmark" />
                </HeaderButton>
            )}
        </HeaderWrapper>
    )
}
