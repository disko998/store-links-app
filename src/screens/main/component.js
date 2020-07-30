import React from 'react'
import { View, Text, ScrollView } from 'react-native'

import { StoryList, Category, CategoryList } from '../../components'
import { stories } from './_data'
import { MainWrapper } from './styles'

export default function MainScreen() {
    return (
        <MainWrapper>
            <StoryList stories={stories} />
            <CategoryList
                categories={[{ title: 'test', active: true, favorite: false }]}
            />
            <ScrollView style={{ flex: 1 }} />
        </MainWrapper>
    )
}
