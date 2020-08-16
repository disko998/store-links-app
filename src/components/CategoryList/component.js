import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Category } from '../Category'
import { HorizontalScroll, CategoryWrapper } from './styles'
import { setCategory, selectCategory } from '../../redux/stores'

export default function CategoryList({ categories }) {
    const currentCategory = useSelector(selectCategory)
    const dispatch = useDispatch()

    return (
        <HorizontalScroll horizontal showsHorizontalScrollIndicator={false}>
            {categories.map(({ title }) => (
                <CategoryWrapper key={title}>
                    <Category
                        title={title}
                        active={currentCategory === title ? true : false}
                        onPress={() => dispatch(setCategory(title))}
                    />
                </CategoryWrapper>
            ))}
        </HorizontalScroll>
    )
}
