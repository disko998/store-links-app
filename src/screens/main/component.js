import React from 'react'

import { stories, categories, stores } from './_data'
import {
    StoryList,
    CategoryList,
    AdsBanner,
    SearchBar,
    StoreList,
} from '../../components'
import { MainWrapper } from './styles'

const adsImage = {
    uri: 'https://cdn.mos.cms.futurecdn.net/2nUGsD2QnvC9BzM8geN48M-1200-80.jpg',
}

export default function MainScreen() {
    return (
        <>
            <MainWrapper>
                <SearchBar />
                <AdsBanner src={adsImage} onPress={() => {}} />
                <StoryList stories={stories} />
                <CategoryList categories={categories} />
                <StoreList stores={stores} />
            </MainWrapper>
        </>
    )
}
