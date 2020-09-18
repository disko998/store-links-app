import React from 'react'

import { BookmarkIcon, UniqueWrapper } from './styles'
import { UniqueMark as UniqueIcon } from '../../assets/images'

export const FavoriteMark = ({ show, size = 40, children }) => {
    return (
        <>
            {children}
            {show && <BookmarkIcon size={size} name="bookmark" />}
        </>
    )
}

export const UniqueMark = ({ show, size = 40, children, onPress }) => {
    return (
        <>
            {children}
            {show && (
                <UniqueWrapper onPress={onPress}>
                    <UniqueIcon />
                </UniqueWrapper>
            )}
        </>
    )
}
