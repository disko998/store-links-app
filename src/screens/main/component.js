import React from 'react'

import { stories, categories } from './_data'
import { StoryList, CategoryList, AdsBanner } from '../../components'
import { MainWrapper } from './styles'

const adsImage = {
    uri: 'https://cdn.mos.cms.futurecdn.net/2nUGsD2QnvC9BzM8geN48M-1200-80.jpg',
}

export default function MainScreen() {
    return (
        <MainWrapper>
            <AdsBanner src={adsImage} onPress={() => {}} />
            <StoryList stories={stories} />
            <CategoryList categories={categories} />
        </MainWrapper>
    )
}
