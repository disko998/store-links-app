import React from 'react'

import { MainWrapper } from './styles'
import { StoryBar, AdsBanner, SearchBar, StoreList } from '../../components'

export default function MainScreen() {
    return (
        <MainWrapper>
            <SearchBar />
            <AdsBanner />
            <StoryBar />
            <StoreList />
        </MainWrapper>
    )
}
