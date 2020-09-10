import React from 'react'
import { SafeAreaView } from 'react-native'

import { categories } from './_data'
import {
    StoryList,
    CategoryList,
    AdsBanner,
    SearchBar,
    StoreList,
} from '../../components'
import { MainWrapper } from './styles'

export default function MainScreen({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <MainWrapper>
                <SearchBar onSettings={navigation.openDrawer} />
                <AdsBanner />
                <StoryList />
                <CategoryList categories={categories} />
                <StoreList />
            </MainWrapper>
        </SafeAreaView>
    )
}

const styles = {
    container: { flex: 1, backgroundColor: '#fff' },
}
