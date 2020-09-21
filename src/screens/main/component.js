import React from 'react'
import { Animated } from 'react-native'

import { MainWrapper, AnimatedHeader } from './styles'
import { StoryBar, AdsBanner, SearchBar, StoreList } from '../../components'

export default function MainScreen() {
    const [headerHeight, setHeaderHeight] = React.useState(0)
    const scrollY = new Animated.Value(0)

    const translateY = scrollY.interpolate({
        inputRange: [0, headerHeight],
        outputRange: [0, -headerHeight],
        extrapolate: 'clamp',
    })

    const animatedOpacity = scrollY.interpolate({
        inputRange: [0, headerHeight],
        outputRange: [1, 0],
    })

    return (
        <MainWrapper>
            <StoreList
                contentContainerStyle={{
                    paddingTop: headerHeight,
                }}
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { y: scrollY } } }],
                    { useNativeDriver: true },
                )}
            />

            <AnimatedHeader
                onLayout={event =>
                    setHeaderHeight(event.nativeEvent.layout.height)
                }
                style={{
                    opacity: animatedOpacity,
                    transform: [{ translateY }],
                }}>
                <SearchBar />
                <AdsBanner />
                <StoryBar />
            </AnimatedHeader>
        </MainWrapper>
    )
}
