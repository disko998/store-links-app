import React from 'react'

import { Category } from '../Category'
import { HorizontalScroll, Wrapper } from './styles'

export default function CategoryList({ categories }) {
    return (
        <HorizontalScroll horizontal>
            {categories.map(({ title, favorite, active }) => (
                <Category
                    title={title}
                    favorite={favorite}
                    active={active}
                    onPress={() => {}}
                />
            ))}
        </HorizontalScroll>
    )
}
