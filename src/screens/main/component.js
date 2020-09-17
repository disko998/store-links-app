import React from 'react'

import { MainWrapper } from './styles'
import {
    StoryBar,
    CategoryList,
    AdsBanner,
    SearchBar,
    StoreList,
} from '../../components'

export default function MainScreen() {
    return (
        <MainWrapper>
            <SearchBar />
            <AdsBanner />
            <StoryBar />
            {/* <CategoryList /> */}
            <StoreList />
        </MainWrapper>
    )
}
