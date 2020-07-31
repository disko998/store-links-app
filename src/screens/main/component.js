import React from 'react'
import { View, Text, ScrollView } from 'react-native'

import { stories, categories } from './_data'
import { StoryList, CategoryList } from '../../components'
import { MainWrapper } from './styles'

export default function MainScreen() {
    return (
        <MainWrapper>
            <StoryList stories={stories} />
            <CategoryList categories={categories} />
            <ScrollView style={{ flex: 1, backgroundColor: '#f1f1f1' }} />
        </MainWrapper>
    )
}
