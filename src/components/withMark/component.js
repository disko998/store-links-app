import React from 'react'

import { BookmarkIcon, UniqueIcon } from './styles'

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
            {show && <UniqueIcon size={size} name="star" />}
        </>
    )
}
