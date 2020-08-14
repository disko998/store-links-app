import React from 'react'

import { stories, categories } from './_data'
import {
    StoryList,
    CategoryList,
    AdsBanner,
    SearchBar,
    StoreList,
} from '../../components'
import { MainWrapper } from './styles'
import routes from '../../navigation/routes'

const adsImage = {
    uri: 'https://cdn.mos.cms.futurecdn.net/2nUGsD2QnvC9BzM8geN48M-1200-80.jpg',
}

export default function MainScreen({ navigation }) {
    return (
        <MainWrapper>
            <SearchBar onSettings={navigation.openDrawer} />
            <AdsBanner src={adsImage} onPress={() => {}} />
            <StoryList />
            <CategoryList categories={categories} />
            <StoreList />
        </MainWrapper>
    )
}
