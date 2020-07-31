import React from 'react'
import { View, Text, ScrollView } from 'react-native'

import { stories, categories } from './_data'
import { StoryList, CategoryList, AdsBanner } from '../../components'
import { MainWrapper } from './styles'

export default function MainScreen() {
    return (
        <MainWrapper>
            <AdsBanner
                src={{
                    uri:
                        'https://cdn.mos.cms.futurecdn.net/2nUGsD2QnvC9BzM8geN48M-1200-80.jpg',
                }}
                onPress={() => {}}
            />
            <StoryList stories={stories} />
            <CategoryList categories={categories} />
        </MainWrapper>
    )
}
