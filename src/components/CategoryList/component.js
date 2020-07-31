import React from 'react'

import { Category } from '../Category'
import { HorizontalScroll, CategoryWrapper } from './styles'

export default function CategoryList({ categories }) {
    return (
        <HorizontalScroll horizontal showsHorizontalScrollIndicator={false}>
            {categories.map(({ title, favorite, active }) => (
                <CategoryWrapper key={title}>
                    <Category
                        title={title}
                        favorite={favorite}
                        active={active}
                        onPress={() => {}}
                    />
                </CategoryWrapper>
            ))}
        </HorizontalScroll>
    )
}
