import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Category } from '../Category'
import { HorizontalScroll, CategoryWrapper } from './styles'
import {
    fetchStoresAsync,
    selectCurrentCategory,
    selectCategories,
} from '../../redux/stores'

export default function CategoryList() {
    const currentCategory = useSelector(selectCurrentCategory)
    const categories = useSelector(selectCategories)
    const dispatch = useDispatch()

    return (
        <HorizontalScroll horizontal showsHorizontalScrollIndicator={false}>
            <CategoryWrapper>
                <Category
                    icon="bookmark"
                    title="My list"
                    active={currentCategory === 'my list'}
                    onPress={() => dispatch(fetchStoresAsync())}
                />
            </CategoryWrapper>

            {categories.map(({ title, icon }) => (
                <CategoryWrapper key={title}>
                    <Category
                        icon={icon}
                        title={title}
                        active={currentCategory === title ? true : false}
                        onPress={() => dispatch(fetchStoresAsync(title))}
                    />
                </CategoryWrapper>
            ))}
        </HorizontalScroll>
    )
}
