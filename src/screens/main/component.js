import React from 'react'
import {
    View,
    ScrollView,
    Text,
    FlatList,
    Platform,
    Animated,
} from 'react-native'

import { MainWrapper, AnimatedHeader, ListWrapper } from './styles'
import {
    StoryBar,
    AdsBanner,
    SearchBar,
    StoreList,
    CategoryList,
} from '../../components'

import { windowHeight, windowWidth } from '../../styles'

const HEADER_MAX_HEIGHT = 330

export default function MainScreen() {
    const scrollY = new Animated.Value(0)

    const animatedHeight = scrollY.interpolate({
        inputRange: [0, HEADER_MAX_HEIGHT],
        outputRange: [0, -HEADER_MAX_HEIGHT],
        extrapolate: 'clamp',
    })

    const animatedOpacity = scrollY.interpolate({
        inputRange: [0, HEADER_MAX_HEIGHT],
        outputRange: [1, 0],
    })

    return (
        <MainWrapper>
            <StoreList
                contentContainerStyle={{
                    paddingTop: HEADER_MAX_HEIGHT,
                }}
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { y: scrollY } } }],
                    { useNativeDriver: true },
                )}
            />

            <AnimatedHeader
                style={{
                    height: HEADER_MAX_HEIGHT,
                    opacity: animatedOpacity,
                    transform: [{ translateY: animatedHeight }],
                }}>
                <SearchBar />
                <AdsBanner />
                <StoryBar />
            </AnimatedHeader>
        </MainWrapper>
    )
}
