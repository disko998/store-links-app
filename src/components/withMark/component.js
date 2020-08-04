import React from 'react'

import { BookmarkIcon, UniqueWrapper } from './styles'
import { UniqueMark as UniqueIcon } from '../../assets/images'

export const FavoriteMark = ({ show, size = 30, children }) => {
    return (
        <>
            {children}
            {show && <BookmarkIcon size={size} name="bookmark" />}
        </>
    )
}

export const UniqueMark = ({ show, size = 30, children }) => {
    return (
        <>
            {children}
            {show && (
                <UniqueWrapper>
                    <UniqueIcon />
                </UniqueWrapper>
            )}
        </>
    )
}
